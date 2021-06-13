import{u as a,j as s,I as e,a6 as o,a as t}from"./calfSystem-e1e858cd.js"
import{n,d,p}from"./parseGoldUpgrades-d826c589.js"
function c(a){t(3,p,[a])}function r(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(c)}function f(){s()&&n()&&(e("needToDoUpgrade")?d():r())}export default f
//# sourceMappingURL=injectUpgradeAlert-e22fec73.js.map
