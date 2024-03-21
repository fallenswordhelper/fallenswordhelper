import{d as o}from"./daComposing-DptyRavs.js"
import{bX as n,ag as i,c1 as t,ai as a,bZ as s,b$ as m,ae as c}from"./calfSystem-Bit7wh4p.js"
import{n as f}from"./now-Cx4PsKjI.js"
import{g as r}from"./genericNotification-BtGQjflp.js"
function p(){r("composing","Composing to do",n)}function e(o){return o.time_remaining}function u(){p(),c(s,!0)}function g(o){o.potions.length!==o.max_potions?u():function(o){const n=Math.min.apply(null,o.map(e))
n>0?(c(s,!1),c(m,f()+1e3*n)):u()}(o.potions)}async function l(){const n=a(m)
if(n&&f()<n)return
!function(o){o?.s&&g(o.r)}(await o())}function d(){"composing"!==i.cmd&&t()&&(a(s)?p():l())}export{d as default}
//# sourceMappingURL=injectComposeAlert-CGYkMSsL.js.map
