import{a as N}from"./chunk-GX3GXQEA.js";import{a as T}from"./chunk-OU75PILE.js";import{a as w}from"./chunk-63VD2FSJ.js";import"./chunk-W4Y6JSA7.js";import"./chunk-YVHPAUAO.js";import{a as C}from"./chunk-YV7FRZPB.js";import"./chunk-JRMPLNFZ.js";import{a as A}from"./chunk-UC3GAOGO.js";import{a as y}from"./chunk-6FENTVGJ.js";import{a as s}from"./chunk-RYNTZHML.js";import"./chunk-DPMIXN5L.js";import"./chunk-BH2HHYW5.js";import"./chunk-N4QHNM2E.js";import"./chunk-RNWAALFB.js";import{a as e}from"./chunk-ZGDP3UEU.js";import"./chunk-HQE3XUSR.js";import"./chunk-VPVOZ3TL.js";import{a as d}from"./chunk-T5HQ7FPX.js";import"./chunk-SON5T5EI.js";import"./chunk-CQJA6XZZ.js";import"./chunk-J55DBM2B.js";import{a as x}from"./chunk-VQ4XLJED.js";import"./chunk-LTD25OUX.js";import"./chunk-YXCGOJCF.js";import"./chunk-GQZRPO65.js";import{a as p}from"./chunk-T2BL2V55.js";import{b as r}from"./chunk-IRX7VNA6.js";import"./chunk-ZOSLBUG4.js";import"./chunk-INHQR3KU.js";import"./chunk-6DZWFVI7.js";import"./chunk-O5WVQXEQ.js";import{S as h,pa as i,qa as m}from"./chunk-KIM4IHFF.js";import{a as g}from"./chunk-AQ577ZPT.js";function _(o){let t=o.match(/ETA: (\d+)h (\d+)m (\d+)s/);return{time_remaining:Number(t[1])*60*60+Number(t[2])*60+Number(t[3])}}function v(o){let t=A(o),l=p("composing-potion",t);if(l.length===0)return{s:!1};let k=l.length,B=p("composing-potion-time",t).map(C).filter(M=>M.endsWith("s")).map(_);return{r:{max_potions:k,potions:B},s:!0}}function c(){return y({cmd:"composing"}).then(v)}function f(o){return w({cmd:"composing",...o})}function a(){return f({subcmd:"view"})}function u(){return T(a,c)}var j=`<li class="notification"><a href="${h}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`;function n(){N(d("notifications"),j)}function D(o){return o.time_remaining}function b(){n(),e(i,!0)}function E(o){let t=Math.min.apply(null,o.map(D));t>0?(e(i,!1),e(m,s+t*1e3)):b()}function I(o){o.potions.length!==o.max_potions?b():E(o.potions)}function L(o){o.s&&I(o.r)}function P(){let o=r(m);o&&s<o||u().then(L)}function R(){r(i)?n():P()}function V(){g.cmd!=="composing"&&x()&&R()}export{V as default};
//# sourceMappingURL=injectComposeAlert-OJ7P2WSO.js.map
