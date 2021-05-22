import{a as t}from"./asInt-4b3cfe31.js"
import{M as a,z as s,i as n}from"./calfSystem-6ad077b7.js"
import{i}from"./intValue-66f66ba9.js"
import{t as o}from"./timeBox-88f8d45b.js"
import{v as r}from"./valueText-febd3894.js"
import"./padZ-634214b3.js"
function m(){const m=a("stat-stamina-nextGain")
if(0===m.length)return
const e=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(e)
f&&n(e,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(m,f))}export default m
//# sourceMappingURL=injectStaminaCalculator-ff6e7077.js.map
