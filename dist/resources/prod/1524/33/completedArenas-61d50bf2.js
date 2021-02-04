import{C as t,o as e,t as o,N as n,aj as i,B as s}from"./calfSystem-0708a9bb.js"
import{c as r}from"./createInput-d5428169.js"
import{i as a}from"./insertElementAfter-23e2c3dd.js"
import{i as p}from"./insertElementBefore-0a7f2602.js"
import{i as m}from"./insertHtmlAfterEnd-409ee96b.js"
import{i as f}from"./insertHtmlBeforeBegin-7b7180e1.js"
import{i as u}from"./interceptSubmit-b52f1e00.js"
import"./formToUrl-25c06939.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-61d50bf2.js.map
