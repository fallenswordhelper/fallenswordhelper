import{d as a}from"./dialog-BW-ZNw6R.js"
import{w as s,e as t,s as e,aT as n,c as o,x as r,p as i,aP as c,v as l,q as m}from"./calfSystem-Blt4DbaE.js"
import{c as f}from"./closestTable-Ddgm5m0P.js"
import{i as p}from"./InfoBoxFrom-CMB3qrKm.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(s){const t=function(a){const s=p(a)
let t={r:1,m:s}
return"Item was transferred to the guild store!"===s&&(t={r:0,m:""}),t}(await n(s))
return a(t)}async function u(a){const{target:s}=a
if("IMG"===s.tagName){a.preventDefault(),e("guildMailbox","Take Item")
const t=s.parentNode.href
!function(a,s){0===s.r&&o('<span class="fshGreen">Taken</span>',f(a).nextElementSibling.rows[0].cells[0])}(s,await d(t))}"sendLink"===s.className&&r("img",i()).forEach(c)}function g(){s()||(t(i(),u),l(m('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{g as default}
//# sourceMappingURL=guildMailbox-wfYteCR5.js.map
