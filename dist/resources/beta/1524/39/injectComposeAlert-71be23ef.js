import{x as n,q as o,$ as a,aa as i,z as t,az as s,c,j as f,I as e,aB as p,aD as m,a7 as u,_ as l}from"./calfSystem-26fbeaeb.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function h(n){return n.time_remaining}function b(){g(),l(p,!0)}function x(n){n.potions.length!==n.max_potions?b():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(p,!1),l(m,u+1e3*o)):b()}(n.potions)}function _(n){n.s&&x(n.r)}function j(){const n=e(m)
n&&u<n||a(r).then(_)}function y(){"composing"!==c.cmd&&f()&&(e(p)?g():j())}export default y
//# sourceMappingURL=injectComposeAlert-71be23ef.js.map
