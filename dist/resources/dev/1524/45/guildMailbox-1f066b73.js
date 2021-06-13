import{y as s,o as a,p as e,i as t,D as n,aL as o,t as r,g as i,R as l,w as c,B as f}from"./calfSystem-6a3c85e0.js"
import{c as m}from"./closestTable-305a5f02.js"
import{d as p}from"./dialog-25c9de65.js"
import"./closest-8e46d454.js"
import"./dialogMsg-f24b55b1.js"
function d(s){const a=c(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(l)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-1f066b73.js.map
