import{y as s,o as a,p as t,i as e,D as n,aL as o,t as r,g as f,R as c,w as i,B as l}from"./calfSystem-d3f0a380.js"
import{c as m}from"./closestTable-f3f570fc.js"
import{d as p}from"./dialog-16fed349.js"
import"./closest-d38ca7fc.js"
import"./dialogMsg-16959bc2.js"
function d(s){const a=i(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function g(s,a){0===a.r&&l('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,o(e).then(d).then(p)).then(r(g,a))}var e
"sendLink"===a.className&&f("img",t).forEach(c)}function u(){s()||(a(t,h),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-e854fc20.js.map
