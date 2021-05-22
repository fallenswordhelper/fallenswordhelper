import{u as a,j as s,I as e,a6 as o,a as t}from"./calfSystem-a8d582b6.js"
import{n,d,p}from"./parseGoldUpgrades-92fd8ef2.js"
function f(a){t(3,p,[a])}function r(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(f)}function c(){s()&&n()&&(e("needToDoUpgrade")?d():r())}export default c
//# sourceMappingURL=injectUpgradeAlert-aee8dc0e.js.map
