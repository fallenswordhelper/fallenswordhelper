import{a as k}from"./chunk-BRCSGVHL.js";import{a as f}from"./chunk-MF3BFDWL.js";import{a as x}from"./chunk-YVPYZHJW.js";import"./chunk-SRSFKD6I.js";import{a as N}from"./chunk-3KOSRNPL.js";import{a as T}from"./chunk-SGIZTIIQ.js";import"./chunk-WHTJ2U55.js";import{a as A}from"./chunk-C7PIQX7O.js";import"./chunk-H6PS5VCQ.js";import{a as d}from"./chunk-5E32VBFN.js";import"./chunk-FIUIIBOQ.js";import{a as b}from"./chunk-YVQ6M3EW.js";import{a as c}from"./chunk-N47W3DMT.js";import"./chunk-MFXNKIYL.js";import"./chunk-2XKKIH7K.js";import"./chunk-JZI3CAHX.js";import"./chunk-L5KUFFVQ.js";import"./chunk-UYGGJ3YF.js";import"./chunk-EE5B6X24.js";import"./chunk-CCHDXXIW.js";import"./chunk-LWLVQTKS.js";import"./chunk-WBTHTD34.js";import{a as e}from"./chunk-FPGEPPZC.js";import"./chunk-IRBVAK7D.js";import"./chunk-PF3P35LS.js";import"./chunk-G34A357Q.js";import{a as w}from"./chunk-DYBFFO7Q.js";import"./chunk-IEAPP6FH.js";import"./chunk-FEFVGSP2.js";import"./chunk-EJENCRJV.js";import"./chunk-IWCA3B2P.js";import{b as s}from"./chunk-EEF6C5L4.js";import"./chunk-SVYRHE6Z.js";import"./chunk-OIO6LGXZ.js";import{T as y,f as h,qa as i,ra as p}from"./chunk-KWAUBU52.js";import{a as C}from"./chunk-TISVYXYU.js";import"./chunk-S3EM322F.js";function a(o){return T({cmd:"composing",...o})}function u(){return a({subcmd:"view"})}function _(o){let{h:t,m,s:r}=b(h,o);return{time_remaining:Number(t)*60*60+Number(m)*60+Number(r)}}function v(o){let t=f("composing-potion",o);if(t.length===0)return{s:!1};let m=t.length,r=f("composing-potion-time",o).map(A).filter(M=>M.endsWith("s")).map(_);return{r:{max_potions:m,potions:r},s:!0}}async function l(){return v(await k({cmd:"composing"}))}function g(){return N(u,l)}var E=`<li class="notification"><a href="${y}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`;function n(){x(d("notifications"),E)}function R(o){return o.time_remaining}function B(){n(),e(i,!0)}function j(o){let t=Math.min.apply(null,o.map(R));t>0?(e(i,!1),e(p,c()+t*1e3)):B()}function I(o){o.potions.length!==o.max_potions?B():j(o.potions)}function L(o){o.s&&I(o.r)}function P(){let o=s(p);o&&c()<o||g().then(L)}function V(){s(i)?n():P()}function $(){C.cmd!=="composing"&&w()&&V()}export{$ as default};
//# sourceMappingURL=injectComposeAlert-KKATITRW.js.map
