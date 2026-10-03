(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,653096,e=>{e.v(t=>Promise.all(["static/chunks/2a-ynjeh20c4u.js"].map(t=>e.l(t))).then(()=>t(467211)))},618566,(e,t,n)=>{t.exports=e.r(976562)},705621,e=>{"use strict";var t=e.i(843476),n=e.i(522016),o=e.i(618566),r=e.i(410992);e.s(["BackToToolsLink",0,function({onClick:e,...i}){let l=(0,o.useRouter)();return(0,t.jsx)(n.default,{href:"/",onClick:t=>{e?.(t),t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||(0,r.cameFromPath)("/")&&(t.preventDefault(),l.back())},...i})}])},701538,e=>{"use strict";var t=e.i(843476),n=e.i(522016),o=e.i(705621),r=e.i(271645);let i="files",l="current";function a(){return new Promise((e,t)=>{let n=indexedDB.open("code-playground",1);n.onupgradeneeded=()=>n.result.createObjectStore(i),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function s(){try{let e=await a();return await new Promise((t,n)=>{let o=e.transaction(i,"readonly").objectStore(i).get(l);o.onsuccess=()=>t(o.result??null),o.onerror=()=>n(o.error)})}catch{return null}}async function d(e){try{let t=await a();await new Promise((n,o)=>{let r=t.transaction(i,"readwrite");r.objectStore(i).put(e,l),r.oncomplete=()=>n(),r.onerror=()=>o(r.error)})}catch{}}var c=e.i(248441),u=e.i(945060);let p=["mobile","tablet","desktop"],g={desktop:"(min-width: 1024px)",tablet:"(min-width: 640px)"},f={x:240,y:72},m=e=>e.reduce((e,t)=>e+t,0),x=e=>e.map(e=>`minmax(0, ${e}fr)`).join(" "),h=(e,t)=>Array.from({length:t},(t,n)=>e[n]??1),y=e=>`p${e}`;function b(e,t,n){return"main"===t?h(e.main,2):"side"===t?h(e.side,n-1):h(e.stack,n)}let w=e=>e.slice(0,-1).map((t,n)=>m(e.slice(0,n+1))/m(e)*100);function v(e,t,n,o){let r=e[t]+e[t+1],i=Math.min(o,r/2),l=Math.min(r-i,Math.max(i,e[t]+n)),a=[...e];return a[t]=l,a[t+1]=r-l,a}let k={"data-fluid-grid-handle":""},j={"data-fluid-grid-no-drag":""},S="data-fluid-grid-cell";function C({layout:e,onLayoutChange:n,panels:o,queries:i=g,minPx:l=f,swappable:a=!0,className:s,style:d}){var c;let m,h,k=(0,r.useId)(),j=(0,r.useRef)(null),[L,E]=(0,r.useState)(!1),T=e.order.filter(e=>null!=o[e]&&!1!==o[e]),$=function({gridRef:e,layout:t,setLayout:n,count:o,minPx:i,setInteracting:l}){let[a,s]=(0,r.useState)(null),d=n=>{let r=e.current?.getBoundingClientRect();if(!r)return null;let l=b(t,n.track,o),a=l.reduce((e,t)=>e+t,0)/("x"===n.axis?r.width:r.height);return{weights:l,frPerPx:a,min:i[n.axis]*a}},c=(e,t)=>n(n=>({...n,[e.track]:[...t,...n[e.track].slice(t.length)]}));return{active:a,startResize:(e,t)=>{let n=d(e);if(!n||0!==t.button)return;t.preventDefault(),t.currentTarget.setPointerCapture(t.pointerId);let o="x"===e.axis?t.clientX:t.clientY,r=t=>{let r=(("x"===e.axis?t.clientX:t.clientY)-o)*n.frPerPx;c(e,v(n.weights,e.index,r,n.min))},i=()=>{window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),document.body.style.cursor="",document.body.style.userSelect="",s(null),l(!1)};document.body.style.cursor="x"===e.axis?"col-resize":"row-resize",document.body.style.userSelect="none",s(e.key),l(!0),window.addEventListener("pointermove",r),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)},resizeWithKeys:(e,t)=>{let n="x"===e.axis?"ArrowLeft":"ArrowUp",o="x"===e.axis?"ArrowRight":"ArrowDown";if(t.key!==n&&t.key!==o)return;let r=d(e);if(!r)return;t.preventDefault();let{weights:i,min:l}=r,a=(i[e.index]+i[e.index+1])*.05;c(e,v(i,e.index,t.key===o?a:-a,l))}}}({gridRef:j,layout:e,setLayout:n,count:T.length,minPx:l,setInteracting:E}),P=function(e,t){let[n,o]=(0,r.useState)(null),[i,l]=(0,r.useState)(null);return{dragged:n,target:i,onPointerDown:n=>{let r=n.currentTarget,i=n.target;if(0!==n.button||!(i instanceof Element)||i.closest("[data-fluid-grid-no-drag]"))return;let a=i.closest("[data-fluid-grid-handle]")?.closest(`[${S}]`);if(!a||a.parentElement!==r)return;let s=a.getAttribute(S),{clientX:d,clientY:c}=n,u=!1,p=null,g=e=>{var n,i;let a;if(!u){if(6>Math.hypot(e.clientX-d,e.clientY-c))return;u=!0,r.setPointerCapture(e.pointerId),document.body.style.cursor="grabbing",document.body.style.userSelect="none",o(s),t(!0)}n=e.clientX,i=e.clientY,l(p=(a=document.elementFromPoint(n,i)?.closest(`[${S}]`))&&a.parentElement===r?a.getAttribute(S):null)},f=n=>{window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),u&&(document.body.style.cursor="",document.body.style.userSelect="",o(null),l(null),t(!1),"pointerup"===n.type&&p&&p!==s&&e(s,p))};window.addEventListener("pointermove",g),window.addEventListener("pointerup",f),window.addEventListener("pointercancel",f)}}}((e,t)=>n(n=>{var o;return{...n,order:(o=n.order,o.map(n=>n===e?t:n===t?e:n))}}),E);return(0,t.jsxs)("div",{ref:j,"data-fluid-grid":k,onPointerDown:a?P.onPointerDown:void 0,className:(0,u.cn)("relative grid min-h-0 min-w-0 overflow-hidden",a&&"[&_[data-fluid-grid-handle]]:cursor-grab [&_[data-fluid-grid-handle]]:touch-none [&_[data-fluid-grid-no-drag]]:cursor-auto",L&&"[&_iframe]:pointer-events-none",s),style:d,children:[(0,t.jsx)("style",{children:(c=T.length,m=`[data-fluid-grid="${k}"]`,h=t=>{let{columns:n,rows:o,areas:r}=function(e,t,n){let o=Array.from({length:n},(e,t)=>y(t));if("mobile"===e||n<2)return{columns:"minmax(0, 1fr)",rows:x(b(t,"stack",n)),areas:o.map(e=>`"${e}"`).join(" ")};let r=x(b(t,"main",n)),i=x(b(t,"side",n)),l=o.slice(1);return"desktop"===e?{columns:r,rows:i,areas:l.map(e=>`"p0 ${e}"`).join(" ")}:{rows:r,columns:i,areas:`"${l.map(()=>"p0").join(" ")}" "${l.join(" ")}"`}}(t,e,c),i=p.map(e=>`${m} .fg-divider-${e}{display:${e===t?"block":"none"}}`).join("");return`${m}{grid-template-columns:${n};grid-template-rows:${o};grid-template-areas:${r}}${i}`},`${h("mobile")}@media ${i.tablet}{${h("tablet")}}@media ${i.desktop}{${h("desktop")}}`)}),T.map((e,n)=>(0,t.jsxs)("div",{"data-fluid-grid-cell":e,className:(0,u.cn)("relative min-h-0 min-w-0 overflow-hidden",P.dragged===e&&"opacity-50"),style:{gridArea:y(n)},children:[o[e],P.target===e&&P.dragged!==e&&(0,t.jsx)("span",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 z-[5] ring-2 ring-inset ring-[var(--fluid-grid-accent,var(--color-accent))]"})]},e)),p.flatMap(t=>(function(e,t,n){if(n<2)return[];if("mobile"===e)return w(b(t,"stack",n)).map((e,t)=>({key:`stack-${t}`,track:"stack",index:t,axis:"y",style:{top:`${e}%`,left:0,right:0}}));let[o]=w(b(t,"main",n)),r=w(b(t,"side",n));return"desktop"===e?[{key:"main",track:"main",index:0,axis:"x",style:{left:`${o}%`,top:0,bottom:0}},...r.map((e,t)=>({key:`side-${t}`,track:"side",index:t,axis:"y",style:{top:`${e}%`,left:`${o}%`,right:0}}))]:[{key:"main",track:"main",index:0,axis:"y",style:{top:`${o}%`,left:0,right:0}},...r.map((e,t)=>({key:`side-${t}`,track:"side",index:t,axis:"x",style:{left:`${e}%`,top:`${o}%`,bottom:0}}))]})(t,e,T.length).map(e=>({...e,key:`${t}-${e.key}`,mode:t}))).map(e=>(0,t.jsx)("div",{role:"separator","aria-orientation":"x"===e.axis?"vertical":"horizontal","aria-label":"Resize panels",tabIndex:0,className:(0,u.cn)("group absolute z-10 touch-none outline-none",`fg-divider-${e.mode}`,"x"===e.axis?"w-2 -translate-x-1/2 cursor-col-resize":"h-2 -translate-y-1/2 cursor-row-resize"),style:e.style,onPointerDown:t=>$.startResize(e,t),onKeyDown:t=>$.resizeWithKeys(e,t),children:(0,t.jsx)("span",{"aria-hidden":!0,className:(0,u.cn)("absolute transition-colors","x"===e.axis?"inset-y-0 left-1/2 -translate-x-1/2 group-hover:w-0.5 group-focus-visible:w-0.5":"inset-x-0 top-1/2 -translate-y-1/2 group-hover:h-0.5 group-focus-visible:h-0.5",$.active===e.key?(0,u.cn)("bg-[var(--fluid-grid-accent,var(--color-accent))]","x"===e.axis?"w-0.5":"h-0.5"):(0,u.cn)("bg-[var(--fluid-grid-divider,var(--color-line))] group-hover:bg-[var(--fluid-grid-accent,var(--color-accent))] group-focus-visible:bg-[var(--fluid-grid-accent,var(--color-accent))]","x"===e.axis?"w-px":"h-px"))})},e.key))]})}let L={display:"flex",flexDirection:"column",width:"100%",height:"100%",minWidth:0,minHeight:0,overflow:"hidden"},E={display:"flex",alignItems:"stretch",justifyContent:"space-between",gap:"8px",minHeight:"36px",padding:"0 8px 0 10px",background:"#161b22",borderBottom:"1px solid #30363d",flexShrink:0,cursor:"grab",userSelect:"none"},T={display:"flex",alignItems:"center",gap:"8px",minWidth:0,flexShrink:10,color:"#8b949e",fontSize:"0.85em",fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},$={display:"flex",alignItems:"center",gap:"6px",minWidth:0,overflowX:"auto",scrollbarWidth:"none",cursor:"default"};function P({title:e,controls:n,background:o,children:r}){return(0,t.jsxs)("section",{style:{...L,background:o},children:[(0,t.jsxs)("header",{...k,style:E,title:"Drag onto another panel to swap them",children:[(0,t.jsxs)("span",{style:T,children:[(0,t.jsx)("span",{"aria-hidden":!0,style:{color:"#484f58",letterSpacing:"-2px"},children:"⠿"}),e]}),n&&(0,t.jsx)("div",{...j,style:$,children:n})]}),(0,t.jsx)("div",{style:{position:"relative",zIndex:0,flex:1,minHeight:0,minWidth:0,overflow:"hidden"},children:r})]})}function z(e){switch(e){case"error":return"#f85149";case"warn":return"#d29922";case"log":return"#79c0ff";default:return"#8b949e"}}function M({logs:e,livePreview:n,onClear:o}){let i=(0,r.useRef)(null);return(0,r.useEffect)(()=>{i.current?.scrollIntoView({behavior:"smooth",block:"nearest"})},[e]),(0,t.jsx)(P,{background:"#0d1117",title:(0,t.jsxs)(t.Fragment,{children:["🖥️ Console Output (",e.length,")",!n&&(0,t.jsx)("span",{style:{color:"#d29922",fontSize:"0.9em"},children:"⚠️ (Manual Mode)"})]}),controls:(0,t.jsx)("button",{type:"button",onClick:o,style:{background:"none",border:"1px solid #30363d",color:"#8b949e",padding:"4px 8px",borderRadius:"4px",cursor:"pointer",fontSize:"0.8em",transition:"all 0.2s",whiteSpace:"nowrap"},onMouseEnter:e=>{e.currentTarget.style.background="#21262d",e.currentTarget.style.color="#c9d1d9",e.currentTarget.style.borderColor="#444c56"},onMouseLeave:e=>{e.currentTarget.style.background="none",e.currentTarget.style.color="#8b949e",e.currentTarget.style.borderColor="#30363d"},title:"Clear console",children:"🗑️ Clear"}),children:(0,t.jsxs)("div",{style:{height:"100%",overflow:"auto",padding:"12px",fontFamily:"Monaco, Courier, monospace",fontSize:"0.85em"},children:[n||0!==e.length?n&&0===e.length?(0,t.jsx)("div",{style:{color:"#6e7681",fontSize:"0.9em",fontStyle:"italic"},children:"No console output yet. Run your code to see logs here."}):e.map((e,n)=>(0,t.jsxs)("div",{style:{color:z(e.type),marginBottom:"8px",padding:"8px",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"4px",borderLeft:`3px solid ${z(e.type)}`,whiteSpace:"pre-wrap",wordBreak:"break-word",fontWeight:"error"===e.type?600:400},children:[(0,t.jsxs)("span",{style:{color:"#6e7681",marginRight:"8px",fontSize:"0.8em"},children:["[",e.timestamp,"]"]}),(0,t.jsxs)("span",{children:[function(e){switch(e){case"error":return"❌";case"warn":return"⚠️";case"log":return"ℹ️";default:return"📝"}}(e.type)," ",e.message]})]},n)):(0,t.jsx)("div",{style:{color:"#d29922",fontSize:"0.9em",fontStyle:"italic",padding:"12px",backgroundColor:"rgba(210, 153, 34, 0.1)",borderRadius:"4px",borderLeft:"3px solid #d29922"},children:'⚠️ Click "▶️ Update Preview" to run code and see console logs.'}),(0,t.jsx)("div",{ref:i})]})})}var D=e.i(770703),R=e.i(868127);let I=(0,D.default)(()=>e.A(653096),{loadableGenerated:{modules:[467211]},ssr:!1}),W=[{key:"html",label:"index.html",language:"html",icon:R.SiHtml5,iconColor:"#e34f26"},{key:"css",label:"style.css",language:"css",icon:R.SiCss,iconColor:"#663399"},{key:"js",label:"script.js",language:"javascript",icon:R.SiJavascript,iconColor:"#f7df1e"}],B=e=>{e.updateOptions({fontSize:14,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",automaticLayout:!0})};function A({files:e,activeTab:n,onTabChange:o,onChange:r}){return(0,t.jsx)(P,{background:"#1e1e1e",title:"Editor",controls:W.map(e=>{var r;return(0,t.jsxs)("button",{type:"button",onClick:()=>o(e.key),style:{...{display:"flex",alignItems:"center",gap:"6px",padding:"0 12px",fontSize:"0.8em",fontFamily:"Monaco, Courier, monospace",background:(r=n===e.key)?"#1e1e1e":"transparent",color:r?"#fff":"#8b949e",border:"none",borderBottom:`2px solid ${r?"#58a6ff":"transparent"}`,cursor:"pointer",transition:"all 0.15s",whiteSpace:"nowrap"},alignSelf:"stretch"},title:`Edit ${e.label}`,children:[(0,t.jsx)(e.icon,{"aria-hidden":!0,style:{color:e.iconColor,flexShrink:0},size:13}),e.label]},e.key)}),children:(0,t.jsx)(I,{height:"100%",width:"100%",path:n,language:W.find(e=>e.key===n)?.language,value:e[n],onChange:r,onMount:B,theme:"vs-dark",loading:(0,t.jsx)("p",{style:{color:"#8b949e",padding:"12px",fontSize:"0.85em"},children:"Loading editor…"}),options:{minimap:{enabled:!1},fontSize:12,lineNumbers:"on",roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,quickSuggestions:!0,autoClosingBrackets:"always",autoClosingQuotes:"always",autoIndent:"full",folding:!0,foldingStrategy:"indentation",showFoldingControls:"mouseover",bracketPairColorization:{enabled:!0},padding:{top:16,bottom:16}}})})}function O(e,t){return e.replace(RegExp(`</${t}`,"gi"),`<\\/${t}`)}function F(e){let t=O(e.css,"style"),n=O(e.js,"script");return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTML Preview</title>
<style>${t}</style>
</head>
<body>
${e.html}
<script>${n}</script>
</body>
</html>`}let H="allow-scripts allow-modals";function K(e){let t=`
      <script>
        const CHANNEL_KEY = 'iframe-console-log';

        function sendToParentConsole(type, args) {
            try {
                const serializedArgs = args.map(arg => {
                    if (typeof arg === 'object' && arg !== null) {
                        try {
                            return JSON.stringify(arg, null, 2);
                        } catch (e) {
                            return String(arg);
                        }
                    }
                    return String(arg);
                });
                parent.postMessage({
                    type: CHANNEL_KEY,
                    payload: {
                        type: type,
                        message: serializedArgs.join(' '),
                        timestamp: new Date().toLocaleTimeString()
                    }
                }, '*');
            } catch (e) {}
        }

        const originalConsole = {
          log: console.log,
          warn: console.warn,
          error: console.error,
        };

        console.log = (...args) => {
          originalConsole.log.apply(console, args);
          sendToParentConsole('log', args);
        };

        console.warn = (...args) => {
          originalConsole.warn.apply(console, args);
          sendToParentConsole('warn', args);
        };

        console.error = (...args) => {
          originalConsole.error.apply(console, args);
          sendToParentConsole('error', args);
        };

        window.addEventListener('error', (event) => {
          sendToParentConsole('error', [\`\${event.filename || 'unknown'}:\${event.lineno || 'unknown'} - \${event.message}\`]);
          return false;
        });

        window.addEventListener('unhandledrejection', (event) => {
          sendToParentConsole('error', [\`Unhandled Promise Rejection: \${event.reason}\`]);
        });
      </script>
    `;return e.replace(/(<html[^>]*>)/i,"$1"+t)}function N({srcDoc:e,iframeKey:n,livePreview:o,onUpdate:r}){return(0,t.jsxs)(P,{background:"#fff",title:"👁️ Preview",children:[(0,t.jsx)("iframe",{title:"HTML Preview",sandbox:H,style:{width:"100%",height:"100%",border:"none",outline:"none",background:"#fff",display:"block"},srcDoc:e,tabIndex:0},n),!o&&(0,t.jsx)("button",{type:"button",onClick:r,style:{position:"absolute",bottom:"20px",right:"20px",background:"#238636",border:"1px solid #2ea043",color:"#fff",padding:"8px 16px",borderRadius:"6px",cursor:"pointer",fontSize:"0.9em",fontWeight:500,transition:"all 0.2s",boxShadow:"0 4px 12px rgba(46, 160, 67, 0.3)",zIndex:50},onMouseEnter:e=>{e.currentTarget.style.background="#2ea043",e.currentTarget.style.boxShadow="0 6px 16px rgba(46, 160, 67, 0.5)",e.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:e=>{e.currentTarget.style.background="#238636",e.currentTarget.style.boxShadow="0 4px 12px rgba(46, 160, 67, 0.3)",e.currentTarget.style.transform="translateY(0)"},title:"Click to update preview",children:"▶️ Update Preview"})]})}let U={html:`<div class="container">
  <h1>🎨 Welcome</h1>
  <p>Edit the code on the left to see live changes here</p>
  <button onclick="handleClick()">Click Me</button>
</div>`,css:`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  padding: 40px;
  text-align: center;
  max-width: 500px;
}

h1 {
  color: #333;
  margin-bottom: 15px;
  font-size: 2.5em;
}

p {
  color: #666;
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1em;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}`,js:`function handleClick() {
  console.log('Button clicked!');
}`},Y={html:"",css:"",js:""},X=function(e,t={}){return{order:e,main:t.main??[1,1],side:t.side??[],stack:t.stack??[]}}(["editor","preview","console"],{side:[3,2],stack:[5,4,3]}),_={"--fluid-grid-divider":"#30363d","--fluid-grid-accent":"#58a6ff",background:"#0d1117"},J={background:"none",border:"1px solid #30363d",color:"#8b949e",padding:"6px 12px",borderRadius:"6px",cursor:"pointer",fontSize:"0.85em",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap"},q={...J,background:"#21262d",color:"#c9d1d9",borderColor:"#444c56"};e.s(["CodePlaygroundTool",0,function(){let[e,i]=(0,r.useState)(U),[l,a]=(0,r.useState)("html"),[u,p]=(0,r.useState)(!1),[g,f]=(0,r.useState)(!0),[m,x]=(0,r.useState)(()=>K(F(U))),[h,y]=(0,r.useState)(null),[b,w]=(0,r.useState)(!1),[v,k]=(0,r.useState)([]),[j,S]=(0,r.useState)(!0),[L,E]=(0,r.useState)(!0),[T,$]=(0,r.useState)(0),P=(0,r.useRef)(null),[z,D]=(0,r.useState)(X),R=(0,r.useCallback)(()=>{E(!1),k([]),x(K(F(e))),setTimeout(()=>{$(e=>e+1),E(!0)},100)},[e]);(0,r.useEffect)(()=>{let e=!0;return s().then(t=>{e&&(t&&(i(t),x(K(F(t)))),p(!0))}),()=>{e=!1}},[]);let I=(0,c.useSettled)(e,400);(0,r.useEffect)(()=>{u&&d(I)},[I,u]),(0,r.useEffect)(()=>{let e=e=>{L&&e.data&&"iframe-console-log"===e.data.type&&e.data.payload&&k(t=>[...t,e.data.payload])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[L]),(0,r.useEffect)(()=>{function e(e){(e.metaKey||e.ctrlKey)&&"s"===e.key.toLowerCase()&&(e.preventDefault(),g||R())}return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},[g,R]);let B={background:g?"#238636":"#21262d",border:"1px solid "+(g?"#2ea043":"#30363d"),color:g?"#3fb950":"#8b949e",padding:"6px 12px",borderRadius:"6px",cursor:"pointer",fontSize:"0.85em",transition:"all 0.2s",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"4px"},O={...B,background:g?"#2ea043":"#30363d",borderColor:g?"#3fb950":"#444c56"};return b?(0,t.jsxs)("div",{style:{position:"fixed",inset:0,display:"flex",flexDirection:"column",background:"#000",overflow:"hidden",zIndex:9999},children:[(0,t.jsxs)("div",{style:{height:"50px",background:"#1e1e1e",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 16px",borderBottom:"1px solid #30363d",flexShrink:0},children:[(0,t.jsx)("span",{style:{color:"#fff",fontWeight:600,fontSize:"0.95em"},children:"👁️ Preview Fullscreen"}),(0,t.jsx)("button",{type:"button",onClick:()=>w(!1),style:"exitFullscreen"===h?q:J,onMouseEnter:()=>y("exitFullscreen"),onMouseLeave:()=>y(null),title:"Exit Fullscreen",children:"⛔ Exit"})]}),(0,t.jsx)("div",{style:{flex:1,minHeight:0,minWidth:0,overflow:"hidden",background:"#fff"},children:(0,t.jsx)("iframe",{ref:P,title:"HTML Preview Fullscreen",sandbox:H,style:{width:"100%",height:"100%",border:"none",outline:"none",background:"#fff",display:"block"},srcDoc:m,tabIndex:0},T)})]}):(0,t.jsxs)("div",{style:{position:"fixed",inset:0,display:"flex",flexDirection:"column",background:"#fff",overflow:"hidden",zIndex:40},children:[(0,t.jsxs)("div",{style:{minHeight:"50px",background:"#1e1e1e",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",padding:"8px clamp(8px, 2vw, 16px)",borderBottom:"1px solid #30363d",gap:"8px 12px",flexShrink:0},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px",minWidth:0,maxWidth:"100%"},children:[(0,t.jsx)(o.BackToToolsLink,{style:{...J,textDecoration:"none"},onMouseEnter:e=>Object.assign(e.currentTarget.style,q),onMouseLeave:e=>Object.assign(e.currentTarget.style,J),title:"Back to all tools",children:"← All tools"}),(0,t.jsxs)("span",{style:{color:"#fff",fontWeight:600,fontSize:"0.95em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0},children:["🧩 Code Playground (",(0,t.jsx)(n.default,{href:"/",style:{color:"inherit",textDecoration:"none"},children:"meropage.com"}),")"]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[(0,t.jsx)("button",{type:"button",onClick:()=>{confirm("Clear the HTML, CSS and JS? This can't be undone.")&&(i(Y),a("html"),E(!1),k([]),setTimeout(()=>{x(K(F(Y))),$(e=>e+1),E(!0)},50))},style:"clear"===h?q:J,onMouseEnter:()=>y("clear"),onMouseLeave:()=>y(null),title:"Clear the HTML, CSS and JS",children:"🗑️ Clear"}),(0,t.jsx)("button",{type:"button",onClick:()=>{E(!1),k([]),setTimeout(()=>{g||x(K(F(e))),$(e=>e+1),E(!0)},50),f(!g)},style:"live"===h?O:B,onMouseEnter:()=>y("live"),onMouseLeave:()=>y(null),title:g?"Disable Live Preview":"Enable Live Preview",children:g?"🔴 Live":"⚪ Manual"}),(0,t.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(e[l]),alert(`${W.find(e=>e.key===l)?.label} copied to clipboard!`)},style:"copy"===h?q:J,onMouseEnter:()=>y("copy"),onMouseLeave:()=>y(null),title:"Copy to Clipboard",children:"📋 Copy"}),(0,t.jsx)("button",{type:"button",onClick:()=>{let t=document.createElement("a"),n=new Blob([F(e)],{type:"text/html"});t.href=URL.createObjectURL(n),t.download="index.html",document.body.appendChild(t),t.click(),document.body.removeChild(t)},style:"download"===h?q:J,onMouseEnter:()=>y("download"),onMouseLeave:()=>y(null),title:"Download HTML",children:"⬇️ Download"}),(0,t.jsx)("button",{type:"button",onClick:()=>w(!0),style:"fullscreen"===h?q:J,onMouseEnter:()=>y("fullscreen"),onMouseLeave:()=>y(null),title:"Fullscreen Preview",children:"⛳ Fullscreen"}),(0,t.jsxs)("button",{type:"button",onClick:()=>S(!j),style:j?O:J,onMouseEnter:()=>y("console"),onMouseLeave:()=>y(null),title:j?"Hide Console":"Show Console",children:["🖥️ Console (",v.length,")"]})]})]}),(0,t.jsx)(C,{className:"flex-1",style:_,layout:z,onLayoutChange:D,panels:{editor:(0,t.jsx)(A,{files:e,activeTab:l,onTabChange:a,onChange:t=>{let n={...e,[l]:t??""};i(n),g&&x(K(F(n)))}}),preview:(0,t.jsx)(N,{srcDoc:m,iframeKey:T,livePreview:g,onUpdate:R}),console:j&&(0,t.jsx)(M,{logs:v,livePreview:g,onClear:()=>{k([])}})}})]})}],701538)},248441,e=>{"use strict";var t=e.i(271645);e.s(["useSettled",0,function(e,n){let[o,r]=(0,t.useState)(e);return(0,t.useEffect)(()=>{let t=window.setTimeout(()=>r(e),n);return()=>window.clearTimeout(t)},[e,n]),o}])},410992,e=>{"use strict";let t=null;e.s(["cameFromPath",0,function(e){return t===e},"rememberLeftPath",0,function(e){t=e}])}]);