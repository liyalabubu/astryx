import{a0 as t}from"./iframe-rkt6EJ0_.js";import{C as a,m as s,a as o,b as i}from"./_data-JirvGH6N.js";import{c as m}from"./formatters-CSwX9-qx.js";import{b as e}from"./bar-D_rOR5hN.js";import{l as p}from"./line-RAJ7F4zU.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-7yKRborU.js";import"./ChartSwatch-DsTlXq_3.js";import"./HStack-DRruMYwf.js";import"./Stack-DGdqCT4E.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-D_ulKpRq.js";import"./index-CQbqn0AB.js";import"./index-CZM5dozQ.js";import"./markColor-DGyn1xJ6.js";import"./monotone-DS2qxjW1.js";import"./step-fxRLXcQr.js";const E={title:"Charts/Chrome/Tooltip",component:a},r={render:()=>t.jsx(a,{data:s,xKey:"month",series:[e("revenue",{color:"#3b82f6",label:"Revenue",stack:"x"}),e("costs",{color:"#ef4444",label:"Costs",stack:"x"}),p("trend",{color:"#f59e0b",label:"Trend"})],tooltip:!0,grid:t.jsx(i,{}),axes:t.jsxs(t.Fragment,{children:[t.jsx(o,{position:"bottom"}),t.jsx(o,{position:"left",tickFormat:m()})]}),height:320})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" series={[bar('revenue', {
    color: '#3b82f6',
    label: 'Revenue',
    stack: 'x'
  }), bar('costs', {
    color: '#ef4444',
    label: 'Costs',
    stack: 'x'
  }), line('trend', {
    color: '#f59e0b',
    label: 'Trend'
  })]} tooltip grid={<ChartGrid />} axes={<>
          <ChartAxis position="bottom" />
          <ChartAxis position="left" tickFormat={currency()} />
        </>} height={320} />
}`,...r.parameters?.docs?.source},description:{story:`Hover the chart: a grouped tooltip shows every series value at that x, with a
 column highlight for bars and hover dots on lines.`,...r.parameters?.docs?.description}}};const G=["Default"];export{r as Default,G as __namedExportsOrder,E as default};
