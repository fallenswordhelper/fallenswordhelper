import{aK as t,w as e,f as o,m as a,v as s,i as n,p as i,o as r,c,s as m,ae as d,g as f,av as p,ad as l,D as g,a9 as u,bK as b,bP as h,aF as w}from"./calfSystem-rn9Rc_nF.js"
import{i as k}from"./indexAjaxPost-Ab2hn9_4.js"
import{d as x}from"./daLoadInventory-HiTfz646.js"
import{f as y}from"./flattenItems-OuxkqZMH.js"
import{a as v}from"./simpleCheckbox-lyJmzCW_.js"
import"./isArray-bNviZzJA.js"
import"./isChecked-k2ijSL8v.js"
let C=0,j=0
function P(t){const e=t.id.replace(`${j}-item-`,"")
C[e]&&p(t)}function E(t){m("perfFilter",t)
d("selectable-item",f(`${j}-items`)).forEach(P)}async function M(t){if(e())return
j=t
const m=await x()
m?.s&&(C=o(y(m.r).filter((({cf:t})=>0===t)).map((({a:t})=>[t,1]))),function(t){const e=a({className:"fshAC"})
s(e,'<button class="fshBl">Perfect</button>'),n(i(),e),r(e,c(E,t))}(t))}const T="disableBreakdownPrompts"
let A=0
const B=[]
function F(t){t.hide()}function N(t,e){t.animate({height:0},500,e)}function D(){const t=$("#composingMessageContainer")
t.animate({opacity:0},500,c(N,t,c(F,t)))}function I(t,e){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(t,e){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":e,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(t)}(t,e))),setTimeout(D,5e3)}async function K(){const e=await async function(e){const o=await k({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"text"})
return t(o)??{error:1,msg:"Server Error"}}(B)
!function(t){0!==t.error?I(`Error: ${t.msg}`,"rgb(164, 28, 28)"):b(`${h+w}breakdown&m=1`)}(e)}function S(t){A&&"breakdown-selected-items"===t.target.id&&function(t){t.stopPropagation(),m("breakdown","validBreakEvent"),0!==B.length?K():I("Error: No items selected.","rgb(164, 28, 28)")}(t)}function _(t){if(!g("selectable-item",t.target))return
m("breakdown","itemClick")
const e=t.target.id.replace("composing-item-",""),o=B.indexOf(e);-1===o?B.push(e):B.splice(o,1)}function L(){m("breakdown","togglePref"),A=!A,u(T,A)}function O(){if(e())return
const t=f("breakdown-selected-items")
t&&(M("composing"),A=l(T),s(i(),`<table class="fshTblCenter"><tbody>${v(T)}</tbody></table>`),function(t){r(t.parentNode,S,!0),r(f("composing-items"),_),r(f(T),L)}(t))}export{O as default}
//# sourceMappingURL=breakdown-dsYSaUT9.js.map
