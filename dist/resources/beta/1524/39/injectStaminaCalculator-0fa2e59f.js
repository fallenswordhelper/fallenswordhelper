import{t,a}from"./timeBox-464f7174.js"
import{K as s,z as n,i}from"./calfSystem-26fbeaeb.js"
import{i as e}from"./intValue-f6303c59.js"
import{v as o}from"./valueText-2413577e.js"
import"./padZ-5c8671fc.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-0fa2e59f.js.map
