import{k as a,ax as e,ay as t,o as s,a8 as n,s as r,l as o,v as i,az as c,as as l,i as f,m as u,q as m,a9 as p,C as d,ai as g,an as h,aA as y,ae as $,w as b,c as j}from"./calfSystem-DZGU7L1H.js"
import{a as w}from"./all-YfMtr2SN.js"
import{i as L}from"./insertHtmlAfterEnd-KGlhaZe7.js"
import{i as v,r as P}from"./relatePlayer-BVBGJi9A.js"
import{c as k}from"./closestTr-DSuc1sz5.js"
import{g as A}from"./getId-CEBzpjjo.js"
import{i as I}from"./insertHtmlAfterBegin-DorDFB-h.js"
import{a as T}from"./addCommas-C_h2HN8s.js"
import{g as _}from"./getCombat-c7Wy21TU.js"
import{g as E}from"./getLogTime-D9qLymez.js"
import{c as C}from"./createStyle-CswKiwDd.js"
import{g as S}from"./addLogColoring-Cat5rg0z.js"
import{p as Y}from"./parseDateAsTimestamp-CSNJMBXT.js"
const x=a=>[a,e(a.href,"target_username")],B=async([a,e])=>[a,e,await v(e)],G=a=>a?' class="pmAttackUrl"':""
const H=(a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${c}${l(e)}" data-tooltip="Add to Ignore List">Ignore</a>`
const z="fshGreen",R="fshRed",W=([,a])=>m(o,a),D=async([a,e,t])=>[e,t,await _(E(e),A(a))],F=([,,a])=>a?.s,M=a=>[18,21,31].includes(a.id),N=a=>`<span class="fshRed fshBold">${a}.</span>`
function U(a){return 18===a.id?N(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?N(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):N(`${a.params[0]} activated Fist Fight`)}function q(a,e,t){return 0!==a?`${e}:<span class="${t}">${T(a)}</span> `:""}function X([a,e,t]){const[s,n]=function(a){return a.includes("You were victorious over")?[z,`You were <span class="${z}">victorious</span> over `]:a.includes("You were defeated by")?[R,`You were <span class="${R}">defeated</span> by `]:["",null]}(e)
n&&(a.cells[2].firstChild.remove(),I(a.cells[2],n))
const r=function(a,e){const t=a.specials.filter(M).map(U),s=q(a.xp_gain,"XP stolen",e)+q(a.gold_gain,"Gold lost",e)+q(a.gold_stolen,"Gold stolen",e)+q(a.pvp_prestige_gain,"Prestige gain",e)+q(a.pvp_rating_change,"PvP change",e)
return s+(s&&t.length?"<br>":"")+(t.length?`${t.join("<br>")}`:"")}(t.r.combat,s)
r&&f(a.cells[2],u({innerHTML:r}))}async function Z(a){const[,e]=await P(a)
return[`.fshPlayerColoring tr:nth-of-type(${k(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function J(a,[e,t]){return a[t]?a[t].push(e):a[t]=[e],a}const K={guild:"green",ally:"blue",enemy:"red"}
function O([a,e]){return`${e.join(", ")} { color: ${K[a]}; }`}const Q=([,a])=>a
function V(a,e,t){const s=function(a){return d(a.filter(Q).reduce(J,{})).map(O)}(e)
s.length&&(!function(a,e){const[,,t]=a.rows[0].cells
t&&!e&&i(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,t),a.classList.add("fshPlayerColoring"),f(document.body,C(s.join("\n"))))}let aa=0
const ea=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function ta(a){return ea.test(n(a.cells[2]))}function sa(a){const e=Y(l(a.cells[1]))
e>aa&&($(h,e),aa=e)}const na=[["addIgnoreLink",function(e,t){const c=a(o,e)
if(0===c.length)return
c.map((a=>[a,k(a)])).forEach((a=>function(a,[e,t]){i(t.cells[1],`<font size="1"><br>[ ${H(a,e)} ]</font>`),a||s(t.cells[1],(a=>{"Ignore"===n(a.target)&&r("playerLogWidgets","Ignore")}))}(t,a)))}],["colorPlayerNames",async function(e,t){const s=a(o,e)
if(!s.length)return
V(e,await w(s.map(Z)),t)}],["addAttackLinkToLog",async function(e,o){const i=a('a[href*="=createsecure&"]',e)
if(!i.length)return
const c=i.map(x);(await w(c.map(B))).filter((([,,a])=>!a)).forEach((a=>function(a,[e,o]){L(e,` | <a${G(a)} href="${t}${o}">Attack</a>`),a||s(e.parentNode,(a=>{"Attack"===n(a.target)&&r("playerLogWidgets","Attack")}))}(o,a)))}],["changeButtonLabels",function(t){a('a[href*="=trade&"]',t).filter((a=>!e(a.href,"subcmd"))).forEach((a=>p("Trade",a))),a('a[href*="=createsecure&"]',t).forEach((a=>p("ST",a)))}],["trackLadderReset",function(e){aa=g(h),a(y,e).map(k).filter(ta).forEach(sa)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await w(function(a){return a.map((a=>[a,k(a)])).filter(W).map((([a,e])=>[a,e,e.cells[2].innerHTML])).map(D)}(t))).filter(F).forEach(X)}]]
function ra(a,e,[t,s]){g(t)&&s(a,e)}function oa(a){if(b())return
const e=S()
e&&function(a,e){na.forEach(j(ra,a,e))}(e,a)}export{oa as a}
//# sourceMappingURL=addLogWidgets-DgVgskWS.js.map
