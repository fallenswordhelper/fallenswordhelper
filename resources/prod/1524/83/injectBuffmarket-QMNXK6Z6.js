import{a as B}from"./chunk-I2OI7NMK.js";import{a as y}from"./chunk-FLHETUE6.js";import{a as k}from"./chunk-MWVD7HRM.js";import"./chunk-I36YHSHC.js";import"./chunk-P5GG6BBU.js";import{a as g}from"./chunk-XYV3WFPP.js";import{b as l}from"./chunk-DA5WSKUB.js";import{a}from"./chunk-2U7PEDGC.js";import"./chunk-SDVU75NC.js";import{a as o}from"./chunk-FIS7ZMBK.js";import"./chunk-GOGSW6S4.js";import"./chunk-6Z43IAS3.js";import"./chunk-FQRLW5RO.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import"./chunk-VGN4AH67.js";import{a as d}from"./chunk-36R4KBE3.js";import{a as b}from"./chunk-R46NFNRI.js";import"./chunk-5IIEF6F7.js";import"./chunk-2H46HLMH.js";import{a as p}from"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import{a as c}from"./chunk-6IDEFJE7.js";import"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import{a as m}from"./chunk-NIRCQTAI.js";import"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";function n(t){return b({cmd:"buffmarket",...t})}function s(t){return n({subcmd:"buy",id:t})}function i(t){return B({cmd:"buffmarket",subcmd:"buy",id:t},"Request accepted - buffs have automatically been cast.")}function u(t){return g(s,i,t)}async function v(t,r){r.preventDefault(),a('<div class="fshWaiting">Loading...</div>',t);let e=k(new FormData(r.target)),f=await y(e),h=o("#buff-results",f).parentElement.innerHTML;a(h,t)}function x(t){let r=document.forms[0];m(r,"submit",p(v,t.parentNode))}async function w(t){t.stopPropagation();let r=c(/id=(?<id>\d+)/,t.target.getAttribute("onclick"));if(r){let e=t.target.parentNode;e.className="fshActionRow",a('<div class="fshSpin"><span class="fshSpinner"></span></div>',e);let f=await u(r);f.s?a('<span class="fshBuffSuccess">Buffs have been applied</span>',e):a(`<span class="fshBuffFail">${f.e.message}</span>`,e)}}function A(t){t.target.tagName==="INPUT"&&t.target.value==="Buy"&&w(t)}function F(){let t=o("#buff-results");!t||(x(t),d(l(),A,!0))}export{F as default};
//# sourceMappingURL=injectBuffmarket-QMNXK6Z6.js.map
