---
'@astryxdesign/core': patch
---

[chore] Declare `@stylexjs/stylex` in both `dependencies` and `peerDependencies` (`^0.18.3`). The `dependencies` entry guarantees the StyleX runtime is present for every consumer — including Yarn (Yarn 1 and Yarn Berry do not auto-install peer dependencies) — so a consumer who doesn't author StyleX never has to install or import it; the runtime is required to render astryx components. The `peerDependencies` entry is the version-compatibility guardrail (flagged at install by Yarn/pnpm) and lets a StyleX-authoring consumer dedupe to a single shared runtime with their own app, in both browser and Node.

@imdreamrunner
