import{a as t}from"./asInt-4d75089c.js"
import{M as a,z as s,i as n}from"./calfSystem-3cb2f93e.js"
import{i}from"./intValue-fefb28df.js"
import{t as o}from"./timeBox-0f3b9451.js"
import{v as r}from"./valueText-fbd879dc.js"
import"./padZ-7f619ae9.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-f4d8e82e.js.map
