import{p as s}from"./profile-fBK7MiXt.js"
import{ax as a,ab as r}from"./calfSystem-dEoRVG2S.js"
import{n as t}from"./now-pQzGw6vd.js"
import{g as e,s as n}from"./idb-ZfKvo_GP.js"
async function o(r){const e=await s(a(),r),o=e?.username===a(),f=o?{...e,lastUpdate:t()}:e
return o&&n("fsh_selfProfile",f),f}const f=s=>t()-r.allyEnemyOnlineRefreshTime<s?.lastUpdate
async function i(s){if(s)return o(s)
return function(s){return f(s)?s:o()}(await e("fsh_selfProfile"))}export{i as m}
//# sourceMappingURL=myStats-xSR8mryp.js.map
