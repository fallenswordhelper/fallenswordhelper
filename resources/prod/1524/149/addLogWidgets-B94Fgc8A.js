import{n as a,aQ as e,x as t,aR as n,o as s,aa as r,s as o,t as i,ai as c,z as l,aS as f,aH as u,q as p,aT as d,i as m,u as g,aB as h,ab as y,H as $,ao as b,aU as w,aj as L,aA as v,A as P,e as j}from"./calfSystem-BGW9cdWN.js"
import{i as A}from"./insertHtmlAfterEnd-Cz10bREE.js"
import{i as k,r as I}from"./relatePlayer-C0yYYoMm.js"
import{g as T}from"./getId-CEBzpjjo.js"
import{i as _}from"./insertHtmlAfterBegin-DtSVBFQz.js"
import{g as E}from"./getLogTime-COPR1rPw.js"
import{c as B}from"./createStyle-Cr9lLj8G.js"
import{g as H}from"./addLogColoring-AdG-miOX.js"
import{p as S}from"./parseDateAsTimestamp-puTZ2BjJ.js"
const Y=a=>[a,e(a.href,"target_username")],x=async([a,e])=>[a,e,await k(e)],G=a=>a?' class="pmAttackUrl"':""
const z=(a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${f}${u(e)}" data-tooltip="Add to Ignore List">Ignore</a>`
const C="fshGreen",R="fshRed",U=([,a])=>p(i,a),W=async([a,e,t])=>[e,t,await d(E(e),T(a))],F=([,,a])=>a?.s,M=a=>[18,21,31].includes(a.id),N=a=>`<span class="fshRed fshBold">${a}.</span>`
function q(a){return 18===a.id?N(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?N(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):N(`${a.params[0]} activated Fist Fight`)}function D(a,e,t){return 0!==a?`${e}:<span class="${t}">${h(a)}</span> `:""}function Q([a,e,t]){const[n,s]=function(a){return a.includes("You were victorious over")?[C,`You were <span class="${C}">victorious</span> over `]:a.includes("You were defeated by")?[R,`You were <span class="${R}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),_(a.cells[2],s))
const r=function(a,e){const t=a.specials.filter(M).map(q),n=D(a.xp_gain,"XP stolen",e)+D(a.gold_gain,"Gold lost",e)+D(a.gold_stolen,"Gold stolen",e)+D(a.pvp_prestige_gain,"Prestige gain",e)+D(a.pvp_rating_change,"PvP change",e)
return n+(n&&t.length?"<br>":"")+(t.length?`${t.join("<br>")}`:"")}(t.r.combat,n)
r&&m(a.cells[2],g({innerHTML:r}))}async function X(a){const[,e]=await I(a)
return[`.fshPlayerColoring tr:nth-of-type(${c(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function J(a,[e,t]){return a[t]?a[t].push(e):a[t]=[e],a}const K={guild:"green",ally:"blue",enemy:"red"}
function O([a,e]){return`${e.join(", ")} { color: ${K[a]}; }`}const V=([,a])=>a
function Z(a,e,t){const n=function(a){return $(a.filter(V).reduce(J,{})).map(O)}(e)
n.length&&(!function(a,e){const[,,t]=a.rows[0].cells
t&&!e&&l(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,t),a.classList.add("fshPlayerColoring"),m(document.body,B(n.join("\n"))))}let aa=0
const ea=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function ta(a){return ea.test(r(a.cells[2]))}function na(a){const e=S(u(a.cells[1]))
e>aa&&(L(v,e),aa=e)}const sa=[["addIgnoreLink",function(e,t){const n=a(i,e)
if(0===n.length)return
n.map((a=>[a,c(a)])).forEach((a=>function(a,[e,t]){l(t.cells[1],`<font size="1"><br>[ ${z(a,e)} ]</font>`),a||s(t.cells[1],(a=>{"Ignore"===r(a.target)&&o("playerLogWidgets","Ignore")}))}(t,a)))}],["colorPlayerNames",async function(e,n){const s=a(i,e)
if(!s.length)return
Z(e,await t(s.map(X)),n)}],["addAttackLinkToLog",async function(e,i){const c=a('a[href*="=createsecure&"]',e)
if(!c.length)return
const l=c.map(Y);(await t(l.map(x))).filter((([,,a])=>!a)).forEach((a=>function(a,[e,t]){A(e,` | <a${G(a)} href="${n}${t}">Attack</a>`),a||s(e.parentNode,(a=>{"Attack"===r(a.target)&&o("playerLogWidgets","Attack")}))}(i,a)))}],["changeButtonLabels",function(t){a('a[href*="=trade&"]',t).filter((a=>!e(a.href,"subcmd"))).forEach((a=>y("Trade",a))),a('a[href*="=createsecure&"]',t).forEach((a=>y("ST",a)))}],["trackLadderReset",function(e){aa=b(v),a(w,e).map(c).filter(ta).forEach(na)}],["showPvPSummaryInLog",async function(e){const n=a('a[href*="&combat_id="]',e)
if(0===n.length)return;(await t(function(a){return a.map((a=>[a,c(a)])).filter(U).map((([a,e])=>[a,e,e.cells[2].innerHTML])).map(W)}(n))).filter(F).forEach(Q)}]]
function ra(a,e,[t,n]){b(t)&&n(a,e)}function oa(a){if(P())return
const e=H()
e&&function(a,e){sa.forEach(j(ra,a,e))}(e,a)}export{oa as a}
//# sourceMappingURL=addLogWidgets-B94Fgc8A.js.map
