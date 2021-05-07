import{u as a,j as s,I as e,a7 as o,a as t}from"./calfSystem-1d588248.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-5fa691e8.js"
function r(a){t(3,d,[a])}function f(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function c(){s()&&n()&&(e("needToDoUpgrade")?p():f())}export default c
//# sourceMappingURL=injectUpgradeAlert-65483eeb.js.map
