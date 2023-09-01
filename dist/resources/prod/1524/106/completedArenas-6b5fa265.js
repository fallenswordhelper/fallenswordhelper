import{c as t}from"./createInput-ae593833.js"
import{q as e,y as o,o as n,c as s,bO as i,bP as r,a5 as a}from"./calfSystem-076d7a01.js"
import{i as p}from"./insertElementAfter-95137ac3.js"
import{i as m}from"./insertHtmlAfterEnd-69c1ccf1.js"
import{i as f}from"./insertHtmlBeforeBegin-55330665.js"
import{i as u}from"./interceptSubmit-54adf362.js"
import"./formToUrl-46584106.js"
function c(t){i(`${r}completed&page=${t}`)}const l=()=>a(e('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function b(){c(l())}function j(){!function(){const i=e('#pCC input[value="<"]')
if(i){const e=t({type:"button",value:"<<"})
o(e,i),m(e,"&nbsp;"),n(e,s(c,1))}}(),function(){const o=e('#pCC input[value=">"]')
if(o){const e=t({type:"button",value:">>"})
p(e,o),f(e,"&nbsp;"),n(e,b)}}(),u()}export{j as default}
//# sourceMappingURL=completedArenas-6b5fa265.js.map
