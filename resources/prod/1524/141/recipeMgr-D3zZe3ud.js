import{i as t}from"./Modal-D6I5F6g9.js"
import{S as e,L as n,M as i,O as s,Z as a,R as r,U as l,b5 as o,N as c,P as d,V as m,W as p,_ as f,a0 as u,X as g,aO as v,T as b,b9 as h,Y as $,dt as y,a2 as k,be as w,bf as C,bg as x,bh as _,bi as j,bj as M,bk as N,am as S,s as L,bw as R,aQ as E,d as H,n as P,as as q,at as B,b0 as U,q as I,ai as T,K as O,aS as z,f as A}from"./calfSystem-Blt4DbaE.js"
import{h as F,u as G}from"./await_block-Bf7EOqQ9.js"
import{d as K}from"./daComponents-CPhZntOg.js"
import{d as Q}from"./daLoadInventory-XbR6QBDO.js"
import{f as V}from"./flattenItems-C4pfIrZn.js"
import{a as W}from"./all-YfMtr2SN.js"
import{c as X}from"./csvSplit-DCp-KQ1I.js"
import{i as Y}from"./isArray-eVldfhw1.js"
import{L as Z}from"./LinkButton-CTQrdC0s.js"
import{L as D}from"./LinkButtonBracketed-C9l9Kpoo.js"
import{u as J}from"./uniq-D422dDMJ.js"
import{M as tt}from"./ModalTitled-DCrh-JGN.js"
function et(t,e,n){const i=t.slice()
return i[50]=e[n][0],i[51]=e[n][1],i[52]=e[n][2],i[53]=e[n][3],i[54]=e[n][4],i[55]=e[n][5][0],i[56]=e[n][5][1],i[49]=n,i}function nt(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function it(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function st(t,e,n){const i=t.slice()
return i[47]=e[n],i[49]=n,i}function at(t){let e
return{c(){e=l("p"),e.textContent=`${t[65].message}`,o(e,"color","red")},m(t,n){r(t,e,n)},p:a,i:a,o:a,d(t){t&&s(e)}}}function rt(t){let e,n,i,a
const l=[ot,lt],o=[]
function c(t,e){return t[3].length?0:t[4]?1:-1}return~(e=c(t))&&(n=o[e]=l[e](t)),{c(){n&&n.c(),i=S()},m(t,n){~e&&o[e].m(t,n),r(t,i,n),a=!0},p(t,s){let a=e
e=c(t),e===a?~e&&o[e].p(t,s):(n&&(M(),C(o[a],1,1,(()=>{o[a]=null})),N()),~e?(n=o[e],n?n.p(t,s):(n=o[e]=l[e](t),n.c()),x(n,1),n.m(i.parentNode,i)):n=null)},i(t){a||(x(n),a=!0)},o(t){C(n),a=!1},d(t){t&&s(i),~e&&o[e].d(t)}}}function lt(t){let e,n,i,a,d,m,v,h,$,y,k,M,N,S,L=[],R=new Map
d=new Z({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),d.$on("click",t[6])
let E=c(t[4])
const H=t=>t[49]
for(let e=0;e<E.length;e+=1){let n=et(t,E,e),i=H(n)
R.set(i,L[e]=pt(i,n))}return{c(){e=l("div"),n=l("div"),n.textContent="Recipe",i=p(),a=l("div"),m=l("div"),j(d.$$.fragment),v=p(),h=l("div"),h.textContent="Items",$=p(),y=l("div"),y.textContent="Components",k=p(),M=l("div"),M.textContent="Target",N=p()
for(let t=0;t<L.length;t+=1)L[t].c()
g(n,"class","innerColumnHeader item-container svelte-yrdlsb"),o(m,"display","contents"),o(m,"--button-color","#383838"),g(a,"class","innerColumnHeader item-container svelte-yrdlsb"),g(h,"class","innerColumnHeader item-container svelte-yrdlsb"),g(y,"class","innerColumnHeader item-container svelte-yrdlsb"),g(M,"class","innerColumnHeader item-container svelte-yrdlsb"),g(e,"class","recipes ui-widget-content svelte-yrdlsb")},m(t,s){r(t,e,s),b(e,n),b(e,i),b(e,a),b(a,m),_(d,m,null),b(e,v),b(e,h),b(e,$),b(e,y),b(e,k),b(e,M),b(e,N)
for(let t=0;t<L.length;t+=1)L[t]&&L[t].m(e,null)
S=!0},p(t,n){const i={}
16&n[2]&&(i.$$scope={dirty:n,ctx:t}),d.$set(i),278&n[0]&&(E=c(t[4]),L=f(L,n,H,1,t,E,R,e,u,pt,null,et))},i(t){S||(x(d.$$.fragment,t),S=!0)},o(t){C(d.$$.fragment,t),S=!1},d(t){t&&s(e),w(d)
for(let t=0;t<L.length;t+=1)L[t].d()}}}function ot(t){let e,n=[],i=new Map,o=c(t[3])
const d=t=>t[49]
for(let e=0;e<o.length;e+=1){let s=st(t,o,e),a=d(s)
i.set(a,n[e]=ft(a,s))}return{c(){e=l("div")
for(let t=0;t<n.length;t+=1)n[t].c()
g(e,"class","progress-log svelte-yrdlsb")},m(t,i){r(t,e,i)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(t,s){8&s[0]&&(o=c(t[3]),n=f(n,s,d,1,t,o,i,e,u,ft,null,st))},i:a,o:a,d(t){t&&s(e)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function ct(t){let e
return{c(){e=m("Name")},m(t,n){r(t,e,n)},d(t){t&&s(e)}}}function dt(t){let e,n,i,a,c,f,u,h,$,y=`url('${v}items/${t[58]}.gif')`,k=(t[2][t[58]]??0)+"",w=t[60]+""
return{c(){e=l("div"),n=l("div"),a=p(),c=l("div"),f=m(k),u=m("/"),h=m(w),$=p(),g(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),g(n,"class","small-image tip-dynamic svelte-yrdlsb"),o(n,"background-image",y)},m(t,i){r(t,e,i),b(e,n),b(e,a),b(e,c),b(c,f),b(c,u),b(c,h),b(e,$)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&g(n,"data-tipped",i),16&e[0]&&y!==(y=`url('${v}items/${t[58]}.gif')`)&&o(n,"background-image",y),20&e[0]&&k!==(k=(t[2][t[58]]??0)+"")&&d(f,k),16&e[0]&&w!==(w=t[60]+"")&&d(h,w)},d(t){t&&s(e)}}}function mt(t){let e,n,i,a,c,f,u,h,$,y=`url('${v}items/${t[58]}.gif')`,k=(t[1][t[58]]??0)+"",w=t[60]+""
return{c(){e=l("div"),n=l("div"),a=p(),c=l("div"),f=m(k),u=m("/"),h=m(w),$=p(),g(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),g(n,"class","small-image tip-dynamic svelte-yrdlsb"),o(n,"background-image",y)},m(t,i){r(t,e,i),b(e,n),b(e,a),b(e,c),b(c,f),b(c,u),b(c,h),b(e,$)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&g(n,"data-tipped",i),16&e[0]&&y!==(y=`url('${v}items/${t[58]}.gif')`)&&o(n,"background-image",y),18&e[0]&&k!==(k=(t[1][t[58]]??0)+"")&&d(f,k),16&e[0]&&w!==(w=t[60]+"")&&d(h,w)},d(t){t&&s(e)}}}function pt(t,e){let n,i,a,f,u,w,C,x,_,j,M,N,S,L,R,E,H,P,q,B,U=`url('${v}recipes/${e[52]}')`,I=e[51]+"",T=`url('${v}items/${e[55]}.gif')`,O=c(e[53]),z=[]
for(let t=0;t<O.length;t+=1)z[t]=dt(it(e,O,t))
let A=c(e[54]),F=[]
for(let t=0;t<A.length;t+=1)F[t]=mt(nt(e,A,t))
return{key:t,first:null,c(){n=l("div"),i=l("a"),a=l("div"),u=p(),w=l("div"),C=l("a"),x=m(I),j=p(),M=l("div")
for(let t=0;t<z.length;t+=1)z[t].c()
N=p(),S=l("div")
for(let t=0;t<F.length;t+=1)F[t].c()
L=p(),R=l("div"),E=l("div"),P=p(),g(a,"class","image svelte-yrdlsb"),o(a,"background-image",U),g(i,"href",f=""+(y+e[50])),g(i,"class","svelte-yrdlsb"),g(n,"class","item-container svelte-yrdlsb"),g(C,"href",_=""+(y+e[50])),g(C,"class","svelte-yrdlsb"),g(w,"class","item-container svelte-yrdlsb"),g(M,"class","item-container svelte-yrdlsb"),g(S,"class","item-container svelte-yrdlsb"),g(E,"data-tipped",H="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56]),g(E,"class","image tip-dynamic svelte-yrdlsb"),o(E,"background-image",T),g(R,"class","item-container svelte-yrdlsb"),this.first=n},m(t,s){r(t,n,s),b(n,i),b(i,a),r(t,u,s),r(t,w,s),b(w,C),b(C,x),r(t,j,s),r(t,M,s)
for(let t=0;t<z.length;t+=1)z[t]&&z[t].m(M,null)
r(t,N,s),r(t,S,s)
for(let t=0;t<F.length;t+=1)F[t]&&F[t].m(S,null)
r(t,L,s),r(t,R,s),b(R,E),b(R,P),q||(B=[k(i,"click",e[8]),k(C,"click",e[8])],q=!0)},p(t,n){if(e=t,16&n[0]&&U!==(U=`url('${v}recipes/${e[52]}')`)&&o(a,"background-image",U),16&n[0]&&f!==(f=""+(y+e[50]))&&g(i,"href",f),16&n[0]&&I!==(I=e[51]+"")&&d(x,I),16&n[0]&&_!==(_=""+(y+e[50]))&&g(C,"href",_),20&n[0]){let t
for(O=c(e[53]),t=0;t<O.length;t+=1){const i=it(e,O,t)
z[t]?z[t].p(i,n):(z[t]=dt(i),z[t].c(),z[t].m(M,null))}for(;t<z.length;t+=1)z[t].d(1)
z.length=O.length}if(18&n[0]){let t
for(A=c(e[54]),t=0;t<A.length;t+=1){const i=nt(e,A,t)
F[t]?F[t].p(i,n):(F[t]=mt(i),F[t].c(),F[t].m(S,null))}for(;t<F.length;t+=1)F[t].d(1)
F.length=A.length}16&n[0]&&H!==(H="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56])&&g(E,"data-tipped",H),16&n[0]&&T!==(T=`url('${v}items/${e[55]}.gif')`)&&o(E,"background-image",T)},d(t){t&&(s(n),s(u),s(w),s(j),s(M),s(N),s(S),s(L),s(R)),h(z,t),h(F,t),q=!1,$(B)}}}function ft(t,e){let n,i,a,o=e[47]+""
return{key:t,first:null,c(){n=m(o),i=p(),a=l("br"),this.first=n},m(t,e){r(t,n,e),r(t,i,e),r(t,a,e)},p(t,i){e=t,8&i[0]&&o!==(o=e[47]+"")&&d(n,o)},d(t){t&&(s(n),s(i),s(a))}}}function ut(t){return{c:a,m:a,p:a,i:a,o:a,d:a}}function gt(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!0,pending:ut,then:rt,catch:at,error:65,blocks:[,,,]}
return F(t[7](),i),{c(){e=S(),i.block.c()},m(t,s){r(t,e,s),i.block.m(t,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(e,n){G(i,t=e,n)},i(t){n||(x(i.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t]
C(e)}n=!1},d(t){t&&s(e),i.block.d(t),i.token=null,i=null}}}function vt(t){let e
return{c(){e=m("Refresh")},m(t,n){r(t,e,n)},d(t){t&&s(e)}}}function bt(t){let e,n,i,a
return n=new D({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=m("Recipe Manager\n    "),i=l("div"),j(n.$$.fragment),o(i,"display","contents"),o(i,"--button-color","#494437"),o(i,"--button-size","10px")},m(t,s){r(t,e,s),r(t,i,s),_(n,i,null),a=!0},p(t,e){const i={}
16&e[2]&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){a||(x(n.$$.fragment,t),a=!0)},o(t){C(n.$$.fragment,t),a=!1},d(t){t&&s(e),t&&n&&s(i),w(n,t)}}}function ht(t){let e,n
return e=new tt({props:{visible:t[0],$$slots:{title:[bt],default:[gt]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){j(e.$$.fragment)},m(t,i){_(e,t,i),n=!0},p(t,n){const i={}
1&n[0]&&(i.visible=t[0]),30&n[0]|16&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function $t(t,e,n){let{visible:i=!0}=e,s={},a={},r=[],l=[],o=1
function c(t){L("Recipe Manager",t)}const d=(t=-1,e=0)=>H({cmd:"inventing",folder_id:t,page:e}),m=([,t],[,e])=>o*R(t,e)
function p(t){n(3,r=t.concat(r))}const f=(t,e)=>P(`#pCC td[background*="${e}"]`,t).map((t=>[t.children[0].children[0].dataset.tipped.split(/[?&=]/),t.parentNode.nextElementSibling])).map((([t,e])=>[t[2],t[10],...e?[Number(q(e).split("/")[1])]:[]]))
async function u([t,e,n]){const i=await H({cmd:"inventing",subcmd:"viewrecipe",recipe_id:t})
return p([`Parsing blueprint ${e}...`]),i?[t,e,n,f(i,"/inventory/2x3."),f(i,"/inventory/1x1mini."),...f(i,"/hellforge/2x3.")]:[t,e,n]}const g=t=>{return A(J(t).map((e=t,t=>[t,e.filter((e=>e===t)).length])))
var e}
async function v(){p(["Updating inventory."])
const t=await Q()
if(t?.s){const e=V(t.r).map((({b:t})=>t))
n(2,a=g(e))}else p("No inventory.")}async function b(){p(["Updating components."])
const t=await K()
if(Y(t.r)){const e=t.r.map((({b:t})=>t))
n(1,s=g(e))}else p("No components.")}async function h(){await W([v(),b()]),n(3,r=[])}async function $([t,e]){const n=t.split("=").at(-1),i=await d(n)
return p([`Parsing folder "${e}"...`]),[n,i]}const y=t=>t,k=t=>U(O('#pCC a[href*="&recipe_id="]',t)),w=t=>[t.href.split("=").at(-1),q(t),t.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],C=(t,e)=>t.some((t=>e=>e===t)(e)),x=t=>([,e])=>C(t,e),_=t=>([,e])=>!C(t,e),j=t=>t.map((([,t])=>`Skipping blueprint "${t}" as it is hidden.`)),M=t=>t.map((([,t])=>`Found blueprint "${t}".`))
function N(t){const e=X(T("hideRecipeNames")),i=t.filter(y).flatMap(k).map(w)
p(j(i.filter(x(e))))
const s=i.filter(_(e))
p(M(s)),async function(t){n(4,l=await W(t.map(u))),z("fsh_recipeMgr",l),h()}(s)}const S=([,t])=>t,F=([t,e])=>[t,U(I('#pCC select[name="page"]',e).options).slice(1).map((t=>t.value))],G=([,t])=>t.length,Z=([t,e])=>e.map((e=>[t,e])),D=([t,e])=>d(t,e)
const tt=t=>B(t).includes("quest"),et=([,t])=>tt(t),nt=t=>t.filter(et).map((([,t])=>`Skipping folder "${t}" as it has the word "quest" in folder name.`)),it=([,t])=>!tt(t),st=([t,e])=>[t.previousElementSibling.children[0].href,e]
function at(t){p(['Parsing folder "Unassigned"...'])
const e=P('div[id^="folder_name_"]',t).map((t=>[t,q(t)]))
p(nt(e))
!async function(t){const e=await W(t),n=e.filter(S).map(F).filter(G).flatMap(Z).map(D),i=await W(n)
N(e.map((([,t])=>t)).concat(i))}([["-1",t],...e.filter(it).map(st).map($)])}async function rt(){n(3,r=["Parsing inventing screen ..."])
const t=await d()
t?at(t):p(["Server Error."])}return t.$$set=t=>{"visible"in t&&n(0,i=t.visible)},[i,s,a,r,l,function(){c("close"),n(0,i=!1)},function(){c("sort by name"),n(4,l=l.slice().sort(m)),o*=-1},async function(){const t=await E("fsh_recipeMgr")
t||rt(),n(4,l=t),h()},function(){c("Navigate to recipe")},function(){c("refresh button"),rt()}]}class yt extends e{constructor(t){super(),n(this,t,$t,ht,i,{visible:0},null,[-1,-1,-1])}}const kt={visible:!0}
let wt=0
function Ct(){wt=t(kt,wt,yt)}export{Ct as default}
//# sourceMappingURL=recipeMgr-D3zZe3ud.js.map
