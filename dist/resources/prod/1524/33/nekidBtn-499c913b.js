import{c as t}from"./createButton-f8b3783c.js"
import{bm as e,y as n,m as o,h as s,o as i,V as r,g as a,t as c,A as f}from"./calfSystem-0708a9bb.js"
import{i as l}from"./insertTextBeforeEnd-17732318.js"
function m(t){return function(t){return e({subcmd:"unequipitem",inventory_id:t})}(t)}let u
function d(t,e){e.s&&f("",t.parentNode)}function p(t){const e=/inventory_id=(\d+)/.exec(t.href)[1]
e&&m(e).then(c(d,t))}function h(){r("profile","nekidBtn")
const t=u.nextElementSibling
a("a",t).forEach(p)}function b(){const e=n("profileRightColumn")
u=n("profileCombatSetDiv")
const r=u.parentNode.nextElementSibling,a=function(){const e=o({className:"fshCenter"}),n=t({className:"fshBl fshBls",textContent:"Nekid"})
return l(e,"[ "),s(e,n),l(e," ]"),i(n,h),e}()
e.replaceChild(a,r)}export default b
//# sourceMappingURL=nekidBtn-499c913b.js.map
