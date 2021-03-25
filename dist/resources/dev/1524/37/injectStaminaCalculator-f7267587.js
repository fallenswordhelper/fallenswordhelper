import{t,a}from"./timeBox-9804aa29.js"
import{K as s,z as n,i}from"./calfSystem-5d0c721b.js"
import{i as o}from"./intValue-0e97c9b9.js"
import{v as e}from"./valueText-5c4b34ff.js"
import"./padZ-c46e4c30.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),c=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(s("stat-name",t)))}(m)
c&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(e(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,c))}export default r
//# sourceMappingURL=injectStaminaCalculator-f7267587.js.map
