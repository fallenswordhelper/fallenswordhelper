import{a as t}from"./asInt-2a37aa61.js"
import{M as a,z as s,i as n}from"./calfSystem-7991d843.js"
import{i}from"./intValue-19726e4b.js"
import{t as o}from"./timeBox-354bf4eb.js"
import{v as e}from"./valueText-9648dc4e.js"
import"./padZ-aa6c487e.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(e(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-e17a0938.js.map
