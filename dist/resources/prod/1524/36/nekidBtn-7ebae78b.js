import{c as e}from"./createButton-d50eac25.js"
import{u as n,w as t,bn as s,$ as o,z as i,m as r,h as a,o as c,W as f,g as u,t as m,B as l}from"./calfSystem-e7bde0c3.js"
import{i as d}from"./insertTextBeforeEnd-bac0ef33.js"
function p(e){const n=t(e)
return n?{e:{message:n},s:!1}:{s:!0}}function h(e){return n({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(p)}function b(e){return s({subcmd:"unequipitem",inventory_id:e})}let x
function B(e,n){n.s&&l("",e.parentNode)}function g(e){const n=/inventory_id=(\d+)/.exec(e.href)[1]
n&&function(e){return o(b,h,e)}(n).then(m(B,e))}function C(){f("profile","nekidBtn")
const e=x.nextElementSibling
u("a",e).forEach(g)}function N(){const n=i("profileRightColumn")
x=i("profileCombatSetDiv")
const t=x.parentNode.nextElementSibling,s=function(){const n=r({className:"fshCenter"}),t=e({className:"fshBl fshBls",textContent:"Nekid"})
return d(n,"[ "),a(n,t),d(n," ]"),c(t,C),n}()
n.replaceChild(s,t)}export default N
//# sourceMappingURL=nekidBtn-7ebae78b.js.map
