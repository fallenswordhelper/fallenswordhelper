import{a as B,c as v}from"./chunk-PIKPWLOB.js";import"./chunk-PX5BVOZS.js";import"./chunk-P5UYCCBY.js";import{a as I,b as h}from"./chunk-YDLWYRVZ.js";import"./chunk-LAGOFWF3.js";import{a as g}from"./chunk-3P332KR6.js";import"./chunk-R3QPGR5M.js";import"./chunk-LWPHQG2H.js";import"./chunk-AQKFNZOY.js";import{a as k}from"./chunk-KAHUID7Q.js";import"./chunk-OAQ3GOTA.js";import"./chunk-3M65L4MQ.js";import"./chunk-M5ZN4Z2N.js";import"./chunk-C27IPPK7.js";import"./chunk-6R6RPTTO.js";import"./chunk-UU6HXUOC.js";import"./chunk-4KMRATSZ.js";import{a as m}from"./chunk-BI6EF352.js";import{a as c}from"./chunk-BM4FUEFL.js";import{a as y}from"./chunk-JW2UKJSK.js";import"./chunk-PKECKIP5.js";import"./chunk-BSKCRAT3.js";import"./chunk-MDOXDTXF.js";import"./chunk-JRUXHFF5.js";import"./chunk-KCR5MNHI.js";import"./chunk-FLC7HS56.js";import"./chunk-N3R6MXRE.js";import"./chunk-C3VYBY3D.js";import"./chunk-PX7MLT6T.js";import"./chunk-QPRB5F5E.js";import"./chunk-NOLCAT6N.js";import{a as b}from"./chunk-I7NTXRDN.js";import{a as E}from"./chunk-TO3QNLYY.js";import"./chunk-QHU4ICCH.js";import{a as x}from"./chunk-OOUI3CKV.js";import"./chunk-JROAODNJ.js";import{a as s}from"./chunk-SHVFOAM5.js";import"./chunk-N56IAE2U.js";import{a as d}from"./chunk-O5NIYLDT.js";import"./chunk-EEHLAE3S.js";import"./chunk-ISL3KEXS.js";import{a as u}from"./chunk-FE4PDZXL.js";import"./chunk-VMJ6DXBZ.js";import"./chunk-3PDILZ3R.js";import"./chunk-3WAX2TNR.js";import"./chunk-4P4O4YGO.js";import"./chunk-KTAAKVTB.js";import{a as r}from"./chunk-RH5336H4.js";function C(t,e){let o=t.srcData.findIndex(n=>n.a===e);o!==-1&&t.srcData.splice(o,1)}function N([t,e,o,n],a){if(a.r!==0){o.remove();return}C(t,n),o.classList.remove("fshSpinner"),b(`<span class="fastWorn">${e}</span>`,o.parentNode)}function W(t,e,o,n){x("profile",`fastAction - ${n}`);let{target:a}=e,l=a.parentNode.parentNode.children[0].dataset.inv;g("",a),a.blur(),a.className="fastAction fshBl fshSpinner fshSpinner12",o(l).then(r(N,[t,n,a,l]))}function f(t,e){m("fastWear",e.target)&&W(t,e,B,"Worn"),m("fastUse",e.target)&&W(t,e,v,"Used")}function T(t){return t?"fastUse":"fastWear"}function A(t){return t?"Use":"Wear"}function S(t,e){let o=m("backpackContextMenuUsable",e),n=y({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${T(o)}">${A(o)}</button>`});t.options.checkboxesEnabled&&c(n,e.parentNode.nextElementSibling.nextElementSibling),c(e.parentNode.parentNode,n)}function i(t){d(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(r(S,t))}function p(){let t=s("backpack");t.className="fshBackpack",t.removeAttribute("style")}function U(t){p(),h(t,i),u(s("backpack_current")).length!==0&&k(3,i,[t]),E(s("backpackContainer"),r(f,t))}function D(){let t=I();t&&U(t)}export{D as default};
//# sourceMappingURL=fastWear-MWOY2JUX.js.map
