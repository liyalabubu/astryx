import{a0 as v,ag as o}from"./iframe-DoKW0Kw_.js";import{u as de,C as Z,h as pe,d as fe,b as re,a as se}from"./_data-BSKBgWj3.js";import{b as me}from"./band-B4lqwueb.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./array-2GBN5xbU.js";import"./ChartLegend-B4Nznv9C.js";import"./ChartSwatch-B_rXBY_k.js";import"./HStack-Cf_NfEnM.js";import"./Stack-BuZJ7s38.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-CPuTT-R_.js";import"./index-wbID6kS3.js";import"./index-BDvSaZbT.js";function ue(e,n,u){const s=e.createShader(n);return s?(e.shaderSource(s,u),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)?s:(e.deleteShader(s),null)):null}function $(e,n,u){const s=ue(e,e.VERTEX_SHADER,n),c=ue(e,e.FRAGMENT_SHADER,u);if(!s||!c)return s&&e.deleteShader(s),c&&e.deleteShader(c),null;const i=e.createProgram();return i?(e.attachShader(i,s),e.attachShader(i,c),e.linkProgram(i),e.deleteShader(s),e.deleteShader(c),e.getProgramParameter(i,e.LINK_STATUS)?i:(e.deleteProgram(i),null)):(e.deleteShader(s),e.deleteShader(c),null)}const le=[.5,.5,.5];function J(e){if(typeof e!="string")return le;let n=e.trim().replace(/^#/,"");if((n.length===3||n.length===4)&&(n=n.replace(/./g,s=>s+s)),n.length===8&&(n=n.slice(0,6)),!/^[0-9a-fA-F]{6}$/.test(n))return le;const u=parseInt(n,16);return[(u>>16)/255,(u>>8&255)/255,(u&255)/255]}function he(){return((typeof window<"u"?window.devicePixelRatio:0)||2)*2}function ne(e){return e.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!0})}function oe(e){e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA)}function ce(e,n,u){const s=he();return e.width=Math.max(1,Math.round(n*s)),e.height=Math.max(1,Math.round(u*s)),e.style.width=`${Math.max(0,n)}px`,e.style.height=`${Math.max(0,u)}px`,s}function ie(e,n,u,s){const c=e.ownerSVGElement;if(!c)return;const i=c.parentElement;if(!i)return;getComputedStyle(i).position==="static"&&(i.style.position="relative"),n.style.position="absolute",n.style.pointerEvents="none";const y=i.getBoundingClientRect(),d=e.getScreenCTM();return d?(n.style.left=`${d.e-y.left}px`,n.style.top=`${d.f-y.top}px`):(n.style.left="0",n.style.top="0"),n.style.width=`${u}px`,n.style.height=`${s}px`,i.appendChild(n),()=>{n.parentElement===i&&i.removeChild(n)}}function X(e,n,u){const s=c=>{c.preventDefault(),n()};return e.addEventListener("webglcontextlost",s,!1),e.addEventListener("webglcontextrestored",u,!1),()=>{e.removeEventListener("webglcontextlost",s,!1),e.removeEventListener("webglcontextrestored",u,!1)}}function q(e){const n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}const xe=1/.96,Re=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  uniform float u_size;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size * ${xe.toFixed(6)};
  }
`,ge=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;
    float edge = 1.0 - smoothstep(0.48, 0.5, dist);
    float a = u_opacity * edge;
    gl_FragColor = vec4(u_color * a, a);
  }
`;function ve({resolved:e,color:n,size:u,opacity:s,width:c,height:i}){const y=o.useRef(null),d=o.useRef(null),_=o.useRef(null),x=o.useRef(null),h=o.useRef(null),b=o.useRef(null),[g,E]=o.useState(0),T=o.useMemo(()=>{const p=[];for(const I of e)Number.isFinite(I.px)&&Number.isFinite(I.py)&&p.push(I.px,I.py);return new Float32Array(p)},[e]);return o.useEffect(()=>{const p=b.current;if(!p)return;y.current||(y.current=document.createElement("canvas"));const I=y.current,m=ie(p,I,c,i),B=X(I,()=>{d.current=null,_.current=null,x.current=null,h.current=null},()=>E(M=>M+1));return()=>{B(),m?.()}},[c,i]),o.useEffect(()=>{const p=y.current;if(!p||c<=0||i<=0)return;const I=ce(p,c,i);d.current||(d.current=ne(p));const m=d.current;if(!m||m.isContextLost())return;_.current||(_.current=$(m,Re,ge),h.current=null);const B=_.current;if(!B)return;x.current||(x.current=m.createBuffer());const M=x.current;if(!M)return;h.current||(h.current={aPosition:m.getAttribLocation(B,"a_position"),uResolution:m.getUniformLocation(B,"u_resolution"),uColor:m.getUniformLocation(B,"u_color"),uSize:m.getUniformLocation(B,"u_size"),uOpacity:m.getUniformLocation(B,"u_opacity")});const w=h.current;m.viewport(0,0,p.width,p.height),oe(m),m.useProgram(B),m.bindBuffer(m.ARRAY_BUFFER,M),m.bufferData(m.ARRAY_BUFFER,T,m.STATIC_DRAW),m.enableVertexAttribArray(w.aPosition),m.vertexAttribPointer(w.aPosition,2,m.FLOAT,!1,0,0);const[G,O,a]=J(n);m.uniform2f(w.uResolution,c,i),m.uniform3f(w.uColor,G,O,a),m.uniform1f(w.uSize,u*I),m.uniform1f(w.uOpacity,s),m.drawArrays(m.POINTS,0,T.length/2)},[c,i,n,u,s,T,g]),o.useEffect(()=>()=>{const p=d.current;p&&(x.current&&p.deleteBuffer(x.current),_.current&&p.deleteProgram(_.current),q(p)),d.current=null,_.current=null,x.current=null,h.current=null},[]),c<=0||i<=0?null:v.jsx("g",{ref:b})}function ye(e,n){const{color:u}=n,s=n.size??6,c=n.opacity??.8;return{type:"dotGL",key:e,dataKeys:[e],layout:{},resolve(i){const{data:y,xKey:d,xScale:_,yScale:x}=i,h=[];for(let b=0;b<y.length;b++){const g=y[b];let E;"bandwidth"in _?E=(_(String(g[d]))??0)+_.bandwidth()/2:E=_(g[d]);const T=typeof g[e]=="number"?g[e]:0;h.push({px:E,py:x(T),py0:x(0),dataIndex:b})}return h},render(i,y){return v.jsx(ve,{resolved:i,color:u,size:s,opacity:c,width:y.width,height:y.height})}}}const _e=16;function be(e){const n=e+1;return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}function Ae(e,n,u){return e===0&&n===0&&u===0?-1:(e<<16|n<<8|u)-1}const Ee=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  uniform float u_size;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size;
  }
