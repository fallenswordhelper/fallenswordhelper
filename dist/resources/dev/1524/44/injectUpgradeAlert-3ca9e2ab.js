import{u as a,j as s,I as o,a7 as t,a as e}from"./calfSystem-f7cf24f6.js"
import{n as f,d as n,p}from"./parseGoldUpgrades-68fc2d73.js"
function c(a){e(3,p,[a])}function d(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(c)}function r(){s()&&f()&&(o("needToDoUpgrade")?n():d())}export default r
//# sourceMappingURL=injectUpgradeAlert-3ca9e2ab.js.map
