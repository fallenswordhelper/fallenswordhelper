import{y as s,o as a,p as e,i as t,D as n,aK as o,t as r,g as c,Q as i,w as l,B as f}from"./calfSystem-cbf77dd7.js"
import{c as m}from"./closestTable-ea26a9a2.js"
import{d}from"./dialog-16fed349.js"
import"./closest-d38ca7fc.js"
import"./dialogMsg-16959bc2.js"
function p(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(p).then(d)).then(r(g,a))}var t
"sendLink"===a.className&&c("img",e).forEach(i)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-d309472c.js.map
