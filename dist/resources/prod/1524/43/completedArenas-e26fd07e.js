import{D as t,o as e,t as o,O as n,av as i,C as s}from"./calfSystem-9942149b.js"
import{c as r}from"./createInput-9941d334.js"
import{i as a}from"./insertElementAfter-e9d48222.js"
import{i as p}from"./insertElementBefore-23d4e956.js"
import{i as m}from"./insertHtmlAfterEnd-e5fb7af4.js"
import{i as f}from"./insertHtmlBeforeBegin-5ac0166c.js"
import{i as u}from"./interceptSubmit-13aed0cb.js"
import"./formToUrl-26ed3a6b.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-e26fd07e.js.map
