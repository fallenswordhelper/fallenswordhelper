import{i as e}from"./instantiate-upFtXRx7.js"
import{S as t,L as s,M as n,N as i,O as l,P as a,a3 as c,Q as o,cg as v,T as u,U as d,X as r,_ as p,a0 as f,b6 as b,a1 as x,a2 as k,a4 as m,s as h,cl as g,a7 as w,W as L,ai as y,aU as j,ae as M,bj as q,bk as $,be as Q,bh as R,bl as C}from"./calfSystem-DKih1pr1.js"
import{M as S}from"./ModalTabbed-CCKWT8t5.js"
import{i as A}from"./isArray-eVldfhw1.js"
import"./ModalTitled-BLi7AAF4.js"
import"./Modal-BxEsJBuc.js"
function T(e,t,s){const n=e.slice()
return n[18]=t[s].name,n[19]=t[s].newWindow,n[20]=t[s].url,n[21]=t,n[22]=s,n}function W(e){let t,s,n,i,v,p,b,k,h,g,w,L,y,j,M,q=e[18]+"",$=e[20]+""
function Q(){e[8].call(k,e[21],e[22])}function R(){return e[9](e[22])}return{c(){t=l("div"),s=c(q),n=a(),i=l("div"),v=c($),p=a(),b=l("div"),k=l("input"),h=a(),g=l("div"),w=c("[\n        "),L=l("button"),L.textContent="Del",y=c("\n        ]\n      "),o(t,"class","svelte-v21x5p"),o(i,"class","svelte-v21x5p"),k.disabled=!0,o(k,"type","checkbox"),o(b,"class","centered svelte-v21x5p"),o(L,"type","button"),o(L,"class","svelte-v21x5p"),o(g,"class","buttons centered svelte-v21x5p")},m(l,a){u(l,t,a),d(t,s),u(l,n,a),u(l,i,a),d(i,v),u(l,p,a),u(l,b,a),d(b,k),k.checked=e[19],u(l,h,a),u(l,g,a),d(g,w),d(g,L),d(g,y),j||(M=[r(k,"change",Q),r(L,"click",R)],j=!0)},p(t,n){e=t,32&n&&q!==(q=e[18]+"")&&m(s,q),32&n&&$!==($=e[20]+"")&&m(v,$),32&n&&(k.checked=e[19])},d(e){e&&(f(t),f(n),f(i),f(p),f(b),f(h),f(g)),j=!1,x(M)}}}function E(e){let t,s,n,k,m,h,g,w,L,y,j,M,q,$,Q,R,C,S,A,E,N,U=i(e[5]),D=[]
for(let t=0;t<U.length;t+=1)D[t]=W(T(e,U,t))
return{c(){t=l("div"),s=l("div"),s.innerHTML='<div class="svelte-v21x5p">Name</div> <div class="svelte-v21x5p">URL</div> <div class="centered svelte-v21x5p">New\n      <div class="wrapper svelte-v21x5p">[\n        <div class="tooltip svelte-v21x5p"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div>\n        ]</div></div> <div class="centered svelte-v21x5p">Action</div>',n=a(),k=l("div")
for(let e=0;e<D.length;e+=1)D[e].c()
m=a(),h=l("div"),g=l("div"),w=l("input"),L=a(),y=l("div"),j=l("input"),M=a(),q=l("div"),$=l("input"),Q=a(),R=l("div"),C=c("[\n      "),S=l("button"),S.textContent="Add",A=c("\n      ]"),o(s,"class","grid headings svelte-v21x5p"),o(k,"class","grid items svelte-v21x5p"),o(w,"placeholder","Log"),w.required=!0,o(w,"type","text"),o(w,"class","svelte-v21x5p"),v(w,"invalid",e[1]),o(j,"placeholder","?cmd=log"),j.required=!0,o(j,"type","text"),o(j,"class","svelte-v21x5p"),v(j,"invalid",e[3]),o($,"type","checkbox"),o(q,"class","centered svelte-v21x5p"),o(S,"type","button"),o(S,"class","svelte-v21x5p"),o(R,"class","buttons centered svelte-v21x5p"),o(h,"class","grid add svelte-v21x5p"),o(t,"class","container svelte-v21x5p")},m(i,l){u(i,t,l),d(t,s),d(t,n),d(t,k)
for(let e=0;e<D.length;e+=1)D[e]&&D[e].m(k,null)
d(t,m),d(t,h),d(h,g),d(g,w),e[10](w),d(h,L),d(h,y),d(y,j),e[13](j),d(h,M),d(h,q),d(q,$),e[16]($),d(h,Q),d(h,R),d(R,C),d(R,S),d(R,A),E||(N=[r(w,"blur",e[11]),r(w,"focus",e[12]),r(j,"blur",e[14]),r(j,"focus",e[15]),r(S,"click",e[7])],E=!0)},p(e,[t]){if(96&t){let s
for(U=i(e[5]),s=0;s<U.length;s+=1){const n=T(e,U,s)
D[s]?D[s].p(n,t):(D[s]=W(n),D[s].c(),D[s].m(k,null))}for(;s<D.length;s+=1)D[s].d(1)
D.length=U.length}2&t&&v(w,"invalid",e[1]),8&t&&v(j,"invalid",e[3])},i:p,o:p,d(s){s&&f(t),b(D,s),e[10](null),e[13](null),e[16](null),E=!1,x(N)}}}function N(e,t,s){let n=0,i=0,l=0,a=0,c=0,o=k("quickLinks")||[]
function v(){w("quickLinks",o)}function u(e){h("Quick Links Manager","Delete Item"),s(5,o=o.toSpliced(e,1)),v()}return[n,i,l,a,c,o,u,function(){h("Quick Links Manager","Add Item"),i||a||(s(5,o=[...o,{name:n.value,url:l.value,newWindow:c.checked}]),s(0,n.value="",n),s(2,l.value="",l),s(4,c.checked=0,c),v())},function(e,t){e[t].newWindow=this.checked,s(5,o)},e=>u(e),function(e){g[e?"unshift":"push"]((()=>{n=e,s(0,n)}))},()=>{s(1,i=n.validity.valueMissing)},()=>{s(1,i=0)},function(e){g[e?"unshift":"push"]((()=>{l=e,s(2,l)}))},()=>{s(3,a=l.validity.valueMissing)},()=>{s(3,a=0)},function(e){g[e?"unshift":"push"]((()=>{c=e,s(4,c)}))}]}class U extends t{constructor(e){super(),s(this,e,N,E,n,{})}}function D(e){let t,s,n,i,c,b,k,m,h,g
return{c(){t=l("div"),s=l("div"),n=l("textarea"),i=a(),c=l("div"),b=l("button"),b.textContent="Save",k=a(),m=l("button"),m.textContent="Reset",o(n,"class","svelte-1cwjqvi"),v(n,"invalid",e[1]),o(s,"class","textContainer svelte-1cwjqvi"),o(b,"type","button"),o(m,"type","button"),o(c,"class","bottom svelte-1cwjqvi"),o(t,"class","container svelte-1cwjqvi")},m(l,a){u(l,t,a),d(t,s),d(s,n),L(n,e[0]),d(t,i),d(t,c),d(c,b),d(c,k),d(c,m),h||(g=[r(n,"input",e[5]),r(n,"blur",e[6]),r(n,"focus",e[7]),r(b,"click",e[3]),r(m,"click",e[4])],h=!0)},p(e,[t]){1&t&&L(n,e[0]),2&t&&v(n,"invalid",e[1])},i:p,o:p,d(e){e&&f(t),h=!1,x(g)}}}function I(e,t,s){let n=y("quickLinks"),i=0
const l=()=>A(j(n)),a=()=>!l(),c=()=>M("quickLinks",n.trim())
return[n,i,a,function(){h("Quick Links Raw Editor","Save"),l()?c():s(1,i=1)},function(){h("Quick Links Raw Editor","Reset"),s(0,n="[]"),s(1,i=0),c()},function(){n=this.value,s(0,n)},()=>{s(1,i=a())},()=>{s(1,i=0)}]}class O extends t{constructor(e){super(),s(this,e,I,D,n,{})}}function G(e){let t,s
return t=new S({props:{tabs:e[2],visible:e[0]}}),t.$on("close",e[1]),{c(){q(t.$$.fragment)},m(e,n){$(t,e,n),s=!0},p(e,[s]){const n={}
1&s&&(n.visible=e[0]),t.$set(n)},i(e){s||(Q(t.$$.fragment,e),s=!0)},o(e){R(t.$$.fragment,e),s=!1},d(e){C(t,e)}}}function H(e,t,s){let{visible:n=!0}=t
const i=[{component:U,label:"Quick Links"},{component:O,label:"Raw Editor"}]
return e.$$set=e=>{"visible"in e&&s(0,n=e.visible)},[n,function(){h("Quick Links Manager","close"),s(0,n=!1)},i]}var P=class extends t{constructor(e){super(),s(this,e,H,G,n,{visible:0})}}
const X={visible:!0}
let _=0
function z(){_=e(X,_,P)}export{z as default}
//# sourceMappingURL=quickLinksManager-DDieeY21.js.map
