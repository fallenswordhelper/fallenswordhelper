import{a as B,b as L}from"./chunk-N2JW6LXT.js";import{a as n,b as U,c as i,d as y}from"./chunk-GWWDCKNN.js";import"./chunk-2SLP3R2S.js";import{a as S}from"./chunk-3HWAELXQ.js";import{a as w}from"./chunk-NC6EPUUJ.js";import{a as b}from"./chunk-IJMM76Q4.js";import{a as d}from"./chunk-6HFP56UB.js";import"./chunk-SDRXUAQO.js";import"./chunk-UWLJN7Q5.js";import"./chunk-JMJ2BOMP.js";import{a}from"./chunk-3DWHDW4D.js";import"./chunk-RVEJ4C26.js";import{f as k}from"./chunk-V3SGRUIJ.js";import"./chunk-7Q3UNQAY.js";import"./chunk-FRV7FQNH.js";import"./chunk-XPYPU624.js";import"./chunk-2I2Z33ZT.js";import"./chunk-M54BODYJ.js";import"./chunk-CSKN77A5.js";import"./chunk-3EONQEO2.js";import"./chunk-FA37UARH.js";import"./chunk-JDBXWYYY.js";import"./chunk-5GNYWTGT.js";import"./chunk-E5PHBQC4.js";import"./chunk-XG256B2T.js";import{a as g}from"./chunk-XWCLQVCM.js";import"./chunk-GNGPRTAS.js";import"./chunk-EBLMPFV5.js";import{a as h}from"./chunk-EUEELQXP.js";import"./chunk-QS7J5TMD.js";import{b as p}from"./chunk-P664PW54.js";import{a as T}from"./chunk-XJ5473QP.js";import"./chunk-WM64FGHN.js";import"./chunk-GQGCY7E7.js";import"./chunk-CU7PBPNO.js";import"./chunk-LXVMDOGR.js";import{a as C}from"./chunk-GX4J242O.js";import{a as u}from"./chunk-X5N7OOVX.js";import"./chunk-PUT3KB2D.js";import"./chunk-ZZU2SK7K.js";import"./chunk-MKQZLDMS.js";import"./chunk-55RTNKIA.js";import"./chunk-X73J5C7S.js";import"./chunk-5TFX5HF5.js";import"./chunk-NG7LLWFJ.js";import"./chunk-45P77O4Z.js";import{a as s}from"./chunk-6FX7G55Z.js";import"./chunk-DW345X2O.js";import"./chunk-AWEYVB2J.js";import{a as r}from"./chunk-UUU5NSJN.js";function H(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(S)}function P(e){return[e.getUTCFullYear().toString()].concat(H(e))}function l(e){if(L(e))return B(P(e))}var f="enableSeTracker",o;function R(e,t){d(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${l(new Date(t[1]*1e3))}</td></tr>`)}function E(e){let t=b({className:"fshTTracker"}),m=w({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'});return a(t,m),e.forEach(u(R,m)),t}function c(){let t=p.lastElementChild.insertRow(-1).insertCell(-1);return t.colSpan=3,t}function x(e){let t=E(e);o=c(),a(o,t)}function F(e,t){return e[1]-t[1]}function N(){n&&n.se&&x(C(n.se).sort(F))}function M(){r.enableSeTracker?i().finally(N):(o&&(o.parentNode.remove(),o=!1),U())}function v(e){e.target.id===f&&(r.enableSeTracker=!r.enableSeTracker,g(f,r.enableSeTracker),M())}function D(){i().finally(N)}function $(){if(h())return;let e=c();e.height=20,e=c(),e.className="fshCenter",T(k(f),e),s(e,"change",v),r.enableSeTracker&&y().then(D)}export{$ as default};
//# sourceMappingURL=superelite-MN55ZSCF.js.map
