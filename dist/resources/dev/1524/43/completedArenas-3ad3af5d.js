import{D as t,o as e,t as o,O as n,ay as i,C as s}from"./calfSystem-3cb2f93e.js"
import{c as r}from"./createInput-c2872ef0.js"
import{i as f}from"./insertElementAfter-f63e0bf0.js"
import{i as a}from"./insertElementBefore-23d4e956.js"
import{i as p}from"./insertHtmlAfterEnd-782307fa.js"
import{i as m}from"./insertHtmlBeforeBegin-7237db4a.js"
import{i as u}from"./interceptSubmit-4878d2e6.js"
import"./formToUrl-deef0cd3.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
a(t,n),p(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
f(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-3ad3af5d.js.map
