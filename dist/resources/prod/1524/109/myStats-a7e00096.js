import{p as s}from"./profile-68b6c45b.js"
import{aA as a,ad as r}from"./calfSystem-2f15e074.js"
import{n as t}from"./now-6f22aec9.js"
import{g as e,s as n}from"./idb-28aa7d4a.js"
async function o(r){const e=await s(a(),r),o=e?.username===a(),f=o?{...e,lastUpdate:t()}:e
return o&&n("fsh_selfProfile",f),f}const f=s=>t()-r.allyEnemyOnlineRefreshTime<s?.lastUpdate
async function i(s){if(s)return o(s)
return function(s){return f(s)?s:o()}(await e("fsh_selfProfile"))}export{i as m}
//# sourceMappingURL=myStats-a7e00096.js.map
