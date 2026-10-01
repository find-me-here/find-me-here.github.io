(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,653096,e=>{e.v(t=>Promise.all(["static/chunks/2a-ynjeh20c4u.js"].map(t=>e.l(t))).then(()=>t(467211)))},701538,e=>{"use strict";var t=e.i(843476),n=e.i(770703),o=e.i(522016),r=e.i(271645),l=e.i(868127);let i="files",s="current";function a(){return new Promise((e,t)=>{let n=indexedDB.open("code-playground",1);n.onupgradeneeded=()=>n.result.createObjectStore(i),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function d(){try{let e=await a();return await new Promise((t,n)=>{let o=e.transaction(i,"readonly").objectStore(i).get(s);o.onsuccess=()=>t(o.result??null),o.onerror=()=>n(o.error)})}catch{return null}}async function c(e){try{let t=await a();await new Promise((n,o)=>{let r=t.transaction(i,"readwrite");r.objectStore(i).put(e,s),r.oncomplete=()=>n(),r.onerror=()=>o(r.error)})}catch{}}var u=e.i(762684);let p=(0,n.default)(()=>e.A(653096),{loadableGenerated:{modules:[467211]},ssr:!1}),g=[{key:"html",label:"index.html",language:"html",icon:l.SiHtml5,iconColor:"#e34f26"},{key:"css",label:"style.css",language:"css",icon:l.SiCss,iconColor:"#663399"},{key:"js",label:"script.js",language:"javascript",icon:l.SiJavascript,iconColor:"#f7df1e"}],f={html:`<div class="container">
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
}`},h={html:"",css:"",js:""};function x(e,t){return e.replace(RegExp(`</${t}`,"gi"),`<\\/${t}`)}function y(e){let t=x(e.css,"style"),n=x(e.js,"script");return`<!doctype html>
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
</html>`}let b={background:"none",border:"1px solid #30363d",color:"#8b949e",padding:"6px 12px",borderRadius:"6px",cursor:"pointer",fontSize:"0.85em",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap"},m={...b,background:"#21262d",color:"#c9d1d9",borderColor:"#444c56"};function w(e){switch(e){case"error":return"#f85149";case"warn":return"#d29922";case"log":return"#79c0ff";default:return"#8b949e"}}let v="allow-scripts allow-modals";function k(e){let t=`
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
    `;return e.replace(/(<html[^>]*>)/i,"$1"+t)}e.s(["CodePlaygroundTool",0,function(){let[e,n]=(0,r.useState)(f),[l,i]=(0,r.useState)("html"),[s,a]=(0,r.useState)(!1),[x,S]=(0,r.useState)(!0),[C,j]=(0,r.useState)(()=>k(y(f))),[L,E]=(0,r.useState)(null),[T,M]=(0,r.useState)(!1),[z,P]=(0,r.useState)([]),[R,D]=(0,r.useState)(!0),[B]=(0,r.useState)(!1),[H,I]=(0,r.useState)(!0),[$,W]=(0,r.useState)(0),O=(0,r.useRef)(null),F=(0,r.useRef)(null),U=(0,r.useRef)(null),A=(0,r.useRef)(null),N=(0,r.useRef)(null),K=(0,r.useRef)(null),[Y,J]=(0,r.useState)(50),[_,q]=(0,r.useState)(60),G=(0,r.useCallback)(()=>{I(!1),P([]),j(k(y(e))),setTimeout(()=>{W(e=>e+1),I(!0)},100)},[e]);(0,r.useEffect)(()=>{let e=!0;return d().then(t=>{e&&(t&&(n(t),j(k(y(t)))),a(!0))}),()=>{e=!1}},[]);let Q=(0,u.useSettled)(e,400);(0,r.useEffect)(()=>{s&&c(Q)},[Q,s]),(0,r.useEffect)(()=>{let e=e=>{H&&e.data&&"iframe-console-log"===e.data.type&&e.data.payload&&P(t=>[...t,e.data.payload])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[H]),(0,r.useEffect)(()=>{A.current?.scrollIntoView({behavior:"smooth"})},[z]),(0,r.useEffect)(()=>{function e(e){(e.metaKey||e.ctrlKey)&&"s"===e.key.toLowerCase()&&(e.preventDefault(),x||G())}return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},[x,G]);let V={background:x?"#238636":"#21262d",border:"1px solid "+(x?"#2ea043":"#30363d"),color:x?"#3fb950":"#8b949e",padding:"6px 12px",borderRadius:"6px",cursor:"pointer",fontSize:"0.85em",transition:"all 0.2s",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"4px"},X={...V,background:x?"#2ea043":"#30363d",borderColor:x?"#3fb950":"#444c56"};return T?(0,t.jsxs)("div",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh",display:"flex",flexDirection:"column",background:"#000",overflow:"hidden",zIndex:9999},children:[(0,t.jsxs)("div",{style:{height:"50px",background:"#1e1e1e",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 16px",borderBottom:"1px solid #30363d",flexShrink:0},children:[(0,t.jsx)("span",{style:{color:"#fff",fontWeight:600,fontSize:"0.95em"},children:"👁️ Preview Fullscreen"}),(0,t.jsx)("button",{type:"button",onClick:()=>M(!1),style:"exitFullscreen"===L?m:b,onMouseEnter:()=>E("exitFullscreen"),onMouseLeave:()=>E(null),title:"Exit Fullscreen",children:"⛔ Exit"})]}),(0,t.jsx)("div",{style:{flex:1,minHeight:0,minWidth:0,overflow:"hidden",background:"#fff"},children:(0,t.jsx)("iframe",{ref:F,title:"HTML Preview Fullscreen",sandbox:v,style:{width:"100%",height:"100%",border:"none",outline:"none",background:"#fff",display:"block"},srcDoc:C,tabIndex:0},$)})]}):(0,t.jsxs)("div",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh",display:"flex",flexDirection:"column",background:"#fff",overflow:"hidden",zIndex:40},children:[(0,t.jsxs)("div",{style:{height:"50px",background:"#1e1e1e",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 16px",borderBottom:"1px solid #30363d",gap:"12px",flexShrink:0},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px",minWidth:0},children:[(0,t.jsx)(o.default,{href:"/tools",style:{...b,textDecoration:"none"},onMouseEnter:e=>Object.assign(e.currentTarget.style,m),onMouseLeave:e=>Object.assign(e.currentTarget.style,b),title:"Back to all tools",children:"← All tools"}),(0,t.jsxs)("span",{style:{color:"#fff",fontWeight:600,fontSize:"0.95em",whiteSpace:"nowrap"},children:["🧩 Code Playground (",(0,t.jsx)(o.default,{href:"/",style:{color:"inherit",textDecoration:"none"},children:"meropage.com"}),")"]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,t.jsx)("button",{type:"button",onClick:()=>{confirm("Clear the HTML, CSS and JS? This can't be undone.")&&(n(h),i("html"),I(!1),P([]),setTimeout(()=>{j(k(y(h))),W(e=>e+1),I(!0)},50))},style:"clear"===L?m:b,onMouseEnter:()=>E("clear"),onMouseLeave:()=>E(null),title:"Clear the HTML, CSS and JS",children:"🗑️ Clear"}),(0,t.jsx)("button",{type:"button",onClick:()=>{I(!1),P([]),setTimeout(()=>{x||j(k(y(e))),W(e=>e+1),I(!0)},50),S(!x)},style:"live"===L?X:V,onMouseEnter:()=>E("live"),onMouseLeave:()=>E(null),title:x?"Disable Live Preview":"Enable Live Preview",children:x?"🔴 Live":"⚪ Manual"}),(0,t.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(e[l]),alert(`${g.find(e=>e.key===l)?.label} copied to clipboard!`)},style:"copy"===L?m:b,onMouseEnter:()=>E("copy"),onMouseLeave:()=>E(null),title:"Copy to Clipboard",children:"📋 Copy"}),(0,t.jsx)("button",{type:"button",onClick:()=>{let t=document.createElement("a"),n=new Blob([y(e)],{type:"text/html"});t.href=URL.createObjectURL(n),t.download="index.html",document.body.appendChild(t),t.click(),document.body.removeChild(t)},style:"download"===L?m:b,onMouseEnter:()=>E("download"),onMouseLeave:()=>E(null),title:"Download HTML",children:"⬇️ Download"}),(0,t.jsx)("button",{type:"button",onClick:()=>M(!0),style:"fullscreen"===L?m:b,onMouseEnter:()=>E("fullscreen"),onMouseLeave:()=>E(null),title:"Fullscreen Preview",children:"⛳ Fullscreen"}),(0,t.jsxs)("button",{type:"button",onClick:()=>D(!R),style:R?X:b,onMouseEnter:()=>E("console"),onMouseLeave:()=>E(null),title:R?"Hide Console":"Show Console",children:["🖥️ Console (",z.length,")"]})]})]}),(0,t.jsxs)("div",{ref:N,style:{display:"flex",width:"100%",flex:1,minHeight:0,overflow:"hidden"},children:[(0,t.jsxs)("div",{style:{flex:`0 0 ${Y}%`,display:"flex",flexDirection:"column",background:"#1e1e1e",minWidth:0,minHeight:0,overflow:"hidden"},children:[(0,t.jsx)("div",{style:{display:"flex",background:"#161b22",borderBottom:"1px solid #30363d",flexShrink:0},children:g.map(e=>{let n;return(0,t.jsxs)("button",{type:"button",onClick:()=>i(e.key),style:{display:"flex",alignItems:"center",gap:"6px",padding:"8px 14px",fontSize:"0.8em",fontFamily:"Monaco, Courier, monospace",background:l===(n=e.key)?"#1e1e1e":"transparent",color:l===n?"#fff":"#8b949e",border:"none",borderBottom:`2px solid ${l===n?"#58a6ff":"transparent"}`,cursor:"pointer",transition:"all 0.15s"},title:`Edit ${e.label}`,children:[(0,t.jsx)(e.icon,{"aria-hidden":!0,style:{color:e.iconColor,flexShrink:0},size:13}),e.label]},e.key)})}),(0,t.jsx)("div",{style:{flex:1,minHeight:0,minWidth:0,overflow:"hidden"},children:(0,t.jsx)(p,{height:"100%",width:"100%",path:l,language:g.find(e=>e.key===l)?.language,value:e[l],onChange:t=>{let o={...e,[l]:t??""};n(o),x&&j(k(y(o)))},onMount:e=>{U.current=e,e.updateOptions({fontSize:14,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",automaticLayout:!0})},theme:"vs-dark",loading:(0,t.jsx)("p",{style:{color:"#8b949e",padding:"12px",fontSize:"0.85em"},children:"Loading editor…"}),options:{minimap:{enabled:!1},fontSize:12,lineNumbers:"on",roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,quickSuggestions:!0,autoClosingBrackets:"always",autoClosingQuotes:"always",autoIndent:"full",folding:!0,foldingStrategy:"indentation",showFoldingControls:"mouseover",bracketPairColorization:{enabled:!0},padding:{top:16,bottom:16}}})})]}),(0,t.jsx)("div",{style:{flex:"0 0 6px",cursor:"col-resize",background:"colResize"===L?"#58a6ff":"#30363d",transition:"background 0.15s"},onPointerDown:e=>{e.preventDefault();let t=N.current?.getBoundingClientRect();if(!t)return;E("colResize");let n=e=>{J(Math.min(80,Math.max(20,(e.clientX-t.left)/t.width*100)))},o=()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o),document.body.style.cursor="",document.body.style.userSelect="",E(null)};document.body.style.cursor="col-resize",document.body.style.userSelect="none",window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)},title:"Drag to resize"}),(0,t.jsxs)("div",{ref:K,style:{flex:1,display:"flex",flexDirection:"column",minWidth:0,minHeight:0,overflow:"hidden"},children:[(0,t.jsxs)("div",{style:{flex:R&&!B?`0 0 ${_}%`:1,display:"flex",flexDirection:"column",background:"#fff",position:"relative",minWidth:0,minHeight:0,overflow:"hidden"},children:[(0,t.jsx)("div",{style:{flex:1,minHeight:0,minWidth:0,overflow:"hidden"},children:(0,t.jsx)("iframe",{ref:O,title:"HTML Preview",sandbox:v,style:{width:"100%",height:"100%",border:"none",outline:"none",background:"#fff",display:"block"},srcDoc:C,tabIndex:0},$)}),!x&&(0,t.jsx)("button",{type:"button",onClick:G,style:{position:"absolute",bottom:"20px",right:"20px",background:"#238636",border:"1px solid #2ea043",color:"#fff",padding:"8px 16px",borderRadius:"6px",cursor:"pointer",fontSize:"0.9em",fontWeight:500,transition:"all 0.2s",boxShadow:"0 4px 12px rgba(46, 160, 67, 0.3)",zIndex:50},onMouseEnter:e=>{e.currentTarget.style.background="#2ea043",e.currentTarget.style.boxShadow="0 6px 16px rgba(46, 160, 67, 0.5)",e.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:e=>{e.currentTarget.style.background="#238636",e.currentTarget.style.boxShadow="0 4px 12px rgba(46, 160, 67, 0.3)",e.currentTarget.style.transform="translateY(0)"},title:"Click to update preview",children:"▶️ Update Preview"})]}),R&&!B&&(0,t.jsx)("div",{style:{flex:"0 0 6px",cursor:"row-resize",background:"rowResize"===L?"#58a6ff":"#30363d",transition:"background 0.15s"},onPointerDown:e=>{e.preventDefault();let t=K.current?.getBoundingClientRect();if(!t)return;E("rowResize");let n=e=>{q(Math.min(85,Math.max(15,(e.clientY-t.top)/t.height*100)))},o=()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o),document.body.style.cursor="",document.body.style.userSelect="",E(null)};document.body.style.cursor="row-resize",document.body.style.userSelect="none",window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)},title:"Drag to resize"}),R&&(0,t.jsxs)("div",{style:{flex:+!B,display:"flex",flexDirection:"column",background:"#0d1117",minHeight:50*!B,overflow:"hidden",transition:"min-height 0.3s ease"},children:[(0,t.jsxs)("div",{style:{height:"40px",background:"#161b22",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 12px",borderBottom:B?"none":"1px solid #30363d",flexShrink:0,cursor:"grab",userSelect:"none"},children:[(0,t.jsxs)("span",{style:{color:"#8b949e",fontSize:"0.9em",fontWeight:500},children:["🖥️ Console Output (",z.length,")"," ",!x&&(0,t.jsx)("span",{style:{color:"#d29922",marginLeft:"8px",fontSize:"0.8em"},children:"⚠️ (Manual Mode)"})]}),(0,t.jsx)("div",{style:{display:"flex",gap:"6px"},children:(0,t.jsx)("button",{type:"button",onClick:()=>{P([])},style:{background:"none",border:"1px solid #30363d",color:"#8b949e",padding:"4px 8px",borderRadius:"4px",cursor:"pointer",fontSize:"0.8em",transition:"all 0.2s"},onMouseEnter:e=>{e.currentTarget.style.background="#21262d",e.currentTarget.style.color="#c9d1d9",e.currentTarget.style.borderColor="#444c56"},onMouseLeave:e=>{e.currentTarget.style.background="none",e.currentTarget.style.color="#8b949e",e.currentTarget.style.borderColor="#30363d"},title:"Clear console",children:"🗑️ Clear"})})]}),!B&&(0,t.jsxs)("div",{style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"Monaco, Courier, monospace",fontSize:"0.85em",minHeight:0},children:[x||0!==z.length?x&&0===z.length?(0,t.jsx)("div",{style:{color:"#6e7681",fontSize:"0.9em",fontStyle:"italic"},children:"No console output yet. Run your code to see logs here."}):z.map((e,n)=>(0,t.jsxs)("div",{style:{color:w(e.type),marginBottom:"8px",padding:"8px",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"4px",borderLeft:`3px solid ${w(e.type)}`,whiteSpace:"pre-wrap",wordBreak:"break-word",fontWeight:"error"===e.type?600:400},children:[(0,t.jsxs)("span",{style:{color:"#6e7681",marginRight:"8px",fontSize:"0.8em"},children:["[",e.timestamp,"]"]}),(0,t.jsxs)("span",{children:[function(e){switch(e){case"error":return"❌";case"warn":return"⚠️";case"log":return"ℹ️";default:return"📝"}}(e.type)," ",e.message]})]},n)):(0,t.jsx)("div",{style:{color:"#d29922",fontSize:"0.9em",fontStyle:"italic",padding:"12px",backgroundColor:"rgba(210, 153, 34, 0.1)",borderRadius:"4px",borderLeft:"3px solid #d29922"},children:'⚠️ Click "▶️ Update Preview" to run code and see console logs.'}),(0,t.jsx)("div",{ref:A})]})]})]})]})]})}],701538)},762684,e=>{"use strict";var t=e.i(271645);e.s(["useSettled",0,function(e,n){let[o,r]=(0,t.useState)(e);return(0,t.useEffect)(()=>{let t=window.setTimeout(()=>r(e),n);return()=>window.clearTimeout(t)},[e,n]),o}])}]);