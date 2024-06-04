import{q as t,y as e,o,s as n,bT as s,bU as r,a8 as i}from"./calfSystem-wTzwei3t.js"
import{c as a}from"./createInput-CrpQJ-TY.js"
import{i as p}from"./insertElementAfter-DuMo3Fbn.js"
import{i as m}from"./insertHtmlAfterEnd-C7sg9qpO.js"
import{i as f}from"./insertHtmlBeforeBegin-BMxbrTTC.js"
import{i as c}from"./interceptSubmit-BOa9u4Un.js"
import"./formToUrl-n7bzGaSs.js"
function u(t){s(`${r}completed&page=${t}`)}function l(){n("arena completed","gotoFirstPage"),u(1)}const g=e=>t(`#pCC input[value="${e}"]`),b=t=>a({type:"button",value:t})
function j(t,n){e(t,n),m(t,"&nbsp;"),o(t,l)}const d=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){n("arena completed","gotoLastPage"),u(d())}function C(t,e){p(t,e),f(t,"&nbsp;"),o(t,v)}function y(t,e,o){const n=g(t)
if(!n)return
o(b(e),n)}function E(){y("<","<<",j),y(">",">>",C),c()}export{E as default}
//# sourceMappingURL=completedArenas-DK9JWFhO.js.map
