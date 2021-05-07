import{D as t,o as e,t as o,O as n,ax as i,C as s}from"./calfSystem-1d588248.js"
import{c as r}from"./createInput-7d18793e.js"
import{i as a}from"./insertElementAfter-2b08ccae.js"
import{i as p}from"./insertElementBefore-23d4e956.js"
import{i as m}from"./insertHtmlAfterEnd-8414b2b7.js"
import{i as f}from"./insertHtmlBeforeBegin-73f71ef1.js"
import{i as u}from"./interceptSubmit-60e593a5.js"
import"./formToUrl-0d0c488d.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-3d0bf58a.js.map
