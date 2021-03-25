import{t,a}from"./timeBox-f9f197ad.js"
import{K as s,z as n,i as e}from"./calfSystem-cb2a6f39.js"
import{i}from"./intValue-0e97c9b9.js"
import{v as o}from"./valueText-52de4ed6.js"
import"./padZ-c46e4c30.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&e(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((i(n[2])-i(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-53ca3ad5.js.map
