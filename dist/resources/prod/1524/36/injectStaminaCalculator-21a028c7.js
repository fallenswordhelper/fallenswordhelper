import{t,a}from"./timeBox-4cdced23.js"
import{K as s,z as n,i as e}from"./calfSystem-e7bde0c3.js"
import{i}from"./intValue-ca51a3c0.js"
import{v as o}from"./valueText-550b31ac.js"
import"./padZ-0374e903.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),c=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
c&&e(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((i(n[2])-i(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,c))}export default r
//# sourceMappingURL=injectStaminaCalculator-21a028c7.js.map
