import{a as t}from"./asInt-0415d444.js"
import{M as a,z as s,i as n}from"./calfSystem-ae2e69af.js"
import{i}from"./intValue-a6f9b475.js"
import{t as o}from"./timeBox-96326f49.js"
import{v as r}from"./valueText-fa9d45d4.js"
import"./padZ-28d1918e.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-ffde5cf9.js.map
