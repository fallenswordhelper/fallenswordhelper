import{x as n,q as o,$ as a,aa as i,z as t,aE as s,c,j as f,I as p,aG as e,aI as m,a7 as u,_ as l}from"./calfSystem-6a3c85e0.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function h(n){return n.time_remaining}function x(){g(),l(e,!0)}function _(n){n.potions.length!==n.max_potions?x():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(e,!1),l(m,u+1e3*o)):x()}(n.potions)}function j(n){n.s&&_(n.r)}function y(){const n=p(m)
n&&u<n||a(r).then(j)}function I(){"composing"!==c.cmd&&f()&&(p(e)?g():y())}export default I
//# sourceMappingURL=injectComposeAlert-235d2a02.js.map
