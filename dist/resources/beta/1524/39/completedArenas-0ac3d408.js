import{D as t,o as e,t as o,O as n,aw as i,C as s}from"./calfSystem-26fbeaeb.js"
import{c as r}from"./createInput-b457e181.js"
import{i as a}from"./insertElementAfter-17f5394f.js"
import{i as p}from"./insertElementBefore-68b894c4.js"
import{i as f}from"./insertHtmlAfterEnd-078c7745.js"
import{i as m}from"./insertHtmlBeforeBegin-b1243fca.js"
import{i as u}from"./interceptSubmit-b180aeed.js"
import"./formToUrl-140d33d2.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-0ac3d408.js.map
