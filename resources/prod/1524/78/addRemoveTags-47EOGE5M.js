import{a as $}from"./chunk-T2ZQUGDB.js";import{c as H}from"./chunk-HASPAIKA.js";import"./chunk-OPPKRG6Y.js";import{a as m,b as G}from"./chunk-DCCHDUUH.js";import"./chunk-ZXV6MAK5.js";import"./chunk-FA3INVM7.js";import{a as R}from"./chunk-PC47Q5AY.js";import{a as N}from"./chunk-WXMNRLGI.js";import"./chunk-IQTTUI5C.js";import"./chunk-H6BC5ZU5.js";import"./chunk-GB3P3WYI.js";import{a as C}from"./chunk-HEJFBNDI.js";import"./chunk-NLPE34FY.js";import"./chunk-Y5BMQBVG.js";import{a as q}from"./chunk-2C6ICIYI.js";import"./chunk-SKKPQFOH.js";import{a as B}from"./chunk-Q3UMEE4F.js";import"./chunk-EREM32XP.js";import"./chunk-WXTFQ2EX.js";import"./chunk-G4Y2RVGL.js";import{a as S}from"./chunk-WJGEKWR5.js";import{a as n}from"./chunk-HPANGB4C.js";import"./chunk-AOUMBNX5.js";import"./chunk-DAGOHXEG.js";import{a as v}from"./chunk-AWJUUHCF.js";import"./chunk-RS7F7ZXV.js";import{a}from"./chunk-XHSVN3AE.js";import{a as I}from"./chunk-BFPR54OB.js";import"./chunk-XBR44BTF.js";import{a as x}from"./chunk-7YIYQREX.js";import{a as r}from"./chunk-NGC57R36.js";import"./chunk-PPVAQIV6.js";import{a as y}from"./chunk-BX4K6PYV.js";import"./chunk-65TDUWAS.js";import{a as E}from"./chunk-L64NM3TP.js";import"./chunk-NRWJMAHH.js";import"./chunk-K4B7GDYL.js";import"./chunk-KU6X3UZY.js";import"./chunk-WS7NDR34.js";import{b as i}from"./chunk-QC454MFH.js";import{a as h}from"./chunk-R6LOYYKU.js";import"./chunk-NNEMTXQK.js";import"./chunk-EEFLVRLB.js";import{a as o}from"./chunk-BCLTLFAS.js";import"./chunk-BVHFLUJI.js";import"./chunk-TRTGTDIN.js";import{a as A}from"./chunk-46ONZIIB.js";import"./chunk-S6LVOURD.js";import"./chunk-LXKLJ4E3.js";import{a as T}from"./chunk-VNX4IMNY.js";import{b}from"./chunk-KWOXJEE6.js";import"./chunk-GBEPYIIX.js";function w(e){return e.r===0?{s:!0}:{e:{message:e.m},s:!1}}function f(e){return G(e).then(w)}function l(e){return m({subcmd2:"takeitem",guildstore_id:e})}function u(e){return n(l,f,e)}function D(){r('#pCC input[name="tagIndex[]"]').forEach(B)}function L(e,t){t.s&&(e.removeAttribute("style"),e.className="fshGreen",a("Taken",e))}function _(e){let t=e.parentNode.previousElementSibling.previousElementSibling.children[0].value;u(t).then(o(L,e)),a("",e),e.className="guildTagSpinner",e.style.backgroundImage=`url('${b}ui/misc/spinner.gif')`}function s(e){let{target:t}=e;t.value==="Check All"&&D(),t.className==="sendLink"&&_(t)}function c(e,t){return m({subcmd2:e,tagIndex:t})}function p(e,t){return E({cmd:"guild",subcmd:"inventory",subcmd2:e,tagIndex:t}).then(N)}function d(e,t){return n(c,p,e,t)}var F=()=>r('[name="tagIndex[]"]:checked'),J=()=>x('[name="subcmd2"]').value;async function P(e,t){let k=await d(e,t.map(j=>j.value));k.s?t.forEach($):H(k.e.message)}function X(e){e.preventDefault(),R(25,F()).forEach(o(P,J())),S("addRemoveTags","Tag by AJAX")}function g(){T(document.forms[0],"submit",X)}function z(e){v(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function K(){r('#pCC input[name="tagIndex[]"]').forEach(z)}function M(){let e=C({type:"button",value:"Check All"}),t=y("form",i);t.length===1&&I(t[0].previousElementSibling.cells[0],e)}function O(){A(i,s),K(),M(),g()}function Q(){h("tagging_cost")?O():q()}export{Q as default};
//# sourceMappingURL=addRemoveTags-47EOGE5M.js.map
