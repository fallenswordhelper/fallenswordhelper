import{k as a,av as e,aw as t,o as s,a8 as n,s as r,l as o,v as i,ax as c,aq as l,i as f,m as u,q as m,a9 as p,C as d,ai as g,an as h,ay as y,ae as $,w,c as b}from"./calfSystem-G1dN925O.js"
import{a as j}from"./all-TTLWag-d.js"
import{i as v}from"./insertHtmlAfterEnd-s8cbAmD-.js"
import{i as L,r as P}from"./relatePlayer-17ysHdFJ.js"
import{c as k}from"./closestTr-ewZQ2axu.js"
import{g as _}from"./getId-f4M3YrQR.js"
import{i as A}from"./insertHtmlAfterBegin-lQu1LWMD.js"
import{a as E}from"./addCommas-olJWnOGa.js"
import{g as I}from"./getCombat-fqq7tGyf.js"
import{c as T}from"./createStyle-kdSx2xlE.js"
import{g as C}from"./addLogColoring-B-h0naQa.js"
import{p as Y}from"./parseDateAsTimestamp-XLvjzemG.js"
const x=a=>[a,e(a.href,"target_username")],B=async([a,e])=>[a,e,await L(e)],G=a=>a?' class="pmAttackUrl"':""
const S=(a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${c}${l(e)}" data-tooltip="Add to Ignore List">Ignore</a>`
const H="fshGreen",R="fshRed",W=([,a])=>m(o,a),q=async([a,e,t])=>[e,t,await I(e,_(a))],z=([,,a])=>a?.s,F=a=>[18,21,31].includes(a.id),M=a=>`<span class="fshRed fshBold">${a}.</span>`
function N(a){return 18===a.id?M(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?M(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):M(`${a.params[0]} activated Fist Fight`)}function U(a,e,t){return 0!==a?`${e}:<span class="${t}">${E(a)}</span> `:""}function D([a,e,t]){const[s,n]=function(a){return a.includes("You were victorious over")?[H,`You were <span class="${H}">victorious</span> over `]:a.includes("You were defeated by")?[R,`You were <span class="${R}">defeated</span> by `]:["",null]}(e)
n&&(a.cells[2].firstChild.remove(),A(a.cells[2],n))
const r=function(a,e){const t=a.specials.filter(F).map(N),s=U(a.xp_gain,"XP stolen",e)+U(a.gold_gain,"Gold lost",e)+U(a.gold_stolen,"Gold stolen",e)+U(a.pvp_prestige_gain,"Prestige gain",e)+U(a.pvp_rating_change,"PvP change",e)
return s+(s&&t.length?"<br>":"")+(t.length?`${t.join("<br>")}`:"")}(t.r.combat,s)
r&&f(a.cells[2],u({innerHTML:r}))}async function X(a){const[,e]=await P(a)
return[`.fshPlayerColoring tr:nth-of-type(${k(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function J(a,[e,t]){return a[t]?a[t].push(e):a[t]=[e],a}const K={guild:"green",ally:"blue",enemy:"red"}
function O([a,e]){return`${e.join(", ")} { color: ${K[a]}; }`}const Q=([,a])=>a
function V(a,e,t){const s=function(a){return d(a.filter(Q).reduce(J,{})).map(O)}(e)
s.length&&(!function(a,e){const[,,t]=a.rows[0].cells
t&&!e&&i(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,t),a.classList.add("fshPlayerColoring"),f(document.body,T(s.join("\n"))))}let Z=0
const aa=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function ea(a){return aa.test(n(a.cells[2]))}function ta(a){const e=Y(l(a.cells[1]))
e>Z&&($(h,e),Z=e)}const sa=[["addIgnoreLink",function(e,t){const c=a(o,e)
if(0===c.length)return
c.map((a=>[a,k(a)])).forEach((a=>function(a,[e,t]){i(t.cells[1],`<font size="1"><br>[ ${S(a,e)} ]</font>`),a||s(t.cells[1],(a=>{"Ignore"===n(a.target)&&r("playerLogWidgets","Ignore")}))}(t,a)))}],["colorPlayerNames",async function(e,t){const s=a(o,e)
if(!s.length)return
V(e,await j(s.map(X)),t)}],["addAttackLinkToLog",async function(e,o){const i=a('a[href*="=createsecure&"]',e)
if(!i.length)return
const c=i.map(x);(await j(c.map(B))).filter((([,,a])=>!a)).forEach((a=>function(a,[e,o]){v(e,` | <a${G(a)} href="${t}${o}">Attack</a>`),a||s(e.parentNode,(a=>{"Attack"===n(a.target)&&r("playerLogWidgets","Attack")}))}(o,a)))}],["changeButtonLabels",function(t){a('a[href*="=trade&"]',t).filter((a=>!e(a.href,"subcmd"))).forEach((a=>p("Trade",a))),a('a[href*="=createsecure&"]',t).forEach((a=>p("ST",a)))}],["trackLadderReset",function(e){Z=g(h),a(y,e).map(k).filter(ea).forEach(ta)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await j(function(a){return a.map((a=>[a,k(a)])).filter(W).map((([a,e])=>[a,e,e.cells[2].innerHTML])).map(q)}(t))).filter(z).forEach(D)}]]
function na(a,e,[t,s]){g(t)&&s(a,e)}function ra(a){if(w())return
const e=C()
e&&function(a,e){sa.forEach(b(na,a,e))}(e,a)}export{ra as a}
//# sourceMappingURL=addLogWidgets-f8yaomiF.js.map
