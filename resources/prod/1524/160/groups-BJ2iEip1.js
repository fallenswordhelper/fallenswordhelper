import{g as t}from"./getMembrList-ByvYTXtZ.js"
import{aa as n,i as s,bS as a,dL as e,aq as i,o,bU as r,bV as c,s as l,aB as u,k as f,c as p,q as d,d as m,m as h,c1 as b,aW as v,a3 as g,c_ as $,cW as A,bO as S,h as j,ay as w,cn as C,dM as y,v as B,r as N,dN as G,aC as L,a4 as M,aA as k}from"./calfSystem-HVCiy-VV.js"
import{i as x}from"./insertHtmlBeforeBegin-xxgTlYpc.js"
import{c as J}from"./closestTable-Cl0v-0VU.js"
import{c as D}from"./chunk-zr9rAXvK.js"
import{o as T}from"./onlineDot-Dmf4LgP_.js"
import{p as z}from"./playerLinkFromMembrList-CWBKWbKe.js"
import{c as E}from"./createInput-343o8t4v.js"
import{d as F}from"./daGroupStats-Bn28JQPD.js"
import{a as H}from"./attribsToArray-DPOdIbo2.js"
import{g as U}from"./getId-CEBzpjjo.js"
import"./guildMembers-DswVgOFV.js"
function W(t,n,u){return s(t,function(t,n){const a=e(),u=i({className:"fshBl fshBls",textContent:t})
return o(u,s=>{s.target.blur(),r(`${c}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),l("doBuffLinks",t)}),s(a,u),a}(`Buff ${a[u]} 16`,n.join(","))),t}const X=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,Z=(t,n)=>t?.[n]?.level??0,_=(t,n,s)=>Z(t,s)-Z(t,n),q=t=>"[none]"!==t&&-1===t.indexOf("<font")
function I(t){let n=(new Date).getFullYear()
return"Dec"===S[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function O(t){const n=t.cells[3],s=$(X,h(n))
s&&g(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(A([I(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function R(t,a){const e=a.filter(q)
e.length>0&&s(t,function(t){const s=D(16,t),a=n()
return s.reduce(W,a)}(e)),g(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}function V(t,n){const s=n.cells[0]
m(function(t,n){const s=h(n.children[0])
return t?.[s]?`${T({last_login:t[s].last_login})}&nbsp;<a href="${b}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=v(n.innerHTML)
return s.length>1&&s.sort(p(_,t)),s}(t,a)
R(s,e),function(t,n,s){const a=s.map(p(z,t))
m(`<span>${a.join(", ")}</span>`,n)}(t,a,e),O(n)}function P(t){"A"===t.target.tagName&&l("groups","member click"),"B"===t.target.tagName&&l("groups","leader click")}function Q(t,n){const a=E({className:"custombutton",type:"button",value:n})
return g(t,"&nbsp;"),s(t,a),a}async function Y(t){const n=U(t),s=await F(n)
if(s?.r?.attributes){const n=H(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
g(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function K(t){l("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(Y)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<w.maxGroupSizeToJoin,st=([t])=>[t,B({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),N(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,v(h(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){m('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=j('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await G(t.map(([,,t])=>t)),t.forEach(it)}function rt(){l("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
w.enableMaxGroupSizeToJoin&&(C(t),function(t){const n=Q(t,`Join All Groups < ${w.maxGroupSizeToJoin} Members`)
o(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=Q(t,"Fetch Group Stats")
n.style.position="absolute",o(n,K)}(n),w.subcmd2===y&&ot()}async function lt(){if(!L()||M())return
const n=d('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=k("minGroupLevel")
if(t){const n=d('#pCC table[width="650"]')
x(d("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,u("group-action-container").map(t=>f(t)).forEach(p(V,e)),o(J(d(".group-action-container")),P))}export{lt as default}
//# sourceMappingURL=groups-BJ2iEip1.js.map
