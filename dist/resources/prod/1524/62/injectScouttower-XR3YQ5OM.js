import{a as M}from"./chunk-CNFQIYR6.js";import{a as v,b as A}from"./chunk-VGLAYX3H.js";import{a as _}from"./chunk-3MESDZL4.js";import{b}from"./chunk-TPOKAMKZ.js";import{a as c}from"./chunk-XSERPBWF.js";import{a as H}from"./chunk-6BR5AI4U.js";import{a as j}from"./chunk-AKZEGWGN.js";import{a as h}from"./chunk-DC6VFD7V.js";import{a as T}from"./chunk-JS64WVYH.js";import"./chunk-U6UKQW4Y.js";import{a as I}from"./chunk-FYHFJFPV.js";import"./chunk-I4D4CXXN.js";import{a as i}from"./chunk-6WXPRACV.js";import"./chunk-34NYN3UK.js";import{a as m}from"./chunk-U6MH67WD.js";import"./chunk-67AICILL.js";import{a as p}from"./chunk-6HCREAXP.js";import"./chunk-4KBBARFN.js";import"./chunk-57Z3RMCJ.js";import"./chunk-QVPWC52X.js";import{a as x}from"./chunk-YIEWHY6V.js";import{a as f}from"./chunk-AH5EZJ7R.js";import{a as s}from"./chunk-C5OE7PQU.js";import"./chunk-RY5JB5JV.js";import"./chunk-HTCI2HHR.js";import{a as E}from"./chunk-5AABVCBG.js";import{a as N}from"./chunk-VWMHLX6I.js";import{b as y}from"./chunk-QOWOSZRG.js";import{a as B}from"./chunk-3WYOJJSD.js";import"./chunk-FM7OJ7NO.js";import"./chunk-U546IVLZ.js";import{a as l}from"./chunk-DXI2WUUD.js";import{a as u}from"./chunk-JQPK3YVC.js";import{a as $,b as L}from"./chunk-7KBBV5J4.js";import"./chunk-J2QMB37G.js";import"./chunk-HT7PAWAR.js";import"./chunk-T34QP7UC.js";import"./chunk-WHLURLGI.js";import"./chunk-M6FQTS4T.js";import{a as S}from"./chunk-2URZ55LX.js";import"./chunk-FTOV4GKD.js";import"./chunk-NY6FBFCL.js";import"./chunk-UWALNOSV.js";import{a as C}from"./chunk-POXCGSYQ.js";import{X as d,ua as w}from"./chunk-M72CYKCS.js";import"./chunk-ZP7KCDX3.js";var O=0,F=1,a=2,P=3;function U(t){return[t[0],t[1].cooldownText,t[1].coolTime,t[1].seen]}function X(t){return t[a]>f}function D(t,o){return t[a]-o[a]}function V(t){return`<tr><td class="fshCenter">${t[O]}</td><td class="fshBold fshCenter fshCooldown">${t[F]}</td><td class="fshCenter">${t[P]}</td></tr>`}function q(t){return l(t).map(U).filter(X).sort(D).map(V).join("")}function z(t){let o=j({className:"fshTTracker"}),e=H({innerHTML:'<tr><td class="header fshCenter">Titan</td><td class="header fshCenter">Cooldown</td><td class="header fshCenter">Visible</td></tr>'});return m(o,e),i(e,q(t)),o}function g(t,o){if(t.rows.length>5){let e=z(o),r=t.insertRow(5).insertCell(-1);r.colSpan=3,m(r,e)}}function G(t){t.previousElementSibling&&T(h(t.previousElementSibling.href))}var J=t=>h(t.cells[0].children[0].href);function W(t){let o=t.parentNode.parentNode.parentNode.parentNode,e=c(o.rows,3,0).map(J).join();T(e)}function Y(t){let{target:o}=t;p("[b]",o)&&G(o),p("all",o)&&W(o)}function Z(t){N("fshBl",t.target)&&Y(t)}function K(t){i(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function R(t){c(t.rows,3,0).forEach(K),i(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function tt(t,o){return t.rows.length>1&&o>1}function ot(t){C(t).filter(tt).forEach(R),S(t[1],Z)}function k(t){t.length>2&&ot(t)}function Q(t){return M(t.cells[0].children[0])}function et(t,o){let e=Q(o).replace(" (Titan)","");if(!t[e]){let n=s(o.nextElementSibling.cells[0]),r=0;n.includes("until")&&(r=_(n.replace("Cooldown until: ",""))),t[e]={cooldownText:n,coolTime:r,seen:"yes"}}}function nt(t,o){t[o[0]]||o[1].coolTime<=f||(t[o[0]]={cooldownText:o[1].cooldownText,coolTime:o[1].coolTime,seen:"no"})}function rt(t,o){!t||l(t).forEach(u(nt,o))}function it(t,o,e){return`<br><span class="fshBlue"> (${b(v(e-o,t),2)}% Current <br>${b(t*100/e,2)}% Total<br>${A(t,e,o)})`}function mt(t,o){let e=o.split("/");i(t.cells[3],it(Number(s(t.cells[3])),Number(e[0]),Number(e[1])))}function st(t){let o=s(t.cells[2]);o.indexOf("-")===-1&&mt(t,o)}function ct(t,o){let e=encodeURIComponent(o),n=t.cells[0].children[0],r=I({href:`${d}creatures&search_name=${e}`,target:"_blank"});m(r,n),m(t.cells[0],r)}function ft(t){let o=t.cells[1],e=s(o);B(`<a href="${d}realms&search_name=${e}" target="_blank">${e}</a>`,o)}function lt(t){let o=Q(t);ct(t,o),i(t.cells[0],o.replace(" (Titan)","")),ft(t)}function at(t,o){st(o),et(t,o),lt(o)}function ut(t,o){c(t.rows,4,0).forEach(u(at,o))}function dt(t){let o=x(w,y);k(o);let e=o[1],n={};ut(e,n),rt(t,n),g(o[0],n),L("fsh_titans",n)}function pt(){E()||$("fsh_titans").then(dt)}export{pt as default};
//# sourceMappingURL=injectScouttower-XR3YQ5OM.js.map
