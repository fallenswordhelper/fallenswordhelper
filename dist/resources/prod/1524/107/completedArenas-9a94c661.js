import{c as t}from"./createInput-9528c659.js"
import{q as e,y as o,o as n,c as s,bO as i,bP as r,a5 as a}from"./calfSystem-2fff342b.js"
import{i as p}from"./insertElementAfter-5356b70c.js"
import{i as m}from"./insertHtmlAfterEnd-d463625c.js"
import{i as f}from"./insertHtmlBeforeBegin-52ab7a3c.js"
import{i as u}from"./interceptSubmit-fde9f84f.js"
import"./formToUrl-cfc572ea.js"
function c(t){i(`${r}completed&page=${t}`)}const l=()=>a(e('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function b(){c(l())}function j(){!function(){const i=e('#pCC input[value="<"]')
if(i){const e=t({type:"button",value:"<<"})
o(e,i),m(e,"&nbsp;"),n(e,s(c,1))}}(),function(){const o=e('#pCC input[value=">"]')
if(o){const e=t({type:"button",value:">>"})
p(e,o),f(e,"&nbsp;"),n(e,b)}}(),u()}export{j as default}
//# sourceMappingURL=completedArenas-9a94c661.js.map
