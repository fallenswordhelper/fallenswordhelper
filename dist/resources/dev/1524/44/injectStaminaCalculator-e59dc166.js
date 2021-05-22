import{a as t}from"./asInt-1c5cca46.js"
import{M as a,z as s,i as n}from"./calfSystem-f7cf24f6.js"
import{i}from"./intValue-66f66ba9.js"
import{t as o}from"./timeBox-f85f23e9.js"
import{v as r}from"./valueText-ea28f9e0.js"
import"./padZ-634214b3.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-e59dc166.js.map
