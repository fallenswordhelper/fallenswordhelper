import{q as t,y as e,o,s as n,bK as s,bL as r,a3 as i}from"./calfSystem-rn9Rc_nF.js"
import{c as a}from"./createInput-OE8Qn26K.js"
import{i as p}from"./insertElementAfter-54sPhbo8.js"
import{i as m}from"./insertHtmlAfterEnd-axarWc26.js"
import{i as f}from"./insertHtmlBeforeBegin-Xbi8MgaY.js"
import{i as c}from"./interceptSubmit-cB4BJ9ys.js"
import"./formToUrl-gDJQKQU4.js"
function u(t){s(`${r}completed&page=${t}`)}function l(){n("arena completed","gotoFirstPage"),u(1)}const g=e=>t(`#pCC input[value="${e}"]`),b=t=>a({type:"button",value:t})
function j(t,n){e(t,n),m(t,"&nbsp;"),o(t,l)}const d=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){n("arena completed","gotoLastPage"),u(d())}function y(t,e){p(t,e),f(t,"&nbsp;"),o(t,v)}function C(t,e,o){const n=g(t)
if(!n)return
o(b(e),n)}function E(){C("<","<<",j),C(">",">>",y),c()}export{E as default}
//# sourceMappingURL=completedArenas-2npFHpSx.js.map
