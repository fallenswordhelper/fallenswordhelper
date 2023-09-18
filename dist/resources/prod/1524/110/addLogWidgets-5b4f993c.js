import{j as a,ar as n,as as s,k as e,v as t,at as r,am as o,i,l as c,q as f,a5 as l,C as u,ae as m,aj as p,au as d,a4 as h,aa as g,w as y,c as $}from"./calfSystem-929ac228.js"
import{a as b}from"./all-414e0607.js"
import{i as j}from"./insertHtmlAfterEnd-cbb15ee8.js"
import{i as w,r as v}from"./relatePlayer-b132acd9.js"
import{c as P}from"./closestTr-3ee5784f.js"
import{g as L}from"./getId-e4d83057.js"
import{i as k}from"./insertHtmlAfterBegin-6347b1ce.js"
import{a as E}from"./addCommas-47d6aaa1.js"
import{g as T}from"./getCombat-a219dc2f.js"
import{c as _}from"./createStyle-ebd85b35.js"
import{g as A}from"./addLogColoring-9a965c15.js"
import{p as C}from"./parseDateAsTimestamp-c49e9bdc.js"
const I=a=>[a,n(a.href,"target_username")],Y=async([a,n])=>[a,n,await w(n)],B=a=>a?' class="pmAttackUrl"':""
const G=(a,n)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${r}${o(n)}" data-tooltip="Add to Ignore List">Ignore</a>`
const S="fshGreen",x="fshRed",H=([,a])=>f(e,a),R=async([a,n,s])=>[n,s,await T(n,L(a))],z=([,,a])=>a?.s,F=a=>[18,21,31].includes(a.id),M=a=>`<span class="fshRed fshBold">${a}.</span>`
function U(a){return 18===a.id?M(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?M(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):M(`${a.params[0]} activated Fist Fight`)}function q(a,n,s){return 0!==a?`${n}:<span class="${s}">${E(a)}</span> `:""}function D([a,n,s]){const[e,t]=function(a){return a.includes("You were victorious over")?[S,`You were <span class="${S}">victorious</span> over `]:a.includes("You were defeated by")?[x,`You were <span class="${x}">defeated</span> by `]:["",null]}(n)
t&&(a.cells[2].firstChild.remove(),k(a.cells[2],t))
const r=function(a,n){const s=a.specials.filter(F).map(U),e=q(a.xp_gain,"XP stolen",n)+q(a.gold_gain,"Gold lost",n)+q(a.gold_stolen,"Gold stolen",n)+q(a.pvp_prestige_gain,"Prestige gain",n)+q(a.pvp_rating_change,"PvP change",n)
return e+(e&&s.length?"<br>":"")+(s.length?`${s.join("<br>")}`:"")}(s.r.combat,e)
r&&i(a.cells[2],c({innerHTML:r}))}async function N(a){const[,n]=await v(a)
return[`.fshPlayerColoring tr:nth-of-type(${P(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,n]}function W(a,[n,s]){return a[s]?a[s].push(n):a[s]=[n],a}const X={guild:"green",ally:"blue",enemy:"red"}
function J([a,n]){return`${n.join(", ")} { color: ${X[a]}; }`}const K=([,a])=>a
function O(a,n,s){const e=function(a){return u(a.filter(K).reduce(W,{})).map(J)}(n)
e.length&&(!function(a,n){const[,,s]=a.rows[0].cells
s&&!n&&t(s,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,s),a.classList.add("fshPlayerColoring"),i(document.body,_(e.join("\n"))))}let Q=0
const V=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Z(a){return V.test(h(a.cells[2]))}function aa(a){const n=C(o(a.cells[1]))
n>Q&&(g(p,n),Q=n)}const na=[["addIgnoreLink",function(n,s){const r=a(e,n)
if(0===r.length)return
r.map((a=>[a,P(a)])).forEach((a=>function(a,[n,s]){t(s.cells[1],`<font size="1"><br>[ ${G(a,n)} ]</font>`)}(s,a)))}],["colorPlayerNames",async function(n,s){const t=a(e,n)
if(!t.length)return
O(n,await b(t.map(N)),s)}],["addAttackLinkToLog",async function(n,e){const t=a('a[href*="=createsecure&"]',n)
if(!t.length)return
const r=t.map(I);(await b(r.map(Y))).filter((([,,a])=>!a)).forEach((a=>function(a,[n,e]){j(n,` | <a${B(a)} href="${s}${e}">Attack</a>`)}(e,a)))}],["changeButtonLabels",function(s){a('a[href*="=trade&"]',s).filter((a=>!n(a.href,"subcmd"))).forEach((a=>l("Trade",a))),a('a[href*="=createsecure&"]',s).forEach((a=>l("ST",a)))}],["trackLadderReset",function(n){Q=m(p),a(d,n).map(P).filter(Z).forEach(aa)}],["showPvPSummaryInLog",async function(n){const s=a('a[href*="&combat_id="]',n)
if(0===s.length)return;(await b(function(a){return a.map((a=>[a,P(a)])).filter(H).map((([a,n])=>[a,n,n.cells[2].innerHTML])).map(R)}(s))).filter(z).forEach(D)}]]
function sa(a,n,[s,e]){m(s)&&e(a,n)}function ea(a){if(y())return
const n=A()
n&&function(a,n){na.forEach($(sa,a,n))}(n,a)}export{ea as a}
//# sourceMappingURL=addLogWidgets-5b4f993c.js.map
