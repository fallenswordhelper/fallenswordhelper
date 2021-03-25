import{D as t,o as e,t as o,O as n,an as i,C as s}from"./calfSystem-cb2a6f39.js"
import{c as r}from"./createInput-9311ddf5.js"
import{i as a}from"./insertElementAfter-2f08dee6.js"
import{i as f}from"./insertElementBefore-656c48d5.js"
import{i as p}from"./insertHtmlAfterEnd-5538f340.js"
import{i as m}from"./insertHtmlBeforeBegin-52a7f5c2.js"
import{i as c}from"./interceptSubmit-5c6ee190.js"
import"./formToUrl-09695de7.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function d(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
f(t,n),p(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default d
//# sourceMappingURL=completedArenas-33067109.js.map
