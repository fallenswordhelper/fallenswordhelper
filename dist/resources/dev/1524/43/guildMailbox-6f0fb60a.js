import{y as s,o as a,p as e,i as t,D as n,aI as o,t as r,g as c,S as i,w as l,B as f}from"./calfSystem-3cb2f93e.js"
import{c as m}from"./closestTable-388bd2b6.js"
import{d as p}from"./dialog-de7a7b58.js"
import"./closest-bc1fafe7.js"
import"./dialogMsg-3c26aecb.js"
function d(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&c("img",e).forEach(i)}function b(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default b
//# sourceMappingURL=guildMailbox-6f0fb60a.js.map