import{a as y}from"./chunk-YPRXL3QQ.js";import{a as m}from"./chunk-ULKY3I7L.js";import{a as l}from"./chunk-VYP6BYDA.js";import{a as s}from"./chunk-D6BL5IS3.js";import{a as f}from"./chunk-KF3ZZECL.js";import{a as d}from"./chunk-WPRJK6Q2.js";import{a as c}from"./chunk-PJ32ASZ7.js";import{a}from"./chunk-2B42SRXB.js";import{a as r}from"./chunk-AN5TC666.js";import{m as i}from"./chunk-YNXRNCRL.js";function o(e){s("needToPray",e),s("lastTempleCheck",new Date().setUTCHours(23,59,59,999)+1)}var T='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',g=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${i}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`;function h(){a("helperPrayToGods").outerHTML=T,o(!1)}function P(e){let t=e.target.getAttribute("praytype");!t||(c({cmd:"temple",subcmd:"pray",type:t}).then(h),f(e.target))}function n(){y(a("notifications"),g),m(a("helperPrayToGods"),"click",P)}function v(e){let t;r.cmd!=="temple"?t=d(e):t=document;let u=l('input[value="Pray to Osverin"]',t),p=!1;u&&(n(),p=!0),o(p)}function G(e){r.enableTempleAlert&&v(e)}export{n as a,G as b};
//# sourceMappingURL=chunk-6V7XTW74.js.map