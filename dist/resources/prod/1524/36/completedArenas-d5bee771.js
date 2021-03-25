import{D as t,o as e,t as o,O as n,al as i,C as s}from"./calfSystem-e7bde0c3.js"
import{c as r}from"./createInput-563f37d2.js"
import{i as a}from"./insertElementAfter-5aff6594.js"
import{i as p}from"./insertElementBefore-42a90ba9.js"
import{i as f}from"./insertHtmlAfterEnd-29461974.js"
import{i as m}from"./insertHtmlBeforeBegin-57af9ec4.js"
import{i as u}from"./interceptSubmit-41d1852c.js"
import"./formToUrl-aa476074.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-d5bee771.js.map
