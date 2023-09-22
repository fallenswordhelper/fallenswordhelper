import{c as n}from"./composing-83374a17.js"
import{$ as o,v as i,g as t,bQ as s,ab as a,bW as c,ad as f,bS as m,bU as p,a9 as r}from"./calfSystem-4830a18d.js"
import{n as u}from"./now-6f22aec9.js"
function e(){return n({subcmd:"view"})}const l=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function b(){i(t("notifications"),l)}function d(n){return n.time_remaining}function g(){b(),r(m,!0)}function h(n){n.potions.length!==n.max_potions?g():function(n){const o=Math.min.apply(null,n.map(d))
o>0?(r(m,!1),r(p,u()+1e3*o)):g()}(n.potions)}async function j(){const n=f(p)
if(n&&u()<n)return
!function(n){n?.s&&h(n.r)}(await o(e))}function w(){"composing"!==a.cmd&&c()&&(f(m)?b():j())}export{w as default}
//# sourceMappingURL=injectComposeAlert-b88076b2.js.map
