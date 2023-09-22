import{c as t}from"./createInput-08b5e815.js"
import{q as e,y as o,o as n,c as s,bL as i,bM as r,a3 as a}from"./calfSystem-4830a18d.js"
import{i as p}from"./insertElementAfter-f17e432f.js"
import{i as m}from"./insertHtmlAfterEnd-52cca1f4.js"
import{i as f}from"./insertHtmlBeforeBegin-b72f8ab9.js"
import{i as u}from"./interceptSubmit-0ca01d03.js"
import"./formToUrl-824efe66.js"
function c(t){i(`${r}completed&page=${t}`)}const l=()=>a(e('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function b(){c(l())}function j(){!function(){const i=e('#pCC input[value="<"]')
if(i){const e=t({type:"button",value:"<<"})
o(e,i),m(e,"&nbsp;"),n(e,s(c,1))}}(),function(){const o=e('#pCC input[value=">"]')
if(o){const e=t({type:"button",value:">>"})
p(e,o),f(e,"&nbsp;"),n(e,b)}}(),u()}export{j as default}
//# sourceMappingURL=completedArenas-8af0c364.js.map
