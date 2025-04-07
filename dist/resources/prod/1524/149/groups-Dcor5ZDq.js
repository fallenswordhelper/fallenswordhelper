import{g as t}from"./getMembrList-CKfpQ-Zy.js"
import{J as n,G as s,i as a,bG as e,dO as i,a9 as o,o as r,bI as c,bJ as l,s as u,ap as f,ai as p,e as d,q as m,h,aa as b,bV as g,aK as v,z as $,cO as A,bB as S,n as j,am as w,cc as y,dP as C,u as B,r as G,dQ as J,cn as N,A as x,ao as L}from"./calfSystem-BGW9cdWN.js"
import{i as M}from"./insertHtmlBeforeBegin-Cav-wJ1T.js"
import{c as k}from"./closestTable-D6SfkiIx.js"
import{d as D}from"./dateUtc-v48BpV4P.js"
import{o as T}from"./onlineDot-CgFdovI4.js"
import{p as z}from"./playerLinkFromMembrList-D_z3vLqV.js"
import{c as E}from"./createInput-BPTzKwU5.js"
import{d as H}from"./daGroupStats-DcBKjyje.js"
import{a as O}from"./attribsToArray-BuIAFJjo.js"
import{g as F}from"./getId-CEBzpjjo.js"
function I(t,n,s){return a(t,function(t,n){const s=i(),e=o({className:"fshBl fshBls",textContent:t})
return r(e,(s=>{s.target.blur(),c(`${l}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),u("doBuffLinks",t)})),a(s,e),s}(`Buff ${e[s]} 16`,n.join(","))),t}const P=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,R=(t,n)=>t?.[n]?.level??0,U=(t,n,s)=>R(t,s)-R(t,n),X=t=>"[none]"!==t&&-1===t.indexOf("<font")
function Q(t){let n=(new Date).getFullYear()
return"Dec"===S[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function Z(t){const n=t.cells[3],s=A(P,b(n))
s&&$(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(D([Q(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function _(t,e){const i=e.filter(X)
i.length>0&&a(t,function(t){const a=n(16,t),e=s()
return a.reduce(I,e)}(i)),$(t,`<span class="fshXSmall">Members: ${i.length}</span>`)}function q(t,n){const s=n.cells[0]
h(function(t,n){const s=b(n.children[0])
return t?.[s]?`${T({last_login:t[s].last_login})}&nbsp;<a href="${g}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=v(n.innerHTML)
return s.length>1&&s.sort(d(U,t)),s}(t,a)
_(s,e),function(t,n,s){const a=s.map(d(z,t))
h(`<span>${a.join(", ")}</span>`,n)}(t,a,e),Z(n)}function K(t){"A"===t.target.tagName&&u("groups","member click"),"B"===t.target.tagName&&u("groups","leader click")}function V(t,n){const s=E({className:"custombutton",type:"button",value:n})
return $(t,"&nbsp;"),a(t,s),s}async function W(t){const n=F(t),s=await H(n)
if(s?.r?.attributes){const n=O(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
$(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function Y(t){u("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(W)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<w.maxGroupSizeToJoin,st=([t])=>[t,B({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),G(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,v(b(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){h('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=j('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await J(t.map((([,,t])=>t))),t.forEach(it)}function rt(){u("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
w.enableMaxGroupSizeToJoin&&(y(t),function(t){const n=V(t,`Join All Groups < ${w.maxGroupSizeToJoin} Members`)
r(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=V(t,"Fetch Group Stats")
n.style.position="absolute",r(n,Y)}(n),w.subcmd2===C&&ot()}async function lt(){if(!N()||x())return
const n=m('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=L("minGroupLevel")
if(t){const n=m('#pCC table[width="650"]')
M(m("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,f("group-action-container").map((t=>p(t))).forEach(d(q,e)),r(k(m(".group-action-container")),K))}export{lt as default}
//# sourceMappingURL=groups-Dcor5ZDq.js.map
