import{i as e}from"./instantiate-880b172e.js"
import{S as t,K as s,L as n,M as i,N as l,a0 as a,O as c,c5 as o,Q as u,R as d,V as r,X as v,Y as b,a_ as p,Z as f,_ as m,a1 as h,n as k,ca as q,a3 as g,U as w,ae as x,aM as L,aa as y,bb as M,bc as j,b6 as $,b9 as Q,bd as R}from"./calfSystem-929ac228.js"
import{M as C}from"./ModalTabbed-855e0ef1.js"
import{e as S}from"./each-bac91e63.js"
import{i as A}from"./isArray-09a53da7.js"
import"./ModalTitled-77d1fd9a.js"
import"./Modal-b8a2fc24.js"
function E(e,t,s){const n=e.slice()
return n[18]=t[s].name,n[19]=t[s].newWindow,n[20]=t[s].url,n[21]=t,n[22]=s,n}function N(e){let t,s,n,o,v,p,m,k,q,g,w,x,L,y,M,j=e[18]+"",$=e[20]+""
function Q(){e[8].call(k,e[21],e[22])}function R(){return e[9](e[22])}return{c(){t=i("div"),s=a(j),n=l(),o=i("div"),v=a($),p=l(),m=i("div"),k=i("input"),q=l(),g=i("div"),w=a("[\n        "),x=i("button"),x.textContent="Del",L=a("\n        ]\n      "),c(t,"class","svelte-6qbl51"),c(o,"class","svelte-6qbl51"),k.disabled=!0,c(k,"type","checkbox"),c(m,"class","centered svelte-6qbl51"),c(x,"type","button"),c(x,"class","svelte-6qbl51"),c(g,"class","buttons centered svelte-6qbl51")},m(i,l){u(i,t,l),d(t,s),u(i,n,l),u(i,o,l),d(o,v),u(i,p,l),u(i,m,l),d(m,k),k.checked=e[19],u(i,q,l),u(i,g,l),d(g,w),d(g,x),d(g,L),y||(M=[r(k,"change",Q),r(x,"click",R)],y=!0)},p(t,n){e=t,32&n&&j!==(j=e[18]+"")&&h(s,j),32&n&&$!==($=e[20]+"")&&h(v,$),32&n&&(k.checked=e[19])},d(e){e&&(b(t),b(n),b(o),b(p),b(m),b(q),b(g)),y=!1,f(M)}}}function T(e){let t,s,n,m,h,k,q,g,w,x,L,y,M,j,$,Q,R,C,A,T,W,D=S(e[5]),I=[]
for(let t=0;t<D.length;t+=1)I[t]=N(E(e,D,t))
return{c(){t=i("div"),s=i("div"),s.innerHTML='<div class="svelte-6qbl51">Name</div> <div class="svelte-6qbl51">URL</div> <div class="centered svelte-6qbl51">New\n      <div class="wrapper svelte-6qbl51">[\n        <div class="tooltip svelte-6qbl51"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div>\n        ]</div></div> <div class="centered svelte-6qbl51">Action</div>',n=l(),m=i("div")
for(let e=0;e<I.length;e+=1)I[e].c()
h=l(),k=i("div"),q=i("div"),g=i("input"),w=l(),x=i("div"),L=i("input"),y=l(),M=i("div"),j=i("input"),$=l(),Q=i("div"),R=a("[\n      "),C=i("button"),C.textContent="Add",A=a("\n      ]"),c(s,"class","grid headings svelte-6qbl51"),c(m,"class","grid items svelte-6qbl51"),c(g,"placeholder","Log"),g.required=!0,c(g,"type","text"),c(g,"class","svelte-6qbl51"),o(g,"invalid",e[1]),c(L,"placeholder","?cmd=log"),L.required=!0,c(L,"type","text"),c(L,"class","svelte-6qbl51"),o(L,"invalid",e[3]),c(j,"type","checkbox"),c(M,"class","centered svelte-6qbl51"),c(C,"type","button"),c(C,"class","svelte-6qbl51"),c(Q,"class","buttons centered svelte-6qbl51"),c(k,"class","grid add svelte-6qbl51"),c(t,"class","container svelte-6qbl51")},m(i,l){u(i,t,l),d(t,s),d(t,n),d(t,m)
for(let e=0;e<I.length;e+=1)I[e]&&I[e].m(m,null)
d(t,h),d(t,k),d(k,q),d(q,g),e[10](g),d(k,w),d(k,x),d(x,L),e[13](L),d(k,y),d(k,M),d(M,j),e[16](j),d(k,$),d(k,Q),d(Q,R),d(Q,C),d(Q,A),T||(W=[r(g,"blur",e[11]),r(g,"focus",e[12]),r(L,"blur",e[14]),r(L,"focus",e[15]),r(C,"click",e[7])],T=!0)},p(e,[t]){if(96&t){let s
for(D=S(e[5]),s=0;s<D.length;s+=1){const n=E(e,D,s)
I[s]?I[s].p(n,t):(I[s]=N(n),I[s].c(),I[s].m(m,null))}for(;s<I.length;s+=1)I[s].d(1)
I.length=D.length}2&t&&o(g,"invalid",e[1]),8&t&&o(L,"invalid",e[3])},i:v,o:v,d(s){s&&b(t),p(I,s),e[10](null),e[13](null),e[16](null),T=!1,f(W)}}}function W(e,t,s){let n=0,i=0,l=0,a=0,c=0,o=m("quickLinks")||[]
function u(){g("quickLinks",o)}function d(e){k("Quick Links Manager","Delete Item"),s(5,o=o.toSpliced(e,1)),u()}return[n,i,l,a,c,o,d,function(){k("Quick Links Manager","Add Item"),i||a||(s(5,o=[...o,{name:n.value,url:l.value,newWindow:c.checked}]),s(0,n.value="",n),s(2,l.value="",l),s(4,c.checked=0,c),u())},function(e,t){e[t].newWindow=this.checked,s(5,o)},e=>d(e),function(e){q[e?"unshift":"push"]((()=>{n=e,s(0,n)}))},()=>{s(1,i=n.validity.valueMissing)},()=>{s(1,i=0)},function(e){q[e?"unshift":"push"]((()=>{l=e,s(2,l)}))},()=>{s(3,a=l.validity.valueMissing)},()=>{s(3,a=0)},function(e){q[e?"unshift":"push"]((()=>{c=e,s(4,c)}))}]}class D extends t{constructor(e){super(),s(this,e,W,T,n,{})}}function I(e){let t,s,n,a,p,m,h,k,q,g
return{c(){t=i("div"),s=i("div"),n=i("textarea"),a=l(),p=i("div"),m=i("button"),m.textContent="Save",h=l(),k=i("button"),k.textContent="Reset",c(n,"class","svelte-1cwjqvi"),o(n,"invalid",e[1]),c(s,"class","textContainer svelte-1cwjqvi"),c(m,"type","button"),c(k,"type","button"),c(p,"class","bottom svelte-1cwjqvi"),c(t,"class","container svelte-1cwjqvi")},m(i,l){u(i,t,l),d(t,s),d(s,n),w(n,e[0]),d(t,a),d(t,p),d(p,m),d(p,h),d(p,k),q||(g=[r(n,"input",e[5]),r(n,"blur",e[6]),r(n,"focus",e[7]),r(m,"click",e[3]),r(k,"click",e[4])],q=!0)},p(e,[t]){1&t&&w(n,e[0]),2&t&&o(n,"invalid",e[1])},i:v,o:v,d(e){e&&b(t),q=!1,f(g)}}}function O(e,t,s){let n=x("quickLinks"),i=0
const l=()=>A(L(n)),a=()=>!l(),c=()=>y("quickLinks",n.trim())
return[n,i,a,function(){k("Quick Links Raw Editor","Save"),l()?c():s(1,i=1)},function(){k("Quick Links Raw Editor","Reset"),s(0,n="[]"),s(1,i=0),c()},function(){n=this.value,s(0,n)},()=>{s(1,i=a())},()=>{s(1,i=0)}]}class U extends t{constructor(e){super(),s(this,e,O,I,n,{})}}function Y(e){let t,s
return t=new C({props:{tabs:e[2],visible:e[0]}}),t.$on("close",e[1]),{c(){M(t.$$.fragment)},m(e,n){j(t,e,n),s=!0},p(e,[s]){const n={}
1&s&&(n.visible=e[0]),t.$set(n)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){Q(t.$$.fragment,e),s=!1},d(e){R(t,e)}}}function _(e,t,s){let{visible:n=!0}=t
const i=[{component:D,label:"Quick Links"},{component:U,label:"Raw Editor"}]
return e.$$set=e=>{"visible"in e&&s(0,n=e.visible)},[n,function(){k("Quick Links Manager","close"),s(0,n=!1)},i]}var F=class extends t{constructor(e){super(),s(this,e,_,Y,n,{visible:0})}}
const H={visible:!0}
let K=0
function V(){K=e(H,K,F)}export{V as default}
//# sourceMappingURL=quickLinksManager-b5258d6f.js.map
