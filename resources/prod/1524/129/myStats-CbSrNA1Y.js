import{p as a}from"./profile-CIszlYgU.js"
import{aO as s,aB as e,aQ as n,ag as r}from"./calfSystem-B3Rc3sVt.js"
import{n as t}from"./now-Cx4PsKjI.js"
async function f(s){const r=await a(e(),s),f=r?.username===e(),o=f?{...r,lastUpdate:t()}:r
return f&&n("fsh_selfProfile",o),o}const o=a=>t()-r.allyEnemyOnlineRefreshTime<a?.lastUpdate
async function i(a){if(a)return f(a)
return function(a){return o(a)?a:f()}(await s("fsh_selfProfile"))}export{i as m}
//# sourceMappingURL=myStats-CbSrNA1Y.js.map
