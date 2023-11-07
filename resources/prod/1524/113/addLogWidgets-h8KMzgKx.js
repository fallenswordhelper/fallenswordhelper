import{k as a,aq as t,ar as e,o as s,a3 as n,s as r,l as o,v as i,as as c,al as l,i as f,m as u,q as p,a4 as m,C as d,ad as g,ai as h,at as y,a9 as $,w as b,c as w}from"./calfSystem-VUa7wwu1.js"
import{a as j}from"./all-TTLWag-d.js"
import{i as v}from"./insertHtmlAfterEnd-mWU5NJlz.js"
import{i as L,r as P}from"./relatePlayer-V6RJXwRP.js"
import{c as k}from"./closestTr-MR2B7Xci.js"
import{g as A}from"./getId-f4M3YrQR.js"
import{i as E}from"./insertHtmlAfterBegin-8KwoSuGC.js"
import{a as I}from"./addCommas-olJWnOGa.js"
import{g as T}from"./getCombat-1PhWzSzZ.js"
import{c as _}from"./createStyle-RLyU9kJv.js"
import{g as C}from"./addLogColoring-dujTMIJI.js"
import{p as Y}from"./parseDateAsTimestamp-NqbbRm5P.js"
const B=a=>[a,t(a.href,"target_username")],G=async([a,t])=>[a,t,await L(t)],S=a=>a?' class="pmAttackUrl"':""
const x=(a,t)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${c}${l(t)}" data-tooltip="Add to Ignore List">Ignore</a>`
const H="fshGreen",q="fshRed",R=([,a])=>p(o,a),W=async([a,t,e])=>[t,e,await T(t,A(a))],z=([,,a])=>a?.s,F=a=>[18,21,31].includes(a.id),M=a=>`<span class="fshRed fshBold">${a}.</span>`
function N(a){return 18===a.id?M(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?M(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):M(`${a.params[0]} activated Fist Fight`)}function U(a,t,e){return 0!==a?`${t}:<span class="${e}">${I(a)}</span> `:""}function D([a,t,e]){const[s,n]=function(a){return a.includes("You were victorious over")?[H,`You were <span class="${H}">victorious</span> over `]:a.includes("You were defeated by")?[q,`You were <span class="${q}">defeated</span> by `]:["",null]}(t)
n&&(a.cells[2].firstChild.remove(),E(a.cells[2],n))
const r=function(a,t){const e=a.specials.filter(F).map(N),s=U(a.xp_gain,"XP stolen",t)+U(a.gold_gain,"Gold lost",t)+U(a.gold_stolen,"Gold stolen",t)+U(a.pvp_prestige_gain,"Prestige gain",t)+U(a.pvp_rating_change,"PvP change",t)
return s+(s&&e.length?"<br>":"")+(e.length?`${e.join("<br>")}`:"")}(e.r.combat,s)
r&&f(a.cells[2],u({innerHTML:r}))}async function X(a){const[,t]=await P(a)
return[`.fshPlayerColoring tr:nth-of-type(${k(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,t]}function J(a,[t,e]){return a[e]?a[e].push(t):a[e]=[t],a}const K={guild:"green",ally:"blue",enemy:"red"}
function O([a,t]){return`${t.join(", ")} { color: ${K[a]}; }`}const Q=([,a])=>a
function V(a,t,e){const s=function(a){return d(a.filter(Q).reduce(J,{})).map(O)}(t)
s.length&&(!function(a,t){const[,,e]=a.rows[0].cells
e&&!t&&i(e,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,e),a.classList.add("fshPlayerColoring"),f(document.body,_(s.join("\n"))))}let Z=0
const aa=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function ta(a){return aa.test(n(a.cells[2]))}function ea(a){const t=Y(l(a.cells[1]))
t>Z&&($(h,t),Z=t)}const sa=[["addIgnoreLink",function(t,e){const c=a(o,t)
if(0===c.length)return
c.map((a=>[a,k(a)])).forEach((a=>function(a,[t,e]){i(e.cells[1],`<font size="1"><br>[ ${x(a,t)} ]</font>`),a||s(e.cells[1],(a=>{"Ignore"===n(a.target)&&r("playerLogWidgets","Ignore")}))}(e,a)))}],["colorPlayerNames",async function(t,e){const s=a(o,t)
if(!s.length)return
V(t,await j(s.map(X)),e)}],["addAttackLinkToLog",async function(t,o){const i=a('a[href*="=createsecure&"]',t)
if(!i.length)return
const c=i.map(B);(await j(c.map(G))).filter((([,,a])=>!a)).forEach((a=>function(a,[t,o]){v(t,` | <a${S(a)} href="${e}${o}">Attack</a>`),a||s(t.parentNode,(a=>{"Attack"===n(a.target)&&r("playerLogWidgets","Attack")}))}(o,a)))}],["changeButtonLabels",function(e){a('a[href*="=trade&"]',e).filter((a=>!t(a.href,"subcmd"))).forEach((a=>m("Trade",a))),a('a[href*="=createsecure&"]',e).forEach((a=>m("ST",a)))}],["trackLadderReset",function(t){Z=g(h),a(y,t).map(k).filter(ta).forEach(ea)}],["showPvPSummaryInLog",async function(t){const e=a('a[href*="&combat_id="]',t)
if(0===e.length)return;(await j(function(a){return a.map((a=>[a,k(a)])).filter(R).map((([a,t])=>[a,t,t.cells[2].innerHTML])).map(W)}(e))).filter(z).forEach(D)}]]
function na(a,t,[e,s]){g(e)&&s(a,t)}function ra(a){if(b())return
const t=C()
t&&function(a,t){sa.forEach(w(na,a,t))}(t,a)}export{ra as a}
//# sourceMappingURL=addLogWidgets-h8KMzgKx.js.map
