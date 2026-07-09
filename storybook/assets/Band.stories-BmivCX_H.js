import{a0 as r}from"./iframe-DmzJkFOL.js";import{C as i,p as a,a as t,b as p}from"./_data-DW66bs-e.js";import{b as e}from"./band-CA5GKjPN.js";import{l as s}from"./line-Bes5O2bD.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-tS821I7R.js";import"./ChartSwatch-Da3lXSPz.js";import"./HStack-BpaCkwQt.js";import"./Stack-PTkvo0ai.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-PHr8yKMB.js";import"./index-DcuqUasO.js";import"./index-B-mXBHZz.js";import"./area-Yte8cOEo.js";import"./monotone-DS2qxjW1.js";import"./markColor-Cu-vQSxr.js";import"./step-fxRLXcQr.js";const G={title:"Charts/Band",component:i},o={render:()=>r.jsx(i,{data:a,xKey:"x",title:"Forecast with confidence bands",series:[e({upper:"upper95",lower:"lower95",color:"#3b82f6",opacity:.12}),e({upper:"upper80",lower:"lower80",color:"#3b82f6",opacity:.22}),s("mean",{color:"#3b82f6",strokeWidth:2})],grid:r.jsx(p,{}),axes:r.jsxs(r.Fragment,{children:[r.jsx(t,{position:"bottom"}),r.jsx(t,{position:"left"})]}),height:320})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={predictionData} xKey="x" title="Forecast with confidence bands" series={[band({
    upper: 'upper95',
    lower: 'lower95',
    color: '#3b82f6',
    opacity: 0.12
  }), band({
    upper: 'upper80',
    lower: 'lower80',
    color: '#3b82f6',
    opacity: 0.22
  }), line('mean', {
    color: '#3b82f6',
    strokeWidth: 2
  })]} grid={<ChartGrid />} axes={<>
          <ChartAxis position="bottom" />
          <ChartAxis position="left" />
        </>} height={320} />
}`,...o.parameters?.docs?.source},description:{story:"Confidence bands (80% + 95%) around a forecast line.",...o.parameters?.docs?.description}}};const K=["ConfidenceBands"];export{o as ConfidenceBands,K as __namedExportsOrder,G as default};
