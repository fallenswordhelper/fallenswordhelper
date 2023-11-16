import{q as t,y as e,o,s as n,bK as s,bL as r,a3 as i}from"./calfSystem-dEoRVG2S.js"
import{c as a}from"./createInput-bdSpn5TJ.js"
import{i as p}from"./insertElementAfter-mYrZy-11.js"
import{i as m}from"./insertHtmlAfterEnd-AnxtMwr2.js"
import{i as f}from"./insertHtmlBeforeBegin-X-U-MrXK.js"
import{i as c}from"./interceptSubmit-yJRG_kb1.js"
import"./formToUrl-Yq71ksun.js"
function u(t){s(`${r}completed&page=${t}`)}function l(){n("arena completed","gotoFirstPage"),u(1)}const g=e=>t(`#pCC input[value="${e}"]`),b=t=>a({type:"button",value:t})
function j(t,n){e(t,n),m(t,"&nbsp;"),o(t,l)}const d=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){n("arena completed","gotoLastPage"),u(d())}function y(t,e){p(t,e),f(t,"&nbsp;"),o(t,v)}function C(t,e,o){const n=g(t)
if(!n)return
o(b(e),n)}function E(){C("<","<<",j),C(">",">>",y),c()}export{E as default}
//# sourceMappingURL=completedArenas-DGqj5eSA.js.map
