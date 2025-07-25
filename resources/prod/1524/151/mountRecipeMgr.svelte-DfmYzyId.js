import{aq as e,z as a,A as s,al as i,am as t,e5 as n,aG as r,E as l,aF as c,C as d,Q as o,R as v,K as p,F as m,N as f,H as u,G as b,bP as g,D as y,de as h,bQ as $,bC as w,O as C,J as k,bI as _,di as N,s as S,c0 as x,j as H,a1 as M,k as R,aT as E,d as P,f as q,h as F,ae as j,aX as T,bw as U,bF as z,q as B,aW as G,aB as I,ak as J,bJ as Q,dh as A,bk as D,T as K,dN as O,ee as W,bB as X,df as Y,u as L}from"./calfSystem-C1X5YxJZ.js"
import{d as V}from"./daComponents-DpJhlCIJ.js"
function Z(e,a){a("Navigate to recipe")}var ee=d('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),ae=d(" <br/>",1),se=d('<div class="progress-log svelte-yrdlsb"></div>'),ie=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),te=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),ne=d('<div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"><div class="image svelte-yrdlsb"></div></a></div> <div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"> </a></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"><div class="image tip-dynamic svelte-yrdlsb"></div></div>',1),re=d('<div class="recipes ui-widget-content svelte-yrdlsb"><div class="innerColumnHeader item-container svelte-yrdlsb">Recipe</div> <div class="innerColumnHeader item-container svelte-yrdlsb"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-yrdlsb">Items</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Components</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Target</div> <!></div>'),le=d('<p style="color: red"> </p>')
function ce(e,d){a(d,!0)
let L=s(d,"visible",15,!0),ce=i(t({})),de=i(t({})),oe=i(t([])),ve=i(t([])),pe=1
function me(e){S("Recipe Manager",e)}const fe=(e=-1,a=0)=>H({cmd:"inventing",folder_id:e,page:a}),ue=([,e],[,a])=>pe*x(e,a)
function be(){me("sort by name"),k(ve,p(ve).slice().sort(ue),!0),pe*=-1}function ge(e){k(oe,e.concat(p(oe)),!0)}const ye=(e,a)=>R(`#pCC td[background*="${a}"]`,e).map((e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling])).map((([e,a])=>[e[2],e[10],...a?[Number(E(a).split("/")[1])]:[]]))
async function he([e,a,s]){const i=await H({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return ge([`Parsing blueprint ${a}...`]),i?[e,a,s,ye(i,"/inventory/2x3."),ye(i,"/inventory/1x1mini."),...ye(i,"/hellforge/2x3.")]:[e,a,s]}const $e=e=>{return F(z(e).map((a=e,e=>[e,a.filter((a=>a===e)).length])))
var a}
async function we(){ge(["Updating inventory."])
const e=await P()
if(e?.s){const a=q(e.r).map((({b:e})=>e))
k(de,$e(a),!0)}else ge("No inventory.")}async function Ce(){ge(["Updating components."])
const e=await V()
if(j(e.r)){const a=e.r.map((({b:e})=>e))
k(ce,$e(a),!0)}else ge("No components.")}async function ke(){await M([we(),Ce()]),k(oe,[],!0)}async function _e([e,a]){const s=e.split("=").at(-1),i=await fe(s)
return ge([`Parsing folder "${a}"...`]),[s,i]}const Ne=e=>e,Se=e=>U(J('#pCC a[href*="&recipe_id="]',e)),xe=e=>[e.href.split("=").at(-1),E(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],He=(e,a)=>e.some((e=>a=>a===e)(a)),Me=e=>([,a])=>He(e,a),Re=e=>([,a])=>!He(e,a),Ee=e=>e.map((([,e])=>`Skipping blueprint "${e}" as it is hidden.`)),Pe=e=>e.map((([,e])=>`Found blueprint "${e}".`))
function qe(e){const a=G(I("hideRecipeNames")),s=e.filter(Ne).flatMap(Se).map(xe)
ge(Ee(s.filter(Me(a))))
const i=s.filter(Re(a))
ge(Pe(i)),async function(e){k(ve,await M(e.map(he)),!0),Q("fsh_recipeMgr",A(p(ve))),ke()}(i)}const Fe=([,e])=>e,je=([e,a])=>[e,U(B('#pCC select[name="page"]',a).options).slice(1).map((e=>e.value))],Te=([,e])=>e.length,Ue=([e,a])=>a.map((a=>[e,a])),ze=([e,a])=>fe(e,a)
const Be=e=>T(e).includes("quest"),Ge=([,e])=>Be(e),Ie=e=>e.filter(Ge).map((([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`)),Je=([,e])=>!Be(e),Qe=([e,a])=>[e.previousElementSibling.children[0].href,a]
function Ae(e){ge(['Parsing folder "Unassigned"...'])
const a=R('div[id^="folder_name_"]',e).map((e=>[e,E(e)]))
ge(Ie(a))
!async function(e){const a=await M(e),s=a.filter(Fe).map(je).filter(Te).flatMap(Ue).map(ze),i=await M(s)
qe(a.map((([,e])=>e)).concat(i))}([["-1",e],...a.filter(Je).map(Qe).map(_e)])}async function De(){k(oe,["Parsing inventing screen ..."],!0)
const e=await fe()
e?Ae(e):ge(["Server Error."])}async function Ke(){const e=await _("fsh_recipeMgr")
e||De(),k(ve,e,!0),ke()}function Oe(){me("refresh button"),De()}{const a=e=>{var a=ee(),s=y(l(a))
h(s,(()=>({"--button-color":"#494437","--button-size":"10px"}))),N(s.lastChild,{onclick:Oe,children:(e,a)=>{var s=w("Refresh")
f(e,s)}}),f(e,a)}
n(e,{close:function(){me("close"),L(!1)},get visible(){return L()},title:a,children:(e,a)=>{var s=r(),i=l(s)
c(i,Ke,null,(e=>{var a=r(),s=l(a),i=e=>{var a=se()
b(a,21,(()=>p(oe)),g,((e,a)=>{var s=ae(),i=l(s)
o((()=>v(i,`${p(a)??""} `))),f(e,s)})),f(e,a)},t=e=>{var a=r(),s=l(a),i=e=>{var a=re(),s=y(m(a),2),i=m(s)
h(i,(()=>({"--button-color":"#383838"}))),$(i.lastChild,{onclick:be,children:(e,a)=>{var s=w("Name")
f(e,s)},$$slots:{default:!0}})
var t=y(s,8)
b(t,17,(()=>p(ve)),g,((e,a)=>{var s=X((()=>Y(p(a),6))),i=X((()=>Y(p(s)[5],2)))
let t=()=>p(s)[0],n=()=>p(i)[0]
var r=ne(),c=l(r),d=m(c)
d.__click=[Z,me]
var u=m(d)
let h
var $=y(c,2),w=m($)
w.__click=[Z,me]
var C=m(w),k=y($,2)
b(k,21,(()=>p(s)[3]),g,((e,a)=>{var s=X((()=>Y(p(a),3)))
let i=()=>p(s)[0]
var t=ie(),n=m(t)
let r
var l=y(n,2),c=m(l)
o((e=>{K(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=O(n,"",r,e),v(c,`${p(de)[i()]??0??""}/${p(s)[2]??""}`)}),[()=>({"background-image":`url('${D??""}items/${i()??""}.gif')`})]),f(e,t)}))
var _=y(k,2)
b(_,21,(()=>p(s)[4]),g,((e,a)=>{var s=X((()=>Y(p(a),3)))
let i=()=>p(s)[0]
var t=te(),n=m(t)
let r
var l=y(n,2),c=m(l)
o((e=>{K(n,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(s)[1]??""}`),r=O(n,"",r,e),v(c,`${p(ce)[i()]??0??""}/${p(s)[2]??""}`)}),[()=>({"background-image":`url('${D??""}items/${i()??""}.gif')`})]),f(e,t)}))
var N=y(_,2),S=m(N)
let x
o(((e,a)=>{K(d,"href",`${W??""}${t()??""}`),h=O(u,"",h,e),K(w,"href",`${W??""}${t()??""}`),v(C,p(s)[1]),K(S,"data-tipped",`fetchitem.php?item_id=${n()??""}&t=2&vcode=${p(i)[1]??""}`),x=O(S,"",x,a)}),[()=>({"background-image":`url('${D??""}recipes/${p(s)[2]??""}')`}),()=>({"background-image":`url('${D??""}items/${n()??""}.gif')`})]),f(e,r)})),f(e,a)}
u(s,(e=>{p(ve)&&e(i)}),!0),f(e,a)}
u(s,(e=>{p(oe).length?e(i):e(t,!1)})),f(e,a)}),((e,a)=>{var s=le(),i=m(s)
o((()=>v(i,p(a).message))),f(e,s)})),f(e,s)},$$slots:{title:!0,default:!0}})}C()}e(["click"])
const de=t({visible:!0})
let oe=0
function ve(){oe?de.visible=!0:oe=L(ce,{props:de,target:document.body})}export{ve as default}
//# sourceMappingURL=mountRecipeMgr.svelte-DfmYzyId.js.map
