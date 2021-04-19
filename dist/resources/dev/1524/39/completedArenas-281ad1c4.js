import{D as t,o as e,t as o,O as n,ax as i,C as s}from"./calfSystem-b31aba65.js"
import{c as r}from"./createInput-d7f942e4.js"
import{i as a}from"./insertElementAfter-b7c22018.js"
import{i as p}from"./insertElementBefore-68b894c4.js"
import{i as m}from"./insertHtmlAfterEnd-692199f9.js"
import{i as f}from"./insertHtmlBeforeBegin-e43be051.js"
import{i as c}from"./interceptSubmit-b313ecea.js"
import"./formToUrl-b9ac6c05.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-281ad1c4.js.map
