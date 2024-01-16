import{d as o}from"./daComposing-LNl3biG-.js"
import{bX as n,ag as i,c1 as t,ai as s,bZ as a,b$ as m,ae as c}from"./calfSystem-G1dN925O.js"
import{n as f}from"./now-pQzGw6vd.js"
import{g as p}from"./genericNotification-CatkzHs-.js"
function r(){p("composing","Composing to do",n)}function e(o){return o.time_remaining}function u(){r(),c(a,!0)}function g(o){o.potions.length!==o.max_potions?u():function(o){const n=Math.min.apply(null,o.map(e))
n>0?(c(a,!1),c(m,f()+1e3*n)):u()}(o.potions)}async function l(){const n=s(m)
if(n&&f()<n)return
!function(o){o?.s&&g(o.r)}(await o())}function d(){"composing"!==i.cmd&&t()&&(s(a)?r():l())}export{d as default}
//# sourceMappingURL=injectComposeAlert-0M-hTlbQ.js.map
