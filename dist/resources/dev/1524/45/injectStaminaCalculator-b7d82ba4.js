import{a as t}from"./asInt-8d560463.js"
import{M as a,z as s,i as n}from"./calfSystem-6a3c85e0.js"
import{i}from"./intValue-a6f9b475.js"
import{t as o}from"./timeBox-5dc44476.js"
import{v as r}from"./valueText-73e7237a.js"
import"./padZ-28d1918e.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-b7d82ba4.js.map
