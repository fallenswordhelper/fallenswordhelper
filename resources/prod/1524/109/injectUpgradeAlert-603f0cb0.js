import{G as a,bZ as s,af as o,aP as t}from"./calfSystem-2f15e074.js"
import{n}from"./now-6f22aec9.js"
import{n as r,d as e,p}from"./parseGoldUpgrades-ef4c1a2f.js"
async function f(){const s=o("lastUpgradeCheck")
if(s&&n()<s)return
!function(a){t(3,p,[a])}(await a({cmd:"points",type:1}))}function i(){s()&&r()&&(o("needToDoUpgrade")?e():f())}export{i as default}
//# sourceMappingURL=injectUpgradeAlert-603f0cb0.js.map
