import{q as t,C as o,o as e,aX as n,s as a,aa as s,co as i,cp as r}from"./calfSystem-BGOTz8de.js"
import{c as p}from"./createInput-DtY3IfhY.js"
import{i as m}from"./insertHtmlAfterEnd-CjhYSrOa.js"
import{i as c}from"./insertHtmlBeforeBegin-Dui7c_qo.js"
import{i as f}from"./interceptSubmit-CHnAIuBp.js"
import"./formToUrl-RzN0-7i1.js"
function u(t){i(`${r}completed&page=${t}`)}function l(){a("arena completed","gotoFirstPage"),u(1)}const g=o=>t(`#pCC input[value="${o}"]`),j=t=>p({type:"button",value:t})
function d(t,n){o(t,n),m(t,"&nbsp;"),e(t,l)}const b=()=>s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){a("arena completed","gotoLastPage"),u(b())}function C(t,o){n(t,o),c(t,"&nbsp;"),e(t,v)}function S(t,o,e){const n=g(t)
if(!n)return
e(j(o),n)}function $(){S("<","<<",d),S(">",">>",C),f()}export{$ as default}
//# sourceMappingURL=completedArenas-C91dzYLm.js.map
