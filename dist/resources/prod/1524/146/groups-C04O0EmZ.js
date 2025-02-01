import{g as t}from"./getMembrList-C3ieFZkr.js"
import{H as n,E as s,i as a,bI as e,dF as i,ac as o,o as r,bM as c,bN as l,s as u,ar as f,ak as p,d,q as m,e as h,ad as b,bV as g,aK as v,x as $,cO as A,bA as j,l as S,ao as w,ce as y,dG as C,n as N,r as G,dH as B,cp as L,y as k,aq as x}from"./calfSystem-DiXGAkgN.js"
import{i as M}from"./insertHtmlBeforeBegin-Bk8CArlq.js"
import{c as J}from"./closestTable-CvmnyUCu.js"
import{d as D}from"./dateUtc-BdqYyWwx.js"
import{o as T}from"./onlineDot-B7LbfKGR.js"
import{p as z}from"./playerLinkFromMembrList-BS_035Wg.js"
import{c as E}from"./createInput-DJ1ccan-.js"
import{d as H}from"./daGroupStats-B1akS7IN.js"
import{a as F}from"./attribsToArray-Dbet0W0U.js"
import{g as I}from"./getId-CEBzpjjo.js"
import"./playerLink-DUm_mfhe.js"
function U(t,n,s){return a(t,function(t,n){const s=i(),e=o({className:"fshBl fshBls",textContent:t})
return r(e,(s=>{s.target.blur(),c(`${l}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),u("doBuffLinks",t)})),a(s,e),s}(`Buff ${e[s]} 16`,n.join(","))),t}const X=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,Z=(t,n)=>t?.[n]?.level??0,q=(t,n,s)=>Z(t,s)-Z(t,n),O=t=>"[none]"!==t&&-1===t.indexOf("<font")
function R(t){let n=(new Date).getFullYear()
return"Dec"===j[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function _(t){const n=t.cells[3],s=A(X,b(n))
s&&$(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(D([R(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function K(t,e){const i=e.filter(O)
i.length>0&&a(t,function(t){const a=n(16,t),e=s()
return a.reduce(U,e)}(i)),$(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function P(t,n){const s=n.cells[0]
h(function(t,n){const s=b(n.children[0])
return t?.[s]?`${T({last_login:t[s].last_login})}&nbsp;<a href="${g}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=v(n.innerHTML)
return s.length>1&&s.sort(d(q,t)),s}(t,a)
K(s,e),function(t,n,s){const a=s.map(d(z,t))
h(`<span>${a.join(", ")}</span>`,n)}(t,a,e),_(n)}function Q(t){"A"===t.target.tagName&&u("groups","member click"),"B"===t.target.tagName&&u("groups","leader click")}function V(t,n){const s=E({className:"custombutton",type:"button",value:n})
return $(t,"&nbsp;"),a(t,s),s}async function W(t){const n=I(t),s=await H(n)
if(s?.r?.attributes){const n=F(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
$(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function Y(t){u("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,S('#pCC a[href*="=viewstats&"]').forEach(W)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<w.maxGroupSizeToJoin,st=([t])=>[t,N({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),G(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,v(b(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){h('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=S('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await B(t.map((([,,t])=>t))),t.forEach(it)}function rt(){u("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
w.enableMaxGroupSizeToJoin&&(y(t),function(t){const n=V(t,`Join All Groups < ${w.maxGroupSizeToJoin} Members`)
r(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=V(t,"Fetch Group Stats")
n.style.position="absolute",r(n,Y)}(n),w.subcmd2===C&&ot()}async function lt(){if(!L()||k())return
const n=m('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=x("minGroupLevel")
if(t){const n=m('#pCC table[width="650"]')
M(m("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=S("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,f("group-action-container").map((t=>p(t))).forEach(d(P,e)),r(J(m(".group-action-container")),Q))}export{lt as default}
//# sourceMappingURL=groups-C04O0EmZ.js.map
