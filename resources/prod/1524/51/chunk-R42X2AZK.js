import{a as d}from"./chunk-YPRXL3QQ.js";import{a as n}from"./chunk-D6BL5IS3.js";import{a}from"./chunk-AN443625.js";import{a as m}from"./chunk-WPRJK6Q2.js";import{a as c}from"./chunk-2B42SRXB.js";import{a as i}from"./chunk-EPYDL6MF.js";import{a as p}from"./chunk-AN5TC666.js";import{C as l}from"./chunk-YNXRNCRL.js";function o(){return window.location.search.indexOf("cmd=points&type=1")===-1}var f=`<li class="notification"><a href="${l}&type=1"><span class="notification-icon"></span><p class="notification-content">Upgrade stamina with gold</p></a></li>`;function s(){o()&&d(c("notifications"),f)}function u(t){if(o())return m(t);let e=i('#pCC input[name="quantity"]');return e[0].value="100",e[1].value="10",document}function U(t){let e=a(t).split(" / ");e[0]!==e[1]?(s(),n("needToDoUpgrade",!0)):(n("needToDoUpgrade",!1),n("lastUpgradeCheck",Date.parse(`${a(t.nextElementSibling)} GMT`)))}function y(t){if(!p.enableUpgradeAlert)return;let e=u(t),r=i("#pCC > table",e);if(r.length>0){let g=r[r.length-1].rows[3].cells[2];U(g)}}export{o as a,s as b,y as c};
//# sourceMappingURL=chunk-R42X2AZK.js.map
