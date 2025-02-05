import{bb as t,y as e,f as o,n as s,x as n,i as a,p as i,o as r,d as c,s as m,ar as d,g as f,b7 as p,aq as l,G as g,al as u,cq as b,cv as h,b5 as k}from"./calfSystem-BAeDn21M.js"
import{i as w}from"./indexAjaxPost-BEb5ftBk.js"
import{d as x}from"./daLoadInventory-CO87bGXD.js"
import{f as y}from"./flattenItems-BaJ8xXkd.js"
import{a as v}from"./simpleCheckbox-BPGp9fPI.js"
import"./isChecked-D_0do7nT.js"
let C=0,j=0
function E(t){const e=t.id.replace(`${j}-item-`,"")
C[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${j}-items`)).forEach(E)}async function P(t){if(e())return
j=t
const m=await x()
m?.s&&(C=o(y(m.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(t){const e=s({className:"fshAC"})
n(e,'<button class="fshBl">Perfect</button>'),a(i(),e),r(e,c(M,t))}(t))}const T="disableBreakdownPrompts"
let B=0
const N=[]
function q(t){t.hide()}function A(t,e){t.animate({height:0},500,e)}function I(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(A,t,c(q,t)))}function S(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(I,5e3)}async function F(){const e=await async function(e){const o=await w({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(N)
!function(t){0!==t.error?S(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+k}breakdown&m=1`)}(e)}function G(t){B&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==N.length?F():S("Error: No items selected.","rgb(164, 28, 28)")}(t)}function L(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=N.indexOf(e);-1===o?N.push(e):N.splice(o,1)}function O(){m("breakdown","togglePref"),B=!B,u(T,B)}function _(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),B=l(T),n(i(),`<table class="fshTblCenter"><tbody>${v(T)}</tbody></table>`),function(t){r(t.parentNode,G,!0),r(f("composing-items"),L),r(f(T),O)}(t))}export{_ as default}
//# sourceMappingURL=breakdown-DvmKzQk2.js.map
