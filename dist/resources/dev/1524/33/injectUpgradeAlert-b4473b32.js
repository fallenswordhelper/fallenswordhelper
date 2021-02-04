import{u as a,j as s,H as e,a6 as o,a as t}from"./calfSystem-37f70deb.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-e63f098c.js"
function f(a){t(3,d,[a])}function r(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(f)}function c(){s()&&n()&&(e("needToDoUpgrade")?p():r())}export default c
//# sourceMappingURL=injectUpgradeAlert-b4473b32.js.map