`,Fe=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    if (dot(coord, coord) > 0.25) discard;
    gl_FragColor = vec4(u_color, u_opacity);
  }
`,Ce=`
  attribute vec2 a_position;
  attribute vec3 a_pickColor;
  uniform vec2 u_resolution;
  uniform float u_size;
  varying vec3 v_pickColor;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size;
    v_pickColor = a_pickColor;
  }
`,Le=`
  precision mediump float;
  varying vec3 v_pickColor;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    if (dot(coord, coord) > 0.25) discard;
    gl_FragColor = vec4(v_pickColor, 1.0);
  }
`;function Se({resolved:e,color:n,size:u,opacity:s,width:c,height:i,data:y,renderTooltip:d}){const _=o.useRef(null),x=o.useRef(null),[h,b]=o.useState(-1),[g,E]=o.useState(null),[T,p]=o.useState(0),I=o.useRef(null),m=o.useRef(null),B=o.useRef(null),M=o.useRef(null),w=o.useRef(null),G=o.useMemo(()=>{const l=new Float32Array(e.length*2);for(let f=0;f<e.length;f++)l[f*2]=e[f].px,l[f*2+1]=e[f].py;return l},[e]),O=o.useMemo(()=>{const l=new Float32Array(e.length*3);for(let f=0;f<e.length;f++){const[F,A,C]=be(f);l[f*3]=F,l[f*3+1]=A,l[f*3+2]=C}return l},[e.length]);o.useEffect(()=>{if(c<=0||i<=0)return;const l=window.devicePixelRatio||1,f=Math.max(1,Math.round(c*l)),F=Math.max(1,Math.round(i*l)),A=_.current;if(A){if(A.width!==f&&(A.width=f),A.height!==F&&(A.height=F),!I.current){const t=A.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,antialias:!0}),L=t?$(t,Ee,Fe):null;t&&L&&(I.current={gl:t,prog:L},m.current=null)}const S=I.current;if(S&&!S.gl.isContextLost()){const{gl:t,prog:L}=S;m.current||(m.current=t.createBuffer());const N=m.current;if(N){t.viewport(0,0,A.width,A.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.useProgram(L),t.bindBuffer(t.ARRAY_BUFFER,N),t.bufferData(t.ARRAY_BUFFER,G,t.STATIC_DRAW);const U=t.getAttribLocation(L,"a_position");t.enableVertexAttribArray(U),t.vertexAttribPointer(U,2,t.FLOAT,!1,0,0);const[D,k,W]=J(n);t.uniform2f(t.getUniformLocation(L,"u_resolution"),c,i),t.uniform3f(t.getUniformLocation(L,"u_color"),D,k,W),t.uniform1f(t.getUniformLocation(L,"u_size"),u*l),t.uniform1f(t.getUniformLocation(L,"u_opacity"),s),t.drawArrays(t.POINTS,0,G.length/2)}}}const C=x.current;if(C){if(C.width!==f&&(C.width=f),C.height!==F&&(C.height=F),!B.current){const t=C.getContext("webgl",{alpha:!1,premultipliedAlpha:!1,antialias:!1,preserveDrawingBuffer:!0});if(t){const L=$(t,Ce,Le),N=t.createFramebuffer(),U=t.createTexture();L&&N&&U&&(t.bindTexture(t.TEXTURE_2D,U),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.bindFramebuffer(t.FRAMEBUFFER,N),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,U,0),t.bindFramebuffer(t.FRAMEBUFFER,null),B.current={gl:t,prog:L,fb:N,tex:U,texW:0,texH:0,dpr:l},M.current=null,w.current=null)}}const S=B.current;if(S&&!S.gl.isContextLost()){const{gl:t,prog:L,fb:N,tex:U}=S;S.dpr=l,(S.texW!==C.width||S.texH!==C.height)&&(t.bindTexture(t.TEXTURE_2D,U),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,C.width,C.height,0,t.RGBA,t.UNSIGNED_BYTE,null),S.texW=C.width,S.texH=C.height),M.current||(M.current=t.createBuffer()),w.current||(w.current=t.createBuffer());const D=M.current,k=w.current;if(D&&k){t.bindFramebuffer(t.FRAMEBUFFER,N),t.viewport(0,0,C.width,C.height),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.BLEND),t.useProgram(L),t.bindBuffer(t.ARRAY_BUFFER,D),t.bufferData(t.ARRAY_BUFFER,G,t.STATIC_DRAW);const W=t.getAttribLocation(L,"a_position");t.enableVertexAttribArray(W),t.vertexAttribPointer(W,2,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,k),t.bufferData(t.ARRAY_BUFFER,O,t.STATIC_DRAW);const j=t.getAttribLocation(L,"a_pickColor");t.enableVertexAttribArray(j),t.vertexAttribPointer(j,3,t.FLOAT,!1,0,0),t.uniform2f(t.getUniformLocation(L,"u_resolution"),c,i),t.uniform1f(t.getUniformLocation(L,"u_size"),(u+_e)*l),t.drawArrays(t.POINTS,0,G.length/2),t.bindFramebuffer(t.FRAMEBUFFER,null)}}}},[c,i,G,O,n,u,s,T]),o.useEffect(()=>{const l=[],f=_.current;f&&l.push(X(f,()=>{I.current=null,m.current=null},()=>p(A=>A+1)));const F=x.current;return F&&l.push(X(F,()=>{B.current=null,M.current=null,w.current=null},()=>p(A=>A+1))),()=>{for(const A of l)A()}},[]),o.useEffect(()=>()=>{const l=I.current;if(l){const{gl:F,prog:A}=l;m.current&&F.deleteBuffer(m.current),F.deleteProgram(A),q(F)}const f=B.current;if(f){const{gl:F,prog:A,fb:C,tex:S}=f;M.current&&F.deleteBuffer(M.current),w.current&&F.deleteBuffer(w.current),F.deleteFramebuffer(C),F.deleteTexture(S),F.deleteProgram(A),q(F)}I.current=null,m.current=null,B.current=null,M.current=null,w.current=null},[]);const a=o.useCallback(l=>{const f=B.current;if(!f||f.gl.isContextLost())return;const F=l.currentTarget.ownerSVGElement;if(!F)return;const A=l.currentTarget.getScreenCTM();if(!A)return;const C=F.createSVGPoint();C.x=l.clientX,C.y=l.clientY;const S=C.matrixTransform(A.inverse()),{gl:t,fb:L,dpr:N,texW:U,texH:D}=f,k=Math.floor(S.x*N),W=Math.floor(S.y*N);if(k<0||W<0||k>=U||W>=D){b(-1),E(null);return}t.bindFramebuffer(t.FRAMEBUFFER,L);const j=new Uint8Array(4);t.readPixels(k,D-1-W,1,1,t.RGBA,t.UNSIGNED_BYTE,j),t.bindFramebuffer(t.FRAMEBUFFER,null);const H=Ae(j[0],j[1],j[2]);b(H),E(H>=0?{x:S.x,y:S.y}:null)},[]),r=o.useCallback(()=>{b(-1),E(null)},[]),R=h>=0&&h<y.length?y[h]:null,P=(l,f)=>v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2,fontSize:12},children:[v.jsxs("div",{style:{fontWeight:600,color:"var(--color-text-primary)"},children:["Point ",f]}),Object.entries(l).map(([F,A])=>v.jsxs("div",{children:[v.jsxs("span",{style:{color:"var(--color-text-secondary)"},children:[F,":"]})," ",v.jsx("span",{style:{fontWeight:500},children:String(A)})]},F))]});return v.jsxs("g",{children:[v.jsx("foreignObject",{x:0,y:0,width:c,height:i,style:{overflow:"hidden"},children:v.jsx("canvas",{ref:_,style:{width:c,height:i,pointerEvents:"none"}})}),v.jsx("foreignObject",{x:0,y:0,width:0,height:0,style:{overflow:"hidden"},children:v.jsx("canvas",{ref:x,style:{display:"none"}})}),v.jsx("rect",{x:0,y:0,width:c,height:i,fill:"transparent",onMouseMove:a,onMouseLeave:r}),R&&h>=0&&v.jsxs("g",{pointerEvents:"none",children:[v.jsx("circle",{cx:G[h*2],cy:G[h*2+1],r:u/2+7,fill:"none",stroke:n,strokeWidth:2,strokeOpacity:.35}),v.jsx("circle",{cx:G[h*2],cy:G[h*2+1],r:u/2+2.5,fill:n,stroke:"var(--color-background-body, #fff)",strokeWidth:2})]}),R&&g&&v.jsx("foreignObject",{x:g.x+12,y:Math.max(0,g.y-40),width:200,height:120,pointerEvents:"none",style:{overflow:"visible"},children:v.jsx("div",{style:{background:"var(--color-background-popover)",border:"1px solid var(--color-border)",borderRadius:8,padding:"8px 12px",boxShadow:"var(--shadow-med)",whiteSpace:"nowrap",width:"fit-content"},children:d?d(R,h):P(R,h)})})]})}function Te(e,n){const{color:u}=n,s=n.size??6,c=n.opacity??.8,i=n.renderTooltip;return{type:"dotGLInteractive",key:e,dataKeys:[e],layout:{},resolve(y){const{data:d,xKey:_,xScale:x,yScale:h}=y,b=[];for(let g=0;g<d.length;g++){const E=d[g];let T;"bandwidth"in x?T=(x(String(E[_]))??0)+x.bandwidth()/2:T=x(E[_]);const p=typeof E[e]=="number"?E[e]:0;b.push({px:T,py:h(p),py0:h(0),dataIndex:g})}return b},render(y,d){return v.jsx(Se,{resolved:y,color:u,size:s,opacity:c,width:d.width,height:d.height,data:d.data,renderTooltip:i})}}}const Be=`
  attribute vec2 a_position;
  attribute vec3 a_color;
  uniform vec2 u_resolution;
  varying vec3 v_color;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_color = a_color;
  }
`,we=`
  precision mediump float;
  varying vec3 v_color;
  void main() {
    gl_FragColor = vec4(v_color, 1.0);
  }
`;function Pe(e,n){if(e.length===0)return[0,0,0];const u=Math.max(0,Math.min(1,Number.isFinite(n)?n:0));if(e.length===1)return e[0];const s=u*(e.length-1),c=Math.floor(s),i=Math.min(c+1,e.length-1),y=s-c;return[e[c][0]+y*(e[i][0]-e[c][0]),e[c][1]+y*(e[i][1]-e[c][1]),e[c][2]+y*(e[i][2]-e[c][2])]}function Ie({data:e,xKey:n,yKey:u,valueKey:s,xScale:c,colorRange:i,domain:y,cellGap:d,width:_,height:x}){const h=o.useRef(null),b=o.useRef(null),g=o.useRef(null),E=o.useRef(null),T=o.useRef(null),p=o.useRef(null),I=o.useRef(null),[m,B]=o.useState(0),M=o.useMemo(()=>i.map(J),[i]),w=o.useMemo(()=>{const a=[...new Set(e.map(r=>String(r[u])))];return me().domain(a).range([0,x]).padding(.05)},[e,u,x]),G=o.useMemo(()=>{if(y)return y;let a=1/0,r=-1/0;for(const R of e){const P=R[s];typeof P=="number"&&Number.isFinite(P)&&(P<a&&(a=P),P>r&&(r=P))}return!Number.isFinite(a)||!Number.isFinite(r)?[0,1]:[a,r]},[e,s,y]),O=o.useMemo(()=>{const a=[],r=[],[R,P]=G,l=P-R||1,f=d,F=c.bandwidth(),A=w.bandwidth();for(const C of e){const S=c(String(C[n])),t=w(String(C[u]));if(S==null||t==null)continue;const L=C[s],U=((typeof L=="number"&&Number.isFinite(L)?L:0)-R)/l,[D,k,W]=Pe(M,U),j=S+f/2,H=S+F-f/2,ee=t+f/2,te=t+A-f/2;a.push(j,ee,H,ee,j,te,H,ee,H,te,j,te);for(let ae=0;ae<6;ae++)r.push(D,k,W)}return{positions:new Float32Array(a),colors:new Float32Array(r),vertexCount:a.length/2}},[e,n,u,s,c,w,G,M,d]);return o.useEffect(()=>{const a=I.current;if(!a)return;h.current||(h.current=document.createElement("canvas"));const r=h.current,R=ie(a,r,_,x),P=X(r,()=>{b.current=null,g.current=null,E.current=null,T.current=null,p.current=null},()=>B(l=>l+1));return()=>{P(),R?.()}},[_,x]),o.useEffect(()=>{const a=h.current;if(!a||_<=0||x<=0)return;ce(a,_,x),b.current||(b.current=ne(a));const r=b.current;if(!r||r.isContextLost())return;g.current||(g.current=$(r,Be,we),p.current=null);const R=g.current;if(!R)return;E.current||(E.current=r.createBuffer()),T.current||(T.current=r.createBuffer());const P=E.current,l=T.current;if(!P||!l)return;p.current||(p.current={aPosition:r.getAttribLocation(R,"a_position"),aColor:r.getAttribLocation(R,"a_color"),uResolution:r.getUniformLocation(R,"u_resolution")});const f=p.current;r.viewport(0,0,a.width,a.height),oe(r),r.useProgram(R),r.bindBuffer(r.ARRAY_BUFFER,P),r.bufferData(r.ARRAY_BUFFER,O.positions,r.STATIC_DRAW),r.enableVertexAttribArray(f.aPosition),r.vertexAttribPointer(f.aPosition,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,l),r.bufferData(r.ARRAY_BUFFER,O.colors,r.STATIC_DRAW),r.enableVertexAttribArray(f.aColor),r.vertexAttribPointer(f.aColor,3,r.FLOAT,!1,0,0),r.uniform2f(f.uResolution,_,x),r.drawArrays(r.TRIANGLES,0,O.vertexCount)},[O,_,x,m]),o.useEffect(()=>()=>{const a=b.current;a&&(E.current&&a.deleteBuffer(E.current),T.current&&a.deleteBuffer(T.current),g.current&&a.deleteProgram(g.current),q(a)),b.current=null,g.current=null,E.current=null,T.current=null,p.current=null},[]),_<=0||x<=0?null:v.jsx("g",{ref:I})}function Me(e){const{xKey:n,yKey:u,valueKey:s,colorRange:c}=e,i=e.cellGap??1;return{type:"heatmapGL",key:`heatmap-${s}`,dataKeys:[s],layout:{},resolve(y){const{data:d,xScale:_,yScale:x}=y,h=[];if(!("bandwidth"in _))return h;for(let b=0;b<d.length;b++){const g=d[b],E=(_(String(g[n]))??0)+_.bandwidth()/2,T=typeof g[s]=="number"?g[s]:0;h.push({px:E,py:x(T),py0:x(0),dataIndex:b})}return h},render(y,d){return"bandwidth"in d.xScale?v.jsx(Ie,{data:d.data,xKey:n,yKey:u,valueKey:s,xScale:d.xScale,colorRange:c,domain:e.domain,cellGap:i,width:d.width,height:d.height}):null}}}const Ge=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  }
`,Ue=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    float a = u_opacity;
    gl_FragColor = vec4(u_color * a, a);
  }
`;function De({color:e,bufferSize:n,lineWidth:u,opacity:s,width:c,height:i,handleRef:y}){const{xScale:d,yScale:_}=de(),x=o.useRef(null),h=o.useRef(null),b=o.useRef(null),g=o.useRef(null),E=o.useRef(null),T=o.useRef(null),p=o.useRef(null),[I,m]=o.useState(0),B=o.useRef({data:new Float32Array(n*2),head:0,count:0,capacity:n}),M=o.useRef(new Float32Array(n*2));o.useEffect(()=>{const a=B.current;a.capacity!==n&&(a.data=new Float32Array(n*2),a.head=0,a.count=0,a.capacity=n,M.current=new Float32Array(n*2))},[n]);const w=o.useCallback(()=>{const a=x.current;if(!a||c<=0||i<=0)return;h.current||(h.current=ne(a));const r=h.current;if(!r||r.isContextLost())return;b.current||(b.current=$(r,Ge,Ue),E.current=null);const R=b.current;if(!R)return;g.current||(g.current=r.createBuffer());const P=g.current;if(!P)return;E.current||(E.current={aPosition:r.getAttribLocation(R,"a_position"),uResolution:r.getUniformLocation(R,"u_resolution"),uColor:r.getUniformLocation(R,"u_color"),uOpacity:r.getUniformLocation(R,"u_opacity")});const l=E.current;r.viewport(0,0,a.width,a.height),oe(r);const{data:f,head:F,count:A,capacity:C}=B.current;if(A<2)return;const S=d,t=M.current;for(let D=0;D<A;D++){const k=(F-A+D+C)%C*2;t[D*2]=S(f[k]),t[D*2+1]=_(f[k+1])}r.useProgram(R),r.bindBuffer(r.ARRAY_BUFFER,P),r.bufferData(r.ARRAY_BUFFER,t.subarray(0,A*2),r.DYNAMIC_DRAW),r.enableVertexAttribArray(l.aPosition),r.vertexAttribPointer(l.aPosition,2,r.FLOAT,!1,0,0);const[L,N,U]=J(e);r.uniform2f(l.uResolution,c,i),r.uniform3f(l.uColor,L,N,U),r.uniform1f(l.uOpacity,s),r.lineWidth(u),r.drawArrays(r.LINE_STRIP,0,A)},[c,i,e,u,s,d,_]),G=o.useRef(w);o.useEffect(()=>{G.current=w},[w]);const O=o.useCallback(()=>{p.current==null&&(p.current=requestAnimationFrame(()=>{p.current=null,G.current()}))},[]);return o.useEffect(()=>{const a=T.current;if(!a)return;x.current||(x.current=document.createElement("canvas"));const r=x.current,R=ie(a,r,c,i),P=X(r,()=>{p.current!=null&&(cancelAnimationFrame(p.current),p.current=null),h.current=null,b.current=null,g.current=null,E.current=null},()=>m(l=>l+1));return()=>{P(),R?.()}},[c,i]),o.useEffect(()=>{const a=x.current;!a||c<=0||i<=0||ce(a,c,i)},[c,i]),o.useEffect(()=>{O()},[w,O,I]),o.useImperativeHandle(y,()=>({push(a,r){if(!Number.isFinite(a)||!Number.isFinite(r))return;const R=B.current,P=R.head*2;R.data[P]=a,R.data[P+1]=r,R.head=(R.head+1)%R.capacity,R.count=Math.min(R.count+1,R.capacity),O()},clear(){const a=B.current;a.head=0,a.count=0,p.current!=null&&(cancelAnimationFrame(p.current),p.current=null);const r=h.current;r&&!r.isContextLost()&&(r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT))}}),[O]),o.useEffect(()=>()=>{p.current!=null&&(cancelAnimationFrame(p.current),p.current=null);const a=h.current;a&&(g.current&&a.deleteBuffer(g.current),b.current&&a.deleteProgram(b.current),q(a)),h.current=null,b.current=null,g.current=null,E.current=null},[]),c<=0||i<=0?null:v.jsx("g",{ref:T})}function Oe(e){const{color:n}=e,u=e.bufferSize??500,s=e.lineWidth??2,c=e.opacity??1,i=e.handleRef;return{type:"streamGL",key:"stream",dataKeys:[],layout:{},resolve(){return[]},render(y,d){return v.jsx(De,{color:n,bufferSize:u,lineWidth:s,opacity:c,width:d.width,height:d.height,handleRef:i})}}}const et={title:"Charts/WebGL",component:Z},Q=v.jsxs(v.Fragment,{children:[v.jsx(se,{position:"bottom"}),v.jsx(se,{position:"left"})]}),V={name:"Scatter — static (high-performance)",render:()=>v.jsx(Z,{data:fe,xKey:"x",title:"WebGL scatter — static (dotGL)",series:[ye("y",{color:"#3b82f6",size:5})],grid:v.jsx(re,{horizontal:!0,vertical:!0}),axes:Q,height:400})},z={name:"Interactive scatter — hover + tooltip",render:()=>v.jsx(Z,{data:fe,xKey:"x",title:"WebGL scatter — interactive hover (dotGLInteractive)",series:[Te("y",{color:"#6b1efd",size:6,renderTooltip:e=>v.jsxs("span",{children:["x: ",Math.round(e.x),", y: ",Math.round(e.y)]})})],grid:v.jsx(re,{horizontal:!0,vertical:!0}),axes:Q,height:400})},Y={render:()=>v.jsx(Z,{data:pe,xKey:"hour",title:"Traffic heatmap",series:[Me({xKey:"hour",yKey:"day",valueKey:"traffic",colorRange:["#eff6ff","#1e40af"]})],axes:Q,height:280})},K={render:()=>{const e=o.useRef(null),n=60,[u,s]=o.useState(n);return o.useEffect(()=>{let c=0;const i=setInterval(()=>{e.current?.push(c,50+Math.sin(c/10)*30+Math.random()*10),c++,s(Math.max(n,c))},200);return()=>clearInterval(i)},[]),v.jsx(Z,{data:[],xKey:"x",title:"Live stream (streamGL)",xDomain:[Math.max(0,u-n),u],yDomain:[0,100],series:[Oe({handleRef:e,color:"#3b82f6"})],grid:v.jsx(re,{}),axes:Q,height:300})}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Scatter — static (high-performance)',
  render: () => <Chart data={scatterData} xKey="x" title="WebGL scatter — static (dotGL)" series={[dotGL('y', {
    color: '#3b82f6',
    size: 5
  })]} grid={<ChartGrid horizontal vertical />} axes={axes} height={400} />
}`,...V.parameters?.docs?.source},description:{story:'Static, high-performance GPU scatter (`dotGL`) — one draw call, scales to\ntens of thousands of points. Intentionally has NO hover/tooltip; for\ninteractivity see "Interactive scatter" below.',...V.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Interactive scatter — hover + tooltip',
  render: () => <Chart data={scatterData} xKey="x" title="WebGL scatter — interactive hover (dotGLInteractive)" series={[dotGLInteractive('y', {
    color: '#6b1efd',
    size: 6,
    renderTooltip: (d: Record<string, unknown>) => <span>
              x: {Math.round(d.x as number)}, y: {Math.round(d.y as number)}
            </span>
  })]} grid={<ChartGrid horizontal vertical />} axes={axes} height={400} />
}`,...z.parameters?.docs?.source},description:{story:"GPU scatter with color-picking hover (`dotGLInteractive`) — hover any point\nfor a highlight + tooltip. O(1) hit detection regardless of point count.",...z.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={heatmapData} xKey="hour" title="Traffic heatmap" series={[heatmapGL({
    xKey: 'hour',
    yKey: 'day',
    valueKey: 'traffic',
    colorRange: ['#eff6ff', '#1e40af']
  })]} axes={axes} height={280} />
}`,...Y.parameters?.docs?.source},description:{story:"GPU heatmap — a 2D grid of colored cells (traffic by hour x day).",...Y.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleRef = useRef<StreamGLHandle | null>(null) as MutableRefObject<StreamGLHandle | null>;
    const WINDOW = 60;
    const [windowEnd, setWindowEnd] = useState(WINDOW);
    useEffect(() => {
      let t = 0;
      const interval = setInterval(() => {
        handleRef.current?.push(t, 50 + Math.sin(t / 10) * 30 + Math.random() * 10);
        t++;
        setWindowEnd(Math.max(WINDOW, t));
      }, 200);
      return () => clearInterval(interval);
    }, []);
    return <Chart data={[]} xKey="x" title="Live stream (streamGL)" xDomain={[Math.max(0, windowEnd - WINDOW), windowEnd]} yDomain={[0, 100]} series={[streamGL({
      handleRef,
      color: '#3b82f6'
    })]} grid={<ChartGrid />} axes={axes} height={300} />;
  }
}`,...K.parameters?.docs?.source},description:{story:"Streaming line via an imperative push handle + a sliding domain window.",...K.parameters?.docs?.description}}};const tt=["Scatter","InteractiveScatter","Heatmap","Streaming"];export{Y as Heatmap,z as InteractiveScatter,V as Scatter,K as Streaming,tt as __namedExportsOrder,et as default};
