import{c as t}from"./createButton-94444a78.js"
import{bo as e,y as n,m as o,h as s,o as i,V as a,g as r,t as c,A as f}from"./calfSystem-c91a5c89.js"
import{i as l}from"./insertTextBeforeEnd-288f37a9.js"
function m(t){return function(t){return e({subcmd:"unequipitem",inventory_id:t})}(t)}let u
function d(t,e){e.s&&f("",t.parentNode)}function p(t){const e=/inventory_id=(\d+)/.exec(t.href)[1]
e&&m(e).then(c(d,t))}function h(){a("profile","nekidBtn")
const t=u.nextElementSibling
r("a",t).forEach(p)}function x(){const e=n("profileRightColumn")
u=n("profileCombatSetDiv")
const a=u.parentNode.nextElementSibling,r=function(){const e=o({className:"fshCenter"}),n=t({className:"fshBl fshBls",textContent:"Nekid"})
return l(e,"[ "),s(e,n),l(e," ]"),i(n,h),e}()
e.replaceChild(r,a)}export default x
//# sourceMappingURL=nekidBtn-d75d20f5.js.map
