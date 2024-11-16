import{p as a}from"./profile-BPaCJRNe.js"
import{aC as s,ap as e,aS as t,aQ as n,ag as r}from"./calfSystem-Blt4DbaE.js"
async function f(n){const r=await a(s(),n),f=r?.username===s(),i=f?{...r,lastUpdate:e()}:r
return f&&t("fsh_selfProfile",i),i}const i=a=>e()-r.allyEnemyOnlineRefreshTime<a?.lastUpdate
async function o(a){if(a)return f(a)
return function(a){return i(a)?a:f()}(await n("fsh_selfProfile"))}export{o as m}
//# sourceMappingURL=myStats-CJTu9lO4.js.map
