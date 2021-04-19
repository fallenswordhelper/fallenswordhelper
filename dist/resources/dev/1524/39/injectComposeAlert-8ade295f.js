import{x as n,q as a,$ as o,ab as i,z as t,aA as s,c,j as f,I as p,aC as m,aE as u,a8 as e,a0 as l}from"./calfSystem-b31aba65.js"
function r(){return n(a({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(t("notifications"),d)}function b(n){return n.time_remaining}function h(){g(),l(m,!0)}function x(n){n.potions.length!==n.max_potions?h():function(n){const a=Math.min.apply(null,n.map(b))
a>0?(l(m,!1),l(u,e+1e3*a)):h()}(n.potions)}function j(n){n.s&&x(n.r)}function y(){const n=p(u)
n&&e<n||o(r).then(j)}function C(){"composing"!==c.cmd&&f()&&(p(m)?g():y())}export default C
//# sourceMappingURL=injectComposeAlert-8ade295f.js.map
