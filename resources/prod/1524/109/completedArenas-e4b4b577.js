import{c as t}from"./createInput-7756e4ea.js"
import{q as e,y as o,o as n,c as s,bO as i,bP as r,a5 as a}from"./calfSystem-2f15e074.js"
import{i as p}from"./insertElementAfter-bbee38d9.js"
import{i as m}from"./insertHtmlAfterEnd-f5410efc.js"
import{i as f}from"./insertHtmlBeforeBegin-7d8c60bf.js"
import{i as u}from"./interceptSubmit-1b6c609a.js"
import"./formToUrl-c2b3e14d.js"
function c(t){i(`${r}completed&page=${t}`)}const l=()=>a(e('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function b(){c(l())}function j(){!function(){const i=e('#pCC input[value="<"]')
if(i){const e=t({type:"button",value:"<<"})
o(e,i),m(e,"&nbsp;"),n(e,s(c,1))}}(),function(){const o=e('#pCC input[value=">"]')
if(o){const e=t({type:"button",value:">>"})
p(e,o),f(e,"&nbsp;"),n(e,b)}}(),u()}export{j as default}
//# sourceMappingURL=completedArenas-e4b4b577.js.map
