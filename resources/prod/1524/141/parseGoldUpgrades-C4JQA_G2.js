import{cx as n,ag as e,J as t,K as a,as as i,ad as o}from"./calfSystem-Blt4DbaE.js"
import{g as s}from"./genericNotification-Bo-vlgzF.js"
function r(){return-1===window.location.search.indexOf("cmd=points&type=1")}function c(){r()&&s("stamina","Upgrade stamina with gold",`${n}&type=1`)}function p(n){if(!e.enableUpgradeAlert)return
const s=function(n){if(r())return t(n)
const e=a('#pCC input[name="quantity"]')
return e[0].value="100",e[1].value="10",document}(n),p=a("#pCC > table",s)
if(p.length>0){!function(n){const e=i(n).split(" / ")
e[0]!==e[1]?(c(),o("needToDoUpgrade",!0)):(o("needToDoUpgrade",!1),o("lastUpgradeCheck",Date.parse(`${i(n.nextElementSibling)} GMT`)))}(p[p.length-1].rows[3].cells[2])}}export{c as d,r as n,p}
//# sourceMappingURL=parseGoldUpgrades-C4JQA_G2.js.map
