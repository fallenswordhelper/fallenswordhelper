import{a as f}from"./chunk-VPD24PIK.js";import{a}from"./chunk-CYTNSAKG.js";import{a as i}from"./chunk-4KBBARFN.js";import{a as d}from"./chunk-7XTGUVW5.js";import{a as r}from"./chunk-XDUXVHJP.js";import{a as s}from"./chunk-FM7OJ7NO.js";import{E as c}from"./chunk-M72CYKCS.js";import{a as l}from"./chunk-ZP7KCDX3.js";function o(){return window.location.search.indexOf("cmd=points&type=1")===-1}var g=`<li class="notification"><a href="${c}&type=1"><span class="notification-icon"></span><p class="notification-content">Upgrade stamina with gold</p></a></li>`;function p(){o()&&f(s("notifications"),g)}function u(t){if(o())return d(t);let e=a('#pCC input[name="quantity"]');return e[0].value="100",e[1].value="10",document}function U(t){let e=i(t).split(" / ");e[0]!==e[1]?(p(),r("needToDoUpgrade",!0)):(r("needToDoUpgrade",!1),r("lastUpgradeCheck",Date.parse(`${i(t.nextElementSibling)} GMT`)))}function h(t){if(!l.enableUpgradeAlert)return;let e=u(t),n=a("#pCC > table",e);if(n.length>0){let m=n[n.length-1].rows[3].cells[2];U(m)}}export{o as a,p as b,h as c};
//# sourceMappingURL=chunk-2LN34M6F.js.map