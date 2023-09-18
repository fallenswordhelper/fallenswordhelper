import{c as n}from"./composing-10da0d22.js"
import{$ as o,v as i,g as t,bR as a,ac as s,bX as c,ae as f,bT as m,bV as p,aa as r}from"./calfSystem-929ac228.js"
import{n as u}from"./now-6f22aec9.js"
function e(){return n({subcmd:"view"})}const l=`<li class="notification"><a href="${a}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),l)}function b(n){return n.time_remaining}function d(){g(),r(m,!0)}function h(n){n.potions.length!==n.max_potions?d():function(n){const o=Math.min.apply(null,n.map(b))
o>0?(r(m,!1),r(p,u()+1e3*o)):d()}(n.potions)}async function j(){const n=f(p)
if(n&&u()<n)return
!function(n){n?.s&&h(n.r)}(await o(e))}function w(){"composing"!==s.cmd&&c()&&(f(m)?g():j())}export{w as default}
//# sourceMappingURL=injectComposeAlert-6b8fc4c0.js.map
