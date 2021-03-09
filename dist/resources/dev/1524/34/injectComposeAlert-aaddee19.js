import{w as n,q as o,a9 as i,y as t,aq as a,c as s,j as c,H as f,as as p,au as u,a6 as e,_ as m}from"./calfSystem-c07e3259.js"
function l(){return n(o({cmd:"composing"},{subcmd:"view"}))}const r=`<li class="notification"><a href="${a}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function d(){i(t("notifications"),r)}function g(n){return n.time_remaining}function h(){d(),m(p,!0)}function y(n){n.potions.length!==n.max_potions?h():function(n){const o=Math.min.apply(null,n.map(g))
o>0?(m(p,!1),m(u,e+1e3*o)):h()}(n.potions)}function _(n){n.s&&y(n.r)}function j(){const n=f(u)
n&&e<n||l().then(_)}function q(){"composing"!==s.cmd&&c()&&(f(p)?d():j())}export default q
//# sourceMappingURL=injectComposeAlert-aaddee19.js.map
