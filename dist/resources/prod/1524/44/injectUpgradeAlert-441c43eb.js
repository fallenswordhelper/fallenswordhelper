import{u as a,j as s,I as e,a6 as o,a as t}from"./calfSystem-6ad077b7.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-9eb86392.js"
function r(a){t(3,d,[a])}function c(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(e("needToDoUpgrade")?p():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-441c43eb.js.map
