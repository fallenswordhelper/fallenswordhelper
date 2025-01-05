import{i as t}from"./Modal-BMQofQrT.js"
import{S as e,O as n,P as i,bF as s,bG as a,bA as l,bD as r,bH as o,as as c,av as d,W as m,at as p,a4 as u,a7 as f,R as g,bo as b,b6 as v,s as $,bU as h,u as y,a3 as k,bB as C,bC as x,e as w,H as _,k as M,aF as N,Q as j,T as S,U as H,X as R,a1 as L,a2 as P,b5 as U,dY as B,_ as E,a8 as I,bp as q,a5 as F,f as T,bu as A,aI as z,ao as D,bj as G,q as J,aJ as O,b8 as Q,N as W}from"./calfSystem-fMW-YMyF.js"
import{d as X}from"./daComponents-D0_8eZT8.js"
import{d as Y}from"./daLoadInventory-C5VqDf3X.js"
import{f as Z}from"./flattenItems-DBwSgTaC.js"
import{L as K}from"./LinkButton-9QqGD9_1.js"
import{L as V}from"./LinkButtonBracketed-BncsiWAk.js"
import{M as tt}from"./ModalTitled-DdT5kcKI.js"
function et(t,e,n){const i=t.slice()
return i[50]=e[n][0],i[51]=e[n][1],i[52]=e[n][2],i[53]=e[n][3],i[54]=e[n][4],i[55]=e[n][5][0],i[56]=e[n][5][1],i[49]=n,i}function nt(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function it(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function st(t,e,n){const i=t.slice()
return i[47]=e[n],i[49]=n,i}function at(t){let e
return{c(){e=g("p"),e.textContent=`${t[65].message}`,b(e,"color","red")},m(t,n){m(t,e,n)},p:k,i:k,o:k,d(t){t&&u(e)}}}function lt(t){let e,n,i,s
const a=[ot,rt],o=[]
function c(t,e){return t[3].length?0:t[4]?1:-1}return~(e=c(t))&&(n=o[e]=a[e](t)),{c(){n&&n.c(),i=d()},m(t,n){~e&&o[e].m(t,n),m(t,i,n),s=!0},p(t,s){let d=e
e=c(t),e===d?~e&&o[e].p(t,s):(n&&(C(),r(o[d],1,1,(()=>{o[d]=null})),x()),~e?(n=o[e],n?n.p(t,s):(n=o[e]=a[e](t),n.c()),l(n,1),n.m(i.parentNode,i)):n=null)},i(t){s||(l(n),s=!0)},o(t){r(n),s=!1},d(t){t&&u(i),~e&&o[e].d(t)}}}function rt(t){let e,n,i,c,d,p,f,v,$,h,y,k,C,x,w=[],_=new Map
d=new K({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),d.$on("click",t[6])
let M=j(t[4])
const N=t=>t[49]
for(let e=0;e<M.length;e+=1){let n=et(t,M,e),i=N(n)
_.set(i,w[e]=pt(i,n))}return{c(){e=g("div"),n=g("div"),n.textContent="Recipe",i=S(),c=g("div"),p=g("div"),s(d.$$.fragment),f=S(),v=g("div"),v.textContent="Items",$=S(),h=g("div"),h.textContent="Components",y=S(),k=g("div"),k.textContent="Target",C=S()
for(let t=0;t<w.length;t+=1)w[t].c()
H(n,"class","innerColumnHeader item-container svelte-yrdlsb"),b(p,"display","contents"),b(p,"--button-color","#383838"),H(c,"class","innerColumnHeader item-container svelte-yrdlsb"),H(v,"class","innerColumnHeader item-container svelte-yrdlsb"),H(h,"class","innerColumnHeader item-container svelte-yrdlsb"),H(k,"class","innerColumnHeader item-container svelte-yrdlsb"),H(e,"class","recipes ui-widget-content svelte-yrdlsb")},m(t,s){m(t,e,s),R(e,n),R(e,i),R(e,c),R(c,p),a(d,p,null),R(e,f),R(e,v),R(e,$),R(e,h),R(e,y),R(e,k),R(e,C)
for(let t=0;t<w.length;t+=1)w[t]&&w[t].m(e,null)
x=!0},p(t,n){const i={}
16&n[2]&&(i.$$scope={dirty:n,ctx:t}),d.$set(i),278&n[0]&&(M=j(t[4]),w=L(w,n,N,1,t,M,_,e,P,pt,null,et))},i(t){x||(l(d.$$.fragment,t),x=!0)},o(t){r(d.$$.fragment,t),x=!1},d(t){t&&u(e),o(d)
for(let t=0;t<w.length;t+=1)w[t].d()}}}function ot(t){let e,n=[],i=new Map,s=j(t[3])
const a=t=>t[49]
for(let e=0;e<s.length;e+=1){let l=st(t,s,e),r=a(l)
i.set(r,n[e]=ut(r,l))}return{c(){e=g("div")
for(let t=0;t<n.length;t+=1)n[t].c()
H(e,"class","progress-log svelte-yrdlsb")},m(t,i){m(t,e,i)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(t,l){8&l[0]&&(s=j(t[3]),n=L(n,l,a,1,t,s,i,e,P,ut,null,st))},i:k,o:k,d(t){t&&u(e)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function ct(t){let e
return{c(){e=f("Name")},m(t,n){m(t,e,n)},d(t){t&&u(e)}}}function dt(t){let e,n,i,s,a,l,r,o,c,d=`url('${U}items/${t[58]}.gif')`,p=(t[2][t[58]]??0)+"",v=t[60]+""
return{c(){e=g("div"),n=g("div"),s=S(),a=g("div"),l=f(p),r=f("/"),o=f(v),c=S(),H(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),H(n,"class","small-image tip-dynamic svelte-yrdlsb"),b(n,"background-image",d)},m(t,i){m(t,e,i),R(e,n),R(e,s),R(e,a),R(a,l),R(a,r),R(a,o),R(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&H(n,"data-tipped",i),16&e[0]&&d!==(d=`url('${U}items/${t[58]}.gif')`)&&b(n,"background-image",d),20&e[0]&&p!==(p=(t[2][t[58]]??0)+"")&&I(l,p),16&e[0]&&v!==(v=t[60]+"")&&I(o,v)},d(t){t&&u(e)}}}function mt(t){let e,n,i,s,a,l,r,o,c,d=`url('${U}items/${t[58]}.gif')`,p=(t[1][t[58]]??0)+"",v=t[60]+""
return{c(){e=g("div"),n=g("div"),s=S(),a=g("div"),l=f(p),r=f("/"),o=f(v),c=S(),H(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),H(n,"class","small-image tip-dynamic svelte-yrdlsb"),b(n,"background-image",d)},m(t,i){m(t,e,i),R(e,n),R(e,s),R(e,a),R(a,l),R(a,r),R(a,o),R(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&H(n,"data-tipped",i),16&e[0]&&d!==(d=`url('${U}items/${t[58]}.gif')`)&&b(n,"background-image",d),18&e[0]&&p!==(p=(t[1][t[58]]??0)+"")&&I(l,p),16&e[0]&&v!==(v=t[60]+"")&&I(o,v)},d(t){t&&u(e)}}}function pt(t,e){let n,i,s,a,l,r,o,c,d,p,v,$,h,y,k,C,x,w,_,M,N=`url('${U}recipes/${e[52]}')`,L=e[51]+"",P=`url('${U}items/${e[55]}.gif')`,T=j(e[53]),A=[]
for(let t=0;t<T.length;t+=1)A[t]=dt(it(e,T,t))
let z=j(e[54]),D=[]
for(let t=0;t<z.length;t+=1)D[t]=mt(nt(e,z,t))
return{key:t,first:null,c(){n=g("div"),i=g("a"),s=g("div"),l=S(),r=g("div"),o=g("a"),c=f(L),p=S(),v=g("div")
for(let t=0;t<A.length;t+=1)A[t].c()
$=S(),h=g("div")
for(let t=0;t<D.length;t+=1)D[t].c()
y=S(),k=g("div"),C=g("div"),w=S(),H(s,"class","image svelte-yrdlsb"),b(s,"background-image",N),H(i,"href",a=""+(B+e[50])),H(i,"class","svelte-yrdlsb"),H(n,"class","item-container svelte-yrdlsb"),H(o,"href",d=""+(B+e[50])),H(o,"class","svelte-yrdlsb"),H(r,"class","item-container svelte-yrdlsb"),H(v,"class","item-container svelte-yrdlsb"),H(h,"class","item-container svelte-yrdlsb"),H(C,"data-tipped",x="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56]),H(C,"class","image tip-dynamic svelte-yrdlsb"),b(C,"background-image",P),H(k,"class","item-container svelte-yrdlsb"),this.first=n},m(t,a){m(t,n,a),R(n,i),R(i,s),m(t,l,a),m(t,r,a),R(r,o),R(o,c),m(t,p,a),m(t,v,a)
for(let t=0;t<A.length;t+=1)A[t]&&A[t].m(v,null)
m(t,$,a),m(t,h,a)
for(let t=0;t<D.length;t+=1)D[t]&&D[t].m(h,null)
m(t,y,a),m(t,k,a),R(k,C),R(k,w),_||(M=[E(i,"click",e[8]),E(o,"click",e[8])],_=!0)},p(t,n){if(e=t,16&n[0]&&N!==(N=`url('${U}recipes/${e[52]}')`)&&b(s,"background-image",N),16&n[0]&&a!==(a=""+(B+e[50]))&&H(i,"href",a),16&n[0]&&L!==(L=e[51]+"")&&I(c,L),16&n[0]&&d!==(d=""+(B+e[50]))&&H(o,"href",d),20&n[0]){let t
for(T=j(e[53]),t=0;t<T.length;t+=1){const i=it(e,T,t)
A[t]?A[t].p(i,n):(A[t]=dt(i),A[t].c(),A[t].m(v,null))}for(;t<A.length;t+=1)A[t].d(1)
A.length=T.length}if(18&n[0]){let t
for(z=j(e[54]),t=0;t<z.length;t+=1){const i=nt(e,z,t)
D[t]?D[t].p(i,n):(D[t]=mt(i),D[t].c(),D[t].m(h,null))}for(;t<D.length;t+=1)D[t].d(1)
D.length=z.length}16&n[0]&&x!==(x="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56])&&H(C,"data-tipped",x),16&n[0]&&P!==(P=`url('${U}items/${e[55]}.gif')`)&&b(C,"background-image",P)},d(t){t&&(u(n),u(l),u(r),u(p),u(v),u($),u(h),u(y),u(k)),q(A,t),q(D,t),_=!1,F(M)}}}function ut(t,e){let n,i,s,a=e[47]+""
return{key:t,first:null,c(){n=f(a),i=S(),s=g("br"),this.first=n},m(t,e){m(t,n,e),m(t,i,e),m(t,s,e)},p(t,i){e=t,8&i[0]&&a!==(a=e[47]+"")&&I(n,a)},d(t){t&&(u(n),u(i),u(s))}}}function ft(t){return{c:k,m:k,p:k,i:k,o:k,d:k}}function gt(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:lt,catch:at,error:65,blocks:[,,,]}
return c(t[7](),i),{c(){e=d(),i.block.c()},m(t,s){m(t,e,s),i.block.m(t,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(e,n){p(i,t=e,n)},i(t){n||(l(i.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t]
r(e)}n=!1},d(t){t&&u(e),i.block.d(t),i.token=null,i=null}}}function bt(t){let e
return{c(){e=f("Refresh")},m(t,n){m(t,e,n)},d(t){t&&u(e)}}}function vt(t){let e,n,i,c
return n=new V({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=f("Recipe Manager\n    "),i=g("div"),s(n.$$.fragment),b(i,"display","contents"),b(i,"--button-color","#494437"),b(i,"--button-size","10px")},m(t,s){m(t,e,s),m(t,i,s),a(n,i,null),c=!0},p(t,e){const i={}
16&e[2]&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){c||(l(n.$$.fragment,t),c=!0)},o(t){r(n.$$.fragment,t),c=!1},d(t){t&&u(e),t&&n&&u(i),o(n,t)}}}function $t(t){let e,n
return e=new tt({props:{visible:t[0],$$slots:{title:[vt],default:[gt]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){s(e.$$.fragment)},m(t,i){a(e,t,i),n=!0},p(t,n){const i={}
1&n[0]&&(i.visible=t[0]),30&n[0]|16&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){o(e,t)}}}function ht(t,e,n){let{visible:i=!0}=e,s={},a={},l=[],r=[],o=1
function c(t){$("Recipe Manager",t)}const d=(t=-1,e=0)=>w({cmd:"inventing",folder_id:t,page:e}),m=([,t],[,e])=>o*h(t,e)
function p(t){n(3,l=t.concat(l))}const u=(t,e)=>M(`#pCC td[background*="${e}"]`,t).map((t=>[t.children[0].children[0].dataset.tipped.split(/[?&=]/),t.parentNode.nextElementSibling])).map((([t,e])=>[t[2],t[10],...e?[Number(N(e).split("/")[1])]:[]]))
async function f([t,e,n]){const i=await w({cmd:"inventing",subcmd:"viewrecipe",recipe_id:t})
return p([`Parsing blueprint ${e}...`]),i?[t,e,n,u(i,"/inventory/2x3."),u(i,"/inventory/1x1mini."),...u(i,"/hellforge/2x3.")]:[t,e,n]}const g=t=>{return T(A(t).map((e=t,t=>[t,e.filter((e=>e===t)).length])))
var e}
async function b(){p(["Updating inventory."])
const t=await Y()
if(t?.s){const e=Z(t.r).map((({b:t})=>t))
n(2,a=g(e))}else p("No inventory.")}async function k(){p(["Updating components."])
const t=await X()
if(_(t.r)){const e=t.r.map((({b:t})=>t))
n(1,s=g(e))}else p("No components.")}async function C(){await y([b(),k()]),n(3,l=[])}async function x([t,e]){const n=t.split("=").at(-1),i=await d(n)
return p([`Parsing folder "${e}"...`]),[n,i]}const j=t=>t,S=t=>G(W('#pCC a[href*="&recipe_id="]',t)),H=t=>[t.href.split("=").at(-1),N(t),t.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],R=(t,e)=>t.some((t=>e=>e===t)(e)),L=t=>([,e])=>R(t,e),P=t=>([,e])=>!R(t,e),U=t=>t.map((([,t])=>`Skipping blueprint "${t}" as it is hidden.`)),B=t=>t.map((([,t])=>`Found blueprint "${t}".`))
function E(t){const e=z(D("hideRecipeNames")),i=t.filter(j).flatMap(S).map(H)
p(U(i.filter(L(e))))
const s=i.filter(P(e))
p(B(s)),async function(t){n(4,r=await y(t.map(f))),Q("fsh_recipeMgr",r),C()}(s)}const I=([,t])=>t,q=([t,e])=>[t,G(J('#pCC select[name="page"]',e).options).slice(1).map((t=>t.value))],F=([,t])=>t.length,K=([t,e])=>e.map((e=>[t,e])),V=([t,e])=>d(t,e)
const tt=t=>O(t).includes("quest"),et=([,t])=>tt(t),nt=t=>t.filter(et).map((([,t])=>`Skipping folder "${t}" as it has the word "quest" in folder name.`)),it=([,t])=>!tt(t),st=([t,e])=>[t.previousElementSibling.children[0].href,e]
function at(t){p(['Parsing folder "Unassigned"...'])
const e=M('div[id^="folder_name_"]',t).map((t=>[t,N(t)]))
p(nt(e))
!async function(t){const e=await y(t),n=e.filter(I).map(q).filter(F).flatMap(K).map(V),i=await y(n)
E(e.map((([,t])=>t)).concat(i))}([["-1",t],...e.filter(it).map(st).map(x)])}async function lt(){n(3,l=["Parsing inventing screen ..."])
const t=await d()
t?at(t):p(["Server Error."])}return t.$$set=t=>{"visible"in t&&n(0,i=t.visible)},[i,s,a,l,r,function(){c("close"),n(0,i=!1)},function(){c("sort by name"),n(4,r=r.slice().sort(m)),o*=-1},async function(){const t=await v("fsh_recipeMgr")
t||lt(),n(4,r=t),C()},function(){c("Navigate to recipe")},function(){c("refresh button"),lt()}]}class yt extends e{constructor(t){super(),n(this,t,ht,$t,i,{visible:0},null,[-1,-1,-1])}}const kt={visible:!0}
let Ct=0
function xt(){Ct=t(kt,Ct,yt)}export{xt as default}
//# sourceMappingURL=recipeMgr-DN2gpZMf.js.map
