import{a as k}from"./chunk-XKS64HWQ.js";import{a as b}from"./chunk-3YHDDTO4.js";import{a as f}from"./chunk-5ZB7VX3F.js";import{a as x}from"./chunk-TV6FJZ73.js";import"./chunk-GC3BBNBK.js";import{a as A}from"./chunk-EACXRABJ.js";import"./chunk-KWW5TFWI.js";import{a as d}from"./chunk-ZOM4M5CL.js";import"./chunk-AOLVAW2H.js";import{a as T}from"./chunk-RBEY7UOL.js";import"./chunk-KPBHOIFO.js";import"./chunk-ZG3H6FNG.js";import"./chunk-COFS3IJQ.js";import"./chunk-X4QNMHIE.js";import"./chunk-X7VSJFUB.js";import"./chunk-RDJGNWAB.js";import"./chunk-7IZ75EHU.js";import{a as e}from"./chunk-SGZWLSNX.js";import"./chunk-AOINEH4F.js";import{a as w}from"./chunk-JIDPN5FO.js";import"./chunk-ZXM2QLUQ.js";import{a as N}from"./chunk-LZRXEQDU.js";import"./chunk-LB3PYE2H.js";import{a as c}from"./chunk-UCD3C27V.js";import"./chunk-2WBVUEHT.js";import"./chunk-FXTQ547Y.js";import"./chunk-7IR54LMC.js";import"./chunk-P2XVC4S5.js";import"./chunk-JWWQOZPD.js";import"./chunk-ZOQAMPPO.js";import"./chunk-SGC5GHRN.js";import{b as s}from"./chunk-2I26BJ52.js";import"./chunk-QMYGD3GE.js";import"./chunk-X4CA4ODK.js";import{T as y,f as h,qa as i,ra as p}from"./chunk-6MEG5PHL.js";import"./chunk-Q6PVLDNZ.js";import{a as C}from"./chunk-VVJVMGW6.js";function a(o){return N({cmd:"composing",...o})}function u(){return a({subcmd:"view"})}function _(o){let{h:t,m,s:r}=T(h,o);return{time_remaining:Number(t)*60*60+Number(m)*60+Number(r)}}function v(o){let t=f("composing-potion",o);if(t.length===0)return{s:!1};let m=t.length,r=f("composing-potion-time",o).map(A).filter(M=>M.endsWith("s")).map(_);return{r:{max_potions:m,potions:r},s:!0}}async function l(){return v(await k({cmd:"composing"}))}function g(){return b(u,l)}var E=`<li class="notification"><a href="${y}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`;function n(){x(d("notifications"),E)}function R(o){return o.time_remaining}function B(){n(),e(i,!0)}function j(o){let t=Math.min.apply(null,o.map(R));t>0?(e(i,!1),e(p,c()+t*1e3)):B()}function I(o){o.potions.length!==o.max_potions?B():j(o.potions)}function L(o){o.s&&I(o.r)}function P(){let o=s(p);o&&c()<o||g().then(L)}function V(){s(i)?n():P()}function $(){C.cmd!=="composing"&&w()&&V()}export{$ as default};
//# sourceMappingURL=injectComposeAlert-HV2CQOCB.js.map
