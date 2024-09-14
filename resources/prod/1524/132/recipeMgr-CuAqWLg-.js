import{i as t}from"./instantiate-upFtXRx7.js"
import{S as e,L as n,M as i,bj as s,bk as a,be as o,bh as r,bl as l,am as c,T as m,a0 as p,a3 as d,O as f,b5 as u,aQ as h,s as g,bu as v,_ as b,bf as $,bg as k,e as y,k as w,as as x,N as C,P as j,Q as _,U as M,Z as N,a5 as S,aP as L,dt as P,X as E,a4 as H,b6 as R,a1 as U,f as q,ai as B,b0 as I,q as T,at as Q,aS as z,K as A}from"./calfSystem-Dh7h0wep.js"
import{h as D,u as F}from"./await_block-DCjdH8ci.js"
import{d as G}from"./daComponents-BF7zvmM0.js"
import{d as J}from"./daLoadInventory-C6ZDMtPr.js"
import{f as K}from"./flattenItems-C4pfIrZn.js"
import{a as O}from"./all-YfMtr2SN.js"
import{c as X}from"./csvSplit-Cunw4Oqp.js"
import{i as Z}from"./isArray-eVldfhw1.js"
import{L as V}from"./LinkButton-Ln28W4pK.js"
import{L as W}from"./LinkButtonBracketed-D70VkPkx.js"
import{u as Y}from"./uniq-DV6HbVsY.js"
import{M as tt}from"./ModalTitled-BHO4qPf4.js"
import"./Modal-BjUHjI3V.js"
function et(t,e,n){const i=t.slice()
return i[50]=e[n][0],i[51]=e[n][1],i[52]=e[n][2],i[53]=e[n][3],i[54]=e[n][4],i[55]=e[n][5][0],i[56]=e[n][5][1],i[49]=n,i}function nt(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function it(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function st(t,e,n){const i=t.slice()
return i[47]=e[n],i[49]=n,i}function at(t){let e
return{c(){e=f("p"),e.textContent=`${t[65].message}`,u(e,"color","red")},m(t,n){m(t,e,n)},p:b,i:b,o:b,d(t){t&&p(e)}}}function ot(t){let e,n,i,s
const a=[lt,rt],l=[]
function d(t,e){return t[3].length?0:t[4]?1:-1}return~(e=d(t))&&(n=l[e]=a[e](t)),{c(){n&&n.c(),i=c()},m(t,n){~e&&l[e].m(t,n),m(t,i,n),s=!0},p(t,s){let c=e
e=d(t),e===c?~e&&l[e].p(t,s):(n&&($(),r(l[c],1,1,(()=>{l[c]=null})),k()),~e?(n=l[e],n?n.p(t,s):(n=l[e]=a[e](t),n.c()),o(n,1),n.m(i.parentNode,i)):n=null)},i(t){s||(o(n),s=!0)},o(t){r(n),s=!1},d(t){t&&p(i),~e&&l[e].d(t)}}}function rt(t){let e,n,i,c,d,h,g,v,b,$,k,y,w,x,L=[],P=new Map
d=new V({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),d.$on("click",t[6])
let E=C(t[4])
const H=t=>t[49]
for(let e=0;e<E.length;e+=1){let n=et(t,E,e),i=H(n)
P.set(i,L[e]=dt(i,n))}return{c(){e=f("div"),n=f("div"),n.textContent="Recipe",i=j(),c=f("div"),h=f("div"),s(d.$$.fragment),g=j(),v=f("div"),v.textContent="Items",b=j(),$=f("div"),$.textContent="Components",k=j(),y=f("div"),y.textContent="Target",w=j()
for(let t=0;t<L.length;t+=1)L[t].c()
_(n,"class","innerColumnHeader item-container svelte-11h9b8h"),u(h,"display","contents"),u(h,"--button-color","#383838"),_(c,"class","innerColumnHeader item-container svelte-11h9b8h"),_(v,"class","innerColumnHeader item-container svelte-11h9b8h"),_($,"class","innerColumnHeader item-container svelte-11h9b8h"),_(y,"class","innerColumnHeader item-container svelte-11h9b8h"),_(e,"class","recipes ui-widget-content svelte-11h9b8h")},m(t,s){m(t,e,s),M(e,n),M(e,i),M(e,c),M(c,h),a(d,h,null),M(e,g),M(e,v),M(e,b),M(e,$),M(e,k),M(e,y),M(e,w)
for(let t=0;t<L.length;t+=1)L[t]&&L[t].m(e,null)
x=!0},p(t,n){const i={}
16&n[2]&&(i.$$scope={dirty:n,ctx:t}),d.$set(i),278&n[0]&&(E=C(t[4]),L=N(L,n,H,1,t,E,P,e,S,dt,null,et))},i(t){x||(o(d.$$.fragment,t),x=!0)},o(t){r(d.$$.fragment,t),x=!1},d(t){t&&p(e),l(d)
for(let t=0;t<L.length;t+=1)L[t].d()}}}function lt(t){let e,n=[],i=new Map,s=C(t[3])
const a=t=>t[49]
for(let e=0;e<s.length;e+=1){let o=st(t,s,e),r=a(o)
i.set(r,n[e]=ft(r,o))}return{c(){e=f("div")
for(let t=0;t<n.length;t+=1)n[t].c()
_(e,"class","progress-log svelte-11h9b8h")},m(t,i){m(t,e,i)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(t,o){8&o[0]&&(s=C(t[3]),n=N(n,o,a,1,t,s,i,e,S,ft,null,st))},i:b,o:b,d(t){t&&p(e)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function ct(t){let e
return{c(){e=d("Name")},m(t,n){m(t,e,n)},d(t){t&&p(e)}}}function mt(t){let e,n,i,s,a,o,r,l,c,h=`url('${L}items/${t[58]}.gif')`,g=(t[2][t[58]]??0)+"",v=t[60]+""
return{c(){e=f("div"),n=f("div"),s=j(),a=f("div"),o=d(g),r=d("/"),l=d(v),c=j(),_(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),_(n,"class","small-image tip-dynamic svelte-11h9b8h"),u(n,"background-image",h)},m(t,i){m(t,e,i),M(e,n),M(e,s),M(e,a),M(a,o),M(a,r),M(a,l),M(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&_(n,"data-tipped",i),16&e[0]&&h!==(h=`url('${L}items/${t[58]}.gif')`)&&u(n,"background-image",h),20&e[0]&&g!==(g=(t[2][t[58]]??0)+"")&&H(o,g),16&e[0]&&v!==(v=t[60]+"")&&H(l,v)},d(t){t&&p(e)}}}function pt(t){let e,n,i,s,a,o,r,l,c,h=`url('${L}items/${t[58]}.gif')`,g=(t[1][t[58]]??0)+"",v=t[60]+""
return{c(){e=f("div"),n=f("div"),s=j(),a=f("div"),o=d(g),r=d("/"),l=d(v),c=j(),_(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),_(n,"class","small-image tip-dynamic svelte-11h9b8h"),u(n,"background-image",h)},m(t,i){m(t,e,i),M(e,n),M(e,s),M(e,a),M(a,o),M(a,r),M(a,l),M(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&_(n,"data-tipped",i),16&e[0]&&h!==(h=`url('${L}items/${t[58]}.gif')`)&&u(n,"background-image",h),18&e[0]&&g!==(g=(t[1][t[58]]??0)+"")&&H(o,g),16&e[0]&&v!==(v=t[60]+"")&&H(l,v)},d(t){t&&p(e)}}}function dt(t,e){let n,i,s,a,o,r,l,c,h,g,v,b,$,k,y,w,x,N,S,q,B=`url('${L}recipes/${e[52]}')`,I=e[51]+"",T=`url('${L}items/${e[55]}.gif')`,Q=C(e[53]),z=[]
for(let t=0;t<Q.length;t+=1)z[t]=mt(it(e,Q,t))
let A=C(e[54]),D=[]
for(let t=0;t<A.length;t+=1)D[t]=pt(nt(e,A,t))
return{key:t,first:null,c(){n=f("div"),i=f("a"),s=f("div"),o=j(),r=f("div"),l=f("a"),c=d(I),g=j(),v=f("div")
for(let t=0;t<z.length;t+=1)z[t].c()
b=j(),$=f("div")
for(let t=0;t<D.length;t+=1)D[t].c()
k=j(),y=f("div"),w=f("div"),N=j(),_(s,"class","image svelte-11h9b8h"),u(s,"background-image",B),_(i,"href",a=""+(P+e[50])),_(i,"class","svelte-11h9b8h"),_(n,"class","item-container svelte-11h9b8h"),_(l,"href",h=""+(P+e[50])),_(l,"class","svelte-11h9b8h"),_(r,"class","item-container svelte-11h9b8h"),_(v,"class","item-container svelte-11h9b8h"),_($,"class","item-container svelte-11h9b8h"),_(w,"data-tipped",x="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56]),_(w,"class","image tip-dynamic svelte-11h9b8h"),u(w,"background-image",T),_(y,"class","item-container svelte-11h9b8h"),this.first=n},m(t,a){m(t,n,a),M(n,i),M(i,s),m(t,o,a),m(t,r,a),M(r,l),M(l,c),m(t,g,a),m(t,v,a)
for(let t=0;t<z.length;t+=1)z[t]&&z[t].m(v,null)
m(t,b,a),m(t,$,a)
for(let t=0;t<D.length;t+=1)D[t]&&D[t].m($,null)
m(t,k,a),m(t,y,a),M(y,w),M(y,N),S||(q=[E(i,"click",e[8]),E(l,"click",e[8])],S=!0)},p(t,n){if(e=t,16&n[0]&&B!==(B=`url('${L}recipes/${e[52]}')`)&&u(s,"background-image",B),16&n[0]&&a!==(a=""+(P+e[50]))&&_(i,"href",a),16&n[0]&&I!==(I=e[51]+"")&&H(c,I),16&n[0]&&h!==(h=""+(P+e[50]))&&_(l,"href",h),20&n[0]){let t
for(Q=C(e[53]),t=0;t<Q.length;t+=1){const i=it(e,Q,t)
z[t]?z[t].p(i,n):(z[t]=mt(i),z[t].c(),z[t].m(v,null))}for(;t<z.length;t+=1)z[t].d(1)
z.length=Q.length}if(18&n[0]){let t
for(A=C(e[54]),t=0;t<A.length;t+=1){const i=nt(e,A,t)
D[t]?D[t].p(i,n):(D[t]=pt(i),D[t].c(),D[t].m($,null))}for(;t<D.length;t+=1)D[t].d(1)
D.length=A.length}16&n[0]&&x!==(x="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56])&&_(w,"data-tipped",x),16&n[0]&&T!==(T=`url('${L}items/${e[55]}.gif')`)&&u(w,"background-image",T)},d(t){t&&(p(n),p(o),p(r),p(g),p(v),p(b),p($),p(k),p(y)),R(z,t),R(D,t),S=!1,U(q)}}}function ft(t,e){let n,i,s,a=e[47]+""
return{key:t,first:null,c(){n=d(a),i=j(),s=f("br"),this.first=n},m(t,e){m(t,n,e),m(t,i,e),m(t,s,e)},p(t,i){e=t,8&i[0]&&a!==(a=e[47]+"")&&H(n,a)},d(t){t&&(p(n),p(i),p(s))}}}function ut(t){return{c:b,m:b,p:b,i:b,o:b,d:b}}function ht(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!0,pending:ut,then:ot,catch:at,error:65,blocks:[,,,]}
return D(t[7](),i),{c(){e=c(),i.block.c()},m(t,s){m(t,e,s),i.block.m(t,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(e,n){F(i,t=e,n)},i(t){n||(o(i.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t]
r(e)}n=!1},d(t){t&&p(e),i.block.d(t),i.token=null,i=null}}}function gt(t){let e
return{c(){e=d("Refresh")},m(t,n){m(t,e,n)},d(t){t&&p(e)}}}function vt(t){let e,n,i,c
return n=new W({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=d("Recipe Manager\n    "),i=f("div"),s(n.$$.fragment),u(i,"display","contents"),u(i,"--button-color","#494437"),u(i,"--button-size","10px")},m(t,s){m(t,e,s),m(t,i,s),a(n,i,null),c=!0},p(t,e){const i={}
16&e[2]&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){c||(o(n.$$.fragment,t),c=!0)},o(t){r(n.$$.fragment,t),c=!1},d(t){t&&p(e),t&&n&&p(i),l(n,t)}}}function bt(t){let e,n
return e=new tt({props:{visible:t[0],$$slots:{title:[vt],default:[ht]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){s(e.$$.fragment)},m(t,i){a(e,t,i),n=!0},p(t,n){const i={}
1&n[0]&&(i.visible=t[0]),30&n[0]|16&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function $t(t,e,n){let{visible:i=!0}=e,s={},a={},o=[],r=[],l=1
function c(t){g("Recipe Manager",t)}const m=(t=-1,e=0)=>y({cmd:"inventing",folder_id:t,page:e}),p=([,t],[,e])=>l*v(t,e)
function d(t){n(3,o=t.concat(o))}const f=(t,e)=>w(`#pCC td[background*="${e}"]`,t).map((t=>[t.children[0].children[0].dataset.tipped.split(/[?&=]/),t.parentNode.nextElementSibling])).map((([t,e])=>[t[2],t[10],...e?[Number(x(e).split("/")[1])]:[]]))
async function u([t,e,n]){const i=await y({cmd:"inventing",subcmd:"viewrecipe",recipe_id:t})
return d([`Parsing blueprint ${e}...`]),i?[t,e,n,f(i,"/inventory/2x3."),f(i,"/inventory/1x1mini."),...f(i,"/hellforge/2x3.")]:[t,e,n]}const b=t=>{return q(Y(t).map((e=t,t=>[t,e.filter((e=>e===t)).length])))
var e}
async function $(){d(["Updating inventory."])
const t=await J()
if(t?.s){const e=K(t.r).map((({b:t})=>t))
n(2,a=b(e))}else d("No inventory.")}async function k(){d(["Updating components."])
const t=await G()
if(Z(t.r)){const e=t.r.map((({b:t})=>t))
n(1,s=b(e))}else d("No components.")}async function C(){await O([$(),k()]),n(3,o=[])}async function j([t,e]){const n=t.split("=").at(-1),i=await m(n)
return d([`Parsing folder "${e}"...`]),[n,i]}const _=t=>t,M=t=>I(A('#pCC a[href*="&recipe_id="]',t)),N=t=>[t.href.split("=").at(-1),x(t),t.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],S=(t,e)=>t.some((t=>e=>e===t)(e)),L=t=>([,e])=>S(t,e),P=t=>([,e])=>!S(t,e),E=t=>t.map((([,t])=>`Skipping blueprint "${t}" as it is hidden.`)),H=t=>t.map((([,t])=>`Found blueprint "${t}".`))
function R(t){const e=X(B("hideRecipeNames")),i=t.filter(_).flatMap(M).map(N)
d(E(i.filter(L(e))))
const s=i.filter(P(e))
d(H(s)),async function(t){n(4,r=await O(t.map(u))),z("fsh_recipeMgr",r),C()}(s)}const U=([,t])=>t,D=([t,e])=>[t,I(T('#pCC select[name="page"]',e).options).slice(1).map((t=>t.value))],F=([,t])=>t.length,V=([t,e])=>e.map((e=>[t,e])),W=([t,e])=>m(t,e)
const tt=t=>Q(t).includes("quest"),et=([,t])=>tt(t),nt=t=>t.filter(et).map((([,t])=>`Skipping folder "${t}" as it has the word "quest" in folder name.`)),it=([,t])=>!tt(t),st=([t,e])=>[t.previousElementSibling.children[0].href,e]
function at(t){d(['Parsing folder "Unassigned"...'])
const e=w('div[id^="folder_name_"]',t).map((t=>[t,x(t)]))
d(nt(e))
!async function(t){const e=await O(t),n=e.filter(U).map(D).filter(F).flatMap(V).map(W),i=await O(n)
R(e.map((([,t])=>t)).concat(i))}([["-1",t],...e.filter(it).map(st).map(j)])}async function ot(){n(3,o=["Parsing inventing screen ..."])
const t=await m()
t?at(t):d(["Server Error."])}return t.$$set=t=>{"visible"in t&&n(0,i=t.visible)},[i,s,a,o,r,function(){c("close"),n(0,i=!1)},function(){c("sort by name"),n(4,r=r.slice().sort(p)),l*=-1},async function(){const t=await h("fsh_recipeMgr")
t||ot(),n(4,r=t),C()},function(){c("Navigate to recipe")},function(){c("refresh button"),ot()}]}var kt=class extends e{constructor(t){super(),n(this,t,$t,bt,i,{visible:0},null,[-1,-1,-1])}}
const yt={visible:!0}
let wt=0
function xt(){wt=t(yt,wt,kt)}export{xt as default}
//# sourceMappingURL=recipeMgr-CuAqWLg-.js.map
