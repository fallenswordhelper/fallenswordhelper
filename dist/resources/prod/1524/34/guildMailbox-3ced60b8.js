import{x as s,o as a,p as t,i as e,C as n,av as o,t as r,g as f,Q as i,aw as l,A as c}from"./calfSystem-793da633.js"
import{c as m}from"./closestTable-90fad5df.js"
import{d}from"./dialog-a123f46e.js"
import"./closest-f906514d.js"
import"./dialogMsg-2f52cc12.js"
function p(s){const a=l(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function g(s,a){0===a.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,o(e).then(p).then(d)).then(r(g,a))}var e
"sendLink"===a.className&&f("img",t).forEach(i)}function u(){s()||(a(t,h),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-3ced60b8.js.map
