import{g as t}from"./getMembrList-09da0fac.js"
import{i as s}from"./insertHtmlBeforeBegin-52ab7a3c.js"
import{B as n,i,bi as o,cT as e,o as a,bj as r,n as c,bM as l,ag as u,c as f,bN as p,s as d,c4 as m,a5 as h,v as b,bp as v,b7 as g,j,ad as S,cU as $,l as w,r as A,G as C,w as G,q as y,af as B}from"./calfSystem-2fff342b.js"
import{c as J}from"./closestTr-03cebe69.js"
import{c as M}from"./csvSplit-130c4743.js"
import{d as N}from"./dateUtc-ae062737.js"
import{f as L}from"./fshOpen-c0e91392.js"
import{c as T}from"./createButton-485879f7.js"
import{c as x}from"./chunk-cd03a005.js"
import{o as D}from"./onlineDot-0b9da3a6.js"
import{p as k}from"./playerLinkFromMembrList-9b0fa4dd.js"
import{h as P}from"./hideElement-baffa60f.js"
import{c as z}from"./createInput-9528c659.js"
import{d as E}from"./daGroupStats-02ff0e14.js"
import{a as H}from"./attribsToArray-404ecaf6.js"
import{g as U}from"./getId-e4d83057.js"
import"./guildMembers-0c31d405.js"
import"./now-6f22aec9.js"
import"./idb-0ebea50c.js"
import"./guildGroups-50c9cd23.js"
import"./guild-6c03a6f9.js"
import"./intValue-e1798d0a.js"
function X(t,s,n){return i(t,function(t,s){const n=e(),o=T({className:"fshBl fshBls",textContent:t})
return a(o,(n=>{n.target.blur(),L(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),i(n,o),n}(`Buff ${o[n]} 16`,s.join(","))),t}const _=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,F=(t,s)=>t?.[s]?.level??0,I=(t,s,n)=>F(t,n)-F(t,s),O=t=>"[none]"!==t&&-1===t.indexOf("<font")
function R(t){let s=(new Date).getFullYear()
return"Dec"===g[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function V(t){const s=t.cells[3],n=m(_,h(s))
b(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,i]){return new Date(N([R(s),s,t,n,i]))}(n).toString().slice(0,21)}</span>`)}function Z(t,s){const o=s.filter(O)
o.length>0&&i(t,function(t){const s=x(16,t),i=n()
return s.reduce(X,i)}(o)),b(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function q(t,s){const n=s.cells[0]
d(function(t,s){const n=h(s.children[0])
return t?.[n]?`${D({last_login:t[n].last_login})}&nbsp;<a href="${v}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const i=s.cells[1],o=function(t,s){const n=M(s.innerHTML)
return n.length>1&&n.sort(f(I,t)),n}(t,i)
Z(n,o),function(t,s,n){const i=n.map(f(k,t))
d(`<span>${i.join(", ")}</span>`,s)}(t,i,o),V(s)}function Q(t,s){const n=z({className:"custombutton",type:"button",value:s})
return b(t,"&nbsp;"),i(t,n),n}async function W(t){const s=U(t),n=await E(s)
if(n?.r?.attributes){const s=H(n.r.attributes),i=t.parentNode.parentNode.previousElementSibling
b(i,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function Y(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(W)}function K(t){return!t.includes("#000099")}async function tt(t,s){await C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){d('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function st(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(M(h(s)).filter(K).length<S.maxGroupSizeToJoin){const s=w({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
tt(A(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function nt(){c("groups","joinAllGroupsUnderSize"),j('#pCC a[href*="confirmJoin"]').forEach(st)}function it(t){const s=t.parentNode
S.enableMaxGroupSizeToJoin&&(P(t),function(t){const s=Q(t,`Join All Groups < ${S.maxGroupSizeToJoin} Members`)
a(s,nt)}(s)),function(t){t.classList.add("fshRelative")
const s=Q(t,"Fetch Group Stats")
s.style.position="absolute",a(s,Y)}(s),S.subcmd2===$&&nt()}async function ot(){if(G())return
const n=y('#pCC input[value="Join All Available Groups"]')
if(!n)return
const i=t(!1)
!function(){const t=B("minGroupLevel")
if(t){const n=y('#pCC table[width="650"]')
s(y("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),it(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const o=await i
var e
o&&(e=o,l("JS Perf","doGroupPaint"),u("group-action-container").map((t=>J(t))).forEach(f(q,e)),p("JS Perf","doGroupPaint"))}export{ot as default}
//# sourceMappingURL=groups-724977d8.js.map
