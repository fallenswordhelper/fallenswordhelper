import{u as a,j as s,H as e,a5 as o,a as t}from"./calfSystem-dfa26790.js"
import{n,d,p}from"./parseGoldUpgrades-aa47bebd.js"
function r(a){t(3,p,[a])}function f(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function c(){s()&&n()&&(e("needToDoUpgrade")?d():f())}export default c
//# sourceMappingURL=injectUpgradeAlert-e2a5526a.js.map
