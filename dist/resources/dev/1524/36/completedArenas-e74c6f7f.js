import{D as t,o as e,t as o,O as n,ao as i,C as s}from"./calfSystem-eeb1d862.js"
import{c as r}from"./createInput-c963dc21.js"
import{i as a}from"./insertElementAfter-4120bdd7.js"
import{i as p}from"./insertElementBefore-42a90ba9.js"
import{i as m}from"./insertHtmlAfterEnd-2ce9b6d9.js"
import{i as c}from"./insertHtmlBeforeBegin-175d8316.js"
import{i as f}from"./interceptSubmit-6c8c8ca6.js"
import"./formToUrl-2acae37a.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),c(t,"&nbsp;"),e(t,l)}}(),f()}export default b
//# sourceMappingURL=completedArenas-e74c6f7f.js.map
