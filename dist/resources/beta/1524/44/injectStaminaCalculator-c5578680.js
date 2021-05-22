import{a as t}from"./asInt-ed8ceed1.js"
import{M as a,z as s,i as n}from"./calfSystem-a8d582b6.js"
import{i}from"./intValue-66f66ba9.js"
import{t as o}from"./timeBox-c09f7493.js"
import{v as r}from"./valueText-27359b90.js"
import"./padZ-634214b3.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-c5578680.js.map
