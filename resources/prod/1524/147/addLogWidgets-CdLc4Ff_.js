import{l as a,aQ as e,v as t,aR as n,o as s,ad as r,s as o,m as i,ak as c,x as l,aS as f,aH as u,q as m,i as p,n as d,ae as g,F as h,aq as y,aT as $,al as b,aB as w,y as L,d as j}from"./calfSystem-BAeDn21M.js"
import{i as v}from"./insertHtmlAfterEnd-zhforf3q.js"
import{i as P,r as k}from"./relatePlayer-b0NCbXyR.js"
import{g as I}from"./getId-CEBzpjjo.js"
import{i as A}from"./insertHtmlAfterBegin-BvGmlBOR.js"
import{a as E}from"./addCommas-C_h2HN8s.js"
import{g as T}from"./getCombat-R0g80w8M.js"
import{g as _}from"./getLogTime-wICzy5KY.js"
import{c as B}from"./createStyle-BAUgBTdZ.js"
import{g as C}from"./addLogColoring-Kt9F9taW.js"
import{p as G}from"./parseDateAsTimestamp-CGAhktCc.js"
const H=a=>[a,e(a.href,"target_username")],S=async([a,e])=>[a,e,await P(e)],Y=a=>a?' class="pmAttackUrl"':""
const x=(a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${f}${u(e)}" data-tooltip="Add to Ignore List">Ignore</a>`
const R="fshGreen",z="fshRed",F=([,a])=>m(i,a),W=async([a,e,t])=>[e,t,await T(_(e),I(a))],q=([,,a])=>a?.s,D=a=>[18,21,31].includes(a.id),M=a=>`<span class="fshRed fshBold">${a}.</span>`
function N(a){return 18===a.id?M(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?M(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):M(`${a.params[0]} activated Fist Fight`)}function U(a,e,t){return 0!==a?`${e}:<span class="${t}">${E(a)}</span> `:""}function J([a,e,t]){const[n,s]=function(a){return a.includes("You were victorious over")?[R,`You were <span class="${R}">victorious</span> over `]:a.includes("You were defeated by")?[z,`You were <span class="${z}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),A(a.cells[2],s))
const r=function(a,e){const t=a.specials.filter(D).map(N),n=U(a.xp_gain,"XP stolen",e)+U(a.gold_gain,"Gold lost",e)+U(a.gold_stolen,"Gold stolen",e)+U(a.pvp_prestige_gain,"Prestige gain",e)+U(a.pvp_rating_change,"PvP change",e)
return n+(n&&t.length?"<br>":"")+(t.length?`${t.join("<br>")}`:"")}(t.r.combat,n)
r&&p(a.cells[2],d({innerHTML:r}))}async function Q(a){const[,e]=await k(a)
return[`.fshPlayerColoring tr:nth-of-type(${c(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function X(a,[e,t]){return a[t]?a[t].push(e):a[t]=[e],a}const K={guild:"green",ally:"blue",enemy:"red"}
function O([a,e]){return`${e.join(", ")} { color: ${K[a]}; }`}const V=([,a])=>a
function Z(a,e,t){const n=function(a){return h(a.filter(V).reduce(X,{})).map(O)}(e)
n.length&&(!function(a,e){const[,,t]=a.rows[0].cells
t&&!e&&l(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,t),a.classList.add("fshPlayerColoring"),p(document.body,B(n.join("\n"))))}let aa=0
const ea=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function ta(a){return ea.test(r(a.cells[2]))}function na(a){const e=G(u(a.cells[1]))
e>aa&&(b(w,e),aa=e)}const sa=[["addIgnoreLink",function(e,t){const n=a(i,e)
if(0===n.length)return
n.map((a=>[a,c(a)])).forEach((a=>function(a,[e,t]){l(t.cells[1],`<font size="1"><br>[ ${x(a,e)} ]</font>`),a||s(t.cells[1],(a=>{"Ignore"===r(a.target)&&o("playerLogWidgets","Ignore")}))}(t,a)))}],["colorPlayerNames",async function(e,n){const s=a(i,e)
if(!s.length)return
Z(e,await t(s.map(Q)),n)}],["addAttackLinkToLog",async function(e,i){const c=a('a[href*="=createsecure&"]',e)
if(!c.length)return
const l=c.map(H);(await t(l.map(S))).filter((([,,a])=>!a)).forEach((a=>function(a,[e,t]){v(e,` | <a${Y(a)} href="${n}${t}">Attack</a>`),a||s(e.parentNode,(a=>{"Attack"===r(a.target)&&o("playerLogWidgets","Attack")}))}(i,a)))}],["changeButtonLabels",function(t){a('a[href*="=trade&"]',t).filter((a=>!e(a.href,"subcmd"))).forEach((a=>g("Trade",a))),a('a[href*="=createsecure&"]',t).forEach((a=>g("ST",a)))}],["trackLadderReset",function(e){aa=y(w),a($,e).map(c).filter(ta).forEach(na)}],["showPvPSummaryInLog",async function(e){const n=a('a[href*="&combat_id="]',e)
if(0===n.length)return;(await t(function(a){return a.map((a=>[a,c(a)])).filter(F).map((([a,e])=>[a,e,e.cells[2].innerHTML])).map(W)}(n))).filter(q).forEach(J)}]]
function ra(a,e,[t,n]){y(t)&&n(a,e)}function oa(a){if(L())return
const e=C()
e&&function(a,e){sa.forEach(j(ra,a,e))}(e,a)}export{oa as a}
//# sourceMappingURL=addLogWidgets-CdLc4Ff_.js.map
