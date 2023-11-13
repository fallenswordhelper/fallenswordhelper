import{p as s}from"./profile-chrQWu8y.js"
import{ax as a,ab as r}from"./calfSystem-rn9Rc_nF.js"
import{n as t}from"./now-pQzGw6vd.js"
import{g as e,s as n}from"./idb-1b6_RJN1.js"
async function o(r){const e=await s(a(),r),o=e?.username===a(),f=o?{...e,lastUpdate:t()}:e
return o&&n("fsh_selfProfile",f),f}const f=s=>t()-r.allyEnemyOnlineRefreshTime<s?.lastUpdate
async function i(s){if(s)return o(s)
return function(s){return f(s)?s:o()}(await e("fsh_selfProfile"))}export{i as m}
//# sourceMappingURL=myStats-xDAqOwWp.js.map
