import{p as a}from"./profile-fEGJmCcT.js"
import{aQ as s,aC as e,ap as t,aS as n,ag as r}from"./calfSystem-KuDT30_2.js"
async function f(s){const r=await a(e(),s),f=r?.username===e(),i=f?{...r,lastUpdate:t()}:r
return f&&n("fsh_selfProfile",i),i}const i=a=>t()-r.allyEnemyOnlineRefreshTime<a?.lastUpdate
async function o(a){if(a)return f(a)
return function(a){return i(a)?a:f()}(await s("fsh_selfProfile"))}export{o as m}
//# sourceMappingURL=myStats-D85E22gh.js.map
