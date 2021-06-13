import{c as t}from"./closestTr-1393a128.js"
import{c as s}from"./csvSplit-95ff5434.js"
import{d as e,g as n}from"./getGroupStats-03a80b8a.js"
import{g as o}from"./getArrayByClassName-2d2ea79b.js"
import{t as a,B as r,C as i,i as c,a3 as l,h as f,aq as u,o as d,E as p,D as h,c as m,b_ as b,S as g,m as j,u as C,y as $,I as S}from"./calfSystem-e1e858cd.js"
import{o as w}from"./onlineDot-1080eb24.js"
import{g as A}from"./getMembrList-26ee9025.js"
import{c as x}from"./createInput-464ad748.js"
import{h as v}from"./hideElement-53ec58d4.js"
import"./closest-8e46d454.js"
import"./chunk-82057567.js"
import"./createButton-14a27031.js"
import"./createLi-d9193eb0.js"
import"./createUl-26757146.js"
import"./openQuickBuffByName-b48f21dd.js"
import"./fshOpen-d0a5bbc1.js"
import"./groupViewStats-5fcf4e45.js"
import"./intValue-a6f9b475.js"
import"./currentGuildId-6f6caa9a.js"
import"./cmdExport-ac312c58.js"
import"./indexAjaxJson-fc55a4e0.js"
import"./idb-ef443609.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],e=B.exec(i(s)),n=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(u.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,e){return N(t,e)-N(t,s)}function y(t,s){return t[s]?`<a href="${l}${t[s].id}">${s}</a>`:s}function J(t){return"[none]"!==t&&-1===t.indexOf("<font")}function M(t,n){const o=n.cells[0]
r(function(t,s){const e=i(s.children[0])
return t[e]?`${w({last_login:t[e].last_login})}&nbsp;<a href="${l}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const u=n.cells[1],d=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(a(G,t)),n}(t,u)
!function(t,s){const n=s.filter(J)
n.length>0&&f(t,e(n)),c(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,d),function(t,s,e){const n=e.map(a(y,t))
r(`<span>${n.join(", ")}</span>`,s)}(t,u,d),T(n)}function U(s){o("group-action-container").map((s=>t(s))).forEach(a(M,s))}function D(t,s){const e=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),f(t,e),e}function E(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
c(n,e)}function L(t){n(t.href).then(a(E,t))}function k(t){t.target.disabled=!0,p('#pCC a[href*="=viewstats&"]').forEach(L)}function z(t){return!t.includes("#000099")}function R(t){r('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(e)).filter(z).length<m.maxGroupSizeToJoin){const s=j({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(a(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function _(){g("groups","joinAllGroupsUnderSize"),p('#pCC a[href*="confirmJoin"]').forEach(H)}function F(){const t=h('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
m.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${m.maxGroupSizeToJoin} Members`)
d(s,_)}(s)),function(t){const s=D(t,"Fetch Group Stats")
d(s,k)}(s),m.subcmd2===b&&_()}function I(){$()||(A(!1).then(U),function(){const t=S("minGroupLevel")
t&&c(h("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),F(),function(){const t=p("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default I
//# sourceMappingURL=groups-a50b8561.js.map
