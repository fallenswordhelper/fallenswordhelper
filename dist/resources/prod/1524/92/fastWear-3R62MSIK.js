import{a as C,c as I}from"./chunk-KNGAOMUH.js";import"./chunk-PKW4E7TS.js";import"./chunk-SSUSN6JO.js";import"./chunk-A2I533SU.js";import"./chunk-MU3IVMZR.js";import{a as W}from"./chunk-CEUXHQ2S.js";import"./chunk-CVV446CT.js";import"./chunk-4U7T7HTS.js";import"./chunk-EVIGSOCH.js";import"./chunk-ZK3AGOF2.js";import{a as s}from"./chunk-GQTCWOPY.js";import{a as x}from"./chunk-NTTJB2O5.js";import"./chunk-WRHTWSD6.js";import{a as v}from"./chunk-A77NZCEP.js";import{a as g}from"./chunk-NJN6T7TI.js";import{a as m}from"./chunk-4NGCZM3S.js";import"./chunk-AOZMZP5H.js";import"./chunk-MB2DX4ZC.js";import"./chunk-VT3LH7JR.js";import{a as E}from"./chunk-5KGM3LZY.js";import{a}from"./chunk-DI3XCMNE.js";import"./chunk-33GAZWWN.js";import"./chunk-WCTHIQU3.js";import"./chunk-WA4H3QPQ.js";import"./chunk-DKWH62CP.js";import{a as k}from"./chunk-2IOAHVVN.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import"./chunk-WE2GCAKX.js";import"./chunk-TKVEOBDL.js";import"./chunk-3V3LTFJF.js";import{a as b}from"./chunk-IQ37ZVMO.js";import{a as h}from"./chunk-DGZXYCCD.js";import"./chunk-OI7KRNQS.js";import"./chunk-C7L2X63R.js";import{a as y}from"./chunk-WTCWPEJX.js";import{a as N}from"./chunk-H2ANYIFW.js";import"./chunk-KUIVOAMB.js";import"./chunk-O6E23IRT.js";import"./chunk-TLAXHTSP.js";import{a as i}from"./chunk-RUEPLNRL.js";import"./chunk-O7K3SHEW.js";import"./chunk-EZQ2GDBH.js";import"./chunk-GVTRKM2F.js";import"./chunk-EZ536MXS.js";import"./chunk-LVBWHS3E.js";import"./chunk-OR37OWF3.js";import"./chunk-FQGZN2JL.js";import"./chunk-BYAZQWO5.js";import"./chunk-MR322WHU.js";function U(t,o){let e=t.srcData.findIndex(n=>n.a===o);e!==-1&&t.srcData.splice(e,1)}function A([t,o,e,n],r){if(r.r!==0){e.remove();return}U(t,n),e.classList.remove("fshSpinner"),E(`<span class="fastWorn">${o}</span>`,e.parentNode)}function w(t,o,e,n){y("profile",`fastAction - ${n}`);let{target:r}=o,d=r.parentNode.parentNode.children[0].dataset.inv;v("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",e(d).then(i(A,[t,n,r,d]))}function p(t,o){s("fastWear",o.target)&&w(t,o,C,"Worn"),s("fastUse",o.target)&&w(t,o,I,"Used")}function B(t){return t?"fastUse":"fastWear"}function D(t){return t?"Use":"Wear"}function T(t,o){let e=s("backpackContextMenuUsable",o),n=g({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${B(e)}">${D(e)}</button>`});t.options.checkboxesEnabled&&m(n,o.parentNode.nextElementSibling.nextElementSibling),m(o.parentNode.parentNode,n)}function f(t){N(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(i(T,t))}var c=[],S;function _(t){c.length>0&&c.forEach(o=>o(t))}function $(t){let o=t._showPage;t._showPage=function(n,r){!t.tabData||(o.call(t,n,r),_(t))},S=!0}function l(t,o){c.includes(o)||(S||$(t),b(o)&&c.push(o))}function u(){let t=a("backpack");t.className="fshBackpack",t.removeAttribute("style")}function L(t){u(),l(t,f),k(a("backpack_current")).length!==0&&x(3,f,[t]),h(a("backpackContainer"),i(p,t))}async function M(){let t=await W(a("backpackContainer"),"Backpack");t&&L(t)}export{M as default};
//# sourceMappingURL=fastWear-3R62MSIK.js.map