import{w as n,q as o,a8 as t,y as a,ap as i,c as s,j as c,H as f,ar as p,at as m,a5 as u,Z as e}from"./calfSystem-dfa26790.js"
function l(){return n(o({cmd:"composing"},{subcmd:"view"}))}const r=`<li class="notification"><a href="${i}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function d(){t(a("notifications"),r)}function g(n){return n.time_remaining}function h(){d(),e(p,!0)}function y(n){n.potions.length!==n.max_potions?h():function(n){const o=Math.min.apply(null,n.map(g))
o>0?(e(p,!1),e(m,u+1e3*o)):h()}(n.potions)}function j(n){n.s&&y(n.r)}function w(){const n=f(m)
n&&u<n||l().then(j)}function x(){"composing"!==s.cmd&&c()&&(f(p)?d():w())}export default x
//# sourceMappingURL=injectComposeAlert-2e4c3e3c.js.map
