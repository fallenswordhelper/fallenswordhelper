import{x as s,o as a,p as e,i as t,C as n,ay as o,t as r,g as f,R as i,az as l,A as c}from"./calfSystem-37f70deb.js"
import{c as m}from"./closestTable-6f68d8f3.js"
import{d}from"./dialog-fd1181f5.js"
import"./closest-8b679b7a.js"
import"./dialogMsg-fcad563e.js"
function p(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(p).then(d)).then(r(g,a))}var t
"sendLink"===a.className&&f("img",e).forEach(i)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-e39757e0.js.map
