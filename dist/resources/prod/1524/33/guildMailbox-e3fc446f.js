import{x as s,o as a,p as t,i as e,C as n,av as o,t as r,g as i,Q as l,aw as f,A as c}from"./calfSystem-0708a9bb.js"
import{c as m}from"./closestTable-9ab270bd.js"
import{d as p}from"./dialog-fd1181f5.js"
import"./closest-8b679b7a.js"
import"./dialogMsg-fcad563e.js"
function d(s){const a=f(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function g(s,a){0===a.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,o(e).then(d).then(p)).then(r(g,a))}var e
"sendLink"===a.className&&i("img",t).forEach(l)}function b(){s()||(a(t,h),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default b
//# sourceMappingURL=guildMailbox-e3fc446f.js.map
