import{a as t}from"./asInt-c5f8ce87.js"
import{M as a,z as s,i as n}from"./calfSystem-d3f0a380.js"
import{i}from"./intValue-19726e4b.js"
import{t as o}from"./timeBox-ddd37178.js"
import{v as r}from"./valueText-2dd1b1b5.js"
import"./padZ-aa6c487e.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-0da00223.js.map
