import{u as a,j as e,I as s,a6 as o,a as t}from"./calfSystem-ae2e69af.js"
import{n,d as f,p}from"./parseGoldUpgrades-fb2eef61.js"
function r(a){t(3,p,[a])}function d(){const e=s("lastUpgradeCheck")
e&&o<e||a({cmd:"points",type:1}).then(r)}function c(){e()&&n()&&(s("needToDoUpgrade")?f():d())}export default c
//# sourceMappingURL=injectUpgradeAlert-ebda480d.js.map
