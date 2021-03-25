import{u as a,j as s,I as e,a7 as o,a as t}from"./calfSystem-cb2a6f39.js"
import{n,d as p,p as c}from"./parseGoldUpgrades-e2d9c9fa.js"
function d(a){t(3,c,[a])}function f(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(d)}function r(){s()&&n()&&(e("needToDoUpgrade")?p():f())}export default r
//# sourceMappingURL=injectUpgradeAlert-7b8d2564.js.map
