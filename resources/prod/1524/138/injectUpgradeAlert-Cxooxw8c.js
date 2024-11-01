import{G as a,c6 as s,ai as t,ap as o,aV as n}from"./calfSystem-BjarbvkO.js"
import{n as e,d as i,p as r}from"./parseGoldUpgrades-CvVJdBo5.js"
import"./genericNotification-COs8VA7h.js"
async function p(){const s=t("lastUpgradeCheck")
if(s&&o()<s)return
!function(a){n(3,r,[a])}(await a({cmd:"points",type:1}))}function c(){s()&&e()&&(t("needToDoUpgrade")?i():p())}export{c as default}
//# sourceMappingURL=injectUpgradeAlert-Cxooxw8c.js.map
