import{D as t,o as e,t as o,O as n,au as i,C as s}from"./calfSystem-fe534823.js"
import{c as r}from"./createInput-58fc2e41.js"
import{i as f}from"./insertElementAfter-ce6c6ff4.js"
import{i as p}from"./insertElementBefore-68b894c4.js"
import{i as a}from"./insertHtmlAfterEnd-c42defd3.js"
import{i as m}from"./insertHtmlBeforeBegin-f81c2947.js"
import{i as c}from"./interceptSubmit-bb91bdd6.js"
import"./formToUrl-e34601f4.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),a(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
f(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-b6ab7105.js.map
