import{c as t}from"./closestTr-8d5ed3dd.js"
import{c as s}from"./csvSplit-482f2ccd.js"
import{d as e,g as n}from"./getGroupStats-394fe6da.js"
import{g as o}from"./getArrayByClassName-23419047.js"
import{ai as a,t as r,aj as i,B as c,C as l,i as d,a5 as f,h as u,ax as p,o as h,E as m,D as b,c as g,c0 as j,X as C,m as $,u as S,y as w,I as x}from"./calfSystem-eeb1d862.js"
import{o as A}from"./onlineDot-b33fd599.js"
import{g as v}from"./getMembrList-8d90010d.js"
import{c as B}from"./createInput-c963dc21.js"
import{h as G}from"./hideElement-f0e898f0.js"
import"./closest-7968af48.js"
import"./chunk-eaa75fd1.js"
import"./createButton-033e413f.js"
import"./createLi-f6e99087.js"
import"./createUl-b4c1441e.js"
import"./openQuickBuffByName-d4740e2d.js"
import"./fshOpen-6a6a1b65.js"
import"./groupViewStats-3169244c.js"
import"./intValue-ca51a3c0.js"
import"./currentGuildId-5370ff7a.js"
import"./cmdExport-7e823e95.js"
import"./indexAjaxJson-2deb257d.js"
import"./idb-874d144e.js"
const T=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],e=T.exec(l(s)),n=(new Date).getFullYear()
d(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(p.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,e){return y(t,e)-y(t,s)}function M(t,s){return t[s]?`<a href="${f}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,n){const o=n.cells[0]
c(function(t,s){const e=l(s.children[0])
return t[e]?`${A({last_login:t[e].last_login})}&nbsp;<a href="${f}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const a=n.cells[1],i=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(r(J,t)),n}(t,a)
!function(t,s){const n=s.filter(U)
n.length>0&&u(t,e(n)),d(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,i),function(t,s,e){const n=e.map(r(M,t))
c(`<span>${n.join(", ")}</span>`,s)}(t,a,i),N(n)}function E(s){a("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(r(D,s)),i("groups.doGroupPaint")}function L(t,s){const e=B({className:"custombutton",type:"button",value:s})
return d(t,"&nbsp;"),u(t,e),e}function k(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
d(n,e)}function z(t){n(t.href).then(r(k,t))}function R(t){t.target.disabled=!0,m('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function X(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function F(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(l(e)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(X,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function I(){C("groups","joinAllGroupsUnderSize"),m('#pCC a[href*="confirmJoin"]').forEach(F)}function O(){const t=b('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(G(t),function(t){const s=L(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
h(s,I)}(s)),function(t){const s=L(t,"Fetch Group Stats")
h(s,R)}(s),g.subcmd2===j&&I()}function P(){w()||(v(!1).then(E),function(){const t=x("minGroupLevel")
t&&d(b("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),O(),function(){const t=m("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default P
//# sourceMappingURL=groups-4ef2176d.js.map
