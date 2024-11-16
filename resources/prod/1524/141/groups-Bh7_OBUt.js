import{g as t}from"./getMembrList-BJkT4B-E.js"
import{E as s,B as n,i as e,cy as i,e as o,bn as a,s as r,bm as c,aj as l,b as u,c as f,a8 as p,bt as d,v as m,cc as h,bb as b,q as g,n as v,ag as j,bM as $,k as A,r as S,G as w,d6 as y,bW as C,w as B,ai as G}from"./calfSystem-Blt4DbaE.js"
import{i as N}from"./insertHtmlBeforeBegin-CctwUE0D.js"
import{c as M}from"./closestTable-Ddgm5m0P.js"
import{c as L}from"./closestTr-BGA5O97h.js"
import{c as T}from"./csvSplit-DCp-KQ1I.js"
import{d as k}from"./dateUtc-Cc3l2wc4.js"
import{f as J}from"./fshOpen-AuKioUPF.js"
import{c as x}from"./createButton-BLPmyJcZ.js"
import{o as D}from"./onlineDot-KmDOLCpD.js"
import{p as z}from"./playerLinkFromMembrList-X6zW-QiT.js"
import{c as E}from"./createInput-CZBTxG_u.js"
import{d as H}from"./daGroupStats-C487D16H.js"
import{a as F}from"./attribsToArray-3c2SZERK.js"
import{g as R}from"./getId-CEBzpjjo.js"
import"./guildMembers-B5MxM4J7.js"
import"./isArray-eVldfhw1.js"
import"./playerLink-Wzb2L39d.js"
import"./guildGroups-N0LSUuYp.js"
import"./guild-hKlLzHll.js"
import"./intValue-C7nTQec1.js"
function U(t,s,n){return e(t,function(t,s){const n=i(),c=x({className:"fshBl fshBls",textContent:t})
return o(c,(n=>{n.target.blur(),J(`${a}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),r("doBuffLinks",t)})),e(n,c),n}(`Buff ${c[n]} 16`,s.join(","))),t}const X=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,Z=(t,s)=>t?.[s]?.level??0,_=(t,s,n)=>Z(t,n)-Z(t,s),I=t=>"[none]"!==t&&-1===t.indexOf("<font")
function O(t){let s=(new Date).getFullYear()
return"Dec"===b[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function V(t){const s=t.cells[3],n=h(X,p(s))
n&&m(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(k([O(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function Y(t,i){const o=i.filter(I)
o.length>0&&e(t,function(t){const e=s(16,t),i=n()
return e.reduce(U,i)}(o)),m(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function q(t,s){const n=s.cells[0]
f(function(t,s){const n=p(s.children[0])
return t?.[n]?`${D({last_login:t[n].last_login})}&nbsp;<a href="${d}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],i=function(t,s){const n=T(s.innerHTML)
return n.length>1&&n.sort(u(_,t)),n}(t,e)
Y(n,i),function(t,s,n){const e=n.map(u(z,t))
f(`<span>${e.join(", ")}</span>`,s)}(t,e,i),V(s)}function P(t){"A"===t.target.tagName&&r("groups","member click"),"B"===t.target.tagName&&r("groups","leader click")}function Q(t,s){const n=E({className:"custombutton",type:"button",value:s})
return m(t,"&nbsp;"),e(t,n),n}async function W(t){const s=R(t),n=await H(s)
if(n?.r?.attributes){const s=F(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
m(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function K(t){r("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,v('#pCC a[href*="=viewstats&"]').forEach(W)}function tt(t){return!t.includes("#000099")}async function st(t,s){await w({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){f('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function nt(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(T(p(s)).filter(tt).length<j.maxGroupSizeToJoin){const s=A({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
st(S(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function et(){v('#pCC a[href*="confirmJoin"]').forEach(nt)}function it(){r("groups","joinAllGroupsUnderSize"),et()}function ot(t){const s=t.parentNode
j.enableMaxGroupSizeToJoin&&($(t),function(t){const s=Q(t,`Join All Groups < ${j.maxGroupSizeToJoin} Members`)
o(s,it)}(s)),function(t){t.classList.add("fshRelative")
const s=Q(t,"Fetch Group Stats")
s.style.position="absolute",o(s,K)}(s),j.subcmd2===y&&et()}async function at(){if(!C()||B())return
const s=g('#pCC input[value="Join All Available Groups"]')
if(!s)return
const n=t(!1)
!function(){const t=G("minGroupLevel")
if(t){const s=g('#pCC table[width="650"]')
N(g("br",s),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ot(s),function(){const t=v("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const e=await n
var i
e&&(i=e,l("group-action-container").map((t=>L(t))).forEach(u(q,i)),o(M(g(".group-action-container")),P))}export{at as default}
//# sourceMappingURL=groups-Bh7_OBUt.js.map
