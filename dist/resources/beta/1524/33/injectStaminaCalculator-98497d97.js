import{t,a}from"./timeBox-e3a964b0.js"
import{J as s,y as n,i as e}from"./calfSystem-c91a5c89.js"
import{i}from"./intValue-55d66e09.js"
import{v as o}from"./valueText-4040d1ec.js"
import"./padZ-df568ed6.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&e(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((i(n[2])-i(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-98497d97.js.map
