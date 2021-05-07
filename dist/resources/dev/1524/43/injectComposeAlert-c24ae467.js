import{x as n,q as o,$ as a,ab as i,z as t,aB as s,c,j as f,I as p,aD as e,aF as m,a8 as u,a0 as l}from"./calfSystem-3cb2f93e.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function h(n){return n.time_remaining}function b(){g(),l(e,!0)}function x(n){n.potions.length!==n.max_potions?b():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(e,!1),l(m,u+1e3*o)):b()}(n.potions)}function j(n){n.s&&x(n.r)}function y(){const n=p(m)
n&&u<n||a(r).then(j)}function $(){"composing"!==c.cmd&&f()&&(p(e)?g():y())}export default $
//# sourceMappingURL=injectComposeAlert-c24ae467.js.map
