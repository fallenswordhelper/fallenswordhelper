import{D as t,o as e,t as o,O as n,al as i,C as s}from"./calfSystem-60c20ae9.js"
import{c as r}from"./createInput-aabb8b6b.js"
import{i as a}from"./insertElementAfter-640d556d.js"
import{i as p}from"./insertElementBefore-656c48d5.js"
import{i as m}from"./insertHtmlAfterEnd-ccf5624b.js"
import{i as f}from"./insertHtmlBeforeBegin-6bd74579.js"
import{i as c}from"./interceptSubmit-0497cf12.js"
import"./formToUrl-dae90b24.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-b45d6c5e.js.map
