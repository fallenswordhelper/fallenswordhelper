import{ab as n,z as t,ac as a,c as e,ad as i,v as s,H as o,Z as c}from"./calfSystem-2172498b.js"
function l(){return-1===window.location.search.indexOf("cmd=points&type=1")}const r=`<li class="notification"><a href="${a}&type=1"><span class="notification-icon"></span><p class="notification-content">Upgrade stamina with gold</p></a></li>`
function p(){l()&&n(t("notifications"),r)}function f(n){if(!e.enableUpgradeAlert)return
const t=function(n){if(l())return s(n)
const t=i('#pCC input[name="quantity"]')
return t[0].value="100",t[1].value="10",document}(n),a=i("#pCC > table",t)
if(a.length>0){!function(n){const t=o(n).split(" / ")
t[0]!==t[1]?(p(),c("needToDoUpgrade",!0)):(c("needToDoUpgrade",!1),c("lastUpgradeCheck",Date.parse(`${o(n.nextElementSibling)} GMT`)))}(a[a.length-1].rows[3].cells[2])}}export{p as d,l as n,f as p}
//# sourceMappingURL=parseGoldUpgrades-eaded1d3.js.map
