import{a0 as s,ag as F}from"./iframe-DoKW0Kw_.js";import{x as S,i as K,C as y,e as g,b as w,a as k}from"./_data-BSKBgWj3.js";import{l as W}from"./line-DGCH9d8b.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-B4Nznv9C.js";import"./ChartSwatch-B_rXBY_k.js";import"./HStack-Cf_NfEnM.js";import"./Stack-BuZJ7s38.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-CPuTT-R_.js";import"./index-wbID6kS3.js";import"./index-BDvSaZbT.js";import"./markColor--cdq_YI7.js";import"./monotone-DS2qxjW1.js";import"./step-fxRLXcQr.js";function p(t,d){const o=t[d];return typeof o=="number"&&Number.isFinite(o)?o:NaN}function A(t,d){const{xScale:o,width:c}=d;if(K(o))return o.bandwidth();const r=t.map(e=>e.px).filter(e=>Number.isFinite(e)).sort((e,a)=>e-a);let i=1/0;for(let e=1;e<r.length;e++){const a=r[e]-r[e-1];a>0&&a<i&&(i=a)}return Number.isFinite(i)?i:Math.min(c,40)}function v(t){const d=t.upColor??"var(--color-success)",o=t.downColor??"var(--color-error)";return{type:"candlestick",key:`ohlc-${t.close}`,dataKeys:[t.open,t.high,t.low,t.close],layout:{},resolve(c){const{data:r,xKey:i,xScale:e,yScale:a}=c,n=[];for(let l=0;l<r.length;l++){const m=r[l],h=p(m,t.close);n.push({px:S(m,i,e),py:a(h),py0:a(0),dataIndex:l})}return n},render(c,r){const{data:i,yScale:e}=r,a=Math.max(1,A(c,r)*.6);return s.jsx("g",{children:c.map(n=>{const l=i[n.dataIndex],m=p(l,t.open),h=p(l,t.close),f=p(l,t.high),b=p(l,t.low);if(!Number.isFinite(n.px)||!Number.isFinite(m)||!Number.isFinite(h)||!Number.isFinite(f)||!Number.isFinite(b))return null;const C=h>=m?d:o,j=e(Math.max(m,h)),N=Math.max(1,Math.abs(e(m)-e(h)));return s.jsxs("g",{children:[s.jsx("line",{x1:n.px,x2:n.px,y1:e(f),y2:e(b),stroke:C,strokeWidth:1}),s.jsx("rect",{x:n.px-a/2,y:j,width:a,height:N,fill:C})]},n.dataIndex)})})}}}const X={title:"Charts/Candlestick",component:y},M=s.jsxs(s.Fragment,{children:[s.jsx(k,{position:"bottom"}),s.jsx(k,{position:"left"})]}),u={render:()=>s.jsx(y,{data:g,xKey:"day",title:"Price (OHLC)",series:[v({open:"open",high:"high",low:"low",close:"close"})],grid:s.jsx(w,{}),axes:M,height:360})},x={render:()=>{const t=F.useMemo(()=>{let d=0;return g.map((o,c)=>{d+=o.close;const r=c>=4?(d-g.slice(0,c-4).reduce((i,e)=>i+e.close,0))/5:void 0;return{...o,ma5:r==null?void 0:Math.round(r*10)/10}})},[]);return s.jsx(y,{data:t,xKey:"day",title:"Price + 5-day MA",series:[v({open:"open",high:"high",low:"low",close:"close"}),W("ma5",{color:"#f59e0b",strokeWidth:1.5})],grid:s.jsx(w,{}),axes:M,height:360})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={stockData} xKey="day" title="Price (OHLC)" series={[candlestick({
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close'
  })]} grid={<ChartGrid />} axes={axes} height={360} />
}`,...u.parameters?.docs?.source},description:{story:"OHLC candlesticks. Up/down default to the theme's success/error colors.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => {
      let sum = 0;
      return stockData.map((d, i) => {
        sum += d.close;
        const ma = i >= 4 ? (sum - stockData.slice(0, i - 4).reduce((s, v) => s + v.close, 0)) / 5 : undefined;
        return {
          ...d,
          ma5: ma == null ? undefined : Math.round(ma * 10) / 10
        };
      });
    }, []);
    return <Chart data={data} xKey="day" title="Price + 5-day MA" series={[candlestick({
      open: 'open',
      high: 'high',
      low: 'low',
      close: 'close'
    }), line('ma5', {
      color: '#f59e0b',
      strokeWidth: 1.5
    })]} grid={<ChartGrid />} axes={axes} height={360} />;
  }
}`,...x.parameters?.docs?.source},description:{story:"Candlesticks + a moving-average line overlay on the shared price scale.",...x.parameters?.docs?.description}}};const Y=["Basic","WithMovingAverage"];export{u as Basic,x as WithMovingAverage,Y as __namedExportsOrder,X as default};
