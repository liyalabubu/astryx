import{a0 as t}from"./iframe-DmzJkFOL.js";import{C as a,m as s,a as o,b as i}from"./_data-DW66bs-e.js";import{c as m}from"./formatters-CSwX9-qx.js";import{b as e}from"./bar-D9klp1DU.js";import{l as p}from"./line-Bes5O2bD.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-tS821I7R.js";import"./ChartSwatch-Da3lXSPz.js";import"./HStack-BpaCkwQt.js";import"./Stack-PTkvo0ai.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-PHr8yKMB.js";import"./index-DcuqUasO.js";import"./index-B-mXBHZz.js";import"./markColor-Cu-vQSxr.js";import"./monotone-DS2qxjW1.js";import"./step-fxRLXcQr.js";const E={title:"Charts/Chrome/Tooltip",component:a},r={render:()=>t.jsx(a,{data:s,xKey:"month",series:[e("revenue",{color:"#3b82f6",label:"Revenue",stack:"x"}),e("costs",{color:"#ef4444",label:"Costs",stack:"x"}),p("trend",{color:"#f59e0b",label:"Trend"})],tooltip:!0,grid:t.jsx(i,{}),axes:t.jsxs(t.Fragment,{children:[t.jsx(o,{position:"bottom"}),t.jsx(o,{position:"left",tickFormat:m()})]}),height:320})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
