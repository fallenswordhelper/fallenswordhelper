import{a as g}from"./chunk-YPVWF2EB.js";import{a as b}from"./chunk-WM3ZDTFF.js";import"./chunk-5GJ5TJCR.js";import{a as s}from"./chunk-CFVNMPKS.js";import{a as k}from"./chunk-L2AMBQFE.js";import{a as d}from"./chunk-XVWB66RC.js";import"./chunk-MJJQFX2W.js";import"./chunk-VV4Q3N2E.js";import{a as c}from"./chunk-L4KRSPGL.js";import{a}from"./chunk-UAVPZSJA.js";import{a as l}from"./chunk-TA6AFEKU.js";import"./chunk-KXOTQ6FX.js";import"./chunk-MJTY2SNM.js";import"./chunk-SNUUUJ2J.js";import"./chunk-3OWYIURB.js";import"./chunk-JRO7QTDC.js";import"./chunk-L2YJ66JH.js";import{a as p}from"./chunk-WMVV5BR3.js";import"./chunk-4JMLF5JM.js";import"./chunk-G7U3SZPH.js";import{a as u}from"./chunk-SLXSHGYV.js";import"./chunk-VWHQXFZ5.js";import{a as o}from"./chunk-FNUCRPZA.js";import"./chunk-WFGYEXIY.js";import"./chunk-Y4WR2IKW.js";import{a as m}from"./chunk-MS5TR5HI.js";import"./chunk-WULU2HSE.js";import"./chunk-GCBAZDNZ.js";import"./chunk-UVAAI4KD.js";import"./chunk-KOVMYOV5.js";import"./chunk-SC26BEBT.js";import"./chunk-AXUZC3IG.js";function i(e){return d({subcmd:"removeskill",skill_id:e})}function f(e){return g({cmd:"profile",subcmd:"removeskill",skill_id:e},"Skill de-activated successfully.")}function n(e){return c(i,f,e)}function v(e,r){r&&r.s&&a("",e.parentNode)}function h(e,r){if(e){u("profile","doDebuff");let t=m(/d=(?<id>\d{1,3})$/,r.href);n(t).then(b).then(o(v,r))}else s(r.href)}function x(e){let r=e;return r.tagName==="IMG"&&(k(e),r=r.parentNode),r}function D(e){e.eventPhase===1&&e.stopPropagation()}function C(e,r){if(!r.returnValue)return;let t=x(r.target);t.tagName==="A"&&(D(r),r.preventDefault(),h(e,t))}function E(e,r){let t=l("profileRightColumn");t&&p(t.lastElementChild,o(C,e),r)}export{E as default};
//# sourceMappingURL=debuff-MP3HJZGF.js.map
