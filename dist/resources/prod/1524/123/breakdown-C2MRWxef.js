import{aS as t,w as e,f as o,m as a,v as s,i as n,p as i,o as r,c,s as m,aj as d,g as f,aA as p,ai as l,D as g,ae as u,bT as b,bY as h,aL as w}from"./calfSystem-wTzwei3t.js"
import{i as k}from"./indexAjaxPost-BJPqSWWj.js"
import{d as x}from"./daLoadInventory--DugNLq5.js"
import{f as y}from"./flattenItems-C4pfIrZn.js"
import{a as j}from"./simpleCheckbox-o27N70bG.js"
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
function N(t){t.hide()}function S(t,e){t.animate({height:0},500,e)}function D(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(S,t,c(N,t)))}function I(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(D,5e3)}async function L(){const e=await async function(e){const o=await k({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(B)
!function(t){0!==t.error?I(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+w}breakdown&m=1`)}(e)}function Y(t){A&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==B.length?L():I("Error: No items selected.","rgb(164, 28, 28)")}(t)}function F(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=B.indexOf(e);-1===o?B.push(e):B.splice(o,1)}function G(){m("breakdown","togglePref"),A=!A,u(T,A)}function O(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),A=l(T),s(i(),`<table class="fshTblCenter"><tbody>${j(T)}</tbody></table>`),function(t){r(t.parentNode,Y,!0),r(f("composing-items"),F),r(f(T),G)}(t))}export{O as default}
//# sourceMappingURL=breakdown-C2MRWxef.js.map
