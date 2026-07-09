import{ag as l,a6 as W,a0 as e,I as H,a5 as b,ax as p,ae as F,ai as E,B as D}from"./iframe-rkt6EJ0_.js";import{u as $,t as K,a as i,T as a,F as G}from"./FunnelIcon-Dvk8iR5_.js";import{u as _}from"./usePopover-Cq-arxJ_.js";import{u as J}from"./useListFocus-DjYfTfB4.js";import{C as Z}from"./Carousel-B5XwHF_e.js";import{F as U}from"./PlusIcon-BMcz_0J0.js";import"./preload-helper-Ct5FWWRu.js";import"./useKeyboardHint-SVeuIqHL.js";import"./Kbd-CYoYtvQ0.js";import"./useFocusTrap-vdn_F_8X.js";const P={trigger:{kVAEAm:"astryx1n2onr6",k1xSpc:"astryx3nfvp2",kGNEyG:"astryx6s0dn4",kjj79g:"astryxl56j7k",kOIVth:"astryxzye2dw",kg3NbH:"astryxrrkdod",kWkggS:"astryxjbqb8w",kMzoRj:"astryxc342km",ksu8eU:"astryxng3xce",kaIpWk:"astryxh6dtrn",kMv6JI:"astryxjb2p0i",kGuDYH:"astryxcr08ib",kLWn49:"astryx1kq96og",k63SB2:"astryx1sodnla",kMwMTN:"astryxv1l7n4",kkrTdU:"astryx1ypdohk",kybGjl:"astryx1hl2dhg",k1ekBW:"astryxt3l3uh",kIyJzY:"astryxuedmi6",kAMwcw:"astryxlr8y92",kI3sdo:"astryx17nn4n9",kInvED:"astryx1wfwxd8 astryx7s97pk",$$css:!0},triggerSelected:{kMwMTN:"astryx1tgivj0",k63SB2:"astryx2mo6ok",$$css:!0}},Y={sm:{kZKoxP:"astryx6k0iem",$$css:!0},md:{kZKoxP:"astryx1ueg155",$$css:!0},lg:{kZKoxP:"astryxssyfek",$$css:!0}};function z({ref:t,label:s,options:r,xstyle:c,className:u,style:S}){const d=$(),I=l.useId(),o=_({hasLightDismiss:!0,hasCloseButton:!1,hasAutoFocus:!1,role:"none"}),{listRef:B,handleKeyDown:O}=J({onEscape:()=>o.hide()}),N=l.useCallback(()=>{o.isOpen?o.hide():o.show()},[o]),V=r.find(n=>n.value===d.value),L=V?.label??s,m=V!=null,R=d.size,M=l.useCallback(n=>{d.onChange(n),o.hide()},[d,o]),q=W(o.triggerRef,t);return e.jsxs(e.Fragment,{children:[e.jsxs("button",{ref:q,type:"button","aria-haspopup":"menu","aria-expanded":o.isOpen,"aria-controls":I,"data-tab-menu":"",tabIndex:m?0:-1,onClick:N,...b(p("tab-menu"),F(P.trigger,Y[R],m&&P.triggerSelected,K,c),u,S),children:[e.jsxs("span",{className:"astryx1n2onr6 astryxwz0xwf astryx6s0dn4 astryxkh2ocl",children:[e.jsx("span",{className:"astryx1agbcgv astryxcrlgei",children:L}),e.jsx("span",{"aria-hidden":"true",className:"astryx1agbcgv astryxcrlgei astryxlshs6z astryx47corl astryx2mo6ok",children:L})]}),e.jsx("span",{"aria-hidden":"true",...{0:{className:"astryx12xnipv astryx6b6gus astryx2lah0s astryx11xpdln astryxuedmi6 astryxlr8y92"},1:{className:"astryx12xnipv astryx6b6gus astryx2lah0s astryx11xpdln astryxuedmi6 astryxlr8y92 astryx19jd1h0"}}[!!o.isOpen<<0],children:e.jsx(H,{icon:"chevronDown",size:"sm",color:"inherit"})}),e.jsx("span",{...b(p("tab-indicator",{selected:m?"selected":null}),{0:{className:"astryx10l6tqk astryxqmqy1e astryxnp31yv astryxmz3bnw astryx36qwtl astryxjspbzw astryx47corl astryxnpjden astryxuedmi6 astryxlr8y92 astryxowkcby astryxg01cxk astryx18b8bwa"},1:{className:"astryx10l6tqk astryxqmqy1e astryxnp31yv astryxmz3bnw astryx36qwtl astryxjspbzw astryx47corl astryxnpjden astryxuedmi6 astryxlr8y92 astryxowkcby astryx1hc1fzr"}}[!!m<<0])})]}),o.render(e.jsxs("div",{ref:B,id:I,role:"menu","aria-label":s,onKeyDown:O,...b(p("tab-menu-dropdown"),{className:"astryx78zum5 astryxdt5ytf astryx1lsbc85 astryxu0wf1k astryx7a5moj"}),children:[e.jsx("span",{role:"presentation",className:"astryx141an7d astryx1ltkj2j astryx2mo6ok astryxv1l7n4 astryxu0wf1k astryxrrkdod",children:s}),r.map(n=>{const C=d.value===n.value;return e.jsxs("div",{role:"menuitem",tabIndex:0,"aria-current":C?"true":void 0,onClick:()=>M(n.value),onKeyDown:A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),M(n.value))},...b(p("tab-menu-item"),{0:{className:"astryx78zum5 astryx6s0dn4 astryx1qughib astryx1txdalj astryxce4md1 astryxrrkdod astryxh6dtrn astryxjb2p0i astryxcr08ib astryx1kq96og astryx1sodnla astryx1tgivj0 astryx1ypdohk astryx15406qy astryxuedmi6 astryxlr8y92 astryxjbqb8w astryxe9uy6x astryx17nn4n9"},1:{className:"astryx78zum5 astryx6s0dn4 astryx1qughib astryx1txdalj astryxce4md1 astryxrrkdod astryxh6dtrn astryxjb2p0i astryxcr08ib astryx1kq96og astryx1tgivj0 astryx1ypdohk astryx15406qy astryxuedmi6 astryxlr8y92 astryxjbqb8w astryxe9uy6x astryx17nn4n9 astryx1e4wzip"}}[!!C<<0]),children:[e.jsxs("span",{className:"astryx78zum5 astryx6s0dn4 astryx1txdalj",children:[n.icon&&E(n.icon,{size:"sm",color:"secondary"}),n.label]}),C&&e.jsx(H,{icon:"check",size:"sm",color:"accent"})]},n.value)})]}),{placement:"below",alignment:"start"})]})}z.displayName="TabMenu";z.__docgenInfo={description:`Tab menu trigger that opens a dropdown of additional tab options.
Shows the selected option's label as trigger text when an option is active.
Dropdown includes a heading showing the menu's label prop.

@example
\`\`\`
<TabList value={tab} onChange={setTab}>
  <Tab value="overview" label="Overview" />
  <TabMenu label="More" options={[
    { value: "settings", label: "Settings" },
    { value: "history", label: "History" },
  ]} />
</TabList>
\`\`\``,methods:[],displayName:"TabMenu",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:`Label for the trigger button and dropdown heading.
Displayed as trigger text when no option is selected.`},options:{required:!0,tsType:{name:"Array",elements:[{name:"TabMenuOption"}],raw:"TabMenuOption[]"},description:"Menu options rendered in the dropdown."}},composes:["Pick"]};const ie={title:"Core/TabList",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the tab hover targets"}}},y={args:{size:"md"},render:t=>{const[s,r]=l.useState("home");return e.jsxs(i,{value:s,onChange:r,size:t.size,children:[e.jsx(a,{value:"home",label:"Home"}),e.jsx(a,{value:"projects",label:"Projects"}),e.jsx(a,{value:"settings",label:"Settings"})]})}},g={args:{size:"md"},render:t=>{const[s,r]=l.useState("home");return e.jsxs(i,{value:s,onChange:r,size:t.size,children:[e.jsx(a,{value:"home",label:"Home"}),e.jsx(a,{value:"projects",label:"Projects"}),e.jsx(z,{label:"More",options:[{value:"analytics",label:"Analytics"},{value:"reports",label:"Reports"},{value:"billing",label:"Billing"}]})]})}},j={args:{size:"md"},render:t=>{const[s,r]=l.useState("analytics");return e.jsxs(i,{value:s,onChange:r,size:t.size,children:[e.jsx(a,{value:"home",label:"Home"}),e.jsx(a,{value:"projects",label:"Projects"}),e.jsx(z,{label:"More",options:[{value:"analytics",label:"Analytics"},{value:"reports",label:"Reports"}]})]})}},w={render:()=>{const[t,s]=l.useState("home");return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:["sm","md","lg"].map(r=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px",color:"#666",fontFamily:"monospace"},children:['size=\\"',r,'\\"']}),e.jsx("div",{style:{border:"1px dashed #ccc",display:"inline-flex"},children:e.jsxs(i,{value:t,onChange:s,size:r,children:[e.jsx(a,{value:"home",label:"Home"}),e.jsx(a,{value:"projects",label:"Projects"}),e.jsx(a,{value:"settings",label:"Settings"})]})})]},r))})}},T={args:{size:"md"},render:t=>{const[s,r]=l.useState("home"),c=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{d:"M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z"})}),u=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{fillRule:"evenodd",d:"M6.955 1.45A.5.5 0 0 1 7.452 1h1.096a.5.5 0 0 1 .497.45l.17 1.699c.484.12.94.312 1.356.562l1.321-.816a.5.5 0 0 1 .67.087l.774.774a.5.5 0 0 1 .087.67l-.816 1.321c.25.416.442.872.562 1.356l1.699.17a.5.5 0 0 1 .45.497v1.096a.5.5 0 0 1-.45.497l-1.699.17c-.12.484-.312.94-.562 1.356l.816 1.321a.5.5 0 0 1-.087.67l-.774.774a.5.5 0 0 1-.67.087l-1.321-.816c-.416.25-.872.442-1.356.562l-.17 1.699a.5.5 0 0 1-.497.45H7.452a.5.5 0 0 1-.497-.45l-.17-1.699a4.973 4.973 0 0 1-1.356-.562l-1.321.816a.5.5 0 0 1-.67-.087l-.774-.774a.5.5 0 0 1-.087-.67l.816-1.321a4.972 4.972 0 0 1-.562-1.356l-1.699-.17A.5.5 0 0 1 1 8.548V7.452a.5.5 0 0 1 .45-.497l1.699-.17c.12-.484.312-.94.562-1.356l-.816-1.321a.5.5 0 0 1 .087-.67l.774-.774a.5.5 0 0 1 .67-.087l1.321.816c.416-.25.872-.442 1.356-.562l.17-1.699ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",clipRule:"evenodd"})});return e.jsxs(i,{value:s,onChange:r,size:t.size,children:[e.jsx(a,{value:"home",label:"Home",icon:c}),e.jsx(a,{value:"settings",label:"Settings",icon:u})]})}},f={args:{size:"md"},render:t=>{const[s,r]=l.useState("desktop"),c=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{d:"M2.5 3A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h4.75v1.5H5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H8.75V11h4.75A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3h-11Zm0 1.5h11v5h-11v-5Z"})}),u=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{d:"M5 1.5A1.5 1.5 0 0 0 3.5 3v10A1.5 1.5 0 0 0 5 14.5h6a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 11 1.5H5Zm0 1.5h6v10H5V3Zm2.25 8.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"})}),S=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{d:"M8 1.5a6.5 6.5 0 0 0 0 13h.25a1.75 1.75 0 0 0 1.2-3.02.35.35 0 0 1 .23-.6h.97A3.85 3.85 0 0 0 14.5 7.03 5.53 5.53 0 0 0 8.97 1.5H8Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2-1.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM4.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6-1.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"})});return e.jsxs(i,{value:s,onChange:r,size:t.size,children:[e.jsx(a,{value:"desktop",label:"Desktop preview",icon:c,isLabelHidden:!0}),e.jsx(a,{value:"phone",label:"Phone preview",icon:u,isLabelHidden:!0}),e.jsx(a,{value:"theme",label:"Theme",icon:S,isLabelHidden:!0})]})}},x={render:()=>{const[t,s]=l.useState("all");return e.jsxs(i,{value:t,onChange:s,size:"lg",hasDivider:!0,children:[e.jsx(a,{value:"all",label:"All items"}),e.jsx(a,{value:"active",label:"Active"}),e.jsx(a,{value:"archived",label:"Archived"}),e.jsxs("div",{style:{marginInlineStart:"auto",display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(D,{label:"Filter",variant:"ghost",size:"sm",icon:e.jsx(G,{}),isIconOnly:!0}),e.jsx(D,{label:"New item",variant:"primary",size:"sm",icon:e.jsx(U,{})})]})]})}},k={render:()=>{const[t,s]=l.useState("home");return e.jsx("div",{style:{width:"500px"},children:e.jsxs(i,{value:t,onChange:s,layout:"fill",hasDivider:!0,children:[e.jsx(a,{value:"home",label:"Home"}),e.jsx(a,{value:"projects",label:"Projects"}),e.jsx(a,{value:"settings",label:"Settings"})]})})}},v={render:()=>{const[t,s]=l.useState("overview");return e.jsx("div",{style:{maxWidth:"400px",border:"1px dashed #ccc"},children:e.jsx(i,{value:t,onChange:s,children:e.jsxs(Z,{gap:.5,hasSnap:!1,children:[e.jsx(a,{value:"overview",label:"Overview"}),e.jsx(a,{value:"activity",label:"Activity"}),e.jsx(a,{value:"members",label:"Members"}),e.jsx(a,{value:"settings",label:"Settings"}),e.jsx(a,{value:"integrations",label:"Integrations"}),e.jsx(a,{value:"billing",label:"Billing & Plans"}),e.jsx(a,{value:"security",label:"Security"}),e.jsx(a,{value:"notifications",label:"Notifications"}),e.jsx(a,{value:"api",label:"API Keys"})]})})})}},h={render:()=>{const[t,s]=l.useState("dashboard");return e.jsx("div",{style:{maxWidth:"350px"},children:e.jsx(i,{value:t,onChange:s,hasDivider:!0,size:"lg",children:e.jsxs(Z,{gap:.5,hasSnap:!1,children:[e.jsx(a,{value:"dashboard",label:"Dashboard"}),e.jsx(a,{value:"analytics",label:"Analytics"}),e.jsx(a,{value:"reports",label:"Reports"}),e.jsx(a,{value:"customers",label:"Customers"}),e.jsx(a,{value:"products",label:"Products"}),e.jsx(a,{value:"orders",label:"Orders"})]})})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('home');
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="home" label="Home" />
        <Tab value="projects" label="Projects" />
        <Tab value="settings" label="Settings" />
      </TabList>;
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('home');
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="home" label="Home" />
        <Tab value="projects" label="Projects" />
        <TabMenu label="More" options={[{
        value: 'analytics',
        label: 'Analytics'
      }, {
        value: 'reports',
        label: 'Reports'
      }, {
        value: 'billing',
        label: 'Billing'
      }]} />
      </TabList>;
  }
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('analytics');
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="home" label="Home" />
        <Tab value="projects" label="Projects" />
        <TabMenu label="More" options={[{
        value: 'analytics',
        label: 'Analytics'
      }, {
        value: 'reports',
        label: 'Reports'
      }]} />
      </TabList>;
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('home');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        {(['sm', 'md', 'lg'] as const).map(size => <div key={size}>
            <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666',
          fontFamily: 'monospace'
        }}>
              size=\\"{size}\\"
            </div>
            <div style={{
          border: '1px dashed #ccc',
          display: 'inline-flex'
        }}>
              <TabList value={value} onChange={setValue} size={size}>
                <Tab value="home" label="Home" />
                <Tab value="projects" label="Projects" />
                <Tab value="settings" label="Settings" />
              </TabList>
            </div>
          </div>)}
      </div>;
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('home');
    const HomeIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
      </svg>;
    const CogIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path fillRule="evenodd" d="M6.955 1.45A.5.5 0 0 1 7.452 1h1.096a.5.5 0 0 1 .497.45l.17 1.699c.484.12.94.312 1.356.562l1.321-.816a.5.5 0 0 1 .67.087l.774.774a.5.5 0 0 1 .087.67l-.816 1.321c.25.416.442.872.562 1.356l1.699.17a.5.5 0 0 1 .45.497v1.096a.5.5 0 0 1-.45.497l-1.699.17c-.12.484-.312.94-.562 1.356l.816 1.321a.5.5 0 0 1-.087.67l-.774.774a.5.5 0 0 1-.67.087l-1.321-.816c-.416.25-.872.442-1.356.562l-.17 1.699a.5.5 0 0 1-.497.45H7.452a.5.5 0 0 1-.497-.45l-.17-1.699a4.973 4.973 0 0 1-1.356-.562l-1.321.816a.5.5 0 0 1-.67-.087l-.774-.774a.5.5 0 0 1-.087-.67l.816-1.321a4.972 4.972 0 0 1-.562-1.356l-1.699-.17A.5.5 0 0 1 1 8.548V7.452a.5.5 0 0 1 .45-.497l1.699-.17c.12-.484.312-.94.562-1.356l-.816-1.321a.5.5 0 0 1 .087-.67l.774-.774a.5.5 0 0 1 .67-.087l1.321.816c.416-.25.872-.442 1.356-.562l.17-1.699ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clipRule="evenodd" />
      </svg>;
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="home" label="Home" icon={HomeIcon} />
        <Tab value="settings" label="Settings" icon={CogIcon} />
      </TabList>;
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('desktop');
    const DesktopIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h4.75v1.5H5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H8.75V11h4.75A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3h-11Zm0 1.5h11v5h-11v-5Z" />
      </svg>;
    const PhoneIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M5 1.5A1.5 1.5 0 0 0 3.5 3v10A1.5 1.5 0 0 0 5 14.5h6a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 11 1.5H5Zm0 1.5h6v10H5V3Zm2.25 8.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" />
      </svg>;
    const ThemeIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M8 1.5a6.5 6.5 0 0 0 0 13h.25a1.75 1.75 0 0 0 1.2-3.02.35.35 0 0 1 .23-.6h.97A3.85 3.85 0 0 0 14.5 7.03 5.53 5.53 0 0 0 8.97 1.5H8Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2-1.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM4.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6-1.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
      </svg>;
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="desktop" label="Desktop preview" icon={DesktopIcon} isLabelHidden />
        <Tab value="phone" label="Phone preview" icon={PhoneIcon} isLabelHidden />
        <Tab value="theme" label="Theme" icon={ThemeIcon} isLabelHidden />
      </TabList>;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('all');
    return <TabList value={value} onChange={setValue} size="lg" hasDivider>
        <Tab value="all" label="All items" />
        <Tab value="active" label="Active" />
        <Tab value="archived" label="Archived" />
        <div style={{
        marginInlineStart: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
          <Button label="Filter" variant="ghost" size="sm" icon={<FunnelIcon />} isIconOnly />
          <Button label="New item" variant="primary" size="sm" icon={<PlusIcon />} />
        </div>
      </TabList>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Demonstrates a common page header pattern: large tab list items on the left
with action buttons on the right, separated by a full-width divider underneath.`,...x.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('home');
    return <div style={{
      width: '500px'
    }}>
        <TabList value={value} onChange={setValue} layout="fill" hasDivider>
          <Tab value="home" label="Home" />
          <Tab value="projects" label="Projects" />
          <Tab value="settings" label="Settings" />
        </TabList>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('overview');
    return <div style={{
      maxWidth: '400px',
      border: '1px dashed #ccc'
    }}>
        <TabList value={value} onChange={setValue}>
          <Carousel gap={0.5} hasSnap={false}>
            <Tab value="overview" label="Overview" />
            <Tab value="activity" label="Activity" />
            <Tab value="members" label="Members" />
            <Tab value="settings" label="Settings" />
            <Tab value="integrations" label="Integrations" />
            <Tab value="billing" label="Billing & Plans" />
            <Tab value="security" label="Security" />
            <Tab value="notifications" label="Notifications" />
            <Tab value="api" label="API Keys" />
          </Carousel>
        </TabList>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`When tabs overflow, wrap TabList's children in Carousel.
The Carousel handles scroll, fade masks, and arrow buttons.
Each tab keeps its intrinsic label width — no truncation.`,...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('dashboard');
    return <div style={{
      maxWidth: '350px'
    }}>
        <TabList value={value} onChange={setValue} hasDivider size="lg">
          <Carousel gap={0.5} hasSnap={false}>
            <Tab value="dashboard" label="Dashboard" />
            <Tab value="analytics" label="Analytics" />
            <Tab value="reports" label="Reports" />
            <Tab value="customers" label="Customers" />
            <Tab value="products" label="Products" />
            <Tab value="orders" label="Orders" />
          </Carousel>
        </TabList>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:"Overflow with divider — typical page header in a narrow viewport.",...h.parameters?.docs?.description}}};const ce=["Default","WithMenu","MenuWithSelectedChild","SizeVariants","WithIcons","IconOnly","WithActions","FillLayout","Overflow","OverflowWithDivider"];export{y as Default,k as FillLayout,f as IconOnly,j as MenuWithSelectedChild,v as Overflow,h as OverflowWithDivider,w as SizeVariants,x as WithActions,T as WithIcons,g as WithMenu,ce as __namedExportsOrder,ie as default};
