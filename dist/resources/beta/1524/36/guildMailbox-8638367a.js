import{y as s,o as a,p as t,i as e,D as n,az as o,t as r,g as i,R as c,w as f,B as l}from"./calfSystem-4a40365f.js"
import{c as m}from"./closestTable-d46cf6db.js"
import{d as p}from"./dialog-92c3ed6b.js"
import"./closest-7968af48.js"
import"./dialogMsg-716cf657.js"
function d(s){const a=f(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function g(s,a){0===a.r&&l('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,o(e).then(d).then(p)).then(r(g,a))}var e
"sendLink"===a.className&&i("img",t).forEach(c)}function u(){s()||(a(t,h),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-8638367a.js.map
