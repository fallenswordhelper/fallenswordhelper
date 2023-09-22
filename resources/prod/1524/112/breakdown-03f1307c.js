import{aL as t,w as e,f as s,l as o,v as a,i as n,p as i,o as r,ae as c,g as m,av as d,ad as f,D as p,a9 as l,c as u,bL as g,bQ as b,aG as h}from"./calfSystem-4830a18d.js"
import{i as w}from"./indexAjaxPost-13872955.js"
import{d as x}from"./daLoadInventory-9c7bd6b5.js"
import{f as y}from"./flattenItems-03659160.js"
import{a as j}from"./simpleCheckbox-ed7e63fb.js"
import"./isArray-09a53da7.js"
import"./isChecked-3968d2ec.js"
let k=0,C=0
function v(t){const e=t.id.replace(`${C}-item-`,"")
k[e]&&d(t)}function M(){c("selectable-item",m(`${C}-items`)).forEach(v)}async function E(t){if(e())return
C=t
const c=await x()
c?.s&&(k=s(y(c.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(){const t=o({className:"fshAC"})
a(t,'<button class="fshBl">Perfect</button>'),n(i(),t),r(t,M)}())}const P="disableBreakdownPrompts"
let T=0
const A=[]
function L(t){t.hide()}function N(t,e){t.animate({height:0},500,e)}function B(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,u(N,t,u(L,t)))}function D(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(B,5e3)}async function I(){const e=await async function(e){const s=await w({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(s)??{error:1,msg:"Server Error"}}(A)
!function(t){0!==t.error?D(`Error: ${t.msg}`,"rgb(164, 28, 28)"):g(`${b+h}breakdown&m=1`)}(e)}function S(t){T&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),0!==A.length?I():D("Error: No items selected.","rgb(164, 28, 28)")}(t)}function _(t){if(!p("selectable-item",t.target))return
const e=t.target.id.replace("composing-item-",""),s=A.indexOf(e);-1===s?A.push(e):A.splice(s,1)}function F(){T=!T,l(P,T)}function G(){if(e())return
const t=m("breakdown-selected-items")
t&&(E("composing"),T=f(P),a(i(),`<table class="fshTblCenter"><tbody>${j(P)}</tbody></table>`),function(t){r(t.parentNode,S,!0),r(m("composing-items"),_),r(m(P),F)}(t))}export{G as default}
//# sourceMappingURL=breakdown-03f1307c.js.map
