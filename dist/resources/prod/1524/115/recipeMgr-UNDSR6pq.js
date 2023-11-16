import{i as t}from"./instantiate-zhKnqr-J.js"
import{S as e,J as n,K as i,b9 as s,ba as a,b4 as o,b7 as r,bb as l,ah as c,P as m,X as p,_ as d,L as f,aX as u,s as h,bk as g,W as v,b5 as b,b6 as $,e as k,k as y,al as C,M as w,N as x,Q as j,aH as _,d6 as M,U as N,a0 as S,aY as H,Y as L,f as E,ad as P,aS as R,q,am as I,I as U}from"./calfSystem-dEoRVG2S.js"
import{h as B,u as T}from"./await_block-LFXQ2_nx.js"
import{e as Y,u as F,d as X}from"./each-rfoBEd-I.js"
import{d as z}from"./daComponents-h9SwmRvi.js"
import{d as A}from"./daLoadInventory-91dpda39.js"
import{f as D}from"./flattenItems-OuxkqZMH.js"
import{a as J}from"./all-TTLWag-d.js"
import{c as K}from"./csvSplit-jneKbju3.js"
import{i as Q}from"./isArray-bNviZzJA.js"
import{L as W}from"./LinkButton-QDAQbbJK.js"
import{L as G}from"./LinkButtonBracketed-WOCGf0UU.js"
import{u as O}from"./uniq-x2DnzZWs.js"
import{M as V}from"./ModalTitled-TC2wuLwx.js"
import{g as Z,s as tt}from"./idb-ZfKvo_GP.js"
import"./Modal-9pDKNTPt.js"
function et(t,e,n){const i=t.slice()
return i[50]=e[n][0],i[51]=e[n][1],i[52]=e[n][2],i[53]=e[n][3],i[54]=e[n][4],i[55]=e[n][5][0],i[56]=e[n][5][1],i[49]=n,i}function nt(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function it(t,e,n){const i=t.slice()
return i[58]=e[n][0],i[59]=e[n][1],i[60]=e[n][2],i}function st(t,e,n){const i=t.slice()
return i[47]=e[n],i[49]=n,i}function at(t){let e
return{c(){e=f("p"),e.textContent=`${t[65].message}`,u(e,"color","red")},m(t,n){m(t,e,n)},p:v,i:v,o:v,d(t){t&&p(e)}}}function ot(t){let e,n,i,s
const a=[lt,rt],l=[]
function d(t,e){return t[3].length?0:t[4]?1:-1}return~(e=d(t))&&(n=l[e]=a[e](t)),{c(){n&&n.c(),i=c()},m(t,n){~e&&l[e].m(t,n),m(t,i,n),s=!0},p(t,s){let c=e
e=d(t),e===c?~e&&l[e].p(t,s):(n&&(b(),r(l[c],1,1,(()=>{l[c]=null})),$()),~e?(n=l[e],n?n.p(t,s):(n=l[e]=a[e](t),n.c()),o(n,1),n.m(i.parentNode,i)):n=null)},i(t){s||(o(n),s=!0)},o(t){r(n),s=!1},d(t){t&&p(i),~e&&l[e].d(t)}}}function rt(t){let e,n,i,c,d,h,g,v,b,$,k,y,C,_,M=[],N=new Map
d=new W({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),d.$on("click",t[6])
let S=Y(t[4])
const H=t=>t[49]
for(let e=0;e<S.length;e+=1){let n=et(t,S,e),i=H(n)
N.set(i,M[e]=dt(i,n))}return{c(){e=f("div"),n=f("div"),n.textContent="Recipe",i=w(),c=f("div"),h=f("div"),s(d.$$.fragment),g=w(),v=f("div"),v.textContent="Items",b=w(),$=f("div"),$.textContent="Components",k=w(),y=f("div"),y.textContent="Target",C=w()
for(let t=0;t<M.length;t+=1)M[t].c()
x(n,"class","innerColumnHeader item-container svelte-11h9b8h"),u(h,"display","contents"),u(h,"--button-color","#383838"),x(c,"class","innerColumnHeader item-container svelte-11h9b8h"),x(v,"class","innerColumnHeader item-container svelte-11h9b8h"),x($,"class","innerColumnHeader item-container svelte-11h9b8h"),x(y,"class","innerColumnHeader item-container svelte-11h9b8h"),x(e,"class","recipes ui-widget-content svelte-11h9b8h")},m(t,s){m(t,e,s),j(e,n),j(e,i),j(e,c),j(c,h),a(d,h,null),j(e,g),j(e,v),j(e,b),j(e,$),j(e,k),j(e,y),j(e,C)
for(let t=0;t<M.length;t+=1)M[t]&&M[t].m(e,null)
_=!0},p(t,n){const i={}
16&n[2]&&(i.$$scope={dirty:n,ctx:t}),d.$set(i),278&n[0]&&(S=Y(t[4]),M=F(M,n,H,1,t,S,N,e,X,dt,null,et))},i(t){_||(o(d.$$.fragment,t),_=!0)},o(t){r(d.$$.fragment,t),_=!1},d(t){t&&p(e),l(d)
for(let t=0;t<M.length;t+=1)M[t].d()}}}function lt(t){let e,n=[],i=new Map,s=Y(t[3])
const a=t=>t[49]
for(let e=0;e<s.length;e+=1){let o=st(t,s,e),r=a(o)
i.set(r,n[e]=ft(r,o))}return{c(){e=f("div")
for(let t=0;t<n.length;t+=1)n[t].c()
x(e,"class","progress-log svelte-11h9b8h")},m(t,i){m(t,e,i)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(t,o){8&o[0]&&(s=Y(t[3]),n=F(n,o,a,1,t,s,i,e,X,ft,null,st))},i:v,o:v,d(t){t&&p(e)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function ct(t){let e
return{c(){e=d("Name")},m(t,n){m(t,e,n)},d(t){t&&p(e)}}}function mt(t){let e,n,i,s,a,o,r,l,c,h=`url('${_}items/${t[58]}.gif')`,g=(t[2][t[58]]??0)+"",v=t[60]+""
return{c(){e=f("div"),n=f("div"),s=w(),a=f("div"),o=d(g),r=d("/"),l=d(v),c=w(),x(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),x(n,"class","small-image tip-dynamic svelte-11h9b8h"),u(n,"background-image",h)},m(t,i){m(t,e,i),j(e,n),j(e,s),j(e,a),j(a,o),j(a,r),j(a,l),j(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&x(n,"data-tipped",i),16&e[0]&&h!==(h=`url('${_}items/${t[58]}.gif')`)&&u(n,"background-image",h),20&e[0]&&g!==(g=(t[2][t[58]]??0)+"")&&S(o,g),16&e[0]&&v!==(v=t[60]+"")&&S(l,v)},d(t){t&&p(e)}}}function pt(t){let e,n,i,s,a,o,r,l,c,h=`url('${_}items/${t[58]}.gif')`,g=(t[1][t[58]]??0)+"",v=t[60]+""
return{c(){e=f("div"),n=f("div"),s=w(),a=f("div"),o=d(g),r=d("/"),l=d(v),c=w(),x(n,"data-tipped",i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59]),x(n,"class","small-image tip-dynamic svelte-11h9b8h"),u(n,"background-image",h)},m(t,i){m(t,e,i),j(e,n),j(e,s),j(e,a),j(a,o),j(a,r),j(a,l),j(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[58]+"&t=2&vcode="+t[59])&&x(n,"data-tipped",i),16&e[0]&&h!==(h=`url('${_}items/${t[58]}.gif')`)&&u(n,"background-image",h),18&e[0]&&g!==(g=(t[1][t[58]]??0)+"")&&S(o,g),16&e[0]&&v!==(v=t[60]+"")&&S(l,v)},d(t){t&&p(e)}}}function dt(t,e){let n,i,s,a,o,r,l,c,h,g,v,b,$,k,y,C,E,P,R,q,I=`url('${_}recipes/${e[52]}')`,U=e[51]+"",B=`url('${_}items/${e[55]}.gif')`,T=Y(e[53]),F=[]
for(let t=0;t<T.length;t+=1)F[t]=mt(it(e,T,t))
let X=Y(e[54]),z=[]
for(let t=0;t<X.length;t+=1)z[t]=pt(nt(e,X,t))
return{key:t,first:null,c(){n=f("div"),i=f("a"),s=f("div"),o=w(),r=f("div"),l=f("a"),c=d(U),g=w(),v=f("div")
for(let t=0;t<F.length;t+=1)F[t].c()
b=w(),$=f("div")
for(let t=0;t<z.length;t+=1)z[t].c()
k=w(),y=f("div"),C=f("div"),P=w(),x(s,"class","image svelte-11h9b8h"),u(s,"background-image",I),x(i,"href",a=""+(M+e[50])),x(i,"class","svelte-11h9b8h"),x(n,"class","item-container svelte-11h9b8h"),x(l,"href",h=""+(M+e[50])),x(l,"class","svelte-11h9b8h"),x(r,"class","item-container svelte-11h9b8h"),x(v,"class","item-container svelte-11h9b8h"),x($,"class","item-container svelte-11h9b8h"),x(C,"data-tipped",E="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56]),x(C,"class","image tip-dynamic svelte-11h9b8h"),u(C,"background-image",B),x(y,"class","item-container svelte-11h9b8h"),this.first=n},m(t,a){m(t,n,a),j(n,i),j(i,s),m(t,o,a),m(t,r,a),j(r,l),j(l,c),m(t,g,a),m(t,v,a)
for(let t=0;t<F.length;t+=1)F[t]&&F[t].m(v,null)
m(t,b,a),m(t,$,a)
for(let t=0;t<z.length;t+=1)z[t]&&z[t].m($,null)
m(t,k,a),m(t,y,a),j(y,C),j(y,P),R||(q=[N(i,"click",e[8]),N(l,"click",e[8])],R=!0)},p(t,n){if(e=t,16&n[0]&&I!==(I=`url('${_}recipes/${e[52]}')`)&&u(s,"background-image",I),16&n[0]&&a!==(a=""+(M+e[50]))&&x(i,"href",a),16&n[0]&&U!==(U=e[51]+"")&&S(c,U),16&n[0]&&h!==(h=""+(M+e[50]))&&x(l,"href",h),20&n[0]){let t
for(T=Y(e[53]),t=0;t<T.length;t+=1){const i=it(e,T,t)
F[t]?F[t].p(i,n):(F[t]=mt(i),F[t].c(),F[t].m(v,null))}for(;t<F.length;t+=1)F[t].d(1)
F.length=T.length}if(18&n[0]){let t
for(X=Y(e[54]),t=0;t<X.length;t+=1){const i=nt(e,X,t)
z[t]?z[t].p(i,n):(z[t]=pt(i),z[t].c(),z[t].m($,null))}for(;t<z.length;t+=1)z[t].d(1)
z.length=X.length}16&n[0]&&E!==(E="fetchitem.php?item_id="+e[55]+"&t=2&vcode="+e[56])&&x(C,"data-tipped",E),16&n[0]&&B!==(B=`url('${_}items/${e[55]}.gif')`)&&u(C,"background-image",B)},d(t){t&&(p(n),p(o),p(r),p(g),p(v),p(b),p($),p(k),p(y)),H(F,t),H(z,t),R=!1,L(q)}}}function ft(t,e){let n,i,s,a=e[47]+""
return{key:t,first:null,c(){n=d(a),i=w(),s=f("br"),this.first=n},m(t,e){m(t,n,e),m(t,i,e),m(t,s,e)},p(t,i){e=t,8&i[0]&&a!==(a=e[47]+"")&&S(n,a)},d(t){t&&(p(n),p(i),p(s))}}}function ut(t){return{c:v,m:v,p:v,i:v,o:v,d:v}}function ht(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!0,pending:ut,then:ot,catch:at,error:65,blocks:[,,,]}
return B(t[7](),i),{c(){e=c(),i.block.c()},m(t,s){m(t,e,s),i.block.m(t,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(e,n){T(i,t=e,n)},i(t){n||(o(i.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t]
r(e)}n=!1},d(t){t&&p(e),i.block.d(t),i.token=null,i=null}}}function gt(t){let e
return{c(){e=d("Refresh")},m(t,n){m(t,e,n)},d(t){t&&p(e)}}}function vt(t){let e,n,i,c
return n=new G({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=d("Recipe Manager\n    "),i=f("div"),s(n.$$.fragment),u(i,"display","contents"),u(i,"--button-color","#494437"),u(i,"--button-size","10px")},m(t,s){m(t,e,s),m(t,i,s),a(n,i,null),c=!0},p(t,e){const i={}
16&e[2]&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){c||(o(n.$$.fragment,t),c=!0)},o(t){r(n.$$.fragment,t),c=!1},d(t){t&&p(e),t&&n&&p(i),l(n,t)}}}function bt(t){let e,n
return e=new V({props:{visible:t[0],$$slots:{title:[vt],default:[ht]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){s(e.$$.fragment)},m(t,i){a(e,t,i),n=!0},p(t,n){const i={}
1&n[0]&&(i.visible=t[0]),30&n[0]|16&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function $t(t,e,n){let{visible:i=!0}=e,s={},a={},o=[],r=[],l=1
function c(t){h("Recipe Manager",t)}const m=(t=-1,e=0)=>k({cmd:"inventing",folder_id:t,page:e}),p=([,t],[,e])=>l*g(t,e)
function d(t){n(3,o=t.concat(o))}const f=(t,e)=>y(`#pCC td[background*="${e}"]`,t).map((t=>[t.children[0].children[0].dataset.tipped.split(/[?&=]/),t.parentNode.nextElementSibling])).map((([t,e])=>[t[2],t[10],...e?[Number(C(e).split("/")[1])]:[]]))
async function u([t,e,n]){const i=await k({cmd:"inventing",subcmd:"viewrecipe",recipe_id:t})
return d([`Parsing blueprint ${e}...`]),i?[t,e,n,f(i,"/inventory/2x3."),f(i,"/inventory/1x1mini."),...f(i,"/hellforge/2x3.")]:[t,e,n]}const v=t=>{return E(O(t).map((e=t,t=>[t,e.filter((e=>e===t)).length])))
var e}
async function b(){d(["Updating inventory."])
const t=await A()
if(t?.s){const e=D(t.r).map((({b:t})=>t))
n(2,a=v(e))}else d("No inventory.")}async function $(){d(["Updating components."])
const t=await z()
if(Q(t.r)){const e=t.r.map((({b:t})=>t))
n(1,s=v(e))}else d("No components.")}async function w(){await J([b(),$()]),n(3,o=[])}async function x([t,e]){const n=t.split("=").at(-1),i=await m(n)
return d([`Parsing folder "${e}"...`]),[n,i]}const j=t=>t,_=t=>R(U('#pCC a[href*="&recipe_id="]',t)),M=t=>[t.href.split("=").at(-1),C(t),t.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],N=(t,e)=>t.some((t=>e=>e===t)(e)),S=t=>([,e])=>N(t,e),H=t=>([,e])=>!N(t,e),L=t=>t.map((([,t])=>`Skipping blueprint "${t}" as it is hidden.`)),B=t=>t.map((([,t])=>`Found blueprint "${t}".`))
function T(t){const e=K(P("hideRecipeNames")),i=t.filter(j).flatMap(_).map(M)
d(L(i.filter(S(e))))
const s=i.filter(H(e))
d(B(s)),async function(t){n(4,r=await J(t.map(u))),tt("fsh_recipeMgr",r),w()}(s)}const Y=([,t])=>t,F=([t,e])=>[t,R(q('#pCC select[name="page"]',e).options).slice(1).map((t=>t.value))],X=([,t])=>t.length,W=([t,e])=>e.map((e=>[t,e])),G=([t,e])=>m(t,e)
const V=t=>I(t).includes("quest"),et=([,t])=>V(t),nt=t=>t.filter(et).map((([,t])=>`Skipping folder "${t}" as it has the word "quest" in folder name.`)),it=([,t])=>!V(t),st=([t,e])=>[t.previousElementSibling.children[0].href,e]
function at(t){d(['Parsing folder "Unassigned"...'])
const e=y('div[id^="folder_name_"]',t).map((t=>[t,C(t)]))
d(nt(e))
!async function(t){const e=await J(t),n=e.filter(Y).map(F).filter(X).flatMap(W).map(G),i=await J(n)
T(e.map((([,t])=>t)).concat(i))}([["-1",t],...e.filter(it).map(st).map(x)])}async function ot(){n(3,o=["Parsing inventing screen ..."])
const t=await m()
t?at(t):d(["Server Error."])}return t.$$set=t=>{"visible"in t&&n(0,i=t.visible)},[i,s,a,o,r,function(){c("close"),n(0,i=!1)},function(){c("sort by name"),n(4,r=r.slice().sort(p)),l*=-1},async function(){const t=await Z("fsh_recipeMgr")
t||ot(),n(4,r=t),w()},function(){c("Navigate to recipe")},function(){c("refresh button"),ot()}]}var kt=class extends e{constructor(t){super(),n(this,t,$t,bt,i,{visible:0},null,[-1,-1,-1])}}
const yt={visible:!0}
let Ct=0
function wt(){Ct=t(yt,Ct,kt)}export{wt as default}
//# sourceMappingURL=recipeMgr-UNDSR6pq.js.map
