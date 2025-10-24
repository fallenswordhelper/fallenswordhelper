import{ap as e,y as a,z as i,ak as t,al as s,dW as n,aG as r,E as c,aF as l,C as o,Q as v,R as d,K as p,F as m,N as f,H as u,G as g,bR as b,D as w,d7 as h,bS as $,bE as k,O as y,J as C,bK as _,da as N,s as S,c1 as x,e as H,a1 as R,h as j,aT as E,f as M,ad as P,aX as q,by as F,bH as I,q as T,aW as U,aA as z,aj as D,bL as G,db as K,bm as L,T as W,dx as A,e6 as J,bD as O,d8 as Q,t as X}from"./calfSystem-CIdPz3EO.js"
import{d as B}from"./daComponents-Dg3C-sEL.js"
import{d as V}from"./daLoadInventory-wjRxPaFd.js"
import{f as Y}from"./flattenItems-DQDjjuI2.js"
function Z(e,a){a("Navigate to recipe")}var ee=o('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),ae=o(" <br/>",1),ie=o('<div class="progress-log svelte-1vk75w6"></div>'),te=o('<div><div class="small-image tip-dynamic svelte-1vk75w6"></div> <div> </div></div>'),se=o('<div><div class="small-image tip-dynamic svelte-1vk75w6"></div> <div> </div></div>'),ne=o('<div class="item-container svelte-1vk75w6"><a class="svelte-1vk75w6"><div class="image svelte-1vk75w6"></div></a></div> <div class="item-container svelte-1vk75w6"><a class="svelte-1vk75w6"> </a></div> <div class="item-container svelte-1vk75w6"></div> <div class="item-container svelte-1vk75w6"></div> <div class="item-container svelte-1vk75w6"><div class="image tip-dynamic svelte-1vk75w6"></div></div>',1),re=o('<div class="recipes ui-widget-content svelte-1vk75w6"><div class="innerColumnHeader item-container svelte-1vk75w6">Recipe</div> <div class="innerColumnHeader item-container svelte-1vk75w6"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-1vk75w6">Items</div> <div class="innerColumnHeader item-container svelte-1vk75w6">Components</div> <div class="innerColumnHeader item-container svelte-1vk75w6">Target</div> <!></div>'),ce=o('<p style="color: red"> </p>')
function le(e,o){a(o,!0)
let X=i(o,"visible",15,!0),le=t(s({})),oe=t(s({})),ve=t(s([])),de=t(s([])),pe=1
function me(e){S("Recipe Manager",e)}const fe=(e=-1,a=0)=>H({cmd:"inventing",folder_id:e,page:a}),ue=([,e],[,a])=>pe*x(e,a)
function ge(){me("sort by name"),C(de,p(de).slice().sort(ue),!0),pe*=-1}function be(e){C(ve,e.concat(p(ve)),!0)}const we=(e,a)=>j(`#pCC td[background*="${a}"]`,e).map(e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling]).map(([e,a])=>[e[2],e[10],...a?[Number(E(a).split("/")[1])]:[]])
async function he([e,a,i]){const t=await H({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return be([`Parsing blueprint ${a}...`]),t?[e,a,i,we(t,"/inventory/2x3."),we(t,"/inventory/1x1mini."),...we(t,"/hellforge/2x3.")]:[e,a,i]}const $e=e=>{return M(I(e).map((a=e,e=>[e,a.filter(a=>a===e).length])))
var a}
async function ke(){be(["Updating inventory."])
const e=await V()
if(e?.s){const a=Y(e.r).map(({b:e})=>e)
C(oe,$e(a),!0)}else be("No inventory.")}async function ye(){be(["Updating components."])
const e=await B()
if(P(e.r)){const a=e.r.map(({b:e})=>e)
C(le,$e(a),!0)}else be("No components.")}async function Ce(){await R([ke(),ye()]),C(ve,[],!0)}async function _e([e,a]){const i=e.split("=").at(-1),t=await fe(i)
return be([`Parsing folder "${a}"...`]),[i,t]}const Ne=e=>e,Se=e=>F(D('#pCC a[href*="&recipe_id="]',e)),xe=e=>[e.href.split("=").at(-1),E(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],He=(e,a)=>e.some((e=>a=>a===e)(a))
function Re(e){const a=U(z("hideRecipeNames")),i=e.filter(Ne).flatMap(Se).map(xe)
var t
be((t=i.filter((e=>([,a])=>He(e,a))(a)),t.map(([,e])=>`Skipping blueprint "${e}" as it is hidden.`)))
const s=i.filter((e=>([,a])=>!He(e,a))(a))
be((e=>e.map(([,e])=>`Found blueprint "${e}".`))(s)),async function(e){C(de,await R(e.map(he)),!0),G("fsh_recipeMgr",K(p(de))),Ce()}(s)}const je=([,e])=>e,Ee=([e,a])=>[e,F(T('#pCC select[name="page"]',a).options).slice(1).map(e=>e.value)],Me=([,e])=>e.length,Pe=([e,a])=>a.map(a=>[e,a]),qe=([e,a])=>fe(e,a)
const Fe=e=>q(e).includes("quest"),Ie=([,e])=>Fe(e),Te=([,e])=>!Fe(e),Ue=([e,a])=>[e.previousElementSibling.children[0].href,a]
function ze(e){be(['Parsing folder "Unassigned"...'])
const a=j('div[id^="folder_name_"]',e).map(e=>[e,E(e)])
be(a.filter(Ie).map(([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`))
!async function(e){const a=await R(e),i=a.filter(je).map(Ee).filter(Me).flatMap(Pe).map(qe),t=await R(i)
Re(a.map(([,e])=>e).concat(t))}([["-1",e],...a.filter(Te).map(Ue).map(_e)])}async function De(){C(ve,["Parsing inventing screen ..."],!0)
const e=await fe()
e?ze(e):be(["Server Error."])}async function Ge(){const e=await _("fsh_recipeMgr")
e||De(),C(de,e,!0),Ce()}function Ke(){me("refresh button"),De()}{const a=e=>{var a=ee(),i=w(c(a))
h(i,()=>({"--button-color":"#494437","--button-size":"10px"})),N(i.lastChild,{onclick:Ke,children:(e,a)=>{var i=k("Refresh")
f(e,i)}}),f(e,a)}
n(e,{close:function(){me("close"),X(!1)},get visible(){return X()},title:a,children:(e,a)=>{var i=r(),t=c(i)
l(t,Ge,null,e=>{var a=r(),i=c(a),t=e=>{var a=ie()
g(a,21,()=>p(ve),b,(e,a)=>{var i=ae(),t=c(i)
v(()=>d(t,`${p(a)??""} `)),f(e,i)}),f(e,a)},s=e=>{var a=r(),i=c(a),t=e=>{var a=re(),i=w(m(a),2),t=m(i)
h(t,()=>({"--button-color":"#383838"})),$(t.lastChild,{onclick:ge,children:(e,a)=>{var i=k("Name")
f(e,i)},$$slots:{default:!0}})
var s=w(i,8)
g(s,17,()=>p(de),b,(e,a)=>{var i=O(()=>Q(p(a),6)),t=O(()=>Q(p(i)[5],2))
let s=()=>p(i)[0],n=()=>p(t)[0]
var r=ne(),l=c(r),o=m(l)
o.__click=[Z,me]
var u=m(o)
let h
var $=w(l,2),k=m($)
k.__click=[Z,me]
var y=m(k),C=w($,2)
g(C,21,()=>p(i)[3],b,(e,a)=>{var i=O(()=>Q(p(a),3))
let t=()=>p(i)[0]
var s=te(),n=m(s)
let r
var c=w(n,2),l=m(c)
v(e=>{W(n,"data-tipped",`fetchitem.php?item_id=${t()??""}&t=2&vcode=${p(i)[1]??""}`),r=A(n,"",r,e),d(l,`${p(oe)[t()]??0??""}/${p(i)[2]??""}`)},[()=>({"background-image":`url('${L??""}items/${t()??""}.gif')`})]),f(e,s)})
var _=w(C,2)
g(_,21,()=>p(i)[4],b,(e,a)=>{var i=O(()=>Q(p(a),3))
let t=()=>p(i)[0]
var s=se(),n=m(s)
let r
var c=w(n,2),l=m(c)
v(e=>{W(n,"data-tipped",`fetchitem.php?item_id=${t()??""}&t=2&vcode=${p(i)[1]??""}`),r=A(n,"",r,e),d(l,`${p(le)[t()]??0??""}/${p(i)[2]??""}`)},[()=>({"background-image":`url('${L??""}items/${t()??""}.gif')`})]),f(e,s)})
var N=w(_,2),S=m(N)
let x
v((e,a)=>{W(o,"href",`${J??""}${s()??""}`),h=A(u,"",h,e),W(k,"href",`${J??""}${s()??""}`),d(y,p(i)[1]),W(S,"data-tipped",`fetchitem.php?item_id=${n()??""}&t=2&vcode=${p(t)[1]??""}`),x=A(S,"",x,a)},[()=>({"background-image":`url('${L??""}recipes/${p(i)[2]??""}')`}),()=>({"background-image":`url('${L??""}items/${n()??""}.gif')`})]),f(e,r)}),f(e,a)}
u(i,e=>{p(de)&&e(t)},!0),f(e,a)}
u(i,e=>{p(ve).length?e(t):e(s,!1)}),f(e,a)},(e,a)=>{var i=ce(),t=m(i)
v(()=>d(t,p(a).message)),f(e,i)}),f(e,i)},$$slots:{title:!0,default:!0}})}y()}e(["click"])
const oe=s({visible:!0})
let ve=0
function de(){ve?oe.visible=!0:ve=X(le,{props:oe,target:document.body})}export{de as default}
//# sourceMappingURL=mountRecipeMgr.svelte-b83FeA5q.js.map
