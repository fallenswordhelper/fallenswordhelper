import{a as c}from"./chunk-3U2KFVE3.js";import{a as i}from"./chunk-OZO3C2DW.js";import{a as l}from"./chunk-RLMEWYFJ.js";import{a as f}from"./chunk-Q4ISSEWQ.js";import{a as r}from"./chunk-BSRRLYDA.js";import{F as d}from"./chunk-LGYGKPKS.js";import{a}from"./chunk-XR4XHCV2.js";import{a as s}from"./chunk-QDZWRTTK.js";function o(){return window.location.search.indexOf("cmd=points&type=1")===-1}var g=`<li class="notification"><a href="${d}&type=1"><span class="notification-icon"></span><p class="notification-content">Upgrade stamina with gold</p></a></li>`;function p(){o()&&c(l("notifications"),g)}function u(t){if(o())return f(t);let e=a('#pCC input[name="quantity"]');return e[0].value="100",e[1].value="10",document}function U(t){let e=i(t).split(" / ");e[0]!==e[1]?(p(),r("needToDoUpgrade",!0)):(r("needToDoUpgrade",!1),r("lastUpgradeCheck",Date.parse(`${i(t.nextElementSibling)} GMT`)))}function h(t){if(!s.enableUpgradeAlert)return;let e=u(t),n=a("#pCC > table",e);if(n.length>0){let m=n[n.length-1].rows[3].cells[2];U(m)}}export{o as a,p as b,h as c};
//# sourceMappingURL=chunk-THC4PAA7.js.map