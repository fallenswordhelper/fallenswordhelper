import{g as t}from"./getMembrList-ClmDoIN3.js"
import{ac as n,a9 as s,i as a,bQ as e,dK as i,aq as o,o as r,bR as c,bS as l,s as u,aB as f,j as p,c as d,q as m,d as h,l as b,c2 as g,aV as v,a2 as $,cV as S,cS as A,bL as j,h as w,ay as y,cl as C,dL as B,u as L,r as N,dM as M,cu as G,a3 as k,aA as x}from"./calfSystem-79LsojAC.js"
import{i as J}from"./insertHtmlBeforeBegin-CpcX1Xb-.js"
import{c as T}from"./closestTable-BuyyntoH.js"
import{o as D}from"./onlineDot-XDIE_fQc.js"
import{p as z}from"./playerLinkFromMembrList-CaAPjWOW.js"
import{c as E}from"./createInput-7MlQDlWD.js"
import{d as H}from"./daGroupStats-DJz-PMQd.js"
import{a as F}from"./attribsToArray-DNO7bh5q.js"
import{g as R}from"./getId-CEBzpjjo.js"
function V(t,n,s){return a(t,function(t,n){const s=i(),e=o({className:"fshBl fshBls",textContent:t})
return r(e,s=>{s.target.blur(),c(`${l}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),u("doBuffLinks",t)}),a(s,e),s}(`Buff ${e[s]} 16`,n.join(","))),t}const X=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,q=(t,n)=>t?.[n]?.level??0,I=(t,n,s)=>q(t,s)-q(t,n),Q=t=>"[none]"!==t&&-1===t.indexOf("<font")
function U(t){let n=(new Date).getFullYear()
return"Dec"===j[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function Z(t){const n=t.cells[3],s=S(X,b(n))
s&&$(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(A([U(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function _(t,e){const i=e.filter(Q)
i.length>0&&a(t,function(t){const a=n(16,t),e=s()
return a.reduce(V,e)}(i)),$(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function K(t,n){const s=n.cells[0]
h(function(t,n){const s=b(n.children[0])
return t?.[s]?`${D({last_login:t[s].last_login})}&nbsp;<a href="${g}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=v(n.innerHTML)
return s.length>1&&s.sort(d(I,t)),s}(t,a)
_(s,e),function(t,n,s){const a=s.map(d(z,t))
h(`<span>${a.join(", ")}</span>`,n)}(t,a,e),Z(n)}function O(t){"A"===t.target.tagName&&u("groups","member click"),"B"===t.target.tagName&&u("groups","leader click")}function P(t,n){const s=E({className:"custombutton",type:"button",value:n})
return $(t,"&nbsp;"),a(t,s),s}async function W(t){const n=R(t),s=await H(n)
if(s?.r?.attributes){const n=F(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
$(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function Y(t){u("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,w('#pCC a[href*="=viewstats&"]').forEach(W)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<y.maxGroupSizeToJoin,st=([t])=>[t,L({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),N(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,v(b(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){h('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=w('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await M(t.map(([,,t])=>t)),t.forEach(it)}function rt(){u("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
y.enableMaxGroupSizeToJoin&&(C(t),function(t){const n=P(t,`Join All Groups < ${y.maxGroupSizeToJoin} Members`)
r(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=P(t,"Fetch Group Stats")
n.style.position="absolute",r(n,Y)}(n),y.subcmd2===B&&ot()}async function lt(){if(!G()||k())return
const n=m('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=x("minGroupLevel")
if(t){const n=m('#pCC table[width="650"]')
J(m("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=w("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,f("group-action-container").map(t=>p(t)).forEach(d(K,e)),r(T(m(".group-action-container")),O))}export{lt as default}
//# sourceMappingURL=groups-D-Ws8_J9.js.map
