import{i as t}from"./Modal-Dm7_felh.js"
import{S as e,L as n,M as i,bj as s,bk as a,be as l,bh as r,bl as o,am as c,T as d,a1 as m,a4 as p,O as f,b5 as u,aQ as g,s as v,bu as b,a0 as h,bf as $,bg as y,e as k,k as C,as as w,N as x,P as _,Q as j,U as M,Z as N,_ as S,aP as L,dt as P,X as E,a5 as H,b6 as R,a2 as q,f as B,ai as U,b0 as I,q as T,at as Q,aS as z,K as A}from"./calfSystem-BjarbvkO.js"
import{h as F,u as G}from"./await_block-BK1iodr-.js"
import{d as K}from"./daComponents-CPBwUnVf.js"
import{d as O}from"./daLoadInventory-1fFFMJI0.js"
import{f as X}from"./flattenItems-C4pfIrZn.js"
import{a as Z}from"./all-YfMtr2SN.js"
import{c as D}from"./csvSplit-BbgpYa-P.js"
import{i as J}from"./isArray-eVldfhw1.js"
import{L as V}from"./LinkButton-C2whYuZ7.js"
import{L as W}from"./LinkButtonBracketed-CeEid_uK.js"
import{u as Y}from"./uniq-CMbuE8hS.js"
import{M as tt}from"./ModalTitled-CGPrJs3d.js"
function et(t,e,n){const i=t.slice()
return i[50]=e[n][0],i[51]=e[n][1],i[52]=e[n][2],i[53]=e[n][3],i[54]=e[n][4],i[55]=e[n][5][0],i[56]=e[n][5][1],i[49]=n,i}function nt(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function it(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function st(t,e,n){const i=t.slice()
return i[47]=e[n],i[49]=n,i}function at(t){let e
return{c(){e=f("p"),e.textContent=`${t[65].message}`,u(e,"color","red")},m(t,n){d(t,e,n)},p:h,i:h,o:h,d(t){t&&m(e)}}}function lt(t){let e,n,i,s
const a=[ot,rt],o=[]
function p(t,e){return t[3].length?0:t[4]?1:-1}return~(e=p(t))&&(n=o[e]=a[e](t)),{c(){n&&n.c(),i=c()},m(t,n){~e&&o[e].m(t,n),d(t,i,n),s=!0},p(t,s){let c=e
e=p(t),e===c?~e&&o[e].p(t,s):(n&&($(),r(o[c],1,1,(()=>{o[c]=null})),y()),~e?(n=o[e],n?n.p(t,s):(n=o[e]=a[e](t),n.c()),l(n,1),n.m(i.parentNode,i)):n=null)},i(t){s||(l(n),s=!0)},o(t){r(n),s=!1},d(t){t&&m(i),~e&&o[e].d(t)}}}function rt(t){let e,n,i,c,p,g,v,b,h,$,y,k,C,w,L=[],P=new Map
p=new V({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),p.$on("click",t[6])
let E=x(t[4])
const H=t=>t[49]
for(let e=0;e<E.length;e+=1){let n=et(t,E,e),i=H(n)
P.set(i,L[e]=pt(i,n))}return{c(){e=f("div"),n=f("div"),n.textContent="Recipe",i=_(),c=f("div"),g=f("div"),s(p.$$.fragment),v=_(),b=f("div"),b.textContent="Items",h=_(),$=f("div"),$.textContent="Components",y=_(),k=f("div"),k.textContent="Target",C=_()
for(let t=0;t<L.length;t+=1)L[t].c()
j(n,"class","innerColumnHeader item-container svelte-yrdlsb"),u(g,"display","contents"),u(g,"--button-color","#383838"),j(c,"class","innerColumnHeader item-container svelte-yrdlsb"),j(b,"class","innerColumnHeader item-container svelte-yrdlsb"),j($,"class","innerColumnHeader item-container svelte-yrdlsb"),j(k,"class","innerColumnHeader item-container svelte-yrdlsb"),j(e,"class","recipes ui-widget-content svelte-yrdlsb")},m(t,s){d(t,e,s),M(e,n),M(e,i),M(e,c),M(c,g),a(p,g,null),M(e,v),M(e,b),M(e,h),M(e,$),M(e,y),M(e,k),M(e,C)
for(let t=0;t<L.length;t+=1)L[t]&&L[t].m(e,null)
w=!0},p(t,n){const i={}
16&n[2]&&(i.$$scope={dirty:n,ctx:t}),p.$set(i),278&n[0]&&(E=x(t[4]),L=N(L,n,H,1,t,E,P,e,S,pt,null,et))},i(t){w||(l(p.$$.fragment,t),w=!0)},o(t){r(p.$$.fragment,t),w=!1},d(t){t&&m(e),o(p)
for(let t=0;t<L.length;t+=1)L[t].d()}}}function ot(t){let e,n=[],i=new Map,s=x(t[3])
const a=t=>t[49]
for(let e=0;e<s.length;e+=1){let l=st(t,s,e),r=a(l)
i.set(r,n[e]=ft(r,l))}return{c(){e=f("div")
for(let t=0;t<n.length;t+=1)n[t].c()
j(e,"class","progress-log svelte-yrdlsb")},m(t,i){d(t,e,i)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(t,l){8&l[0]&&(s=x(t[3]),n=N(n,l,a,1,t,s,i,e,S,ft,null,st))},i:h,o:h,d(t){t&&m(e)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function ct(t){let e
return{c(){e=p("Name")},m(t,n){d(t,e,n)},d(t){t&&m(e)}}}function dt(t){let e,n,i,s,a,l,r,o,c,g=`url('${L}items/${t[58]}.gif')`,v=(t[2][t[58]]??0)+"",b=t[60]+""
return{c(){e=f("div"),n=f("div"),s=_(),a=f("div"),l=p(v),r=p("/"),o=p(b),c=_(),j(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),j(n,"class","small-image tip-dynamic svelte-yrdlsb"),u(n,"background-image",g)},m(t,i){d(t,e,i),M(e,n),M(e,s),M(e,a),M(a,l),M(a,r),M(a,o),M(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&j(n,"data-tipped",i),16&e[0]&&g!==(g=`url('${L}items/${t[58]}.gif')`)&&u(n,"background-image",g),20&e[0]&&v!==(v=(t[2][t[58]]??0)+"")&&H(l,v),16&e[0]&&b!==(b=t[60]+"")&&H(o,b)},d(t){t&&m(e)}}}function mt(t){let e,n,i,s,a,l,r,o,c,g=`url('${L}items/${t[58]}.gif')`,v=(t[1][t[58]]??0)+"",b=t[60]+""
return{c(){e=f("div"),n=f("div"),s=_(),a=f("div"),l=p(v),r=p("/"),o=p(b),c=_(),j(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),j(n,"class","small-image tip-dynamic svelte-yrdlsb"),u(n,"background-image",g)},m(t,i){d(t,e,i),M(e,n),M(e,s),M(e,a),M(a,l),M(a,r),M(a,o),M(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&j(n,"data-tipped",i),16&e[0]&&g!==(g=`url('${L}items/${t[58]}.gif')`)&&u(n,"background-image",g),18&e[0]&&v!==(v=(t[1][t[58]]??0)+"")&&H(l,v),16&e[0]&&b!==(b=t[60]+"")&&H(o,b)},d(t){t&&m(e)}}}function pt(t,e){let n,i,s,a,l,r,o,c,g,v,b,h,$,y,k,C,w,N,S,B,U=`url('${L}recipes/${e[52]}')`,I=e[51]+"",T=`url('${L}items/${e[55]}.gif')`,Q=x(e[53]),z=[]
for(let t=0;t<Q.length;t+=1)z[t]=dt(it(e,Q,t))
let A=x(e[54]),F=[]
for(let t=0;t<A.length;t+=1)F[t]=mt(nt(e,A,t))
return{key:t,first:null,c(){n=f("div"),i=f("a"),s=f("div"),l=_(),r=f("div"),o=f("a"),c=p(I),v=_(),b=f("div")
for(let t=0;t<z.length;t+=1)z[t].c()
h=_(),$=f("div")
for(let t=0;t<F.length;t+=1)F[t].c()
y=_(),k=f("div"),C=f("div"),N=_(),j(s,"class","image svelte-yrdlsb"),u(s,"background-image",U),j(i,"href",a=""+(P+e[50])),j(i,"class","svelte-yrdlsb"),j(n,"class","item-container svelte-yrdlsb"),j(o,"href",g=""+(P+e[50])),j(o,"class","svelte-yrdlsb"),j(r,"class","item-container svelte-yrdlsb"),j(b,"class","item-container svelte-yrdlsb"),j($,"class","item-container svelte-yrdlsb"),j(C,"data-tipped",w="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56]),j(C,"class","image tip-dynamic svelte-yrdlsb"),u(C,"background-image",T),j(k,"class","item-container svelte-yrdlsb"),this.first=n},m(t,a){d(t,n,a),M(n,i),M(i,s),d(t,l,a),d(t,r,a),M(r,o),M(o,c),d(t,v,a),d(t,b,a)
for(let t=0;t<z.length;t+=1)z[t]&&z[t].m(b,null)
d(t,h,a),d(t,$,a)
for(let t=0;t<F.length;t+=1)F[t]&&F[t].m($,null)
d(t,y,a),d(t,k,a),M(k,C),M(k,N),S||(B=[E(i,"click",e[8]),E(o,"click",e[8])],S=!0)},p(t,n){if(e=t,16&n[0]&&U!==(U=`url('${L}recipes/${e[52]}')`)&&u(s,"background-image",U),16&n[0]&&a!==(a=""+(P+e[50]))&&j(i,"href",a),16&n[0]&&I!==(I=e[51]+"")&&H(c,I),16&n[0]&&g!==(g=""+(P+e[50]))&&j(o,"href",g),20&n[0]){let t
for(Q=x(e[53]),t=0;t<Q.length;t+=1){const i=it(e,Q,t)
z[t]?z[t].p(i,n):(z[t]=dt(i),z[t].c(),z[t].m(b,null))}for(;t<z.length;t+=1)z[t].d(1)
z.length=Q.length}if(18&n[0]){let t
for(A=x(e[54]),t=0;t<A.length;t+=1){const i=nt(e,A,t)
F[t]?F[t].p(i,n):(F[t]=mt(i),F[t].c(),F[t].m($,null))}for(;t<F.length;t+=1)F[t].d(1)
F.length=A.length}16&n[0]&&w!==(w="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56])&&j(C,"data-tipped",w),16&n[0]&&T!==(T=`url('${L}items/${e[55]}.gif')`)&&u(C,"background-image",T)},d(t){t&&(m(n),m(l),m(r),m(v),m(b),m(h),m($),m(y),m(k)),R(z,t),R(F,t),S=!1,q(B)}}}function ft(t,e){let n,i,s,a=e[47]+""
return{key:t,first:null,c(){n=p(a),i=_(),s=f("br"),this.first=n},m(t,e){d(t,n,e),d(t,i,e),d(t,s,e)},p(t,i){e=t,8&i[0]&&a!==(a=e[47]+"")&&H(n,a)},d(t){t&&(m(n),m(i),m(s))}}}function ut(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function gt(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!0,pending:ut,then:lt,catch:at,error:65,blocks:[,,,]}
return F(t[7](),i),{c(){e=c(),i.block.c()},m(t,s){d(t,e,s),i.block.m(t,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(e,n){G(i,t=e,n)},i(t){n||(l(i.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t]
r(e)}n=!1},d(t){t&&m(e),i.block.d(t),i.token=null,i=null}}}function vt(t){let e
return{c(){e=p("Refresh")},m(t,n){d(t,e,n)},d(t){t&&m(e)}}}function bt(t){let e,n,i,c
return n=new W({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=p("Recipe Manager\n    "),i=f("div"),s(n.$$.fragment),u(i,"display","contents"),u(i,"--button-color","#494437"),u(i,"--button-size","10px")},m(t,s){d(t,e,s),d(t,i,s),a(n,i,null),c=!0},p(t,e){const i={}
16&e[2]&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){c||(l(n.$$.fragment,t),c=!0)},o(t){r(n.$$.fragment,t),c=!1},d(t){t&&m(e),t&&n&&m(i),o(n,t)}}}function ht(t){let e,n
return e=new tt({props:{visible:t[0],$$slots:{title:[bt],default:[gt]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){s(e.$$.fragment)},m(t,i){a(e,t,i),n=!0},p(t,n){const i={}
1&n[0]&&(i.visible=t[0]),30&n[0]|16&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){o(e,t)}}}function $t(t,e,n){let{visible:i=!0}=e,s={},a={},l=[],r=[],o=1
function c(t){v("Recipe Manager",t)}const d=(t=-1,e=0)=>k({cmd:"inventing",folder_id:t,page:e}),m=([,t],[,e])=>o*b(t,e)
function p(t){n(3,l=t.concat(l))}const f=(t,e)=>C(`#pCC td[background*="${e}"]`,t).map((t=>[t.children[0].children[0].dataset.tipped.split(/[?&=]/),t.parentNode.nextElementSibling])).map((([t,e])=>[t[2],t[10],...e?[Number(w(e).split("/")[1])]:[]]))
async function u([t,e,n]){const i=await k({cmd:"inventing",subcmd:"viewrecipe",recipe_id:t})
return p([`Parsing blueprint ${e}...`]),i?[t,e,n,f(i,"/inventory/2x3."),f(i,"/inventory/1x1mini."),...f(i,"/hellforge/2x3.")]:[t,e,n]}const h=t=>{return B(Y(t).map((e=t,t=>[t,e.filter((e=>e===t)).length])))
var e}
async function $(){p(["Updating inventory."])
const t=await O()
if(t?.s){const e=X(t.r).map((({b:t})=>t))
n(2,a=h(e))}else p("No inventory.")}async function y(){p(["Updating components."])
const t=await K()
if(J(t.r)){const e=t.r.map((({b:t})=>t))
n(1,s=h(e))}else p("No components.")}async function x(){await Z([$(),y()]),n(3,l=[])}async function _([t,e]){const n=t.split("=").at(-1),i=await d(n)
return p([`Parsing folder "${e}"...`]),[n,i]}const j=t=>t,M=t=>I(A('#pCC a[href*="&recipe_id="]',t)),N=t=>[t.href.split("=").at(-1),w(t),t.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],S=(t,e)=>t.some((t=>e=>e===t)(e)),L=t=>([,e])=>S(t,e),P=t=>([,e])=>!S(t,e),E=t=>t.map((([,t])=>`Skipping blueprint "${t}" as it is hidden.`)),H=t=>t.map((([,t])=>`Found blueprint "${t}".`))
function R(t){const e=D(U("hideRecipeNames")),i=t.filter(j).flatMap(M).map(N)
p(E(i.filter(L(e))))
const s=i.filter(P(e))
p(H(s)),async function(t){n(4,r=await Z(t.map(u))),z("fsh_recipeMgr",r),x()}(s)}const q=([,t])=>t,F=([t,e])=>[t,I(T('#pCC select[name="page"]',e).options).slice(1).map((t=>t.value))],G=([,t])=>t.length,V=([t,e])=>e.map((e=>[t,e])),W=([t,e])=>d(t,e)
const tt=t=>Q(t).includes("quest"),et=([,t])=>tt(t),nt=t=>t.filter(et).map((([,t])=>`Skipping folder "${t}" as it has the word "quest" in folder name.`)),it=([,t])=>!tt(t),st=([t,e])=>[t.previousElementSibling.children[0].href,e]
function at(t){p(['Parsing folder "Unassigned"...'])
const e=C('div[id^="folder_name_"]',t).map((t=>[t,w(t)]))
p(nt(e))
!async function(t){const e=await Z(t),n=e.filter(q).map(F).filter(G).flatMap(V).map(W),i=await Z(n)
R(e.map((([,t])=>t)).concat(i))}([["-1",t],...e.filter(it).map(st).map(_)])}async function lt(){n(3,l=["Parsing inventing screen ..."])
const t=await d()
t?at(t):p(["Server Error."])}return t.$$set=t=>{"visible"in t&&n(0,i=t.visible)},[i,s,a,l,r,function(){c("close"),n(0,i=!1)},function(){c("sort by name"),n(4,r=r.slice().sort(m)),o*=-1},async function(){const t=await g("fsh_recipeMgr")
t||lt(),n(4,r=t),x()},function(){c("Navigate to recipe")},function(){c("refresh button"),lt()}]}class yt extends e{constructor(t){super(),n(this,t,$t,ht,i,{visible:0},null,[-1,-1,-1])}}const kt={visible:!0}
let Ct=0
function wt(){Ct=t(kt,Ct,yt)}export{wt as default}
//# sourceMappingURL=recipeMgr-CVDcXhxH.js.map
