import{C as t,o as e,t as o,N as n,al as i,B as s}from"./calfSystem-dfa26790.js"
import{c as r}from"./createInput-5893fb83.js"
import{i as a}from"./insertElementAfter-73b44a15.js"
import{i as f}from"./insertElementBefore-9e5d02cd.js"
import{i as p}from"./insertHtmlAfterEnd-1adfe0ea.js"
import{i as m}from"./insertHtmlBeforeBegin-2480fc3f.js"
import{i as u}from"./interceptSubmit-c18e4478.js"
import"./formToUrl-4975483d.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function d(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
f(t,n),p(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default d
//# sourceMappingURL=completedArenas-4f4b9f83.js.map
