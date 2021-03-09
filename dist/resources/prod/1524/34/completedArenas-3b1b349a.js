import{C as t,o as e,t as o,N as n,aj as i,B as s}from"./calfSystem-793da633.js"
import{c as r}from"./createInput-9733446a.js"
import{i as a}from"./insertElementAfter-cbb9f3a9.js"
import{i as p}from"./insertElementBefore-9e5d02cd.js"
import{i as m}from"./insertHtmlAfterEnd-7508c2c1.js"
import{i as f}from"./insertHtmlBeforeBegin-b4245dd6.js"
import{i as c}from"./interceptSubmit-c2811ec0.js"
import"./formToUrl-97034a23.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-3b1b349a.js.map
