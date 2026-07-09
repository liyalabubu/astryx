import{ag as r,a0 as n,ae as E}from"./iframe-rkt6EJ0_.js";import{T as g}from"./Table-C0_sVhdL.js";import{P as _}from"./Pagination-DpqiYDu1.js";import{a as q,u as G}from"./useTableSelectionState-CmXbid_F.js";import"./preload-helper-Ct5FWWRu.js";import"./ContextMenu-IP_tweF0.js";import"./renderDropdownItems-dkG9hL3K.js";import"./Divider-DOHxCOIB.js";import"./Item-BqnfSPkK.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./useListFocus-DjYfTfB4.js";import"./useTypeahead-JJzBiCSo.js";import"./EmptyState-CI1KjeJJ.js";import"./Selector-Cg2YFGCj.js";import"./usePopover-Cq-arxJ_.js";import"./useFocusTrap-vdn_F_8X.js";import"./Field-3liGjjuK.js";import"./FieldStatus-BrBhbsG_.js";import"./Tooltip-B5X_Idgm.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./utils-_uNaBhDK.js";import"./hooks-CWXeDETE.js";import"./InputGroupContext-BOJzswDo.js";import"./useAnnounce-aZwUWxkM.js";import"./CheckboxInput-Rh-35jz5.js";const S={wrapper:{k1xSpc:"astryx78zum5",$$css:!0},marginTop:{keoZOQ:"astryxtbrsbv",$$css:!0},marginBottom:{k1K539:"astryx1p37lm5",$$css:!0},alignStart:{kjj79g:"astryx1nhvcw1",$$css:!0},alignCenter:{kjj79g:"astryxl56j7k",$$css:!0},alignEnd:{kjj79g:"astryx13a6bvl",$$css:!0}};function p(e){const{page:a,onPageChange:t,totalItems:o,totalPages:i,hasMore:l,pageSize:d=10,onPageSizeChange:C,pageSizeOptions:W,variant:N="pages",size:U="md",position:M="below",align:w="center",label:F="Table pagination"}=e,D=Number.isFinite(d)?Math.max(1,Math.floor(d)):10,R=i??(o!=null?Math.ceil(o/D):void 0),$={page:a,onChange:t,totalItems:o,totalPages:R,hasMore:l,pageSize:D,onPageSizeChange:C,pageSizeOptions:W,variant:N,size:U,label:F},B=r.useRef({paginationProps:$,position:M,align:w});return B.current={paginationProps:$,position:M,align:w},r.useMemo(()=>({transformTableContext(I){const{position:h,paginationProps:u,align:K}=B.current;if(h==="none"||(u.totalPages??(u.totalItems!=null&&u.pageSize!=null?Math.ceil(u.totalItems/u.pageSize):void 0))===1&&u.hasMore!==!0)return I;const k=A=>n.jsx("div",{...E(S.wrapper,A==="below"&&S.marginTop,A==="above"&&S.marginBottom,K==="center"&&S.alignCenter,K==="end"&&S.alignEnd,K==="start"&&S.alignStart),children:n.jsx(_,{...u})});return n.jsxs(n.Fragment,{children:[(h==="above"||h==="both")&&k("above"),I,(h==="below"||h==="both")&&k("below")]})}}),[])}function m(e,a,t){const o=Number.isFinite(t)?Math.max(1,Math.floor(t)):10,l=((Number.isFinite(a)?Math.max(1,Math.floor(a)):1)-1)*o;return e.slice(l,l+o)}const s=Array.from({length:50},(e,a)=>({id:String(a+1),name:`User ${a+1}`,email:`user${a+1}@example.com`,role:["Engineer","Designer","Manager","Admin","Analyst"][a%5]})),c=[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"}];function O({variant:e="pages",position:a="below",align:t="start"}){const[o,i]=r.useState(1),l=10,d=p({page:o,onPageChange:i,totalItems:s.length,pageSize:l,variant:e,position:a,align:t});return n.jsx(g,{data:m(s,o,l),columns:c,idKey:"id",plugins:{pagination:d}})}const ze={title:"Core/TablePagination",tags:["autodocs"]},P={render:()=>{const[e,a]=r.useState(1),t=10,o=p({page:e,onPageChange:a,totalItems:s.length,pageSize:t});return n.jsx("div",{style:{maxWidth:600},children:n.jsx(g,{data:m(s,e,t),columns:c,idKey:"id",plugins:{pagination:o}})})}},b={render:()=>{const[e,a]=r.useState(1),t=10,o=s.slice((e-1)*t,e*t),i=p({page:e,onPageChange:a,totalItems:s.length,pageSize:t});return n.jsxs("div",{style:{maxWidth:600},children:[n.jsx("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:"Server-side: data is pre-sliced, no paginatedData() needed."}),n.jsx(g,{data:o,columns:c,idKey:"id",plugins:{pagination:i}})]})}},x={render:()=>{const[e,a]=r.useState(1),[t,o]=r.useState(10),i=p({page:e,onPageChange:a,totalItems:s.length,pageSize:t,onPageSizeChange:o,pageSizeOptions:[5,10,25,50]});return n.jsx("div",{style:{maxWidth:600},children:n.jsx(g,{data:m(s,e,t),columns:c,idKey:"id",plugins:{pagination:i}})})}},z={render:()=>{const[e,a]=r.useState(1),t=10,o=e*t<s.length,i=p({page:e,onPageChange:a,hasMore:o,pageSize:t});return n.jsxs("div",{style:{maxWidth:600},children:[n.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Cursor-based: total unknown, only hasMore=",String(o),"."]}),n.jsx(g,{data:m(s,e,t),columns:c,idKey:"id",plugins:{pagination:i}})]})}},f={render:()=>{const[e,a]=r.useState(1),t=10,o=p({page:e,onPageChange:a,totalItems:s.length,pageSize:t,position:"above"});return n.jsx("div",{style:{maxWidth:600},children:n.jsx(g,{data:m(s,e,t),columns:c,idKey:"id",plugins:{pagination:o}})})}},j={render:()=>{const[e,a]=r.useState(1),t=10,o=p({page:e,onPageChange:a,totalItems:s.length,pageSize:t,position:"both"});return n.jsx("div",{style:{maxWidth:600},children:n.jsx(g,{data:m(s,e,t),columns:c,idKey:"id",plugins:{pagination:o}})})}},T={render:()=>{const[e,a]=r.useState(1),[t,o]=r.useState(new Set),i=10,l=p({page:e,onPageChange:a,totalItems:s.length,pageSize:i}),d=m(s,e,i),{selectionConfig:C}=q({data:d,idKey:"id",selectedKeys:t,setSelectedKeys:o}),W=G(C);return n.jsxs("div",{style:{maxWidth:600},children:[n.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Pagination + Selection composed. Selected: ",t.size]}),n.jsx(g,{data:d,columns:c,idKey:"id",plugins:{selection:W,pagination:l}})]})}},v={argTypes:{variant:{control:"select",options:["pages","count","compact","dots","none"],description:"What appears between prev/next buttons"},position:{control:"select",options:["below","above","both","none"],description:"Where pagination renders relative to the table"},align:{control:"select",options:["start","center","end"],description:"Horizontal alignment of the pagination controls"}},args:{variant:"pages",position:"below",align:"center"},render:e=>n.jsx("div",{style:{maxWidth:700},children:n.jsx(O,{variant:e.variant,position:e.position,align:e.align})})},H=["pages","count","compact","dots"],L=["below","above","both"],V=["start","center","end"],y={render:()=>n.jsx("div",{style:{fontFamily:"sans-serif",maxWidth:700},children:H.flatMap(e=>L.flatMap(a=>V.map(t=>n.jsxs("div",{style:{marginBottom:48,paddingBottom:48,borderBottom:"1px solid #e5e5e5"},children:[n.jsx("div",{style:{display:"inline-flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[{label:"variant",value:e},{label:"position",value:a},{label:"align",value:t}].map(({label:o,value:i})=>n.jsxs("span",{style:{fontSize:11,fontFamily:"monospace",background:"#f0f0f0",borderRadius:4,padding:"2px 6px",color:"#555"},children:[o,'="',i,'"']},o))}),n.jsx(O,{variant:e,position:a,align:t})]},`${e}-${a}-${t}`))))})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize
    });
    return <div style={{
      maxWidth: 600
    }}>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const serverData = users.slice((page - 1) * pageSize, page * pageSize);
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Server-side: data is pre-sliced, no paginatedData() needed.
        </p>
        <Table data={serverData} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize,
      onPageSizeChange: setPageSize,
      pageSizeOptions: [5, 10, 25, 50]
    });
    return <div style={{
      maxWidth: 600
    }}>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const hasMore = page * pageSize < users.length;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      hasMore,
      pageSize
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Cursor-based: total unknown, only hasMore={String(hasMore)}.
        </p>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize,
      position: 'above'
    });
    return <div style={{
      maxWidth: 600
    }}>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize,
      position: 'both'
    });
    return <div style={{
      maxWidth: 600
    }}>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
    const pageSize = 10;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize
    });
    const pageData = paginateData(users, page, pageSize);
    const {
      selectionConfig
    } = useTableSelectionState<User>({
      data: pageData,
      idKey: 'id',
      selectedKeys,
      setSelectedKeys
    });
    const selectionPlugin = useTableSelection<User>(selectionConfig);
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Pagination + Selection composed. Selected: {selectedKeys.size}
        </p>
        <Table data={pageData} columns={columns} idKey="id" plugins={{
        selection: selectionPlugin,
        pagination: plugin
      }} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: ['pages', 'count', 'compact', 'dots', 'none'],
      description: 'What appears between prev/next buttons'
    },
    position: {
      control: 'select',
      options: ['below', 'above', 'both', 'none'],
      description: 'Where pagination renders relative to the table'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Horizontal alignment of the pagination controls'
    }
  },
  args: {
    variant: 'pages',
    position: 'below',
    align: 'center'
  },
  render: args => <div style={{
    maxWidth: 700
  }}>
      <PaginatedDemo variant={args.variant} position={args.position} align={args.align} />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Interactive playground — use the controls panel to explore every combination
