import{h as a,a_ as e,_ as n,a$ as t,o as s,l as r,s as o,X as i,j as c,a1 as l,b0 as f,aR as u,q as p,b1 as d,i as m,u as g,aL as h,k as y,a9 as $,az as b,b2 as w,au as L,aK as P,a2 as j,c as v}from"./calfSystem-CT1aM4VG.js"
import{i as k}from"./insertHtmlAfterEnd-gTgXAdJt.js"
import{i as _,r as A}from"./relatePlayer-BP_NoLF9.js"
import{g as I}from"./getId-CEBzpjjo.js"
import{i as E}from"./insertHtmlAfterBegin-DfEq9-0f.js"
import{g as T}from"./getLogTime-BmI9d81c.js"
import{c as G}from"./createStyle-BtTqlvMl.js"
import{g as Y}from"./addLogColoring-lIHtJWbW.js"
import{p as B}from"./parseDateAsTimestamp-B5Csql9l.js"
const C=a=>[a,e(a.href,"target_username")],H=async([a,e])=>[a,e,await _(e)],S=a=>a?' class="pmAttackUrl"':""
const x=(a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${f}${u(e)}" data-tooltip="Add to Ignore List">Ignore</a>`
const R="fshGreen",z="fshRed",F=([,a])=>p(i,a),W=async([a,e,n])=>[e,n,await d(T(e),I(a))],D=([,,a])=>a?.s,M=a=>[18,21,31].includes(a.id),N=a=>`<span class="fshRed fshBold">${a}.</span>`
function U(a){return 18===a.id?N(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?N(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):N(`${a.params[0]} activated Fist Fight`)}function X(a,e,n){return 0!==a?`${e}:<span class="${n}">${h(a)}</span> `:""}function q([a,e,n]){const[t,s]=function(a){return a.includes("You were victorious over")?[R,`You were <span class="${R}">victorious</span> over `]:a.includes("You were defeated by")?[z,`You were <span class="${z}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),E(a.cells[2],s))
const r=function(a,e){const n=a.specials.filter(M).map(U),t=X(a.xp_gain,"XP stolen",e)+X(a.gold_gain,"Gold lost",e)+X(a.gold_stolen,"Gold stolen",e)+X(a.pvp_prestige_gain,"Prestige gain",e)+X(a.pvp_rating_change,"PvP change",e)
return t+(t&&n.length?"<br>":"")+(n.length?`${n.join("<br>")}`:"")}(n.r.combat,t)
r&&m(a.cells[2],g({innerHTML:r}))}async function K(a){const[,e]=await A(a)
return[`.fshPlayerColoring tr:nth-of-type(${c(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function J(a,[e,n]){return a[n]?a[n].push(e):a[n]=[e],a}const O={guild:"green",ally:"blue",enemy:"red"}
function Q([a,e]){return`${e.join(", ")} { color: ${O[a]}; }`}const V=([,a])=>a
function Z(a,e,n){const t=function(a){return $(a.filter(V).reduce(J,{})).map(Q)}(e)
t.length&&(!function(a,e){const[,,n]=a.rows[0].cells
n&&!e&&l(n,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,n),a.classList.add("fshPlayerColoring"),m(document.body,G(t.join("\n"))))}let aa=0
const ea=/You ranked \w{3,4} in your PvP Band! You have gained \d x PvP Ladder Token/
function na(a){return ea.test(r(a.cells[2]))}function ta(a){const e=B(u(a.cells[1]))
e>aa&&(L(P,e),aa=e)}const sa=[["addIgnoreLink",function(e,n){const t=a(i,e)
if(0===t.length)return
t.map((a=>[a,c(a)])).forEach((a=>function(a,[e,n]){l(n.cells[1],`<font size="1"><br>[ ${x(a,e)} ]</font>`),a||s(n.cells[1],(a=>{"Ignore"===r(a.target)&&o("playerLogWidgets","Ignore")}))}(n,a)))}],["colorPlayerNames",async function(e,t){const s=a(i,e)
if(!s.length)return
Z(e,await n(s.map(K)),t)}],["addAttackLinkToLog",async function(e,i){const c=a('a[href*="=createsecure&"]',e)
if(!c.length)return
const l=c.map(C);(await n(l.map(H))).filter((([,,a])=>!a)).forEach((a=>function(a,[e,n]){k(e,` | <a${S(a)} href="${t}${n}">Attack</a>`),a||s(e.parentNode,(a=>{"Attack"===r(a.target)&&o("playerLogWidgets","Attack")}))}(i,a)))}],["changeButtonLabels",function(n){a('a[href*="=trade&"]',n).filter((a=>!e(a.href,"subcmd"))).forEach((a=>y("Trade",a))),a('a[href*="=createsecure&"]',n).forEach((a=>y("ST",a)))}],["trackLadderReset",function(e){aa=b(P),a(w,e).map(c).filter(na).forEach(ta)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await n(function(a){return a.map((a=>[a,c(a)])).filter(F).map((([a,e])=>[a,e,e.cells[2].innerHTML])).map(W)}(t))).filter(D).forEach(q)}]]
function ra(a,e,[n,t]){b(n)&&t(a,e)}function oa(a){if(j())return
const e=Y()
e&&function(a,e){sa.forEach(v(ra,a,e))}(e,a)}export{oa as a}
//# sourceMappingURL=addLogWidgets-DgUPesGT.js.map
