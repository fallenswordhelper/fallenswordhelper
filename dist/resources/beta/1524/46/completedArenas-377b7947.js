import{D as t,o as e,t as o,N as n,az as i,C as s}from"./calfSystem-cbf77dd7.js"
import{c as r}from"./createInput-64e90ab9.js"
import{i as a}from"./insertElementAfter-baa96957.js"
import{i as p}from"./insertElementBefore-c2bb9234.js"
import{i as f}from"./insertHtmlAfterEnd-b5f0b3bc.js"
import{i as m}from"./insertHtmlBeforeBegin-1377340b.js"
import{i as c}from"./interceptSubmit-b6d9986f.js"
import"./formToUrl-5189bcfb.js"
function u(t){n(`${i}completed&page=${t}`)}function b(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function l(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,b)}}(),c()}export default l
//# sourceMappingURL=completedArenas-377b7947.js.map
