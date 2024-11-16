import{d as n}from"./daComposing-DDTbgGhZ.js"
import{c0 as o,ag as t,c6 as i,ai as s,c2 as a,c5 as c,ap as f,ad as m}from"./calfSystem-Blt4DbaE.js"
import{g as p}from"./genericNotification-Bo-vlgzF.js"
function r(){p("composing","Composing to do",o)}function u(n){return n.time_remaining}function e(){r(),m(a,!0)}const g=52
function d(n){const o=n.h.p.find((({k:n})=>n===g))?.v
n.r.potions.length!==o?e():function(n){const o=Math.min.apply(null,n.map(u))
o>0?(m(a,!1),m(c,f()+1e3*o)):e()}(n.r.potions)}function l(){s(a)?r():async function(){const o=s(c)
if(o&&f()<o)return
const t=await n()
t?.s&&d(t)}()}function h(){"composing"!==t.cmd&&i()&&l()}export{h as default}
//# sourceMappingURL=injectComposeAlert-DPdFtqlw.js.map
