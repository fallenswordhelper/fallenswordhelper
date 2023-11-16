import{i as e}from"./instantiate-zhKnqr-J.js"
import{S as t,J as s,K as n,L as i,M as l,_ as a,N as c,c3 as o,P as v,Q as u,U as d,W as r,X as p,aY as f,Y as b,Z as m,a0 as x,s as h,c8 as k,a2 as g,T as w,ad as L,aK as y,a9 as j,b9 as M,ba as q,b4 as $,b7 as Q,bb as R}from"./calfSystem-dEoRVG2S.js"
import{M as C}from"./ModalTabbed-aZfDttUP.js"
import{e as S}from"./each-rfoBEd-I.js"
import{i as A}from"./isArray-bNviZzJA.js"
import"./ModalTitled-TC2wuLwx.js"
import"./Modal-9pDKNTPt.js"
function T(e,t,s){const n=e.slice()
return n[18]=t[s].name,n[19]=t[s].newWindow,n[20]=t[s].url,n[21]=t,n[22]=s,n}function W(e){let t,s,n,o,r,f,m,h,k,g,w,L,y,j,M,q=e[18]+"",$=e[20]+""
function Q(){e[8].call(h,e[21],e[22])}function R(){return e[9](e[22])}return{c(){t=i("div"),s=a(q),n=l(),o=i("div"),r=a($),f=l(),m=i("div"),h=i("input"),k=l(),g=i("div"),w=a("[\n        "),L=i("button"),L.textContent="Del",y=a("\n        ]\n      "),c(t,"class","svelte-v21x5p"),c(o,"class","svelte-v21x5p"),h.disabled=!0,c(h,"type","checkbox"),c(m,"class","centered svelte-v21x5p"),c(L,"type","button"),c(L,"class","svelte-v21x5p"),c(g,"class","buttons centered svelte-v21x5p")},m(i,l){v(i,t,l),u(t,s),v(i,n,l),v(i,o,l),u(o,r),v(i,f,l),v(i,m,l),u(m,h),h.checked=e[19],v(i,k,l),v(i,g,l),u(g,w),u(g,L),u(g,y),j||(M=[d(h,"change",Q),d(L,"click",R)],j=!0)},p(t,n){e=t,32&n&&q!==(q=e[18]+"")&&x(s,q),32&n&&$!==($=e[20]+"")&&x(r,$),32&n&&(h.checked=e[19])},d(e){e&&(p(t),p(n),p(o),p(f),p(m),p(k),p(g)),j=!1,b(M)}}}function E(e){let t,s,n,m,x,h,k,g,w,L,y,j,M,q,$,Q,R,C,A,E,N,Y=S(e[5]),D=[]
for(let t=0;t<Y.length;t+=1)D[t]=W(T(e,Y,t))
return{c(){t=i("div"),s=i("div"),s.innerHTML='<div class="svelte-v21x5p">Name</div> <div class="svelte-v21x5p">URL</div> <div class="centered svelte-v21x5p">New\n      <div class="wrapper svelte-v21x5p">[\n        <div class="tooltip svelte-v21x5p"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div>\n        ]</div></div> <div class="centered svelte-v21x5p">Action</div>',n=l(),m=i("div")
for(let e=0;e<D.length;e+=1)D[e].c()
x=l(),h=i("div"),k=i("div"),g=i("input"),w=l(),L=i("div"),y=i("input"),j=l(),M=i("div"),q=i("input"),$=l(),Q=i("div"),R=a("[\n      "),C=i("button"),C.textContent="Add",A=a("\n      ]"),c(s,"class","grid headings svelte-v21x5p"),c(m,"class","grid items svelte-v21x5p"),c(g,"placeholder","Log"),g.required=!0,c(g,"type","text"),c(g,"class","svelte-v21x5p"),o(g,"invalid",e[1]),c(y,"placeholder","?cmd=log"),y.required=!0,c(y,"type","text"),c(y,"class","svelte-v21x5p"),o(y,"invalid",e[3]),c(q,"type","checkbox"),c(M,"class","centered svelte-v21x5p"),c(C,"type","button"),c(C,"class","svelte-v21x5p"),c(Q,"class","buttons centered svelte-v21x5p"),c(h,"class","grid add svelte-v21x5p"),c(t,"class","container svelte-v21x5p")},m(i,l){v(i,t,l),u(t,s),u(t,n),u(t,m)
for(let e=0;e<D.length;e+=1)D[e]&&D[e].m(m,null)
u(t,x),u(t,h),u(h,k),u(k,g),e[10](g),u(h,w),u(h,L),u(L,y),e[13](y),u(h,j),u(h,M),u(M,q),e[16](q),u(h,$),u(h,Q),u(Q,R),u(Q,C),u(Q,A),E||(N=[d(g,"blur",e[11]),d(g,"focus",e[12]),d(y,"blur",e[14]),d(y,"focus",e[15]),d(C,"click",e[7])],E=!0)},p(e,[t]){if(96&t){let s
for(Y=S(e[5]),s=0;s<Y.length;s+=1){const n=T(e,Y,s)
D[s]?D[s].p(n,t):(D[s]=W(n),D[s].c(),D[s].m(m,null))}for(;s<D.length;s+=1)D[s].d(1)
D.length=Y.length}2&t&&o(g,"invalid",e[1]),8&t&&o(y,"invalid",e[3])},i:r,o:r,d(s){s&&p(t),f(D,s),e[10](null),e[13](null),e[16](null),E=!1,b(N)}}}function N(e,t,s){let n=0,i=0,l=0,a=0,c=0,o=m("quickLinks")||[]
function v(){g("quickLinks",o)}function u(e){h("Quick Links Manager","Delete Item"),s(5,o=o.toSpliced(e,1)),v()}return[n,i,l,a,c,o,u,function(){h("Quick Links Manager","Add Item"),i||a||(s(5,o=[...o,{name:n.value,url:l.value,newWindow:c.checked}]),s(0,n.value="",n),s(2,l.value="",l),s(4,c.checked=0,c),v())},function(e,t){e[t].newWindow=this.checked,s(5,o)},e=>u(e),function(e){k[e?"unshift":"push"]((()=>{n=e,s(0,n)}))},()=>{s(1,i=n.validity.valueMissing)},()=>{s(1,i=0)},function(e){k[e?"unshift":"push"]((()=>{l=e,s(2,l)}))},()=>{s(3,a=l.validity.valueMissing)},()=>{s(3,a=0)},function(e){k[e?"unshift":"push"]((()=>{c=e,s(4,c)}))}]}class Y extends t{constructor(e){super(),s(this,e,N,E,n,{})}}function D(e){let t,s,n,a,f,m,x,h,k,g
return{c(){t=i("div"),s=i("div"),n=i("textarea"),a=l(),f=i("div"),m=i("button"),m.textContent="Save",x=l(),h=i("button"),h.textContent="Reset",c(n,"class","svelte-1cwjqvi"),o(n,"invalid",e[1]),c(s,"class","textContainer svelte-1cwjqvi"),c(m,"type","button"),c(h,"type","button"),c(f,"class","bottom svelte-1cwjqvi"),c(t,"class","container svelte-1cwjqvi")},m(i,l){v(i,t,l),u(t,s),u(s,n),w(n,e[0]),u(t,a),u(t,f),u(f,m),u(f,x),u(f,h),k||(g=[d(n,"input",e[5]),d(n,"blur",e[6]),d(n,"focus",e[7]),d(m,"click",e[3]),d(h,"click",e[4])],k=!0)},p(e,[t]){1&t&&w(n,e[0]),2&t&&o(n,"invalid",e[1])},i:r,o:r,d(e){e&&p(t),k=!1,b(g)}}}function I(e,t,s){let n=L("quickLinks"),i=0
const l=()=>A(y(n)),a=()=>!l(),c=()=>j("quickLinks",n.trim())
return[n,i,a,function(){h("Quick Links Raw Editor","Save"),l()?c():s(1,i=1)},function(){h("Quick Links Raw Editor","Reset"),s(0,n="[]"),s(1,i=0),c()},function(){n=this.value,s(0,n)},()=>{s(1,i=a())},()=>{s(1,i=0)}]}class K extends t{constructor(e){super(),s(this,e,I,D,n,{})}}function U(e){let t,s
return t=new C({props:{tabs:e[2],visible:e[0]}}),t.$on("close",e[1]),{c(){M(t.$$.fragment)},m(e,n){q(t,e,n),s=!0},p(e,[s]){const n={}
1&s&&(n.visible=e[0]),t.$set(n)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){Q(t.$$.fragment,e),s=!1},d(e){R(t,e)}}}function F(e,t,s){let{visible:n=!0}=t
const i=[{component:Y,label:"Quick Links"},{component:K,label:"Raw Editor"}]
return e.$$set=e=>{"visible"in e&&s(0,n=e.visible)},[n,function(){h("Quick Links Manager","close"),s(0,n=!1)},i]}var H=class extends t{constructor(e){super(),s(this,e,F,U,n,{visible:0})}}
const J={visible:!0}
let O=0
function P(){O=e(J,O,H)}export{P as default}
//# sourceMappingURL=quickLinksManager-3nqHdoz4.js.map
