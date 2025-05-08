import{d as s}from"./dialog-RW6TE77j.js"
import{w as a,o as t,p as e,v as n,q as o,s as r,x as i,aA as l,aR as c,d as f}from"./calfSystem-G1dN925O.js"
import{c as m}from"./closestTable-Ggcgditt.js"
import{i as p}from"./InfoBoxFrom-T4bMs0ax.js"
import"./dialogMsg-6-T2JNn4.js"
async function d(a){const t=function(s){const a=p(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}(await c(a))
return s(t)}async function u(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault(),r("guildMailbox","Take Item")
const t=a.parentNode.href
!function(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}(a,await d(t))}"sendLink"===a.className&&i("img",e()).forEach(l)}function g(){a()||(t(e(),u),n(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{g as default}
//# sourceMappingURL=guildMailbox-gCv_WL45.js.map
