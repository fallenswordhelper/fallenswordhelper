import{g as t}from"./getMembrList-1mbZxUnr.js"
import{B as s,i as n,bc as e,ck as o,o as i,bd as a,s as r,bI as c,ae as l,c as u,q as p,bJ as f,d,b$ as m,a3 as h,v as b,bj as g,b1 as v,k as j,ab as $,cR as S,m as w,r as A,E as C,bH as y,w as B,ad as G}from"./calfSystem-ZGMc097r.js"
import{i as J}from"./insertHtmlBeforeBegin-wG1LQxww.js"
import{c as N}from"./closestTable-ell7c3Dx.js"
import{c as k}from"./closestTr-7-El51TS.js"
import{c as L}from"./csvSplit-jcT1ACQZ.js"
import{d as M}from"./dateUtc-2Rs2auR9.js"
import{f as T}from"./fshOpen-16hNCxKt.js"
import{c as x}from"./createButton-ryKGwCiK.js"
import{c as D}from"./chunk-joYXv2f3.js"
import{o as z}from"./onlineDot-hg0rJ5BB.js"
import{p as E}from"./playerLinkFromMembrList-V9JNVOm7.js"
import{h as H}from"./hideElement-RABq1RME.js"
import{c as P}from"./createInput-p1XymqYu.js"
import{d as F}from"./daGroupStats-_AgHDPmn.js"
import{a as I}from"./attribsToArray-dYKSNRD8.js"
import{g as U}from"./getId-f4M3YrQR.js"
import"./guildMembers-TX9z2VMS.js"
import"./isArray-bNviZzJA.js"
import"./now-pQzGw6vd.js"
import"./idb-Asb6LweF.js"
import"./guildGroups-kI1jB6Xu.js"
import"./guild-jMtOOKQd.js"
import"./intValue-JHhLnq8V.js"
function X(t,s,c){return n(t,function(t,s){const e=o(),c=x({className:"fshBl fshBls",textContent:t})
return i(c,(n=>{n.target.blur(),T(`${a}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),r("doBuffLinks",t)})),n(e,c),e}(`Buff ${e[c]} 16`,s.join(","))),t}const O=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,R=(t,s)=>t?.[s]?.level??0,_=(t,s,n)=>R(t,n)-R(t,s),Q=t=>"[none]"!==t&&-1===t.indexOf("<font")
function Z(t){let s=(new Date).getFullYear()
return"Dec"===v[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function q(t){const s=t.cells[3],n=m(O,h(s))
b(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(M([Z(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function V(t,e){const o=e.filter(Q)
o.length>0&&n(t,function(t){const n=D(16,t),e=s()
return n.reduce(X,e)}(o)),b(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function W(t,s){const n=s.cells[0]
d(function(t,s){const n=h(s.children[0])
return t?.[n]?`${z({last_login:t[n].last_login})}&nbsp;<a href="${g}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],o=function(t,s){const n=L(s.innerHTML)
return n.length>1&&n.sort(u(_,t)),n}(t,e)
V(n,o),function(t,s,n){const e=n.map(u(E,t))
d(`<span>${e.join(", ")}</span>`,s)}(t,e,o),q(s)}function Y(t){"A"===t.target.tagName&&r("groups","member click"),"B"===t.target.tagName&&r("groups","leader click")}function K(t,s){const e=P({className:"custombutton",type:"button",value:s})
return b(t,"&nbsp;"),n(t,e),e}async function tt(t){const s=U(t),n=await F(s)
if(n?.r?.attributes){const s=I(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
b(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function st(t){r("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(tt)}function nt(t){return!t.includes("#000099")}async function et(t,s){await C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){d('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function ot(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(L(h(s)).filter(nt).length<$.maxGroupSizeToJoin){const s=w({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
et(A(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function it(){r("groups","joinAllGroupsUnderSize"),j('#pCC a[href*="confirmJoin"]').forEach(ot)}function at(t){const s=t.parentNode
$.enableMaxGroupSizeToJoin&&(H(t),function(t){const s=K(t,`Join All Groups < ${$.maxGroupSizeToJoin} Members`)
i(s,it)}(s)),function(t){t.classList.add("fshRelative")
const s=K(t,"Fetch Group Stats")
s.style.position="absolute",i(s,st)}(s),$.subcmd2===S&&it()}async function rt(){if(!y()||B())return
const s=p('#pCC input[value="Join All Available Groups"]')
if(!s)return
const n=t(!1)
!function(){const t=G("minGroupLevel")
if(t){const s=p('#pCC table[width="650"]')
J(p("br",s),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),at(s),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const e=await n
var o
e&&(o=e,c("JS Perf","doGroupPaint"),l("group-action-container").map((t=>k(t))).forEach(u(W,o)),i(N(p(".group-action-container")),Y),f("JS Perf","doGroupPaint"))}export{rt as default}
//# sourceMappingURL=groups-Za6P6GS9.js.map
