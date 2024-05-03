import{g as t}from"./getMembrList-BJ_5X84W.js"
import{E as s,B as n,i as e,bk as i,cr as o,o as a,bl as r,s as c,bR as l,aj as u,c as p,q as f,bS as d,d as m,c8 as h,a8 as b,v as g,br as v,b9 as j,k as $,ag as S,bH as w,c$ as A,m as G,r as y,G as C,bQ as B,w as N,ai as k}from"./calfSystem-BpHkrDYD.js"
import{i as J}from"./insertHtmlBeforeBegin-BTwAhjpg.js"
import{c as L}from"./closestTable-5_xfR8ik.js"
import{c as M}from"./closestTr-BwzFUWhN.js"
import{c as T}from"./csvSplit-XJPlnymy.js"
import{d as x}from"./dateUtc-B5by6_Xa.js"
import{f as D}from"./fshOpen-AuKioUPF.js"
import{c as z}from"./createButton-PtLz_XA2.js"
import{o as P}from"./onlineDot-Dx2wm9H-.js"
import{p as E}from"./playerLinkFromMembrList-2X0DE0Yx.js"
import{c as H}from"./createInput-DD0B6HSb.js"
import{d as F}from"./daGroupStats-BgHiT7Q4.js"
import{a as X}from"./attribsToArray-BeQk7dUR.js"
import{g as _}from"./getId-CEBzpjjo.js"
import"./guildMembers-366dgoht.js"
import"./isArray-eVldfhw1.js"
import"./now-Cx4PsKjI.js"
import"./playerLink-CraLqKC4.js"
import"./guildGroups-CV3r18PW.js"
import"./guild-BjvxTKLF.js"
import"./intValue-C7nTQec1.js"
function I(t,s,n){return e(t,function(t,s){const n=o(),i=z({className:"fshBl fshBls",textContent:t})
return a(i,(n=>{n.target.blur(),D(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),e(n,i),n}(`Buff ${i[n]} 16`,s.join(","))),t}const Q=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,R=(t,s)=>t?.[s]?.level??0,U=(t,s,n)=>R(t,n)-R(t,s),Z=t=>"[none]"!==t&&-1===t.indexOf("<font")
function O(t){let s=(new Date).getFullYear()
return"Dec"===j[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function V(t){const s=t.cells[3],n=h(Q,b(s))
g(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(x([O(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function q(t,i){const o=i.filter(Z)
o.length>0&&e(t,function(t){const e=s(16,t),i=n()
return e.reduce(I,i)}(o)),g(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function Y(t,s){const n=s.cells[0]
m(function(t,s){const n=b(s.children[0])
return t?.[n]?`${P({last_login:t[n].last_login})}&nbsp;<a href="${v}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],i=function(t,s){const n=T(s.innerHTML)
return n.length>1&&n.sort(p(U,t)),n}(t,e)
q(n,i),function(t,s,n){const e=n.map(p(E,t))
m(`<span>${e.join(", ")}</span>`,s)}(t,e,i),V(s)}function K(t){"A"===t.target.tagName&&c("groups","member click"),"B"===t.target.tagName&&c("groups","leader click")}function W(t,s){const n=H({className:"custombutton",type:"button",value:s})
return g(t,"&nbsp;"),e(t,n),n}async function tt(t){const s=_(t),n=await F(s)
if(n?.r?.attributes){const s=X(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
g(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function st(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,$('#pCC a[href*="=viewstats&"]').forEach(tt)}function nt(t){return!t.includes("#000099")}async function et(t,s){await C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){m('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function it(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(T(b(s)).filter(nt).length<S.maxGroupSizeToJoin){const s=G({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
et(y(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function ot(){c("groups","joinAllGroupsUnderSize"),$('#pCC a[href*="confirmJoin"]').forEach(it)}function at(t){const s=t.parentNode
S.enableMaxGroupSizeToJoin&&(w(t),function(t){const s=W(t,`Join All Groups < ${S.maxGroupSizeToJoin} Members`)
a(s,ot)}(s)),function(t){t.classList.add("fshRelative")
const s=W(t,"Fetch Group Stats")
s.style.position="absolute",a(s,st)}(s),S.subcmd2===A&&ot()}async function rt(){if(!B()||N())return
const s=f('#pCC input[value="Join All Available Groups"]')
if(!s)return
const n=t(!1)
!function(){const t=k("minGroupLevel")
if(t){const s=f('#pCC table[width="650"]')
J(f("br",s),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),at(s),function(){const t=$("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const e=await n
var i
e&&(i=e,l("JS Perf","doGroupPaint"),u("group-action-container").map((t=>M(t))).forEach(p(Y,i)),a(L(f(".group-action-container")),K),d("JS Perf","doGroupPaint"))}export{rt as default}
//# sourceMappingURL=groups-CwCS53T4.js.map
