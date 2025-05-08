import{q as t,y as e,o,s as n,bS as s,bT as r,a8 as i}from"./calfSystem-G1dN925O.js"
import{c as a}from"./createInput-3jwazPKd.js"
import{i as p}from"./insertElementAfter-Pj5qjSoU.js"
import{i as m}from"./insertHtmlAfterEnd-s8cbAmD-.js"
import{i as f}from"./insertHtmlBeforeBegin-ozkCEcOE.js"
import{i as u}from"./interceptSubmit-Ji3kORWO.js"
import"./formToUrl--m9Zwlne.js"
function c(t){s(`${r}completed&page=${t}`)}function l(){n("arena completed","gotoFirstPage"),c(1)}const g=e=>t(`#pCC input[value="${e}"]`),b=t=>a({type:"button",value:t})
function j(t,n){e(t,n),m(t,"&nbsp;"),o(t,l)}const d=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){n("arena completed","gotoLastPage"),c(d())}function C(t,e){p(t,e),f(t,"&nbsp;"),o(t,v)}function S(t,e,o){const n=g(t)
if(!n)return
o(b(e),n)}function y(){S("<","<<",j),S(">",">>",C),u()}export{y as default}
//# sourceMappingURL=completedArenas-hHsiHkso.js.map
