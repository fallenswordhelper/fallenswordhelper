import{c as t}from"./createInput-4ae8777b.js"
import{q as e,y as o,o as n,c as s,bO as i,bP as r,a5 as a}from"./calfSystem-34913441.js"
import{i as p}from"./insertElementAfter-639f3edf.js"
import{i as m}from"./insertHtmlAfterEnd-feafb00f.js"
import{i as f}from"./insertHtmlBeforeBegin-80975ba7.js"
import{i as u}from"./interceptSubmit-2c6bfafb.js"
import"./formToUrl-4ee925a6.js"
function c(t){i(`${r}completed&page=${t}`)}const l=()=>a(e('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,"")
function b(){c(l())}function j(){!function(){const i=e('#pCC input[value="<"]')
if(i){const e=t({type:"button",value:"<<"})
o(e,i),m(e,"&nbsp;"),n(e,s(c,1))}}(),function(){const o=e('#pCC input[value=">"]')
if(o){const e=t({type:"button",value:">>"})
p(e,o),f(e,"&nbsp;"),n(e,b)}}(),u()}export{j as default}
//# sourceMappingURL=completedArenas-645c68a5.js.map
