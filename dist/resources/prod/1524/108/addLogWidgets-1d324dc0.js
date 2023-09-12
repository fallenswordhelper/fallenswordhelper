import{j as a,as as n,at as s,k as e,v as t,au as r,an as o,i,l as c,q as f,a6 as l,C as u,af as m,ak as p,av as d,a5 as h,ab as g,w as y,c as $}from"./calfSystem-34913441.js"
import{a as b}from"./all-414e0607.js"
import{i as w}from"./insertHtmlAfterEnd-feafb00f.js"
import{i as j,r as v}from"./relatePlayer-391b35cf.js"
import{c as P}from"./closestTr-316dea29.js"
import{g as L}from"./getId-e4d83057.js"
import{i as k}from"./insertHtmlAfterBegin-0b693b95.js"
import{a as T}from"./addCommas-47d6aaa1.js"
import{g as _}from"./getCombat-eae4a1fa.js"
import{c as E}from"./createStyle-e8b661d2.js"
import{g as A}from"./addLogColoring-33fe539a.js"
import{p as C}from"./parseDateAsTimestamp-de53e2f8.js"
const I=a=>[a,n(a.href,"target_username")],Y=async([a,n])=>[a,n,await j(n)],B=a=>a?' class="pmAttackUrl"':""
const G=(a,n)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${r}${o(n)}" data-tooltip="Add to Ignore List">Ignore</a>`
const S="fshGreen",x="fshRed",H=([,a])=>f(e,a),F=async([a,n,s])=>[n,s,await _(n,L(a))],R=([,,a])=>a?.s,z=a=>[18,21,31].includes(a.id),M=a=>`<span class="fshRed fshBold">${a}.</span>`
function U(a){return 18===a.id?M(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?M(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):M(`${a.params[0]} activated Fist Fight`)}function q(a,n,s){return 0!==a?`${n}:<span class="${s}">${T(a)}</span> `:""}function D([a,n,s]){const[e,t]=function(a){return a.includes("You were victorious over")?[S,`You were <span class="${S}">victorious</span> over `]:a.includes("You were defeated by")?[x,`You were <span class="${x}">defeated</span> by `]:["",null]}(n)
t&&(a.cells[2].firstChild.remove(),k(a.cells[2],t))
const r=function(a,n){const s=a.specials.filter(z).map(U),e=q(a.xp_gain,"XP stolen",n)+q(a.gold_gain,"Gold lost",n)+q(a.gold_stolen,"Gold stolen",n)+q(a.pvp_prestige_gain,"Prestige gain",n)+q(a.pvp_rating_change,"PvP change",n)
return e+(e&&s.length?"<br>":"")+(s.length?`${s.join("<br>")}`:"")}(s.r.combat,e)
r&&i(a.cells[2],c({innerHTML:r}))}async function N(a){const[,n]=await v(a)
return[`.fshPlayerColoring tr:nth-of-type(${P(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,n]}function W(a,[n,s]){return a[s]?a[s].push(n):a[s]=[n],a}const X={guild:"green",ally:"blue",enemy:"red"}
function J([a,n]){return`${n.join(", ")} { color: ${X[a]}; }`}const K=([,a])=>a
function O(a,n,s){const e=function(a){return u(a.filter(K).reduce(W,{})).map(J)}(n)
e.length&&(!function(a,n){const[,,s]=a.rows[0].cells
s&&!n&&t(s,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,s),a.classList.add("fshPlayerColoring"),i(document.body,E(e.join("\n"))))}let Q=0
const V=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Z(a){return V.test(h(a.cells[2]))}function aa(a){const n=C(o(a.cells[1]))
n>Q&&(g(p,n),Q=n)}const na=[["addIgnoreLink",function(n,s){const r=a(e,n)
if(0===r.length)return
r.map((a=>[a,P(a)])).forEach((a=>function(a,[n,s]){t(s.cells[1],`<font size="1"><br>[ ${G(a,n)} ]</font>`)}(s,a)))}],["colorPlayerNames",async function(n,s){const t=a(e,n)
if(!t.length)return
O(n,await b(t.map(N)),s)}],["addAttackLinkToLog",async function(n,e){const t=a('a[href*="=createsecure&"]',n)
if(!t.length)return
const r=t.map(I);(await b(r.map(Y))).filter((([,,a])=>!a)).forEach((a=>function(a,[n,e]){w(n,` | <a${B(a)} href="${s}${e}">Attack</a>`)}(e,a)))}],["changeButtonLabels",function(s){a('a[href*="=trade&"]',s).filter((a=>!n(a.href,"subcmd"))).forEach((a=>l("Trade",a))),a('a[href*="=createsecure&"]',s).forEach((a=>l("ST",a)))}],["trackLadderReset",function(n){Q=m(p),a(d,n).map(P).filter(Z).forEach(aa)}],["showPvPSummaryInLog",async function(n){const s=a('a[href*="&combat_id="]',n)
if(0===s.length)return;(await b(function(a){return a.map((a=>[a,P(a)])).filter(H).map((([a,n])=>[a,n,n.cells[2].innerHTML])).map(F)}(s))).filter(R).forEach(D)}]]
function sa(a,n,[s,e]){m(s)&&e(a,n)}function ea(a){if(y())return
const n=A()
n&&function(a,n){na.forEach($(sa,a,n))}(n,a)}export{ea as a}
//# sourceMappingURL=addLogWidgets-1d324dc0.js.map
