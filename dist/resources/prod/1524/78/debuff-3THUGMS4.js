import{a as k}from"./chunk-7GPSNIAP.js";import"./chunk-FA3INVM7.js";import{a as g}from"./chunk-CBXBM7X4.js";import{a as b}from"./chunk-M3MIY5WL.js";import{a as s}from"./chunk-7M4H5O4X.js";import{a as c}from"./chunk-EREM32XP.js";import"./chunk-WXTFQ2EX.js";import{a as d}from"./chunk-WJGEKWR5.js";import{a as p}from"./chunk-HPANGB4C.js";import"./chunk-AOUMBNX5.js";import"./chunk-DAGOHXEG.js";import"./chunk-65TDUWAS.js";import{a}from"./chunk-L64NM3TP.js";import"./chunk-NRWJMAHH.js";import"./chunk-K4B7GDYL.js";import"./chunk-WS7NDR34.js";import{a as l}from"./chunk-AXRQ5WVZ.js";import{a as m}from"./chunk-R6LOYYKU.js";import"./chunk-NNEMTXQK.js";import"./chunk-EEFLVRLB.js";import{a as r}from"./chunk-BCLTLFAS.js";import"./chunk-BVHFLUJI.js";import"./chunk-TRTGTDIN.js";import{a as u}from"./chunk-46ONZIIB.js";import"./chunk-S6LVOURD.js";import"./chunk-LXKLJ4E3.js";import"./chunk-VNX4IMNY.js";import"./chunk-KWOXJEE6.js";import"./chunk-GBEPYIIX.js";async function f(t){let e=await a({cmd:"profile",subcmd:"removeskill",skill_id:t}),o=c(e);return o==="Skill de-activated successfully."?{s:!0}:{s:!1,e:{message:o}}}function i(t){return s({subcmd:"removeskill",skill_id:t})}function n(t){return p(i,f,t)}function v(t,e){e&&e.s&&l("",t.parentNode)}function h(t,e){if(t){d("profile","doDebuff");let o=e.href.match(/=(\d{1,3})$/)[1];n(o).then(k).then(r(v,e))}else g(e.href)}function x(t){let e=t;return e.tagName==="IMG"&&(b(t),e=e.parentNode),e}function D(t){t.eventPhase===1&&t.stopPropagation()}function A(t,e){if(!e.returnValue)return;let o=x(e.target);o.tagName==="A"&&(D(e),e.preventDefault(),h(t,o))}function I(t,e){let o=m("profileRightColumn");o&&u(o.lastElementChild,r(A,t),e)}export{I as default};
//# sourceMappingURL=debuff-3THUGMS4.js.map