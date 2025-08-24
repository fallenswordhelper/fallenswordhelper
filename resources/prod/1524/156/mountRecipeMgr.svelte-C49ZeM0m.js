import{ap as e,x as a,y as s,ak as i,al as t,dX as n,aF as r,D as l,aE as c,B as d,P as o,Q as v,J as p,E as m,L as f,G as u,F as b,bO as g,C as y,d3 as h,bP as $,bB as w,N as C,I as _,bH as k,dR as N,s as S,b$ as x,e as E,a0 as j,h as H,aS as M,f as P,ad as R,aW as I,bv as U,bE as q,q as B,aV as F,aA as A,aj as L,bI as z,e4 as D,bj as G,S as J,dB as O,e5 as Q,bA as T,d5 as V,n as W}from"./calfSystem-79LsojAC.js"
import{d as X}from"./daComponents-Cjweul_Q.js"
import{d as K}from"./daLoadInventory-DZfMiDnc.js"
import{f as Y}from"./flattenItems-B2ndrBJ6.js"
function Z(e,a){a("Navigate to recipe")}var ee=d('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),ae=d(" <br/>",1),se=d('<div class="progress-log svelte-yrdlsb"></div>'),ie=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),te=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),ne=d('<div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"><div class="image svelte-yrdlsb"></div></a></div> <div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"> </a></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"><div class="image tip-dynamic svelte-yrdlsb"></div></div>',1),re=d('<div class="recipes ui-widget-content svelte-yrdlsb"><div class="innerColumnHeader item-container svelte-yrdlsb">Recipe</div> <div class="innerColumnHeader item-container svelte-yrdlsb"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-yrdlsb">Items</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Components</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Target</div> <!></div>'),le=d('<p style="color: red"> </p>')
function ce(e,d){a(d,!0)
let W=s(d,"visible",15,!0),ce=i(t({})),de=i(t({})),oe=i(t([])),ve=i(t([])),pe=1
function me(e){S("Recipe Manager",e)}const fe=(e=-1,a=0)=>E({cmd:"inventing",folder_id:e,page:a}),ue=([,e],[,a])=>pe*x(e,a)
function be(){me("sort by name"),_(ve,p(ve).slice().sort(ue),!0),pe*=-1}function ge(e){_(oe,e.concat(p(oe)),!0)}const ye=(e,a)=>H(`#pCC td[background*="${a}"]`,e).map(e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling]).map(([e,a])=>[e[2],e[10],...a?[Number(M(a).split("/")[1])]:[]])
async function he([e,a,s]){const i=await E({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return ge([`Parsing blueprint ${a}...`]),i?[e,a,s,ye(i,"/inventory/2x3."),ye(i,"/inventory/1x1mini."),...ye(i,"/hellforge/2x3.")]:[e,a,s]}const $e=e=>{return P(q(e).map((a=e,e=>[e,a.filter(a=>a===e).length])))
var a}
async function we(){ge(["Updating inventory."])
const e=await K()
if(e?.s){const a=Y(e.r).map(({b:e})=>e)
_(de,$e(a),!0)}else ge("No inventory.")}async function Ce(){ge(["Updating components."])
const e=await X()
if(R(e.r)){const a=e.r.map(({b:e})=>e)
_(ce,$e(a),!0)}else ge("No components.")}async function _e(){await j([we(),Ce()]),_(oe,[],!0)}async function ke([e,a]){const s=e.split("=").at(-1),i=await fe(s)
return ge([`Parsing folder "${a}"...`]),[s,i]}const Ne=e=>e,Se=e=>U(L('#pCC a[href*="&recipe_id="]',e)),xe=e=>[e.href.split("=").at(-1),M(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],Ee=(e,a)=>e.some((e=>a=>a===e)(a))
function je(e){const a=F(A("hideRecipeNames")),s=e.filter(Ne).flatMap(Se).map(xe)
var i
ge((i=s.filter((e=>([,a])=>Ee(e,a))(a)),i.map(([,e])=>`Skipping blueprint "${e}" as it is hidden.`)))
const t=s.filter((e=>([,a])=>!Ee(e,a))(a))
ge((e=>e.map(([,e])=>`Found blueprint "${e}".`))(t)),async function(e){_(ve,await j(e.map(he)),!0),z("fsh_recipeMgr",D(p(ve))),_e()}(t)}const He=([,e])=>e,Me=([e,a])=>[e,U(B('#pCC select[name="page"]',a).options).slice(1).map(e=>e.value)],Pe=([,e])=>e.length,Re=([e,a])=>a.map(a=>[e,a]),Ie=([e,a])=>fe(e,a)
const Ue=e=>I(e).includes("quest"),qe=([,e])=>Ue(e),Be=([,e])=>!Ue(e),Fe=([e,a])=>[e.previousElementSibling.children[0].href,a]
function Ae(e){ge(['Parsing folder "Unassigned"...'])
const a=H('div[id^="folder_name_"]',e).map(e=>[e,M(e)])
ge(a.filter(qe).map(([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`))
!async function(e){const a=await j(e),s=a.filter(He).map(Me).filter(Pe).flatMap(Re).map(Ie),i=await j(s)
je(a.map(([,e])=>e).concat(i))}([["-1",e],...a.filter(Be).map(Fe).map(ke)])}async function Le(){_(oe,["Parsing inventing screen ..."],!0)
const e=await fe()
e?Ae(e):ge(["Server Error."])}async function ze(){const e=await k("fsh_recipeMgr")
e||Le(),_(ve,e,!0),_e()}function De(){me("refresh button"),Le()}{const a=e=>{var a=ee(),s=y(l(a))
h(s,()=>({"--button-color":"#494437","--button-size":"10px"})),N(s.lastChild,{onclick:De,children:(e,a)=>{var s=w("Refresh")
f(e,s)}}),f(e,a)}
n(e,{close:function(){me("close"),W(!1)},get visible(){return W()},title:a,children:(e,a)=>{var s=r(),i=l(s)
c(i,ze,null,e=>{var a=r(),s=l(a),i=e=>{var a=se()
b(a,21,()=>p(oe),g,(e,a)=>{var s=ae(),i=l(s)
o(()=>v(i,`${p(a)??""} `)),f(e,s)}),f(e,a)},t=e=>{var a=r(),s=l(a),i=e=>{var a=re(),s=y(m(a),2),i=m(s)
h(i,()=>({"--button-color":"#383838"})),$(i.lastChild,{onclick:be,children:(e,a)=>{var s=w("Name")
f(e,s)},$$slots:{default:!0}})
var t=y(s,8)
b(t,17,()=>p(ve),g,(e,a)=>{var s=T(()=>V(p(a),6)),i=T(()=>V(p(s)[5],2))
let t=()=>p(s)[0],n=()=>p(i)[0]
var r=ne(),c=l(r),d=m(c)
d.__click=[Z,me]
var u=m(d)
let h
var $=y(c,2),w=m($)
w.__click=[Z,me]
var C=m(w),_=y($,2)
b(_,21,()=>p(s)[3],g,(e,a)=>{var s=T(()=>V(p(a),3))
let i=()=>p(s)[0]
var t=ie(),n=m(t)
let r
var l=y(n,2),c=m(l)
o(e=>{J(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=O(n,"",r,e),v(c,`${p(de)[i()]??0??""}/${p(s)[2]??""}`)},[()=>({"background-image":`url('${G??""}items/${i()??""}.gif')`})]),f(e,t)})
var k=y(_,2)
b(k,21,()=>p(s)[4],g,(e,a)=>{var s=T(()=>V(p(a),3))
let i=()=>p(s)[0]
var t=te(),n=m(t)
let r
var l=y(n,2),c=m(l)
o(e=>{J(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=O(n,"",r,e),v(c,`${p(ce)[i()]??0??""}/${p(s)[2]??""}`)},[()=>({"background-image":`url('${G??""}items/${i()??""}.gif')`})]),f(e,t)})
var N=y(k,2),S=m(N)
let x
o((e,a)=>{J(d,"href",`${Q??""}${t()??""}`),h=O(u,"",h,e),J(w,"href",`${Q??""}${t()??""}`),v(C,p(s)[1]),J(S,"data-tipped",`fetchitem.php?item_id=${n()??""}&t=2&vcode=${p(i)[1]??""}`),x=O(S,"",x,a)},[()=>({"background-image":`url('${G??""}recipes/${p(s)[2]??""}')`}),()=>({"background-image":`url('${G??""}items/${n()??""}.gif')`})]),f(e,r)}),f(e,a)}
u(s,e=>{p(ve)&&e(i)},!0),f(e,a)}
u(s,e=>{p(oe).length?e(i):e(t,!1)}),f(e,a)},(e,a)=>{var s=le(),i=m(s)
o(()=>v(i,p(a).message)),f(e,s)}),f(e,s)},$$slots:{title:!0,default:!0}})}C()}e(["click"])
const de=t({visible:!0})
let oe=0
function ve(){oe?de.visible=!0:oe=W(ce,{props:de,target:document.body})}export{ve as default}
//# sourceMappingURL=mountRecipeMgr.svelte-C49ZeM0m.js.map
