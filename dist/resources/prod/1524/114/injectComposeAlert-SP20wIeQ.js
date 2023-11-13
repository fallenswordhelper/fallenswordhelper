import{c as n}from"./composing-3BM9qPnF.js"
import{$ as o,bP as t,ab as i,bV as s,ad as a,bR as c,bT as m,a9 as f}from"./calfSystem-rn9Rc_nF.js"
import{n as r}from"./now-pQzGw6vd.js"
import{g as p}from"./genericNotification-VzRzK2Ja.js"
function u(){return n({subcmd:"view"})}function e(){p("composing","Composing to do",t)}function g(n){return n.time_remaining}function b(){e(),f(c,!0)}function l(n){n.potions.length!==n.max_potions?b():function(n){const o=Math.min.apply(null,n.map(g))
o>0?(f(c,!1),f(m,r()+1e3*o)):b()}(n.potions)}async function d(){const n=a(m)
if(n&&r()<n)return
!function(n){n?.s&&l(n.r)}(await o(u))}function j(){"composing"!==i.cmd&&s()&&(a(c)?e():d())}export{j as default}
//# sourceMappingURL=injectComposeAlert-SP20wIeQ.js.map
