import{c as t}from"./createInput-c5f39cca.js"
import{q as e,y as o,o as n,c as s,bM as i,bN as r,a4 as a}from"./calfSystem-abb16b0d.js"
import{i as p}from"./insertElementAfter-33ec0427.js"
import{i as m}from"./insertHtmlAfterEnd-06552f87.js"
import{i as f}from"./insertHtmlBeforeBegin-977cd044.js"
import{i as u}from"./interceptSubmit-2c452287.js"
import"./formToUrl-3ea94a32.js"
function c(t){i(`${r}completed&page=${t}`)}const l=()=>a(e('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function b(){c(l())}function j(){!function(){const i=e('#pCC input[value="<"]')
if(i){const e=t({type:"button",value:"<<"})
o(e,i),m(e,"&nbsp;"),n(e,s(c,1))}}(),function(){const o=e('#pCC input[value=">"]')
if(o){const e=t({type:"button",value:">>"})
p(e,o),f(e,"&nbsp;"),n(e,b)}}(),u()}export{j as default}
//# sourceMappingURL=completedArenas-b00c3275.js.map
