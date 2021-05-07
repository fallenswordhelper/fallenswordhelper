import{a as t}from"./asInt-cfaa0140.js"
import{M as a,z as s,i as n}from"./calfSystem-9942149b.js"
import{i}from"./intValue-fefb28df.js"
import{t as o}from"./timeBox-5ac9ed3c.js"
import{v as e}from"./valueText-5ef907af.js"
import"./padZ-7f619ae9.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(e(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-219d226b.js.map
