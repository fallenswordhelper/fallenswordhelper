import{y as s,o as e,p as a,i as t,D as n,az as o,t as r,g as c,R as i,w as l,B as f}from"./calfSystem-71efcdd9.js"
import{c as d}from"./closestTable-46dcc06e.js"
import{d as m}from"./dialog-e89b7ecf.js"
import"./closest-4ebdb6d3.js"
import"./dialogMsg-a0c49d9a.js"
function p(s){const e=l(s)
let a={r:1,m:e}
return"Item was transferred to the guild store!"===e&&(a={r:0,m:""}),a}function g(s,e){0===e.r&&f('<span class="fshGreen">Taken</span>',d(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:e}=s
if("IMG"===e.tagName){s.preventDefault()
const a=e.parentNode.href;(t=a,o(t).then(p).then(m)).then(r(g,e))}var t
"sendLink"===e.className&&c("img",a).forEach(i)}function u(){s()||(e(a,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-21636c9f.js.map