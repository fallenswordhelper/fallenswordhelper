import{a as B}from"./chunk-QIBB7RQK.js";import{a as y}from"./chunk-7TRHCIA3.js";import{a as k}from"./chunk-X7QKS5QT.js";import"./chunk-NRLNCZXP.js";import"./chunk-VUEGQZWA.js";import{a as g}from"./chunk-SRJJLYDL.js";import{b as l}from"./chunk-7GWH2CT6.js";import{a}from"./chunk-DA7MQ2AW.js";import"./chunk-UKCKIFDS.js";import{a as o}from"./chunk-LQ3YN2GG.js";import"./chunk-FWZSNZAY.js";import"./chunk-4VG4DFKD.js";import"./chunk-EFYYJBIY.js";import"./chunk-DXTBWQDH.js";import"./chunk-Y25KTRBX.js";import"./chunk-C5OL3C5E.js";import{a as d}from"./chunk-5FY3IDHS.js";import{a as b}from"./chunk-DEEEN4LX.js";import"./chunk-RYN2ZACS.js";import"./chunk-YIUTYHR2.js";import{a as p}from"./chunk-PDKME2CZ.js";import"./chunk-S2QHLOQ6.js";import"./chunk-ZLYAP3OF.js";import{a as c}from"./chunk-W5N63RWR.js";import"./chunk-5P435J5Q.js";import"./chunk-PJBH3ZC7.js";import{a as m}from"./chunk-GHLTWNNP.js";import"./chunk-JLE65JRD.js";import"./chunk-C3WFXZUW.js";import"./chunk-TM6O52J7.js";function n(t){return b({cmd:"buffmarket",...t})}function s(t){return n({subcmd:"buy",id:t})}function i(t){return B({cmd:"buffmarket",subcmd:"buy",id:t},"Request accepted - buffs have automatically been cast.")}function u(t){return g(s,i,t)}async function v(t,r){r.preventDefault(),a('<div class="fshWaiting">Loading...</div>',t);let e=k(new FormData(r.target)),f=await y(e),h=o("#buff-results",f).parentElement.innerHTML;a(h,t)}function x(t){let r=document.forms[0];m(r,"submit",p(v,t.parentNode))}async function w(t){t.stopPropagation();let r=c(/id=(?<id>\d+)/,t.target.getAttribute("onclick"));if(r){let e=t.target.parentNode;e.className="fshActionRow",a('<div class="fshSpin"><span class="fshSpinner"></span></div>',e);let f=await u(r);f.s?a('<span class="fshBuffSuccess">Buffs have been applied</span>',e):a(`<span class="fshBuffFail">${f.e.message}</span>`,e)}}function A(t){t.target.tagName==="INPUT"&&t.target.value==="Buy"&&w(t)}function F(){let t=o("#buff-results");!t||(x(t),d(l(),A,!0))}export{F as default};
//# sourceMappingURL=injectBuffmarket-6BHFL5K3.js.map