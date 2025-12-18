import{bq as t,a4 as e,f as o,v as a,a3 as s,i as n,p as i,o as r,c,s as m,aB as d,g as f,bm as p,aA as l,ac as g,av as u,S as b,cC as h,bc as k}from"./calfSystem-Cs6CSxoU.js"
import{i as w}from"./indexAjaxPost-C1enaFFt.js"
import{d as x}from"./daLoadInventory-Sf3be_xU.js"
import{f as v}from"./flattenItems-DRADeVyF.js"
import{a as y}from"./simpleCheckbox-C-dxZ6vG.js"
import"./isChecked-D_0do7nT.js"
let C=0,j=0
function E(t){const e=t.id.replace(`${j}-item-`,"")
C[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${j}-items`)).forEach(E)}async function P(t){if(e())return
j=t
const m=await x()
m?.s&&(C=o(v(m.r).filter(({cf:t})=>0===t).map(({a:t})=>[t,1])),function(t){const e=a({className:"fshAC"})
s(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(M,t))}(t))}const B="disableBreakdownPrompts"
let T=0
const A=[]
function N(t){t.hide()}function S(t,e){t.animate({height:0},500,e)}function I(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(S,t,c(N,t)))}function q(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(I,5e3)}async function F(){const e=await async function(e){const o=await w({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(A)
!function(t){0!==t.error?q(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+k}breakdown&m=1`)}(e)}function L(t){T&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==A.length?F():q("Error: No items selected.","rgb(164, 28, 28)")}(t)}function O(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=A.indexOf(e);-1===o?A.push(e):A.splice(o,1)}function _(){m("breakdown","togglePref"),T=!T,u(B,T)}function z(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),T=l(B),s(i(),`<table class="fshTblCenter"><tbody>${y(B)}</tbody></table>`),function(t){r(t.parentNode,L,!0),r(f("composing-items"),O),r(f(B),_)}(t))}export{z as default}
//# sourceMappingURL=breakdown-Ba27vlX-.js.map
