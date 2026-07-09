import{a0 as r}from"./iframe-rkt6EJ0_.js";import{C as a,s,a as t,b as e}from"./_data-JirvGH6N.js";import{b as i}from"./bar-D_rOR5hN.js";import{e as m}from"./errorBar-C_GevUdl.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-7yKRborU.js";import"./ChartSwatch-DsTlXq_3.js";import"./HStack-DRruMYwf.js";import"./Stack-DGdqCT4E.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-D_ulKpRq.js";import"./index-CQbqn0AB.js";import"./index-CZM5dozQ.js";import"./markColor-DGyn1xJ6.js";const O={title:"Charts/Error Bar",component:a},o={render:()=>r.jsx(a,{data:s,xKey:"month",title:"Sales with error bars",series:[i("sales",{color:"#3b82f6"}),m({high:"errorHigh",low:"errorLow",color:"#1e3a5f"})],grid:r.jsx(e,{}),axes:r.jsxs(r.Fragment,{children:[r.jsx(t,{position:"bottom"}),r.jsx(t,{position:"left"})]}),height:320})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={salesData} xKey="month" title="Sales with error bars" series={[bar('sales', {
    color: '#3b82f6'
  }), errorBar({
    high: 'errorHigh',
    low: 'errorLow',
    color: '#1e3a5f'
  })]} grid={<ChartGrid />} axes={<>
          <ChartAxis position="bottom" />
          <ChartAxis position="left" />
        </>} height={320} />
}`,...o.parameters?.docs?.source},description:{story:"Error bars pair with a value mark (here, bars) to show a high/low range.",...o.parameters?.docs?.description}}};const S=["OnBars"];export{o as OnBars,S as __namedExportsOrder,O as default};
