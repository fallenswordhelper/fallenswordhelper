import{h as a,b0 as e,a1 as n,b1 as t,o as s,m as r,s as o,Z as i,k as c,a3 as l,b2 as f,aT as u,q as p,b3 as d,i as m,v as g,aN as h,l as y,ab as b,aA as $,b4 as w,av as v,aM as L,a4 as P,c as j}from"./calfSystem-Cs6CSxoU.js"
import{i as k}from"./insertHtmlAfterEnd-B3hI-1FY.js"
import{i as A,r as I}from"./relatePlayer-BDci9yBG.js"
import{g as E}from"./getId-CEBzpjjo.js"
import{i as T}from"./insertHtmlAfterBegin-D5kb2h-H.js"
import{g as _}from"./getLogTime-DMtJtfyz.js"
import{c as B}from"./createStyle-SGEMbHV8.js"
import{g as Y}from"./addLogColoring-CUchhJrM.js"
import{p as G}from"./parseDateAsTimestamp-DIsrnFMo.js"
const S=a=>[a,e(a.href,"target_username")],x=async([a,e])=>[a,e,await A(e)]
function C(a,[e,n]){l(n.cells[1],`<font size="1"><br>[ ${((a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${f}${u(e)}" data-tooltip="Add to Ignore List">Ignore</a>`)(a,e)} ]</font>`),a||s(n.cells[1],a=>{"Ignore"===r(a.target)&&o("playerLogWidgets","Ignore")})}const H="fshGreen",F="fshRed",M=([,a])=>p(i,a),N=async([a,e,n])=>[e,n,await d(_(e),E(a))],R=([,,a])=>a?.s,W=a=>[18,21,31].includes(a.id),z=a=>`<span class="fshRed fshBold">${a}.</span>`
function D(a){return 18===a.id?z(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?z(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):z(`${a.params[0]} activated Fist Fight`)}function U(a,e,n){return 0!==a?`${e}:<span class="${n}">${h(a)}</span> `:""}function q([a,e,n]){const[t,s]=function(a){return a.includes("You were victorious over")?[H,`You were <span class="${H}">victorious</span> over `]:a.includes("You were defeated by")?[F,`You were <span class="${F}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),T(a.cells[2],s))
const r=function(a,e){const n=a.specials?.filter(W).map(D),t=U(a.xp_gain,"XP stolen",e)+U(a.gold_gain,"Gold lost",e)+U(a.gold_stolen,"Gold stolen",e)+U(a.pvp_prestige_gain,"Prestige gain",e)+U(a.pvp_rating_change,"PvP change",e)
return t+(t&&n?.length?"<br>":"")+(n?.length?`${n.join("<br>")}`:"")}(n.r.combat,t)
r&&m(a.cells[2],g({innerHTML:r}))}async function J(a){const[,e]=await I(a)
return[`.fshPlayerColoring tr:nth-of-type(${c(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function K(a,[e,n]){return a[n]?a[n].push(e):a[n]=[e],a}const X={guild:"green",ally:"blue",enemy:"red"}
function Z([a,e]){return`${e.join(", ")} { color: ${X[a]}; }`}const O=([,a])=>a
function Q(a,e,n){const t=function(a){return b(a.filter(O).reduce(K,{})).map(Z)}(e)
t.length&&(!function(a,e){const[,,n]=a.rows[0].cells
n&&!e&&l(n,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,n),a.classList.add("fshPlayerColoring"),m(document.body,B(t.join("\n"))))}let V=0
const aa=/You ranked \w{3,4} in your PvP Band! You have gained \d x PvP Ladder Token/
function ea(a){return aa.test(r(a.cells[2]))}function na(a){const e=G(u(a.cells[1]))
e>V&&(v(L,e),V=e)}const ta=[["addIgnoreLink",function(e,n){const t=a(i,e)
if(0===t.length)return
t.map(a=>[a,c(a)]).forEach(a=>C(n,a))}],["colorPlayerNames",async function(e,t){const s=a(i,e)
if(!s.length)return
Q(e,await n(s.map(J)),t)}],["addAttackLinkToLog",async function(e,i){const c=a('a[href*="=createsecure&"]',e)
if(!c.length)return
const l=c.map(S);(await n(l.map(x))).filter(([,,a])=>!a).forEach(a=>function(a,[e,n]){k(e,` | <a${(a=>a?' class="pmAttackUrl"':"")(a)} href="${t}${n}">Attack</a>`),a||s(e.parentNode,a=>{"Attack"===r(a.target)&&o("playerLogWidgets","Attack")})}(i,a))}],["changeButtonLabels",function(n){a('a[href*="=trade&"]',n).filter(a=>!e(a.href,"subcmd")).forEach(a=>y("Trade",a)),a('a[href*="=createsecure&"]',n).forEach(a=>y("ST",a))}],["trackLadderReset",function(e){V=$(L),a(w,e).map(c).filter(ea).forEach(na)}],["showPvPSummaryInLog",async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return;(await n(function(a){return a.map(a=>[a,c(a)]).filter(M).map(([a,e])=>[a,e,e.cells[2].innerHTML]).map(N)}(t))).filter(R).forEach(q)}]]
function sa(a,e,[n,t]){$(n)&&t(a,e)}function ra(a){if(P())return
const e=Y()
e&&function(a,e){ta.forEach(j(sa,a,e))}(e,a)}export{ra as a}
//# sourceMappingURL=addLogWidgets-_gev1ulv.js.map
