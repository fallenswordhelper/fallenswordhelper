import{bm as t,a3 as e,f as o,u as a,a2 as s,i as n,p as i,o as r,c,s as m,aB as d,g as f,bi as p,aA as l,ab as g,av as u,R as b,cz as h,bg as k}from"./calfSystem-79LsojAC.js"
import{i as w}from"./indexAjaxPost-Db71uC5Z.js"
import{d as x}from"./daLoadInventory-DZfMiDnc.js"
import{f as y}from"./flattenItems-B2ndrBJ6.js"
import{a as v}from"./simpleCheckbox-GIXRLUIF.js"
import"./isChecked-D_0do7nT.js"
let C=0,j=0
function E(t){const e=t.id.replace(`${j}-item-`,"")
C[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${j}-items`)).forEach(E)}async function P(t){if(e())return
j=t
const m=await x()
m?.s&&(C=o(y(m.r).filter(({cf:t})=>0===t).map(({a:t})=>[t,1])),function(t){const e=a({className:"fshAC"})
s(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(M,t))}(t))}const B="disableBreakdownPrompts"
let T=0
const A=[]
function N(t){t.hide()}function I(t,e){t.animate({height:0},500,e)}function S(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(I,t,c(N,t)))}function z(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(S,5e3)}async function F(){const e=await async function(e){const o=await w({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(A)
!function(t){0!==t.error?z(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+k}breakdown&m=1`)}(e)}function L(t){T&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==A.length?F():z("Error: No items selected.","rgb(164, 28, 28)")}(t)}function O(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=A.indexOf(e);-1===o?A.push(e):A.splice(o,1)}function R(){m("breakdown","togglePref"),T=!T,u(B,T)}function Y(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),T=l(B),s(i(),`<table class="fshTblCenter"><tbody>${v(B)}</tbody></table>`),function(t){r(t.parentNode,L,!0),r(f("composing-items"),O),r(f(B),R)}(t))}export{Y as default}
//# sourceMappingURL=breakdown-k8oTbQNY.js.map
