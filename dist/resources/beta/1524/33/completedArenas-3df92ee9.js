import{C as t,o as e,t as o,N as n,al as i,B as s}from"./calfSystem-c91a5c89.js"
import{c as r}from"./createInput-a2c87173.js"
import{i as a}from"./insertElementAfter-829ab10f.js"
import{i as p}from"./insertElementBefore-0a7f2602.js"
import{i as m}from"./insertHtmlAfterEnd-3d170c1c.js"
import{i as f}from"./insertHtmlBeforeBegin-245da958.js"
import{i as c}from"./interceptSubmit-910866a3.js"
import"./formToUrl-3cd8bc13.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-3df92ee9.js.map
