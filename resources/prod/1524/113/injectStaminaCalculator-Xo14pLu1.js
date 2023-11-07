import{aM as t,g as a,v as s}from"./calfSystem-VUa7wwu1.js"
import{v as n}from"./valueText-13w7MOtM.js"
import{i as o}from"./intValue-JHhLnq8V.js"
import{a as i}from"./asInt-X0f7ehmu.js"
import{t as m}from"./timeBox-wgGj0E9k.js"
import"./now-pQzGw6vd.js"
import"./padZ-zYXZ2AFi.js"
function r(){const r=t("stat-stamina-nextGain")
if(0===r.length)return
const e=a("statbar-stamina-tooltip-stamina"),f=n(t("stat-name",e)).split(" / ")
2===f.length&&s(e,function(t,a){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${m(n(t),Math.floor((o(a[1])-o(a[0]))/i("stat-stamina-gainPerHour")))}`}(r,f))}export{r as default}
//# sourceMappingURL=injectStaminaCalculator-Xo14pLu1.js.map
