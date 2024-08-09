import{G as a,c0 as s,ai as o,aT as t}from"./calfSystem-0LeC9ahe.js"
import{n}from"./now-Cx4PsKjI.js"
import{n as r,d as i,p as e}from"./parseGoldUpgrades-DDFoY_n3.js"
import"./genericNotification-CnLhv9_J.js"
async function p(){const s=o("lastUpgradeCheck")
if(s&&n()<s)return
!function(a){t(3,e,[a])}(await a({cmd:"points",type:1}))}function c(){s()&&r()&&(o("needToDoUpgrade")?i():p())}export{c as default}
//# sourceMappingURL=injectUpgradeAlert-snY-1qo2.js.map
