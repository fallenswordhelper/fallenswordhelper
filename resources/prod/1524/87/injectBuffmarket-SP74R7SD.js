import{a as B}from"./chunk-MVTVVARV.js";import{a as y}from"./chunk-SRMMLJJT.js";import{a as k}from"./chunk-P22CMH2I.js";import"./chunk-43IIXBTH.js";import"./chunk-XX7WHGVW.js";import{a as g}from"./chunk-XTPTGBYD.js";import{b as l}from"./chunk-7IL2NT5X.js";import{a}from"./chunk-SEKR7T2X.js";import"./chunk-RUTCT63I.js";import{a as o}from"./chunk-2POZNSQU.js";import"./chunk-EFGLR5DP.js";import"./chunk-NDAPZI4R.js";import"./chunk-72GM4P2D.js";import"./chunk-DU2KGPGN.js";import"./chunk-DOS2ACQD.js";import"./chunk-IJW3CVBP.js";import{a as d}from"./chunk-GGIYRCID.js";import{a as b}from"./chunk-SAUO3OVM.js";import"./chunk-KZ2YKRLF.js";import"./chunk-LZ2PTAAG.js";import{a as p}from"./chunk-WHGJMHBD.js";import"./chunk-RQPMUZUE.js";import"./chunk-GOCBTIV4.js";import{a as c}from"./chunk-X5TUSOWA.js";import"./chunk-XS3HTUXF.js";import"./chunk-EUYWEXMV.js";import{a as m}from"./chunk-QZKP2GOA.js";import"./chunk-WXWB6HVS.js";import"./chunk-G66VZ6GW.js";import"./chunk-MAXAIYB2.js";function n(t){return b({cmd:"buffmarket",...t})}function s(t){return n({subcmd:"buy",id:t})}function i(t){return B({cmd:"buffmarket",subcmd:"buy",id:t},"Request accepted - buffs have automatically been cast.")}function u(t){return g(s,i,t)}async function v(t,r){r.preventDefault(),a('<div class="fshWaiting">Loading...</div>',t);let e=k(new FormData(r.target)),f=await y(e),h=o("#buff-results",f).parentElement.innerHTML;a(h,t)}function x(t){let r=document.forms[0];m(r,"submit",p(v,t.parentNode))}async function w(t){t.stopPropagation();let r=c(/id=(?<id>\d+)/,t.target.getAttribute("onclick"));if(r){let e=t.target.parentNode;e.className="fshActionRow",a('<div class="fshSpin"><span class="fshSpinner"></span></div>',e);let f=await u(r);f.s?a('<span class="fshBuffSuccess">Buffs have been applied</span>',e):a(`<span class="fshBuffFail">${f.e.message}</span>`,e)}}function A(t){t.target.tagName==="INPUT"&&t.target.value==="Buy"&&w(t)}function F(){let t=o("#buff-results");!t||(x(t),d(l(),A,!0))}export{F as default};
//# sourceMappingURL=injectBuffmarket-SP74R7SD.js.map
