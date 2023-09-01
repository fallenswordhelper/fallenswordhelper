import{j as a,as as n,at as s,k as t,v as e,au as r,an as o,i,l as c,q as f,a6 as l,C as u,af as m,ak as p,av as d,a5 as h,ab as g,w as y,c as $}from"./calfSystem-076d7a01.js"
import{a as b}from"./all-414e0607.js"
import{i as w}from"./insertHtmlAfterEnd-69c1ccf1.js"
import{i as j,r as v}from"./relatePlayer-c663a3a1.js"
import{c as P}from"./closestTr-efa2e666.js"
import{g as L}from"./getId-e4d83057.js"
import{i as k}from"./insertHtmlAfterBegin-19f56bcb.js"
import{a as _}from"./addCommas-47d6aaa1.js"
import{g as E}from"./getCombat-ae9b05b4.js"
import{c as T}from"./createStyle-817f1cf1.js"
import{g as A}from"./addLogColoring-7b865162.js"
import{p as C}from"./parseDateAsTimestamp-950daf66.js"
const I=a=>[a,n(a.href,"target_username")],G=async([a,n])=>[a,n,await j(n)],Y=a=>a?' class="pmAttackUrl"':""
const B=(a,n)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${r}${o(n)}" data-tooltip="Add to Ignore List">Ignore</a>`
const S="fshGreen",x="fshRed",H=([,a])=>f(t,a),R=async([a,n,s])=>[n,s,await E(n,L(a))],U=([,,a])=>a?.s,q=a=>[18,21,31].includes(a.id),z=a=>`<span class="fshRed fshBold">${a}.</span>`
function F(a){return 18===a.id?z(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?z(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):z(`${a.params[0]} activated Fist Fight`)}function M(a,n,s){return 0!==a?`${n}:<span class="${s}">${_(a)}</span> `:""}function D([a,n,s]){const[t,e]=function(a){return a.includes("You were victorious over")?[S,`You were <span class="${S}">victorious</span> over `]:a.includes("You were defeated by")?[x,`You were <span class="${x}">defeated</span> by `]:["",null]}(n)
e&&(a.cells[2].firstChild.remove(),k(a.cells[2],e))
const r=function(a,n){const s=a.specials.filter(q).map(F),t=M(a.xp_gain,"XP stolen",n)+M(a.gold_gain,"Gold lost",n)+M(a.gold_stolen,"Gold stolen",n)+M(a.pvp_prestige_gain,"Prestige gain",n)+M(a.pvp_rating_change,"PvP change",n)
return t+(t&&s.length?"<br>":"")+(s.length?`${s.join("<br>")}`:"")}(s.r.combat,t)
r&&i(a.cells[2],c({innerHTML:r}))}async function N(a){const[,n]=await v(a)
return[`.fshPlayerColoring tr:nth-of-type(${P(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,n]}function W(a,[n,s]){return a[s]?a[s].push(n):a[s]=[n],a}const X={guild:"green",ally:"blue",enemy:"red"}
function J([a,n]){return`${n.join(", ")} { color: ${X[a]}; }`}const K=([,a])=>a
function O(a,n,s){const t=function(a){return u(a.filter(K).reduce(W,{})).map(J)}(n)
t.length&&(!function(a,n){const[,,s]=a.rows[0].cells
s&&!n&&e(s,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,s),a.classList.add("fshPlayerColoring"),i(document.body,T(t.join("\n"))))}let Q=0
const V=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Z(a){return V.test(h(a.cells[2]))}function aa(a){const n=C(o(a.cells[1]))
n>Q&&(g(p,n),Q=n)}const na=[["addIgnoreLink",function(n,s){const r=a(t,n)
if(0===r.length)return
r.map((a=>[a,P(a)])).forEach((a=>function(a,[n,s]){e(s.cells[1],`<font size="1"><br>[ ${B(a,n)} ]</font>`)}(s,a)))}],["colorPlayerNames",async function(n,s){const e=a(t,n)
if(!e.length)return
O(n,await b(e.map(N)),s)}],["addAttackLinkToLog",async function(n,t){const e=a('a[href*="=createsecure&"]',n)
if(!e.length)return
const r=e.map(I);(await b(r.map(G))).filter((([,,a])=>!a)).forEach((a=>function(a,[n,t]){w(n,` | <a${Y(a)} href="${s}${t}">Attack</a>`)}(t,a)))}],["changeButtonLabels",function(s){a('a[href*="=trade&"]',s).filter((a=>!n(a.href,"subcmd"))).forEach((a=>l("Trade",a))),a('a[href*="=createsecure&"]',s).forEach((a=>l("ST",a)))}],["trackLadderReset",function(n){Q=m(p),a(d,n).map(P).filter(Z).forEach(aa)}],["showPvPSummaryInLog",async function(n){const s=a('a[href*="&combat_id="]',n)
if(0===s.length)return;(await b(function(a){return a.map((a=>[a,P(a)])).filter(H).map((([a,n])=>[a,n,n.cells[2].innerHTML])).map(R)}(s))).filter(U).forEach(D)}]]
function sa(a,n,[s,t]){m(s)&&t(a,n)}function ta(a){if(y())return
const n=A()
n&&function(a,n){na.forEach($(sa,a,n))}(n,a)}export{ta as a}
//# sourceMappingURL=addLogWidgets-1fd30c1b.js.map
