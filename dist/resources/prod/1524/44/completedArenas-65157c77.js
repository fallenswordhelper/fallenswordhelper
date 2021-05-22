import{D as t,o as e,t as o,N as n,aw as i,C as s}from"./calfSystem-6ad077b7.js"
import{c as r}from"./createInput-75a73ea8.js"
import{i as a}from"./insertElementAfter-4dbced0a.js"
import{i as p}from"./insertElementBefore-7c440c87.js"
import{i as f}from"./insertHtmlAfterEnd-0792ac6e.js"
import{i as m}from"./insertHtmlBeforeBegin-3ff19eec.js"
import{i as c}from"./interceptSubmit-efbdb1e0.js"
import"./formToUrl-a21852b2.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-65157c77.js.map
