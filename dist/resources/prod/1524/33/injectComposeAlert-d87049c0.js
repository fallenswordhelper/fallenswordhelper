import{w as n,q as o,a8 as a,y as i,an as t,c as s,j as c,H as f,ap as p,ar as m,a5 as u,Z as e}from"./calfSystem-0708a9bb.js"
function l(){return n(o({cmd:"composing"},{subcmd:"view"}))}const r=`<li class="notification"><a href="${t}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function d(){a(i("notifications"),r)}function g(n){return n.time_remaining}function h(){d(),e(p,!0)}function b(n){n.potions.length!==n.max_potions?h():function(n){const o=Math.min.apply(null,n.map(g))
o>0?(e(p,!1),e(m,u+1e3*o)):h()}(n.potions)}function y(n){n.s&&b(n.r)}function j(){const n=f(m)
n&&u<n||l().then(y)}function w(){"composing"!==s.cmd&&c()&&(f(p)?d():j())}export default w
//# sourceMappingURL=injectComposeAlert-d87049c0.js.map
