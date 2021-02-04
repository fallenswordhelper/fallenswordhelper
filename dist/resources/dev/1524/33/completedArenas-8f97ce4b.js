import{C as t,o as e,t as o,N as n,am as i,B as s}from"./calfSystem-37f70deb.js"
import{c as r}from"./createInput-ef7d744f.js"
import{i as a}from"./insertElementAfter-dcd31521.js"
import{i as p}from"./insertElementBefore-0a7f2602.js"
import{i as f}from"./insertHtmlAfterEnd-12ac228e.js"
import{i as m}from"./insertHtmlBeforeBegin-7374014a.js"
import{i as u}from"./interceptSubmit-8392a331.js"
import"./formToUrl-2a960512.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function d(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default d
//# sourceMappingURL=completedArenas-8f97ce4b.js.map
