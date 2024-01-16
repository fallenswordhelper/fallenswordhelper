import{p as a}from"./profile-YuJ83wb9.js"
import{aO as s,aC as e,aQ as n,ag as r}from"./calfSystem-G1dN925O.js"
import{n as t}from"./now-pQzGw6vd.js"
async function f(s){const r=await a(e(),s),f=r?.username===e(),o=f?{...r,lastUpdate:t()}:r
return f&&n("fsh_selfProfile",o),o}const o=a=>t()-r.allyEnemyOnlineRefreshTime<a?.lastUpdate
async function i(a){if(a)return f(a)
return function(a){return o(a)?a:f()}(await s("fsh_selfProfile"))}export{i as m}
//# sourceMappingURL=myStats--KJiIj1a.js.map
