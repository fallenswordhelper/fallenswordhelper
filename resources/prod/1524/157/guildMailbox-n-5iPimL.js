import{d as a}from"./dialog-BW-ZNw6R.js"
import{a3 as s,o as t,p as n,a2 as e,q as o,s as r,a4 as i,bk as l,bn as m,d as c}from"./calfSystem-CQOGdqPv.js"
import{c as f}from"./closestTable-Cs7gyt8-.js"
import{i as p}from"./InfoBoxFrom-GavcHhIs.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(s){const t=function(a){const s=p(a)
let t={r:1,m:s}
return"Item was transferred to the guild store!"===s&&(t={r:0,m:""}),t}(await m(s))
return a(t)}async function g(a){const{target:s}=a
if("IMG"===s.tagName){a.preventDefault(),r("guildMailbox","Take Item")
const t=s.parentNode.href
!function(a,s){0===s.r&&c('<span class="fshGreen">Taken</span>',f(a).nextElementSibling.rows[0].cells[0])}(s,await d(t))}"sendLink"===s.className&&i("img",n()).forEach(l)}function u(){s()||(t(n(),g),e(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{u as default}
//# sourceMappingURL=guildMailbox-n-5iPimL.js.map
