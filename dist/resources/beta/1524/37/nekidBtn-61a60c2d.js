import{c as e}from"./createButton-4b3a5adb.js"
import{u as n,w as t,bp as s,$ as o,z as i,m as a,h as r,o as c,W as f,g as u,t as m,B as l}from"./calfSystem-cb2a6f39.js"
import{i as d}from"./insertTextBeforeEnd-3a0bea41.js"
function p(e){const n=t(e)
return n?{e:{message:n},s:!1}:{s:!0}}function b(e){return n({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(p)}function h(e){return s({subcmd:"unequipitem",inventory_id:e})}let x
function B(e,n){n.s&&l("",e.parentNode)}function g(e){const n=/inventory_id=(\d+)/.exec(e.href)[1]
n&&function(e){return o(h,b,e)}(n).then(m(B,e))}function C(){f("profile","nekidBtn")
const e=x.nextElementSibling
u("a",e).forEach(g)}function N(){const n=i("profileRightColumn")
x=i("profileCombatSetDiv")
const t=x.parentNode.nextElementSibling,s=function(){const n=a({className:"fshCenter"}),t=e({className:"fshBl fshBls",textContent:"Nekid"})
return d(n,"[ "),r(n,t),d(n," ]"),c(t,C),n}()
n.replaceChild(s,t)}export default N
//# sourceMappingURL=nekidBtn-61a60c2d.js.map
