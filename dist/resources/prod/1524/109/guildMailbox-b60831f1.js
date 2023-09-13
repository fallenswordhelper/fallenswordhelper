import{d as s}from"./dialog-d1c54012.js"
import{w as a,o as t,p as n,v as e,q as o,x as r,ax as i,aN as c,s as f}from"./calfSystem-2f15e074.js"
import{c as l}from"./closestTable-23acbcda.js"
import{i as m}from"./InfoBoxFrom-20286709.js"
import"./dialogMsg-7c5fba89.js"
async function p(a){const t=function(s){const a=m(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}(await c(a))
return s(t)}async function d(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href
!function(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',l(s).nextElementSibling.rows[0].cells[0])}(a,await p(t))}"sendLink"===a.className&&r("img",n()).forEach(i)}function u(){a()||(t(n(),d),e(o('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export{u as default}
//# sourceMappingURL=guildMailbox-b60831f1.js.map
