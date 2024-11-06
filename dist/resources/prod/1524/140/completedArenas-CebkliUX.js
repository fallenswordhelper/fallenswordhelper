import{q as t,y as e,o,s as n,bX as s,bY as r,a8 as i}from"./calfSystem-BhNMi9iJ.js"
import{c as a}from"./createInput-7e1o9Lct.js"
import{i as p}from"./insertElementAfter-CvsKHxKZ.js"
import{i as m}from"./insertHtmlAfterEnd-CsqS4j7u.js"
import{i as f}from"./insertHtmlBeforeBegin-CN2zNbnt.js"
import{i as c}from"./interceptSubmit-Br2DCRBv.js"
import"./formToUrl-e_E1X-JY.js"
function u(t){s(`${r}completed&page=${t}`)}function l(){n("arena completed","gotoFirstPage"),u(1)}const b=e=>t(`#pCC input[value="${e}"]`),g=t=>a({type:"button",value:t})
function j(t,n){e(t,n),m(t,"&nbsp;"),o(t,l)}const d=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){n("arena completed","gotoLastPage"),u(d())}function C(t,e){p(t,e),f(t,"&nbsp;"),o(t,v)}function y(t,e,o){const n=b(t)
if(!n)return
o(g(e),n)}function E(){y("<","<<",j),y(">",">>",C),c()}export{E as default}
//# sourceMappingURL=completedArenas-CebkliUX.js.map
