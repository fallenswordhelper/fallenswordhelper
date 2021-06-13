import{u as a,j as s,I as o,a6 as t,a as e}from"./calfSystem-cbf77dd7.js"
import{n,d,p}from"./parseGoldUpgrades-a6137848.js"
function r(a){e(3,p,[a])}function c(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(o("needToDoUpgrade")?d():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-18f80f08.js.map
