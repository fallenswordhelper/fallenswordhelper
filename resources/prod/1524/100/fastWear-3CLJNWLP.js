import{a as w,c as C}from"./chunk-CQSVYJCH.js";import"./chunk-HPXAHGCS.js";import"./chunk-DEHUFNCB.js";import"./chunk-EAP3JV3F.js";import"./chunk-PF4W3I44.js";import{a as W}from"./chunk-PUQJOSBW.js";import"./chunk-BGEIIR32.js";import"./chunk-ZL2QP56C.js";import"./chunk-36F27ADD.js";import"./chunk-VYZW4NXZ.js";import{a as i}from"./chunk-PSUNF7NJ.js";import{a as y}from"./chunk-FRYVBDQF.js";import"./chunk-OYLI32OK.js";import{a as v}from"./chunk-GNKM3FYD.js";import{a as g}from"./chunk-OE36OPV6.js";import{a as m}from"./chunk-CGNOQGJE.js";import"./chunk-VLTGAALF.js";import"./chunk-GVHP23OE.js";import"./chunk-3DBYCCIU.js";import{a as E}from"./chunk-T2VZIH7R.js";import{a}from"./chunk-QGMSNVNO.js";import"./chunk-JBM326AL.js";import"./chunk-AWX7T366.js";import"./chunk-S6W3GI6A.js";import"./chunk-3D277W4L.js";import{a as k}from"./chunk-JUP5RL3F.js";import"./chunk-HEIWEESD.js";import"./chunk-EPLN5MO7.js";import"./chunk-OAFPCVC2.js";import"./chunk-57W4LSPW.js";import"./chunk-NIBRUHHR.js";import"./chunk-FTO2ZBWK.js";import{a as b}from"./chunk-GUMMI6ND.js";import{a as h}from"./chunk-CPWTUMEP.js";import"./chunk-VXJUTFBI.js";import"./chunk-6CCTYJXE.js";import"./chunk-HQEIAMRY.js";import"./chunk-7FBQ4YRA.js";import{a as x}from"./chunk-SMZGZ2UY.js";import{a as N}from"./chunk-M5HK4G4Q.js";import"./chunk-CSUKS4GS.js";import"./chunk-TGZ7LJUR.js";import"./chunk-FTXPWRDQ.js";import{a as s}from"./chunk-PTNJTFVL.js";import"./chunk-W2YYCP36.js";import"./chunk-TSMX3MI2.js";import"./chunk-X5GPKOZG.js";import"./chunk-7V4YID4M.js";import"./chunk-BSKKCHEC.js";import"./chunk-UCDZC42X.js";function A(t,o){let n=t.srcData.findIndex(e=>e.a===o);n!==-1&&t.srcData.splice(n,1)}function B([t,o,n,e,r]){if(r.r!==0){n.remove();return}A(t,e),n.classList.remove("fshSpinner"),E(`<span class="fastWorn">${o}</span>`,n.parentNode)}async function I(t,o,n,e){x("profile",`fastAction - ${e}`);let{target:r}=o,d=r.parentNode.parentNode.children[0].dataset.inv;v("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12";let U=await n(d);B([t,e,r,d,U])}function p(t,o){i("fastWear",o.target)&&I(t,o,w,"Worn"),i("fastUse",o.target)&&I(t,o,C,"Used")}function D(t){return t?"fastUse":"fastWear"}function T(t){return t?"Use":"Wear"}function _(t,o){let n=i("backpackContextMenuUsable",o),e=g({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${D(n)}">${T(n)}</button>`});t.options.checkboxesEnabled&&m(e,o.parentNode.nextElementSibling.nextElementSibling),m(o.parentNode.parentNode,e)}function f(t){N(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(s(_,t))}var c=[],S;function $(t){c.length>0&&c.forEach(o=>o(t))}function L(t){let o=t._showPage;t._showPage=function(e,r){t.tabData&&(o.call(t,e,r),$(t))},S=!0}function l(t,o){c.includes(o)||(S||L(t),b(o)&&c.push(o))}function u(){let t=a("backpack");t.className="fshBackpack",t.removeAttribute("style")}function M(t){u(),l(t,f),k(a("backpack_current")).length!==0&&y(3,f,[t]),h(a("backpackContainer"),s(p,t))}async function P(){let t=await W(a("backpackContainer"),"Backpack","hcs");t&&M(t)}export{P as default};
//# sourceMappingURL=fastWear-3CLJNWLP.js.map
