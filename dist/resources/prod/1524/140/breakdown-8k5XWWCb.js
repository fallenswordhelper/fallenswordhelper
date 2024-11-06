import{aU as t,w as e,f as o,m as a,v as s,i as n,p as i,o as r,c,s as m,aj as d,g as f,aO as p,ai as l,D as g,ae as u,bX as b,c0 as h,aM as w}from"./calfSystem-BhNMi9iJ.js"
import{i as k}from"./indexAjaxPost-CCVgVTrK.js"
import{d as x}from"./daLoadInventory-DI87vRjC.js"
import{f as y}from"./flattenItems-C4pfIrZn.js"
import{a as j}from"./simpleCheckbox-D4V55TyX.js"
import"./isArray-eVldfhw1.js"
import"./isChecked-D_0do7nT.js"
let C=0,v=0
function E(t){const e=t.id.replace(`${v}-item-`,"")
C[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${v}-items`)).forEach(E)}async function P(t){if(e())return
v=t
const m=await x()
m?.s&&(C=o(y(m.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(t){const e=a({className:"fshAC"})
s(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(M,t))}(t))}const B="disableBreakdownPrompts"
let T=0
const A=[]
function N(t){t.hide()}function I(t,e){t.animate({height:0},500,e)}function O(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(I,t,c(N,t)))}function S(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(O,5e3)}async function D(){const e=await async function(e){const o=await k({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(A)
!function(t){0!==t.error?S(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+w}breakdown&m=1`)}(e)}function F(t){T&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==A.length?D():S("Error: No items selected.","rgb(164, 28, 28)")}(t)}function L(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=A.indexOf(e);-1===o?A.push(e):A.splice(o,1)}function Q(){m("breakdown","togglePref"),T=!T,u(B,T)}function U(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),T=l(B),s(i(),`<table class="fshTblCenter"><tbody>${j(B)}</tbody></table>`),function(t){r(t.parentNode,F,!0),r(f("composing-items"),L),r(f(B),Q)}(t))}export{U as default}
//# sourceMappingURL=breakdown-8k5XWWCb.js.map
