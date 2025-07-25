import{bn as e,a4 as t,d as a,h as s,f as n,w as o,a3 as i,i as r,p as c,o as m,c as d,s as f,aC as p,g as l,bj as u,aB as g,ac as b,aw as h,S as w,cC as k,bh as x}from"./calfSystem-C1X5YxJZ.js"
import{i as C}from"./indexAjaxPost-C-POF6Zl.js"
import{a as y}from"./simpleCheckbox-nwywzlgZ.js"
import"./isChecked-D_0do7nT.js"
let j=0,v=0
function E(e){const t=e.id.replace(`${v}-item-`,"")
j[t]&&u(e)}function M(e){f("perfFilter",e)
p("selectable-item",l(`${v}-items`)).forEach(E)}async function P(e){if(t())return
v=e
const f=await a()
f?.s&&(j=s(n(f.r).filter((({cf:e})=>0===e)).map((({a:e})=>[e,1]))),function(e){const t=o({className:"fshAC"})
i(t,'<button class="fshBl">Perfect</button>'),r(c(),t),m(t,d(M,e))}(e))}const B="disableBreakdownPrompts"
let T=0
const N=[]
function S(e){e.hide()}function A(e,t){e.animate({height:0},500,t)}function _(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(A,e,d(S,e)))}function F(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(_,5e3)}async function O(){const t=await async function(t){const a=await C({data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"text"})
return e(a)??{error:1,msg:"Server Error"}}(N)
!function(e){0!==e.error?F(`Error: ${e.msg}`,"rgb(164, 28, 28)"):w(`${k+x}breakdown&m=1`)}(t)}function q(e){T&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),f("breakdown","validBreakEvent"),0!==N.length?O():F("Error: No items selected.","rgb(164, 28, 28)")}(e)}function z(e){if(!b("selectable-item",e.target))return
f("breakdown","itemClick")
const t=e.target.id.replace("composing-item-",""),a=N.indexOf(t);-1===a?N.push(t):N.splice(a,1)}function D(){f("breakdown","togglePref"),T=!T,h(B,T)}function G(){if(t())return
const e=l("breakdown-selected-items")
e&&(P("composing"),T=g(B),i(c(),`<table class="fshTblCenter"><tbody>${y(B)}</tbody></table>`),function(e){m(e.parentNode,q,!0),m(l("composing-items"),z),m(l(B),D)}(e))}export{G as default}
//# sourceMappingURL=breakdown-Dg_fGu4i.js.map
