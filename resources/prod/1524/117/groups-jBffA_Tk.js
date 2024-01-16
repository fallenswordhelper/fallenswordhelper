import{g as t}from"./getMembrList-AgfQvkLG.js"
import{E as s,B as n,i as e,bk as i,cq as o,o as a,bl as r,s as c,bQ as l,aj as u,c as p,q as f,bR as d,d as m,c7 as h,a8 as b,v as g,br as v,b9 as j,k as S,ag as $,d0 as w,m as A,r as y,G as C,bP as G,w as B,ai as k}from"./calfSystem-G1dN925O.js"
import{i as L}from"./insertHtmlBeforeBegin-ozkCEcOE.js"
import{c as N}from"./closestTable-Ggcgditt.js"
import{c as J}from"./closestTr-ewZQ2axu.js"
import{c as M}from"./csvSplit-SWeoixMs.js"
import{d as x}from"./dateUtc-7iQbgp_T.js"
import{f as T}from"./fshOpen-16hNCxKt.js"
import{c as D}from"./createButton-LCF-b91n.js"
import{o as E}from"./onlineDot-BePpx2CP.js"
import{p as z}from"./playerLinkFromMembrList-T-ki7cr1.js"
import{h as P}from"./hideElement-RABq1RME.js"
import{c as F}from"./createInput-3jwazPKd.js"
import{d as H}from"./daGroupStats-pPdFXNdV.js"
import{a as O}from"./attribsToArray-wxWEDxXi.js"
import{g as U}from"./getId-f4M3YrQR.js"
import"./guildMembers-4GuRAnc8.js"
import"./isArray-bNviZzJA.js"
import"./now-pQzGw6vd.js"
import"./playerLink-5A3I_32p.js"
import"./guildGroups-sePQlzpt.js"
import"./guild-a4pzzzAR.js"
import"./intValue-JHhLnq8V.js"
function _(t,s,n){return e(t,function(t,s){const n=o(),i=D({className:"fshBl fshBls",textContent:t})
return a(i,(n=>{n.target.blur(),T(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),e(n,i),n}(`Buff ${i[n]} 16`,s.join(","))),t}const q=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,R=(t,s)=>t?.[s]?.level??0,X=(t,s,n)=>R(t,n)-R(t,s),Z=t=>"[none]"!==t&&-1===t.indexOf("<font")
function I(t){let s=(new Date).getFullYear()
return"Dec"===j[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function Q(t){const s=t.cells[3],n=h(q,b(s))
g(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(x([I(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function Y(t,i){const o=i.filter(Z)
o.length>0&&e(t,function(t){const e=s(16,t),i=n()
return e.reduce(_,i)}(o)),g(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function V(t,s){const n=s.cells[0]
m(function(t,s){const n=b(s.children[0])
return t?.[n]?`${E({last_login:t[n].last_login})}&nbsp;<a href="${v}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],i=function(t,s){const n=M(s.innerHTML)
return n.length>1&&n.sort(p(X,t)),n}(t,e)
Y(n,i),function(t,s,n){const e=n.map(p(z,t))
m(`<span>${e.join(", ")}</span>`,s)}(t,e,i),Q(s)}function W(t){"A"===t.target.tagName&&c("groups","member click"),"B"===t.target.tagName&&c("groups","leader click")}function K(t,s){const n=F({className:"custombutton",type:"button",value:s})
return g(t,"&nbsp;"),e(t,n),n}async function tt(t){const s=U(t),n=await H(s)
if(n?.r?.attributes){const s=O(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
g(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function st(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,S('#pCC a[href*="=viewstats&"]').forEach(tt)}function nt(t){return!t.includes("#000099")}async function et(t,s){await C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){m('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function it(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(M(b(s)).filter(nt).length<$.maxGroupSizeToJoin){const s=A({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
et(y(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function ot(){c("groups","joinAllGroupsUnderSize"),S('#pCC a[href*="confirmJoin"]').forEach(it)}function at(t){const s=t.parentNode
$.enableMaxGroupSizeToJoin&&(P(t),function(t){const s=K(t,`Join All Groups < ${$.maxGroupSizeToJoin} Members`)
a(s,ot)}(s)),function(t){t.classList.add("fshRelative")
const s=K(t,"Fetch Group Stats")
s.style.position="absolute",a(s,st)}(s),$.subcmd2===w&&ot()}async function rt(){if(!G()||B())return
const s=f('#pCC input[value="Join All Available Groups"]')
if(!s)return
const n=t(!1)
!function(){const t=k("minGroupLevel")
if(t){const s=f('#pCC table[width="650"]')
L(f("br",s),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),at(s),function(){const t=S("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const e=await n
var i
e&&(i=e,l("JS Perf","doGroupPaint"),u("group-action-container").map((t=>J(t))).forEach(p(V,i)),a(N(f(".group-action-container")),W),d("JS Perf","doGroupPaint"))}export{rt as default}
//# sourceMappingURL=groups-jBffA_Tk.js.map
