import{a as k}from"./chunk-OECWY5Y7.js";import{a as T}from"./chunk-PKEF6SFH.js";import{a as N}from"./chunk-QBVAQN2I.js";import{a as I}from"./chunk-J3V2TIPN.js";import{a as L}from"./chunk-G6ELF5ZZ.js";import{a as h}from"./chunk-XYONPL4F.js";import{a as b}from"./chunk-BWSBTJVB.js";import{a}from"./chunk-5EYEAZGP.js";import{a as c}from"./chunk-BBN3LEEH.js";import{a as u}from"./chunk-PGLMOB5X.js";import{a as g}from"./chunk-QHEBSHZB.js";import{a as y}from"./chunk-6XPKEIUI.js";import{b as p}from"./chunk-7IL2NT5X.js";import{a as d}from"./chunk-6UYUVQ4L.js";import{a as i}from"./chunk-N3WGA77M.js";import{a as m}from"./chunk-5SMO2RDK.js";import{a as f}from"./chunk-2BLOW4PA.js";import{b as s}from"./chunk-XS3HTUXF.js";import{G as n,Na as l}from"./chunk-WXWB6HVS.js";var E=()=>d("td",p()).find(y("Message")),v=e=>h(e.href);function G(e){e.className=""}function S(e){let o=m(l,e).map(v).map(Number);return o.length&&!o.some(t=>t===a())}function $(e){let r=v(e.children[0]);c(e,` [ <a href="${n}recruit&subcmd2=acceptjoin&id=${r}">Accept</a> | <a href="${n}recruit&subcmd2=denyjoin&id=${r}">Deny</a> ]`)}function j(e){S(e)&&(f(e.cells).forEach(G),e.classList.add("fshGrey"),e.classList.add("fshXSmall")),i(e.cells[2]).includes("requested")&&$(e.cells[2])}function C(){let e=E();if(!e)return;let r=N(e);e.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',I(r,3,0).forEach(j)}function M(){s("hideNonPlayerGuildLogMessages")&&C()}function P(e,r,o){g(e.cells[2],u({innerHTML:`${b(r.id,r.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}async function q(e){let r=L(e),o=await k(r,T(e)),t=o.r.combat.items?.[0].n;t&&P(r,o.r.combat.attacker.group.players[0],t)}function x(){if(!s("groupCombatItems"))return;m('a[href*="&combat_id="]').filter(o=>i(o.previousSibling).includes("victorious")).forEach(q)}export{M as a,x as b};
//# sourceMappingURL=chunk-F3RPLBMT.js.map
