import{g as t}from"./getMembrList-d370ab65.js"
import{i as s}from"./insertHtmlBeforeBegin-a2731549.js"
import{B as n,i as e,be as i,cR as o,o as a,bf as r,n as c,bK as l,af as u,c as f,bL as p,s as d,c1 as m,a4 as h,v as b,bl as v,b3 as g,j,ac as S,cS as $,l as w,r as A,F as C,w as G,q as y,ae as B}from"./calfSystem-929ac228.js"
import{c as J}from"./closestTr-3ee5784f.js"
import{c as L}from"./csvSplit-c32f193d.js"
import{d as N}from"./dateUtc-0fede27f.js"
import{f as M}from"./fshOpen-c0e91392.js"
import{c as x}from"./createButton-5ae9113e.js"
import{c as k}from"./chunk-cd03a005.js"
import{o as D}from"./onlineDot-2726d9a2.js"
import{p as T}from"./playerLinkFromMembrList-4421f644.js"
import{h as z}from"./hideElement-baffa60f.js"
import{c as F}from"./createInput-c66459c1.js"
import{d as E}from"./daGroupStats-6e7cf053.js"
import{a as P}from"./attribsToArray-82e70568.js"
import{g as U}from"./getId-e4d83057.js"
import"./guildMembers-ec6b013f.js"
import"./isArray-09a53da7.js"
import"./now-6f22aec9.js"
import"./idb-8fd6b5d1.js"
import"./guildGroups-0bdea400.js"
import"./guild-5e30924d.js"
import"./intValue-e1798d0a.js"
function H(t,s,n){return e(t,function(t,s){const n=o(),i=x({className:"fshBl fshBls",textContent:t})
return a(i,(n=>{n.target.blur(),M(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),e(n,i),n}(`Buff ${i[n]} 16`,s.join(","))),t}const X=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,O=(t,s)=>t?.[s]?.level??0,R=(t,s,n)=>O(t,n)-O(t,s),_=t=>"[none]"!==t&&-1===t.indexOf("<font")
function I(t){let s=(new Date).getFullYear()
return"Dec"===g[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function Q(t){const s=t.cells[3],n=m(X,h(s))
b(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(N([I(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function Y(t,s){const i=s.filter(_)
i.length>0&&e(t,function(t){const s=k(16,t),e=n()
return s.reduce(H,e)}(i)),b(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function Z(t,s){const n=s.cells[0]
d(function(t,s){const n=h(s.children[0])
return t?.[n]?`${D({last_login:t[n].last_login})}&nbsp;<a href="${v}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],i=function(t,s){const n=L(s.innerHTML)
return n.length>1&&n.sort(f(R,t)),n}(t,e)
Y(n,i),function(t,s,n){const e=n.map(f(T,t))
d(`<span>${e.join(", ")}</span>`,s)}(t,e,i),Q(s)}function q(t,s){const n=F({className:"custombutton",type:"button",value:s})
return b(t,"&nbsp;"),e(t,n),n}async function K(t){const s=U(t),n=await E(s)
if(n?.r?.attributes){const s=P(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
b(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function V(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(K)}function W(t){return!t.includes("#000099")}async function tt(t,s){await C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){d('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function st(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(L(h(s)).filter(W).length<S.maxGroupSizeToJoin){const s=w({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
tt(A(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function nt(){c("groups","joinAllGroupsUnderSize"),j('#pCC a[href*="confirmJoin"]').forEach(st)}function et(t){const s=t.parentNode
S.enableMaxGroupSizeToJoin&&(z(t),function(t){const s=q(t,`Join All Groups < ${S.maxGroupSizeToJoin} Members`)
a(s,nt)}(s)),function(t){t.classList.add("fshRelative")
const s=q(t,"Fetch Group Stats")
s.style.position="absolute",a(s,V)}(s),S.subcmd2===$&&nt()}async function it(){if(G())return
const n=y('#pCC input[value="Join All Available Groups"]')
if(!n)return
const e=t(!1)
!function(){const t=B("minGroupLevel")
if(t){const n=y('#pCC table[width="650"]')
s(y("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),et(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const i=await e
var o
i&&(o=i,l("JS Perf","doGroupPaint"),u("group-action-container").map((t=>J(t))).forEach(f(Z,o)),p("JS Perf","doGroupPaint"))}export{it as default}
//# sourceMappingURL=groups-bf666b16.js.map
