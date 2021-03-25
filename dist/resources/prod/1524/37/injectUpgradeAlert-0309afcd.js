import{u as a,j as s,I as e,a7 as o,a as t}from"./calfSystem-60c20ae9.js"
import{n,d,p}from"./parseGoldUpgrades-9a8d1ad2.js"
function r(a){t(3,p,[a])}function c(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(e("needToDoUpgrade")?d():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-0309afcd.js.map
