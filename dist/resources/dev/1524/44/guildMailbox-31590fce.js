import{y as s,o as a,p as e,i as t,D as n,aK as o,t as r,g as i,R as c,w as f,B as l}from"./calfSystem-f7cf24f6.js"
import{c as m}from"./closestTable-170bdad1.js"
import{d as p}from"./dialog-e5c57349.js"
import"./closest-7cf61e52.js"
import"./dialogMsg-227939ed.js"
function d(s){const a=f(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&l('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(c)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-31590fce.js.map
