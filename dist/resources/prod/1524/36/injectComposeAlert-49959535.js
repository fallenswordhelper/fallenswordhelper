import{x as n,q as o,$ as a,aa as t,z as i,ap as s,c,j as f,I as p,ar as e,at as m,a7 as u,_ as l}from"./calfSystem-e7bde0c3.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){t(i("notifications"),d)}function h(n){return n.time_remaining}function x(){g(),l(e,!0)}function _(n){n.potions.length!==n.max_potions?x():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(e,!1),l(m,u+1e3*o)):x()}(n.potions)}function b(n){n.s&&_(n.r)}function j(){const n=p(m)
n&&u<n||a(r).then(b)}function y(){"composing"!==c.cmd&&f()&&(p(e)?g():j())}export default y
//# sourceMappingURL=injectComposeAlert-49959535.js.map
