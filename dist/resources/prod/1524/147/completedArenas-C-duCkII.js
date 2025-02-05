import{q as t,A as e,o,aW as n,s,ad as a,cq as r,cr as i}from"./calfSystem-BAeDn21M.js"
import{c as p}from"./createInput-B6T-33bD.js"
import{i as c}from"./insertHtmlAfterEnd-zhforf3q.js"
import{i as m}from"./insertHtmlBeforeBegin-KM68DgEq.js"
import{i as f}from"./interceptSubmit-CqzbaM3V.js"
import"./formToUrl-Bym6lubv.js"
function u(t){r(`${i}completed&page=${t}`)}function l(){s("arena completed","gotoFirstPage"),u(1)}const g=e=>t(`#pCC input[value="${e}"]`),d=t=>p({type:"button",value:t})
function j(t,n){e(t,n),c(t,"&nbsp;"),o(t,l)}const b=()=>a(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){s("arena completed","gotoLastPage"),u(b())}function C(t,e){n(t,e),m(t,"&nbsp;"),o(t,v)}function q(t,e,o){const n=g(t)
if(!n)return
o(d(e),n)}function S(){q("<","<<",j),q(">",">>",C),f()}export{S as default}
//# sourceMappingURL=completedArenas-C-duCkII.js.map
