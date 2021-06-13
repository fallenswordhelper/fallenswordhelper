import{u as a,j as s,I as e,a6 as o,a as t}from"./calfSystem-7991d843.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-b89ebbca.js"
function r(a){t(3,d,[a])}function c(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(e("needToDoUpgrade")?p():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-7d80f90d.js.map
