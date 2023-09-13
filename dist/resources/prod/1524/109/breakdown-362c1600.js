import{aO as t,w as e,f as o,l as s,v as a,i as n,p as i,o as r,ag as c,g as m,ax as f,af as d,D as p,ab as l,c as u,bO as g,bT as b,aJ as h}from"./calfSystem-2f15e074.js"
import{i as x}from"./indexAjaxPost-e44b62ce.js"
import{d as w}from"./daLoadInventory-d83b540d.js"
import{f as y}from"./flattenItems-d494759a.js"
import{a as k}from"./simpleCheckbox-45958795.js"
import"./isChecked-3968d2ec.js"
let j=0,C=0
function v(t){const e=t.id.replace(`${C}-item-`,"")
j[e]&&f(t)}function E(){c("selectable-item",m(`${C}-items`)).forEach(v)}async function M(t){if(e())return
C=t
const c=await w()
c?.s&&(j=o(y(c.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(){const t=s({className:"fshAC"})
a(t,'<button class="fshBl">Perfect</button>'),n(i(),t),r(t,E)}())}const T="disableBreakdownPrompts"
let P=0
const N=[]
function O(t){t.hide()}function A(t,e){t.animate({height:0},500,e)}function B(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,u(A,t,u(O,t)))}function I(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(B,5e3)}async function S(){const e=await async function(e){const o=await x({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(N)
!function(t){0!==t.error?I(`Error: ${t.msg}`,"rgb(164, 28, 28)"):g(`${b+h}breakdown&m=1`)}(e)}function _(t){P&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),0!==N.length?S():I("Error: No items selected.","rgb(164, 28, 28)")}(t)}function D(t){if(!p("selectable-item",t.target))return
const e=t.target.id.replace("composing-item-",""),o=N.indexOf(e);-1===o?N.push(e):N.splice(o,1)}function F(){P=!P,l(T,P)}function J(){if(e())return
const t=m("breakdown-selected-items")
t&&(M("composing"),P=d(T),a(i(),`<table class="fshTblCenter"><tbody>${k(T)}</tbody></table>`),function(t){r(t.parentNode,_,!0),r(m("composing-items"),D),r(m(T),F)}(t))}export{J as default}
//# sourceMappingURL=breakdown-362c1600.js.map
