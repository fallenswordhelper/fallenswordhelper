import{a as Q,b as M}from"./chunk-YN5ZUBXJ.js";import"./chunk-BN2FVJDG.js";import{a as F}from"./chunk-OQ57PIHT.js";import"./chunk-SILMAFY7.js";import{a as C}from"./chunk-PFM3MDMH.js";import{a as B}from"./chunk-FPHAFR7X.js";import{a as R}from"./chunk-2BECNXKF.js";import{a as D}from"./chunk-4USSUJZS.js";import{a as T}from"./chunk-DL66VPIS.js";import"./chunk-JLHZQS42.js";import{a as b}from"./chunk-KEFTLYHP.js";import{a as y}from"./chunk-PS5VAJEH.js";import{a as l}from"./chunk-ZMRAOOI3.js";import{a as w}from"./chunk-6XTEFEDC.js";import"./chunk-N6DHR4HD.js";import"./chunk-7N7KYOCQ.js";import{a as I}from"./chunk-EHOBQCEV.js";import"./chunk-I4D4CXXN.js";import"./chunk-VQEVI3UQ.js";import"./chunk-VML6VTTW.js";import"./chunk-73BUZD3L.js";import"./chunk-34NYN3UK.js";import"./chunk-U6MH67WD.js";import"./chunk-67AICILL.js";import"./chunk-Q4DWWJPE.js";import{a as h}from"./chunk-K6MZKY6U.js";import{a}from"./chunk-V3AM6ELX.js";import{a as d}from"./chunk-TTIL6Q2Q.js";import"./chunk-CYTNSAKG.js";import"./chunk-4KBBARFN.js";import"./chunk-57Z3RMCJ.js";import{a as p}from"./chunk-YIEWHY6V.js";import"./chunk-7XTGUVW5.js";import"./chunk-CF4P6XS2.js";import"./chunk-AH5EZJ7R.js";import"./chunk-G3R5NAPB.js";import"./chunk-CQ3PZTYF.js";import{a as s}from"./chunk-C5OE7PQU.js";import"./chunk-RY5JB5JV.js";import"./chunk-HTCI2HHR.js";import{a as N}from"./chunk-5AABVCBG.js";import"./chunk-SWDYJ63E.js";import{a as i}from"./chunk-3WYOJJSD.js";import{a as f}from"./chunk-FM7OJ7NO.js";import"./chunk-HA7HK2NF.js";import"./chunk-U546IVLZ.js";import"./chunk-DXI2WUUD.js";import{a as o}from"./chunk-JQPK3YVC.js";import"./chunk-HT7PAWAR.js";import"./chunk-T34QP7UC.js";import"./chunk-WHLURLGI.js";import"./chunk-M6FQTS4T.js";import{a as k}from"./chunk-2URZ55LX.js";import"./chunk-FTOV4GKD.js";import"./chunk-NY6FBFCL.js";import"./chunk-UWALNOSV.js";import"./chunk-POXCGSYQ.js";import"./chunk-M72CYKCS.js";import"./chunk-ZP7KCDX3.js";function K(t){let e=a("span.fshLastActivity",t);if(!e){e=y({className:"fshLastActivity"});let r=p("h1",t)[0];B(e,r)}return e}function v(t){let e=a(`div.player[data-username="${t.username}"]`),r=K(e);i(`Last Activity: ${D(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,r)}function u(t){return Number(s(t).replace(/\[|\]/g,""))}function V(t,e){if(!e){let r=y({className:"fshPlayer"});return B(r,t.nextElementSibling),r}return e}function W(t,e){return t>e?"fshRed":"fshGreen"}function X(t,e,r){if(!e){i("",r);return}let n=t.nextElementSibling.children[0].children[0],c=u(n),z=V(t,r),J=W(c,e);i(` <span class="${J}">[${e}]</span>`,z)}function Y(t,e){return e[0]===t}function Z(t,e){let r=e.getAttribute("data-name"),n=t.find(o(Y,r));if(n)return n[1]}function tt(t,e){let r=Z(t,e),n=e.nextElementSibling.nextElementSibling;(r||n)&&X(e,r,n)}function et(t){return t.split(/ \[|]/)}function rt(t){return h(s(t.parentNode.lastElementChild)).map(et)}function E(t){let e=t.target;if(e.tagName!=="H1")return;b(s(e)).then(v);let r=rt(e);d("#buff-outer input[name]").forEach(o(tt,r))}var G='<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>',_=[50,54,55,56,60,61,98,101];function ft(t,e){let r=e.dataset.tipped,{cost:n}=t.previousElementSibling.dataset;C(r.replace("</center>",`<br>Stamina Cost: ${n}$&`),e)}function nt(t,e){return!_.includes(Number(t.htmlFor.slice(6)))&&u(e.children[0])<125}function it(t,e){nt(t,e)&&t.classList.add("fshDim")}function ot(t){let e=t.children[0];ft(t,e),it(t,e)}function q(){d('#buff-outer label[for^="skill-"]').forEach(ot)}function st(t,e){return!t&&e}function O(t){let e=p("h1",f("players"))[0];if(st(e,t)){setTimeout(O,100,t-1);return}e&&w(e)}function m(){f("targetPlayers").value&&O(9)}function at(t){let e=Math.floor(t/60),r=t%60,n=T(e,"m");return e>0&&r>0&&(n+=" "),n+=T(r,"s"),n}function ut(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${at(t)})</span>`}function mt(t){let e=a(`#buff-outer input[data-name="${t}"]`);return e?`<span class="quickbuffActivate" data-buffid="${e.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}function ct(t,e){let r=t[e]||0;return r?ut(r):mt(e)}function g(t,e,r){i(ct(t,e),r)}function lt(t,e){return t[e.name]=e.duration,t}function S(t){let e=t._skills.reduce(lt,{});g(e,"Guild Buffer",f("fshGB")),g(e,"Buff Master",f("fshBM")),g(e,"Extend",f("fshExt")),g(e,"Reinforce",f("fshRI"))}function pt(t,e){return e.name===t}function dt(t,e){let r=t.find(o(pt,e));return r&&r.value||0}function j(t,e,r){let n=dt(t,e),c="fshLime";n<100&&(c="fshRed"),i(`<span class="${c}">${n}%</span>`,r)}function x(t){let e=t._enhancements;j(e,"Sustain",f("fshSus")),j(e,"Fury Caster",f("fshFur"))}function A(t){x(t),S(t)}function ht(t){let e=f(`skill-${t}`);e&&(e.checked=!0)}function bt(t){t.split(";").forEach(ht)}function L(){let t=l("blist");t&&bt(t)}var P;function U(){P.length?(window.addPlayers([P.shift()]),setTimeout(U,200)):setTimeout(m,200)}function H(){let t=l("players");t&&(P=h(t),U())}function yt(t,e){M(e)&&(t.className="fshLime",i("On",t))}async function $(t){let e=t.target;if(e.className!=="quickbuffActivate")return;I("quickbuff","quickActivate");let r=await Q([window.self],[e.dataset.buffid]);yt(e,r)}function Bt(){k(f("helperQBheader"),$),k(f("players"),E)}function gt(){if(N())return;let t=f("quickbuff");!t||(b(window.self).then(A),R(t.children[0],G),F([q,L,H,Bt,m]))}export{gt as default};
//# sourceMappingURL=quickBuff-RZIHELVM.js.map
