import{q as t,y as e,o,s as n,bR as s,bS as r,a8 as i}from"./calfSystem-B3Rc3sVt.js"
import{c as a}from"./createInput-Cnq0MlYd.js"
import{i as p}from"./insertElementAfter-_Osg8PPa.js"
import{i as m}from"./insertHtmlAfterEnd-D_3NYqTk.js"
import{i as f}from"./insertHtmlBeforeBegin-CZCMwkXz.js"
import{i as c}from"./interceptSubmit-DWgiQbkW.js"
import"./formToUrl-ed9OyMqy.js"
function u(t){s(`${r}completed&page=${t}`)}function l(){n("arena completed","gotoFirstPage"),u(1)}const g=e=>t(`#pCC input[value="${e}"]`),b=t=>a({type:"button",value:t})
function j(t,n){e(t,n),m(t,"&nbsp;"),o(t,l)}const d=()=>i(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){n("arena completed","gotoLastPage"),u(d())}function C(t,e){p(t,e),f(t,"&nbsp;"),o(t,v)}function S(t,e,o){const n=g(t)
if(!n)return
o(b(e),n)}function y(){S("<","<<",j),S(">",">>",C),c()}export{y as default}
//# sourceMappingURL=completedArenas-CWR055mh.js.map
