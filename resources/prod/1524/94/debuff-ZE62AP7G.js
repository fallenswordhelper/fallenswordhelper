import{a as g}from"./chunk-XUV2RB7X.js";import{a as b}from"./chunk-LVL23EUN.js";import"./chunk-5IZ2PUCX.js";import{a as s}from"./chunk-UH6AOJVT.js";import{a as k}from"./chunk-LBIRWPM4.js";import{a as d}from"./chunk-SBRQ2775.js";import"./chunk-2BSE7TQB.js";import"./chunk-NH2AECXJ.js";import{a as c}from"./chunk-3YHDDTO4.js";import{a}from"./chunk-JXM235FS.js";import{a as l}from"./chunk-ZOM4M5CL.js";import"./chunk-KPBHOIFO.js";import"./chunk-ZG3H6FNG.js";import"./chunk-COFS3IJQ.js";import"./chunk-X7VSJFUB.js";import"./chunk-RDJGNWAB.js";import"./chunk-7IZ75EHU.js";import{a as p}from"./chunk-CIYKTU6C.js";import"./chunk-LZRXEQDU.js";import"./chunk-LB3PYE2H.js";import{a as u}from"./chunk-HXA7GMHU.js";import"./chunk-FXTQ547Y.js";import{a as o}from"./chunk-P2XVC4S5.js";import"./chunk-JWWQOZPD.js";import"./chunk-ZOQAMPPO.js";import{a as m}from"./chunk-SGC5GHRN.js";import"./chunk-2I26BJ52.js";import"./chunk-QMYGD3GE.js";import"./chunk-X4CA4ODK.js";import"./chunk-6MEG5PHL.js";import"./chunk-Q6PVLDNZ.js";import"./chunk-VVJVMGW6.js";function i(e){return d({subcmd:"removeskill",skill_id:e})}function f(e){return g({cmd:"profile",subcmd:"removeskill",skill_id:e},"Skill de-activated successfully.")}function n(e){return c(i,f,e)}function v(e,r){r&&r.s&&a("",e.parentNode)}function h(e,r){if(e){u("profile","doDebuff");let t=m(/d=(?<id>\d{1,3})$/,r.href);n(t).then(b).then(o(v,r))}else s(r.href)}function x(e){let r=e;return r.tagName==="IMG"&&(k(e),r=r.parentNode),r}function D(e){e.eventPhase===1&&e.stopPropagation()}function C(e,r){if(!r.returnValue)return;let t=x(r.target);t.tagName==="A"&&(D(r),r.preventDefault(),h(e,t))}function E(e,r){let t=l("profileRightColumn");t&&p(t.lastElementChild,o(C,e),r)}export{E as default};
//# sourceMappingURL=debuff-ZE62AP7G.js.map
