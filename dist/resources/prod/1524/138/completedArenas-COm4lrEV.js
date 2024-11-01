import{q as t,y as e,o,s as n,bX as s,bY as r,a8 as i}from"./calfSystem-BjarbvkO.js"
import{c as a}from"./createInput-annr5T-c.js"
import{i as p}from"./insertElementAfter-C4It6MDj.js"
import{i as m}from"./insertHtmlAfterEnd-Bahtg1AL.js"
import{i as f}from"./insertHtmlBeforeBegin-C2zvuyse.js"
import{i as c}from"./interceptSubmit-YMLQpszw.js"
import"./formToUrl-UxWlznNu.js"
function u(t){s(`${r}completed&page=${t}`)}function l(){n("arena completed","gotoFirstPage"),u(1)}const b=e=>t(`#pCC input[value="${e}"]`),g=t=>a({type:"button",value:t})
function j(t,n){e(t,n),m(t,"&nbsp;"),o(t,l)}const d=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){n("arena completed","gotoLastPage"),u(d())}function C(t,e){p(t,e),f(t,"&nbsp;"),o(t,v)}function y(t,e,o){const n=b(t)
if(!n)return
o(g(e),n)}function E(){y("<","<<",j),y(">",">>",C),c()}export{E as default}
//# sourceMappingURL=completedArenas-COm4lrEV.js.map
