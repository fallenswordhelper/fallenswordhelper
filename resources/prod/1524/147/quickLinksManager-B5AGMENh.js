import{S as e,P as t,Q as s,R as i,T as n,U as l,bq as a,V as c,c_ as d,_ as o,a0 as r,a1 as u,a3 as v,a4 as k,a9 as h,a5 as b,a7 as p,a8 as f,s as x,d1 as m,ab as g,Z as w,aq as L,I as y,al as $,bb as M,bJ as q,bD as R,bE as Q,bK as C,bL as S,dR as E}from"./calfSystem-BAeDn21M.js"
import{M as T}from"./ModalTabbed-BTncYupG.js"
import"./ModalTitled-BSDwuZlT.js"
function j(e,t,s){const i=e.slice()
return i[18]=t[s].name,i[19]=t[s].newWindow,i[20]=t[s].url,i[21]=t,i[22]=s,i}function A(e){let t,s,i,n,a,d,p,x,m,g,w,L,y,$,M,q=e[18]+"",R=e[20]+""
function Q(){e[8].call(x,e[21],e[22])}function C(){return e[9](e[22])}return{c(){t=v("div"),s=h(q),i=k(),n=v("div"),a=h(R),d=k(),p=v("div"),x=v("input"),m=k(),g=v("div"),w=h("[\n        "),L=v("button"),L.textContent="Del",y=h("\n        ]\n      "),b(t,"class","svelte-dkxhir"),b(n,"class","svelte-dkxhir"),x.disabled=!0,b(x,"type","checkbox"),b(p,"class","centered svelte-dkxhir"),b(L,"type","button"),b(L,"class","svelte-dkxhir"),b(g,"class","buttons centered svelte-dkxhir")},m(l,c){o(l,t,c),r(t,s),o(l,i,c),o(l,n,c),r(n,a),o(l,d,c),o(l,p,c),r(p,x),x.checked=e[19],o(l,m,c),o(l,g,c),r(g,w),r(g,L),r(g,y),$||(M=[u(x,"change",Q),u(L,"click",C)],$=!0)},p(t,i){e=t,32&i&&q!==(q=e[18]+"")&&f(s,q),32&i&&R!==(R=e[20]+"")&&f(a,R),32&i&&(x.checked=e[19])},d(e){e&&(l(t),l(i),l(n),l(d),l(p),l(m),l(g)),$=!1,c(M)}}}function D(e){let t,s,p,f,x,m,g,w,L,y,$,M,q,R,Q,C,S,E,T,D,I,W=i(e[5]),N=[]
for(let t=0;t<W.length;t+=1)N[t]=A(j(e,W,t))
return{c(){t=v("div"),s=v("div"),s.innerHTML='<div class="svelte-dkxhir">Name</div> <div class="svelte-dkxhir">URL</div> <div class="centered svelte-dkxhir">New\n      <div class="wrapper svelte-dkxhir">[\n        <div class="tooltip svelte-dkxhir"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div>\n        ]</div></div> <div class="centered svelte-dkxhir">Action</div>',p=k(),f=v("div")
for(let e=0;e<N.length;e+=1)N[e].c()
x=k(),m=v("div"),g=v("div"),w=v("input"),L=k(),y=v("div"),$=v("input"),M=k(),q=v("div"),R=v("input"),Q=k(),C=v("div"),S=h("[\n      "),E=v("button"),E.textContent="Add",T=h("\n      ]"),b(s,"class","grid headings svelte-dkxhir"),b(f,"class","grid items svelte-dkxhir"),b(w,"placeholder","Log"),w.required=!0,b(w,"type","text"),b(w,"class","svelte-dkxhir"),d(w,"invalid",e[1]),b($,"placeholder","?cmd=log"),$.required=!0,b($,"type","text"),b($,"class","svelte-dkxhir"),d($,"invalid",e[3]),b(R,"type","checkbox"),b(q,"class","centered svelte-dkxhir"),b(E,"type","button"),b(E,"class","svelte-dkxhir"),b(C,"class","buttons centered svelte-dkxhir"),b(m,"class","grid add svelte-dkxhir"),b(t,"class","container svelte-dkxhir")},m(i,n){o(i,t,n),r(t,s),r(t,p),r(t,f)
for(let e=0;e<N.length;e+=1)N[e]&&N[e].m(f,null)
r(t,x),r(t,m),r(m,g),r(g,w),e[10](w),r(m,L),r(m,y),r(y,$),e[13]($),r(m,M),r(m,q),r(q,R),e[16](R),r(m,Q),r(m,C),r(C,S),r(C,E),r(C,T),D||(I=[u(w,"blur",e[11]),u(w,"focus",e[12]),u($,"blur",e[14]),u($,"focus",e[15]),u(E,"click",e[7])],D=!0)},p(e,[t]){if(96&t){let s
for(W=i(e[5]),s=0;s<W.length;s+=1){const i=j(e,W,s)
N[s]?N[s].p(i,t):(N[s]=A(i),N[s].c(),N[s].m(f,null))}for(;s<N.length;s+=1)N[s].d(1)
N.length=W.length}2&t&&d(w,"invalid",e[1]),8&t&&d($,"invalid",e[3])},i:n,o:n,d(s){s&&l(t),a(N,s),e[10](null),e[13](null),e[16](null),D=!1,c(I)}}}function I(e,t,s){let i=0,n=0,l=0,a=0,c=0,d=p("quickLinks")||[]
function o(){g("quickLinks",d)}function r(e){x("Quick Links Manager","Delete Item"),s(5,d=d.toSpliced(e,1)),o()}return[i,n,l,a,c,d,r,function(){x("Quick Links Manager","Add Item"),n||a||(s(5,d=[...d,{name:i.value,url:l.value,newWindow:c.checked}]),s(0,i.value="",i),s(2,l.value="",l),s(4,c.checked=0,c),o())},function(e,t){e[t].newWindow=this.checked,s(5,d)},e=>r(e),function(e){m[e?"unshift":"push"]((()=>{i=e,s(0,i)}))},()=>{s(1,n=i.validity.valueMissing)},()=>{s(1,n=0)},function(e){m[e?"unshift":"push"]((()=>{l=e,s(2,l)}))},()=>{s(3,a=l.validity.valueMissing)},()=>{s(3,a=0)},function(e){m[e?"unshift":"push"]((()=>{c=e,s(4,c)}))}]}class W extends e{constructor(e){super(),t(this,e,I,D,s,{})}}function N(e){let t,s,i,a,h,p,f,x,m,g
return{c(){t=v("div"),s=v("div"),i=v("textarea"),a=k(),h=v("div"),p=v("button"),p.textContent="Save",f=k(),x=v("button"),x.textContent="Reset",b(i,"class","svelte-atd1b8"),d(i,"invalid",e[1]),b(s,"class","textContainer svelte-atd1b8"),b(p,"type","button"),b(x,"type","button"),b(h,"class","bottom svelte-atd1b8"),b(t,"class","container svelte-atd1b8")},m(n,l){o(n,t,l),r(t,s),r(s,i),w(i,e[0]),r(t,a),r(t,h),r(h,p),r(h,f),r(h,x),m||(g=[u(i,"input",e[5]),u(i,"blur",e[6]),u(i,"focus",e[7]),u(p,"click",e[3]),u(x,"click",e[4])],m=!0)},p(e,[t]){1&t&&w(i,e[0]),2&t&&d(i,"invalid",e[1])},i:n,o:n,d(e){e&&l(t),m=!1,c(g)}}}function U(e,t,s){let i=L("quickLinks"),n=0
const l=()=>y(M(i)),a=()=>!l(),c=()=>$("quickLinks",i.trim())
return[i,n,a,function(){x("Quick Links Raw Editor","Save"),l()?c():s(1,n=1)},function(){x("Quick Links Raw Editor","Reset"),s(0,i="[]"),s(1,n=0),c()},function(){i=this.value,s(0,i)},()=>{s(1,n=a())},()=>{s(1,n=0)}]}class _ extends e{constructor(e){super(),t(this,e,U,N,s,{})}}function H(e){let t,s
return t=new T({props:{tabs:e[2],visible:e[0]}}),t.$on("close",e[1]),{c(){S(t.$$.fragment)},m(e,i){C(t,e,i),s=!0},p(e,[s]){const i={}
1&s&&(i.visible=e[0]),t.$set(i)},i(e){s||(Q(t.$$.fragment,e),s=!0)},o(e){R(t.$$.fragment,e),s=!1},d(e){q(t,e)}}}function J(e,t,s){let{visible:i=!0}=t
const n=[{component:W,label:"Quick Links"},{component:_,label:"Raw Editor"}]
return e.$$set=e=>{"visible"in e&&s(0,i=e.visible)},[i,function(){x("Quick Links Manager","close"),s(0,i=!1)},n]}class K extends e{constructor(e){super(),t(this,e,J,H,s,{visible:0})}}const O={visible:!0}
let P=0
function V(){P=E(O,P,K)}export{V as default}
//# sourceMappingURL=quickLinksManager-B5AGMENh.js.map
