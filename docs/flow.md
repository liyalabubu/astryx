# Flow type checking

Astryx runs [Flow](https://flow.org) as a **second, opt-in type checker layered
on top of TypeScript**. Flow does not replace `tsc` — the two run side by side.
This document explains how Flow reads our TypeScript sources, what works today,
what doesn't yet, and how the error baseline burns down over time.

## Why layer Flow on TypeScript?

Flow's syntax has [converged with TypeScript's](https://flow.org/en/docs/flow-vs-typescript/).
In practice that means Flow can parse the same `.ts`/`.tsx` files `tsc` compiles,
with **no file renames and no `@flow` pragmas**. Where the two diverge, Flow
keeps the safer default (e.g. it validates that a value/type-only import is used
correctly, and requires annotations at module boundaries). Running both gives us
a second opinion on our types without forking the source.

## How the interop actually works

Flow ignores `.ts`/`.tsx` files by default. **One** config knob turns Flow into
a checker for our TypeScript sources:

- **`module.file_ext`** — we add `.ts` and `.tsx` so Flow discovers and parses
  the TypeScript sources as Flow (their syntaxes have converged).

That's it. `.ts`/`.tsx` files are treated as **typed by default** once Flow
looks at them, so there is **no `@flow` pragma and no `all=true`** required.

> **Do not add `all=true`.** It is unnecessary for `.ts`/`.tsx` (they're already
> typed), and it would additionally pull in our ~1,180 untyped `.js`/`.mjs`
> build scripts and configs (none carry `@flow`), inflating the error count with
> files we never intend Flow to check. Omitting it is what keeps the reported
> numbers accurate to the actual `.ts`/`.tsx` surface — dropping it cut the
> baseline by ~3.2k.

Flow does **not** read `@types/*` packages or `.d.ts` files the way `tsc` does.
Its equivalents are:

| TypeScript mechanism                                 | Flow equivalent           | Where it lives                            |
| ---------------------------------------------------- | ------------------------- | ----------------------------------------- |
| `@types/*` / package `.d.ts` for third-party libs    | **libdefs**               | `flow-typed/*.js` (`declare module '…'`)  |
| First-party `.d.ts` shadowing a `.js` implementation | **declaration files**     | colocated `Foo.js.flow`                   |
| `tsc --declaration` (emit types)                     | **`flow-api-translator`** | build tooling (installed, not yet wired)  |
| `tsconfig` `paths` / project references              | **`module.name_mapper`**  | `.flowconfig`                             |
| `lib` (built-in DOM/Node globals)                    | **environment libdefs**   | `flow-typed/environments/*.js` (vendored) |

We check third-party modules Flow can't see (stylex, vitest, testing-library,
heroicons, next, …) with starter libdefs in [`flow-typed/`](../flow-typed).
`node_modules` ships only the built `dist/` for `@astryxdesign/*` workspace
packages (which Flow ignores), so `.flowconfig` uses `module.name_mapper` to
resolve those imports back to the TypeScript **source**.

> **Consuming `.d.ts` directly (experimental, not enabled).** Flow has an
> in-progress feature, `experimental.typescript_library_definition_support=true`,
> that lets it read real `.d.ts` files (including `@types/*`) instead of relying
> on hand-written libdefs. It is a **work in progress** and, importantly, it also
> **relaxes some safety checks for files whose paths end in `.ts`** (the feature
> is oriented around consuming `.d.ts` declaration files). We deliberately leave
> it **off** so that (a) our numbers reflect Flow's full strictness on real `.ts`
> _source_, and (b) we don't depend on WIP behavior. On this codebase, enabling
> it moved the total by <0.1% (our third-party surface already resolves via
> libdefs + `name_mapper`), so there's no reason to take on the WIP risk yet.

## DOM / Node globals: environment libdefs

`HTMLElement`, `document`, `window`, `process`, and friends used to be **compiled
into the Flow binary**. As of Flow **0.262** they are no longer bundled — Flow
now downloads them from the community [`flow-typed`](https://github.com/flow-typed/flow-typed)
repo. Two pieces wire this up:

- **`flow-typed.config.json`** — lists the environments to install. Astryx needs
  `node`, `dom`, **`html`** (the HTML element hierarchy lives here, _not_ in
  `dom`), `bom`, `cssom`, `geometry`, `intl`, `indexeddb`, `serviceworkers`,
  `web-animations`, `webassembly`, `streams`, and `jsx`.
- **`flow-typed/environments/*.js`** — the downloaded libdefs, **vendored into the
  repo** (they carry a `// flow-typed signature:` checksum header). Treat them
  like generated/lockfile content: don't hand-edit; refresh with
  `pnpm flow:install-libdefs`. `flow-typed/npm/*.js` are auto-discovered libdefs
  for a few dev dependencies and are vendored the same way.

These are **not hand-written** — they're Flow-lineage definitions maintained in
the flow-typed community repo. The only hand-authored libdefs are
`flow-typed/{stylex,testing,misc}.js`.

Installing them cut `cannot-resolve-name` from ~3.2k to ~130 (the remainder are
SVG element types and the deprecated `$PropertyType` utility). Note that adding
_real_ DOM types also surfaces downstream `incompatible-type` errors that were
previously masked while the globals were unresolved — see the burn-down notes.

## Syntax Flow can't parse

Almost all of Astryx is Flow-parseable. A few TypeScript-only constructs are not
and must be avoided (or confined to `.d.ts`, which Flow ignores):

- `namespace { … }` blocks — **parse error** (allowed only in ignored `.d.ts`).
- `const enum` and constructor **parameter properties** (`constructor(public x)`)
  — reported as `[unsupported-syntax]`.
- Non-null assertions (`x!`) — `[unsupported-syntax]` ([TS-only form][ts-only]).
  ~330 occurrences today; each can degrade its module's inferred types (see the
  cascade note below), so this is high-value to codemod to explicit narrowing.
