import{w as n,q as o,a9 as i,y as t,aq as a,c as s,j as c,H as f,as as p,au as u,a6 as e,_ as m}from"./calfSystem-37f70deb.js"
function l(){return n(o({cmd:"composing"},{subcmd:"view"}))}const r=`<li class="notification"><a href="${a}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function d(){i(t("notifications"),r)}function g(n){return n.time_remaining}function h(){d(),m(p,!0)}function y(n){n.potions.length!==n.max_potions?h():function(n){const o=Math.min.apply(null,n.map(g))
o>0?(m(p,!1),m(u,e+1e3*o)):h()}(n.potions)}function _(n){n.s&&y(n.r)}function b(){const n=f(u)
n&&e<n||l().then(_)}function j(){"composing"!==s.cmd&&c()&&(f(p)?d():b())}export default j
//# sourceMappingURL=injectComposeAlert-5519f766.js.map
