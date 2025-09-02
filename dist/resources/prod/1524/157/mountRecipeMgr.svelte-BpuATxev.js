import{ap as e,x as a,y as s,ak as i,al as t,dY as n,aG as r,D as l,aF as c,B as d,P as o,Q as v,J as p,E as m,L as f,G as u,F as b,bQ as g,C as y,d8 as h,bR as $,bD as w,N as C,I as _,bJ as k,dS as N,s as S,c1 as x,e as j,a0 as M,h as R,aT as E,f as H,ad as P,aX as I,bx as q,bG as D,q as F,aW as G,aA as U,aj as J,bK as L,e5 as Q,bl as T,S as z,dD as A,e6 as B,bC as K,d9 as W,n as X}from"./calfSystem-CQOGdqPv.js"
import{d as Y}from"./daComponents-CXdqJWOP.js"
import{d as Z}from"./daLoadInventory-C9oxmubC.js"
import{f as O}from"./flattenItems-BlJ8UhNB.js"
function V(e,a){a("Navigate to recipe")}var ee=d('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),ae=d(" <br/>",1),se=d('<div class="progress-log svelte-yrdlsb"></div>'),ie=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),te=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),ne=d('<div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"><div class="image svelte-yrdlsb"></div></a></div> <div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"> </a></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"><div class="image tip-dynamic svelte-yrdlsb"></div></div>',1),re=d('<div class="recipes ui-widget-content svelte-yrdlsb"><div class="innerColumnHeader item-container svelte-yrdlsb">Recipe</div> <div class="innerColumnHeader item-container svelte-yrdlsb"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-yrdlsb">Items</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Components</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Target</div> <!></div>'),le=d('<p style="color: red"> </p>')
function ce(e,d){a(d,!0)
let X=s(d,"visible",15,!0),ce=i(t({})),de=i(t({})),oe=i(t([])),ve=i(t([])),pe=1
function me(e){S("Recipe Manager",e)}const fe=(e=-1,a=0)=>j({cmd:"inventing",folder_id:e,page:a}),ue=([,e],[,a])=>pe*x(e,a)
function be(){me("sort by name"),_(ve,p(ve).slice().sort(ue),!0),pe*=-1}function ge(e){_(oe,e.concat(p(oe)),!0)}const ye=(e,a)=>R(`#pCC td[background*="${a}"]`,e).map(e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling]).map(([e,a])=>[e[2],e[10],...a?[Number(E(a).split("/")[1])]:[]])
async function he([e,a,s]){const i=await j({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return ge([`Parsing blueprint ${a}...`]),i?[e,a,s,ye(i,"/inventory/2x3."),ye(i,"/inventory/1x1mini."),...ye(i,"/hellforge/2x3.")]:[e,a,s]}const $e=e=>{return H(D(e).map((a=e,e=>[e,a.filter(a=>a===e).length])))
var a}
async function we(){ge(["Updating inventory."])
const e=await Z()
if(e?.s){const a=O(e.r).map(({b:e})=>e)
_(de,$e(a),!0)}else ge("No inventory.")}async function Ce(){ge(["Updating components."])
const e=await Y()
if(P(e.r)){const a=e.r.map(({b:e})=>e)
_(ce,$e(a),!0)}else ge("No components.")}async function _e(){await M([we(),Ce()]),_(oe,[],!0)}async function ke([e,a]){const s=e.split("=").at(-1),i=await fe(s)
return ge([`Parsing folder "${a}"...`]),[s,i]}const Ne=e=>e,Se=e=>q(J('#pCC a[href*="&recipe_id="]',e)),xe=e=>[e.href.split("=").at(-1),E(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],je=(e,a)=>e.some((e=>a=>a===e)(a))
function Me(e){const a=G(U("hideRecipeNames")),s=e.filter(Ne).flatMap(Se).map(xe)
var i
ge((i=s.filter((e=>([,a])=>je(e,a))(a)),i.map(([,e])=>`Skipping blueprint "${e}" as it is hidden.`)))
const t=s.filter((e=>([,a])=>!je(e,a))(a))
ge((e=>e.map(([,e])=>`Found blueprint "${e}".`))(t)),async function(e){_(ve,await M(e.map(he)),!0),L("fsh_recipeMgr",Q(p(ve))),_e()}(t)}const Re=([,e])=>e,Ee=([e,a])=>[e,q(F('#pCC select[name="page"]',a).options).slice(1).map(e=>e.value)],He=([,e])=>e.length,Pe=([e,a])=>a.map(a=>[e,a]),Ie=([e,a])=>fe(e,a)
const qe=e=>I(e).includes("quest"),De=([,e])=>qe(e),Fe=([,e])=>!qe(e),Ge=([e,a])=>[e.previousElementSibling.children[0].href,a]
function Ue(e){ge(['Parsing folder "Unassigned"...'])
const a=R('div[id^="folder_name_"]',e).map(e=>[e,E(e)])
ge(a.filter(De).map(([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`))
!async function(e){const a=await M(e),s=a.filter(Re).map(Ee).filter(He).flatMap(Pe).map(Ie),i=await M(s)
Me(a.map(([,e])=>e).concat(i))}([["-1",e],...a.filter(Fe).map(Ge).map(ke)])}async function Je(){_(oe,["Parsing inventing screen ..."],!0)
const e=await fe()
e?Ue(e):ge(["Server Error."])}async function Le(){const e=await k("fsh_recipeMgr")
e||Je(),_(ve,e,!0),_e()}function Qe(){me("refresh button"),Je()}{const a=e=>{var a=ee(),s=y(l(a))
h(s,()=>({"--button-color":"#494437","--button-size":"10px"})),N(s.lastChild,{onclick:Qe,children:(e,a)=>{var s=w("Refresh")
f(e,s)}}),f(e,a)}
n(e,{close:function(){me("close"),X(!1)},get visible(){return X()},title:a,children:(e,a)=>{var s=r(),i=l(s)
c(i,Le,null,e=>{var a=r(),s=l(a),i=e=>{var a=se()
b(a,21,()=>p(oe),g,(e,a)=>{var s=ae(),i=l(s)
o(()=>v(i,`${p(a)??""} `)),f(e,s)}),f(e,a)},t=e=>{var a=r(),s=l(a),i=e=>{var a=re(),s=y(m(a),2),i=m(s)
h(i,()=>({"--button-color":"#383838"})),$(i.lastChild,{onclick:be,children:(e,a)=>{var s=w("Name")
f(e,s)},$$slots:{default:!0}})
var t=y(s,8)
b(t,17,()=>p(ve),g,(e,a)=>{var s=K(()=>W(p(a),6)),i=K(()=>W(p(s)[5],2))
let t=()=>p(s)[0],n=()=>p(i)[0]
var r=ne(),c=l(r),d=m(c)
d.__click=[V,me]
var u=m(d)
let h
var $=y(c,2),w=m($)
w.__click=[V,me]
var C=m(w),_=y($,2)
b(_,21,()=>p(s)[3],g,(e,a)=>{var s=K(()=>W(p(a),3))
let i=()=>p(s)[0]
var t=ie(),n=m(t)
let r
var l=y(n,2),c=m(l)
o(e=>{z(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=A(n,"",r,e),v(c,`${p(de)[i()]??0??""}/${p(s)[2]??""}`)},[()=>({"background-image":`url('${T??""}items/${i()??""}.gif')`})]),f(e,t)})
var k=y(_,2)
b(k,21,()=>p(s)[4],g,(e,a)=>{var s=K(()=>W(p(a),3))
let i=()=>p(s)[0]
var t=te(),n=m(t)
let r
var l=y(n,2),c=m(l)
o(e=>{z(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=A(n,"",r,e),v(c,`${p(ce)[i()]??0??""}/${p(s)[2]??""}`)},[()=>({"background-image":`url('${T??""}items/${i()??""}.gif')`})]),f(e,t)})
var N=y(k,2),S=m(N)
let x
o((e,a)=>{z(d,"href",`${B??""}${t()??""}`),h=A(u,"",h,e),z(w,"href",`${B??""}${t()??""}`),v(C,p(s)[1]),z(S,"data-tipped",`fetchitem.php?item_id=${n()??""}&t=2&vcode=${p(i)[1]??""}`),x=A(S,"",x,a)},[()=>({"background-image":`url('${T??""}recipes/${p(s)[2]??""}')`}),()=>({"background-image":`url('${T??""}items/${n()??""}.gif')`})]),f(e,r)}),f(e,a)}
u(s,e=>{p(ve)&&e(i)},!0),f(e,a)}
u(s,e=>{p(oe).length?e(i):e(t,!1)}),f(e,a)},(e,a)=>{var s=le(),i=m(s)
o(()=>v(i,p(a).message)),f(e,s)}),f(e,s)},$$slots:{title:!0,default:!0}})}C()}e(["click"])
const de=t({visible:!0})
let oe=0
function ve(){oe?de.visible=!0:oe=X(ce,{props:de,target:document.body})}export{ve as default}
//# sourceMappingURL=mountRecipeMgr.svelte-BpuATxev.js.map
