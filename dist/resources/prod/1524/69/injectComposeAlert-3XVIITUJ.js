import{a as N}from"./chunk-5BEYKAHU.js";import{a as T}from"./chunk-ZM4ZI6T7.js";import{a as w}from"./chunk-ZX43UBSI.js";import"./chunk-CXVCNN2I.js";import"./chunk-QLTDWVXW.js";import{a as C}from"./chunk-R6RBH5KQ.js";import"./chunk-KOBTSSSS.js";import{a as A}from"./chunk-NMJUS4XE.js";import{a as y}from"./chunk-W4QLHFVR.js";import{a as s}from"./chunk-2XKHMDYT.js";import"./chunk-B3OVUKAM.js";import"./chunk-P2FYCUOG.js";import"./chunk-R2V5M2SX.js";import"./chunk-VUJR46HY.js";import{a as e}from"./chunk-GZKSMROH.js";import"./chunk-2S53WZYG.js";import"./chunk-YFAGS6ZD.js";import{a as d}from"./chunk-QXMVYJN6.js";import"./chunk-C6PSWFF5.js";import"./chunk-KD4PPF2P.js";import"./chunk-L4MPHVE4.js";import{a as x}from"./chunk-C3DMTIKU.js";import"./chunk-REHXFZMP.js";import"./chunk-WYX2VQXF.js";import"./chunk-KYNUAHCU.js";import{a as p}from"./chunk-OMYF6YAB.js";import{b as r}from"./chunk-X53ITBGR.js";import"./chunk-VB2T76EA.js";import"./chunk-B6YTNR7S.js";import"./chunk-HJTXNVMV.js";import"./chunk-2PDPTZUM.js";import{S as h,pa as i,qa as m}from"./chunk-RRAQGRWM.js";import{a as g}from"./chunk-UMFA3PXI.js";function _(o){let t=o.match(/ETA: (\d+)h (\d+)m (\d+)s/);return{time_remaining:Number(t[1])*60*60+Number(t[2])*60+Number(t[3])}}function v(o){let t=A(o),l=p("composing-potion",t);if(l.length===0)return{s:!1};let k=l.length,B=p("composing-potion-time",t).map(C).filter(M=>M.endsWith("s")).map(_);return{r:{max_potions:k,potions:B},s:!0}}function c(){return y({cmd:"composing"}).then(v)}function f(o){return w({cmd:"composing",...o})}function a(){return f({subcmd:"view"})}function u(){return T(a,c)}var j=`<li class="notification"><a href="${h}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`;function n(){N(d("notifications"),j)}function D(o){return o.time_remaining}function b(){n(),e(i,!0)}function E(o){let t=Math.min.apply(null,o.map(D));t>0?(e(i,!1),e(m,s+t*1e3)):b()}function I(o){o.potions.length!==o.max_potions?b():E(o.potions)}function L(o){o.s&&I(o.r)}function P(){let o=r(m);o&&s<o||u().then(L)}function R(){r(i)?n():P()}function V(){g.cmd!=="composing"&&x()&&R()}export{V as default};
//# sourceMappingURL=injectComposeAlert-3XVIITUJ.js.map