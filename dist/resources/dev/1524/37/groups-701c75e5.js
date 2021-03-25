import{c as t}from"./closestTr-c75289e9.js"
import{c as s}from"./csvSplit-0c234404.js"
import{d as e,g as n}from"./getGroupStats-bf5909b2.js"
import{g as o}from"./getArrayByClassName-b9fdeb7c.js"
import{ai as a,t as r,aj as i,B as c,C as l,i as f,a5 as u,h as d,ax as p,o as h,E as m,D as b,c as g,c0 as j,X as C,m as $,u as S,y as w,I as x}from"./calfSystem-5d0c721b.js"
import{o as A}from"./onlineDot-4f47efa5.js"
import{g as v}from"./getMembrList-adbb0514.js"
import{c as B}from"./createInput-73c334d2.js"
import{h as G}from"./hideElement-4575b6b4.js"
import"./closest-214539bf.js"
import"./chunk-eb7f7c4d.js"
import"./createButton-76ebc1cf.js"
import"./createLi-838e8f3a.js"
import"./createUl-1a9e083d.js"
import"./openQuickBuffByName-77b1c0c9.js"
import"./fshOpen-3161ad53.js"
import"./groupViewStats-e11a90e5.js"
import"./intValue-0e97c9b9.js"
import"./currentGuildId-01b0f97a.js"
import"./cmdExport-09ebfe19.js"
import"./indexAjaxJson-f1851d17.js"
import"./idb-a2aaccdb.js"
const T=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],e=T.exec(l(s)),n=(new Date).getFullYear()
f(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(p.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,e){return y(t,e)-y(t,s)}function M(t,s){return t[s]?`<a href="${u}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,n){const o=n.cells[0]
c(function(t,s){const e=l(s.children[0])
return t[e]?`${A({last_login:t[e].last_login})}&nbsp;<a href="${u}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const a=n.cells[1],i=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(r(J,t)),n}(t,a)
!function(t,s){const n=s.filter(U)
n.length>0&&d(t,e(n)),f(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,i),function(t,s,e){const n=e.map(r(M,t))
c(`<span>${n.join(", ")}</span>`,s)}(t,a,i),N(n)}function E(s){a("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(r(D,s)),i("groups.doGroupPaint")}function L(t,s){const e=B({className:"custombutton",type:"button",value:s})
return f(t,"&nbsp;"),d(t,e),e}function k(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
f(n,e)}function z(t){n(t.href).then(r(k,t))}function R(t){t.target.disabled=!0,m('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function X(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function F(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(l(e)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(X,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function I(){C("groups","joinAllGroupsUnderSize"),m('#pCC a[href*="confirmJoin"]').forEach(F)}function O(){const t=b('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(G(t),function(t){const s=L(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
h(s,I)}(s)),function(t){const s=L(t,"Fetch Group Stats")
h(s,R)}(s),g.subcmd2===j&&I()}function P(){w()||(v(!1).then(E),function(){const t=x("minGroupLevel")
t&&f(b("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),O(),function(){const t=m("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default P
//# sourceMappingURL=groups-701c75e5.js.map
