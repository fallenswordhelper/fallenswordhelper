import{cj as t,ab as e,I as n,F as a,al as i,a9 as o}from"./calfSystem-ZGMc097r.js"
import{g as s}from"./genericNotification-W3iFcV7j.js"
function r(){return-1===window.location.search.indexOf("cmd=points&type=1")}function c(){r()&&s("stamina","Upgrade stamina with gold",`${t}&type=1`)}function l(t){if(!e.enableUpgradeAlert)return
const s=function(t){if(r())return a(t)
const e=n('#pCC input[name="quantity"]')
return e[0].value="100",e[1].value="10",document}(t),l=n("#pCC > table",s)
if(l.length>0){!function(t){const e=i(t).split(" / ")
e[0]!==e[1]?(c(),o("needToDoUpgrade",!0)):(o("needToDoUpgrade",!1),o("lastUpgradeCheck",Date.parse(`${i(t.nextElementSibling)} GMT`)))}(l[l.length-1].rows[3].cells[2])}}export{c as d,r as n,l as p}
//# sourceMappingURL=parseGoldUpgrades-wCmypuL-.js.map
