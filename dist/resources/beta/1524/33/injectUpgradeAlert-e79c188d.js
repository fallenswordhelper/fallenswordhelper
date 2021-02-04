import{u as a,j as s,H as o,a5 as t,a as e}from"./calfSystem-c91a5c89.js"
import{n,d as p,p as c}from"./parseGoldUpgrades-617b8399.js"
function r(a){e(3,c,[a])}function d(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(o("needToDoUpgrade")?p():d())}export default f
//# sourceMappingURL=injectUpgradeAlert-e79c188d.js.map
