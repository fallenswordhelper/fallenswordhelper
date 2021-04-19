import{t,a}from"./timeBox-97705215.js"
import{K as s,z as n,i}from"./calfSystem-fe534823.js"
import{i as o}from"./intValue-f6303c59.js"
import{v as r}from"./valueText-322f7b12.js"
import"./padZ-5c8671fc.js"
function e(){const e=s("stat-stamina-nextGain")
if(0===e.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(r(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-fd28c088.js.map
