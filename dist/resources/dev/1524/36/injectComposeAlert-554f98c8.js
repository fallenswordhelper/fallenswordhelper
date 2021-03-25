import{x as n,q as o,$ as a,ab as i,z as s,as as t,c,j as f,I as e,au as p,aw as u,a8 as m,a0 as l}from"./calfSystem-eeb1d862.js"
function r(){return n(o({cmd:"composing"},{subcmd:"view"}))}const d=`<li class="notification"><a href="${t}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function g(){i(s("notifications"),d)}function h(n){return n.time_remaining}function b(){g(),l(p,!0)}function x(n){n.potions.length!==n.max_potions?b():function(n){const o=Math.min.apply(null,n.map(h))
o>0?(l(p,!1),l(u,m+1e3*o)):b()}(n.potions)}function j(n){n.s&&x(n.r)}function w(){const n=e(u)
n&&m<n||a(r).then(j)}function y(){"composing"!==c.cmd&&f()&&(e(p)?g():w())}export default y
//# sourceMappingURL=injectComposeAlert-554f98c8.js.map
