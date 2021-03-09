import{c as t}from"./closestTr-5dabd71f.js"
import{c as s}from"./csvSplit-5e072bd9.js"
import{d as n,g as e}from"./getGroupStats-4df94e7b.js"
import{g as o}from"./getArrayByClassName-ea5b14c8.js"
import{t as a,A as r,B as i,i as c,a2 as l,h as f,as as d,o as u,D as p,C as h,c as m,bW as b,V as g,m as j,u as C,x as $,H as S}from"./calfSystem-793da633.js"
import{o as A}from"./onlineDot-5f13de48.js"
import{g as w}from"./getMembrList-b3463327.js"
import{c as x}from"./createInput-9733446a.js"
import{h as v}from"./hideElement-7b9c883f.js"
import"./closest-f906514d.js"
import"./chunk-5d7e6f3a.js"
import"./createButton-6735d85a.js"
import"./createLi-b0b9466b.js"
import"./createUl-870923e1.js"
import"./openQuickBuffByName-074c8760.js"
import"./fshOpen-49538a62.js"
import"./groupViewStats-fda5fcc8.js"
import"./intValue-d2a6f461.js"
import"./currentGuildId-1aba3c9c.js"
import"./cmdExport-6a61d44d.js"
import"./indexAjaxJson-bfa28533.js"
import"./idb-e7344221.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],n=B.exec(i(s)),e=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const n=new Date
return n.setUTCDate(t[2]),n.setUTCMonth(d.indexOf(t[3])),n.setUTCFullYear(s),n.setUTCHours(t[4]),n.setUTCMinutes(t[5]),n}(n,e).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,n){return N(t,n)-N(t,s)}function J(t,s){return t[s]?`<a href="${l}${t[s].id}">${s}</a>`:s}function M(t){return"[none]"!==t&&-1===t.indexOf("<font")}function y(t,e){const o=e.cells[0]
r(function(t,s){const n=i(s.children[0])
return t[n]?`${A({last_login:t[n].last_login})}&nbsp;<a href="${l}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,o),o)
const d=e.cells[1],u=function(t,n){const e=s(n.innerHTML)
return e.length>1&&e.sort(a(G,t)),e}(t,d)
!function(t,s){const e=s.filter(M)
e.length>0&&f(t,n(e)),c(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(o,u),function(t,s,n){const e=n.map(a(J,t))
r(`<span>${e.join(", ")}</span>`,s)}(t,d,u),T(e)}function U(s){o("group-action-container").map((s=>t(s))).forEach(a(y,s))}function D(t,s){const n=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),f(t,n),n}function L(t,s){const n=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
c(e,n)}function k(t){e(t.href).then(a(L,t))}function z(t){t.target.disabled=!0,p('#pCC a[href*="=viewstats&"]').forEach(k)}function E(t){return!t.includes("#000099")}function R(t){r('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(n)).filter(E).length<m.maxGroupSizeToJoin){const s=j({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(a(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){g("groups","joinAllGroupsUnderSize"),p('#pCC a[href*="confirmJoin"]').forEach(H)}function O(){const t=h('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
m.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${m.maxGroupSizeToJoin} Members`)
u(s,F)}(s)),function(t){const s=D(t,"Fetch Group Stats")
u(s,z)}(s),m.subcmd2===b&&F()}function V(){$()||(w(!1).then(U),function(){const t=S("minGroupLevel")
t&&c(h("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),O(),function(){const t=p("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default V
//# sourceMappingURL=groups-ea339e07.js.map
