import{u as a,j as s,I as e,a8 as o,a as t}from"./calfSystem-5d0c721b.js"
import{n as d,d as n,p}from"./parseGoldUpgrades-59dd188e.js"
function r(a){t(3,p,[a])}function c(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&d()&&(e("needToDoUpgrade")?n():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-dbf7d453.js.map
