import{k as a,av as e,aw as t,o as n,a8 as s,s as r,l as o,v as i,ax as c,aq as l,i as f,m as u,q as m,a9 as p,C as d,ai as g,an as h,ay as y,ae as $,w,c as b}from"./calfSystem-hszmVKJw.js"
import{a as j}from"./all-YfMtr2SN.js"
import{i as v}from"./insertHtmlAfterEnd-CaPUNm59.js"
import{i as L,r as P}from"./relatePlayer-B1fLSOhF.js"
import{c as k}from"./closestTr-B6tzN2bs.js"
import{g as A}from"./getId-CEBzpjjo.js"
import{i as I}from"./insertHtmlAfterBegin-x7-Ldj74.js"
import{a as _}from"./addCommas-C_h2HN8s.js"
import{g as E}from"./getCombat-Cqsa8sof.js"
import{c as T}from"./createStyle-BBlLUCwo.js"
import{g as C}from"./addLogColoring-DYC3utnD.js"
import{p as Y}from"./parseDateAsTimestamp-BSrGuAIU.js"
const x=a=>[a,e(a.href,"target_username")],B=async([a,e])=>[a,e,await L(e)],G=a=>a?' class="pmAttackUrl"':""
const S=(a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${c}${l(e)}" data-tooltip="Add to Ignore List">Ignore</a>`
const H="fshGreen",F="fshRed",R=([,a])=>m(o,a),U=async([a,e,t])=>[e,t,await E(e,A(a))],W=([,,a])=>a?.s,q=a=>[18,21,31].includes(a.id),z=a=>`<span class="fshRed fshBold">${a}.</span>`
function M(a){return 18===a.id?z(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?z(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):z(`${a.params[0]} activated Fist Fight`)}function N(a,e,t){return 0!==a?`${e}:<span class="${t}">${_(a)}</span> `:""}function D([a,e,t]){const[n,s]=function(a){return a.includes("You were victorious over")?[H,`You were <span class="${H}">victorious</span> over `]:a.includes("You were defeated by")?[F,`You were <span class="${F}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),I(a.cells[2],s))
const r=function(a,e){const t=a.specials.filter(q).map(M),n=N(a.xp_gain,"XP stolen",e)+N(a.gold_gain,"Gold lost",e)+N(a.gold_stolen,"Gold stolen",e)+N(a.pvp_prestige_gain,"Prestige gain",e)+N(a.pvp_rating_change,"PvP change",e)
return n+(n&&t.length?"<br>":"")+(t.length?`${t.join("<br>")}`:"")}(t.r.combat,n)
r&&f(a.cells[2],u({innerHTML:r}))}async function X(a){const[,e]=await P(a)
return[`.fshPlayerColoring tr:nth-of-type(${k(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function J(a,[e,t]){return a[t]?a[t].push(e):a[t]=[e],a}const K={guild:"green",ally:"blue",enemy:"red"}
function O([a,e]){return`${e.join(", ")} { color: ${K[a]}; }`}const Q=([,a])=>a
function V(a,e,t){const n=function(a){return d(a.filter(Q).reduce(J,{})).map(O)}(e)
n.length&&(!function(a,e){const[,,t]=a.rows[0].cells
t&&!e&&i(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,t),a.classList.add("fshPlayerColoring"),f(document.body,T(n.join("\n"))))}let Z=0
const aa=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function ea(a){return aa.test(s(a.cells[2]))}function ta(a){const e=Y(l(a.cells[1]))
e>Z&&($(h,e),Z=e)}const na=[["addIgnoreLink",function(e,t){const c=a(o,e)
if(0===c.length)return
c.map((a=>[a,k(a)])).forEach((a=>function(a,[e,t]){i(t.cells[1],`<font size="1"><br>[ ${S(a,e)} ]</font>`),a||n(t.cells[1],(a=>{"Ignore"===s(a.target)&&r("playerLogWidgets","Ignore")}))}(t,a)))}],["colorPlayerNames",async function(e,t){const n=a(o,e)
if(!n.length)return
V(e,await j(n.map(X)),t)}],["addAttackLinkToLog",async function(e,o){const i=a('a[href*="=createsecure&"]',e)
if(!i.length)return
const c=i.map(x);(await j(c.map(B))).filter((([,,a])=>!a)).forEach((a=>function(a,[e,o]){v(e,` | <a${G(a)} href="${t}${o}">Attack</a>`),a||n(e.parentNode,(a=>{"Attack"===s(a.target)&&r("playerLogWidgets","Attack")}))}(o,a)))}],["changeButtonLabels",function(t){a('a[href*="=trade&"]',t).filter((a=>!e(a.href,"subcmd"))).forEach((a=>p("Trade",a))),a('a[href*="=createsecure&"]',t).forEach((a=>p("ST",a)))}],["trackLadderReset",function(e){Z=g(h),a(y,e).map(k).filter(ea).forEach(ta)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await j(function(a){return a.map((a=>[a,k(a)])).filter(R).map((([a,e])=>[a,e,e.cells[2].innerHTML])).map(U)}(t))).filter(W).forEach(D)}]]
function sa(a,e,[t,n]){g(t)&&n(a,e)}function ra(a){if(w())return
const e=C()
e&&function(a,e){na.forEach(b(sa,a,e))}(e,a)}export{ra as a}
//# sourceMappingURL=addLogWidgets-ZSmRNt7w.js.map
