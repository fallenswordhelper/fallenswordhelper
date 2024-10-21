import{aU as t,w as e,f as o,m as a,v as s,i as n,p as i,o as r,c,s as m,aj as d,g as f,aO as p,ai as l,D as g,ae as u,bX as b,c0 as h,aM as w}from"./calfSystem-CUgWHLtG.js"
import{i as k}from"./indexAjaxPost-BgjYFo17.js"
import{d as x}from"./daLoadInventory-zWI1CPKh.js"
import{f as y}from"./flattenItems-C4pfIrZn.js"
import{a as j}from"./simpleCheckbox-BsLxfTBb.js"
import"./isArray-eVldfhw1.js"
import"./isChecked-D_0do7nT.js"
let v=0,C=0
function E(t){const e=t.id.replace(`${C}-item-`,"")
v[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${C}-items`)).forEach(E)}async function P(t){if(e())return
C=t
const m=await x()
m?.s&&(v=o(y(m.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(t){const e=a({className:"fshAC"})
s(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(M,t))}(t))}const T="disableBreakdownPrompts"
let A=0
const B=[]
function N(t){t.hide()}function D(t,e){t.animate({height:0},500,e)}function I(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(D,t,c(N,t)))}function O(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(I,5e3)}async function S(){const e=await async function(e){const o=await k({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(B)
!function(t){0!==t.error?O(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+w}breakdown&m=1`)}(e)}function Y(t){A&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==B.length?S():O("Error: No items selected.","rgb(164, 28, 28)")}(t)}function F(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=B.indexOf(e);-1===o?B.push(e):B.splice(o,1)}function G(){m("breakdown","togglePref"),A=!A,u(T,A)}function L(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),A=l(T),s(i(),`<table class="fshTblCenter"><tbody>${j(T)}</tbody></table>`),function(t){r(t.parentNode,Y,!0),r(f("composing-items"),F),r(f(T),G)}(t))}export{L as default}
//# sourceMappingURL=breakdown-fulZLtnJ.js.map
