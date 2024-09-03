import{g as t}from"./getMembrList-BRGYTVrX.js"
import{E as s,B as n,i as e,bk as i,cp as o,o as a,bl as r,s as c,aj as l,c as u,q as p,d as f,c6 as d,a8 as m,v as h,br as b,b9 as g,k as v,ag as j,bH as $,cZ as w,m as A,r as S,G as y,bQ as C,w as G,ai as B}from"./calfSystem-CgXU6vdM.js"
import{i as N}from"./insertHtmlBeforeBegin-Bu5QAcv4.js"
import{c as k}from"./closestTable-D93v6AIv.js"
import{c as L}from"./closestTr-BkvkFNg4.js"
import{c as M}from"./csvSplit-Dh0Tan4e.js"
import{d as T}from"./dateUtc-D5Rijv3y.js"
import{f as x}from"./fshOpen-AuKioUPF.js"
import{c as J}from"./createButton-DSnnb5Zz.js"
import{o as D}from"./onlineDot-DrCJEIC5.js"
import{p as z}from"./playerLinkFromMembrList-DpqS_5_I.js"
import{c as E}from"./createInput-DwUPhRaT.js"
import{d as H}from"./daGroupStats-Df8GSj-q.js"
import{a as F}from"./attribsToArray-ONH3VuUl.js"
import{g as X}from"./getId-CEBzpjjo.js"
import"./guildMembers-nhFgcKPE.js"
import"./isArray-eVldfhw1.js"
import"./now-Cx4PsKjI.js"
import"./playerLink-iDHU5acw.js"
import"./guildGroups-C8_Y800J.js"
import"./guild-BgOwQ7Kg.js"
import"./intValue-C7nTQec1.js"
function Z(t,s,n){return e(t,function(t,s){const n=o(),i=J({className:"fshBl fshBls",textContent:t})
return a(i,(n=>{n.target.blur(),x(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),e(n,i),n}(`Buff ${i[n]} 16`,s.join(","))),t}const _=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,I=(t,s)=>t?.[s]?.level??0,Q=(t,s,n)=>I(t,n)-I(t,s),U=t=>"[none]"!==t&&-1===t.indexOf("<font")
function O(t){let s=(new Date).getFullYear()
return"Dec"===g[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function P(t){const s=t.cells[3],n=d(_,m(s))
n&&h(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(T([O(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function R(t,i){const o=i.filter(U)
o.length>0&&e(t,function(t){const e=s(16,t),i=n()
return e.reduce(Z,i)}(o)),h(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function V(t,s){const n=s.cells[0]
f(function(t,s){const n=m(s.children[0])
return t?.[n]?`${D({last_login:t[n].last_login})}&nbsp;<a href="${b}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],i=function(t,s){const n=M(s.innerHTML)
return n.length>1&&n.sort(u(Q,t)),n}(t,e)
R(n,i),function(t,s,n){const e=n.map(u(z,t))
f(`<span>${e.join(", ")}</span>`,s)}(t,e,i),P(s)}function q(t){"A"===t.target.tagName&&c("groups","member click"),"B"===t.target.tagName&&c("groups","leader click")}function Y(t,s){const n=E({className:"custombutton",type:"button",value:s})
return h(t,"&nbsp;"),e(t,n),n}async function K(t){const s=X(t),n=await H(s)
if(n?.r?.attributes){const s=F(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
h(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function W(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,v('#pCC a[href*="=viewstats&"]').forEach(K)}function tt(t){return!t.includes("#000099")}async function st(t,s){await y({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){f('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function nt(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(M(m(s)).filter(tt).length<j.maxGroupSizeToJoin){const s=A({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
st(S(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function et(){c("groups","joinAllGroupsUnderSize"),v('#pCC a[href*="confirmJoin"]').forEach(nt)}function it(t){const s=t.parentNode
j.enableMaxGroupSizeToJoin&&($(t),function(t){const s=Y(t,`Join All Groups < ${j.maxGroupSizeToJoin} Members`)
a(s,et)}(s)),function(t){t.classList.add("fshRelative")
const s=Y(t,"Fetch Group Stats")
s.style.position="absolute",a(s,W)}(s),j.subcmd2===w&&et()}async function ot(){if(!C()||G())return
const s=p('#pCC input[value="Join All Available Groups"]')
if(!s)return
const n=t(!1)
!function(){const t=B("minGroupLevel")
if(t){const s=p('#pCC table[width="650"]')
N(p("br",s),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),it(s),function(){const t=v("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const e=await n
var i
e&&(i=e,l("group-action-container").map((t=>L(t))).forEach(u(V,i)),a(k(p(".group-action-container")),q))}export{ot as default}
//# sourceMappingURL=groups-DlE1oxgN.js.map
