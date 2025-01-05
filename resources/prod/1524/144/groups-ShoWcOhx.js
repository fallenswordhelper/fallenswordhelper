import{g as t}from"./getMembrList-FvUbc1-a.js"
import{G as n,D as s,i as e,bI as a,dz as i,ab as o,o as r,bJ as c,bK as l,s as u,ap as f,ai as p,c as d,q as m,d as h,cU as b,ac as g,w as v,bS as $,aI as j,bx as A,k as S,am as w,cb as C,dA as y,m as G,r as J,J as N,cm as x,x as B,ao as L}from"./calfSystem-fMW-YMyF.js"
import{i as k}from"./insertHtmlBeforeBegin-nRmkkqox.js"
import{c as D}from"./closestTable-aoGd549m.js"
import{d as M}from"./dateUtc-B9VMjZ4H.js"
import{o as T}from"./onlineDot-CdkYSVKg.js"
import{p as z}from"./playerLinkFromMembrList-DF4jJ1-b.js"
import{c as E}from"./createInput-CBvBhRjz.js"
import{d as H}from"./daGroupStats-DzOWwAJc.js"
import{a as I}from"./attribsToArray-7NR8SAUG.js"
import{g as U}from"./getId-CEBzpjjo.js"
import"./playerLink-CepUpldK.js"
function F(t,n,s){return e(t,function(t,n){const s=i(),a=o({className:"fshBl fshBls",textContent:t})
return r(a,(s=>{s.target.blur(),c(`${l}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),u("doBuffLinks",t)})),e(s,a),s}(`Buff ${a[s]} 16`,n.join(","))),t}const X=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,_=(t,n)=>t?.[n]?.level??0,K=(t,n,s)=>_(t,s)-_(t,n),P=t=>"[none]"!==t&&-1===t.indexOf("<font")
function R(t){let n=(new Date).getFullYear()
return"Dec"===A[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function Z(t){const n=t.cells[3],s=b(X,g(n))
s&&v(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,e]){return new Date(M([R(n),n,t,s,e]))}(s).toString().slice(0,21)}</span>`)}function q(t,a){const i=a.filter(P)
i.length>0&&e(t,function(t){const e=n(16,t),a=s()
return e.reduce(F,a)}(i)),v(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function O(t,n){const s=n.cells[0]
h(function(t,n){const s=g(n.children[0])
return t?.[s]?`${T({last_login:t[s].last_login})}&nbsp;<a href="${$}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const e=n.cells[1],a=function(t,n){const s=j(n.innerHTML)
return s.length>1&&s.sort(d(K,t)),s}(t,e)
q(s,a),function(t,n,s){const e=s.map(d(z,t))
h(`<span>${e.join(", ")}</span>`,n)}(t,e,a),Z(n)}function Q(t){"A"===t.target.tagName&&u("groups","member click"),"B"===t.target.tagName&&u("groups","leader click")}function Y(t,n){const s=E({className:"custombutton",type:"button",value:n})
return v(t,"&nbsp;"),e(t,s),s}async function V(t){const n=U(t),s=await H(n)
if(s?.r?.attributes){const n=I(s.r.attributes),e=t.parentNode.parentNode.previousElementSibling
v(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function W(t){u("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,S('#pCC a[href*="=viewstats&"]').forEach(V)}function tt(t){return!t.includes("#000099")}async function nt(t,n){await N({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){h('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(n)}function st(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(j(g(n)).filter(tt).length<w.maxGroupSizeToJoin){const n=G({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(n,t)
nt(J(/confirmJoin\((?<id>\d+)\)/,t.href),n)}}function et(){S('#pCC a[href*="confirmJoin"]').forEach(st)}function at(){u("groups","joinAllGroupsUnderSize"),et()}function it(t){const n=t.parentNode
w.enableMaxGroupSizeToJoin&&(C(t),function(t){const n=Y(t,`Join All Groups < ${w.maxGroupSizeToJoin} Members`)
r(n,at)}(n)),function(t){t.classList.add("fshRelative")
const n=Y(t,"Fetch Group Stats")
n.style.position="absolute",r(n,W)}(n),w.subcmd2===y&&et()}async function ot(){if(!x()||B())return
const n=m('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=L("minGroupLevel")
if(t){const n=m('#pCC table[width="650"]')
k(m("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),it(n),function(){const t=S("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const e=await s
var a
e&&(a=e,f("group-action-container").map((t=>p(t))).forEach(d(O,a)),r(D(m(".group-action-container")),Q))}export{ot as default}
//# sourceMappingURL=groups-ShoWcOhx.js.map
