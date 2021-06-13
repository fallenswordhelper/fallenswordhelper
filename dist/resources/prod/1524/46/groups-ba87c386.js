import{c as t}from"./closestTr-31d65692.js"
import{c as s}from"./csvSplit-d0e27857.js"
import{d as e,g as n}from"./getGroupStats-9e56b14d.js"
import{g as o}from"./getArrayByClassName-7f937df4.js"
import{t as a,B as r,C as i,i as c,a3 as l,h as d,aq as f,o as u,E as p,D as h,c as m,b_ as b,S as g,m as j,u as C,y as $,I as S}from"./calfSystem-7991d843.js"
import{o as w}from"./onlineDot-de1b774d.js"
import{g as A}from"./getMembrList-479139ba.js"
import{c as x}from"./createInput-e6426c85.js"
import{h as v}from"./hideElement-452544d4.js"
import"./closest-d38ca7fc.js"
import"./chunk-4d4ecad3.js"
import"./createButton-1e66ce8d.js"
import"./createLi-36d441f8.js"
import"./createUl-21e973ea.js"
import"./openQuickBuffByName-76ab32da.js"
import"./fshOpen-4e911fa6.js"
import"./groupViewStats-c85a5e0e.js"
import"./intValue-19726e4b.js"
import"./currentGuildId-abfe3237.js"
import"./cmdExport-07db8246.js"
import"./indexAjaxJson-2cb21664.js"
import"./idb-89606f1a.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],e=B.exec(i(s)),n=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(f.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,e){return N(t,e)-N(t,s)}function y(t,s){return t[s]?`<a href="${l}${t[s].id}">${s}</a>`:s}function J(t){return"[none]"!==t&&-1===t.indexOf("<font")}function M(t,n){const o=n.cells[0]
r(function(t,s){const e=i(s.children[0])
return t[e]?`${w({last_login:t[e].last_login})}&nbsp;<a href="${l}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const f=n.cells[1],u=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(a(G,t)),n}(t,f)
!function(t,s){const n=s.filter(J)
n.length>0&&d(t,e(n)),c(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,u),function(t,s,e){const n=e.map(a(y,t))
r(`<span>${n.join(", ")}</span>`,s)}(t,f,u),T(n)}function U(s){o("group-action-container").map((s=>t(s))).forEach(a(M,s))}function D(t,s){const e=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),d(t,e),e}function E(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
c(n,e)}function L(t){n(t.href).then(a(E,t))}function k(t){t.target.disabled=!0,p('#pCC a[href*="=viewstats&"]').forEach(L)}function z(t){return!t.includes("#000099")}function R(t){r('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(e)).filter(z).length<m.maxGroupSizeToJoin){const s=j({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(a(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function _(){g("groups","joinAllGroupsUnderSize"),p('#pCC a[href*="confirmJoin"]').forEach(H)}function F(){const t=h('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
m.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${m.maxGroupSizeToJoin} Members`)
u(s,_)}(s)),function(t){const s=D(t,"Fetch Group Stats")
u(s,k)}(s),m.subcmd2===b&&_()}function I(){$()||(A(!1).then(U),function(){const t=S("minGroupLevel")
t&&c(h("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),F(),function(){const t=p("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default I
//# sourceMappingURL=groups-ba87c386.js.map
