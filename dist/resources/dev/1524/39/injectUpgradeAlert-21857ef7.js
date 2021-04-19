import{u as a,j as s,I as o,a8 as t,a as e}from"./calfSystem-b31aba65.js"
import{n,d as p,p as r}from"./parseGoldUpgrades-cb888437.js"
function c(a){e(3,r,[a])}function d(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(c)}function f(){s()&&n()&&(o("needToDoUpgrade")?p():d())}export default f
//# sourceMappingURL=injectUpgradeAlert-21857ef7.js.map
