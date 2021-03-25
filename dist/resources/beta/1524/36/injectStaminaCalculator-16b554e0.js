import{t,a}from"./timeBox-a7f49879.js"
import{K as s,z as n,i}from"./calfSystem-4a40365f.js"
import{i as o}from"./intValue-ca51a3c0.js"
import{v as r}from"./valueText-1577f4a8.js"
import"./padZ-0374e903.js"
function e(){const e=s("stat-stamina-nextGain")
if(0===e.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(r(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-16b554e0.js.map
