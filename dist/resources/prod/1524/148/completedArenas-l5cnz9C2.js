import{q as t,A as e,o,aW as n,s,ad as a,cq as r,cr as i}from"./calfSystem-BldO1y8X.js"
import{c as p}from"./createInput-vTQGUSPu.js"
import{i as c}from"./insertHtmlAfterEnd-C0O9PHzU.js"
import{i as m}from"./insertHtmlBeforeBegin-C6JIlx1D.js"
import{i as f}from"./interceptSubmit-DRfjQ-m1.js"
import"./formToUrl-BEp0G_53.js"
function u(t){r(`${i}completed&page=${t}`)}function l(){s("arena completed","gotoFirstPage"),u(1)}const g=e=>t(`#pCC input[value="${e}"]`),d=t=>p({type:"button",value:t})
function j(t,n){e(t,n),c(t,"&nbsp;"),o(t,l)}const b=()=>a(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){s("arena completed","gotoLastPage"),u(b())}function C(t,e){n(t,e),m(t,"&nbsp;"),o(t,v)}function q(t,e,o){const n=g(t)
if(!n)return
o(d(e),n)}function S(){q("<","<<",j),q(">",">>",C),f()}export{S as default}
//# sourceMappingURL=completedArenas-l5cnz9C2.js.map
