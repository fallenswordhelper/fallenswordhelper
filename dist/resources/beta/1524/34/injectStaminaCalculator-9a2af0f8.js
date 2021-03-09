import{t,a}from"./timeBox-67b3c53e.js"
import{J as s,y as n,i}from"./calfSystem-dfa26790.js"
import{i as o}from"./intValue-d2a6f461.js"
import{v as e}from"./valueText-6c17ddd6.js"
import"./padZ-d4e02992.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(e(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-9a2af0f8.js.map
