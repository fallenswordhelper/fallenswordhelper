import{a as L}from"./chunk-7Q756JQD.js";import{a as i,b as U,c as l,d as y}from"./chunk-OQLO6X5H.js";import"./chunk-IQBEXZ2P.js";import{a as B}from"./chunk-74IMYOWE.js";import"./chunk-2UYNDVV5.js";import"./chunk-TGJ4TSZF.js";import"./chunk-VYZW4NXZ.js";import{a as u}from"./chunk-YCLUS5KN.js";import"./chunk-JIU2ZQ7U.js";import{a}from"./chunk-CGNOQGJE.js";import"./chunk-VLTGAALF.js";import{c as k}from"./chunk-M35EJ2PF.js";import"./chunk-A5M7BG4H.js";import"./chunk-5UURD4VM.js";import"./chunk-ORS7RZTA.js";import"./chunk-XFQ2P4FN.js";import{b as n}from"./chunk-MCG7PUE5.js";import{a as g}from"./chunk-T2VZIH7R.js";import"./chunk-QGMSNVNO.js";import{a as w,b as S}from"./chunk-OI7LAQO2.js";import{a as b}from"./chunk-2ZEKUGWO.js";import"./chunk-25ALGRSI.js";import"./chunk-JBM326AL.js";import"./chunk-CYZIQDYN.js";import"./chunk-AWX7T366.js";import"./chunk-S6W3GI6A.js";import"./chunk-3D277W4L.js";import"./chunk-JUP5RL3F.js";import"./chunk-HEIWEESD.js";import"./chunk-EPLN5MO7.js";import{a as T}from"./chunk-OAFPCVC2.js";import{a as h}from"./chunk-HN5D53RZ.js";import"./chunk-KXN7LTVO.js";import"./chunk-QFT3SMWH.js";import"./chunk-6ZRACZU5.js";import"./chunk-57W4LSPW.js";import"./chunk-NIBRUHHR.js";import"./chunk-FTO2ZBWK.js";import{a as C}from"./chunk-NVW4NMP3.js";import"./chunk-K3FFRUMO.js";import"./chunk-GUMMI6ND.js";import"./chunk-VXJUTFBI.js";import"./chunk-6CCTYJXE.js";import"./chunk-HQEIAMRY.js";import"./chunk-7FBQ4YRA.js";import"./chunk-H4VUMIAE.js";import"./chunk-TGZ7LJUR.js";import"./chunk-FTXPWRDQ.js";import"./chunk-V2Z4Z2SB.js";import{a as p}from"./chunk-PTNJTFVL.js";import"./chunk-W2YYCP36.js";import"./chunk-TSMX3MI2.js";import"./chunk-X5GPKOZG.js";import{a as d}from"./chunk-7V4YID4M.js";import{a as r}from"./chunk-BSKKCHEC.js";import"./chunk-UCDZC42X.js";function P(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(b)}function H(e){return[e.getUTCFullYear().toString()].concat(P(e))}function c(e){if(S(e))return w(H(e))}var f="enableSeTracker",o=0;function R(e,t){u(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${c(new Date(t[1]*1e3))}</td></tr>`)}function E(e){let t=B({className:"fshTTracker"}),m=L({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'});return a(t,m),e.forEach(p(R,m)),t}function s(){let t=n().lastElementChild.insertRow(-1).insertCell(-1);return t.colSpan=3,t}function x(e){let t=E(e);o=s(),a(o,t)}function F(e,t){return e[1]-t[1]}function N(){i()?.se&&x(T(i().se).sort(F))}function M(){r.enableSeTracker?l().finally(N):(o&&(o.parentNode.remove(),o=!1),U())}function j(e){e.target.id===f&&(r.enableSeTracker=!r.enableSeTracker,h(f,r.enableSeTracker),M())}function v(){l().finally(N)}function D(){let e=s();e.height=20,e=s(),e.className="fshCenter",g(k(f),e),d(e,"change",j)}async function $(){C()||!n()||(D(),r.enableSeTracker&&(await y(),v()))}export{$ as default};
//# sourceMappingURL=superelite-7I4Y742Q.js.map
