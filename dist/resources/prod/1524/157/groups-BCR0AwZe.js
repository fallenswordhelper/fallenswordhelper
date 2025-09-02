import{g as t}from"./getMembrList-Zu5hjTzC.js"
import{ac as n,a9 as s,i as a,bS as e,dM as i,aq as o,o as r,bT as c,bU as l,s as u,aB as f,j as p,c as d,q as m,d as h,l as b,c4 as g,aW as v,a2 as $,c_ as S,cX as A,bN as j,h as w,ay as C,cn as y,dN as N,u as B,r as G,dO as L,aC as M,a3 as x,aA as D}from"./calfSystem-CQOGdqPv.js"
import{i as J}from"./insertHtmlBeforeBegin-BdUyHc9W.js"
import{c as T}from"./closestTable-Cs7gyt8-.js"
import{o as k}from"./onlineDot-DGI5IYJJ.js"
import{p as z}from"./playerLinkFromMembrList-CqaTqgsg.js"
import{c as E}from"./createInput-CL-XaKKe.js"
import{d as X}from"./daGroupStats-BwTHtlcH.js"
import{a as F}from"./attribsToArray-C3uhrkff.js"
import{g as H}from"./getId-CEBzpjjo.js"
function R(t,n,s){return a(t,function(t,n){const s=i(),e=o({className:"fshBl fshBls",textContent:t})
return r(e,s=>{s.target.blur(),c(`${l}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),u("doBuffLinks",t)}),a(s,e),s}(`Buff ${e[s]} 16`,n.join(","))),t}const U=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,Z=(t,n)=>t?.[n]?.level??0,_=(t,n,s)=>Z(t,s)-Z(t,n),q=t=>"[none]"!==t&&-1===t.indexOf("<font")
function I(t){let n=(new Date).getFullYear()
return"Dec"===j[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function O(t){const n=t.cells[3],s=S(U,b(n))
s&&$(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(A([I(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function W(t,e){const i=e.filter(q)
i.length>0&&a(t,function(t){const a=n(16,t),e=s()
return a.reduce(R,e)}(i)),$(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function P(t,n){const s=n.cells[0]
h(function(t,n){const s=b(n.children[0])
return t?.[s]?`${k({last_login:t[s].last_login})}&nbsp;<a href="${g}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=v(n.innerHTML)
return s.length>1&&s.sort(d(_,t)),s}(t,a)
W(s,e),function(t,n,s){const a=s.map(d(z,t))
h(`<span>${a.join(", ")}</span>`,n)}(t,a,e),O(n)}function Q(t){"A"===t.target.tagName&&u("groups","member click"),"B"===t.target.tagName&&u("groups","leader click")}function Y(t,n){const s=E({className:"custombutton",type:"button",value:n})
return $(t,"&nbsp;"),a(t,s),s}async function K(t){const n=H(t),s=await X(n)
if(s?.r?.attributes){const n=F(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
$(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function V(t){u("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,w('#pCC a[href*="=viewstats&"]').forEach(K)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<C.maxGroupSizeToJoin,st=([t])=>[t,B({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),G(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,v(b(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){h('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=w('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await L(t.map(([,,t])=>t)),t.forEach(it)}function rt(){u("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
C.enableMaxGroupSizeToJoin&&(y(t),function(t){const n=Y(t,`Join All Groups < ${C.maxGroupSizeToJoin} Members`)
r(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=Y(t,"Fetch Group Stats")
n.style.position="absolute",r(n,V)}(n),C.subcmd2===N&&ot()}async function lt(){if(!M()||x())return
const n=m('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=D("minGroupLevel")
if(t){const n=m('#pCC table[width="650"]')
J(m("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=w("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,f("group-action-container").map(t=>p(t)).forEach(d(P,e)),r(T(m(".group-action-container")),Q))}export{lt as default}
//# sourceMappingURL=groups-BCR0AwZe.js.map
