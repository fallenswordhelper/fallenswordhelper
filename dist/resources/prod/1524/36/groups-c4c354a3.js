import{c as t}from"./closestTr-d6d5777f.js"
import{c as s}from"./csvSplit-482f2ccd.js"
import{d as e,g as n}from"./getGroupStats-776ea10e.js"
import{g as a}from"./getArrayByClassName-7d00a4d5.js"
import{t as o,B as r,C as i,i as c,a4 as l,h as f,au as d,o as u,E as p,D as h,c as m,bY as b,W as g,m as j,u as C,y as $,I as S}from"./calfSystem-e7bde0c3.js"
import{o as w}from"./onlineDot-7bb4a617.js"
import{g as A}from"./getMembrList-6126e70d.js"
import{c as x}from"./createInput-563f37d2.js"
import{h as v}from"./hideElement-f0e898f0.js"
import"./closest-7968af48.js"
import"./chunk-eaa75fd1.js"
import"./createButton-d50eac25.js"
import"./createLi-542e8e60.js"
import"./createUl-3f2ca776.js"
import"./openQuickBuffByName-e9ad8a96.js"
import"./fshOpen-6a6a1b65.js"
import"./groupViewStats-9ae6e1b0.js"
import"./intValue-ca51a3c0.js"
import"./currentGuildId-24e90d79.js"
import"./cmdExport-073f9de0.js"
import"./indexAjaxJson-9da74e49.js"
import"./idb-47978eaa.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],e=B.exec(i(s)),n=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(d.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,e){return N(t,e)-N(t,s)}function y(t,s){return t[s]?`<a href="${l}${t[s].id}">${s}</a>`:s}function J(t){return"[none]"!==t&&-1===t.indexOf("<font")}function M(t,n){const a=n.cells[0]
r(function(t,s){const e=i(s.children[0])
return t[e]?`${w({last_login:t[e].last_login})}&nbsp;<a href="${l}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,a),a)
const d=n.cells[1],u=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(o(G,t)),n}(t,d)
!function(t,s){const n=s.filter(J)
n.length>0&&f(t,e(n)),c(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(a,u),function(t,s,e){const n=e.map(o(y,t))
r(`<span>${n.join(", ")}</span>`,s)}(t,d,u),T(n)}function U(s){a("group-action-container").map((s=>t(s))).forEach(o(M,s))}function D(t,s){const e=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),f(t,e),e}function E(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
c(n,e)}function L(t){n(t.href).then(o(E,t))}function k(t){t.target.disabled=!0,p('#pCC a[href*="=viewstats&"]').forEach(L)}function z(t){return!t.includes("#000099")}function R(t){r('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(e)).filter(z).length<m.maxGroupSizeToJoin){const s=j({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(o(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){g("groups","joinAllGroupsUnderSize"),p('#pCC a[href*="confirmJoin"]').forEach(H)}function I(){const t=h('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
m.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${m.maxGroupSizeToJoin} Members`)
u(s,F)}(s)),function(t){const s=D(t,"Fetch Group Stats")
u(s,k)}(s),m.subcmd2===b&&F()}function O(){$()||(A(!1).then(U),function(){const t=S("minGroupLevel")
t&&c(h("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),I(),function(){const t=p("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default O
//# sourceMappingURL=groups-c4c354a3.js.map
