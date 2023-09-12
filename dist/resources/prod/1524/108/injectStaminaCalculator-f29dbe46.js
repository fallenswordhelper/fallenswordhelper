import{aQ as t,g as a,v as s}from"./calfSystem-34913441.js"
import{v as n}from"./valueText-238d2284.js"
import{i as o}from"./intValue-e1798d0a.js"
import{a as i}from"./asInt-f990b3d0.js"
import{t as m}from"./timeBox-30add3e9.js"
import"./now-6f22aec9.js"
import"./padZ-e55b66a2.js"
function r(){const r=t("stat-stamina-nextGain")
if(0===r.length)return
const e=a("statbar-stamina-tooltip-stamina"),f=n(t("stat-name",e)).split(" / ")
2===f.length&&s(e,function(t,a){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${m(n(t),Math.floor((o(a[1])-o(a[0]))/i("stat-stamina-gainPerHour")))}`}(r,f))}export{r as default}
//# sourceMappingURL=injectStaminaCalculator-f29dbe46.js.map
