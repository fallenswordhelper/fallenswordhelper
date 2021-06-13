import{x as n,q as o,$ as a,a9 as i,z as t,aD as s,c,j as f,I as e,aF as p,aH as m,a6 as u,Z as l}from"./calfSystem-ae2e69af.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function h(n){return n.time_remaining}function x(){g(),l(p,!0)}function j(n){n.potions.length!==n.max_potions?x():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(p,!1),l(m,u+1e3*o)):x()}(n.potions)}function y(n){n.s&&j(n.r)}function $(){const n=e(m)
n&&u<n||a(r).then(y)}function _(){"composing"!==c.cmd&&f()&&(e(p)?g():$())}export default _
//# sourceMappingURL=injectComposeAlert-57f356e8.js.map
