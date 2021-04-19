import{y as s,o as a,p as e,i as t,D as n,aG as o,t as r,g as i,R as l,w as c,B as f}from"./calfSystem-26fbeaeb.js"
import{c as m}from"./closestTable-0d8adda0.js"
import{d}from"./dialog-181309bb.js"
import"./closest-97a04dcf.js"
import"./dialogMsg-a960ad1e.js"
function p(s){const a=c(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(p).then(d)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(l)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-29d51adf.js.map
