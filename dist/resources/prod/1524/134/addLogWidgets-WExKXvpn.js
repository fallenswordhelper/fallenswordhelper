import{k as a,ax as e,ay as t,o as s,a8 as n,s as r,l as o,v as i,az as c,as as l,i as f,m as u,q as m,a9 as p,C as d,ai as g,an as h,aA as y,ae as $,w as b,c as w}from"./calfSystem-CyLCrHqa.js"
import{a as j}from"./all-YfMtr2SN.js"
import{i as L}from"./insertHtmlAfterEnd-C4h-p4s1.js"
import{i as v,r as P}from"./relatePlayer-eSntuNDA.js"
import{c as k}from"./closestTr-BHr42g8T.js"
import{g as A}from"./getId-CEBzpjjo.js"
import{i as I}from"./insertHtmlAfterBegin-BLgGdU9i.js"
import{a as T}from"./addCommas-C_h2HN8s.js"
import{g as _}from"./getCombat-BLFNeo0i.js"
import{g as E}from"./getLogTime-DzZU0W-t.js"
import{c as C}from"./createStyle-pyEHBlBg.js"
import{g as Y}from"./addLogColoring-SgMFu7ED.js"
import{p as x}from"./parseDateAsTimestamp-CUlScXmd.js"
const B=a=>[a,e(a.href,"target_username")],G=async([a,e])=>[a,e,await v(e)],S=a=>a?' class="pmAttackUrl"':""
const H=(a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${c}${l(e)}" data-tooltip="Add to Ignore List">Ignore</a>`
const z="fshGreen",F="fshRed",R=([,a])=>m(o,a),U=async([a,e,t])=>[e,t,await _(E(e),A(a))],W=([,,a])=>a?.s,M=a=>[18,21,31].includes(a.id),N=a=>`<span class="fshRed fshBold">${a}.</span>`
function q(a){return 18===a.id?N(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?N(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):N(`${a.params[0]} activated Fist Fight`)}function D(a,e,t){return 0!==a?`${e}:<span class="${t}">${T(a)}</span> `:""}function X([a,e,t]){const[s,n]=function(a){return a.includes("You were victorious over")?[z,`You were <span class="${z}">victorious</span> over `]:a.includes("You were defeated by")?[F,`You were <span class="${F}">defeated</span> by `]:["",null]}(e)
n&&(a.cells[2].firstChild.remove(),I(a.cells[2],n))
const r=function(a,e){const t=a.specials.filter(M).map(q),s=D(a.xp_gain,"XP stolen",e)+D(a.gold_gain,"Gold lost",e)+D(a.gold_stolen,"Gold stolen",e)+D(a.pvp_prestige_gain,"Prestige gain",e)+D(a.pvp_rating_change,"PvP change",e)
return s+(s&&t.length?"<br>":"")+(t.length?`${t.join("<br>")}`:"")}(t.r.combat,s)
r&&f(a.cells[2],u({innerHTML:r}))}async function J(a){const[,e]=await P(a)
return[`.fshPlayerColoring tr:nth-of-type(${k(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function K(a,[e,t]){return a[t]?a[t].push(e):a[t]=[e],a}const O={guild:"green",ally:"blue",enemy:"red"}
function Q([a,e]){return`${e.join(", ")} { color: ${O[a]}; }`}const V=([,a])=>a
function Z(a,e,t){const s=function(a){return d(a.filter(V).reduce(K,{})).map(Q)}(e)
s.length&&(!function(a,e){const[,,t]=a.rows[0].cells
t&&!e&&i(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,t),a.classList.add("fshPlayerColoring"),f(document.body,C(s.join("\n"))))}let aa=0
const ea=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function ta(a){return ea.test(n(a.cells[2]))}function sa(a){const e=x(l(a.cells[1]))
e>aa&&($(h,e),aa=e)}const na=[["addIgnoreLink",function(e,t){const c=a(o,e)
if(0===c.length)return
c.map((a=>[a,k(a)])).forEach((a=>function(a,[e,t]){i(t.cells[1],`<font size="1"><br>[ ${H(a,e)} ]</font>`),a||s(t.cells[1],(a=>{"Ignore"===n(a.target)&&r("playerLogWidgets","Ignore")}))}(t,a)))}],["colorPlayerNames",async function(e,t){const s=a(o,e)
if(!s.length)return
Z(e,await j(s.map(J)),t)}],["addAttackLinkToLog",async function(e,o){const i=a('a[href*="=createsecure&"]',e)
if(!i.length)return
const c=i.map(B);(await j(c.map(G))).filter((([,,a])=>!a)).forEach((a=>function(a,[e,o]){L(e,` | <a${S(a)} href="${t}${o}">Attack</a>`),a||s(e.parentNode,(a=>{"Attack"===n(a.target)&&r("playerLogWidgets","Attack")}))}(o,a)))}],["changeButtonLabels",function(t){a('a[href*="=trade&"]',t).filter((a=>!e(a.href,"subcmd"))).forEach((a=>p("Trade",a))),a('a[href*="=createsecure&"]',t).forEach((a=>p("ST",a)))}],["trackLadderReset",function(e){aa=g(h),a(y,e).map(k).filter(ta).forEach(sa)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await j(function(a){return a.map((a=>[a,k(a)])).filter(R).map((([a,e])=>[a,e,e.cells[2].innerHTML])).map(U)}(t))).filter(W).forEach(X)}]]
function ra(a,e,[t,s]){g(t)&&s(a,e)}function oa(a){if(b())return
const e=Y()
e&&function(a,e){na.forEach(w(ra,a,e))}(e,a)}export{oa as a}
//# sourceMappingURL=addLogWidgets-WExKXvpn.js.map
