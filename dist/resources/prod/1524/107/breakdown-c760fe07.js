import{aO as t,w as e,l as o,v as n,i as s,p as a,o as i,ag as r,g as c,ax as m,af as d,D as p,ab as f,c as g,bO as u,bT as l,aJ as b}from"./calfSystem-2fff342b.js"
import{i as h}from"./indexAjaxPost-701299b8.js"
import{g as x}from"./getInventoryById-1b7626e5.js"
import{a as y}from"./simpleCheckbox-539999e2.js"
import"./getInventory-61ab9f2e.js"
import"./inventory-0f7de34f.js"
import"./isChecked-3968d2ec.js"
let w=0,j=0
function k(t){const e=t.id.replace(`${j}-item-`,"")
w[e]&&"Perfect"===w[e].craft&&m(t)}function v(){const t=r("selectable-item",c(`${j}-items`))
0!==t.length&&t.forEach(k)}async function C(t){if(e())return
j=t
const r=await x()
r?.items&&function(t){w=t.items
const e=o({className:"fshAC"})
n(e,'<button class="fshBl">Perfect</button>'),s(a(),e),i(e,v)}(r)}const M="disableBreakdownPrompts"
let P=0
const T=[]
function E(t){t.hide()}function B(t,e){t.animate({height:0},500,e)}function I(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,g(B,t,g(E,t)))}function N(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(I,5e3)}async function O(){const e=await async function(e){const o=await h({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(T)
!function(t){0!==t.error?N(`Error: ${t.msg}`,"rgb(164, 28, 28)"):u(`${l+b}breakdown&m=1`)}(e)}function A(t){P&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),0!==T.length?O():N("Error: No items selected.","rgb(164, 28, 28)")}(t)}function S(t){if(!p("selectable-item",t.target))return
const e=t.target.id.replace("composing-item-",""),o=T.indexOf(e);-1===o?T.push(e):T.splice(o,1)}function _(){P=!P,f(M,P)}function D(){if(e())return
const t=c("breakdown-selected-items")
t&&(C("composing"),P=d(M),n(a(),`<table class="fshTblCenter"><tbody>${y(M)}</tbody></table>`),function(t){i(t.parentNode,A,!0),i(c("composing-items"),S),i(c(M),_)}(t))}export{D as default}
//# sourceMappingURL=breakdown-c760fe07.js.map
