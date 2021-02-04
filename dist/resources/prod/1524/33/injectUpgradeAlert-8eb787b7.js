import{u as a,j as s,H as e,a5 as o,a as t}from"./calfSystem-0708a9bb.js"
import{n,d as p,p as r}from"./parseGoldUpgrades-1ea143e4.js"
function d(a){t(3,r,[a])}function c(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(d)}function f(){s()&&n()&&(e("needToDoUpgrade")?p():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-8eb787b7.js.map
