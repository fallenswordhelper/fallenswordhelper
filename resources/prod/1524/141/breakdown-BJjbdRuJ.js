import{aU as t,w as e,f as a,k as o,v as s,i as n,p as i,e as r,b as c,s as m,aj as d,g as f,aP as p,ai as l,bX as g,c0 as u,aK as b,D as h,ad as k}from"./calfSystem-Blt4DbaE.js"
import{i as w}from"./indexAjaxPost-CKDjz3NT.js"
import{d as x}from"./daLoadInventory-XbR6QBDO.js"
import{f as y}from"./flattenItems-C4pfIrZn.js"
import{a as j}from"./simpleCheckbox-CjFtWivg.js"
import"./isArray-eVldfhw1.js"
import"./isChecked-D_0do7nT.js"
let C=0,v=0
function E(t){const e=t.id.replace(`${v}-item-`,"")
C[e]&&p(t)}function P(t){m("perfFilter",t)
d("selectable-item",f(`${v}-items`)).forEach(E)}async function M(t){if(e())return
v=t
const m=await x()
m?.s&&(C=a(y(m.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(t){const e=o({className:"fshAC"})
s(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(P,t))}(t))}const B="disableBreakdownPrompts"
let T=0
const A=[]
function N(t){t.hide()}function I(t,e){t.animate({height:0},500,e)}function S(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(I,t,c(N,t)))}function D(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(S,5e3)}async function F(){const e=await async function(e){const a=await w({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(a)??{error:1,msg:"Server Error"}}(A)
!function(t){0!==t.error?D(`Error: ${t.msg}`,"rgb(164, 28, 28)"):g(`${u+b}breakdown&m=1`)}(e)}function K(t){T&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==A.length?F():D("Error: No items selected.","rgb(164, 28, 28)")}(t)}function L(t){if(!h("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),a=A.indexOf(e);-1===a?A.push(e):A.splice(a,1)}function O(){m("breakdown","togglePref"),T=!T,k(B,T)}function Q(){if(e())return
const t=f("breakdown-selected-items")
t&&(M("composing"),T=l(B),s(i(),`<table class="fshTblCenter"><tbody>${j(B)}</tbody></table>`),function(t){r(t.parentNode,K,!0),r(f("composing-items"),L),r(f(B),O)}(t))}export{Q as default}
//# sourceMappingURL=breakdown-BJjbdRuJ.js.map
