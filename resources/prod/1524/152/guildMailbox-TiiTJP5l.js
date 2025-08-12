import{d as a}from"./dialog-BW-ZNw6R.js"
import{a4 as s,o as t,p as e,a3 as n,q as o,s as r,a5 as i,bg as l,bj as c,e as m}from"./calfSystem-BlPuMQGT.js"
import{c as f}from"./closestTable-gY6pXvyq.js"
import{i as p}from"./InfoBoxFrom-BDWFjNv_.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(s){const t=function(a){const s=p(a)
let t={r:1,m:s}
return"Item was transferred to the guild store!"===s&&(t={r:0,m:""}),t}(await c(s))
return a(t)}async function g(a){const{target:s}=a
if("IMG"===s.tagName){a.preventDefault(),r("guildMailbox","Take Item")
const t=s.parentNode.href
!function(a,s){0===s.r&&m('<span class="fshGreen">Taken</span>',f(a).nextElementSibling.rows[0].cells[0])}(s,await d(t))}"sendLink"===s.className&&i("img",e()).forEach(l)}function u(){s()||(t(e(),g),n(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{u as default}
//# sourceMappingURL=guildMailbox-TiiTJP5l.js.map
