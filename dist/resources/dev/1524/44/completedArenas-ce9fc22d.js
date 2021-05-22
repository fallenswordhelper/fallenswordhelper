import{D as t,o as e,t as o,N as n,az as i,C as s}from"./calfSystem-f7cf24f6.js"
import{c as r}from"./createInput-8f2d1a63.js"
import{i as f}from"./insertElementAfter-634bdf02.js"
import{i as a}from"./insertElementBefore-7c440c87.js"
import{i as p}from"./insertHtmlAfterEnd-63c8758b.js"
import{i as m}from"./insertHtmlBeforeBegin-0383b0a5.js"
import{i as c}from"./interceptSubmit-2265e54d.js"
import"./formToUrl-2761f769.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
a(t,n),p(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
f(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-ce9fc22d.js.map
