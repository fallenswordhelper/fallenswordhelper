import{d as s}from"./dialog-BW-ZNw6R.js"
import{w as a,o as t,p as e,v as n,q as o,s as r,x as i,aA as l,aR as c,d as f}from"./calfSystem-B3Rc3sVt.js"
import{c as m}from"./closestTable-B05V59ae.js"
import{i as p}from"./InfoBoxFrom-Bi2cK_3M.js"
import"./dialogMsg-rKdvzvMA.js"
async function d(a){const t=function(s){const a=p(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}(await c(a))
return s(t)}async function u(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault(),r("guildMailbox","Take Item")
const t=a.parentNode.href
!function(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}(a,await d(t))}"sendLink"===a.className&&i("img",e()).forEach(l)}function g(){a()||(t(e(),u),n(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{g as default}
//# sourceMappingURL=guildMailbox-ZS81q4kS.js.map
