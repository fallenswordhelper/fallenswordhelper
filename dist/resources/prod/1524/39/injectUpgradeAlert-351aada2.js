import{u as a,j as s,I as e,a7 as o,a as t}from"./calfSystem-fe534823.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-3540f2da.js"
function f(a){t(3,d,[a])}function r(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(f)}function c(){s()&&n()&&(e("needToDoUpgrade")?p():r())}export default c
//# sourceMappingURL=injectUpgradeAlert-351aada2.js.map
