import{a8 as n,y as a,a9 as t,c as e,aa as i,v as s,G as o,Z as c}from"./calfSystem-c91a5c89.js"
function l(){return-1===window.location.search.indexOf("cmd=points&type=1")}const r=`<li class="notification"><a href="${t}&type=1"><span class="notification-icon"></span><p class="notification-content">Upgrade stamina with gold</p></a></li>`
function p(){l()&&n(a("notifications"),r)}function f(n){if(!e.enableUpgradeAlert)return
const a=function(n){if(l())return s(n)
const a=i('#pCC input[name="quantity"]')
return a[0].value="100",a[1].value="10",document}(n),t=i("#pCC > table",a)
if(t.length>0){!function(n){const a=o(n).split(" / ")
a[0]!==a[1]?(p(),c("needToDoUpgrade",!0)):(c("needToDoUpgrade",!1),c("lastUpgradeCheck",Date.parse(`${o(n.nextElementSibling)} GMT`)))}(t[t.length-1].rows[3].cells[2])}}export{p as d,l as n,f as p}
//# sourceMappingURL=parseGoldUpgrades-617b8399.js.map
