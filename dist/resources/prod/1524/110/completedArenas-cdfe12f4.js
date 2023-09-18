import{c as t}from"./createInput-c66459c1.js"
import{q as e,y as o,o as n,c as s,bM as i,bN as r,a4 as a}from"./calfSystem-929ac228.js"
import{i as p}from"./insertElementAfter-7e99ee43.js"
import{i as m}from"./insertHtmlAfterEnd-cbb15ee8.js"
import{i as f}from"./insertHtmlBeforeBegin-a2731549.js"
import{i as u}from"./interceptSubmit-9ec04868.js"
import"./formToUrl-25253a60.js"
function c(t){i(`${r}completed&page=${t}`)}const l=()=>a(e('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function b(){c(l())}function j(){!function(){const i=e('#pCC input[value="<"]')
if(i){const e=t({type:"button",value:"<<"})
o(e,i),m(e,"&nbsp;"),n(e,s(c,1))}}(),function(){const o=e('#pCC input[value=">"]')
if(o){const e=t({type:"button",value:">>"})
p(e,o),f(e,"&nbsp;"),n(e,b)}}(),u()}export{j as default}
//# sourceMappingURL=completedArenas-cdfe12f4.js.map
