import{a as t}from"./asInt-86489e68.js"
import{M as a,z as s,i as n}from"./calfSystem-1d588248.js"
import{i}from"./intValue-fefb28df.js"
import{t as o}from"./timeBox-32c4c2bb.js"
import{v as e}from"./valueText-f03f9e27.js"
import"./padZ-7f619ae9.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(e(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-25d2995f.js.map
