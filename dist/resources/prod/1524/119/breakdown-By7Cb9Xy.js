import{aS as t,w as e,f as o,m as a,v as s,i as n,p as i,o as r,c,s as m,aj as d,g as f,aA as p,ai as l,D as g,ae as u,bS as b,bX as h,aL as w}from"./calfSystem-Bit7wh4p.js"
import{i as k}from"./indexAjaxPost-DD_FmMt4.js"
import{d as x}from"./daLoadInventory-BRjJiMm5.js"
import{f as y}from"./flattenItems-C4pfIrZn.js"
import{a as j}from"./simpleCheckbox-B_EbohVT.js"
import"./isArray-eVldfhw1.js"
import"./isChecked-D_0do7nT.js"
let v=0,C=0
function E(t){const e=t.id.replace(`${C}-item-`,"")
v[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${C}-items`)).forEach(E)}async function P(t){if(e())return
C=t
const m=await x()
m?.s&&(v=o(y(m.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(t){const e=a({className:"fshAC"})
s(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(M,t))}(t))}const A="disableBreakdownPrompts"
let S=0
const T=[]
function B(t){t.hide()}function N(t,e){t.animate({height:0},500,e)}function D(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(N,t,c(B,t)))}function I(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(D,5e3)}async function L(){const e=await async function(e){const o=await k({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(T)
!function(t){0!==t.error?I(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+w}breakdown&m=1`)}(e)}function F(t){S&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==T.length?L():I("Error: No items selected.","rgb(164, 28, 28)")}(t)}function G(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=T.indexOf(e);-1===o?T.push(e):T.splice(o,1)}function O(){m("breakdown","togglePref"),S=!S,u(A,S)}function U(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),S=l(A),s(i(),`<table class="fshTblCenter"><tbody>${j(A)}</tbody></table>`),function(t){r(t.parentNode,F,!0),r(f("composing-items"),G),r(f(A),O)}(t))}export{U as default}
//# sourceMappingURL=breakdown-By7Cb9Xy.js.map