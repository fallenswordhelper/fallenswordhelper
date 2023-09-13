import{i as e}from"./instantiate-880b172e.js"
import{S as t,L as s,M as n,N as i,O as l,a1 as a,P as c,c7 as o,R as u,T as d,W as r,Y as v,Z as b,b0 as p,_ as f,a0 as h,a2 as m,n as k,cc as q,a4 as g,V as w,af as x,E as L,aO as y,ab as M,bf as j,bg as $,ba as R,bd as Q,bh as C}from"./calfSystem-2f15e074.js"
import{M as S}from"./ModalTabbed-bd6a56f6.js"
import{e as E}from"./each-d93fc3a2.js"
import"./ModalTitled-4705b2f9.js"
import"./Modal-d504dd2a.js"
function T(e,t,s){const n=e.slice()
return n[18]=t[s].name,n[19]=t[s].newWindow,n[20]=t[s].url,n[21]=t,n[22]=s,n}function W(e){let t,s,n,o,v,p,h,k,q,g,w,x,L,y,M,j=e[18]+"",$=e[20]+""
function R(){e[8].call(k,e[21],e[22])}function Q(){return e[9](e[22])}return{c(){t=i("div"),s=a(j),n=l(),o=i("div"),v=a($),p=l(),h=i("div"),k=i("input"),q=l(),g=i("div"),w=a("[\n        "),x=i("button"),x.textContent="Del",L=a("\n        ]\n      "),c(t,"class","svelte-6qbl51"),c(o,"class","svelte-6qbl51"),k.disabled=!0,c(k,"type","checkbox"),c(h,"class","centered svelte-6qbl51"),c(x,"type","button"),c(x,"class","svelte-6qbl51"),c(g,"class","buttons centered svelte-6qbl51")},m(i,l){u(i,t,l),d(t,s),u(i,n,l),u(i,o,l),d(o,v),u(i,p,l),u(i,h,l),d(h,k),k.checked=e[19],u(i,q,l),u(i,g,l),d(g,w),d(g,x),d(g,L),y||(M=[r(k,"change",R),r(x,"click",Q)],y=!0)},p(t,n){e=t,32&n&&j!==(j=e[18]+"")&&m(s,j),32&n&&$!==($=e[20]+"")&&m(v,$),32&n&&(k.checked=e[19])},d(e){e&&(b(t),b(n),b(o),b(p),b(h),b(q),b(g)),y=!1,f(M)}}}function A(e){let t,s,n,h,m,k,q,g,w,x,L,y,M,j,$,R,Q,C,S,A,N,O=E(e[5]),D=[]
for(let t=0;t<O.length;t+=1)D[t]=W(T(e,O,t))
return{c(){t=i("div"),s=i("div"),s.innerHTML='<div class="svelte-6qbl51">Name</div> <div class="svelte-6qbl51">URL</div> <div class="centered svelte-6qbl51">New\n      <div class="wrapper svelte-6qbl51">[\n        <div class="tooltip svelte-6qbl51"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div>\n        ]</div></div> <div class="centered svelte-6qbl51">Action</div>',n=l(),h=i("div")
for(let e=0;e<D.length;e+=1)D[e].c()
m=l(),k=i("div"),q=i("div"),g=i("input"),w=l(),x=i("div"),L=i("input"),y=l(),M=i("div"),j=i("input"),$=l(),R=i("div"),Q=a("[\n      "),C=i("button"),C.textContent="Add",S=a("\n      ]"),c(s,"class","grid headings svelte-6qbl51"),c(h,"class","grid items svelte-6qbl51"),c(g,"placeholder","Log"),g.required=!0,c(g,"type","text"),c(g,"class","svelte-6qbl51"),o(g,"invalid",e[1]),c(L,"placeholder","?cmd=log"),L.required=!0,c(L,"type","text"),c(L,"class","svelte-6qbl51"),o(L,"invalid",e[3]),c(j,"type","checkbox"),c(M,"class","centered svelte-6qbl51"),c(C,"type","button"),c(C,"class","svelte-6qbl51"),c(R,"class","buttons centered svelte-6qbl51"),c(k,"class","grid add svelte-6qbl51"),c(t,"class","container svelte-6qbl51")},m(i,l){u(i,t,l),d(t,s),d(t,n),d(t,h)
for(let e=0;e<D.length;e+=1)D[e]&&D[e].m(h,null)
d(t,m),d(t,k),d(k,q),d(q,g),e[10](g),d(k,w),d(k,x),d(x,L),e[13](L),d(k,y),d(k,M),d(M,j),e[16](j),d(k,$),d(k,R),d(R,Q),d(R,C),d(R,S),A||(N=[r(g,"blur",e[11]),r(g,"focus",e[12]),r(L,"blur",e[14]),r(L,"focus",e[15]),r(C,"click",e[7])],A=!0)},p(e,[t]){if(96&t){let s
for(O=E(e[5]),s=0;s<O.length;s+=1){const n=T(e,O,s)
D[s]?D[s].p(n,t):(D[s]=W(n),D[s].c(),D[s].m(h,null))}for(;s<D.length;s+=1)D[s].d(1)
D.length=O.length}2&t&&o(g,"invalid",e[1]),8&t&&o(L,"invalid",e[3])},i:v,o:v,d(s){s&&b(t),p(D,s),e[10](null),e[13](null),e[16](null),A=!1,f(N)}}}function N(e,t,s){let n=0,i=0,l=0,a=0,c=0,o=h("quickLinks")||[]
function u(){g("quickLinks",o)}function d(e){k("Quick Links Manager","Delete Item"),s(5,o=o.toSpliced(e,1)),u()}return[n,i,l,a,c,o,d,function(){k("Quick Links Manager","Add Item"),i||a||(s(5,o=[...o,{name:n.value,url:l.value,newWindow:c.checked}]),s(0,n.value="",n),s(2,l.value="",l),s(4,c.checked=0,c),u())},function(e,t){e[t].newWindow=this.checked,s(5,o)},e=>d(e),function(e){q[e?"unshift":"push"]((()=>{n=e,s(0,n)}))},()=>{s(1,i=n.validity.valueMissing)},()=>{s(1,i=0)},function(e){q[e?"unshift":"push"]((()=>{l=e,s(2,l)}))},()=>{s(3,a=l.validity.valueMissing)},()=>{s(3,a=0)},function(e){q[e?"unshift":"push"]((()=>{c=e,s(4,c)}))}]}class O extends t{constructor(e){super(),s(this,e,N,A,n,{})}}function D(e){let t,s,n,a,p,h,m,k,q,g
return{c(){t=i("div"),s=i("div"),n=i("textarea"),a=l(),p=i("div"),h=i("button"),h.textContent="Save",m=l(),k=i("button"),k.textContent="Reset",c(n,"class","svelte-1cwjqvi"),o(n,"invalid",e[1]),c(s,"class","textContainer svelte-1cwjqvi"),c(h,"type","button"),c(k,"type","button"),c(p,"class","bottom svelte-1cwjqvi"),c(t,"class","container svelte-1cwjqvi")},m(i,l){u(i,t,l),d(t,s),d(s,n),w(n,e[0]),d(t,a),d(t,p),d(p,h),d(p,m),d(p,k),q||(g=[r(n,"input",e[5]),r(n,"blur",e[6]),r(n,"focus",e[7]),r(h,"click",e[3]),r(k,"click",e[4])],q=!0)},p(e,[t]){1&t&&w(n,e[0]),2&t&&o(n,"invalid",e[1])},i:v,o:v,d(e){e&&b(t),q=!1,f(g)}}}function I(e,t,s){let n=x("quickLinks"),i=0
const l=()=>L(y(n)),a=()=>!l(),c=()=>M("quickLinks",n.trim())
return[n,i,a,function(){k("Quick Links Raw Editor","Save"),l()?c():s(1,i=1)},function(){k("Quick Links Raw Editor","Reset"),s(0,n="[]"),s(1,i=0),c()},function(){n=this.value,s(0,n)},()=>{s(1,i=a())},()=>{s(1,i=0)}]}class Z extends t{constructor(e){super(),s(this,e,I,D,n,{})}}function H(e){let t,s
return t=new S({props:{tabs:e[2],visible:e[0]}}),t.$on("close",e[1]),{c(){j(t.$$.fragment)},m(e,n){$(t,e,n),s=!0},p(e,[s]){const n={}
1&s&&(n.visible=e[0]),t.$set(n)},i(e){s||(R(t.$$.fragment,e),s=!0)},o(e){Q(t.$$.fragment,e),s=!1},d(e){C(t,e)}}}function P(e,t,s){let{visible:n=!0}=t
const i=[{component:O,label:"Quick Links"},{component:Z,label:"Raw Editor"}]
return e.$$set=e=>{"visible"in e&&s(0,n=e.visible)},[n,function(){k("Quick Links Manager","close"),s(0,n=!1)},i]}var U=class extends t{constructor(e){super(),s(this,e,P,H,n,{visible:0})}}
const V={visible:!0}
let Y=0
function _(){Y=e(V,Y,U)}export{_ as default}
//# sourceMappingURL=quickLinksManager-f1cb66dc.js.map
