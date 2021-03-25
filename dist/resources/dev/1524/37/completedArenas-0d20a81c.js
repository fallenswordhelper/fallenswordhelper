import{D as t,o as e,t as o,O as n,ao as i,C as s}from"./calfSystem-5d0c721b.js"
import{c as r}from"./createInput-73c334d2.js"
import{i as p}from"./insertElementAfter-6b27e907.js"
import{i as a}from"./insertElementBefore-656c48d5.js"
import{i as m}from"./insertHtmlAfterEnd-4539e835.js"
import{i as f}from"./insertHtmlBeforeBegin-4059b7c4.js"
import{i as c}from"./interceptSubmit-23ea3d0b.js"
import"./formToUrl-3d2d4f7c.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
a(t,n),m(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
p(t,o),f(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-0d20a81c.js.map
