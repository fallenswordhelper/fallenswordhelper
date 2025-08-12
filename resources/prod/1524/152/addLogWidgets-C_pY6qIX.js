import{k as a,aY as e,a1 as n,aZ as t,o as s,n as r,s as o,Z as i,l as c,a3 as l,a_ as f,aP as u,q as p,a$ as d,i as m,w as g,aN as h,m as y,ab as $,aB as b,b0 as w,aw as L,aM as P,a4 as v,c as j}from"./calfSystem-BlPuMQGT.js"
import{i as k}from"./insertHtmlAfterEnd-DO_1O_2f.js"
import{i as _,r as A}from"./relatePlayer-YlJnTDXX.js"
import{g as E}from"./getId-CEBzpjjo.js"
import{i as I}from"./insertHtmlAfterBegin-CRP0nRuH.js"
import{g as T}from"./getLogTime-G8OzHQ7f.js"
import{c as B}from"./createStyle-Bc_hQFau.js"
import{g as Y}from"./addLogColoring-atkRL2SG.js"
import{p as G}from"./parseDateAsTimestamp-DDAzvT6k.js"
const x=a=>[a,e(a.href,"target_username")],C=async([a,e])=>[a,e,await _(e)],S=a=>a?' class="pmAttackUrl"':""
const H=(a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${f}${u(e)}" data-tooltip="Add to Ignore List">Ignore</a>`
const z="fshGreen",F="fshRed",M=([,a])=>p(i,a),N=async([a,e,n])=>[e,n,await d(T(e),E(a))],R=([,,a])=>a?.s,W=a=>[18,21,31].includes(a.id),U=a=>`<span class="fshRed fshBold">${a}.</span>`
function Z(a){return 18===a.id?U(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?U(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):U(`${a.params[0]} activated Fist Fight`)}function q(a,e,n){return 0!==a?`${e}:<span class="${n}">${h(a)}</span> `:""}function D([a,e,n]){const[t,s]=function(a){return a.includes("You were victorious over")?[z,`You were <span class="${z}">victorious</span> over `]:a.includes("You were defeated by")?[F,`You were <span class="${F}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),I(a.cells[2],s))
const r=function(a,e){const n=a.specials.filter(W).map(Z),t=q(a.xp_gain,"XP stolen",e)+q(a.gold_gain,"Gold lost",e)+q(a.gold_stolen,"Gold stolen",e)+q(a.pvp_prestige_gain,"Prestige gain",e)+q(a.pvp_rating_change,"PvP change",e)
return t+(t&&n.length?"<br>":"")+(n.length?`${n.join("<br>")}`:"")}(n.r.combat,t)
r&&m(a.cells[2],g({innerHTML:r}))}async function X(a){const[,e]=await A(a)
return[`.fshPlayerColoring tr:nth-of-type(${c(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function J(a,[e,n]){return a[n]?a[n].push(e):a[n]=[e],a}const K={guild:"green",ally:"blue",enemy:"red"}
function O([a,e]){return`${e.join(", ")} { color: ${K[a]}; }`}const Q=([,a])=>a
function V(a,e,n){const t=function(a){return $(a.filter(Q).reduce(J,{})).map(O)}(e)
t.length&&(!function(a,e){const[,,n]=a.rows[0].cells
n&&!e&&l(n,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,n),a.classList.add("fshPlayerColoring"),m(document.body,B(t.join("\n"))))}let aa=0
const ea=/You ranked \w{3,4} in your PvP Band! You have gained \d x PvP Ladder Token/
function na(a){return ea.test(r(a.cells[2]))}function ta(a){const e=G(u(a.cells[1]))
e>aa&&(L(P,e),aa=e)}const sa=[["addIgnoreLink",function(e,n){const t=a(i,e)
if(0===t.length)return
t.map((a=>[a,c(a)])).forEach((a=>function(a,[e,n]){l(n.cells[1],`<font size="1"><br>[ ${H(a,e)} ]</font>`),a||s(n.cells[1],(a=>{"Ignore"===r(a.target)&&o("playerLogWidgets","Ignore")}))}(n,a)))}],["colorPlayerNames",async function(e,t){const s=a(i,e)
if(!s.length)return
V(e,await n(s.map(X)),t)}],["addAttackLinkToLog",async function(e,i){const c=a('a[href*="=createsecure&"]',e)
if(!c.length)return
const l=c.map(x);(await n(l.map(C))).filter((([,,a])=>!a)).forEach((a=>function(a,[e,n]){k(e,` | <a${S(a)} href="${t}${n}">Attack</a>`),a||s(e.parentNode,(a=>{"Attack"===r(a.target)&&o("playerLogWidgets","Attack")}))}(i,a)))}],["changeButtonLabels",function(n){a('a[href*="=trade&"]',n).filter((a=>!e(a.href,"subcmd"))).forEach((a=>y("Trade",a))),a('a[href*="=createsecure&"]',n).forEach((a=>y("ST",a)))}],["trackLadderReset",function(e){aa=b(P),a(w,e).map(c).filter(na).forEach(ta)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await n(function(a){return a.map((a=>[a,c(a)])).filter(M).map((([a,e])=>[a,e,e.cells[2].innerHTML])).map(N)}(t))).filter(R).forEach(D)}]]
function ra(a,e,[n,t]){b(n)&&t(a,e)}function oa(a){if(v())return
const e=Y()
e&&function(a,e){sa.forEach(j(ra,a,e))}(e,a)}export{oa as a}
//# sourceMappingURL=addLogWidgets-C_pY6qIX.js.map
