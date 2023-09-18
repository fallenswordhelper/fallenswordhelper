import{F as a,bX as s,ae as o,aN as t}from"./calfSystem-929ac228.js"
import{n}from"./now-6f22aec9.js"
import{n as r,d as e,p}from"./parseGoldUpgrades-1eac944d.js"
async function f(){const s=o("lastUpgradeCheck")
if(s&&n()<s)return
!function(a){t(3,p,[a])}(await a({cmd:"points",type:1}))}function i(){s()&&r()&&(o("needToDoUpgrade")?e():f())}export{i as default}
//# sourceMappingURL=injectUpgradeAlert-11536657.js.map
