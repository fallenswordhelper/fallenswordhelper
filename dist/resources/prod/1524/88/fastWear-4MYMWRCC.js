import{a as C,c as I}from"./chunk-XFDVIMUQ.js";import"./chunk-HTZ7JNTZ.js";import"./chunk-OODHIOJX.js";import"./chunk-TECORI6J.js";import"./chunk-LDUMXP6V.js";import{a as W}from"./chunk-ZMOVN4ND.js";import"./chunk-DBGON5DJ.js";import"./chunk-NRLNCZXP.js";import"./chunk-VUEGQZWA.js";import"./chunk-SRJJLYDL.js";import{a as s}from"./chunk-VO3KFTFM.js";import{a as x}from"./chunk-P4BHCUK7.js";import"./chunk-5SHHX74D.js";import{a as v}from"./chunk-WUZW3TCZ.js";import{a as g}from"./chunk-UISE34LJ.js";import{a as m}from"./chunk-RPUEVZVZ.js";import"./chunk-TSPN45E2.js";import"./chunk-F4ALFBQ7.js";import"./chunk-R2MNZZS7.js";import{a as E}from"./chunk-DA7MQ2AW.js";import{a}from"./chunk-UKCKIFDS.js";import"./chunk-CBGKHJZW.js";import"./chunk-FWZSNZAY.js";import"./chunk-4VG4DFKD.js";import"./chunk-EFYYJBIY.js";import{a as k}from"./chunk-DUL3ONJJ.js";import"./chunk-DXTBWQDH.js";import"./chunk-Y25KTRBX.js";import"./chunk-C5OL3C5E.js";import"./chunk-IPM72WAR.js";import{a as b}from"./chunk-YDFKUGEP.js";import{a as h}from"./chunk-5FY3IDHS.js";import"./chunk-DEEEN4LX.js";import"./chunk-RYN2ZACS.js";import{a as y}from"./chunk-JHXBLTXS.js";import{a as N}from"./chunk-4QZL53LG.js";import"./chunk-OV3YZUE5.js";import"./chunk-DPQVBB2M.js";import"./chunk-YIUTYHR2.js";import{a as i}from"./chunk-PDKME2CZ.js";import"./chunk-S2QHLOQ6.js";import"./chunk-ZLYAP3OF.js";import"./chunk-W5N63RWR.js";import"./chunk-5P435J5Q.js";import"./chunk-PJBH3ZC7.js";import"./chunk-GHLTWNNP.js";import"./chunk-JLE65JRD.js";import"./chunk-C3WFXZUW.js";import"./chunk-TM6O52J7.js";function U(t,o){let e=t.srcData.findIndex(n=>n.a===o);e!==-1&&t.srcData.splice(e,1)}function A([t,o,e,n],r){if(r.r!==0){e.remove();return}U(t,n),e.classList.remove("fshSpinner"),E(`<span class="fastWorn">${o}</span>`,e.parentNode)}function w(t,o,e,n){y("profile",`fastAction - ${n}`);let{target:r}=o,d=r.parentNode.parentNode.children[0].dataset.inv;v("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",e(d).then(i(A,[t,n,r,d]))}function p(t,o){s("fastWear",o.target)&&w(t,o,C,"Worn"),s("fastUse",o.target)&&w(t,o,I,"Used")}function B(t){return t?"fastUse":"fastWear"}function D(t){return t?"Use":"Wear"}function T(t,o){let e=s("backpackContextMenuUsable",o),n=g({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${B(e)}">${D(e)}</button>`});t.options.checkboxesEnabled&&m(n,o.parentNode.nextElementSibling.nextElementSibling),m(o.parentNode.parentNode,n)}function f(t){N(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(i(T,t))}var c=[],S;function _(t){c.length>0&&c.forEach(o=>o(t))}function $(t){let o=t._showPage;t._showPage=function(n,r){!t.tabData||(o.call(t,n,r),_(t))},S=!0}function l(t,o){c.includes(o)||(S||$(t),b(o)&&c.push(o))}function u(){let t=a("backpack");t.className="fshBackpack",t.removeAttribute("style")}function L(t){u(),l(t,f),k(a("backpack_current")).length!==0&&x(3,f,[t]),h(a("backpackContainer"),i(p,t))}async function M(){let t=await W(a("backpackContainer"),"Backpack");t&&L(t)}export{M as default};
//# sourceMappingURL=fastWear-4MYMWRCC.js.map
