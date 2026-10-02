(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,653096,e=>{e.v(t=>Promise.all(["static/chunks/2a-ynjeh20c4u.js"].map(t=>e.l(t))).then(()=>t(467211)))},987042,e=>{e.v(t=>Promise.all(["static/chunks/0kgzvr0sxwfj5.js","static/chunks/0yux2evbqhjbn.js"].map(t=>e.l(t))).then(()=>t(134614)))},234162,e=>{e.v(t=>Promise.all(["static/chunks/1wxgdfjtu8kp0.js","static/chunks/1z1_jx8p0gec4.js","static/chunks/2_0szbpd9j3bp.js"].map(t=>e.l(t))).then(()=>t(255749)))},684934,e=>{e.v(t=>Promise.all(["static/chunks/0kgzvr0sxwfj5.js","static/chunks/2zf4hj7b4sw7o.js","static/chunks/1gw-m2qazs9tl.js","static/chunks/2ltyveb-e12_1.js"].map(t=>e.l(t))).then(()=>t(58613)))},66151,e=>{e.v(t=>Promise.all(["static/chunks/2xzqg8006wbwk.js"].map(t=>e.l(t))).then(()=>t(860363)))},825834,e=>{e.v(t=>Promise.all(["static/chunks/0kgzvr0sxwfj5.js","static/chunks/1t_v97c6r1083.js"].map(t=>e.l(t))).then(()=>t(918657)))},979463,e=>{e.q("/_next/static/media/pdf.worker.min.3bl-ygmetel-a.mjs")},705621,e=>{"use strict";var t=e.i(843476),n=e.i(522016),o=e.i(618566),r=e.i(601960);e.s(["BackToToolsLink",0,function({onClick:e,...i}){let l=(0,o.useRouter)();return(0,t.jsx)(n.default,{href:"/",onClick:t=>{e?.(t),t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||(0,r.cameFromPath)("/")&&(t.preventDefault(),l.back())},...i})}])},784767,e=>{"use strict";var t=e.i(843476),n=e.i(945060);e.s(["ToolPanel",0,function({className:e,...o}){return(0,t.jsx)("div",{className:(0,n.cn)("rounded-2xl border border-line bg-paper p-5 shadow-soft sm:p-6",e),...o})}])},701538,e=>{"use strict";var t=e.i(843476),n=e.i(770703),o=e.i(522016),r=e.i(705621),i=e.i(271645),l=e.i(868127);let s="files",a="current";function d(){return new Promise((e,t)=>{let n=indexedDB.open("code-playground",1);n.onupgradeneeded=()=>n.result.createObjectStore(s),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function c(){try{let e=await d();return await new Promise((t,n)=>{let o=e.transaction(s,"readonly").objectStore(s).get(a);o.onsuccess=()=>t(o.result??null),o.onerror=()=>n(o.error)})}catch{return null}}async function u(e){try{let t=await d();await new Promise((n,o)=>{let r=t.transaction(s,"readwrite");r.objectStore(s).put(e,a),r.oncomplete=()=>n(),r.onerror=()=>o(r.error)})}catch{}}var p=e.i(762684);let g=(0,n.default)(()=>e.A(653096),{loadableGenerated:{modules:[467211]},ssr:!1}),f=[{key:"html",label:"index.html",language:"html",icon:l.SiHtml5,iconColor:"#e34f26"},{key:"css",label:"style.css",language:"css",icon:l.SiCss,iconColor:"#663399"},{key:"js",label:"script.js",language:"javascript",icon:l.SiJavascript,iconColor:"#f7df1e"}],m={html:`<div class="container">
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
}`},h={html:"",css:"",js:""};function x(e,t){return e.replace(RegExp(`</${t}`,"gi"),`<\\/${t}`)}function b(e){let t=x(e.css,"style"),n=x(e.js,"script");return`<!doctype html>
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
</html>`}let y={background:"none",border:"1px solid #30363d",color:"#8b949e",padding:"6px 12px",borderRadius:"6px",cursor:"pointer",fontSize:"0.85em",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap"},v={...y,background:"#21262d",color:"#c9d1d9",borderColor:"#444c56"};function w(e){switch(e){case"error":return"#f85149";case"warn":return"#d29922";case"log":return"#79c0ff";default:return"#8b949e"}}let k="allow-scripts allow-modals";function j(e){let t=`
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
    `;return e.replace(/(<html[^>]*>)/i,"$1"+t)}e.s(["CodePlaygroundTool",0,function(){let[e,n]=(0,i.useState)(m),[l,s]=(0,i.useState)("html"),[a,d]=(0,i.useState)(!1),[x,C]=(0,i.useState)(!0),[S,L]=(0,i.useState)(()=>j(b(m))),[T,E]=(0,i.useState)(null),[z,M]=(0,i.useState)(!1),[P,B]=(0,i.useState)([]),[R,$]=(0,i.useState)(!0),[I]=(0,i.useState)(!1),[D,F]=(0,i.useState)(!0),[N,H]=(0,i.useState)(0),W=(0,i.useRef)(null),A=(0,i.useRef)(null),O=(0,i.useRef)(null),U=(0,i.useRef)(null),K=(0,i.useRef)(null),_=(0,i.useRef)(null),[G,Y]=(0,i.useState)(50),[q,J]=(0,i.useState)(60),V=(0,i.useCallback)(()=>{F(!1),B([]),L(j(b(e))),setTimeout(()=>{H(e=>e+1),F(!0)},100)},[e]);(0,i.useEffect)(()=>{let e=!0;return c().then(t=>{e&&(t&&(n(t),L(j(b(t)))),d(!0))}),()=>{e=!1}},[]);let X=(0,p.useSettled)(e,400);(0,i.useEffect)(()=>{a&&u(X)},[X,a]),(0,i.useEffect)(()=>{let e=e=>{D&&e.data&&"iframe-console-log"===e.data.type&&e.data.payload&&B(t=>[...t,e.data.payload])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[D]),(0,i.useEffect)(()=>{U.current?.scrollIntoView({behavior:"smooth"})},[P]),(0,i.useEffect)(()=>{function e(e){(e.metaKey||e.ctrlKey)&&"s"===e.key.toLowerCase()&&(e.preventDefault(),x||V())}return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},[x,V]);let Q={background:x?"#238636":"#21262d",border:"1px solid "+(x?"#2ea043":"#30363d"),color:x?"#3fb950":"#8b949e",padding:"6px 12px",borderRadius:"6px",cursor:"pointer",fontSize:"0.85em",transition:"all 0.2s",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"4px"},Z={...Q,background:x?"#2ea043":"#30363d",borderColor:x?"#3fb950":"#444c56"};return z?(0,t.jsxs)("div",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh",display:"flex",flexDirection:"column",background:"#000",overflow:"hidden",zIndex:9999},children:[(0,t.jsxs)("div",{style:{height:"50px",background:"#1e1e1e",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 16px",borderBottom:"1px solid #30363d",flexShrink:0},children:[(0,t.jsx)("span",{style:{color:"#fff",fontWeight:600,fontSize:"0.95em"},children:"👁️ Preview Fullscreen"}),(0,t.jsx)("button",{type:"button",onClick:()=>M(!1),style:"exitFullscreen"===T?v:y,onMouseEnter:()=>E("exitFullscreen"),onMouseLeave:()=>E(null),title:"Exit Fullscreen",children:"⛔ Exit"})]}),(0,t.jsx)("div",{style:{flex:1,minHeight:0,minWidth:0,overflow:"hidden",background:"#fff"},children:(0,t.jsx)("iframe",{ref:A,title:"HTML Preview Fullscreen",sandbox:k,style:{width:"100%",height:"100%",border:"none",outline:"none",background:"#fff",display:"block"},srcDoc:S,tabIndex:0},N)})]}):(0,t.jsxs)("div",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh",display:"flex",flexDirection:"column",background:"#fff",overflow:"hidden",zIndex:40},children:[(0,t.jsxs)("div",{style:{height:"50px",background:"#1e1e1e",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 16px",borderBottom:"1px solid #30363d",gap:"12px",flexShrink:0},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px",minWidth:0},children:[(0,t.jsx)(r.BackToToolsLink,{style:{...y,textDecoration:"none"},onMouseEnter:e=>Object.assign(e.currentTarget.style,v),onMouseLeave:e=>Object.assign(e.currentTarget.style,y),title:"Back to all tools",children:"← All tools"}),(0,t.jsxs)("span",{style:{color:"#fff",fontWeight:600,fontSize:"0.95em",whiteSpace:"nowrap"},children:["🧩 Code Playground (",(0,t.jsx)(o.default,{href:"/",style:{color:"inherit",textDecoration:"none"},children:"meropage.com"}),")"]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,t.jsx)("button",{type:"button",onClick:()=>{confirm("Clear the HTML, CSS and JS? This can't be undone.")&&(n(h),s("html"),F(!1),B([]),setTimeout(()=>{L(j(b(h))),H(e=>e+1),F(!0)},50))},style:"clear"===T?v:y,onMouseEnter:()=>E("clear"),onMouseLeave:()=>E(null),title:"Clear the HTML, CSS and JS",children:"🗑️ Clear"}),(0,t.jsx)("button",{type:"button",onClick:()=>{F(!1),B([]),setTimeout(()=>{x||L(j(b(e))),H(e=>e+1),F(!0)},50),C(!x)},style:"live"===T?Z:Q,onMouseEnter:()=>E("live"),onMouseLeave:()=>E(null),title:x?"Disable Live Preview":"Enable Live Preview",children:x?"🔴 Live":"⚪ Manual"}),(0,t.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(e[l]),alert(`${f.find(e=>e.key===l)?.label} copied to clipboard!`)},style:"copy"===T?v:y,onMouseEnter:()=>E("copy"),onMouseLeave:()=>E(null),title:"Copy to Clipboard",children:"📋 Copy"}),(0,t.jsx)("button",{type:"button",onClick:()=>{let t=document.createElement("a"),n=new Blob([b(e)],{type:"text/html"});t.href=URL.createObjectURL(n),t.download="index.html",document.body.appendChild(t),t.click(),document.body.removeChild(t)},style:"download"===T?v:y,onMouseEnter:()=>E("download"),onMouseLeave:()=>E(null),title:"Download HTML",children:"⬇️ Download"}),(0,t.jsx)("button",{type:"button",onClick:()=>M(!0),style:"fullscreen"===T?v:y,onMouseEnter:()=>E("fullscreen"),onMouseLeave:()=>E(null),title:"Fullscreen Preview",children:"⛳ Fullscreen"}),(0,t.jsxs)("button",{type:"button",onClick:()=>$(!R),style:R?Z:y,onMouseEnter:()=>E("console"),onMouseLeave:()=>E(null),title:R?"Hide Console":"Show Console",children:["🖥️ Console (",P.length,")"]})]})]}),(0,t.jsxs)("div",{ref:K,style:{display:"flex",width:"100%",flex:1,minHeight:0,overflow:"hidden"},children:[(0,t.jsxs)("div",{style:{flex:`0 0 ${G}%`,display:"flex",flexDirection:"column",background:"#1e1e1e",minWidth:0,minHeight:0,overflow:"hidden"},children:[(0,t.jsx)("div",{style:{display:"flex",background:"#161b22",borderBottom:"1px solid #30363d",flexShrink:0},children:f.map(e=>{let n;return(0,t.jsxs)("button",{type:"button",onClick:()=>s(e.key),style:{display:"flex",alignItems:"center",gap:"6px",padding:"8px 14px",fontSize:"0.8em",fontFamily:"Monaco, Courier, monospace",background:l===(n=e.key)?"#1e1e1e":"transparent",color:l===n?"#fff":"#8b949e",border:"none",borderBottom:`2px solid ${l===n?"#58a6ff":"transparent"}`,cursor:"pointer",transition:"all 0.15s"},title:`Edit ${e.label}`,children:[(0,t.jsx)(e.icon,{"aria-hidden":!0,style:{color:e.iconColor,flexShrink:0},size:13}),e.label]},e.key)})}),(0,t.jsx)("div",{style:{flex:1,minHeight:0,minWidth:0,overflow:"hidden"},children:(0,t.jsx)(g,{height:"100%",width:"100%",path:l,language:f.find(e=>e.key===l)?.language,value:e[l],onChange:t=>{let o={...e,[l]:t??""};n(o),x&&L(j(b(o)))},onMount:e=>{O.current=e,e.updateOptions({fontSize:14,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",automaticLayout:!0})},theme:"vs-dark",loading:(0,t.jsx)("p",{style:{color:"#8b949e",padding:"12px",fontSize:"0.85em"},children:"Loading editor…"}),options:{minimap:{enabled:!1},fontSize:12,lineNumbers:"on",roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,quickSuggestions:!0,autoClosingBrackets:"always",autoClosingQuotes:"always",autoIndent:"full",folding:!0,foldingStrategy:"indentation",showFoldingControls:"mouseover",bracketPairColorization:{enabled:!0},padding:{top:16,bottom:16}}})})]}),(0,t.jsx)("div",{style:{flex:"0 0 6px",cursor:"col-resize",background:"colResize"===T?"#58a6ff":"#30363d",transition:"background 0.15s"},onPointerDown:e=>{e.preventDefault();let t=K.current?.getBoundingClientRect();if(!t)return;E("colResize");let n=e=>{Y(Math.min(80,Math.max(20,(e.clientX-t.left)/t.width*100)))},o=()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o),document.body.style.cursor="",document.body.style.userSelect="",E(null)};document.body.style.cursor="col-resize",document.body.style.userSelect="none",window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)},title:"Drag to resize"}),(0,t.jsxs)("div",{ref:_,style:{flex:1,display:"flex",flexDirection:"column",minWidth:0,minHeight:0,overflow:"hidden"},children:[(0,t.jsxs)("div",{style:{flex:R&&!I?`0 0 ${q}%`:1,display:"flex",flexDirection:"column",background:"#fff",position:"relative",minWidth:0,minHeight:0,overflow:"hidden"},children:[(0,t.jsx)("div",{style:{flex:1,minHeight:0,minWidth:0,overflow:"hidden"},children:(0,t.jsx)("iframe",{ref:W,title:"HTML Preview",sandbox:k,style:{width:"100%",height:"100%",border:"none",outline:"none",background:"#fff",display:"block"},srcDoc:S,tabIndex:0},N)}),!x&&(0,t.jsx)("button",{type:"button",onClick:V,style:{position:"absolute",bottom:"20px",right:"20px",background:"#238636",border:"1px solid #2ea043",color:"#fff",padding:"8px 16px",borderRadius:"6px",cursor:"pointer",fontSize:"0.9em",fontWeight:500,transition:"all 0.2s",boxShadow:"0 4px 12px rgba(46, 160, 67, 0.3)",zIndex:50},onMouseEnter:e=>{e.currentTarget.style.background="#2ea043",e.currentTarget.style.boxShadow="0 6px 16px rgba(46, 160, 67, 0.5)",e.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:e=>{e.currentTarget.style.background="#238636",e.currentTarget.style.boxShadow="0 4px 12px rgba(46, 160, 67, 0.3)",e.currentTarget.style.transform="translateY(0)"},title:"Click to update preview",children:"▶️ Update Preview"})]}),R&&!I&&(0,t.jsx)("div",{style:{flex:"0 0 6px",cursor:"row-resize",background:"rowResize"===T?"#58a6ff":"#30363d",transition:"background 0.15s"},onPointerDown:e=>{e.preventDefault();let t=_.current?.getBoundingClientRect();if(!t)return;E("rowResize");let n=e=>{J(Math.min(85,Math.max(15,(e.clientY-t.top)/t.height*100)))},o=()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o),document.body.style.cursor="",document.body.style.userSelect="",E(null)};document.body.style.cursor="row-resize",document.body.style.userSelect="none",window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)},title:"Drag to resize"}),R&&(0,t.jsxs)("div",{style:{flex:+!I,display:"flex",flexDirection:"column",background:"#0d1117",minHeight:50*!I,overflow:"hidden",transition:"min-height 0.3s ease"},children:[(0,t.jsxs)("div",{style:{height:"40px",background:"#161b22",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 12px",borderBottom:I?"none":"1px solid #30363d",flexShrink:0,cursor:"grab",userSelect:"none"},children:[(0,t.jsxs)("span",{style:{color:"#8b949e",fontSize:"0.9em",fontWeight:500},children:["🖥️ Console Output (",P.length,")"," ",!x&&(0,t.jsx)("span",{style:{color:"#d29922",marginLeft:"8px",fontSize:"0.8em"},children:"⚠️ (Manual Mode)"})]}),(0,t.jsx)("div",{style:{display:"flex",gap:"6px"},children:(0,t.jsx)("button",{type:"button",onClick:()=>{B([])},style:{background:"none",border:"1px solid #30363d",color:"#8b949e",padding:"4px 8px",borderRadius:"4px",cursor:"pointer",fontSize:"0.8em",transition:"all 0.2s"},onMouseEnter:e=>{e.currentTarget.style.background="#21262d",e.currentTarget.style.color="#c9d1d9",e.currentTarget.style.borderColor="#444c56"},onMouseLeave:e=>{e.currentTarget.style.background="none",e.currentTarget.style.color="#8b949e",e.currentTarget.style.borderColor="#30363d"},title:"Clear console",children:"🗑️ Clear"})})]}),!I&&(0,t.jsxs)("div",{style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"Monaco, Courier, monospace",fontSize:"0.85em",minHeight:0},children:[x||0!==P.length?x&&0===P.length?(0,t.jsx)("div",{style:{color:"#6e7681",fontSize:"0.9em",fontStyle:"italic"},children:"No console output yet. Run your code to see logs here."}):P.map((e,n)=>(0,t.jsxs)("div",{style:{color:w(e.type),marginBottom:"8px",padding:"8px",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"4px",borderLeft:`3px solid ${w(e.type)}`,whiteSpace:"pre-wrap",wordBreak:"break-word",fontWeight:"error"===e.type?600:400},children:[(0,t.jsxs)("span",{style:{color:"#6e7681",marginRight:"8px",fontSize:"0.8em"},children:["[",e.timestamp,"]"]}),(0,t.jsxs)("span",{children:[function(e){switch(e){case"error":return"❌";case"warn":return"⚠️";case"log":return"ℹ️";default:return"📝"}}(e.type)," ",e.message]})]},n)):(0,t.jsx)("div",{style:{color:"#d29922",fontSize:"0.9em",fontStyle:"italic",padding:"12px",backgroundColor:"rgba(210, 153, 34, 0.1)",borderRadius:"4px",borderLeft:"3px solid #d29922"},children:'⚠️ Click "▶️ Update Preview" to run code and see console logs.'}),(0,t.jsx)("div",{ref:U})]})]})]})]})]})}],701538)},809238,e=>{"use strict";var t=e.i(843476),n=e.i(271645);e.s(["RangeField",0,function({label:e,value:o,min:r,max:i,step:l=1,unit:s="",onChange:a}){let d=(0,n.useId)();return(0,t.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("label",{htmlFor:d,className:"text-[11px] font-semibold text-ink-soft",children:e}),(0,t.jsxs)("output",{htmlFor:d,className:"text-[11px] text-muted tabular-nums",children:[Math.round(o),s]})]}),(0,t.jsx)("input",{id:d,type:"range",min:r,max:i,step:l,value:o,onChange:e=>a(Number(e.target.value)),className:"h-4 w-full cursor-pointer accent-ink"})]})}])},376763,e=>{"use strict";var t=e.i(843476),n=e.i(945060);e.s(["SegmentedControl",0,function({label:e,value:o,options:r,onChange:i,size:l="sm"}){return(0,t.jsx)("div",{role:"radiogroup","aria-label":e,className:"inline-flex gap-0.5 rounded-lg bg-mist p-0.5",children:r.map(e=>{let r=e.value===o;return(0,t.jsx)("button",{type:"button",role:"radio","aria-checked":r,onClick:()=>i(e.value),className:(0,n.cn)("transition-colors","md"===l?"rounded-md px-4 py-1.5 text-[13px] font-semibold":"rounded px-2 py-0.5 text-[11px] font-medium",r?"bg-paper text-ink shadow":"text-muted hover:text-ink"),style:{minWidth:0},children:e.label},e.value)})})}])},473668,e=>{"use strict";var t=e.i(843476),n=e.i(271645),o=e.i(945060);let r=(e,t)=>`${e}-tab-${t}`,i=(e,t)=>`${e}-panel-${t}`;e.s(["TabPanel",0,function({idPrefix:e,id:n,active:o,children:l}){return(0,t.jsx)("div",{role:"tabpanel",id:i(e,n),"aria-labelledby":r(e,n),hidden:!o,children:l})},"Tabs",0,function({label:e,tabs:l,activeId:s,onSelect:a,idPrefix:d}){let c=(0,n.useRef)([]);return(0,t.jsx)("div",{role:"tablist","aria-label":e,className:"flex max-w-full gap-1 overflow-x-auto rounded-xl bg-mist p-1",children:l.map((e,n)=>{let u=e.id===s;return(0,t.jsxs)("button",{ref:e=>{c.current[n]=e},id:r(d,e.id),type:"button",role:"tab","aria-selected":u,"aria-controls":i(d,e.id),tabIndex:u?0:-1,onClick:()=>a(e.id),onKeyDown:e=>{let t;null!==(t=function(e,t,n){switch(e){case"ArrowRight":return t===n?0:t+1;case"ArrowLeft":return 0===t?n:t-1;case"Home":return 0;case"End":return n;default:return null}}(e.key,n,l.length-1))&&(e.preventDefault(),a(l[t].id),c.current[t]?.focus())},className:(0,o.cn)("inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[14px] font-semibold whitespace-nowrap transition-colors sm:px-4",u?"bg-paper text-ink shadow-soft":"text-muted hover:text-ink"),children:[e.icon,e.label,e.invalid&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{"aria-hidden":!0,className:"size-1.5 shrink-0 rounded-full bg-danger"}),(0,t.jsx)("span",{className:"sr-only",children:", needs fixing"})]})]},e.id)})})},"panelDomId",0,i,"tabDomId",0,r])},614667,e=>{"use strict";let t={"image/png":"png","image/jpeg":"jpg","image/gif":"gif","image/webp":"webp","image/avif":"avif","image/bmp":"bmp","image/x-icon":"ico","image/svg+xml":"svg"},n=/^data:([^;,]*)((?:;[^;,]*)*),/i,o=(e,t,n=0)=>t.every((t,o)=>e[n+o]===t),r=(e,t,n)=>String.fromCharCode(...e.subarray(t,n));function i(e){if(o(e,[137,80,78,71,13,10,26,10]))return"image/png";if(o(e,[255,216,255]))return"image/jpeg";if("GIF87a"===r(e,0,6)||"GIF89a"===r(e,0,6))return"image/gif";if("RIFF"===r(e,0,4)&&"WEBP"===r(e,8,12))return"image/webp";if("ftyp"===r(e,4,8)&&/^(avif|avis)$/.test(r(e,8,12)))return"image/avif";if(o(e,[66,77]))return"image/bmp";if(o(e,[0,0,1,0]))return"image/x-icon";let t=new TextDecoder().decode(e.subarray(0,512)).trimStart();return/^(<\?xml[^>]*>\s*)?(<!--[\s\S]*?-->\s*)*(<!doctype svg[^>]*>\s*)?<svg[\s>]/i.test(t)?"image/svg+xml":null}async function l(e){if(e.size>0xf00000)return{ok:!1,error:`“${e.name}” is ${s(e.size)} — images have to be under ${s(0xf00000)}.`};let n=new Uint8Array(await e.arrayBuffer()),o=i(n)??(e.type.startsWith("image/")?e.type:null);if(!o)return{ok:!1,error:`“${e.name}” doesn’t look like an image this tool can read.`};let r=t[o]??e.name.split(".").pop()?.toLowerCase()??"bin";return{ok:!0,image:{dataUrl:`data:${o};base64,${function(e){let t="";for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t)}(n)}`,mime:o,extension:r,bytes:n}}}function s(e){if(e<1024)return`${e} B`;let t=["KB","MB","GB"],n=e/1024,o=0;for(;n>=1024&&o<t.length-1;)n/=1024,o++;return`${n>=100?Math.round(n):n.toFixed(1)} ${t[o]}`}e.s(["MAX_ENCODE_IMAGE_BYTES",0,0xf00000,"decodeBase64Image",0,function(e){let o,r=e.trim();if(!r)return{ok:!1,error:"Paste some Base64 to see the image."};let l=r,s=null,a=n.exec(r);if(a){if(s=a[1].toLowerCase()||null,!/;base64/i.test(a[2]))return{ok:!1,error:"That data URL isn't Base64-encoded, so it can't be decoded here."};if(l=r.slice(a[0].length),/%[0-9a-f]{2}/i.test(l))try{l=decodeURIComponent(l)}catch{return{ok:!1,error:"That doesn't look like valid Base64."}}}let d=function(e){let t=e.replace(/\s+/g,"").replace(/-/g,"+").replace(/_/g,"/");if(!/^[A-Za-z0-9+/]*={0,2}$/.test(t))return null;let n=t.replace(/=+$/,"");return n.length%4==1?null:n+"=".repeat((4-n.length%4)%4)}(l);if(null===d)return{ok:!1,error:"That doesn't look like valid Base64. It should only contain letters, digits, +, / and = signs."};if(!d)return{ok:!1,error:"There's no data after the header."};try{o=function(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}(d)}catch{return{ok:!1,error:"That doesn't look like valid Base64."}}let c=i(o)??(s&&t[s]?s:null);return c?{ok:!0,image:{dataUrl:`data:${c};base64,${d}`,mime:c,extension:t[c],bytes:o}}:{ok:!1,error:"The Base64 decoded fine, but the data isn't a PNG, JPEG, GIF, WebP, AVIF, BMP, ICO or SVG image."}},"encodeImageFile",0,l,"formatBytes",0,s])},518815,e=>{"use strict";var t=e.i(271645);e.s(["useFillScreen",0,function(){let[e,n]=(0,t.useState)(!1),o=(0,t.useCallback)(()=>n(e=>!e),[]);return(0,t.useEffect)(()=>{if(!e)return;let t=document.documentElement,{overflow:o}=t.style;t.style.overflow="hidden";let r=e=>{"Escape"===e.key&&n(!1)};return document.addEventListener("keydown",r),()=>{t.style.overflow=o,document.removeEventListener("keydown",r)}},[e]),{active:e,toggle:o}}])},762684,e=>{"use strict";var t=e.i(271645);e.s(["useSettled",0,function(e,n){let[o,r]=(0,t.useState)(e);return(0,t.useEffect)(()=>{let t=window.setTimeout(()=>r(e),n);return()=>window.clearTimeout(t)},[e,n]),o}])}]);