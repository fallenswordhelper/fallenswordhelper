import{ba as t,x as e,f as o,m as s,w as a,i as n,p as i,o as r,c,s as m,ap as d,g as f,b4 as p,ao as l,F as g,aj as u,cn as b,cs as w,b2 as h}from"./calfSystem-fMW-YMyF.js"
import{i as k}from"./indexAjaxPost-sbFpwykp.js"
import{d as x}from"./daLoadInventory-C5VqDf3X.js"
import{f as y}from"./flattenItems-DBwSgTaC.js"
import{a as j}from"./simpleCheckbox-DVyS3vVd.js"
import"./isChecked-D_0do7nT.js"
let C=0,v=0
function E(t){const e=t.id.replace(`${v}-item-`,"")
C[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${v}-items`)).forEach(E)}async function P(t){if(e())return
v=t
const m=await x()
m?.s&&(C=o(y(m.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(t){const e=s({className:"fshAC"})
a(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(M,t))}(t))}const T="disableBreakdownPrompts"
let B=0
const N=[]
function A(t){t.hide()}function F(t,e){t.animate({height:0},500,e)}function I(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(F,t,c(A,t)))}function S(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(I,5e3)}async function L(){const e=await async function(e){const o=await k({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(N)
!function(t){0!==t.error?S(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${w+h}breakdown&m=1`)}(e)}function O(t){B&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==N.length?L():S("Error: No items selected.","rgb(164, 28, 28)")}(t)}function _(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=N.indexOf(e);-1===o?N.push(e):N.splice(o,1)}function q(){m("breakdown","togglePref"),B=!B,u(T,B)}function z(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),B=l(T),a(i(),`<table class="fshTblCenter"><tbody>${j(T)}</tbody></table>`),function(t){r(t.parentNode,O,!0),r(f("composing-items"),_),r(f(T),q)}(t))}export{z as default}
//# sourceMappingURL=breakdown-Ca9vgvQc.js.map
