import{y as s,o as a,p as t,i as e,D as n,aH as o,t as r,g as i,S as l,w as c,B as f}from"./calfSystem-b31aba65.js"
import{c as m}from"./closestTable-756f74a0.js"
import{d as p}from"./dialog-181309bb.js"
import"./closest-97a04dcf.js"
import"./dialogMsg-a960ad1e.js"
function d(s){const a=c(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,o(e).then(d).then(p)).then(r(g,a))}var e
"sendLink"===a.className&&i("img",t).forEach(l)}function u(){s()||(a(t,h),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-65a9db8c.js.map
