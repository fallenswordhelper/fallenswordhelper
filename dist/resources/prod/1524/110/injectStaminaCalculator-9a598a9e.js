import{aO as t,g as a,v as s}from"./calfSystem-929ac228.js"
import{v as n}from"./valueText-2acfe155.js"
import{i as o}from"./intValue-e1798d0a.js"
import{a as i}from"./asInt-116907f9.js"
import{t as m}from"./timeBox-589edd70.js"
import"./now-6f22aec9.js"
import"./padZ-e55b66a2.js"
function r(){const r=t("stat-stamina-nextGain")
if(0===r.length)return
const e=a("statbar-stamina-tooltip-stamina"),f=n(t("stat-name",e)).split(" / ")
2===f.length&&s(e,function(t,a){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${m(n(t),Math.floor((o(a[1])-o(a[0]))/i("stat-stamina-gainPerHour")))}`}(r,f))}export{r as default}
//# sourceMappingURL=injectStaminaCalculator-9a598a9e.js.map
