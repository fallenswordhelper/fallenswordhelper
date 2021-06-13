import{D as t,o as e,t as o,N as n,aA as i,C as s}from"./calfSystem-6a3c85e0.js"
import{c as r}from"./createInput-9bf3eee1.js"
import{i as a}from"./insertElementAfter-677202b8.js"
import{i as p}from"./insertElementBefore-c442a2a7.js"
import{i as m}from"./insertHtmlAfterEnd-219827a9.js"
import{i as f}from"./insertHtmlBeforeBegin-5d78259d.js"
import{i as u}from"./interceptSubmit-72e26708.js"
import"./formToUrl-8a7bb14c.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-5ebdb216.js.map
