import{y as s,o as a,p as e,i as t,D as n,aM as o,t as r,g as i,Q as l,w as c,B as f}from"./calfSystem-db2edbef.js"
import{c as m}from"./closestTable-4592ae11.js"
import{d}from"./dialog-a4dfa31d.js"
import"./closest-4542e515.js"
import"./dialogMsg-edbc265b.js"
function p(s){const a=c(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(p).then(d)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(l)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-e9db3dff.js.map
