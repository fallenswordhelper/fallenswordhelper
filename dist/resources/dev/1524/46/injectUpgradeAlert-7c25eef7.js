import{u as a,j as s,I as o,a7 as t,a as e}from"./calfSystem-d3f0a380.js"
import{n,d as f,p}from"./parseGoldUpgrades-cf2352af.js"
function d(a){e(3,p,[a])}function r(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(d)}function c(){s()&&n()&&(o("needToDoUpgrade")?f():r())}export default c
//# sourceMappingURL=injectUpgradeAlert-7c25eef7.js.map
