import{a as x}from"./chunk-KBRCCBSL.js";import"./chunk-CKN7HU5O.js";import{a as B}from"./chunk-WEN7JPPW.js";import{a as k}from"./chunk-A4SVD2MS.js";import{a as h}from"./chunk-XSBXLWG4.js";import"./chunk-AF6X2EPJ.js";import{a as g}from"./chunk-4VNGVSFE.js";import"./chunk-Z7UI4YWM.js";import"./chunk-GEQ6SBFU.js";import"./chunk-5JOFCACO.js";import{a as i}from"./chunk-HZVS66QI.js";import"./chunk-327LTRO2.js";import"./chunk-27TM5UBE.js";import"./chunk-SY4GQ6JX.js";import"./chunk-THRA3S6L.js";import"./chunk-TM7HV6I4.js";import{a as p}from"./chunk-ACU3ECUK.js";import{b as l}from"./chunk-OHGKEFPZ.js";import{a}from"./chunk-KGBQEEPA.js";import{a as b}from"./chunk-MO5YK3AA.js";import"./chunk-KWZPRQOD.js";import"./chunk-S2DS6Q2Q.js";import{a as m}from"./chunk-DPOGJLEK.js";import{a as d}from"./chunk-JVNW5U7Y.js";import"./chunk-57NIVQFE.js";function n(t){return h({cmd:"buffmarket",...t})}function s(t){return n({subcmd:"buy",id:t})}function u(t){return x({cmd:"buffmarket",subcmd:"buy",id:t},"Request accepted - buffs have automatically been cast.")}function c(t){return k(s,u,t)}async function v(t,r){r.preventDefault(),a('<div class="fshWaiting">Loading...</div>',t);let e=g(new FormData(r.target)),o=await B(e),f=i("#buff-results",o);if(!f)return;let y=f.parentElement.innerHTML;a(y,t)}function w(t){let r=document.forms[0];m(r,"submit",d(v,t.parentNode))}async function F(t){t.stopPropagation();let r=p(/id=(?<id>\d+)/,t.target.getAttribute("onclick"));if(r){let e=t.target.parentNode;e.className="fshActionRow",a('<div class="fshSpin"><span class="fshSpinner"></span></div>',e);let o=await c(r);if(o?.s)a('<span class="fshBuffSuccess">Buffs have been applied</span>',e);else{let f=o?.e?.message??"Failed";a(`<span class="fshBuffFail">${f}</span>`,e)}}}function R(t){t.target.tagName==="INPUT"&&t.target.value==="Buy"&&F(t)}function S(){let t=i("#buff-results");t&&(w(t),b(l(),R,!0))}export{S as default};
//# sourceMappingURL=injectBuffmarket-ZOUF3N4Y.js.map
