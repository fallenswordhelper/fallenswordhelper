import{q as t,y as e,o,s as n,bR as s,bS as r,a8 as i}from"./calfSystem-DCvZki7i.js"
import{c as a}from"./createInput-B1uqsO2M.js"
import{i as p}from"./insertElementAfter-DiWV0zvO.js"
import{i as m}from"./insertHtmlAfterEnd-DI7GI1qj.js"
import{i as f}from"./insertHtmlBeforeBegin-CUpn8zst.js"
import{i as c}from"./interceptSubmit-D77JWcKR.js"
import"./formToUrl-aEq2bkmP.js"
function u(t){s(`${r}completed&page=${t}`)}function l(){n("arena completed","gotoFirstPage"),u(1)}const g=e=>t(`#pCC input[value="${e}"]`),b=t=>a({type:"button",value:t})
function j(t,n){e(t,n),m(t,"&nbsp;"),o(t,l)}const d=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){n("arena completed","gotoLastPage"),u(d())}function C(t,e){p(t,e),f(t,"&nbsp;"),o(t,v)}function S(t,e,o){const n=g(t)
if(!n)return
o(b(e),n)}function y(){S("<","<<",j),S(">",">>",C),c()}export{y as default}
//# sourceMappingURL=completedArenas-v9DGbPSX.js.map
