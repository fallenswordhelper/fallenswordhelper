import{a as g,c as v}from"./chunk-F24AEWPC.js";import"./chunk-K7DYQXUX.js";import"./chunk-L4BSLZ3U.js";import"./chunk-7GAPHNBH.js";import{a as h,b as I}from"./chunk-75KYA3CN.js";import{a as B}from"./chunk-GVLE3LCU.js";import"./chunk-YYZHVDZH.js";import"./chunk-VI3RZM5G.js";import"./chunk-WV4YXE4F.js";import{a as k}from"./chunk-6HK7Y3PF.js";import"./chunk-22YAZV3W.js";import"./chunk-WBUJCSKW.js";import"./chunk-ND3XCMOS.js";import"./chunk-74YALW75.js";import"./chunk-WPRJK6Q2.js";import"./chunk-PJ32ASZ7.js";import"./chunk-F5QOVYT2.js";import{a as m}from"./chunk-CT4SVZHO.js";import{a as c}from"./chunk-R5ZZQ5HH.js";import{a as x}from"./chunk-XQ3ZEJ26.js";import"./chunk-PO34EML4.js";import"./chunk-QFSH2B2J.js";import"./chunk-2PFHY365.js";import"./chunk-YABTPUUA.js";import"./chunk-QVQPQPMX.js";import"./chunk-ZDFDMUO4.js";import"./chunk-2V5OQ7JE.js";import"./chunk-V6CXAOJZ.js";import"./chunk-GGKSIQST.js";import"./chunk-JSWEJZHY.js";import"./chunk-JZLUF437.js";import{a as b}from"./chunk-4OJTKSB2.js";import{a as E}from"./chunk-G3O526VI.js";import"./chunk-GHQYBWLT.js";import{a as y}from"./chunk-N2KVYLIG.js";import"./chunk-PKDG64MH.js";import{a as s}from"./chunk-2B42SRXB.js";import"./chunk-3IGXKFMQ.js";import{a as d}from"./chunk-GLHEJYH7.js";import"./chunk-EPYDL6MF.js";import"./chunk-TDNJGM62.js";import{a as u}from"./chunk-TP7JP7VV.js";import"./chunk-HAINOYE5.js";import"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import"./chunk-YNXRNCRL.js";import"./chunk-7DPOBF7C.js";import{a as r}from"./chunk-DEDCEYVR.js";function C(t,e){let o=t.srcData.findIndex(n=>n.a===e);o!==-1&&t.srcData.splice(o,1)}function N([t,e,o,n],a){if(a.r!==0){o.remove();return}C(t,n),o.classList.remove("fshSpinner"),b(`<span class="fastWorn">${e}</span>`,o.parentNode)}function W(t,e,o,n){y("profile",`fastAction - ${n}`);let{target:a}=e,l=a.parentNode.parentNode.children[0].dataset.inv;B("",a),a.blur(),a.className="fastAction fshBl fshSpinner fshSpinner12",o(l).then(r(N,[t,n,a,l]))}function f(t,e){m("fastWear",e.target)&&W(t,e,g,"Worn"),m("fastUse",e.target)&&W(t,e,v,"Used")}function T(t){return t?"fastUse":"fastWear"}function A(t){return t?"Use":"Wear"}function S(t,e){let o=m("backpackContextMenuUsable",e),n=x({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${T(o)}">${A(o)}</button>`});t.options.checkboxesEnabled&&c(n,e.parentNode.nextElementSibling.nextElementSibling),c(e.parentNode.parentNode,n)}function i(t){d(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(r(S,t))}function p(){let t=s("backpack");t.className="fshBackpack",t.removeAttribute("style")}function U(t){p(),I(t,i),u(s("backpack_current")).length!==0&&k(3,i,[t]),E(s("backpackContainer"),r(f,t))}function D(){let t=h();t&&U(t)}export{D as default};
//# sourceMappingURL=fastWear-PC5EIWJ3.js.map