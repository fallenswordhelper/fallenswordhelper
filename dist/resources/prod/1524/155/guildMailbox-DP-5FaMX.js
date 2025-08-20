import{d as a}from"./dialog-BW-ZNw6R.js"
import{a2 as s,o as t,p as e,a1 as n,q as o,s as r,a3 as i,bh as l,bk as c,d as f}from"./calfSystem-UyQ_FKFu.js"
import{c as m}from"./closestTable-DwwUFwTi.js"
import{i as p}from"./InfoBoxFrom-B2WmDuDa.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(s){const t=function(a){const s=p(a)
let t={r:1,m:s}
return"Item was transferred to the guild store!"===s&&(t={r:0,m:""}),t}(await c(s))
return a(t)}async function u(a){const{target:s}=a
if("IMG"===s.tagName){a.preventDefault(),r("guildMailbox","Take Item")
const t=s.parentNode.href
!function(a,s){0===s.r&&f('<span class="fshGreen">Taken</span>',m(a).nextElementSibling.rows[0].cells[0])}(s,await d(t))}"sendLink"===s.className&&i("img",e()).forEach(l)}function g(){s()||(t(e(),u),n(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{g as default}
//# sourceMappingURL=guildMailbox-DP-5FaMX.js.map
