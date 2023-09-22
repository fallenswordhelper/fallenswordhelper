import{E as a,bW as s,ad as o,aM as t}from"./calfSystem-4830a18d.js"
import{n}from"./now-6f22aec9.js"
import{n as r,d as e,p}from"./parseGoldUpgrades-b2d24834.js"
async function d(){const s=o("lastUpgradeCheck")
if(s&&n()<s)return
!function(a){t(3,p,[a])}(await a({cmd:"points",type:1}))}function f(){s()&&r()&&(o("needToDoUpgrade")?e():d())}export{f as default}
//# sourceMappingURL=injectUpgradeAlert-035155af.js.map
