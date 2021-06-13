import{D as t,o as e,t as o,N as n,az as i,C as s}from"./calfSystem-ae2e69af.js"
import{c as a}from"./createInput-90835289.js"
import{i as r}from"./insertElementAfter-f1a82d71.js"
import{i as f}from"./insertElementBefore-c442a2a7.js"
import{i as p}from"./insertHtmlAfterEnd-f90eb1fc.js"
import{i as m}from"./insertHtmlBeforeBegin-006566a6.js"
import{i as u}from"./interceptSubmit-9058efa4.js"
import"./formToUrl-35718c02.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function j(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=a({type:"button",value:"<<"})
f(t,n),p(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=a({type:"button",value:">>"})
r(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default j
//# sourceMappingURL=completedArenas-310aaeca.js.map
