import{a as L}from"./chunk-TMNXM2IV.js";import{a,b as U,c as l,d as y}from"./chunk-QG3BPG5U.js";import"./chunk-27FBNDEG.js";import{a as B}from"./chunk-EE2FKXK4.js";import"./chunk-KJIUCR3J.js";import"./chunk-EJQFETEW.js";import"./chunk-ZK3AGOF2.js";import{a as u}from"./chunk-LFZPKT47.js";import"./chunk-OR5BPR4B.js";import{a as i}from"./chunk-4NGCZM3S.js";import"./chunk-AOZMZP5H.js";import{d as k}from"./chunk-H3DQ4UVX.js";import"./chunk-6NBL4CEJ.js";import"./chunk-UECO6BBS.js";import"./chunk-4DLBYTJ5.js";import{b as n}from"./chunk-MY4OO5AP.js";import{a as g}from"./chunk-5KGM3LZY.js";import"./chunk-DI3XCMNE.js";import{a as w,b as S}from"./chunk-JD3O6HJS.js";import{a as b}from"./chunk-OFS25YDJ.js";import"./chunk-PVHDKJRP.js";import"./chunk-33GAZWWN.js";import"./chunk-7H5ET4BP.js";import"./chunk-WCTHIQU3.js";import"./chunk-WA4H3QPQ.js";import"./chunk-DKWH62CP.js";import"./chunk-2IOAHVVN.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import{a as T}from"./chunk-WE2GCAKX.js";import{a as C}from"./chunk-BQPBQ4WG.js";import"./chunk-N3ED3R2T.js";import"./chunk-6OIODDYF.js";import"./chunk-TKVEOBDL.js";import"./chunk-3V3LTFJF.js";import{a as h}from"./chunk-6TD3KAU5.js";import"./chunk-JDAAN4LA.js";import"./chunk-IQ37ZVMO.js";import"./chunk-OI7KRNQS.js";import"./chunk-C7L2X63R.js";import"./chunk-LKEXSUYL.js";import"./chunk-O6E23IRT.js";import"./chunk-TLAXHTSP.js";import"./chunk-CKRPJ7HI.js";import{a as p}from"./chunk-RUEPLNRL.js";import"./chunk-O7K3SHEW.js";import"./chunk-EZQ2GDBH.js";import"./chunk-GVTRKM2F.js";import"./chunk-EZ536MXS.js";import"./chunk-LVBWHS3E.js";import{a as d}from"./chunk-OR37OWF3.js";import"./chunk-FQGZN2JL.js";import"./chunk-BYAZQWO5.js";import{a as r}from"./chunk-MR322WHU.js";function P(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(b)}function H(e){return[e.getUTCFullYear().toString()].concat(P(e))}function c(e){if(S(e))return w(H(e))}var f="enableSeTracker",o=0;function R(e,t){u(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${c(new Date(t[1]*1e3))}</td></tr>`)}function E(e){let t=B({className:"fshTTracker"}),s=L({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'});return i(t,s),e.forEach(p(R,s)),t}function m(){let t=n().lastElementChild.insertRow(-1).insertCell(-1);return t.colSpan=3,t}function x(e){let t=E(e);o=m(),i(o,t)}function F(e,t){return e[1]-t[1]}function N(){a()?.se&&x(T(a().se).sort(F))}function M(){r.enableSeTracker?l().finally(N):(o&&(o.parentNode.remove(),o=!1),U())}function j(e){e.target.id===f&&(r.enableSeTracker=!r.enableSeTracker,C(f,r.enableSeTracker),M())}function v(){l().finally(N)}function D(){let e=m();e.height=20,e=m(),e.className="fshCenter",g(k(f),e),d(e,"change",j)}function $(){h()||!n()||(D(),r.enableSeTracker&&y().then(v))}export{$ as default};
//# sourceMappingURL=superelite-5DIZR4V4.js.map
