import{x as s,o as a,p as e,i as t,C as n,ax as o,t as r,g as i,Q as c,ay as f,A as l}from"./calfSystem-c91a5c89.js"
import{c as m}from"./closestTable-2e6fd7b0.js"
import{d as p}from"./dialog-fd1181f5.js"
import"./closest-8b679b7a.js"
import"./dialogMsg-fcad563e.js"
function d(s){const a=f(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&l('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(c)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-6ba142df.js.map
