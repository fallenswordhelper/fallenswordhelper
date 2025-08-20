import{g as t}from"./getMembrList-BsfKb1mz.js"
import{ab as n,a8 as s,i as a,bP as e,dR as i,ap as o,o as r,bQ as c,bR as l,s as u,aA as f,j as p,c as d,q as m,d as h,l as b,c1 as g,aU as v,a1 as $,c$ as S,bK as A,h as j,ax as w,ck as C,dS as y,u as B,r as G,dT as N,ct as x,a2 as L,az as k}from"./calfSystem-KFszEm2S.js"
import{i as D}from"./insertHtmlBeforeBegin-igagLiPl.js"
import{c as J}from"./closestTable-D_vJ9Njb.js"
import{d as M}from"./dateUtc-DkehnZFI.js"
import{o as T}from"./onlineDot-hLWANonx.js"
import{p as z}from"./playerLinkFromMembrList-DjvWKJMS.js"
import{c as E}from"./createInput-D4knQ_SJ.js"
import{d as R}from"./daGroupStats-CKu6E3F-.js"
import{a as F}from"./attribsToArray-694Y3yLc.js"
import{g as H}from"./getId-CEBzpjjo.js"
function U(t,n,s){return a(t,function(t,n){const s=i(),e=o({className:"fshBl fshBls",textContent:t})
return r(e,s=>{s.target.blur(),c(`${l}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),u("doBuffLinks",t)}),a(s,e),s}(`Buff ${e[s]} 16`,n.join(","))),t}const X=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,Z=(t,n)=>t?.[n]?.level??0,I=(t,n,s)=>Z(t,s)-Z(t,n),P=t=>"[none]"!==t&&-1===t.indexOf("<font")
function Q(t){let n=(new Date).getFullYear()
return"Dec"===A[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function _(t){const n=t.cells[3],s=S(X,b(n))
s&&$(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(M([Q(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function q(t,e){const i=e.filter(P)
i.length>0&&a(t,function(t){const a=n(16,t),e=s()
return a.reduce(U,e)}(i)),$(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function K(t,n){const s=n.cells[0]
h(function(t,n){const s=b(n.children[0])
return t?.[s]?`${T({last_login:t[s].last_login})}&nbsp;<a href="${g}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=v(n.innerHTML)
return s.length>1&&s.sort(d(I,t)),s}(t,a)
q(s,e),function(t,n,s){const a=s.map(d(z,t))
h(`<span>${a.join(", ")}</span>`,n)}(t,a,e),_(n)}function O(t){"A"===t.target.tagName&&u("groups","member click"),"B"===t.target.tagName&&u("groups","leader click")}function W(t,n){const s=E({className:"custombutton",type:"button",value:n})
return $(t,"&nbsp;"),a(t,s),s}async function Y(t){const n=H(t),s=await R(n)
if(s?.r?.attributes){const n=F(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
$(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function V(t){u("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(Y)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<w.maxGroupSizeToJoin,st=([t])=>[t,B({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),G(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,v(b(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){h('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=j('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await N(t.map(([,,t])=>t)),t.forEach(it)}function rt(){u("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
w.enableMaxGroupSizeToJoin&&(C(t),function(t){const n=W(t,`Join All Groups < ${w.maxGroupSizeToJoin} Members`)
r(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=W(t,"Fetch Group Stats")
n.style.position="absolute",r(n,V)}(n),w.subcmd2===y&&ot()}async function lt(){if(!x()||L())return
const n=m('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=k("minGroupLevel")
if(t){const n=m('#pCC table[width="650"]')
D(m("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,f("group-action-container").map(t=>p(t)).forEach(d(K,e)),r(J(m(".group-action-container")),O))}export{lt as default}
//# sourceMappingURL=groups-CGPfP-65.js.map
