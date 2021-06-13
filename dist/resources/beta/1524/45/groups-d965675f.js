import{c as t}from"./closestTr-eb55d944.js"
import{c as s}from"./csvSplit-95ff5434.js"
import{d as e,g as n}from"./getGroupStats-217cfaa9.js"
import{g as o}from"./getArrayByClassName-84652cc1.js"
import{at as a,t as r,au as i,B as c,C as l,i as u,a3 as f,h as d,aq as p,o as h,E as m,D as b,c as g,c1 as j,S as C,m as $,u as S,y as w,I as A}from"./calfSystem-ae2e69af.js"
import{o as x}from"./onlineDot-f14e68a8.js"
import{g as v}from"./getMembrList-7af564d9.js"
import{c as B}from"./createInput-90835289.js"
import{h as G}from"./hideElement-53ec58d4.js"
import"./closest-8e46d454.js"
import"./chunk-82057567.js"
import"./createButton-8843d34d.js"
import"./createLi-d02eeee0.js"
import"./createUl-dee25901.js"
import"./openQuickBuffByName-3c03dfb1.js"
import"./fshOpen-d0a5bbc1.js"
import"./groupViewStats-71457820.js"
import"./intValue-a6f9b475.js"
import"./currentGuildId-85358166.js"
import"./cmdExport-aa80361b.js"
import"./indexAjaxJson-6eadb7fa.js"
import"./idb-225659e6.js"
const T=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],e=T.exec(l(s)),n=(new Date).getFullYear()
u(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(p.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,e){return y(t,e)-y(t,s)}function M(t,s){return t[s]?`<a href="${f}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,n){const o=n.cells[0]
c(function(t,s){const e=l(s.children[0])
return t[e]?`${x({last_login:t[e].last_login})}&nbsp;<a href="${f}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const a=n.cells[1],i=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(r(J,t)),n}(t,a)
!function(t,s){const n=s.filter(U)
n.length>0&&d(t,e(n)),u(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,i),function(t,s,e){const n=e.map(r(M,t))
c(`<span>${n.join(", ")}</span>`,s)}(t,a,i),N(n)}function E(s){a("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(r(D,s)),i("groups.doGroupPaint")}function L(t,s){const e=B({className:"custombutton",type:"button",value:s})
return u(t,"&nbsp;"),d(t,e),e}function k(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
u(n,e)}function z(t){n(t.href).then(r(k,t))}function R(t){t.target.disabled=!0,m('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function F(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function I(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(l(e)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(F,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function O(){C("groups","joinAllGroupsUnderSize"),m('#pCC a[href*="confirmJoin"]').forEach(I)}function P(){const t=b('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(G(t),function(t){const s=L(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
h(s,O)}(s)),function(t){const s=L(t,"Fetch Group Stats")
h(s,R)}(s),g.subcmd2===j&&O()}function X(){w()||(v(!1).then(E),function(){const t=A("minGroupLevel")
t&&u(b("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),P(),function(){const t=m("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default X
//# sourceMappingURL=groups-d965675f.js.map
