import{c as t}from"./closestTr-1719adc3.js"
import{c as s}from"./csvSplit-d4535156.js"
import{d as n,g as e}from"./getGroupStats-0aa8bb03.js"
import{g as o}from"./getArrayByClassName-23f3f49c.js"
import{af as a,t as r,ag as i,A as c,B as l,i as f,a2 as u,h as d,au as p,o as h,D as m,C as b,c as g,bZ as j,V as C,m as $,u as S,x as A,H as w}from"./calfSystem-c91a5c89.js"
import{o as x}from"./onlineDot-d9085600.js"
import{g as v}from"./getMembrList-fa867d4f.js"
import{c as B}from"./createInput-a2c87173.js"
import{h as G}from"./hideElement-eb117e0e.js"
import"./closest-8b679b7a.js"
import"./chunk-c6dcf4eb.js"
import"./createButton-94444a78.js"
import"./createLi-d3fe747f.js"
import"./createUl-64bfcfb0.js"
import"./openQuickBuffByName-addd523e.js"
import"./fshOpen-946a9f05.js"
import"./groupViewStats-9978fcb8.js"
import"./intValue-55d66e09.js"
import"./currentGuildId-1acce0c7.js"
import"./cmdExport-6ed03a19.js"
import"./indexAjaxJson-6b76870e.js"
import"./idb-ba7ef5fa.js"
const T=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],n=T.exec(l(s)),e=(new Date).getFullYear()
f(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const n=new Date
return n.setUTCDate(t[2]),n.setUTCMonth(p.indexOf(t[3])),n.setUTCFullYear(s),n.setUTCHours(t[4]),n.setUTCMinutes(t[5]),n}(n,e).toString().substr(0,21)}</span>`)}function J(t,s){return t[s]?t[s].level:0}function M(t,s,n){return J(t,n)-J(t,s)}function y(t,s){return t[s]?`<a href="${u}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,e){const o=e.cells[0]
c(function(t,s){const n=l(s.children[0])
return t[n]?`${x({last_login:t[n].last_login})}&nbsp;<a href="${u}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,o),o)
const a=e.cells[1],i=function(t,n){const e=s(n.innerHTML)
return e.length>1&&e.sort(r(M,t)),e}(t,a)
!function(t,s){const e=s.filter(U)
e.length>0&&d(t,n(e)),f(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(o,i),function(t,s,n){const e=n.map(r(y,t))
c(`<span>${e.join(", ")}</span>`,s)}(t,a,i),N(e)}function L(s){a("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(r(D,s)),i("groups.doGroupPaint")}function k(t,s){const n=B({className:"custombutton",type:"button",value:s})
return f(t,"&nbsp;"),d(t,n),n}function z(t,s){const n=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
f(e,n)}function E(t){e(t.href).then(r(z,t))}function R(t){t.target.disabled=!0,m('#pCC a[href*="=viewstats&"]').forEach(E)}function H(t){return!t.includes("#000099")}function F(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function O(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(s(l(n)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(F,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function P(){C("groups","joinAllGroupsUnderSize"),m('#pCC a[href*="confirmJoin"]').forEach(O)}function V(){const t=b('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(G(t),function(t){const s=k(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
h(s,P)}(s)),function(t){const s=k(t,"Fetch Group Stats")
h(s,R)}(s),g.subcmd2===j&&P()}function X(){A()||(v(!1).then(L),function(){const t=w("minGroupLevel")
t&&f(b("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),V(),function(){const t=m("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default X
//# sourceMappingURL=groups-be4e9f8c.js.map
