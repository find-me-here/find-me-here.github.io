(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29439,72294,e=>{"use strict";let t,r,n,i,o,a;var l,s,c,u,d,p,h,f,m,g,v,_,b,y,k,w,S,j,I,z,C,E,A,P,L,M,N,T,O,D,B,F,R,V,H,W,$,q,U,Z,Y,X,G,K,J,Q,ee,et,er,en,ei,eo,ea,el,es,ec,eu,ed,ep,eh,ef,em,eg,ev,e_,eb,ex,ey,ek,ew,eS,ej,eI,ez,eC,eE,eA,eP,eL,eM,eN,eT,eO,eD,eB,eF,eR,eV,eH,eW,e$,eq,eU,eZ,eY,eX,eG,eK,eJ,eQ,e0,e1,e2,e4,e3,e6,e5,e8,e7,e9,te,tt,tr,tn,ti,to,ta,tl,ts,tc,tu,td,tp,th,tf,tm,tg,tv,t_,tb,tx,ty,tk,tw,tS,tj,tI,tz,tC,tE,tA,tP,tL,tM,tN,tT,tO,tD,tB,tF,tR,tV,tH,tW,t$,tq,tU,tZ,tY,tX,tG,tK,tJ,tQ,t0,t1,t2,t4,t3,t6,t5,t8,t7,t9,re,rt,rr,rn,ri,ro,ra,rl,rs,rc,ru,rd,rp,rh,rf,rm,rg=e.i(11848),rv=e.i(36329),r_=e.i(16031),rb=e.i(93821),rx=e.i(68653),ry=e.i(96568),rk=e.i(71645),rw=e.i(18050);(0,ry.init_react_import)(),(0,ry.init_react_import)(),(0,ry.init_react_import)(),(0,ry.init_react_import)(),(0,ry.init_react_import)(),(0,ry.init_react_import)();var rS=(e,t=e)=>({slot:({value:r,propName:n,field:i,isReadOnly:o})=>{let a=o?t:e;return e=>a((0,ry.__spreadProps)((0,ry.__spreadValues)({allow:(null==i?void 0:i.type)==="slot"?i.allow:[],disallow:(null==i?void 0:i.type)==="slot"?i.disallow:[]},e),{zone:n,content:r}))}});function rj(e,t,r){let n={};return Object.keys(e).forEach(i=>{n[i]=n=>{var{parentId:o}=n,a=(0,ry.__objRest)(n,["parentId"]);let l=a.propPath.replace(/\[\d+\]/g,"[*]"),s=(null==t?void 0:t[a.propPath])||(null==t?void 0:t[l])||r||!1,c=e[i];return null==c?void 0:c((0,ry.__spreadProps)((0,ry.__spreadValues)({},a),{field:a.field,isReadOnly:s,componentId:o}))}}),n}function rI(e,t,r,n=r,i,o){var a;let l,s;return a=rS(r,n),l=(0,rk.useMemo)(()=>rj(a,i,o),[a,i,o]),s=(0,rk.useMemo)(()=>(0,rx.mapFields)(t,l,e).props,[e,t,l]),(0,rk.useMemo)(()=>(0,ry.__spreadValues)((0,ry.__spreadValues)({},t.props),s),[t.props,s])}(0,ry.init_react_import)(),(0,ry.init_react_import)(),(0,ry.init_react_import)(),(0,ry.init_react_import)(),(0,ry.init_react_import)();var rz=(0,rb.get_class_name_factory_default)("RichTextEditor",rv.styles_module_default);function rC({content:e}){return(0,rw.jsx)("div",{className:rz(),children:(0,rw.jsx)("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:e}})})}(0,ry.init_react_import)();var rE=(e,t,r)=>{if(!e)return null;if(0===t.length)return r(e);let[n,...i]=t;return Array.isArray(e)?e.map(e=>rE(e,t,r)):(0,ry.__spreadProps)((0,ry.__spreadValues)({},e),{[n]:rE(e[n],i,r)})},rA=(0,rk.lazy)(()=>e.A(2728).then(e=>({default:e.RichTextRender})));function rP(e,t){let r=(e,t=[])=>{if(!e)return[];let n=[];for(let[i,o]of Object.entries(e)){let e=[...t,i];"richtext"===o.type&&n.push({path:e,field:o}),"array"===o.type&&"arrayFields"in o&&n.push(...r(o.arrayFields,e)),"object"===o.type&&"objectFields"in o&&n.push(...r(o.objectFields,e))}return n},n=(0,rk.useMemo)(()=>r(e),[e]);return(0,rk.useMemo)(()=>{if(!(null==n?void 0:n.length))return{};let e=(0,ry.__spreadValues)({},t);for(let{path:t,field:r}of n)e=rE(e,t,e=>(0,rw.jsx)(rk.Suspense,{fallback:(0,rw.jsx)(rC,{content:e}),children:(0,rw.jsx)(rA,{content:e,field:r})},t.join(".")));return e},[n,t,e])}(0,ry.init_react_import)();var rL=e=>(0,rw.jsx)(rN,(0,ry.__spreadValues)({},e)),rM=({config:e,item:t,metadata:r})=>{let n=e.components[t.type],i=rI(e,t,t=>(0,rw.jsx)(rL,(0,ry.__spreadProps)((0,ry.__spreadValues)({},t),{config:e,metadata:r}))),o=rP(n.fields,i);return(0,rw.jsx)(n.render,(0,ry.__spreadProps)((0,ry.__spreadValues)((0,ry.__spreadValues)({},i),o),{puck:(0,ry.__spreadProps)((0,ry.__spreadValues)({},i.puck),{metadata:r||{}})}))},rN=(0,rk.forwardRef)(function({className:e,style:t,content:r,config:n,metadata:i,as:o},a){return(0,rw.jsx)(null!=o?o:"div",{className:e,style:t,ref:a,children:r.map(e=>n.components[e.type]?(0,rw.jsx)(rM,{config:n,item:e,metadata:i},e.props.id):null)})}),rT=e.i(9071),rO=e.i(84173),rD=e.i(54396),rB=ry,rF=rw;let rR=(e,t)=>{let r=e instanceof Map?e:new Map(e.entries()),n=t instanceof Map?t:new Map(t.entries());if(r.size!==n.size)return!1;for(let[e,t]of r)if(!n.has(e)||!Object.is(t,n.get(e)))return!1;return!0};function rV(e){let t=rk.default.useRef(void 0);return r=>{let n=e(r);return!function(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Symbol.iterator in e&&Symbol.iterator in t){if("entries"in e&&"entries"in t)return rR(e,t);let r=e[Symbol.iterator](),n=t[Symbol.iterator](),i=r.next(),o=n.next();for(;!i.done&&!o.done;){if(!Object.is(i.value,o.value))return!1;i=r.next(),o=n.next()}return!!i.done&&!!o.done}return rR({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}(t.current,n)?t.current=n:t.current}}var rH=e.i(8155),rW=e.i(68834),r$=e.i(79473),rq=Symbol.for("preact-signals");function rU(){if(rJ>1)rJ--;else{var e,t=!1,r=r2;for(r2=void 0;void 0!==r;){var n=r.S;if(n.v===r.v)for(var i=n.t;void 0!==i;i=i.x)i.i===r.i&&(i.i=n.i);r=r.o}for(;void 0!==rK;){var o=rK;for(rK=void 0,rQ++;void 0!==o;){var a=o.u;if(o.u=void 0,o.f&=-3,!(8&o.f)&&r8(o))try{o.c()}catch(r){t||(e=r,t=!0)}o=a}}if(rQ=0,rJ--,t)throw e}}function rZ(e){if(rJ>0)return e();r1=++r0,rJ++;try{return e()}finally{rU()}}var rY,rX=void 0;function rG(e){var t=rX,r=rY;rX=void 0,rY=void 0;try{return e()}finally{rX=t,rY=r}}var rK=void 0,rJ=0,rQ=0,r0=0,r1=0,r2=void 0,r4=0;function r3(e){if(void 0!==rX){var t=e.n;if(void 0===t||t.t!==rX)return t={i:0,S:e,p:rX.s,n:void 0,t:rX,e:void 0,x:void 0,r:t},void 0!==rX.s&&(rX.s.n=t),rX.s=t,e.n=t,32&rX.f&&e.S(t),t;if(-1===t.i)return t.i=0,void 0!==t.n&&(t.n.p=t.p,void 0!==t.p&&(t.p.n=t.n),t.p=rX.s,t.n=void 0,rX.s.n=t,rX.s=t),t}}function r6(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=null==t?void 0:t.watched,this.Z=null==t?void 0:t.unwatched,this.name=null==t?void 0:t.name}function r5(e,t){return new r6(e,t)}function r8(e){for(var t=e.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function r7(e){for(var t=e.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r&&(t.r=r),t.S.n=t,t.i=-1,void 0===t.n){e.s=t;break}}}function r9(e){for(var t=e.s,r=void 0;void 0!==t;){var n=t.p;-1===t.i?(t.S.U(t),void 0!==n&&(n.n=t.n),void 0!==t.n&&(t.n.p=n)):r=t,t.S.n=t.r,void 0!==t.r&&(t.r=void 0),t=n}e.s=r}function ne(e,t){r6.call(this,void 0,t),this.x=e,this.s=void 0,this.g=r4-1,this.f=4}function nt(e){var t=e.m;if(e.m=void 0,"function"==typeof t){rJ++;var r=rX;rX=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,nr(e),t}finally{rX=r,rU()}}}function nr(e){for(var t=e.s;void 0!==t;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,nt(e)}function nn(e){if(rX!==this)throw Error("Out-of-order effect");r9(this),rX=e,this.f&=-2,8&this.f&&nr(this),rU()}function ni(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=null==t?void 0:t.name,rY&&rY.push(this)}function no(e,t){var r=new ni(e,t);try{r.c()}catch(e){throw r.d(),e}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}r6.prototype.brand=rq,r6.prototype.h=function(){return!0},r6.prototype.S=function(e){var t=this,r=this.t;r!==e&&void 0===e.e&&(e.x=r,this.t=e,void 0!==r?r.e=e:rG(function(){var e;null==(e=t.W)||e.call(t)}))},r6.prototype.U=function(e){var t=this;if(void 0!==this.t){var r=e.e,n=e.x;void 0!==r&&(r.x=n,e.e=void 0),void 0!==n&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,void 0===n&&rG(function(){var e;null==(e=t.Z)||e.call(t)}))}},r6.prototype.subscribe=function(e){var t=this;return no(function(){var r=t.value;rG(function(){return e(r)})},{name:"sub"})},r6.prototype.valueOf=function(){return this.value},r6.prototype.toString=function(){return this.value+""},r6.prototype.toJSON=function(){return this.value},r6.prototype.peek=function(){var e=this;return rG(function(){return e.value})},Object.defineProperty(r6.prototype,"value",{get:function(){var e=r3(this);return void 0!==e&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(rQ>100)throw Error("Cycle detected");0!==rJ&&0===rQ&&this.l!==r1&&(this.l=r1,r2={S:this,v:this.v,i:this.i,o:r2}),this.v=e,this.i++,r4++,rJ++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{rU()}}}}),ne.prototype=new r6,ne.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===r4))return!0;if(this.g=r4,this.f|=1,this.i>0&&!r8(this))return this.f&=-2,!0;var e=rX;try{r7(this),rX=this;var t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return rX=e,r9(this),this.f&=-2,!0},ne.prototype.S=function(e){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}r6.prototype.S.call(this,e)},ne.prototype.U=function(e){if(void 0!==this.t&&(r6.prototype.U.call(this,e),void 0===this.t)){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}},ne.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;void 0!==e;e=e.x)e.t.N()}},Object.defineProperty(ne.prototype,"value",{get:function(){if(1&this.f)throw Error("Cycle detected");var e=r3(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),ni.prototype.c=function(){var e=this.S();try{if(8&this.f||void 0===this.x)return;var t=this.x();"function"==typeof t&&(this.m=t)}finally{e()}},ni.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,nt(this),r7(this),rJ++;var e=rX;return rX=this,nn.bind(this,e)},ni.prototype.N=function(){2&this.f||(this.f|=2,this.u=rK,rK=this)},ni.prototype.d=function(){this.f|=8,1&this.f||nr(this)},ni.prototype.dispose=function(){this.d()};var na=Object.create,nl=Object.defineProperty,ns=Object.defineProperties,nc=Object.getOwnPropertyDescriptor,nu=Object.getOwnPropertyDescriptors,nd=Object.getOwnPropertySymbols,np=Object.prototype.hasOwnProperty,nh=Object.prototype.propertyIsEnumerable,nf=e=>{throw TypeError(e)},nm=(e,t,r)=>t in e?nl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ng=(e,t)=>nl(e,"name",{value:t,configurable:!0}),nv=["class","method","getter","setter","accessor","field","value","get","set"],n_=e=>void 0!==e&&"function"!=typeof e?nf("Function expected"):e,nb=(e,t,r,n,i)=>({kind:nv[e],name:t,metadata:n,addInitializer:e=>r._?nf("Already initialized"):i.push(n_(e||null))}),nx=(e,t)=>{let r,n;return nm(t,(r="metadata",(n=Symbol[r])?n:Symbol.for("Symbol."+r)),e[3])},ny=(e,t,r,n)=>{for(var i=0,o=e[t>>1],a=o&&o.length;i<a;i++)1&t?o[i].call(r):n=o[i].call(r,n);return n},nk=(e,t,r,n,i,o)=>{var a,l,s,c,u,d=7&t,p=!!(8&t),h=!!(16&t),f=d>3?e.length+1:d?p?1:2:0,m=nv[d+5],g=d>3&&(e[f-1]=[]),v=e[f]||(e[f]=[]),_=d&&(h||p||(i=i.prototype),d<5&&(d>3||!h)&&nc(d<4?i:{get[r](){return nj(this,o)},set[r](x){return nz(this,o,x)}},r));d?h&&d<4&&ng(o,(d>2?"set ":d>1?"get ":"")+r):ng(i,r);for(var b=n.length-1;b>=0;b--)c=nb(d,r,s={},e[3],v),d&&(c.static=p,c.private=h,u=c.access={has:h?e=>nS(i,e):e=>r in e},3^d&&(u.get=h?e=>(1^d?nj:nC)(e,i,4^d?o:_.get):e=>e[r]),d>2&&(u.set=h?(e,t)=>nz(e,i,t,4^d?o:_.set):(e,t)=>e[r]=t)),l=(0,n[b])(d?d<4?h?o:_[m]:d>4?void 0:{get:_.get,set:_.set}:i,c),s._=1,4^d||void 0===l?n_(l)&&(d>4?g.unshift(l):d?h?o=l:_[m]=l:i=l):"object"!=typeof l||null===l?nf("Object expected"):(n_(a=l.get)&&(_.get=a),n_(a=l.set)&&(_.set=a),n_(a=l.init)&&g.unshift(a));return d||nx(e,i),_&&nl(i,r,_),h?4^d?o:_:i},nw=(e,t,r)=>t.has(e)||nf("Cannot "+r),nS=(e,t)=>Object(t)!==t?nf('Cannot use the "in" operator on this value'):e.has(t),nj=(e,t,r)=>(nw(e,t,"read from private field"),r?r.call(e):t.get(e)),nI=(e,t,r)=>t.has(e)?nf("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),nz=(e,t,r,n)=>(nw(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),nC=(e,t,r)=>(nw(e,t,"access private method"),r);function nE(e,t){if(t){let r;return new ne(()=>{let n=e();return n&&r&&t(r,n)?r:(r=n,n)},void 0)}return new ne(e,void 0)}function nA(e,t){if(Object.is(e,t))return!0;if(null===e||null===t)return!1;if("function"==typeof e&&"function"==typeof t)return e===t;if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&!e.some((e,r)=>!nA(e,t[r]));if("object"==typeof e&&"object"==typeof t){let r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&!r.some(r=>!nA(e[r],t[r]))}return!1}function nP({get:e},t){return{init:e=>r5(e),get(){return e.call(this).value},set(t){let r=e.call(this);r.peek()!==t&&(r.value=t)}}}function nL(e,t){let r=new WeakMap;return function(){let t=r.get(this);return t||(t=nE(e.bind(this)),r.set(this,t)),t.value}}function nM(e=!0){return function(t,r){r.addInitializer(function(){let t="field"===r.kind||r.static?this:Object.getPrototypeOf(this),n=Object.getOwnPropertyDescriptor(t,r.name);n&&Object.defineProperty(t,r.name,ns(((e,t)=>{for(var r in t||(t={}))np.call(t,r)&&nm(e,r,t[r]);if(nd)for(var r of nd(t))nh.call(t,r)&&nm(e,r,t[r]);return e})({},n),nu({enumerable:e})))})}}function nN(...e){let t=e.map(e=>no(e));return()=>t.forEach(e=>e())}w=[nP],k=[nP],y=[nP],b=[nM()],_=[nM()],v=[nM()];var nT=class{constructor(e,t=Object.is){this.defaultValue=e,this.equals=t,ny(S,5,this),nI(this,E),nI(this,j,ny(S,8,this)),ny(S,11,this),nI(this,A,ny(S,12,this)),ny(S,15,this),nI(this,N,ny(S,16,this)),ny(S,19,this),this.reset=this.reset.bind(this),this.reset()}get current(){return nj(this,E,O)}get initial(){return nj(this,E,z)}get previous(){return nj(this,E,L)}set current(e){let t=rG(()=>nj(this,E,O));e&&t&&this.equals(t,e)||rZ(()=>{nj(this,E,z)||nz(this,E,e,C),nz(this,E,t,M),nz(this,E,e,D)})}reset(e=this.defaultValue){rZ(()=>{nz(this,E,void 0,M),nz(this,E,e,C),nz(this,E,e,D)})}};function nO(e){return rG(()=>{let t={};for(let r in e)t[r]=e[r];return t})}S=[,,,na(null)],j=new WeakMap,E=new WeakSet,A=new WeakMap,N=new WeakMap,z=(I=nk(S,20,"#initial",w,E,j)).get,C=I.set,L=(P=nk(S,20,"#previous",k,E,A)).get,M=P.set,O=(T=nk(S,20,"#current",y,E,N)).get,D=T.set,nk(S,2,"current",b,nT),nk(S,2,"initial",_,nT),nk(S,2,"previous",v,nT),nx(S,nT);var nD=class{constructor(){nI(this,B,new WeakMap)}get(e,t){var r;return e?null==(r=nj(this,B).get(e))?void 0:r.get(t):void 0}set(e,t,r){var n;if(e)return nj(this,B).has(e)||nj(this,B).set(e,new Map),null==(n=nj(this,B).get(e))?void 0:n.set(t,r)}clear(e){var t;return e?null==(t=nj(this,B).get(e))?void 0:t.clear():void 0}};B=new WeakMap;var nB=Object.create,nF=Object.defineProperty,nR=Object.getOwnPropertyDescriptor,nV=Object.getOwnPropertySymbols,nH=Object.prototype.hasOwnProperty,nW=Object.prototype.propertyIsEnumerable,n$=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),nq=e=>{throw TypeError(e)},nU=Math.pow,nZ=(e,t,r)=>t in e?nF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nY=(e,t)=>nF(e,"name",{value:t,configurable:!0}),nX=["class","method","getter","setter","accessor","field","value","get","set"],nG=e=>void 0!==e&&"function"!=typeof e?nq("Function expected"):e,nK=(e,t,r,n,i)=>({kind:nX[e],name:t,metadata:n,addInitializer:e=>r._?nq("Already initialized"):i.push(nG(e||null))}),nJ=(e,t)=>nZ(t,n$("metadata"),e[3]),nQ=(e,t,r,n,i,o)=>{var a,l,s,c,u,d=7&t,p=!!(8&t),h=!!(16&t),f=d>3?e.length+1:d?p?1:2:0,m=nX[d+5],g=d>3&&(e[f-1]=[]),v=e[f]||(e[f]=[]),_=d&&(h||p||(i=i.prototype),d<5&&(d>3||!h)&&nR(d<4?i:{get[r](){return n2(this,o)},set[r](x){return n4(this,o,x)}},r));d?h&&d<4&&nY(o,(d>2?"set ":d>1?"get ":"")+r):nY(i,r);for(var b=n.length-1;b>=0;b--)c=nK(d,r,s={},e[3],v),d&&(c.static=p,c.private=h,u=c.access={has:h?e=>n1(i,e):e=>r in e},3^d&&(u.get=h?e=>(1^d?n2:n3)(e,i,4^d?o:_.get):e=>e[r]),d>2&&(u.set=h?(e,t)=>n4(e,i,t,4^d?o:_.set):(e,t)=>e[r]=t)),l=(0,n[b])(d?d<4?h?o:_[m]:d>4?void 0:{get:_.get,set:_.set}:i,c),s._=1,4^d||void 0===l?nG(l)&&(d>4?g.unshift(l):d?h?o=l:_[m]=l:i=l):"object"!=typeof l||null===l?nq("Object expected"):(nG(a=l.get)&&(_.get=a),nG(a=l.set)&&(_.set=a),nG(a=l.init)&&g.unshift(a));return d||nJ(e,i),_&&nF(i,r,_),h?4^d?o:_:i},n0=(e,t,r)=>t.has(e)||nq("Cannot "+r),n1=(e,t)=>Object(t)!==t?nq('Cannot use the "in" operator on this value'):e.has(t),n2=(e,t,r)=>(n0(e,t,"read from private field"),r?r.call(e):t.get(e)),n4=(e,t,r,n)=>(n0(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),n3=(e,t,r)=>(n0(e,t,"access private method"),r),n6=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,r){return new e(t.x-r.x,t.y-r.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:r}){return new e(t,r)}},n5=class e{constructor(e,t,r,n){this.left=e,this.top=t,this.width=r,this.height=n,this.scale={x:1,y:1}}get inverseScale(){return{x:1/this.scale.x,y:1/this.scale.y}}translate(t,r){let{top:n,left:i,width:o,height:a,scale:l}=this,s=new e(i+t,n+r,o,a);return s.scale=((e,t)=>{for(var r in t||(t={}))nH.call(t,r)&&nZ(e,r,t[r]);if(nV)for(var r of nV(t))nW.call(t,r)&&nZ(e,r,t[r]);return e})({},l),s}get boundingRectangle(){let{width:e,height:t,left:r,top:n,right:i,bottom:o}=this;return{width:e,height:t,left:r,top:n,right:i,bottom:o}}get center(){let{left:e,top:t,right:r,bottom:n}=this;return new n6((e+r)/2,(t+n)/2)}get area(){let{width:e,height:t}=this;return e*t}equals(t){if(!(t instanceof e))return!1;let{left:r,top:n,width:i,height:o}=this;return r===t.left&&n===t.top&&i===t.width&&o===t.height}containsPoint(e){let{top:t,left:r,bottom:n,right:i}=this;return t<=e.y&&e.y<=n&&r<=e.x&&e.x<=i}intersectionArea(t){var r,n;let i,o,a,l;return t instanceof e?(r=this,i=Math.max((n=t).top,r.top),o=Math.max(n.left,r.left),a=Math.min(n.left+n.width,r.left+r.width),l=Math.min(n.top+n.height,r.top+r.height),o<a&&i<l?(a-o)*(l-i):0):0}intersectionRatio(e){let{area:t}=this,r=this.intersectionArea(e);return r/(e.area+t-r)}get bottom(){let{top:e,height:t}=this;return e+t}get right(){let{left:e,width:t}=this;return e+t}get aspectRatio(){let{width:e,height:t}=this;return e/t}get corners(){return[{x:this.left,y:this.top},{x:this.right,y:this.top},{x:this.left,y:this.bottom},{x:this.right,y:this.bottom}]}static from({top:t,left:r,width:n,height:i}){return new e(r,t,n,i)}static delta(e,t,r={x:"center",y:"center"}){let n=(e,t)=>{let n=r[t],i="x"===t?e.left:e.top,o="x"===t?e.width:e.height;return"start"==n?i:"end"==n?i+o:i+o/2};return n6.delta({x:n(e,"x"),y:n(e,"y")},{x:n(t,"x"),y:n(t,"y")})}static intersectionRatio(t,r){return e.from(t).intersectionRatio(e.from(r))}},n8=class extends(V=nT,R=[nL],F=[nL],V){constructor(e){super(n6.from(e),(e,t)=>n6.equals(e,t)),((e,t)=>{for(var r=0,n=e[2],i=n&&n.length;r<i;r++)n[r].call(t)})(W,this),((e,t)=>t.has(e)?nq("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,0))(this,H),this.velocity={x:0,y:0}}get delta(){return n6.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let r={x:e.x-t.x,y:e.y-t.y};return r.x||r.y?Math.abs(r.x)>Math.abs(r.y)?r.x>0?"right":"left":r.y>0?"down":"up":null}get current(){return super.current}set current(e){let{current:t}=this,r=n6.from(e),n={x:r.x-t.x,y:r.y-t.y},i=Date.now(),o=i-n2(this,H),a=e=>Math.round(e/o*100);rZ(()=>{n4(this,H,i),this.velocity={x:a(n.x),y:a(n.y)},super.current=r})}reset(e=this.defaultValue){super.reset(n6.from(e)),this.velocity={x:0,y:0}}};function n7({x:e,y:t},r){let n=Math.abs(e),i=Math.abs(t);return"number"==typeof r?Math.sqrt(nU(n,2)+nU(i,2))>r:"x"in r&&"y"in r?n>r.x&&i>r.y:"x"in r?n>r.x:"y"in r&&i>r.y}W=[,,,nB(null!=(l=null==V?void 0:V[n$("metadata")])?l:null)],H=new WeakMap,nQ(W,2,"delta",R,n8),nQ(W,2,"direction",F,n8),nJ(W,n8);var n9=((s=n9||{}).Horizontal="x",s.Vertical="y",s),ie=Object.values(n9),it=Object.create,ir=Object.defineProperty,ii=Object.defineProperties,io=Object.getOwnPropertyDescriptor,ia=Object.getOwnPropertyDescriptors,il=Object.getOwnPropertySymbols,is=Object.prototype.hasOwnProperty,ic=Object.prototype.propertyIsEnumerable,iu=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),id=e=>{throw TypeError(e)},ip=(e,t,r)=>t in e?ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ih=(e,t)=>{for(var r in t||(t={}))is.call(t,r)&&ip(e,r,t[r]);if(il)for(var r of il(t))ic.call(t,r)&&ip(e,r,t[r]);return e},im=(e,t)=>ii(e,ia(t)),ig=(e,t)=>ir(e,"name",{value:t,configurable:!0}),iv=(e,t)=>{var r={};for(var n in e)is.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&il)for(var n of il(e))0>t.indexOf(n)&&ic.call(e,n)&&(r[n]=e[n]);return r},i_=e=>{var t;return[,,,it(null!=(t=null==e?void 0:e[iu("metadata")])?t:null)]},ib=["class","method","getter","setter","accessor","field","value","get","set"],ix=e=>void 0!==e&&"function"!=typeof e?id("Function expected"):e,iy=(e,t,r,n,i)=>({kind:ib[e],name:t,metadata:n,addInitializer:e=>r._?id("Already initialized"):i.push(ix(e||null))}),ik=(e,t)=>ip(t,iu("metadata"),e[3]),iw=(e,t,r,n)=>{for(var i=0,o=e[t>>1],a=o&&o.length;i<a;i++)1&t?o[i].call(r):n=o[i].call(r,n);return n},iS=(e,t,r,n,i,o)=>{var a,l,s,c,u,d=7&t,p=!!(8&t),h=!!(16&t),f=d>3?e.length+1:d?p?1:2:0,m=ib[d+5],g=d>3&&(e[f-1]=[]),v=e[f]||(e[f]=[]),_=d&&(h||p||(i=i.prototype),d<5&&(d>3||!h)&&io(d<4?i:{get[r](){return iz(this,o)},set[r](x){return iE(this,o,x)}},r));d?h&&d<4&&ig(o,(d>2?"set ":d>1?"get ":"")+r):ig(i,r);for(var b=n.length-1;b>=0;b--)c=iy(d,r,s={},e[3],v),d&&(c.static=p,c.private=h,u=c.access={has:h?e=>iI(i,e):e=>r in e},3^d&&(u.get=h?e=>(1^d?iz:iA)(e,i,4^d?o:_.get):e=>e[r]),d>2&&(u.set=h?(e,t)=>iE(e,i,t,4^d?o:_.set):(e,t)=>e[r]=t)),l=(0,n[b])(d?d<4?h?o:_[m]:d>4?void 0:{get:_.get,set:_.set}:i,c),s._=1,4^d||void 0===l?ix(l)&&(d>4?g.unshift(l):d?h?o=l:_[m]=l:i=l):"object"!=typeof l||null===l?id("Object expected"):(ix(a=l.get)&&(_.get=a),ix(a=l.set)&&(_.set=a),ix(a=l.init)&&g.unshift(a));return d||ik(e,i),_&&ir(i,r,_),h?4^d?o:_:i},ij=(e,t,r)=>t.has(e)||id("Cannot "+r),iI=(e,t)=>Object(t)!==t?id('Cannot use the "in" operator on this value'):e.has(t),iz=(e,t,r)=>(ij(e,t,"read from private field"),r?r.call(e):t.get(e)),iC=(e,t,r)=>t.has(e)?id("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),iE=(e,t,r,n)=>(ij(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),iA=(e,t,r)=>(ij(e,t,"access private method"),r);function iP(e,t){return{plugin:e,options:t}}function iL(e){return t=>iP(e,t)}function iM(e){return"function"==typeof e?{plugin:e,options:void 0}:e}$=[nP];var iN=class{constructor(e,t){this.manager=e,this.options=t,iC(this,U,iw(q,8,this,!1)),iw(q,11,this),iC(this,Z,new Set)}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return rG(()=>this.disabled)}configure(e){this.options=e}registerEffect(e){let t=no(e.bind(this));return iz(this,Z).add(t),t}destroy(){iz(this,Z).forEach(e=>e())}static configure(e){return iP(this,e)}};q=i_(null),U=new WeakMap,Z=new WeakMap,iS(q,4,"disabled",$,iN,U),ik(q,iN);var iT=class extends iN{},iO=class{constructor(e){this.manager=e,this.instances=new Map,iC(this,Y,[])}get values(){return Array.from(this.instances.values())}set values(e){let t=e.map(iM).reduce((e,t)=>{let r=e.find(({plugin:e})=>e===t.plugin);return r?(r.options=t.options,e):[...e,t]},[]),r=t.map(({plugin:e})=>e);for(let e of iz(this,Y))if(!r.includes(e)){if(e.prototype instanceof iT)continue;this.unregister(e)}for(let{plugin:e,options:r}of t)this.register(e,r);iE(this,Y,r)}get(e){return this.instances.get(e)}register(e,t){let r=this.instances.get(e);if(r)return r.options!==t&&(r.options=t),r;let n=new e(this.manager,t);return this.instances.set(e,n),n}unregister(e){let t=this.instances.get(e);t&&(t.destroy(),this.instances.delete(e))}destroy(){for(let e of this.instances.values())e.destroy();this.instances.clear()}};function iD(e,t){return e.priority===t.priority?e.type===t.type?t.value-e.value:t.type-e.type:t.priority-e.priority}Y=new WeakMap;var iB=[],iF=class extends iN{constructor(e){super(e),iC(this,X),iC(this,G),this.computeCollisions=this.computeCollisions.bind(this),iE(this,G,r5(iB)),this.destroy=nN(()=>{let e=this.computeCollisions(),t=rG(()=>this.manager.dragOperation.position.current);if(e!==iB){let e=iz(this,X);if(iE(this,X,t),e&&t.x==e.x&&t.y==e.y)return}else iE(this,X,void 0);iz(this,G).value=e},()=>{let{dragOperation:e}=this.manager;e.status.initialized&&this.forceUpdate()})}forceUpdate(e=!0){rG(()=>{e?iz(this,G).value=this.computeCollisions():iE(this,X,void 0)})}computeCollisions(e,t){let{registry:r,dragOperation:n}=this.manager,{source:i,shape:o,status:a}=n;if(!a.initialized||!o)return iB;let l=[],s=[];for(let o of null!=e?e:r.droppables){if(o.disabled||i&&!o.accepts(i))continue;let e=null!=t?t:o.collisionDetector;if(!e)continue;s.push(o),o.shape;let r=rG(()=>e({droppable:o,dragOperation:n}));r&&(null!=o.collisionPriority&&(r.priority=o.collisionPriority),l.push(r))}return 0===s.length?iB:(l.sort(iD),l)}get collisions(){return iz(this,G).value}};X=new WeakMap,G=new WeakMap,Q=[nP],J=[nP],K=[nP];var iR=class e{constructor(e,t){iC(this,en,iw(er,8,this)),iw(er,11,this),iC(this,ei),iC(this,eo,iw(er,12,this)),iw(er,15,this),iC(this,ea,iw(er,16,this)),iw(er,19,this);const{effects:r,id:n,data:i={},disabled:o=!1,register:a=!0}=e;let l=n;iE(this,ei,r5(n)),this.manager=t,this.data=i,this.disabled=o,this.effects=()=>{var e;return[()=>{let{id:e,manager:t}=this;if(e!==l)return l=e,null==t||t.registry.register(this),()=>null==t?void 0:t.registry.unregister(this)},...null!=(e=null==r?void 0:r())?e:[]]},this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.destroy=this.destroy.bind(this),t&&a&&queueMicrotask(this.register)}get id(){var t,r;let n=iz(this,ei).value;return null!=(r=null==(t=e.pendingIdChanges)?void 0:t.get(this))?r:n}set id(t){var r,n;t!==(null!=(n=null==(r=e.pendingIdChanges)?void 0:r.get(this))?n:iz(this,ei).peek())&&(e.pendingIdChanges||(e.pendingIdChanges=new Map,queueMicrotask(()=>iA(e,ee,et).call(e))),e.pendingIdChanges.set(this,t))}register(){var e;return null==(e=this.manager)?void 0:e.registry.register(this)}unregister(){var e;null==(e=this.manager)||e.registry.unregister(this)}destroy(){var e;null==(e=this.manager)||e.registry.unregister(this)}};er=i_(null),ee=new WeakSet,et=function(){let e=iR.pendingIdChanges;iR.pendingIdChanges=null,e&&rZ(()=>{for(let[t,r]of e)iz(t,ei).value=r})},en=new WeakMap,ei=new WeakMap,eo=new WeakMap,ea=new WeakMap,iS(er,4,"manager",Q,iR,en),iS(er,4,"data",J,iR,eo),iS(er,4,"disabled",K,iR,ea),iC(iR,ee),ik(er,iR),iR.pendingIdChanges=null;var iV=iR,iH=class{constructor(){this.map=r5(new Map),this.cleanupFunctions=new WeakMap,this.register=(e,t)=>{let r=this.map.peek(),n=r.get(e),i=()=>this.unregister(e,t);if(n===t)return i;if(n&&n.id===e){let e=this.cleanupFunctions.get(n);null==e||e(),this.cleanupFunctions.delete(n)}let o=new Map(r);for(let[n,i]of r)if(i===t&&n!==e){o.delete(n);break}o.set(e,t),this.map.value=o;let a=nN(...t.effects());return this.cleanupFunctions.set(t,a),i},this.unregister=(e,t)=>{let r=this.map.peek();if(r.get(e)!==t)return;let n=this.cleanupFunctions.get(t);null==n||n(),this.cleanupFunctions.delete(t);let i=new Map(r);i.delete(e),this.map.value=i}}[Symbol.iterator](){return this.map.peek().values()}get value(){return this.map.value.values()}has(e){return this.map.value.has(e)}get(e){return this.map.value.get(e)}destroy(){for(let e of this){let t=this.cleanupFunctions.get(e);null==t||t(),e.destroy()}this.map.value=new Map}},iW=class extends(eh=iV,ep=[nP],ed=[nP],eu=[nP],ec=[nL],es=[nL],el=[nL],eh){constructor(e,t){var{modifiers:r,type:n,sensors:i,plugins:o,effects:a}=e,l=iv(e,["modifiers","type","sensors","plugins","effects"]);super(im(ih({},l),{effects:()=>{var e;return[...null!=(e=null==a?void 0:a())?e:[],()=>{let{manager:e,plugins:t}=this;if(e&&t)for(let r of t){let{plugin:t}=iM(r);e.registry.plugins.register(t)}}]}}),t),iw(ef,5,this),iC(this,em,iw(ef,8,this)),iw(ef,11,this),iC(this,eg,iw(ef,12,this)),iw(ef,15,this),iC(this,ev,iw(ef,16,this,this.isDragSource?"dragging":"idle")),iw(ef,19,this),this.type=n,this.sensors=i,this.modifiers=r,this.alignment=l.alignment,this.plugins=o}pluginConfig(e){if(this.plugins)for(let t of this.plugins){let r=iM(t);if(r.plugin===e)return r.options}}get isDropping(){return"dropping"===this.status&&this.isDragSource}get isDragging(){return"dragging"===this.status&&this.isDragSource}get isDragSource(){var e,t;return(null==(t=null==(e=this.manager)?void 0:e.dragOperation.source)?void 0:t.id)===this.id}};ef=i_(eh),em=new WeakMap,eg=new WeakMap,ev=new WeakMap,iS(ef,4,"type",ep,iW,em),iS(ef,4,"modifiers",ed,iW,eg),iS(ef,4,"status",eu,iW,ev),iS(ef,2,"isDropping",ec,iW),iS(ef,2,"isDragging",es,iW),iS(ef,2,"isDragSource",el,iW),ik(ef,iW);var i$=class extends(eS=iV,ew=[nP],ek=[nP],ey=[nP],ex=[nP],eb=[nP],e_=[nL],eS){constructor(e,t){var{accept:r,collisionDetector:n,collisionPriority:i,type:o}=e;super(iv(e,["accept","collisionDetector","collisionPriority","type"]),t),iw(ej,5,this),iC(this,eI,iw(ej,8,this)),iw(ej,11,this),iC(this,ez,iw(ej,12,this)),iw(ej,15,this),iC(this,eC,iw(ej,16,this)),iw(ej,19,this),iC(this,eE,iw(ej,20,this)),iw(ej,23,this),iC(this,eA,iw(ej,24,this)),iw(ej,27,this),this.accept=r,this.collisionDetector=n,this.collisionPriority=i,this.type=o}accepts(e){let{accept:t}=this;return!t||("function"==typeof t?t(e):!!e.type&&(Array.isArray(t)?t.includes(e.type):e.type===t))}get isDropTarget(){var e,t;return(null==(t=null==(e=this.manager)?void 0:e.dragOperation.target)?void 0:t.id)===this.id}};ej=i_(eS),eI=new WeakMap,ez=new WeakMap,eC=new WeakMap,eE=new WeakMap,eA=new WeakMap,iS(ej,4,"accept",ew,i$,eI),iS(ej,4,"type",ek,i$,ez),iS(ej,4,"collisionDetector",ey,i$,eC),iS(ej,4,"collisionPriority",ex,i$,eE),iS(ej,4,"shape",eb,i$,eA),iS(ej,2,"isDropTarget",e_,i$),ik(ej,i$);var iq=class{constructor(){this.registry=new Map}addEventListener(e,t){let{registry:r}=this,n=new Set(r.get(e));return n.add(t),r.set(e,n),()=>this.removeEventListener(e,t)}removeEventListener(e,t){let{registry:r}=this,n=new Set(r.get(e));n.delete(t),r.set(e,n)}dispatch(e,...t){let{registry:r}=this,n=r.get(e);if(n)for(let e of n)e(...t)}},iU=class extends iq{constructor(e){super(),this.manager=e}dispatch(e,t){let r=[t,this.manager];super.dispatch(e,...r)}};function iZ(e,t=!0){let r=!1;return im(ih({},e),{cancelable:t,get defaultPrevented(){return r},preventDefault(){t&&(r=!0)}})}var iY=class extends iT{constructor(e){super(e);let t=[];this.destroy=nN(()=>{let{dragOperation:r,collisionObserver:n}=e;r.status.initializing&&(t=[],n.enable())},()=>{let r,{collisionObserver:n,monitor:i}=e,{collisions:o}=n;if(n.isDisabled()||iV.pendingIdChanges)return;let a=iZ({collisions:o});if(i.dispatch("collision",a),a.defaultPrevented||(r=t,o.map(({id:e})=>e).join("")===r.map(({id:e})=>e).join("")))return;t=o;let[l]=o;rG(()=>{var t;(null==l?void 0:l.id)!==(null==(t=e.dragOperation.target)?void 0:t.id)&&(n.disable(),e.actions.setDropTarget(null==l?void 0:l.id).then(()=>{n.enable()}))})})}},iX=((c=iX||{})[c.Lowest=0]="Lowest",c[c.Low=1]="Low",c[c.Normal=2]="Normal",c[c.High=3]="High",c[c.Highest=4]="Highest",c),iG=((u=iG||{})[u.Collision=0]="Collision",u[u.ShapeIntersection=1]="ShapeIntersection",u[u.PointerIntersection=2]="PointerIntersection",u);eD=[nP],eO=[nL],eT=[nL],eN=[nL],eM=[nL],eL=[nL],eP=[nL];var iK=class{constructor(){iw(eB,5,this),iC(this,eF,iw(eB,8,this,"idle")),iw(eB,11,this)}get current(){return this.value}get idle(){return"idle"===this.value}get initializing(){return"initializing"===this.value}get initialized(){let{value:e}=this;return"idle"!==e&&"initialization-pending"!==e}get dragging(){return"dragging"===this.value}get dropped(){return"dropped"===this.value}set(e){this.value=e}};eB=i_(null),eF=new WeakMap,iS(eB,4,"value",eD,iK,eF),iS(eB,2,"current",eO,iK),iS(eB,2,"idle",eT,iK),iS(eB,2,"initializing",eN,iK),iS(eB,2,"initialized",eM,iK),iS(eB,2,"dragging",eL,iK),iS(eB,2,"dropped",eP,iK),ik(eB,iK);var iJ=class{constructor(e){this.manager=e}setDragSource(e){let{dragOperation:t}=this.manager;t.sourceIdentifier="string"==typeof e||"number"==typeof e?e:e.id}setDropTarget(e){return rG(()=>{let{dragOperation:t}=this.manager,r=null!=e?e:null;if(t.targetIdentifier===r)return Promise.resolve(!1);t.targetIdentifier=r;let n=iZ({operation:t.snapshot()});return t.status.dragging&&this.manager.monitor.dispatch("dragover",n),this.manager.renderer.rendering.then(()=>n.defaultPrevented)})}start(e){return rG(()=>{let{dragOperation:t}=this.manager;if(null!=e.source&&this.setDragSource(e.source),!t.source)throw Error("Cannot start a drag operation without a drag source");if(!t.status.idle)throw Error("Cannot start a drag operation while another is active");let r=new AbortController,{event:n,coordinates:i}=e;rZ(()=>{t.status.set("initialization-pending"),t.shape=null,t.canceled=!1,t.activatorEvent=null!=n?n:null,t.position.reset(i)});let o=iZ({operation:t.snapshot()});return(this.manager.monitor.dispatch("beforedragstart",o),o.defaultPrevented)?(t.reset(),r.abort()):(t.status.set("initializing"),t.controller=r,this.manager.renderer.rendering.then(()=>{if(r.signal.aborted)return;let{status:e}=t;"initializing"===e.current&&rZ(()=>{t.status.set("dragging"),this.manager.monitor.dispatch("dragstart",{nativeEvent:n,operation:t.snapshot(),cancelable:!1})})})),r})}move(e){return rG(()=>{var t,r;let{dragOperation:n}=this.manager,{status:i,controller:o}=n;if(!i.dragging||!o||o.signal.aborted)return;let a=iZ({nativeEvent:e.event,operation:n.snapshot(),by:e.by,to:e.to},null==(t=e.cancelable)||t);(null==(r=e.propagate)||r)&&this.manager.monitor.dispatch("dragmove",a),queueMicrotask(()=>{var t,r,i,o,l;if(a.defaultPrevented)return;let s=null!=(l=e.to)?l:{x:n.position.current.x+(null!=(r=null==(t=e.by)?void 0:t.x)?r:0),y:n.position.current.y+(null!=(o=null==(i=e.by)?void 0:i.y)?o:0)};n.position.current=s})})}stop(e={}){return rG(()=>{var t,r;let n,{dragOperation:i}=this.manager,{controller:o}=i;if(!o||o.signal.aborted)return;o.abort();let a=()=>{this.manager.renderer.rendering.then(()=>{i.status.set("dropped");let e=rG(()=>{var e;return(null==(e=i.source)?void 0:e.status)==="dropping"}),t=()=>{i.controller===o&&(i.controller=void 0),i.reset()};if(e){let{source:e}=i,r=no(()=>{(null==e?void 0:e.status)==="idle"&&(r(),t())})}else this.manager.renderer.rendering.then(t)})};i.canceled=null!=(t=e.canceled)&&t,this.manager.monitor.dispatch("dragend",{nativeEvent:e.event,operation:i.snapshot(),canceled:null!=(r=e.canceled)&&r,suspend:()=>{let e={resume:()=>{},abort:()=>{}};return n=new Promise((t,r)=>{e.resume=t,e.abort=r}),e}}),n?n.then(a).catch(()=>i.reset()):a()})}},iQ=class extends iN{constructor(e,t){super(e,t),this.manager=e,this.options=t}},i0=class extends AbortController{constructor(e,t){for(const r of(super(),this.constraints=e,this.onActivate=t,this.activated=!1,null!=e?e:[]))r.controller=this}onEvent(e){var t;if(!this.activated)if(null==(t=this.constraints)?void 0:t.length)for(let t of this.constraints)t.onEvent(e);else this.activate(e)}activate(e){this.activated||(this.activated=!0,this.onActivate(e))}abort(e){this.activated=!1,super.abort(e)}},i1=class{constructor(e){this.options=e,iC(this,eR)}set controller(e){iE(this,eR,e),e.signal.addEventListener("abort",()=>this.abort())}activate(e){var t;null==(t=iz(this,eR))||t.activate(e)}};eR=new WeakMap;var i2=class extends iN{constructor(e,t){super(e,t),this.manager=e,this.options=t}apply(e){return e.transform}},i4=class{constructor(e){this.draggables=new iH,this.droppables=new iH,this.plugins=new iO(e),this.sensors=new iO(e),this.modifiers=new iO(e)}register(e,t){if(e instanceof iW)return this.draggables.register(e.id,e);if(e instanceof i$)return this.droppables.register(e.id,e);if(e.prototype instanceof i2)return this.modifiers.register(e,t);if(e.prototype instanceof iQ)return this.sensors.register(e,t);if(e.prototype instanceof iN)return this.plugins.register(e,t);throw Error("Invalid instance type")}unregister(e){if(e instanceof iV)return e instanceof iW?this.draggables.unregister(e.id,e):e instanceof i$?this.droppables.unregister(e.id,e):()=>{};if(e.prototype instanceof i2)return this.modifiers.unregister(e);if(e.prototype instanceof iQ)return this.sensors.unregister(e);if(e.prototype instanceof iN)return this.plugins.unregister(e);throw Error("Invalid instance type")}destroy(){this.draggables.destroy(),this.droppables.destroy(),this.plugins.destroy(),this.sensors.destroy(),this.modifiers.destroy()}};eX=[nL],eY=[nP],eZ=[nP],eU=[nP],eq=[nP],e$=[nP],eW=[nL],eH=[nL],eV=[nL];var i3=class{constructor(e){iw(eQ,5,this),iC(this,eG),iC(this,eK),iC(this,eJ,new nT(void 0,(e,t)=>e&&t?e.equals(t):e===t)),this.status=new iK,iC(this,e0,iw(eQ,8,this,!1)),iw(eQ,11,this),iC(this,e1,iw(eQ,12,this,null)),iw(eQ,15,this),iC(this,e2,iw(eQ,16,this,null)),iw(eQ,19,this),iC(this,e4,iw(eQ,20,this,null)),iw(eQ,23,this),iC(this,e3,iw(eQ,24,this,[])),iw(eQ,27,this),this.position=new n8({x:0,y:0}),iC(this,e6,{x:0,y:0}),iE(this,eG,e)}get shape(){let{current:e,initial:t,previous:r}=iz(this,eJ);return e&&t?{current:e,initial:t,previous:r}:null}set shape(e){e?iz(this,eJ).current=e:iz(this,eJ).reset()}get source(){var e;let t=this.sourceIdentifier;if(null==t)return null;let r=iz(this,eG).registry.draggables.get(t);return r&&iE(this,eK,r),null!=(e=null!=r?r:iz(this,eK))?e:null}get target(){var e;let t=this.targetIdentifier;return null!=t&&null!=(e=iz(this,eG).registry.droppables.get(t))?e:null}get transform(){let{x:e,y:t}=this.position.delta,r={x:e,y:t};for(let e of this.modifiers)r=e.apply(im(ih({},this.snapshot()),{transform:r}));return iE(this,e6,r),r}snapshot(){return rG(()=>({source:this.source,target:this.target,activatorEvent:this.activatorEvent,transform:iz(this,e6),shape:this.shape?nO(this.shape):null,position:nO(this.position),status:nO(this.status),canceled:this.canceled}))}reset(){rZ(()=>{this.status.set("idle"),this.sourceIdentifier=null,this.targetIdentifier=null,iz(this,eJ).reset(),this.position.reset({x:0,y:0}),iE(this,e6,{x:0,y:0}),this.modifiers=[]})}};eQ=i_(null),eG=new WeakMap,eK=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e4=new WeakMap,e3=new WeakMap,e6=new WeakMap,iS(eQ,2,"shape",eX,i3),iS(eQ,4,"canceled",eY,i3,e0),iS(eQ,4,"activatorEvent",eZ,i3,e1),iS(eQ,4,"sourceIdentifier",eU,i3,e2),iS(eQ,4,"targetIdentifier",eq,i3,e4),iS(eQ,4,"modifiers",e$,i3,e3),iS(eQ,2,"source",eW,i3),iS(eQ,2,"target",eH,i3),iS(eQ,2,"transform",eV,i3),ik(eQ,i3);var i6={get rendering(){return Promise.resolve()}};function i5(e,t){return"function"==typeof e?e(t):null!=e?e:t}var i8=class{constructor(e){var t;this.destroy=()=>{this.dragOperation.status.idle||this.actions.stop({canceled:!0}),this.dragOperation.modifiers.forEach(e=>e.destroy()),this.registry.destroy(),this.collisionObserver.destroy()};const r=null!=e?e:{},n=i5(r.plugins,[]),i=i5(r.sensors,[]),o=i5(r.modifiers,[]),a=null!=(t=r.renderer)?t:i6,l=new iU(this),s=new i4(this);this.registry=s,this.monitor=l,this.renderer=a,this.actions=new iJ(this),this.dragOperation=new i3(this),this.collisionObserver=new iF(this),this.plugins=[iY,...n],this.modifiers=o,this.sensors=i;const{destroy:c}=this,u=nN(()=>{var e,t,r;let n=rG(()=>this.dragOperation.modifiers),i=this.modifiers;for(let e of n)i.includes(e)||e.destroy();this.dragOperation.modifiers=null!=(r=null==(t=null==(e=this.dragOperation.source)?void 0:e.modifiers)?void 0:t.map(e=>{let{plugin:t,options:r}=iM(e);return new t(this,r)}))?r:i});this.destroy=()=>{u(),c()}}get plugins(){return this.registry.plugins.values}set plugins(e){this.registry.plugins.values=e}get modifiers(){return this.registry.modifiers.values}set modifiers(e){this.registry.modifiers.values=e}get sensors(){return this.registry.sensors.values}set sensors(e){this.registry.sensors.values=e}},i7=e=>{throw TypeError(e)},i9=(e,t,r)=>t.has(e)||i7("Cannot "+r),oe=(e,t,r)=>(i9(e,t,"read from private field"),t.get(e)),ot=(e,t,r)=>t.has(e)?i7("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),or=(e,t,r,n)=>(i9(e,t,"write to private field"),t.set(e,r),r),on=(e,t,r)=>(i9(e,t,"access private method"),r);function oi(e){return!!e&&(e instanceof KeyframeEffect||"getKeyframes"in e&&"function"==typeof e.getKeyframes)}function oo(e,t){let r=e.getAnimations(),n=null;for(let e of r){if("running"!==e.playState)continue;let{effect:r}=e,i=(oi(r)?r.getKeyframes():[]).filter(t);i.length>0&&(n=[i[i.length-1],e])}return n}function oa(e){let{width:t,height:r,top:n,left:i,bottom:o,right:a}=e.getBoundingClientRect();return{width:t,height:r,top:n,left:i,bottom:o,right:a}}function ol(e){let t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function os(e){return"nodeType"in e}function oc(e){var t,r,n;return e?ol(e)?e:os(e)?"defaultView"in e?null!=(t=e.defaultView)?t:window:null!=(n=null==(r=e.ownerDocument)?void 0:r.defaultView)?n:window:window:window}function ou(e){let{Document:t}=oc(e);return e instanceof t||"nodeType"in e&&e.nodeType===Node.DOCUMENT_NODE}function od(e){return!(!e||ol(e))&&(e instanceof oc(e).HTMLElement||"namespaceURI"in e&&"string"==typeof e.namespaceURI&&e.namespaceURI.endsWith("html"))}function op(e){return e instanceof oc(e).SVGElement||"namespaceURI"in e&&"string"==typeof e.namespaceURI&&e.namespaceURI.endsWith("svg")}function oh(e){return e?ol(e)?e.document:os(e)?ou(e)?e:od(e)||op(e)?e.ownerDocument:document:document:document}function of(e,t=e.getBoundingClientRect(),r=0){var n,i,o,a,l;let s=t,{ownerDocument:c}=e,u=null!=(n=c.defaultView)?n:window,d=e.parentElement;for(;d&&d!==c.documentElement;){if(!function(e){if("DETAILS"===e.tagName&&!1===e.open)return!1;let{overflow:t,overflowX:r,overflowY:n}=getComputedStyle(e);return"visible"===t&&"visible"===r&&"visible"===n}(d)){let e=d.getBoundingClientRect(),t=r*(e.bottom-e.top),n=r*(e.right-e.left),i=r*(e.bottom-e.top),o=r*(e.right-e.left);(s={top:Math.max(s.top,e.top-t),right:Math.min(s.right,e.right+n),bottom:Math.min(s.bottom,e.bottom+i),left:Math.max(s.left,e.left-o),width:0,height:0}).width=s.right-s.left,s.height=s.bottom-s.top}d=d.parentElement}let p=u.visualViewport,h=null!=(i=null==p?void 0:p.offsetTop)?i:0,f=null!=(o=null==p?void 0:p.offsetLeft)?o:0,m=null!=(a=null==p?void 0:p.width)?a:u.innerWidth,g=null!=(l=null==p?void 0:p.height)?l:u.innerHeight,v=r*g,_=r*m;return(s={top:Math.max(s.top,h-v),right:Math.min(s.right,f+m+_),bottom:Math.min(s.bottom,h+g+v),left:Math.max(s.left,f-_),width:0,height:0}).width=s.right-s.left,s.height=s.bottom-s.top,s.width<0&&(s.width=0),s.height<0&&(s.height=0),s}function om(e){return{x:e.clientX,y:e.clientY}}var og="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function ov(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function o_(){var e,t;let r=ov()?window.visualViewport:null;return{x:null!=(e=null==r?void 0:r.offsetLeft)?e:0,y:null!=(t=null==r?void 0:r.offsetTop)?t:0}}function ob(e){return!!e&&!!os(e)&&e instanceof oc(e).ShadowRoot}function ox(e){if(e&&os(e)){let t=e.getRootNode();if(ob(t)||t instanceof Document)return t}return oh(e)}function oy(e){return e.matchMedia("(prefers-reduced-motion: reduce)").matches}function ok(e){return"value"in e}function ow(e){return"CANVAS"===e.tagName}var oS=new WeakMap,oj=class{constructor(){this.entries=new Set,this.clear=()=>{for(let e of this.entries){let[t,{type:r,listener:n,options:i}]=e;t.removeEventListener(r,n,i)}this.entries.clear()}}bind(e,t){let r=Array.isArray(e)?e:[e],n=Array.isArray(t)?t:[t],i=[];for(let e of r)for(let t of n){let{type:r,listener:n,options:o}=t,a=[e,t];e.addEventListener(r,n,o),this.entries.add(a),i.push(a)}let o=this.entries;return function(){for(let e of i){let[t,{type:r,listener:n,options:i}]=e;t.removeEventListener(r,n,i),o.delete(e)}}}};function oI(e){let t=null==e?void 0:e.ownerDocument.defaultView;if(t&&t.self!==t.parent)return t.frameElement}function oz(e,t){let r,n;return function(...i){let o=this;if(n){let a;null==r||r(),a=setTimeout(()=>{e.apply(o,i),n=performance.now()},t-(performance.now()-n)),r=()=>clearTimeout(a)}else e.apply(o,i),n=performance.now()}}var oC=og?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},oE=class extends oC{constructor(e){super(t=>{oe(this,e5)?e(t,this):or(this,e5,!0)}),ot(this,e5,!1)}};e5=new WeakMap;var oA=Array.from({length:100},(e,t)=>t/100),oP=class{constructor(e,t,r={debug:!1,skipInitial:!1}){this.element=e,this.callback=t,ot(this,to),this.disconnect=()=>{var e,t,r;or(this,tn,!0),null==(e=oe(this,e9))||e.disconnect(),null==(t=oe(this,te))||t.disconnect(),oe(this,tt).disconnect(),null==(r=oe(this,tr))||r.remove()},ot(this,e8,!0),ot(this,e7),ot(this,e9),ot(this,te),ot(this,tt),ot(this,tr),ot(this,tn,!1),ot(this,ti,oz(()=>{var e,t,r;let{element:n}=this;if(null==(e=oe(this,te))||e.disconnect(),oe(this,tn)||!oe(this,e8)||!n.isConnected)return;let i=null!=(t=n.ownerDocument)?t:document,{innerHeight:o,innerWidth:a}=null!=(r=i.defaultView)?r:window,l=n.getBoundingClientRect(),{top:s,left:c,bottom:u,right:d}=of(n,l),p=-Math.floor(s),h=-Math.floor(c),f=-Math.floor(a-d),m=-Math.floor(o-u),g=`${p}px ${f}px ${m}px ${h}px`;this.boundingClientRect=l,or(this,te,new IntersectionObserver(e=>{let[t]=e,{intersectionRect:r}=t;1!==(1!==t.intersectionRatio?t.intersectionRatio:n5.intersectionRatio(r,of(n)))&&oe(this,ti).call(this)},{threshold:oA,rootMargin:g,root:i})),oe(this,te).observe(n),on(this,to,ta).call(this)},75)),this.boundingClientRect=e.getBoundingClientRect(),or(this,e8,function(e,t=e.getBoundingClientRect()){let{width:r,height:n}=of(e,t);return r>0&&n>0}(e,this.boundingClientRect));let n=!0;this.callback=e=>{n&&(n=!1,r.skipInitial)||t(e)};const i=e.ownerDocument;(null==r?void 0:r.debug)&&(or(this,tr,document.createElement("div")),oe(this,tr).style.background="rgba(0,0,0,0.15)",oe(this,tr).style.position="fixed",oe(this,tr).style.pointerEvents="none",i.body.appendChild(oe(this,tr))),or(this,tt,new IntersectionObserver(t=>{var r,n;let{boundingClientRect:i,isIntersecting:o}=t[t.length-1],{width:a,height:l}=i,s=oe(this,e8);or(this,e8,o),(a||l)&&(s&&!o?(null==(r=oe(this,te))||r.disconnect(),this.callback(null),null==(n=oe(this,e9))||n.disconnect(),or(this,e9,void 0),oe(this,tr)&&(oe(this,tr).style.visibility="hidden")):oe(this,ti).call(this),o&&!oe(this,e9)&&(or(this,e9,new oE(oe(this,ti))),oe(this,e9).observe(e)))},{threshold:oA,root:i})),oe(this,e8)&&!r.skipInitial&&this.callback(this.boundingClientRect),oe(this,tt).observe(e)}};e8=new WeakMap,e7=new WeakMap,e9=new WeakMap,te=new WeakMap,tt=new WeakMap,tr=new WeakMap,tn=new WeakMap,ti=new WeakMap,to=new WeakSet,ta=function(){var e,t;!oe(this,tn)&&(on(this,to,tl).call(this),(e=this.boundingClientRect)===(t=oe(this,e7))||e&&t&&e.top==t.top&&e.left==t.left&&e.right==t.right&&e.bottom==t.bottom||(this.callback(this.boundingClientRect),or(this,e7,this.boundingClientRect)))},tl=function(){if(oe(this,tr)){let{top:e,left:t,width:r,height:n}=of(this.element);oe(this,tr).style.overflow="hidden",oe(this,tr).style.visibility="visible",oe(this,tr).style.top=`${Math.floor(e)}px`,oe(this,tr).style.left=`${Math.floor(t)}px`,oe(this,tr).style.width=`${Math.floor(r)}px`,oe(this,tr).style.height=`${Math.floor(n)}px`}};var oL=new WeakMap,oM=new WeakMap,oN=class{constructor(e,t,r){this.callback=t,ot(this,ts),ot(this,tc,!1),ot(this,tu),ot(this,td,oz(e=>{if(!oe(this,tc)&&e.target&&"contains"in e.target&&"function"==typeof e.target.contains){for(let t of oe(this,tu))if(e.target.contains(t)){this.callback(oe(this,ts).boundingClientRect);break}}},75));const n=function(e){let t=new Set,r=oI(e);for(;r;)t.add(r),r=oI(r);return t}(e),i=function(e,t){let r=new Set;for(let n of e){let e=function(e,t){let r=oL.get(e);return r||(r={disconnect:new oP(e,t=>{let r=oL.get(e);r&&r.callbacks.forEach(e=>e(t))},{skipInitial:!0}).disconnect,callbacks:new Set}),r.callbacks.add(t),oL.set(e,r),()=>{r.callbacks.delete(t),0===r.callbacks.size&&(oL.delete(e),r.disconnect())}}(n,t);r.add(e)}return()=>r.forEach(e=>e())}(n,t),o=function(e,t){var r;let n=e.ownerDocument;if(!oM.has(n)){let e=new AbortController,t=new Set;document.addEventListener("scroll",e=>t.forEach(t=>t(e)),{capture:!0,passive:!0,signal:e.signal}),oM.set(n,{disconnect:()=>e.abort(),listeners:t})}let{listeners:i,disconnect:o}=null!=(r=oM.get(n))?r:{};return i&&o?(i.add(t),()=>{i.delete(t),0===i.size&&(o(),oM.delete(n))}):()=>{}}(e,oe(this,td));or(this,tu,n),or(this,ts,new oP(e,t,r)),this.disconnect=()=>{oe(this,tc)||(or(this,tc,!0),i(),o(),oe(this,ts).disconnect())}}};function oT(e){return"showPopover"in e&&"hidePopover"in e&&"function"==typeof e.showPopover&&"function"==typeof e.hidePopover}function oO(e){try{oT(e)&&e.isConnected&&e.hasAttribute("popover")&&!e.matches(":popover-open")&&e.showPopover()}catch(e){}}function oD(e){return!!og&&!!e&&e===oh(e).scrollingElement}function oB(e){var t,r;let n=oc(e),i=oD(e)?function(e){var t,r,n,i;let{documentElement:o}=oh(e),a=oc(e).visualViewport,l=null!=(t=null==a?void 0:a.width)?t:o.clientWidth,s=null!=(r=null==a?void 0:a.height)?r:o.clientHeight,c=null!=(n=null==a?void 0:a.offsetTop)?n:0,u=null!=(i=null==a?void 0:a.offsetLeft)?i:0;return{top:c,left:u,right:u+l,bottom:c+s,width:l,height:s}}(e):oa(e),o=n.visualViewport,a=oD(e)?{height:null!=(t=null==o?void 0:o.height)?t:n.innerHeight,width:null!=(r=null==o?void 0:o.width)?r:n.innerWidth}:{height:e.clientHeight,width:e.clientWidth},l={current:{x:e.scrollLeft,y:e.scrollTop},max:{x:e.scrollWidth-a.width,y:e.scrollHeight-a.height}},s=l.current.y<=0,c=l.current.x<=0,u=l.current.y>=l.max.y,d=l.current.x>=l.max.x;return{rect:i,position:l,isTop:s,isLeft:c,isBottom:u,isRight:d}}ts=new WeakMap,tc=new WeakMap,tu=new WeakMap,td=new WeakMap;var oF=class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;for(let t of(this.pending=!1,this.tasks=new Set,this.resolvers=new Set,e))t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}},oR=new oF(e=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(e):e()}),oV=new oF(e=>setTimeout(e,50)),oH=new Map,oW=oH.clear.bind(oH);function o$(e,t=!1){if(!t)return oq(e);let r=oH.get(e);return r||(r=oq(e),oH.set(e,r),oV.schedule(oW)),r}function oq(e){return oc(e).getComputedStyle(e)}var oU={excludeElement:!0,escapeShadowDOM:!0};function oZ(e,t=oU){let{limit:r,excludeElement:n,escapeShadowDOM:i}=t,o=new Set;return e?function t(a){if(null!=r&&o.size>=r||!a)return o;if(ou(a)&&null!=a.scrollingElement&&!o.has(a.scrollingElement))return o.add(a.scrollingElement),o;if(i&&ob(a))return t(a.host);if(!od(a))return op(a)?t(a.parentElement):o;if(o.has(a))return o;let l=o$(a,!0);if(n&&a===e||function(e,t=o$(e,!0)){let r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(e=>{let n=t[e];return"string"==typeof n&&r.test(n)})}(a,l)&&o.add(a),function(e,t=o$(e,!0)){return"fixed"===t.position||"sticky"===t.position}(a,l)){let{scrollingElement:e}=a.ownerDocument;return e&&o.add(e),o}return t(a.parentNode)}(e):o}function oY(e,t=window.frameElement){let r={x:0,y:0,scaleX:1,scaleY:1};if(!e)return r;let n=oI(e);for(;n&&n!==t;){let e=oa(n),{x:t,y:i}=function(e,t=oa(e)){let r=Math.round(t.width),n=Math.round(t.height);if(od(e))return{x:r/e.offsetWidth,y:n/e.offsetHeight};let i=o$(e,!0);return{x:(parseFloat(i.width)||r)/r,y:(parseFloat(i.height)||n)/n}}(n,e);r.x=r.x+e.left,r.y=r.y+e.top,r.scaleX=r.scaleX*t,r.scaleY=r.scaleY*i,n=oI(n)}return r}function oX(e){if("none"===e)return null;let[t,r,n="0"]=e.split(" "),i={x:parseFloat(t),y:parseFloat(r),z:parseInt(n,10)};return isNaN(i.x)&&isNaN(i.y)?null:{x:isNaN(i.x)?0:i.x,y:isNaN(i.y)?0:i.y,z:isNaN(i.z)?0:i.z}}function oG(e){var t,r,n,i,o,a,l,s,c;let{scale:u,transform:d,translate:p}=e,h=function(e){if("none"===e)return null;let t=e.split(" "),r=parseFloat(t[0]),n=parseFloat(t[1]);return isNaN(r)&&isNaN(n)?null:{x:isNaN(r)?n:r,y:isNaN(n)?r:n}}(u),f=oX(p),m=function(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(d);if(!m&&!h&&!f)return null;let g={x:null!=(t=null==h?void 0:h.x)?t:1,y:null!=(r=null==h?void 0:h.y)?r:1},v={x:null!=(n=null==f?void 0:f.x)?n:0,y:null!=(i=null==f?void 0:f.y)?i:0},_={x:null!=(o=null==m?void 0:m.x)?o:0,y:null!=(a=null==m?void 0:m.y)?a:0,scaleX:null!=(l=null==m?void 0:m.scaleX)?l:1,scaleY:null!=(s=null==m?void 0:m.scaleY)?s:1};return{x:v.x+_.x,y:v.y+_.y,z:null!=(c=null==f?void 0:f.z)?c:0,scaleX:g.x*_.scaleX,scaleY:g.y*_.scaleY}}var oK=((d=oK||{})[d.Idle=0]="Idle",d[d.Forward=1]="Forward",d[d.Reverse=-1]="Reverse",d),oJ={x:.2,y:.2},oQ={x:10,y:10};function o0(e,{block:t="nearest",inline:r="nearest"}={}){if(!od(e))return;let n=oZ(e),i=[];for(let o of n){if(!od(o))continue;let{top:n,left:a}=function(e,t){let r=o1(e),n=o1(t);return{top:r.top-n.top-t.clientTop,left:r.left-n.left-t.clientLeft}}(e,o),l=n,s=a;for(let e of i)l-=e.scrollTop,s-=e.scrollLeft;if("none"!==t){let r=l<o.scrollTop;r!==l+e.offsetHeight>o.scrollTop+o.clientHeight&&("center"===t?o.scrollTop=l-o.clientHeight/2+e.offsetHeight/2:r?o.scrollTop=l:o.scrollTop=l+e.offsetHeight-o.clientHeight)}if("none"!==r){let t=s<o.scrollLeft;t!==s+e.offsetWidth>o.scrollLeft+o.clientWidth&&("center"===r?o.scrollLeft=s-o.clientWidth/2+e.offsetWidth/2:t?o.scrollLeft=s:o.scrollLeft=s+e.offsetWidth-o.clientWidth)}i.push(o)}}function o1(e){let t=0,r=0,n=e;for(;n;){t+=n.offsetTop,r+=n.offsetLeft;let e=n.offsetParent;if(!od(e))break;t+=e.clientTop,r+=e.clientLeft,n=e}return{top:t,left:r}}function o2({element:e,keyframes:t,options:r}){return e.animate(t,r).finished}function o4(e,t=o$(e).translate,r=!0){if(r){let t=oo(e,e=>"translate"in e);if(t){let{translate:e=""}=t[0];if("string"==typeof e){let t=oX(e);if(t)return t}}}if(t){let e=oX(t);if(e)return e}return{x:0,y:0,z:0}}var o3=new oF(e=>setTimeout(e,0)),o6=new Map,o5=o6.clear.bind(o6),o8=class extends n5{constructor(e,t={}){var r,n,i,o;let a;const{frameTransform:l=oY(e),ignoreTransforms:s,getBoundingClientRect:c=oa}=t,u=function(e,t){let r=(function(e){let t=e.ownerDocument,r=o6.get(t);if(r)return r;r=t.getAnimations(),o6.set(t,r),o3.schedule(o5);let n=r.filter(t=>oi(t.effect)&&t.effect.target===e);return o6.set(e,n),r})(e).filter(e=>{var r,n;if(oi(e.effect)){let{target:i}=e.effect;if(null==(n=i&&(null==(r=t.isValidTarget)?void 0:r.call(t,i)))||n)return e.effect.getKeyframes().some(e=>{for(let r of t.properties)if(e[r])return!0})}}).map(e=>{let{effect:t,currentTime:r}=e,n=null==t?void 0:t.getComputedTiming().duration;if(!e.pending&&"finished"!==e.playState&&"number"==typeof n&&"number"==typeof r&&r<n)return e.currentTime=n,()=>{e.currentTime=r}});if(r.length>0)return()=>r.forEach(e=>null==e?void 0:e())}(e,{properties:["transform","translate","scale","width","height"],isValidTarget:t=>(t!==e||ov())&&t.contains(e)}),d=c(e);let{top:p,left:h,width:f,height:m}=d;const g=o$(e),v=oG(g),_={x:null!=(r=null==v?void 0:v.scaleX)?r:1,y:null!=(n=null==v?void 0:v.scaleY)?n:1},b=function(e,t){let r,n,i,o=e.getAnimations();if(!o.length)return null;let a=!1;for(let e of o){if("running"!==e.playState)continue;let t=oi(e.effect)?e.effect.getKeyframes():[],o=t[t.length-1];if(!o)continue;let{transform:l,translate:s,scale:c}=o;"string"==typeof l&&l&&(r=l,a=!0),"string"==typeof s&&s&&(n=s,a=!0),"string"==typeof c&&c&&(i=c,a=!0)}return a?oG({transform:null!=r?r:t.transform,translate:null!=n?n:t.translate,scale:null!=i?i:t.scale}):null}(e,g);null==u||u(),v&&(a=function(e,t,r){let{scaleX:n,scaleY:i,x:o,y:a}=t,l=e.left-o-(1-n)*parseFloat(r),s=e.top-a-(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),c=n?e.width/n:e.width,u=i?e.height/i:e.height;return{width:c,height:u,top:s,right:l+c,bottom:s+u,left:l}}(d,v,g.transformOrigin),(s||b)&&(p=a.top,h=a.left,f=a.width,m=a.height));const y={width:null!=(i=null==a?void 0:a.width)?i:f,height:null!=(o=null==a?void 0:a.height)?o:m};if(b&&!s&&a){const e=function(e,t,r){let{scaleX:n,scaleY:i,x:o,y:a}=t,l=e.left+o+(1-n)*parseFloat(r),s=e.top+a+(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),c=n?e.width*n:e.width,u=i?e.height*i:e.height;return{width:c,height:u,top:s,right:l+c,bottom:s+u,left:l}}(a,b,g.transformOrigin);p=e.top,h=e.left,f=e.width,m=e.height,_.x=b.scaleX,_.y=b.scaleY}l&&(s||(h*=l.scaleX,f*=l.scaleX,p*=l.scaleY,m*=l.scaleY),h+=l.x,p+=l.y),super(h,p,f,m),this.scale=_,this.intrinsicWidth=y.width,this.intrinsicHeight=y.height}};function o7(e){return"style"in e&&"object"==typeof e.style&&null!==e.style&&"setProperty"in e.style&&"removeProperty"in e.style&&"function"==typeof e.style.setProperty&&"function"==typeof e.style.removeProperty}var o9=class{constructor(e){this.element=e,this.initial=new Map}set(e,t=""){let{element:r}=this;if(o7(r))for(let[n,i]of Object.entries(e)){let e=`${t}${n}`;this.initial.has(e)||this.initial.set(e,r.style.getPropertyValue(e)),r.style.setProperty(e,"string"==typeof i?i:`${i}px`)}}remove(e,t=""){let{element:r}=this;if(o7(r))for(let n of e){let e=`${t}${n}`;r.style.removeProperty(e)}}reset(){let{element:e}=this;if(o7(e)){for(let[t,r]of this.initial)e.style.setProperty(t,r);""===e.getAttribute("style")&&e.removeAttribute("style")}}};function ae(e){return!!e&&(e instanceof oc(e).Element||os(e)&&e.nodeType===Node.ELEMENT_NODE)}function at(e){if(!e)return!1;let{KeyboardEvent:t}=oc(e.target);return e instanceof t}var ar={};function an(e){let t=null==ar[e]?0:ar[e]+1;return ar[e]=t,`${e}-${t}`}var ai=e=>{var t;return null!=(t=(({dragOperation:e,droppable:t})=>{let r=e.position.current;if(!r)return null;let{id:n}=t;return t.shape&&t.shape.containsPoint(r)?{id:n,value:1/n6.distance(t.shape.center,r),type:iG.PointerIntersection,priority:iX.High}:null})(e))?t:(({dragOperation:e,droppable:t})=>{let{shape:r}=e;if(!t.shape||!(null==r?void 0:r.current))return null;let n=r.current.intersectionArea(t.shape);if(n){let{position:i}=e,o=n6.distance(t.shape.center,i.current),a=n/(r.current.area+t.shape.area-n);return{id:t.id,value:a/o,type:iG.ShapeIntersection,priority:iX.Normal}}return null})(e)},ao=e=>{let{dragOperation:t,droppable:r}=e,{shape:n,position:i}=t;if(!r.shape)return null;let o=n?n5.from(n.current.boundingRectangle).corners:void 0,a=n5.from(r.shape.boundingRectangle).corners.reduce((e,t,r)=>{var n;return e+n6.distance(n6.from(t),null!=(n=null==o?void 0:o[r])?n:i.current)},0);return{id:r.id,value:1/(a/4),type:iG.Collision,priority:iX.Normal}},aa=Object.create,al=Object.defineProperty,as=Object.defineProperties,ac=Object.getOwnPropertyDescriptor,au=Object.getOwnPropertyDescriptors,ad=Object.getOwnPropertySymbols,ap=Object.prototype.hasOwnProperty,ah=Object.prototype.propertyIsEnumerable,af=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),am=e=>{throw TypeError(e)},ag=(e,t,r)=>t in e?al(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,av=(e,t)=>{for(var r in t||(t={}))ap.call(t,r)&&ag(e,r,t[r]);if(ad)for(var r of ad(t))ah.call(t,r)&&ag(e,r,t[r]);return e},a_=(e,t)=>al(e,"name",{value:t,configurable:!0}),ab=(e,t)=>{var r={};for(var n in e)ap.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&ad)for(var n of ad(e))0>t.indexOf(n)&&ah.call(e,n)&&(r[n]=e[n]);return r},ax=e=>{var t;return[,,,aa(null!=(t=null==e?void 0:e[af("metadata")])?t:null)]},ay=["class","method","getter","setter","accessor","field","value","get","set"],ak=e=>void 0!==e&&"function"!=typeof e?am("Function expected"):e,aw=(e,t,r,n,i)=>({kind:ay[e],name:t,metadata:n,addInitializer:e=>r._?am("Already initialized"):i.push(ak(e||null))}),aS=(e,t)=>ag(t,af("metadata"),e[3]),aj=(e,t,r,n)=>{for(var i=0,o=e[t>>1],a=o&&o.length;i<a;i++)1&t?o[i].call(r):n=o[i].call(r,n);return n},aI=(e,t,r,n,i,o)=>{var a,l,s,c,u,d=7&t,p=!!(8&t),h=!!(16&t),f=d>3?e.length+1:d?p?1:2:0,m=ay[d+5],g=d>3&&(e[f-1]=[]),v=e[f]||(e[f]=[]),_=d&&(h||p||(i=i.prototype),d<5&&(d>3||!h)&&ac(d<4?i:{get[r](){return aE(this,o)},set[r](x){return aP(this,o,x)}},r));d?h&&d<4&&a_(o,(d>2?"set ":d>1?"get ":"")+r):a_(i,r);for(var b=n.length-1;b>=0;b--)c=aw(d,r,s={},e[3],v),d&&(c.static=p,c.private=h,u=c.access={has:h?e=>aC(i,e):e=>r in e},3^d&&(u.get=h?e=>(1^d?aE:aL)(e,i,4^d?o:_.get):e=>e[r]),d>2&&(u.set=h?(e,t)=>aP(e,i,t,4^d?o:_.set):(e,t)=>e[r]=t)),l=(0,n[b])(d?d<4?h?o:_[m]:d>4?void 0:{get:_.get,set:_.set}:i,c),s._=1,4^d||void 0===l?ak(l)&&(d>4?g.unshift(l):d?h?o=l:_[m]=l:i=l):"object"!=typeof l||null===l?am("Object expected"):(ak(a=l.get)&&(_.get=a),ak(a=l.set)&&(_.set=a),ak(a=l.init)&&g.unshift(a));return d||aS(e,i),_&&al(i,r,_),h?4^d?o:_:i},az=(e,t,r)=>t.has(e)||am("Cannot "+r),aC=(e,t)=>Object(t)!==t?am('Cannot use the "in" operator on this value'):e.has(t),aE=(e,t,r)=>(az(e,t,"read from private field"),r?r.call(e):t.get(e)),aA=(e,t,r)=>t.has(e)?am("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),aP=(e,t,r,n)=>(az(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),aL=(e,t,r)=>(az(e,t,"access private method"),r),aM={draggable:"To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel."},aN={dragstart({operation:{source:e}}){if(e)return`Picked up draggable item ${e.id}.`},dragover({operation:{source:e,target:t}}){if(e&&e.id!==(null==t?void 0:t.id))return t?`Draggable item ${e.id} was moved over droppable target ${t.id}.`:`Draggable item ${e.id} is no longer over a droppable target.`},dragend({operation:{source:e,target:t},canceled:r}){if(e)return r?`Dragging was cancelled. Draggable item ${e.id} was dropped.`:t?`Draggable item ${e.id} was dropped over droppable target ${t.id}`:`Draggable item ${e.id} was dropped.`}},aT=["dragover","dragmove"],aO=class extends iN{constructor(e,t){let r,n,i,o;super(e);const{id:a,idPrefix:{description:l="dnd-kit-description",announcement:s="dnd-kit-announcement"}={},announcements:c=aN,screenReaderInstructions:u=aM,debounce:d=500}=null!=t?t:{},p=a?`${l}-${a}`:an(l),h=a?`${s}-${a}`:an(s),f=(e=o)=>{i&&e&&(null==i?void 0:i.nodeValue)!==e&&(i.nodeValue=e)},m=()=>oR.schedule(f),g=function(e,t){let r,n=()=>{clearTimeout(r),r=setTimeout(e,t)};return n.cancel=()=>clearTimeout(r),n}(m,d),v=Object.entries(c).map(([e,t])=>this.manager.monitor.addEventListener(e,(r,n)=>{let a=i;if(!a)return;let l=null==t?void 0:t(r,n);l&&a.nodeValue!==l&&(o=l,aT.includes(e)?g():(m(),g.cancel()))})),_=()=>{var e;let t=[];if(!(null==r?void 0:r.isConnected)){let n;e=u.draggable,(n=document.createElement("div")).id=p,n.style.setProperty("display","none"),n.textContent=e,r=n,t.push(r)}if(!(null==n?void 0:n.isConnected)){let e;(e=document.createElement("div")).id=h,e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.style.setProperty("position","fixed"),e.style.setProperty("width","1px"),e.style.setProperty("height","1px"),e.style.setProperty("margin","-1px"),e.style.setProperty("border","0"),e.style.setProperty("padding","0"),e.style.setProperty("overflow","hidden"),e.style.setProperty("clip","rect(0 0 0 0)"),e.style.setProperty("clip-path","inset(100%)"),e.style.setProperty("white-space","nowrap"),n=e,i=document.createTextNode(""),n.appendChild(i),t.push(n)}t.length>0&&document.body.append(...t)},b=new Set;function y(){for(let e of b)e()}this.registerEffect(()=>{var e;for(let t of(b.clear(),this.manager.registry.draggables.value)){let i=null!=(e=t.handle)?e:t.element;if(i){for(let e of(r&&n||b.add(_),(!["input","select","textarea","a","button"].includes(i.tagName.toLowerCase())||ov())&&!i.hasAttribute("tabindex")&&b.add(()=>i.setAttribute("tabindex","0")),i.hasAttribute("role")||"button"===i.tagName.toLowerCase()||b.add(()=>i.setAttribute("role","button")),i.hasAttribute("aria-roledescription")||b.add(()=>i.setAttribute("aria-roledescription","draggable")),i.hasAttribute("aria-describedby")||b.add(()=>i.setAttribute("aria-describedby",p)),["aria-pressed","aria-grabbed"])){let r=String(t.isDragging);i.getAttribute(e)!==r&&b.add(()=>i.setAttribute(e,r))}let e=String(t.disabled);i.getAttribute("aria-disabled")!==e&&b.add(()=>i.setAttribute("aria-disabled",e))}}b.size>0&&oR.schedule(y)}),this.destroy=()=>{super.destroy(),null==r||r.remove(),null==n||n.remove(),v.forEach(e=>e())}}},aD=new Map,aB=class extends(tg=iT,tm=[nP],tf=[nL],th=[nL],tp=[nL],tg){constructor(e,t){super(e,t),aj(t_,5,this),aA(this,tx),aA(this,tv,new Set),aA(this,tb,aj(t_,8,this,new Set)),aj(t_,11,this),this.registerEffect(aL(this,tx,ty))}register(e){return aE(this,tv).add(e),()=>{aE(this,tv).delete(e)}}addRoot(e){return rG(()=>{let t=new Set(this.additionalRoots);t.add(e),this.additionalRoots=t}),()=>{rG(()=>{let t=new Set(this.additionalRoots);t.delete(e),this.additionalRoots=t})}}get sourceRoot(){var e;let{source:t}=this.manager.dragOperation;return ox(null!=(e=null==t?void 0:t.element)?e:null)}get targetRoot(){var e;let{target:t}=this.manager.dragOperation;return ox(null!=(e=null==t?void 0:t.element)?e:null)}get roots(){let{status:e}=this.manager.dragOperation;return e.initializing||e.initialized?new Set([...[this.sourceRoot,this.targetRoot].filter(e=>null!=e),...this.additionalRoots]):new Set}};t_=ax(tg),tv=new WeakMap,tb=new WeakMap,tx=new WeakSet,ty=function(){let{roots:e}=this,t=[];for(let r of e)for(let e of aE(this,tv))t.push(aL(this,tx,tk).call(this,r,e));return()=>{for(let e of t)e()}},tk=function(e,t){let r=aD.get(e);r||(r=new Map,aD.set(e,r));let n=r.get(t);if(!n){let i=ou(e)?aL(this,tx,tw).call(this,e,r,t):aL(this,tx,tS).call(this,e,r,t);if(!i)return()=>{};n=i,r.set(t,n)}n.refCount++;let i=!1;return()=>{i||(i=!0,n.refCount--,0===n.refCount&&n.cleanup())}},tw=function(e,t,r){var n;let i=e.createElement("style"),{nonce:o}=null!=(n=this.options)?n:{};o&&i.setAttribute("nonce",o),i.textContent=r,e.head.prepend(i);let a=new MutationObserver(t=>{for(let r of t)for(let t of Array.from(r.removedNodes))if(t===i)return void e.head.prepend(i)});return a.observe(e.head,{childList:!0}),{refCount:0,cleanup:()=>{a.disconnect(),i.remove(),t.delete(r),0===t.size&&aD.delete(e)}}},tS=function(e,t,r){"adoptedStyleSheets"in e&&Array.isArray(e.adoptedStyleSheets);let n=e.ownerDocument.defaultView,{CSSStyleSheet:i}=null!=n?n:{};if(!i)return null;let o=new i;return o.replaceSync(r),e.adoptedStyleSheets.push(o),{refCount:0,cleanup:()=>{var n;if(ob(e)&&(null==(n=e.host)?void 0:n.isConnected)){let t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}t.delete(r),0===t.size&&aD.delete(e)}}},aI(t_,4,"additionalRoots",tm,aB,tb),aI(t_,2,"sourceRoot",tf,aB),aI(t_,2,"targetRoot",th,aB),aI(t_,2,"roots",tp,aB),aS(t_,aB),aB.configure=iL(aB);var aF=class extends iN{constructor(e,t){super(e,t),this.manager=e;const{cursor:r="grabbing"}=null!=t?t:{},n=e.registry.plugins.get(aB),i=null==n?void 0:n.register(`* { cursor: ${r} !important; }`);if(i){const e=this.destroy.bind(this);this.destroy=()=>{i(),e()}}}},aR="data-dnd-",aV=`${aR}dropping`,aH="--dnd-",aW=`${aR}dragging`,a$=`${aR}placeholder`,aq=[aW,a$,"popover","aria-pressed","aria-grabbing"],aU=["view-transition-name"],aZ=`
  :is(:root,:host) [${aW}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${aH}top, 0px) !important;
    left: var(${aH}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${aH}width, auto);
    max-width: var(${aH}width, auto);
    height: var(${aH}height, auto);
    max-height: var(${aH}height, auto);
    transform: var(${aH}transform, none) !important;
    transition: var(${aH}transition) !important;
  }

  :is(:root,:host) [${a$}] {
    transition: none;
  }

  :is(:root,:host) [${a$}='hidden'] {
    visibility: hidden;
  }

  [${aW}] * {
    pointer-events: none !important;
  }

  [${aW}]:not([${aV}]) {
    translate: var(${aH}translate) !important;
  }

  [${aW}][style*='${aH}scale'] {
    scale: var(${aH}scale) !important;
    transform-origin: var(${aH}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${aW}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${aW}]::backdrop, [${aR}overlay]:not([${aW}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g," ").replace(/\s+/g," ").trim();function aY(e,t){return e===t||oI(e)===oI(t)}function aX(e){let{target:t}=e;"newState"in e&&"closed"===e.newState&&ae(t)&&t.hasAttribute("popover")&&requestAnimationFrame(()=>oO(t))}function aG(e){return"TR"===e.tagName}var aK=class extends(tI=iN,tj=[nP],tI){constructor(e,t){super(e,t),aA(this,tE),aA(this,tC,aj(tz,8,this)),aj(tz,11,this),this.state={initial:{},current:{}};const r=e.registry.plugins.get(aB),n=null==r?void 0:r.register(aZ);if(n){const e=this.destroy.bind(this);this.destroy=()=>{n(),e()}}this.registerEffect(aL(this,tE,tA).bind(this,r)),this.registerEffect(aL(this,tE,tP))}};tz=ax(tI),tC=new WeakMap,tE=new WeakSet,tA=function(e){let{overlay:t}=this;if(!t||!e)return;let r=ox(t);if(r)return e.addRoot(r)},tP=function(){var e,t,r,n,i,o,a,l;let s,c,u,{state:d,manager:p,options:h}=this,{dragOperation:f}=p,{position:m,source:g,status:v}=f;if(v.idle){d.current={},d.initial={};return}if(!g)return;let{element:_}=g,b=g.pluginConfig(aK),y=null!=(t=null!=(e=null==b?void 0:b.feedback)?e:null==h?void 0:h.feedback)?t:"default",k="function"==typeof y?y(g,p):y;if(!_||"none"===k||!v.initialized||v.initializing)return;let{initial:w}=d,S=null!=(r=this.overlay)?r:_,j=oY(S),I=oY(_),z=!aY(_,S),C=new o8(_,{frameTransform:z?I:null,ignoreTransforms:!z}),E={x:I.scaleX/j.scaleX,y:I.scaleY/j.scaleY},{width:A,height:P,top:L,left:M}=C;z&&(A/=E.x,P/=E.y);let N=new o9(S),T=o$(_),{transition:O,translate:D,boxSizing:B,paddingBlockStart:F,paddingBlockEnd:R,paddingInlineStart:V,paddingInlineEnd:H,borderInlineStartWidth:W,borderInlineEndWidth:$,borderBlockStartWidth:q,borderBlockEndWidth:U}=T,Z=O.split(",").filter(e=>!/^\s*(transform|translate|scale)\b/.test(e)).join(","),Y=oG(T),X=T.transform,G="clone"===k,K="content-box"===B,J=K?parseInt(V)+parseInt(H)+parseInt(W)+parseInt($):0,Q=K?parseInt(F)+parseInt(R)+parseInt(q)+parseInt(U):0,ee="move"===k||this.overlay?null:function(e,t="hidden"){return rG(()=>{let r,n,i,{element:o,manager:a}=e;if(!o||!a)return;let l=function(e,t){let r=new Map;for(let n of t)if(n.element&&(e===n.element||e.contains(n.element))){let e=`${aR}${an("dom-id")}`;n.element.setAttribute(e,""),r.set(n,e)}return r}(o,a.registry.droppables),s=[],c=(r="input, textarea, select, canvas, [contenteditable]",n=o.cloneNode(!0),i=Array.from(o.querySelectorAll(r)),Array.from(n.querySelectorAll(r)).forEach((e,t)=>{let r=i[t];if(ok(e)&&ok(r)&&("file"!==e.type&&(e.value=r.value),"radio"===e.type&&e.name&&(e.name=`Cloned__${e.name}`)),ow(e)&&ow(r)&&r.width>0&&r.height>0){let t=e.getContext("2d");null==t||t.drawImage(r,0,0)}}),n),{remove:u}=c;return function(e,t,r){for(let[n,i]of e){if(!n.element)continue;let e=`[${i}]`,o=t.matches(e)?t:t.querySelector(e);if(n.element.removeAttribute(i),!o)continue;let a=n.element;n.proxy=o,o.removeAttribute(i),oS.set(a,o),r.push(()=>{oS.delete(a),n.proxy=void 0})}}(l,c,s),function(e,t="hidden"){e.setAttribute("inert","true"),e.setAttribute("tab-index","-1"),e.setAttribute("aria-hidden","true"),e.setAttribute(a$,t)}(c,t),c.remove=()=>{s.forEach(e=>e()),u.call(c)},c})}(g,G?"clone":"hidden"),et=rG(()=>at(p.dragOperation.activatorEvent));if(!w.translate){if(this.overlay&&Y)w.translate={x:Y.x,y:Y.y};else if("none"!==D){let e=oX(D);e&&(w.translate=e)}}if(!w.transformOrigin){let e=rG(()=>m.current),t=M+(null!=(n=null==Y?void 0:Y.x)?n:0),r=L+(null!=(i=null==Y?void 0:Y.y)?i:0);w.transformOrigin={x:(e.x-t*j.scaleX-j.x)/(A*j.scaleX),y:(e.y-r*j.scaleY-j.y)/(P*j.scaleY)}}let{transformOrigin:er}=w,en=L*j.scaleY+j.y,ei=M*j.scaleX+j.x;if(!w.coordinates&&(w.coordinates={x:ei,y:en},1!==E.x||1!==E.y)){let{scaleX:e,scaleY:t}=I,{x:r,y:n}=er;w.coordinates.x+=(A*e-A)*r,w.coordinates.y+=(P*t-P)*n}w.dimensions||(w.dimensions={width:A,height:P}),w.frameTransform||(w.frameTransform=j);let eo={x:w.coordinates.x-ei,y:w.coordinates.y-en},ea={width:(w.dimensions.width*w.frameTransform.scaleX-A*j.scaleX)*er.x,height:(w.dimensions.height*w.frameTransform.scaleY-P*j.scaleY)*er.y},el={x:eo.x/j.scaleX+ea.width,y:eo.y/j.scaleY+ea.height},es={left:M+el.x,top:L+el.y};S.setAttribute(aW,"true");let ec=rG(()=>f.transform),eu=null!=(o=w.translate)?o:{x:0,y:0},ed=ec.x*j.scaleX+eu.x,ep=ec.y*j.scaleY+eu.y,eh=o_();N.set({width:A-J,height:P-Q,top:es.top+eh.y,left:es.left+eh.x,translate:`${ed}px ${ep}px 0`,transform:this.overlay?"none":X,transition:Z?`${Z}, translate 0ms linear`:"translate 0ms linear",scale:z?`${E.x} ${E.y}`:"","transform-origin":`${100*er.x}% ${100*er.y}%`},aH),ee&&(_.insertAdjacentElement("afterend",ee),(null==h?void 0:h.rootElement)&&("function"==typeof h.rootElement?h.rootElement(g):h.rootElement).appendChild(_)),oT(S)&&(S.hasAttribute("popover")||S.setAttribute("popover","manual"),oO(S),S.addEventListener("beforetoggle",aX));let ef=(l={placeholder:ee,element:_,feedbackElement:S,frameTransform:j,transformOrigin:er,width:A,height:P,top:L,left:M,widthOffset:J,heightOffset:Q,delta:el,styles:N,dragOperation:f,getTranslate:()=>d.current.translate,getElementMutationObserver:()=>s,getSavedCellWidths:()=>u,setSavedCellWidths:e=>{u=e}},new ResizeObserver(()=>{var e,t,r;let n=new o8(l.placeholder,{frameTransform:l.frameTransform,ignoreTransforms:!0}),i=null!=(e=l.transformOrigin)?e:{x:1,y:1},o=(l.width-n.width)*i.x+l.delta.x,a=(l.height-n.height)*i.y+l.delta.y,s=o_();if(l.styles.set({width:n.width-l.widthOffset,height:n.height-l.heightOffset,top:l.top+a+s.y,left:l.left+o+s.x},aH),null==(t=l.getElementMutationObserver())||t.takeRecords(),aG(l.element)&&aG(l.placeholder)){let e=Array.from(l.element.cells),t=Array.from(l.placeholder.cells);for(let[r,n]of(l.getSavedCellWidths()||l.setSavedCellWidths(e.map(e=>e.style.width)),e.entries())){let e=t[r];n.style.width=`${e.getBoundingClientRect().width}px`}}let c=null!=(r=l.getTranslate())?r:{x:0,y:0},u=l.left+o+s.x+c.x,d=l.top+a+s.y+c.y,p=n.width-l.widthOffset,h=n.height-l.heightOffset,f=l.frameTransform;l.dragOperation.shape=new n5(u*f.scaleX+f.x,d*f.scaleY+f.y,p*f.scaleX,h*f.scaleY)})),em=new o8(S);rG(()=>f.shape=em);let eg=oc(S),ev=e=>{this.manager.actions.stop({event:e})},e_=oy(eg);if(et&&eg.addEventListener("resize",ev),"idle"===rG(()=>g.status)&&requestAnimationFrame(()=>g.status="dragging"),ee){let e,t;ef.observe(ee),(e=new MutationObserver(e=>{let t=!1;for(let r of e){if(r.target!==_){t=!0;continue}if("attributes"!==r.type)continue;let e=r.attributeName;if(e.startsWith("aria-")||aq.includes(e))continue;let n=_.getAttribute(e);if("style"===e){if(o7(_)&&o7(ee)){let e=_.style;for(let t of Array.from(ee.style))""===e.getPropertyValue(t)&&ee.style.removeProperty(t);for(let t of Array.from(e)){if(aU.includes(t)||t.startsWith(aH))continue;let r=e.getPropertyValue(t);ee.style.setProperty(t,r)}}}else null!==n?ee.setAttribute(e,n):ee.removeAttribute(e)}t&&G&&ee.replaceChildren(..._.cloneNode(!0).childNodes)})).observe(_,{attributes:!0,subtree:!0,childList:!0}),s=e,(t=new MutationObserver(e=>{for(let t of e)if(0!==t.addedNodes.length)for(let e of Array.from(t.addedNodes)){if(e.contains(_)&&_.nextElementSibling!==ee){_.insertAdjacentElement("afterend",ee),oO(S);return}if(e.contains(ee)&&ee.previousElementSibling!==_){ee.insertAdjacentElement("beforebegin",_),oO(S);return}}_.isConnected&&ee.isConnected&&_.nextElementSibling!==ee&&(_.insertAdjacentElement("afterend",ee),oO(S))})).observe(_.ownerDocument.body,{childList:!0,subtree:!0}),c=t}let eb=null==(a=p.dragOperation.source)?void 0:a.id,ex=()=>{var e;if(!et||null==eb)return;let t=p.registry.draggables.get(eb),r=null!=(e=null==t?void 0:t.handle)?e:null==t?void 0:t.element;od(r)&&r.focus()},ey=()=>{var e;if(null==s||s.disconnect(),null==c||c.disconnect(),ef.disconnect(),eg.removeEventListener("resize",ev),oT(S)&&(S.removeEventListener("beforetoggle",aX),S.removeAttribute("popover")),S.removeAttribute(aW),N.reset(),u&&aG(_))for(let[t,r]of Array.from(_.cells).entries())r.style.width=null!=(e=u[t])?e:"";g.status="idle";let t=null!=d.current.translate,r=f.status.dragging;ee&&(!r&&t||ee.parentElement!==S.parentElement)&&S.isConnected&&ee.replaceWith(S),null==ee||ee.remove()},ek=null==h?void 0:h.dropAnimation,ew=this,eS=nN(()=>{var e,t,r;let{transform:n,status:i}=f;if((n.x||n.y||d.current.translate)&&i.dragging){let i=null!=(e=w.translate)?e:{x:0,y:0},o={x:n.x/j.scaleX+i.x,y:n.y/j.scaleY+i.y},a=d.current.translate,l=rG(()=>f.modifiers),c=rG(()=>{var e;return null==(e=f.shape)?void 0:e.current}),u=null==h?void 0:h.keyboardTransition,p=et&&!e_&&null!==u?`${null!=(t=null==u?void 0:u.duration)?t:250}ms ${null!=(r=null==u?void 0:u.easing)?r:"cubic-bezier(0.25, 1, 0.5, 1)"}`:"0ms linear";if(N.set({transition:Z?`${Z}, translate ${p}`:`translate ${p}`,translate:`${o.x}px ${o.y}px 0`},aH),null==s||s.takeRecords(),c&&c!==em&&a&&!l.length){let e=n6.delta(o,a);f.shape=n5.from(c.boundingRectangle).translate(e.x*j.scaleX,e.y*j.scaleY)}else f.shape=new o8(S);d.current.translate=o}},function(){if(f.status.dropped){this.dispose(),g.status="dropping";let e=(null==b?void 0:b.dropAnimation)!==void 0?b.dropAnimation:void 0!==ew.dropAnimation?ew.dropAnimation:ek,t=d.current.translate,r=null!=t;if(t||_===S||(t={x:0,y:0}),!t||null===e)return void ey();p.renderer.rendering.then(()=>{!function(e){var t,r,n,i;let{animation:o}=e;if("function"==typeof o)return Promise.resolve(o({source:e.source,element:e.element,feedbackElement:e.feedbackElement,placeholder:e.placeholder,translate:e.translate,moved:e.moved})).then(()=>{e.cleanup(),requestAnimationFrame(e.restoreFocus)});let{duration:a=250,easing:l="ease"}=null!=o?o:{};oO(e.feedbackElement);let[,s]=null!=(t=oo(e.feedbackElement,e=>"translate"in e))?t:[];null==s||s.pause();let c=null!=(r=e.placeholder)?r:e.element,u={frameTransform:aY(e.feedbackElement,c)?null:void 0},d=new o8(e.feedbackElement,u),p=null!=(n=oX(o$(e.feedbackElement).translate))?n:e.translate,h=new o8(c,u),f=n5.delta(d,h,e.alignment),m={x:p.x-f.x,y:p.y-f.y},g=Math.round(d.intrinsicHeight)!==Math.round(h.intrinsicHeight)?{minHeight:[`${d.intrinsicHeight}px`,`${h.intrinsicHeight}px`],maxHeight:[`${d.intrinsicHeight}px`,`${h.intrinsicHeight}px`]}:{},v=Math.round(d.intrinsicWidth)!==Math.round(h.intrinsicWidth)?{minWidth:[`${d.intrinsicWidth}px`,`${h.intrinsicWidth}px`],maxWidth:[`${d.intrinsicWidth}px`,`${h.intrinsicWidth}px`]}:{};e.styles.set({transition:e.transition},aH),e.feedbackElement.setAttribute(aV,""),null==(i=e.getElementMutationObserver())||i.takeRecords(),o2({element:e.feedbackElement,keyframes:as(av(av({},g),v),au({translate:[`${p.x}px ${p.y}px 0`,`${m.x}px ${m.y}px 0`]})),options:{duration:oy(oc(e.feedbackElement))?0:e.moved||e.feedbackElement!==e.element?a:0,easing:l}}).then(()=>{e.feedbackElement.removeAttribute(aV),null==s||s.finish(),e.cleanup(),requestAnimationFrame(e.restoreFocus)})}({source:g,element:_,feedbackElement:S,placeholder:ee,translate:t,moved:r,transition:O,alignment:g.alignment,styles:N,animation:null!=e?e:void 0,getElementMutationObserver:()=>s,cleanup:ey,restoreFocus:ex})})}});return()=>{ey(),eS()}},aI(tz,4,"overlay",tj,aK,tC),aS(tz,aK),aK.configure=iL(aK),tN=[nP],tT=oK.Forward,tL=[nP],tM=oK.Reverse;var aJ=class{constructor(){aA(this,tD,aj(tO,8,this,!0)),aj(tO,11,this),aA(this,tB,aj(tO,12,this,!0)),aj(tO,15,this)}isLocked(e){return e!==oK.Idle&&(null==e?!0===this[oK.Forward]&&!0===this[oK.Reverse]:!0===this[e])}unlock(e){e!==oK.Idle&&(this[e]=!1)}};tO=ax(null),tD=new WeakMap,tB=new WeakMap,aI(tO,4,tT,tN,aJ,tD),aI(tO,4,tM,tL,aJ,tB),aS(tO,aJ);var aQ=[oK.Forward,oK.Reverse],a0=class{constructor(){this.x=new aJ,this.y=new aJ}isLocked(){return this.x.isLocked()&&this.y.isLocked()}},a1=class extends iN{constructor(e){super(e);const t=r5(new a0);let r=null;this.signal=t,no(()=>{let{status:n}=e.dragOperation;if(!n.initialized){r=null,t.value=new a0;return}let{delta:i}=e.dragOperation.position;if(r){let e={x:a2(i.x,r.x),y:a2(i.y,r.y)},n=t.peek();rZ(()=>{for(let t of ie)for(let r of aQ)e[t]===r&&n[t].unlock(r);t.value=n})}r=i})}get current(){return this.signal.peek()}};function a2(e,t){return Math.sign(e-t)}var a4=class extends(tR=iT,tF=[nP],tR){constructor(e){super(e),aA(this,tH,aj(tV,8,this,!1)),aj(tV,11,this),aA(this,tW),aA(this,t$,()=>{if(!aE(this,tW))return;let{element:e,by:t}=aE(this,tW);t.y&&(e.scrollTop+=t.y),t.x&&(e.scrollLeft+=t.x)}),this.scroll=(e,t)=>{var r;if(this.disabled)return!1;let n=this.getScrollableElements();if(!n)return aP(this,tW,void 0),!1;let{position:i}=this.manager.dragOperation,o=null==i?void 0:i.current;if(o){let{by:i}=null!=e?e:{},a=i?{x:a3(i.x),y:a3(i.y)}:void 0,l=a?void 0:this.scrollIntentTracker.current;if(null==l?void 0:l.isLocked())return!1;for(let e of n){let n=function(e,t){let{isTop:r,isBottom:n,isLeft:i,isRight:o,position:a}=oB(e),{x:l,y:s}=null!=t?t:{x:0,y:0},c=!r&&a.current.y+s>0,u=!n&&a.current.y+s<a.max.y,d=!i&&a.current.x+l>0,p=!o&&a.current.x+l<a.max.x;return{top:c,bottom:u,left:d,right:p,x:d||p,y:c||u}}(e,i);if(n.x||n.y){let{speed:n,direction:s}=function(e,t,r,n=25,i=oJ,o=oQ){let{x:a,y:l}=t,{rect:s,isTop:c,isBottom:u,isLeft:d,isRight:p}=oB(e),h=oY(e),f=oG(o$(e,!0)),m=null!==f&&(null==f?void 0:f.scaleX)<0,g=null!==f&&(null==f?void 0:f.scaleY)<0,v=new n5(s.left*h.scaleX+h.x,s.top*h.scaleY+h.y,s.width*h.scaleX,s.height*h.scaleY),_={x:0,y:0},b={x:0,y:0},y={height:v.height*i.y,width:v.width*i.x};return y.height>0&&(!c||g&&!u)&&l<=v.top+y.height&&(null==r?void 0:r.y)!==1&&a>=v.left-o.x&&a<=v.right+o.x?(_.y=g?1:-1,b.y=n*Math.abs((v.top+y.height-l)/y.height)):y.height>0&&(!u||g&&!c)&&l>=v.bottom-y.height&&(null==r?void 0:r.y)!==-1&&a>=v.left-o.x&&a<=v.right+o.x&&(_.y=g?-1:1,b.y=n*Math.abs((v.bottom-y.height-l)/y.height)),y.width>0&&(!p||m&&!d)&&a>=v.right-y.width&&(null==r?void 0:r.x)!==-1&&l>=v.top-o.y&&l<=v.bottom+o.y?(_.x=m?-1:1,b.x=n*Math.abs((v.right-y.width-a)/y.width)):y.width>0&&(!d||m&&!p)&&a<=v.left+y.width&&(null==r?void 0:r.x)!==1&&l>=v.top-o.y&&l<=v.bottom+o.y&&(_.x=m?1:-1,b.x=n*Math.abs((v.left+y.width-a)/y.width)),{direction:_,speed:b}}(e,o,a,null==t?void 0:t.acceleration,null==t?void 0:t.threshold);if(l)for(let e of ie)l[e].isLocked(s[e])&&(n[e]=0,s[e]=0);if(s.x||s.y){let{x:t,y:o}=null!=i?i:s,a=t*n.x,l=o*n.y;if(a||l){let t=null==(r=aE(this,tW))?void 0:r.by;if(this.autoScrolling&&t&&(t.x&&!a||t.y&&!l))continue;return aP(this,tW,{element:e,by:{x:a,y:l}}),oR.schedule(aE(this,t$)),!0}}}}}return aP(this,tW,void 0),!1};let t=null,r=null;const n=nE(()=>{let{position:r,source:n}=e.dragOperation;if(!r)return null;let i=function e(t,{x:r,y:n}){var i;let o=t.elementFromPoint(r,n);if((null==(i=o)?void 0:i.tagName)==="IFRAME"){let{contentDocument:t}=o;if(t){let{left:i,top:a}=o.getBoundingClientRect();return e(t,{x:r-i,y:n-a})}}return o}(ox(null==n?void 0:n.element),r.current);return i&&(t=i),null!=i?i:t}),i=nE(()=>{let t=n.value,{documentElement:i}=oh(t);if(!t||t===i){let{target:t}=e.dragOperation,n=null==t?void 0:t.element;if(n){let e=oZ(n,{excludeElement:!1});return r=e,e}}if(t){let e=oZ(t,{excludeElement:!1});return this.autoScrolling&&r&&e.size<(null==r?void 0:r.size)?r:(r=e,e)}return r=null,null},nA);this.getScrollableElements=()=>i.value,this.scrollIntentTracker=new a1(e),this.destroy=e.monitor.addEventListener("dragmove",t=>{!this.disabled&&!t.defaultPrevented&&at(e.dragOperation.activatorEvent)&&t.by&&this.scroll({by:t.by})&&t.preventDefault()})}};function a3(e){return e>0?oK.Forward:e<0?oK.Reverse:oK.Idle}tV=ax(tR),tH=new WeakMap,tW=new WeakMap,t$=new WeakMap,aI(tV,4,"autoScrolling",tF,a4,tH),aS(tV,a4);var a6=new class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;for(let t of(this.pending=!1,this.tasks=new Set,this.resolvers=new Set,e))t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}}(e=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(e):e()}),a5=class extends iN{constructor(e,t){super(e,t);const r=e.registry.plugins.get(a4);if(!r)throw Error("AutoScroller plugin depends on Scroller plugin");this.destroy=no(()=>{var t,n,i;if(this.disabled)return;let{position:o,status:a}=e.dragOperation;if(a.dragging){let e={acceleration:null==(t=this.options)?void 0:t.acceleration,threshold:"number"==typeof(null==(n=this.options)?void 0:n.threshold)?{x:this.options.threshold,y:this.options.threshold}:null==(i=this.options)?void 0:i.threshold};if(r.scroll(void 0,e)){r.autoScrolling=!0;let t=setInterval(()=>a6.schedule(()=>r.scroll(void 0,e)),10);return()=>{clearInterval(t)}}r.autoScrolling=!1}})}};a5.configure=iL(a5);var a8={capture:!0,passive:!0},a7=class extends iT{constructor(e){super(e),aA(this,tq),this.handleScroll=()=>{null==aE(this,tq)&&aP(this,tq,setTimeout(()=>{this.manager.collisionObserver.forceUpdate(!1),aP(this,tq,void 0)},50))};const{dragOperation:t}=this.manager;this.destroy=no(()=>{var e,r,n;if(t.status.dragging){let i=null!=(n=null==(r=null==(e=t.source)?void 0:e.element)?void 0:r.ownerDocument)?n:document;return i.addEventListener("scroll",this.handleScroll,a8),()=>{i.removeEventListener("scroll",this.handleScroll,a8)}}})}};tq=new WeakMap;var a9=class extends iN{constructor(e){super(e),this.manager=e;const t=e.registry.plugins.get(aB),r=null==t?void 0:t.register("* { user-select: none !important; -webkit-user-select: none !important; }");if(this.destroy=no(()=>{let{dragOperation:e}=this.manager;if(e.status.initialized)return le(),document.addEventListener("selectionchange",le,{capture:!0}),()=>{document.removeEventListener("selectionchange",le,{capture:!0})}}),r){const e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}}};function le(){var e;null==(e=document.getSelection())||e.removeAllRanges()}var lt=Object.freeze({offset:10,keyboardCodes:{start:["Space","Enter"],cancel:["Escape"],end:["Space","Enter","Tab"],up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"]},preventActivation(e,t){var r;let n=null!=(r=t.handle)?r:t.element;return e.target!==n}}),lr=class extends iQ{constructor(e,t){super(e),this.manager=e,this.options=t,aA(this,tU,[]),this.listeners=new oj,this.handleSourceKeyDown=(e,t,r)=>{if(this.disabled||e.defaultPrevented||!ae(e.target)||t.disabled)return;let{keyboardCodes:n=lt.keyboardCodes,preventActivation:i=lt.preventActivation}=null!=r?r:{};!n.start.includes(e.code)||!this.manager.dragOperation.status.idle||null!=i&&i(e,t)||this.handleStart(e,t,r)}}bind(e,t=this.options){return no(()=>{var r;let n=null!=(r=e.handle)?r:e.element,i=r=>{at(r)&&this.handleSourceKeyDown(r,e,t)};if(n)return n.addEventListener("keydown",i),()=>{n.removeEventListener("keydown",i)}})}handleStart(e,t,r){let{element:n}=t;if(!n)throw Error("Source draggable does not have an associated element");e.preventDefault(),e.stopImmediatePropagation(),o0(n);let{center:i}=new o8(n);if(this.manager.actions.start({event:e,coordinates:{x:i.x,y:i.y},source:t}).signal.aborted)return this.cleanup();this.sideEffects();let o=oh(n),a=[this.listeners.bind(o,[{type:"keydown",listener:e=>this.handleKeyDown(e,t,r),options:{capture:!0}}])];aE(this,tU).push(...a)}handleKeyDown(e,t,r){let{keyboardCodes:n=lt.keyboardCodes}=null!=r?r:{};if(ln(e,[...n.end,...n.cancel])){e.preventDefault();let t=ln(e,n.cancel);this.handleEnd(e,t);return}ln(e,n.up)?this.handleMove("up",e):ln(e,n.down)&&this.handleMove("down",e),ln(e,n.left)?this.handleMove("left",e):ln(e,n.right)&&this.handleMove("right",e)}handleEnd(e,t){this.manager.actions.stop({event:e,canceled:t}),this.cleanup()}handleMove(e,t){var r,n;let{shape:i}=this.manager.dragOperation,o=t.shiftKey?5:1,a={x:0,y:0},l=null!=(n=null==(r=this.options)?void 0:r.offset)?n:lt.offset;if("number"==typeof l&&(l={x:l,y:l}),i){switch(e){case"up":a={x:0,y:-l.y*o};break;case"down":a={x:0,y:l.y*o};break;case"left":a={x:-l.x*o,y:0};break;case"right":a={x:l.x*o,y:0}}(a.x||a.y)&&(t.preventDefault(),this.manager.actions.move({event:t,by:a}))}}sideEffects(){let e=this.manager.registry.plugins.get(a5);(null==e?void 0:e.disabled)===!1&&(e.disable(),aE(this,tU).push(()=>{e.enable()}))}cleanup(){aE(this,tU).forEach(e=>e()),aP(this,tU,[])}destroy(){this.cleanup(),this.listeners.clear()}};function ln(e,t){return t.includes(e.code)}tU=new WeakMap,lr.configure=iL(lr),lr.defaults=lt;var li=class extends i1{constructor(){super(...arguments),aA(this,tZ)}onEvent(e){switch(e.type){case"pointerdown":aP(this,tZ,om(e));break;case"pointermove":if(!aE(this,tZ))return;let{x:t,y:r}=om(e),n={x:t-aE(this,tZ).x,y:r-aE(this,tZ).y},{tolerance:i}=this.options;if(i&&n7(n,i))return void this.abort();n7(n,this.options.value)&&this.activate(e);break;case"pointerup":this.abort()}}abort(){aP(this,tZ,void 0)}};tZ=new WeakMap;var lo=class extends i1{constructor(){super(...arguments),aA(this,tY),aA(this,tX)}onEvent(e){switch(e.type){case"pointerdown":aP(this,tX,om(e)),aP(this,tY,setTimeout(()=>this.activate(e),this.options.value));break;case"pointermove":if(!aE(this,tX))return;let{x:t,y:r}=om(e);n7({x:t-aE(this,tX).x,y:r-aE(this,tX).y},this.options.tolerance)&&this.abort();break;case"pointerup":this.abort()}}abort(){aE(this,tY)&&(clearTimeout(aE(this,tY)),aP(this,tX,void 0),aP(this,tY,void 0))}};tY=new WeakMap,tX=new WeakMap;var la=class{};la.Delay=lo,la.Distance=li;var ll=Object.freeze({activationConstraints(e,t){var r;let{pointerType:n,target:i}=e;if(!("mouse"===n&&ae(i)&&(t.handle===i||(null==(r=t.handle)?void 0:r.contains(i)))))return"touch"===n?[new la.Delay({value:250,tolerance:5})]:function(e){var t;if(!ae(e))return!1;let{tagName:r}=e;return"INPUT"===r||"TEXTAREA"===r||(t=e).hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable")}(i)&&!e.defaultPrevented?[new la.Delay({value:200,tolerance:0})]:[new la.Delay({value:200,tolerance:10}),new la.Distance({value:5})]},preventActivation(e,t){var r;let{target:n}=e;return!(n===t.element||n===t.handle||!ae(n)||(null==(r=t.handle)?void 0:r.contains(n)))&&!!n.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `)}}),ls=class extends iQ{constructor(e,t){super(e),this.manager=e,this.options=t,aA(this,tG,new Set),this.listeners=new oj,this.latest={event:void 0,coordinates:void 0},this.handleMove=()=>{let{event:e,coordinates:t}=this.latest;e&&t&&this.manager.actions.move({event:e,to:t})},this.handleCancel=this.handleCancel.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activationConstraints(e,t,r=this.options){let{activationConstraints:n=ll.activationConstraints}=null!=r?r:{};return"function"==typeof n?n(e,t):n}bind(e,t=this.options){return no(()=>{var r,n;let i=new AbortController,{signal:o}=i,a=r=>{(function(e){if(!e)return!1;let{PointerEvent:t}=oc(e.target);return e instanceof t})(r)&&this.handlePointerDown(r,e,t)},l=[null!=(r=e.handle)?r:e.element];for(let r of((null==t?void 0:t.activatorElements)&&(l=Array.isArray(t.activatorElements)?t.activatorElements:t.activatorElements(e)),l)){r&&(!(n=r.ownerDocument.defaultView)||ld.has(n)||(n.addEventListener("touchmove",lu,{capture:!1,passive:!1}),ld.add(n)),r.addEventListener("pointerdown",a,{signal:o}))}return()=>i.abort()})}handlePointerDown(e,t,r){if(this.disabled||!e.isPrimary||0!==e.button||!ae(e.target)||t.disabled||"sensor"in e||!this.manager.dragOperation.status.idle)return;let{preventActivation:n=ll.preventActivation}=null!=r?r:{};if(null==n?void 0:n(e,t))return;let{target:i}=e,o=od(i)&&i.draggable&&"true"===i.getAttribute("draggable"),a=oY(t.element),{x:l,y:s}=om(e);this.initialCoordinates={x:l*a.scaleX+a.x,y:s*a.scaleY+a.y};let c=this.activationConstraints(e,t,r);e.sensor=this;let u=new i0(c,e=>this.handleStart(t,e));u.signal.onabort=()=>this.handleCancel(e),u.onEvent(e),this.controller=u;let d=function e(t=document,r=new Set){if(r.has(t))return[];r.add(t);let n=[t];for(let i of Array.from(t.querySelectorAll("iframe, frame")))try{let t=i.contentDocument;t&&!r.has(t)&&n.push(...e(t,r))}catch(e){}try{let i=t.defaultView;if(i&&i!==window.top){let o=i.parent;o&&o.document&&o.document!==t&&n.push(...e(o.document,r))}}catch(e){}return n}(),p=this.listeners.bind(d,[{type:"pointermove",listener:e=>this.handlePointerMove(e,t)},{type:"pointerup",listener:this.handlePointerUp,options:{capture:!0}},{type:"pointercancel",listener:this.handleCancel},{type:"dragstart",listener:o?this.handleCancel:lc,options:{capture:!0}}]),h=()=>{p(),this.initialCoordinates=void 0};aE(this,tG).add(h)}handlePointerMove(e,t){var r,n;if((null==(r=this.controller)?void 0:r.activated)===!1){null==(n=this.controller)||n.onEvent(e);return}if(this.manager.dragOperation.status.dragging){let r=om(e),n=oY(t.element);r.x=r.x*n.scaleX+n.x,r.y=r.y*n.scaleY+n.y,e.preventDefault(),e.stopPropagation(),this.latest.event=e,this.latest.coordinates=r,oR.schedule(this.handleMove)}}handlePointerUp(e){let{status:t}=this.manager.dragOperation;if(!t.idle){e.preventDefault(),e.stopPropagation();let r=!t.initialized;this.manager.actions.stop({event:e,canceled:r})}this.cleanup()}handleKeyDown(e){"Escape"===e.key&&(e.preventDefault(),this.handleCancel(e))}handleStart(e,t){let{manager:r,initialCoordinates:n}=this;if(!n||!r.dragOperation.status.idle||t.defaultPrevented)return;if(r.actions.start({coordinates:n,event:t,source:e}).signal.aborted)return this.cleanup();t.preventDefault();let i=oh(t.target).body;try{i.setPointerCapture(t.pointerId)}catch(e){this.handleCancel(t);return}let o=ae(t.target)?[t.target,i]:i,a=this.listeners.bind(o,[{type:"touchmove",listener:lc,options:{passive:!1}},{type:"click",listener:lc},{type:"contextmenu",listener:lc},{type:"keydown",listener:this.handleKeyDown}]);aE(this,tG).add(a)}handleCancel(e){let{dragOperation:t}=this.manager;t.status.initialized&&this.manager.actions.stop({event:e,canceled:!0}),this.cleanup()}cleanup(){let{controller:e}=this;this.controller=void 0,e&&!e.signal.aborted&&e.abort(),this.latest={event:void 0,coordinates:void 0},aE(this,tG).forEach(e=>e()),aE(this,tG).clear()}destroy(){this.cleanup(),this.listeners.clear()}};function lc(e){e.preventDefault()}function lu(){}tG=new WeakMap,ls.configure=iL(ls),ls.defaults=ll;var ld=new WeakSet,lp=[],lh=[aO,a5,aF,aK,a9],lf=[ls,lr],lm=class extends i8{constructor(e={}){const t=i5(e.plugins,lh),r=i5(e.sensors,lf),n=i5(e.modifiers,lp);super(((e,t)=>as(e,au(t)))(av({},e),{plugins:[a7,a4,aB,...t],sensors:r,modifiers:n}))}},lg=class extends(tQ=iW,tJ=[nP],tK=[nP],tQ){constructor(e,t){var{element:r,effects:n=()=>[],handle:i}=e;super(av({effects:()=>[...n(),()=>{var e,t;let{manager:r}=this;if(!r)return;let n=(null!=(t=null==(e=this.sensors)?void 0:e.map(iM))?t:[...r.sensors]).map(e=>{let t=e instanceof iQ?e:r.registry.register(e.plugin),n=e instanceof iQ?void 0:e.options;return t.bind(this,n)});return function(){n.forEach(e=>e())}}]},ab(e,["element","effects","handle"])),t),aA(this,t1,aj(t0,8,this)),aj(t0,11,this),aA(this,t2,aj(t0,12,this)),aj(t0,15,this),this.element=r,this.handle=i}};t0=ax(tQ),t1=new WeakMap,t2=new WeakMap,aI(t0,4,"handle",tJ,lg,t1),aI(t0,4,"element",tK,lg,t2),aS(t0,lg);var lv=class extends(t6=i$,t3=[nP],t4=[nP],t6){constructor(e,t){var{element:r,effects:n=()=>[]}=e,i=ab(e,["element","effects"]);const{collisionDetector:o=ai}=i,a=e=>{let{manager:t,element:r}=this;if(!r||null===e){this.shape=void 0;return}if(!t)return;let n=new o8(r),i=rG(()=>this.shape);return n&&(null==i?void 0:i.equals(n))?i:(this.shape=n,n)},l=r5(!1);super(((e,t)=>as(e,au(t)))(av({},i),{collisionDetector:o,effects:()=>[...n(),()=>{let{element:e,manager:t}=this;if(!t)return;let{dragOperation:r}=t,{source:n}=r;l.value=!!(n&&r.status.initialized&&e&&!this.disabled&&this.accepts(n))},()=>{let{element:e}=this;if(l.value&&e){let t=new oN(e,a);return()=>{t.disconnect(),this.shape=void 0}}},()=>{var e;if(null==(e=this.manager)?void 0:e.dragOperation.status.initialized)return()=>{this.shape=void 0}}]}),t),aA(this,rt),aA(this,t8,aj(t5,8,this)),aj(t5,11,this),aA(this,rr,aj(t5,12,this)),aj(t5,15,this),this.element=r,this.refreshShape=()=>a()}set element(e){aP(this,rt,e,re)}get element(){var e;return null!=(e=this.proxy)?e:aE(this,rt,t9)}};t5=ax(t6),t8=new WeakMap,rt=new WeakSet,rr=new WeakMap,t9=(t7=aI(t5,20,"#element",t3,rt,t8)).get,re=t7.set,aI(t5,4,"proxy",t4,lv,rr),aS(t5,lv);var l_=e.i(74080);function lb(e){var t;if(null!=e)return null!=e&&"object"==typeof e&&"current"in e?null!=(t=e.current)?t:void 0:e}var lx="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement?rk.useLayoutEffect:rk.useEffect;function ly(e,t){let r,n=(0,rk.useRef)(new Map),i=(r=(0,rk.useState)(0)[1],(0,rk.useCallback)(()=>{r(e=>e+1)},[r]));return lx(()=>e?no(()=>{var r;let o=!1,a=!1;for(let i of n.current){let[l]=i,s=rG(()=>i[1]),c=e[l];s!==c&&(o=!0,n.current.set(l,c),a=null!=(r=null==t?void 0:t(l,s,c))&&r)}o&&(a?queueMicrotask(()=>(0,l_.flushSync)(i)):i())}):void n.current.clear(),[e]),(0,rk.useMemo)(()=>e?new Proxy(e,{get(e,t){let r=e[t];return n.current.set(t,r),r}}):e,[e])}function lk(e,t){e()}function lw(e){let t=(0,rk.useRef)(e);return lx(()=>{t.current=e},[e]),t}function lS(e,t,r=rk.useEffect,n=Object.is){let i=(0,rk.useRef)(e);r(()=>{let r=i.current;n(e,r)||(i.current=e,t(e,r))},[t,e])}function lj(e,t){let r=(0,rk.useRef)(lb(e));lx(()=>{let n=lb(e);n!==r.current&&(r.current=n,t(n))})}var lI=Object.defineProperty,lz=Object.defineProperties,lC=Object.getOwnPropertyDescriptors,lE=Object.getOwnPropertySymbols,lA=Object.prototype.hasOwnProperty,lP=Object.prototype.propertyIsEnumerable,lL=(e,t,r)=>t in e?lI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lM=(e,t)=>{for(var r in t||(t={}))lA.call(t,r)&&lL(e,r,t[r]);if(lE)for(var r of lE(t))lP.call(t,r)&&lL(e,r,t[r]);return e},lN=new lm,lT=(0,rk.createContext)(lN),lO=(0,rk.memo)((0,rk.forwardRef)(({children:e},t)=>{let[r,n]=(0,rk.useState)(0),i=(0,rk.useRef)(null),o=(0,rk.useRef)(null),a=(0,rk.useMemo)(()=>({renderer:{get rendering(){var e;return null!=(e=i.current)?e:Promise.resolve()}},trackRendering(e){i.current||(i.current=new Promise(e=>{o.current=e})),(0,rk.startTransition)(()=>{e(),n(e=>e+1)})}}),[]);return lx(()=>{var e;null==(e=o.current)||e.call(o),i.current=null},[e,r]),(0,rk.useImperativeHandle)(t,()=>a),null})),lD=[void 0,nA];function lB(e){let t;var r,{children:n,onCollision:i,onBeforeDragStart:o,onDragStart:a,onDragMove:l,onDragOver:s,onDragEnd:c}=e,u=((e,t)=>{var r={};for(var n in e)lA.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&lE)for(var n of lE(e))0>t.indexOf(n)&&lP.call(e,n)&&(r[n]=e[n]);return r})(e,["children","onCollision","onBeforeDragStart","onDragStart","onDragMove","onDragOver","onDragEnd"]);let d=(0,rk.useRef)(null),{plugins:p,modifiers:h,sensors:f}=u,m=i5(p,lh),g=i5(f,lf),v=i5(h,lp),_=lw(o),b=lw(a),y=lw(s),k=lw(l),w=lw(c),S=lw(i),j=(r=()=>{var e;return null!=(e=u.manager)?e:new lm(u)},(t=(0,rk.useRef)(null)).current||(t.current=r()),(0,rk.useInsertionEffect)(()=>()=>{var e;return null==(e=t.current)?void 0:e.destroy()},[]),t.current);return(0,rk.useEffect)(()=>{if(!d.current)throw Error("Renderer not found");let{renderer:e,trackRendering:t}=d.current,{monitor:r}=j;j.renderer=e;let n=[r.addEventListener("beforedragstart",e=>{let r=_.current;r&&t(()=>r(e,j))}),r.addEventListener("dragstart",e=>{var t;return null==(t=b.current)?void 0:t.call(b,e,j)}),r.addEventListener("dragover",e=>{let r=y.current;r&&t(()=>r(e,j))}),r.addEventListener("dragmove",e=>{let r=k.current;r&&t(()=>r(e,j))}),r.addEventListener("dragend",e=>{let r=w.current;r&&t(()=>r(e,j))}),r.addEventListener("collision",e=>{var t;return null==(t=S.current)?void 0:t.call(S,e,j)})];return()=>n.forEach(e=>e())},[j]),lS(m,()=>j&&(j.plugins=m),...lD),lS(g,()=>j&&(j.sensors=g),...lD),lS(v,()=>j&&(j.modifiers=v),...lD),(0,rw.jsxs)(lT.Provider,{value:j,children:[(0,rw.jsx)(lO,{ref:d,children:n}),n]})}function lF(){return(0,rk.useContext)(lT)}function lR(e){var t;let r=null!=(t=lF())?t:void 0,[n]=(0,rk.useState)(()=>e(r));return n.manager!==r&&(n.manager=r),lx(n.register,[r,n]),n}function lV(e,t,r){return"isDragSource"===e&&!r&&!!t}var lH=Object.create,lW=Object.defineProperty,l$=Object.getOwnPropertyDescriptor,lq=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),lU=e=>{throw TypeError(e)},lZ=["class","method","getter","setter","accessor","field","value","get","set"],lY=e=>void 0!==e&&"function"!=typeof e?lU("Function expected"):e,lX=(e,t,r,n,i)=>({kind:lZ[e],name:t,metadata:n,addInitializer:e=>r._?lU("Already initialized"):i.push(lY(e||null))}),lG=(e,t,r,n,i,o)=>{for(var a,l,s,c=7&t,u=lZ[c+5],d=e[2]||(e[2]=[]),p=l$(i=i.prototype,r),h=n.length-1;h>=0;h--)(s=lX(c,r,l={},e[3],d)).static=!1,s.private=!1,(s.access={has:e=>r in e}).get=e=>e[r],a=(0,n[h])(p[u],s),l._=1,lY(a)&&(p[u]=a);return p&&lW(i,r,p),i},lK=(e,t,r)=>t.has(e)||lU("Cannot "+r),lJ=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,r){return new e(t.x-r.x,t.y-r.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:r}){return new e(t,r)}},lQ=class extends(ro=nT,ri=[nL],rn=[nL],ro){constructor(e){super(lJ.from(e),(e,t)=>lJ.equals(e,t)),((e,t)=>{for(var r=0,n=e[2],i=n&&n.length;r<i;r++)n[r].call(t)})(rl,this),((e,t)=>t.has(e)?lU("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,0))(this,ra),this.velocity={x:0,y:0}}get delta(){return lJ.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let r={x:e.x-t.x,y:e.y-t.y};return r.x||r.y?Math.abs(r.x)>Math.abs(r.y)?r.x>0?"right":"left":r.y>0?"down":"up":null}get current(){return super.current}set current(e){let t,{current:r}=this,n=lJ.from(e),i={x:n.x-r.x,y:n.y-r.y},o=Date.now(),a=o-(lK(this,t=ra,"read from private field"),t.get(this)),l=e=>Math.round(e/a*100);rZ(()=>{let e;lK(this,e=ra,"write to private field"),e.set(this,o),this.velocity={x:l(i.x),y:l(i.y)},super.current=n})}reset(e=this.defaultValue){super.reset(lJ.from(e)),this.velocity={x:0,y:0}}};rl=[,,,lH(null!=(p=null==ro?void 0:ro[lq("metadata")])?p:null)],ra=new WeakMap,lG(rl,2,"delta",ri,lQ),lG(rl,2,"direction",rn,lQ),h=rl,r=lq("metadata"),n=h[3],r in lQ?lW(lQ,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):lQ[r]=n;var l0=((f=l0||{}).Horizontal="x",f.Vertical="y",f);Object.values(l0);var l1=e=>{var t;return null!=(t=(({dragOperation:e,droppable:t})=>{let r=e.position.current;if(!r)return null;let{id:n}=t;return t.shape&&t.shape.containsPoint(r)?{id:n,value:1/lJ.distance(t.shape.center,r),type:iG.PointerIntersection,priority:iX.High}:null})(e))?t:(({dragOperation:e,droppable:t})=>{let{shape:r}=e;if(!t.shape||!(null==r?void 0:r.current))return null;let n=r.current.intersectionArea(t.shape);if(n){let{position:i}=e,o=lJ.distance(t.shape.center,i.current),a=n/(r.current.area+t.shape.area-n);return{id:t.id,value:a/o,type:iG.ShapeIntersection,priority:iX.Normal}}return null})(e)};function l2(e){let{collisionDetector:t,data:r,disabled:n,element:i,id:o,accept:a,type:l}=e,s=lR(t=>new lv(lz(lM({},e),lC({register:!1,element:lb(i)})),t)),c=ly(s);return lS(o,()=>s.id=o),lj(i,e=>s.element=e),lS(a,()=>s.accept=a,void 0,nA),lS(t,()=>s.collisionDetector=null!=t?t:l1),lS(r,()=>r&&(s.data=r)),lS(n,()=>s.disabled=!0===n),lS(l,()=>s.type=l),{droppable:c,get isDropTarget(){return c.isDropTarget},ref:(0,rk.useCallback)(e=>{var t,r;(e||null==(t=s.element)||!t.isConnected||(null==(r=s.manager)?void 0:r.dragOperation.status.idle))&&(s.element=null!=e?e:void 0)},[s])}}var l4=Object.create,l3=Object.defineProperty,l6=Object.defineProperties,l5=Object.getOwnPropertyDescriptor,l8=Object.getOwnPropertyDescriptors,l7=Object.getOwnPropertySymbols,l9=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,st=e=>{throw TypeError(e)},sr=(e,t,r)=>t in e?l3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,sn=(e,t)=>{for(var r in t||(t={}))l9.call(t,r)&&sr(e,r,t[r]);if(l7)for(var r of l7(t))se.call(t,r)&&sr(e,r,t[r]);return e},si=["class","method","getter","setter","accessor","field","value","get","set"],so=e=>void 0!==e&&"function"!=typeof e?st("Function expected"):e,sa=(e,t,r,n,i)=>({kind:si[e],name:t,metadata:n,addInitializer:e=>r._?st("Already initialized"):i.push(so(e||null))}),sl=(e,t,r,n)=>{for(var i=0,o=e[t>>1],a=o&&o.length;i<a;i++)1&t?o[i].call(r):n=o[i].call(r,n);return n},ss=(e,t,r,n,i,o)=>{for(var a,l,s,c,u,d=7&t,p=e.length+1,h=si[d+5],f=e[p-1]=[],m=e[p]||(e[p]=[]),g=(i=i.prototype,l5({get[r](){return su(this,o)},set[r](x){return sp(this,o,x)}},r)),v=n.length-1;v>=0;v--)(c=sa(d,r,s={},e[3],m)).static=!1,c.private=!1,(u=c.access={has:e=>r in e}).get=e=>e[r],u.set=(e,t)=>e[r]=t,l=(0,n[v])({get:g.get,set:g.set},c),s._=1,void 0===l?so(l)&&(g[h]=l):"object"!=typeof l||null===l?st("Object expected"):(so(a=l.get)&&(g.get=a),so(a=l.set)&&(g.set=a),so(a=l.init)&&f.unshift(a));return g&&l3(i,r,g),i},sc=(e,t,r)=>t.has(e)||st("Cannot "+r),su=(e,t,r)=>(sc(e,t,"read from private field"),t.get(e)),sd=(e,t,r)=>t.has(e)?st("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),sp=(e,t,r,n)=>(sc(e,t,"write to private field"),t.set(e,r),r);function sh(e){return e instanceof sN||e instanceof sM}var sf=class extends iN{constructor(e){super(e);const t=no(()=>{let{dragOperation:t}=e;if(at(t.activatorEvent)&&sh(t.source)&&t.status.initialized){let t=e.registry.plugins.get(a4);if(t)return t.disable(),()=>t.enable()}}),r=e.monitor.addEventListener("dragmove",(e,t)=>{queueMicrotask(()=>{if(this.disabled||e.defaultPrevented||!e.nativeEvent)return;let{dragOperation:r}=t;if(!at(e.nativeEvent)||!sh(r.source)||!r.shape)return;let{actions:n,collisionObserver:i,registry:o}=t,{by:a}=e;if(!a)return;let l=function(e){let{x:t,y:r}=e;return t>0?"right":t<0?"left":r>0?"down":r<0?"up":void 0}(a),{source:s,target:c}=r,{center:u}=r.shape.current,d=[],p=[];rZ(()=>{for(let e of o.droppables){let{id:t}=e;if(!e.accepts(s)||t===(null==c?void 0:c.id)&&sh(e)||!e.element)continue;let r=e.shape,n=new o8(e.element,{getBoundingClientRect:e=>of(e,void 0,.2)});n.height&&n.width&&("down"==l&&u.y+10<n.center.y||"up"==l&&u.y-10>n.center.y||"left"==l&&u.x-10>n.center.x||"right"==l&&u.x+10<n.center.x)&&(d.push(e),e.shape=n,p.push(()=>e.shape=r))}}),e.preventDefault(),i.disable();let h=i.computeCollisions(d,ao);rZ(()=>p.forEach(e=>e()));let[f]=h;if(!f)return;let{id:m}=f,{index:g,group:v}=s.sortable;n.setDropTarget(m).then(()=>{let{source:e,target:t,shape:o}=r;if(!e||!sh(e)||!o)return;let{index:a,group:l,target:s}=e.sortable,c=g!==a||v!==l,u=c?s:null==t?void 0:t.element;if(!u)return;o0(u);let d=new o8(u);if(!d)return;let p=n5.delta(d,n5.from(o.current.boundingRectangle),e.alignment);n.move({by:p}),c?n.setDropTarget(e.id).then(()=>i.enable()):i.enable()})})});this.destroy=()=>{r(),t()}}},sm=Object.defineProperty,sg=Object.defineProperties,sv=Object.getOwnPropertyDescriptors,s_=Object.getOwnPropertySymbols,sb=Object.prototype.hasOwnProperty,sx=Object.prototype.propertyIsEnumerable,sy=(e,t,r)=>t in e?sm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,sk=(e,t)=>{for(var r in t||(t={}))sb.call(t,r)&&sy(e,r,t[r]);if(s_)for(var r of s_(t))sx.call(t,r)&&sy(e,r,t[r]);return e};function sw(e,t,r){if(t===r)return e;let n=e.slice();return n.splice(r,0,n.splice(t,1)[0]),n}function sS(e){return"initialIndex"in e&&"number"==typeof e.initialIndex&&"index"in e&&"number"==typeof e.index}var sj="__default__";function sI(e,t,r,n){r.insertAdjacentElement(n<t?"afterend":"beforebegin",e)}function sz(e,t){return e.index-t.index}function sC(e){return Array.from(e).sort(sz)}var sE=[sf,class extends iN{constructor(e){super(e);const t=()=>{let t=new Map;for(let r of e.registry.droppables)if(r instanceof sN){let{sortable:e}=r,{group:n}=e,i=t.get(n);i||(i=new Set,t.set(n,i)),i.add(e)}for(let[e,r]of t)t.set(e,new Set(sC(r)));return t},r=[e.monitor.addEventListener("dragover",(e,r)=>{if(this.disabled)return;let{dragOperation:n}=r,{source:i,target:o}=n;if(!sh(i)||!sh(o)||i.sortable===o.sortable)return;let a=t(),l=i.sortable.group===o.sortable.group,s=a.get(i.sortable.group),c=l?s:a.get(o.sortable.group);s&&c&&queueMicrotask(()=>{e.defaultPrevented||r.renderer.rendering.then(()=>{var n,u,d;let p=t();for(let[e,t]of a.entries())for(let[r,i]of Array.from(t).entries())if(i.index!==r||i.group!==e||!(null==(n=p.get(e))?void 0:n.has(i)))return;let h=i.sortable.element,f=o.sortable.element;if(!f||!h||!l&&o.id===i.sortable.group)return;let m=sC(s),g=l?m:sC(c),v=null!=(u=i.sortable.group)?u:sj,_=null!=(d=o.sortable.group)?d:sj,b={[v]:m,[_]:g},y=function(e,t,r){var n,i,o;let a,l,{source:s,target:c,canceled:u}=t.operation;if(!s||!c||u)return"preventDefault"in t&&t.preventDefault(),e;let d=(e,t)=>e===t||"object"==typeof e&&"id"in e&&e.id===t;if(Array.isArray(e)){let n=e.findIndex(e=>d(e,s.id)),i=e.findIndex(e=>d(e,c.id));if(-1===n||-1===i){if(sS(s)){let n=s.initialIndex,i=s.index;return n===i||n<0||n>=e.length?("preventDefault"in t&&t.preventDefault(),e):r(e,n,i)}return e}if(!u&&"index"in s&&"number"==typeof s.index){let t=s.index;if(t!==n)return r(e,n,t)}return r(e,n,i)}let p=Object.entries(e),h=-1,f=-1;for(let[e,t]of p)if(-1===h&&-1!==(h=t.findIndex(e=>d(e,s.id)))&&(a=e),-1===f&&-1!==(f=t.findIndex(e=>d(e,c.id)))&&(l=e),-1!==h&&-1!==f)break;if(-1===h&&sS(s)){let n=s.initialGroup,i=s.initialIndex,o=s.group,a=s.index;if(null==n||null==o||!(n in e)||!(o in e)||n===o&&i===a)return"preventDefault"in t&&t.preventDefault(),e;if(n===o)return sg(sk({},e),sv({[n]:r(e[n],i,a)}));let l=e[n][i];return sg(sk({},e),sv({[n]:[...e[n].slice(0,i),...e[n].slice(i+1)],[o]:[...e[o].slice(0,a),l,...e[o].slice(a)]}))}if(!s.manager)return e;let{dragOperation:m}=s.manager,g=null!=(i=null==(n=m.shape)?void 0:n.current.center)?i:m.position.current;if(null==l&&c.id in e){let t=c.shape&&g.y>c.shape.center.y?e[c.id].length:0;l=c.id,f=t}if(null==a||null==l||a===l&&h===f){if(null!=a&&a===l&&h===f&&sS(s)){let t=null!=s.group&&s.group!==a,n=s.index!==h;if(t||n){let t=null!=(o=s.group)?o:a;if(t in e){if(a===t)return sg(sk({},e),sv({[a]:r(e[a],h,s.index)}));let n=e[a][h];return sg(sk({},e),sv({[a]:[...e[a].slice(0,h),...e[a].slice(h+1)],[t]:[...e[t].slice(0,s.index),n,...e[t].slice(s.index)]}))}}}return"preventDefault"in t&&t.preventDefault(),e}if(a===l)return sg(sk({},e),sv({[a]:r(e[a],h,f)}));let v=+!!(c.shape&&Math.round(g.y)>Math.round(c.shape.center.y)),_=e[a][h];return sg(sk({},e),sv({[a]:[...e[a].slice(0,h),...e[a].slice(h+1)],[l]:[...e[l].slice(0,f+v),_,...e[l].slice(f+v)]}))}(b,e,sw);if(b===y)return;let k=y[_].indexOf(i.sortable),w=y[_].indexOf(o.sortable);r.collisionObserver.disable(),sI(h,k,f,w),rZ(()=>{for(let[e,t]of y[v].entries())t.index=e;if(!l)for(let[e,t]of y[_].entries())t.group=o.sortable.group,t.index=e}),r.actions.setDropTarget(i.id).then(()=>r.collisionObserver.enable())})})}),e.monitor.addEventListener("dragend",(e,r)=>{if(!e.canceled)return;let{dragOperation:n}=r,{source:i}=n;sh(i)&&(i.sortable.initialIndex!==i.sortable.index||i.sortable.initialGroup!==i.sortable.group)&&queueMicrotask(()=>{let e=t(),n=e.get(i.sortable.initialGroup);n&&r.renderer.rendering.then(()=>{for(let[t,r]of e.entries())for(let[e,n]of Array.from(r).entries())if(n.index!==e||n.group!==t)return;let t=sC(n),r=i.sortable.element,o=t[i.sortable.initialIndex],a=null==o?void 0:o.element;o&&a&&r&&(sI(r,o.index,a,i.index),rZ(()=>{for(let[t,r]of e.entries())for(let e of Array.from(r).values())e.index=e.initialIndex,e.group=e.initialGroup}))})})})];this.destroy=()=>{for(let e of r)e()}}}],sA={duration:250,easing:"cubic-bezier(0.25, 1, 0.5, 1)",idle:!1},sP=new nD;rc=[nP],rs=[nP];var sL=class{constructor(e,t){sd(this,rd,sl(ru,8,this)),sl(ru,11,this),sd(this,rp),sd(this,rh),sd(this,rf,sl(ru,12,this)),sl(ru,15,this),sd(this,rm),this.register=()=>(rZ(()=>{var e,t;null==(e=this.manager)||e.registry.register(this.droppable),null==(t=this.manager)||t.registry.register(this.draggable)}),()=>this.unregister()),this.unregister=()=>{rZ(()=>{var e,t;null==(e=this.manager)||e.registry.unregister(this.droppable),null==(t=this.manager)||t.registry.unregister(this.draggable)})},this.destroy=()=>{rZ(()=>{this.droppable.destroy(),this.draggable.destroy()})};var{effects:r=()=>[],group:n,index:i,sensors:o,type:a,transition:l=sA,plugins:s}=e,c=((e,t)=>{var r={};for(var n in e)l9.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&l7)for(var n of l7(e))0>t.indexOf(n)&&se.call(e,n)&&(r[n]=e[n]);return r})(e,["effects","group","index","sensors","type","transition","plugins"]);const u=i5(s,sE);this.droppable=new sN(c,t,this),this.draggable=new sM(((e,t)=>l6(e,l8(t)))(sn({},c),{plugins:u,effects:()=>[()=>{var e,t,r;let n=null==(e=this.manager)?void 0:e.dragOperation.status;(null==n?void 0:n.initializing)&&this.id===(null==(r=null==(t=this.manager)?void 0:t.dragOperation.source)?void 0:r.id)&&sP.clear(this.manager),(null==n?void 0:n.dragging)&&sP.set(this.manager,this.id,rG(()=>({initialIndex:this.index,initialGroup:this.group})))},()=>{let{index:e,group:t,manager:r}=this,n=su(this,rh),i=su(this,rp);(e!==n||t!==i)&&(sp(this,rh,e),sp(this,rp,t),this.animate())},()=>{var e,t;let{target:r}=this,{isDragSource:n}=this.draggable;"move"===(null!=(t=null==(e=this.draggable.pluginConfig(aK))?void 0:e.feedback)?t:"default")&&n&&(this.droppable.disabled=!r)},...r()],type:a,sensors:o}),t,this),sp(this,rm,c.element),this.manager=t,this.index=i,sp(this,rh,i),this.group=n,sp(this,rp,n),this.type=a,this.transition=l}get initialIndex(){var e,t;return null!=(t=null==(e=sP.get(this.manager,this.id))?void 0:e.initialIndex)?t:this.index}get initialGroup(){var e,t;return null!=(t=null==(e=sP.get(this.manager,this.id))?void 0:e.initialGroup)?t:this.group}animate(){rG(()=>{let{manager:e,transition:t}=this,{shape:r}=this.droppable;if(!e)return;let{idle:n}=e.dragOperation.status;r&&t&&(!n||t.idle)&&e.renderer.rendering.then(()=>{let{element:n}=this;if(!n)return;for(let e of n.getAnimations())"transitionProperty"in e&&("transform"===e.transitionProperty||"translate"===e.transitionProperty||"scale"===e.transitionProperty)&&e.cancel();let i=this.refreshShape();if(!i)return;let o={x:r.boundingRectangle.left-i.boundingRectangle.left,y:r.boundingRectangle.top-i.boundingRectangle.top},{translate:a}=o$(n),l=o4(n,a,!1),s=o4(n,a);if(o.x||o.y){let r=oy(oc(n))?l6(sn({},t),l8({duration:0})):t;o2({element:n,keyframes:{translate:[`${l.x+o.x}px ${l.y+o.y}px ${l.z}`,`${s.x}px ${s.y}px ${s.z}`]},options:r}).then(()=>{e.dragOperation.status.dragging||(this.droppable.shape=void 0)})}})})}get manager(){return this.draggable.manager}set manager(e){rZ(()=>{this.draggable.manager=e,this.droppable.manager=e})}set element(e){rZ(()=>{let t=su(this,rm),r=this.droppable.element,n=this.draggable.element;r&&r!==t||(this.droppable.element=e),n&&n!==t||(this.draggable.element=e),sp(this,rm,e)})}get element(){var e,t;let r=su(this,rm);if(r)return null!=(t=null!=(e=oS.get(r))?e:r)?t:this.droppable.element}set target(e){this.droppable.element=e}get target(){return this.droppable.element}set source(e){this.draggable.element=e}get source(){return this.draggable.element}get disabled(){return this.draggable.disabled&&this.droppable.disabled}set plugins(e){this.draggable.plugins=i5(e,sE)}set disabled(e){rZ(()=>{this.droppable.disabled=e,this.draggable.disabled=e})}set data(e){rZ(()=>{this.droppable.data=e,this.draggable.data=e})}set handle(e){this.draggable.handle=e}set id(e){this.droppable.id=e,this.draggable.id=e}get id(){return this.droppable.id}set sensors(e){this.draggable.sensors=e}set modifiers(e){this.draggable.modifiers=e}set collisionPriority(e){this.droppable.collisionPriority=e}set collisionDetector(e){this.droppable.collisionDetector=null!=e?e:ai}set alignment(e){this.draggable.alignment=e}get alignment(){return this.draggable.alignment}set type(e){rZ(()=>{this.droppable.type=e,this.draggable.type=e})}get type(){return this.draggable.type}set accept(e){this.droppable.accept=e}get accept(){return this.droppable.accept}get isDropTarget(){return this.droppable.isDropTarget}get isDragSource(){return this.draggable.isDragSource}get isDragging(){return this.draggable.isDragging}get isDropping(){return this.draggable.isDropping}get status(){return this.draggable.status}refreshShape(){return this.droppable.refreshShape()}accepts(e){return this.droppable.accepts(e)}};ru=[,,,l4(null)],rd=new WeakMap,rp=new WeakMap,rh=new WeakMap,rf=new WeakMap,rm=new WeakMap,ss(ru,4,"index",rc,sL,rd),ss(ru,4,"group",rs,sL,rf),m=ru,sr(sL,(i="metadata",(o=Symbol[i])?o:Symbol.for("Symbol."+i)),m[3]);var sM=class extends lg{constructor(e,t,r){super(e,t),this.sortable=r}get index(){return this.sortable.index}get initialIndex(){return this.sortable.initialIndex}get group(){return this.sortable.group}get initialGroup(){return this.sortable.initialGroup}},sN=class extends lv{constructor(e,t,r){super(e,t),this.sortable=r}get index(){return this.sortable.index}get group(){return this.sortable.group}},sT=Object.defineProperty,sO=Object.defineProperties,sD=Object.getOwnPropertyDescriptors,sB=Object.getOwnPropertySymbols,sF=Object.prototype.hasOwnProperty,sR=Object.prototype.propertyIsEnumerable,sV=(e,t,r)=>t in e?sT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,sH=(e,t)=>{for(var r in t||(t={}))sF.call(t,r)&&sV(e,r,t[r]);if(sB)for(var r of sB(t))sR.call(t,r)&&sV(e,r,t[r]);return e};function sW(e){let{accept:t,collisionDetector:r,collisionPriority:n,id:i,data:o,element:a,handle:l,index:s,group:c,disabled:u,modifiers:d,sensors:p,target:h,type:f,plugins:m}=e,g=sH(sH({},sA),e.transition),v=lR(t=>new sL(sO(sH({},e),sD({transition:g,register:!1,handle:lb(l),element:lb(a),target:lb(h)})),t)),_=ly(v,s$);return lS(i,()=>v.id=i),lx(()=>{rZ(()=>{v.group=c,v.index=s})},[v,c,s]),lS(f,()=>v.type=f),lS(t,()=>v.accept=t,void 0,nA),lS(o,()=>o&&(v.data=o)),lS(s,()=>{var e;(null==(e=v.manager)?void 0:e.dragOperation.status.idle)&&(null==g?void 0:g.idle)&&v.refreshShape()},lk),lj(l,e=>v.handle=e),lj(a,e=>v.element=e),lj(h,e=>v.target=e),lS(u,()=>v.disabled=!0===u),lS(p,()=>v.sensors=p),lS(r,()=>v.collisionDetector=r),lS(n,()=>v.collisionPriority=n),lS(m,()=>v.plugins=m,void 0,nA),lS(g,()=>v.transition=g,void 0,nA),lS(d,()=>v.modifiers=d,void 0,nA),lS(e.alignment,()=>v.alignment=e.alignment),{sortable:_,get isDragging(){return _.isDragging},get isDropping(){return _.isDropping},get isDragSource(){return _.isDragSource},get isDropTarget(){return _.isDropTarget},handleRef:(0,rk.useCallback)(e=>{v.handle=null!=e?e:void 0},[v]),ref:(0,rk.useCallback)(e=>{var t,r;(e||null==(t=v.element)||!t.isConnected||(null==(r=v.manager)?void 0:r.dragOperation.status.idle))&&(v.element=null!=e?e:void 0)},[v]),sourceRef:(0,rk.useCallback)(e=>{var t,r;(e||null==(t=v.source)||!t.isConnected||(null==(r=v.manager)?void 0:r.dragOperation.status.idle))&&(v.source=null!=e?e:void 0)},[v]),targetRef:(0,rk.useCallback)(e=>{var t,r;(e||null==(t=v.target)||!t.isConnected||(null==(r=v.manager)?void 0:r.dragOperation.status.idle))&&(v.target=null!=e?e:void 0)},[v])}}function s$(e,t,r){return"isDragSource"===e&&!r&&!!t}var sq=e.i(68673),sU=e.i(81697);function sZ(e,t,r){let n,i=r.initialDeps??[],o=!0;function a(){let a=e();return(a.length!==i.length||a.some((e,t)=>i[t]!==e))&&(i=a,n=t(...a),(null==r?void 0:r.onChange)&&!(o&&r.skipInitialOnChange)&&r.onChange(n),o=!1),n}return a.updateDeps=e=>{i=e},a}function sY(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}let sX=(e,t)=>1.01>Math.abs(e-t),sG=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},sK=e=>{let{offsetWidth:t,offsetHeight:r}=e;return{width:t,height:r}},sJ=e=>e,sQ=e=>{let t=Math.max(e.startIndex-e.overscan,0),r=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,n=Array(r);for(let e=0;e<r;e++)n[e]=t+e;return n},s0=(e,t)=>{let r=e.scrollElement;if(!r)return;let n=e.targetWindow;if(!n)return;let i=e=>{let{width:r,height:n}=e;t({width:Math.round(r),height:Math.round(n)})};if(i(sK(r)),!n.ResizeObserver)return()=>{};let o=new n.ResizeObserver(t=>{let n=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void i({width:t.inlineSize,height:t.blockSize})}i(sK(r))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(n):n()});return o.observe(r,{box:"border-box"}),()=>{o.unobserve(r)}},s1={passive:!0},s2="u"<typeof window||"onscrollend"in window,s4=(e,t,r)=>{var n,i;let o,a=e.scrollElement;if(!a)return;let l=e.targetWindow;if(!l)return;let s=e.options.useScrollendEvent&&s2,c=0,u=s?null:(n=()=>t(r(a),!1),i=e.options.isScrollingResetDelay,Object.assign(function(...e){l.clearTimeout(o),o=l.setTimeout(()=>n.apply(this,e),i)},{cancel:()=>{l.clearTimeout(o)}})),d=e=>()=>{c=r(a),null==u||u(),t(c,e)},p=d(!0),h=d(!1);return a.addEventListener("scroll",p,s1),s&&a.addEventListener("scrollend",h,s1),()=>{a.removeEventListener("scroll",p),s&&a.removeEventListener("scrollend",h),null==u||u.cancel()}},s3=(e,t)=>s4(e,t,t=>{let{horizontal:r,isRtl:n}=e.options;return r?t.scrollLeft*(n&&-1||1):t.scrollTop}),s6=(e,t,r)=>{if(r.options.useCachedMeasurements){let t=r.indexFromElement(e),n=r.options.getItemKey(t);return r.itemSizeCache.get(n)??r.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[r.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=r.indexFromElement(e),n=r.options.getItemKey(t),i=r.itemSizeCache.get(n);if(void 0!==i)return i}return e[r.options.horizontal?"offsetWidth":"offsetHeight"]},s5=(e,{adjustments:t=0,behavior:r},n)=>{var i,o;null==(o=null==(i=n.scrollElement)?void 0:i.scrollTo)||o.call(i,{[n.options.horizontal?"left":"top"]:e+t,behavior:r})};class s8{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this._clampedAdjustment=null,this.elementsCache=new Map,this.now=()=>{var e,t,r;return(null==(r=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:r.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,r=this.indexFromElement(t);if(!t.isConnected){for(let[e,r]of(this.observer.unobserve(t),this.elementsCache))if(r===t){this.elementsCache.delete(e);break}return}this.isIndexInRange(r)&&this.shouldMeasureDuringScroll(r)&&this.resizeItem(r,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var r;null==(r=t())||r.disconnect(),e=null},observe:e=>{var r;return null==(r=t())?void 0:r.observe(e,{box:"border-box"})},unobserve:e=>{var r;return null==(r=t())?void 0:r.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t;let r={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:sJ,rangeExtractor:sQ,onChange:()=>{},measureElement:s6,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let n=e[t];void 0!==n&&(r[t]=n)}let n=this.options,i=null,o=null,a=!1;if(void 0!==n&&n.enabled&&r.enabled&&"end"===r.anchorTo&&null!==this.scrollElement){let e=n.count,l=r.count,s=this.getMeasurements(),c=(null==(t=this._singleLaneMeasurements)?void 0:t.items)??s,u=e=>{var t;return"object"==typeof(t=c[e])?t.key:t},d=e>0?u(0):null,p=e>0?u(e-1):null;if(l!==e||e>0&&l>0&&(r.getItemKey(0)!==d||r.getItemKey(l-1)!==p)){a=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??s[0]:null;t&&(i=[t.key,this.getScrollOffset()-t.start]);let c=!0===r.followOnAppend?"auto":r.followOnAppend||null;c&&l>0&&this.isAtEnd(n.scrollEndThreshold)&&(0===e||r.getItemKey(l-1)!==p)&&(l>e||function(e,t,r,n){if(0===t)return!1;let i=n(0),o=new Set,a=0;for(;a<e;){let e=r(a);if(e===i)break;o.add(e),a++}let l=e-a;if(0===l||l>=t)return!1;for(let e=0;e<l;e++)if(n(e)!==r(a+e))return!1;for(let e=l;e<t;e++)if(o.has(n(e)))return!1;return!0}(e,l,u,r.getItemKey))&&(o=c)}}this.options=r,a&&(this.pendingMin=0,this.itemSizeCacheVersion++);let l=!1,s=0;if(i&&null!==this.scrollOffset){let[e,t]=i,r=this.getMeasurements(),{count:n,getItemKey:a}=this.options,c=0;for(;c<n&&a(c)!==e;)c++;if(c<n){let e=r[c];if(e){let r=Math.max(0,e.start+t);o||r===this.scrollOffset||(s=r-this.scrollOffset,this.scrollOffset=r,l=!0)}}}(l||o)&&(this.pendingScrollAnchor=[l?i[0]:null,l?i[1]:0,o,s])},this.notify=e=>{var t,r;null==(r=(t=this.options).onChange)||r.call(t,this,e)},this.maybeNotify=sZ(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.isScrolling=!1,this.scrollDirection=null,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._clampedAdjustment=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e,t;let r=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==r){if(this.cleanup(),!r)return void this.maybeNotify();if(this.scrollElement=r,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,null!==this._clampedAdjustment&&Math.abs(e-this._clampedAdjustment.maxAtWrite)>=1.5&&(this._clampedAdjustment=null),this.scrollAdjustments=0;let r=this.getScrollOffset();this.scrollDirection=t?r===e?this.scrollDirection:r<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},r=()=>{this._iosTouching=!1,sG()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,s1),e.addEventListener("touchend",r,s1),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",r),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let n=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,n&&this.scrollElement&&this.options.enabled){let[e,r,i,o]=n;null!==e&&!i&&(sG()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==o&&(this._iosDeferredAdjustment+=o):((null==(t=this.scrollState)?void 0:t.behavior)!=="smooth"||sX(this.getScrollOffset()-o,this.scrollState.lastTargetOffset))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),i&&this.scrollToEnd({behavior:i})}this._retryClampedAdjustment()},this._retryClampedAdjustment=()=>{if(null===this._clampedAdjustment||!this.scrollElement||!this.options.enabled)return;let{target:e,maxAtWrite:t}=this._clampedAdjustment,r=this.getMaxScrollOffset();r>t+.5&&(this._clampedAdjustment=e>r+.5?{target:e,maxAtWrite:r}:null,this._scrollToOffset(e,{adjustments:void 0,behavior:void 0}))},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;if(this._iosDeferredAdjustment<0&&e>=t-1){this._iosDeferredAdjustment=0;return}let r=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=r,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=sZ(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(e,t,r,n,i,o,a,l)=>(void 0!==this.prevLanes&&this.prevLanes!==o&&(this.lanesChangedFlag=!0),this.prevLanes=o,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:r,getItemKey:n,enabled:i,lanes:o,laneAssignmentMode:a,gap:l}),{key:!1}),this.isIndexInRange=e=>e>=0&&e<this.options.count,this.getMeasurements=sZ(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:r,getItemKey:n,enabled:i,lanes:o,laneAssignmentMode:a,gap:l},s)=>{var c,u;let d=this.itemSizeCache;if(!i)return this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let p=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===o){let i,o,a=2*e,s=null==(c=this._singleLaneMeasurements)?void 0:c.flat;if(!s||s.length<a){let e=new Float64Array(a);s&&p>0&&e.set(s.subarray(0,2*p)),s=e}let h=0===p?Array(e):this._singleLaneMeasurements.items.slice();if(0===p)i=t+r;else{let e=p-1;i=s[2*e]+s[2*e+1]+l}for(let t=p;t<e;t++){let e=n(t);h[t]=e;let r=d.get(e),o="number"==typeof r?r:this.options.estimateSize(t);s[2*t]=i,s[2*t+1]=o,i+=o+l}this._singleLaneMeasurements={flat:s,items:h};let f=(u=s,o=h.length,new Proxy(h,{get(e,t,r){if("string"==typeof t){let r=t.charCodeAt(0);if(r>=48&&r<=57){let r=+t;if(Number.isInteger(r)&&r>=0&&r<o){let t=e[r];if("object"!=typeof t){let n=u[2*r];t=e[r]={index:r,key:t,start:n,size:u[2*r+1],end:n+u[2*r+1],lane:0}}return t}}if("length"===t)return o}return Reflect.get(e,t,r)}}));return this.measurementsCache=f,f}let h=this.measurementsCache.slice(0,p),f=Array(o).fill(void 0),m=new Float64Array(o),g=0;for(let e=0;e<p;e++){let t=h[e];t&&(void 0===f[t.lane]&&g++,f[t.lane]=e,m[t.lane]=t.end)}for(let i=p;i<e;i++){let e,s,c=n(i),u=this.laneAssignments.get(i),p="estimate"===a||d.has(c);if(void 0!==u&&this.options.lanes>1){let n=f[e=u],i=void 0!==n?h[n]:void 0;s=i?i.end+l:t+r}else if(g===o){let t=0,r=m[0],n=f[0];for(let e=1;e<o;e++){let i=m[e];(i<r||i===r&&f[e]<n)&&(t=e,r=i,n=f[e])}e=t,s=r+l,p&&this.laneAssignments.set(i,e)}else e=i%this.options.lanes,s=t+r,p&&this.laneAssignments.set(i,e);let v=d.get(c),_="number"==typeof v?v:this.options.estimateSize(i),b=s+_;h[i]={index:i,start:s,size:_,end:b,key:c,lane:e},void 0===f[e]&&g++,f[e]=i,m[e]=b}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=sZ(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,r,n)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,r,n,i){let o=e.length-1;if(e.length<=n)return{startIndex:0,endIndex:o};if(1===n&&null!==i){let e=function(e,t,r){let n=0;for(;n<=t;){let i=(n+t)/2|0,o=e[2*i];if(o<r)n=i+1;else{if(!(o>r))return i;t=i-1}}return n>0?n-1:0}(i,o,r),n=e,a=r+t;for(;n<o&&i[2*n]+i[2*n+1]<a;)n++;return{startIndex:e,endIndex:n}}let a=s7(0,o,t=>e[t].start,r),l=a;if(1===n)for(;l<o&&e[l].end<r+t;)l++;else if(n>1){let i=Array(n).fill(0);for(;l<o&&i.some(e=>e<r+t);){let t=e[l];i[t.lane]=t.end,l++}let s=Array(n).fill(r+t);for(;a>=0&&s.some(e=>e>=r);){let t=e[a];s[t.lane]=t.start,a--}a=Math.max(0,a-a%n),l=Math.min(o,l+(n-1-l%n))}return{startIndex:a,endIndex:l}}(e,t,r,n,1===n&&null!==this._singleLaneMeasurements?this._singleLaneMeasurements.flat:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=sZ(()=>{let e=null,t=null,r=this.calculateRange();return r&&(e=r.startIndex,t=r.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,r,n,i)=>null===n||null===i?[]:e({startIndex:n,endIndex:i,overscan:t,count:r}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,r=e.getAttribute(t);return r?parseInt(r,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let r=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==r&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),n=Math.max(0,r-t),i=Math.min(this.options.count-1,r+t);return e>=n&&e<=i}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e);if(!this.isIndexInRange(t))return;let r=this.options.getItemKey(t),n=this.elementsCache.get(r);n!==e&&(n&&this.observer.unobserve(n),this.observer.observe(e),this.elementsCache.set(r,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var r,n,i;let o,a,l;if(!this.isIndexInRange(e))return;let s=null==(r=this._singleLaneMeasurements)?void 0:r.flat;if(1===this.options.lanes&&null!=s)l=this.options.getItemKey(e),a=s[2*e],o=s[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;l=t.key,a=t.start,o=t.size}let c=this.itemSizeCache.get(l)??o,u=t-c;if(0!==u){let r="end"===this.options.anchorTo&&(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,s=r?this.getTotalSize():0,d=this.getScrollOffset()+this.scrollAdjustments,p=this.itemSizeCache.has(l)?a+c<=d&&"backward"!==this.scrollDirection:a<d,h=(null==(i=this.scrollState)?void 0:i.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:l,start:a,size:o,end:a+o,lane:0},u,this):p);(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(l,t),this.itemSizeCacheVersion++;let f=!1;r?f=this.applyScrollAdjustment(this.getTotalSize()-s):h&&(f=this.applyScrollAdjustment(u)),this.notify(f),this._retryClampedAdjustment()}},this.getVirtualItems=sZ(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let r=[];for(let n=0,i=e.length;n<i;n++){let i=t[e[n]];r.push(i)}return r},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{var t;let r=this.getMeasurements();if(0===r.length)return;let n=null==(t=this._singleLaneMeasurements)?void 0:t.flat,i=1===this.options.lanes&&null!=n,o=s7(0,r.length-1,i?e=>n[2*e]:e=>sY(r[e]).start,e);return sY(r[o])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,r=0)=>{if(!this.scrollElement)return 0;let n=this.getSize(),i=this.getScrollOffset();return"auto"===t&&(t=e>=i+n?"end":"start"),"center"===t?e+=(r-n)/2:"end"===t&&(e-=n),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getSize(),n=this.getScrollOffset(),i=this.measurementsCache[e];if(!i)return;if("auto"===t)if(i.end>=n+r-this.options.scrollPaddingEnd)t="end";else{if(!(i.start<=n+this.options.scrollPaddingStart))return[n,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let o="end"===t?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(o,t,i.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:r="auto"}={})=>{this._iosDeferredAdjustment=0;let n=this.getOffsetForAlignment(e,t),i=this.now();this.scrollState={index:null,align:t,behavior:r,startedAt:i,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:r}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:r="auto"}={})=>{this._iosDeferredAdjustment=0,e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getOffsetForIndex(e,t);if(!n)return;let[i,o]=n,a=this.now();this.scrollState={index:e,align:o,behavior:r,startedAt:a,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:r}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let r=this.getScrollOffset()+e,n=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:n,lastTargetOffset:r,stableFrames:0},this._scrollToOffset(r,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e,t;let r,n=this.getMeasurements();if(0===n.length)r=this.options.paddingStart;else if(1===this.options.lanes){let i=n.length-1,o=null==(e=this._singleLaneMeasurements)?void 0:e.flat;r=null!=o?o[2*i]+o[2*i+1]:(null==(t=n[i])?void 0:t.end)??0}else{let e=Array(this.options.lanes).fill(null),t=n.length-1;for(;t>=0&&e.some(e=>null===e);){let r=n[t];null===e[r.lane]&&(e[r.lane]=r.end),t--}r=Math.max(...e.filter(e=>null!==e))}return Math.max(r-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:r})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:r,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){if(0===e)return!1;if(sG()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded))return this._iosDeferredAdjustment+=e,!1;{let r=this.getScrollOffset()+this.scrollAdjustments+e,n=this.scrollElement,i=null!==n&&("scrollHeight"in n||"document"in n)?this.getMaxScrollOffset():null;return this._clampedAdjustment=null!==i&&r>i+.5?{target:r,maxAtWrite:i}:null,this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollOffset<0&&(this.scrollOffset=0),this.scrollAdjustments=0),!0}}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,r=t!==this.scrollState.lastTargetOffset;if(!r&&sX(t,this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,r){let e=this.getSize()||600,r=Math.abs(t-this.getScrollOffset()),n="smooth"===this.scrollState.behavior&&r>e;this.scrollState.lastTargetOffset=t,n||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:n?"smooth":"auto"})}this.scheduleScrollReconcile()}}let s7=(e,t,r,n)=>{for(;e<=t;){let i=(e+t)/2|0,o=r(i);if(o<n)e=i+1;else{if(!(o>n))return i;t=i-1}}return e>0?e-1:0},s9="u">typeof document?rk.useLayoutEffect:rk.useEffect;function ce(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:r="transform",...n}){let i=rk.useReducer(e=>e+1,0)[1],o=rk.useRef({enabled:t,mode:r,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});o.current.enabled=t,o.current.mode=r;let a=rk.useRef(!1),l=e=>{let t=o.current;if(!t.enabled||!t.container)return;let r=e.getTotalSize();if(r!==t.lastSize){t.lastSize=r;let n=e.options.horizontal?"width":"height";t.container.style[n]=`${r}px`}},s=e=>{let t=o.current;if(!t.enabled||!t.container)return;l(e);let r=!!e.options.horizontal,n="transform"===t.mode,i=r?"left":"top",a=e.options.scrollMargin;for(let o of e.getVirtualItems()){let l=o.start-a,s=e.elementsCache.get(o.key);s&&t.lastPositions.get(s)!==l&&(t.lastPositions.set(s,l),n?s.style.transform=r?`translate3d(${l}px, 0, 0)`:`translate3d(0, ${l}px, 0)`:s.style[i]=`${l}px`)}},c={...n,onChange:(t,r)=>{var l;let c=o.current,u=!0;if(c.enabled){s(t);let e=t.range,r=c.prevRange;(u=!r||r.isScrolling!==t.isScrolling||r.startIndex!==(null==e?void 0:e.startIndex)||r.endIndex!==(null==e?void 0:e.endIndex))&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}u&&(e&&r&&!a.current?(0,l_.flushSync)(i):i()),null==(l=n.onChange)||l.call(n,t,r)}},[u]=rk.useState(()=>{let e=new s8(c),t=e.measureElement;return e.measureElement=e=>{a.current=!0;try{t(e)}finally{a.current=!1}},Object.assign(e,{containerRef:t=>{let r=o.current;if(r.container=t,r.lastSize=null,t&&r.enabled){let n=e.getTotalSize();r.lastSize=n;let i=e.options.horizontal?"width":"height";t.style[i]=`${n}px`}}})});return u.setOptions(c),s9(()=>u._didMount(),[]),s9(()=>(l(u),u._willUpdate())),s9(()=>{s(u)}),u}({observeElementRect:s0,observeElementOffset:s3,scrollToFn:s5,...e})}var ct=e.i(68971);(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var cr=e=>Array.isArray(e)?[...e]:(e=>{if("object"!=typeof e||null===e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||null===t})(e)?(0,rB.__spreadValues)({},e):{};function cn(e,t,r){let n=t.split("."),i=(0,rB.__spreadValues)({},e),o=i;for(let e=0;e<n.length;e++){let[t,i]=n[e].replace("]","").split("["),a=e===n.length-1;if(void 0!==i){o[t]=Array.isArray(o[t])?[...o[t]]:[];let e=Number(i);if(a){o[t][e]=r;continue}o[t][e]=cr(o[t][e]),o=o[t][e];continue}if(a){o[t]=r;continue}o[t]=cr(o[t]),o=o[t]}return i}(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var ci=/^(data-.*)$/,co=(0,rb.get_class_name_factory_default)("Button",{Button:"_Button_oe4qj_1","Button--medium":"_Button--medium_oe4qj_34","Button--large":"_Button--large_oe4qj_62","Button-icon":"_Button-icon_oe4qj_89","Button--primary":"_Button--primary_oe4qj_93","Button--disabled":"_Button--disabled_oe4qj_123","Button--secondary":"_Button--secondary_oe4qj_135","Button--flush":"_Button--flush_oe4qj_171","Button--fullWidth":"_Button--fullWidth_oe4qj_179","Button-spinner":"_Button-spinner_oe4qj_184"}),ca=e=>{var{children:t,href:r,onClick:n,variant:i="primary",type:o,disabled:a,tabIndex:l,newTab:s,fullWidth:c,icon:u,size:d="medium",loading:p=!1}=e,h=(0,rB.__objRest)(e,["children","href","onClick","variant","type","disabled","tabIndex","newTab","fullWidth","icon","size","loading"]);let[f,m]=(0,rk.useState)(p);(0,rk.useEffect)(()=>m(p),[p]);let g=(e=>{let t={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&ci.test(r)&&(t[r]=e[r]);return t})(h);return(0,rF.jsxs)(r?"a":o?"button":"span",(0,rB.__spreadProps)((0,rB.__spreadValues)({className:co({primary:"primary"===i,secondary:"secondary"===i,disabled:a,fullWidth:c,[d]:!0}),onClick:e=>{n&&(m(!0),Promise.resolve(n(e)).then(()=>{m(!1)}))},type:o,disabled:a||f,tabIndex:l,target:s?"_blank":void 0,rel:s?"noreferrer":void 0,href:r},g),{children:[u&&(0,rF.jsx)("div",{className:co("icon"),children:u}),t,f&&(0,rF.jsx)("div",{className:co("spinner"),children:(0,rF.jsx)(rO.Loader,{size:14})})]}))};(0,rB.init_react_import)(),(0,rB.init_react_import)();var cl={InputWrapper:"_InputWrapper_qyenz_1","Input-label":"_Input-label_qyenz_5","Input-labelIcon":"_Input-labelIcon_qyenz_17","Input-disabledIcon":"_Input-disabledIcon_qyenz_24","Input-input":"_Input-input_qyenz_29","Input-select":"_Input-select_qyenz_61","Input-selectIcon":"_Input-selectIcon_qyenz_71",Input:"_Input_qyenz_1","Input--readOnly":"_Input--readOnly_qyenz_111","Input-radioGroupItems":"_Input-radioGroupItems_qyenz_150","Input-radio":"_Input-radio_qyenz_150","Input-radioInner":"_Input-radioInner_qyenz_179","Input-radioInput":"_Input-radioInput_qyenz_261"},cs=(0,rb.get_class_name_factory_default)("Input",cl),cc=({children:e,icon:t,label:r,el:n="label",readOnly:i,className:o})=>{let a=(0,rO.useMessage)("field-readonly");return(0,rF.jsxs)(n,{className:o,children:[(0,rF.jsxs)("div",{className:cs("label"),children:[t?(0,rF.jsx)("div",{className:cs("labelIcon"),children:t}):(0,rF.jsx)(rF.Fragment,{}),r,i&&(0,rF.jsx)("div",{className:cs("disabledIcon"),title:a,children:(0,rF.jsx)(rO.Lock,{size:"12"})})]}),e]})},cu=({children:e,icon:t,label:r,el:n="label",readOnly:i})=>{let o=(0,rO.useAppStore)(e=>e.overrides),a=(0,rk.useMemo)(()=>o.fieldLabel||cc,[o]);return r?(0,rF.jsx)(a,{label:r,icon:t,className:cs({readOnly:i}),readOnly:i,el:n,children:e}):(0,rF.jsx)(rF.Fragment,{children:e})};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var cd={ArrayField:"_ArrayField_62huh_5","ArrayField--isDraggingFrom":"_ArrayField--isDraggingFrom_62huh_30","ArrayField-addButton":"_ArrayField-addButton_62huh_38","ArrayField--hasItems":"_ArrayField--hasItems_62huh_58","ArrayField-inner":"_ArrayField-inner_62huh_93",ArrayFieldItem:"_ArrayFieldItem_62huh_101","ArrayFieldItem--isDragging":"_ArrayFieldItem--isDragging_62huh_110","ArrayFieldItem--isExpanded":"_ArrayFieldItem--isExpanded_62huh_114","ArrayFieldItem-summary":"_ArrayFieldItem-summary_62huh_132","ArrayFieldItem--noFields":"_ArrayFieldItem--noFields_62huh_167","ArrayField--addDisabled":"_ArrayField--addDisabled_62huh_176","ArrayFieldItem-body":"_ArrayFieldItem-body_62huh_228","ArrayFieldItem-fieldset":"_ArrayFieldItem-fieldset_62huh_237","ArrayFieldItem-rhs":"_ArrayFieldItem-rhs_62huh_250","ArrayFieldItem-actions":"_ArrayFieldItem-actions_62huh_256"};function cp(e,t){let r=(0,rk.useContext)(e);if(!r)throw Error("useContextStore must be used inside context");return(0,rW.useStore)(r,rV(t))}(0,rB.init_react_import)(),(0,rB.init_react_import)();var ch=(g={},{ctx:a=(0,rk.createContext)((0,rH.createStore)((0,r$.subscribeWithSelector)(()=>g))),Provider:({children:e,value:t})=>{let[r]=(0,rk.useState)(()=>(0,rH.createStore)(()=>t));return(0,rF.jsx)(a.Provider,{value:r,children:e})}}),cf=()=>(0,rk.useContext)(ch.ctx);function cm(e){let t=(0,rk.useContext)(ch.ctx);if(!t)throw Error("useContextStore must be used inside context");return(0,rW.useStore)(t,rV(e))}(0,rB.init_react_import)(),(0,rB.init_react_import)();var cg=(0,rb.get_class_name_factory_default)("DragIcon",{DragIcon:"_DragIcon_5e515_1","DragIcon--disabled":"_DragIcon--disabled_5e515_10"}),cv=({isDragDisabled:e})=>(0,rF.jsx)("div",{className:cg({disabled:e}),children:(0,rF.jsx)("svg",{viewBox:"0 0 20 20",width:"12",fill:"currentColor",children:(0,rF.jsx)("path",{d:"M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"})})});(0,rB.init_react_import)(),(0,rB.init_react_import)();var{Delay:c_,Distance:cb}=la,cx=[new c_({value:200,tolerance:10})],cy=[new c_({value:200,tolerance:10}),new cb({value:5})],ck=({other:e=cy,mouse:t,touch:r=cx}={touch:cx,other:cy})=>{let[n]=(0,rk.useState)(()=>[ls.configure({activationConstraints(n,i){var o;let{pointerType:a,target:l}=n;return"mouse"===a&&ae(l)&&(i.handle===l||(null==(o=i.handle)?void 0:o.contains(l)))?t:"touch"===a?r:e}})]);return n};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var cw=(e,t,r,n,i)=>{},cS="increasing";(0,rB.init_react_import)();var cj=(e,t)=>{if("dynamic"===e){if(!(Math.abs(t.y)>Math.abs(t.x)))return 0===t.x?null:t.x>0?"right":"left"}else if("x"===e)return 0===t.x?null:t.x>0?"right":"left";return 0===t.y?null:t.y>0?"down":"up"};(0,rB.init_react_import)(),(0,rB.init_react_import)();var cI={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null};(0,rB.init_react_import)();var cz=({dragOperation:e,droppable:t})=>{let r=e.position.current;if(!r)return null;let{id:n}=t;return t.shape&&t.shape.containsPoint(r)?{id:n,value:1/n6.distance(t.shape.center,r),type:iG.PointerIntersection,priority:iX.High}:null};(0,rB.init_react_import)();var cC=(0,rH.createStore)(()=>({fallbackEnabled:!1})),cE="",cA=(e,t=.05)=>r=>{var n,i,o,a,l;let{dragOperation:s,droppable:c}=r,{position:u}=s,d=null==(n=s.shape)?void 0:n.current,{shape:p}=c;if(!d||!p)return null;let{center:h}=d,{fallbackEnabled:f}=cC.getState(),m=((e,t="dynamic")=>(cI.current=e,cI.delta={x:e.x-cI.previous.x,y:e.y-cI.previous.y},cI.direction=cj(t,cI.delta)||cI.direction,(Math.abs(cI.delta.x)>10||Math.abs(cI.delta.y)>10)&&(cI.previous=n6.from(e)),cI))(u.current,e),g={direction:m.direction},{center:v}=p,_=((e,t,r,n=0)=>{let i=e.boundingRectangle,o=t.center;if("down"===r){let e=n*t.boundingRectangle.height;return i.bottom>=o.y+e}if("up"===r){let e=n*t.boundingRectangle.height;return i.top<o.y-e}if("left"===r){let e=n*t.boundingRectangle.width;return o.x-e>=i.left}let a=n*t.boundingRectangle.width;return i.right-a>=o.x})(d,p,m.direction,t);if((null==(i=s.source)?void 0:i.id)===c.id){let e=((e,t)=>{var r;let{dragOperation:n,droppable:i}=e,{shape:o}=i,{position:a}=n,l=null==(r=n.shape)?void 0:r.current;if(!l||!o)return null;let s=o.center,c=Math.sqrt(Math.pow(s.x-t.x,2)+Math.pow(s.y-t.y,2)),u=Math.sqrt(Math.pow(s.x-a.current.x,2)+Math.pow(s.y-a.current.y,2));return(cS=u===c?cS:u<c?"decreasing":"increasing",cw(l.center,s,i.id.toString(),"rebeccapurple"),"decreasing"===cS)?{id:i.id,value:1,type:iG.Collision}:null})(r,m.previous);if(cw(h,v,c.id.toString(),"yellow"),e)return(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{priority:iX.Highest,data:g})}let b=d.intersectionArea(p),y=b/p.area;if(b&&_){cw(h,v,c.id.toString(),"green",m.direction);let e={id:c.id,value:y,priority:iX.High,type:iG.Collision},t=cE===c.id;return cE="",(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{id:t?"flush":e.id,data:g})}if(f&&(null==(o=s.source)?void 0:o.id)!==c.id){let t=p.boundingRectangle.right>d.boundingRectangle.left&&p.boundingRectangle.left<d.boundingRectangle.right,n=p.boundingRectangle.bottom>d.boundingRectangle.top&&p.boundingRectangle.top<d.boundingRectangle.bottom;if("y"===e&&t||n){let t=(e=>{let{dragOperation:t,droppable:r}=e,{shape:n,position:i}=t;if(!r.shape)return null;let o=n?n5.from(n.current.boundingRectangle).corners:void 0,a=n5.from(r.shape.boundingRectangle).corners.reduce((e,t,r)=>{var n;return e+n6.distance(n6.from(t),null!=(n=null==o?void 0:o[r])?n:i.current)},0);return{id:r.id,value:1/(a/4),type:iG.Collision,priority:iX.Normal}})(r);if(t){let r=cj(e,{x:d.center.x-((null==(a=c.shape)?void 0:a.center.x)||0),y:d.center.y-((null==(l=c.shape)?void 0:l.center.y)||0)});return(g.direction=r,b)?(cw(h,v,c.id.toString(),"red",r||""),cE=c.id,(0,rB.__spreadProps)((0,rB.__spreadValues)({},t),{priority:iX.Low,data:g})):(cw(h,v,c.id.toString(),"orange",r||""),(0,rB.__spreadProps)((0,rB.__spreadValues)({},t),{priority:iX.Lowest,data:g}))}}}return cw(h,v,c.id.toString(),"hotpink"),null};(0,rB.init_react_import)();var cP=(e,t="ltr")=>"up"===e||"ltr"===t&&"left"===e||"rtl"===t&&"right"===e?"before":"after",cL=({position:e,sourceIndex:t,targetIndex:r,isSameZone:n})=>{let i=r;return n&&i>=t&&(i-=1),"after"===e&&(i+=1),i},cM=({children:e,onDragStart:t,onDragEnd:r,onMove:n})=>{let i=ck({mouse:[new la.Distance({value:5})]});return(0,rF.jsx)(lB,{sensors:i,onDragStart:e=>{var r,n;return t(null!=(n=null==(r=e.operation.source)?void 0:r.id.toString())?n:"")},onDragOver:(e,t)=>{var r;e.preventDefault();let{operation:i}=e,{source:o,target:a}=i;if(!o||!a)return;let l=o.data.index,s=a.data.index,c=null==(r=t.collisionObserver.collisions[0])?void 0:r.data;l!==s&&o.id!==a.id&&n({source:l,target:cL({position:cP(null==c?void 0:c.direction),sourceIndex:l,targetIndex:s,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{r()},250)},children:e})},cN=({id:e,index:t,disabled:r,children:n,type:i="item"})=>{let{ref:o,isDragging:a,isDropping:l,handleRef:s}=sW({id:e,type:i,index:t,disabled:r,data:{index:t},collisionDetector:cA("y")});return n({isDragging:a,isDropping:l,ref:o,handleRef:s})};(0,rB.init_react_import)();var cT=(0,rk.createContext)({}),cO=()=>{let e=(0,rk.useContext)(cT);return(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{readOnlyFields:e.readOnlyFields||{}})},cD=({children:e,name:t,subName:r,wildcardName:n=t,readOnlyFields:i})=>{let o=`${t}.${r}`,a=`${n}.${r}`,l=(0,rk.useMemo)(()=>Object.keys(i).reduce((e,r)=>{if(r.indexOf(o)>-1||r.indexOf(a)>-1){let o=new RegExp(`^(${t}|${n}).`.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\./g,"\\.").replace(/\*/g,"\\*")),a=r.replace(o,"");return(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{[a]:i[r]})}return e},{}),[t,r,n,i]);return(0,rF.jsx)(cT.Provider,{value:{readOnlyFields:l,localName:r},children:e})};(0,rB.init_react_import)();var cB=(e,t)=>t.split(".").reduce((e,t)=>{if(!e)return;let[r,n]=t.replace("]","").split("["),i=e[r];return n&&i?i[parseInt(n)]:i},e);(0,rB.init_react_import)();var cF=(0,rk.memo)(({field:e,id:t,index:r,name:n,subName:i,localName:o,onChange:a,forceReadOnly:l})=>{let s=void 0!==r?`${n}[${r}]`:n,c=n?`${s}.${i}`:i,u=void 0!==r?`${o}[${r}]`:null!=o?o:i,d=void 0!==r?`${o}[*]`:o,p=`${u}.${i}`,h=`${d}.${i}`,{readOnlyFields:f}=cO(),m=l||(void 0!==f[c]?f[p]:f[h]),g=e.label||i;return(0,rF.jsx)(cD,{name:u,wildcardName:d,subName:i,readOnlyFields:f,children:(0,rF.jsx)(uo,{name:c,label:g,id:t,readOnly:m,field:(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{label:g}),onChange:(e,t)=>{a(e,t,i)}})})}),cR=(0,rb.get_class_name_factory_default)("ArrayField",cd),cV=(0,rb.get_class_name_factory_default)("ArrayFieldItem",cd),cH=(0,rk.memo)(({index:e,originalIndex:t,field:r,name:n})=>{let i=cm(t=>cB(t,`${[n]}[${e}]`)),o=(0,rO.useMessage)("field-arrayitem-summary",{index:t});return(0,rk.useMemo)(()=>i&&r.getItemSummary?r.getItemSummary(i,e):o,[i,r,t,e,o])}),cW=(0,rk.memo)(({id:e,arrayId:t,index:r,dragIndex:n,originalIndex:i,field:o,onChange:a,onToggleExpand:l,readOnly:s,actions:c,name:u,localName:d})=>{let p=(0,rO.useAppStore)(r=>{var n;return(null==(n=r.state.ui.arrayState[t])?void 0:n.openId)===e}),h=(0,rO.useAppStore)(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),f=(0,rk.useMemo)(()=>!!o.arrayFields&&Object.values(o.arrayFields).some(e=>"slot"!==e.type&&!1!==e.visible),[o.arrayFields]);return(0,rF.jsx)(cN,{id:e,index:n,disabled:s,children:({isDragging:t,ref:n,handleRef:m})=>(0,rF.jsxs)("div",{ref:n,className:cV({isExpanded:p&&f,isDragging:t,noFields:!f}),children:[(0,rF.jsxs)("div",{ref:m,onClick:r=>{t||(r.preventDefault(),r.stopPropagation(),f&&l(e,p))},className:cV("summary"),children:[(0,rF.jsx)(cH,{index:r,originalIndex:i,field:o,name:u}),(0,rF.jsxs)("div",{className:cV("rhs"),children:[!s&&(0,rF.jsx)("div",{className:cV("actions"),children:c}),(0,rF.jsx)("div",{children:(0,rF.jsx)(cv,{})})]})]}),(0,rF.jsx)("div",{className:cV("body"),children:p&&f&&(0,rF.jsx)("fieldset",{className:cV("fieldset"),children:Object.keys(o.arrayFields).map(t=>{let n=o.arrayFields[t];return(0,rF.jsx)(cF,{id:`${e}_${t}`,name:u,index:r,subName:t,localName:d,field:n,onChange:a,forceReadOnly:!h},`${e}_${t}_${r}`)})})})]})})});(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var c$=(e,t=!0)=>cm(r=>t?cB(r,e):void 0);(0,rB.init_react_import)();var cq=(e,t,{tracked:r=!0,fallback:n}={})=>{let i=c$(e,r),o=(0,rO.useAppStore)(t=>t.state.ui.field.focus===e),[a,l]=(0,rk.useState)(i),s=(0,rk.useCallback)((e,...r)=>{l(e),t(e,...r)},[t]);return((0,rk.useEffect)(()=>{r&&(o||l(i))},[r,o,i]),r)?[void 0!==n&&null==a?n:a,s]:[void 0,t]},cU=(0,rb.get_class_name_factory_default)("Input",cl),cZ=({field:e,onChange:t,readOnly:r,id:n,name:i=n,label:o,labelIcon:a,Label:l})=>{let[s,c]=cq(i,t,{fallback:""});return(0,rF.jsx)(l,{label:o||i,icon:a||(0,rF.jsxs)(rF.Fragment,{children:["text"===e.type&&(0,rF.jsx)(rO.Type,{size:16}),"number"===e.type&&(0,rF.jsx)(rO.Hash,{size:16})]}),readOnly:r,children:(0,rF.jsx)("input",{className:cU("input"),autoComplete:"off",type:e.type,title:o||i,name:i,value:s,onChange:t=>{if("number"===e.type){let r=Number(t.currentTarget.value);(void 0===e.min||!(r<e.min))&&(void 0!==e.max&&r>e.max||c(r))}else c(t.currentTarget.value)},readOnly:r,tabIndex:r?-1:void 0,id:n,min:"number"===e.type?e.min:void 0,max:"number"===e.type?e.max:void 0,placeholder:"text"===e.type||"number"===e.type?e.placeholder:void 0,step:"number"===e.type?e.step:void 0})})};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var cY={"ExternalInput-actions":"_ExternalInput-actions_143vl_1","ExternalInput-button":"_ExternalInput-button_143vl_5","ExternalInput--dataSelected":"_ExternalInput--dataSelected_143vl_34","ExternalInput--readOnly":"_ExternalInput--readOnly_143vl_41","ExternalInput-detachButton":"_ExternalInput-detachButton_143vl_48",ExternalInput:"_ExternalInput_143vl_1",ExternalInputModal:"_ExternalInputModal_143vl_118","ExternalInputModal-grid":"_ExternalInputModal-grid_143vl_128","ExternalInputModal--filtersToggled":"_ExternalInputModal--filtersToggled_143vl_139","ExternalInputModal-filters":"_ExternalInputModal-filters_143vl_144","ExternalInputModal-masthead":"_ExternalInputModal-masthead_143vl_164","ExternalInputModal-tableWrapper":"_ExternalInputModal-tableWrapper_143vl_173","ExternalInputModal-table":"_ExternalInputModal-table_143vl_173","ExternalInputModal-thead":"_ExternalInputModal-thead_143vl_189","ExternalInputModal-th":"_ExternalInputModal-th_143vl_189","ExternalInputModal-td":"_ExternalInputModal-td_143vl_204","ExternalInputModal-tr":"_ExternalInputModal-tr_143vl_210","ExternalInputModal-tbody":"_ExternalInputModal-tbody_143vl_217","ExternalInputModal--hasData":"_ExternalInputModal--hasData_143vl_244","ExternalInputModal-loadingBanner":"_ExternalInputModal-loadingBanner_143vl_248","ExternalInputModal--isLoading":"_ExternalInputModal--isLoading_143vl_265","ExternalInputModal-searchForm":"_ExternalInputModal-searchForm_143vl_269","ExternalInputModal-search":"_ExternalInputModal-search_143vl_269","ExternalInputModal-searchIcon":"_ExternalInputModal-searchIcon_143vl_306","ExternalInputModal-searchIconText":"_ExternalInputModal-searchIconText_143vl_333","ExternalInputModal-searchInput":"_ExternalInputModal-searchInput_143vl_343","ExternalInputModal-searchActions":"_ExternalInputModal-searchActions_143vl_358","ExternalInputModal-searchActionIcon":"_ExternalInputModal-searchActionIcon_143vl_371","ExternalInputModal-footerContainer":"_ExternalInputModal-footerContainer_143vl_375","ExternalInputModal-footer":"_ExternalInputModal-footer_143vl_375","ExternalInputModal-field":"_ExternalInputModal-field_143vl_388"};(0,rB.init_react_import)(),(0,rB.init_react_import)();var cX=(0,rb.get_class_name_factory_default)("Modal",{Modal:"_Modal_g5xob_1","Modal--isOpen":"_Modal--isOpen_g5xob_15","Modal-inner":"_Modal-inner_g5xob_19"}),cG=({children:e,onClose:t,isOpen:r})=>{let[n,i]=(0,rk.useState)(null);return((0,rk.useEffect)(()=>{i(document.getElementById("puck-portal-root"))},[]),n)?(0,l_.createPortal)((0,rF.jsx)("div",{className:cX({isOpen:r}),onClick:t,children:(0,rF.jsx)("div",{className:cX("inner"),onClick:e=>e.stopPropagation(),children:e})}),n):(0,rF.jsx)("div",{})};(0,rB.init_react_import)(),(0,rB.init_react_import)();var cK=(0,rb.get_class_name_factory_default)("Heading",{Heading:"_Heading_97eh4_1","Heading--xxxxl":"_Heading--xxxxl_97eh4_12","Heading--xxxl":"_Heading--xxxl_97eh4_18","Heading--xxl":"_Heading--xxl_97eh4_22","Heading--xl":"_Heading--xl_97eh4_26","Heading--l":"_Heading--l_97eh4_30","Heading--m":"_Heading--m_97eh4_34","Heading--s":"_Heading--s_97eh4_38","Heading--xs":"_Heading--xs_97eh4_42"}),cJ=({children:e,rank:t,size:r="m"})=>{let n=t?`h${t}`:"span";return(0,rF.jsx)(n,{className:cK({[r]:!0}),children:e})};(0,rB.init_react_import)();var cQ=(0,rb.get_class_name_factory_default)("ExternalInput",cY),c0=(0,rb.get_class_name_factory_default)("ExternalInputModal",cY),c1=({count:e})=>{let t=(0,rO.useMessage)("field-external-result-singular",{count:e}),r=(0,rO.useMessage)("field-external-result-plural",{count:e});return(0,rF.jsx)("span",{className:c0("footer"),children:1===e?t:r})},c2={},c4=({field:e,onChange:t,value:r=null,name:n,id:i,readOnly:o})=>{var a;let{mapProp:l=e=>e,mapRow:s=e=>e,filterFields:c}=e||{},{enabled:u}=null!=(a=e.cache)?a:{enabled:!0},[d,p]=(0,rk.useState)([]),[h,f]=(0,rk.useState)(!1),[m,g]=(0,rk.useState)(!0),v=!!c,[_,b]=(0,rk.useState)(e.initialFilters||{}),[y,k]=(0,rk.useState)(v),w=(0,rk.useMemo)(()=>d.map(s),[d]),S=(0,rk.useMemo)(()=>{let e=new Set;for(let t of w)for(let r of Object.keys(t))("string"==typeof t[r]||"number"==typeof t[r]||(0,rk.isValidElement)(t[r]))&&e.add(r);return Array.from(e)},[w]),[j,I]=(0,rk.useState)(e.initialQuery||""),z=(0,rk.useCallback)((t,r)=>(0,rB.__async)(null,null,function*(){let n;g(!0);let o=`${i}-${t}-${JSON.stringify(r)}`;(n=u&&c2[o]?c2[o]:yield e.fetchList({query:t,filters:r}))&&(p(n),g(!1),u&&(c2[o]=n))}),[i,e]),C=(0,rk.useCallback)(t=>e.renderFooter?e.renderFooter(t):(0,rF.jsx)(c1,{count:t.items.length}),[e.renderFooter]);(0,rk.useEffect)(()=>{z(j,_)},[]);let E=(0,rO.useMessage)("field-external-item"),A=(0,rO.useMessage)("field-external-search"),P=(0,rO.useMessage)("field-external-togglefilters"),L=(0,rO.useMessage)("field-external-selectdata");return(0,rF.jsxs)("div",{className:cQ({dataSelected:!!r,modalVisible:h,readOnly:o}),id:i,children:[(0,rF.jsxs)("div",{className:cQ("actions"),children:[(0,rF.jsx)("button",{type:"button",onClick:()=>f(!0),className:cQ("button"),disabled:o,children:r?e.getItemSummary?e.getItemSummary(r):E:(0,rF.jsxs)(rF.Fragment,{children:[(0,rF.jsx)(rO.Link,{size:"16"}),(0,rF.jsx)("span",{children:e.placeholder})]})}),r&&(0,rF.jsx)("button",{type:"button",className:cQ("detachButton"),onClick:()=>{t(null)},disabled:o,children:(0,rF.jsx)(rO.LockOpen,{size:16})})]}),(0,rF.jsx)(cG,{onClose:()=>f(!1),isOpen:h,children:(0,rF.jsxs)("form",{className:c0({isLoading:m,loaded:!m,hasData:w.length>0,filtersToggled:y}),onSubmit:e=>{e.preventDefault(),e.stopPropagation(),z(j,_)},children:[(0,rF.jsx)("div",{className:c0("masthead"),children:e.showSearch?(0,rF.jsxs)("div",{className:c0("searchForm"),children:[(0,rF.jsxs)("label",{className:c0("search"),children:[(0,rF.jsx)("span",{className:c0("searchIconText"),children:A}),(0,rF.jsx)("div",{className:c0("searchIcon"),children:(0,rF.jsx)(rO.Search,{size:"18"})}),(0,rF.jsx)("input",{className:c0("searchInput"),name:"q",type:"search",placeholder:e.placeholder,onChange:e=>{I(e.currentTarget.value)},autoComplete:"off",value:j})]}),(0,rF.jsxs)("div",{className:c0("searchActions"),children:[(0,rF.jsx)(ca,{type:"submit",loading:m,fullWidth:!0,children:A}),v&&(0,rF.jsx)("div",{className:c0("searchActionIcon"),children:(0,rF.jsx)(rO.IconButton,{type:"button",title:P,onClick:e=>{e.preventDefault(),e.stopPropagation(),k(!y)},children:(0,rF.jsx)(rO.SlidersHorizontal,{size:20})})})]})]}):(0,rF.jsx)(cJ,{rank:"2",size:"xs",children:e.placeholder||L})}),(0,rF.jsxs)("div",{className:c0("grid"),children:[v&&(0,rF.jsx)("div",{className:c0("filters"),children:v&&Object.keys(c).map(e=>{let t=c[e];return(0,rF.jsx)("div",{className:c0("field"),children:(0,rF.jsx)(cc,{label:t.label||e,children:(0,rF.jsx)(ul,{field:t,id:`external_field_${e}_filter`,value:_[e],onChange:t=>{b(r=>{let n=(0,rB.__spreadProps)((0,rB.__spreadValues)({},r),{[e]:t});return z(j,n),n})}})})},e)})}),(0,rF.jsxs)("div",{className:c0("tableWrapper"),children:[(0,rF.jsxs)("table",{className:c0("table"),children:[(0,rF.jsx)("thead",{className:c0("thead"),children:(0,rF.jsx)("tr",{className:c0("tr"),children:S.map(e=>(0,rF.jsx)("th",{className:c0("th"),style:{textAlign:"left"},children:e},e))})}),(0,rF.jsx)("tbody",{className:c0("tbody"),children:w.map((e,r)=>(0,rF.jsx)("tr",{style:{whiteSpace:"nowrap"},className:c0("tr"),onClick:()=>{t(l(d[r])),f(!1)},children:S.map(t=>(0,rF.jsx)("td",{className:c0("td"),children:e[t]},t))},r))})]}),(0,rF.jsx)("div",{className:c0("loadingBanner"),children:(0,rF.jsx)(rO.Loader,{size:24})})]})]}),(0,rF.jsx)("div",{className:c0("footerContainer"),children:(0,rF.jsx)(C,{items:w})})]})})]})};(0,rB.init_react_import)();var c3=(0,rb.get_class_name_factory_default)("Input",cl);(0,rB.init_react_import)();var c6=(0,rb.get_class_name_factory_default)("Input",cl);(0,rB.init_react_import)();var c5=(0,rb.get_class_name_factory_default)("Input",cl);(0,rB.init_react_import)(),(0,rB.init_react_import)();var c8=(0,rk.memo)(e=>{var t;return(0,rF.jsx)(rg.EditorInner,(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{editor:null,menu:(0,rF.jsx)(rT.LoadedRichTextMenuInner,{field:e.field,editor:null,editorState:null,readOnly:null!=(t=e.readOnly)&&t}),children:(0,rF.jsx)("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:e.content},contentEditable:!0})}))});c8.displayName="EditorFallback";var c7=(0,rk.lazy)(()=>e.A(67900).then(e=>({default:e.Editor})));(0,rB.init_react_import)(),(0,rB.init_react_import)();var c9=(0,rb.get_class_name_factory_default)("ObjectField",{ObjectField:"_ObjectField_c5reb_1","ObjectField-fieldset":"_ObjectField-fieldset_c5reb_10"});(0,rB.init_react_import)();var ue=()=>{if(void 0!==rk.default.useId)return rk.default.useId();let[e]=(0,rk.useState)((0,rD.generateId)());return e},ut=(0,rb.get_class_name_factory_default)("Input",cl),ur=(0,rb.get_class_name_factory_default)("InputWrapper",cl),un={array:({field:e,onChange:t,id:r,name:n=r,label:i,labelIcon:o,readOnly:a,Label:l=e=>(0,rF.jsx)("div",(0,rB.__spreadValues)({},e))})=>{let s=(0,rO.useAppStore)(e=>e.setUi),c=(0,rO.useAppStoreApi)(),u=cf(),{localName:d=n}=cO(),p=()=>{var e;return null!=(e=cB(u.getState(),n))?e:[]},h=(0,rk.useCallback)(()=>{var e;let{state:t}=c.getState(),n=t.ui.arrayState[r];return(null==(e=null==n?void 0:n.items)?void 0:e.length)?n:{items:Array.from(p()||[]).map((e,t)=>({_originalIndex:t,_currentIndex:t,_arrayId:`${r}-${t}`})),openId:""}},[c,r,p,n]),f=cm(()=>p().length),m=(0,rk.useMemo)(h,[h]),g=(0,rO.useAppStore)(e=>{let t=e.state.ui.arrayState[r];return null!=t?t:m}),v=(0,rO.useAppStoreApi)(),_=(0,rk.useCallback)(e=>{let t=v.getState().state;return{arrayState:(0,rB.__spreadProps)((0,rB.__spreadValues)({},t.ui.arrayState),{[r]:(0,rB.__spreadValues)((0,rB.__spreadValues)({},h()),e)})}},[v]),b=(0,rk.useCallback)(()=>h().items.reduce((e,t)=>t._originalIndex>e?t._originalIndex:e,-1),[]),y=(0,rk.useCallback)(e=>{let t=b(),n=h(),i=Array.from(e||[]).map((e,i)=>{var o,a,l;let s=n.items[i],c={_originalIndex:null!=(o=null==s?void 0:s._originalIndex)?o:t+1,_currentIndex:null!=(a=null==s?void 0:s._currentIndex)?a:i,_arrayId:(null==(l=n.items[i])?void 0:l._arrayId)||`${r}-${t+1}`};return c._originalIndex>t&&(t=c._originalIndex),c});return(0,rB.__spreadProps)((0,rB.__spreadValues)({},n),{items:i})},[]),[k,w]=(0,rk.useState)(""),S=!!k,j=(0,rk.useRef)([]);(0,rk.useEffect)(()=>{j.current=p()},[]);let I=(0,rk.useCallback)(t=>{if("array"!==e.type||!e.arrayFields)return;let r=v.getState().config;return(0,rx.walkField)({value:t,fields:e.arrayFields,mappers:{slot:({value:e})=>e.map(e=>(0,rD.populateIds)(e,r,!0))},config:r})},[v,e]),z=(0,rk.useCallback)(()=>{let e=h(),t=e.items.map((e,t)=>(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{_currentIndex:t})),n=v.getState().state;s({arrayState:(0,rB.__spreadProps)((0,rB.__spreadValues)({},n.ui.arrayState),{[r]:(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{items:t})})},!1)},[]),C=(0,rk.useCallback)(e=>{s(_(y(e)),!1),t(e)},[y,s,_,t]);(0,rk.useEffect)(()=>{s(_(y(p())),!1)},[f]);let E=(0,rO.useMessage)("field-arrayitem-duplicate"),A=(0,rO.useMessage)("field-arrayitem-delete");if("array"!==e.type||!e.arrayFields)return null;let P=void 0!==e.max&&(null==g?void 0:g.items.length)>=e.max||a;return(0,rF.jsx)(l,{label:i||n,icon:o||(0,rF.jsx)(rO.List,{size:16}),el:"div",readOnly:a,children:(0,rF.jsx)(cM,{onDragStart:e=>{j.current=p(),w(e),z()},onDragEnd:()=>{w(""),t(j.current);let e=u.getState();u.setState(cn(e,n,j.current)),z()},onMove:e=>{let t=h();if(t.items[e.source]._arrayId!==k)return;let n=(0,rO.reorder)(j.current,e.source,e.target),i=(0,rO.reorder)(t.items,e.source,e.target),o=v.getState().state;s({arrayState:(0,rB.__spreadProps)((0,rB.__spreadValues)({},o.ui.arrayState),{[r]:(0,rB.__spreadProps)((0,rB.__spreadValues)({},t),{items:i})})},!1),j.current=n},children:(0,rF.jsxs)("div",{className:cR({hasItems:f>0,addDisabled:P}),children:[g.items.length>0&&(0,rF.jsx)("div",{className:cR("inner"),"data-dnd-container":!0,children:g.items.map((i,o)=>{let{_arrayId:l=`${r}-${o}`,_originalIndex:c=o,_currentIndex:u=o}=i;return(0,rF.jsx)(cW,{index:u,dragIndex:o,originalIndex:c,arrayId:r,id:l,readOnly:a,field:e,name:n,localName:d,onChange:(e,r,n)=>{let i=p(),a=Array.from(i||[])[o]||{};t((0,rO.replace)(i,o,(0,rB.__spreadProps)((0,rB.__spreadValues)({},a),{[n]:e})),r)},onToggleExpand:(e,t)=>{t?s(_({openId:""})):s(_({openId:e}))},actions:(0,rF.jsxs)(rF.Fragment,{children:[(0,rF.jsx)("div",{className:cV("action"),children:(0,rF.jsx)(rO.IconButton,{type:"button",disabled:!!P,onClick:e=>{e.stopPropagation();let t=[...p()||[]],r=I(t[o]);t.splice(o,0,r),C(t)},title:E,children:(0,rF.jsx)(rO.Copy,{size:16})})}),(0,rF.jsx)("div",{className:cV("action"),children:(0,rF.jsx)(rO.IconButton,{type:"button",disabled:void 0!==e.min&&e.min>=g.items.length,onClick:e=>{e.stopPropagation();let t=[...p()||[]];t.splice(o,1),C(t)},title:A,children:(0,rF.jsx)(rO.Trash,{size:16})})})]})},l)})}),!P&&(0,rF.jsx)("button",{type:"button",className:cR("addButton"),onClick:()=>{var t;if(S)return;let r=p()||[],n="function"==typeof e.defaultItemProps?e.defaultItemProps(r.length):null!=(t=e.defaultItemProps)?t:{};C([...r,(0,rx.defaultSlots)(I(n),e.arrayFields)])},children:(0,rF.jsx)(rO.Plus,{size:21})})]})})})},external:({field:e,onChange:t,id:r,name:n=r,label:i,labelIcon:o,Label:a,readOnly:l})=>{var s,c,u;let d=c$(n),p=(0,rO.useMessage)("field-external-selectdata");return((0,rk.useEffect)(()=>{e.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),"external"!==e.type)?null:(0,rF.jsx)(a,{label:i||n,icon:o||(0,rF.jsx)(rO.Link,{size:16}),el:"div",children:(0,rF.jsx)(c4,{name:n,field:(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{placeholder:(null==(s=e.adaptor)?void 0:s.name)?`Select from ${e.adaptor.name}`:e.placeholder||p,mapProp:(null==(c=e.adaptor)?void 0:c.mapProp)||e.mapProp,mapRow:e.mapRow,fetchList:(null==(u=e.adaptor)?void 0:u.fetchList)?()=>(0,rB.__async)(null,null,function*(){return yield e.adaptor.fetchList(e.adaptorParams)}):e.fetchList}),onChange:t,value:d,id:r,readOnly:l})})},object:({field:e,onChange:t,id:r,name:n=r,label:i,labelIcon:o,Label:a,readOnly:l})=>{let{localName:s=n}=cO(),c=cf(),u=(0,rO.useAppStore)(e=>e.permissions.getPermissions({item:e.selectedItem}).edit);return"object"===e.type&&e.objectFields?(0,rF.jsx)(a,{label:i||n,icon:o||(0,rF.jsx)(rO.EllipsisVertical,{size:16}),el:"div",readOnly:l,children:(0,rF.jsx)("div",{className:c9(),children:(0,rF.jsx)("fieldset",{className:c9("fieldset"),children:Object.keys(e.objectFields).map(i=>{let o=e.objectFields[i],a=`${s}.${i}`;return(0,rF.jsx)(cF,{id:`${r}_${i}`,name:n,subName:i,localName:s,field:o,forceReadOnly:!u,onChange:(e,r,i)=>{var o;let a=null!=(o=cB(c.getState(),n))?o:{};a[i]!==e&&t((0,rB.__spreadProps)((0,rB.__spreadValues)({},a),{[i]:e}),r)}},a)})})})}):null},select:({field:e,onChange:t,label:r,labelIcon:n,Label:i,id:o,name:a=o,readOnly:l})=>{let s=c$(a);return"select"===e.type&&e.options?(0,rF.jsx)(i,{label:r||a,icon:n||(0,rF.jsx)(rO.ChevronDown,{size:16}),readOnly:l,children:(0,rF.jsxs)("div",{className:c6("select"),children:[(0,rF.jsx)("select",{id:o,title:r||a,className:c6("input"),disabled:l,onChange:e=>{t(JSON.parse(e.target.value).value)},value:JSON.stringify({value:s}),children:e.options.map(e=>(0,rF.jsx)("option",{label:e.label,value:JSON.stringify({value:e.value})},e.label+JSON.stringify(e.value)))}),(0,rF.jsx)(rO.ChevronDown,{size:18,className:c6("selectIcon")})]})}):null},textarea:({field:e,onChange:t,readOnly:r,id:n,name:i=n,label:o,labelIcon:a,Label:l})=>{let[s,c]=cq(i,t,{fallback:""});return(0,rF.jsx)(l,{label:o||i,icon:a||(0,rF.jsx)(rO.Type,{size:16}),readOnly:r,children:(0,rF.jsx)("textarea",{id:n,className:c5("input"),autoComplete:"off",name:i,value:s,onChange:e=>c(e.currentTarget.value),readOnly:r,tabIndex:r?-1:void 0,rows:5,placeholder:"textarea"===e.type?e.placeholder:void 0})})},radio:({field:e,onChange:t,readOnly:r,id:n,name:i=n,label:o,labelIcon:a,Label:l})=>{let s=c$(i);return"radio"===e.type&&e.options?(0,rF.jsx)(l,{icon:a||(0,rF.jsx)(rO.CircleCheckBig,{size:16}),label:o||i,readOnly:r,el:"div",children:(0,rF.jsx)("div",{className:c3("radioGroupItems"),id:n,children:e.options.map(e=>{var n;return(0,rF.jsxs)("label",{className:c3("radio"),children:[(0,rF.jsx)("input",{type:"radio",className:c3("radioInput"),value:JSON.stringify({value:e.value}),name:i,onChange:e=>{t(JSON.parse(e.target.value).value)},disabled:r,checked:s===e.value}),(0,rF.jsx)("div",{className:c3("radioInner"),children:e.label||(null==(n=e.value)?void 0:n.toString())})]},e.label+e.value)})})}):null},text:cZ,number:cZ,richtext:({onChange:e,readOnly:t=!1,id:r,name:n=r,label:i,labelIcon:o,Label:a,field:l})=>{let s={onChange:e,content:c$(n),readOnly:t,field:l,id:r,name:n};return(0,rF.jsx)(rF.Fragment,{children:(0,rF.jsx)(a,{label:i||n,icon:o||(0,rF.jsx)(rO.Type,{size:16}),readOnly:t,el:"div",children:(0,rF.jsx)(rk.Suspense,{fallback:(0,rF.jsx)(c8,(0,rB.__spreadValues)({},s)),children:(0,rF.jsx)(c7,(0,rB.__spreadValues)({},s))})})})}};function ui(e){var t,r,n;let i=(0,rO.useAppStore)(e=>e.dispatch),o=(0,rO.useAppStore)(e=>e.overrides),a=(0,rO.useAppStore)(rV(e=>{var t;return null==(t=e.selectedItem)?void 0:t.readOnly})),l=(0,rk.useContext)(cT),{id:s,Label:c=cu}=e,u=e.field,d=u.label,p=u.labelIcon,h=ue(),f=s||h,m=(0,rk.useMemo)(()=>{var e,t,r,n,i,a,l,s,c,u;return(0,rB.__spreadProps)((0,rB.__spreadValues)({},o.fieldTypes),{custom:null==(e=o.fieldTypes)?void 0:e.custom,array:(null==(t=o.fieldTypes)?void 0:t.array)||un.array,external:(null==(r=o.fieldTypes)?void 0:r.external)||un.external,object:(null==(n=o.fieldTypes)?void 0:n.object)||un.object,select:(null==(i=o.fieldTypes)?void 0:i.select)||un.select,textarea:(null==(a=o.fieldTypes)?void 0:a.textarea)||un.textarea,radio:(null==(l=o.fieldTypes)?void 0:l.radio)||un.radio,text:(null==(s=o.fieldTypes)?void 0:s.text)||un.text,number:(null==(c=o.fieldTypes)?void 0:c.number)||un.number,richtext:(null==(u=o.fieldTypes)?void 0:u.richtext)||un.richtext})},[o]),g="custom"===u.type||!!(null==(t=o.fieldTypes)?void 0:t[u.type]),v=null!=(r=e.name)?r:f,_=cf(),b=(0,rk.useMemo)(()=>g?(t,r)=>{var n;null==(n=e.onChange)||n.call(e,t,r),_.setState(cn(_.getState(),v,t))}:e.onChange,[g,e.onChange,v,_]),[y,k]=cq(v,b,{tracked:g}),w=(0,rk.useMemo)(()=>(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{field:u,label:d,labelIcon:p,Label:c,id:f,value:y,onChange:k}),[e,u,d,p,c,f,y,k]),S=(0,rk.useCallback)(e=>{w.name&&("INPUT"===e.target.nodeName||"TEXTAREA"===e.target.nodeName)&&(e.stopPropagation(),i({type:"setUi",ui:{field:{focus:w.name}}}))},[w.name]),j=(0,rk.useCallback)(e=>{"name"in e.target&&i({type:"setUi",ui:{field:{focus:null}}})},[]),I=(0,rk.useMemo)(()=>"custom"!==u.type&&"slot"!==u.type?un[u.type]:e=>null,[u.type]),z="custom"===u.type?u.key:void 0,C=(0,rk.useMemo)(()=>"custom"!==u.type||m[u.type]?"slot"!==u.type?m[u.type]:void 0:u.render?u.render:null,[u.type,z,m]),{visible:E=!0}=e.field;if(!E||"slot"===u.type)return null;if(!C)throw Error(`Field type for ${u.type} did not exist.`);return(0,rF.jsx)(cT.Provider,{value:{readOnlyFields:l.readOnlyFields||a||{},localName:null!=(n=l.localName)?n:w.name},children:(0,rF.jsx)("div",{className:ur(),onFocus:S,onBlur:j,onClick:e=>{e.stopPropagation()},children:(0,rF.jsx)(C,(0,rB.__spreadProps)((0,rB.__spreadValues)({},w),{children:(0,rF.jsx)(I,(0,rB.__spreadValues)({},w))}))})})}function uo(e){return(0,rF.jsx)(ui,(0,rB.__spreadValues)({},e))}function ua(e){var{value:t}=e,r=(0,rB.__objRest)(e,["value"]);let n=(0,rk.useMemo)(()=>e=>(0,rF.jsx)("div",(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{className:ut({readOnly:r.readOnly})})),[r.readOnly]),i=cf(),o=(0,rk.useCallback)(e=>{r.id&&(i.setState({[r.id]:e}),r.onChange(e))},[i,r.onChange,r.id]);return(0,rk.useEffect)(()=>{r.id&&i.setState({[r.id]:t})},[r.id,t,i]),(0,rF.jsx)(ui,(0,rB.__spreadProps)((0,rB.__spreadValues)({},r),{onChange:o,Label:n}))}function ul(e){let t=ue();return"slot"===e.field.type?null:(0,rF.jsx)(ch.Provider,{value:{[t]:e.value},children:(0,rF.jsx)(ua,(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{id:t}))})}function us(e){let t={x:0,y:0},r=e;for(;r&&r!==document.documentElement;){let e=r.parentElement;e&&(t.x+=e.scrollLeft,t.y+=e.scrollTop),r=e}return t}(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var uc=(0,rk.createContext)(null),uu=(0,rk.createContext)((0,rH.createStore)(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),ud=({children:e,store:t})=>(0,rF.jsx)(uu.Provider,{value:t,children:e}),up=({children:e,value:t})=>{let r=(0,rO.useAppStore)(e=>e.dispatch),n=(0,rk.useCallback)(e=>{r({type:"registerZone",zone:e})},[r]),i=(0,rk.useMemo)(()=>(0,rB.__spreadValues)({registerZone:n},t),[t]);return(0,rF.jsx)(rF.Fragment,{children:i&&(0,rF.jsx)(uc.Provider,{value:i,children:e})})};(0,rB.init_react_import)();var uh=(e,t=[])=>{let r=(0,rO.useAppStoreApi)();return(0,rk.useCallback)(()=>{let t=()=>{},n=r=>{r?e(!1):(setTimeout(()=>{e(!0)},0),t&&t())},i=r.getState().state.ui.isDragging;return n(i),i&&(t=r.subscribe(e=>e.state.ui.isDragging,e=>{n(e)})),t},[r,...t])};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var uf=()=>{if("u"<typeof window)return;let e=document.querySelector("#preview-frame");return(null==e?void 0:e.tagName)==="IFRAME"?e.contentDocument||document:(null==e?void 0:e.ownerDocument)||document};(0,rB.init_react_import)(),(0,rB.init_react_import)();var um=e=>"u">typeof CSS&&"function"==typeof CSS.escape?CSS.escape(e):e,ug=e=>`[data-puck-component="${um(e)}"]`,uv=e=>`[data-puck-dropzone="${um(e)}"]`,u_={duration:250,easing:"ease"},ub=e=>{var t,r;return null!=(r=null==(t=e.defaultView)?void 0:t.matchMedia("(prefers-reduced-motion: reduce)").matches)&&r},ux=(e,{zones:t,itemId:r,targetZone:n,getExpectedOrder:i,initialExpectedOrder:o=[]},a)=>{let l=new Set(o),s=0,c=()=>{var o;let u=e.querySelector(uv(n)),d=i(),p=null!=r?r:d.find(e=>!l.has(e)),h=p&&null!=(o=null==u?void 0:u.querySelector(`:scope > ${ug(p)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`))?o:null,f=u?Array.from(u.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(e=>e.getAttribute("data-puck-component")):[],m=new Set(f),g=d.filter(e=>m.has(e)),v=f.length===g.length&&f.every((e,t)=>e===g[t]),_=t.every(t=>t===n||!p||!e.querySelector(`${uv(t)} > ${ug(p)}`));if((!h||!v||!_)&&s<10){s++,requestAnimationFrame(c);return}a(h)};requestAnimationFrame(c)};(0,rB.init_react_import)();var uy=(e,t)=>{var r,n;return null!=(n=null==(r=e.indexes.zones[t])?void 0:r.contentIds)?n:[]},uk=(e,t)=>{let r=(0,rO.useAppStoreApi)();return(0,rk.useCallback)(n=>{var i,o,a,l,s;let c,u=Object.values(null!=(i=e.getState().previewIndex)?i:{}),d=t?u.find(e=>(null==e?void 0:e.props.id)===t&&!e.ghost):u.find(e=>(null==e?void 0:e.type)==="insert"),p=t?(null==d?void 0:d.linePlaceholder)||(null==d?void 0:d.type)==="insert":!!d;return o=d&&p?{itemId:"move"===d.type?t:void 0,targetZone:d.zone,getExpectedOrder:()=>uy(r.getState().state,d.zone)}:void 0,!(null!=(l=null==(c=null==(a=n.source.manager)?void 0:a.dragOperation)?void 0:c.canceled)&&l||(null==(s=null==c?void 0:c.target)?void 0:s.type)==="void")&&o?void(({feedbackElement:e,itemId:t,targetZone:r,getExpectedOrder:n})=>{var i;let o=e.ownerDocument,a=null!=(i=uf())?i:o;if(ub(o))return;let l=e.getBoundingClientRect(),s=n(),c=e.cloneNode(!0);c.removeAttribute("id"),c.removeAttribute("popover"),c.removeAttribute("data-puck-component"),c.removeAttribute("data-puck-dnd"),c.removeAttribute("data-dnd-dragging"),c.setAttribute("inert","true"),Object.assign(c.style,{position:"fixed",left:`${l.left}px`,top:`${l.top}px`,width:`${l.width}px`,height:`${l.height}px`,margin:"0",overflow:"hidden",pointerEvents:"none",transform:"none",transition:"none",translate:"none",zIndex:"2147483647"});let u=a.createElement("style");u.textContent=`
    ${t?`${ug(t)} { visibility: hidden !important; }`:""}
    [data-puck-overlay] { opacity: 0 !important; }
  `,a.head.appendChild(u),o.body.appendChild(c);let d=()=>{c.remove(),u.remove()};ux(a,{zones:[r],itemId:t,targetZone:r,getExpectedOrder:n,initialExpectedOrder:s},e=>{if(!e)return void d();let r=e.getAttribute("data-puck-component");!t&&r&&(u.textContent+=`
          ${ug(r)} { visibility: hidden !important; }
        `);let n=((e,t)=>{var r,n;let i=e.getBoundingClientRect();if(e.ownerDocument===t)return i;let o=((e,t)=>{var r,n;let i={x:0,y:0,scaleX:1,scaleY:1},o=null==(r=e.ownerDocument.defaultView)?void 0:r.frameElement;for(;o&&o!==t;){let e=o.getBoundingClientRect(),t=o.offsetWidth?e.width/o.offsetWidth:1,r=o.offsetHeight?e.height/o.offsetHeight:1;i.x+=e.left,i.y+=e.top,i.scaleX*=t,i.scaleY*=r,o=null==(n=o.ownerDocument.defaultView)?void 0:n.frameElement}return i})(e,null!=(n=null==(r=t.defaultView)?void 0:r.frameElement)?n:null);return{left:i.left*o.scaleX+o.x,top:i.top*o.scaleY+o.y,width:i.width*o.scaleX,height:i.height*o.scaleY}})(e,o);c.animate({left:[`${l.left}px`,`${n.left}px`],top:[`${l.top}px`,`${n.top}px`],width:[`${l.width}px`,`${n.width}px`],height:[`${l.height}px`,`${n.height}px`]},(0,rB.__spreadProps)((0,rB.__spreadValues)({},u_),{fill:"forwards"})).finished.catch(()=>void 0).then(d)})})((0,rB.__spreadProps)((0,rB.__spreadValues)({},o),{feedbackElement:n.feedbackElement})):(({element:e,feedbackElement:t,placeholder:r,translate:n})=>{var i;if(ub(t.ownerDocument))return;let o=null!=r?r:e,a={frameTransform:t.ownerDocument===o.ownerDocument?null:void 0},l=new o8(t,a),s=new o8(o,a),c=null!=(i=oX(o$(t).translate))?i:n,u={x:c.x-(l.center.x-s.center.x),y:c.y-(l.center.y-s.center.y)};return t.setAttribute("data-dnd-dropping",""),t.animate({translate:[`${c.x}px ${c.y}px 0`,`${u.x}px ${u.y}px 0`]},u_).finished.catch(()=>void 0).then(()=>{t.removeAttribute("data-dnd-dropping")})})(n)},[r,e,t])};function uw(e,t){e.forEach(e=>{"function"==typeof e?e(t):e&&"object"==typeof e&&"current"in e&&(e.current=t)})}(0,rB.init_react_import)();var uS=(0,rb.get_class_name_factory_default)("DraggableComponent",{DraggableComponent:"_DraggableComponent_1627v_1","DraggableComponent-overlayWrapper":"_DraggableComponent-overlayWrapper_1627v_6","DraggableComponent-overlay":"_DraggableComponent-overlay_1627v_6","DraggableComponent-loadingOverlay":"_DraggableComponent-loadingOverlay_1627v_38","DraggableComponent--hover":"_DraggableComponent--hover_1627v_54","DraggableComponent--isSelected":"_DraggableComponent--isSelected_1627v_72","DraggableComponent-actionsOverlay":"_DraggableComponent-actionsOverlay_1627v_89","DraggableComponent-actions":"_DraggableComponent-actions_1627v_89","DraggableComponent-actionsAction":"_DraggableComponent-actionsAction_1627v_111"}),uj=({label:e,children:t,parentAction:r})=>(0,rF.jsxs)(rO.ActionBar,{children:[(0,rF.jsxs)(rO.ActionBar.Group,{children:[r,e&&(0,rF.jsx)(rO.ActionBar.Label,{label:e})]}),(0,rF.jsx)(rO.ActionBar.Group,{children:t})]}),uI=({children:e})=>(0,rF.jsx)(rF.Fragment,{children:e}),uz=({children:e,depth:t,componentType:r,id:n,index:i,zoneCompound:o,isLoading:a=!1,isSelected:l=!1,debug:s,label:c,autoDragAxis:u,userDragAxis:d,inDroppableZone:p=!0,itemRef:h})=>{let f=(0,rO.useAppStore)(e=>{var t;return(null==(t=e.selectedItem)?void 0:t.props.id)===n?e.zoomConfig.zoom:1}),m=(0,rO.useAppStore)(e=>e._experimentalFullScreenCanvas),g=(0,rO.useAppStore)(e=>e.overrides),v=(0,rO.useAppStore)(e=>e.dispatch),_=(0,rO.useAppStore)(e=>e.iframe),b=(0,rk.useRef)(0),y=(0,rk.useContext)(uc),[k,w]=(0,rk.useState)({}),S=(0,rk.useCallback)((e,t)=>{var r;null==(r=null==y?void 0:y.registerLocalZone)||r.call(y,e,t),w(r=>(0,rB.__spreadProps)((0,rB.__spreadValues)({},r),{[e]:t}))},[w]),j=(0,rk.useCallback)(e=>{var t;null==(t=null==y?void 0:y.unregisterLocalZone)||t.call(y,e),w(t=>{let r=(0,rB.__spreadValues)({},t);return delete r[e],r})},[w]),I=Object.values(k).filter(Boolean).length>0,z=(0,rO.useAppStore)(rV(e=>{var t;return null==(t=e.state.indexes.nodes[n])?void 0:t.path})),C=(0,rO.useAppStore)(rV(e=>{let t=(0,rD.getItem)({index:i,zone:o},e.state);return e.permissions.getPermissions({item:t})})),E=(0,rk.useContext)(uu),A=(0,rO.useAppStoreApi)(),[P,L]=(0,rk.useState)(d||u),M=(0,rk.useMemo)(()=>cA(P),[P]),N=uk(E,n),{ref:T,isDragging:O,sortable:D}=sW({id:n,index:i,group:o,type:"component",data:{areaId:null==y?void 0:y.areaId,zone:o,index:i,componentType:r,containsActiveZone:I,depth:t,path:z||[],inDroppableZone:p},collisionPriority:t,collisionDetector:M,transition:{duration:200,easing:"cubic-bezier(0.2, 0, 0, 1)"},plugins:e=>[...e,aK.configure({feedback:"clone",dropAnimation:N})]});(0,rk.useEffect)(()=>{let e=E.getState().enabledIndex[o];D.droppable.disabled=!e,D.draggable.disabled=!C.drag;let t=E.subscribe(e=>{D.droppable.disabled=!e.enabledIndex[o]});return F.current&&!C.drag?(F.current.setAttribute("data-puck-disabled",""),()=>{var e;null==(e=F.current)||e.removeAttribute("data-puck-disabled"),t()}):t},[C.drag,o]);let[,B]=(0,rk.useState)(0),F=(0,rk.useRef)(null),R=(0,rk.useCallback)(e=>{T(e),F.current!==e&&(F.current=e,B(e=>e+1),h&&uw([h],e))},[h,T]),[V,H]=(0,rk.useState)();(0,rk.useEffect)(()=>{var e,t,r;H(_.enabled?null==(e=F.current)?void 0:e.ownerDocument.body:null!=(r=null==(t=F.current)?void 0:t.closest("[data-puck-preview]"))?r:document.body)},[_.enabled]);let W=(0,rk.useCallback)(()=>{var e,t;if(!F.current)return;let r=F.current,n=r.getBoundingClientRect(),i=_.enabled?null:r.closest("[data-puck-preview]"),o=(()=>{let e=r;for(;e&&e!==document.documentElement;){if("fixed"===getComputedStyle(e).position)return!0;e=e.parentElement}return!1})(),a=null==i?void 0:i.getBoundingClientRect(),l=i?us(i):{x:0,y:0},s=o?{x:0,y:0}:us(r),c=o?{x:0,y:0}:{x:s.x-l.x-(null!=(e=null==a?void 0:a.left)?e:0),y:s.y-l.y-(null!=(t=null==a?void 0:a.top)?t:0)};return{left:`${n.left+c.x}px`,top:`${n.top+c.y}px`,height:`${n.height}px`,width:`${n.width}px`,position:o?"fixed":void 0}},[_.enabled]),[$,q]=(0,rk.useState)(),U=(0,rk.useRef)(null),Z=(0,rk.useRef)(null),Y=(0,rk.useCallback)(()=>{q(W()),h&&uw([h],F.current)},[W,h]),X=(0,rk.useCallback)(()=>{null==Z.current&&(Z.current=requestAnimationFrame(()=>{Z.current=null,Y()}))},[Y]);(0,rk.useEffect)(()=>()=>{null!=Z.current&&(cancelAnimationFrame(Z.current),Z.current=null)},[]),(0,rk.useEffect)(()=>{if(F.current){let e=new ResizeObserver(()=>{X()});return e.observe(F.current),()=>{e.disconnect()}}},[X,h]);let G=(0,rO.useAppStore)(e=>e.nodes.registerNode),K=(0,rO.useAppStore)(e=>e.nodes.unregisterNode),J=(0,rk.useCallback)(()=>{ed(!1)},[]),Q=(0,rk.useCallback)(()=>{ed(!0)},[]),ee=(0,rk.useRef)({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});(0,rk.useLayoutEffect)(()=>{ee.current.sync=Y,ee.current.hideOverlay=J,ee.current.showOverlay=Q},[J,Q,Y]),(0,rk.useEffect)(()=>(G(n,ee.current),()=>{K(n)}),[n,G,K]);let et=(0,rk.useMemo)(()=>g.actionBar||uj,[g.actionBar]),er=(0,rk.useMemo)(()=>g.componentOverlay||uI,[g.componentOverlay]),en=(0,rk.useCallback)(e=>{E.getState().draggedItem||(e.target.closest("[data-puck-overlay-portal]")||e.stopPropagation(),m?v({type:"setUi",ui:{itemSelector:l?null:{index:i,zone:o}}}):v({type:"setUi",ui:{itemSelector:{index:i,zone:o}}}))},[i,o,n,l,m]),ei=(0,rk.useCallback)(()=>{let{nodes:e,zones:t}=A.getState().state.indexes,r=e[n],i=(null==r?void 0:r.parentId)?e[null==r?void 0:r.parentId]:null;if(!i||!r.parentId)return;let o=`${i.parentId}:${i.zone}`,a=t[o].contentIds.indexOf(r.parentId);v({type:"setUi",ui:{itemSelector:{zone:o,index:a}}})},[y,z]),eo=(0,rk.useCallback)(()=>{v({type:"duplicate",sourceIndex:i,sourceZone:o})},[i,o]),ea=(0,rk.useCallback)(()=>{v({type:"remove",index:i,zone:o})},[i,o]),[el,es]=(0,rk.useState)(!1),ec=cp(uu,e=>e.hoveringComponent===n);(0,rk.useEffect)(()=>{if(!F.current)return;let e=F.current,t=e=>{E.getState().draggedItem?O?es(!0):es(!1):es(!0),e.stopPropagation()},r=e=>{e.stopPropagation(),es(!1)};return e.setAttribute("data-puck-component",n),e.setAttribute("data-puck-dnd",n),e.style.position="relative",e.addEventListener("click",en),e.addEventListener("mouseover",t),e.addEventListener("mouseout",r),()=>{e.removeAttribute("data-puck-component"),e.removeAttribute("data-puck-dnd"),e.removeEventListener("click",en),e.removeEventListener("mouseover",t),e.removeEventListener("mouseout",r)}},[F.current,en,I,o,n,O,p]);let[eu,ed]=(0,rk.useState)(!1),[ep,eh]=(0,rk.useState)(!0),[ef,em]=(0,rk.useTransition)();(0,rk.useEffect)(()=>{em(()=>{el||ec||l?(X(),ed(!0),ev(!1)):ed(!1)})},[el,ec,l,_]);let[eg,ev]=(0,rk.useState)(!1),e_=uh(e=>{e?em(()=>{Y(),eh(!0)}):eh(!1)});(0,rk.useEffect)(()=>{O&&ev(!0)},[O]),(0,rk.useEffect)(()=>{if(eg)return e_()},[eg,e_]),(0,rk.useEffect)(()=>{if(!ep||!(l||O))return;let e=F.current;if(!e)return;let t=e.ownerDocument,r=t.defaultView;if(!r)return;b.current=0,X();let n=()=>X(),i=()=>X();t.addEventListener("scroll",n,!0),r.addEventListener("resize",i);let o=0,a=e=>{if(e-b.current>=100){b.current=e;let t=F.current;if(t){let e=t.getBoundingClientRect(),r=U.current;(!r||Math.abs(e.x-r.x)>.5||Math.abs(e.y-r.y)>.5||Math.abs(e.width-r.width)>.5||Math.abs(e.height-r.height)>.5)&&(U.current=e,X())}}o=requestAnimationFrame(a)};return o=requestAnimationFrame(a),()=>{t.removeEventListener("scroll",n,!0),r.removeEventListener("resize",i),cancelAnimationFrame(o)}},[ep,l,O,X]);let eb=(0,rk.useCallback)(e=>{if(e&&e.ownerDocument.defaultView){let t=e.getBoundingClientRect(),r=t.x<0,n=t.y;r&&(e.style.transformOrigin="left top",e.style.left="0px"),n<0&&(e.style.top="12px",r||(e.style.transformOrigin="right top"))}},[f]),ex=(0,rk.useRef)(null);(0,rk.useEffect)(()=>{eb(ex.current)},[ex.current,eb]),(0,rk.useEffect)(()=>{if(d)return void L(d);if(F.current){let e=window.getComputedStyle(F.current);if("inline"===e.display||"inline-block"===e.display)return void L("x")}L(u)},[F,d,u]);let ey=(0,rO.useMessage)("action-selectparent"),ek=(0,rO.useMessage)("action-duplicate"),ew=(0,rO.useMessage)("action-delete"),eS=(0,rk.useMemo)(()=>(null==y?void 0:y.areaId)&&(null==y?void 0:y.areaId)!=="root"&&(0,rF.jsx)(rO.ActionBar.Action,{onClick:ei,label:ey,children:(0,rF.jsx)(rO.CornerLeftUp,{size:16})}),[null==y?void 0:y.areaId,ey]),ej=(0,rk.useMemo)(()=>(0,rB.__spreadProps)((0,rB.__spreadValues)({},y),{areaId:n,zoneCompound:o,index:i,depth:t+1,registerLocalZone:S,unregisterLocalZone:j}),[y,n,o,i,t,S,j]),eI=(0,rO.useAppStore)(e=>{var t;return(null==(t=e.currentRichText)?void 0:t.inlineComponentId)===n?e.currentRichText:null}),ez=C.duplicate||C.delete;return(0,rF.jsxs)(up,{value:ej,children:[ep&&eu&&(0,l_.createPortal)((0,rF.jsxs)("div",{className:uS({isSelected:l,isDragging:O,hover:el||ec}),style:(0,rB.__spreadValues)({},$),"data-puck-overlay":!0,children:[s,a&&(0,rF.jsx)("div",{className:uS("loadingOverlay"),children:(0,rF.jsx)(rO.Loader,{})}),(0,rF.jsx)("div",{className:uS("actionsOverlay"),style:{top:52/f},children:(0,rF.jsx)("div",{className:uS("actions"),style:{transform:`scale(${1/f}`,top:-44/f,right:0,paddingLeft:8,paddingRight:8},ref:ex,children:(0,rF.jsxs)(et,{parentAction:eS,label:c,children:[eI&&(0,rF.jsxs)(rF.Fragment,{children:[(0,rF.jsx)(rg.LoadedRichTextMenu,{editor:eI.editor,field:eI.field,inline:!0,readOnly:!1}),ez&&(0,rF.jsx)(rO.ActionBar.Separator,{})]}),C.duplicate&&(0,rF.jsx)(rO.ActionBar.Action,{onClick:eo,label:ek,children:(0,rF.jsx)(rO.Copy,{className:uS("actionsAction")})}),C.delete&&(0,rF.jsx)(rO.ActionBar.Action,{onClick:ea,label:ew,children:(0,rF.jsx)(rO.Trash,{className:uS("actionsAction")})})]})})}),(0,rF.jsx)("div",{className:uS("overlayWrapper"),children:(0,rF.jsx)(er,{componentId:n,componentType:r,hover:el,isSelected:l,children:(0,rF.jsx)("div",{className:uS("overlay")})})})]}),V||document.body),e(R)]})};(0,rB.init_react_import)();var uC={DropZone:"_DropZone_wc2ks_1","DropZone--hasChildren":"_DropZone--hasChildren_wc2ks_11","DropZone--isAreaSelected":"_DropZone--isAreaSelected_wc2ks_24","DropZone--hoveringOverArea":"_DropZone--hoveringOverArea_wc2ks_25","DropZone--isRootZone":"_DropZone--isRootZone_wc2ks_25","DropZone-item":"_DropZone-item_wc2ks_39","DropZone-linePlaceholder":"_DropZone-linePlaceholder_wc2ks_43","DropZone-hitbox":"_DropZone-hitbox_wc2ks_55","DropZone--isEnabled":"_DropZone--isEnabled_wc2ks_63","DropZone--isAnimating":"_DropZone--isAnimating_wc2ks_74"};(0,rB.init_react_import)();var uE=(e,{allow:t,disallow:r})=>{if(!e)return!0;let n=new Set(t),i=new Set(r);return r?(i.has(e)&&n.has(e)&&i.delete(e),!i.has(e)):!t||n.has(e)};(0,rB.init_react_import)(),(0,rB.init_react_import)();var uA={Drawer:"_Drawer_1n90m_1","Drawer-draggable":"_Drawer-draggable_1n90m_8","Drawer-draggableBg":"_Drawer-draggableBg_1n90m_12","DrawerItem-draggable":"_DrawerItem-draggable_1n90m_22","DrawerItem--disabled":"_DrawerItem--disabled_1n90m_38",DrawerItem:"_DrawerItem_1n90m_22","Drawer--isDraggingFrom":"_Drawer--isDraggingFrom_1n90m_48","DrawerItem-name":"_DrawerItem-name_1n90m_72"};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var uP=class{constructor(e,t){var r;this.scaleFactor=1,this.frameEl=null,this.frameRect=null,this.target=e,this.original=t,this.frameEl=document.querySelector("iframe#preview-frame"),this.frameEl&&(this.frameRect=this.frameEl.getBoundingClientRect(),this.scaleFactor=this.frameRect.width/((null==(r=this.frameEl.contentWindow)?void 0:r.innerWidth)||1))}get x(){return this.original.x}get y(){return this.original.y}get global(){return document!==this.target.ownerDocument&&this.frameRect?{x:this.x*this.scaleFactor+this.frameRect.left,y:this.y*this.scaleFactor+this.frameRect.top}:this.original}get frame(){return document===this.target.ownerDocument&&this.frameRect?{x:(this.x-this.frameRect.left)/this.scaleFactor,y:(this.y-this.frameRect.top)/this.scaleFactor}:this.original}};(0,rB.init_react_import)();var uL="u">typeof PointerEvent?PointerEvent:Event,uM=class extends uL{constructor(e,t){super(e,t),this._originalTarget=null,this.originalTarget=t.originalTarget}set originalTarget(e){this._originalTarget=e}get originalTarget(){return this._originalTarget}};(0,rB.init_react_import)(),(0,rB.init_react_import)();var uN=(e,{isDraggingBetweenSlots:t=!1,isNewComponent:r=!1}={})=>"auto"===e?t||r?"static":"fluid":e;(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var uT=(e,t)=>{let r=e.indexes.nodes[t];if(!r)return;let n=`${r.parentId}:${r.zone}`,i=e.indexes.zones[n].contentIds.indexOf(t);return{zone:n,index:i}};function uO(e,t,r="force",n=!1,i){return(0,rB.__async)(this,null,function*(){let o=yield t().resolveComponentData(e,r);if(!o.didChange&&!n)return;let a=uT(t().state,o.node.props.id);a?t().dispatch({type:"replace",data:(0,rx.toComponent)(o.node),destinationIndex:a.index,destinationZone:a.zone,ui:i}):console.warn(`Warning: Could not find component with id "${e.props.id}" to resolve its data. Component may have been removed or the id is invalid.`)})}(0,rB.init_react_import)();var uD=(e,t,r,n)=>(0,rB.__async)(null,null,function*(){var i,o,a;(0,n.getState().dispatch)({type:"move",sourceIndex:t.index,sourceZone:null!=(i=t.zone)?i:rx.rootDroppableId,destinationIndex:r.index,destinationZone:null!=(o=r.zone)?o:rx.rootDroppableId,recordHistory:!1});let l=null==(a=n.getState().state.indexes.nodes[e])?void 0:a.data;l&&(yield uO(l,n.getState,"move"))});function uB(e){return e?function e(t){return t?t.getAttribute("dir")||e(t.parentElement):"ltr"}(e):"ltr"}(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var uF=(e,t,r)=>Math.max(t,Math.min(r,e)),uR=(e,t)=>{let r=uF(e.x,Math.min(t.x1,t.x2),Math.max(t.x1,t.x2)),n=uF(e.y,Math.min(t.y1,t.y2),Math.max(t.y1,t.y2));return Math.hypot(e.x-r,e.y-n)};(0,rB.init_react_import)();var uV=(e,t,r=t.getComputedStyle(e))=>{let n=r.display,i="rtl"===uB(e);if("flex"===n||"inline-flex"===n){let e=r.flexDirection;if(e.startsWith("row")){let t="row-reverse"===e;return{axis:"x",reversed:i?!t:t}}return{axis:"y",reversed:"column-reverse"===e}}if("grid"===n||"inline-grid"===n){let e;return r.gridAutoFlow.startsWith("column")||((e=r.gridTemplateColumns.replace(/\[[^\]]*\]/g," ").trim())&&"none"!==e?e.split(/\s+/).length:0)>1?{axis:"x",reversed:i}:{axis:"y",reversed:!1}}return{axis:"y",reversed:!1}},uH=({axis:e,reversed:t})=>{let r="x"===e,n=t?-1:1;return{horizontal:r,reversed:t,forward:n,start:e=>r?t?e.right:e.left:t?e.bottom:e.top,end:e=>r?t?e.left:e.right:t?e.top:e.bottom,isBefore:(e,t)=>n>0?e<=t:e>=t}},uW=(e,t,r)=>{var n,i;let o=e.ownerDocument.defaultView;if(!o)return null;let a=new Map(r.map((e,t)=>[e,t])),l=Array.from(e.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(e=>{var t,r;return{index:null!=(r=a.get(null!=(t=e.getAttribute("data-puck-component"))?t:""))?r:-1,el:e}}).filter(e=>-1!==e.index).sort((e,t)=>e.index-t.index).map(({index:e,el:t})=>({index:e,rect:t.getBoundingClientRect()}));if(0===l.length)return 0;let{horizontal:s,reversed:c,start:u,end:d}=uH(uV(e,o)),p=(e,t,r,n=[r])=>{let i=1/0,o=-1/0;for(let e of n)i=Math.min(i,s?e.top:e.left),o=Math.max(o,s?e.bottom:e.right);return s?{index:e,x1:t,x2:t,y1:r.top,y2:r.bottom,laneStart:i,laneEnd:o}:{index:e,x1:r.left,x2:r.right,y1:t,y2:t,laneStart:i,laneEnd:o}},h=[],f=(e,t,r)=>p(e,"before"===r?u(t):d(t),t);for(let e=0;e<=l.length;e++){let t=l[e-1],r=l[e];if(r)if(t)if(r.index-t.index>1)h.push(f(t.index+1,t.rect,"after")),h.push(f(r.index,r.rect,"before"));else if(c?d(t.rect)<u(r.rect):d(t.rect)>u(r.rect))h.push(f(r.index,r.rect,"before")),h.push(f(r.index,t.rect,"after"));else{let e=(d(t.rect)+u(r.rect))/2;h.push(p(r.index,e,r.rect,[t.rect,r.rect]))}else h.push(f(r.index,r.rect,"before"));else h.push(f(t.index+1,t.rect,"after"))}let m=s?t.y:t.x,g=null,v=1/0,_=null,b=1/0;for(let e of h){let r=uR(t,e);r<v&&(v=r,g=e),m>=e.laneStart&&m<=e.laneEnd&&r<b&&(b=r,_=e)}return null!=(i=null==(n=null!=_?_:g)?void 0:n.index)?i:null};(0,rB.init_react_import)();var u$=(e,t)=>{var r;let n=document.querySelector("iframe#preview-frame");if(!n||e.ownerDocument!==n.contentDocument)return t;let i=n.getBoundingClientRect(),o=i.width/((null==(r=n.contentWindow)?void 0:r.innerWidth)||1);return o>0?{x:(t.x-i.left)/o,y:(t.y-i.top)/o}:t},uq=(0,rk.createContext)({dragListeners:{}}),uU=({children:e,disableAutoScroll:t,behavior:r="auto"})=>{let n,i,o,a,l,s,c,u,d=(0,rO.useAppStore)(e=>e.dispatch),p=(0,rO.useAppStore)(e=>e.instanceId),h=(0,rO.useAppStoreApi)(),f=(0,rk.useRef)(null),m=(n=(0,rk.useRef)(null),(0,rk.useCallback)(e=>{cC.setState({fallbackEnabled:!1});let t=(0,rD.generateId)();n.current=t,setTimeout(()=>{n.current===t&&(cC.setState({fallbackEnabled:!0}),e.collisionObserver.forceUpdate(!0))},100)},[])),[g]=(0,rk.useState)(()=>{let e=new Map;return(0,rH.createStore)(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(t,r)=>{e.set(t,r)},unregisterRootVirtualizer:t=>{e.delete(t)},scrollToComponent:t=>{let r=Array.from(e.values());if(r.length>0)for(let e of r){let r=e.resolveIndex(t);r<0||e.virtualizer.scrollToIndex(r,{behavior:"auto",align:"auto"})}else{let e=uf(),r=null==e?void 0:e.querySelector(ug(t));null==r||r.scrollIntoView({behavior:"smooth"})}}}))}),v=(0,rk.useCallback)(e=>{let{zoneDepthIndex:t={},areaDepthIndex:r={}}=g.getState()||{},n=Object.keys(t).length>0,i=Object.keys(r).length>0,o=!1,a=!1;return e.zone&&!t[e.zone]?o=!0:!e.zone&&n&&(o=!0),e.area&&!r[e.area]?a=!0:!e.area&&i&&(a=!0),{zoneChanged:o,areaChanged:a}},[g]),_=(0,rk.useCallback)((e,t)=>{let{zoneChanged:r,areaChanged:n}=v(e);(r||n)&&(g.setState({zoneDepthIndex:e.zone?{[e.zone]:!0}:{},areaDepthIndex:e.area?{[e.area]:!0}:{}}),m(t),setTimeout(()=>{t.collisionObserver.forceUpdate(!0)},50),f.current=null)},[g]),b=(0,sq.useDebouncedCallback)(_,100),y=()=>{b.cancel(),f.current=null};(0,rk.useEffect)(()=>{},[]);let[k]=(0,rk.useState)(()=>[...t?lh.filter(e=>e!==a5):lh,(({onChange:e},t)=>class extends iN{constructor(r,n){if(super(r),"u"<typeof window)return;this.registerEffect(()=>{var n;let i,o,a=(n=n=>{let i=new uP(n instanceof uM&&n.originalTarget||n.target,{x:n.clientX,y:n.clientY});document.elementsFromPoint(i.global.x,i.global.y).some(e=>e.id===t)&&e(((e,t)=>{var r;let n=((e,t)=>{let r=[],n=e.target.ownerDocument.elementsFromPoint(e.x,e.y),i=n.find(e=>e.getAttribute("data-puck-preview")),o=n.find(e=>e.getAttribute("data-puck-drawer"));if(o&&(n=[o]),i){let t=uf();t&&(n=t.elementsFromPoint(e.frame.x,e.frame.y))}if(n)for(let i=0;i<n.length;i++){let o=n[i],a=o.getAttribute("data-puck-dropzone"),l=o.getAttribute("data-puck-dnd"),s=o.hasAttribute("data-puck-dnd-void");if((a||l)&&!s){let t=o.getBoundingClientRect(),r={left:t.left+6,right:t.right-6,top:t.top+6,bottom:t.bottom-6};if(e.frame.x<r.left||e.frame.x>r.right||e.frame.y>r.bottom||e.frame.y<r.top)continue}if(a){let e=t.registry.droppables.get(a);e&&r.push(e)}if(l){let e=t.registry.droppables.get(l);e&&r.push(e)}}return r})(e,t);if(n.length>0){let e=n.sort((e,t)=>{let r=e.data,n=t.data;return r.depth>n.depth?1:n.depth>r.depth?-1:0}),i=t.dragOperation.source,o=e.findIndex(e=>e.id===(null==i?void 0:i.id)),a=null==i?void 0:i.id,l=[...e];a&&o>-1&&l.splice(o,1),(l=l.filter(e=>{let t=e.data;if(a&&o>-1&&t.path.indexOf(a)>-1)return!1;if("dropzone"===e.type){let t=e.data;if(!t.isDroppableTarget||t.areaId===a)return!1}else if("component"===e.type&&!e.data.inDroppableZone)return!1;return!0})).reverse();let s=l[0];if(!s)return{zone:null,area:null};let c=s.data,u="containsActiveZone"in c;return{zone:(e=>{let t=null==e?void 0:e.id;if(!e)return null;if("component"===e.type){let r=e.data;t=r.containsActiveZone?null:r.zone}else if("void"===e.type)return"void";return t})(s),area:u&&c.containsActiveZone?l[0].id:null==(r=l[0])?void 0:r.data.areaId}}return{zone:rx.rootDroppableId,area:rx.rootAreaId}})(i,r),r)},o=0,function(...e){let t=performance.now(),r=this;if(t-o>=50)n.apply(r,e),o=t;else{let a;null==i||i(),a=setTimeout(()=>{n.apply(r,e),o=performance.now()},50-(t-o)),i=()=>clearTimeout(a)}}),l=e=>{a(e)};return document.body.addEventListener("pointermove",l,{capture:!0}),()=>{document.body.removeEventListener("pointermove",l,{capture:!0})}})}})({onChange:(e,t)=>{let r=g.getState(),{zoneChanged:n,areaChanged:i}=v(e),o=t.dragOperation.status.dragging;if(i||n){let t={},r={};e.zone&&(t={[e.zone]:!0}),e.area&&(r={[e.area]:!0}),g.setState({nextZoneDepthIndex:t,nextAreaDepthIndex:r})}if("void"!==e.zone&&(null==r?void 0:r.zoneDepthIndex.void))return void _(e,t);if(i){if(o){let r=f.current;r&&r.area===e.area&&r.zone===e.zone||(y(),b(e,t),f.current=e)}else y(),_(e,t);return}n&&_(e,t),y()}},p)]),w=ck(),[S,j]=(0,rk.useState)({}),I=(0,rk.useRef)(null),z=(0,rk.useRef)(void 0),{getTargetIndex:C,setActive:E,startScrollTracking:A,stopScrollTracking:P,update:L}=(i=(0,rO.useAppStoreApi)(),o=(0,rk.useRef)(null),a=(0,rk.useCallback)(e=>{var t;let r=null==(t=uf())?void 0:t.querySelector("[data-puck-entry]");e?null==r||r.setAttribute("data-puck-line-drag","true"):null==r||r.removeAttribute("data-puck-line-drag")},[]),l=(0,rk.useCallback)((e,t)=>{var r;let n=null==(r=uf())?void 0:r.querySelector(uv(e));if(!n)return null;let o=u$(n,t.dragOperation.position.current);return uW(n,o,uy(i.getState().state,e))},[i]),s=(0,rk.useCallback)(e=>{var t;let{previewIndex:r={}}=g.getState(),n=Object.values(r).find(e=>null==e?void 0:e.linePlaceholder);if(!n)return;let o=null==(t=uf())?void 0:t.querySelector(uv(n.zone));if(!o)return;let a=u$(o,e.dragOperation.position.current),l=o.getBoundingClientRect();if(!(a.x>=l.left&&a.x<=l.right&&a.y>=l.top&&a.y<=l.bottom))return;let s=uW(o,a,uy(i.getState().state,n.zone));null!==s&&s!==n.index&&g.setState({previewIndex:(0,rB.__spreadProps)((0,rB.__spreadValues)({},r),{[n.zone]:(0,rB.__spreadProps)((0,rB.__spreadValues)({},n),{index:s})})})},[i,g]),c=(0,rk.useCallback)(()=>{var e;null==(e=o.current)||e.call(o),o.current=null},[]),u=(0,rk.useCallback)(e=>{c();let t=uf();if(!t)return;let r=null,n=()=>{null===r&&(r=requestAnimationFrame(()=>{r=null,s(e)}))};t.addEventListener("scroll",n,{capture:!0,passive:!0}),o.current=()=>{null!==r&&cancelAnimationFrame(r),t.removeEventListener("scroll",n,{capture:!0})}},[c,s]),(0,rk.useEffect)(()=>c,[c]),{getTargetIndex:l,setActive:a,startScrollTracking:u,stopScrollTracking:c,update:s}),M=(0,rk.useMemo)(()=>({mode:"edit",areaId:"root",depth:0}),[]);return(0,rF.jsx)(uq.Provider,{value:{dragListeners:S,setDragListeners:j},children:(0,rF.jsx)(lB,{plugins:k,sensors:w,onDragEnd:(e,t)=>{var r,n;let i;P();let o=null==(r=uf())?void 0:r.querySelector("[data-puck-entry]");null==o||o.removeAttribute("data-puck-dragging");let{source:a,target:l}=e.operation;if(!a){E(!1),g.setState({draggedItem:null});return}let{zone:s,index:c}=a.data,{previewIndex:u={}}=g.getState()||{},p=null!=(n=Object.values(u).find(e=>(null==e?void 0:e.props.id)===a.id&&!e.ghost))?n:null,f=!e.canceled&&(null==l?void 0:l.type)!=="void"&&(null==p?void 0:p.linePlaceholder)?(({zones:e,itemId:t,targetZone:r,getExpectedOrder:n})=>{let i=uf();if(!i||ub(i))return()=>{};let o=Array.from(new Set(e)).map(e=>`${uv(e)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(", "),a=()=>{let e=new Map;return i.querySelectorAll(o).forEach(r=>{let n=r.getAttribute("data-puck-component");n&&n!==t&&e.set(n,{el:r,rect:r.getBoundingClientRect()})}),e},l=a(),s=n();return()=>{ux(i,{zones:e,itemId:t,targetZone:r,getExpectedOrder:n,initialExpectedOrder:s},()=>{a().forEach(({el:e,rect:t},r)=>{var n;let i=null==(n=l.get(r))?void 0:n.rect;if(!i)return;let o=i.x-t.x,a=i.y-t.y;1>Math.abs(o)&&1>Math.abs(a)||e.animate({translate:[`${o}px ${a}px 0`,"0px 0px 0"]},u_)})})}})({zones:z.current?[z.current.zone,p.zone]:[p.zone],itemId:"move"===p.type?p.props.id:void 0,targetZone:p.zone,getExpectedOrder:()=>uy(h.getState().state,p.zone)}):null;i=no(()=>{"idle"===a.status&&((()=>{var r,n,i,o,a;if(E(!1),g.setState({draggedItem:null}),e.canceled||(null==l?void 0:l.type)==="void"){g.setState({previewIndex:{}}),null==(r=S.dragend)||r.forEach(r=>{r(e,t)}),d({type:"setUi",ui:{itemSelector:null,isDragging:!1}});return}let u=p&&p.linePlaceholder&&z.current&&p.zone===z.current.zone&&p.index>z.current.index?p.index-1:null!=(n=null==p?void 0:p.index)?n:c;if(p){if(g.setState({previewIndex:{}}),"insert"===p.type){let e,t,r;e=p.componentType,t=p.zone,r=p.index,(0,rB.__async)(null,null,function*(){let{getState:n}=h,i=(0,rD.generateId)(e),o={type:"insert",componentType:e,destinationIndex:r,destinationZone:t,id:i},a=n().state,l=(0,rD.insertAction)(a,o,n()),s=n().dispatch;s((0,rB.__spreadProps)((0,rB.__spreadValues)({},o),{recordHistory:!0}));let c={index:r,zone:t};s({type:"setUi",ui:{itemSelector:c}});let u=(0,rD.getItem)(c,l);u&&(yield uO(u,n,"insert"))})}else z.current&&uD(p.props.id,z.current,(0,rB.__spreadProps)((0,rB.__spreadValues)({},p),{index:u}),h);null==f||f()}let m=(null==(i=z.current)?void 0:i.zone)!==(null==p?void 0:p.zone)||(null==(o=z.current)?void 0:o.index)!==u;d({type:"setUi",ui:{itemSelector:p?{index:u,zone:p.zone}:{index:c,zone:s},isDragging:!1},recordHistory:m}),null==(a=S.dragend)||a.forEach(r=>{r(e,t)})})(),null==i||i())})},onDragMove:(e,t)=>{var r;L(t),null==(r=S.dragmove)||r.forEach(r=>{r(e,t)})},onDragOver:(e,t)=>{var n,i,o,a,l,s;if(e.preventDefault(),!(null==(n=g.getState())?void 0:n.draggedItem))return;y();let{source:c,target:u}=e.operation;if(!u||!c||"void"===u.type)return;let[d]=c.id.split(":"),[p]=u.id.split(":"),f=c.data,m=f.zone,v=f.index,_="",b=0;if("component"===u.type){let e=u.data;_=e.zone;let r=null==(i=t.collisionObserver.collisions[0])?void 0:i.data;b=cL({position:cP(null==r?void 0:r.direction,uB(u.element)),sourceIndex:v,targetIndex:e.index,isSameZone:m===_})}else _=u.id.toString(),b=0;let k=(null==(o=h.getState().state.indexes.nodes[u.id])?void 0:o.path)||[];if(!(p===d||k.find(e=>{let[t]=e.split(":");return t===d}))){if("new"===I.current){let e="static"===uN(r,{isNewComponent:!0});e&&(b=null!=(a=C(_,t))?a:b),E(e),g.setState({previewIndex:{[_]:{componentType:f.componentType,type:"insert",index:b,zone:_,element:c.element,props:{id:c.id.toString()},linePlaceholder:e}}})}else{z.current||(z.current={zone:f.zone,index:f.index});let e=(0,rD.getItem)(z.current,h.getState().state);if(e){let n=z.current.zone,i=n!==_,o="static"===uN(r,{isDraggingBetweenSlots:i});o&&(b=null!=(l=C(_,t))?l:b),E(o);let a={[_]:{componentType:f.componentType,type:"move",index:b,zone:_,props:e.props,element:c.element,linePlaceholder:o}};if(o&&i){let t=g.getState().previewIndex[n],r=z.current.index;t&&!t.linePlaceholder&&(r=t.index),a[n]={componentType:f.componentType,type:"move",index:r,zone:n,props:e.props,element:c.element,ghost:!0}}g.setState({previewIndex:a})}}null==(s=S.dragover)||s.forEach(r=>{r(e,t)})}},onDragStart:(e,t)=>{var n;"fluid"!==r&&A(t);let{source:i}=e.operation;if((null==i?void 0:i.type)==="component"){let e=i.data,t={zone:e.zone,index:e.index};z.current=t;let n=(0,rD.getItem)(t,h.getState().state);if(n){let t="static"===uN(r);E(t),g.setState({previewIndex:{[e.zone]:{componentType:e.componentType,type:"move",index:e.index,zone:e.zone,props:n.props,element:i.element,linePlaceholder:t}}})}}null==(n=S.dragstart)||n.forEach(r=>{r(e,t)})},onBeforeDragStart:e=>{var t,r,n,i;I.current=(null==(t=e.operation.source)?void 0:t.type)==="drawer"?"new":"existing",z.current=void 0,g.setState({draggedItem:e.operation.source}),(null==(r=h.getState().selectedItem)?void 0:r.props.id)!==(null==(n=e.operation.source)?void 0:n.id)?d({type:"setUi",ui:{itemSelector:null,isDragging:!0},recordHistory:!1}):d({type:"setUi",ui:{isDragging:!0},recordHistory:!1});let o=null==(i=uf())?void 0:i.querySelector("[data-puck-entry]");null==o||o.setAttribute("data-puck-dragging","true"),E(!1)},children:(0,rF.jsx)(ud,{store:g,children:(0,rF.jsx)(up,{value:M,children:e})})})})},uZ=({children:e,disableAutoScroll:t,behavior:r})=>"LOADING"===(0,rO.useAppStore)(e=>e.status)?e:(0,rF.jsx)(uU,{disableAutoScroll:t,behavior:r,children:e}),uY=(0,rb.get_class_name_factory_default)("Drawer",uA),uX=(0,rb.get_class_name_factory_default)("DrawerItem",uA),uG=({children:e,name:t,label:r,dragRef:n,isDragDisabled:i})=>{let o=(0,rk.useMemo)(()=>e||(({children:e})=>(0,rF.jsx)("div",{className:uX("default"),children:e})),[e]);return(0,rF.jsx)("div",{className:uX({disabled:i}),ref:n,onMouseDown:e=>e.preventDefault(),"data-testid":n?`drawer-item:${t}`:"","data-puck-drawer-item":!0,children:(0,rF.jsx)(o,{name:t,children:(0,rF.jsx)("div",{className:uX("draggableWrapper"),children:(0,rF.jsxs)("div",{className:uX("draggable"),children:[(0,rF.jsx)("div",{className:uX("name"),children:null!=r?r:t}),(0,rF.jsx)("div",{className:uX("icon"),children:(0,rF.jsx)(cv,{})})]})})})})},uK=({children:e,name:t,label:r,id:n,isDragDisabled:i})=>{let o=uk((0,rk.useContext)(uu)),{ref:a}=function(e){let{disabled:t,data:r,element:n,handle:i,id:o,modifiers:a,sensors:l,plugins:s}=e,c=lR(t=>new lg(lz(lM({},e),lC({register:!1,handle:lb(i),element:lb(n)})),t)),u=ly(c,lV);return lS(o,()=>c.id=o),lj(i,e=>c.handle=e),lj(n,e=>c.element=e),lS(r,()=>r&&(c.data=r)),lS(t,()=>c.disabled=!0===t),lS(l,()=>c.sensors=l),lS(a,()=>c.modifiers=a,void 0,nA),lS(s,()=>c.plugins=s,void 0,nA),lS(e.alignment,()=>c.alignment=e.alignment),{draggable:u,get isDragging(){return u.isDragging},get isDropping(){return u.isDropping},get isDragSource(){return u.isDragSource},handleRef:(0,rk.useCallback)(e=>{c.handle=null!=e?e:void 0},[c]),ref:(0,rk.useCallback)(e=>{var t,r;(e||null==(t=c.element)||!t.isConnected||(null==(r=c.manager)?void 0:r.dragOperation.status.idle))&&(c.element=null!=e?e:void 0)},[c])}}({id:n,data:{componentType:t},disabled:i,type:"drawer",plugins:[aK.configure({dropAnimation:o})]});return(0,rF.jsxs)("div",{className:uY("draggable"),children:[(0,rF.jsx)("div",{className:uY("draggableBg"),children:(0,rF.jsx)(uG,{name:t,label:r,children:e})}),(0,rF.jsx)("div",{className:uY("draggableFg"),children:(0,rF.jsx)(uG,{name:t,label:r,dragRef:a,isDragDisabled:i,children:e})})]})},uJ=({children:e,droppableId:t,direction:r})=>{t&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),r&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");let n=ue(),{ref:i}=l2({id:n,type:"void",collisionPriority:0});return(0,rF.jsx)("div",{className:uY(),ref:i,"data-puck-dnd":n,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:e})};uJ.Item=({name:e,children:t,id:r,label:n,index:i,isDragDisabled:o})=>{let a=r||e,[l,s]=(0,rk.useState)((0,rD.generateId)(a));return void 0!==i&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),!function(e,t,r=[]){let{setDragListeners:n}=(0,rk.useContext)(uq);(0,rk.useEffect)(()=>{n&&n(r=>(0,rB.__spreadProps)((0,rB.__spreadValues)({},r),{[e]:[...r[e]||[],t]}))},r)}("dragend",()=>{s((0,rD.generateId)(a))},[a]),(0,rF.jsx)("div",{children:(0,rF.jsx)(uK,{name:e,label:n,id:l,isDragDisabled:o,children:t})},l)},(0,rB.init_react_import)();var uQ=(e,t)=>e.getState().state.indexes.zones[t].contentIds.length;(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var u0=({componentId:e,zone:t})=>{let r=(0,rO.useAppStore)(e=>e.config),n=(0,rO.useAppStore)(e=>e.metadata),i=(0,rO.useAppStore)(rV(r=>{var n,i;let o=r.state.indexes;return(null!=(i=null==(n=o.zones[`${e}:${t}`])?void 0:n.contentIds)?i:[]).map(e=>o.nodes[e].flatData)}));return(0,rF.jsx)(rL,{content:i,zone:t,config:r,metadata:n})};function u1(e,t,r,n,i){let o=(0,rk.useRef)(null),a=(0,rk.useRef)(null),l=(0,rk.useRef)(t.props),s=(0,rk.useMemo)(()=>rj(r,n,i),[r,n,i]),c=(0,rk.useMemo)(()=>{var r,n,i,c;let u,d="root"===t.type?e.root:null==(r=e.components)?void 0:r[t.type],p=null!=(n=null==d?void 0:d.fields)?n:{},h=o.current!==s,f=!1;if(!a.current||h)for(let e in t.props)(null==(i=p[e])?void 0:i.type)==="slot"&&(f=!0);else for(let e of(u=["id"],new Set([...Object.keys(t.props),...Object.keys(a.current)])))t.props[e]!==a.current[e]&&(u.push(e),(null==(c=p[e])?void 0:c.type)==="slot"&&(f=!0));let m=(0,rx.mapFields)(t,s,e,!1,f,u).props;return a.current=t.props,o.current=s,l.current=u?(0,rB.__spreadValues)((0,rB.__spreadValues)({},l.current),m):m,l.current},[e,t,s]);return(0,rk.useMemo)(()=>(0,rB.__spreadValues)((0,rB.__spreadValues)({},t.props),c),[t.props,c])}(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var u2=(e,t={})=>{if(!e)return;let{disableDrag:r=!1,disableDragOnFocus:n=!0}=t,i=e=>{e.stopPropagation()};e.addEventListener("mouseover",i,{capture:!0});let o=()=>{setTimeout(()=>{e.addEventListener("pointerdown",i,{capture:!0})},200)},a=()=>{e.removeEventListener("pointerdown",i,{capture:!0})};return r?e.addEventListener("pointerdown",i,{capture:!0}):n&&(e.addEventListener("focus",o,{capture:!0}),e.addEventListener("blur",a,{capture:!0})),e.setAttribute("data-puck-overlay-portal","true"),()=>{e.removeEventListener("mouseover",i,{capture:!0}),r?e.removeEventListener("pointerdown",i,{capture:!0}):n&&(e.removeEventListener("focus",o,{capture:!0}),e.removeEventListener("blur",a,{capture:!0})),e.removeAttribute("data-puck-overlay-portal")}};(0,rB.init_react_import)();var u4=(0,rb.get_class_name_factory_default)("InlineTextField",{InlineTextField:"_InlineTextField_104qp_1"}),u3=(0,rk.memo)(({propPath:e,componentId:t,value:r,isReadOnly:n,opts:i={}})=>{var o;let a=(0,rk.useRef)(null),l=(0,rO.useAppStoreApi)(),s=null!=(o=i.disableLineBreaks)&&o;(0,rk.useEffect)(()=>{let n=l.getState(),i=n.state.indexes.nodes[t].data;if(!n.getComponentConfig(i.type))throw Error(`InlineTextField Error: No config defined for ${i.type}`);if(a.current){let n=null!=r?r:"";n!==a.current.innerText&&a.current.replaceChildren(n);let i=u2(a.current),o=r=>(0,rB.__async)(null,null,function*(){let n=l.getState().state.indexes.nodes[t],i=r.target.innerText;s&&(i=i.replaceAll(/\n/gm,""));let o=cn(n.data.props,e,i);yield uO((0,rB.__spreadProps)((0,rB.__spreadValues)({},n.data),{props:o}),l.getState,"replace",!0)});return a.current.addEventListener("input",o),()=>{var e;null==(e=a.current)||e.removeEventListener("input",o),null==i||i()}}},[l,a.current,r,s]);let[c,u]=(0,rk.useState)(!1),[d,p]=(0,rk.useState)(!1);return(0,rF.jsx)("span",{className:u4(),ref:a,contentEditable:c||d?"plaintext-only":"false",onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let r=uT(l.getState().state,t);l.getState().setUi({itemSelector:r})},onKeyDown:e=>{e.stopPropagation(),(s&&"Enter"===e.key||n)&&e.preventDefault()},onKeyUp:e=>{e.stopPropagation(),e.preventDefault()},onMouseOverCapture:()=>u(!0),onMouseOutCapture:()=>u(!1),onFocus:()=>p(!0),onBlur:()=>p(!1)})});(0,rB.init_react_import)();var u6=(0,rk.lazy)(()=>e.A(67900).then(e=>({default:e.Editor}))),u5=(0,rk.lazy)(()=>e.A(2728).then(e=>({default:e.RichTextRender}))),u8=(0,rk.memo)(({value:e,componentId:t,propPath:r,field:n,id:i})=>{let o=(0,rk.useRef)(null),a=(0,rO.useAppStoreApi)();(0,rk.useEffect)(()=>{if(!o.current)return;let e=u2(o.current,{disableDragOnFocus:!0});return()=>null==e?void 0:e()},[o.current]);let l=(0,rk.useCallback)((e,n)=>(0,rB.__async)(null,null,function*(){let i=a.getState().state.indexes.nodes[t],o=cn(i.data.props,r,e);yield uO((0,rB.__spreadProps)((0,rB.__spreadValues)({},i.data),{props:o}),a.getState,"replace",!0,n)}),[a,t,r]),s=(0,rk.useCallback)(e=>{a.setState({currentRichText:{inlineComponentId:t,inline:!0,field:n,editor:e,id:i}})},[n,t]);if(!n.contentEditable)return(0,rF.jsx)(rk.Suspense,{fallback:(0,rF.jsx)(rC,{content:e}),children:(0,rF.jsx)(u5,{content:e,field:n})});let c={content:e,onChange:l,field:n,inline:!0,onFocus:s,id:i,name:r};return(0,rF.jsx)("div",{ref:o,onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let r=uT(a.getState().state,t);a.getState().setUi({itemSelector:r})},children:(0,rF.jsx)(rk.Suspense,{fallback:(0,rF.jsx)(c8,(0,rB.__spreadValues)({},c)),children:(0,rF.jsx)(u6,(0,rB.__spreadValues)({},c))})})});u8.displayName="InlineEditorWrapper",(0,rB.init_react_import)(),(0,rB.init_react_import)();var u7=(0,rk.memo)(({Component:e,componentProps:t})=>(0,rF.jsx)(e,(0,rB.__spreadValues)({},t)),(e,t)=>{let r=!0;return"puck"in e.componentProps&&"puck"in t.componentProps&&(r=(0,sU.deepEqual)(e.componentProps.puck,t.componentProps.puck)),e.Component===t.Component&&function(e,t,r=[]){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;let n=new Set(r),i=Object.keys(e).filter(e=>!n.has(e)),o=Object.keys(t).filter(e=>!n.has(e));if(i.length!==o.length)return!1;for(let r=0;r<i.length;r++){let n=i[r];if(!Object.prototype.hasOwnProperty.call(t,n)||!Object.is(e[n],t[n]))return!1}return!0}(e.componentProps,t.componentProps,["puck"])&&r});(0,rB.init_react_import)();var u9=new Map,de=({contentIds:e,zoneCompound:t,renderItem:r})=>{let n=(0,rO.useAppStore)(e=>{var t,r;return null!=(r=null==(t=e.selectedItem)?void 0:t.props.id)?r:null}),i=uf(),o=(0,rk.useContext)(uu),a=cp(uu,e=>{var t;let r=null==(t=e.draggedItem)?void 0:t.id;return r?String(r):null}),l=cp(uu,e=>{var t,r,n;if(null==(t=e.draggedItem)?void 0:t.id){let[t]=null!=(n=Object.entries(null!=(r=e.previewIndex)?r:{}).find(([,e])=>!(null==e?void 0:e.ghost)))?n:[];return null==t?void 0:t.split(":")[0]}return null}),s=null==i?void 0:i.defaultView,c=(0,rk.useRef)(new Map),u=(0,rO.useAppStoreApi)(),d=(0,rk.useCallback)(t=>{var r,n,i,o;if(!t||"root"===t)return -1;let a=e.indexOf(t);if(a>-1)return a;let l=null!=(i=null==(n=null==(r=u.getState().state.indexes.nodes)?void 0:r[t])?void 0:n.path)?i:[];for(let t=l.length-1;t>=0;t-=1){let r=null==(o=l[t])?void 0:o.split(":")[0];if(!r||"root"===r)continue;let n=e.indexOf(r);if(n>-1)return n}return -1},[u,e]),p=(0,rk.useMemo)(()=>{let e=new Set;return[n,a,l].forEach(t=>{let r=d(t);r>-1&&e.add(r)}),Array.from(e).sort((e,t)=>e-t)},[l,a,d,n]),h=(0,rk.useCallback)(e=>{let t=sQ(e);return p.forEach(e=>{t.includes(e)||t.push(e)}),t.sort((e,t)=>e-t),t},[p]),f=ce({count:e.length,getItemKey:t=>e[t],estimateSize:t=>{var r,n;return r=e[t],null!=(n=u9.get(r))?n:320},getScrollElement:()=>null!=s?s:null,overscan:5,observeElementRect:(e,t)=>s?((e,t)=>{let r=e.scrollElement;if(!r)return;let n=()=>{t({width:r.innerWidth,height:r.innerHeight})};return n(),r.addEventListener("resize",n,s1),()=>{r.removeEventListener("resize",n)}})(e,t):s0(e,t),observeElementOffset:(e,t)=>s?s4(e,t,t=>e.options.horizontal?t.scrollX:t.scrollY):s3(e,t),scrollToFn:(e,t,r)=>s5(e,t,r),rangeExtractor:h,initialOffset:()=>s?s.scrollY:0});(0,rk.useEffect)(()=>(o.getState().registerRootVirtualizer(t,{resolveIndex:e=>d(e),virtualizer:f}),()=>{o.getState().unregisterRootVirtualizer(t)}),[d,f,t,o]);let m=(0,rk.useCallback)(e=>{let t=c.current.get(e);if(t)return t;let r=t=>{if(!t)return;let r=Math.ceil(t.getBoundingClientRect().height)||320;"number"==typeof r&&r>0&&(r<=0||u9.set(e,r))};return c.current.set(e,r),r},[]);(0,rk.useEffect)(()=>{let t=new Set(e);Array.from(c.current.keys()).forEach(e=>{t.has(e)||c.current.delete(e)})},[e]);let g=f.getVirtualItems(),v=f.getTotalSize(),_=(0,rk.useMemo)(()=>{let t=[],n=0,i=-1;g.forEach(o=>{if(!o)return;let a=e[o.index],l=Math.max(o.start-n,0);l>0&&t.push((0,rF.jsx)("div",{style:{height:`${l}px`}},`gap:${i}:${o.index}`)),t.push(r({componentId:a,index:o.index,measureRef:m(a)})),n=o.end,i=o.index});let o=Math.max(v-n,0);return o>0&&t.push((0,rF.jsx)("div",{style:{height:`${o}px`}},`gap:${i}:end`)),t},[v,g,m]);return(0,rF.jsx)(rF.Fragment,{children:_})};(0,rB.init_react_import)();var dt=(0,rb.get_class_name_factory_default)("DropZone",uC),dr="var(--puck-line-placeholder-width, 2px)",dn=({zoneRef:e,contentIds:t,index:r})=>{let[n,i]=(0,rk.useState)();return((0,rk.useLayoutEffect)(()=>{var n,o,a,l;let s,c=e.current,u=null==c?void 0:c.ownerDocument.defaultView;if(!c||!u)return;let d=e=>parseFloat(null!=e?e:"")||0,p=e=>{let r=t[e];if(void 0===r)return;let n=c.querySelector(`:scope > ${ug(r)}:not([data-dnd-dragging])`);if(n)return{el:n,rect:n.getBoundingClientRect()}},h=c.getBoundingClientRect(),f=u.getComputedStyle(c),m=p(r-1),g=p(r),v=null!=g?g:m,{horizontal:_,reversed:b,forward:y,start:k,end:w,isBefore:S}=uH(uV(c,u,f)),j=d(_?f.columnGap:f.rowGap),I=(e,t)=>{var r;return d(null==(r=e?u.getComputedStyle(e):void 0)?void 0:r["start"===t==!b?_?"marginLeft":"marginTop":_?"marginRight":"marginBottom"])},z=d(f.borderLeftWidth),C=d(f.borderTopWidth),E=d(f.borderRightWidth),A=d(f.borderBottomWidth);s=g?m&&S(w(m.rect),k(g.rect))?(w(m.rect)+k(g.rect))/2:k(g.rect)-y*(Math.max(I(g.el,"start"),j)/2):m?w(m.rect)+y*(Math.max(I(m.el,"end"),j)/2):_?b?h.right-E-d(f.paddingRight):h.left+z+d(f.paddingLeft):b?h.bottom-A-d(f.paddingBottom):h.top+C+d(f.paddingTop),_?i({top:(null!=(n=null==v?void 0:v.rect.top)?n:h.top+C+d(f.paddingTop))-h.top+c.scrollTop-C,height:null!=(o=null==v?void 0:v.rect.height)?o:h.height-C-A-d(f.paddingTop)-d(f.paddingBottom),left:uF(s-h.left+c.scrollLeft-z,0,c.scrollWidth),width:dr,transform:"translateX(-50%)"}):i({left:(null!=(a=null==v?void 0:v.rect.left)?a:h.left+z+d(f.paddingLeft))-h.left+c.scrollLeft-z,width:null!=(l=null==v?void 0:v.rect.width)?l:h.width-z-E-d(f.paddingLeft)-d(f.paddingRight),top:uF(s-h.top+c.scrollTop-C,0,c.scrollHeight),height:dr,transform:"translateY(-50%)"})},[e,t,r]),n)?(0,rF.jsx)("div",{className:dt("linePlaceholder"),style:n,"data-puck-line-placeholder":!0}):null},di=(0,rb.get_class_name_factory_default)("DropZone",uC),da=({element:e,label:t,override:r})=>e?(0,rF.jsx)("div",{dangerouslySetInnerHTML:{__html:e.outerHTML}}):(0,rF.jsx)(uG,{name:t,children:r}),dl=e=>(0,rF.jsx)(dc,(0,rB.__spreadValues)({},e)),ds=(0,rk.memo)(({zoneCompound:e,componentId:t,index:r,dragAxis:n,collisionAxis:i,inDroppableZone:o,itemRef:a})=>{var l,s,c,u;let d=(0,rO.useAppStore)(e=>e.metadata),p=(0,rk.useContext)(uc),{depth:h=1}=null!=p?p:{},f=(0,rk.useContext)(uu),m=(0,rO.useAppStore)(rV(e=>{var r;return null==(r=e.state.indexes.nodes[t])?void 0:r.flatData.props})),g=(0,rO.useAppStore)(e=>{var r;return null==(r=e.state.indexes.nodes[t])?void 0:r.data.type}),v=(0,rO.useAppStore)(rV(e=>{var r;return null==(r=e.state.indexes.nodes[t])?void 0:r.data.readOnly})),_=(0,rO.useAppStoreApi)(),b=(0,rk.useMemo)(()=>{if(m)return(0,rx.expandNode)({type:g,props:m});let r=f.getState().previewIndex[e];return t===(null==r?void 0:r.props.id)?{type:r.componentType,props:r.props,previewType:r.type,element:r.element}:null},[_,t,e,g,m]),y=(0,rO.useAppStore)(e=>(null==b?void 0:b.type)?e.config.components[b.type]:null),k=(0,rk.useMemo)(()=>({renderDropZone:dl,isEditing:!0,dragRef:null,metadata:(0,rB.__spreadValues)((0,rB.__spreadValues)({},d),null==y?void 0:y.metadata)}),[d,null==y?void 0:y.metadata]),w=(0,rO.useAppStore)(e=>e.overrides),S=(0,rO.useAppStore)(e=>{var r;return(null==(r=e.componentState[t])?void 0:r.loadingCount)>0}),j=(0,rO.useAppStore)(e=>{var r;return(null==(r=e.selectedItem)?void 0:r.props.id)===t}),I=(0,rO.useMessage)("label-component"),z=(0,rO.useMessage)("canvas-noconfig",{type:null!=(s=null==(l=null==b?void 0:b.type)?void 0:l.toString())?s:""}),C=null!=(u=null!=(c=null==y?void 0:y.label)?c:null==b?void 0:b.type.toString())?u:I,E=(0,rk.useMemo)(()=>(0,rB.__spreadProps)((0,rB.__spreadValues)((0,rB.__spreadValues)({},null==y?void 0:y.defaultProps),null==b?void 0:b.props),{puck:k,editMode:!0}),[null==y?void 0:y.defaultProps,null==b?void 0:b.props,k]),A=(0,rk.useMemo)(()=>{var e;return{type:null!=(e=null==b?void 0:b.type)?e:g,props:E}},[null==b?void 0:b.type,g,E]),P=(0,rO.useAppStore)(e=>e.config),L=(0,rO.useAppStore)(e=>e.plugins),M=(0,rO.useAppStore)(e=>e.fieldTransforms),N=u1(P,A,(0,rk.useMemo)(()=>(0,rB.__spreadValues)((0,rB.__spreadValues)((0,rB.__spreadValues)((0,rB.__spreadValues)((0,rB.__spreadValues)({},rS(dl,e=>(0,rF.jsx)(u0,{componentId:t,zone:e.zone}))),{text:({value:e,componentId:t,field:r,propPath:n,isReadOnly:i})=>r.contentEditable?(0,rF.jsx)(u3,{propPath:n,componentId:t,value:e,opts:{disableLineBreaks:!0},isReadOnly:i}):e,textarea:({value:e,componentId:t,field:r,propPath:n,isReadOnly:i})=>r.contentEditable?(0,rF.jsx)(u3,{propPath:n,componentId:t,value:e,isReadOnly:i}):e,custom:({value:e,componentId:t,field:r,propPath:n,isReadOnly:i})=>r.contentEditable&&"string"==typeof e?(0,rF.jsx)(u3,{propPath:n,componentId:t,value:e,isReadOnly:i}):e}),{richtext:({value:e,componentId:t,field:r,propPath:n,isReadOnly:i})=>{let{contentEditable:o=!0,tiptap:a}=r;if(!1===o||i)return(0,rF.jsx)(u5,{content:e,field:r});let l=`${t}_${r.type}_${n}`;return(0,rF.jsx)(u8,{value:e,componentId:t,propPath:n,field:r,id:l},l)}}),L.reduce((e,t)=>(0,rB.__spreadValues)((0,rB.__spreadValues)({},e),t.fieldTransforms),{})),M),[L,M]),v,S);if(!b)return;let T=y?y.render:()=>(0,rF.jsx)("div",{style:{padding:48,textAlign:"center"},children:z}),O=b.type,D="previewType"in b&&"insert"===b.previewType;return(0,rF.jsx)(uz,{id:t,componentType:O,zoneCompound:e,depth:h+1,index:r,isLoading:S,isSelected:j,label:C,autoDragAxis:n,userDragAxis:i,inDroppableZone:o,itemRef:a,children:e=>{var t;return(null==y?void 0:y.inline)&&!D?(0,rF.jsx)(u7,{Component:T,componentProps:(0,rB.__spreadProps)((0,rB.__spreadValues)({},N),{puck:(0,rB.__spreadProps)((0,rB.__spreadValues)({},N.puck),{dragRef:e})})}):(0,rF.jsx)("div",{ref:e,children:D?(0,rF.jsx)(da,{label:C,override:null!=(t=w.componentItem)?t:w.drawerItem,element:"element"in b&&b.element?b.element:void 0}):(0,rF.jsx)(u7,{Component:T,componentProps:N})})}})}),dc=(0,rk.forwardRef)(function({zone:e,allow:t,disallow:r,style:n,className:i,minEmptyHeight:o="128px",collisionAxis:a,as:l},s){let c=(0,rk.useContext)(uc),u=(0,rO.useAppStoreApi)(),{areaId:d,depth:p=0,registerLocalZone:h,unregisterLocalZone:f}=null!=c?c:{},m=(0,rO.useAppStore)(rV(e=>{var t;return d?null==(t=e.state.indexes.nodes[d])?void 0:t.path:null})),g=rx.rootDroppableId;d&&e!==rx.rootDroppableId&&(g=`${d}:${e}`);let v=g===rx.rootDroppableId||e===rx.rootDroppableId||"root"===d,_=cp(uu,e=>e.nextAreaDepthIndex[d||""]),b=(0,rO.useAppStore)(rV(e=>{var t;return null==(t=e.state.indexes.zones[g])?void 0:t.contentIds})),y=(0,rO.useAppStore)(rV(e=>{var t;return null==(t=e.state.indexes.zones[g])?void 0:t.type}));(0,rk.useEffect)(()=>{(!y||"dropzone"===y)&&(null==c?void 0:c.registerZone)&&(null==c||c.registerZone(g))},[y,u]),(0,rk.useEffect)(()=>{"dropzone"===y&&g!==rx.rootDroppableId&&console.warn("DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots")},[y]);let k=(0,rk.useMemo)(()=>b||[],[b]),w=(0,rk.useRef)(null),S=(0,rk.useCallback)(e=>uE(e,{allow:t,disallow:r}),[t,r]),j=cp(uu,e=>{var t;return S(null==(t=e.draggedItem)?void 0:t.data.componentType)}),I=_||v,z=cp(uu,e=>{var t;let r=!0;return(r=null!=(t=e.zoneDepthIndex[g])&&t)&&(r=j),r});(0,rk.useEffect)(()=>(h&&h(g,j||z),()=>{f&&f(g)}),[j,z,g]);let[C,E]=((e,t)=>{var r,n;let i,o=(0,rk.useContext)(uu),a=cp(uu,e=>e.previewIndex[t]),l=(0,rO.useAppStore)(e=>e.state.ui.isDragging),[s,c]=(0,rk.useState)(e),[u,d]=(0,rk.useState)(a),p=(r=(e,t,r,n,i,o)=>{(!r||i)&&(t&&!t.linePlaceholder?c((0,rD.insert)(e.filter(e=>e!==t.props.id),t.index,t.props.id)):c(i&&!o?e.filter(e=>e!==n):e),d(t))},n=[],i=lF(),(0,rk.useCallback)((...e)=>(0,rB.__async)(null,null,function*(){return yield null==i?void 0:i.renderer.rendering,r(...e)}),[...n,i]));return(0,rk.useEffect)(()=>{var t;let r=o.getState(),n=null==(t=r.draggedItem)?void 0:t.id,i=Object.values(r.previewIndex||{});p(e,a,l,n,i.length>0,i.some(e=>null==e?void 0:e.linePlaceholder))},[e,a,l]),[s,u]})(k,g),A=E&&!E.linePlaceholder?1:0,P=C.length===A,L=z&&P,M=(0,rk.useContext)(uu);(0,rk.useEffect)(()=>{let{enabledIndex:e}=M.getState();M.setState({enabledIndex:(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{[g]:z})})},[z,M,g]);let{ref:N}=l2({id:g,collisionPriority:z?p:0,disabled:!L,collisionDetector:cz,type:"dropzone",data:{areaId:d,depth:p,isDroppableTarget:j,path:m||[]}}),T=(0,rO.useAppStore)(e=>(null==e?void 0:e.selectedItem)&&d===(null==e?void 0:e.selectedItem.props.id)),[O]=((e,t)=>{let r=(0,rO.useAppStore)(e=>e.status),[n,i]=(0,rk.useState)(t||"y"),o=(0,rk.useCallback)(()=>{if(e.current){let t=window.getComputedStyle(e.current);"grid"===t.display?i("dynamic"):"flex"===t.display&&"row"===t.flexDirection?i("x"):i("y")}},[e.current]);return(0,rk.useEffect)(()=>{let e=()=>{o()};return window.addEventListener("viewportchange",e),()=>{window.removeEventListener("viewportchange",e)}},[]),(0,rk.useEffect)(o,[r,t]),[n,o]})(w,a),[D,B]=(({zoneCompound:e,userMinEmptyHeight:t,ref:r})=>{let n=(0,rO.useAppStoreApi)(),[i,o]=(0,rk.useState)(0),[a,l]=(0,rk.useState)(!1),{draggedItem:s,isZone:c}=cp(uu,t=>{var r,n;return{draggedItem:(null==(r=t.draggedItem)?void 0:r.data.zone)===e?t.draggedItem:null,isZone:(null==(n=t.draggedItem)?void 0:n.data.zone)===e}}),u=(0,rk.useRef)(0),d=uh(t=>{if(t){let t=uQ(n,e);if(o(0),t||0===u.current)return void l(!1);let r=n.getState().selectedItem,i=n.getState().state.indexes.zones,a=n.getState().nodes;a.setOverlayVisible(null==r?void 0:r.props.id,!1),setTimeout(()=>{var t;let n=(null==(t=i[e])?void 0:t.contentIds)||[];a.syncNodes(n),r&&setTimeout(()=>{a.syncNode(r.props.id),a.setOverlayVisible(r.props.id,!0)},200),l(!1)},100)}},[n,i,e]);(0,rk.useEffect)(()=>{if(s&&r.current&&c){let t=r.current.getBoundingClientRect();return u.current=uQ(n,e),o(t.height),l(!0),d()}},[r.current,s,d]);let p=isNaN(Number(t))?t:`${t}px`;return[i?`${i}px`:p,a]})({zoneCompound:g,userMinEmptyHeight:o,ref:w}),F=(0,rk.useCallback)(e=>{uw([w,N,s],e)},[N]),R=(0,rO.useAppStore)(e=>e._experimentalVirtualization),V=(null!=d?d:rx.rootAreaId)===rx.rootAreaId&&0===p;return(0,rF.jsxs)(null!=l?l:"div",{className:`${di({isRootZone:v,hoveringOverArea:I,isEnabled:z,isAreaSelected:T,hasChildren:k.length>0,isAnimating:B})}${i?` ${i}`:""}`,ref:F,"data-testid":`dropzone:${g}`,"data-puck-dropzone":g,style:(0,rB.__spreadProps)((0,rB.__spreadValues)({},n),{"--puck-slot-min-empty-height":D,backgroundColor:null==n?void 0:n.backgroundColor}),children:[R&&V?(0,rF.jsx)(de,{contentIds:C,zoneCompound:g,renderItem:e=>(0,rF.jsx)(ds,{zoneCompound:g,componentId:e.componentId,dragAxis:O,index:e.index,collisionAxis:a,inDroppableZone:j,itemRef:e.measureRef},e.componentId)}):C.map((e,t)=>(0,rF.jsx)(ds,{zoneCompound:g,componentId:e,dragAxis:O,index:t,collisionAxis:a,inDroppableZone:j},e)),(null==E?void 0:E.linePlaceholder)&&(0,rF.jsx)(dn,{zoneRef:w,contentIds:k,index:E.index})]})}),du=({config:e,item:t,metadata:r})=>{let n=e.components[t.type],i=rI(e,t,t=>(0,rF.jsx)(rL,(0,rB.__spreadProps)((0,rB.__spreadValues)({},t),{config:e,metadata:r}))),o=(0,rk.useMemo)(()=>({areaId:i.id,depth:1}),[i]),a=rP(n.fields,i);return(0,rF.jsx)(up,{value:o,children:(0,rF.jsx)(n.render,(0,rB.__spreadProps)((0,rB.__spreadValues)((0,rB.__spreadValues)({},i),a),{puck:(0,rB.__spreadProps)((0,rB.__spreadValues)({},i.puck),{renderDropZone:dd,metadata:(0,rB.__spreadValues)((0,rB.__spreadValues)({},r),n.metadata)})}))},i.id)},dd=e=>(0,rF.jsx)(dp,(0,rB.__spreadValues)({},e)),dp=(0,rk.forwardRef)(function({className:e,style:t,zone:r,as:n},i){let o=(0,rk.useContext)(uc),{areaId:a="root"}=o||{},{config:l,data:s,metadata:c}=(0,rk.useContext)(dm),u=`${a}:${r}`,d=(null==s?void 0:s.content)||[];return((0,rk.useEffect)(()=>{!d&&(null==o?void 0:o.registerZone)&&(null==o||o.registerZone(u))},[d]),s&&l)?(u!==rx.rootDroppableId&&(d=(0,rx.setupZone)(s,u).zones[u]),(0,rF.jsx)(null!=n?n:"div",{className:e,style:t,ref:i,children:d.map(e=>l.components[e.type]?(0,rF.jsx)(du,{config:l,item:e,metadata:c},e.props.id):null)})):null}),dh=e=>(0,rF.jsx)(df,(0,rB.__spreadValues)({},e)),df=(0,rk.forwardRef)(function(e,t){let r=(0,rk.useContext)(uc);return(null==r?void 0:r.mode)==="edit"?(0,rF.jsx)(rF.Fragment,{children:(0,rF.jsx)(dc,(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{ref:t}))}):(0,rF.jsx)(rF.Fragment,{children:(0,rF.jsx)(dp,(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{ref:t}))})}),dm=rk.default.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function dg({config:e,data:t,metadata:r={}}){var n,i;let o=(0,rB.__spreadProps)((0,rB.__spreadValues)({},t),{root:t.root||{},content:t.content||[]}),a="props"in o.root?o.root.props:o.root,l=(null==a?void 0:a.title)||"",s=(0,rB.__spreadProps)((0,rB.__spreadValues)({},a),{puck:{renderDropZone:dh,isEditing:!1,dragRef:null,metadata:r},title:l,editMode:!1,id:"puck-root"}),c=rI(e,{type:"root",props:s},t=>(0,rF.jsx)(rN,(0,rB.__spreadProps)((0,rB.__spreadValues)({},t),{config:e,metadata:r}))),u=rP(null==(n=e.root)?void 0:n.fields,s),d=(0,rk.useMemo)(()=>({mode:"render",depth:0}),[]);return(null==(i=e.root)?void 0:i.render)?(0,rF.jsx)(dm.Provider,{value:{config:e,data:o,metadata:r},children:(0,rF.jsx)(up,{value:d,children:(0,rF.jsx)(e.root.render,(0,rB.__spreadProps)((0,rB.__spreadValues)((0,rB.__spreadValues)({},c),u),{children:(0,rF.jsx)(dd,{zone:rx.rootZone})}))})}):(0,rF.jsx)(dm.Provider,{value:{config:e,data:o,metadata:r},children:(0,rF.jsx)(up,{value:d,children:(0,rF.jsx)(dd,{zone:rx.rootZone})})})}(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var dv=(e,t)=>{let r={back:e.history.back,forward:e.history.forward,setHistories:e.history.setHistories,setHistoryIndex:e.history.setHistoryIndex,hasPast:e.history.hasPast(),hasFuture:e.history.hasFuture(),histories:e.history.histories,index:e.history.index},n={appState:(0,rD.makeStatePublic)(e.state),config:e.config,dispatch:e.dispatch,getPermissions:e.permissions.getPermissions,refreshPermissions:e.permissions.refreshPermissions,resolveDataById:(e,r)=>(function(e,t,r){return(0,rB.__async)(this,null,function*(){let n=t().state.indexes.nodes[e];n?yield uO(n.data,t,r):console.warn(`Warning: Could not find component with id "${e}" to resolve its data. Component may have been removed or the id is invalid.`)})})(e,t,r),resolveDataBySelector:(e,r)=>(function(e,t,r){return(0,rB.__async)(this,null,function*(){let n=(0,rD.getItem)(e,t().state);if(!n)return void console.warn(`Warning: Could not find component for selector "${JSON.stringify(e)}" to resolve its data. Component may have been removed or the selector is invalid.`);let i=(0,rx.toComponent)(n);yield uO(i,t,r)})})(e,t,r),history:r,selectedItem:e.selectedItem||null,getItemBySelector:t=>(0,rD.getItem)(t,e.state),getItemById:t=>e.state.indexes.nodes[t].data,getSelectorForId:t=>uT(e.state,t),getParentById:t=>{let r=e.state.indexes.nodes[t].parentId;if(null===r)return;let n=e.state.indexes.nodes[r];if(n)return n.data},dictionary:e.dictionary};return n.__private={appState:e.state},n},d_=(0,rk.createContext)(null),db=e=>({state:e.state,config:e.config,dispatch:e.dispatch,permissions:e.permissions,history:e.history,selectedItem:e.selectedItem,dictionary:e.dictionary});function dx(){return function(e){let t=(0,rk.useContext)(d_);if(!t)throw Error("usePuck must be used inside <Puck>.");return(0,rW.useStore)(t,null!=e?e:e=>e)}}(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var dy=(0,rb.get_class_name_factory_default)("ComponentList",{ComponentList:"_ComponentList_htktj_1","ComponentList--isExpanded":"_ComponentList--isExpanded_htktj_5","ComponentList-content":"_ComponentList-content_htktj_9","ComponentList-title":"_ComponentList-title_htktj_17","ComponentList-titleIcon":"_ComponentList-titleIcon_htktj_63"}),dk=({name:e,label:t})=>{var r;let n=(0,rO.useAppStore)(e=>e.overrides),i=(0,rO.useAppStore)(t=>t.permissions.getPermissions({type:e}).insert);return(0,rk.useEffect)(()=>{n.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[n]),(0,rF.jsx)(uJ.Item,{label:t,name:e,isDragDisabled:!i,children:null!=(r=n.componentItem)?r:n.drawerItem})},dw=({children:e,title:t,id:r})=>{let n=(0,rO.useAppStore)(e=>e.config),i=(0,rO.useAppStore)(e=>e.setUi),o=(0,rO.useAppStore)(e=>e.state.ui.componentList),{expanded:a=!0}=o[r]||{},l=`puck-drawer-category-${r}`,s=(0,rO.useMessage)("drawer-category-collapse",{title:null!=t?t:""}),c=(0,rO.useMessage)("drawer-category-expand",{title:null!=t?t:""});return(0,rF.jsxs)("div",{className:dy({isExpanded:a}),children:[t&&(0,rF.jsxs)("button",{type:"button",className:dy("title"),"aria-expanded":a,"aria-controls":l,onClick:()=>i({componentList:(0,rB.__spreadProps)((0,rB.__spreadValues)({},o),{[r]:(0,rB.__spreadProps)((0,rB.__spreadValues)({},o[r]),{expanded:!a})})}),title:a?s:c,children:[(0,rF.jsx)("div",{children:t}),(0,rF.jsx)("div",{className:dy("titleIcon"),children:a?(0,rF.jsx)(rO.ChevronUp,{size:12}):(0,rF.jsx)(rO.ChevronDown,{size:12})})]}),(0,rF.jsx)("div",{className:dy("content"),id:l,children:(0,rF.jsx)(uJ,{children:e||Object.keys(n.components).map(e=>{var t;return(0,rF.jsx)(dk,{label:null!=(t=n.components[e].label)?t:e,name:e},e)})})})]})};dw.Item=dk;var dS=()=>{let e=(0,rO.useAppStore)(e=>e.overrides),t=(()=>{let[e,t]=(0,rk.useState)(),r=(0,rO.useAppStore)(e=>e.config),n=(0,rO.useAppStore)(e=>e.state.ui.componentList),i=(0,rO.useMessage)("drawer-category-other");return(0,rk.useEffect)(()=>{var e,o,a;if(Object.keys(n).length>0){let l,s=[];l=Object.entries(n).map(([e,t])=>{var n,i;return t.components?(t.components.forEach(e=>{s.push(e)}),!1===t.visible)?null:(0,rF.jsx)(dw,{id:e,title:(null==(i=null==(n=r.categories)?void 0:n[e])?void 0:i.title)||t.title||e,children:t.components.map((e,t)=>{var n;let i=r.components[e]||{};return(0,rF.jsx)(dw.Item,{label:null!=(n=i.label)?n:e,name:e,index:t},e)})},e):null});let c=Object.keys(r.components).filter(e=>-1===s.indexOf(e));!(c.length>0)||(null==(e=n.other)?void 0:e.components)||(null==(o=n.other)?void 0:o.visible)===!1||l.push((0,rF.jsx)(dw,{id:"other",title:(null==(a=n.other)?void 0:a.title)||i,children:c.map((e,t)=>{var n;let i=r.components[e]||{};return(0,rF.jsx)(dw.Item,{name:e,label:null!=(n=i.label)?n:e,index:t},e)})},"other")),t(l)}},[r.categories,r.components,n,i]),e})(),r=(0,rk.useMemo)(()=>(e.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),e.components||e.drawer||"div"),[e]);return(0,rF.jsx)(r,{children:t||(0,rF.jsx)(dw,{id:"all"})})};(0,rB.init_react_import)();var dj=(0,rb.get_class_name_factory_default)("BlocksPlugin",{BlocksPlugin:"_BlocksPlugin_9af19_1"}),dI=(e={})=>{var t,r;return{name:"blocks",label:null!=(t=e.label)?t:"Blocks",render:()=>(0,rF.jsx)("div",{className:dj(),children:(0,rF.jsx)(dS,{})}),icon:null!=(r=e.icon)?r:(0,rF.jsx)(rO.Hammer,{})}};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var dz=(e,t,r)=>{var n;let[i,o]=e.split(":");if(!o)return;let a=null==(n=r[i])?void 0:n.data.type,l=a&&a!==rx.rootAreaId?t.components[a]:t.root;return function(e,t){let r;if("string"!=typeof e)throw Error(`Can't get field definition for path (${e}): Path should be a string`);if(!t||"object"!=typeof t)return;let n=e.split(/\.|\[\d+\]/).filter(Boolean),i=t;for(let e=0;e<n.length;e++){if(r=i[n[e]],e===n.length-1)return r;if(!r||("object"!==r.type||!r.objectFields)&&("array"!==r.type||!r.arrayFields))return;"object"===r.type&&(i=r.objectFields),"array"===r.type&&(i=r.arrayFields)}}(o,null==l?void 0:l.fields)},dC={},dE="outline-item",dA=(e,t,r)=>{let n=e.get(t);if(void 0!==n)return n;let i=r();return e.set(t,i),i},dP=(e,t,r,n,i)=>dA(e,`zone:${t}`,()=>uE(r,((e,t,r)=>{var n;if((null==(n=r.zones[e])?void 0:n.type)!=="slot")return dC;let i=dz(e,t,r.nodes);return(null==i?void 0:i.type)!=="slot"?dC:{allow:i.allow,disallow:i.disallow}})(t,n,i))),dL=(e,t)=>r=>{let n,i,o,a;if(r.type!==dE)return!1;let l=r.data,s=e.outlineStore.getState().acceptCache,{config:c,state:u}=e.appStore.getState(),d=u.indexes,p="row"===t.kind?t.itemId:t.zoneCompound.split(":")[0];return n=l.itemId,i=d.nodes,!dA(s,`subtree:${p}`,()=>{var e;return p===n||((null==(e=i[p])?void 0:e.path)||[]).some(e=>e.split(":")[0]===n)})&&("zone"===t.kind?dP(s,t.zoneCompound,l.componentType,c,d):dP(s,t.zoneCompound,l.componentType,c,d)||(o=t.itemId,a=l.componentType,dA(s,`childZones:${o}`,()=>Object.keys(d.zones).some(e=>e.startsWith(`${o}:`)&&dP(s,e,a,c,d)))))};(0,rB.init_react_import)();var dM=()=>{let e=null,t=null,r=()=>{null!==e&&(clearTimeout(e),e=null),t=null};return(0,rH.createStore)((n,i)=>({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:e=>n({status:"dragging",draggedRow:e,acceptCache:new Map}),setTarget:(e,t)=>{var r,o,a,l;let s=i();((null==(r=s.indicator)?void 0:r.targetId)!==e.targetId||(null==(o=s.indicator)?void 0:o.position)!==e.position||(null==(a=s.drop)?void 0:a.zone)!==t.zone||(null==(l=s.drop)?void 0:l.index)!==t.index)&&n({indicator:e,drop:t})},clearTarget:()=>{(null!==i().indicator||null!==i().drop)&&n({indicator:null,drop:null})},scheduleExpand:(o,a)=>{t===o||i().tempExpandedIds.has(o)||(r(),t=o,n({expandCandidateId:o}),e=setTimeout(()=>{e=null,t=null,n(e=>({tempExpandedIds:new Set(e.tempExpandedIds).add(o),expandCandidateId:null})),a()},600))},cancelPendingExpand:()=>{r(),null!==i().expandCandidateId&&n({expandCandidateId:null})},endDrag:()=>{r(),n({status:"dropping",indicator:null,drop:null,expandCandidateId:null})},reset:()=>{r(),n({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},dN=(0,rk.createContext)(dM()),dT=()=>(0,rk.useContext)(dN),dO=({kind:e,zoneCompound:t})=>{let r=(0,rO.useAppStoreApi)(),n=dT(),i=`${e}:${t}`,{ref:o}=l2({id:i,type:"outline-zone",accept:(0,rk.useMemo)(()=>dL({appStore:r,outlineStore:n},{kind:"zone",zoneCompound:t}),[r,n,t]),collisionDetector:cz,data:{kind:"zone",zoneCompound:t}}),a=cp(dN,e=>{var t;return(null==(t=e.indicator)?void 0:t.targetId)===i});return(0,rk.useMemo)(()=>({isDropTarget:a,ref:o}),[a,o])};(0,rB.init_react_import)(),(0,rB.init_react_import)();var dD=(0,rb.get_class_name_factory_default)("DropLine",{DropLine:"_DropLine_eyz3q_2","DropLine--top":"_DropLine--top_eyz3q_12","DropLine--bottom":"_DropLine--bottom_eyz3q_16","DropLine--outset":"_DropLine--outset_eyz3q_20"}),dB=({edge:e,outset:t})=>(0,rF.jsx)("div",{className:dD({top:"top"===e,bottom:"bottom"===e,outset:!!t})});(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var dF=(...e)=>[...e].filter(Boolean).join(" ");(0,rB.init_react_import)();var dR=(0,rb.get_class_name_factory_default)("LayerTree",{"LayerTree-helper":"_LayerTree-helper_1m7e4_2","LayerTree-helperRoot":"_LayerTree-helperRoot_1m7e4_11"}),dV=({zoneCompound:e})=>{let{ref:t,isDropTarget:r}=dO({kind:"empty",zoneCompound:e}),n=(0,rO.useMessage)("outline-empty"),[i]=e.split(":"),o=i===rx.rootAreaId;return(0,rF.jsxs)("li",{className:dF(dR("helper"),o?dR("helperRoot"):void 0),"data-puck-drop-target":r||void 0,ref:t,children:[n,r&&(0,rF.jsx)(dB,{edge:"top"})]})};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var dH=(0,rb.get_class_name_factory_default)("LayerActions",{LayerActions:"_LayerActions_d90t9_2","LayerActions--visible":"_LayerActions--visible_d90t9_18"}),dW=({node:e,visible:t})=>{let r=(0,rO.useAppStore)(e=>e.dispatch),n=dT(),i=(0,rO.useAppStore)(rV(t=>{let r=(0,rD.getItem)({index:e.index,zone:e.zoneCompound},t.state),n=t.permissions.getPermissions({item:r});return{delete:n.delete,duplicate:n.duplicate}})),o=(0,rO.useMessage)("outline-item-duplicate"),a=(0,rO.useMessage)("outline-item-delete"),l=(0,rk.useCallback)(t=>{t.stopPropagation(),"idle"===n.getState().status&&r({type:"remove",index:e.index,zone:e.zoneCompound})},[r,n,e]),s=(0,rk.useCallback)(t=>{t.stopPropagation(),"idle"===n.getState().status&&r({type:"duplicate",sourceIndex:e.index,sourceZone:e.zoneCompound})},[r,n,e.index,e.zoneCompound]);return i.delete||i.duplicate?(0,rF.jsxs)("div",{className:dH({visible:t}),children:[i.duplicate&&(0,rF.jsx)(rO.IconButton,{onClick:s,title:o,type:"button",children:(0,rF.jsx)(rO.Copy,{})}),i.delete&&(0,rF.jsx)(rO.IconButton,{onClick:l,title:a,type:"button",children:(0,rF.jsx)(rO.Trash,{})})]}):null},d$=(0,rb.get_class_name_factory_default)("Layer",{Layer:"_Layer_onfgu_1","Layer-inner":"_Layer-inner_onfgu_8","Layer--isSortable":"_Layer--isSortable_onfgu_18","Layer-content":"_Layer-content_onfgu_22","Layer-clickable":"_Layer-clickable_onfgu_29","Layer-caret":"_Layer-caret_onfgu_57","Layer--containsZone":"_Layer--containsZone_onfgu_68","Layer-title":"_Layer-title_onfgu_76","Layer-name":"_Layer-name_onfgu_85","Layer-icon":"_Layer-icon_onfgu_91","Layer-zones":"_Layer-zones_onfgu_101","Layer--isExpanded":"_Layer--isExpanded_onfgu_106","Layer--isSelected":"_Layer--isSelected_onfgu_115","Layer--isExpandCandidate":"_Layer--isExpandCandidate_onfgu_138","Layer--isDragSource":"_Layer--isDragSource_onfgu_143"}),dq=(0,rk.forwardRef)(function({dataIndex:e,depth:t,isSelected:r,node:n,selectedId:i},o){let a=(0,rO.useAppStore)(e=>e.dispatch),l=(0,rO.useAppStore)(e=>{var t,r;return null!=(r=null==(t=e.state.ui.itemExpanded)?void 0:t[n.itemId])&&r}),s=cp(uu,e=>e.hoveringComponent===n.itemId),c=(0,rO.useAppStore)(e=>{var t;let r=(0,rD.getItem)({index:n.index,zone:n.zoneCompound},e.state);return null==(t=e.permissions.getPermissions({item:r}))?void 0:t.drag}),{indicatorPosition:u,isDragSource:d,isExpandCandidate:p,isTempExpanded:h,rowRef:f}=(({componentType:e,index:t,itemId:r,zoneCompound:n})=>{let i=(0,rO.useAppStoreApi)(),o=dT(),a=(0,rk.useMemo)(()=>dL({appStore:i,outlineStore:o},{kind:"row",itemId:r,zoneCompound:n}),[i,o,r,n]),{handleRef:l,ref:s,isDragSource:c}=sW({id:r,index:t,group:n,type:dE,accept:a,data:{kind:"row",itemId:r,zoneCompound:n,index:t,componentType:e},collisionPriority:1,collisionDetector:(0,rk.useMemo)(()=>cA("y"),[]),transition:{duration:0},plugins:e=>[...e,aK.configure({feedback:"clone",dropAnimation:null})]}),{indicatorPosition:u,isExpandCandidate:d,isTempExpanded:p}=cp(dN,e=>{var t;return{indicatorPosition:(null==(t=e.indicator)?void 0:t.targetId)===r?e.indicator.position:null,isExpandCandidate:e.expandCandidateId===r,isTempExpanded:e.tempExpandedIds.has(r)}});return{rowRef:(0,rk.useCallback)(e=>{s(e),l(e)},[s,l]),isDragSource:c,indicatorPosition:u,isExpandCandidate:d,isTempExpanded:p}})({componentType:n.componentType,index:n.index,itemId:n.itemId,zoneCompound:n.zoneCompound}),m=(0,rk.useContext)(uu),g=dT(),v=(0,rO.useMessage)("outline-item-collapse"),_=(0,rO.useMessage)("outline-item-expand"),b=n.childZones.length>0,y=(0,rk.useCallback)(e=>{a({type:"setUi",ui:{itemSelector:e}})},[a]),k=l||h,w=1!==n.childZones.length;return(0,rF.jsxs)("li",{ref:o,className:d$({containsZone:b,isDragSource:d,isExpandCandidate:p,isExpanded:k,isHovering:s,isSelected:r,isSortable:c}),"data-index":e,"data-puck-layer-tree-id":n.itemId,children:[null!==u&&(0,rF.jsx)(dB,{edge:"before"===u?"top":"bottom",outset:!0}),(0,rF.jsxs)("div",{className:d$("inner"),ref:f,onMouseEnter:e=>{e.stopPropagation(),"idle"===g.getState().status&&m.setState({hoveringComponent:n.itemId})},onMouseLeave:e=>{e.stopPropagation(),m.setState({hoveringComponent:null})},children:[(0,rF.jsx)("div",{className:d$("caret"),children:(0,rF.jsx)(rO.IconButton,{onClick:e=>{e.stopPropagation(),"idle"===g.getState().status&&a({type:"setUi",ui:e=>{var t;let r=(0,rB.__spreadValues)({},e.itemExpanded);return(null==(t=e.itemExpanded)?void 0:t[n.itemId])?delete r[n.itemId]:r[n.itemId]=!0,{itemExpanded:r}},recordHistory:!1})},title:l?v:_,type:"button",children:(0,rF.jsx)(rO.ChevronRight,{})})}),(0,rF.jsxs)("div",{className:d$("content"),children:[(0,rF.jsx)("button",{type:"button",className:d$("clickable"),onClick:()=>{"idle"===g.getState().status&&(y({index:n.index,zone:n.zoneCompound}),m.getState().scrollToComponent(n.itemId))},children:(0,rF.jsxs)("div",{className:d$("title"),children:[(0,rF.jsx)("div",{className:d$("icon"),children:"Text"===n.componentType||"Heading"===n.componentType?(0,rF.jsx)(rO.Type,{}):(0,rF.jsx)(rO.LayoutGrid,{})}),(0,rF.jsx)("div",{className:d$("name"),children:n.label})]})}),(0,rF.jsx)(dW,{node:n,visible:s&&!d})]})]}),b&&k&&n.childZones.map(e=>(0,rF.jsx)("div",{className:d$("zones"),children:(0,rF.jsx)(d0,{depth:w?t+1:t,selectedId:i,tree:w?e:(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{label:void 0})})},e.zoneCompound))]})});(0,rB.init_react_import)();var dU={LayerTree:"_LayerTree_o5tyt_1","LayerTree--nested":"_LayerTree--nested_o5tyt_12"},dZ=(0,rb.get_class_name_factory_default)("LayerTree",dU),dY=({depth:e,selectedId:t,tree:r})=>(0,rF.jsxs)("ul",{className:dZ({nested:e>0}),children:[0===r.items.length&&(0,rF.jsx)(dV,{zoneCompound:r.zoneCompound}),r.items.map(r=>(0,rF.jsx)(dq,{depth:e,isSelected:t===r.itemId,node:r,selectedId:t},r.itemId))]});(0,rB.init_react_import)();var dX=(0,rb.get_class_name_factory_default)("LayerTree",dU),dG=new Map,dK=({depth:e,selectedId:t,tree:r})=>{let n=(0,rk.useRef)(null),i=cp(dN,e=>{var t;return(null==(t=e.draggedRow)?void 0:t.zoneCompound)===r.zoneCompound?e.draggedRow.index:null}),o=(0,rk.useCallback)(e=>{let t=sQ(e);return null===i||t.includes(i)||(t.push(i),t.sort((e,t)=>e-t)),t},[i]),a=ce({count:r.items.length,estimateSize:e=>{var t,n;return t=r.items[e].itemId,null!=(n=dG.get(t))?n:32},getItemKey:e=>r.items[e].itemId,getScrollElement:()=>(e=>{var t;let r=null!=(t=null==e?void 0:e.parentElement)?t:null;for(;r;){let{overflow:e,overflowY:t}=getComputedStyle(r);if([e,t].some(e=>/auto|scroll/.test(e)))return r;r=r.parentElement}return null})(n.current),overscan:8,rangeExtractor:o,measureElement:e=>{let t=Math.ceil(e.getBoundingClientRect().height),r=e.dataset.puckLayerTreeId;return r&&(t<=0||dG.set(r,t)),t||32}}),l=a.getVirtualItems(),s=a.getTotalSize(),c=[],u=0,d=-1;l.forEach(n=>{let i=r.items[n.index],o=Math.max(n.start-u,0);o>0&&c.push((0,rF.jsx)("li",{"aria-hidden":"true",style:{height:`${o}px`}},`gap:${r.zoneCompound}:${d}:${n.index}`)),c.push((0,rF.jsx)(dq,{dataIndex:n.index,depth:e,isSelected:t===i.itemId,node:i,ref:a.measureElement,selectedId:t},i.itemId)),u=n.end,d=n.index});let p=Math.max(s-u,0);return p>0&&c.push((0,rF.jsx)("li",{"aria-hidden":"true",style:{height:`${p}px`}},`gap:${r.zoneCompound}:${d}:end`)),(0,rF.jsxs)("ul",{className:dX({nested:e>0}),ref:n,children:[0===r.items.length&&(0,rF.jsx)(dV,{zoneCompound:r.zoneCompound}),c]})};(0,rB.init_react_import)();var dJ=(0,rb.get_class_name_factory_default)("LayerTree",{"LayerTree-zoneTitle":"_LayerTree-zoneTitle_fvhlh_2","LayerTree-zoneIcon":"_LayerTree-zoneIcon_fvhlh_19"}),dQ=({label:e,zoneCompound:t})=>{let{ref:r,isDropTarget:n}=dO({kind:"label",zoneCompound:t});return(0,rF.jsxs)("div",{className:dJ("zoneTitle"),"data-puck-drop-target":n||void 0,ref:r,children:[(0,rF.jsx)("div",{className:dJ("zoneIcon"),children:(0,rF.jsx)(rO.Layers,{})}),e,n&&(0,rF.jsx)(dB,{edge:"bottom"})]})},d0=({depth:e,selectedId:t,tree:r})=>{let n=0===e&&r.items.length>=25;return(0,rF.jsxs)(rF.Fragment,{children:[r.label&&(0,rF.jsx)(dQ,{label:r.label,zoneCompound:r.zoneCompound}),n?(0,rF.jsx)(dK,{depth:e,selectedId:t,tree:r}):(0,rF.jsx)(dY,{depth:e,selectedId:t,tree:r})]})};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var d1=e=>{if("u"<typeof document)return;let t=document.getElementById("preview-frame");e?null==t||t.setAttribute("data-puck-outline-dragging","true"):null==t||t.removeAttribute("data-puck-outline-dragging")},d2=(e,t,r)=>{var n,i,o;let a=r.outlineDndStore.getState(),l=a.draggedRow;if(!l)return;let s=e.operation.target;if(!s){a.cancelPendingExpand(),a.clearTarget();return}let c=s.data;if("zone"===c.kind){a.cancelPendingExpand(),a.setTarget({targetId:s.id.toString(),position:"inside"},{zone:c.zoneCompound,index:0});return}let{config:u,state:d}=r.appStore.getState(),p=d.indexes;if(dP(a.acceptCache,c.zoneCompound,l.componentType,u,p)){let e=null==(n=t.collisionObserver.collisions[0])?void 0:n.data,r=cP(null==e?void 0:e.direction);a.setTarget({targetId:s.id.toString(),position:r},{zone:c.zoneCompound,index:cL({position:r,sourceIndex:l.index,targetIndex:c.index,isSameZone:c.zoneCompound===l.zoneCompound})})}else a.clearTarget();let h=!!(null==(i=d.ui.itemExpanded)?void 0:i[c.itemId])||a.tempExpandedIds.has(c.itemId),f=(o=c.itemId,Object.keys(p.zones).some(e=>e.startsWith(`${o}:`)));!h&&f?a.scheduleExpand(c.itemId,()=>{requestAnimationFrame(()=>t.collisionObserver.forceUpdate(!0))}):a.cancelPendingExpand()},d4=[],d3=({children:e})=>{let t=(0,rO.useAppStoreApi)(),r=(0,rk.useContext)(uu),[n]=(0,rk.useState)(()=>dM()),i=(0,rO.useAppStore)(e=>{var t,r;return null!=(r=null==(t=e.dnd)?void 0:t.disableOutlineDrag)&&r}),o=ck({mouse:[new la.Distance({value:5})]}),a=(0,rk.useMemo)(()=>({outlineDndStore:n,appStore:t,scrollToComponent:e=>r.getState().scrollToComponent(e)}),[n,t,r]);return(0,rF.jsx)(dN.Provider,{value:n,children:(0,rF.jsx)(lB,{sensors:i?d4:o,onBeforeDragStart:e=>{((e,t)=>{let r=e.operation.source,n=null==r?void 0:r.data;if(!r||!n)return;let i=t.appStore.getState(),o=(0,rD.getItem)({zone:n.zoneCompound,index:n.index},i.state);o&&i.permissions.getPermissions({item:o}).drag?(t.outlineDndStore.getState().startDrag({itemId:n.itemId,zoneCompound:n.zoneCompound,index:n.index,componentType:n.componentType}),d1(!0),i.dispatch({type:"setUi",ui:{isDragging:!0},recordHistory:!1})):e.preventDefault()})(e,a)},onDragOver:(e,t)=>{e.preventDefault(),d2(e,t,a)},onDragMove:(e,t)=>{d2(e,t,a)},onDragEnd:e=>{((e,t)=>{let{source:r}=e.operation,n=t.outlineDndStore.getState(),i=n.draggedRow,o=e.canceled?null:n.drop,a=t.appStore.getState().dispatch;if(d1(!1),i&&o){var l,s;let e,r,n,c;uD(i.itemId,{zone:i.zoneCompound,index:i.index},{zone:o.zone,index:o.index},t.appStore);let u=o.zone!==i.zoneCompound||o.index!==i.index;a({type:"setUi",ui:{itemSelector:{zone:o.zone,index:o.index},isDragging:!1},recordHistory:u}),l=i.itemId,s=t.scrollToComponent,r=0,n=0,c=()=>{var t;let i=null==(t=uf())?void 0:t.querySelector(`[data-puck-component="${l}"]`),o=i?i.getBoundingClientRect().top:null;(r=o===e?r+1:0,e=o,n+=1,r>=2||n>=60)?s(l):requestAnimationFrame(c)},requestAnimationFrame(c)}else a({type:"setUi",ui:{isDragging:!1},recordHistory:!1});n.endDrag();let c=()=>t.outlineDndStore.getState().reset();if(r&&"idle"!==r.status){let e=no(()=>{"idle"===r.status&&(c(),null==e||e())})}else c()})(e,a)},children:e})})};(0,rB.init_react_import)(),(0,rB.init_react_import)();var d6=e=>{let t={};return Object.keys(e).forEach(e=>{let[r]=e.split(":");r&&(t[r]||(t[r]=[]),t[r].push(e))}),t},d5=({config:e,label:t,nodes:r,zoneCompound:n,zones:i,zonesByParent:o=d6(i),componentFallbackLabel:a})=>{var l,s;return{items:(null!=(s=null==(l=i[n])?void 0:l.contentIds)?s:[]).map((t,a)=>(({config:e,itemId:t,index:r,nodes:n,zoneCompound:i,zones:o,zonesByParent:a,componentFallbackLabel:l})=>{var s,c,u,d;let p=n[t],h=null!=(c=null==(s=null==p?void 0:p.data.type)?void 0:s.toString())?c:l,f=null!=(d=null==(u=e.components[h])?void 0:u.label)?d:h;return{childZones:(a[t]||[]).map(t=>d5({config:e,nodes:n,zoneCompound:t,zones:o,zonesByParent:a})),componentType:h,index:r,itemId:t,label:f,zoneCompound:i}})({config:e,itemId:t,index:a,nodes:r,zoneCompound:n,zones:i,zonesByParent:o})),label:((e,t,r,n)=>{var i,o;if(void 0!==n)return n;let[,a]=e.split(":");if(a)return null!=(o=null==(i=dz(e,r,t))?void 0:i.label)?o:a})(n,r,e,t),zoneCompound:n}},d8=(0,rb.get_class_name_factory_default)("LayerTreeRoot",{LayerTreeRoot:"_LayerTreeRoot_1qowl_1"}),d7=({selectedId:e,trees:t})=>{let r=(0,rO.useAppStore)(e=>{var t,r;return null!=(r=null==(t=e.dnd)?void 0:t.disableOutlineDrag)&&r});return(0,rF.jsx)(d3,{children:(0,rF.jsx)("div",{className:d8(),"data-puck-dnd-disabled":r||void 0,children:t.map(t=>(0,rF.jsx)(d0,{depth:0,selectedId:e,tree:t},t.zoneCompound))})})};(0,rB.init_react_import)(),(0,rB.init_react_import)();var d9=(0,rb.get_class_name_factory_default)("CollapseAll",{CollapseAll:"_CollapseAll_1r4cy_1","CollapseAll-icon":"_CollapseAll-icon_1r4cy_5","CollapseAll--visible":"_CollapseAll--visible_1r4cy_10"}),pe=function({className:e}){let t=(0,rO.useAppStore)(e=>{var t;return Object.keys(null!=(t=e.state.ui.itemExpanded)?t:{}).length>0}),r=(0,rO.useAppStore)(e=>e.dispatch),n=(0,rO.useMessage)("outline-header-collapseall");return(0,rF.jsx)("div",{className:dF(d9({visible:t}),e),children:(0,rF.jsx)(rO.IconButton,{title:n,onClick:()=>{r({type:"setUi",ui:{itemExpanded:{}}})},children:(0,rF.jsx)(rO.ChevronsDownUp,{className:d9("icon")})})})};(0,rB.init_react_import)(),(0,rB.init_react_import)();var pt=(0,rb.get_class_name_factory_default)("OutlineHeader",{OutlineHeader:"_OutlineHeader_ntv8r_1"}),pr=({children:e,title:t})=>{let r=(0,rO.useMessage)("outline-header-title");return(0,rF.jsxs)("div",{className:pt(),children:[(0,rF.jsx)(cJ,{rank:"2",size:"xs",children:null!=r?r:t}),e]})};(0,rB.init_react_import)();var pn=(0,rb.get_class_name_factory_default)("OutlineWrapper",{OutlineWrapper:"_OutlineWrapper_b9ln0_1","OutlineWrapper-collapseAll":"_OutlineWrapper-collapseAll_b9ln0_9","OutlineWrapper-layers":"_OutlineWrapper-layers_b9ln0_15"}),pi=({children:e})=>(0,rF.jsx)("div",{className:pn(),children:e}),po=()=>{let e=(0,rO.useAppStore)(e=>e.overrides.outline),t=(0,rO.useAppStore)(e=>e.config),r=(0,rO.useAppStore)(e=>e.state.indexes.nodes),n=(0,rO.useAppStore)(e=>e.state.indexes.zones),i=(0,rO.useAppStore)(e=>{var t;return(null==(t=e.selectedItem)?void 0:t.props.id)||null}),o=(0,rO.useMessage)("label-component"),a=(0,rO.useAppStore)(rV(e=>Object.keys(e.state.indexes.zones).filter(e=>"root"===e.split(":")[0]))),l=(0,rk.useMemo)(()=>a.map(e=>d5({config:t,label:1===a.length?"":e.split(":")[1],nodes:r,zoneCompound:e,zones:n,componentFallbackLabel:o})),[t,r,a,n,o]),s=(0,rk.useMemo)(()=>e||pi,[e]);return(0,rF.jsxs)(s,{children:[(0,rF.jsx)(pr,{children:(0,rF.jsx)(pe,{className:pn("collapseAll")})}),(0,rF.jsx)("div",{className:pn("layers"),children:(0,rF.jsx)(d7,{selectedId:i,trees:l})})]})};(0,rB.init_react_import)();var pa=(0,rb.get_class_name_factory_default)("OutlinePlugin",{OutlinePlugin:"_OutlinePlugin_1ylsc_1"}),pl=(e={})=>{var t,r;return{name:"outline",label:null!=(t=e.label)?t:"Outline",render:()=>(0,rF.jsx)("div",{className:pa(),children:(0,rF.jsx)(po,{})}),icon:null!=(r=e.icon)?r:(0,rF.jsx)(rO.Layers,{})}};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var ps=(0,rb.get_class_name_factory_default)("Breadcrumbs",{Breadcrumbs:"_Breadcrumbs_8c6w5_1","Breadcrumbs-breadcrumbLabel":"_Breadcrumbs-breadcrumbLabel_8c6w5_7","Breadcrumbs-breadcrumb":"_Breadcrumbs-breadcrumb_8c6w5_7"}),pc=({children:e,numParents:t=1})=>{let r,n,i,o,a,l,s=(0,rO.useAppStore)(e=>e.setUi),c=(r=(0,rO.useAppStore)(e=>{var t;return null==(t=e.selectedItem)?void 0:t.props.id}),n=(0,rO.useAppStore)(e=>e.config),i=(0,rO.useAppStore)(e=>{var t;return null==(t=e.state.indexes.nodes[r])?void 0:t.path}),o=(0,rO.useAppStoreApi)(),a=(0,rO.useMessage)("label-page"),l=(0,rO.useMessage)("label-component"),(0,rk.useMemo)(()=>{let e=(null==i?void 0:i.map(e=>{var t,r,i,s;let[c]=e.split(":");if("root"===c)return{label:(null==(t=null==n?void 0:n.root)?void 0:t.label)||a,selector:null};let u=o.getState().state.indexes.nodes[c],d=u.path[u.path.length-1],p=((null==(r=o.getState().state.indexes.zones[d])?void 0:r.contentIds)||[]).indexOf(c);return{label:u?null!=(s=null==(i=n.components[u.data.type])?void 0:i.label)?s:u.data.type:l,selector:u?{index:p,zone:u.path[u.path.length-1]}:null}}))||[];return t?e.slice(e.length-t):e},[i,t,a,l]));return(0,rF.jsxs)("div",{className:ps(),children:[c.map((e,t)=>(0,rF.jsxs)("div",{className:ps("breadcrumb"),children:[(0,rF.jsx)("button",{type:"button",className:ps("breadcrumbLabel"),onClick:()=>s({itemSelector:e.selector}),children:e.label}),(0,rF.jsx)(rO.ChevronRight,{size:16})]},t)),e]})};(0,rB.init_react_import)(),(0,rB.init_react_import)();var pu=(0,rb.get_class_name_factory_default)("PuckFields",{PuckFields:"_PuckFields_wnj25_1","PuckFields--isLoading":"_PuckFields--isLoading_wnj25_6","PuckFields-loadingOverlay":"_PuckFields-loadingOverlay_wnj25_10","PuckFields-loadingOverlayInner":"_PuckFields-loadingOverlayInner_wnj25_25","PuckFields-field":"_PuckFields-field_wnj25_32","PuckFields--wrapFields":"_PuckFields--wrapFields_wnj25_36"}),pd=({children:e})=>(0,rF.jsx)(rF.Fragment,{children:e}),pp=({fieldName:e})=>{let t=(0,rO.useAppStore)(t=>t.fields.fields[e]),r=(0,rO.useAppStore)(t=>((t.selectedItem?t.selectedItem.readOnly:t.state.data.root.readOnly)||{})[e]),n=(0,rO.useAppStore)(r=>t?r.selectedItem?`${r.selectedItem.props.id}_${t.type}_${e}`:`root_${t.type}_${e}`:null),i=(0,rO.useAppStore)(rV(e=>{let{selectedItem:t,permissions:r}=e;return t?r.getPermissions({item:t}):r.getPermissions({root:!0})})),o=(0,rO.useAppStoreApi)(),a=(0,rk.useCallback)((t,r)=>(0,rB.__async)(null,null,function*(){let{dispatch:n,state:i,selectedItem:a,resolveComponentData:l}=o.getState(),{data:s,ui:c}=i,{itemSelector:u}=c,d=s.root.props||s.root,p=a?a.props:d,h=(0,rB.__spreadProps)((0,rB.__spreadValues)({},p),{[e]:t});if(a&&u){let e=yield l((0,rB.__spreadProps)((0,rB.__spreadValues)({},a),{props:h}),"replace"),t=uT(o.getState().state,a.props.id);if(!t)return;n({type:"replace",destinationIndex:t.index,destinationZone:t.zone||rx.rootDroppableId,data:e.node,ui:r});return}n(s.root.props?{type:"replaceRoot",root:(yield l((0,rB.__spreadProps)((0,rB.__spreadValues)({},s.root),{props:h}),"replace")).node,ui:(0,rB.__spreadValues)((0,rB.__spreadValues)({},c),r),recordHistory:!0}:{type:"setData",data:{root:h}})}),[e]),{visible:l=!0}=null!=t?t:{},s=(0,rk.useContext)(ch.ctx);return((0,rk.useEffect)(()=>o.subscribe(t=>{var r;return null==(r=t.getCurrentData().props)?void 0:r[e]},t=>{s.setState({[e]:t})}),[o,s]),t&&n&&l&&"slot"!==t.type)?(0,rF.jsx)("div",{className:pu("field"),children:(0,rF.jsx)(uo,{field:t,name:e,id:n,readOnly:!i.edit||r,onChange:a})},n):null},ph=(0,rk.memo)(({fieldName:e})=>{let t=(0,rO.useAppStoreApi)(),r=(0,rk.useMemo)(()=>{var r;let n=null==(r=t.getState().getCurrentData().props)?void 0:r[e];return{[e]:n}},[]);return(0,rF.jsx)(ch.Provider,{value:r,children:(0,rF.jsx)(pp,{fieldName:e})})}),pf=(0,rk.memo)(({wrapFields:e=!0})=>{let t=(0,rO.useAppStore)(e=>e.overrides),r=(0,rO.useAppStore)(e=>{var t,r;let n=e.selectedItem?null==(t=e.componentState[e.selectedItem.props.id])?void 0:t.loadingCount:null==(r=e.componentState.root)?void 0:r.loadingCount;return(null!=n?n:0)>0}),n=(0,rO.useAppStore)(rV(e=>e.state.ui.itemSelector)),i=(0,rO.useAppStore)(e=>{var t;return null==(t=e.selectedItem)?void 0:t.props.id}),o=(0,rO.useAppStoreApi)();(0,rO.useRegisterFieldsSlice)(o,i);let a=(0,rO.useAppStore)(e=>e.fields.loading),l=(0,rO.useAppStore)(rV(e=>e.fields.id===i?Object.keys(e.fields.fields):[])),s=a||r,c=(0,rk.useMemo)(()=>t.fields||pd,[t]);return(0,rF.jsxs)("form",{className:pu({wrapFields:e}),onSubmit:e=>{e.preventDefault()},children:[(0,rF.jsx)(c,{isLoading:s,itemSelector:n,children:l.map(e=>(0,rF.jsx)(ph,{fieldName:e},e))}),s&&(0,rF.jsx)("div",{className:pu("loadingOverlay"),children:(0,rF.jsx)("div",{className:pu("loadingOverlayInner"),children:(0,rF.jsx)(rO.Loader,{size:16})})})]})});(0,rB.init_react_import)();var pm=(0,rb.get_class_name_factory_default)("FieldsPlugin",{FieldsPlugin:"_FieldsPlugin_18cj3_1","FieldsPlugin-header":"_FieldsPlugin-header_18cj3_7"}),pg=()=>{let e=(0,rO.useMessage)("label-page"),t=(0,rO.useAppStore)(e=>{var t,r;let n=e.selectedItem;return n?null!=(r=null==(t=e.config.components[n.type])?void 0:t.label)?r:n.type:null});return null!=t?t:e},pv=({desktopSideBar:e="right",label:t,icon:r}={})=>({name:"fields",label:null!=t?t:"Fields",render:()=>(0,rF.jsxs)("div",{className:pm(),children:[(0,rF.jsx)("div",{className:pm("header"),children:(0,rF.jsx)(pc,{numParents:2,children:(0,rF.jsx)(pg,{})})}),(0,rF.jsx)(pf,{})]}),icon:null!=r?r:(0,rF.jsx)(rO.RectangleEllipsis,{}),mobileOnly:"right"===e});(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var p_=`@import "https://rsms.me/inter/inter.css";

/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_qyenz_1 + ._InputWrapper_qyenz_1 {
  margin-top: var(--puck-space-3);
}
._Input-label_qyenz_5 {
  align-items: center;
  color: var(--puck-field-label-color-text, var(--puck-color-text-secondary));
  display: flex;
  padding-bottom: var(--puck-field-label-space-y, var(--puck-space-3));
  font-size: var(--puck-field-label-font-size, var(--puck-font-size-xxs));
  font-weight: var( --puck-field-label-font-weight, var(--puck-font-weight-semibold) );
}
._Input-labelIcon_qyenz_17 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-end: var(--puck-space-1);
  padding-inline-start: var(--puck-space-1);
}
._Input-disabledIcon_qyenz_24 {
  color: var(--puck-color-text-muted);
  margin-inline-start: auto;
}
._Input-input_qyenz_29 {
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: var(--puck-field-color-text, var(--puck-color-text));
  font-family: inherit;
  font-size: var(--puck-font-size-xs);
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_qyenz_29 {
    font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  }
}
._Input-select_qyenz_61 {
  position: relative;
  width: 100%;
}
select._Input-input_qyenz_29 {
  appearance: none;
  cursor: pointer;
}
._Input-selectIcon_qyenz_71 {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  fill: var(--puck-field-color-border, var(--puck-color-border));
  stroke-width: 0;
}
._Input-selectIcon_qyenz_71:dir(rtl) {
  right: auto;
  left: 12px;
}
@media (hover: hover) and (pointer: fine) {
  ._Input_qyenz_1:has(> input):hover ._Input-input_qyenz_29:not([readonly]),
  ._Input_qyenz_1:has(> textarea):hover ._Input-input_qyenz_29:not([readonly]) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:has(> ._Input-select_qyenz_61):hover ._Input-input_qyenz_29:not([disabled]) {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:not(._Input--readOnly_qyenz_111):has(> ._Input-select_qyenz_61):hover ._Input-selectIcon_qyenz_71 {
    fill: var(--puck-field-color-border-hover, var(--puck-color-border-hover));
  }
}
._Input-input_qyenz_29:focus {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-input_qyenz_29,
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 ~ ._Input-selectIcon_qyenz_71 {
  fill: var(--puck-field-color-text-disabled, var(--puck-color-text-secondary));
}
._Input-radioGroupItems_qyenz_150 {
  --_puck-field-radio-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-radio-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-radio-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  display: flex;
  border: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  border-radius: var(--_puck-field-radio-radius);
  flex-wrap: wrap;
}
._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  flex-grow: 1;
}
._Input-radio_qyenz_150:first-of-type {
  border-bottom-left-radius: var(--_puck-field-radio-radius);
  border-top-left-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:first-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radio_qyenz_150:last-of-type {
  border-bottom-right-radius: var(--_puck-field-radio-radius);
  border-inline-end: 0;
  border-top-right-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:last-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-radio-border-width)) );
  text-align: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Input-radio_qyenz_150:has(:focus-visible) {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_qyenz_179:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._Input--readOnly_qyenz_111 ._Input-radioGroupItems_qyenz_150 {
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_qyenz_111 ._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text-secondary));
  cursor: default;
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--puck-field-color-border-disabled, var(--puck-color-border));
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150:last-of-type {
  border-inline-end: 0;
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-medium);
}
._Input--readOnly_qyenz_111 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
textarea._Input-input_qyenz_29 {
  margin-bottom: calc(var(--puck-space-1) * -1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_62huh_5 {
  --_puck-field-array-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  --_puck-field-array-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-array-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-array-radius-inner: calc( var(--_puck-field-array-radius) - var(--_puck-field-array-border-width) );
  display: flex;
  flex-direction: column;
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  border: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-radius: var(--_puck-field-array-radius);
}
._ArrayField--isDraggingFrom_62huh_30 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  overflow: hidden;
}
._ArrayField-addButton_62huh_38 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: none;
  border-radius: var(--_puck-field-array-radius-inner);
  display: flex;
  color: var(--puck-field-array-add-color-icon, var(--puck-color-interactive));
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: calc(var(--puck-field-space-y, var(--puck-space-3)) + 2px) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  text-align: left;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayField--hasItems_62huh_58 > ._ArrayField-addButton_62huh_38 {
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_62huh_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayField-inner_62huh_93 {
  margin-top: -1px;
}
._ArrayFieldItem_62huh_101 {
  display: block;
  position: relative;
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
}
._ArrayFieldItem--isDragging_62huh_110 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_62huh_114::before {
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: var(--_puck-field-array-border-width) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring)) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_62huh_110 {
  outline: var(--puck-border-width-focus) var(--puck-field-color-border-dragging, var(--puck-color-selection-border)) solid !important;
}
._ArrayFieldItem--isDragging_62huh_110 ._ArrayFieldItem-summary_62huh_132:active {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
}
._ArrayFieldItem_62huh_101 + ._ArrayFieldItem_62huh_101 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_62huh_132 {
  --_puck-drag-icon-color: var(--puck-field-color-text, var(--puck-color-text));
  --_puck-drag-icon-color-hover: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  list-style: none;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  position: relative;
  overflow: hidden;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayFieldItem--noFields_62huh_167 > ._ArrayFieldItem-summary_62huh_132 {
  cursor: grab;
}
._ArrayFieldItem_62huh_101:first-of-type > ._ArrayFieldItem-summary_62huh_132 {
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem_62huh_101:last-of-type:not(._ArrayFieldItem--isExpanded_62huh_114) > ._ArrayFieldItem-summary_62huh_132 {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem--isExpanded_62huh_114:last-of-type {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayFieldItem-summary_62huh_132:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_62huh_132:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayFieldItem-summary_62huh_132:active {
  background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-summary_62huh_132 {
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-semibold);
  transition: none;
}
._ArrayFieldItem-body_62huh_228 {
  background: var(--puck-field-color-surface, var(--puck-color-surface));
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-body_62huh_228 {
  display: block;
}
._ArrayFieldItem-fieldset_62huh_237 {
  border: none;
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
}
._ArrayFieldItem-rhs_62huh_250 {
  display: flex;
  gap: var(--puck-space-1);
  align-items: center;
}
._ArrayFieldItem-actions_62huh_256 {
  color: var(--puck-color-text-secondary);
  display: flex;
  gap: var(--puck-space-1);
  opacity: 0;
}
._ArrayFieldItem-summary_62huh_132:focus-within > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256,
._ArrayFieldItem-summary_62huh_132:hover > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256 {
  opacity: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_1pxxt_1 {
  align-items: center;
  background: var(--puck-iconbutton-color-bg, transparent);
  border: none;
  border-radius: var(--puck-iconbutton-radius, var(--puck-radius-m));
  color: var(--puck-iconbutton-color-icon, currentColor);
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: var(--puck-iconbutton-space, var(--puck-space-1));
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._IconButton--active_1pxxt_15 {
  color: var( --puck-iconbutton-color-icon-active, var(--puck-color-interactive) );
}
._IconButton_1pxxt_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_1pxxt_1:hover:not(._IconButton--disabled_1pxxt_28) {
    background: var( --_puck-iconbutton-color-bg-hover, var( --puck-iconbutton-color-bg-hover, var(--puck-color-interactive-neutral-hover) ) );
    color: var( --puck-iconbutton-color-icon-hover, var(--puck-color-interactive) );
    cursor: pointer;
    transition: none;
  }
}
._IconButton_1pxxt_1:active {
  background: var( --puck-iconbutton-color-bg-active, var(--puck-color-interactive-soft) );
  transition: none;
}
._IconButton--disabled_1pxxt_28 {
  color: var( --puck-iconbutton-color-icon-disabled, var(--puck-color-text-subtle) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_5e515_1 {
  color: var(--_puck-drag-icon-color, var(--puck-color-text-muted));
  cursor: grab;
  padding: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
}
._DragIcon--disabled_5e515_10 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_5e515_1:not(._DragIcon--disabled_5e515_10):hover {
    color: var(--_puck-drag-icon-color-hover, var(--puck-color-focus-ring));
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder]:not([data-puck-line-drag] *) * {
  opacity: 0 !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --_puck-field-array-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_143vl_1 {
  display: flex;
}
._ExternalInput-button_143vl_5 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  font-weight: var(--puck-font-weight-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;
}
._ExternalInput--dataSelected_143vl_34 ._ExternalInput-button_143vl_5 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_143vl_41 ._ExternalInput-button_143vl_5 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
}
._ExternalInput-detachButton_143vl_48 {
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-bottom-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  background-color: var( --puck-field-external-detach-color-bg, var(--puck-color-surface-subtle) );
  color: var( --puck-field-external-detach-color-text, var(--puck-color-text-muted) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  padding: var(--puck-space-2) var(--puck-space-3);
  position: relative;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  margin-inline-start: -1px;
  cursor: pointer;
}
._ExternalInput-button_143vl_5:focus-visible,
._ExternalInput-detachButton_143vl_48:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover,
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    transition: none;
  }
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-external-detach-color-text, var(--puck-color-text-muted)) );
  }
  ._ExternalInput--dataSelected_143vl_34:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  }
}
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:active,
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ExternalInputModal_143vl_118 {
  color: var(--puck-color-text);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_143vl_128 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_143vl_128 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-grid_143vl_128 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_143vl_144 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_143vl_144 {
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
    display: block;
  }
}
._ExternalInputModal-masthead_143vl_164 {
  background-color: var(--puck-color-surface-subtle);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-5);
  padding: var(--puck-space-5);
}
._ExternalInputModal-tableWrapper_143vl_173 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_143vl_173 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-text);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_143vl_189 {
  background-color: var(--puck-color-surface);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_143vl_189 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-td_143vl_204 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-tr_143vl_210 ._ExternalInputModal-td_143vl_204:first-of-type {
  font-weight: var(--puck-font-weight-medium);
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover {
    background: var(--puck-color-interactive-soft-hover);
    color: var(--puck-color-interactive);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover ._ExternalInputModal-td_143vl_204:first-of-type {
    border-inline-start: var(--puck-border-width-strong) solid var(--puck-color-interactive);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:last-of-type ._ExternalInputModal-td_143vl_204 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_143vl_173 {
  display: none;
}
._ExternalInputModal--hasData_143vl_244 ._ExternalInputModal-tableWrapper_143vl_173 {
  display: block;
}
._ExternalInputModal-loadingBanner_143vl_248 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-surface) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_143vl_265 ._ExternalInputModal-loadingBanner_143vl_248 {
  display: flex;
}
._ExternalInputModal-searchForm_143vl_269 {
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-3);
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_143vl_269 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_143vl_269 {
  display: flex;
  background: var(--puck-color-surface);
  border-width: var(--puck-border-width-regular);
  border-style: solid;
  border-color: var(--puck-color-border);
  border-radius: var(--puck-radius-m);
  flex-grow: 1;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within {
  border-color: var(--puck-color-border-hover);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover {
    border-color: var(--puck-color-border-hover);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_143vl_306 {
  align-items: center;
  background: var(--puck-color-surface-subtle);
  border-bottom-left-radius: var(--puck-radius-m);
  border-top-left-radius: var(--puck-radius-m);
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-subtle);
  display: flex;
  justify-content: center;
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within ._ExternalInputModal-searchIcon_143vl_306 {
  color: var(--puck-color-text-secondary);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover ._ExternalInputModal-searchIcon_143vl_306 {
    color: var(--puck-color-text-secondary);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_143vl_333 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_143vl_343 {
  border: none;
  border-radius: var(--puck-radius-m);
  background: var(--puck-color-surface);
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  width: 100%;
}
._ExternalInputModal-searchInput_143vl_343:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_143vl_358 {
  display: flex;
  gap: var(--puck-space-2);
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_143vl_358 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_143vl_371 {
  align-self: center;
}
._ExternalInputModal-footerContainer_143vl_375 {
  background-color: var(--puck-color-surface-subtle);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._ExternalInputModal-footer_143vl_375 {
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  text-align: right;
}
._ExternalInputModal-field_143vl_388 {
  color: var(--puck-color-text-secondary);
  margin: var(--puck-space-4);
  margin-bottom: var(--puck-space-3);
  display: block;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Modal/styles.module.css/#css-module-data */
._Modal_g5xob_1 {
  background: var(--puck-color-overlay-backdrop);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_g5xob_15 {
  display: flex;
}
._Modal-inner_g5xob_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: var(--puck-radius-l);
  overflow: hidden;
  background: var(--puck-color-surface);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Heading/styles.module.css/#css-module-data */
._Heading_97eh4_1 {
  display: block;
  color: var(--_puck-heading-color, var(--puck-color-text));
  font-weight: var(--puck-font-weight-bold);
  margin: 0;
}
._Heading_97eh4_1 b {
  font-weight: var(--puck-font-weight-bold);
}
._Heading--xxxxl_97eh4_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: var(--puck-letter-spacing-heading);
  font-weight: var(--puck-font-weight-heavy);
}
._Heading--xxxl_97eh4_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_97eh4_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_97eh4_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_97eh4_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_97eh4_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_97eh4_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_97eh4_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Button/Button.module.css/#css-module-data */
._Button_oe4qj_1 {
  --_puck-button-default-space-x: 20px;
  --_puck-button-default-font-size: var(--puck-font-size-xxs);
  --_puck-button-default-font-weight: var(--puck-font-weight-regular);
  --_puck-button-default-color-bg-disabled: var(--puck-color-bg-disabled);
  --_puck-button-default-color-text-disabled: var(--puck-color-text-disabled);
  appearance: none;
  background: none;
  border: var(--puck-border-width-regular) solid transparent;
  border-radius: var(--puck-button-radius, var(--puck-radius-m));
  color: var(--puck-color-text-inverse);
  display: inline-flex;
  align-items: center;
  gap: var(--puck-space-2);
  letter-spacing: var(--puck-letter-spacing-ui);
  font-family: var(--puck-font-family);
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_oe4qj_1:hover,
._Button_oe4qj_1:active {
  transition: none;
}
._Button--medium_oe4qj_34 {
  min-height: 34px;
  padding-bottom: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-medium-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-medium-font-size, var(--_puck-button-default-font-size) );
}
._Button--large_oe4qj_62 {
  padding-bottom: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-large-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-large-font-size, var(--_puck-button-default-font-size) );
}
._Button-icon_oe4qj_89 {
  margin-top: 2px;
}
._Button--primary_oe4qj_93 {
  background: var( --puck-button-primary-color-bg, var(--puck-color-interactive) );
  border-color: var(--puck-button-primary-color-border, transparent);
  color: var(--puck-button-primary-color-text, var(--puck-color-text-inverse));
}
._Button_oe4qj_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_oe4qj_93:hover {
    background-color: var( --puck-button-primary-color-bg-hover, var(--puck-color-interactive-hover) );
  }
}
._Button--primary_oe4qj_93:active {
  background-color: var( --puck-button-primary-color-bg-active, var(--puck-color-interactive-active) );
}
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123,
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-primary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-primary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--secondary_oe4qj_135 {
  background: var(--puck-button-secondary-color-bg, transparent);
  border-color: var(--puck-button-secondary-color-border, currentColor);
  color: var(--puck-button-secondary-color-text, currentColor);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_oe4qj_135:hover {
    background-color: var( --puck-button-secondary-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var(--puck-button-secondary-color-text, var(--puck-color-text));
  }
}
._Button--secondary_oe4qj_135:active {
  background-color: var( --puck-button-secondary-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-button-secondary-color-text, var(--puck-color-text));
}
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123,
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-secondary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-secondary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--flush_oe4qj_171 {
  border-radius: var(--puck-radius-none);
}
._Button--disabled_oe4qj_123:hover {
  cursor: not-allowed;
}
._Button--fullWidth_oe4qj_179 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_oe4qj_184 {
  padding-inline-start: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Select/styles.module.css/#css-module-data */
._Select_1n4iv_1 {
  position: relative;
  z-index: 1;
}
._Select-buttonInner_1n4iv_6 {
  align-items: center;
  display: flex;
}
._Select-buttonIcon_1n4iv_11 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_1n4iv_17 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Select--actionBar_1n4iv_22 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._Select-items_1n4iv_27 {
  background: var(--puck-color-surface);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-l);
  margin: 10px 8px;
  margin-left: 0;
  padding: var(--puck-space-1);
  z-index: 2;
  list-style: none;
}
._SelectItem_1n4iv_38 {
  background: transparent;
  border-radius: var(--puck-radius-m);
  border: none;
  color: var(--puck-color-text-secondary);
  cursor: pointer;
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: var(--puck-space-2) var(--puck-space-3);
  width: 100%;
}
._SelectItem--isSelected_1n4iv_53 {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
  font-weight: var(--puck-font-weight-medium);
}
._SelectItem--isSelected_1n4iv_53 ._SelectItem-icon_1n4iv_59 {
  color: var(--puck-color-interactive);
}
._SelectItem_1n4iv_38:hover {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_5wzos_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_5wzos_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_5wzos_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: var(--puck-border-width-strong) solid var(--puck-color-border);
}
._RichTextEditor_5wzos_1 .rich-text code {
  background-color: var(--puck-color-surface-muted);
  padding: var(--puck-space-1) var(--puck-space-2);
  border-radius: var(--puck-radius-m);
}
._RichTextEditor_5wzos_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_5wzos_1 .rich-text pre code {
  display: block;
  padding: var(--puck-space-2) var(--puck-space-3);
}
._RichTextEditor_5wzos_1 .rich-text > *:first-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:first-child,
._RichTextEditor_5wzos_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_5wzos_1 .rich-text > *:last-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:last-child,
._RichTextEditor_5wzos_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_5wzos_50 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  resize: vertical;
  text-align: initial;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_5wzos_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_5wzos_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50 .rich-text .ProseMirror {
  height: 100%;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._RichTextEditor--editor_5wzos_50 .rich-text ul,
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  padding-left: var(--puck-space-5);
}
._RichTextEditor--editor_5wzos_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_5wzos_50 .rich-text p {
  margin-block: var(--puck-space-3);
}
._RichTextEditor--editor_5wzos_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_5wzos_50:focus-within {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._RichTextEditor--editor_5wzos_50:hover:not(._RichTextEditor--disabled_5wzos_123) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 {
  background: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text .ProseMirror {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .ProseMirror[contenteditable=false] {
  cursor: default;
}
._RichTextEditor_5wzos_1:not(:focus-within):not(._RichTextEditor--isActive_5wzos_159) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_5wzos_123 ._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data */
._ObjectField_c5reb_1 {
  display: flex;
  flex-direction: column;
  background-color: var(--puck-field-color-surface, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
}
._ObjectField-fieldset_c5reb_10 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_wnj25_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_wnj25_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_wnj25_10 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_wnj25_25 {
  display: flex;
  padding: var(--puck-space-4);
  position: sticky;
  top: 0;
}
._PuckFields-field_wnj25_32 * {
  box-sizing: border-box;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 {
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
  padding-bottom: var(--puck-space-3);
  display: block;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 + ._PuckFields-field_wnj25_32 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-top: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_htktj_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_htktj_5 + ._ComponentList_htktj_1 {
  margin-top: var(--puck-space-3);
}
._ComponentList-content_htktj_9 {
  display: none;
}
._ComponentList--isExpanded_htktj_5 > ._ComponentList-content_htktj_9 {
  display: block;
}
._ComponentList-title_htktj_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-drawer-category-color-text, var(--puck-color-text-muted));
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-drawer-category-font-size, var(--puck-font-size-xxxs));
  list-style: none;
  margin-bottom: 6px;
  padding: var(--puck-drawer-category-space, var(--puck-space-2));
  text-transform: uppercase;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  gap: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  width: 100%;
}
._ComponentList-title_htktj_17:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_htktj_17:hover {
    background-color: var( --puck-drawer-category-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-drawer-category-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._ComponentList-title_htktj_17:active {
  background-color: var( --puck-drawer-category-color-bg-active, var(--puck-color-interactive-subtle) );
  transition: none;
}
._ComponentList-titleIcon_htktj_63 {
  margin-inline-start: auto;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_zbic3_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_zbic3_6 {
  border: none;
  height: 100%;
  width: 100%;
}
._PuckPreview-frame_zbic3_6[data-puck-outline-dragging] {
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/drop-line/styles.module.css/#css-module-data */
._DropLine_eyz3q_2 {
  background: var(--_puck-outline-color-drop-indicator);
  border-radius: calc(var(--_puck-outline-drop-indicator-size) / 2);
  height: var(--_puck-outline-drop-indicator-size);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropLine--top_eyz3q_12 {
  top: 0;
}
._DropLine--bottom_eyz3q_16 {
  bottom: 0;
}
._DropLine--top_eyz3q_12._DropLine--outset_eyz3q_20 {
  top: calc(-1 * var(--_puck-outline-drop-indicator-size));
}
._DropLine--bottom_eyz3q_16._DropLine--outset_eyz3q_20 {
  bottom: calc(-1 * var(--_puck-outline-drop-indicator-size));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/empty-zone-placeholder/styles.module.css/#css-module-data */
._LayerTree-helper_1m7e4_2 {
  color: var(--puck-outline-color-text-helper, var(--puck-color-text-subtle));
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-helperRoot_1m7e4_11 {
  padding-inline-start: var(--puck-space-3);
}
._LayerTree-helper_1m7e4_2[data-puck-drop-target] {
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer/styles.module.css/#css-module-data */
._Layer_onfgu_1 {
  position: relative;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
}
._Layer-inner_onfgu_8 {
  align-items: center;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Layer--isSortable_onfgu_18 > ._Layer-inner_onfgu_8 {
  cursor: grab;
}
._Layer-content_onfgu_22 {
  display: flex;
  gap: var(--puck-space-4);
  flex: 1 1 auto;
  min-width: 0;
}
._Layer-clickable_onfgu_29 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: var(--_puck-outline-radius);
  color: inherit;
  cursor: inherit;
  display: flex;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 0;
}
[data-puck-dnd-disabled] ._Layer-inner_onfgu_8,
[data-puck-dnd-disabled] ._Layer-clickable_onfgu_29 {
  cursor: pointer;
}
._Layer-clickable_onfgu_29:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
  z-index: 1;
}
._Layer-caret_onfgu_57 {
  visibility: hidden;
  display: flex;
  flex-shrink: 0;
}
._Layer-caret_onfgu_57 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-content_onfgu_22 {
  font-weight: var(--puck-font-weight-bold);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 {
  visibility: visible;
}
._Layer-title_onfgu_76 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  margin: var(--puck-space-1);
  cursor: pointer;
}
._Layer-name_onfgu_85 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_onfgu_91 {
  color: var(--puck-outline-color-icon, var(--puck-color-text-subtle));
  margin-top: var(--puck-space-1);
}
._Layer-icon_onfgu_91 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._Layer-zones_onfgu_101 {
  display: none;
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-4));
}
._Layer--isExpanded_onfgu_106 > ._Layer-zones_onfgu_101 {
  display: block;
}
._Layer--isExpanded_onfgu_106 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 svg {
  transform: rotate(90deg);
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_onfgu_1:not(._Layer--isSelected_onfgu_115) > ._Layer-inner_onfgu_8:hover {
    --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-hover);
    border-color: var(--_puck-outline-color-border-hover);
    background: var(--_puck-outline-color-bg-hover);
    transition: none;
  }
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  border-color: var( --puck-outline-color-border-selected, var(--puck-color-selection-border) );
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-selected);
  background: var(--_puck-outline-color-bg-selected);
}
._Layer--isExpandCandidate_onfgu_138 > ._Layer-inner_onfgu_8 {
  border-color: var(--_puck-outline-color-border-hover);
  background: var(--_puck-outline-color-bg-hover);
}
._Layer--isDragSource_onfgu_143 > ._Layer-inner_onfgu_8 {
  color: var(--puck-color-text-muted);
  background: transparent;
}
._Layer--isDragSource_onfgu_143 > ._Layer-zones_onfgu_101 {
  opacity: 0.5;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-actions/styles.module.css/#css-module-data */
._LayerActions_d90t9_2 {
  position: sticky;
  inset-inline-end: calc(var(--puck-space-1) * -1);
  padding-inline: var(--puck-space-1);
  display: flex;
  visibility: hidden;
  flex-shrink: 0;
  color: var(--_puck-outline-color-text);
  background: var(--_puck-outline-actions-color-bg);
  border-top-right-radius: var(--_puck-outline-radius);
  border-bottom-right-radius: var(--_puck-outline-radius);
}
._LayerActions--visible_d90t9_18 {
  visibility: visible;
}
._LayerActions_d90t9_2 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-items/styles.module.css/#css-module-data */
._LayerTree_o5tyt_1 {
  color: var(--_puck-outline-color-text);
  font-family: var(--puck-outline-font-family, var(--puck-font-family));
  font-size: var(--puck-outline-font-size, var(--puck-font-size-xxxs));
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree--nested_o5tyt_12 {
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-3));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-zone/styles.module.css/#css-module-data */
._LayerTree-zoneTitle_fvhlh_2 {
  color: var(--_puck-outline-zone-color-text);
  font-size: var( --puck-outline-zone-font-size, calc(var(--puck-font-size-xxxs) * 0.9) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-zoneIcon_fvhlh_19 {
  margin-top: var(--puck-space-1);
}
._LayerTree-zoneIcon_fvhlh_19 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._LayerTree-zoneTitle_fvhlh_2[data-puck-drop-target] {
  color: var(--_puck-outline-color-text-hover);
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/styles.module.css/#css-module-data */
._LayerTreeRoot_1qowl_1 {
  min-width: max-content;
  --_puck-iconbutton-color-bg-hover: transparent;
  --_puck-outline-color-text: var( --puck-outline-color-text, var(--puck-color-text-primary) );
  --_puck-outline-border-width: var( --puck-outline-border-width, var(--puck-border-width-regular) );
  --_puck-outline-radius: var(--puck-outline-radius, var(--puck-radius-m));
  --_puck-outline-caret-size: var( --puck-outline-action-size, var(--puck-icon-size-s) );
  --_puck-outline-icon-size: var( --puck-outline-icon-size, var(--puck-icon-size-xs) );
  --_puck-outline-color-bg-selected: var( --puck-outline-color-bg-selected, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-bg-hover: var( --puck-outline-color-bg-hover, var(--puck-color-interactive-soft) );
  --_puck-outline-color-border-hover: var( --puck-outline-color-border-hover, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-text-hover: var( --puck-outline-color-text-hover, var(--puck-color-interactive) );
  --_puck-outline-color-drop-indicator: var( --puck-outline-color-drop-indicator, var(--puck-color-line-placeholder) );
  --_puck-outline-drop-indicator-size: var(--puck-line-placeholder-width);
  --_puck-outline-zone-color-text: var( --puck-outline-zone-color-text, var(--puck-color-text-muted) );
  --_puck-outline-actions-color-bg: transparent;
  --_puck-outline-caret-slot: calc( var(--_puck-outline-caret-size) + var(--puck-iconbutton-space, var(--puck-space-1)) * 2 );
  --_puck-outline-label-indent: calc( var(--_puck-outline-caret-slot) + var(--puck-space-2) + var(--_puck-outline-border-width) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/collapse-all/styles.module.css/#css-module-data */
._CollapseAll_1r4cy_1 {
  visibility: hidden;
}
._CollapseAll-icon_1r4cy_5 {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._CollapseAll--visible_1r4cy_10 {
  visibility: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/outline-header/styles.module.css/#css-module-data */
._OutlineHeader_ntv8r_1 {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--puck-space-2);
  padding-block: var(--puck-space-3);
  padding-inline: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/styles.module.css/#css-module-data */
._OutlineWrapper_b9ln0_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
}
._OutlineWrapper-collapseAll_b9ln0_9 {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
._OutlineWrapper-layers_b9ln0_15 {
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding: var(--puck-space-1);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_tzaxg_19 {
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_tzaxg_19 {
    overflow-x: auto;
  }
}
._Puck-portal_tzaxg_31 {
  position: relative;
  z-index: 2;
}
._PuckLayout_tzaxg_36 {
  height: 100dvh;
}
._PuckLayout-inner_tzaxg_40 {
  --puck-frame-width: auto;
  --puck-pluginbar-width: min-content;
  --puck-sidebar-width: 0px;
  --puck-sidebar-left-width: var( --puck-user-sidebar-left-width, var(--puck-sidebar-width) );
  --puck-sidebar-right-width: var( --puck-user-sidebar-right-width, var(--puck-sidebar-width) );
  background-color: var(--puck-color-surface-subtle);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-pluginbar-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-exit);
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_tzaxg_73 ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 0;
  }
}
._PuckLayout--mounted_tzaxg_78 ._PuckLayout-inner_tzaxg_40 {
  --puck-sidebar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 30% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 55% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto min-content 0 var(--puck-pluginbar-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_tzaxg_156 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 320px;
  }
}
._PuckLayout-nav_tzaxg_197 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  background-color: var( --puck-pluginbar-color-bg, var(--puck-color-surface-subtle) );
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_tzaxg_197 {
    border-top: 0;
    border-right: var(--puck-border-width-regular) solid var(--puck-color-border);
    box-sizing: border-box;
  }
}
._PuckLayout-header_tzaxg_217 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
    overflow: auto;
  }
}
._PuckPluginTab_tzaxg_231 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_tzaxg_237 {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
._PuckPluginTab-body_tzaxg_243 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_1hxnj_1 {
  background-color: var(--_puck-menu-bar-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: var(--puck-space-2) var(--puck-space-4);
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_1hxnj_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_1hxnj_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_1hxnj_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-2) var(--puck-space-4);
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_1hxnj_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_1hxnj_45 {
  display: flex;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_c2nei_1 {
  --_puck-menu-bar-color-bg: var( --puck-header-color-bg, var(--puck-color-surface) );
  background: var(--puck-header-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-header-color-text, var(--puck-color-text));
  --_puck-heading-color: var(--puck-header-color-text, var(--puck-color-text));
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_c2nei_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_c2nei_21 {
    padding-left: 0;
  }
}
._PuckHeader-inner_c2nei_26 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-chrome-gutter);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-chrome-gutter);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_c2nei_26 {
    border-left: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
  ._PuckHeader--hidePlugins_c2nei_21 ._PuckHeader-inner_c2nei_26 {
    border-left: none;
  }
}
._PuckHeader-toggle_c2nei_46 {
  display: flex;
  margin-inline-start: calc(var(--puck-space-1) * -1);
  padding-top: 2px;
}
._PuckHeader-rightSideBarToggle_c2nei_52,
._PuckHeader-leftSideBarToggle_c2nei_53 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_c2nei_52,
  ._PuckHeader-leftSideBarToggle_c2nei_53 {
    display: block;
  }
}
._PuckHeader-title_c2nei_64 {
  align-self: center;
}
._PuckHeader-path_c2nei_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_c2nei_75 {
  display: flex;
  gap: var(--puck-space-4);
  justify-content: flex-end;
}
._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text-muted);
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._PuckHeader--menuOpen_c2nei_86 ._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_c2nei_81 {
    display: none;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_1uv88_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-text);
}
._SidebarSection_1uv88_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_1uv88_12 {
  background: var(--_puck-sidebar-section-color-bg, var(--puck-color-surface));
  padding: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  overflow-x: auto;
}
._SidebarSection--noBorderTop_1uv88_20 > ._SidebarSection-title_1uv88_12 {
  border-top: 0px;
}
._SidebarSection-content_1uv88_24:last-child {
  padding-bottom: var(--puck-space-1);
}
._SidebarSection_1uv88_1:last-of-type ._SidebarSection-content_1uv88_24 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_1uv88_33 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._SidebarSection-breadcrumbLabel_1uv88_33:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_1uv88_33:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_1uv88_33:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._SidebarSection-breadcrumbs_1uv88_62 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-breadcrumb_1uv88_33 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-heading_1uv88_74 {
  padding-inline-end: var(--puck-space-4);
}
._SidebarSection-loadingOverlay_1uv88_78 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_8c6w5_1 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_8c6w5_7:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._Breadcrumbs-breadcrumb_8c6w5_7 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_v26yb_1 {
  position: relative;
}
._ViewportControls--fullScreen_v26yb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: var(--puck-space-3);
  right: var(--puck-space-3);
  overflow: hidden;
}
._ViewportControls-toggleButton_v26yb_14 {
  display: none;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14 {
  align-items: center;
  background-color: var(--puck-color-surface-inverse);
  border: var(--puck-border-width-regular) solid var(--puck-color-border-inverse);
  border-radius: var(--puck-radius-pill);
  cursor: pointer;
  color: var(--puck-color-text-inverse);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14:hover {
  color: var(--puck-color-interactive-inverse-hover);
  border: var(--puck-border-width-regular) solid var(--puck-color-interactive-inverse-hover);
}
._ViewportControls-actions_v26yb_39 {
  display: flex;
}
._ViewportControls-actionsInner_v26yb_43 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  background: var(--puck-color-surface-muted);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-pill);
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(100%);
  transition: transform var(--puck-duration-medium) var(--puck-ease-emphasized);
}
._ViewportControls--fullScreen_v26yb_5._ViewportControls--isExpanded_v26yb_67 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(42px);
}
._ViewportControls-divider_v26yb_72 {
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-bottom: var(--puck-space-2);
  margin-top: var(--puck-space-2);
}
._ViewportControls-zoomSelect_v26yb_79 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  color: currentColor;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: var(--puck-space-2);
  width: 96px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_v26yb_79,
  ._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_v26yb_79:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_v26yb_110 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_v26yb_118 ._ViewportButton-inner_v26yb_110 {
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_zw9iy_1 {
  color: var(--puck-canvas-color-text, var(--puck-color-text));
  background: var(--puck-canvas-color-bg, var(--puck-color-surface-muted));
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-chrome-gutter);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_zw9iy_1 {
    padding: calc(var(--puck-space-chrome-gutter) * 1.5);
    padding-top: calc(var(--puck-space-chrome-gutter) * 0.5);
  }
  ._PuckCanvas_zw9iy_1:not(._PuckCanvas_zw9iy_1:has(._PuckCanvas-controls_zw9iy_18)) {
    padding-top: calc(var(--puck-space-chrome-gutter) * 1.5);
  }
}
._PuckCanvas--fullScreen_zw9iy_23 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_zw9iy_23 {
    padding: 0;
  }
}
._PuckCanvas-inner_zw9iy_34 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_zw9iy_43 {
  background: var(--puck-canvas-preview-color-bg, var(--puck-color-surface));
  outline: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_zw9iy_43 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_zw9iy_43 {
    transition: none !important;
  }
}
._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-root_zw9iy_43 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_zw9iy_73 {
  align-items: center;
  color: var(--puck-color-text-subtle);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity var(--puck-duration-slow) var(--puck-ease-entrance);
  opacity: 0;
  pointer-events: none;
}
._PuckCanvas--showLoader_zw9iy_84 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 1;
}
._PuckCanvas--showLoader_zw9iy_84._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: calc(var(--puck-space-chrome-gutter) * 0.5);
}
._PuckCanvas--fullScreen_zw9iy_23 ._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_16oed_1 {
  border-block-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_16oed_10 {
  display: flex;
}
._Sidebar--left_16oed_14 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-left-color-bg, var(--puck-color-surface) );
  background: var( --puck-sidebar-left-color-bg, var(--puck-color-surface-subtle) );
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_16oed_14 {
    border-block-start: 0;
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar--right_16oed_34 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-right-color-bg, var(--puck-color-surface) );
  background: var(--puck-sidebar-right-color-bg, var(--puck-color-surface));
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_16oed_34 {
    border-block-start: 0;
    border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar-resizeHandle_16oed_51 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_16oed_14 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_16oed_34 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_vll2r_1 {
  display: flex;
}
._Nav-list_vll2r_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._Nav-list_vll2r_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: var(--puck-space-4);
    width: 100%;
  }
}
._Nav-mobileActions_vll2r_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: var(--puck-space-1) var(--puck-space-4);
  border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_vll2r_23 {
    display: none;
  }
}
._NavItem-link_vll2r_39 {
  text-align: center;
  align-items: center;
  color: var(--puck-pluginbar-color-text, var(--puck-color-text-secondary));
  display: flex;
  gap: var(--puck-space-2);
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--puck-radius-m);
  padding: var(--puck-space-2) var(--puck-space-1);
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    width: auto;
  }
}
._NavItem_vll2r_39:first-of-type {
  padding-left: var(--puck-space-4);
}
._NavItem_vll2r_39:last-of-type {
  padding-right: var(--puck-space-4);
}
@media (min-width: 638px) {
  ._NavItem_vll2r_39:first-of-type,
  ._NavItem_vll2r_39:last-of-type {
    padding: 0;
  }
}
._NavItem-link_vll2r_39 {
  border-top: var(--puck-border-width-strong) solid transparent;
  border-bottom: var(--puck-border-width-strong) solid transparent;
  border-radius: var(--puck-radius-none);
  flex-direction: column;
  font-size: var(--puck-pluginbar-font-size, var(--puck-font-size-xxxs));
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    border: 0;
    border-left: var(--puck-border-width-strong) solid transparent;
    border-right: var(--puck-border-width-strong) solid transparent;
  }
}
._NavItem-linkIcon_vll2r_90 {
  height: 2em;
  width: 2em;
}
._NavItem-linkIcon_vll2r_90 svg {
  height: 100%;
  width: 100%;
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: var(--puck-color-interactive-subtle);
  color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  font-weight: var(--puck-font-weight-semibold);
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: transparent;
  border-top-color: var(--puck-color-interactive);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: var(--puck-font-weight-semibold);
}
@media (min-width: 638px) {
  ._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
    border-top-color: transparent;
    border-right-color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  }
}
._NavItem_vll2r_39:not(._NavItem--active_vll2r_100) > ._NavItem-link_vll2r_39:hover {
  background-color: var( --puck-pluginbar-color-bg-hover, var(--puck-color-interactive-soft) );
  color: var(--puck-pluginbar-color-text-hover, var(--puck-color-interactive));
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_vll2r_136 {
    display: none;
  }
}
._NavItem--desktopOnly_vll2r_141 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_vll2r_141 {
    display: block;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_9af19_1 {
  padding: var(--puck-drawer-space, var(--puck-space-4));
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_1ylsc_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_18cj3_1 {
  background: var(--puck-color-surface);
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_18cj3_7 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  font-weight: var(--puck-font-weight-semibold);
  padding-bottom: var(--puck-space-2);
  padding-left: var(--puck-space-4);
  padding-right: var(--puck-space-4);
  padding-top: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_18cj3_7 {
    padding: var(--puck-space-4);
  }
}`,pb="data-puck-style-source",px="puck",py=new WeakMap,pk=(e,t,r=!1)=>{let n=e.head;if(n){if(t.parentElement!==n)return void(r?n.prepend(t):n.append(t));r&&n.firstChild!==t&&n.prepend(t),r||n.lastChild===t||n.append(t)}},pw=e=>(null==e?void 0:e.getAttribute(pb))===px,pS=e=>{var t;let r=(t=null==e?void 0:e.document)?t:"u">typeof document?document:void 0;(0,rk.useInsertionEffect)(()=>{if(!e||!r)return;let t=(e=>{let t=py.get(e);if(t)return t;let r=new Map;return py.set(e,r),r})(r),n=t.get(e.id);if(n)n.count=n.count+1,n.el.textContent!==e.cssText&&(n.el.textContent=e.cssText),pk(r,n.el,e.prepend);else{let n=((e,t,r,n=!1)=>{let i=e.createElement("style");return i.setAttribute(pb,px),i.setAttribute("data-puck-style-id",t),i.textContent=r,pk(e,i,n),i})(r,e.id,e.cssText,e.prepend);t.set(e.id,{count:1,el:n})}return()=>{let r=t.get(e.id);r&&(r.count=r.count-1,r.count<=0&&(r.el.remove(),t.delete(e.id)))}},[null==e?void 0:e.cssText,null==e?void 0:e.id,null==e?void 0:e.prepend,null==e?void 0:e.document,r])},pj=null,pI='style, link[rel="stylesheet"]',pz="data-puck-style-mirror",pC=e=>!(!e.matches(pI)||pw(e))&&("STYLE"!==e.tagName||!!e.innerHTML.trim()),pE=e=>Array.from(document.styleSheets).find(t=>t.ownerNode.href===e.href),pA=(e,t)=>{let r=e.attributes;(null==r?void 0:r.length)>0&&Array.from(r).forEach(e=>{t.setAttribute(e.name,e.value)})},pP=({children:e,debug:t=!1,onStylesLoaded:r=()=>null,syncHostStyles:n=!0})=>{let{document:i,window:o}=pM();return pS(i?{cssText:'/* styles/color.css */\n@layer puck-tokens {\n  :root {\n    --puck-color-rose-01: #4a001c;\n    --puck-color-rose-02: #670833;\n    --puck-color-rose-03: #87114c;\n    --puck-color-rose-04: #a81a66;\n    --puck-color-rose-05: #bc5089;\n    --puck-color-rose-06: #cc7ca5;\n    --puck-color-rose-07: #d89aba;\n    --puck-color-rose-08: #e3b8cf;\n    --puck-color-rose-09: #efd6e3;\n    --puck-color-rose-10: #f6eaf1;\n    --puck-color-rose-11: #faf4f8;\n    --puck-color-rose-12: #fef8fc;\n    --puck-color-azure-01: #00175d;\n    --puck-color-azure-02: #002c77;\n    --puck-color-azure-03: #014292;\n    --puck-color-azure-04: #0158ad;\n    --puck-color-azure-05: #3479be;\n    --puck-color-azure-06: #6499cf;\n    --puck-color-azure-07: #88b0da;\n    --puck-color-azure-08: #abc7e5;\n    --puck-color-azure-09: #cfdff0;\n    --puck-color-azure-10: #e7eef7;\n    --puck-color-azure-11: #f3f6fb;\n    --puck-color-azure-12: #f7faff;\n    --puck-color-green-01: #002000;\n    --puck-color-green-02: #043604;\n    --puck-color-green-03: #084e08;\n    --puck-color-green-04: #0c680c;\n    --puck-color-green-05: #1d882f;\n    --puck-color-green-06: #2faa53;\n    --puck-color-green-07: #56c16f;\n    --puck-color-green-08: #7dd78b;\n    --puck-color-green-09: #b8e8bf;\n    --puck-color-green-10: #ddf3e0;\n    --puck-color-green-11: #eff8f0;\n    --puck-color-green-12: #f3fcf4;\n    --puck-color-yellow-01: #211000;\n    --puck-color-yellow-02: #362700;\n    --puck-color-yellow-03: #4c4000;\n    --puck-color-yellow-04: #645a00;\n    --puck-color-yellow-05: #877614;\n    --puck-color-yellow-06: #ab9429;\n    --puck-color-yellow-07: #bfac4e;\n    --puck-color-yellow-08: #d4c474;\n    --puck-color-yellow-09: #e6deb1;\n    --puck-color-yellow-10: #f3efd9;\n    --puck-color-yellow-11: #f9f7ed;\n    --puck-color-yellow-12: #fcfaf0;\n    --puck-color-red-01: #4c0000;\n    --puck-color-red-02: #6a0a10;\n    --puck-color-red-03: #8a1422;\n    --puck-color-red-04: #ac1f35;\n    --puck-color-red-05: #bf5366;\n    --puck-color-red-06: #ce7e8e;\n    --puck-color-red-07: #d99ca8;\n    --puck-color-red-08: #e4b9c2;\n    --puck-color-red-09: #efd7db;\n    --puck-color-red-10: #f6eaec;\n    --puck-color-red-11: #faf4f5;\n    --puck-color-red-12: #fff9fa;\n    --puck-color-grey-01: #181818;\n    --puck-color-grey-02: #292929;\n    --puck-color-grey-03: #404040;\n    --puck-color-grey-04: #5a5a5a;\n    --puck-color-grey-05: #767676;\n    --puck-color-grey-06: #949494;\n    --puck-color-grey-07: #ababab;\n    --puck-color-grey-08: #c3c3c3;\n    --puck-color-grey-09: #dcdcdc;\n    --puck-color-grey-10: #efefef;\n    --puck-color-grey-11: #f5f5f5;\n    --puck-color-grey-12: #fafafa;\n    --puck-color-black: #000000;\n    --puck-color-white: #ffffff;\n  }\n}\n\n/* styles/tokens.css */\n@layer puck-tokens {\n  :root {\n    --puck-color-surface: var(--puck-color-white);\n    --puck-color-surface-muted: var(--puck-color-grey-11);\n    --puck-color-surface-subtle: var(--puck-color-grey-12);\n    --puck-color-surface-inverse: var(--puck-color-grey-01);\n    --puck-color-border: var(--puck-color-grey-09);\n    --puck-color-border-hover: var(--puck-color-grey-05);\n    --puck-color-border-muted: var(--puck-color-grey-10);\n    --puck-color-border-inverse: var(--puck-color-grey-05);\n    --puck-color-text: var(--puck-color-black);\n    --puck-color-text-secondary: var(--puck-color-grey-04);\n    --puck-color-text-muted: var(--puck-color-grey-05);\n    --puck-color-text-subtle: var(--puck-color-grey-07);\n    --puck-color-text-inverse: var(--puck-color-white);\n    --puck-opacity-text-inverse: 0.75;\n    --puck-color-interactive: var(--puck-color-azure-04);\n    --puck-color-interactive-hover: var(--puck-color-azure-03);\n    --puck-color-interactive-active: var(--puck-color-azure-02);\n    --puck-color-interactive-subtle: var(--puck-color-azure-10);\n    --puck-color-interactive-soft: var(--puck-color-azure-11);\n    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);\n    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);\n    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);\n    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);\n    --puck-color-focus-ring: var(--puck-color-azure-05);\n    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );\n    --puck-color-selection-border: var(--puck-color-azure-08);\n    --puck-color-line-placeholder: var(--puck-color-azure-06);\n    --puck-color-highlight: var(--puck-color-rose-07);\n    --puck-color-bg-disabled: var(--puck-color-grey-07);\n    --puck-color-text-disabled: var(--puck-color-grey-03);\n    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );\n    --puck-space-1: 4px;\n    --puck-space-2: 8px;\n    --puck-space-3: 12px;\n    --puck-space-4: 16px;\n    --puck-space-5: 24px;\n    --puck-space-chrome-gutter: var(--puck-space-4);\n    --puck-radius-none: 0;\n    --puck-radius-xs: 2px;\n    --puck-radius-s: 3px;\n    --puck-radius-m: 4px;\n    --puck-radius-l: 8px;\n    --puck-radius-pill: 30px;\n    --puck-radius-round: 100%;\n    --puck-border-width-hairline: 0.5px;\n    --puck-border-width-regular: 1px;\n    --puck-border-width-focus: 2px;\n    --puck-border-width-strong: 4px;\n    --puck-duration-fast: 50ms;\n    --puck-duration-medium: 150ms;\n    --puck-duration-slow: 250ms;\n    --puck-ease-exit: ease-in;\n    --puck-ease-emphasized: ease-in-out;\n    --puck-ease-entrance: ease-out;\n    --puck-font-weight-regular: 400;\n    --puck-font-weight-medium: 500;\n    --puck-font-weight-semibold: 600;\n    --puck-font-weight-bold: 700;\n    --puck-font-weight-heavy: 800;\n    --puck-letter-spacing-ui: 0.05ch;\n    --puck-letter-spacing-heading: 0.08ch;\n    --puck-icon-size-xs: 14px;\n    --puck-icon-size-s: 16px;\n    --puck-icon-size-m: 18px;\n    --puck-icon-size-l: 24px;\n    --puck-space-m-unitless: 24;\n    --puck-user-sidebar-left-width: var(--puck-sidebar-width);\n    --puck-user-sidebar-right-width: var(--puck-sidebar-width);\n    --puck-slot-min-empty-height: 128px;\n    --puck-line-placeholder-width: 2px;\n  }\n}\n\n/* styles/typography.css */\n@layer puck-tokens {\n  :root {\n    --puck-font-size-scale-base-unitless: 12;\n    --puck-font-size-xxxs-unitless: 12;\n    --puck-font-size-xxs-unitless: 14;\n    --puck-font-size-xs-unitless: 16;\n    --puck-font-size-s-unitless: 18;\n    --puck-font-size-m-unitless: 21;\n    --puck-font-size-l-unitless: 24;\n    --puck-font-size-xl-unitless: 28;\n    --puck-font-size-xxl-unitless: 36;\n    --puck-font-size-xxxl-unitless: 48;\n    --puck-font-size-xxxxl-unitless: 56;\n    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );\n    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);\n    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);\n    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);\n    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);\n    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);\n    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);\n    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);\n    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );\n    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );\n    --puck-font-size-base: var(--puck-font-size-xs);\n    --puck-line-height-reset: 1;\n    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );\n    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );\n    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );\n    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );\n    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );\n    --puck-line-height-base: var(--puck-line-height-m);\n    --puck-fallback-font-stack:\n      -apple-system,\n      BlinkMacSystemFont,\n      Segoe UI,\n      Helvetica Neue,\n      sans-serif,\n      Apple Color Emoji,\n      Segoe UI Emoji,\n      Segoe UI Symbol;\n    --puck-font-family: Inter, var(--puck-fallback-font-stack);\n    --puck-font-family-monospaced:\n      ui-monospace,\n      "Cascadia Code",\n      "Source Code Pro",\n      Menlo,\n      Consolas,\n      "DejaVu Sans Mono",\n      monospace;\n  }\n  @supports (font-variation-settings: normal) {\n    :root {\n      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);\n    }\n  }\n}\n\n/* bundle/core.css */\n:root {\n  --_puck-styles-loaded: "true";\n}\n#frame-root {\n  height: 1px;\n  min-height: 100vh;\n}\n[data-puck-entry] {\n  position: relative;\n  z-index: 0;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */\n._ActionBar_5vdfr_1 {\n  align-items: center;\n  cursor: default;\n  display: flex;\n  width: auto;\n  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));\n  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));\n  padding-inline-start: var(--puck-actionbar-space-x, 0);\n  padding-inline-end: var(--puck-actionbar-space-x, 0);\n  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));\n  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));\n  color: var(--puck-color-text-inverse);\n  font-family: var(--puck-font-family);\n  min-height: 26px;\n}\n._ActionBar-label_5vdfr_17 {\n  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));\n  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));\n  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));\n  font-weight: var(--puck-font-weight-medium);\n  padding-inline-start: var(--puck-space-2);\n  padding-inline-end: var(--puck-space-2);\n  margin-inline-start: var(--puck-space-1);\n  margin-inline-end: var(--puck-space-1);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {\n  padding-inline-start: 0;\n}\n._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {\n  margin-inline-start: calc(var(--puck-space-1) * -1);\n}\n._ActionBar-group_5vdfr_38 {\n  align-items: center;\n  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));\n  display: flex;\n  height: 100%;\n  padding-inline-start: var(--puck-space-1);\n  padding-inline-end: var(--puck-space-1);\n}\n._ActionBar-group_5vdfr_38:first-of-type {\n  border-inline-start: 0;\n}\n._ActionBar-group_5vdfr_38:empty {\n  display: none;\n}\n._ActionBarAction_5vdfr_30 {\n  background: transparent;\n  border: none;\n  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));\n  cursor: pointer;\n  padding: var(--puck-actionbar-action-space, 6px);\n  margin-inline-start: var(--puck-space-1);\n  margin-inline-end: var(--puck-space-1);\n  border-radius: var(--puck-radius-m);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));\n  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);\n}\n._ActionBarAction--disabled_5vdfr_74 {\n  cursor: auto;\n  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );\n  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);\n}\n._ActionBarAction_5vdfr_30 svg {\n  max-width: none !important;\n}\n._ActionBarAction_5vdfr_30:focus-visible {\n  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);\n  outline-offset: calc(var(--puck-border-width-focus) * -1);\n}\n@media (hover: hover) and (pointer: fine) {\n  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {\n    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );\n    opacity: 1;\n    transition: none;\n  }\n}\n._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),\n._ActionBarAction--active_5vdfr_104 {\n  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );\n  opacity: 1;\n  transition: none;\n}\n._ActionBar-group_5vdfr_38 * {\n  margin: 0;\n}\n._ActionBar-separator_5vdfr_117 {\n  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );\n  margin-inline: var(--puck-space-1);\n  width: var( --puck-border-width-hairline );\n  height: 100%;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */\n._DraggableComponent_1627v_1 {\n  position: absolute;\n  pointer-events: none;\n}\n._DraggableComponent-overlayWrapper_1627v_6 {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  pointer-events: none;\n  box-sizing: border-box;\n  z-index: 1;\n}\n._DraggableComponent-overlay_1627v_6 {\n  cursor: pointer;\n  height: 100%;\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;\n  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);\n  width: 100%;\n}\n._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {\n  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);\n}\n._DraggableComponent-loadingOverlay_1627v_38 {\n  background: var(--puck-color-surface);\n  color: var(--puck-color-text);\n  border-radius: var(--puck-radius-m);\n  display: flex;\n  padding: var(--puck-space-2);\n  top: var(--puck-space-2);\n  right: var(--puck-space-2);\n  position: absolute;\n  z-index: 1;\n  pointer-events: all;\n  box-sizing: border-box;\n  opacity: 0.8;\n  z-index: 1;\n}\n._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {\n  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;\n}\n._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {\n  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );\n}\n._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {\n  display: none;\n}\n._DraggableComponent-actionsOverlay_1627v_89 {\n  position: sticky;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {\n  opacity: 1;\n  pointer-events: auto;\n}\n._DraggableComponent-actions_1627v_89 {\n  position: absolute;\n  width: auto;\n  cursor: grab;\n  display: flex;\n  box-sizing: border-box;\n  transform-origin: right top;\n  min-height: 36px;\n}\n._DraggableComponent-actionsAction_1627v_111 {\n  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */\n._Drawer_1n90m_1 {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--puck-font-family);\n  gap: var(--puck-space-3);\n}\n._Drawer-draggable_1n90m_8 {\n  position: relative;\n}\n._Drawer-draggableBg_1n90m_12 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n._DrawerItem-draggable_1n90m_22 {\n  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));\n  color: var(--puck-drawer-item-color-text, var(--puck-color-text));\n  cursor: grab;\n  padding: var(--puck-drawer-item-space, var(--puck-space-3));\n  display: flex;\n  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;\n  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));\n  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));\n  justify-content: space-between;\n  align-items: center;\n  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);\n}\n._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {\n  background: var(--puck-color-surface-muted);\n  color: var(--puck-color-text-muted);\n  cursor: not-allowed;\n}\n._DrawerItem_1n90m_22:focus-visible {\n  outline: 0;\n}\n._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {\n  border-radius: var(--puck-radius-m);\n  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);\n  outline-offset: var(--puck-border-width-focus);\n}\n@media (hover: hover) and (pointer: fine) {\n  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {\n    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );\n    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );\n    transition: none;\n  }\n}\n._DrawerItem-name_1n90m_72 {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */\n._DropZone_wc2ks_1 {\n  position: relative;\n  height: 100%;\n  min-height: var(--puck-slot-min-empty-height);\n  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);\n  width: 100%;\n}\n._DropZone--hasChildren_wc2ks_11 {\n  min-height: 0;\n}\n._DropZone_wc2ks_1:empty {\n  min-height: var(--puck-slot-min-empty-height);\n}\n[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {\n  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);\n}\n._DropZone--isAreaSelected_wc2ks_24,\n._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {\n  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone_wc2ks_1:empty {\n  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone-item_wc2ks_39 {\n  position: relative;\n}\n._DropZone-linePlaceholder_wc2ks_43 {\n  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );\n  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);\n  pointer-events: none;\n  position: absolute;\n  z-index: 1;\n}\n._DropZone-hitbox_wc2ks_55 {\n  position: absolute;\n  bottom: calc(var(--puck-space-3) * -1);\n  height: var(--puck-space-5);\n  width: 100%;\n  z-index: 1;\n}\n[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {\n  opacity: 0;\n}\nbody:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {\n  opacity: 0 !important;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */\n._InlineTextField_104qp_1 {\n  cursor: text;\n  display: inline-block;\n  white-space: pre-wrap;\n  text-decoration: inherit;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1 {\n  cursor: none;\n  caret-color: transparent;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1::selection {\n  display: none;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */\n@keyframes _loader-animation_1w5zn_1 {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(0.8);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n._Loader_1w5zn_13 {\n  background: transparent;\n  border-radius: var(--puck-radius-round);\n  border: var(--puck-border-width-focus) solid currentColor;\n  border-bottom-color: transparent;\n  display: inline-block;\n  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;\n  animation-fill-mode: both;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */\n._RichTextMenu_1ve2j_1 {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n._RichTextMenu--form_1ve2j_7 {\n  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));\n  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));\n  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);\n  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );\n  position: relative;\n  scrollbar-width: none;\n  overflow-x: auto;\n}\n._RichTextMenu-group_1ve2j_21 {\n  display: flex;\n  align-items: space-between;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding-inline: 6px;\n  gap: 2px;\n  position: relative;\n}\n._RichTextMenu-group_1ve2j_21:first-of-type {\n  padding-left: 0;\n}\n._RichTextMenu-group_1ve2j_21:last-of-type {\n  padding-right: 0;\n}\n._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {\n  color: var(--puck-color-text-inverse);\n  gap: 0px;\n  flex-wrap: nowrap;\n}\n._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {\n  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );\n}\n._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {\n  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */\n._Control_id4pm_1 .lucide {\n  height: var(--puck-icon-size-m);\n  width: var(--puck-icon-size-m);\n}\n._Control--inline_id4pm_6 .lucide {\n  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n}\n\n/* components/DraggableComponent/styles.css */\n[data-puck-component] * {\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-component] {\n  cursor: grab;\n  pointer-events: auto !important;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-dropzone] {\n  pointer-events: auto !important;\n}\n[data-puck-disabled] {\n  cursor: pointer;\n}\n[data-dnd-placeholder]:not([data-puck-line-drag] *) {\n  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;\n  border: none !important;\n  color: transparent !important;\n  opacity: 0.3 !important;\n  outline: none !important;\n  transition: none !important;\n}\n[data-dnd-placeholder]:not([data-puck-line-drag] *) *,\n[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,\n[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {\n  opacity: 0 !important;\n}\n[data-puck-line-drag] [data-dnd-placeholder] {\n  opacity: 0.4 !important;\n  outline: none !important;\n  transition: none !important;\n}\n[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {\n  opacity: 0.9 !important;\n}\n[data-dnd-dragging][data-puck-component] {\n  pointer-events: none !important;\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;\n  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;\n}\n[data-dnd-dragging][data-puck-component] > :first-child {\n  margin-top: 0 !important;\n}\n[data-dnd-dragging][data-puck-component] > :last-child {\n  margin-bottom: 0 !important;\n}\n\n/* lib/overlay-portal/styles.css */\n[data-puck-overlay-portal],\n[data-puck-overlay-portal] * {\n  pointer-events: auto !important;\n}\n[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],\n[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {\n  pointer-events: none !important;\n}\n[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {\n  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;\n  outline-offset: 2px;\n}\n[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {\n  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;\n  outline-offset: 2px;\n}',document:i,id:"iframe-styles"}:null),(0,rk.useEffect)(()=>{let e;if(!o||!i)return()=>{};let a=[],l={},s=()=>{a.forEach(({mirror:e})=>{e.remove()}),a=[],Array.from(i.head.querySelectorAll(`[${pz}="true"]`)).forEach(e=>{e.remove()}),Object.keys(l).forEach(e=>{delete l[e]})},c=e=>a.findIndex(t=>t.original===e),u=(e,r=!1)=>(0,rB.__async)(null,null,function*(){let n;if("LINK"===e.nodeName&&r){(n=document.createElement("style")).type="text/css";let r=pE(e);r||(yield new Promise(t=>{let r=()=>{t(),e.removeEventListener("load",r)};e.addEventListener("load",r)}),r=pE(e));let i=(e=>{if(e)try{return Array.from(e.cssRules).map(e=>e.cssText).join("")}catch(t){console.warn("Access to stylesheet %s is denied. Ignoring…",e.href)}return""})(r);if(!i){t&&console.warn("Tried to load styles for link element, but couldn't find them. Skipping...");return}n.innerHTML=i,n.setAttribute("data-href",e.getAttribute("href"))}else n=e.cloneNode(!0);return n.setAttribute(pz,"true"),n}),d=new MutationObserver(e=>{e.forEach(e=>{"childList"===e.type&&(e.addedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let r=e.nodeType===Node.TEXT_NODE?e.parentElement:e;r&&pC(r)&&setTimeout(()=>(0,rB.__async)(null,null,function*(){let e=c(r);if(e>-1){t&&console.log("Tried to add an element that was already mirrored. Updating instead..."),a[e].mirror.innerText=r.innerText;return}let n=yield u(r);if(!n)return;let o=(0,ct.default)(n.outerHTML);if(l[o]){t&&console.log("iframe already contains element that is being mirrored. Skipping...");return}l[o]=!0,i.head.append(n),a.push({original:r,mirror:n}),t&&console.log(`Added style node ${r.outerHTML}`)}),0)}}),e.removedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let r=e.nodeType===Node.TEXT_NODE?e.parentElement:e;r&&r.matches(pI)&&!pw(r)&&setTimeout(()=>(e=>{var r,n;let i=c(e);if(-1===i){t&&console.log("Tried to remove an element that did not exist. Skipping...");return}let o=(0,ct.default)(e.outerHTML);null==(n=null==(r=a[i])?void 0:r.mirror)||n.remove(),delete l[o],t&&console.log(`Removed style node ${e.outerHTML}`)})(r),0)}}))})});if(!n)return r(),()=>{d.disconnect(),s()};let p=o.parent.document,h=(e=[],p.querySelectorAll(pI).forEach(t=>{pC(t)&&e.push(t)}),e),f=[],m=0;return pA(p.getElementsByTagName("html")[0],i.documentElement),pA(p.getElementsByTagName("body")[0],i.body),Promise.all(h.map((e,t)=>(0,rB.__async)(null,null,function*(){if("LINK"===e.nodeName){let t=e.href;if(f.indexOf(t)>-1)return;f.push(t)}let t=yield u(e);if(t)return a.push({original:e,mirror:t}),t}))).then(e=>{let t=e.filter(e=>void 0!==e);t.forEach(e=>{e.onload=()=>{(m+=1)>=t.length&&r()},e.onerror=()=>{let n=e instanceof HTMLLinkElement?e.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${n?`: ${n}`:""}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),(m+=1)>=t.length&&r()}}),i.head.querySelectorAll(`[${pz}="true"]`).forEach(e=>{e.remove()}),i.head.append(...t),t.forEach(e=>{"STYLE"===e.nodeName&&(m+=1)}),m>=t.length&&r(),d.observe(p.head,{childList:!0,subtree:!0}),t.forEach(e=>{l[(0,ct.default)(e.outerHTML)]=!0})}),()=>{d.disconnect(),s()}},[n]),(0,rF.jsx)(rF.Fragment,{children:e})},pL=(0,rk.createContext)({}),pM=()=>(0,rk.useContext)(pL);function pN(e){var{children:t,className:r,debug:n,id:i,onReady:o=()=>{},onNotReady:a=()=>{},frameRef:l,syncHostStyles:s=!0}=e,c=(0,rB.__objRest)(e,["children","className","debug","id","onReady","onNotReady","frameRef","syncHostStyles"]);let[u,d]=(0,rk.useState)(!1),[p,h]=(0,rk.useState)({}),[f,m]=(0,rk.useState)(),[g,v]=(0,rk.useState)(!1);return(0,rk.useEffect)(()=>{u&&v(!s)},[u,s]),(0,rk.useEffect)(()=>{var e;if(l.current){let t=l.current.contentDocument,r=l.current.contentWindow;h({document:t||void 0,window:r||void 0}),m(null==(e=l.current.contentDocument)?void 0:e.getElementById("frame-root")),t&&r&&g?o():a()}},[l,u,g]),(0,rF.jsx)("iframe",(0,rB.__spreadProps)((0,rB.__spreadValues)({},c),{className:r,id:i,srcDoc:'<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',ref:l,onLoad:()=>{d(!0)},children:(0,rF.jsx)(pL.Provider,{value:p,children:u&&f&&(0,rF.jsx)(pP,{debug:n,onStylesLoaded:()=>v(!0),syncHostStyles:s,children:(0,l_.createPortal)(t,f)})})}))}pN.displayName="AutoFrame",(0,rB.init_react_import)();var pT=rS(dl),pO=(0,rk.memo)(()=>{var e,t,r,n;let i=(0,rO.useAppStore)(rV(e=>{var t;return null==(t=e.state.indexes.nodes.root)?void 0:t.flatData.props})),o=(0,rO.useAppStore)(e=>e.config),a=(0,rO.useAppStore)(e=>e.metadata),l=u1(o,(0,rk.useMemo)(()=>{let e=(0,rx.toComponent)({props:null!=i?i:{}});return(0,rx.expandNode)(e)},[i]),pT),s=(0,rk.useMemo)(()=>(0,rB.__spreadProps)((0,rB.__spreadValues)({},l),{children:(0,rF.jsx)(dh,{zone:rx.rootDroppableId}),puck:{renderDropZone:dh,isEditing:!0,dragRef:null,metadata:a},editMode:!0}),[l,a]),c=rP(null!=(t=null==(e=o.root)?void 0:e.fields)?t:{},s);return(null==(r=o.root)?void 0:r.render)?null==(n=o.root)?void 0:n.render((0,rB.__spreadProps)((0,rB.__spreadValues)((0,rB.__spreadValues)({},s),c),{id:"puck-root"})):(0,rF.jsx)(rF.Fragment,{children:s.children})});pO.displayName="EditorPage",(0,rB.init_react_import)();var pD=(0,rb.get_class_name_factory_default)("PuckPreview",{PuckPreview:"_PuckPreview_zbic3_1","PuckPreview-frame":"_PuckPreview-frame_zbic3_6"}),pB=({id:e="puck-preview"})=>{let t,r,n,i,o=(0,rO.useAppStore)(e=>e.dispatch),a=(0,rO.useAppStore)(e=>e.config),l=(0,rO.useAppStore)(e=>e.setStatus),s=(0,rO.useAppStore)(e=>e.iframe),c=(0,rO.useAppStore)(e=>e.overrides),u=(0,rO.useAppStore)(e=>e.metadata),d=(0,rO.useAppStore)(e=>"edit"===e.state.ui.previewMode?null:e.state.data),p=(0,rk.useMemo)(()=>c.iframe,[c]),h=(0,rk.useRef)(null);t=(0,rO.useAppStore)(e=>e.status),(0,rk.useEffect)(()=>{if(h.current&&"READY"===t){var e;let t=h.current,r=e=>{let r=new uM("pointermove",(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{bubbles:!0,cancelable:!1,clientX:e.clientX,clientY:e.clientY,pointerId:e.pointerId,pointerType:e.pointerType,isPrimary:e.isPrimary,originalTarget:e.target}));t.dispatchEvent(r)},n=()=>{var e;null==(e=t.contentDocument)||e.removeEventListener("pointermove",r)};return n(),null==(e=t.contentDocument)||e.addEventListener("pointermove",r,{capture:!0}),()=>{n()}}},[t]),r=(0,rO.useAppStore)(e=>e.state.ui.previewMode),n=(0,rO.useAppStore)(e=>e.status),i=(0,rO.useAppStore)(e=>e.iframe.enabled),(0,rk.useEffect)(()=>{var e,t;let n=i?null==(t=null==(e=h.current)?void 0:e.contentDocument)?void 0:t.querySelector("[data-puck-entry]"):h.current;null==n||n.setAttribute("data-puck-preview-mode",r)},[r,n,i]);let f=d?(0,rF.jsx)(dg,{data:d,config:a,metadata:u}):(0,rF.jsx)(pO,{});return(0,rk.useEffect)(()=>{s.enabled||l("READY")},[s.enabled]),(0,rF.jsx)("div",{className:pD(),id:e,"data-puck-preview":!0,onClick:e=>{let t=e.target;t.hasAttribute("data-puck-component")||t.hasAttribute("data-puck-dropzone")||o({type:"setUi",ui:{itemSelector:null}})},children:s.enabled?(0,rF.jsx)(pN,{id:"preview-frame",className:pD("frame"),"data-rfd-iframe":!0,syncHostStyles:s.syncHostStyles,onReady:()=>{l("READY")},onNotReady:()=>{l("MOUNTED")},frameRef:h,children:(0,rF.jsx)(pL.Consumer,{children:({document:e})=>p?(0,rF.jsx)(p,{document:e,children:f}):f})}):(0,rF.jsx)("div",{id:"preview-frame",className:pD("frame"),ref:h,"data-puck-entry":!0,children:f})})};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var pF={Puck:"_Puck_tzaxg_19","Puck-portal":"_Puck-portal_tzaxg_31",PuckLayout:"_PuckLayout_tzaxg_36","PuckLayout-inner":"_PuckLayout-inner_tzaxg_40","Puck--hidePlugins":"_Puck--hidePlugins_tzaxg_73","PuckLayout--mounted":"_PuckLayout--mounted_tzaxg_78","PuckLayout--mobilePanelHeightToggle":"_PuckLayout--mobilePanelHeightToggle_tzaxg_82","PuckLayout--leftSideBarVisible":"_PuckLayout--leftSideBarVisible_tzaxg_82","PuckLayout--isExpanded":"_PuckLayout--isExpanded_tzaxg_90","PuckLayout--mobilePanelHeightMinContent":"_PuckLayout--mobilePanelHeightMinContent_tzaxg_110","PuckLayout--rightSideBarVisible":"_PuckLayout--rightSideBarVisible_tzaxg_137","PuckLayout-mounted":"_PuckLayout-mounted_tzaxg_156","PuckLayout-nav":"_PuckLayout-nav_tzaxg_197","PuckLayout-header":"_PuckLayout-header_tzaxg_217",PuckPluginTab:"_PuckPluginTab_tzaxg_231","PuckPluginTab--visible":"_PuckPluginTab--visible_tzaxg_237","PuckPluginTab-body":"_PuckPluginTab-body_tzaxg_243"};(0,rB.init_react_import)();var pR=({children:e})=>(0,rF.jsx)(rF.Fragment,{children:e});(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var pV=(0,rb.get_class_name_factory_default)("MenuBar",{MenuBar:"_MenuBar_1hxnj_1","MenuBar--menuOpen":"_MenuBar--menuOpen_1hxnj_14","MenuBar-inner":"_MenuBar-inner_1hxnj_29","MenuBar-history":"_MenuBar-history_1hxnj_45"});function pH({menuOpen:e=!1,renderHeaderActions:t,setMenuOpen:r}){let n=(0,rO.useAppStore)(e=>e.history.back),i=(0,rO.useAppStore)(e=>e.history.forward),o=(0,rO.useAppStore)(e=>e.history.hasFuture()),a=(0,rO.useAppStore)(e=>e.history.hasPast()),l=(0,rO.useMessage)("header-undo"),s=(0,rO.useMessage)("header-redo");return(0,rF.jsx)("div",{className:pV({menuOpen:e}),onClick:e=>{var t;let n=e.target;!window.matchMedia("(min-width: 638px)").matches&&"A"===n.tagName&&(null==(t=n.getAttribute("href"))?void 0:t.startsWith("#"))&&r(!1)},children:(0,rF.jsxs)("div",{className:pV("inner"),children:[(0,rF.jsxs)("div",{className:pV("history"),children:[(0,rF.jsx)(rO.IconButton,{type:"button",title:l,disabled:!a,onClick:n,children:(0,rF.jsx)(rO.Undo2,{size:21})}),(0,rF.jsx)(rO.IconButton,{type:"button",title:s,disabled:!o,onClick:i,children:(0,rF.jsx)(rO.Redo2,{size:21})})]}),(0,rF.jsx)(rF.Fragment,{children:t&&t()})]})})}(0,rB.init_react_import)();var pW=(0,rb.get_class_name_factory_default)("PuckHeader",{PuckHeader:"_PuckHeader_c2nei_1","PuckHeader--hidePlugins":"_PuckHeader--hidePlugins_c2nei_21","PuckHeader-inner":"_PuckHeader-inner_c2nei_26","PuckHeader-toggle":"_PuckHeader-toggle_c2nei_46","PuckHeader-rightSideBarToggle":"_PuckHeader-rightSideBarToggle_c2nei_52","PuckHeader-leftSideBarToggle":"_PuckHeader-leftSideBarToggle_c2nei_53","PuckHeader-title":"_PuckHeader-title_c2nei_64","PuckHeader-path":"_PuckHeader-path_c2nei_68","PuckHeader-tools":"_PuckHeader-tools_c2nei_75","PuckHeader-menuButton":"_PuckHeader-menuButton_c2nei_81","PuckHeader--menuOpen":"_PuckHeader--menuOpen_c2nei_86"}),p$=(0,rk.memo)(({hidePlugins:e})=>{let{onPublish:t,renderHeader:r,renderHeaderActions:n,headerTitle:i,headerPath:o,iframe:a}=hg(),l=(0,rO.useAppStore)(e=>e.dispatch),s=(0,rO.useAppStoreApi)(),c=(0,rk.useMemo)(()=>r?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),e=>{var{actions:t}=e,n=(0,rB.__objRest)(e,["actions"]);let i=(0,rO.useAppStore)(e=>e.state);return(0,rF.jsx)(r,(0,rB.__spreadProps)((0,rB.__spreadValues)({},n),{dispatch:l,state:i,children:t}))}):pR,[r]),u=(0,rk.useMemo)(()=>n?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),e=>{let t=(0,rO.useAppStore)(e=>e.state);return(0,rF.jsx)(n,(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{dispatch:l,state:t}))}):pR,[n]),d=(0,rO.useAppStore)(e=>e.overrides.header||c),p=(0,rO.useAppStore)(e=>e.overrides.headerActions||u),[h,f]=(0,rk.useState)(!1),m=(0,rO.useAppStore)(e=>{var t,r;return null!=(r=(null==(t=e.state.indexes.nodes.root)?void 0:t.data).props.title)?r:""}),g=(0,rO.useAppStore)(e=>e.state.ui.leftSideBarVisible),v=(0,rO.useAppStore)(e=>e.state.ui.rightSideBarVisible),_=(0,rk.useCallback)(e=>{let t=window.matchMedia("(min-width: 638px)").matches,r="left"===e?g:v;l({type:"setUi",ui:(0,rB.__spreadValues)({[`${e}SideBarVisible`]:!r},t?{}:{["left"===e?"rightSideBarVisible":"leftSideBarVisible"]:!1})})},[l,g,v]),b=(0,rO.useMessage)("header-publish"),y=(0,rO.useMessage)("label-page"),k=(0,rO.useMessage)("header-toggle-leftsidebar"),w=(0,rO.useMessage)("header-toggle-rightsidebar"),S=(0,rO.useMessage)("header-toggle-menubar");return(0,rF.jsx)(d,{actions:(0,rF.jsx)(rF.Fragment,{children:(0,rF.jsx)(p,{children:(0,rF.jsx)(ca,{onClick:()=>{let e=s.getState().state.data;t&&t(e)},icon:(0,rF.jsx)(rO.Globe,{size:"14px"}),children:b})})}),children:(0,rF.jsx)("header",{className:pW({leftSideBarVisible:g,rightSideBarVisible:v,hidePlugins:e}),children:(0,rF.jsxs)("div",{className:pW("inner"),children:[(0,rF.jsxs)("div",{className:pW("toggle"),children:[(0,rF.jsx)("div",{className:pW("leftSideBarToggle"),children:(0,rF.jsx)(rO.IconButton,{type:"button",onClick:()=>{_("left")},title:k,children:(0,rF.jsx)(rO.PanelLeft,{focusable:"false"})})}),(0,rF.jsx)("div",{className:pW("rightSideBarToggle"),children:(0,rF.jsx)(rO.IconButton,{type:"button",onClick:()=>{_("right")},title:w,children:(0,rF.jsx)(rO.PanelRight,{focusable:"false"})})})]}),(0,rF.jsx)("div",{className:pW("title"),children:(0,rF.jsxs)(cJ,{rank:"2",size:"xs",children:[i||m||y,o&&(0,rF.jsxs)(rF.Fragment,{children:[" ",(0,rF.jsx)("code",{className:pW("path"),children:o})]})]})}),(0,rF.jsxs)("div",{className:pW("tools"),children:[(0,rF.jsx)("div",{className:pW("menuButton"),children:(0,rF.jsx)(rO.IconButton,{type:"button",onClick:()=>f(!h),title:S,children:h?(0,rF.jsx)(rO.ChevronUp,{focusable:"false"}):(0,rF.jsx)(rO.ChevronDown,{focusable:"false"})})}),(0,rF.jsx)(pH,{dispatch:l,onPublish:t,menuOpen:h,renderHeaderActions:()=>(0,rF.jsx)(p,{children:(0,rF.jsx)(ca,{onClick:()=>{let e=s.getState().state.data;t&&t(e)},icon:(0,rF.jsx)(rO.Globe,{size:"14px"}),children:b})}),setMenuOpen:f})]})]})})})});(0,rB.init_react_import)(),(0,rB.init_react_import)();var pq=(0,rb.get_class_name_factory_default)("SidebarSection",{SidebarSection:"_SidebarSection_1uv88_1","SidebarSection-title":"_SidebarSection-title_1uv88_12","SidebarSection--noBorderTop":"_SidebarSection--noBorderTop_1uv88_20","SidebarSection-content":"_SidebarSection-content_1uv88_24","SidebarSection-breadcrumbLabel":"_SidebarSection-breadcrumbLabel_1uv88_33","SidebarSection-breadcrumbs":"_SidebarSection-breadcrumbs_1uv88_62","SidebarSection-breadcrumb":"_SidebarSection-breadcrumb_1uv88_33","SidebarSection-heading":"_SidebarSection-heading_1uv88_74","SidebarSection-loadingOverlay":"_SidebarSection-loadingOverlay_1uv88_78"}),pU=({children:e,title:t,background:r,showBreadcrumbs:n,noBorderTop:i,isLoading:o})=>(0,rF.jsxs)("div",{className:pq({noBorderTop:i}),style:{background:r},children:[(0,rF.jsx)("div",{className:pq("title"),children:(0,rF.jsxs)("div",{className:pq("breadcrumbs"),children:[n&&(0,rF.jsx)(pc,{}),(0,rF.jsx)("div",{className:pq("heading"),children:(0,rF.jsx)(cJ,{rank:"2",size:"xs",children:t})})]})}),(0,rF.jsx)("div",{className:pq("content"),children:e}),o&&(0,rF.jsx)("div",{className:pq("loadingOverlay"),children:(0,rF.jsx)(rO.Loader,{size:32})})]});(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var pZ={ViewportControls:"_ViewportControls_v26yb_1","ViewportControls--fullScreen":"_ViewportControls--fullScreen_v26yb_5","ViewportControls-toggleButton":"_ViewportControls-toggleButton_v26yb_14","ViewportControls-actions":"_ViewportControls-actions_v26yb_39","ViewportControls-actionsInner":"_ViewportControls-actionsInner_v26yb_43","ViewportControls--isExpanded":"_ViewportControls--isExpanded_v26yb_67","ViewportControls-divider":"_ViewportControls-divider_v26yb_72","ViewportControls-zoomSelect":"_ViewportControls-zoomSelect_v26yb_79","ViewportControls-zoom":"_ViewportControls-zoom_v26yb_79","ViewportButton-inner":"_ViewportButton-inner_v26yb_110","ViewportButton--isActive":"_ViewportButton--isActive_v26yb_118"},pY={Smartphone:(0,rF.jsx)(rO.Smartphone,{size:16}),Tablet:(0,rF.jsx)(rO.Tablet,{size:16}),Monitor:(0,rF.jsx)(rO.Monitor,{size:16}),FullWidth:(0,rF.jsx)(rO.Expand,{size:16})},pX=(0,rb.get_class_name_factory_default)("ViewportControls",pZ),pG=(0,rb.get_class_name_factory_default)("ViewportButton",pZ),pK=({children:e,title:t,onClick:r,isActive:n,disabled:i})=>(0,rF.jsx)("span",{className:pG({isActive:n}),suppressHydrationWarning:!0,children:(0,rF.jsx)(rO.IconButton,{type:"button",title:t,disabled:i||n,onClick:r,suppressHydrationWarning:!0,children:(0,rF.jsx)("span",{className:pG("inner"),children:e})})}),pJ=[{label:"25%",value:.25},{label:"50%",value:.5},{label:"75%",value:.75},{label:"100%",value:1},{label:"125%",value:1.25},{label:"150%",value:1.5},{label:"200%",value:2}],pQ=({viewport:e,isActive:t,onClick:r})=>{var n;let i=(0,rO.useMessage)("viewport-switch",{label:null!=(n=e.label)?n:""}),o=(0,rO.useMessage)("viewport-switch-default");return(0,rF.jsx)(pK,{title:e.label?i:o,onClick:r,isActive:t,children:"string"==typeof e.icon?pY[e.icon]||e.icon:e.icon||pY.Smartphone})},p0=({autoZoom:e,zoom:t,onViewportChange:r,onZoom:n,fullScreen:i})=>{var o,a;let l=(0,rO.useAppStore)(e=>e.viewports),s=(0,rO.useAppStore)(e=>e.state.ui.viewports),c=pJ.find(t=>t.value===e),u=(0,rO.useMessage)("viewport-zoom-auto",{zoom:(100*e).toFixed(0)}),d=(0,rk.useMemo)(()=>[...pJ,...c?[]:[{value:e,label:u}]].filter(t=>t.value<=e).sort((e,t)=>e.value>t.value?1:-1),[e,u]),[p,h]=(0,rk.useState)(s.current.width);(0,rk.useEffect)(()=>{h(s.current.width)},[s.current]);let[f,m]=(0,rk.useState)(!1),g=(0,rO.useMessage)("viewport-zoom-out"),v=(0,rO.useMessage)("viewport-zoom-in"),_=(0,rO.useMessage)("viewport-toggle-menu");return(0,rF.jsxs)("div",{className:pX({isExpanded:f,fullScreen:i}),suppressHydrationWarning:!0,children:[(0,rF.jsx)("div",{className:pX("actions"),children:(0,rF.jsxs)("div",{className:pX("actionsInner"),children:[l.map((e,t)=>(0,rF.jsx)(pQ,{viewport:e,onClick:()=>{h(e.width),r(e)},isActive:p===e.width},t)),(0,rF.jsx)("div",{className:pX("divider")}),(0,rF.jsx)(pK,{title:g,disabled:t<=(null==(o=d[0])?void 0:o.value),onClick:e=>{e.stopPropagation(),n(d[Math.max(d.findIndex(e=>e.value===t)-1,0)].value)},children:(0,rF.jsx)(rO.ZoomOut,{size:16})}),(0,rF.jsx)(pK,{title:v,disabled:t>=(null==(a=d[d.length-1])?void 0:a.value),onClick:e=>{e.stopPropagation(),n(d[Math.min(d.findIndex(e=>e.value===t)+1,d.length-1)].value)},children:(0,rF.jsx)(rO.ZoomIn,{size:16})}),(0,rF.jsxs)("div",{className:pX("zoom"),children:[(0,rF.jsx)("div",{className:pX("divider")}),(0,rF.jsx)("select",{className:pX("zoomSelect"),value:t.toString(),onClick:e=>{e.stopPropagation()},onChange:e=>{n(parseFloat(e.currentTarget.value))},children:d.map(e=>(0,rF.jsx)("option",{value:e.value,label:e.label},e.label))})]})]})}),(0,rF.jsx)("button",{className:pX("toggleButton"),title:_,onClick:()=>m(e=>!e),children:f?(0,rF.jsx)(rO.X,{size:16}):(0,rF.jsx)(rO.Monitor,{size:16})})]})};(0,rB.init_react_import)(),(0,rB.init_react_import)();var p1=(0,rk.createContext)(null),p2=({children:e})=>{let t=(0,rk.useRef)(null),r=(0,rk.useMemo)(()=>({frameRef:t}),[]);return(0,rF.jsx)(p1.Provider,{value:r,children:e})},p4=()=>{let e=(0,rk.useContext)(p1);if(null===e)throw Error("useCanvasFrame must be used within a FrameProvider");return e},p3=(0,rb.get_class_name_factory_default)("PuckCanvas",{PuckCanvas:"_PuckCanvas_zw9iy_1","PuckCanvas-controls":"_PuckCanvas-controls_zw9iy_18","PuckCanvas--fullScreen":"_PuckCanvas--fullScreen_zw9iy_23","PuckCanvas-inner":"_PuckCanvas-inner_zw9iy_34","PuckCanvas-root":"_PuckCanvas-root_zw9iy_43","PuckCanvas--ready":"_PuckCanvas--ready_zw9iy_68","PuckCanvas-loader":"_PuckCanvas-loader_zw9iy_73","PuckCanvas--showLoader":"_PuckCanvas--showLoader_zw9iy_84"}),p6=()=>{var e;let{frameRef:t}=p4(),r=(0,rO.useResetAutoZoom)(t),{viewports:n=r_.defaultViewports,ui:i}=hg(),{dispatch:o,overrides:a,setUi:l,zoomConfig:s,setZoomConfig:c,status:u,iframe:d,_experimentalFullScreenCanvas:p}=(0,rO.useAppStore)(rV(e=>({dispatch:e.dispatch,overrides:e.overrides,setUi:e.setUi,zoomConfig:e.zoomConfig,setZoomConfig:e.setZoomConfig,status:e.status,iframe:e.iframe,_experimentalFullScreenCanvas:e._experimentalFullScreenCanvas}))),{leftSideBarVisible:h,rightSideBarVisible:f,leftSideBarWidth:m,rightSideBarWidth:g,viewports:v}=(0,rO.useAppStore)(rV(e=>({leftSideBarVisible:e.state.ui.leftSideBarVisible,rightSideBarVisible:e.state.ui.rightSideBarVisible,leftSideBarWidth:e.state.ui.leftSideBarWidth,rightSideBarWidth:e.state.ui.rightSideBarWidth,viewports:e.state.ui.viewports}))),[_,b]=(0,rk.useState)(!1),y=(0,rk.useRef)(!1),k=(0,rk.useMemo)(()=>({children:e})=>(0,rF.jsx)(rF.Fragment,{children:e}),[]),w=(0,rk.useMemo)(()=>a.preview||k,[a]),S=(0,rk.useCallback)(()=>{if(t.current){let e=t.current,r=(0,rO.getBox)(e);return{width:r.contentBox.width,height:r.contentBox.height}}return{width:0,height:0}},[t]);(0,rk.useEffect)(()=>{r()},[t,h,f,m,g,v]),(0,rk.useEffect)(()=>{let{height:e}=S();"auto"===v.current.height&&c((0,rB.__spreadProps)((0,rB.__spreadValues)({},s),{rootHeight:e/s.zoom}))},[s.zoom,S,c]),(0,rk.useEffect)(()=>{r()},[v.current.width,v]),(0,rk.useEffect)(()=>{if(!t.current)return;let e=new ResizeObserver(()=>{y.current||r()});return e.observe(t.current),()=>{e.disconnect()}},[t.current]);let[j,I]=(0,rk.useState)(!1);(0,rk.useEffect)(()=>{setTimeout(()=>{I(!0)},500)},[]);let z=(0,rO.useAppStoreApi)();return(0,rk.useEffect)(()=>{var e,r;if("u"<typeof window||(null==(e=null==i?void 0:i.viewports)?void 0:e.current))return;let o=window.innerWidth,a=null==(r=t.current)?void 0:r.getBoundingClientRect().width;if(!o||!a||0===n.length)return;let l=Object.values(n).find(e=>"100%"===e.width),s=Object.entries(n).filter(([e,t])=>"100%"!==t.width).map(([e,t])=>({key:e,diff:Math.abs(o-("string"==typeof t.width?o:t.width)),value:t})).sort((e,t)=>e.diff>t.diff?1:-1)[0].value;if(s.width<a&&l&&(s=l),d.enabled){let e=z.getState(),t={state:(0,rB.__spreadProps)((0,rB.__spreadValues)({},e.state),{ui:(0,rB.__spreadProps)((0,rB.__spreadValues)({},e.state.ui),{viewports:(0,rB.__spreadProps)((0,rB.__spreadValues)({},e.state.ui.viewports),{current:(0,rB.__spreadProps)((0,rB.__spreadValues)({},e.state.ui.viewports.current),{height:(null==s?void 0:s.height)||"auto",width:null==s?void 0:s.width})})})})},r=e.history;1===e.history.histories.length&&(r=(0,rB.__spreadProps)((0,rB.__spreadValues)({},r),{histories:[t]})),z.setState((0,rB.__spreadProps)((0,rB.__spreadValues)({},t),{history:r}))}},[n,t.current,d,z,null==(e=null==i?void 0:i.viewports)?void 0:e.current]),(0,rF.jsxs)("div",{className:p3({ready:"READY"===u||!d.enabled||!d.waitForStyles,showLoader:j,fullScreen:p}),onClick:e=>{let t=e.target;t.hasAttribute("data-puck-component")||t.hasAttribute("data-puck-dropzone")||o({type:"setUi",ui:{itemSelector:null},recordHistory:!1})},children:[v.controlsVisible&&d.enabled&&(0,rF.jsx)("div",{className:p3("controls"),children:(0,rF.jsx)(p0,{fullScreen:p,autoZoom:s.autoZoom,zoom:s.zoom,onViewportChange:e=>{b(!0),y.current=!0;let t=(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{height:e.height||"auto",zoom:s.zoom});l({viewports:(0,rB.__spreadProps)((0,rB.__spreadValues)({},v),{current:t})}),r({viewports:(0,rB.__spreadProps)((0,rB.__spreadValues)({},v),{current:t})})},onZoom:e=>{b(!0),y.current=!0,c((0,rB.__spreadProps)((0,rB.__spreadValues)({},s),{zoom:e}))}})}),(0,rF.jsxs)("div",{className:p3("inner"),ref:t,children:[(0,rF.jsx)("div",{className:p3("root"),style:{width:d.enabled?v.current.width:"100%",height:s.rootHeight,transform:d.enabled?`scale(${s.zoom})`:void 0,transition:_?"width 150ms ease-out, height 150ms ease-out, transform 150ms ease-out":"",overflow:d.enabled?void 0:"auto"},suppressHydrationWarning:!0,id:"puck-canvas-root",onTransitionEnd:()=>{b(!1),y.current=!1},children:(0,rF.jsx)(w,{children:(0,rF.jsx)(pB,{})})}),(0,rF.jsx)("div",{className:p3("loader"),children:(0,rF.jsx)(rO.Loader,{size:24})})]})]})};function p5(e,t){let[r,n]=(0,rk.useState)(null),i=(0,rk.useRef)(null),o=(0,rO.useAppStore)(t=>"left"===e?t.state.ui.leftSideBarWidth:t.state.ui.rightSideBarWidth);return(0,rk.useEffect)(()=>{if("u">typeof window&&!o)try{let r=localStorage.getItem("puck-sidebar-widths");if(r){let n=JSON.parse(r)[e],i="left"===e?"leftSideBarWidth":"rightSideBarWidth";n&&t({type:"setUi",ui:{[i]:n}})}}catch(t){console.error(`Failed to load ${e} sidebar width from localStorage`,t)}},[t,e,o]),(0,rk.useEffect)(()=>{void 0!==o&&n(o)},[o]),{width:r,setWidth:n,sidebarRef:i,handleResizeEnd:(0,rk.useCallback)(r=>{t({type:"setUi",ui:{["left"===e?"leftSideBarWidth":"rightSideBarWidth"]:r}});let n={};try{let e=localStorage.getItem("puck-sidebar-widths");n=e?JSON.parse(e):{}}catch(t){console.error(`Failed to save ${e} sidebar width to localStorage`,t)}finally{localStorage.setItem("puck-sidebar-widths",JSON.stringify((0,rB.__spreadProps)((0,rB.__spreadValues)({},n),{[e]:r})))}window.dispatchEvent(new CustomEvent("viewportchange",{bubbles:!0,cancelable:!1}))},[t,e])}}(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var p8=(0,rb.get_class_name_factory_default)("ResizeHandle",{ResizeHandle:"_ResizeHandle_144bf_2","ResizeHandle--left":"_ResizeHandle--left_144bf_16","ResizeHandle--right":"_ResizeHandle--right_144bf_20"}),p7=({position:e,sidebarRef:t,onResize:r,onResizeEnd:n})=>{let{frameRef:i}=p4(),o=(0,rO.useResetAutoZoom)(i),a=(0,rk.useRef)(null),l=(0,rk.useRef)(!1),s=(0,rk.useRef)(0),c=(0,rk.useRef)(0),u=(0,rk.useCallback)(t=>{if(!l.current)return;let n=t.clientX-s.current;r(Math.max(192,"left"===e?c.current+n:c.current-n)),t.preventDefault()},[r,e]),d=(0,rk.useCallback)(()=>{var e;if(!l.current)return;l.current=!1,document.body.style.cursor="",document.body.style.userSelect="";let r=document.getElementById("resize-overlay");r&&document.body.removeChild(r),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d),n((null==(e=t.current)?void 0:e.getBoundingClientRect().width)||0),o()},[n]),p=(0,rk.useCallback)(e=>{var r;l.current=!0,s.current=e.clientX,c.current=(null==(r=t.current)?void 0:r.getBoundingClientRect().width)||0,document.body.style.cursor="col-resize",document.body.style.userSelect="none";let n=document.createElement("div");n.id="resize-overlay",n.setAttribute("data-resize-overlay",""),document.body.appendChild(n),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),e.preventDefault()},[e,u,d]);return(0,rF.jsx)("div",{ref:a,className:p8({[e]:!0}),onMouseDown:p})};(0,rB.init_react_import)();var p9=(0,rb.get_class_name_factory_default)("Sidebar",{Sidebar:"_Sidebar_16oed_1","Sidebar--isVisible":"_Sidebar--isVisible_16oed_10","Sidebar--left":"_Sidebar--left_16oed_14","Sidebar--right":"_Sidebar--right_16oed_34","Sidebar-resizeHandle":"_Sidebar-resizeHandle_16oed_51"}),he=({position:e,sidebarRef:t,isVisible:r,onResize:n,onResizeEnd:i,children:o})=>(0,rF.jsxs)(rF.Fragment,{children:[(0,rF.jsx)("div",{ref:t,className:p9({[e]:!0,isVisible:r}),children:o}),(0,rF.jsx)("div",{className:`${p9("resizeHandle")}`,children:(0,rF.jsx)(p7,{position:e,sidebarRef:t,onResize:n,onResizeEnd:i})})]});(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)();var ht={Nav:"_Nav_vll2r_1","Nav-list":"_Nav-list_vll2r_5","Nav-mobileActions":"_Nav-mobileActions_vll2r_23","NavItem-link":"_NavItem-link_vll2r_39",NavItem:"_NavItem_vll2r_39","NavItem-linkIcon":"_NavItem-linkIcon_vll2r_90","NavItem--active":"_NavItem--active_vll2r_100","NavItem--mobileOnly":"_NavItem--mobileOnly_vll2r_136","NavItem--desktopOnly":"_NavItem--desktopOnly_vll2r_141"},hr=(0,rb.get_class_name_factory_default)("Nav",ht),hn=(0,rb.get_class_name_factory_default)("NavItem",ht),hi=({label:e,icon:t,onClick:r,isActive:n,mobileOnly:i,desktopOnly:o})=>(0,rF.jsx)("li",{className:hn({active:n,mobileOnly:i,desktopOnly:o}),children:r&&(0,rF.jsxs)("div",{className:hn("link"),onClick:r,children:[t&&(0,rF.jsx)("span",{className:hn("linkIcon"),children:t}),(0,rF.jsx)("span",{className:hn("linkLabel"),children:e})]})}),ho=({items:e,mobileActions:t})=>(0,rF.jsxs)("nav",{className:hr(),children:[(0,rF.jsx)("ul",{className:hr("list"),children:Object.entries(e).map(([e,t])=>(0,rF.jsx)(hi,(0,rB.__spreadValues)({},t),e))}),t&&(0,rF.jsx)("div",{className:hr("mobileActions"),children:t})]});(0,rB.init_react_import)();var ha=e=>(0,rB.__spreadValues)({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),hl=(0,rb.get_class_name_factory_default)("Puck",pF),hs=(0,rb.get_class_name_factory_default)("PuckLayout",pF),hc=(0,rb.get_class_name_factory_default)("PuckPluginTab",pF),hu="u"<typeof window?rk.useEffect:rk.useLayoutEffect,hd=()=>{let e=(0,rO.useMessage)("label-page"),t=(0,rO.useAppStore)(e=>{var t,r,n;return e.selectedItem?null!=(r=null==(t=e.config.components[e.selectedItem.type])?void 0:t.label)?r:e.selectedItem.type.toString():null==(n=e.config.root)?void 0:n.label});return(0,rF.jsx)(pU,{noBorderTop:!0,showBreadcrumbs:!0,title:t||e,children:(0,rF.jsx)(pf,{})})},hp=({children:e,visible:t,mobileOnly:r})=>(0,rF.jsx)("div",{className:hc({visible:t,mobileOnly:r}),children:(0,rF.jsx)("div",{className:hc("body"),children:e})}),hh=({children:e})=>{var t,r;let n,i,o,a,{iframe:l,initialHistory:s,plugins:c,height:u}=hg(),d=(0,rO.useAppStore)(e=>e.dnd),p=(0,rk.useMemo)(()=>ha(l),[l]);pS((null!==pj?pj:!("u"<typeof document)&&(pj=""!==getComputedStyle(document.documentElement).getPropertyValue("--_puck-styles-loaded").trim()))?null:{cssText:p_,id:"ui-default",prepend:!0}),(0,rk.useEffect)(()=>{},[]);let h=(0,rO.useAppStore)(e=>e.dispatch),f=(0,rO.useAppStore)(e=>e.state.ui.leftSideBarVisible),m=(0,rO.useAppStore)(e=>e.state.ui.rightSideBarVisible),g=(0,rO.useAppStore)(e=>e.instanceId),{width:v,setWidth:_,sidebarRef:b,handleResizeEnd:y}=p5("left",h),{width:k,setWidth:w,sidebarRef:S,handleResizeEnd:j}=p5("right",h);(0,rk.useEffect)(()=>{window.matchMedia("(min-width: 638px)").matches||h({type:"setUi",ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});let e=()=>{window.matchMedia("(min-width: 638px)").matches||h({type:"setUi",ui:e=>(0,rB.__spreadValues)((0,rB.__spreadValues)({},e),e.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let I=(0,rO.useAppStore)(e=>e.overrides),z=(0,rk.useMemo)(()=>I.puck||pR,[I]),[C,E]=(0,rk.useState)(!1);hu(()=>{E(!0)},[]);let A=(0,rO.useAppStore)(e=>"READY"===e.status);(0,rO.useMonitorHotkeys)(),(0,rk.useEffect)(()=>{if(A&&p.enabled){let e=uf();if(e)return(0,rO.monitorHotkeys)(e)}},[A,p.enabled]),n=(0,rO.useAppStoreApi)(),i=(0,rk.useCallback)(()=>{(0,n.getState().dispatch)({type:"setUi",ui:e=>({previewMode:"edit"===e.previewMode?"interactive":"edit"})})},[n]),(0,rO.useHotkey)({meta:!0,i:!0},i),(0,rO.useHotkey)({ctrl:!0,i:!0},i),o=(0,rO.useAppStoreApi)(),a=(0,rk.useCallback)(e=>{var t;if((e=>{var t;if(null==e?void 0:e.defaultPrevented)return!0;let r=(null==(t=null==e?void 0:e.composedPath)?void 0:t.call(e)[0])||(null==e?void 0:e.target)||document.activeElement;if(r instanceof HTMLElement){let e=r.tagName.toLowerCase();if("input"===e||"textarea"===e||"select"===e||r.isContentEditable)return!0;let t=r.getAttribute("role");if("textbox"===t||"combobox"===t||"searchbox"===t||"listbox"===t||"grid"===t)return!0}let n=document.querySelector('dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]');return!!(n&&(e=>{let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t);if("none"===e.display||"hidden"===e.visibility||"0"===e.opacity||"true"===t.getAttribute("aria-hidden")||t.hasAttribute("hidden"))return!1;t=t.parentElement}return!0})(n))})(e))return!1;let{state:r,dispatch:n,permissions:i,selectedItem:a}=o.getState(),l=null==(t=r.ui)?void 0:t.itemSelector;return null==l||!l.zone||!a||!i.getPermissions({item:a}).delete||(n({type:"remove",index:l.index,zone:l.zone}),!0)},[o]),(0,rO.useHotkey)({delete:!0},a),(0,rO.useHotkey)({backspace:!0},a);let P={};v&&(P["--puck-user-sidebar-left-width"]=`${v}px`),k&&(P["--puck-user-sidebar-right-width"]=`${k}px`);let L=(0,rO.useAppStore)(e=>e.setUi),M=(0,rO.useAppStore)(e=>{var t;return null==(t=e.state.ui.plugin)?void 0:t.current}),N=(0,rO.useAppStoreApi)(),T=(0,rk.useMemo)(()=>!!(null==c?void 0:c.find(e=>"legacy-side-bar"===e.name)),[c]),O=(0,rO.useMessage)("plugin-blocks"),D=(0,rO.useMessage)("plugin-outline"),B=(0,rO.useMessage)("plugin-fields"),F=(0,rk.useMemo)(()=>{let e={},t=[dI({label:O}),pl({label:D})],r=e=>"legacy-side-bar"===e.name?-1:0,n=[...t,...null!=c?c:[]].sort((e,t)=>r(e)-r(t));return(null==c?void 0:c.some(e=>"fields"===e.name))||n.push(pv({label:B})),null==n||n.forEach(t=>{var r,n,i;t.name&&t.render&&(e[t.name]&&delete e[t.name],e[t.name]={label:null!=(r=t.label)?r:t.name,icon:null!=(n=t.icon)?n:(0,rF.jsx)(rO.ToyBrick,{}),onClick:()=>{t.name===M?f?L({leftSideBarVisible:!1}):L({leftSideBarVisible:!0}):t.name&&L({plugin:{current:t.name},leftSideBarVisible:!0})},isActive:f&&M===t.name,render:t.render,mobilePanelHeight:null!=(i=t.mobilePanelHeight)?i:"toggle",mobileOnly:T||t.mobileOnly,desktopOnly:"legacy-side-bar"===t.name||t.desktopOnly})}),e},[c,M,N,f,O,D,B]),R=null!=M?M:Object.keys(F)[0],V=null!=(r=null==(t=F[R])?void 0:t.mobilePanelHeight)?r:"toggle";(0,rk.useEffect)(()=>{M||L({plugin:{current:Object.keys(F)[0]}})},[F,M]);let H=F.fields&&!1===F.fields.mobileOnly,W=(0,rO.useAppStore)(e=>{var t;return null!=(t=e.state.ui.mobilePanelExpanded)&&t}),$=(0,rO.useMessage)("layout-maximize"),q=(0,rO.useMessage)("layout-minimize");return(0,rF.jsxs)("div",{className:`Puck ${hl({hidePlugins:T})}`,id:g,style:{height:u,visibility:"hidden"},children:[(0,rF.jsx)(uZ,{disableAutoScroll:null==d?void 0:d.disableAutoScroll,behavior:null==d?void 0:d.behavior,children:(0,rF.jsx)(z,{children:e||(0,rF.jsx)(p2,{children:(0,rF.jsx)("div",{className:hs({leftSideBarVisible:f,mounted:C,rightSideBarVisible:!H&&m,isExpanded:W,mobilePanelHeightToggle:"toggle"===V,mobilePanelHeightMinContent:"min-content"===V}),style:{height:u},children:(0,rF.jsxs)("div",{className:hs("inner"),style:P,children:[(0,rF.jsx)("div",{className:hs("header"),children:(0,rF.jsx)(p$,{hidePlugins:T})}),(0,rF.jsx)("div",{className:hs("nav"),children:(0,rF.jsx)(ho,{items:F,mobileActions:f&&"toggle"===V&&(0,rF.jsx)(rO.IconButton,{type:"button",title:W?q:$,onClick:()=>{L({mobilePanelExpanded:!W})},children:W?(0,rF.jsx)(rO.Minimize2,{size:21}):(0,rF.jsx)(rO.Maximize2,{size:21})})})}),(0,rF.jsx)(he,{position:"left",sidebarRef:b,isVisible:f,onResize:_,onResizeEnd:y,children:Object.entries(F).map(([e,{mobileOnly:t,render:r,label:n}])=>(0,rF.jsx)(hp,{visible:M===e,mobileOnly:t,children:(0,rF.jsx)(r,{})},e))}),(0,rF.jsx)(p6,{}),!H&&(0,rF.jsx)(he,{position:"right",sidebarRef:S,isVisible:m,onResize:w,onResizeEnd:j,children:(0,rF.jsx)(hd,{})})]})})})})}),(0,rF.jsx)("div",{id:"puck-portal-root",className:hl("portal")})]})},hf=(0,rk.createContext)({});function hm(e){return(0,rF.jsx)(hf.Provider,{value:e,children:e.children})}var hg=()=>(0,rk.useContext)(hf);function hv({children:e}){let{config:t,data:r,ui:n,onChange:i,permissions:o={},plugins:a,overrides:l,viewports:s=r_.defaultViewports,iframe:c,dnd:u,initialHistory:d,metadata:p,dictionary:h,onAction:f,fieldTransforms:m,_experimentalFullScreenCanvas:g,_experimentalVirtualization:v}=hg(),_=(0,rk.useMemo)(()=>ha(c),[c]),[b]=(0,rk.useState)(()=>{var e,i,o;let a=(0,rB.__spreadValues)((0,rB.__spreadValues)({},r_.defaultAppState.ui),n);!(Object.keys((null==r?void 0:r.root)||{}).length>0)||(null==(e=null==r?void 0:r.root)?void 0:e.props)||console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");let l=(null==(i=null==r?void 0:r.root)?void 0:i.props)||(null==r?void 0:r.root)||{},s=(0,rB.__spreadValues)((0,rB.__spreadValues)({},null==(o=t.root)?void 0:o.defaultProps),l),c=(0,rD.populateIds)((0,rx.toComponent)((0,rB.__spreadProps)((0,rB.__spreadValues)({},null==r?void 0:r.root),{props:s})),t),u=(0,rB.__spreadProps)((0,rB.__spreadValues)({},r_.defaultAppState),{data:(0,rB.__spreadProps)((0,rB.__spreadValues)({},r),{root:(0,rB.__spreadProps)((0,rB.__spreadValues)({},null==r?void 0:r.root),{props:c.props}),content:r.content||[]}),ui:(0,rB.__spreadProps)((0,rB.__spreadValues)((0,rB.__spreadValues)({},a),{}),{componentList:t.categories?Object.entries(t.categories).reduce((e,[t,r])=>(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{[t]:{title:r.title,components:r.components,expanded:r.defaultExpanded,visible:r.visible}}),{}):{}})});return(0,rx.walkAppState)(u,t)}),{appendData:y=!0}=d||{},[k]=(0,rk.useState)([...(null==d?void 0:d.histories)||[],...y?[{state:b}]:[]].map(e=>{let r=(0,rB.__spreadValues)((0,rB.__spreadValues)({},b),e.state);return e.state.indexes||(r=(0,rx.walkAppState)(r,t)),(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{state:r})})),w=(0,rk.useMemo)(()=>(null==d?void 0:d.index)!==void 0&&(null==d?void 0:d.index)>=0&&(null==d?void 0:d.index)<k.length?null==d?void 0:d.index:k.length-1,[]),S=k[w].state,j=(({overrides:e,plugins:t})=>(0,rk.useMemo)(()=>(({overrides:e,plugins:t})=>{let r=(0,rB.__spreadValues)({},e);return null==t||t.forEach(e=>{e.overrides&&Object.keys(e.overrides).forEach(t=>{var n;if(!(null==(n=e.overrides)?void 0:n[t]))return;if("fieldTypes"===t){let t=e.overrides.fieldTypes;Object.keys(t).forEach(e=>{r.fieldTypes=r.fieldTypes||{};let n=r.fieldTypes[e];r.fieldTypes[e]=r=>t[e]((0,rB.__spreadProps)((0,rB.__spreadValues)({},r),{children:n?n(r):r.children}))});return}let i=r[t];r[t]=r=>e.overrides[t]((0,rB.__spreadProps)((0,rB.__spreadValues)({},r),{children:i?i(r):r.children}))})}),r})({overrides:e,plugins:t}),[t,e]))({overrides:l,plugins:a}),I=(0,rk.useMemo)(()=>{let e=(a||[]).reduce((e,t)=>(0,rB.__spreadValues)((0,rB.__spreadValues)({},e),t.fieldTransforms),{});return(0,rB.__spreadValues)((0,rB.__spreadValues)({},e),m)},[m,a]),z=ue(),C=(0,rk.useCallback)(e=>({instanceId:z,state:e,config:t,plugins:a||[],overrides:j,viewports:s,iframe:_,_experimentalFullScreenCanvas:!!g,_experimentalVirtualization:!!v,onAction:f,metadata:p,dictionary:h||{},dnd:u,fieldTransforms:I}),[z,S,t,a,j,s,_,g,v,f,p,h,u,I]),[E]=(0,rk.useState)(()=>(0,rO.createAppStore)(C(S)));(0,rk.useEffect)(()=>{},[E]),(0,rk.useEffect)(()=>{let e=E.getState().state;E.setState((0,rB.__spreadValues)({},C(e)))},[C]),(0,rO.useRegisterHistorySlice)(E,{histories:k,index:w,initialAppState:S});let A=(0,rk.useRef)(null);(0,rk.useEffect)(()=>E.subscribe(e=>e.state.data,e=>{i&&((0,sU.deepEqual)(e,A.current)||(i(e),A.current=e))}),[i]),(0,rO.useRegisterPermissionsSlice)(E,o);let P=(e=>{let[t]=(0,rk.useState)(()=>(0,rH.createStore)(()=>dv(db(e.getState()),e.getState)));return(0,rk.useEffect)(()=>e.subscribe(e=>db(e),r=>{t.setState(dv(r,e.getState))}),[]),t})(E);return(0,rk.useEffect)(()=>{let{resolveAndCommitData:e}=E.getState();setTimeout(()=>{e()},0)},[]),(0,rF.jsx)(rO.appStoreContext.Provider,{value:E,children:(0,rF.jsx)(d_.Provider,{value:P,children:e})})}function h_(e){return(0,rF.jsx)(hm,(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{children:(0,rF.jsx)(hv,(0,rB.__spreadProps)((0,rB.__spreadValues)({},e),{children:(0,rF.jsx)(hh,{children:e.children})}))}))}h_.Components=dS,h_.Fields=pf,h_.Layout=hh,h_.Outline=po,h_.Preview=pB,(0,rB.init_react_import)();var hb=({outlineLabel:e,componentsLabel:t})=>{let r=(0,rO.useMessage)("plugin-components"),n=(0,rO.useMessage)("plugin-outline");return(0,rF.jsxs)("div",{style:{overflowY:"auto"},children:[(0,rF.jsx)(pU,{title:null!=t?t:r,noBorderTop:!0,children:(0,rF.jsx)(dS,{})}),(0,rF.jsx)(pU,{title:null!=e?e:n,children:(0,rF.jsx)(po,{})})]})};(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),(0,rB.init_react_import)(),e.s(["AutoField",0,ul,"Button",0,ca,"Drawer",0,uJ,"DropZone",0,df,"FieldLabel",0,cc,"Puck",0,h_,"Render",0,dg,"blocksPlugin",0,dI,"createUsePuck",0,dx,"fieldsPlugin",0,pv,"legacySideBarPlugin",0,(e={})=>({name:"legacy-side-bar",render:()=>(0,rF.jsx)(hb,{outlineLabel:e.outlineLabel,componentsLabel:e.componentsLabel})}),"outlinePlugin",0,pl,"overrideKeys",0,["header","headerActions","fields","fieldLabel","drawer","drawerItem","componentOverlay","outline","puck","preview"],"registerOverlayPortal",0,u2,"renderContext",0,dm,"setDeep",0,cn,"useGetPuck",0,function(){let e=(0,rk.useContext)(d_);if(!e)throw Error("usePuckGet must be used inside <Puck>.");return e.getState},"usePuck",0,function(){return(0,rk.useEffect)(()=>{console.warn("You're using the `usePuck` method without a selector, which may cause unnecessary re-renders. Replace with `createUsePuck` and provide a selector for improved performance.")},[]),dx()(e=>e)}],72294),e.i(25760),e.i(49957),e.i(50354),(0,ry.init_react_import)(),e.s([],29439)},68971,(e,t,r)=>{t.exports=(function t(r,n,i){function o(l,s){if(!n[l]){if(!r[l]){var c=e.t;return!s&&c?c(l,!0):a(l,!0)}s=n[l]={exports:{}},r[l][0].call(s.exports,function(e){return o(r[l][1][e]||e)},s,s.exports,t,r,n,i)}return n[l].exports}for(var a=e.t,l=0;l<i.length;l++)o(i[l]);return o})({1:[function(e,t,r){(function(n,i,o,a,l,s,c,u,d){"use strict";var p=e("crypto");function h(e,t){var r;return void 0===(r="passthrough"!==(t=g(e,t)).algorithm?p.createHash(t.algorithm):new b).write&&(r.write=r.update,r.end=r.update),_(t,r).dispatch(e),r.update||r.end(""),r.digest?r.digest("buffer"===t.encoding?void 0:t.encoding):(e=r.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(r=t.exports=h).sha1=function(e){return h(e)},r.keys=function(e){return h(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(e){return h(e,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(e){return h(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var f=p.getHashes?p.getHashes().slice():["sha1","md5"],m=(f.push("passthrough"),["buffer","hex","binary","base64"]);function g(e,t){var r={};if(r.algorithm=(t=t||{}).algorithm||"sha1",r.encoding=t.encoding||"hex",r.excludeValues=!!t.excludeValues,r.algorithm=r.algorithm.toLowerCase(),r.encoding=r.encoding.toLowerCase(),r.ignoreUnknown=!0===t.ignoreUnknown,r.respectType=!1!==t.respectType,r.respectFunctionNames=!1!==t.respectFunctionNames,r.respectFunctionProperties=!1!==t.respectFunctionProperties,r.unorderedArrays=!0===t.unorderedArrays,r.unorderedSets=!1!==t.unorderedSets,r.unorderedObjects=!1!==t.unorderedObjects,r.replacer=t.replacer||void 0,r.excludeKeys=t.excludeKeys||void 0,void 0===e)throw Error("Object argument required.");for(var n=0;n<f.length;++n)f[n].toLowerCase()===r.algorithm.toLowerCase()&&(r.algorithm=f[n]);if(-1===f.indexOf(r.algorithm))throw Error('Algorithm "'+r.algorithm+'"  not supported. supported values: '+f.join(", "));if(-1===m.indexOf(r.encoding)&&"passthrough"!==r.algorithm)throw Error('Encoding "'+r.encoding+'"  not supported. supported values: '+m.join(", "));return r}function v(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function _(e,t,r){function n(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return r=r||[],{dispatch:function(t){return this["_"+(null===(t=e.replacer?e.replacer(t):t)?"null":typeof t)](t)},_object:function(t){var i,a=Object.prototype.toString.call(t),l=/\[object (.*)\]/i.exec(a);if(l=(l=l?l[1]:"unknown:["+a+"]").toLowerCase(),0<=(a=r.indexOf(t)))return this.dispatch("[CIRCULAR:"+a+"]");if(r.push(t),void 0!==o&&o.isBuffer&&o.isBuffer(t))return n("buffer:"),n(t);if("object"===l||"function"===l||"asyncfunction"===l)return a=Object.keys(t),e.unorderedObjects&&(a=a.sort()),!1===e.respectType||v(t)||a.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(a=a.filter(function(t){return!e.excludeKeys(t)})),n("object:"+a.length+":"),i=this,a.forEach(function(r){i.dispatch(r),n(":"),e.excludeValues||i.dispatch(t[r]),n(",")});if(!this["_"+l]){if(e.ignoreUnknown)return n("["+l+"]");throw Error('Unknown object type "'+l+'"')}this["_"+l](t)},_array:function(t,i){i=void 0!==i?i:!1!==e.unorderedArrays;var o=this;if(n("array:"+t.length+":"),!i||t.length<=1)return t.forEach(function(e){return o.dispatch(e)});var a=[],i=t.map(function(t){var n=new b,i=r.slice();return _(e,n,i).dispatch(t),a=a.concat(i.slice(r.length)),n.read().toString()});return r=r.concat(a),i.sort(),this._array(i,!1)},_date:function(e){return n("date:"+e.toJSON())},_symbol:function(e){return n("symbol:"+e.toString())},_error:function(e){return n("error:"+e.toString())},_boolean:function(e){return n("bool:"+e.toString())},_string:function(e){n("string:"+e.length+":"),n(e.toString())},_function:function(t){n("fn:"),v(t)?this.dispatch("[native]"):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return n("number:"+e.toString())},_xml:function(e){return n("xml:"+e.toString())},_null:function(){return n("Null")},_undefined:function(){return n("Undefined")},_regexp:function(e){return n("regex:"+e.toString())},_uint8array:function(e){return n("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return n("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return n("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return n("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return n("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return n("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return n("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return n("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return n("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return n("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return n("url:"+e.toString())},_map:function(t){return n("map:"),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_set:function(t){return n("set:"),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_file:function(e){return n("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(e.ignoreUnknown)return n("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return n("domwindow")},_bigint:function(e){return n("bigint:"+e.toString())},_process:function(){return n("process")},_timer:function(){return n("timer")},_pipe:function(){return n("pipe")},_tcp:function(){return n("tcp")},_udp:function(){return n("udp")},_tty:function(){return n("tty")},_statwatcher:function(){return n("statwatcher")},_securecontext:function(){return n("securecontext")},_connection:function(){return n("connection")},_zlib:function(){return n("zlib")},_context:function(){return n("context")},_nodescript:function(){return n("nodescript")},_httpparser:function(){return n("httpparser")},_dataview:function(){return n("dataview")},_signal:function(){return n("signal")},_fsevent:function(){return n("fsevent")},_tlswrap:function(){return n("tlswrap")}}}function b(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}r.writeToStream=function(e,t,r){return void 0===r&&(r=t,t={}),_(t=g(e,t),r).dispatch(e)}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,r){(function(e,t,n,i,o,a,l,s,c){!function(e){"use strict";var t="u">typeof Uint8Array?Uint8Array:Array;function r(e){return 43===(e=e.charCodeAt(0))||45===e?62:47===e||95===e?63:e<48?-1:e<58?e-48+26+26:e<91?e-65:e<123?e-97+26:void 0}e.toByteArray=function(e){if(0<e.length%4)throw Error("Invalid string. Length must be a multiple of 4");var n,i,o=e.length,o="="===e.charAt(o-2)?2:+("="===e.charAt(o-1)),a=new t(3*e.length/4-o),l=0<o?e.length-4:e.length,s=0;function c(e){a[s++]=e}for(n=0;n<l;n+=4)c((0xff0000&(i=r(e.charAt(n))<<18|r(e.charAt(n+1))<<12|r(e.charAt(n+2))<<6|r(e.charAt(n+3))))>>16),c((65280&i)>>8),c(255&i);return 2==o?c(255&(i=r(e.charAt(n))<<2|r(e.charAt(n+1))>>4)):1==o&&(c((i=r(e.charAt(n))<<10|r(e.charAt(n+1))<<4|r(e.charAt(n+2))>>2)>>8&255),c(255&i)),a},e.fromByteArray=function(e){var t,r,n,i,o=e.length%3,a="";function l(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,n=e.length-o;t<n;t+=3)a+=l((i=r=(e[t]<<16)+(e[t+1]<<8)+e[t+2])>>18&63)+l(i>>12&63)+l(i>>6&63)+l(63&i);switch(o){case 1:a=(a+=l((r=e[e.length-1])>>2))+l(r<<4&63)+"==";break;case 2:a=(a=(a+=l((r=(e[e.length-2]<<8)+e[e.length-1])>>10))+l(r>>4&63))+l(r<<2&63)+"="}return a}}(void 0===r?this.base64js={}:r)}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(e,t,r){(function(t,n,i,o,a,l,s,c,u){var d=e("base64-js"),p=e("ieee754");function i(e,t,r){if(!(this instanceof i))return new i(e,t,r);var n,o,a,l,s=typeof e;if("base64"===t&&"string"==s)for(e=(l=e).trim?l.trim():l.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==s)n=C(e);else if("string"==s)n=i.byteLength(e,t);else{if("object"!=s)throw Error("First argument needs to be a number, array or string.");n=C(e.length)}if(i._useTypedArrays?o=i._augment(new Uint8Array(n)):((o=this).length=n,o._isBuffer=!0),i._useTypedArrays&&"number"==typeof e.byteLength)o._set(e);else if(E(l=e)||i.isBuffer(l)||l&&"object"==typeof l&&"number"==typeof l.length)for(a=0;a<n;a++)i.isBuffer(e)?o[a]=e.readUInt8(a):o[a]=e[a];else if("string"==s)o.write(e,0,t);else if("number"==s&&!i._useTypedArrays&&!r)for(a=0;a<n;a++)o[a]=0;return o}function h(e,t,r,n){n||(B("boolean"==typeof r,"missing or invalid endian"),B(null!=t,"missing offset"),B(t+1<e.length,"Trying to read beyond buffer length"));var i,n=e.length;if(!(n<=t))return r?(i=e[t],t+1<n&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<n&&(i|=e[t+1])),i}function f(e,t,r,n){n||(B("boolean"==typeof r,"missing or invalid endian"),B(null!=t,"missing offset"),B(t+3<e.length,"Trying to read beyond buffer length"));var i,n=e.length;if(!(n<=t))return r?(t+2<n&&(i=e[t+2]<<16),t+1<n&&(i|=e[t+1]<<8),i|=e[t],t+3<n&&(i+=e[t+3]<<24>>>0)):(t+1<n&&(i=e[t+1]<<16),t+2<n&&(i|=e[t+2]<<8),t+3<n&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}function m(e,t,r,n){if(n||(B("boolean"==typeof r,"missing or invalid endian"),B(null!=t,"missing offset"),B(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return 32768&(n=h(e,t,r,!0))?-1*(65535-n+1):n}function g(e,t,r,n){if(n||(B("boolean"==typeof r,"missing or invalid endian"),B(null!=t,"missing offset"),B(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return 0x80000000&(n=f(e,t,r,!0))?-1*(0xffffffff-n+1):n}function v(e,t,r,n){return n||(B("boolean"==typeof r,"missing or invalid endian"),B(t+3<e.length,"Trying to read beyond buffer length")),p.read(e,t,r,23,4)}function _(e,t,r,n){return n||(B("boolean"==typeof r,"missing or invalid endian"),B(t+7<e.length,"Trying to read beyond buffer length")),p.read(e,t,r,52,8)}function b(e,t,r,n,i){if(i||(B(null!=t,"missing value"),B("boolean"==typeof n,"missing or invalid endian"),B(null!=r,"missing offset"),B(r+1<e.length,"trying to write beyond buffer length"),T(t,65535)),!((i=e.length)<=r))for(var o=0,a=Math.min(i-r,2);o<a;o++)e[r+o]=(t&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function y(e,t,r,n,i){if(i||(B(null!=t,"missing value"),B("boolean"==typeof n,"missing or invalid endian"),B(null!=r,"missing offset"),B(r+3<e.length,"trying to write beyond buffer length"),T(t,0xffffffff)),!((i=e.length)<=r))for(var o=0,a=Math.min(i-r,4);o<a;o++)e[r+o]=t>>>8*(n?o:3-o)&255}function k(e,t,r,n,i){i||(B(null!=t,"missing value"),B("boolean"==typeof n,"missing or invalid endian"),B(null!=r,"missing offset"),B(r+1<e.length,"Trying to write beyond buffer length"),O(t,32767,-32768)),e.length<=r||b(e,0<=t?t:65535+t+1,r,n,i)}function w(e,t,r,n,i){i||(B(null!=t,"missing value"),B("boolean"==typeof n,"missing or invalid endian"),B(null!=r,"missing offset"),B(r+3<e.length,"Trying to write beyond buffer length"),O(t,0x7fffffff,-0x80000000)),e.length<=r||y(e,0<=t?t:0xffffffff+t+1,r,n,i)}function S(e,t,r,n,i){i||(B(null!=t,"missing value"),B("boolean"==typeof n,"missing or invalid endian"),B(null!=r,"missing offset"),B(r+3<e.length,"Trying to write beyond buffer length"),D(t,34028234663852886e22,-34028234663852886e22)),e.length<=r||p.write(e,t,r,n,23,4)}function j(e,t,r,n,i){i||(B(null!=t,"missing value"),B("boolean"==typeof n,"missing or invalid endian"),B(null!=r,"missing offset"),B(r+7<e.length,"Trying to write beyond buffer length"),D(t,17976931348623157e292,-17976931348623157e292)),e.length<=r||p.write(e,t,r,n,52,8)}r.Buffer=i,r.SlowBuffer=i,r.INSPECT_MAX_BYTES=50,i.poolSize=8192,i._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.isBuffer=function(e){return!(null==e||!e._isBuffer)},i.byteLength=function(e,t){var r;switch(e+="",t||"utf8"){case"hex":r=e.length/2;break;case"utf8":case"utf-8":r=P(e).length;break;case"ascii":case"binary":case"raw":r=e.length;break;case"base64":r=L(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*e.length;break;default:throw Error("Unknown encoding")}return r},i.concat=function(e,t){if(B(E(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new i(0);if(1===e.length)return e[0];if("number"!=typeof t)for(o=t=0;o<e.length;o++)t+=e[o].length;for(var r=new i(t),n=0,o=0;o<e.length;o++){var a=e[o];a.copy(r,n),n+=a.length}return r},i.prototype.write=function(e,t,r,n){isFinite(t)?isFinite(r)||(n=r,r=void 0):(h=n,n=t,t=r,r=h),t=Number(t)||0;var o,a,l,s,c,u,d,p,h=this.length-t;switch((!r||h<(r=Number(r)))&&(r=h),n=String(n||"utf8").toLowerCase()){case"hex":c=function(e,t,r,n){r=Number(r)||0;var o=e.length-r;(!n||o<(n=Number(n)))&&(n=o),B((o=t.length)%2==0,"Invalid hex string"),o/2<n&&(n=o/2);for(var a=0;a<n;a++){var l=parseInt(t.substr(2*a,2),16);B(!isNaN(l),"Invalid hex string"),e[r+a]=l}return i._charsWritten=2*a,a}(this,e,t,r);break;case"utf8":case"utf-8":u=this,d=t,p=r,c=i._charsWritten=M(P(e),u,d,p);break;case"ascii":case"binary":o=t,a=r,c=i._charsWritten=M(function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);break;case"base64":u=this,d=t,p=r,c=i._charsWritten=M(L(e),u,d,p);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":l=t,s=r,c=i._charsWritten=M(function(e){for(var t,r,n=[],i=0;i<e.length;i++)t=(r=e.charCodeAt(i))>>8,n.push(r%=256),n.push(t);return n}(e),this,l,s);break;default:throw Error("Unknown encoding")}return c},i.prototype.toString=function(e,t,r){var n,i,o;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(r=void 0!==r?Number(r):this.length)===t)return"";switch(e){case"hex":n=function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||n<r)&&(r=n);for(var i="",o=t;o<r;o++)i+=A(e[o]);return i}(this,t,r);break;case"utf8":case"utf-8":n=function(e,t,r){var n="",i="";r=Math.min(e.length,r);for(var o=t;o<r;o++)e[o]<=127?(n+=N(i)+String.fromCharCode(e[o]),i=""):i+="%"+e[o].toString(16);return n+N(i)}(this,t,r);break;case"ascii":case"binary":n=function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;i++)n+=String.fromCharCode(e[i]);return n}(this,t,r);break;case"base64":o=r,n=0===(i=t)&&o===this.length?d.fromByteArray(this):d.fromByteArray(this.slice(i,o));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=function(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}(this,t,r);break;default:throw Error("Unknown encoding")}return n},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},i.prototype.copy=function(e,t,r,n){if(t=t||0,(n=n||0===n?n:this.length)!==(r=r||0)&&0!==e.length&&0!==this.length){B(r<=n,"sourceEnd < sourceStart"),B(0<=t&&t<e.length,"targetStart out of bounds"),B(0<=r&&r<this.length,"sourceStart out of bounds"),B(0<=n&&n<=this.length,"sourceEnd out of bounds"),n>this.length&&(n=this.length);var o=(n=e.length-t<n-r?e.length-t+r:n)-r;if(o<100||!i._useTypedArrays)for(var a=0;a<o;a++)e[a+t]=this[a+r];else e._set(this.subarray(r,r+o),t)}},i.prototype.slice=function(e,t){var r=this.length;if(e=z(e,r,0),t=z(t,r,r),i._useTypedArrays)return i._augment(this.subarray(e,t));for(var n=t-e,o=new i(n,void 0,!0),a=0;a<n;a++)o[a]=this[a+e];return o},i.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},i.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},i.prototype.readUInt8=function(e,t){if(t||(B(null!=e,"missing offset"),B(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},i.prototype.readUInt16LE=function(e,t){return h(this,e,!0,t)},i.prototype.readUInt16BE=function(e,t){return h(this,e,!1,t)},i.prototype.readUInt32LE=function(e,t){return f(this,e,!0,t)},i.prototype.readUInt32BE=function(e,t){return f(this,e,!1,t)},i.prototype.readInt8=function(e,t){if(t||(B(null!=e,"missing offset"),B(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},i.prototype.readInt16LE=function(e,t){return m(this,e,!0,t)},i.prototype.readInt16BE=function(e,t){return m(this,e,!1,t)},i.prototype.readInt32LE=function(e,t){return g(this,e,!0,t)},i.prototype.readInt32BE=function(e,t){return g(this,e,!1,t)},i.prototype.readFloatLE=function(e,t){return v(this,e,!0,t)},i.prototype.readFloatBE=function(e,t){return v(this,e,!1,t)},i.prototype.readDoubleLE=function(e,t){return _(this,e,!0,t)},i.prototype.readDoubleBE=function(e,t){return _(this,e,!1,t)},i.prototype.writeUInt8=function(e,t,r){r||(B(null!=e,"missing value"),B(null!=t,"missing offset"),B(t<this.length,"trying to write beyond buffer length"),T(e,255)),t>=this.length||(this[t]=e)},i.prototype.writeUInt16LE=function(e,t,r){b(this,e,t,!0,r)},i.prototype.writeUInt16BE=function(e,t,r){b(this,e,t,!1,r)},i.prototype.writeUInt32LE=function(e,t,r){y(this,e,t,!0,r)},i.prototype.writeUInt32BE=function(e,t,r){y(this,e,t,!1,r)},i.prototype.writeInt8=function(e,t,r){r||(B(null!=e,"missing value"),B(null!=t,"missing offset"),B(t<this.length,"Trying to write beyond buffer length"),O(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,r):this.writeUInt8(255+e+1,t,r))},i.prototype.writeInt16LE=function(e,t,r){k(this,e,t,!0,r)},i.prototype.writeInt16BE=function(e,t,r){k(this,e,t,!1,r)},i.prototype.writeInt32LE=function(e,t,r){w(this,e,t,!0,r)},i.prototype.writeInt32BE=function(e,t,r){w(this,e,t,!1,r)},i.prototype.writeFloatLE=function(e,t,r){S(this,e,t,!0,r)},i.prototype.writeFloatBE=function(e,t,r){S(this,e,t,!1,r)},i.prototype.writeDoubleLE=function(e,t,r){j(this,e,t,!0,r)},i.prototype.writeDoubleBE=function(e,t,r){j(this,e,t,!1,r)},i.prototype.fill=function(e,t,r){if(t=t||0,r=r||this.length,B("number"==typeof(e="string"==typeof(e=e||0)?e.charCodeAt(0):e)&&!isNaN(e),"value is not a number"),B(t<=r,"end < start"),r!==t&&0!==this.length){B(0<=t&&t<this.length,"start out of bounds"),B(0<=r&&r<=this.length,"end out of bounds");for(var n=t;n<r;n++)this[n]=e}},i.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=A(this[n]),n===r.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},i.prototype.toArrayBuffer=function(){if("u"<typeof Uint8Array)throw Error("Buffer.toArrayBuffer not supported in this browser");if(i._useTypedArrays)return new i(this).buffer;for(var e=new Uint8Array(this.length),t=0,r=e.length;t<r;t+=1)e[t]=this[t];return e.buffer};var I=i.prototype;function z(e,t,r){return"number"!=typeof e?r:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function C(e){return(e=~~Math.ceil(+e))<0?0:e}function E(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function A(e){return e<16?"0"+e.toString(16):e.toString(16)}function P(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(e.charCodeAt(r));else for(var i=r,o=(55296<=n&&n<=57343&&r++,encodeURIComponent(e.slice(i,r+1)).substr(1).split("%")),a=0;a<o.length;a++)t.push(parseInt(o[a],16))}return t}function L(e){return d.toByteArray(e)}function M(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);i++)t[i+r]=e[i];return i}function N(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function T(e,t){B("number"==typeof e,"cannot write a non-number as a number"),B(0<=e,"specified a negative value for writing an unsigned value"),B(e<=t,"value is larger than maximum value for type"),B(Math.floor(e)===e,"value has a fractional component")}function O(e,t,r){B("number"==typeof e,"cannot write a non-number as a number"),B(e<=t,"value larger than maximum allowed value"),B(r<=e,"value smaller than minimum allowed value"),B(Math.floor(e)===e,"value has a fractional component")}function D(e,t,r){B("number"==typeof e,"cannot write a non-number as a number"),B(e<=t,"value larger than maximum allowed value"),B(r<=e,"value smaller than minimum allowed value")}function B(e,t){if(!e)throw Error(t||"Failed assertion")}i._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=I.get,e.set=I.set,e.write=I.write,e.toString=I.toString,e.toLocaleString=I.toString,e.toJSON=I.toJSON,e.copy=I.copy,e.slice=I.slice,e.readUInt8=I.readUInt8,e.readUInt16LE=I.readUInt16LE,e.readUInt16BE=I.readUInt16BE,e.readUInt32LE=I.readUInt32LE,e.readUInt32BE=I.readUInt32BE,e.readInt8=I.readInt8,e.readInt16LE=I.readInt16LE,e.readInt16BE=I.readInt16BE,e.readInt32LE=I.readInt32LE,e.readInt32BE=I.readInt32BE,e.readFloatLE=I.readFloatLE,e.readFloatBE=I.readFloatBE,e.readDoubleLE=I.readDoubleLE,e.readDoubleBE=I.readDoubleBE,e.writeUInt8=I.writeUInt8,e.writeUInt16LE=I.writeUInt16LE,e.writeUInt16BE=I.writeUInt16BE,e.writeUInt32LE=I.writeUInt32LE,e.writeUInt32BE=I.writeUInt32BE,e.writeInt8=I.writeInt8,e.writeInt16LE=I.writeInt16LE,e.writeInt16BE=I.writeInt16BE,e.writeInt32LE=I.writeInt32LE,e.writeInt32BE=I.writeInt32BE,e.writeFloatLE=I.writeFloatLE,e.writeFloatBE=I.writeFloatBE,e.writeDoubleLE=I.writeDoubleLE,e.writeDoubleBE=I.writeDoubleBE,e.fill=I.fill,e.inspect=I.inspect,e.toArrayBuffer=I.toArrayBuffer,e}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,t,r){(function(r,n,i,o,a,l,s,c,u){var i=e("buffer").Buffer,d=new i(4);d.fill(0),t.exports={hash:function(e,t,r,n){for(var o=t(function(e,t){e.length%4!=0&&(r=e.length+(4-e.length%4),e=i.concat([e,d],r));for(var r,n=[],o=t?e.readInt32BE:e.readInt32LE,a=0;a<e.length;a+=4)n.push(o.call(e,a));return n}(e=i.isBuffer(e)?e:new i(e),n),8*e.length),t=n,a=new i(r),l=t?a.writeInt32BE:a.writeInt32LE,s=0;s<o.length;s++)l.call(a,o[s],4*s,!0);return a}}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(e,t,r){(function(t,n,i,o,a,l,s,c,u){var i=e("buffer").Buffer,d=e("./sha"),p=e("./sha256"),h=e("./rng"),f={sha1:d,sha256:p,md5:e("./md5")},m=new i(64);function g(e,t){var r=f[e=e||"sha1"],n=[];return r||v("algorithm:",e,"is not yet supported"),{update:function(e){return i.isBuffer(e)||(e=new i(e)),n.push(e),e.length,this},digest:function(e){var o=i.concat(n),o=t?function(e,t,r){i.isBuffer(t)||(t=new i(t)),i.isBuffer(r)||(r=new i(r)),t.length>64?t=e(t):t.length<64&&(t=i.concat([t,m],64));for(var n=new i(64),o=new i(64),a=0;a<64;a++)n[a]=54^t[a],o[a]=92^t[a];return r=e(i.concat([n,r])),e(i.concat([o,r]))}(r,t,o):r(o);return n=null,e?o.toString(e):o}}}function v(){var e=[].slice.call(arguments).join(" ");throw Error([e,"we accept pull requests\nhttp://github.com/dominictarr/crypto-browserify"].join("\n"))}m.fill(0),r.createHash=function(e){return g(e)},r.createHmac=g,r.randomBytes=function(e,t){if(!t||!t.call)return new i(h(e));try{t.call(this,void 0,new i(h(e)))}catch(e){t(e)}};var _,b=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],y=function(e){r[e]=function(){v("sorry,",e,"is not implemented yet")}};for(_ in b)y(b[_])}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,t,r){(function(r,n,i,o,a,l,s,c,u){var d=e("./helpers");function p(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=0x67452301,n=-0x10325477,i=-0x67452302,o=0x10325476,a=0;a<e.length;a+=16){var l=r,s=n,c=i,u=o,r=f(r,n,i,o,e[a+0],7,-0x28955b88),o=f(o,r,n,i,e[a+1],12,-0x173848aa),i=f(i,o,r,n,e[a+2],17,0x242070db),n=f(n,i,o,r,e[a+3],22,-0x3e423112);r=f(r,n,i,o,e[a+4],7,-0xa83f051),o=f(o,r,n,i,e[a+5],12,0x4787c62a),i=f(i,o,r,n,e[a+6],17,-0x57cfb9ed),n=f(n,i,o,r,e[a+7],22,-0x2b96aff),r=f(r,n,i,o,e[a+8],7,0x698098d8),o=f(o,r,n,i,e[a+9],12,-0x74bb0851),i=f(i,o,r,n,e[a+10],17,-42063),n=f(n,i,o,r,e[a+11],22,-0x76a32842),r=f(r,n,i,o,e[a+12],7,0x6b901122),o=f(o,r,n,i,e[a+13],12,-0x2678e6d),i=f(i,o,r,n,e[a+14],17,-0x5986bc72),r=m(r,n=f(n,i,o,r,e[a+15],22,0x49b40821),i,o,e[a+1],5,-0x9e1da9e),o=m(o,r,n,i,e[a+6],9,-0x3fbf4cc0),i=m(i,o,r,n,e[a+11],14,0x265e5a51),n=m(n,i,o,r,e[a+0],20,-0x16493856),r=m(r,n,i,o,e[a+5],5,-0x29d0efa3),o=m(o,r,n,i,e[a+10],9,0x2441453),i=m(i,o,r,n,e[a+15],14,-0x275e197f),n=m(n,i,o,r,e[a+4],20,-0x182c0438),r=m(r,n,i,o,e[a+9],5,0x21e1cde6),o=m(o,r,n,i,e[a+14],9,-0x3cc8f82a),i=m(i,o,r,n,e[a+3],14,-0xb2af279),n=m(n,i,o,r,e[a+8],20,0x455a14ed),r=m(r,n,i,o,e[a+13],5,-0x561c16fb),o=m(o,r,n,i,e[a+2],9,-0x3105c08),i=m(i,o,r,n,e[a+7],14,0x676f02d9),r=g(r,n=m(n,i,o,r,e[a+12],20,-0x72d5b376),i,o,e[a+5],4,-378558),o=g(o,r,n,i,e[a+8],11,-0x788e097f),i=g(i,o,r,n,e[a+11],16,0x6d9d6122),n=g(n,i,o,r,e[a+14],23,-0x21ac7f4),r=g(r,n,i,o,e[a+1],4,-0x5b4115bc),o=g(o,r,n,i,e[a+4],11,0x4bdecfa9),i=g(i,o,r,n,e[a+7],16,-0x944b4a0),n=g(n,i,o,r,e[a+10],23,-0x41404390),r=g(r,n,i,o,e[a+13],4,0x289b7ec6),o=g(o,r,n,i,e[a+0],11,-0x155ed806),i=g(i,o,r,n,e[a+3],16,-0x2b10cf7b),n=g(n,i,o,r,e[a+6],23,0x4881d05),r=g(r,n,i,o,e[a+9],4,-0x262b2fc7),o=g(o,r,n,i,e[a+12],11,-0x1924661b),i=g(i,o,r,n,e[a+15],16,0x1fa27cf8),r=v(r,n=g(n,i,o,r,e[a+2],23,-0x3b53a99b),i,o,e[a+0],6,-0xbd6ddbc),o=v(o,r,n,i,e[a+7],10,0x432aff97),i=v(i,o,r,n,e[a+14],15,-0x546bdc59),n=v(n,i,o,r,e[a+5],21,-0x36c5fc7),r=v(r,n,i,o,e[a+12],6,0x655b59c3),o=v(o,r,n,i,e[a+3],10,-0x70f3336e),i=v(i,o,r,n,e[a+10],15,-1051523),n=v(n,i,o,r,e[a+1],21,-0x7a7ba22f),r=v(r,n,i,o,e[a+8],6,0x6fa87e4f),o=v(o,r,n,i,e[a+15],10,-0x1d31920),i=v(i,o,r,n,e[a+6],15,-0x5cfebcec),n=v(n,i,o,r,e[a+13],21,0x4e0811a1),r=v(r,n,i,o,e[a+4],6,-0x8ac817e),o=v(o,r,n,i,e[a+11],10,-0x42c50dcb),i=v(i,o,r,n,e[a+2],15,0x2ad7d2bb),n=v(n,i,o,r,e[a+9],21,-0x14792c6f),r=_(r,l),n=_(n,s),i=_(i,c),o=_(o,u)}return[r,n,i,o]}function h(e,t,r,n,i,o){return _((t=_(_(t,e),_(n,o)))<<i|t>>>32-i,r)}function f(e,t,r,n,i,o,a){return h(t&r|~t&n,e,t,i,o,a)}function m(e,t,r,n,i,o,a){return h(t&n|r&~n,e,t,i,o,a)}function g(e,t,r,n,i,o,a){return h(t^r^n,e,t,i,o,a)}function v(e,t,r,n,i,o,a){return h(r^(t|~n),e,t,i,o,a)}function _(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}t.exports=function(e){return d.hash(e,p,16)}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,t,r){(function(e,r,n,i,o,a,l,s,c){t.exports=function(e){for(var t,r=Array(e),n=0;n<e;n++)0==(3&n)&&(t=0x100000000*Math.random()),r[n]=t>>>((3&n)<<3)&255;return r}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(e,t,r){(function(r,n,i,o,a,l,s,c,u){var d=e("./helpers");function p(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var r,n,i,o=Array(80),a=0x67452301,l=-0x10325477,s=-0x67452302,c=0x10325476,u=-0x3c2d1e10,d=0;d<e.length;d+=16){for(var p=a,m=l,g=s,v=c,_=u,b=0;b<80;b++){o[b]=b<16?e[d+b]:f(o[b-3]^o[b-8]^o[b-14]^o[b-16],1);var y=h(h(f(a,5),(y=l,n=s,i=c,(r=b)<20?y&n|~y&i:!(r<40)&&r<60?y&n|y&i|n&i:y^n^i)),h(h(u,o[b]),(r=b)<20?0x5a827999:r<40?0x6ed9eba1:r<60?-0x70e44324:-0x359d3e2a)),u=c,c=s,s=f(l,30),l=a,a=y}a=h(a,p),l=h(l,m),s=h(s,g),c=h(c,v),u=h(u,_)}return[a,l,s,c,u]}function h(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(e,t){return e<<t|e>>>32-t}t.exports=function(e){return d.hash(e,p,20,!0)}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,t,r){(function(r,n,i,o,a,l,s,c,u){function d(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function p(e,t){var r,n=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2],i=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],o=Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var a,l,s=0;s<e.length;s+=16){for(var c=i[0],u=i[1],p=i[2],h=i[3],g=i[4],v=i[5],_=i[6],b=i[7],y=0;y<64;y++)o[y]=y<16?e[y+s]:d(d(d(f(l=o[y-2],17)^f(l,19)^m(l,10),o[y-7]),f(l=o[y-15],7)^f(l,18)^m(l,3)),o[y-16]),r=d(d(d(d(b,f(l=g,6)^f(l,11)^f(l,25)),g&v^~g&_),n[y]),o[y]),a=d(f(a=c,2)^f(a,13)^f(a,22),c&u^c&p^u&p),b=_,_=v,v=g,g=d(h,r),h=p,p=u,u=c,c=d(r,a);i[0]=d(c,i[0]),i[1]=d(u,i[1]),i[2]=d(p,i[2]),i[3]=d(h,i[3]),i[4]=d(g,i[4]),i[5]=d(v,i[5]),i[6]=d(_,i[6]),i[7]=d(b,i[7])}return i}var h=e("./helpers"),f=function(e,t){return e>>>t|e<<32-t},m=function(e,t){return e>>>t};t.exports=function(e){return h.hash(e,p,32,!0)}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,r){(function(e,t,n,i,o,a,l,s,c){r.read=function(e,t,r,n,i){var o,a,l=8*i-n-1,s=(1<<l)-1,c=s>>1,u=-7,d=r?i-1:0,p=r?-1:1,i=e[t+d];for(d+=p,o=i&(1<<-u)-1,i>>=-u,u+=l;0<u;o=256*o+e[t+d],d+=p,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=n;0<u;a=256*a+e[t+d],d+=p,u-=8);if(0===o)o=1-c;else{if(o===s)return a?NaN:1/0*(i?-1:1);a+=Math.pow(2,n),o-=c}return(i?-1:1)*a*Math.pow(2,o-n)},r.write=function(e,t,r,n,i,o){var a,l,s=8*o-i-1,c=(1<<s)-1,u=c>>1,d=5960464477539062e-23*(23===i),p=n?0:o-1,h=n?1:-1,o=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(l=+!!isNaN(t),a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-a))<1&&(a--,n*=2),2<=(t+=1<=a+u?d/n:d*Math.pow(2,1-u))*n&&(a++,n/=2),c<=a+u?(l=0,a=c):1<=a+u?(l=(t*n-1)*Math.pow(2,i),a+=u):(l=t*Math.pow(2,u-1)*Math.pow(2,i),a=0));8<=i;e[r+p]=255&l,p+=h,l/=256,i-=8);for(a=a<<i|l,s+=i;0<s;e[r+p]=255&a,p+=h,a/=256,s-=8);e[r+p-h]|=128*o}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(e,t,r){(function(e,r,n,i,o,a,l,s,c){var u,d,p;function h(){}(e=t.exports={}).nextTick=(d="u">typeof window&&window.setImmediate,p="u">typeof window&&window.postMessage&&window.addEventListener,d?function(e){return window.setImmediate(e)}:p?(u=[],window.addEventListener("message",function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<u.length&&u.shift()())},!0),function(e){u.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=h,e.addListener=h,e.once=h,e.off=h,e.removeListener=h,e.removeAllListeners=h,e.emit=h,e.binding=function(e){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)},42817,e=>{"use strict";var t=e.i(71645);let r=(0,t.createContext)(null),n=r.Provider;e.s(["HtmlAssistProvider",0,n,"useHtmlAssistant",0,function(){return(0,t.useContext)(r)}])},11870,51522,e=>{"use strict";var t=e.i(71645);let r=(0,t.createContext)(null),n=r.Provider;e.s(["ImageUploadProvider",0,n,"useImageUploader",0,function(){return(0,t.useContext)(r)}],11870);let i=(0,t.createContext)(null),o=i.Provider;e.s(["PageLinksProvider",0,o,"usePageLinks",0,function(){return(0,t.useContext)(i)}],51522)},98165,2068,31342,98556,55675,67942,60416,26247,e=>{"use strict";var t=e.i(18050),r=e.i(53070),n=e.i(45060),i=e.i(60408),o=e.i(10857),a=e.i(10341);e.i(29439);var l=e.i(72294),s=e.i(71645),c=e.i(37942),u=e.i(11870),d=e.i(51522),p=e.i(9165);async function h(e){if("u"<typeof document)return null;let t=URL.createObjectURL(e);try{let e=await new Promise((e,r)=>{let n=new Image;n.onload=()=>e(n),n.onerror=()=>r(Error("Image decode failed")),n.src=t});for(let[t,r]of[[1600,.85],[1600,.6],[800,.6],[400,.5]]){let n=function(e,t,r){let n=Math.min(1,t/Math.max(e.naturalWidth,e.naturalHeight)),i=Math.round(e.naturalWidth*n),o=Math.round(e.naturalHeight*n);if(!i||!o)return null;let a=document.createElement("canvas");a.width=i,a.height=o;let l=a.getContext("2d");return l?(l.drawImage(e,0,0,i,o),a.toDataURL("image/jpeg",r)):null}(e,t,r);if(n&&n.length<=358400)return n}return null}catch{return null}finally{URL.revokeObjectURL(t)}}var f=e.i(85046);let m="inline-flex items-center justify-center gap-1.5 rounded-xl border border-line bg-paper px-3 py-2 text-xs font-semibold text-ink-soft transition-colors hover:bg-mist disabled:opacity-50";function g({id:e,value:n,onChange:i,readOnly:a}){let l=(0,u.useImageUploader)(),c=(0,s.useRef)(null),[d,f]=(0,s.useState)(!1),[v,_]=(0,s.useState)(null),b=(0,o.safeImageSrc)(n);async function y(e){let t=e.target.files?.[0];if(e.target.value="",t&&l){if(!t.type.startsWith("image/"))return void _("Choose an image file.");f(!0),_(null);try{let e=await h(t);if(!e)return void _("That image couldn’t be prepared — try a smaller one.");i(await l(e))}catch(e){_(e instanceof p.ApiError?e.message:"That image couldn’t be uploaded. Try again.")}finally{f(!1)}}}return(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[b?(0,t.jsx)("img",{src:b,alt:"",className:"max-h-32 w-full rounded-xl border border-line object-cover"}):null,(0,t.jsxs)("div",{className:"flex gap-1.5",children:[(0,t.jsxs)("button",{type:"button",disabled:d||a||!l,onClick:()=>c.current?.click(),className:`${m} flex-1`,children:[d?(0,t.jsx)(r.LuLoaderCircle,{"aria-hidden":!0,className:"animate-spin"}):(0,t.jsx)(r.LuImagePlus,{"aria-hidden":!0}),d?"Uploading…":b?"Replace image":"Upload image"]}),b?(0,t.jsx)("button",{type:"button",disabled:d||a,onClick:()=>i(""),title:"Remove image","aria-label":"Remove image",className:`${m} px-2.5 hover:text-danger`,children:(0,t.jsx)(r.LuTrash2,{"aria-hidden":!0})}):null]}),(0,t.jsx)("input",{id:e,ref:c,type:"file",accept:"image/*",onChange:e=>void y(e),className:"sr-only",tabIndex:-1}),v?(0,t.jsx)("p",{role:"alert",className:"text-xs text-danger",children:v}):null]})}let v="__external__";function _({id:e,value:r,onChange:n,readOnly:i}){let a=(0,d.usePageLinks)(),l=r??(0,o.emptyLink)(),[u,p]=(0,s.useState)(()=>!!l.url&&!l.pageSlug),h=a?.some(e=>e.slug===l.pageSlug)??!1,f=l.pageSlug||(u?v:"");return(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsxs)("select",{id:e,value:f,disabled:i,onChange:e=>{var t;""===(t=e.target.value)?(p(!1),n((0,o.emptyLink)())):t===v?(p(!0),n({pageSlug:"",url:l.url})):(p(!1),n({pageSlug:t,url:""}))},className:c.inputClass,children:[(0,t.jsx)("option",{value:"",children:"No link"}),a?.map(e=>(0,t.jsxs)("option",{value:e.slug,children:["Page: ",e.title||e.slug]},e.slug)),l.pageSlug&&!h?(0,t.jsxs)("option",{value:l.pageSlug,children:["Missing page (",l.pageSlug,")"]}):null,(0,t.jsx)("option",{value:v,children:"Web address…"})]}),f===v?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:"text",inputMode:"url",value:l.url,disabled:i,onChange:e=>n({pageSlug:"",url:e.target.value}),placeholder:"example.com or https://…","aria-label":"Web address",maxLength:2e3,className:c.inputClass}),l.url&&!(0,o.safeExternalHref)(l.url)?(0,t.jsx)("p",{role:"alert",className:"text-xs text-danger",children:"Use a web, mailto: or tel: address."}):null]}):null,l.pageSlug&&!h&&a?(0,t.jsx)("p",{className:"text-xs text-danger",children:"That page was renamed or deleted — pick it again."}):null]})}function b({id:e,label:i,value:o,onChange:a,readOnly:c,swatches:u,unsetHint:d,pickerStart:p}){let h=(0,f.normalizeHex)(o),[m,g]=(0,s.useState)(null),v=null!==m&&""!==m.trim()&&null===(0,f.normalizeHex)(m);return(0,t.jsx)(l.FieldLabel,{label:i,icon:(0,t.jsx)(r.LuPalette,{"aria-hidden":!0}),el:"div",readOnly:c,children:(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("input",{type:"color",value:h??p,disabled:c,onChange:e=>{g(null),a(e.target.value)},"aria-label":`${i}: pick any colour`,className:"h-10 w-12 shrink-0 cursor-pointer rounded-xl border border-line bg-paper p-1 disabled:cursor-not-allowed disabled:opacity-50"}),(0,t.jsx)("input",{id:e,type:"text",value:m??h??"",disabled:c,onChange:e=>(function(e){if(g(e),""===e.trim())a("");else{let t=(0,f.normalizeHex)(e);t&&a(t)}})(e.target.value),onBlur:()=>g(null),placeholder:"#RRGGBB",maxLength:7,spellCheck:!1,autoComplete:"off","aria-label":`${i}: hex code`,"aria-invalid":v,className:"h-10 min-w-0 flex-1 rounded-xl border border-line bg-paper px-3.5 font-mono text-sm uppercase text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink aria-invalid:border-danger"}),h?(0,t.jsx)("button",{type:"button",disabled:c,onClick:()=>{g(null),a("")},title:`Clear ${i.toLowerCase()}`,"aria-label":`Clear ${i.toLowerCase()}`,className:"inline-flex h-10 shrink-0 items-center justify-center rounded-xl border border-line bg-paper px-2.5 text-ink-soft transition-colors hover:bg-mist disabled:opacity-50",children:(0,t.jsx)(r.LuRotateCcw,{"aria-hidden":!0})}):null]}),(0,t.jsx)("div",{role:"group","aria-label":`${i}: suggested colours`,className:"flex flex-wrap gap-1.5",children:u.map(e=>(0,t.jsx)("button",{type:"button",disabled:c,onClick:()=>{g(null),a(e.value)},title:e.name,"aria-label":e.name,"aria-pressed":h===e.value,style:{backgroundColor:e.value},className:(0,n.cn)("size-6 rounded-full border border-ink/20 transition-transform hover:scale-110 disabled:opacity-50",h===e.value&&"ring-2 ring-ink ring-offset-1")},e.value))}),v?(0,t.jsx)("p",{role:"alert",className:"text-xs text-danger",children:"Use a hex colour like #1e40af."}):h?null:(0,t.jsx)("p",{className:"text-xs text-muted",children:d})]})})}e.s(["ColorField",0,b,"ImageUploadField",0,g,"LinkField",0,_],2068);let y={left:"text-left",center:"text-center",right:"text-right"},k={left:"justify-start",center:"justify-center",right:"justify-end"},w={left:"items-start",center:"items-center",right:"items-end"},S={sm:"px-5 py-6",md:"px-8 py-12",lg:"px-10 py-20"},j={sm:"gap-3",md:"gap-6",lg:"gap-10"},I={sm:"p-4",md:"p-6",lg:"p-8"},z={1:"grid-cols-1",2:"grid-cols-1 md:grid-cols-2",3:"grid-cols-1 md:grid-cols-3",4:"grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"},C=e=>z[String(Math.min(4,Math.max(1,e)))],E={1:"One",2:"Two",3:"Three",4:"Four"},A=(e,t)=>({type:"radio",label:e,options:t.map(([e,t])=>({label:t,value:e}))}),P=(e="Alignment")=>A(e,[["left","Left"],["center","Center"],["right","Right"]]),L=e=>A(e,[["sm","Small"],["md","Medium"],["lg","Large"]]),M=(e="Columns",t=["2","3","4"])=>A(e,t.map(e=>[e,E[e]])),N=e=>A(e,[["yes","Yes"],["no","No"]]);function T(e="Picture"){return{type:"custom",label:e,render:({id:n,value:i,onChange:o,readOnly:a})=>(0,t.jsx)(l.FieldLabel,{label:e,icon:(0,t.jsx)(r.LuImage,{"aria-hidden":!0}),el:"div",readOnly:a,children:(0,t.jsx)(g,{id:n,value:i,onChange:o,readOnly:a})})}}function O(e="Link"){return{type:"custom",label:e,render:({id:n,value:i,onChange:o,readOnly:a})=>(0,t.jsx)(l.FieldLabel,{label:e,icon:(0,t.jsx)(r.LuLink,{"aria-hidden":!0}),el:"div",readOnly:a,children:(0,t.jsx)(_,{id:n,value:i,onChange:o,readOnly:a})})}}function D(e=3){return{type:"array",label:"Buttons",max:e,arrayFields:{label:{type:"text",label:"Label"},link:O(),variant:A("Style",[["solid","Filled"],["outline","Outline"]])},defaultItemProps:{label:"Learn more",link:(0,o.emptyLink)(),variant:"solid"},getItemSummary:e=>e.label||"Button"}}let B=(...e)=>e.map((e,t)=>({label:e,link:(0,o.emptyLink)(),variant:0===t?"solid":"outline"})),F={eyebrow:{type:"text",label:"Small heading above"},title:{type:"text",label:"Heading"},subtitle:{type:"textarea",label:"Introduction"},align:P()},R=(e,t="")=>({eyebrow:"",title:e,subtitle:t,align:"center"});function V({eyebrow:e,title:r,subtitle:i,align:o}){if(!e&&!r&&!i)return null;let a=o??"center";return(0,t.jsxs)("div",{className:(0,n.cn)("mb-10 flex max-w-2xl flex-col gap-3","center"===a?"mx-auto text-center":"right"===a?"ml-auto text-right":"text-left",w[a]),children:[e?(0,t.jsx)("p",{className:"text-xs font-bold uppercase tracking-widest text-fg-muted",children:e}):null,r?(0,t.jsx)("h2",{className:"text-3xl font-extrabold tracking-tight text-fg sm:text-4xl",children:r}):null,i?(0,t.jsx)("p",{className:"whitespace-pre-line text-base text-fg-muted sm:text-lg",children:i}):null]})}function H({src:e,alt:r,className:i,isEditing:a}){let l=(0,o.safeImageSrc)(e);return l?(0,t.jsx)("img",{src:l,alt:r??"",draggable:!1,loading:"lazy",className:i}):a?(0,t.jsx)("div",{className:(0,n.cn)("flex items-center justify-center border-2 border-dashed border-fg-line text-xs text-fg-muted",i),children:"Add a picture"}):null}function W(e,t){let r=(0,f.normalizeHex)(e),n=(0,f.normalizeHex)(t);return{className:r?(0,f.autoTone)(r):void 0,style:{...r?{backgroundColor:r}:null,...n?(0,f.textTokens)(n):null}}}function $(e,t){let r={...e};for(let e of t)delete r[e];return r}let q=e=>(e??"").split("\n").map(e=>e.trim()).filter(Boolean);e.s(["ALIGN",0,y,"BAND_PADDING",0,S,"CARD_PADDING",0,I,"FONT",0,{sans:"",serif:"font-display-serif",condensed:"font-display-condensed"},"GAP",0,j,"GRID",0,z,"ITEMS",0,w,"JUSTIFY",0,k,"Photo",0,H,"SectionIntro",0,V,"alignField",0,P,"autoColumns",0,C,"band",0,W,"buttonsField",0,D,"columnsField",0,M,"defaultButtons",0,B,"introDefaults",0,R,"introFields",0,F,"lines",0,q,"linkField",0,O,"pictureField",0,T,"radio",0,A,"sizeField",0,L,"without",0,$,"yesNoField",0,N],31342);let U={sm:"size-8 text-sm",md:"size-10 text-base",lg:"size-12 text-lg"},Z=()=>({type:"array",label:"Links",arrayFields:{network:{type:"select",label:"Network",options:i.SOCIAL_OPTIONS},url:{type:"text",label:"Web address"}},defaultItemProps:{network:"instagram",url:""},getItemSummary:e=>(0,i.socialLabel)(e.network)});function Y({items:e,size:r,justify:a,isEditing:l}){let s=(e??[]).flatMap(e=>{let t=(0,o.safeExternalHref)(e.url);return t||l?[{...e,href:t}]:[]});if(0===s.length)return null;let c=(0,n.cn)("inline-flex items-center justify-center rounded-full border border-fg-line text-fg-soft transition-colors hover:bg-fg/10",U[r]);return(0,t.jsx)("div",{className:(0,n.cn)("flex flex-wrap gap-2",a),children:s.map((e,r)=>e.href&&!l?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer noopener","aria-label":(0,i.socialLabel)(e.network),className:c,children:(0,t.jsx)(i.SocialIcon,{network:e.network})},r):(0,t.jsx)("span",{title:(0,i.socialLabel)(e.network),className:c,children:(0,t.jsx)(i.SocialIcon,{network:e.network})},r))})}let X=/^[\w-]{11}$/,G={video:"aspect-video",classic:"aspect-[4/3]",square:"aspect-square"},K={sm:"h-56",md:"h-80",lg:"h-[28rem]"},J=e=>encodeURIComponent(e.replace(/\s+/g," ").trim().slice(0,300)),Q=/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/;function ee({href:e,external:r,isEditing:i,children:o}){let a="whitespace-pre-line font-semibold text-fg";return!e||i?(0,t.jsx)("span",{className:a,children:o}):(0,t.jsx)("a",{href:e,...r?{target:"_blank",rel:"noreferrer noopener"}:{},className:(0,n.cn)(a,"underline-offset-4 hover:underline"),children:o})}let et={info:{box:"border-sky-200 bg-sky-50 text-sky-950",icon:r.LuInfo,mark:"text-sky-600"},success:{box:"border-emerald-200 bg-emerald-50 text-emerald-950",icon:r.LuCircleCheck,mark:"text-emerald-600"},warning:{box:"border-amber-200 bg-amber-50 text-amber-950",icon:r.LuTriangleAlert,mark:"text-amber-600"},danger:{box:"border-red-200 bg-red-50 text-red-950",icon:r.LuCircleAlert,mark:"text-red-600"}},er={square:"aspect-square object-cover",landscape:"aspect-[4/3] object-cover",natural:"h-auto"},en={ButtonGroup:{label:"Buttons",defaultProps:{buttons:B("Primary action","Secondary action"),align:"left"},fields:{buttons:D(6),align:P()},render:({buttons:e,align:r,puck:n})=>(0,t.jsx)("div",{className:"py-2",children:(0,t.jsx)(a.ButtonRow,{buttons:e,justify:k[r],isEditing:n.isEditing})})},List:{label:"List",defaultProps:{style:"check",columns:"1",items:[{text:"First point"},{text:"Second point"},{text:"Third point"}]},fields:{style:A("Marker",[["check","Tick"],["bullet","Dot"],["number","Number"]]),columns:M("Columns",["1","2"]),items:{type:"array",label:"Items",arrayFields:{text:{type:"text",label:"Text"}},defaultItemProps:{text:"New item"},getItemSummary:e=>e.text||"Item"}},render:({style:e,columns:i,items:o})=>(0,t.jsx)("number"===e?"ol":"ul",{className:(0,n.cn)("my-2 grid gap-x-8 gap-y-3","2"===i?"grid-cols-1 md:grid-cols-2":"grid-cols-1"),children:(o??[]).map((n,i)=>(0,t.jsxs)("li",{className:"flex items-start gap-3 text-fg-soft",children:["check"===e?(0,t.jsx)(r.LuCheck,{"aria-hidden":!0,className:"mt-1 size-4 shrink-0 text-accent"}):"bullet"===e?(0,t.jsx)("span",{"aria-hidden":!0,className:"mt-2.5 size-1.5 shrink-0 rounded-full bg-fg"}):(0,t.jsx)("span",{"aria-hidden":!0,className:"mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent",children:i+1}),(0,t.jsx)("span",{children:n.text})]},i))})},Quote:{label:"Quote",defaultProps:{quote:"A line worth pulling out of the page, big enough to stop a reader.",author:"Someone worth quoting",role:"",align:"left"},fields:{quote:{type:"textarea",label:"Quote"},author:{type:"text",label:"Who said it"},role:{type:"text",label:"Role or place"},align:A("Alignment",[["left","Left"],["center","Center"]])},render:({quote:e,author:i,role:o,align:a})=>(0,t.jsxs)("figure",{className:(0,n.cn)("my-4 flex flex-col gap-4","center"===a?"mx-auto max-w-3xl items-center text-center":"items-start text-left"),children:[(0,t.jsx)(r.LuQuote,{"aria-hidden":!0,className:"size-8 text-accent"}),(0,t.jsx)("blockquote",{className:"whitespace-pre-line text-2xl font-semibold leading-snug tracking-tight text-fg sm:text-3xl",children:e}),i||o?(0,t.jsxs)("figcaption",{className:"text-sm text-fg-muted",children:[(0,t.jsx)("span",{className:"font-bold text-fg",children:i}),i&&o?" · ":null,o]}):null]})},Callout:{label:"Notice",defaultProps:{tone:"info",title:"Good to know",text:"A short note that should not be missed."},fields:{tone:A("Kind",[["info","Info"],["success","Success"],["warning","Warning"],["danger","Important"]]),title:{type:"text",label:"Title"},text:{type:"textarea",label:"Text"}},render:({tone:e,title:r,text:i})=>{let{box:o,icon:a,mark:l}=et[e]??et.info;return(0,t.jsxs)("div",{role:"note",className:(0,n.cn)("my-3 flex gap-3 rounded-2xl border p-4",o),children:[(0,t.jsx)(a,{"aria-hidden":!0,className:(0,n.cn)("mt-0.5 size-5 shrink-0",l)}),(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[r?(0,t.jsx)("p",{className:"font-bold",children:r}):null,i?(0,t.jsx)("p",{className:"whitespace-pre-line text-sm",children:i}):null]})]})}},Accordion:{label:"FAQ",defaultProps:{...R("Questions, answered"),openFirst:"no",items:[{question:"A question people often ask?",answer:"A clear, short answer."},{question:"Another one?",answer:"Another answer."},{question:"And a third?",answer:"The answer to that."}]},fields:{...F,openFirst:N("Open the first answer"),items:{type:"array",label:"Questions",arrayFields:{question:{type:"text",label:"Question"},answer:{type:"textarea",label:"Answer"}},defaultItemProps:{question:"New question?",answer:""},getItemSummary:e=>e.question||"Question"}},render:({eyebrow:e,title:n,subtitle:i,align:o,openFirst:a,items:l,puck:s})=>(0,t.jsxs)("section",{className:"my-8",children:[(0,t.jsx)(V,{eyebrow:e,title:n,subtitle:i,align:o}),(0,t.jsx)("div",{className:"mx-auto flex max-w-3xl flex-col divide-y divide-fg-line rounded-2xl border border-fg-line",children:(l??[]).map((e,n)=>(0,t.jsxs)("details",{open:s.isEditing||"yes"===a&&0===n,className:"group",children:[(0,t.jsxs)("summary",{className:"flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-fg [&::-webkit-details-marker]:hidden",children:[e.question,(0,t.jsx)(r.LuChevronDown,{"aria-hidden":!0,className:"size-5 shrink-0 text-fg-muted transition-transform group-open:rotate-180"})]}),e.answer?(0,t.jsx)("div",{className:"whitespace-pre-line px-5 pb-5 text-sm text-fg-muted",children:e.answer}):null]},n))})]})},Table:{label:"Table",defaultProps:{data:"Plan | Storage | Support\nStarter | 10 GB | Email\nStandard | 100 GB | Email and chat\nPro | 1 TB | Phone",header:"yes",striped:"no"},fields:{data:{type:"textarea",label:"Rows — one per line, cells split with |"},header:N("First row is a heading"),striped:N("Shade every other row")},render:({data:e,header:r,striped:n})=>{let i,o,a=(o=Math.max(0,...(i=q(e).map(e=>e.split("|").map(e=>e.trim()))).map(e=>e.length)),i.map(e=>[...e,...Array(o-e.length).fill("")])),l="yes"===r?a[0]:void 0,s=l?a.slice(1):a;return 0===a.length?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)("div",{className:"my-4 overflow-x-auto rounded-2xl border border-fg-line",children:(0,t.jsxs)("table",{className:"w-full min-w-96 text-left text-sm",children:[l?(0,t.jsx)("thead",{className:"bg-fg/5",children:(0,t.jsx)("tr",{children:l.map((e,r)=>(0,t.jsx)("th",{scope:"col",className:"px-4 py-3 font-bold text-fg",children:e},r))})}):null,(0,t.jsx)("tbody",{className:"divide-y divide-fg-line",children:s.map((e,r)=>(0,t.jsx)("tr",{className:"yes"===n&&r%2==1?"bg-fg/5":void 0,children:e.map((e,r)=>(0,t.jsx)("td",{className:"px-4 py-3 text-fg-soft",children:e},r))},r))})]})})}},Video:{label:"Video",defaultProps:{url:"",title:"",ratio:"video",caption:""},fields:{url:{type:"text",label:"YouTube or Vimeo link",placeholder:"https://www.youtube.com/watch?v=…"},title:{type:"text",label:"Description (for screen readers)"},ratio:A("Shape",[["video","Widescreen"],["classic","Classic"],["square","Square"]]),caption:{type:"text",label:"Caption"}},render:({url:e,title:r,ratio:i,caption:o,puck:a})=>{let l=function(e){let t,r=(e??"").trim();if(!r)return null;try{t=new URL(/^https?:\/\//i.test(r)?r:`https://${r}`)}catch{return null}let n=t.hostname.toLowerCase().replace(/^(?:www|m)\./,"");if("youtu.be"===n||"youtube.com"===n||"youtube-nocookie.com"===n){let e="youtu.be"===n?t.pathname.split("/")[1]:"/watch"===t.pathname?t.searchParams.get("v"):/^\/(?:embed|shorts|live)\/([^/]+)/.exec(t.pathname)?.[1];return e&&X.test(e)?`https://www.youtube-nocookie.com/embed/${e}`:null}if("vimeo.com"===n||"player.vimeo.com"===n){let e=/(?:^|\/)(\d{6,12})(?:\/|$)/.exec(t.pathname)?.[1];return e?`https://player.vimeo.com/video/${e}`:null}return null}(e);return l||a.isEditing?(0,t.jsxs)("figure",{className:"my-3 flex flex-col gap-2",children:[(0,t.jsx)("div",{className:(0,n.cn)("relative w-full overflow-hidden rounded-2xl bg-fg/10",G[i]??G.video),children:l?(0,t.jsx)("iframe",{src:l,title:r||"Video",loading:"lazy",allow:"encrypted-media; picture-in-picture; fullscreen",referrerPolicy:"strict-origin-when-cross-origin",sandbox:"allow-scripts allow-same-origin allow-presentation allow-popups allow-popups-to-escape-sandbox",className:(0,n.cn)("absolute inset-0 size-full border-0",a.isEditing&&"pointer-events-none")}):(0,t.jsx)("p",{className:"absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-fg-muted",children:e?.trim()?"That isn’t a YouTube or Vimeo link.":"Select this block, then paste a YouTube or Vimeo link"})}),o?(0,t.jsx)("figcaption",{className:"text-center text-sm text-fg-muted",children:o}):null]}):(0,t.jsx)(t.Fragment,{})}},Map:{label:"Map",defaultProps:{address:"",height:"md",caption:""},fields:{address:{type:"text",label:"Address or place",placeholder:"10 Main Street, Springfield"},height:A("Height",[["sm","Short"],["md","Medium"],["lg","Tall"]]),caption:{type:"text",label:"Caption"}},render:({address:e,height:r,caption:i,puck:o})=>{let a=J(e??"");return a||o.isEditing?(0,t.jsxs)("figure",{className:"my-3 flex flex-col gap-2",children:[(0,t.jsx)("div",{className:(0,n.cn)("relative w-full overflow-hidden rounded-2xl bg-fg/10",K[r]??K.md),children:a?(0,t.jsx)("iframe",{src:`https://maps.google.com/maps?q=${a}&z=15&output=embed`,title:`Map of ${e}`,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",className:(0,n.cn)("absolute inset-0 size-full border-0",o.isEditing&&"pointer-events-none")}):(0,t.jsx)("p",{className:"absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-fg-muted",children:"Select this block, then type an address"})}),i||a&&!o.isEditing?(0,t.jsxs)("figcaption",{className:"flex flex-wrap justify-center gap-x-3 text-center text-sm text-fg-muted",children:[i?(0,t.jsx)("span",{children:i}):null,a&&!o.isEditing?(0,t.jsx)("a",{href:`https://www.google.com/maps/search/?api=1&query=${a}`,target:"_blank",rel:"noreferrer noopener",className:"font-semibold text-fg underline-offset-4 hover:underline",children:"Open in Google Maps"}):null]}):null]}):(0,t.jsx)(t.Fragment,{})}},Gallery:{label:"Photo gallery",defaultProps:{columns:"3",ratio:"square",corners:"rounded",images:[{src:"",alt:""},{src:"",alt:""},{src:"",alt:""}]},fields:{columns:M(),ratio:A("Shape",[["square","Square"],["landscape","Landscape"],["natural","As uploaded"]]),corners:A("Corners",[["rounded","Rounded"],["square","Square"]]),images:{type:"array",label:"Pictures",arrayFields:{src:T(),alt:{type:"text",label:"Description (for screen readers)"}},defaultItemProps:{src:"",alt:""},getItemSummary:(e,t)=>e.alt||`Picture ${(t??0)+1}`}},render:({columns:e,ratio:r,corners:i,images:o,puck:a})=>(0,t.jsx)("div",{className:(0,n.cn)("my-3 grid items-start gap-3",z[e]),children:(o??[]).map((e,o)=>(0,t.jsx)(H,{src:e.src,alt:e.alt,isEditing:a.isEditing,className:(0,n.cn)("w-full",er[r]??er.square,"rounded"===i&&"rounded-2xl")},o))})},ContactInfo:{label:"Contact details",defaultProps:{...R("Get in touch"),email:"hello@example.com",phone:"+1 555 010 0100",address:"10 Main Street\nSpringfield",hours:"Mon–Fri, 9am–5pm"},fields:{...F,email:{type:"text",label:"Email"},phone:{type:"text",label:"Phone"},address:{type:"textarea",label:"Address"},hours:{type:"textarea",label:"Opening hours"}},render:({eyebrow:e,title:i,subtitle:o,align:a,email:l,phone:s,address:c,hours:u,puck:d})=>{let p=l?.trim()??"",h=s?.trim()??"",f=c?.trim()??"",m=u?.trim()??"",g=h.replace(/[^\d+]/g,""),v=[];return p&&v.push({icon:r.LuMail,label:"Email",href:Q.test(p)?`mailto:${p}`:null,external:!1,text:p}),h&&v.push({icon:r.LuPhone,label:"Phone",href:g.replace(/\D/g,"").length>=5?`tel:${g}`:null,external:!1,text:h}),f&&v.push({icon:r.LuMapPin,label:"Address",href:`https://www.google.com/maps/search/?api=1&query=${J(f)}`,external:!0,text:f}),m&&v.push({icon:r.LuClock,label:"Hours",href:null,external:!1,text:m}),(0,t.jsxs)("section",{className:"my-8",children:[(0,t.jsx)(V,{eyebrow:e,title:i,subtitle:o,align:a}),(0,t.jsx)("div",{className:(0,n.cn)("grid gap-6",C(v.length)),children:v.map((e,r)=>(0,t.jsxs)("div",{className:(0,n.cn)("flex flex-col gap-2",w[a],y[a]),children:[(0,t.jsx)("span",{className:"inline-flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent",children:(0,t.jsx)(e.icon,{"aria-hidden":!0,className:"size-5"})}),(0,t.jsx)("p",{className:"text-xs font-bold uppercase tracking-widest text-fg-muted",children:e.label}),(0,t.jsx)(ee,{href:e.href,external:e.external,isEditing:d.isEditing,children:e.text})]},r))})]})}},SocialLinks:{label:"Social links",defaultProps:{align:"left",size:"md",items:[{network:"instagram",url:""},{network:"facebook",url:""},{network:"linkedin",url:""}]},fields:{align:P(),size:A("Size",[["sm","Small"],["md","Medium"],["lg","Large"]]),items:Z()},render:({align:e,size:r,items:n,puck:i})=>(0,t.jsx)("div",{className:"py-2",children:(0,t.jsx)(Y,{items:n,size:r,justify:k[e],isEditing:i.isEditing})})}};e.s(["SocialRow",0,Y,"contentBlocks",0,en,"socialItemsField",0,Z],98165);let ei={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between"},eo={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},ea={outline:"border border-fg-line",soft:"bg-fg/5",raised:"border border-fg-line shadow-lift"},el={Grid:{label:"Grid",defaultProps:{columns:"3",gap:"md",items:[]},fields:{columns:M("Columns",["1","2","3","4"]),gap:L("Space between"),items:{type:"slot"}},render:({columns:e,gap:r,items:i})=>(0,t.jsx)(i,{collisionAxis:"dynamic",className:(0,n.cn)("my-2 grid",z[e],j[r])})},Flex:{label:"Row / Stack",defaultProps:{direction:"row",justify:"start",align:"center",gap:"md",items:[]},fields:{direction:A("Direction",[["row","Side by side"],["column","Stacked"]]),justify:A("Spread along",[["start","Start"],["center","Middle"],["end","End"],["between","Apart"]]),align:A("Line up across",[["start","Start"],["center","Middle"],["end","End"],["stretch","Stretch"]]),gap:L("Space between"),items:{type:"slot"}},render:({direction:e,justify:r,align:i,gap:o,items:a})=>(0,t.jsx)(a,{collisionAxis:"row"===e?"x":"y",className:(0,n.cn)("my-2 flex","row"===e?"flex-col md:flex-row md:flex-wrap":"flex-col",ei[r],eo[i],j[o])})},Card:{label:"Card",defaultProps:{look:"outline",padding:"md",content:[]},fields:{look:A("Look",[["outline","Outlined"],["soft","Tinted"],["raised","Raised"]]),padding:L("Padding"),content:{type:"slot"}},render:({look:e,padding:r,content:i})=>(0,t.jsx)("div",{className:(0,n.cn)("my-2 rounded-2xl",ea[e],I[r]),children:(0,t.jsx)(i,{})})}};e.s(["layoutBlocks",0,el],98556);let es=[{name:"White",value:"#ffffff"},{name:"Light grey",value:"#f1f5f9"},{name:"Mint",value:"#dcfce7"},{name:"Soft teal",value:"#ccfbf1"},{name:"Sky",value:"#dbeafe"},{name:"Lavender",value:"#ede9fe"},{name:"Blush",value:"#fce7f3"},{name:"Sand",value:"#fef3c7"},{name:"Teal",value:"#0f766e"},{name:"Blue",value:"#1d4ed8"},{name:"Indigo",value:"#4338ca"},{name:"Rose",value:"#be123c"},{name:"Amber",value:"#b45309"},{name:"Slate",value:"#334155"},{name:"Ink",value:"#0f172a"}],ec=[{name:"Ink",value:"#0f172a"},{name:"Slate",value:"#475569"},{name:"White",value:"#ffffff"},{name:"Teal",value:"#0f766e"},{name:"Blue",value:"#1d4ed8"},{name:"Indigo",value:"#4338ca"},{name:"Purple",value:"#7e22ce"},{name:"Rose",value:"#be123c"},{name:"Amber",value:"#b45309"},{name:"Green",value:"#15803d"}],eu="Background colour";function ed(e="No background colour."){return{type:"custom",label:eu,render:({id:r,value:n,onChange:i,readOnly:o})=>(0,t.jsx)(b,{id:r,label:eu,value:n,onChange:i,readOnly:o,swatches:es,unsetHint:e,pickerStart:"#ffffff"})}}function ep(e="Text colour",r="Automatic: dark, or light on a dark background colour."){return{type:"custom",label:e,render:({id:n,value:i,onChange:o,readOnly:a})=>(0,t.jsx)(b,{id:n,label:e,value:i,onChange:o,readOnly:a,swatches:ec,unsetHint:r,pickerStart:"#0f172a"})}}function eh({background:e,text:r,flush:i,children:o}){let a=(0,f.normalizeHex)(e),l=(0,f.normalizeHex)(r);return a||l?(0,t.jsx)("div",{className:(0,n.cn)(a&&"rounded-xl",a&&!i&&"px-4 py-2",a&&(0,f.autoTone)(a)),style:{...a?{backgroundColor:a}:null,...l?(0,f.textTokens)(l):null},children:o}):(0,t.jsx)(t.Fragment,{children:o})}let ef=new Set(["Image","Spacer","Gallery","Video","Map"]),em=new Set(["Spacer"]);function eg({src:e,name:r,className:i}){let a=(0,o.safeImageSrc)(e);return a?(0,t.jsx)("img",{src:a,alt:"",draggable:!1,loading:"lazy",className:(0,n.cn)("shrink-0 rounded-full object-cover",i)}):(0,t.jsx)("span",{"aria-hidden":!0,className:(0,n.cn)("inline-flex shrink-0 items-center justify-center rounded-full bg-accent-soft font-bold text-accent",i),children:(r??"").trim().charAt(0).toUpperCase()||"?"})}e.s(["backgroundColorField",0,ed,"textColorField",0,ep,"withBlockColors",0,function(e){let r={};for(let[n,i]of Object.entries(e.components)){let e=i.fields??{};if("backgroundColor"in e||"textColor"in e){r[n]=i;continue}let o=i.render;r[n]={...i,fields:{...e,backgroundColor:ed(),...ef.has(n)?null:{textColor:ep()}},render:e=>(0,t.jsx)(eh,{background:e.backgroundColor,text:e.textColor,flush:em.has(n),children:(0,t.jsx)(o,{...e})})}}return{...e,components:r}}],55675);let ev=["zap","shield","heart","rocket"],e_={Hero:{label:"Hero banner",defaultProps:{eyebrow:"",heading:"A headline that says what you do",level:"h1",text:"One or two sentences that tell a visitor why they should stay, and what to do next.",buttons:B("Get started","Learn more"),layout:"center",image:"",imageAlt:"",spacing:"lg",backgroundColor:"#f4f6f8",textColor:""},fields:{eyebrow:{type:"text",label:"Small heading above"},heading:{type:"text",label:"Headline"},level:A("Heading is",[["h1","The page title"],["h2","A section title"]]),text:{type:"textarea",label:"Text"},buttons:D(2),layout:A("Layout",[["center","Centered"],["image-right","Picture on the right"],["image-left","Picture on the left"]]),image:T(),imageAlt:{type:"text",label:"Description of the picture (for screen readers)"},spacing:L("Padding"),backgroundColor:ed(),textColor:ep()},resolveFields:(e,{fields:t})=>"center"===e.props.layout?$(t,["image","imageAlt"]):t,render:({eyebrow:e,heading:r,level:i,text:l,buttons:s,layout:c,image:u,imageAlt:d,spacing:p,backgroundColor:h,textColor:f,puck:m})=>{let g="center"===c,v=!g&&(m.isEditing||null!==(0,o.safeImageSrc)(u)),_=W(h,f);return(0,t.jsx)("section",{className:(0,n.cn)("my-4 rounded-2xl",_.className,S[p]),style:_.style,children:(0,t.jsxs)("div",{className:(0,n.cn)("grid items-center gap-10",v&&"md:grid-cols-2"),children:[(0,t.jsxs)("div",{className:(0,n.cn)("flex flex-col gap-4",g?"mx-auto max-w-3xl items-center text-center":"items-start text-left",v&&"image-left"===c&&"md:order-2"),children:[e?(0,t.jsx)("p",{className:"text-xs font-bold uppercase tracking-widest text-fg-muted",children:e}):null,(0,t.jsx)(i,{className:"text-4xl font-extrabold tracking-tight text-fg sm:text-5xl",children:r}),l?(0,t.jsx)("p",{className:"whitespace-pre-line text-lg text-fg-muted",children:l}):null,(0,t.jsx)(a.ButtonRow,{buttons:s,justify:g?"justify-center":"justify-start",isEditing:m.isEditing})]}),v?(0,t.jsx)(H,{src:u,alt:d,isEditing:m.isEditing,className:"aspect-[4/3] w-full rounded-2xl object-cover"}):null]})})}},Features:{label:"Features",defaultProps:{...R("Everything you need","The three or four things that set you apart."),columns:"3",look:"plain",items:[{icon:"zap",title:"Fast",text:"Say what makes this quick, simple or effortless."},{icon:"shield",title:"Reliable",text:"Say why a visitor can count on it."},{icon:"heart",title:"Friendly",text:"Say what it feels like to work with you."}]},fields:{...F,columns:M(),look:A("Look",[["plain","Plain"],["cards","Cards"]]),items:{type:"array",label:"Features",arrayFields:{icon:{type:"select",label:"Icon",options:i.ICON_OPTIONS},title:{type:"text",label:"Title"},text:{type:"textarea",label:"Text"}},defaultItemProps:e=>({icon:ev[e%ev.length],title:"New feature",text:"Describe it in a sentence or two."}),getItemSummary:e=>e.title||"Feature"}},render:({eyebrow:e,title:r,subtitle:o,align:a,columns:l,look:s,items:c})=>(0,t.jsxs)("section",{className:"my-8",children:[(0,t.jsx)(V,{eyebrow:e,title:r,subtitle:o,align:a}),(0,t.jsx)("ul",{className:(0,n.cn)("grid gap-6",z[l]),children:(c??[]).map((e,r)=>(0,t.jsxs)("li",{className:(0,n.cn)("flex flex-col gap-3",w[a],y[a],"cards"===s&&"rounded-2xl border border-fg-line p-6"),children:[e.icon?(0,t.jsx)("span",{className:"inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent",children:(0,t.jsx)(i.BlockIcon,{name:e.icon,className:"size-5"})}):null,(0,t.jsx)("h3",{className:"text-lg font-bold text-fg",children:e.title}),e.text?(0,t.jsx)("p",{className:"whitespace-pre-line text-sm text-fg-muted",children:e.text}):null]},r))})]})},Steps:{label:"Steps",defaultProps:{...R("How it works"),layout:"row",items:[{title:"Get in touch",text:"Tell us what you need."},{title:"We plan it",text:"You get a clear proposal and a fair price."},{title:"We deliver",text:"Done on time, and we stay in touch."}]},fields:{...F,layout:A("Layout",[["row","Side by side"],["column","One under another"]]),items:{type:"array",label:"Steps",arrayFields:{title:{type:"text",label:"Title"},text:{type:"textarea",label:"Text"}},defaultItemProps:{title:"New step",text:""},getItemSummary:e=>e.title||"Step"}},render:({eyebrow:e,title:r,subtitle:i,align:o,layout:a,items:l})=>{let s=l??[],c="column"===a;return(0,t.jsxs)("section",{className:"my-8",children:[(0,t.jsx)(V,{eyebrow:e,title:r,subtitle:i,align:o}),(0,t.jsx)("ol",{className:c?"mx-auto flex max-w-2xl flex-col gap-8":(0,n.cn)("grid gap-8",C(s.length)),children:s.map((e,r)=>(0,t.jsxs)("li",{className:(0,n.cn)("flex gap-4",c?"flex-row":(0,n.cn)("flex-col",w[o],y[o])),children:[(0,t.jsx)("span",{className:"inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white",children:r+1}),(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)("h3",{className:"text-lg font-bold text-fg",children:e.title}),e.text?(0,t.jsx)("p",{className:"whitespace-pre-line text-sm text-fg-muted",children:e.text}):null]})]},r))})]})}},Stats:{label:"Numbers",defaultProps:{...R(""),items:[{value:"10k+",label:"Happy customers"},{value:"99%",label:"Would recommend us"},{value:"24/7",label:"Support"},{value:"12",label:"Years in business"}]},fields:{...F,items:{type:"array",label:"Numbers",arrayFields:{value:{type:"text",label:"Number"},label:{type:"text",label:"What it counts"}},defaultItemProps:{value:"100",label:"Something worth counting"},getItemSummary:e=>[e.value,e.label].filter(Boolean).join(" — ")||"Number"}},render:({eyebrow:e,title:r,subtitle:i,align:o,items:a})=>{let l=a??[];return(0,t.jsxs)("section",{className:"my-8",children:[(0,t.jsx)(V,{eyebrow:e,title:r,subtitle:i,align:o}),(0,t.jsx)("div",{className:(0,n.cn)("grid gap-8",C(l.length)),children:l.map((e,r)=>(0,t.jsxs)("div",{className:(0,n.cn)("flex flex-col gap-1",w[o],y[o]),children:[(0,t.jsx)("p",{className:"text-4xl font-extrabold tracking-tight text-fg sm:text-5xl",children:e.value}),(0,t.jsx)("p",{className:"text-sm text-fg-muted",children:e.label})]},r))})]})}},Testimonials:{label:"Testimonials",defaultProps:{...R("What people say"),columns:"3",items:[{quote:"A sentence or two from a real customer, in their own words.",name:"Customer name",role:"Their role or town",photo:"",rating:"5"},{quote:"Another short quote about what it was like to work with you.",name:"Customer name",role:"Their role or town",photo:"",rating:"5"},{quote:"A third, about the result they got.",name:"Customer name",role:"Their role or town",photo:"",rating:"5"}]},fields:{...F,columns:M("Columns",["1","2","3"]),items:{type:"array",label:"Testimonials",arrayFields:{quote:{type:"textarea",label:"Quote"},name:{type:"text",label:"Name"},role:{type:"text",label:"Role or place"},photo:T("Photo (optional)"),rating:{type:"select",label:"Stars",options:[{label:"No stars",value:"0"},{label:"5 stars",value:"5"},{label:"4 stars",value:"4"},{label:"3 stars",value:"3"}]}},defaultItemProps:{quote:"",name:"Customer name",role:"",photo:"",rating:"5"},getItemSummary:e=>e.name||"Testimonial"}},render:({eyebrow:e,title:i,subtitle:o,align:a,columns:l,items:s})=>(0,t.jsxs)("section",{className:"my-8",children:[(0,t.jsx)(V,{eyebrow:e,title:i,subtitle:o,align:a}),(0,t.jsx)("ul",{className:(0,n.cn)("grid gap-6",z[l]),children:(s??[]).map((e,n)=>{let i=Math.min(5,Math.max(0,Number.parseInt(e.rating,10)||0));return(0,t.jsx)("li",{children:(0,t.jsxs)("figure",{className:"flex h-full flex-col gap-4 rounded-2xl border border-fg-line p-6",children:[i>0?(0,t.jsx)("div",{role:"img","aria-label":`${i} out of 5 stars`,className:"flex gap-0.5",children:Array.from({length:i},(e,n)=>(0,t.jsx)(r.LuStar,{"aria-hidden":!0,className:"size-4 fill-current text-star"},n))}):null,(0,t.jsx)("blockquote",{className:"whitespace-pre-line text-fg-soft",children:e.quote?`“${e.quote}”`:null}),(0,t.jsxs)("figcaption",{className:"mt-auto flex items-center gap-3",children:[(0,t.jsx)(eg,{src:e.photo,name:e.name,className:"size-11 text-base"}),(0,t.jsxs)("span",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-sm font-bold text-fg",children:e.name}),e.role?(0,t.jsx)("span",{className:"text-xs text-fg-muted",children:e.role}):null]})]})]})},n)})})]})},Pricing:{label:"Pricing",defaultProps:{...R("Simple pricing","Pick the plan that fits."),plans:[{name:"Starter",price:"$9",period:"per month",description:"For trying it out.",features:"One thing\nAnother thing\nA third thing",buttonLabel:"Choose Starter",link:(0,o.emptyLink)(),badge:"",highlight:"no"},{name:"Standard",price:"$29",period:"per month",description:"For most people.",features:"Everything in Starter\nA bigger thing\nPriority replies",buttonLabel:"Choose Standard",link:(0,o.emptyLink)(),badge:"Most popular",highlight:"yes"},{name:"Pro",price:"$79",period:"per month",description:"For teams.",features:"Everything in Standard\nSomething just for teams",buttonLabel:"Choose Pro",link:(0,o.emptyLink)(),badge:"",highlight:"no"}]},fields:{...F,plans:{type:"array",label:"Plans",max:4,arrayFields:{name:{type:"text",label:"Name"},price:{type:"text",label:"Price"},period:{type:"text",label:"Per (e.g. per month)"},description:{type:"text",label:"One line about it"},features:{type:"textarea",label:"What's included (one per line)"},buttonLabel:{type:"text",label:"Button label"},link:O("Button link"),badge:{type:"text",label:"Badge (e.g. Most popular)"},highlight:N("Stand out from the others")},defaultItemProps:{name:"New plan",price:"$0",period:"",description:"",features:"",buttonLabel:"Choose plan",link:(0,o.emptyLink)(),badge:"",highlight:"no"},getItemSummary:e=>e.name||"Plan"}},render:({eyebrow:e,title:i,subtitle:o,align:l,plans:s,puck:c})=>{let u=s??[];return(0,t.jsxs)("section",{className:"my-8",children:[(0,t.jsx)(V,{eyebrow:e,title:i,subtitle:o,align:l}),(0,t.jsx)("ul",{className:(0,n.cn)("grid items-stretch gap-6",C(u.length)),children:u.map((e,i)=>{let o="yes"===e.highlight;return(0,t.jsxs)("li",{className:(0,n.cn)("relative flex flex-col gap-5 rounded-2xl border p-6",o?"border-2 border-accent shadow-lift":"border-fg-line"),children:[e.badge?(0,t.jsx)("span",{className:"absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white",children:e.badge}):null,(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)("h3",{className:"text-lg font-bold text-fg",children:e.name}),e.description?(0,t.jsx)("p",{className:"text-sm text-fg-muted",children:e.description}):null]}),(0,t.jsxs)("p",{className:"flex items-baseline gap-1.5",children:[(0,t.jsx)("span",{className:"text-4xl font-extrabold tracking-tight text-fg",children:e.price}),e.period?(0,t.jsx)("span",{className:"text-sm text-fg-muted",children:e.period}):null]}),(0,t.jsx)("ul",{className:"flex flex-1 flex-col gap-2.5 text-sm text-fg-soft",children:q(e.features).map((e,n)=>(0,t.jsxs)("li",{className:"flex gap-2",children:[(0,t.jsx)(r.LuCheck,{"aria-hidden":!0,className:"mt-0.5 size-4 shrink-0 text-accent"}),e]},n))}),e.buttonLabel?(0,t.jsx)(a.ButtonLink,{label:e.buttonLabel,link:e.link,variant:o?"solid":"outline",isEditing:c.isEditing,className:"w-full justify-center"}):null]},i)})})]})}},Logos:{label:"Logo strip",defaultProps:{title:"Trusted by",grayscale:"yes",logos:[{image:"",name:"Company"},{image:"",name:"Company"},{image:"",name:"Company"}]},fields:{title:{type:"text",label:"Heading (optional)"},grayscale:N("Draw them in grey"),logos:{type:"array",label:"Logos",arrayFields:{image:T("Logo"),name:{type:"text",label:"Name (for screen readers)"}},defaultItemProps:{image:"",name:"Company"},getItemSummary:e=>e.name||"Logo"}},render:({title:e,grayscale:r,logos:i,puck:o})=>(0,t.jsxs)("section",{className:"my-8 flex flex-col items-center gap-6",children:[e?(0,t.jsx)("p",{className:"text-center text-xs font-bold uppercase tracking-widest text-fg-muted",children:e}):null,(0,t.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-x-10 gap-y-6",children:(i??[]).map((e,i)=>(0,t.jsx)(H,{src:e.image,alt:e.name,isEditing:o.isEditing,className:(0,n.cn)("h-10 w-auto max-w-40 object-contain","yes"===r&&"opacity-70 grayscale")},i))})]})},Team:{label:"Team",defaultProps:{...R("Meet the team"),columns:"3",members:[{photo:"",name:"Name",role:"Role",bio:"A line or two about them."},{photo:"",name:"Name",role:"Role",bio:"A line or two about them."},{photo:"",name:"Name",role:"Role",bio:"A line or two about them."}]},fields:{...F,columns:M(),members:{type:"array",label:"People",arrayFields:{photo:T("Photo"),name:{type:"text",label:"Name"},role:{type:"text",label:"Role"},bio:{type:"textarea",label:"About them"}},defaultItemProps:{photo:"",name:"Name",role:"",bio:""},getItemSummary:e=>e.name||"Person"}},render:({eyebrow:e,title:r,subtitle:i,align:o,columns:a,members:l})=>(0,t.jsxs)("section",{className:"my-8",children:[(0,t.jsx)(V,{eyebrow:e,title:r,subtitle:i,align:o}),(0,t.jsx)("ul",{className:(0,n.cn)("grid gap-8",z[a]),children:(l??[]).map((e,r)=>(0,t.jsxs)("li",{className:(0,n.cn)("flex flex-col gap-1",w[o],y[o]),children:[(0,t.jsx)(eg,{src:e.photo,name:e.name,className:"mb-2 size-24 text-3xl"}),(0,t.jsx)("h3",{className:"text-lg font-bold text-fg",children:e.name}),e.role?(0,t.jsx)("p",{className:"text-sm font-semibold text-fg-muted",children:e.role}):null,e.bio?(0,t.jsx)("p",{className:"mt-1 whitespace-pre-line text-sm text-fg-muted",children:e.bio}):null]},r))})]})},CallToAction:{label:"Call to action",defaultProps:{heading:"Ready to get started?",text:"Say what happens when they click, and why now is a good time.",buttons:B("Get started"),align:"center",spacing:"lg",backgroundColor:"#0f172a",textColor:""},fields:{heading:{type:"text",label:"Heading"},text:{type:"textarea",label:"Text"},buttons:D(2),align:A("Alignment",[["left","Left"],["center","Center"]]),spacing:L("Padding"),backgroundColor:ed(),textColor:ep()},render:({heading:e,text:r,buttons:i,align:o,spacing:l,backgroundColor:s,textColor:c,puck:u})=>{let d="center"===o,p=W(s,c);return(0,t.jsx)("section",{className:(0,n.cn)("my-4 rounded-2xl",p.className,S[l]),style:p.style,children:(0,t.jsxs)("div",{className:(0,n.cn)("flex max-w-2xl flex-col gap-4",d?"mx-auto items-center text-center":"items-start text-left"),children:[(0,t.jsx)("h2",{className:"text-3xl font-extrabold tracking-tight text-fg sm:text-4xl",children:e}),r?(0,t.jsx)("p",{className:"whitespace-pre-line text-lg text-fg-muted",children:r}):null,(0,t.jsx)(a.ButtonRow,{buttons:i,justify:d?"justify-center":"justify-start",isEditing:u.isEditing})]})})}}};e.s(["marketingBlocks",0,e_],67942);let eb="#0f766e",ex=[{name:"Mustard",value:"#f2c94c"},{name:"Orange",value:"#ffab00"},{name:"Terracotta",value:"#c2410c"},{name:"Chilli red",value:"#b91c1c"},{name:"Olive",value:"#4d7c0f"},{name:"Forest",value:"#166534"},{name:"Teal",value:eb},{name:"Charcoal",value:"#262626"},{name:"Cream",value:"#f3e5cf"}],ey={tab:"inline-block rounded-xl px-5 py-2 text-2xl font-bold leading-tight",label:"inline-block px-4 py-1.5 text-2xl font-extrabold leading-tight",box:"px-4 py-2.5 text-center text-2xl font-extrabold leading-tight",line:"border-b-2 border-fg pb-2 text-2xl font-bold leading-tight"},ek={FoodMenu:{label:"Food menu",defaultProps:{title:"Starters",note:"",look:"tab",prices:"right",accentColor:"",items:[{name:"Tomato soup",price:"5.00",description:""},{name:"Garlic bread",price:"4.50",description:""},{name:"Bruschetta",price:"6.00",description:""}]},fields:{title:{type:"text",label:"Category"},note:{type:"textarea",label:"A line about it (optional)"},items:{type:"array",label:"Dishes",max:40,arrayFields:{name:{type:"text",label:"Name"},price:{type:"text",label:"Price"},description:{type:"textarea",label:"Description (optional)"}},defaultItemProps:{name:"New dish",price:"0.00",description:""},getItemSummary:e=>[e.name,e.price].filter(Boolean).join(" · ")||"Dish"},look:A("Heading style",[["tab","Rounded"],["label","Square"],["box","Boxed"],["line","Underline"]]),prices:A("Prices",[["right","Right"],["dots","Dotted"]]),accentColor:{type:"custom",label:"Accent colour",render:({id:e,value:r,onChange:n,readOnly:i})=>(0,t.jsx)(b,{id:e,label:"Accent colour",value:r,onChange:n,readOnly:i,swatches:ex,unsetHint:"Automatic: teal for headings that are filled in, the text colour for an underline.",pickerStart:"#f2c94c"})}},render:({title:e,note:r,look:i,prices:o,accentColor:a,items:l,puck:s})=>{let c=l??[],u=(0,f.normalizeHex)(a),d=u??eb,p="line"!==i;if(!e&&!r&&0===c.length)return s.isEditing?(0,t.jsx)("p",{className:"my-3 rounded-xl border-2 border-dashed border-fg-line px-4 py-6 text-center text-sm text-fg-muted",children:"Select this block, then add a category and its dishes."}):(0,t.jsx)(t.Fragment,{});let h=e?(0,t.jsx)("h2",{className:(0,n.cn)("text-fg",ey[i]??ey.tab,p&&(0,f.autoTone)(d)),style:p?{backgroundColor:d}:u?{borderColor:u}:void 0,children:e}):null,m="box"===i,g=r?(0,t.jsx)("p",{className:(0,n.cn)("whitespace-pre-line font-sans text-sm text-fg-muted",m?"px-5 pt-4":"mt-3"),children:r}):null,v=c.length>0?(0,t.jsx)("ul",{className:(0,n.cn)("flex flex-col",m?"gap-3.5 p-5":"mt-5 gap-3"),children:c.map((e,r)=>(0,t.jsxs)("li",{children:[(0,t.jsxs)("p",{className:"flex items-baseline gap-2 text-lg",children:[(0,t.jsx)("span",{className:"min-w-0 font-semibold text-fg",children:e.name}),(0,t.jsx)("span",{"aria-hidden":!0,className:(0,n.cn)("flex-1","dots"===o&&e.price&&"-translate-y-1 border-b-2 border-dotted border-fg/45")}),e.price?(0,t.jsx)("span",{className:"shrink-0 font-bold tabular-nums text-fg",children:e.price}):null]}),e.description?(0,t.jsx)("p",{className:"mt-0.5 whitespace-pre-line font-sans text-sm text-fg-muted",children:e.description}):null]},r))}):null;return(0,t.jsx)("section",{className:"my-3",children:m?(0,t.jsxs)("div",{className:"border-2",style:{borderColor:d},children:[h,g,v,g||v?null:(0,t.jsx)("div",{className:"h-3"})]}):(0,t.jsxs)(t.Fragment,{children:[h,g,v]})})}}};e.s(["menuBlocks",0,ek],60416);let ew=e=>({type:"array",label:e,arrayFields:{label:{type:"text",label:"Label"},link:O()},defaultItemProps:{label:"New link",link:(0,o.emptyLink)()},getItemSummary:e=>e.label||"Link"}),eS={sm:"px-6 py-8",md:"px-8 py-12",lg:"px-10 py-16"},ej="text-sm font-semibold text-fg-soft transition-colors hover:text-fg",eI={Navbar:{label:"Menu bar",defaultProps:{brand:"Your name",logo:"",brandLink:(0,o.emptyLink)(),links:[{label:"Home",link:(0,o.emptyLink)()},{label:"About",link:(0,o.emptyLink)()},{label:"Contact",link:(0,o.emptyLink)()}],ctaLabel:"Get in touch",ctaLink:(0,o.emptyLink)(),backgroundColor:"#ffffff",textColor:""},fields:{brand:{type:"text",label:"Name"},logo:T("Logo (optional)"),brandLink:O("Name and logo go to"),links:ew("Menu links"),ctaLabel:{type:"text",label:"Button label (leave empty for none)"},ctaLink:O("Button link"),backgroundColor:ed(),textColor:ep()},render:({brand:e,logo:i,brandLink:o,links:l,ctaLabel:s,ctaLink:c,backgroundColor:u,textColor:d,puck:p})=>{let h=W(u,d),f=(l??[]).filter(e=>e.label?.trim()),m=s?.trim()?(0,t.jsx)(a.ButtonLink,{label:s,link:c,variant:"solid",isEditing:p.isEditing,className:"px-5 py-2.5"}):null;return(0,t.jsx)("header",{className:(0,n.cn)("my-2 rounded-2xl border border-fg-line px-5 py-3",h.className),style:h.style,children:(0,t.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,t.jsxs)(a.PageLink,{link:o,isEditing:p.isEditing,className:"flex items-center gap-3 text-lg font-extrabold tracking-tight text-fg",children:[(0,t.jsx)(H,{src:i,alt:"",isEditing:!1,className:"h-8 w-auto max-w-32 object-contain"}),e]}),(0,t.jsx)("nav",{"aria-label":"Main",className:"hidden items-center gap-6 md:flex",children:f.map((e,r)=>(0,t.jsx)(a.PageLink,{link:e.link,isEditing:p.isEditing,className:ej,children:e.label},r))}),m?(0,t.jsx)("div",{className:"hidden md:block",children:m}):null,(0,t.jsxs)("details",{className:"group relative md:hidden",children:[(0,t.jsxs)("summary",{"aria-label":"Menu",className:"flex size-10 cursor-pointer list-none items-center justify-center rounded-xl border border-fg-line text-fg [&::-webkit-details-marker]:hidden",children:[(0,t.jsx)(r.LuMenu,{"aria-hidden":!0,className:"size-5 group-open:hidden"}),(0,t.jsx)(r.LuX,{"aria-hidden":!0,className:"hidden size-5 group-open:block"})]}),(0,t.jsxs)("div",{className:"tone-dark absolute right-0 top-full z-20 mt-3 flex w-64 flex-col gap-1 rounded-2xl border border-line bg-paper p-3 shadow-lift",children:[f.map((e,r)=>(0,t.jsx)(a.PageLink,{link:e.link,isEditing:p.isEditing,className:"rounded-lg px-3 py-2 text-sm font-semibold text-fg-soft hover:bg-mist hover:text-fg",children:e.label},r)),m?(0,t.jsx)("div",{className:"mt-2 flex",children:m}):null]})]})]})})}},Footer:{label:"Footer",defaultProps:{brand:"Your name",tagline:"A line about what you do.",columns:[{title:"Company",links:[{label:"About",link:(0,o.emptyLink)()},{label:"Contact",link:(0,o.emptyLink)()}]},{title:"Help",links:[{label:"FAQ",link:(0,o.emptyLink)()},{label:"Privacy",link:(0,o.emptyLink)()}]}],socials:[{network:"instagram",url:""},{network:"facebook",url:""}],copyright:"© Your name. All rights reserved.",size:"md",backgroundColor:"#0f172a",textColor:""},fields:{brand:{type:"text",label:"Name"},tagline:{type:"textarea",label:"Short description"},columns:{type:"array",label:"Link columns",max:4,arrayFields:{title:{type:"text",label:"Column title"},links:ew("Links")},defaultItemProps:{title:"New column",links:[{label:"New link",link:(0,o.emptyLink)()}]},getItemSummary:e=>e.title||"Column"},socials:Z(),copyright:{type:"text",label:"Small print"},size:{type:"radio",label:"Padding",options:[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"}]},backgroundColor:ed(),textColor:ep()},render:({brand:e,tagline:r,columns:i,socials:o,copyright:l,size:s,backgroundColor:c,textColor:u,puck:d})=>{let p=W(c,u);return(0,t.jsxs)("footer",{className:(0,n.cn)("my-4 rounded-2xl",p.className,eS[s]),style:p.style,children:[(0,t.jsxs)("div",{className:"flex flex-col gap-10 md:flex-row md:justify-between",children:[(0,t.jsxs)("div",{className:"flex max-w-xs flex-col gap-3",children:[e?(0,t.jsx)("p",{className:"text-lg font-extrabold tracking-tight text-fg",children:e}):null,r?(0,t.jsx)("p",{className:"whitespace-pre-line text-sm text-fg-muted",children:r}):null]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-x-14 gap-y-8",children:(i??[]).map((e,r)=>(0,t.jsxs)("nav",{"aria-label":e.title||"Footer",className:"flex flex-col gap-2.5",children:[e.title?(0,t.jsx)("p",{className:"text-xs font-bold uppercase tracking-widest text-fg-muted",children:e.title}):null,(e.links??[]).filter(e=>e.label?.trim()).map((e,r)=>(0,t.jsx)(a.PageLink,{link:e.link,isEditing:d.isEditing,className:ej,children:e.label},r))]},r))})]}),(0,t.jsxs)("div",{className:"mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-fg-line pt-6 sm:flex-row sm:items-center",children:[(0,t.jsx)("p",{className:"text-xs text-fg-muted",children:l}),(0,t.jsx)(Y,{items:o,size:"sm",justify:"justify-start",isEditing:d.isEditing})]})]})}}};e.s(["siteBlocks",0,eI],26247)},77229,1062,e=>{"use strict";var t=e.i(18050),r=e.i(45060),n=e.i(98165),i=e.i(98556),o=e.i(67942),a=e.i(60416),l=e.i(26247),s=e.i(31342),c=e.i(55675),u=e.i(85046);e.i(29439);var d=e.i(72294),p=e.i(24154),h=e.i(71645),f=e.i(74080),m=e.i(53070),g=e.i(42817),v=e.i(9165),_=e.i(76457),b=e.i(73130),y=e.i(66132);let k=(0,d.createUsePuck)();function w(e){return p.default.sanitize(e,{FORBID_TAGS:["script","iframe","frame","frameset","object","embed","applet","style","form"],FORBID_ATTR:["formaction"]})}async function S(t,r){let n,i,{renderToStaticMarkup:o}=await e.A(52441),a={content:[{type:r.type,props:{...r.props,customHtml:""}}],root:{props:{}}},l=o((0,h.createElement)(d.Render,{config:{...t,root:{}},data:a}));return(0,_.formatHtml)(((n=document.createElement("template")).innerHTML=l,i=n.content.firstElementChild,i?.localName==="div"&&0===i.attributes.length&&1===n.content.childElementCount?i.innerHTML:l))}function j({html:e}){let r=(0,h.useMemo)(()=>w(e),[e]);return(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})}let I="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors disabled:opacity-50",z=`${I} border border-line text-ink-soft hover:bg-mist`,C="flex items-center justify-center rounded-xl border border-line bg-paper text-xs text-muted";function E({id:e,value:n,onChange:i,readOnly:o,config:a,block:l}){let s=""!==n,[c,u]=(0,h.useState)(null),[p,_]=(0,h.useState)(!1),[k,j]=(0,h.useState)(null),[A,P]=(0,h.useState)(!1),L=(0,h.useRef)(null),M=(0,h.useRef)(!1),N=(0,g.useHtmlAssistant)(),[T,O]=(0,h.useState)(!1),[D,B]=(0,h.useState)(""),[F,R]=(0,h.useState)(!1),[V,H]=(0,h.useState)(null),[W,$]=(0,h.useState)(null),q=(0,h.useRef)(null);(0,h.useEffect)(()=>()=>q.current?.abort(),[]);let U=JSON.stringify(l);(0,h.useEffect)(()=>{if(s)return;let e=!1;return S(a,JSON.parse(U)).then(t=>{e||(u(t),_(!1))}).catch(()=>{e||_(!0)}),()=>{e=!0}},[a,U,s]),(0,h.useEffect)(()=>{M.current&&!A&&L.current?.focus(),M.current=A},[A]);let Z=s?n:c,Y=k??Z??"",X=null!==k&&k!==Z,G=null===Z&&!p,K=(0,h.useMemo)(()=>(0,y.findScriptIssues)(Y),[Y]),J=Y.length>5e4,Q=K.length>0||J;function ee(){Q||(i(w(k??"").trim()),j(null))}function et(){i(""),j(null)}let er=!!N&&!o&&!G&&!J&&""!==Y.trim()&&D.trim().length>=5&&!F;async function en(){if(!N||!er)return;let e=new AbortController;q.current=e,R(!0),H(null),$(null);try{let t=await N({html:Y,prompt:D.trim(),block:l.type},e.signal);if(e.signal.aborted)return;(0,y.findScriptIssues)(t).length>0?H("The AI’s answer contained JavaScript, which isn’t allowed, so it was thrown away. Try asking a different way."):t.length>5e4?H("The AI’s answer was too long to use. Ask for a smaller change."):t===Y?$("The AI didn’t change anything. Try describing the change differently."):(j(t),B(""),$("Updated. Check the HTML, then apply it."))}catch(t){e.signal.aborted||H(t instanceof v.ApiError?t.message:"The AI couldn’t change this HTML. Try again.")}finally{q.current===e&&(q.current=null,R(!1))}}function ei(){q.current?.abort(),q.current=null,R(!1)}let eo=n=>G?(0,t.jsx)("div",{className:(0,r.cn)(C,"h-full"),children:"Loading…"}):(0,t.jsx)(b.HtmlCodeEditor,{id:e,value:Y,onChange:j,readOnly:o||F,issues:K,height:n?"100%":"16rem",roomy:n,autoFocus:n}),ea=(0,t.jsxs)(t.Fragment,{children:[p?(0,t.jsx)("p",{className:"text-xs text-muted",children:"This block’s HTML couldn’t be shown. You can still write your own."}):null,K.length>0?(0,t.jsx)("ul",{"aria-live":"polite",className:"flex flex-col gap-1 rounded-lg bg-danger/10 px-3 py-2 text-xs text-danger",children:K.map(({message:e,range:r},n)=>{let i;return(0,t.jsxs)("li",{children:[r?`Line ${i=r[0],Y.slice(0,i).split("\n").length}: `:"",e]},n)})}):null,J?(0,t.jsxs)("p",{"aria-live":"polite",className:"rounded-lg bg-danger/10 px-3 py-2 text-xs text-danger",children:["Too long — ",Y.length.toLocaleString()," of ",5e4.toLocaleString()," characters."]}):null,(0,t.jsx)("p",{className:"text-xs text-muted",children:"JavaScript isn’t allowed. Forms and style tags are removed when you apply."})]}),el=r=>N&&T?(0,t.jsxs)("div",{className:"flex flex-col gap-2 rounded-xl border border-line bg-mist p-2.5",children:[(0,t.jsxs)("label",{htmlFor:`${e}-instruction`,className:"flex items-center gap-1.5 text-xs font-semibold text-ink-soft",children:[(0,t.jsx)(m.LuSparkles,{"aria-hidden":!0,className:"text-accent"})," Tell the AI what to change"]}),(0,t.jsx)("textarea",{id:`${e}-instruction`,value:D,onChange:e=>B(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),en())},rows:r?3:2,maxLength:2e3,disabled:F,autoFocus:!0,placeholder:"e.g. Make the heading larger and add a second button",className:"w-full resize-y rounded-lg border border-line bg-paper px-3 py-2 text-xs text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-ink disabled:opacity-60"}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-1.5",children:[(0,t.jsxs)("button",{type:"button",onClick:()=>void en(),disabled:!er,className:`${I} bg-accent text-white hover:bg-accent/90`,children:[F?(0,t.jsx)(m.LuLoaderCircle,{"aria-hidden":!0,className:"animate-spin"}):(0,t.jsx)(m.LuSparkles,{"aria-hidden":!0}),F?"Working…":"Update HTML"]}),(0,t.jsx)("button",{type:"button",onClick:F?ei:()=>O(!1),className:z,children:F?"Stop":"Close"}),F?null:(0,t.jsx)("span",{className:"text-[11px] text-muted",children:"Ctrl/⌘ + Enter to send"})]}),V?(0,t.jsx)("p",{role:"alert",className:"text-xs text-danger",children:V}):null,W?(0,t.jsx)("p",{role:"status",className:"text-xs text-muted",children:W}):null]}):null,es=e=>(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-1.5",children:[(0,t.jsx)("button",{type:"button",onClick:ee,disabled:o||!X||Q||F,className:`${I} bg-ink text-white hover:bg-ink-soft`,children:"Apply HTML"}),X?(0,t.jsx)("button",{type:"button",onClick:()=>j(null),className:z,children:"Discard"}):s?(0,t.jsx)("button",{type:"button",onClick:et,disabled:o,className:z,children:"Restore original"}):null,(0,t.jsxs)("div",{className:"ml-auto flex flex-wrap items-center gap-1.5",children:[N?(0,t.jsxs)("button",{type:"button",onClick:()=>O(e=>!e),disabled:o||G,"aria-expanded":T,className:z,children:[(0,t.jsx)(m.LuSparkles,{"aria-hidden":!0,className:"text-accent"})," Edit with AI"]}):null,e?(0,t.jsxs)("button",{type:"button",onClick:()=>P(!1),className:z,children:[(0,t.jsx)(m.LuMinimize2,{"aria-hidden":!0})," Shrink"]}):(0,t.jsxs)("button",{ref:L,type:"button",onClick:()=>P(!0),className:z,children:[(0,t.jsx)(m.LuMaximize2,{"aria-hidden":!0})," Enlarge"]})]})]});return(0,t.jsxs)(d.FieldLabel,{label:"HTML",icon:(0,t.jsx)(m.LuCodeXml,{"aria-hidden":!0}),el:"div",readOnly:o,children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[s?(0,t.jsx)("p",{className:"text-xs text-muted",children:"This block is drawn from the HTML below. Its other options no longer change it."}):null,A?(0,t.jsx)("div",{className:(0,r.cn)(C,"h-16"),children:"Editing in the larger view."}):eo(!1),A?null:el(!1),A?null:ea,A?null:es(!1)]}),A?(0,f.createPortal)((0,t.jsx)("div",{role:"dialog","aria-modal":"true","aria-label":"Edit HTML",onKeyDown:e=>{"Escape"===e.key&&P(!1)},className:"fixed inset-0 z-[9999] flex items-center justify-center bg-ink/60 p-3 sm:p-8",children:(0,t.jsxs)("div",{className:"flex h-full w-full max-w-6xl flex-col gap-3 rounded-2xl bg-paper p-4 shadow-2xl",children:[(0,t.jsxs)("p",{className:"flex items-center gap-2 text-sm font-semibold text-ink",children:[(0,t.jsx)(m.LuCodeXml,{"aria-hidden":!0})," Edit HTML — ",l.type]}),(0,t.jsx)("div",{className:"min-h-0 flex-1",children:eo(!0)}),el(!0),ea,es(!0)]})}),document.body):null]})}let A=({value:e,...r})=>{let n=k(e=>e.selectedItem);return n?(0,t.jsx)(E,{...r,value:"string"==typeof e?e:"",block:{type:n.type,props:n.props}},String(n.props.id)):null};function P(e){let r={},n={...e,components:r};for(let[i,o]of Object.entries(e.components)){let e=o.render;r[i]={...o,fields:{...o.fields,customHtml:{type:"custom",label:"HTML",render:e=>(0,t.jsx)(A,{...e,config:n})}},render:r=>"string"==typeof r.customHtml&&r.customHtml?(0,t.jsx)(j,{html:r.customHtml}):(0,t.jsx)(e,{...r})}}return n}e.s(["sanitizeHtml",0,w,"withHtmlEditing",0,P],1062);var L=e.i(2068),M=e.i(10857);let N={left:"justify-start",center:"justify-center",right:"justify-end"},T={sm:25,md:50,lg:75,full:100},O=(0,d.createUsePuck)(),D=e=>Math.min(100,Math.max(10,Math.round(e)));function B(e){return"string"==typeof e&&e in T?T[e]:"number"==typeof e&&Number.isFinite(e)?D(e):100}function F({isEditing:e,...r}){let n=(0,M.safeImageSrc)(r.src);return n?e?(0,t.jsx)(V,{...r,src:n}):(0,t.jsx)(R,{...r,src:n,percent:B(r.width)}):e?(0,t.jsx)("div",{className:"my-2 flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-fg-line text-sm text-fg-muted",children:"Select this block, then upload a picture"}):(0,t.jsx)(t.Fragment,{})}function R({src:e,alt:n,align:i,corners:o,percent:a,children:l}){return(0,t.jsx)("div",{className:(0,r.cn)("my-2 flex",N[i??"center"]),children:(0,t.jsxs)("div",{className:"relative max-w-full",style:{width:`${a}%`},children:[(0,t.jsx)("img",{src:e,alt:n,draggable:!1,className:(0,r.cn)("block w-full object-cover","rounded"===o?"rounded-2xl":"")}),l]})})}function V({id:e,src:r,alt:n,width:i,align:o,corners:a}){let l=O(t=>t.selectedItem?.props.id===e),s=(0,d.useGetPuck)(),[c,u]=(0,h.useState)(null),p=B(i),f=o??"center";function m(e){u(t=>t&&t.rowPx>0?{...t,latest:D((t.startPx+(e-t.startX)*t.factor)/t.rowPx*100)}:t)}function g(){if(u(null),!c||c.latest===p)return;let{dispatch:t,getItemById:r,getSelectorForId:n}=s(),i=r(e),o=n(e);i&&o&&t({type:"replace",destinationIndex:o.index,destinationZone:o.zone,data:{...i,props:{...i.props,width:c.latest}}})}return(0,t.jsxs)(R,{src:r,alt:n,align:o,corners:a,percent:c?.latest??p,children:[l?("left"===f?["right"]:"right"===f?["left"]:["left","right"]).map(e=>(0,t.jsx)(H,{side:e,onStart:(t,r)=>{let n,i;return n=r.parentElement,i=n?.parentElement,void(!n||!i||u({startX:t,startPx:n.getBoundingClientRect().width,rowPx:i.clientWidth,factor:("right"===e?1:-1)*("center"===f?2:1),latest:p}))},onMove:m,onEnd:g},e)):null,c?(0,t.jsxs)("span",{className:"pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 rounded-md bg-ink/80 px-2 py-0.5 text-[11px] font-semibold text-white",children:[c.latest,"%"]}):null]})}function H({side:e,onStart:n,onMove:i,onEnd:o}){let a=(0,h.useRef)(null),l=(0,h.useRef)({onStart:n,onMove:i,onEnd:o});return(0,h.useEffect)(()=>{l.current={onStart:n,onMove:i,onEnd:o}}),(0,h.useEffect)(()=>{let e=a.current;if(!e)return;let t=t=>{0===t.button&&(t.preventDefault(),e.setPointerCapture(t.pointerId),l.current.onStart(t.clientX,e))},r=t=>{e.hasPointerCapture(t.pointerId)&&l.current.onMove(t.clientX)},n=t=>{e.hasPointerCapture(t.pointerId)&&(e.releasePointerCapture(t.pointerId),l.current.onEnd())},i=e=>e.stopPropagation();e.addEventListener("pointerdown",t,{capture:!0});let o=(0,d.registerOverlayPortal)(e,{disableDrag:!0});return e.addEventListener("pointermove",r),e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("click",i),()=>{o?.(),e.removeEventListener("pointerdown",t,{capture:!0}),e.removeEventListener("pointermove",r),e.removeEventListener("pointerup",n),e.removeEventListener("pointercancel",n),e.removeEventListener("click",i)}},[]),(0,t.jsx)("span",{ref:a,"aria-hidden":!0,className:(0,r.cn)("absolute top-1/2 z-10 h-12 w-3 -translate-y-1/2 cursor-ew-resize touch-none rounded-full border-2 border-white bg-accent shadow-md transition-transform hover:scale-110","left"===e?"left-1.5":"right-1.5")})}var W=e.i(10341);let $={display:"text-5xl leading-none sm:text-7xl",h1:"text-4xl sm:text-5xl",h2:"text-3xl",h3:"text-2xl"},q={sm:"h-4",md:"h-8",lg:"h-16",xl:"h-24"},U={sm:"my-2",md:"my-6",lg:"my-12"},Z={narrow:"max-w-3xl",standard:"max-w-5xl",wide:"max-w-7xl"},Y=[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],X={categories:{content:{title:"Content",components:["Heading","Text","Button","ButtonGroup","List","Quote","Callout","Table","FoodMenu"]},layout:{title:"Layout",components:["Columns","Grid","Flex","Card","Spacer","Divider"]},sections:{title:"Page sections",components:["Section","Hero","Features","Steps","Stats","Testimonials","Pricing","Logos","Team","Accordion","CallToAction"]},media:{title:"Media",components:["Image","Gallery","Video","Map"]},site:{title:"Site",components:["Navbar","Footer","ContactInfo","SocialLinks"]}},root:{defaultProps:{width:"standard"},fields:{width:{type:"radio",label:"Page width",options:[{label:"Narrow",value:"narrow"},{label:"Standard",value:"standard"},{label:"Wide",value:"wide"}]}},render:({children:e,width:n})=>(0,t.jsx)("div",{className:(0,r.cn)("mx-auto w-full px-4 py-8 sm:px-6",Z[n??"standard"]??Z.standard),children:e})},components:{Heading:{label:"Heading",defaultProps:{text:"Your heading",level:"h2",align:"left"},fields:{text:{type:"text",label:"Text"},level:{type:"radio",label:"Size",options:[{label:"Display",value:"display"},{label:"Large",value:"h1"},{label:"Medium",value:"h2"},{label:"Small",value:"h3"}]},align:{type:"radio",label:"Alignment",options:Y}},render:({text:e,level:n,align:i})=>(0,t.jsx)("display"===n?"h1":n,{className:(0,r.cn)("min-h-[1.2em] py-2 font-extrabold tracking-tight text-fg",$[n],s.ALIGN[i]),children:e})},Text:{label:"Text",defaultProps:{body:"<p>Tell visitors what this is about. Select text to make it bold, add a link or turn it into a list.</p>"},fields:{body:{type:"richtext",label:"Text"}},render:({body:e})=>(0,t.jsx)("div",{className:"page-richtext py-2",children:e})},Image:{label:"Image",defaultProps:{src:"",alt:"",width:100,align:"center",corners:"rounded"},fields:{src:{type:"custom",label:"Picture",render:({id:e,value:r,onChange:n,readOnly:i})=>(0,t.jsx)(L.ImageUploadField,{id:e,value:r,onChange:n,readOnly:i})},alt:{type:"text",label:"Description (for screen readers)"},width:{type:"number",label:"Width (% of the page)",max:100},align:{type:"radio",label:"Alignment",options:Y},corners:{type:"radio",label:"Corners",options:[{label:"Rounded",value:"rounded"},{label:"Square",value:"square"}]}},render:({id:e,src:r,alt:n,width:i,align:o,corners:a,puck:l})=>(0,t.jsx)(F,{id:e,src:r,alt:n,width:i,align:o,corners:a,isEditing:l.isEditing})},Button:{label:"Button",defaultProps:{label:"Learn more",link:(0,M.emptyLink)(),variant:"solid",align:"left",backgroundColor:"",textColor:""},fields:{label:{type:"text",label:"Label"},link:{type:"custom",label:"Link",render:({id:e,value:r,onChange:n,readOnly:i})=>(0,t.jsx)(L.LinkField,{id:e,value:r,onChange:n,readOnly:i})},variant:{type:"radio",label:"Style",options:[{label:"Filled",value:"solid"},{label:"Outline",value:"outline"}]},align:{type:"radio",label:"Alignment",options:Y},backgroundColor:(0,c.backgroundColorField)("The button’s own colour: teal when filled, none when outline."),textColor:(0,c.textColorField)("Label colour","Automatic: white on the theme colour, or whichever reads best on a colour you pick.")},render:({label:e,link:n,variant:i,align:o,backgroundColor:a,textColor:l,puck:c})=>(0,t.jsx)("div",{className:(0,r.cn)("flex py-2",s.JUSTIFY[o]),children:(0,t.jsx)(W.ButtonLink,{label:e,link:n,variant:i,fill:(0,u.normalizeHex)(a),ink:(0,u.normalizeHex)(l),isEditing:c.isEditing})})},Section:{label:"Blank section",defaultProps:{backgroundColor:"#f4f6f8",textColor:"",spacing:"md",font:"sans",content:[]},fields:{backgroundColor:(0,c.backgroundColorField)(),textColor:(0,c.textColorField)(),spacing:{type:"radio",label:"Padding",options:[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"}]},font:(0,s.radio)("Font",[["sans","Modern"],["serif","Serif"],["condensed","Condensed"]]),content:{type:"slot"}},render:({backgroundColor:e,textColor:n,spacing:i,font:o,content:a})=>{let l=(0,u.normalizeHex)(e),c=(0,u.normalizeHex)(n);return(0,t.jsx)("section",{className:(0,r.cn)("my-4 rounded-2xl",l&&(0,u.autoTone)(l),s.BAND_PADDING[i],s.FONT[o]),style:{...l?{backgroundColor:l}:null,...c?(0,u.textTokens)(c):null},children:(0,t.jsx)(a,{})})}},Columns:{label:"Columns",defaultProps:{count:"2",first:[],second:[],third:[]},fields:{count:{type:"radio",label:"Columns",options:[{label:"Two",value:"2"},{label:"Three",value:"3"}]},first:{type:"slot"},second:{type:"slot"},third:{type:"slot"}},render:({count:e,first:n,second:i,third:o})=>(0,t.jsxs)("div",{className:(0,r.cn)("my-2 grid grid-cols-1 gap-6","3"===e?"md:grid-cols-3":"md:grid-cols-2"),children:[(0,t.jsx)(n,{}),(0,t.jsx)(i,{}),"3"===e?(0,t.jsx)(o,{}):null]})},Spacer:{label:"Spacer",defaultProps:{size:"md"},fields:{size:{type:"radio",label:"Height",options:[{label:"S",value:"sm"},{label:"M",value:"md"},{label:"L",value:"lg"},{label:"XL",value:"xl"}]}},render:({size:e})=>(0,t.jsx)("div",{"aria-hidden":!0,className:q[e]})},Divider:{label:"Divider",defaultProps:{spacing:"md",textColor:""},fields:{spacing:{type:"radio",label:"Spacing",options:[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"}]},textColor:(0,c.textColorField)("Line colour","Automatic: a light grey line, or a pale one inside a dark section.")},render:({spacing:e,textColor:n})=>{let i=(0,u.normalizeHex)(n);return(0,t.jsx)("hr",{className:(0,r.cn)("border-t border-fg-line",U[e]),style:i?{borderColor:i}:void 0})}},...i.layoutBlocks,...o.marketingBlocks,...n.contentBlocks,...a.menuBlocks,...l.siteBlocks}},G=P((0,c.withBlockColors)(X));e.s(["puckConfig",0,G],77229)},60408,10857,10341,e=>{"use strict";var t=e.i(18050),r=e.i(84828),n=e.i(53070);let i={zap:{label:"Lightning",icon:n.LuZap},rocket:{label:"Rocket",icon:n.LuRocket},sparkles:{label:"Sparkles",icon:n.LuSparkles},star:{label:"Star",icon:n.LuStar},heart:{label:"Heart",icon:n.LuHeart},thumbsUp:{label:"Thumbs up",icon:n.LuThumbsUp},award:{label:"Award",icon:n.LuAward},badge:{label:"Verified",icon:n.LuBadgeCheck},shield:{label:"Shield",icon:n.LuShieldCheck},lock:{label:"Lock",icon:n.LuLock},target:{label:"Target",icon:n.LuTarget},lightbulb:{label:"Idea",icon:n.LuLightbulb},trending:{label:"Growth",icon:n.LuTrendingUp},chart:{label:"Chart",icon:n.LuChartColumn},dollar:{label:"Money",icon:n.LuDollarSign},users:{label:"People",icon:n.LuUsers},handshake:{label:"Partnership",icon:n.LuHandshake},message:{label:"Chat",icon:n.LuMessageCircle},mail:{label:"Email",icon:n.LuMail},phone:{label:"Phone",icon:n.LuPhone},megaphone:{label:"Announcement",icon:n.LuMegaphone},globe:{label:"Globe",icon:n.LuGlobe},pin:{label:"Location",icon:n.LuMapPin},clock:{label:"Clock",icon:n.LuClock},calendar:{label:"Calendar",icon:n.LuCalendar},home:{label:"Home",icon:n.LuHouse},truck:{label:"Delivery",icon:n.LuTruck},bag:{label:"Shopping",icon:n.LuShoppingBag},gift:{label:"Gift",icon:n.LuGift},coffee:{label:"Coffee",icon:n.LuCoffee},food:{label:"Food",icon:n.LuUtensils},leaf:{label:"Nature",icon:n.LuLeaf},camera:{label:"Camera",icon:n.LuCamera},music:{label:"Music",icon:n.LuMusic},palette:{label:"Design",icon:n.LuPalette},code:{label:"Code",icon:n.LuCode},phoneApp:{label:"Mobile",icon:n.LuSmartphone},cloud:{label:"Cloud",icon:n.LuCloud},layers:{label:"Layers",icon:n.LuLayers},settings:{label:"Settings",icon:n.LuSettings},tools:{label:"Tools",icon:n.LuWrench},briefcase:{label:"Business",icon:n.LuBriefcase},book:{label:"Learning",icon:n.LuBookOpen},graduation:{label:"Education",icon:n.LuGraduationCap}},o=[{label:"No icon",value:""},...Object.entries(i).map(([e,{label:t}])=>({label:t,value:e}))],a={facebook:{label:"Facebook",icon:r.FaFacebookF},instagram:{label:"Instagram",icon:r.FaInstagram},x:{label:"X (Twitter)",icon:r.FaXTwitter},linkedin:{label:"LinkedIn",icon:r.FaLinkedinIn},youtube:{label:"YouTube",icon:r.FaYoutube},tiktok:{label:"TikTok",icon:r.FaTiktok},whatsapp:{label:"WhatsApp",icon:r.FaWhatsapp},telegram:{label:"Telegram",icon:r.FaTelegram},pinterest:{label:"Pinterest",icon:r.FaPinterestP},github:{label:"GitHub",icon:r.FaGithub},dribbble:{label:"Dribbble",icon:r.FaDribbble},behance:{label:"Behance",icon:r.FaBehance},medium:{label:"Medium",icon:r.FaMedium},spotify:{label:"Spotify",icon:r.FaSpotify},discord:{label:"Discord",icon:r.FaDiscord}},l=Object.entries(a).map(([e,{label:t}])=>({label:t,value:e}));e.s(["BlockIcon",0,function({name:e,className:r}){let n=e&&Object.hasOwn(i,e)?i[e].icon:null;return n?(0,t.jsx)(n,{"aria-hidden":!0,className:r}):null},"ICON_OPTIONS",0,o,"SOCIAL_OPTIONS",0,l,"SocialIcon",0,function({network:e,className:r}){let i=Object.hasOwn(a,e)?a[e].icon:n.LuGlobe;return(0,t.jsx)(i,{"aria-hidden":!0,className:r})},"socialLabel",0,e=>Object.hasOwn(a,e)?a[e].label:e],60408);var s=e.i(71645),c=e.i(9165);let u=(0,s.createContext)({}),d=u.Provider;function p(){return(0,s.useContext)(u)}function h(e){return 0===e.button&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey}let f=()=>({pageSlug:"",url:""}),m=/^(?:https?:\/\/|mailto:|tel:)/i,g=/^[^/?#]*:/;function v(e){let t=(e??"").trim();return t?m.test(t)?t:t.startsWith("//")||g.test(t)&&!/^[^/?#:]*\.[^/?#:]*:\d/.test(t)?null:`https://${t}`:null}let _=/^data:image\/(?:jpeg|png|webp|gif);base64,/i;e.s(["PageNavigationProvider",0,d,"emptyLink",0,f,"isPlainLeftClick",0,h,"safeExternalHref",0,v,"safeImageSrc",0,function(e){return e&&(_.test(e)||function(e){try{let t=new URL(e);return t.origin===new URL(c.API_URL).origin&&t.pathname.startsWith("/storage/page-images/")}catch{return!1}}(e))?e:null},"usePageNavigation",0,p],10857);var b=e.i(45060),y=e.i(85046);function k({link:e,isEditing:r,className:n,style:i,children:o}){let a=p(),l=e??f(),s=(0,t.jsx)("span",{className:n,style:i,children:o});if(r)return s;if(l.pageSlug){let e=a.hrefFor?.(l.pageSlug)??null;return e?(0,t.jsx)("a",{href:e,onClick:e=>{a.onNavigate&&h(e)&&(e.preventDefault(),a.onNavigate(l.pageSlug))},className:n,style:i,children:o}):s}let c=v(l.url);if(!c)return s;let u=/^https?:/i.test(c);return(0,t.jsx)("a",{href:c,...u?{target:"_blank",rel:"noreferrer noopener"}:{},className:n,style:i,children:o})}let w={solid:"bg-accent text-white hover:bg-accent/90",outline:"border-2 border-fg text-fg hover:bg-fg/10"};function S({label:e,link:r,variant:n,fill:i=null,ink:o=null,isEditing:a,className:l}){let s=o??(i?(0,y.needsLightText)(i)?"#ffffff":"#0f172a":null),c={...i?{backgroundColor:i}:null,...s?{...(0,y.textTokens)(s),color:s}:null};return(0,t.jsx)(k,{link:r,isEditing:a,className:(0,b.cn)("inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",w[n],i&&"hover:opacity-90",l),style:c,children:e||"Button"})}e.s(["ButtonLink",0,S,"ButtonRow",0,function({buttons:e,justify:r,isEditing:n}){let i=(e??[]).filter(e=>e.label?.trim());return 0===i.length?null:(0,t.jsx)("div",{className:(0,b.cn)("flex flex-wrap gap-3",r),children:i.map((e,r)=>(0,t.jsx)(S,{label:e.label,link:e.link,variant:e.variant??"solid",isEditing:n},r))})},"PageLink",0,k],10341)}]);