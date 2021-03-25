import{u as a,j as s,I as o,a7 as t,a as e}from"./calfSystem-4a40365f.js"
import{n,d as p,p as f}from"./parseGoldUpgrades-338bf961.js"
function r(a){e(3,f,[a])}function d(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(r)}function c(){s()&&n()&&(o("needToDoUpgrade")?p():d())}export default c
//# sourceMappingURL=injectUpgradeAlert-089cfb85.js.map
