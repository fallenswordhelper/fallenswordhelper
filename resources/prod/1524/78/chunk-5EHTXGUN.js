import{a as T}from"./chunk-M3MIY5WL.js";import{a as l}from"./chunk-2ABX2K3R.js";import{a as u}from"./chunk-WJGEKWR5.js";import{a as c}from"./chunk-AWJUUHCF.js";import{a as y}from"./chunk-7YIYQREX.js";import{a as d}from"./chunk-65TDUWAS.js";import{a as f}from"./chunk-L64NM3TP.js";import{a as s}from"./chunk-U23UIQ4J.js";import{a as r}from"./chunk-R6LOYYKU.js";import{o as m}from"./chunk-KWOXJEE6.js";import{a}from"./chunk-GBEPYIIX.js";function o(t){s("needToPray",t),s("lastTempleCheck",new Date().setUTCHours(23,59,59,999)+1)}var p=0,g='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',P=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${m}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`;async function G(t){let e=t.target.getAttribute("praytype");!e||(u("notification","prayToGods"),T(t.target),await f({cmd:"temple",subcmd:"pray",type:e}),p.outerHTML=g,o(!1))}function i(){c(r("notifications"),P),p=r("helperPrayToGods"),l(p,"click",G)}function b(t){let e;a.cmd!=="temple"?e=d(t):e=document;let h=y('input[value="Pray to Osverin"]',e),n=!1;h&&(i(),n=!0),o(n)}function v(t){a.enableTempleAlert&&b(t)}export{i as a,v as b};
//# sourceMappingURL=chunk-5EHTXGUN.js.map
