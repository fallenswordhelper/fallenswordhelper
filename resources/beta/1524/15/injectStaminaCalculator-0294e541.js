import{F as t,x as a,i as s}from"./calfSystem-1262535f.js"
import{i as n}from"./intValue-c4584407.js"
import{v as i}from"./valueText-03ad0c73.js"
import"./padZ-9d5b7a82.js"
import{t as o,a as e}from"./timeBox-5e1d6c9e.js"
export default function(){const r=t("stat-stamina-nextGain")
if(0===r.length)return
const m=a("statbar-stamina-tooltip-stamina"),f=function(a){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(i(t("stat-name",a)))}(m)
s(m,function(t,a){return'<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>'+o(i(t),Math.floor((n(a[2])-n(a[1]))/e("stat-stamina-gainPerHour")))}(r,f))}
//# sourceMappingURL=injectStaminaCalculator-0294e541.js.map