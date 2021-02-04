import{t,a}from"./timeBox-62752ad3.js"
import{J as s,y as n,i}from"./calfSystem-0708a9bb.js"
import{i as o}from"./intValue-55d66e09.js"
import{v as e}from"./valueText-365bf09c.js"
import"./padZ-df568ed6.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(e(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-a2d5e593.js.map
