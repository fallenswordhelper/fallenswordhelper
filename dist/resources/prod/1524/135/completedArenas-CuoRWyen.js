import{q as t,y as e,o,s as n,bX as s,bY as r,a8 as i}from"./calfSystem-B-q5dZfX.js"
import{c as a}from"./createInput-CIPgP5P7.js"
import{i as p}from"./insertElementAfter-HCJFd2zX.js"
import{i as m}from"./insertHtmlAfterEnd-4JZwncNn.js"
import{i as f}from"./insertHtmlBeforeBegin-BnYx4XoU.js"
import{i as c}from"./interceptSubmit-Cei7B88B.js"
import"./formToUrl-BlRSKkiN.js"
function u(t){s(`${r}completed&page=${t}`)}function l(){n("arena completed","gotoFirstPage"),u(1)}const g=e=>t(`#pCC input[value="${e}"]`),b=t=>a({type:"button",value:t})
function j(t,n){e(t,n),m(t,"&nbsp;"),o(t,l)}const d=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){n("arena completed","gotoLastPage"),u(d())}function C(t,e){p(t,e),f(t,"&nbsp;"),o(t,v)}function y(t,e,o){const n=g(t)
if(!n)return
o(b(e),n)}function E(){y("<","<<",j),y(">",">>",C),c()}export{E as default}
//# sourceMappingURL=completedArenas-CuoRWyen.js.map
