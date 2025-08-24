import{h as a,a$ as e,a0 as n,b0 as t,o as s,l as r,s as o,Y as i,j as c,a2 as l,b1 as f,aS as u,q as p,b2 as d,i as m,u as g,aM as h,k as y,aa as $,aA as b,b3 as w,av as L,aL as v,a3 as P,c as j}from"./calfSystem-79LsojAC.js"
import{i as k}from"./insertHtmlAfterEnd-Cc8z8uuA.js"
import{i as A,r as E}from"./relatePlayer-B8EeiZCZ.js"
import{g as I}from"./getId-CEBzpjjo.js"
import{i as _}from"./insertHtmlAfterBegin-BEWmbMGu.js"
import{g as T}from"./getLogTime-C2qvq69p.js"
import{c as Y}from"./createStyle-BdMrx8ah.js"
import{g as S}from"./addLogColoring-iTmZgx_R.js"
import{p as B}from"./parseDateAsTimestamp-CfPUfnnR.js"
const C=a=>[a,e(a.href,"target_username")],G=async([a,e])=>[a,e,await A(e)]
function x(a,[e,n]){l(n.cells[1],`<font size="1"><br>[ ${((a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${f}${u(e)}" data-tooltip="Add to Ignore List">Ignore</a>`)(a,e)} ]</font>`),a||s(n.cells[1],a=>{"Ignore"===r(a.target)&&o("playerLogWidgets","Ignore")})}const H="fshGreen",z="fshRed",M=([,a])=>p(i,a),R=async([a,e,n])=>[e,n,await d(T(e),I(a))],W=([,,a])=>a?.s,D=a=>[18,21,31].includes(a.id),F=a=>`<span class="fshRed fshBold">${a}.</span>`
function N(a){return 18===a.id?F(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?F(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):F(`${a.params[0]} activated Fist Fight`)}function U(a,e,n){return 0!==a?`${e}:<span class="${n}">${h(a)}</span> `:""}function q([a,e,n]){const[t,s]=function(a){return a.includes("You were victorious over")?[H,`You were <span class="${H}">victorious</span> over `]:a.includes("You were defeated by")?[z,`You were <span class="${z}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),_(a.cells[2],s))
const r=function(a,e){const n=a.specials.filter(D).map(N),t=U(a.xp_gain,"XP stolen",e)+U(a.gold_gain,"Gold lost",e)+U(a.gold_stolen,"Gold stolen",e)+U(a.pvp_prestige_gain,"Prestige gain",e)+U(a.pvp_rating_change,"PvP change",e)
return t+(t&&n.length?"<br>":"")+(n.length?`${n.join("<br>")}`:"")}(n.r.combat,t)
r&&m(a.cells[2],g({innerHTML:r}))}async function X(a){const[,e]=await E(a)
return[`.fshPlayerColoring tr:nth-of-type(${c(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function J(a,[e,n]){return a[n]?a[n].push(e):a[n]=[e],a}const K={guild:"green",ally:"blue",enemy:"red"}
function O([a,e]){return`${e.join(", ")} { color: ${K[a]}; }`}const Q=([,a])=>a
function V(a,e,n){const t=function(a){return $(a.filter(Q).reduce(J,{})).map(O)}(e)
t.length&&(!function(a,e){const[,,n]=a.rows[0].cells
n&&!e&&l(n,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,n),a.classList.add("fshPlayerColoring"),m(document.body,Y(t.join("\n"))))}let Z=0
const aa=/You ranked \w{3,4} in your PvP Band! You have gained \d x PvP Ladder Token/
function ea(a){return aa.test(r(a.cells[2]))}function na(a){const e=B(u(a.cells[1]))
e>Z&&(L(v,e),Z=e)}const ta=[["addIgnoreLink",function(e,n){const t=a(i,e)
if(0===t.length)return
t.map(a=>[a,c(a)]).forEach(a=>x(n,a))}],["colorPlayerNames",async function(e,t){const s=a(i,e)
if(!s.length)return
V(e,await n(s.map(X)),t)}],["addAttackLinkToLog",async function(e,i){const c=a('a[href*="=createsecure&"]',e)
if(!c.length)return
const l=c.map(C);(await n(l.map(G))).filter(([,,a])=>!a).forEach(a=>function(a,[e,n]){k(e,` | <a${(a=>a?' class="pmAttackUrl"':"")(a)} href="${t}${n}">Attack</a>`),a||s(e.parentNode,a=>{"Attack"===r(a.target)&&o("playerLogWidgets","Attack")})}(i,a))}],["changeButtonLabels",function(n){a('a[href*="=trade&"]',n).filter(a=>!e(a.href,"subcmd")).forEach(a=>y("Trade",a)),a('a[href*="=createsecure&"]',n).forEach(a=>y("ST",a))}],["trackLadderReset",function(e){Z=b(v),a(w,e).map(c).filter(ea).forEach(na)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await n(function(a){return a.map(a=>[a,c(a)]).filter(M).map(([a,e])=>[a,e,e.cells[2].innerHTML]).map(R)}(t))).filter(W).forEach(q)}]]
function sa(a,e,[n,t]){b(n)&&t(a,e)}function ra(a){if(P())return
const e=S()
e&&function(a,e){ta.forEach(j(sa,a,e))}(e,a)}export{ra as a}
//# sourceMappingURL=addLogWidgets-DMwwBii_.js.map
