import{ao as e,x as a,y as s,aj as i,ak as t,d$ as n,aE as r,C as l,aD as c,A as d,O as o,P as v,I as p,D as m,K as f,F as u,E as b,bN as g,B as y,d8 as h,bO as $,bA as w,L as C,H as _,bG as k,dd as N,s as H,b_ as x,e as R,_ as S,h as E,aR as M,f as P,ac as j,aV as U,bu as q,bD as z,q as D,aU as I,az as A,ai as F,bH as O,dc as B,bi as G,R as K,dH as L,e8 as T,bz as V,da as Y,n as J}from"./calfSystem-CT1aM4VG.js"
import{d as Q}from"./daComponents-BDLddLPC.js"
import{d as W,f as X}from"./flattenItems-D5sXdp8R.js"
function Z(e,a){a("Navigate to recipe")}var ee=d('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),ae=d(" <br/>",1),se=d('<div class="progress-log svelte-yrdlsb"></div>'),ie=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),te=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),ne=d('<div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"><div class="image svelte-yrdlsb"></div></a></div> <div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"> </a></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"><div class="image tip-dynamic svelte-yrdlsb"></div></div>',1),re=d('<div class="recipes ui-widget-content svelte-yrdlsb"><div class="innerColumnHeader item-container svelte-yrdlsb">Recipe</div> <div class="innerColumnHeader item-container svelte-yrdlsb"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-yrdlsb">Items</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Components</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Target</div> <!></div>'),le=d('<p style="color: red"> </p>')
function ce(e,d){a(d,!0)
let J=s(d,"visible",15,!0),ce=i(t({})),de=i(t({})),oe=i(t([])),ve=i(t([])),pe=1
function me(e){H("Recipe Manager",e)}const fe=(e=-1,a=0)=>R({cmd:"inventing",folder_id:e,page:a}),ue=([,e],[,a])=>pe*x(e,a)
function be(){me("sort by name"),_(ve,p(ve).slice().sort(ue),!0),pe*=-1}function ge(e){_(oe,e.concat(p(oe)),!0)}const ye=(e,a)=>E(`#pCC td[background*="${a}"]`,e).map((e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling])).map((([e,a])=>[e[2],e[10],...a?[Number(M(a).split("/")[1])]:[]]))
async function he([e,a,s]){const i=await R({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return ge([`Parsing blueprint ${a}...`]),i?[e,a,s,ye(i,"/inventory/2x3."),ye(i,"/inventory/1x1mini."),...ye(i,"/hellforge/2x3.")]:[e,a,s]}const $e=e=>{return P(z(e).map((a=e,e=>[e,a.filter((a=>a===e)).length])))
var a}
async function we(){ge(["Updating inventory."])
const e=await W()
if(e?.s){const a=X(e.r).map((({b:e})=>e))
_(de,$e(a),!0)}else ge("No inventory.")}async function Ce(){ge(["Updating components."])
const e=await Q()
if(j(e.r)){const a=e.r.map((({b:e})=>e))
_(ce,$e(a),!0)}else ge("No components.")}async function _e(){await S([we(),Ce()]),_(oe,[],!0)}async function ke([e,a]){const s=e.split("=").at(-1),i=await fe(s)
return ge([`Parsing folder "${a}"...`]),[s,i]}const Ne=e=>e,He=e=>q(F('#pCC a[href*="&recipe_id="]',e)),xe=e=>[e.href.split("=").at(-1),M(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],Re=(e,a)=>e.some((e=>a=>a===e)(a)),Se=e=>([,a])=>Re(e,a),Ee=e=>([,a])=>!Re(e,a),Me=e=>e.map((([,e])=>`Skipping blueprint "${e}" as it is hidden.`)),Pe=e=>e.map((([,e])=>`Found blueprint "${e}".`))
function je(e){const a=I(A("hideRecipeNames")),s=e.filter(Ne).flatMap(He).map(xe)
ge(Me(s.filter(Se(a))))
const i=s.filter(Ee(a))
ge(Pe(i)),async function(e){_(ve,await S(e.map(he)),!0),O("fsh_recipeMgr",B(p(ve))),_e()}(i)}const Ue=([,e])=>e,qe=([e,a])=>[e,q(D('#pCC select[name="page"]',a).options).slice(1).map((e=>e.value))],ze=([,e])=>e.length,De=([e,a])=>a.map((a=>[e,a])),Ie=([e,a])=>fe(e,a)
const Ae=e=>U(e).includes("quest"),Fe=([,e])=>Ae(e),Oe=e=>e.filter(Fe).map((([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`)),Be=([,e])=>!Ae(e),Ge=([e,a])=>[e.previousElementSibling.children[0].href,a]
function Ke(e){ge(['Parsing folder "Unassigned"...'])
const a=E('div[id^="folder_name_"]',e).map((e=>[e,M(e)]))
ge(Oe(a))
!async function(e){const a=await S(e),s=a.filter(Ue).map(qe).filter(ze).flatMap(De).map(Ie),i=await S(s)
je(a.map((([,e])=>e)).concat(i))}([["-1",e],...a.filter(Be).map(Ge).map(ke)])}async function Le(){_(oe,["Parsing inventing screen ..."],!0)
const e=await fe()
e?Ke(e):ge(["Server Error."])}async function Te(){const e=await k("fsh_recipeMgr")
e||Le(),_(ve,e,!0),_e()}function Ve(){me("refresh button"),Le()}{const a=e=>{var a=ee(),s=y(l(a))
h(s,(()=>({"--button-color":"#494437","--button-size":"10px"}))),N(s.lastChild,{onclick:Ve,children:(e,a)=>{var s=w("Refresh")
f(e,s)}}),f(e,a)}
n(e,{close:function(){me("close"),J(!1)},get visible(){return J()},title:a,children:(e,a)=>{var s=r(),i=l(s)
c(i,Te,null,(e=>{var a=r(),s=l(a),i=e=>{var a=se()
b(a,21,(()=>p(oe)),g,((e,a)=>{var s=ae(),i=l(s)
o((()=>v(i,`${p(a)??""} `))),f(e,s)})),f(e,a)},t=e=>{var a=r(),s=l(a),i=e=>{var a=re(),s=y(m(a),2),i=m(s)
h(i,(()=>({"--button-color":"#383838"}))),$(i.lastChild,{onclick:be,children:(e,a)=>{var s=w("Name")
f(e,s)},$$slots:{default:!0}})
var t=y(s,8)
b(t,17,(()=>p(ve)),g,((e,a)=>{var s=V((()=>Y(p(a),6))),i=V((()=>Y(p(s)[5],2)))
let t=()=>p(s)[0],n=()=>p(i)[0]
var r=ne(),c=l(r),d=m(c)
d.__click=[Z,me]
var u=m(d)
let h
var $=y(c,2),w=m($)
w.__click=[Z,me]
var C=m(w),_=y($,2)
b(_,21,(()=>p(s)[3]),g,((e,a)=>{var s=V((()=>Y(p(a),3)))
let i=()=>p(s)[0]
var t=ie(),n=m(t)
let r
var l=y(n,2),c=m(l)
o((e=>{K(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=L(n,"",r,e),v(c,`${p(de)[i()]??0??""}/${p(s)[2]??""}`)}),[()=>({"background-image":`url('${G??""}items/${i()??""}.gif')`})]),f(e,t)}))
var k=y(_,2)
b(k,21,(()=>p(s)[4]),g,((e,a)=>{var s=V((()=>Y(p(a),3)))
let i=()=>p(s)[0]
var t=te(),n=m(t)
let r
var l=y(n,2),c=m(l)
o((e=>{K(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=L(n,"",r,e),v(c,`${p(ce)[i()]??0??""}/${p(s)[2]??""}`)}),[()=>({"background-image":`url('${G??""}items/${i()??""}.gif')`})]),f(e,t)}))
var N=y(k,2),H=m(N)
let x
o(((e,a)=>{K(d,"href",`${T??""}${t()??""}`),h=L(u,"",h,e),K(w,"href",`${T??""}${t()??""}`),v(C,p(s)[1]),K(H,"data-tipped",`fetchitem.php?item_id=${n()??""}&t=2&vcode=${p(i)[1]??""}`),x=L(H,"",x,a)}),[()=>({"background-image":`url('${G??""}recipes/${p(s)[2]??""}')`}),()=>({"background-image":`url('${G??""}items/${n()??""}.gif')`})]),f(e,r)})),f(e,a)}
u(s,(e=>{p(ve)&&e(i)}),!0),f(e,a)}
u(s,(e=>{p(oe).length?e(i):e(t,!1)})),f(e,a)}),((e,a)=>{var s=le(),i=m(s)
o((()=>v(i,p(a).message))),f(e,s)})),f(e,s)},$$slots:{title:!0,default:!0}})}C()}e(["click"])
const de=t({visible:!0})
let oe=0
function ve(){oe?de.visible=!0:oe=J(ce,{props:de,target:document.body})}export{ve as default}
//# sourceMappingURL=mountRecipeMgr.svelte-BHo3Z4dE.js.map
