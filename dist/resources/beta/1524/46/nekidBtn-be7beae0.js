import{c as e}from"./createButton-f5865f3f.js"
import{u as n,w as t,bt as s,$ as i,z as o,m as r,h as a,o as f,S as c,g as u,t as m,B as d}from"./calfSystem-cbf77dd7.js"
import{i as l}from"./insertTextBeforeEnd-2a7d91d5.js"
function p(e){const n=t(e)
return n?{e:{message:n},s:!1}:{s:!0}}function h(e){return n({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(p)}function b(e){return s({subcmd:"unequipitem",inventory_id:e})}let x
function B(e,n){n&&n.s&&d("",e.parentNode)}function g(e){const n=/inventory_id=(\d+)/.exec(e.href)[1]
n&&function(e){return i(b,h,e)}(n).then(m(B,e))}function C(){c("profile","nekidBtn")
const e=x.nextElementSibling
u("a",e).forEach(g)}function N(){if(x=o("profileCombatSetDiv"),!x)return
const n=x.parentNode.nextElementSibling,t=function(){const n=r({className:"fshCenter"}),t=e({className:"fshBl fshBls",textContent:"Nekid"})
return l(n,"[ "),a(n,t),l(n," ]"),f(t,C),n}()
o("profileRightColumn").replaceChild(t,n)}export default N
//# sourceMappingURL=nekidBtn-be7beae0.js.map
