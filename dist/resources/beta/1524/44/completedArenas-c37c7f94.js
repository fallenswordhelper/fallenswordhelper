import{D as t,o as e,t as o,N as n,ay as i,C as s}from"./calfSystem-a8d582b6.js"
import{c as a}from"./createInput-8922c2cd.js"
import{i as r}from"./insertElementAfter-c54d943a.js"
import{i as p}from"./insertElementBefore-7c440c87.js"
import{i as c}from"./insertHtmlAfterEnd-7c6126dc.js"
import{i as m}from"./insertHtmlBeforeBegin-5612e5d9.js"
import{i as f}from"./interceptSubmit-6afbec2a.js"
import"./formToUrl-4aa25bca.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=a({type:"button",value:"<<"})
p(t,n),c(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=a({type:"button",value:">>"})
r(t,o),m(t,"&nbsp;"),e(t,l)}}(),f()}export default b
//# sourceMappingURL=completedArenas-c37c7f94.js.map
