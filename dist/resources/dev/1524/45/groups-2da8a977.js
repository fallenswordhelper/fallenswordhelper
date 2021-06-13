import{c as t}from"./closestTr-3df2da21.js"
import{c as s}from"./csvSplit-95ff5434.js"
import{d as e,g as n}from"./getGroupStats-873e63bd.js"
import{g as o}from"./getArrayByClassName-039bb6c6.js"
import{au as a,t as r,av as i,B as c,C as l,i as u,a4 as d,h as f,ar as p,o as h,E as m,D as b,c as g,c2 as j,T as C,m as $,u as S,y as w,I as A}from"./calfSystem-6a3c85e0.js"
import{o as v}from"./onlineDot-24724c92.js"
import{g as x}from"./getMembrList-1f7b49fe.js"
import{c as B}from"./createInput-9bf3eee1.js"
import{h as T}from"./hideElement-53ec58d4.js"
import"./closest-8e46d454.js"
import"./chunk-82057567.js"
import"./createButton-82ecce7c.js"
import"./createLi-85fedf56.js"
import"./createUl-5382febe.js"
import"./openQuickBuffByName-2da3e6db.js"
import"./fshOpen-d0a5bbc1.js"
import"./groupViewStats-5edcc42d.js"
import"./intValue-a6f9b475.js"
import"./currentGuildId-3f5ba5ad.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./idb-66004b57.js"
const G=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],e=G.exec(l(s)),n=(new Date).getFullYear()
u(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(p.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,e){return y(t,e)-y(t,s)}function M(t,s){return t[s]?`<a href="${d}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,n){const o=n.cells[0]
c(function(t,s){const e=l(s.children[0])
return t[e]?`${v({last_login:t[e].last_login})}&nbsp;<a href="${d}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const a=n.cells[1],i=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(r(J,t)),n}(t,a)
!function(t,s){const n=s.filter(U)
n.length>0&&f(t,e(n)),u(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,i),function(t,s,e){const n=e.map(r(M,t))
c(`<span>${n.join(", ")}</span>`,s)}(t,a,i),N(n)}function E(s){a("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(r(D,s)),i("groups.doGroupPaint")}function L(t,s){const e=B({className:"custombutton",type:"button",value:s})
return u(t,"&nbsp;"),f(t,e),e}function k(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
u(n,e)}function z(t){n(t.href).then(r(k,t))}function R(t){t.target.disabled=!0,m('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function F(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function I(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(l(e)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(F,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function O(){C("groups","joinAllGroupsUnderSize"),m('#pCC a[href*="confirmJoin"]').forEach(I)}function P(){const t=b('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(T(t),function(t){const s=L(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
h(s,O)}(s)),function(t){const s=L(t,"Fetch Group Stats")
h(s,R)}(s),g.subcmd2===j&&O()}function X(){w()||(x(!1).then(E),function(){const t=A("minGroupLevel")
t&&u(b("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),P(),function(){const t=m("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default X
//# sourceMappingURL=groups-2da8a977.js.map
