import{a as B,b as L}from"./chunk-QLOT6LD6.js";import{a as n,b as U,c as i,d as y}from"./chunk-KELF3VAL.js";import"./chunk-NCN4BWJJ.js";import{a as S}from"./chunk-PO6GKIHD.js";import{a as b}from"./chunk-7VVT3L6Q.js";import{a as w}from"./chunk-2VMX7FME.js";import{a as d}from"./chunk-QNQ62I2N.js";import"./chunk-NRO5M5RP.js";import"./chunk-KJXK3QHT.js";import"./chunk-H5JQREIR.js";import"./chunk-6WQKPU62.js";import{a}from"./chunk-B7B6FEDD.js";import"./chunk-D2JB7FXL.js";import{f as k}from"./chunk-EE76BZOU.js";import"./chunk-MBVAIUY2.js";import"./chunk-UDXGWZTN.js";import"./chunk-EDHTZZNH.js";import"./chunk-4TLLI7G7.js";import"./chunk-UAYXUP6O.js";import"./chunk-MDOIRABL.js";import"./chunk-TNZZCVPK.js";import"./chunk-W2SUPDAA.js";import"./chunk-2BNSEFB2.js";import"./chunk-3SKGW6OG.js";import"./chunk-Z4KFCZCK.js";import"./chunk-KQSUJNSJ.js";import{a as g}from"./chunk-J7YYTDVE.js";import"./chunk-4WC2EWBK.js";import"./chunk-4MZMNEIX.js";import{a as h}from"./chunk-4E2HVB33.js";import{b as p}from"./chunk-4JW3DRCH.js";import{a as T}from"./chunk-D3KONKYS.js";import"./chunk-RC2D6Q5A.js";import"./chunk-QOTR7OR6.js";import"./chunk-527CNM4N.js";import{a as C}from"./chunk-6IX4R32K.js";import{a as u}from"./chunk-UG5BYLND.js";import"./chunk-C4ZG3YI7.js";import"./chunk-5KMWOBOQ.js";import"./chunk-N3S7NELN.js";import"./chunk-BQVMUFJ3.js";import"./chunk-XANH2KUG.js";import"./chunk-JEWY3LVF.js";import"./chunk-QNTIOO4O.js";import"./chunk-KI4LHW6W.js";import{a as s}from"./chunk-47PUSJEZ.js";import"./chunk-MWERZPAU.js";import"./chunk-3GR2FESE.js";import{a as r}from"./chunk-DKU5TE64.js";function H(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(S)}function P(e){return[e.getUTCFullYear().toString()].concat(H(e))}function l(e){if(L(e))return B(P(e))}var f="enableSeTracker",o;function R(e,t){d(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${l(new Date(t[1]*1e3))}</td></tr>`)}function E(e){let t=w({className:"fshTTracker"}),m=b({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'});return a(t,m),e.forEach(u(R,m)),t}function c(){let t=p.lastElementChild.insertRow(-1).insertCell(-1);return t.colSpan=3,t}function x(e){let t=E(e);o=c(),a(o,t)}function F(e,t){return e[1]-t[1]}function N(){n&&n.se&&x(C(n.se).sort(F))}function M(){r.enableSeTracker?i().finally(N):(o&&(o.parentNode.remove(),o=!1),U())}function v(e){e.target.id===f&&(r.enableSeTracker=!r.enableSeTracker,g(f,r.enableSeTracker),M())}function D(){i().finally(N)}function $(){if(h())return;let e=c();e.height=20,e=c(),e.className="fshCenter",T(k(f),e),s(e,"change",v),r.enableSeTracker&&y().then(D)}export{$ as default};
//# sourceMappingURL=superelite-GFO7IIZQ.js.map