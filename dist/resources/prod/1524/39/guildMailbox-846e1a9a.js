import{y as s,o as a,p as e,i as t,D as n,aE as o,t as r,g as i,R as l,w as f,B as c}from"./calfSystem-fe534823.js"
import{c as m}from"./closestTable-eb22f597.js"
import{d as p}from"./dialog-181309bb.js"
import"./closest-97a04dcf.js"
import"./dialogMsg-a960ad1e.js"
function d(s){const a=f(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(l)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-846e1a9a.js.map
