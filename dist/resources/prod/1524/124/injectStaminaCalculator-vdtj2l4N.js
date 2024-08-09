import{aU as t,g as a,v as s}from"./calfSystem-0LeC9ahe.js"
import{v as n}from"./valueText-BpMXba0C.js"
import{i as o}from"./intValue-C7nTQec1.js"
import{a as i}from"./asInt-BgNTeMBE.js"
import{t as m}from"./timeBox-Cw0iYQ-v.js"
import"./now-Cx4PsKjI.js"
import"./padZ-DFV6JBPu.js"
function r(){const r=t("stat-stamina-nextGain")
if(0===r.length)return
const e=a("statbar-stamina-tooltip-stamina"),f=n(t("stat-name",e)).split(" / ")
2===f.length&&s(e,function(t,a){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${m(n(t),Math.floor((o(a[1])-o(a[0]))/i("stat-stamina-gainPerHour")))}`}(r,f))}export{r as default}
//# sourceMappingURL=injectStaminaCalculator-vdtj2l4N.js.map
