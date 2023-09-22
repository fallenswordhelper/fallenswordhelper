import{p as s}from"./profile-3abe08ab.js"
import{ax as a,ab as r}from"./calfSystem-4830a18d.js"
import{n as t}from"./now-6f22aec9.js"
import{g as e,s as n}from"./idb-7e56faaa.js"
async function o(r){const e=await s(a(),r),o=e?.username===a(),f=o?{...e,lastUpdate:t()}:e
return o&&n("fsh_selfProfile",f),f}const f=s=>t()-r.allyEnemyOnlineRefreshTime<s?.lastUpdate
async function i(s){if(s)return o(s)
return function(s){return f(s)?s:o()}(await e("fsh_selfProfile"))}export{i as m}
//# sourceMappingURL=myStats-e8c505b6.js.map
