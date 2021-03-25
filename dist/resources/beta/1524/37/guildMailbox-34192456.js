import{y as s,o as a,p as t,i as e,D as n,az as o,t as r,g as i,R as f,w as l,B as c}from"./calfSystem-cb2a6f39.js"
import{c as m}from"./closestTable-2332b815.js"
import{d as p}from"./dialog-8dd3ba22.js"
import"./closest-214539bf.js"
import"./dialogMsg-f2f50c63.js"
function d(s){const a=l(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function g(s,a){0===a.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,o(e).then(d).then(p)).then(r(g,a))}var e
"sendLink"===a.className&&i("img",t).forEach(f)}function u(){s()||(a(t,h),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-34192456.js.map
