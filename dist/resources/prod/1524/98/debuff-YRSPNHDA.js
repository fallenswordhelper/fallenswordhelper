import{a as v}from"./chunk-PSFJIJX4.js";import{a as g}from"./chunk-IWVCXO2T.js";import"./chunk-JZLTI7ES.js";import{a as k}from"./chunk-SIHPISH2.js";import{a as b}from"./chunk-26VDIVQN.js";import{a as d}from"./chunk-4CYD43ZL.js";import"./chunk-BK7BRNU7.js";import"./chunk-PGNFMKZ2.js";import{a as s}from"./chunk-RNEOVZPM.js";import{a as c}from"./chunk-PHX5FCHV.js";import{a as l}from"./chunk-NEGWVBOQ.js";import"./chunk-PC4EW6I5.js";import"./chunk-UPDDARM3.js";import"./chunk-T6WLK37M.js";import"./chunk-32QNLCVP.js";import"./chunk-YOYLFZYC.js";import"./chunk-H7QHKCAV.js";import{a as p}from"./chunk-UG45AFBI.js";import"./chunk-EHMGACLX.js";import"./chunk-2RH44PPP.js";import"./chunk-G5XWVZT3.js";import{a}from"./chunk-Q3PHNEAA.js";import"./chunk-NHIW2UBE.js";import{a as u}from"./chunk-72GKFUEA.js";import"./chunk-GWIPVJNW.js";import{a as m}from"./chunk-J2L3JEEA.js";import"./chunk-2USWRZRD.js";import"./chunk-DKJOWGGB.js";import"./chunk-ICOZRGVD.js";import"./chunk-ZLS62NPS.js";function o(e){return d({subcmd:"removeskill",skill_id:e})}function i(e){return v({cmd:"profile",subcmd:"removeskill",skill_id:e},"Skill de-activated successfully.")}function f(e){return s(o,i,e)}function h(e,r){r&&r.s&&c("",e.parentNode)}async function x(e,r){if(e){a("profile","doDebuff");let t=m(/d=(?<id>\d{1,3})$/,r.href),n=await f(t);g(n),h(r,n)}else k(r.href)}function D(e){let r=e;return r.tagName==="IMG"&&(b(e),r=r.parentNode),r}function C(e){e.eventPhase===1&&e.stopPropagation()}function E(e,r){if(!r.returnValue)return;let t=D(r.target);t.tagName==="A"&&(C(r),r.preventDefault(),x(e,t))}function I(e,r){let t=l("profileRightColumn");t&&p(t.lastElementChild,u(E,e),r)}export{I as default};
//# sourceMappingURL=debuff-YRSPNHDA.js.map
