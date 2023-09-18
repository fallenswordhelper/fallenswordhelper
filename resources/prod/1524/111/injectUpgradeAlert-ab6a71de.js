import{F as a,bX as s,ae as o,aN as t}from"./calfSystem-abb16b0d.js"
import{n}from"./now-6f22aec9.js"
import{n as r,d as e,p}from"./parseGoldUpgrades-c157c446.js"
async function f(){const s=o("lastUpgradeCheck")
if(s&&n()<s)return
!function(a){t(3,p,[a])}(await a({cmd:"points",type:1}))}function i(){s()&&r()&&(o("needToDoUpgrade")?e():f())}export{i as default}
//# sourceMappingURL=injectUpgradeAlert-ab6a71de.js.map
