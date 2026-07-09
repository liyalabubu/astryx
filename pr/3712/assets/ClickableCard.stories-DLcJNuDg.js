import{ag as C,aJ as L,aG as H,a0 as e,a5 as I,ax as R,a6 as z,T as a,B}from"./iframe-C2vjcrWE.js";import{C as U}from"./Card-DF4u9Ovs.js";import{H as D}from"./HStack-zbMhAvzL.js";import{V as p}from"./VStack-BxVOr0hq.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-Dl2_Pyt1.js";import"./Stack-Cgl_fFe8.js";import"./stack.stylex-BlarxY2N.js";const g={interactive:{kVAEAm:"astryx1n2onr6",kkrTdU:"astryx1ypdohk",kybGjl:"astryx1hl2dhg",k1TLXF:null,kMnn75:null,kmVMDM:null,kNySMw:null,kMwMTN:"astryx1heor9g",kInvED:"astryx1hl8ikr",k1ekBW:"astryx15406qy",kIyJzY:"astryxuedmi6",kAMwcw:"astryxlr8y92",$$css:!0},focusWithin:{kRYL1X:"astryx1irc7jg",kry4t4:null,kf5QHk:null,kuo1qL:null,koJ47v:"astryxdjuwb3",$$css:!0},disabled:{kkrTdU:"astryx1h6gzvc",kSiTet:"astryxbyyjgo",$$css:!0}},_={default:{kWkggS:"astryx1de1mus astryxgdxxqj astryx1caeybo",$$css:!0},transparent:{kWkggS:"astryxjbqb8w astryxpgcx7g astryx11uoq0p",$$css:!0},muted:{kWkggS:"astryxwmxj5m astryx15s27dr astryx1j3f8e",$$css:!0},blue:{kWkggS:"astryx1o0wnni astryx1inlbms astryx1eloezw",$$css:!0},cyan:{kWkggS:"astryx1rgj867 astryxkd3mav astryxelchk",$$css:!0},gray:{kWkggS:"astryxspzpui astryx1go3pnj astryxkziwqc",$$css:!0},green:{kWkggS:"astryx1sqjeoo astryxxgjzfk astryx1m438uy",$$css:!0},orange:{kWkggS:"astryx1e9xt6e astryx1kheqrb astryx9dgg1i",$$css:!0},pink:{kWkggS:"astryxnpoty2 astryx1u41hgn astryx189p6kp",$$css:!0},purple:{kWkggS:"astryx16i6n6f astryx3jzzj astryxzphu7y",$$css:!0},red:{kWkggS:"astryx1cibrc5 astryx1oso24l astryx1xw5b16",$$css:!0},teal:{kWkggS:"astryx1jtji5o astryxbne8ih astryxdhrpfj",$$css:!0},yellow:{kWkggS:"astryx1bo7t0x astryx1fdvwpn astryxfoh6et",$$css:!0}};function n({label:s,onClick:t,onMouseUp:k,href:u,target:h,isDisabled:r=!1,children:f,padding:w,variant:y="default",width:T,height:j,maxWidth:S,ref:$,xstyle:q,className:N,style:M,...W}){const x=C.useRef(null),m=C.useRef(null),A=L(),{onClick:V,onMouseUp:b}=H({containerRef:x,interactiveRef:m,onClick:t,href:u,target:h,disabled:r}),E=k?v=>{b(v),k(v)}:b,O=u!=null;return e.jsxs(U,{ref:z($,x),width:T,height:j,maxWidth:S,padding:w,variant:y,...I(R("clickable-card",{variant:y}),{className:N,style:M}),xstyle:[g.interactive,g.focusWithin,!r&&_[y],r&&g.disabled,q],onClick:r?void 0:V,onMouseUp:r?void 0:E,...W,children:[O?e.jsx(A,{ref:m,href:u,target:h,"aria-label":s,"aria-disabled":r||void 0,tabIndex:r?-1:0,className:"astryx10l6tqk astryx1i1rx1s astryxjm9jq1 astryx1717udv astryxkdpibf astryxb3r6kr astryxzpqnlu astryxuxw1ft astryxc342km"}):e.jsx("button",{ref:m,type:"button","aria-label":s,disabled:r,onClick:t,className:"astryx10l6tqk astryx1i1rx1s astryxjm9jq1 astryx1717udv astryxkdpibf astryxb3r6kr astryxzpqnlu astryxuxw1ft astryxc342km"}),f]})}n.displayName="ClickableCard";n.__docgenInfo={description:`An interactive card that acts as a single navigation or action target.

Composes Card for visual styling and adds an interactive layer
with useClickableContainer. Nested interactive elements (buttons,
links, inputs) work independently — clicking them does NOT trigger
the card's onClick or navigation.

A visually-hidden <button> or <a> inside the card provides the
accessible role and label. The card surface is a plain <div> —
no role or tabIndex on the container.

@compositionHint Use for cards that navigate to a detail page or trigger an action.
For toggle selection cards, use SelectableCard instead.
Nest Button or other interactive elements freely inside — they won't conflict.

@example
\`\`\`
<ClickableCard label="Settings" href="/settings">
  <Text type="body" weight="bold">Settings</Text>
  <Text type="supporting" color="secondary">Manage your preferences</Text>
</ClickableCard>
\`\`\`

@example
\`\`\`
<ClickableCard label="Open modal" onClick={() => setShowModal(true)}>
  <Text type="body">Click anywhere to open</Text>
  <Button label="Other action" onClick={handleOther} />
</ClickableCard>
\`\`\``,methods:[],displayName:"ClickableCard",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Ref forwarded to the root element."},label:{required:!0,tsType:{name:"string"},description:`Accessibility label for the card.
Used as \`aria-label\` — provides the accessible name for screen readers.
When the card has visible text that serves as its label, prefer
passing that text here so the screen reader announcement matches.`},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:`Click handler. Fires when the card surface is clicked
(not when nested interactive elements are clicked).`},href:{required:!1,tsType:{name:"string"},description:`Navigation URL. When provided, clicking the card navigates to this URL.
Ctrl/Cmd+click opens in a new tab.`},target:{required:!1,tsType:{name:"string"},description:`Link target for href navigation.
@default '_self'`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Set to true to disable the card.
Disabled cards remain focusable (tabIndex 0) with aria-disabled
so screen reader users can discover them.`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:`Content to render inside the card.
Can include nested interactive elements (buttons, links) — they will
work independently from the card's click/navigation behavior.`},padding:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:`Internal padding of the card using the spacing scale.
@default 4 (16px)`},variant:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'transparent'
| 'muted'
| 'blue'
| 'cyan'
| 'gray'
| 'green'
| 'orange'
| 'pink'
| 'purple'
| 'red'
| 'teal'
| 'yellow'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'teal'"},{name:"literal",value:"'yellow'"}]},description:`Background color variant.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the card."},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Height of the card."},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum width of the card."}},composes:["Omit"]};const ee={title:"Core/ClickableCard",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","transparent","muted","blue","cyan","gray","green","orange","pink","purple","red","teal","yellow"]}},parameters:{docs:{description:{component:"An interactive card for navigation or action targets. Nested interactive elements (buttons, links) work independently; clicking them does NOT trigger the card's onClick or navigation. Uses `useClickableContainer` internally."}}}},i={name:"Navigation (href)",render:()=>e.jsx(n,{label:"Settings",href:"/settings",width:300,children:e.jsxs(p,{gap:1,children:[e.jsx(a,{type:"body",weight:"bold",children:"Settings"}),e.jsx(a,{type:"supporting",color:"secondary",children:"Manage your preferences"})]})}),parameters:{docs:{description:{story:"Card with `href`: clicking navigates. Ctrl/Cmd+click opens new tab. Middle-click opens new tab."}}}},l={name:"Action (onClick)",render:()=>e.jsx(n,{label:"Open modal",onClick:()=>alert("Card clicked!"),width:300,children:e.jsxs(p,{gap:1,children:[e.jsx(a,{type:"body",weight:"bold",children:"Click me"}),e.jsx(a,{type:"supporting",color:"secondary",children:"Opens a modal"})]})}),parameters:{docs:{description:{story:"Card with `onClick`: fires the handler when the card surface is clicked."}}}},o={name:"Nested Interactive Elements",render:()=>e.jsx(n,{label:"Product card",href:"/product/123",width:300,children:e.jsxs(p,{gap:2,children:[e.jsx(a,{type:"body",weight:"bold",children:"Product Name"}),e.jsx(a,{type:"supporting",color:"secondary",children:"$29.99"}),e.jsx(B,{label:"Add to cart",onClick:()=>alert("Added to cart! (card did NOT navigate)"),variant:"primary"})]})}),parameters:{docs:{description:{story:'The key feature: nested buttons/links work independently. Clicking "Add to cart" fires its own handler without triggering card navigation. This is handled by `useClickableContainer` which checks `hasInteractiveAncestor` on each click.'}}}},c={render:()=>e.jsx(n,{label:"Disabled card",onClick:()=>{},isDisabled:!0,width:300,children:e.jsxs(p,{gap:1,children:[e.jsx(a,{type:"body",weight:"bold",children:"Disabled"}),e.jsx(a,{type:"supporting",color:"secondary",children:"This card cannot be clicked"})]})}),parameters:{docs:{description:{story:"`isDisabled` suppresses click, hover, focus, and sets `aria-disabled`. `tabIndex` becomes -1."}}}},d={name:"Color Variants",render:()=>{const s=["default","muted","transparent","blue","cyan","gray","green","orange","pink","purple","red","teal","yellow"];return e.jsx(D,{gap:3,wrap:"wrap",children:s.map(t=>e.jsx(n,{label:t,onClick:()=>alert(t),variant:t,width:140,children:e.jsx(a,{type:"body",weight:"bold",children:t})},t))})},parameters:{docs:{description:{story:"All color variants: same palette as Card. Color cards have transparent borders."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Navigation (href)',
  render: () => <ClickableCard label="Settings" href="/settings" width={300}>
      <VStack gap={1}>
        <Text type="body" weight="bold">
          Settings
        </Text>
        <Text type="supporting" color="secondary">
          Manage your preferences
        </Text>
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'Card with \`href\`: clicking navigates. Ctrl/Cmd+click opens new tab. Middle-click opens new tab.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Action (onClick)',
  render: () => <ClickableCard label="Open modal" onClick={() => alert('Card clicked!')} width={300}>
      <VStack gap={1}>
        <Text type="body" weight="bold">
          Click me
        </Text>
        <Text type="supporting" color="secondary">
          Opens a modal
        </Text>
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'Card with \`onClick\`: fires the handler when the card surface is clicked.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Nested Interactive Elements',
  render: () => <ClickableCard label="Product card" href="/product/123" width={300}>
      <VStack gap={2}>
        <Text type="body" weight="bold">
          Product Name
        </Text>
        <Text type="supporting" color="secondary">
          $29.99
        </Text>
        <Button label="Add to cart" onClick={() => alert('Added to cart! (card did NOT navigate)')} variant="primary" />
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'The key feature: nested buttons/links work independently. ' + 'Clicking "Add to cart" fires its own handler without triggering card navigation. ' + 'This is handled by \`useClickableContainer\` which checks \`hasInteractiveAncestor\` on each click.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ClickableCard label="Disabled card" onClick={() => {}} isDisabled width={300}>
      <VStack gap={1}>
        <Text type="body" weight="bold">
          Disabled
        </Text>
        <Text type="supporting" color="secondary">
          This card cannot be clicked
        </Text>
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: '\`isDisabled\` suppresses click, hover, focus, and sets \`aria-disabled\`. \`tabIndex\` becomes -1.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Color Variants',
  render: () => {
    const variants = ['default', 'muted', 'transparent', 'blue', 'cyan', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'] as const;
    return <HStack gap={3} wrap="wrap">
        {variants.map(v => <ClickableCard key={v} label={v} onClick={() => alert(v)} variant={v} width={140}>
            <Text type="body" weight="bold">
              {v}
            </Text>
          </ClickableCard>)}
      </HStack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All color variants: same palette as Card. Color cards have transparent borders.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const ae=["Navigation","WithOnClick","NestedButton","Disabled","ColorVariants"];export{d as ColorVariants,c as Disabled,i as Navigation,o as NestedButton,l as WithOnClick,ae as __namedExportsOrder,ee as default};
