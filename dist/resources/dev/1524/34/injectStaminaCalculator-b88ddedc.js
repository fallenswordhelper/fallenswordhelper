import{t,a}from"./timeBox-6dec9fac.js"
import{J as s,y as n,i}from"./calfSystem-c07e3259.js"
import{i as e}from"./intValue-d2a6f461.js"
import{v as o}from"./valueText-5b814802.js"
import"./padZ-d4e02992.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-b88ddedc.js.map
