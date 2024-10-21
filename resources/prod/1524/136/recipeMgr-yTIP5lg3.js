import{i as t}from"./instantiate-upFtXRx7.js"
import{S as e,L as n,M as i,bj as s,bk as a,be as r,bh as l,bl as o,am as c,T as d,a0 as m,a3 as p,O as f,b5 as u,aQ as g,s as v,bu as b,_ as h,bf as $,bg as y,e as k,k as w,as as x,N as C,P as j,Q as _,U as M,Z as N,a5 as S,aP as L,dt as P,X as E,a4 as H,b6 as R,a1 as U,f as q,ai as B,b0 as I,q as T,at as Q,aS as z,K as A}from"./calfSystem-CUgWHLtG.js"
import{h as D,u as F}from"./await_block-DpKGh93y.js"
import{d as G}from"./daComponents-CEl-gM6u.js"
import{d as J}from"./daLoadInventory-zWI1CPKh.js"
import{f as K}from"./flattenItems-C4pfIrZn.js"
import{a as O}from"./all-YfMtr2SN.js"
import{c as X}from"./csvSplit-j_Yd0L1s.js"
import{i as Z}from"./isArray-eVldfhw1.js"
import{L as V}from"./LinkButton-C46P8xIn.js"
import{L as W}from"./LinkButtonBracketed-BlDtzj6I.js"
import{u as Y}from"./uniq-Dzsj1uso.js"
import{M as tt}from"./ModalTitled-DwG8wP1C.js"
import"./Modal-BIzCdrcz.js"
function et(t,e,n){const i=t.slice()
return i[50]=e[n][0],i[51]=e[n][1],i[52]=e[n][2],i[53]=e[n][3],i[54]=e[n][4],i[55]=e[n][5][0],i[56]=e[n][5][1],i[49]=n,i}function nt(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function it(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function st(t,e,n){const i=t.slice()
return i[47]=e[n],i[49]=n,i}function at(t){let e
return{c(){e=f("p"),e.textContent=`${t[65].message}`,u(e,"color","red")},m(t,n){d(t,e,n)},p:h,i:h,o:h,d(t){t&&m(e)}}}function rt(t){let e,n,i,s
const a=[ot,lt],o=[]
function p(t,e){return t[3].length?0:t[4]?1:-1}return~(e=p(t))&&(n=o[e]=a[e](t)),{c(){n&&n.c(),i=c()},m(t,n){~e&&o[e].m(t,n),d(t,i,n),s=!0},p(t,s){let c=e
e=p(t),e===c?~e&&o[e].p(t,s):(n&&($(),l(o[c],1,1,(()=>{o[c]=null})),y()),~e?(n=o[e],n?n.p(t,s):(n=o[e]=a[e](t),n.c()),r(n,1),n.m(i.parentNode,i)):n=null)},i(t){s||(r(n),s=!0)},o(t){l(n),s=!1},d(t){t&&m(i),~e&&o[e].d(t)}}}function lt(t){let e,n,i,c,p,g,v,b,h,$,y,k,w,x,L=[],P=new Map
p=new V({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),p.$on("click",t[6])
let E=C(t[4])
const H=t=>t[49]
for(let e=0;e<E.length;e+=1){let n=et(t,E,e),i=H(n)
P.set(i,L[e]=pt(i,n))}return{c(){e=f("div"),n=f("div"),n.textContent="Recipe",i=j(),c=f("div"),g=f("div"),s(p.$$.fragment),v=j(),b=f("div"),b.textContent="Items",h=j(),$=f("div"),$.textContent="Components",y=j(),k=f("div"),k.textContent="Target",w=j()
for(let t=0;t<L.length;t+=1)L[t].c()
_(n,"class","innerColumnHeader item-container svelte-yrdlsb"),u(g,"display","contents"),u(g,"--button-color","#383838"),_(c,"class","innerColumnHeader item-container svelte-yrdlsb"),_(b,"class","innerColumnHeader item-container svelte-yrdlsb"),_($,"class","innerColumnHeader item-container svelte-yrdlsb"),_(k,"class","innerColumnHeader item-container svelte-yrdlsb"),_(e,"class","recipes ui-widget-content svelte-yrdlsb")},m(t,s){d(t,e,s),M(e,n),M(e,i),M(e,c),M(c,g),a(p,g,null),M(e,v),M(e,b),M(e,h),M(e,$),M(e,y),M(e,k),M(e,w)
for(let t=0;t<L.length;t+=1)L[t]&&L[t].m(e,null)
x=!0},p(t,n){const i={}
16&n[2]&&(i.$$scope={dirty:n,ctx:t}),p.$set(i),278&n[0]&&(E=C(t[4]),L=N(L,n,H,1,t,E,P,e,S,pt,null,et))},i(t){x||(r(p.$$.fragment,t),x=!0)},o(t){l(p.$$.fragment,t),x=!1},d(t){t&&m(e),o(p)
for(let t=0;t<L.length;t+=1)L[t].d()}}}function ot(t){let e,n=[],i=new Map,s=C(t[3])
const a=t=>t[49]
for(let e=0;e<s.length;e+=1){let r=st(t,s,e),l=a(r)
i.set(l,n[e]=ft(l,r))}return{c(){e=f("div")
for(let t=0;t<n.length;t+=1)n[t].c()
_(e,"class","progress-log svelte-yrdlsb")},m(t,i){d(t,e,i)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(t,r){8&r[0]&&(s=C(t[3]),n=N(n,r,a,1,t,s,i,e,S,ft,null,st))},i:h,o:h,d(t){t&&m(e)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function ct(t){let e
return{c(){e=p("Name")},m(t,n){d(t,e,n)},d(t){t&&m(e)}}}function dt(t){let e,n,i,s,a,r,l,o,c,g=`url('${L}items/${t[58]}.gif')`,v=(t[2][t[58]]??0)+"",b=t[60]+""
return{c(){e=f("div"),n=f("div"),s=j(),a=f("div"),r=p(v),l=p("/"),o=p(b),c=j(),_(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),_(n,"class","small-image tip-dynamic svelte-yrdlsb"),u(n,"background-image",g)},m(t,i){d(t,e,i),M(e,n),M(e,s),M(e,a),M(a,r),M(a,l),M(a,o),M(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&_(n,"data-tipped",i),16&e[0]&&g!==(g=`url('${L}items/${t[58]}.gif')`)&&u(n,"background-image",g),20&e[0]&&v!==(v=(t[2][t[58]]??0)+"")&&H(r,v),16&e[0]&&b!==(b=t[60]+"")&&H(o,b)},d(t){t&&m(e)}}}function mt(t){let e,n,i,s,a,r,l,o,c,g=`url('${L}items/${t[58]}.gif')`,v=(t[1][t[58]]??0)+"",b=t[60]+""
return{c(){e=f("div"),n=f("div"),s=j(),a=f("div"),r=p(v),l=p("/"),o=p(b),c=j(),_(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),_(n,"class","small-image tip-dynamic svelte-yrdlsb"),u(n,"background-image",g)},m(t,i){d(t,e,i),M(e,n),M(e,s),M(e,a),M(a,r),M(a,l),M(a,o),M(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&_(n,"data-tipped",i),16&e[0]&&g!==(g=`url('${L}items/${t[58]}.gif')`)&&u(n,"background-image",g),18&e[0]&&v!==(v=(t[1][t[58]]??0)+"")&&H(r,v),16&e[0]&&b!==(b=t[60]+"")&&H(o,b)},d(t){t&&m(e)}}}function pt(t,e){let n,i,s,a,r,l,o,c,g,v,b,h,$,y,k,w,x,N,S,q,B=`url('${L}recipes/${e[52]}')`,I=e[51]+"",T=`url('${L}items/${e[55]}.gif')`,Q=C(e[53]),z=[]
for(let t=0;t<Q.length;t+=1)z[t]=dt(it(e,Q,t))
let A=C(e[54]),D=[]
for(let t=0;t<A.length;t+=1)D[t]=mt(nt(e,A,t))
return{key:t,first:null,c(){n=f("div"),i=f("a"),s=f("div"),r=j(),l=f("div"),o=f("a"),c=p(I),v=j(),b=f("div")
for(let t=0;t<z.length;t+=1)z[t].c()
h=j(),$=f("div")
for(let t=0;t<D.length;t+=1)D[t].c()
y=j(),k=f("div"),w=f("div"),N=j(),_(s,"class","image svelte-yrdlsb"),u(s,"background-image",B),_(i,"href",a=""+(P+e[50])),_(i,"class","svelte-yrdlsb"),_(n,"class","item-container svelte-yrdlsb"),_(o,"href",g=""+(P+e[50])),_(o,"class","svelte-yrdlsb"),_(l,"class","item-container svelte-yrdlsb"),_(b,"class","item-container svelte-yrdlsb"),_($,"class","item-container svelte-yrdlsb"),_(w,"data-tipped",x="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56]),_(w,"class","image tip-dynamic svelte-yrdlsb"),u(w,"background-image",T),_(k,"class","item-container svelte-yrdlsb"),this.first=n},m(t,a){d(t,n,a),M(n,i),M(i,s),d(t,r,a),d(t,l,a),M(l,o),M(o,c),d(t,v,a),d(t,b,a)
for(let t=0;t<z.length;t+=1)z[t]&&z[t].m(b,null)
d(t,h,a),d(t,$,a)
for(let t=0;t<D.length;t+=1)D[t]&&D[t].m($,null)
d(t,y,a),d(t,k,a),M(k,w),M(k,N),S||(q=[E(i,"click",e[8]),E(o,"click",e[8])],S=!0)},p(t,n){if(e=t,16&n[0]&&B!==(B=`url('${L}recipes/${e[52]}')`)&&u(s,"background-image",B),16&n[0]&&a!==(a=""+(P+e[50]))&&_(i,"href",a),16&n[0]&&I!==(I=e[51]+"")&&H(c,I),16&n[0]&&g!==(g=""+(P+e[50]))&&_(o,"href",g),20&n[0]){let t
for(Q=C(e[53]),t=0;t<Q.length;t+=1){const i=it(e,Q,t)
z[t]?z[t].p(i,n):(z[t]=dt(i),z[t].c(),z[t].m(b,null))}for(;t<z.length;t+=1)z[t].d(1)
z.length=Q.length}if(18&n[0]){let t
for(A=C(e[54]),t=0;t<A.length;t+=1){const i=nt(e,A,t)
D[t]?D[t].p(i,n):(D[t]=mt(i),D[t].c(),D[t].m($,null))}for(;t<D.length;t+=1)D[t].d(1)
D.length=A.length}16&n[0]&&x!==(x="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56])&&_(w,"data-tipped",x),16&n[0]&&T!==(T=`url('${L}items/${e[55]}.gif')`)&&u(w,"background-image",T)},d(t){t&&(m(n),m(r),m(l),m(v),m(b),m(h),m($),m(y),m(k)),R(z,t),R(D,t),S=!1,U(q)}}}function ft(t,e){let n,i,s,a=e[47]+""
return{key:t,first:null,c(){n=p(a),i=j(),s=f("br"),this.first=n},m(t,e){d(t,n,e),d(t,i,e),d(t,s,e)},p(t,i){e=t,8&i[0]&&a!==(a=e[47]+"")&&H(n,a)},d(t){t&&(m(n),m(i),m(s))}}}function ut(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function gt(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!0,pending:ut,then:rt,catch:at,error:65,blocks:[,,,]}
return D(t[7](),i),{c(){e=c(),i.block.c()},m(t,s){d(t,e,s),i.block.m(t,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(e,n){F(i,t=e,n)},i(t){n||(r(i.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t]
l(e)}n=!1},d(t){t&&m(e),i.block.d(t),i.token=null,i=null}}}function vt(t){let e
return{c(){e=p("Refresh")},m(t,n){d(t,e,n)},d(t){t&&m(e)}}}function bt(t){let e,n,i,c
return n=new W({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=p("Recipe Manager\n    "),i=f("div"),s(n.$$.fragment),u(i,"display","contents"),u(i,"--button-color","#494437"),u(i,"--button-size","10px")},m(t,s){d(t,e,s),d(t,i,s),a(n,i,null),c=!0},p(t,e){const i={}
16&e[2]&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){c||(r(n.$$.fragment,t),c=!0)},o(t){l(n.$$.fragment,t),c=!1},d(t){t&&m(e),t&&n&&m(i),o(n,t)}}}function ht(t){let e,n
return e=new tt({props:{visible:t[0],$$slots:{title:[bt],default:[gt]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){s(e.$$.fragment)},m(t,i){a(e,t,i),n=!0},p(t,n){const i={}
1&n[0]&&(i.visible=t[0]),30&n[0]|16&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(r(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){o(e,t)}}}function $t(t,e,n){let{visible:i=!0}=e,s={},a={},r=[],l=[],o=1
function c(t){v("Recipe Manager",t)}const d=(t=-1,e=0)=>k({cmd:"inventing",folder_id:t,page:e}),m=([,t],[,e])=>o*b(t,e)
function p(t){n(3,r=t.concat(r))}const f=(t,e)=>w(`#pCC td[background*="${e}"]`,t).map((t=>[t.children[0].children[0].dataset.tipped.split(/[?&=]/),t.parentNode.nextElementSibling])).map((([t,e])=>[t[2],t[10],...e?[Number(x(e).split("/")[1])]:[]]))
async function u([t,e,n]){const i=await k({cmd:"inventing",subcmd:"viewrecipe",recipe_id:t})
return p([`Parsing blueprint ${e}...`]),i?[t,e,n,f(i,"/inventory/2x3."),f(i,"/inventory/1x1mini."),...f(i,"/hellforge/2x3.")]:[t,e,n]}const h=t=>{return q(Y(t).map((e=t,t=>[t,e.filter((e=>e===t)).length])))
var e}
async function $(){p(["Updating inventory."])
const t=await J()
if(t?.s){const e=K(t.r).map((({b:t})=>t))
n(2,a=h(e))}else p("No inventory.")}async function y(){p(["Updating components."])
const t=await G()
if(Z(t.r)){const e=t.r.map((({b:t})=>t))
n(1,s=h(e))}else p("No components.")}async function C(){await O([$(),y()]),n(3,r=[])}async function j([t,e]){const n=t.split("=").at(-1),i=await d(n)
return p([`Parsing folder "${e}"...`]),[n,i]}const _=t=>t,M=t=>I(A('#pCC a[href*="&recipe_id="]',t)),N=t=>[t.href.split("=").at(-1),x(t),t.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],S=(t,e)=>t.some((t=>e=>e===t)(e)),L=t=>([,e])=>S(t,e),P=t=>([,e])=>!S(t,e),E=t=>t.map((([,t])=>`Skipping blueprint "${t}" as it is hidden.`)),H=t=>t.map((([,t])=>`Found blueprint "${t}".`))
function R(t){const e=X(B("hideRecipeNames")),i=t.filter(_).flatMap(M).map(N)
p(E(i.filter(L(e))))
const s=i.filter(P(e))
p(H(s)),async function(t){n(4,l=await O(t.map(u))),z("fsh_recipeMgr",l),C()}(s)}const U=([,t])=>t,D=([t,e])=>[t,I(T('#pCC select[name="page"]',e).options).slice(1).map((t=>t.value))],F=([,t])=>t.length,V=([t,e])=>e.map((e=>[t,e])),W=([t,e])=>d(t,e)
const tt=t=>Q(t).includes("quest"),et=([,t])=>tt(t),nt=t=>t.filter(et).map((([,t])=>`Skipping folder "${t}" as it has the word "quest" in folder name.`)),it=([,t])=>!tt(t),st=([t,e])=>[t.previousElementSibling.children[0].href,e]
function at(t){p(['Parsing folder "Unassigned"...'])
const e=w('div[id^="folder_name_"]',t).map((t=>[t,x(t)]))
p(nt(e))
!async function(t){const e=await O(t),n=e.filter(U).map(D).filter(F).flatMap(V).map(W),i=await O(n)
R(e.map((([,t])=>t)).concat(i))}([["-1",t],...e.filter(it).map(st).map(j)])}async function rt(){n(3,r=["Parsing inventing screen ..."])
const t=await d()
t?at(t):p(["Server Error."])}return t.$$set=t=>{"visible"in t&&n(0,i=t.visible)},[i,s,a,r,l,function(){c("close"),n(0,i=!1)},function(){c("sort by name"),n(4,l=l.slice().sort(m)),o*=-1},async function(){const t=await g("fsh_recipeMgr")
t||rt(),n(4,l=t),C()},function(){c("Navigate to recipe")},function(){c("refresh button"),rt()}]}class yt extends e{constructor(t){super(),n(this,t,$t,ht,i,{visible:0},null,[-1,-1,-1])}}const kt={visible:!0}
let wt=0
function xt(){wt=t(kt,wt,yt)}export{xt as default}
//# sourceMappingURL=recipeMgr-yTIP5lg3.js.map
