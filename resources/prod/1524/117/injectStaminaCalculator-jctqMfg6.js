import{aU as t,g as a,v as s}from"./calfSystem-G1dN925O.js"
import{v as n}from"./valueText-890HKMma.js"
import{i as o}from"./intValue-JHhLnq8V.js"
import{a as i}from"./asInt-PKKHs1-a.js"
import{t as m}from"./timeBox-2i68o3cY.js"
import"./now-pQzGw6vd.js"
import"./padZ-zYXZ2AFi.js"
function r(){const r=t("stat-stamina-nextGain")
if(0===r.length)return
const e=a("statbar-stamina-tooltip-stamina"),f=n(t("stat-name",e)).split(" / ")
2===f.length&&s(e,function(t,a){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${m(n(t),Math.floor((o(a[1])-o(a[0]))/i("stat-stamina-gainPerHour")))}`}(r,f))}export{r as default}
//# sourceMappingURL=injectStaminaCalculator-jctqMfg6.js.map
