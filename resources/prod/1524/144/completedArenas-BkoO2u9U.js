import{q as t,z as o,o as e,aT as n,s as a,cn as s,co as r,ac as i}from"./calfSystem-fMW-YMyF.js"
import{c as p}from"./createInput-CBvBhRjz.js"
import{i as c}from"./insertHtmlAfterEnd-BnGOLW2a.js"
import{i as m}from"./insertHtmlBeforeBegin-nRmkkqox.js"
import{i as u}from"./interceptSubmit-CPOodCW2.js"
import"./formToUrl-hXVFwEWZ.js"
function f(t){s(`${r}completed&page=${t}`)}function l(){a("arena completed","gotoFirstPage"),f(1)}const g=o=>t(`#pCC input[value="${o}"]`),d=t=>p({type:"button",value:t})
function j(t,n){o(t,n),c(t,"&nbsp;"),e(t,l)}const b=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){a("arena completed","gotoLastPage"),f(b())}function C(t,o){n(t,o),m(t,"&nbsp;"),e(t,v)}function H(t,o,e){const n=g(t)
if(!n)return
e(d(o),n)}function S(){H("<","<<",j),H(">",">>",C),u()}export{S as default}
//# sourceMappingURL=completedArenas-BkoO2u9U.js.map
