import{g as t}from"./getMembrList-j5wWRkA6.js"
import{i as s}from"./insertHtmlBeforeBegin-X-U-MrXK.js"
import{B as n,i as e,bc as o,ck as i,o as a,bd as r,s as c,bI as l,ae as u,c as p,q as f,bJ as d,d as m,b$ as h,a3 as b,v as g,bj as v,b1 as j,k as $,ab as S,cR as w,m as A,r as C,E as y,w as B,ad as G}from"./calfSystem-dEoRVG2S.js"
import{c as J}from"./closestTable-XAvmC3jQ.js"
import{c as N}from"./closestTr-gWCg9Nqr.js"
import{c as k}from"./csvSplit-jneKbju3.js"
import{d as L}from"./dateUtc-CUh9sCzN.js"
import{f as M}from"./fshOpen-16hNCxKt.js"
import{c as T}from"./createButton-gSwNWaKw.js"
import{c as x}from"./chunk-joYXv2f3.js"
import{o as D}from"./onlineDot-hY2SZAfl.js"
import{p as z}from"./playerLinkFromMembrList-gCQy-zZi.js"
import{h as E}from"./hideElement-RABq1RME.js"
import{c as H}from"./createInput-bdSpn5TJ.js"
import{d as P}from"./daGroupStats-hyaMzvMa.js"
import{a as F}from"./attribsToArray-EZ91gKR6.js"
import{g as I}from"./getId-f4M3YrQR.js"
import"./guildMembers-p64Dud-E.js"
import"./isArray-bNviZzJA.js"
import"./now-pQzGw6vd.js"
import"./idb-ZfKvo_GP.js"
import"./guildGroups-8h_UKzve.js"
import"./guild-_7IrY2U_.js"
import"./intValue-JHhLnq8V.js"
function U(t,s,n){return e(t,function(t,s){const n=i(),o=T({className:"fshBl fshBls",textContent:t})
return a(o,(n=>{n.target.blur(),M(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),e(n,o),n}(`Buff ${o[n]} 16`,s.join(","))),t}const X=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,O=(t,s)=>t?.[s]?.level??0,R=(t,s,n)=>O(t,n)-O(t,s),_=t=>"[none]"!==t&&-1===t.indexOf("<font")
function Q(t){let s=(new Date).getFullYear()
return"Dec"===j[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function Z(t){const s=t.cells[3],n=h(X,b(s))
g(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(L([Q(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function q(t,s){const o=s.filter(_)
o.length>0&&e(t,function(t){const s=x(16,t),e=n()
return s.reduce(U,e)}(o)),g(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function V(t,s){const n=s.cells[0]
m(function(t,s){const n=b(s.children[0])
return t?.[n]?`${D({last_login:t[n].last_login})}&nbsp;<a href="${v}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],o=function(t,s){const n=k(s.innerHTML)
return n.length>1&&n.sort(p(R,t)),n}(t,e)
q(n,o),function(t,s,n){const e=n.map(p(z,t))
m(`<span>${e.join(", ")}</span>`,s)}(t,e,o),Z(s)}function W(t){"A"===t.target.tagName&&c("groups","member click"),"B"===t.target.tagName&&c("groups","leader click")}function Y(t,s){const n=H({className:"custombutton",type:"button",value:s})
return g(t,"&nbsp;"),e(t,n),n}async function K(t){const s=I(t),n=await P(s)
if(n?.r?.attributes){const s=F(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
g(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function tt(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,$('#pCC a[href*="=viewstats&"]').forEach(K)}function st(t){return!t.includes("#000099")}async function nt(t,s){await y({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){m('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function et(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(k(b(s)).filter(st).length<S.maxGroupSizeToJoin){const s=A({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
nt(C(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function ot(){c("groups","joinAllGroupsUnderSize"),$('#pCC a[href*="confirmJoin"]').forEach(et)}function it(t){const s=t.parentNode
S.enableMaxGroupSizeToJoin&&(E(t),function(t){const s=Y(t,`Join All Groups < ${S.maxGroupSizeToJoin} Members`)
a(s,ot)}(s)),function(t){t.classList.add("fshRelative")
const s=Y(t,"Fetch Group Stats")
s.style.position="absolute",a(s,tt)}(s),S.subcmd2===w&&ot()}async function at(){if(B())return
const n=f('#pCC input[value="Join All Available Groups"]')
if(!n)return
const e=t(!1)
!function(){const t=G("minGroupLevel")
if(t){const n=f('#pCC table[width="650"]')
s(f("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),it(n),function(){const t=$("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const o=await e
var i
o&&(i=o,l("JS Perf","doGroupPaint"),u("group-action-container").map((t=>N(t))).forEach(p(V,i)),a(J(f(".group-action-container")),W),d("JS Perf","doGroupPaint"))}export{at as default}
//# sourceMappingURL=groups-Czx90p8O.js.map
