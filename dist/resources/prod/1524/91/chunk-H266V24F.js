import{a as W}from"./chunk-J5RHQSPZ.js";import{a as j}from"./chunk-M7J4XA3E.js";import{a as V}from"./chunk-SVLYIQTP.js";import{a as D}from"./chunk-53AXQ55N.js";import{a as Y,b as U}from"./chunk-IW6Y5ZVS.js";import{a as M}from"./chunk-ATNZ3FCR.js";import{a as G}from"./chunk-62KAVJLB.js";import{a as s}from"./chunk-BZVD6YUU.js";import{a as B}from"./chunk-MHHQGJDF.js";import{a as p}from"./chunk-5XOBJVK3.js";import{a as f}from"./chunk-26GD3BL3.js";import{a as y}from"./chunk-KVXYNDTR.js";import{a as R}from"./chunk-GM6FB5OC.js";import{a as u}from"./chunk-DCYW4AFF.js";import{a as d}from"./chunk-UEEKDGD3.js";import{a as C}from"./chunk-MW5GUP64.js";import{a as $}from"./chunk-GDFIPJIS.js";import{a as E}from"./chunk-L2YJ66JH.js";import{a as H}from"./chunk-WVJXETLD.js";import{a as _}from"./chunk-KJAAAA67.js";import{a as q}from"./chunk-JZGF6K4J.js";import{a as n}from"./chunk-IS4DNI73.js";import{a as I}from"./chunk-FNUCRPZA.js";import{b as c}from"./chunk-WULU2HSE.js";import{La as x,Ma as m,U as A,ua as g,w}from"./chunk-KOVMYOV5.js";var N=e=>[e,p(e.href,"target_username")],Q=async([e,r])=>[e,r,await Y(r)],X=e=>e?' class="pmAttackUrl"':"";function J(e,[r,t]){B(r,` | <a${X(e)} href="${A}${t}">Attack</a>`)}async function h(e,r){let t=n('a[href*="=createsecure&"]',e);if(!t.length)return;let o=t.map(N);(await Promise.all(o.map(Q))).filter(([,,i])=>!i).forEach(i=>J(r,i))}var K=e=>e?' class="pmIgnoreUrl"':"",O=(e,r)=>`<a${K(e)} href="${w}${d(r)}" data-tooltip="Add to Ignore List">Ignore</a>`;function Z(e,[r,t]){f(t.cells[1],`<font size="1"><br>[ ${O(e,r)} ]</font>`)}function L(e,r){let t=n(m,e);if(t.length===0)return;t.map(a=>[a,s(a)]).forEach(a=>Z(r,a))}var z="fshGreen",F="fshRed",ee=([,e])=>C(m,e),re=async([e,r,t])=>[r,t,await W(r,j(e))],te=([,,e])=>e&&e.s,oe=e=>[18,21,31].includes(e.id),P=e=>`<span class="fshRed fshBold">${e}.</span>`;function ne(e){return e.includes("You were victorious over")?[z,`You were <span class="${z}">victorious</span> over `]:e.includes("You were defeated by")?[F,`You were <span class="${F}">defeated</span> by `]:["",null]}function ae(e){return e.id===18?P(`${e.params[0]} leeched the buff '${e.params[1]}'`):e.id===21?P(`${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff`):P(`${e.params[0]} activated Fist Fight`)}function l(e,r,t){return e!==0?`${r}:<span class="${t}">${q(e)}</span> `:""}function se(e,r){let t=e.specials.filter(oe).map(ae),o=l(e.xp_gain,"XP stolen",r)+l(e.gold_gain,"Gold lost",r)+l(e.gold_stolen,"Gold stolen",r)+l(e.pvp_prestige_gain,"Prestige gain",r)+l(e.pvp_rating_change,"PvP change",r);return o+(o&&t.length?"<br>":"")+(t.length?`${t.join("<br>")}`:"")}function ie([e,r,t]){let[o,a]=ne(r);a&&(e.cells[2].firstChild.remove(),M(e.cells[2],a));let i=se(t.r.combat,o);i&&u(e.cells[2],R({innerHTML:i}))}function me(e){return e.map(r=>[r,s(r)]).filter(ee).map(([r,t])=>[r,t,t.cells[2].innerHTML]).map(re)}async function k(e){let r=n('a[href*="&combat_id="]',e);if(r.length===0)return;(await Promise.all(me(r))).filter(te).forEach(ie)}function T(e){n('a[href*="=trade&"]',e).filter(r=>!p(r.href,"subcmd")).forEach(r=>y("Trade",r)),n('a[href*="=createsecure&"]',e).forEach(r=>y("ST",r))}function le(e,r){let[,,t]=e.rows[0].cells;t&&!r&&f(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}async function fe(e){let[,r]=await U(e);return[`.fshPlayerColoring tr:nth-of-type(${s(e).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,r]}function ce(e,[r,t]){return e[t]?e[t].push(r):e[t]=[r],e}var pe={guild:"green",ally:"blue",enemy:"red"};function de([e,r]){return`${r.join(", ")} { color: ${pe[e]}; }`}var ue=([,e])=>e;function ge(e){return E(e.filter(ue).reduce(ce,{})).map(de)}function ye(e,r,t){let o=ge(r);o.length&&(le(e,t),e.classList.add("fshPlayerColoring"),u(document.body,G(o.join(`
`))))}async function v(e,r){let t=n(m,e);if(!t.length)return;let o=await Promise.all(t.map(fe));ye(e,o,r)}var S=0,he=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/;function Le(e){return he.test($(e.cells[2]))}function Pe(e){let r=D(d(e.cells[1]));r>S&&(H(g,r),S=r)}function b(e){S=c(g),n(x,e).map(s).filter(Le).forEach(Pe)}var ke=[["addIgnoreLink",L],["colorPlayerNames",v],["addAttackLinkToLog",h],["changeButtonLabels",T],["trackLadderReset",b],["showPvPSummaryInLog",k]];function Te(e,r,[t,o]){c(t)&&o(e,r)}function ve(e,r){ke.forEach(I(Te,e,r))}function Se(e){if(_())return;let r=V();r&&ve(r,e)}export{Se as a};
//# sourceMappingURL=chunk-H266V24F.js.map
