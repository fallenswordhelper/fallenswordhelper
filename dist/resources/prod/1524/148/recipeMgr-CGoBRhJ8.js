import{S as t,P as e,Q as n,bJ as i,bD as s,bE as a,bK as l,bL as r,au as c,U as o,av as d,_ as m,ax as p,a9 as u,a3 as f,bp as g,bw as b,s as v,bX as h,h as $,v as y,l as k,aH as x,f as w,I as C,aL as _,bk as M,bu as N,q as S,aK as j,aq as L,O as R,bx as H,T as q,bF as E,bG as P,R as I,W as U,X as B,a5 as T,a0 as F,a4 as K,a8 as W,b8 as X,bq as z,V as D,e5 as G,a1 as J,dR as O}from"./calfSystem-BldO1y8X.js"
import{d as Q}from"./daComponents-B0-SYnA5.js"
import{d as V}from"./daLoadInventory-B1LI3IE_.js"
import{f as A}from"./flattenItems-g5kEa2JG.js"
import{L as Y}from"./LinkButton-uS4wZBSJ.js"
import{L as Z}from"./LinkButtonBracketed-CpS4fDdD.js"
import{M as tt}from"./ModalTitled-DgIzlEw4.js"
function et(t,e,n){const i=t.slice()
return i[50]=e[n][0],i[51]=e[n][1],i[52]=e[n][2],i[53]=e[n][3],i[54]=e[n][4],i[55]=e[n][5][0],i[56]=e[n][5][1],i[49]=n,i}function nt(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function it(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function st(t,e,n){const i=t.slice()
return i[47]=e[n],i[49]=n,i}function at(t){let e
return{c(){e=f("p"),e.textContent=`${t[65].message}`,g(e,"color","red")},m(t,n){m(t,e,n)},p:q,i:q,o:q,d(t){t&&o(e)}}}function lt(t){let e,n,i,l
const r=[ct,rt],c=[]
function d(t,e){return t[3].length?0:t[4]?1:-1}return~(e=d(t))&&(n=c[e]=r[e](t)),{c(){n&&n.c(),i=p()},m(t,n){~e&&c[e].m(t,n),m(t,i,n),l=!0},p(t,l){let o=e
e=d(t),e===o?~e&&c[e].p(t,l):(n&&(E(),s(c[o],1,1,(()=>{c[o]=null})),P()),~e?(n=c[e],n?n.p(t,l):(n=c[e]=r[e](t),n.c()),a(n,1),n.m(i.parentNode,i)):n=null)},i(t){l||(a(n),l=!0)},o(t){s(n),l=!1},d(t){t&&o(i),~e&&c[e].d(t)}}}function rt(t){let e,n,c,d,p,u,b,v,h,$,y,k,x,w,C=[],_=new Map
p=new Y({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),p.$on("click",t[6])
let M=I(t[4])
const N=t=>t[49]
for(let e=0;e<M.length;e+=1){let n=et(t,M,e),i=N(n)
_.set(i,C[e]=pt(i,n))}return{c(){e=f("div"),n=f("div"),n.textContent="Recipe",c=K(),d=f("div"),u=f("div"),r(p.$$.fragment),b=K(),v=f("div"),v.textContent="Items",h=K(),$=f("div"),$.textContent="Components",y=K(),k=f("div"),k.textContent="Target",x=K()
for(let t=0;t<C.length;t+=1)C[t].c()
T(n,"class","innerColumnHeader item-container svelte-yrdlsb"),g(u,"display","contents"),g(u,"--button-color","#383838"),T(d,"class","innerColumnHeader item-container svelte-yrdlsb"),T(v,"class","innerColumnHeader item-container svelte-yrdlsb"),T($,"class","innerColumnHeader item-container svelte-yrdlsb"),T(k,"class","innerColumnHeader item-container svelte-yrdlsb"),T(e,"class","recipes ui-widget-content svelte-yrdlsb")},m(t,i){m(t,e,i),F(e,n),F(e,c),F(e,d),F(d,u),l(p,u,null),F(e,b),F(e,v),F(e,h),F(e,$),F(e,y),F(e,k),F(e,x)
for(let t=0;t<C.length;t+=1)C[t]&&C[t].m(e,null)
w=!0},p(t,n){const i={}
16&n[2]&&(i.$$scope={dirty:n,ctx:t}),p.$set(i),278&n[0]&&(M=I(t[4]),C=U(C,n,N,1,t,M,_,e,B,pt,null,et))},i(t){w||(a(p.$$.fragment,t),w=!0)},o(t){s(p.$$.fragment,t),w=!1},d(t){t&&o(e),i(p)
for(let t=0;t<C.length;t+=1)C[t].d()}}}function ct(t){let e,n=[],i=new Map,s=I(t[3])
const a=t=>t[49]
for(let e=0;e<s.length;e+=1){let l=st(t,s,e),r=a(l)
i.set(r,n[e]=ut(r,l))}return{c(){e=f("div")
for(let t=0;t<n.length;t+=1)n[t].c()
T(e,"class","progress-log svelte-yrdlsb")},m(t,i){m(t,e,i)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(t,l){8&l[0]&&(s=I(t[3]),n=U(n,l,a,1,t,s,i,e,B,ut,null,st))},i:q,o:q,d(t){t&&o(e)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function ot(t){let e
return{c(){e=u("Name")},m(t,n){m(t,e,n)},d(t){t&&o(e)}}}function dt(t){let e,n,i,s,a,l,r,c,d,p=`url('${X}items/${t[58]}.gif')`,b=(t[2][t[58]]??0)+"",v=t[60]+""
return{c(){e=f("div"),n=f("div"),s=K(),a=f("div"),l=u(b),r=u("/"),c=u(v),d=K(),T(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),T(n,"class","small-image tip-dynamic svelte-yrdlsb"),g(n,"background-image",p)},m(t,i){m(t,e,i),F(e,n),F(e,s),F(e,a),F(a,l),F(a,r),F(a,c),F(e,d)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&T(n,"data-tipped",i),16&e[0]&&p!==(p=`url('${X}items/${t[58]}.gif')`)&&g(n,"background-image",p),20&e[0]&&b!==(b=(t[2][t[58]]??0)+"")&&W(l,b),16&e[0]&&v!==(v=t[60]+"")&&W(c,v)},d(t){t&&o(e)}}}function mt(t){let e,n,i,s,a,l,r,c,d,p=`url('${X}items/${t[58]}.gif')`,b=(t[1][t[58]]??0)+"",v=t[60]+""
return{c(){e=f("div"),n=f("div"),s=K(),a=f("div"),l=u(b),r=u("/"),c=u(v),d=K(),T(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),T(n,"class","small-image tip-dynamic svelte-yrdlsb"),g(n,"background-image",p)},m(t,i){m(t,e,i),F(e,n),F(e,s),F(e,a),F(a,l),F(a,r),F(a,c),F(e,d)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&T(n,"data-tipped",i),16&e[0]&&p!==(p=`url('${X}items/${t[58]}.gif')`)&&g(n,"background-image",p),18&e[0]&&b!==(b=(t[1][t[58]]??0)+"")&&W(l,b),16&e[0]&&v!==(v=t[60]+"")&&W(c,v)},d(t){t&&o(e)}}}function pt(t,e){let n,i,s,a,l,r,c,d,p,b,v,h,$,y,k,x,w,C,_,M,N=`url('${X}recipes/${e[52]}')`,S=e[51]+"",j=`url('${X}items/${e[55]}.gif')`,L=I(e[53]),R=[]
for(let t=0;t<L.length;t+=1)R[t]=dt(it(e,L,t))
let H=I(e[54]),q=[]
for(let t=0;t<H.length;t+=1)q[t]=mt(nt(e,H,t))
return{key:t,first:null,c(){n=f("div"),i=f("a"),s=f("div"),l=K(),r=f("div"),c=f("a"),d=u(S),b=K(),v=f("div")
for(let t=0;t<R.length;t+=1)R[t].c()
h=K(),$=f("div")
for(let t=0;t<q.length;t+=1)q[t].c()
y=K(),k=f("div"),x=f("div"),C=K(),T(s,"class","image svelte-yrdlsb"),g(s,"background-image",N),T(i,"href",a=""+(G+e[50])),T(i,"class","svelte-yrdlsb"),T(n,"class","item-container svelte-yrdlsb"),T(c,"href",p=""+(G+e[50])),T(c,"class","svelte-yrdlsb"),T(r,"class","item-container svelte-yrdlsb"),T(v,"class","item-container svelte-yrdlsb"),T($,"class","item-container svelte-yrdlsb"),T(x,"data-tipped",w="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56]),T(x,"class","image tip-dynamic svelte-yrdlsb"),g(x,"background-image",j),T(k,"class","item-container svelte-yrdlsb"),this.first=n},m(t,a){m(t,n,a),F(n,i),F(i,s),m(t,l,a),m(t,r,a),F(r,c),F(c,d),m(t,b,a),m(t,v,a)
for(let t=0;t<R.length;t+=1)R[t]&&R[t].m(v,null)
m(t,h,a),m(t,$,a)
for(let t=0;t<q.length;t+=1)q[t]&&q[t].m($,null)
m(t,y,a),m(t,k,a),F(k,x),F(k,C),_||(M=[J(i,"click",e[8]),J(c,"click",e[8])],_=!0)},p(t,n){if(e=t,16&n[0]&&N!==(N=`url('${X}recipes/${e[52]}')`)&&g(s,"background-image",N),16&n[0]&&a!==(a=""+(G+e[50]))&&T(i,"href",a),16&n[0]&&S!==(S=e[51]+"")&&W(d,S),16&n[0]&&p!==(p=""+(G+e[50]))&&T(c,"href",p),20&n[0]){let t
for(L=I(e[53]),t=0;t<L.length;t+=1){const i=it(e,L,t)
R[t]?R[t].p(i,n):(R[t]=dt(i),R[t].c(),R[t].m(v,null))}for(;t<R.length;t+=1)R[t].d(1)
R.length=L.length}if(18&n[0]){let t
for(H=I(e[54]),t=0;t<H.length;t+=1){const i=nt(e,H,t)
q[t]?q[t].p(i,n):(q[t]=mt(i),q[t].c(),q[t].m($,null))}for(;t<q.length;t+=1)q[t].d(1)
q.length=H.length}16&n[0]&&w!==(w="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56])&&T(x,"data-tipped",w),16&n[0]&&j!==(j=`url('${X}items/${e[55]}.gif')`)&&g(x,"background-image",j)},d(t){t&&(o(n),o(l),o(r),o(b),o(v),o(h),o($),o(y),o(k)),z(R,t),z(q,t),_=!1,D(M)}}}function ut(t,e){let n,i,s,a=e[47]+""
return{key:t,first:null,c(){n=u(a),i=K(),s=f("br"),this.first=n},m(t,e){m(t,n,e),m(t,i,e),m(t,s,e)},p(t,i){e=t,8&i[0]&&a!==(a=e[47]+"")&&W(n,a)},d(t){t&&(o(n),o(i),o(s))}}}function ft(t){return{c:q,m:q,p:q,i:q,o:q,d:q}}function gt(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:lt,catch:at,error:65,blocks:[,,,]}
return c(t[7](),i),{c(){e=p(),i.block.c()},m(t,s){m(t,e,s),i.block.m(t,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(e,n){d(i,t=e,n)},i(t){n||(a(i.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t]
s(e)}n=!1},d(t){t&&o(e),i.block.d(t),i.token=null,i=null}}}function bt(t){let e
return{c(){e=u("Refresh")},m(t,n){m(t,e,n)},d(t){t&&o(e)}}}function vt(t){let e,n,c,d
return n=new Z({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=u("Recipe Manager\n    "),c=f("div"),r(n.$$.fragment),g(c,"display","contents"),g(c,"--button-color","#494437"),g(c,"--button-size","10px")},m(t,i){m(t,e,i),m(t,c,i),l(n,c,null),d=!0},p(t,e){const i={}
16&e[2]&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){d||(a(n.$$.fragment,t),d=!0)},o(t){s(n.$$.fragment,t),d=!1},d(t){t&&o(e),t&&n&&o(c),i(n,t)}}}function ht(t){let e,n
return e=new tt({props:{visible:t[0],$$slots:{title:[vt],default:[gt]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){r(e.$$.fragment)},m(t,i){l(e,t,i),n=!0},p(t,n){const i={}
1&n[0]&&(i.visible=t[0]),30&n[0]|16&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){s(e.$$.fragment,t),n=!1},d(t){i(e,t)}}}function $t(t,e,n){let{visible:i=!0}=e,s={},a={},l=[],r=[],c=1
function o(t){v("Recipe Manager",t)}const d=(t=-1,e=0)=>$({cmd:"inventing",folder_id:t,page:e}),m=([,t],[,e])=>c*h(t,e)
function p(t){n(3,l=t.concat(l))}const u=(t,e)=>k(`#pCC td[background*="${e}"]`,t).map((t=>[t.children[0].children[0].dataset.tipped.split(/[?&=]/),t.parentNode.nextElementSibling])).map((([t,e])=>[t[2],t[10],...e?[Number(x(e).split("/")[1])]:[]]))
async function f([t,e,n]){const i=await $({cmd:"inventing",subcmd:"viewrecipe",recipe_id:t})
return p([`Parsing blueprint ${e}...`]),i?[t,e,n,u(i,"/inventory/2x3."),u(i,"/inventory/1x1mini."),...u(i,"/hellforge/2x3.")]:[t,e,n]}const g=t=>{return w(N(t).map((e=t,t=>[t,e.filter((e=>e===t)).length])))
var e}
async function q(){p(["Updating inventory."])
const t=await V()
if(t?.s){const e=A(t.r).map((({b:t})=>t))
n(2,a=g(e))}else p("No inventory.")}async function E(){p(["Updating components."])
const t=await Q()
if(C(t.r)){const e=t.r.map((({b:t})=>t))
n(1,s=g(e))}else p("No components.")}async function P(){await y([q(),E()]),n(3,l=[])}async function I([t,e]){const n=t.split("=").at(-1),i=await d(n)
return p([`Parsing folder "${e}"...`]),[n,i]}const U=t=>t,B=t=>M(R('#pCC a[href*="&recipe_id="]',t)),T=t=>[t.href.split("=").at(-1),x(t),t.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],F=(t,e)=>t.some((t=>e=>e===t)(e)),K=t=>([,e])=>F(t,e),W=t=>([,e])=>!F(t,e),X=t=>t.map((([,t])=>`Skipping blueprint "${t}" as it is hidden.`)),z=t=>t.map((([,t])=>`Found blueprint "${t}".`))
function D(t){const e=j(L("hideRecipeNames")),i=t.filter(U).flatMap(B).map(T)
p(X(i.filter(K(e))))
const s=i.filter(W(e))
p(z(s)),async function(t){n(4,r=await y(t.map(f))),H("fsh_recipeMgr",r),P()}(s)}const G=([,t])=>t,J=([t,e])=>[t,M(S('#pCC select[name="page"]',e).options).slice(1).map((t=>t.value))],O=([,t])=>t.length,Y=([t,e])=>e.map((e=>[t,e])),Z=([t,e])=>d(t,e)
const tt=t=>_(t).includes("quest"),et=([,t])=>tt(t),nt=t=>t.filter(et).map((([,t])=>`Skipping folder "${t}" as it has the word "quest" in folder name.`)),it=([,t])=>!tt(t),st=([t,e])=>[t.previousElementSibling.children[0].href,e]
function at(t){p(['Parsing folder "Unassigned"...'])
const e=k('div[id^="folder_name_"]',t).map((t=>[t,x(t)]))
p(nt(e))
!async function(t){const e=await y(t),n=e.filter(G).map(J).filter(O).flatMap(Y).map(Z),i=await y(n)
D(e.map((([,t])=>t)).concat(i))}([["-1",t],...e.filter(it).map(st).map(I)])}async function lt(){n(3,l=["Parsing inventing screen ..."])
const t=await d()
t?at(t):p(["Server Error."])}return t.$$set=t=>{"visible"in t&&n(0,i=t.visible)},[i,s,a,l,r,function(){o("close"),n(0,i=!1)},function(){o("sort by name"),n(4,r=r.slice().sort(m)),c*=-1},async function(){const t=await b("fsh_recipeMgr")
t||lt(),n(4,r=t),P()},function(){o("Navigate to recipe")},function(){o("refresh button"),lt()}]}class yt extends t{constructor(t){super(),e(this,t,$t,ht,n,{visible:0},null,[-1,-1,-1])}}const kt={visible:!0}
let xt=0
function wt(){xt=O(kt,xt,yt)}export{wt as default}
//# sourceMappingURL=recipeMgr-CGoBRhJ8.js.map
