import{y as s,o as a,p as e,i as t,D as n,aA as o,t as r,g as i,S as l,w as c,B as f}from"./calfSystem-eeb1d862.js"
import{c as m}from"./closestTable-7d554f21.js"
import{d as p}from"./dialog-92c3ed6b.js"
import"./closest-7968af48.js"
import"./dialogMsg-716cf657.js"
function d(s){const a=c(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(l)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-297c1a06.js.map
