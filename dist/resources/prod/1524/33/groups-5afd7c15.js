import{c as t}from"./closestTr-33960a32.js"
import{c as s}from"./csvSplit-d4535156.js"
import{d as e,g as n}from"./getGroupStats-3df42fe2.js"
import{g as o}from"./getArrayByClassName-a297542c.js"
import{t as a,A as r,B as i,i as c,a2 as l,h as f,as as u,o as d,D as p,C as h,c as m,bW as b,V as g,m as j,u as C,x as $,H as S}from"./calfSystem-0708a9bb.js"
import{o as A}from"./onlineDot-84509222.js"
import{g as w}from"./getMembrList-4429ae67.js"
import{c as x}from"./createInput-d5428169.js"
import{h as v}from"./hideElement-eb117e0e.js"
import"./closest-8b679b7a.js"
import"./chunk-c6dcf4eb.js"
import"./createButton-f8b3783c.js"
import"./createLi-15d7e0a6.js"
import"./createUl-ddc53876.js"
import"./openQuickBuffByName-6f24a6fe.js"
import"./fshOpen-946a9f05.js"
import"./groupViewStats-368ea845.js"
import"./intValue-55d66e09.js"
import"./currentGuildId-c383c2b8.js"
import"./cmdExport-3f5943d2.js"
import"./indexAjaxJson-7132e6ef.js"
import"./idb-9ebd251c.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],e=B.exec(i(s)),n=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(u.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,e){return N(t,e)-N(t,s)}function J(t,s){return t[s]?`<a href="${l}${t[s].id}">${s}</a>`:s}function M(t){return"[none]"!==t&&-1===t.indexOf("<font")}function y(t,n){const o=n.cells[0]
r(function(t,s){const e=i(s.children[0])
return t[e]?`${A({last_login:t[e].last_login})}&nbsp;<a href="${l}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const u=n.cells[1],d=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(a(G,t)),n}(t,u)
!function(t,s){const n=s.filter(M)
n.length>0&&f(t,e(n)),c(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,d),function(t,s,e){const n=e.map(a(J,t))
r(`<span>${n.join(", ")}</span>`,s)}(t,u,d),T(n)}function U(s){o("group-action-container").map((s=>t(s))).forEach(a(y,s))}function D(t,s){const e=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),f(t,e),e}function L(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
c(n,e)}function k(t){n(t.href).then(a(L,t))}function z(t){t.target.disabled=!0,p('#pCC a[href*="=viewstats&"]').forEach(k)}function E(t){return!t.includes("#000099")}function R(t){r('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(e)).filter(E).length<m.maxGroupSizeToJoin){const s=j({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(a(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){g("groups","joinAllGroupsUnderSize"),p('#pCC a[href*="confirmJoin"]').forEach(H)}function O(){const t=h('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
m.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${m.maxGroupSizeToJoin} Members`)
d(s,F)}(s)),function(t){const s=D(t,"Fetch Group Stats")
d(s,z)}(s),m.subcmd2===b&&F()}function V(){$()||(w(!1).then(U),function(){const t=S("minGroupLevel")
t&&c(h("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),O(),function(){const t=p("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default V
//# sourceMappingURL=groups-5afd7c15.js.map
