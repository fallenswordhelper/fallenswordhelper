import{D as t,o as e,t as o,N as n,ax as i,C as s}from"./calfSystem-e1e858cd.js"
import{c as r}from"./createInput-464ad748.js"
import{i as a}from"./insertElementAfter-a5497c88.js"
import{i as p}from"./insertElementBefore-c442a2a7.js"
import{i as m}from"./insertHtmlAfterEnd-340cd3a2.js"
import{i as f}from"./insertHtmlBeforeBegin-532740d9.js"
import{i as c}from"./interceptSubmit-fde65f15.js"
import"./formToUrl-d7735a71.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function d(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),c()}export default d
//# sourceMappingURL=completedArenas-47784c2d.js.map
