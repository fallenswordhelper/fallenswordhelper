import{d as s}from"./dialog-BW-ZNw6R.js"
import{x as a,o as t,p as n,w as e,q as o,s as r,y as i,b4 as l,b9 as c,d as m}from"./calfSystem-ChzN4Q-P.js"
import{c as f}from"./closestTable-DvVVJKGM.js"
import{i as p}from"./InfoBoxFrom-C34rFa80.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(a){const t=function(s){const a=p(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}(await c(a))
return s(t)}async function u(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault(),r("guildMailbox","Take Item")
const t=a.parentNode.href
!function(s,a){0===a.r&&m('<span class="fshGreen">Taken</span>',f(s).nextElementSibling.rows[0].cells[0])}(a,await d(t))}"sendLink"===a.className&&i("img",n()).forEach(l)}function g(){a()||(t(n(),u),e(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{g as default}
//# sourceMappingURL=guildMailbox-CKa586kB.js.map