- `import x = require('…')` / `export = x` — CommonJS-style bindings.

`type`, `interface`, generics, tuples, `keyof`, `as`, `as const`, `satisfies`,
`enum`, `abstract`, `private`/`public`/`protected`, and decorators all parse.

## Interop limitations (why the error count is what it is)

The current error total is dominated by a few **interop gaps and cascades**,
not by a broad set of independent bugs. Understanding them is the key to the
burn-down.

### 1. Namespace & default imports bind as types in `.ts`/`.tsx`

The single largest source of `type-as-value` errors — **not** a missing libdef:

> When Flow checks a `.ts`/`.tsx` file, a **namespace import**
> (`import * as React from 'react'`) or a **default import** binds as a _type_.
> Using it as a value — `React.useState(...)`, `stylex.create(...)` — then
> reports `[type-as-value]`.

**Named imports work** (`import {useState} from 'react'`); the same
`import * as` in a `.js` file also works — it is specific to Flow's handling of
the `.ts`/`.tsx` extension. Astryx imports both React and stylex as namespaces
pervasively, so this accounts for the bulk of `type-as-value`. Closing it needs
a namespace→named import codemod (or a Flow enhancement).

### 2. Exports must be annotated (`signature-verification-failure`)

Flow [requires annotations at module boundaries][annot-boundaries] — it extracts
a typed interface from each module's exports _without_ analyzing the body, so an
export whose type is only inferred (e.g. `export const x = defineVars({...})`)
errors. This is by design, not a bug. It also means fix #1 is a **two-parter**:
switching `import * as stylex` → `import {defineVars}` clears the in-module
`type-as-value`, but the export still needs an explicit annotation
(`export const spacingVars: {readonly [string]: string} = defineVars({...})`)
or consumers stay broken.

### 3. The cascade into `incompatible-type`

Adding real DOM types (the env libdefs) surfaced a large `incompatible-type`
bucket that is mostly a **downstream symptom**, not real bugs. The `jsx`
environment libdef types JSX via a `$JSXIntrinsics` map with a `[string]`
catch-all. When a component module's export type is degraded by #1 or a non-null
`!` (#syntax), Flow falls back to **DOM-intrinsic string-attribute typing** for
that component — so `<Section padding={6}>` reports "number incompatible with
string". Fixing #1 and the `!` assertions collapses much of `incompatible-type`
alongside `type-as-value`.

### Proven leverage

Applying #1 + #2 to a **single file** (`packages/core/src/theme/tokens.stylex.ts`,
imported everywhere) removed **~3,700 errors** — every `colorVars` / `spacingVars`
/ `typeScaleVars` / `radiusVars` `type-as-value` dropped to zero. The pattern is
mechanical and codemod-able.

### Burn-down order

1. **Non-null `!` → explicit narrowing** (~330 sites; stops type degradation).
2. **Namespace→named import + annotate the touched exports** (collapses
   `type-as-value` _and_ the downstream `incompatible-type` cascade).
3. **`$PropertyType<T,K>` → `T[K]` indexed access** — [removed in Flow 0.266][modern];
   plus a small SVG-element libdef (`SVGSVGElement`, … — not shipped in any
   flow-typed env) — clears the `cannot-resolve-name` tail.

[ts-only]: https://flow.org/en/docs/flow-vs-typescript/#toc-ts-only-syntax
[annot-boundaries]: https://flow.org/en/docs/flow-vs-typescript/#toc-annotations-boundaries
[modern]: https://flow.org/en/docs/modernizing-legacy-syntax/

## Running Flow

```bash
pnpm flow                 # full check (human-readable)
pnpm flow:baseline        # record the current error count in .flow-baseline.json
pnpm flow:check-baseline  # CI mode: fail only if the error count INCREASED
```

## The baseline / burn-down model

Because we start from a large error count, gating CI at zero would be red
forever. Instead `.flow-baseline.json` records the current count and CI fails
only when it **increases** (see `scripts/flow-baseline.mjs`). The number
ratchets down as we add libdefs, migrate namespace imports, and tighten types —
each improvement is locked in by re-running `pnpm flow:baseline`.

Current baseline: see [`.flow-baseline.json`](../.flow-baseline.json).
