import{cp as e,ag as n,K as t,H as a,aq as i,ae as o}from"./calfSystem-G1dN925O.js"
import{g as s}from"./genericNotification-CatkzHs-.js"
function r(){return-1===window.location.search.indexOf("cmd=points&type=1")}function p(){r()&&s("stamina","Upgrade stamina with gold",`${e}&type=1`)}function c(e){if(!n.enableUpgradeAlert)return
const s=function(e){if(r())return a(e)
const n=t('#pCC input[name="quantity"]')
return n[0].value="100",n[1].value="10",document}(e),c=t("#pCC > table",s)
if(c.length>0){!function(e){const n=i(e).split(" / ")
n[0]!==n[1]?(p(),o("needToDoUpgrade",!0)):(o("needToDoUpgrade",!1),o("lastUpgradeCheck",Date.parse(`${i(e.nextElementSibling)} GMT`)))}(c[c.length-1].rows[3].cells[2])}}export{p as d,r as n,c as p}
//# sourceMappingURL=parseGoldUpgrades-2Ua9gLSV.js.map
