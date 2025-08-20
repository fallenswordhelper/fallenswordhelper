import{bl as t,a2 as e,f as a,u as o,a1 as s,i as n,p as i,o as r,c,s as m,aA as d,g as f,bh as p,az as l,aa as u,au as g,Q as b,cy as h,bf as w}from"./calfSystem-KFszEm2S.js"
import{i as k}from"./indexAjaxPost-i21VxTmS.js"
import{d as x}from"./daLoadInventory-DyPIGJz5.js"
import{f as y}from"./flattenItems-CGxiGoxd.js"
import{a as C}from"./simpleCheckbox-C7oDqkXH.js"
import"./isChecked-D_0do7nT.js"
let j=0,v=0
function E(t){const e=t.id.replace(`${v}-item-`,"")
j[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${v}-items`)).forEach(E)}async function P(t){if(e())return
v=t
const m=await x()
m?.s&&(j=a(y(m.r).filter(({cf:t})=>0===t).map(({a:t})=>[t,1])),function(t){const e=o({className:"fshAC"})
s(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(M,t))}(t))}const T="disableBreakdownPrompts"
let A=0
const B=[]
function N(t){t.hide()}function I(t,e){t.animate({height:0},500,e)}function S(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(I,t,c(N,t)))}function z(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(S,5e3)}async function F(){const e=await async function(e){const a=await k({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(a)??{error:1,msg:"Server Error"}}(B)
!function(t){0!==t.error?z(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+w}breakdown&m=1`)}(e)}function L(t){A&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==B.length?F():z("Error: No items selected.","rgb(164, 28, 28)")}(t)}function O(t){if(!u("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),a=B.indexOf(e);-1===a?B.push(e):B.splice(a,1)}function Q(){m("breakdown","togglePref"),A=!A,g(T,A)}function _(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),A=l(T),s(i(),`<table class="fshTblCenter"><tbody>${C(T)}</tbody></table>`),function(t){r(t.parentNode,L,!0),r(f("composing-items"),O),r(f(T),Q)}(t))}export{_ as default}
//# sourceMappingURL=breakdown-BIaIk550.js.map
