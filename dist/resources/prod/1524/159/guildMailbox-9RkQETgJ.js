import{d as a}from"./dialog-BW-ZNw6R.js"
import{a4 as s,o as t,p as e,a3 as n,q as o,s as r,a5 as i,bl as l,bo as m,d as c}from"./calfSystem-CIdPz3EO.js"
import{c as f}from"./closestTable-CLMP9U5y.js"
import{i as p}from"./InfoBoxFrom-Dw2yPW9h.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(s){const t=function(a){const s=p(a)
let t={r:1,m:s}
return"Item was transferred to the guild store!"===s&&(t={r:0,m:""}),t}(await m(s))
return a(t)}async function u(a){const{target:s}=a
if("IMG"===s.tagName){a.preventDefault(),r("guildMailbox","Take Item")
const t=s.parentNode.href
!function(a,s){0===s.r&&c('<span class="fshGreen">Taken</span>',f(a).nextElementSibling.rows[0].cells[0])}(s,await d(t))}"sendLink"===s.className&&i("img",e()).forEach(l)}function g(){s()||(t(e(),u),n(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{g as default}
//# sourceMappingURL=guildMailbox-9RkQETgJ.js.map
