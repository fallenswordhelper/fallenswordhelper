import{y as s,o as a,p as t,i as e,D as n,aI as o,t as r,g as i,Q as c,w as l,B as f}from"./calfSystem-7991d843.js"
import{c as m}from"./closestTable-6d990d22.js"
import{d}from"./dialog-16fed349.js"
import"./closest-d38ca7fc.js"
import"./dialogMsg-16959bc2.js"
function p(s){const a=l(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,o(e).then(p).then(d)).then(r(g,a))}var e
"sendLink"===a.className&&i("img",t).forEach(c)}function u(){s()||(a(t,h),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-e3ea6544.js.map
