import{c as t}from"./closestTr-7b3a3d25.js"
import{c as s}from"./csvSplit-482f2ccd.js"
import{d as n,g as e}from"./getGroupStats-bcdebae0.js"
import{g as a}from"./getArrayByClassName-22f3bd68.js"
import{ah as o,t as r,ai as i,B as c,C as l,i as f,a4 as u,h as p,aw as d,o as h,E as m,D as b,c as g,b$ as j,W as C,m as $,u as S,y as w,I as A}from"./calfSystem-4a40365f.js"
import{o as x}from"./onlineDot-75e133f9.js"
import{g as v}from"./getMembrList-e395a723.js"
import{c as B}from"./createInput-7fa974b4.js"
import{h as G}from"./hideElement-f0e898f0.js"
import"./closest-7968af48.js"
import"./chunk-eaa75fd1.js"
import"./createButton-546eb789.js"
import"./createLi-a21c1318.js"
import"./createUl-3aa80487.js"
import"./openQuickBuffByName-c23c62ee.js"
import"./fshOpen-6a6a1b65.js"
import"./groupViewStats-f06aab4f.js"
import"./intValue-ca51a3c0.js"
import"./currentGuildId-014a0323.js"
import"./cmdExport-92971757.js"
import"./indexAjaxJson-6d511c0e.js"
import"./idb-2c15fd0c.js"
const T=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],n=T.exec(l(s)),e=(new Date).getFullYear()
f(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const n=new Date
return n.setUTCDate(t[2]),n.setUTCMonth(d.indexOf(t[3])),n.setUTCFullYear(s),n.setUTCHours(t[4]),n.setUTCMinutes(t[5]),n}(n,e).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,n){return y(t,n)-y(t,s)}function M(t,s){return t[s]?`<a href="${u}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,e){const a=e.cells[0]
c(function(t,s){const n=l(s.children[0])
return t[n]?`${x({last_login:t[n].last_login})}&nbsp;<a href="${u}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,a),a)
const o=e.cells[1],i=function(t,n){const e=s(n.innerHTML)
return e.length>1&&e.sort(r(J,t)),e}(t,o)
!function(t,s){const e=s.filter(U)
e.length>0&&p(t,n(e)),f(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(a,i),function(t,s,n){const e=n.map(r(M,t))
c(`<span>${e.join(", ")}</span>`,s)}(t,o,i),N(e)}function E(s){o("groups.doGroupPaint"),a("group-action-container").map((s=>t(s))).forEach(r(D,s)),i("groups.doGroupPaint")}function L(t,s){const n=B({className:"custombutton",type:"button",value:s})
return f(t,"&nbsp;"),p(t,n),n}function k(t,s){const n=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
f(e,n)}function z(t){e(t.href).then(r(k,t))}function R(t){t.target.disabled=!0,m('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function F(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function I(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(s(l(n)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(F,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function O(){C("groups","joinAllGroupsUnderSize"),m('#pCC a[href*="confirmJoin"]').forEach(I)}function P(){const t=b('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(G(t),function(t){const s=L(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
h(s,O)}(s)),function(t){const s=L(t,"Fetch Group Stats")
h(s,R)}(s),g.subcmd2===j&&O()}function X(){w()||(v(!1).then(E),function(){const t=A("minGroupLevel")
t&&f(b("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),P(),function(){const t=m("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default X
//# sourceMappingURL=groups-a0b32843.js.map
