import{c as t}from"./createButton-6735d85a.js"
import{bm as e,y as n,m as o,h as s,o as i,V as r,g as a,t as f,A as c}from"./calfSystem-793da633.js"
import{i as l}from"./insertTextBeforeEnd-62f9f72f.js"
function m(t){return function(t){return e({subcmd:"unequipitem",inventory_id:t})}(t)}let u
function d(t,e){e.s&&c("",t.parentNode)}function p(t){const e=/inventory_id=(\d+)/.exec(t.href)[1]
e&&m(e).then(f(d,t))}function h(){r("profile","nekidBtn")
const t=u.nextElementSibling
a("a",t).forEach(p)}function x(){const e=n("profileRightColumn")
u=n("profileCombatSetDiv")
const r=u.parentNode.nextElementSibling,a=function(){const e=o({className:"fshCenter"}),n=t({className:"fshBl fshBls",textContent:"Nekid"})
return l(e,"[ "),s(e,n),l(e," ]"),i(n,h),e}()
e.replaceChild(a,r)}export default x
//# sourceMappingURL=nekidBtn-28fba04e.js.map
