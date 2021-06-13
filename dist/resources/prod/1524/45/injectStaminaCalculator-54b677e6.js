import{a as t}from"./asInt-23fa966f.js"
import{M as a,z as s,i as e}from"./calfSystem-e1e858cd.js"
import{i as n}from"./intValue-a6f9b475.js"
import{t as i}from"./timeBox-aeaee06e.js"
import{v as o}from"./valueText-a6681ac9.js"
import"./padZ-28d1918e.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(a("stat-name",t)))}(m)
f&&e(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${i(o(a),Math.floor((n(s[2])-n(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-54b677e6.js.map
