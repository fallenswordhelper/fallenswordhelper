import{d as a}from"./dialog-DuiKsz8O.js"
import{a3 as s,o as t,p as e,a2 as n,q as o,s as r,a4 as i,bj as m,bm as l,d as c}from"./calfSystem-CIuUjh4H.js"
import{c as f}from"./closestTable-CAaKFM8t.js"
import{i as p}from"./InfoBoxFrom-BOMuQUn_.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(s){const t=function(a){const s=p(a)
let t={r:1,m:s}
return"Item was transferred to the guild store!"===s&&(t={r:0,m:""}),t}(await l(s))
return a(t)}async function u(a){const{target:s}=a
if("IMG"===s.tagName){a.preventDefault(),r("guildMailbox","Take Item")
const t=s.parentNode.href
!function(a,s){0===s.r&&c('<span class="fshGreen">Taken</span>',f(a).nextElementSibling.rows[0].cells[0])}(s,await d(t))}"sendLink"===s.className&&i("img",e()).forEach(m)}function g(){s()||(t(e(),u),n(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{g as default}
//# sourceMappingURL=guildMailbox-C72iLgm3.js.map
