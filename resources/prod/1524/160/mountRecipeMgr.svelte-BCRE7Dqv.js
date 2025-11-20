import{ap as e,y as a,z as i,ak as t,al as s,dW as n,aG as r,E as c,aF as l,C as o,P as v,S as d,K as p,F as m,N as f,H as u,G as g,bT as b,D as w,d7 as h,bR as $,bG as k,Q as y,dx as C,bm as _,e6 as N,bD as S,d8 as x,O as j,J as H,bK as M,da as R,s as E,c2 as P,e as I,a1 as q,h as F,aT as G,f as T,ad as U,aX as z,by as D,bI as K,q as L,aW as W,aA as A,aj as J,bL as O,db as Q,t as X}from"./calfSystem-HVCiy-VV.js"
import{d as B}from"./daComponents-BE5UHaNX.js"
import{d as V}from"./daLoadInventory-Ca2XaP78.js"
import{f as Y}from"./flattenItems-DfmfDXsk.js"
var Z=o('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),ee=o(" <br/>",1),ae=o('<div class="progress-log svelte-1vk75w6"></div>'),ie=o('<div><div class="small-image tip-dynamic svelte-1vk75w6"></div> <div> </div></div>'),te=o('<div><div class="small-image tip-dynamic svelte-1vk75w6"></div> <div> </div></div>'),se=o('<div class="item-container svelte-1vk75w6"><a class="svelte-1vk75w6"><div class="image svelte-1vk75w6"></div></a></div> <div class="item-container svelte-1vk75w6"><a class="svelte-1vk75w6"> </a></div> <div class="item-container svelte-1vk75w6"></div> <div class="item-container svelte-1vk75w6"></div> <div class="item-container svelte-1vk75w6"><div class="image tip-dynamic svelte-1vk75w6"></div></div>',1),ne=o('<div class="recipes ui-widget-content svelte-1vk75w6"><div class="innerColumnHeader item-container svelte-1vk75w6">Recipe</div> <div class="innerColumnHeader item-container svelte-1vk75w6"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-1vk75w6">Items</div> <div class="innerColumnHeader item-container svelte-1vk75w6">Components</div> <div class="innerColumnHeader item-container svelte-1vk75w6">Target</div> <!></div>'),re=o('<p style="color: red"> </p>')
function ce(e,o){a(o,!0)
let X=i(o,"visible",15,!0),ce=t(s({})),le=t(s({})),oe=t(s([])),ve=t(s([])),de=1
function pe(e){E("Recipe Manager",e)}const me=(e=-1,a=0)=>I({cmd:"inventing",folder_id:e,page:a}),fe=([,e],[,a])=>de*P(e,a)
function ue(){pe("sort by name"),H(ve,p(ve).slice().sort(fe),!0),de*=-1}function ge(e){H(oe,e.concat(p(oe)),!0)}const be=(e,a)=>F(`#pCC td[background*="${a}"]`,e).map(e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling]).map(([e,a])=>[e[2],e[10],...a?[Number(G(a).split("/")[1])]:[]])
async function we([e,a,i]){const t=await I({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return ge([`Parsing blueprint ${a}...`]),t?[e,a,i,be(t,"/inventory/2x3."),be(t,"/inventory/1x1mini."),...be(t,"/hellforge/2x3.")]:[e,a,i]}const he=e=>{return T(K(e).map((a=e,e=>[e,a.filter(a=>a===e).length])))
var a}
async function $e(){ge(["Updating inventory."])
const e=await V()
if(e?.s){const a=Y(e.r).map(({b:e})=>e)
H(le,he(a),!0)}else ge("No inventory.")}async function ke(){ge(["Updating components."])
const e=await B()
if(U(e.r)){const a=e.r.map(({b:e})=>e)
H(ce,he(a),!0)}else ge("No components.")}async function ye(){await q([$e(),ke()]),H(oe,[],!0)}async function Ce([e,a]){const i=e.split("=").at(-1),t=await me(i)
return ge([`Parsing folder "${a}"...`]),[i,t]}const _e=e=>e,Ne=e=>D(J('#pCC a[href*="&recipe_id="]',e)),Se=e=>[e.href.split("=").at(-1),G(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],xe=(e,a)=>e.some((e=>a=>a===e)(a))
function je(e){const a=W(A("hideRecipeNames")),i=e.filter(_e).flatMap(Ne).map(Se)
var t
ge((t=i.filter((e=>([,a])=>xe(e,a))(a)),t.map(([,e])=>`Skipping blueprint "${e}" as it is hidden.`)))
const s=i.filter((e=>([,a])=>!xe(e,a))(a))
ge((e=>e.map(([,e])=>`Found blueprint "${e}".`))(s)),async function(e){H(ve,await q(e.map(we)),!0),O("fsh_recipeMgr",Q(p(ve))),ye()}(s)}const He=([,e])=>e,Me=([e,a])=>[e,D(L('#pCC select[name="page"]',a).options).slice(1).map(e=>e.value)],Re=([,e])=>e.length,Ee=([e,a])=>a.map(a=>[e,a]),Pe=([e,a])=>me(e,a)
const Ie=e=>z(e).includes("quest"),qe=([,e])=>Ie(e),Fe=([,e])=>!Ie(e),Ge=([e,a])=>[e.previousElementSibling.children[0].href,a]
function Te(e){ge(['Parsing folder "Unassigned"...'])
const a=F('div[id^="folder_name_"]',e).map(e=>[e,G(e)])
ge(a.filter(qe).map(([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`))
!async function(e){const a=await q(e),i=a.filter(He).map(Me).filter(Re).flatMap(Ee).map(Pe),t=await q(i)
je(a.map(([,e])=>e).concat(t))}([["-1",e],...a.filter(Fe).map(Ge).map(Ce)])}async function Ue(){H(oe,["Parsing inventing screen ..."],!0)
const e=await me()
e?Te(e):ge(["Server Error."])}async function ze(){const e=await M("fsh_recipeMgr")
e||Ue(),H(ve,e,!0),ye()}function De(){pe("Navigate to recipe")}function Ke(){pe("refresh button"),Ue()}{const a=e=>{var a=Z(),i=w(c(a))
h(i,()=>({"--button-color":"#494437","--button-size":"10px"})),R(i.lastChild,{onclick:Ke,children:(e,a)=>{var i=k("Refresh")
f(e,i)}}),f(e,a)}
n(e,{close:function(){pe("close"),X(!1)},get visible(){return X()},title:a,children:(e,a)=>{var i=r(),t=c(i)
l(t,ze,null,e=>{var a=r(),i=c(a),t=e=>{var a=ae()
g(a,21,()=>p(oe),b,(e,a)=>{var i=ee(),t=c(i)
v(()=>d(t,`${p(a)??""} `)),f(e,i)}),f(e,a)},s=e=>{var a=r(),i=c(a),t=e=>{var a=ne(),i=w(m(a),2),t=m(i)
h(t,()=>({"--button-color":"#383838"})),$(t.lastChild,{onclick:ue,children:(e,a)=>{var i=k("Name")
f(e,i)},$$slots:{default:!0}})
var s=w(i,8)
g(s,17,()=>p(ve),b,(e,a)=>{var i=S(()=>x(p(a),6)),t=S(()=>x(p(i)[5],2))
let s=()=>p(i)[0],n=()=>p(t)[0]
var r=se(),l=c(r),o=m(l)
o.__click=De
var u=m(o)
let h
var $=w(l,2),k=m($)
k.__click=De
var j=m(k),H=w($,2)
g(H,21,()=>p(i)[3],b,(e,a)=>{var i=S(()=>x(p(a),3))
let t=()=>p(i)[0]
var s=ie(),n=m(s)
let r
var c=w(n,2),l=m(c)
v(()=>{y(n,"data-tipped",`fetchitem.php?item_id=${t()??""}&t=2&vcode=${p(i)[1]??""}`),r=C(n,"",r,{"background-image":`url('${_??""}items/${t()??""}.gif')`}),d(l,`${p(le)[t()]??0??""}/${p(i)[2]??""}`)}),f(e,s)})
var M=w(H,2)
g(M,21,()=>p(i)[4],b,(e,a)=>{var i=S(()=>x(p(a),3))
let t=()=>p(i)[0]
var s=te(),n=m(s)
let r
var c=w(n,2),l=m(c)
v(()=>{y(n,"data-tipped",`fetchitem.php?item_id=${t()??""}&t=2&vcode=${p(i)[1]??""}`),r=C(n,"",r,{"background-image":`url('${_??""}items/${t()??""}.gif')`}),d(l,`${p(ce)[t()]??0??""}/${p(i)[2]??""}`)}),f(e,s)})
var R=w(M,2),E=m(R)
let P
v(()=>{y(o,"href",`${N??""}${s()??""}`),h=C(u,"",h,{"background-image":`url('${_??""}recipes/${p(i)[2]??""}')`}),y(k,"href",`${N??""}${s()??""}`),d(j,p(i)[1]),y(E,"data-tipped",`fetchitem.php?item_id=${n()??""}&t=2&vcode=${p(t)[1]??""}`),P=C(E,"",P,{"background-image":`url('${_??""}items/${n()??""}.gif')`})}),f(e,r)}),f(e,a)}
u(i,e=>{p(ve)&&e(t)},!0),f(e,a)}
u(i,e=>{p(oe).length?e(t):e(s,!1)}),f(e,a)},(e,a)=>{var i=re(),t=m(i)
v(()=>d(t,p(a).message)),f(e,i)}),f(e,i)},$$slots:{title:!0,default:!0}})}j()}e(["click"])
const le=s({visible:!0})
let oe=0
function ve(){oe?le.visible=!0:oe=X(ce,{props:le,target:document.body})}export{ve as default}
//# sourceMappingURL=mountRecipeMgr.svelte-BCRE7Dqv.js.map
