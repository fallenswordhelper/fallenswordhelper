import{q as t,C as o,o as e,aX as n,s as a,aa as s,co as i,cp as r}from"./calfSystem-BGW9cdWN.js"
import{c as p}from"./createInput-BPTzKwU5.js"
import{i as m}from"./insertHtmlAfterEnd-Cz10bREE.js"
import{i as c}from"./insertHtmlBeforeBegin-Cav-wJ1T.js"
import{i as f}from"./interceptSubmit-CcvGNLGd.js"
import"./formToUrl-BkW6Pnxi.js"
function u(t){i(`${r}completed&page=${t}`)}function l(){a("arena completed","gotoFirstPage"),u(1)}const g=o=>t(`#pCC input[value="${o}"]`),j=t=>p({type:"button",value:t})
function d(t,n){o(t,n),m(t,"&nbsp;"),e(t,l)}const b=()=>s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function v(){a("arena completed","gotoLastPage"),u(b())}function C(t,o){n(t,o),c(t,"&nbsp;"),e(t,v)}function S(t,o,e){const n=g(t)
if(!n)return
e(j(o),n)}function $(){S("<","<<",d),S(">",">>",C),f()}export{$ as default}
//# sourceMappingURL=completedArenas-DNBgEpmz.js.map
