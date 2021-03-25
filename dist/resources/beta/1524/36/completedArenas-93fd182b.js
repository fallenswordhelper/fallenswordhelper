import{D as t,o as e,t as o,O as n,an as i,C as a}from"./calfSystem-4a40365f.js"
import{c as s}from"./createInput-7fa974b4.js"
import{i as r}from"./insertElementAfter-78780e53.js"
import{i as f}from"./insertElementBefore-42a90ba9.js"
import{i as p}from"./insertHtmlAfterEnd-4956925e.js"
import{i as m}from"./insertHtmlBeforeBegin-4fbe3ca3.js"
import{i as u}from"./interceptSubmit-c8d517a3.js"
import"./formToUrl-8ffaa75b.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(a(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=s({type:"button",value:"<<"})
f(t,n),p(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=s({type:"button",value:">>"})
r(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-93fd182b.js.map
