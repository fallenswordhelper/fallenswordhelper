import{d as a}from"./dialog-CiSCF2So.js"
import{a2 as s,o as t,p as e,a1 as n,q as o,s as r,a3 as i,bh as c,bk as l,d as m}from"./calfSystem-CT1aM4VG.js"
import{c as f}from"./closestTable-C24mp168.js"
import{i as p}from"./InfoBoxFrom-Cozeh7z2.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(s){const t=function(a){const s=p(a)
let t={r:1,m:s}
return"Item was transferred to the guild store!"===s&&(t={r:0,m:""}),t}(await l(s))
return a(t)}async function u(a){const{target:s}=a
if("IMG"===s.tagName){a.preventDefault(),r("guildMailbox","Take Item")
const t=s.parentNode.href
!function(a,s){0===s.r&&m('<span class="fshGreen">Taken</span>',f(a).nextElementSibling.rows[0].cells[0])}(s,await d(t))}"sendLink"===s.className&&i("img",e()).forEach(c)}function g(){s()||(t(e(),u),n(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{g as default}
//# sourceMappingURL=guildMailbox-pzSPGGQQ.js.map
