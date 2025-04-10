import{a6 as e,R as a,bE as s,S as i,T as t,dZ as n,at as r,au as l,as as c,X as d,a7 as o,a8 as v,V as p,Z as m,a3 as u,a0 as f,_ as b,Y as g,d7 as y,bF as $,bq as h,a4 as w,W as C,bx as _,da as k,s as S,bS as x,k as N,x as H,n as M,aH as R,d as E,f as q,j as P,K as j,aL as F,bk as U,bu as K,q as T,aK as V,ao as Z,Q as z,by as I,d9 as L,bH as Q,br as W,dF as X,b8 as Y,e7 as A,ad as B}from"./calfSystem-BGOTz8de.js"
import{d as D}from"./daComponents-U_NVlv7j.js"
function G(e,a){a("Navigate to recipe")}var J=d('Recipe Manager <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),O=d(" <br>",1),ee=d('<div class="progress-log svelte-yrdlsb"></div>'),ae=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),se=d('<div><div class="small-image tip-dynamic svelte-yrdlsb"></div> <div> </div></div>'),ie=d('<div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"><div class="image svelte-yrdlsb"></div></a></div> <div class="item-container svelte-yrdlsb"><a class="svelte-yrdlsb"> </a></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"></div> <div class="item-container svelte-yrdlsb"><div class="image tip-dynamic svelte-yrdlsb"></div></div>',1),te=d('<div class="recipes ui-widget-content svelte-yrdlsb"><div class="innerColumnHeader item-container svelte-yrdlsb">Recipe</div> <div class="innerColumnHeader item-container svelte-yrdlsb"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="innerColumnHeader item-container svelte-yrdlsb">Items</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Components</div> <div class="innerColumnHeader item-container svelte-yrdlsb">Target</div> <!></div>'),ne=d('<p style="color: red"> </p>')
function re(e,d){a(d,!0)
let B=s(d,"visible",15,!0),re=i(t({})),le=i(t({})),ce=i(t([])),de=i(t([])),oe=1
function ve(e){S("Recipe Manager",e)}const pe=(e=-1,a=0)=>N({cmd:"inventing",folder_id:e,page:a}),me=([,e],[,a])=>oe*x(e,a)
function ue(){ve("sort by name"),C(de,p(de).slice().sort(me),!0),oe*=-1}function fe(e){C(ce,e.concat(p(ce)),!0)}const be=(e,a)=>M(`#pCC td[background*="${a}"]`,e).map((e=>[e.children[0].children[0].dataset.tipped.split(/[?&=]/),e.parentNode.nextElementSibling])).map((([e,a])=>[e[2],e[10],...a?[Number(R(a).split("/")[1])]:[]]))
async function ge([e,a,s]){const i=await N({cmd:"inventing",subcmd:"viewrecipe",recipe_id:e})
return fe([`Parsing blueprint ${a}...`]),i?[e,a,s,be(i,"/inventory/2x3."),be(i,"/inventory/1x1mini."),...be(i,"/hellforge/2x3.")]:[e,a,s]}const ye=e=>{return P(K(e).map((a=e,e=>[e,a.filter((a=>a===e)).length])))
var a}
async function $e(){fe(["Updating inventory."])
const e=await E()
if(e?.s){const a=q(e.r).map((({b:e})=>e))
C(le,ye(a),!0)}else fe("No inventory.")}async function he(){fe(["Updating components."])
const e=await D()
if(j(e.r)){const a=e.r.map((({b:e})=>e))
C(re,ye(a),!0)}else fe("No components.")}async function we(){await H([$e(),he()]),C(ce,[],!0)}async function Ce([e,a]){const s=e.split("=").at(-1),i=await pe(s)
return fe([`Parsing folder "${a}"...`]),[s,i]}const _e=e=>e,ke=e=>U(z('#pCC a[href*="&recipe_id="]',e)),Se=e=>[e.href.split("=").at(-1),R(e),e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],xe=(e,a)=>e.some((e=>a=>a===e)(a)),Ne=e=>([,a])=>xe(e,a),He=e=>([,a])=>!xe(e,a),Me=e=>e.map((([,e])=>`Skipping blueprint "${e}" as it is hidden.`)),Re=e=>e.map((([,e])=>`Found blueprint "${e}".`))
function Ee(e){const a=V(Z("hideRecipeNames")),s=e.filter(_e).flatMap(ke).map(Se)
fe(Me(s.filter(Ne(a))))
const i=s.filter(He(a))
fe(Re(i)),async function(e){C(de,await H(e.map(ge)),!0),I("fsh_recipeMgr",L(p(de))),we()}(i)}const qe=([,e])=>e,Pe=([e,a])=>[e,U(T('#pCC select[name="page"]',a).options).slice(1).map((e=>e.value))],je=([,e])=>e.length,Fe=([e,a])=>a.map((a=>[e,a])),Ue=([e,a])=>pe(e,a)
const Ke=e=>F(e).includes("quest"),Te=([,e])=>Ke(e),Ve=e=>e.filter(Te).map((([,e])=>`Skipping folder "${e}" as it has the word "quest" in folder name.`)),Ze=([,e])=>!Ke(e),ze=([e,a])=>[e.previousElementSibling.children[0].href,a]
function Ie(e){fe(['Parsing folder "Unassigned"...'])
const a=M('div[id^="folder_name_"]',e).map((e=>[e,R(e)]))
fe(Ve(a))
!async function(e){const a=await H(e),s=a.filter(qe).map(Pe).filter(je).flatMap(Fe).map(Ue),i=await H(s)
Ee(a.map((([,e])=>e)).concat(i))}([["-1",e],...a.filter(Ze).map(ze).map(Ce)])}async function Le(){C(ce,["Parsing inventing screen ..."],!0)
const e=await pe()
e?Ie(e):fe(["Server Error."])}async function Qe(){const e=await _("fsh_recipeMgr")
e||Le(),C(de,e,!0),we()}function We(){ve("refresh button"),Le()}{const a=e=>{var a=J(),s=g(l(a))
y(s,(()=>({"--button-color":"#494437","--button-size":"10px"}))),k(s.lastChild,{onclick:We,children:(e,a)=>{var s=h("Refresh")
u(e,s)}}),u(e,a)}
n(e,{close:function(){ve("close"),B(!1)},get visible(){return B()},title:a,children:(e,a)=>{var s=r(),i=l(s)
c(i,Qe,null,(e=>{var a=r(),s=l(a),i=e=>{var a=ee()
b(a,21,(()=>p(ce)),Q,((e,a)=>{var s=O(),i=l(s)
o((()=>v(i,`${p(a)??""} `))),u(e,s)})),u(e,a)},t=(e,a)=>{var s=e=>{var a=te(),s=g(m(a),2),i=m(s)
y(i,(()=>({"--button-color":"#383838"}))),$(i.lastChild,{onclick:ue,children:(e,a)=>{var s=h("Name")
u(e,s)},$$slots:{default:!0}})
var t=g(s,8)
b(t,17,(()=>p(de)),Q,((e,a)=>{let s=()=>p(a)[0],i=()=>p(a)[5][0]
var t=ie(),n=l(t),r=m(n)
r.__click=[G,ve]
var c=m(r)
let d
var f=g(n,2),y=m(f)
y.__click=[G,ve]
var $=m(y),h=g(f,2)
b(h,21,(()=>p(a)[3]),Q,((e,a)=>{let s=()=>p(a)[0]
var i=ae(),t=m(i)
let n
var r=g(t,2),l=m(r)
o((()=>{W(t,"data-tipped",`fetchitem.php?item_id=${s()??""}&t=2&vcode=${p(a)[1]??""}`),n=X(t,"",n,{"background-image":`url('${Y??""}items/${s()??""}.gif')`}),v(l,`${p(le)[s()]??0}/${p(a)[2]??""}`)})),u(e,i)}))
var w=g(h,2)
b(w,21,(()=>p(a)[4]),Q,((e,a)=>{let s=()=>p(a)[0]
var i=se(),t=m(i)
let n
var r=g(t,2),l=m(r)
o((()=>{W(t,"data-tipped",`fetchitem.php?item_id=${s()??""}&t=2&vcode=${p(a)[1]??""}`),n=X(t,"",n,{"background-image":`url('${Y??""}items/${s()??""}.gif')`}),v(l,`${p(re)[s()]??0}/${p(a)[2]??""}`)})),u(e,i)}))
var C=g(w,2),_=m(C)
let k
o((()=>{W(r,"href",`${A??""}${s()??""}`),d=X(c,"",d,{"background-image":`url('${Y??""}recipes/${p(a)[2]??""}')`}),W(y,"href",`${A??""}${s()??""}`),v($,p(a)[1]),W(_,"data-tipped",`fetchitem.php?item_id=${i()??""}&t=2&vcode=${p(a)[5][1]??""}`),k=X(_,"",k,{"background-image":`url('${Y??""}items/${i()??""}.gif')`})})),u(e,t)})),u(e,a)}
f(e,(e=>{p(de)&&e(s)}),a)}
f(s,(e=>{p(ce).length?e(i):e(t,!1)})),u(e,a)}),((e,a)=>{var s=ne(),i=m(s)
o((()=>v(i,p(a).message))),u(e,s)})),u(e,s)},$$slots:{title:!0,default:!0}})}w()}e(["click"])
const le=t({visible:!0})
let ce=0
function de(){ce?le.visible=!0:ce=B(re,{props:le,target:document.body})}export{de as default}
//# sourceMappingURL=mountRecipeMgr.svelte-B90fjCQ2.js.map
