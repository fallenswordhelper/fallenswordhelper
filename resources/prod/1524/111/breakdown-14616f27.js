import{aM as t,w as e,f as s,l as o,v as a,i as n,p as i,o as r,af as c,g as m,aw as f,ae as d,D as p,aa as l,c as u,bM as g,bR as b,aH as h}from"./calfSystem-abb16b0d.js"
import{i as w}from"./indexAjaxPost-5819c497.js"
import{d as x}from"./daLoadInventory-c2278c3f.js"
import{f as y}from"./flattenItems-03659160.js"
import{a as j}from"./simpleCheckbox-937a8f73.js"
import"./isArray-09a53da7.js"
import"./isChecked-3968d2ec.js"
let k=0,C=0
function M(t){const e=t.id.replace(`${C}-item-`,"")
k[e]&&f(t)}function v(){c("selectable-item",m(`${C}-items`)).forEach(M)}async function E(t){if(e())return
C=t
const c=await x()
c?.s&&(k=s(y(c.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(){const t=o({className:"fshAC"})
a(t,'<button class="fshBl">Perfect</button>'),n(i(),t),r(t,v)}())}const P="disableBreakdownPrompts"
let T=0
const A=[]
function N(t){t.hide()}function B(t,e){t.animate({height:0},500,e)}function D(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,u(B,t,u(N,t)))}function I(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(D,5e3)}async function S(){const e=await async function(e){const s=await w({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(s)??{error:1,msg:"Server Error"}}(A)
!function(t){0!==t.error?I(`Error: ${t.msg}`,"rgb(164, 28, 28)"):g(`${b+h}breakdown&m=1`)}(e)}function _(t){T&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),0!==A.length?S():I("Error: No items selected.","rgb(164, 28, 28)")}(t)}function F(t){if(!p("selectable-item",t.target))return
const e=t.target.id.replace("composing-item-",""),s=A.indexOf(e);-1===s?A.push(e):A.splice(s,1)}function H(){T=!T,l(P,T)}function L(){if(e())return
const t=m("breakdown-selected-items")
t&&(E("composing"),T=d(P),a(i(),`<table class="fshTblCenter"><tbody>${j(P)}</tbody></table>`),function(t){r(t.parentNode,_,!0),r(m("composing-items"),F),r(m(P),H)}(t))}export{L as default}
//# sourceMappingURL=breakdown-14616f27.js.map
