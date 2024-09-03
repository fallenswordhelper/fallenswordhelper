import{d as o}from"./daComposing-DxoiMtLk.js"
import{bW as n,ag as i,c0 as t,ai as a,bY as s,b_ as m,ae as c}from"./calfSystem-CgXU6vdM.js"
import{n as r}from"./now-Cx4PsKjI.js"
import{g as f}from"./genericNotification-xfz_ZSv8.js"
function p(){f("composing","Composing to do",n)}function e(o){return o.time_remaining}function u(){p(),c(s,!0)}function g(o){o.potions.length!==o.max_potions?u():function(o){const n=Math.min.apply(null,o.map(e))
n>0?(c(s,!1),c(m,r()+1e3*n)):u()}(o.potions)}async function l(){const n=a(m)
if(n&&r()<n)return
!function(o){o?.s&&g(o.r)}(await o())}function d(){"composing"!==i.cmd&&t()&&(a(s)?p():l())}export{d as default}
//# sourceMappingURL=injectComposeAlert-COGluCHp.js.map
