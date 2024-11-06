import{cx as e,ag as n,K as t,H as a,as as i,ae as o}from"./calfSystem-BhNMi9iJ.js"
import{g as s}from"./genericNotification-B2LnY8UK.js"
function r(){return-1===window.location.search.indexOf("cmd=points&type=1")}function c(){r()&&s("stamina","Upgrade stamina with gold",`${e}&type=1`)}function p(e){if(!n.enableUpgradeAlert)return
const s=function(e){if(r())return a(e)
const n=t('#pCC input[name="quantity"]')
return n[0].value="100",n[1].value="10",document}(e),p=t("#pCC > table",s)
if(p.length>0){!function(e){const n=i(e).split(" / ")
n[0]!==n[1]?(c(),o("needToDoUpgrade",!0)):(o("needToDoUpgrade",!1),o("lastUpgradeCheck",Date.parse(`${i(e.nextElementSibling)} GMT`)))}(p[p.length-1].rows[3].cells[2])}}export{c as d,r as n,p}
//# sourceMappingURL=parseGoldUpgrades-NsUZLaRW.js.map
