import{c as n}from"./composing-5782750e.js"
import{$ as o,v as i,g as t,bT as s,ad as a,bZ as c,af as f,bV as m,bX as p,ab as r}from"./calfSystem-2f15e074.js"
import{n as u}from"./now-6f22aec9.js"
function e(){return n({subcmd:"view"})}const l=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function b(){i(t("notifications"),l)}function g(n){return n.time_remaining}function d(){b(),r(m,!0)}function h(n){n.potions.length!==n.max_potions?d():function(n){const o=Math.min.apply(null,n.map(g))
o>0?(r(m,!1),r(p,u()+1e3*o)):d()}(n.potions)}async function j(){const n=f(p)
if(n&&u()<n)return
!function(n){n?.s&&h(n.r)}(await o(e))}function w(){"composing"!==a.cmd&&c()&&(f(m)?b():j())}export{w as default}
//# sourceMappingURL=injectComposeAlert-1ff30a8a.js.map
