import{co as e,ag as n,K as t,H as a,aq as o,ae as i}from"./calfSystem-0LeC9ahe.js"
import{g as s}from"./genericNotification-CnLhv9_J.js"
function r(){return-1===window.location.search.indexOf("cmd=points&type=1")}function c(){r()&&s("stamina","Upgrade stamina with gold",`${e}&type=1`)}function p(e){if(!n.enableUpgradeAlert)return
const s=function(e){if(r())return a(e)
const n=t('#pCC input[name="quantity"]')
return n[0].value="100",n[1].value="10",document}(e),p=t("#pCC > table",s)
if(p.length>0){!function(e){const n=o(e).split(" / ")
n[0]!==n[1]?(c(),i("needToDoUpgrade",!0)):(i("needToDoUpgrade",!1),i("lastUpgradeCheck",Date.parse(`${o(e.nextElementSibling)} GMT`)))}(p[p.length-1].rows[3].cells[2])}}export{c as d,r as n,p}
//# sourceMappingURL=parseGoldUpgrades-DDFoY_n3.js.map
