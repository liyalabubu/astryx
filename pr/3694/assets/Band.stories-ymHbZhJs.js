import{a0 as r}from"./iframe-DoKW0Kw_.js";import{C as i,p as a,a as t,b as p}from"./_data-BSKBgWj3.js";import{b as e}from"./band-DlCAzP2A.js";import{l as s}from"./line-DGCH9d8b.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-B4Nznv9C.js";import"./ChartSwatch-B_rXBY_k.js";import"./HStack-Cf_NfEnM.js";import"./Stack-BuZJ7s38.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-CPuTT-R_.js";import"./index-wbID6kS3.js";import"./index-BDvSaZbT.js";import"./area-Yte8cOEo.js";import"./monotone-DS2qxjW1.js";import"./markColor--cdq_YI7.js";import"./step-fxRLXcQr.js";const G={title:"Charts/Band",component:i},o={render:()=>r.jsx(i,{data:a,xKey:"x",title:"Forecast with confidence bands",series:[e({upper:"upper95",lower:"lower95",color:"#3b82f6",opacity:.12}),e({upper:"upper80",lower:"lower80",color:"#3b82f6",opacity:.22}),s("mean",{color:"#3b82f6",strokeWidth:2})],grid:r.jsx(p,{}),axes:r.jsxs(r.Fragment,{children:[r.jsx(t,{position:"bottom"}),r.jsx(t,{position:"left"})]}),height:320})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
