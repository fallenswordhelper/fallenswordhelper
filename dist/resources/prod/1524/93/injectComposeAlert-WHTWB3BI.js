import{a as k}from"./chunk-HK3FJNIM.js";import{a as b}from"./chunk-SDADCBWU.js";import{a as f}from"./chunk-MX5TZ7HK.js";import{a as x}from"./chunk-DEEYYK6E.js";import"./chunk-E6TZ5ETX.js";import{a as A}from"./chunk-ATELUZSH.js";import"./chunk-GOQRAVSB.js";import{a as d}from"./chunk-5HI4ILOP.js";import"./chunk-7Z2VPPBD.js";import{a as T}from"./chunk-EGS4CZL3.js";import"./chunk-L4JCGVZD.js";import"./chunk-R5QRYD7G.js";import"./chunk-RDAHQVBW.js";import"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import{a as e}from"./chunk-66FBRD7Z.js";import"./chunk-GKVMJ4PA.js";import{a as w}from"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as N}from"./chunk-XM37SDUA.js";import"./chunk-MBZ7GUCJ.js";import{a as c}from"./chunk-WFI3HTBS.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import"./chunk-5L4CLVOL.js";import"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import{b as s}from"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{T as y,f as h,qa as i,ra as p}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import{a as C}from"./chunk-3WE6KSRQ.js";function a(o){return N({cmd:"composing",...o})}function u(){return a({subcmd:"view"})}function _(o){let{h:t,m,s:r}=T(h,o);return{time_remaining:Number(t)*60*60+Number(m)*60+Number(r)}}function v(o){let t=f("composing-potion",o);if(t.length===0)return{s:!1};let m=t.length,r=f("composing-potion-time",o).map(A).filter(M=>M.endsWith("s")).map(_);return{r:{max_potions:m,potions:r},s:!0}}async function l(){return v(await k({cmd:"composing"}))}function g(){return b(u,l)}var E=`<li class="notification"><a href="${y}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`;function n(){x(d("notifications"),E)}function R(o){return o.time_remaining}function B(){n(),e(i,!0)}function j(o){let t=Math.min.apply(null,o.map(R));t>0?(e(i,!1),e(p,c()+t*1e3)):B()}function I(o){o.potions.length!==o.max_potions?B():j(o.potions)}function L(o){o.s&&I(o.r)}function P(){let o=s(p);o&&c()<o||g().then(L)}function V(){s(i)?n():P()}function $(){C.cmd!=="composing"&&w()&&V()}export{$ as default};
//# sourceMappingURL=injectComposeAlert-WHTWB3BI.js.map
