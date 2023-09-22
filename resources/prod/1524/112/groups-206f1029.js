import{g as t}from"./getMembrList-d2aebe41.js"
import{i as s}from"./insertHtmlBeforeBegin-b72f8ab9.js"
import{B as n,i as e,bd as i,cR as o,o as a,be as r,n as c,bJ as l,ae as u,c as f,bK as p,s as d,c0 as m,a3 as h,v as b,bk as v,b2 as g,j,ab as S,cS as $,l as w,r as A,E as C,w as G,q as y,ad as B}from"./calfSystem-4830a18d.js"
import{c as J}from"./closestTr-a662daf2.js"
import{c as L}from"./csvSplit-81e99601.js"
import{d as M}from"./dateUtc-36fb94b9.js"
import{f as N}from"./fshOpen-c0e91392.js"
import{c as x}from"./createButton-30c5ecee.js"
import{c as k}from"./chunk-cd03a005.js"
import{o as D}from"./onlineDot-64ef932a.js"
import{p as T}from"./playerLinkFromMembrList-c96051cd.js"
import{h as z}from"./hideElement-85f33001.js"
import{c as E}from"./createInput-08b5e815.js"
import{d as H}from"./daGroupStats-6bce852a.js"
import{a as P}from"./attribsToArray-a01ba54f.js"
import{g as F}from"./getId-e4d83057.js"
import"./guildMembers-7edbe4e6.js"
import"./isArray-09a53da7.js"
import"./now-6f22aec9.js"
import"./idb-7e56faaa.js"
import"./guildGroups-c61054e3.js"
import"./guild-8e58b9bf.js"
import"./intValue-e1798d0a.js"
function O(t,s,n){return e(t,function(t,s){const n=o(),i=x({className:"fshBl fshBls",textContent:t})
return a(i,(n=>{n.target.blur(),N(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),e(n,i),n}(`Buff ${i[n]} 16`,s.join(","))),t}const R=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,U=(t,s)=>t?.[s]?.level??0,X=(t,s,n)=>U(t,n)-U(t,s),Z=t=>"[none]"!==t&&-1===t.indexOf("<font")
function _(t){let s=(new Date).getFullYear()
return"Dec"===g[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function I(t){const s=t.cells[3],n=m(R,h(s))
b(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(M([_(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function V(t,s){const i=s.filter(Z)
i.length>0&&e(t,function(t){const s=k(16,t),e=n()
return s.reduce(O,e)}(i)),b(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function Y(t,s){const n=s.cells[0]
d(function(t,s){const n=h(s.children[0])
return t?.[n]?`${D({last_login:t[n].last_login})}&nbsp;<a href="${v}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],i=function(t,s){const n=L(s.innerHTML)
return n.length>1&&n.sort(f(X,t)),n}(t,e)
V(n,i),function(t,s,n){const e=n.map(f(T,t))
d(`<span>${e.join(", ")}</span>`,s)}(t,e,i),I(s)}function q(t,s){const n=E({className:"custombutton",type:"button",value:s})
return b(t,"&nbsp;"),e(t,n),n}async function K(t){const s=F(t),n=await H(s)
if(n?.r?.attributes){const s=P(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
b(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function Q(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(K)}function W(t){return!t.includes("#000099")}async function tt(t,s){await C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){d('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function st(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(L(h(s)).filter(W).length<S.maxGroupSizeToJoin){const s=w({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
tt(A(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function nt(){c("groups","joinAllGroupsUnderSize"),j('#pCC a[href*="confirmJoin"]').forEach(st)}function et(t){const s=t.parentNode
S.enableMaxGroupSizeToJoin&&(z(t),function(t){const s=q(t,`Join All Groups < ${S.maxGroupSizeToJoin} Members`)
a(s,nt)}(s)),function(t){t.classList.add("fshRelative")
const s=q(t,"Fetch Group Stats")
s.style.position="absolute",a(s,Q)}(s),S.subcmd2===$&&nt()}async function it(){if(G())return
const n=y('#pCC input[value="Join All Available Groups"]')
if(!n)return
const e=t(!1)
!function(){const t=B("minGroupLevel")
if(t){const n=y('#pCC table[width="650"]')
s(y("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),et(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const i=await e
var o
i&&(o=i,l("JS Perf","doGroupPaint"),u("group-action-container").map((t=>J(t))).forEach(f(Y,o)),p("JS Perf","doGroupPaint"))}export{it as default}
//# sourceMappingURL=groups-206f1029.js.map
