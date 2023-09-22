import{j as a,aq as n,ar as s,k as t,v as e,as as r,al as o,i,l as c,q as f,a4 as l,C as u,ad as m,ai as p,at as d,a3 as h,a9 as g,w as y,c as $}from"./calfSystem-4830a18d.js"
import{a as b}from"./all-414e0607.js"
import{i as w}from"./insertHtmlAfterEnd-52cca1f4.js"
import{i as j,r as v}from"./relatePlayer-78a9d53c.js"
import{c as P}from"./closestTr-a662daf2.js"
import{g as L}from"./getId-e4d83057.js"
import{i as k}from"./insertHtmlAfterBegin-32e03ae0.js"
import{a as E}from"./addCommas-47d6aaa1.js"
import{g as T}from"./getCombat-dce41474.js"
import{c as _}from"./createStyle-79b7cdab.js"
import{g as A}from"./addLogColoring-7882f531.js"
import{p as C}from"./parseDateAsTimestamp-2956e520.js"
const I=a=>[a,n(a.href,"target_username")],Y=async([a,n])=>[a,n,await j(n)],B=a=>a?' class="pmAttackUrl"':""
const G=(a,n)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${r}${o(n)}" data-tooltip="Add to Ignore List">Ignore</a>`
const S="fshGreen",x="fshRed",H=([,a])=>f(t,a),q=async([a,n,s])=>[n,s,await T(n,L(a))],R=([,,a])=>a?.s,z=a=>[18,21,31].includes(a.id),F=a=>`<span class="fshRed fshBold">${a}.</span>`
function M(a){return 18===a.id?F(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?F(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):F(`${a.params[0]} activated Fist Fight`)}function U(a,n,s){return 0!==a?`${n}:<span class="${s}">${E(a)}</span> `:""}function D([a,n,s]){const[t,e]=function(a){return a.includes("You were victorious over")?[S,`You were <span class="${S}">victorious</span> over `]:a.includes("You were defeated by")?[x,`You were <span class="${x}">defeated</span> by `]:["",null]}(n)
e&&(a.cells[2].firstChild.remove(),k(a.cells[2],e))
const r=function(a,n){const s=a.specials.filter(z).map(M),t=U(a.xp_gain,"XP stolen",n)+U(a.gold_gain,"Gold lost",n)+U(a.gold_stolen,"Gold stolen",n)+U(a.pvp_prestige_gain,"Prestige gain",n)+U(a.pvp_rating_change,"PvP change",n)
return t+(t&&s.length?"<br>":"")+(s.length?`${s.join("<br>")}`:"")}(s.r.combat,t)
r&&i(a.cells[2],c({innerHTML:r}))}async function N(a){const[,n]=await v(a)
return[`.fshPlayerColoring tr:nth-of-type(${P(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,n]}function W(a,[n,s]){return a[s]?a[s].push(n):a[s]=[n],a}const X={guild:"green",ally:"blue",enemy:"red"}
function J([a,n]){return`${n.join(", ")} { color: ${X[a]}; }`}const K=([,a])=>a
function O(a,n,s){const t=function(a){return u(a.filter(K).reduce(W,{})).map(J)}(n)
t.length&&(!function(a,n){const[,,s]=a.rows[0].cells
s&&!n&&e(s,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,s),a.classList.add("fshPlayerColoring"),i(document.body,_(t.join("\n"))))}let Q=0
const V=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Z(a){return V.test(h(a.cells[2]))}function aa(a){const n=C(o(a.cells[1]))
n>Q&&(g(p,n),Q=n)}const na=[["addIgnoreLink",function(n,s){const r=a(t,n)
if(0===r.length)return
r.map((a=>[a,P(a)])).forEach((a=>function(a,[n,s]){e(s.cells[1],`<font size="1"><br>[ ${G(a,n)} ]</font>`)}(s,a)))}],["colorPlayerNames",async function(n,s){const e=a(t,n)
if(!e.length)return
O(n,await b(e.map(N)),s)}],["addAttackLinkToLog",async function(n,t){const e=a('a[href*="=createsecure&"]',n)
if(!e.length)return
const r=e.map(I);(await b(r.map(Y))).filter((([,,a])=>!a)).forEach((a=>function(a,[n,t]){w(n,` | <a${B(a)} href="${s}${t}">Attack</a>`)}(t,a)))}],["changeButtonLabels",function(s){a('a[href*="=trade&"]',s).filter((a=>!n(a.href,"subcmd"))).forEach((a=>l("Trade",a))),a('a[href*="=createsecure&"]',s).forEach((a=>l("ST",a)))}],["trackLadderReset",function(n){Q=m(p),a(d,n).map(P).filter(Z).forEach(aa)}],["showPvPSummaryInLog",async function(n){const s=a('a[href*="&combat_id="]',n)
if(0===s.length)return;(await b(function(a){return a.map((a=>[a,P(a)])).filter(H).map((([a,n])=>[a,n,n.cells[2].innerHTML])).map(q)}(s))).filter(R).forEach(D)}]]
function sa(a,n,[s,t]){m(s)&&t(a,n)}function ta(a){if(y())return
const n=A()
n&&function(a,n){na.forEach($(sa,a,n))}(n,a)}export{ta as a}
//# sourceMappingURL=addLogWidgets-8a981e5f.js.map
