import{ao as e,x as a,y as i,aj as t,ak as s,dR as n,aF as r,D as c,aE as l,B as o,P as v,Q as d,J as p,E as m,L as f,G as u,F as g,bP as w,C as b,d7 as $,bQ as h,bC as k,N as y,I as C,bI as _,dL as N,s as S,c0 as x,e as j,a0 as E,h as M,aS as P,f as R,ac as H,aW as I,bw as F,bF as q,q as L,aV as U,az as z,ai as B,bJ as J,d_ as Q,bk as D,S as G,dw as T,d$ as V,bB as W,d8 as A,n as K}from"./calfSystem-CIuUjh4H.js"
import{d as O}from"./daComponents-DKKOjHMl.js"
import{d as X}from"./daLoadInventory-txdDwksF.js"
import{f as Y}from"./flattenItems-DkF2t92d.js"
function Z(e,a){a("Navigate to recipe")}var ee=o('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),ae=o(" <br/>",1),ie=o('<div class="progress-log svelte-1vk75w6"></div>'),te=o('<div><div class="small-image tip-dynamic svelte-1vk75w6"></div> <div> </div></div>'),se=o('<div><div class="small-image tip-dynamic svelte-1vk75w6"></div> <div> </div></div>'),ne=o('<div class="item-container svelte-1vk75w6"><a class="svelte-1vk75w6"><div class="image svelte-1vk75w6"></div></a></div> <div class="item-container svelte-1vk75w6"><a class="svelte-1vk75w6"> </a></div> <div class="item-container svelte-1vk75w6"></div> <div class="item-container svelte-1vk75w6"></div> <div class="item-container svelte-1vk75w6"><div class="image tip-dynamic svelte-1vk75w6"></div></div>',1),re=o('<div class="recipes ui-widget-content svelte-1vk75w6"><div class="innerColumnHeader item-container svelte-1vk75w6">Recipe</div> <div class="innerColumnHeader item-container svelte-1vk75w6"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-1vk75w6">Items</div> <div class="innerColumnHeader item-container svelte-1vk75w6">Components</div> <div class="innerColumnHeader item-container svelte-1vk75w6">Target</div> <!></div>'),ce=o('<p style="color: red"> </p>')
function le(e,o){a(o,!0)
let K=i(o,"visible",15,!0),le=t(s({})),oe=t(s({})),ve=t(s([])),de=t(s([])),pe=1
function me(e){S("Recipe Manager",e)}const fe=(e=-1,a=0)=>j({cmd:"inventing",folder_id:e,page:a}),ue=([,e],[,a])=>pe*x(e,a)
function ge(){me("sort by name"),C(de,p(de).slice().sort(ue),!0),pe*=-1}function we(e){C(ve,e.concat(p(ve)),!0)}const be=(e,a)=>M(`#pCC td[background*="${a}"]`,e).map(e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling]).map(([e,a])=>[e[2],e[10],...a?[Number(P(a).split("/")[1])]:[]])
async function $e([e,a,i]){const t=await j({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return we([`Parsing blueprint ${a}...`]),t?[e,a,i,be(t,"/inventory/2x3."),be(t,"/inventory/1x1mini."),...be(t,"/hellforge/2x3.")]:[e,a,i]}const he=e=>{return R(q(e).map((a=e,e=>[e,a.filter(a=>a===e).length])))
var a}
async function ke(){we(["Updating inventory."])
const e=await X()
if(e?.s){const a=Y(e.r).map(({b:e})=>e)
C(oe,he(a),!0)}else we("No inventory.")}async function ye(){we(["Updating components."])
const e=await O()
if(H(e.r)){const a=e.r.map(({b:e})=>e)
C(le,he(a),!0)}else we("No components.")}async function Ce(){await E([ke(),ye()]),C(ve,[],!0)}async function _e([e,a]){const i=e.split("=").at(-1),t=await fe(i)
return we([`Parsing folder "${a}"...`]),[i,t]}const Ne=e=>e,Se=e=>F(B('#pCC a[href*="&recipe_id="]',e)),xe=e=>[e.href.split("=").at(-1),P(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],je=(e,a)=>e.some((e=>a=>a===e)(a))
function Ee(e){const a=U(z("hideRecipeNames")),i=e.filter(Ne).flatMap(Se).map(xe)
var t
we((t=i.filter((e=>([,a])=>je(e,a))(a)),t.map(([,e])=>`Skipping blueprint "${e}" as it is hidden.`)))
const s=i.filter((e=>([,a])=>!je(e,a))(a))
we((e=>e.map(([,e])=>`Found blueprint "${e}".`))(s)),async function(e){C(de,await E(e.map($e)),!0),J("fsh_recipeMgr",Q(p(de))),Ce()}(s)}const Me=([,e])=>e,Pe=([e,a])=>[e,F(L('#pCC select[name="page"]',a).options).slice(1).map(e=>e.value)],Re=([,e])=>e.length,He=([e,a])=>a.map(a=>[e,a]),Ie=([e,a])=>fe(e,a)
const Fe=e=>I(e).includes("quest"),qe=([,e])=>Fe(e),Le=([,e])=>!Fe(e),Ue=([e,a])=>[e.previousElementSibling.children[0].href,a]
function ze(e){we(['Parsing folder "Unassigned"...'])
const a=M('div[id^="folder_name_"]',e).map(e=>[e,P(e)])
we(a.filter(qe).map(([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`))
!async function(e){const a=await E(e),i=a.filter(Me).map(Pe).filter(Re).flatMap(He).map(Ie),t=await E(i)
Ee(a.map(([,e])=>e).concat(t))}([["-1",e],...a.filter(Le).map(Ue).map(_e)])}async function Be(){C(ve,["Parsing inventing screen ..."],!0)
const e=await fe()
e?ze(e):we(["Server Error."])}async function Je(){const e=await _("fsh_recipeMgr")
e||Be(),C(de,e,!0),Ce()}function Qe(){me("refresh button"),Be()}{const a=e=>{var a=ee(),i=b(c(a))
$(i,()=>({"--button-color":"#494437","--button-size":"10px"})),N(i.lastChild,{onclick:Qe,children:(e,a)=>{var i=k("Refresh")
f(e,i)}}),f(e,a)}
n(e,{close:function(){me("close"),K(!1)},get visible(){return K()},title:a,children:(e,a)=>{var i=r(),t=c(i)
l(t,Je,null,e=>{var a=r(),i=c(a),t=e=>{var a=ie()
g(a,21,()=>p(ve),w,(e,a)=>{var i=ae(),t=c(i)
v(()=>d(t,`${p(a)??""} `)),f(e,i)}),f(e,a)},s=e=>{var a=r(),i=c(a),t=e=>{var a=re(),i=b(m(a),2),t=m(i)
$(t,()=>({"--button-color":"#383838"})),h(t.lastChild,{onclick:ge,children:(e,a)=>{var i=k("Name")
f(e,i)},$$slots:{default:!0}})
var s=b(i,8)
g(s,17,()=>p(de),w,(e,a)=>{var i=W(()=>A(p(a),6)),t=W(()=>A(p(i)[5],2))
let s=()=>p(i)[0],n=()=>p(t)[0]
var r=ne(),l=c(r),o=m(l)
o.__click=[Z,me]
var u=m(o)
let $
var h=b(l,2),k=m(h)
k.__click=[Z,me]
var y=m(k),C=b(h,2)
g(C,21,()=>p(i)[3],w,(e,a)=>{var i=W(()=>A(p(a),3))
let t=()=>p(i)[0]
var s=te(),n=m(s)
let r
var c=b(n,2),l=m(c)
v(e=>{G(n,"data-tipped",`fetchitem.php?item_id=${t()??""}&t=2&vcode=${p(i)[1]??""}`),r=T(n,"",r,e),d(l,`${p(oe)[t()]??0??""}/${p(i)[2]??""}`)},[()=>({"background-image":`url('${D??""}items/${t()??""}.gif')`})]),f(e,s)})
var _=b(C,2)
g(_,21,()=>p(i)[4],w,(e,a)=>{var i=W(()=>A(p(a),3))
let t=()=>p(i)[0]
var s=se(),n=m(s)
let r
var c=b(n,2),l=m(c)
v(e=>{G(n,"data-tipped",`fetchitem.php?item_id=${t()??""}&t=2&vcode=${p(i)[1]??""}`),r=T(n,"",r,e),d(l,`${p(le)[t()]??0??""}/${p(i)[2]??""}`)},[()=>({"background-image":`url('${D??""}items/${t()??""}.gif')`})]),f(e,s)})
var N=b(_,2),S=m(N)
let x
v((e,a)=>{G(o,"href",`${V??""}${s()??""}`),$=T(u,"",$,e),G(k,"href",`${V??""}${s()??""}`),d(y,p(i)[1]),G(S,"data-tipped",`fetchitem.php?item_id=${n()??""}&t=2&vcode=${p(t)[1]??""}`),x=T(S,"",x,a)},[()=>({"background-image":`url('${D??""}recipes/${p(i)[2]??""}')`}),()=>({"background-image":`url('${D??""}items/${n()??""}.gif')`})]),f(e,r)}),f(e,a)}
u(i,e=>{p(de)&&e(t)},!0),f(e,a)}
u(i,e=>{p(ve).length?e(t):e(s,!1)}),f(e,a)},(e,a)=>{var i=ce(),t=m(i)
v(()=>d(t,p(a).message)),f(e,i)}),f(e,i)},$$slots:{title:!0,default:!0}})}y()}e(["click"])
const oe=s({visible:!0})
let ve=0
function de(){ve?oe.visible=!0:ve=K(le,{props:oe,target:document.body})}export{de as default}
//# sourceMappingURL=mountRecipeMgr.svelte-CnL3x7gW.js.map
