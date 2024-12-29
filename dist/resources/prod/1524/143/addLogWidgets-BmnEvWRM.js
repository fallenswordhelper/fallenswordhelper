import{k as a,u as e,aN as t,aO as n,o as s,ac as r,s as o,l as i,ai as c,w as l,aP as f,aF as u,i as p,m,q as d,ad as g,E as h,ao as y,aw as $,aQ as w,aj as b,x as L,c as j}from"./calfSystem-ChzN4Q-P.js"
import{i as P}from"./insertHtmlAfterEnd-DEdxHibR.js"
import{i as v,r as k}from"./relatePlayer-Dd7reh5y.js"
import{g as A}from"./getId-CEBzpjjo.js"
import{i as E}from"./insertHtmlAfterBegin-eEM8BtQM.js"
import{a as I}from"./addCommas-C_h2HN8s.js"
import{g as _}from"./getCombat-BhXjhpJK.js"
import{g as T}from"./getLogTime-D0I35t98.js"
import{c as B}from"./createStyle-DDJmETKK.js"
import{g as C}from"./addLogColoring-D5BTISWt.js"
import{p as G}from"./parseDateAsTimestamp-iO7Ig_Pa.js"
const Y=a=>[a,t(a.href,"target_username")],x=async([a,e])=>[a,e,await v(e)],H=a=>a?' class="pmAttackUrl"':""
const S=(a,e)=>`<a${(a=>a?' class="pmIgnoreUrl"':"")(a)} href="${f}${u(e)}" data-tooltip="Add to Ignore List">Ignore</a>`
const F="fshGreen",M="fshRed",N=([,a])=>d(i,a),R=async([a,e,t])=>[e,t,await _(T(e),A(a))],W=([,,a])=>a?.s,z=a=>[18,21,31].includes(a.id),U=a=>`<span class="fshRed fshBold">${a}.</span>`
function q(a){return 18===a.id?U(`${a.params[0]} leeched the buff '${a.params[1]}'`):21===a.id?U(`${a.params[0]} was mesmerized by Spell Breaker, losing the '${a.params[1]}' buff`):U(`${a.params[0]} activated Fist Fight`)}function D(a,e,t){return 0!==a?`${e}:<span class="${t}">${I(a)}</span> `:""}function J([a,e,t]){const[n,s]=function(a){return a.includes("You were victorious over")?[F,`You were <span class="${F}">victorious</span> over `]:a.includes("You were defeated by")?[M,`You were <span class="${M}">defeated</span> by `]:["",null]}(e)
s&&(a.cells[2].firstChild.remove(),E(a.cells[2],s))
const r=function(a,e){const t=a.specials.filter(z).map(q),n=D(a.xp_gain,"XP stolen",e)+D(a.gold_gain,"Gold lost",e)+D(a.gold_stolen,"Gold stolen",e)+D(a.pvp_prestige_gain,"Prestige gain",e)+D(a.pvp_rating_change,"PvP change",e)
return n+(n&&t.length?"<br>":"")+(t.length?`${t.join("<br>")}`:"")}(t.r.combat,n)
r&&p(a.cells[2],m({innerHTML:r}))}async function K(a){const[,e]=await k(a)
return[`.fshPlayerColoring tr:nth-of-type(${c(a).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function O(a,[e,t]){return a[t]?a[t].push(e):a[t]=[e],a}const Q={guild:"green",ally:"blue",enemy:"red"}
function X([a,e]){return`${e.join(", ")} { color: ${Q[a]}; }`}const V=([,a])=>a
function Z(a,e,t){const n=function(a){return h(a.filter(V).reduce(O,{})).map(X)}(e)
n.length&&(!function(a,e){const[,,t]=a.rows[0].cells
t&&!e&&l(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(a,t),a.classList.add("fshPlayerColoring"),p(document.body,B(n.join("\n"))))}let aa=0
const ea=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function ta(a){return ea.test(r(a.cells[2]))}function na(a){const e=G(u(a.cells[1]))
e>aa&&(b($,e),aa=e)}const sa=[["addIgnoreLink",function(e,t){const n=a(i,e)
if(0===n.length)return
n.map((a=>[a,c(a)])).forEach((a=>function(a,[e,t]){l(t.cells[1],`<font size="1"><br>[ ${S(a,e)} ]</font>`),a||s(t.cells[1],(a=>{"Ignore"===r(a.target)&&o("playerLogWidgets","Ignore")}))}(t,a)))}],["colorPlayerNames",async function(t,n){const s=a(i,t)
if(!s.length)return
Z(t,await e(s.map(K)),n)}],["addAttackLinkToLog",async function(t,i){const c=a('a[href*="=createsecure&"]',t)
if(!c.length)return
const l=c.map(Y);(await e(l.map(x))).filter((([,,a])=>!a)).forEach((a=>function(a,[e,t]){P(e,` | <a${H(a)} href="${n}${t}">Attack</a>`),a||s(e.parentNode,(a=>{"Attack"===r(a.target)&&o("playerLogWidgets","Attack")}))}(i,a)))}],["changeButtonLabels",function(e){a('a[href*="=trade&"]',e).filter((a=>!t(a.href,"subcmd"))).forEach((a=>g("Trade",a))),a('a[href*="=createsecure&"]',e).forEach((a=>g("ST",a)))}],["trackLadderReset",function(e){aa=y($),a(w,e).map(c).filter(ta).forEach(na)}],["showPvPSummaryInLog",async function(t){const n=a('a[href*="&combat_id="]',t)
if(0===n.length)return;(await e(function(a){return a.map((a=>[a,c(a)])).filter(N).map((([a,e])=>[a,e,e.cells[2].innerHTML])).map(R)}(n))).filter(W).forEach(J)}]]
function ra(a,e,[t,n]){y(t)&&n(a,e)}function oa(a){if(L())return
const e=C()
e&&function(a,e){sa.forEach(j(ra,a,e))}(e,a)}export{oa as a}
//# sourceMappingURL=addLogWidgets-BmnEvWRM.js.map
