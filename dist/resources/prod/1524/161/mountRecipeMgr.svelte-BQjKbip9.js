import{ap as e,y as a,z as i,ak as t,al as s,dW as n,aG as r,E as c,aF as l,C as o,Q as v,R as d,K as p,F as m,N as f,H as u,G as g,bO as b,D as w,d7 as $,bP as h,bQ as k,O as y,J as C,bH as _,db as N,s as H,b$ as S,e as j,a1 as x,h as E,aT as M,f as R,ad as P,aX as I,bz as q,bE as z,q as F,aW as T,aA as U,aj as G,bI as O,dc as Q,T as W,dw as A,bn as D,e6 as J,cp as K,d8 as L,t as X}from"./calfSystem-Cs6CSxoU.js"
import{d as B}from"./daComponents-pvNpi1mQ.js"
import{d as V}from"./daLoadInventory-Sf3be_xU.js"
import{f as Y}from"./flattenItems-DRADeVyF.js"
var Z=o('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),ee=o(" <br/>",1),ae=o('<div class="progress-log svelte-1vk75w6"></div>'),ie=o('<div><div class="small-image tip-dynamic svelte-1vk75w6"></div> <div> </div></div>'),te=o('<div><div class="small-image tip-dynamic svelte-1vk75w6"></div> <div> </div></div>'),se=o('<div class="item-container svelte-1vk75w6"><a class="svelte-1vk75w6"><div class="image svelte-1vk75w6"></div></a></div> <div class="item-container svelte-1vk75w6"><a class="svelte-1vk75w6"> </a></div> <div class="item-container svelte-1vk75w6"></div> <div class="item-container svelte-1vk75w6"></div> <div class="item-container svelte-1vk75w6"><div class="image tip-dynamic svelte-1vk75w6"></div></div>',1),ne=o('<div class="recipes ui-widget-content svelte-1vk75w6"><div class="innerColumnHeader item-container svelte-1vk75w6">Recipe</div> <div class="innerColumnHeader item-container svelte-1vk75w6"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-1vk75w6">Items</div> <div class="innerColumnHeader item-container svelte-1vk75w6">Components</div> <div class="innerColumnHeader item-container svelte-1vk75w6">Target</div> <!></div>'),re=o('<p style="color: red"> </p>')
function ce(e,o){a(o,!0)
let X=i(o,"visible",15,!0),ce=t(s({})),le=t(s({})),oe=t(s([])),ve=t(s([])),de=1
function pe(e){H("Recipe Manager",e)}const me=(e=-1,a=0)=>j({cmd:"inventing",folder_id:e,page:a}),fe=([,e],[,a])=>de*S(e,a)
function ue(){pe("sort by name"),C(ve,p(ve).slice().sort(fe),!0),de*=-1}function ge(e){C(oe,e.concat(p(oe)),!0)}const be=(e,a)=>E(`#pCC td[background*="${a}"]`,e).map(e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling]).map(([e,a])=>[e[2],e[10],...a?[Number(M(a).split("/")[1])]:[]])
async function we([e,a,i]){const t=await j({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return ge([`Parsing blueprint ${a}...`]),t?[e,a,i,be(t,"/inventory/2x3."),be(t,"/inventory/1x1mini."),...be(t,"/hellforge/2x3.")]:[e,a,i]}const $e=e=>{return R(z(e).map((a=e,e=>[e,a.filter(a=>a===e).length])))
var a}
async function he(){ge(["Updating inventory."])
const e=await V()
if(e?.s){const a=Y(e.r).map(({b:e})=>e)
C(le,$e(a),!0)}else ge("No inventory.")}async function ke(){ge(["Updating components."])
const e=await B()
if(P(e.r)){const a=e.r.map(({b:e})=>e)
C(ce,$e(a),!0)}else ge("No components.")}async function ye(){await x([he(),ke()]),C(oe,[],!0)}async function Ce([e,a]){const i=e.split("=").at(-1),t=await me(i)
return ge([`Parsing folder "${a}"...`]),[i,t]}const _e=e=>e,Ne=e=>q(G('#pCC a[href*="&recipe_id="]',e)),He=e=>[e.href.split("=").at(-1),M(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],Se=(e,a)=>e.some((e=>a=>a===e)(a))
function je(e){const a=T(U("hideRecipeNames")),i=e.filter(_e).flatMap(Ne).map(He)
var t
ge((t=i.filter((e=>([,a])=>Se(e,a))(a)),t.map(([,e])=>`Skipping blueprint "${e}" as it is hidden.`)))
const s=i.filter((e=>([,a])=>!Se(e,a))(a))
ge((e=>e.map(([,e])=>`Found blueprint "${e}".`))(s)),async function(e){C(ve,await x(e.map(we)),!0),O("fsh_recipeMgr",Q(p(ve))),ye()}(s)}const xe=([,e])=>e,Ee=([e,a])=>[e,q(F('#pCC select[name="page"]',a).options).slice(1).map(e=>e.value)],Me=([,e])=>e.length,Re=([e,a])=>a.map(a=>[e,a]),Pe=([e,a])=>me(e,a)
const Ie=e=>I(e).includes("quest"),qe=([,e])=>Ie(e),ze=([,e])=>!Ie(e),Fe=([e,a])=>[e.previousElementSibling.children[0].href,a]
function Te(e){ge(['Parsing folder "Unassigned"...'])
const a=E('div[id^="folder_name_"]',e).map(e=>[e,M(e)])
ge(a.filter(qe).map(([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`))
!async function(e){const a=await x(e),i=a.filter(xe).map(Ee).filter(Me).flatMap(Re).map(Pe),t=await x(i)
je(a.map(([,e])=>e).concat(t))}([["-1",e],...a.filter(ze).map(Fe).map(Ce)])}async function Ue(){C(oe,["Parsing inventing screen ..."],!0)
const e=await me()
e?Te(e):ge(["Server Error."])}async function Ge(){const e=await _("fsh_recipeMgr")
e||Ue(),C(ve,e,!0),ye()}function Oe(){pe("Navigate to recipe")}function Qe(){pe("refresh button"),Ue()}{const a=e=>{var a=Z(),i=w(c(a))
$(i,()=>({"--button-color":"#494437","--button-size":"10px"})),N(i.lastChild,{onclick:Qe,children:(e,a)=>{var i=k("Refresh")
f(e,i)}}),f(e,a)}
n(e,{close:function(){pe("close"),X(!1)},get visible(){return X()},title:a,children:(e,a)=>{var i=r(),t=c(i)
l(t,Ge,null,e=>{var a=r(),i=c(a),t=e=>{var a=ae()
g(a,21,()=>p(oe),b,(e,a)=>{var i=ee(),t=c(i)
v(()=>d(t,`${p(a)??""} `)),f(e,i)}),f(e,a)},s=e=>{var a=r(),i=c(a),t=e=>{var a=ne(),i=w(m(a),2),t=m(i)
$(t,()=>({"--button-color":"#383838"})),h(t.lastChild,{onclick:ue,children:(e,a)=>{var i=k("Name")
f(e,i)},$$slots:{default:!0}})
var s=w(i,8)
g(s,17,()=>p(ve),b,(e,a)=>{var i=K(()=>L(p(a),6)),t=K(()=>L(p(i)[5],2))
let s=()=>p(i)[0],n=()=>p(t)[0]
var r=se(),l=c(r),o=m(l)
o.__click=Oe
var u=m(o)
let $
var h=w(l,2),k=m(h)
k.__click=Oe
var y=m(k),C=w(h,2)
g(C,21,()=>p(i)[3],b,(e,a)=>{var i=K(()=>L(p(a),3))
let t=()=>p(i)[0]
var s=ie(),n=m(s)
let r
var c=w(n,2),l=m(c)
v(()=>{W(n,"data-tipped",`fetchitem.php?item_id=${t()??""}&t=2&vcode=${p(i)[1]??""}`),r=A(n,"",r,{"background-image":`url('${D??""}items/${t()??""}.gif')`}),d(l,`${p(le)[t()]??0??""}/${p(i)[2]??""}`)}),f(e,s)})
var _=w(C,2)
g(_,21,()=>p(i)[4],b,(e,a)=>{var i=K(()=>L(p(a),3))
let t=()=>p(i)[0]
var s=te(),n=m(s)
let r
var c=w(n,2),l=m(c)
v(()=>{W(n,"data-tipped",`fetchitem.php?item_id=${t()??""}&t=2&vcode=${p(i)[1]??""}`),r=A(n,"",r,{"background-image":`url('${D??""}items/${t()??""}.gif')`}),d(l,`${p(ce)[t()]??0??""}/${p(i)[2]??""}`)}),f(e,s)})
var N=w(_,2),H=m(N)
let S
v(()=>{W(o,"href",`${J??""}${s()??""}`),$=A(u,"",$,{"background-image":`url('${D??""}recipes/${p(i)[2]??""}')`}),W(k,"href",`${J??""}${s()??""}`),d(y,p(i)[1]),W(H,"data-tipped",`fetchitem.php?item_id=${n()??""}&t=2&vcode=${p(t)[1]??""}`),S=A(H,"",S,{"background-image":`url('${D??""}items/${n()??""}.gif')`})}),f(e,r)}),f(e,a)}
u(i,e=>{p(ve)&&e(t)},!0),f(e,a)}
u(i,e=>{p(oe).length?e(t):e(s,!1)}),f(e,a)},(e,a)=>{var i=re(),t=m(i)
v(()=>d(t,p(a).message)),f(e,i)}),f(e,i)},$$slots:{title:!0,default:!0}})}y()}e(["click"])
const le=s({visible:!0})
let oe=0
function ve(){oe?le.visible=!0:oe=X(ce,{props:le,target:document.body})}export{ve as default}
//# sourceMappingURL=mountRecipeMgr.svelte-BQjKbip9.js.map
