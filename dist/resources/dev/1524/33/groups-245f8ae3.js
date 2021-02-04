import{c as t}from"./closestTr-8453785a.js"
import{c as s}from"./csvSplit-d4535156.js"
import{d as e,g as n}from"./getGroupStats-6e044091.js"
import{g as o}from"./getArrayByClassName-6d0c056d.js"
import{ag as a,t as r,ah as i,A as c,B as l,i as u,a3 as f,h as d,av as p,o as h,D as m,C as b,c as g,b_ as j,W as C,m as $,u as S,x as A,H as w}from"./calfSystem-37f70deb.js"
import{o as x}from"./onlineDot-1818f1ec.js"
import{g as v}from"./getMembrList-92e9d856.js"
import{c as B}from"./createInput-ef7d744f.js"
import{h as G}from"./hideElement-eb117e0e.js"
import"./closest-8b679b7a.js"
import"./chunk-c6dcf4eb.js"
import"./createButton-6599017c.js"
import"./createLi-b464541b.js"
import"./createUl-961da871.js"
import"./openQuickBuffByName-28108be8.js"
import"./fshOpen-946a9f05.js"
import"./groupViewStats-c5a6b702.js"
import"./intValue-55d66e09.js"
import"./currentGuildId-5ba5aa94.js"
import"./cmdExport-de9079b1.js"
import"./indexAjaxJson-82f32240.js"
import"./idb-416129aa.js"
const T=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],e=T.exec(l(s)),n=(new Date).getFullYear()
u(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(p.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function J(t,s){return t[s]?t[s].level:0}function M(t,s,e){return J(t,e)-J(t,s)}function y(t,s){return t[s]?`<a href="${f}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,n){const o=n.cells[0]
c(function(t,s){const e=l(s.children[0])
return t[e]?`${x({last_login:t[e].last_login})}&nbsp;<a href="${f}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const a=n.cells[1],i=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(r(M,t)),n}(t,a)
!function(t,s){const n=s.filter(U)
n.length>0&&d(t,e(n)),u(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,i),function(t,s,e){const n=e.map(r(y,t))
c(`<span>${n.join(", ")}</span>`,s)}(t,a,i),N(n)}function L(s){a("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(r(D,s)),i("groups.doGroupPaint")}function k(t,s){const e=B({className:"custombutton",type:"button",value:s})
return u(t,"&nbsp;"),d(t,e),e}function z(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
u(n,e)}function E(t){n(t.href).then(r(z,t))}function R(t){t.target.disabled=!0,m('#pCC a[href*="=viewstats&"]').forEach(E)}function H(t){return!t.includes("#000099")}function _(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function F(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(l(e)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(_,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function O(){C("groups","joinAllGroupsUnderSize"),m('#pCC a[href*="confirmJoin"]').forEach(F)}function P(){const t=b('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(G(t),function(t){const s=k(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
h(s,O)}(s)),function(t){const s=k(t,"Fetch Group Stats")
h(s,R)}(s),g.subcmd2===j&&O()}function X(){A()||(v(!1).then(L),function(){const t=w("minGroupLevel")
t&&u(b("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),P(),function(){const t=m("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default X
//# sourceMappingURL=groups-245f8ae3.js.map
