import{a as I,c as W}from"./chunk-YLPP4XGD.js";import"./chunk-F56D37LN.js";import"./chunk-LJADHMCS.js";import"./chunk-H3UI3CHJ.js";import{a as s}from"./chunk-BDFQCMKF.js";import{a as h}from"./chunk-4EPHHB5V.js";import"./chunk-OGZ2LKXW.js";import"./chunk-NQGCF6DA.js";import"./chunk-F2ZF3AQV.js";import"./chunk-SBKSJG7Z.js";import"./chunk-WKDTOFNZ.js";import{a as y}from"./chunk-X5DGSHWJ.js";import"./chunk-ARZE2BDD.js";import"./chunk-MKW45GOR.js";import"./chunk-OELRUWUL.js";import{a as C}from"./chunk-PJKEYPE3.js";import{a as E}from"./chunk-IEZDQOE5.js";import{a as m}from"./chunk-KHQZO2PT.js";import"./chunk-WMUUSPIG.js";import"./chunk-DG3IU753.js";import{a as B}from"./chunk-VIE5ZNPH.js";import"./chunk-OKCEI7IO.js";import{a as N}from"./chunk-ZIYY5ALA.js";import{a as i}from"./chunk-CF6OUIZ5.js";import"./chunk-DKRMOVVB.js";import{a as x}from"./chunk-RVROEHXL.js";import"./chunk-EPL4X55B.js";import"./chunk-C6UQ3IWD.js";import"./chunk-RY6SJUY2.js";import"./chunk-F5F7ZRBL.js";import"./chunk-4LPHXEVA.js";import"./chunk-C6CNCMW2.js";import"./chunk-RLPGZCX6.js";import"./chunk-6TE7Y3DR.js";import{a}from"./chunk-SOFFOM3C.js";import"./chunk-C56KTMKY.js";import{a as g}from"./chunk-2DIHMK5L.js";import"./chunk-PRUVPLE4.js";import"./chunk-YVFHCM2A.js";import"./chunk-3WYYB24O.js";import{a as v}from"./chunk-Q4WEZP4Z.js";import"./chunk-SYO7WFPA.js";import"./chunk-FNQX6KHV.js";import"./chunk-SARQWG4K.js";import"./chunk-7Q74Q23I.js";import"./chunk-B3OIOQDS.js";import"./chunk-7X7SMYZT.js";function A(t,o){let e=t.srcData.findIndex(n=>n.a===o);e!==-1&&t.srcData.splice(e,1)}function D([t,o,e,n],r){if(r.r!==0){e.remove();return}A(t,n),e.classList.remove("fshSpinner"),N(`<span class="fastWorn">${o}</span>`,e.parentNode)}function S(t,o,e,n){y("profile",`fastAction - ${n}`);let{target:r}=o,b=r.parentNode.parentNode.children[0].dataset.inv;C("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",e(b).then(a(D,[t,n,r,b]))}function p(t,o){s("fastWear",o.target)&&S(t,o,I,"Worn"),s("fastUse",o.target)&&S(t,o,W,"Used")}function T(t){return t?"fastUse":"fastWear"}function _(t){return t?"Use":"Wear"}function w(t,o){let e=s("backpackContextMenuUsable",o),n=E({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${T(e)}">${_(e)}</button>`});t.options.checkboxesEnabled&&m(n,o.parentNode.nextElementSibling.nextElementSibling),m(o.parentNode.parentNode,n)}function f(t){B(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(a(w,t))}var l;function u(){return l||(l=$("#backpackContainer").data("hcsBackpack")),l}var c=[],U;function L(t){c.length>0&&c.forEach(o=>o(t))}function M(t){let o=t._showPage;t._showPage=function(n,r){!t.tabData||(o.call(t,n,r),L(t))},U=!0}function k(t,o){c.includes(o)||(U||M(t),g(o)&&c.push(o))}function d(){let t=i("backpack");t.className="fshBackpack",t.removeAttribute("style")}function P(t){d(),k(t,f),x(i("backpack_current")).length!==0&&h(3,f,[t]),v(i("backpackContainer"),a(p,t))}function q(){let t=u();t&&P(t)}export{q as default};
//# sourceMappingURL=fastWear-FDJXWVOW.js.map
