import{g as t}from"./getMembrList-DJNIR1Ub.js"
import{ad as n,aa as s,i as a,bR as e,dW as i,ar as o,o as r,bS as c,bT as l,s as u,aC as f,l as p,c as d,q as m,e as h,n as b,c3 as g,aW as v,a3 as $,d3 as A,bM as S,k as j,az as w,cm as C,dX as y,w as B,r as N,dY as x,cx as G,a4 as L,aB as M}from"./calfSystem-C1X5YxJZ.js"
import{i as k}from"./insertHtmlBeforeBegin-By91x0o4.js"
import{c as D}from"./closestTable-STrxtv_E.js"
import{d as J}from"./dateUtc-BAc__vAC.js"
import{o as T}from"./onlineDot-D8QnVOid.js"
import{p as z}from"./playerLinkFromMembrList-B0VOxuxm.js"
import{c as E}from"./createInput-LMpmIneO.js"
import{d as X}from"./daGroupStats-BkPKna-U.js"
import{a as H}from"./attribsToArray-D2Q8NYyp.js"
import{g as R}from"./getId-CEBzpjjo.js"
function F(t,n,s){return a(t,function(t,n){const s=i(),e=o({className:"fshBl fshBls",textContent:t})
return r(e,(s=>{s.target.blur(),c(`${l}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),u("doBuffLinks",t)})),a(s,e),s}(`Buff ${e[s]} 16`,n.join(","))),t}const U=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,W=(t,n)=>t?.[n]?.level??0,I=(t,n,s)=>W(t,s)-W(t,n),Q=t=>"[none]"!==t&&-1===t.indexOf("<font")
function Y(t){let n=(new Date).getFullYear()
return"Dec"===S[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function Z(t){const n=t.cells[3],s=A(U,b(n))
s&&$(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(J([Y(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function _(t,e){const i=e.filter(Q)
i.length>0&&a(t,function(t){const a=n(16,t),e=s()
return a.reduce(F,e)}(i)),$(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function q(t,n){const s=n.cells[0]
h(function(t,n){const s=b(n.children[0])
return t?.[s]?`${T({last_login:t[s].last_login})}&nbsp;<a href="${g}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=v(n.innerHTML)
return s.length>1&&s.sort(d(I,t)),s}(t,a)
_(s,e),function(t,n,s){const a=s.map(d(z,t))
h(`<span>${a.join(", ")}</span>`,n)}(t,a,e),Z(n)}function O(t){"A"===t.target.tagName&&u("groups","member click"),"B"===t.target.tagName&&u("groups","leader click")}function P(t,n){const s=E({className:"custombutton",type:"button",value:n})
return $(t,"&nbsp;"),a(t,s),s}async function V(t){const n=R(t),s=await X(n)
if(s?.r?.attributes){const n=H(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
$(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function K(t){u("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(V)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<w.maxGroupSizeToJoin,st=([t])=>[t,B({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),N(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,v(b(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){h('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=j('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await x(t.map((([,,t])=>t))),t.forEach(it)}function rt(){u("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
w.enableMaxGroupSizeToJoin&&(C(t),function(t){const n=P(t,`Join All Groups < ${w.maxGroupSizeToJoin} Members`)
r(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=P(t,"Fetch Group Stats")
n.style.position="absolute",r(n,K)}(n),w.subcmd2===y&&ot()}async function lt(){if(!G()||L())return
const n=m('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=M("minGroupLevel")
if(t){const n=m('#pCC table[width="650"]')
k(m("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,f("group-action-container").map((t=>p(t))).forEach(d(q,e)),r(D(m(".group-action-container")),O))}export{lt as default}
//# sourceMappingURL=groups-NqAhwNKM.js.map