of variant, position, and align.`,...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 700
  }}>
      {VARIANTS.flatMap(variant => POSITIONS.flatMap(position => ALIGNS.map(align => <div key={\`\${variant}-\${position}-\${align}\`} style={{
      marginBottom: 48,
      paddingBottom: 48,
      borderBottom: '1px solid #e5e5e5'
    }}>
              <div style={{
        display: 'inline-flex',
        gap: 8,
        marginBottom: 12,
        flexWrap: 'wrap'
      }}>
                {[{
          label: 'variant',
          value: variant
        }, {
          label: 'position',
          value: position
        }, {
          label: 'align',
          value: align
        }].map(({
          label,
          value
        }) => <span key={label} style={{
          fontSize: 11,
          fontFamily: 'monospace',
          background: '#f0f0f0',
          borderRadius: 4,
          padding: '2px 6px',
          color: '#555'
        }}>
                    {label}=&quot;{value}&quot;
                  </span>)}
              </div>
              <PaginatedDemo variant={variant} position={position} align={align} />
            </div>)))}
    </div>
}`,...y.parameters?.docs?.source},description:{story:"All variant × position × align combinations in one scrollable view.\nOne row per combination, labelled clearly. The `none` values are omitted.",...y.parameters?.docs?.description}}};const fe=["Default","ServerSide","PageSizeSelector","CursorBased","PositionAbove","PositionBoth","WithSelection","Playground","OptionsMatrix"];export{z as CursorBased,P as Default,y as OptionsMatrix,x as PageSizeSelector,v as Playground,f as PositionAbove,j as PositionBoth,b as ServerSide,T as WithSelection,fe as __namedExportsOrder,ze as default};
