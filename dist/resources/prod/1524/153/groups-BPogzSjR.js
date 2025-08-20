import{g as t}from"./getMembrList-Ctbnv9ny.js"
import{ab as n,a8 as s,i as a,bP as e,dQ as i,ap as o,o as r,bQ as c,bR as l,s as u,aA as f,j as p,c as d,q as m,d as h,l as b,c1 as g,aU as v,a1 as $,c_ as A,bK as S,h as j,ax as w,ck as B,dR as C,u as y,r as N,dS as k,cr as x,a2 as G,az as L}from"./calfSystem-CT1aM4VG.js"
import{i as J}from"./insertHtmlBeforeBegin-Buk8jrmf.js"
import{c as M}from"./closestTable-C24mp168.js"
import{d as D}from"./dateUtc-Bgvvwji4.js"
import{o as T}from"./onlineDot-rvpUtCt8.js"
import{p as z}from"./playerLinkFromMembrList-Bu_suiiG.js"
import{c as E}from"./createInput-CTW03HuX.js"
import{d as R}from"./daGroupStats-Dt7qj-6l.js"
import{a as F}from"./attribsToArray-B48i0CjW.js"
import{g as H}from"./getId-CEBzpjjo.js"
function Q(t,n,s){return a(t,function(t,n){const s=i(),e=o({className:"fshBl fshBls",textContent:t})
return r(e,(s=>{s.target.blur(),c(`${l}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),u("doBuffLinks",t)})),a(s,e),s}(`Buff ${e[s]} 16`,n.join(","))),t}const U=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,X=(t,n)=>t?.[n]?.level??0,_=(t,n,s)=>X(t,s)-X(t,n),I=t=>"[none]"!==t&&-1===t.indexOf("<font")
function P(t){let n=(new Date).getFullYear()
return"Dec"===S[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function W(t){const n=t.cells[3],s=A(U,b(n))
s&&$(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(D([P(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function Y(t,e){const i=e.filter(I)
i.length>0&&a(t,function(t){const a=n(16,t),e=s()
return a.reduce(Q,e)}(i)),$(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function Z(t,n){const s=n.cells[0]
h(function(t,n){const s=b(n.children[0])
return t?.[s]?`${T({last_login:t[s].last_login})}&nbsp;<a href="${g}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=v(n.innerHTML)
return s.length>1&&s.sort(d(_,t)),s}(t,a)
Y(s,e),function(t,n,s){const a=s.map(d(z,t))
h(`<span>${a.join(", ")}</span>`,n)}(t,a,e),W(n)}function q(t){"A"===t.target.tagName&&u("groups","member click"),"B"===t.target.tagName&&u("groups","leader click")}function K(t,n){const s=E({className:"custombutton",type:"button",value:n})
return $(t,"&nbsp;"),a(t,s),s}async function O(t){const n=H(t),s=await R(n)
if(s?.r?.attributes){const n=F(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
$(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function V(t){u("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(O)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<w.maxGroupSizeToJoin,st=([t])=>[t,y({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),N(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,v(b(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){h('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=j('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await k(t.map((([,,t])=>t))),t.forEach(it)}function rt(){u("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
w.enableMaxGroupSizeToJoin&&(B(t),function(t){const n=K(t,`Join All Groups < ${w.maxGroupSizeToJoin} Members`)
r(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=K(t,"Fetch Group Stats")
n.style.position="absolute",r(n,V)}(n),w.subcmd2===C&&ot()}async function lt(){if(!x()||G())return
const n=m('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=L("minGroupLevel")
if(t){const n=m('#pCC table[width="650"]')
J(m("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,f("group-action-container").map((t=>p(t))).forEach(d(Z,e)),r(M(m(".group-action-container")),q))}export{lt as default}
//# sourceMappingURL=groups-BPogzSjR.js.map
