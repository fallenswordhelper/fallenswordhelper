import{bl as t,a2 as e,f as a,u as s,a1 as o,i as n,p as i,o as r,c,s as m,aA as d,g as f,bh as p,az as l,aa as u,au as g,Q as b,cw as h,bf as w}from"./calfSystem-CT1aM4VG.js"
import{i as k}from"./indexAjaxPost-DijfESQs.js"
import{d as x,f as y}from"./flattenItems-D5sXdp8R.js"
import{a as C}from"./simpleCheckbox-DX3v3qR1.js"
import"./isChecked-D_0do7nT.js"
let v=0,j=0
function E(t){const e=t.id.replace(`${j}-item-`,"")
v[e]&&p(t)}function M(t){m("perfFilter",t)
d("selectable-item",f(`${j}-items`)).forEach(E)}async function P(t){if(e())return
j=t
const m=await x()
m?.s&&(v=a(y(m.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(t){const e=s({className:"fshAC"})
o(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(M,t))}(t))}const T="disableBreakdownPrompts"
let A=0
const B=[]
function N(t){t.hide()}function S(t,e){t.animate({height:0},500,e)}function z(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(S,t,c(N,t)))}function F(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(z,5e3)}async function I(){const e=await async function(e){const a=await k({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(a)??{error:1,msg:"Server Error"}}(B)
!function(t){0!==t.error?F(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+w}breakdown&m=1`)}(e)}function O(t){A&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==B.length?I():F("Error: No items selected.","rgb(164, 28, 28)")}(t)}function Q(t){if(!u("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),a=B.indexOf(e);-1===a?B.push(e):B.splice(a,1)}function _(){m("breakdown","togglePref"),A=!A,g(T,A)}function q(){if(e())return
const t=f("breakdown-selected-items")
t&&(P("composing"),A=l(T),o(i(),`<table class="fshTblCenter"><tbody>${C(T)}</tbody></table>`),function(t){r(t.parentNode,O,!0),r(f("composing-items"),Q),r(f(T),_)}(t))}export{q as default}
//# sourceMappingURL=breakdown-ClAMMf_W.js.map
