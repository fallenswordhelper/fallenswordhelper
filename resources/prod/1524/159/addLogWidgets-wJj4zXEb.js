import{h as a,b0 as e,a1 as n,b1 as t,o as s,m as r,s as o,Z as i,k as c,a3 as l,b2 as f,aT as u,q as p,b3 as d,i as m,v as g,aN as h,l as y,ab as b,aA as $,b4 as w,av as v,aM as L,a4 as P,c as k}from"./calfSystem-CIdPz3EO.js"
import{i as j}from"./insertHtmlAfterEnd-C1lLNm4i.js"
import{i as A,r as I}from"./relatePlayer-BrjxZhKo.js"
import{g as E}from"./getId-CEBzpjjo.js"
import{i as T}from"./insertHtmlAfterBegin-CywIqRwb.js"
import{g as _}from"./getLogTime-B0BO4ris.js"
import{c as Y}from"./createStyle-C-OOcRjs.js"
import{g as B}from"./addLogColoring-CxlvoQcB.js"
import{p as C}from"./parseDateAsTimestamp-ImOh-yob.js"
const G=a=>[a,e(a.href,"target_username")],H=async([a,e])=>[a,e,await A(e)]
function S(a,[e,n]){l(n.cells[1],`<font size="1"><br>[ ${((a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${f}${u(e)}" data-tooltip="Add to Ignore List">Ignore</a>`)(a,e)} ]</font>`),a||s(n.cells[1],a=>{"Ignore"===r(a.target)&&o("playerLogWidgets","Ignore")})}const x="fshGreen",M="fshRed",N=([,a])=>p(i,a),R=async([a,e,n])=>[e,n,await d(_(e),E(a))],W=([,,a])=>a?.s,z=a=>[18,21,31].includes(a.id),D=a=>`<span class="fshRed fshBold">${a}.</span>`
function F(a){return 18===a.id?D(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?D(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):D(`${a.params[0]} activated Fist Fight`)}function U(a,e,n){return 0!==a?`${e}:<span class="${n}">${h(a)}</span> `:""}function q([a,e,n]){const[t,s]=function(a){return a.includes("You were victorious over")?[x,`You were <span class="${x}">victorious</span> over `]:a.includes("You were defeated by")?[M,`You were <span class="${M}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),T(a.cells[2],s))
const r=function(a,e){const n=a.specials?.filter(z).map(F),t=U(a.xp_gain,"XP stolen",e)+U(a.gold_gain,"Gold lost",e)+U(a.gold_stolen,"Gold stolen",e)+U(a.pvp_prestige_gain,"Prestige gain",e)+U(a.pvp_rating_change,"PvP change",e)
return t+(t&&n?.length?"<br>":"")+(n?.length?`${n.join("<br>")}`:"")}(n.r.combat,t)
r&&m(a.cells[2],g({innerHTML:r}))}async function J(a){const[,e]=await I(a)
return[`.fshPlayerColoring tr:nth-of-type(${c(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function X(a,[e,n]){return a[n]?a[n].push(e):a[n]=[e],a}const Z={guild:"green",ally:"blue",enemy:"red"}
function K([a,e]){return`${e.join(", ")} { color: ${Z[a]}; }`}const O=([,a])=>a
function Q(a,e,n){const t=function(a){return b(a.filter(O).reduce(X,{})).map(K)}(e)
t.length&&(!function(a,e){const[,,n]=a.rows[0].cells
n&&!e&&l(n,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,n),a.classList.add("fshPlayerColoring"),m(document.body,Y(t.join("\n"))))}let V=0
const aa=/You ranked \w{3,4} in your PvP Band! You have gained \d x PvP Ladder Token/
function ea(a){return aa.test(r(a.cells[2]))}function na(a){const e=C(u(a.cells[1]))
e>V&&(v(L,e),V=e)}const ta=[["addIgnoreLink",function(e,n){const t=a(i,e)
if(0===t.length)return
t.map(a=>[a,c(a)]).forEach(a=>S(n,a))}],["colorPlayerNames",async function(e,t){const s=a(i,e)
if(!s.length)return
Q(e,await n(s.map(J)),t)}],["addAttackLinkToLog",async function(e,i){const c=a('a[href*="=createsecure&"]',e)
if(!c.length)return
const l=c.map(G);(await n(l.map(H))).filter(([,,a])=>!a).forEach(a=>function(a,[e,n]){j(e,` | <a${(a=>a?' class="pmAttackUrl"':"")(a)} href="${t}${n}">Attack</a>`),a||s(e.parentNode,a=>{"Attack"===r(a.target)&&o("playerLogWidgets","Attack")})}(i,a))}],["changeButtonLabels",function(n){a('a[href*="=trade&"]',n).filter(a=>!e(a.href,"subcmd")).forEach(a=>y("Trade",a)),a('a[href*="=createsecure&"]',n).forEach(a=>y("ST",a))}],["trackLadderReset",function(e){V=$(L),a(w,e).map(c).filter(ea).forEach(na)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await n(function(a){return a.map(a=>[a,c(a)]).filter(N).map(([a,e])=>[a,e,e.cells[2].innerHTML]).map(R)}(t))).filter(W).forEach(q)}]]
function sa(a,e,[n,t]){$(n)&&t(a,e)}function ra(a){if(P())return
const e=B()
e&&function(a,e){ta.forEach(k(sa,a,e))}(e,a)}export{ra as a}
//# sourceMappingURL=addLogWidgets-wJj4zXEb.js.map
