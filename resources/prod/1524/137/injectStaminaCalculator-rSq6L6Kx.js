import{aW as t,g as a,v as s}from"./calfSystem-DZGU7L1H.js"
import{v as n}from"./valueText-BpUI1ICU.js"
import{i}from"./intValue-C7nTQec1.js"
import{a as o}from"./asInt-BEghcCcW.js"
import{t as m}from"./timeBox-DME8ivV1.js"
import"./padZ-DFV6JBPu.js"
function r(){const r=t("stat-stamina-nextGain")
if(0===r.length)return
const e=a("statbar-stamina-tooltip-stamina"),f=n(t("stat-name",e)).split(" / ")
2===f.length&&s(e,function(t,a){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${m(n(t),Math.floor((i(a[1])-i(a[0]))/o("stat-stamina-gainPerHour")))}`}(r,f))}export{r as default}
//# sourceMappingURL=injectStaminaCalculator-rSq6L6Kx.js.map
