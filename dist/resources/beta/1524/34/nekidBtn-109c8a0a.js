import{c as e}from"./createButton-1c897a50.js"
import{bo as t,y as n,m as o,h as s,o as i,V as a,g as r,t as c,A as f}from"./calfSystem-dfa26790.js"
import{i as l}from"./insertTextBeforeEnd-e745e28a.js"
function m(e){return function(e){return t({subcmd:"unequipitem",inventory_id:e})}(e)}let u
function d(e,t){t.s&&f("",e.parentNode)}function p(e){const t=/inventory_id=(\d+)/.exec(e.href)[1]
t&&m(t).then(c(d,e))}function h(){a("profile","nekidBtn")
const e=u.nextElementSibling
r("a",e).forEach(p)}function x(){const t=n("profileRightColumn")
u=n("profileCombatSetDiv")
const a=u.parentNode.nextElementSibling,r=function(){const t=o({className:"fshCenter"}),n=e({className:"fshBl fshBls",textContent:"Nekid"})
return l(t,"[ "),s(t,n),l(t," ]"),i(n,h),t}()
t.replaceChild(r,a)}export default x
//# sourceMappingURL=nekidBtn-109c8a0a.js.map
