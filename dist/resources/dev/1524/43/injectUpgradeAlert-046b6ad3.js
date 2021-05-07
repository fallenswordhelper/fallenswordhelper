import{u as a,j as s,I as e,a8 as o,a as t}from"./calfSystem-3cb2f93e.js"
import{n,d as p,p as f}from"./parseGoldUpgrades-7ef5a181.js"
function r(a){t(3,f,[a])}function c(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function d(){s()&&n()&&(e("needToDoUpgrade")?p():c())}export default d
//# sourceMappingURL=injectUpgradeAlert-046b6ad3.js.map
