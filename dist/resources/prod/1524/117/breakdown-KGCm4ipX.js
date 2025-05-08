import{aS as t,w as e,f as o,m as a,v as s,i as n,p as i,o as r,c,s as m,aj as d,g as f,aA as p,ai as l,D as g,ae as u,bS as b,bX as h,aL as w}from"./calfSystem-G1dN925O.js"
import{i as k}from"./indexAjaxPost-9tirV4OD.js"
import{d as x}from"./daLoadInventory-20Qn11vN.js"
import{f as y}from"./flattenItems-OuxkqZMH.js"
import{a as j}from"./simpleCheckbox-8V_A9jhn.js"
import"./isArray-bNviZzJA.js"
import"./isChecked-k2ijSL8v.js"
let C=0,v=0
function E(t){const e=t.id.replace(`${v}-item-`,"")
C[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${v}-items`)).forEach(E)}async function P(t){if(e())return
v=t
const m=await x()
m?.s&&(C=o(y(m.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(t){const e=a({className:"fshAC"})
s(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(M,t))}(t))}const T="disableBreakdownPrompts"
let A=0
const S=[]
function B(t){t.hide()}function N(t,e){t.animate({height:0},500,e)}function D(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(N,t,c(B,t)))}function F(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(D,5e3)}async function I(){const e=await async function(e){const o=await k({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(S)
!function(t){0!==t.error?F(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+w}breakdown&m=1`)}(e)}function L(t){A&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==S.length?I():F("Error: No items selected.","rgb(164, 28, 28)")}(t)}function X(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=S.indexOf(e);-1===o?S.push(e):S.splice(o,1)}function O(){m("breakdown","togglePref"),A=!A,u(T,A)}function Y(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),A=l(T),s(i(),`<table class="fshTblCenter"><tbody>${j(T)}</tbody></table>`),function(t){r(t.parentNode,L,!0),r(f("composing-items"),X),r(f(T),O)}(t))}export{Y as default}
//# sourceMappingURL=breakdown-KGCm4ipX.js.map
