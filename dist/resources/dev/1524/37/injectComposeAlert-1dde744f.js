import{x as n,q as o,$ as a,ab as i,z as s,as as t,c,j as f,I as p,au as u,aw as m,a8 as e,a0 as l}from"./calfSystem-5d0c721b.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${t}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(s("notifications"),d)}function h(n){return n.time_remaining}function b(){g(),l(u,!0)}function x(n){n.potions.length!==n.max_potions?b():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(u,!1),l(m,e+1e3*o)):b()}(n.potions)}function j(n){n.s&&x(n.r)}function w(){const n=p(m)
n&&e<n||a(r).then(j)}function y(){"composing"!==c.cmd&&f()&&(p(u)?g():w())}export default y
//# sourceMappingURL=injectComposeAlert-1dde744f.js.map
