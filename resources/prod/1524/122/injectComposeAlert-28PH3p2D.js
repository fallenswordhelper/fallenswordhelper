import{d as o}from"./daComposing-CT8F7Xxy.js"
import{bY as n,ag as i,c2 as t,ai as a,b_ as s,c0 as c,ae as m}from"./calfSystem-C4gAE-9q.js"
import{n as r}from"./now-Cx4PsKjI.js"
import{g as f}from"./genericNotification-B9Jrxc3V.js"
function p(){f("composing","Composing to do",n)}function e(o){return o.time_remaining}function u(){p(),m(s,!0)}function g(o){o.potions.length!==o.max_potions?u():function(o){const n=Math.min.apply(null,o.map(e))
n>0?(m(s,!1),m(c,r()+1e3*n)):u()}(o.potions)}async function l(){const n=a(c)
if(n&&r()<n)return
!function(o){o?.s&&g(o.r)}(await o())}function d(){"composing"!==i.cmd&&t()&&(a(s)?p():l())}export{d as default}
//# sourceMappingURL=injectComposeAlert-28PH3p2D.js.map
