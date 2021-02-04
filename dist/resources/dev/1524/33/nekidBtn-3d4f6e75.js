import{c as e}from"./createButton-6599017c.js"
import{bp as t,y as n,m as o,h as s,o as i,W as r,g as a,t as c,A as f}from"./calfSystem-37f70deb.js"
import{i as l}from"./insertTextBeforeEnd-6d828e17.js"
function m(e){return function(e){return t({subcmd:"unequipitem",inventory_id:e})}(e)}let u
function d(e,t){t.s&&f("",e.parentNode)}function p(e){const t=/inventory_id=(\d+)/.exec(e.href)[1]
t&&m(t).then(c(d,e))}function h(){r("profile","nekidBtn")
const e=u.nextElementSibling
a("a",e).forEach(p)}function b(){const t=n("profileRightColumn")
u=n("profileCombatSetDiv")
const r=u.parentNode.nextElementSibling,a=function(){const t=o({className:"fshCenter"}),n=e({className:"fshBl fshBls",textContent:"Nekid"})
return l(t,"[ "),s(t,n),l(t," ]"),i(n,h),t}()
t.replaceChild(a,r)}export default b
//# sourceMappingURL=nekidBtn-3d4f6e75.js.map
