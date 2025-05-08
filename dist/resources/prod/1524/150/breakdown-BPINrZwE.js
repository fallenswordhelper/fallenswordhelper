import{bb as e,A as t,d as o,j as s,f as a,u as n,z as i,i as r,p as c,o as m,e as d,s as f,ap as p,g as l,b7 as u,ao as g,I as b,aj as h,co as k,ct as w,b5 as x}from"./calfSystem-BGOTz8de.js"
import{i as y}from"./indexAjaxPost-D8BedZgI.js"
import{a as C}from"./simpleCheckbox-BSi4KRpL.js"
import"./isChecked-D_0do7nT.js"
let j=0,v=0
function E(e){const t=e.id.replace(`${v}-item-`,"")
j[t]&&u(e)}function M(e){f("perfFilter",e)
p("selectable-item",l(`${v}-items`)).forEach(E)}async function P(e){if(t())return
v=e
const f=await o()
f?.s&&(j=s(a(f.r).filter((({cf:e})=>0===e)).map((({a:e})=>[e,1]))),function(e){const t=n({className:"fshAC"})
i(t,'<button class="fshBl">Perfect</button>'),r(c(),t),m(t,d(M,e))}(e))}const T="disableBreakdownPrompts"
let A=0
const B=[]
function N(e){e.hide()}function S(e,t){e.animate({height:0},500,t)}function z(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(S,e,d(N,e)))}function F(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(z,5e3)}async function I(){const t=await async function(t){const o=await y({data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"text"})
return e(o)??{error:1,msg:"Server Error"}}(B)
!function(e){0!==e.error?F(`Error: ${e.msg}`,"rgb(164, 28, 28)"):k(`${w+x}breakdown&m=1`)}(t)}function O(e){A&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),f("breakdown","validBreakEvent"),0!==B.length?I():F("Error: No items selected.","rgb(164, 28, 28)")}(e)}function U(e){if(!b("selectable-item",e.target))return
f("breakdown","itemClick")
const t=e.target.id.replace("composing-item-",""),o=B.indexOf(t);-1===o?B.push(t):B.splice(o,1)}function Y(){f("breakdown","togglePref"),A=!A,h(T,A)}function _(){if(t())return
const e=l("breakdown-selected-items")
e&&(P("composing"),A=g(T),i(c(),`<table class="fshTblCenter"><tbody>${C(T)}</tbody></table>`),function(e){m(e.parentNode,O,!0),m(l("composing-items"),U),m(l(T),Y)}(e))}export{_ as default}
//# sourceMappingURL=breakdown-BPINrZwE.js.map
