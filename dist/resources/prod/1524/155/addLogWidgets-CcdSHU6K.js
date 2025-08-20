import{h as a,a_ as e,_ as n,a$ as t,o as s,l as r,s as o,X as i,j as c,a1 as l,b0 as f,aR as u,q as p,b1 as d,i as m,u as g,aL as h,k as y,a9 as $,az as b,b2 as w,au as L,aK as j,a2 as P,c as v}from"./calfSystem-UyQ_FKFu.js"
import{i as k}from"./insertHtmlAfterEnd-CRyhSC3a.js"
import{i as _,r as I}from"./relatePlayer-Bc_g8ToI.js"
import{g as A}from"./getId-CEBzpjjo.js"
import{i as E}from"./insertHtmlAfterBegin-jBb92bbU.js"
import{g as T}from"./getLogTime-BkXR0j6y.js"
import{c as B}from"./createStyle-BGl-LDQE.js"
import{g as G}from"./addLogColoring-B20bmBIe.js"
import{p as Y}from"./parseDateAsTimestamp-uKlPe52O.js"
const H=a=>[a,e(a.href,"target_username")],S=async([a,e])=>[a,e,await _(e)]
function x(a,[e,n]){l(n.cells[1],`<font size="1"><br>[ ${((a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${f}${u(e)}" data-tooltip="Add to Ignore List">Ignore</a>`)(a,e)} ]</font>`),a||s(n.cells[1],a=>{"Ignore"===r(a.target)&&o("playerLogWidgets","Ignore")})}const z="fshGreen",C="fshRed",R=([,a])=>p(i,a),W=async([a,e,n])=>[e,n,await d(T(e),A(a))],D=([,,a])=>a?.s,F=a=>[18,21,31].includes(a.id),M=a=>`<span class="fshRed fshBold">${a}.</span>`
function N(a){return 18===a.id?M(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?M(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):M(`${a.params[0]} activated Fist Fight`)}function U(a,e,n){return 0!==a?`${e}:<span class="${n}">${h(a)}</span> `:""}function X([a,e,n]){const[t,s]=function(a){return a.includes("You were victorious over")?[z,`You were <span class="${z}">victorious</span> over `]:a.includes("You were defeated by")?[C,`You were <span class="${C}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),E(a.cells[2],s))
const r=function(a,e){const n=a.specials.filter(F).map(N),t=U(a.xp_gain,"XP stolen",e)+U(a.gold_gain,"Gold lost",e)+U(a.gold_stolen,"Gold stolen",e)+U(a.pvp_prestige_gain,"Prestige gain",e)+U(a.pvp_rating_change,"PvP change",e)
return t+(t&&n.length?"<br>":"")+(n.length?`${n.join("<br>")}`:"")}(n.r.combat,t)
r&&m(a.cells[2],g({innerHTML:r}))}async function q(a){const[,e]=await I(a)
return[`.fshPlayerColoring tr:nth-of-type(${c(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function K(a,[e,n]){return a[n]?a[n].push(e):a[n]=[e],a}const J={guild:"green",ally:"blue",enemy:"red"}
function O([a,e]){return`${e.join(", ")} { color: ${J[a]}; }`}const Q=([,a])=>a
function V(a,e,n){const t=function(a){return $(a.filter(Q).reduce(K,{})).map(O)}(e)
t.length&&(!function(a,e){const[,,n]=a.rows[0].cells
n&&!e&&l(n,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,n),a.classList.add("fshPlayerColoring"),m(document.body,B(t.join("\n"))))}let Z=0
const aa=/You ranked \w{3,4} in your PvP Band! You have gained \d x PvP Ladder Token/
function ea(a){return aa.test(r(a.cells[2]))}function na(a){const e=Y(u(a.cells[1]))
e>Z&&(L(j,e),Z=e)}const ta=[["addIgnoreLink",function(e,n){const t=a(i,e)
if(0===t.length)return
t.map(a=>[a,c(a)]).forEach(a=>x(n,a))}],["colorPlayerNames",async function(e,t){const s=a(i,e)
if(!s.length)return
V(e,await n(s.map(q)),t)}],["addAttackLinkToLog",async function(e,i){const c=a('a[href*="=createsecure&"]',e)
if(!c.length)return
const l=c.map(H);(await n(l.map(S))).filter(([,,a])=>!a).forEach(a=>function(a,[e,n]){k(e,` | <a${(a=>a?' class="pmAttackUrl"':"")(a)} href="${t}${n}">Attack</a>`),a||s(e.parentNode,a=>{"Attack"===r(a.target)&&o("playerLogWidgets","Attack")})}(i,a))}],["changeButtonLabels",function(n){a('a[href*="=trade&"]',n).filter(a=>!e(a.href,"subcmd")).forEach(a=>y("Trade",a)),a('a[href*="=createsecure&"]',n).forEach(a=>y("ST",a))}],["trackLadderReset",function(e){Z=b(j),a(w,e).map(c).filter(ea).forEach(na)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await n(function(a){return a.map(a=>[a,c(a)]).filter(R).map(([a,e])=>[a,e,e.cells[2].innerHTML]).map(W)}(t))).filter(D).forEach(X)}]]
function sa(a,e,[n,t]){b(n)&&t(a,e)}function ra(a){if(P())return
const e=G()
e&&function(a,e){ta.forEach(v(sa,a,e))}(e,a)}export{ra as a}
//# sourceMappingURL=addLogWidgets-CcdSHU6K.js.map
