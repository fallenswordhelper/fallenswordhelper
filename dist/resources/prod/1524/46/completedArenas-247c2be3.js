import{D as t,o as e,t as o,N as n,ax as i,C as s}from"./calfSystem-7991d843.js"
import{c as r}from"./createInput-e6426c85.js"
import{i as a}from"./insertElementAfter-a49606d1.js"
import{i as p}from"./insertElementBefore-c2bb9234.js"
import{i as f}from"./insertHtmlAfterEnd-c8c22cfb.js"
import{i as m}from"./insertHtmlBeforeBegin-a672866f.js"
import{i as c}from"./interceptSubmit-b3275ec5.js"
import"./formToUrl-33c970fe.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-247c2be3.js.map
