import{y as s,o as e,p as a,i as t,D as n,aI as o,t as r,g as i,Q as l,w as c,B as f}from"./calfSystem-e1e858cd.js"
import{c as m}from"./closestTable-08179790.js"
import{d as p}from"./dialog-25c9de65.js"
import"./closest-8e46d454.js"
import"./dialogMsg-f24b55b1.js"
function d(s){const e=c(s)
let a={r:1,m:e}
return"Item was transferred to the guild store!"===e&&(a={r:0,m:""}),a}function g(s,e){0===e.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:e}=s
if("IMG"===e.tagName){s.preventDefault()
const a=e.parentNode.href;(t=a,o(t).then(d).then(p)).then(r(g,e))}var t
"sendLink"===e.className&&i("img",a).forEach(l)}function u(){s()||(e(a,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-0fab911d.js.map
