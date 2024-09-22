import{d as n}from"./daComposing-DoUuvhi0.js"
import{c0 as o,ag as t,c6 as i,ai as s,c2 as a,c4 as c,ap as f,ae as m}from"./calfSystem-B-q5dZfX.js"
import{g as p}from"./genericNotification-Cqs7Aqf6.js"
function r(){p("composing","Composing to do",o)}function e(n){return n.time_remaining}function u(){r(),m(a,!0)}const g=52
function d(n){const o=n.h.p.find((({k:n})=>n===g))?.v
n.r.potions.length!==o?u():function(n){const o=Math.min.apply(null,n.map(e))
o>0?(m(a,!1),m(c,f()+1e3*o)):u()}(n.r.potions)}function l(){s(a)?r():async function(){const o=s(c)
if(o&&f()<o)return
const t=await n()
t?.s&&d(t)}()}function h(){"composing"!==t.cmd&&i()&&l()}export{h as default}
//# sourceMappingURL=injectComposeAlert-D8fPfj4t.js.map
