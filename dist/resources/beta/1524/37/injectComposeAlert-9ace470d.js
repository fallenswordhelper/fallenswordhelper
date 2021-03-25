import{x as n,q as o,$ as a,aa as t,z as i,ar as s,c,j as f,I as p,at as m,av as u,a7 as e,_ as l}from"./calfSystem-cb2a6f39.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){t(i("notifications"),d)}function h(n){return n.time_remaining}function x(){g(),l(m,!0)}function _(n){n.potions.length!==n.max_potions?x():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(m,!1),l(u,e+1e3*o)):x()}(n.potions)}function b(n){n.s&&_(n.r)}function j(){const n=p(u)
n&&e<n||a(r).then(b)}function v(){"composing"!==c.cmd&&f()&&(p(m)?g():j())}export default v
//# sourceMappingURL=injectComposeAlert-9ace470d.js.map
