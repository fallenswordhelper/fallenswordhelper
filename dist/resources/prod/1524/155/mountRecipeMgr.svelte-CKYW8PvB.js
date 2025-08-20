import{ao as e,x as a,y as s,aj as i,ak as t,e0 as n,aE as r,C as l,aD as c,A as d,O as o,P as v,I as p,D as m,K as f,F as u,E as b,bN as g,B as y,d9 as h,bO as $,bA as w,L as C,H as _,bG as k,de as N,s as x,b_ as H,e as R,_ as S,h as E,aR as M,f as j,ac as I,aV as P,bu as U,bD as q,q as z,aU as D,az as A,ai as F,bH as L,dd as O,bi as B,R as G,dI as K,e9 as T,bz as V,db as Z,n as J}from"./calfSystem-UyQ_FKFu.js"
import{d as Q}from"./daComponents-CR5qvPSg.js"
import{d as W}from"./daLoadInventory-BOvQZ3xF.js"
import{f as X}from"./flattenItems-hxdYvdCT.js"
function Y(e,a){a("Navigate to recipe")}var ee=d('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),ae=d(" <br/>",1),se=d('<div class="progress-log svelte-yrdlsb"></div>'),ie=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),te=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),ne=d('<div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"><div class="image svelte-yrdlsb"></div></a></div> <div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"> </a></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"><div class="image tip-dynamic svelte-yrdlsb"></div></div>',1),re=d('<div class="recipes ui-widget-content svelte-yrdlsb"><div class="innerColumnHeader item-container svelte-yrdlsb">Recipe</div> <div class="innerColumnHeader item-container svelte-yrdlsb"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-yrdlsb">Items</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Components</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Target</div> <!></div>'),le=d('<p style="color: red"> </p>')
function ce(e,d){a(d,!0)
let J=s(d,"visible",15,!0),ce=i(t({})),de=i(t({})),oe=i(t([])),ve=i(t([])),pe=1
function me(e){x("Recipe Manager",e)}const fe=(e=-1,a=0)=>R({cmd:"inventing",folder_id:e,page:a}),ue=([,e],[,a])=>pe*H(e,a)
function be(){me("sort by name"),_(ve,p(ve).slice().sort(ue),!0),pe*=-1}function ge(e){_(oe,e.concat(p(oe)),!0)}const ye=(e,a)=>E(`#pCC td[background*="${a}"]`,e).map(e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling]).map(([e,a])=>[e[2],e[10],...a?[Number(M(a).split("/")[1])]:[]])
async function he([e,a,s]){const i=await R({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return ge([`Parsing blueprint ${a}...`]),i?[e,a,s,ye(i,"/inventory/2x3."),ye(i,"/inventory/1x1mini."),...ye(i,"/hellforge/2x3.")]:[e,a,s]}const $e=e=>{return j(q(e).map((a=e,e=>[e,a.filter(a=>a===e).length])))
var a}
async function we(){ge(["Updating inventory."])
const e=await W()
if(e?.s){const a=X(e.r).map(({b:e})=>e)
_(de,$e(a),!0)}else ge("No inventory.")}async function Ce(){ge(["Updating components."])
const e=await Q()
if(I(e.r)){const a=e.r.map(({b:e})=>e)
_(ce,$e(a),!0)}else ge("No components.")}async function _e(){await S([we(),Ce()]),_(oe,[],!0)}async function ke([e,a]){const s=e.split("=").at(-1),i=await fe(s)
return ge([`Parsing folder "${a}"...`]),[s,i]}const Ne=e=>e,xe=e=>U(F('#pCC a[href*="&recipe_id="]',e)),He=e=>[e.href.split("=").at(-1),M(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],Re=(e,a)=>e.some((e=>a=>a===e)(a))
function Se(e){const a=D(A("hideRecipeNames")),s=e.filter(Ne).flatMap(xe).map(He)
var i
ge((i=s.filter((e=>([,a])=>Re(e,a))(a)),i.map(([,e])=>`Skipping blueprint "${e}" as it is hidden.`)))
const t=s.filter((e=>([,a])=>!Re(e,a))(a))
ge((e=>e.map(([,e])=>`Found blueprint "${e}".`))(t)),async function(e){_(ve,await S(e.map(he)),!0),L("fsh_recipeMgr",O(p(ve))),_e()}(t)}const Ee=([,e])=>e,Me=([e,a])=>[e,U(z('#pCC select[name="page"]',a).options).slice(1).map(e=>e.value)],je=([,e])=>e.length,Ie=([e,a])=>a.map(a=>[e,a]),Pe=([e,a])=>fe(e,a)
const Ue=e=>P(e).includes("quest"),qe=([,e])=>Ue(e),ze=([,e])=>!Ue(e),De=([e,a])=>[e.previousElementSibling.children[0].href,a]
function Ae(e){ge(['Parsing folder "Unassigned"...'])
const a=E('div[id^="folder_name_"]',e).map(e=>[e,M(e)])
ge(a.filter(qe).map(([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`))
!async function(e){const a=await S(e),s=a.filter(Ee).map(Me).filter(je).flatMap(Ie).map(Pe),i=await S(s)
Se(a.map(([,e])=>e).concat(i))}([["-1",e],...a.filter(ze).map(De).map(ke)])}async function Fe(){_(oe,["Parsing inventing screen ..."],!0)
const e=await fe()
e?Ae(e):ge(["Server Error."])}async function Le(){const e=await k("fsh_recipeMgr")
e||Fe(),_(ve,e,!0),_e()}function Oe(){me("refresh button"),Fe()}{const a=e=>{var a=ee(),s=y(l(a))
h(s,()=>({"--button-color":"#494437","--button-size":"10px"})),N(s.lastChild,{onclick:Oe,children:(e,a)=>{var s=w("Refresh")
f(e,s)}}),f(e,a)}
n(e,{close:function(){me("close"),J(!1)},get visible(){return J()},title:a,children:(e,a)=>{var s=r(),i=l(s)
c(i,Le,null,e=>{var a=r(),s=l(a),i=e=>{var a=se()
b(a,21,()=>p(oe),g,(e,a)=>{var s=ae(),i=l(s)
o(()=>v(i,`${p(a)??""} `)),f(e,s)}),f(e,a)},t=e=>{var a=r(),s=l(a),i=e=>{var a=re(),s=y(m(a),2),i=m(s)
h(i,()=>({"--button-color":"#383838"})),$(i.lastChild,{onclick:be,children:(e,a)=>{var s=w("Name")
f(e,s)},$$slots:{default:!0}})
var t=y(s,8)
b(t,17,()=>p(ve),g,(e,a)=>{var s=V(()=>Z(p(a),6)),i=V(()=>Z(p(s)[5],2))
let t=()=>p(s)[0],n=()=>p(i)[0]
var r=ne(),c=l(r),d=m(c)
d.__click=[Y,me]
var u=m(d)
let h
var $=y(c,2),w=m($)
w.__click=[Y,me]
var C=m(w),_=y($,2)
b(_,21,()=>p(s)[3],g,(e,a)=>{var s=V(()=>Z(p(a),3))
let i=()=>p(s)[0]
var t=ie(),n=m(t)
let r
var l=y(n,2),c=m(l)
o(e=>{G(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=K(n,"",r,e),v(c,`${p(de)[i()]??0??""}/${p(s)[2]??""}`)},[()=>({"background-image":`url('${B??""}items/${i()??""}.gif')`})]),f(e,t)})
var k=y(_,2)
b(k,21,()=>p(s)[4],g,(e,a)=>{var s=V(()=>Z(p(a),3))
let i=()=>p(s)[0]
var t=te(),n=m(t)
let r
var l=y(n,2),c=m(l)
o(e=>{G(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=K(n,"",r,e),v(c,`${p(ce)[i()]??0??""}/${p(s)[2]??""}`)},[()=>({"background-image":`url('${B??""}items/${i()??""}.gif')`})]),f(e,t)})
var N=y(k,2),x=m(N)
let H
o((e,a)=>{G(d,"href",`${T??""}${t()??""}`),h=K(u,"",h,e),G(w,"href",`${T??""}${t()??""}`),v(C,p(s)[1]),G(x,"data-tipped",`fetchitem.php?item_id=${n()??""}&t=2&vcode=${p(i)[1]??""}`),H=K(x,"",H,a)},[()=>({"background-image":`url('${B??""}recipes/${p(s)[2]??""}')`}),()=>({"background-image":`url('${B??""}items/${n()??""}.gif')`})]),f(e,r)}),f(e,a)}
u(s,e=>{p(ve)&&e(i)},!0),f(e,a)}
u(s,e=>{p(oe).length?e(i):e(t,!1)}),f(e,a)},(e,a)=>{var s=le(),i=m(s)
o(()=>v(i,p(a).message)),f(e,s)}),f(e,s)},$$slots:{title:!0,default:!0}})}C()}e(["click"])
const de=t({visible:!0})
let oe=0
function ve(){oe?de.visible=!0:oe=J(ce,{props:de,target:document.body})}export{ve as default}
//# sourceMappingURL=mountRecipeMgr.svelte-CKYW8PvB.js.map
