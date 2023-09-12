import{g as t}from"./getMembrList-392b991f.js"
import{i as s}from"./insertHtmlBeforeBegin-80975ba7.js"
import{B as n,i,bi as e,cT as o,o as a,bj as r,n as c,bM as l,ag as u,c as f,bN as p,s as d,c4 as m,a5 as h,v as b,bp as v,b7 as g,j,ad as $,cU as S,l as w,r as A,G as C,w as G,q as y,af as B}from"./calfSystem-34913441.js"
import{c as J}from"./closestTr-316dea29.js"
import{c as M}from"./csvSplit-21d1e5f2.js"
import{d as N}from"./dateUtc-5241c4b3.js"
import{f as L}from"./fshOpen-c0e91392.js"
import{c as x}from"./createButton-ae13c659.js"
import{c as T}from"./chunk-cd03a005.js"
import{o as k}from"./onlineDot-82a20501.js"
import{p as D}from"./playerLinkFromMembrList-cb5d7fd3.js"
import{h as z}from"./hideElement-baffa60f.js"
import{c as E}from"./createInput-4ae8777b.js"
import{d as H}from"./daGroupStats-41e6b27e.js"
import{a as P}from"./attribsToArray-e520f204.js"
import{g as U}from"./getId-e4d83057.js"
import"./guildMembers-3d3812de.js"
import"./now-6f22aec9.js"
import"./idb-ec5d6344.js"
import"./guildGroups-fb9b4371.js"
import"./guild-014ef050.js"
import"./intValue-e1798d0a.js"
function O(t,s,n){return i(t,function(t,s){const n=o(),e=x({className:"fshBl fshBls",textContent:t})
return a(e,(n=>{n.target.blur(),L(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),i(n,e),n}(`Buff ${e[n]} 16`,s.join(","))),t}const F=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,I=(t,s)=>t?.[s]?.level??0,R=(t,s,n)=>I(t,n)-I(t,s),X=t=>"[none]"!==t&&-1===t.indexOf("<font")
function Z(t){let s=(new Date).getFullYear()
return"Dec"===g[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function _(t){const s=t.cells[3],n=m(F,h(s))
b(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,i]){return new Date(N([Z(s),s,t,n,i]))}(n).toString().slice(0,21)}</span>`)}function V(t,s){const e=s.filter(X)
e.length>0&&i(t,function(t){const s=T(16,t),i=n()
return s.reduce(O,i)}(e)),b(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}function q(t,s){const n=s.cells[0]
d(function(t,s){const n=h(s.children[0])
return t?.[n]?`${k({last_login:t[n].last_login})}&nbsp;<a href="${v}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const i=s.cells[1],e=function(t,s){const n=M(s.innerHTML)
return n.length>1&&n.sort(f(R,t)),n}(t,i)
V(n,e),function(t,s,n){const i=n.map(f(D,t))
d(`<span>${i.join(", ")}</span>`,s)}(t,i,e),_(s)}function Q(t,s){const n=E({className:"custombutton",type:"button",value:s})
return b(t,"&nbsp;"),i(t,n),n}async function W(t){const s=U(t),n=await H(s)
if(n?.r?.attributes){const s=P(n.r.attributes),i=t.parentNode.parentNode.previousElementSibling
b(i,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function Y(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(W)}function K(t){return!t.includes("#000099")}async function tt(t,s){await C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){d('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function st(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(M(h(s)).filter(K).length<$.maxGroupSizeToJoin){const s=w({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
tt(A(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function nt(){c("groups","joinAllGroupsUnderSize"),j('#pCC a[href*="confirmJoin"]').forEach(st)}function it(t){const s=t.parentNode
$.enableMaxGroupSizeToJoin&&(z(t),function(t){const s=Q(t,`Join All Groups < ${$.maxGroupSizeToJoin} Members`)
a(s,nt)}(s)),function(t){t.classList.add("fshRelative")
const s=Q(t,"Fetch Group Stats")
s.style.position="absolute",a(s,Y)}(s),$.subcmd2===S&&nt()}async function et(){if(G())return
const n=y('#pCC input[value="Join All Available Groups"]')
if(!n)return
const i=t(!1)
!function(){const t=B("minGroupLevel")
if(t){const n=y('#pCC table[width="650"]')
s(y("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),it(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const e=await i
var o
e&&(o=e,l("JS Perf","doGroupPaint"),u("group-action-container").map((t=>J(t))).forEach(f(q,o)),p("JS Perf","doGroupPaint"))}export{et as default}
//# sourceMappingURL=groups-d06cd146.js.map
