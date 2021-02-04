import{t,a}from"./timeBox-a7c440c6.js"
import{J as s,y as n,i}from"./calfSystem-37f70deb.js"
import{i as e}from"./intValue-55d66e09.js"
import{v as o}from"./valueText-6fb91f3a.js"
import"./padZ-df568ed6.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-56b789a6.js.map
