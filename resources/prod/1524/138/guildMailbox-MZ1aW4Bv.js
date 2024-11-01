import{d as a}from"./dialog-BW-ZNw6R.js"
import{w as s,o as t,p as e,v as n,q as o,s as r,x as i,aO as l,aT as c,d as m}from"./calfSystem-BjarbvkO.js"
import{c as f}from"./closestTable-QYAgm0UB.js"
import{i as p}from"./InfoBoxFrom-Dj1eKQoZ.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(s){const t=function(a){const s=p(a)
let t={r:1,m:s}
return"Item was transferred to the guild store!"===s&&(t={r:0,m:""}),t}(await c(s))
return a(t)}async function u(a){const{target:s}=a
if("IMG"===s.tagName){a.preventDefault(),r("guildMailbox","Take Item")
const t=s.parentNode.href
!function(a,s){0===s.r&&m('<span class="fshGreen">Taken</span>',f(a).nextElementSibling.rows[0].cells[0])}(s,await d(t))}"sendLink"===s.className&&i("img",e()).forEach(l)}function g(){s()||(t(e(),u),n(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{g as default}
//# sourceMappingURL=guildMailbox-MZ1aW4Bv.js.map
