import{t,a}from"./timeBox-a6b97957.js"
import{K as s,z as n,i}from"./calfSystem-b31aba65.js"
import{i as o}from"./intValue-f6303c59.js"
import{v as r}from"./valueText-bc9c083f.js"
import"./padZ-5c8671fc.js"
function m(){const m=s("stat-stamina-nextGain")
if(0===m.length)return
const e=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(s("stat-name",t)))}(e)
f&&i(e,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(r(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(m,f))}export default m
//# sourceMappingURL=injectStaminaCalculator-6806b9d8.js.map
