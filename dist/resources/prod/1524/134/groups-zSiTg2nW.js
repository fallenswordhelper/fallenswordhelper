import{g as t}from"./getMembrList-CCBve77z.js"
import{E as s,B as n,i as e,bm as i,cy as o,o as a,bn as r,s as c,aj as l,c as u,q as f,d as p,cc as d,a8 as m,v as h,bt as b,bb as g,k as v,ag as j,bM as $,d6 as A,m as S,r as w,G as y,bW as C,w as B,ai as G}from"./calfSystem-CyLCrHqa.js"
import{i as M}from"./insertHtmlBeforeBegin-D0Y7F1g7.js"
import{c as N}from"./closestTable-DUYDcoD9.js"
import{c as k}from"./closestTr-BHr42g8T.js"
import{c as L}from"./csvSplit-C11e1rAj.js"
import{d as T}from"./dateUtc-DyJ0gqjr.js"
import{f as x}from"./fshOpen-AuKioUPF.js"
import{c as J}from"./createButton-CJVDkk6b.js"
import{o as D}from"./onlineDot-B3Dg-XBc.js"
import{p as z}from"./playerLinkFromMembrList-CV6mnBTn.js"
import{c as E}from"./createInput-BtlCzWmP.js"
import{d as F}from"./daGroupStats-CDt3e8Gr.js"
import{a as H}from"./attribsToArray-DYyWJutm.js"
import{g as _}from"./getId-CEBzpjjo.js"
import"./guildMembers-C3YZ3Xen.js"
import"./isArray-eVldfhw1.js"
import"./playerLink-B18Hve4w.js"
import"./guildGroups-mrQYob3-.js"
import"./guild-DQ2t4FWm.js"
import"./intValue-C7nTQec1.js"
function I(t,s,n){return e(t,function(t,s){const n=o(),i=J({className:"fshBl fshBls",textContent:t})
return a(i,(n=>{n.target.blur(),x(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),e(n,i),n}(`Buff ${i[n]} 16`,s.join(","))),t}const P=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,U=(t,s)=>t?.[s]?.level??0,X=(t,s,n)=>U(t,n)-U(t,s),O=t=>"[none]"!==t&&-1===t.indexOf("<font")
function R(t){let s=(new Date).getFullYear()
return"Dec"===g[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function V(t){const s=t.cells[3],n=d(P,m(s))
n&&h(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(T([R(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function W(t,i){const o=i.filter(O)
o.length>0&&e(t,function(t){const e=s(16,t),i=n()
return e.reduce(I,i)}(o)),h(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function Y(t,s){const n=s.cells[0]
p(function(t,s){const n=m(s.children[0])
return t?.[n]?`${D({last_login:t[n].last_login})}&nbsp;<a href="${b}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],i=function(t,s){const n=L(s.innerHTML)
return n.length>1&&n.sort(u(X,t)),n}(t,e)
W(n,i),function(t,s,n){const e=n.map(u(z,t))
p(`<span>${e.join(", ")}</span>`,s)}(t,e,i),V(s)}function Z(t){"A"===t.target.tagName&&c("groups","member click"),"B"===t.target.tagName&&c("groups","leader click")}function q(t,s){const n=E({className:"custombutton",type:"button",value:s})
return h(t,"&nbsp;"),e(t,n),n}async function Q(t){const s=_(t),n=await F(s)
if(n?.r?.attributes){const s=H(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
h(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function K(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,v('#pCC a[href*="=viewstats&"]').forEach(Q)}function tt(t){return!t.includes("#000099")}async function st(t,s){await y({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){p('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function nt(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(L(m(s)).filter(tt).length<j.maxGroupSizeToJoin){const s=S({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
st(w(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function et(){v('#pCC a[href*="confirmJoin"]').forEach(nt)}function it(){c("groups","joinAllGroupsUnderSize"),et()}function ot(t){const s=t.parentNode
j.enableMaxGroupSizeToJoin&&($(t),function(t){const s=q(t,`Join All Groups < ${j.maxGroupSizeToJoin} Members`)
a(s,it)}(s)),function(t){t.classList.add("fshRelative")
const s=q(t,"Fetch Group Stats")
s.style.position="absolute",a(s,K)}(s),j.subcmd2===A&&et()}async function at(){if(!C()||B())return
const s=f('#pCC input[value="Join All Available Groups"]')
if(!s)return
const n=t(!1)
!function(){const t=G("minGroupLevel")
if(t){const s=f('#pCC table[width="650"]')
M(f("br",s),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ot(s),function(){const t=v("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const e=await n
var i
e&&(i=e,l("group-action-container").map((t=>k(t))).forEach(u(Y,i)),a(N(f(".group-action-container")),Z))}export{at as default}
//# sourceMappingURL=groups-zSiTg2nW.js.map