import{q as t,z as o,o as e,aT as n,s,cn as a,co as i,ac as r}from"./calfSystem-ChzN4Q-P.js"
import{c as p}from"./createInput-DC6X1nzh.js"
import{i as c}from"./insertHtmlAfterEnd-DEdxHibR.js"
import{i as m}from"./insertHtmlBeforeBegin-DCRgrqG0.js"
import{i as f}from"./interceptSubmit-CmNeM6n-.js"
import"./formToUrl-DpqdMGU9.js"
function u(t){a(`${i}completed&page=${t}`)}function l(){s("arena completed","gotoFirstPage"),u(1)}const g=o=>t(`#pCC input[value="${o}"]`),d=t=>p({type:"button",value:t})
function j(t,n){o(t,n),c(t,"&nbsp;"),e(t,l)}const b=()=>r(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){s("arena completed","gotoLastPage"),u(b())}function C(t,o){n(t,o),m(t,"&nbsp;"),e(t,v)}function S(t,o,e){const n=g(t)
if(!n)return
e(d(o),n)}function $(){S("<","<<",j),S(">",">>",C),f()}export{$ as default}
//# sourceMappingURL=completedArenas-Drfo_YTm.js.map
