import{u as a,j as s,I as e,a7 as o,a as t}from"./calfSystem-6a3c85e0.js"
import{n,d as p,p as c}from"./parseGoldUpgrades-d5aa6c69.js"
function d(a){t(3,c,[a])}function r(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(d)}function f(){s()&&n()&&(e("needToDoUpgrade")?p():r())}export default f
//# sourceMappingURL=injectUpgradeAlert-64b59a2a.js.map
