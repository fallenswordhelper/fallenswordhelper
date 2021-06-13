import{D as t,o as e,t as o,N as n,aA as i,C as s}from"./calfSystem-d3f0a380.js"
import{c as r}from"./createInput-816cd771.js"
import{i as a}from"./insertElementAfter-f0358052.js"
import{i as p}from"./insertElementBefore-c2bb9234.js"
import{i as f}from"./insertHtmlAfterEnd-1764e701.js"
import{i as m}from"./insertHtmlBeforeBegin-354a737c.js"
import{i as c}from"./interceptSubmit-96252bbe.js"
import"./formToUrl-d90c5ff1.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-77ed1e5b.js.map
