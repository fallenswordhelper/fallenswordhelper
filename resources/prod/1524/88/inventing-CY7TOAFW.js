import{a as E}from"./chunk-64O5JAR2.js";import{a as S}from"./chunk-Y7GWXKP5.js";import{a as C}from"./chunk-3B6P7YP4.js";import"./chunk-VIJWFUGH.js";import"./chunk-O2HKBJHO.js";import{a as A}from"./chunk-LGOCL6DR.js";import{a as y}from"./chunk-MZHP5U3U.js";import{a as M}from"./chunk-57T6XYZO.js";import"./chunk-IJJZ4KIO.js";import{a as _}from"./chunk-NRLNCZXP.js";import"./chunk-VUEGQZWA.js";import{a as R}from"./chunk-SRJJLYDL.js";import"./chunk-S5RSLOGD.js";import{a as l}from"./chunk-WFHVT5IA.js";import{a as p}from"./chunk-VUSAQDTJ.js";import"./chunk-QP2MBTPU.js";import"./chunk-RPUEVZVZ.js";import"./chunk-TSPN45E2.js";import{a as v,b as g}from"./chunk-DCCKDAHB.js";import{d as b}from"./chunk-NHMHPE54.js";import"./chunk-WKWFDERC.js";import"./chunk-UKCKIFDS.js";import"./chunk-KGVYRXED.js";import"./chunk-CBGKHJZW.js";import{a as m}from"./chunk-LQ3YN2GG.js";import"./chunk-FWZSNZAY.js";import{a as x}from"./chunk-4VG4DFKD.js";import"./chunk-EFYYJBIY.js";import"./chunk-DXTBWQDH.js";import"./chunk-Y25KTRBX.js";import"./chunk-C5OL3C5E.js";import{a as h}from"./chunk-OUAWI7GT.js";import"./chunk-CEGFUXSK.js";import"./chunk-5UHNJGH2.js";import"./chunk-ZYLGT2XQ.js";import"./chunk-DEEEN4LX.js";import"./chunk-RYN2ZACS.js";import{a as u}from"./chunk-JHXBLTXS.js";import"./chunk-DPQVBB2M.js";import"./chunk-YIUTYHR2.js";import"./chunk-HM2JVXT6.js";import"./chunk-PDKME2CZ.js";import"./chunk-S2QHLOQ6.js";import"./chunk-ZLYAP3OF.js";import"./chunk-W5N63RWR.js";import{b as d}from"./chunk-5P435J5Q.js";import"./chunk-PJBH3ZC7.js";import{a as c}from"./chunk-GHLTWNNP.js";import"./chunk-JLE65JRD.js";import"./chunk-C3WFXZUW.js";import"./chunk-TM6O52J7.js";function f(e,t){return E({subcmd:"domoverecipes",target_folder_id:e,recipe_selected:t})}function N(e,t){let r=_(e);return r===t?{s:!0}:{s:!1,e:{message:r}}}async function a(e,t){let r=await x({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e});return N(r,"Selected recipes have been moved to the target folder.")}function s(e,t){return R(f,a,e,t)}var i="ajaxifyMoveRecipe",n=0;function k(){n=!n,h(i,n)}var H=[[g(i),k]];function I(e){p(e.parentNode,`&nbsp;&nbsp;${b(i)}`),c(e.parentNode,"change",v(H))}function F(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),y(M({className:"fshSpinner fshSpinner12"}),e)}function L(e){let t=A(e);t.nextElementSibling.remove(),t.remove()}function P(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}function w(e,t){t.s?e.forEach(L):(S(t.e.message),e.forEach(P))}async function B(e,t){u("inventing","Move recipes by AJAX"),t.forEach(F);let r=await s(e,t.map(o=>Number(o.value)));w(t,r)}function D(e,t){let r=e["recipe_selected[]"];if(!r)return;let o=C(r).filter(j=>j.checked);o.length&&B(t,o)}function V(){let e=m('#pCC img[src*="/folder_on."]').parentNode.href;return l(e,"folder_id")}function $(e){if(!n)return;e.preventDefault();let t=V(),{elements:r}=e.target,o=r.target_folder_id.value;t!==o&&D(r,o)}function q(){let e=m('input[value="Move Recipes"]');I(e),n=d(i),c(e.form,"submit",$)}export{q as default};
//# sourceMappingURL=inventing-CY7TOAFW.js.map
