import{g as t}from"./getMembrList-CFjzYLzE.js"
import{aa as n,i as s,bR as a,dL as e,aq as i,o,bS as r,bT as c,s as l,aB as u,k as f,c as p,q as d,d as m,m as h,c2 as b,aW as g,a3 as v,cY as $,cU as A,bL as S,h as j,ay as w,cl as C,dM as y,v as B,r as L,dN as N,aC as G,a4 as M,aA as k}from"./calfSystem-Cs6CSxoU.js"
import{i as x}from"./insertHtmlBeforeBegin-C_BvaDqB.js"
import{c as J}from"./closestTable-CWRa1z_C.js"
import{c as T}from"./chunk-zr9rAXvK.js"
import{o as D}from"./onlineDot-DmNFHAz9.js"
import{p as z}from"./playerLinkFromMembrList-CXosXtyI.js"
import{c as H}from"./createInput-DJIEghIX.js"
import{d as E}from"./daGroupStats-BH_v9F_h.js"
import{a as q}from"./attribsToArray-szExr8D7.js"
import{g as F}from"./getId-CEBzpjjo.js"
import"./guildMembers-Bfrwbkp_.js"
function I(t,n,u){return s(t,function(t,n){const a=e(),u=i({className:"fshBl fshBls",textContent:t})
return o(u,s=>{s.target.blur(),r(`${c}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),l("doBuffLinks",t)}),s(a,u),a}(`Buff ${a[u]} 16`,n.join(","))),t}const R=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,U=(t,n)=>t?.[n]?.level??0,W=(t,n,s)=>U(t,s)-U(t,n),X=t=>"[none]"!==t&&-1===t.indexOf("<font")
function Y(t){let n=(new Date).getFullYear()
return"Dec"===S[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function Z(t){const n=t.cells[3],s=$(R,h(n))
s&&v(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(A([Y(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function _(t,a){const e=a.filter(X)
e.length>0&&s(t,function(t){const s=T(16,t),a=n()
return s.reduce(I,a)}(e)),v(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}function O(t,n){const s=n.cells[0]
m(function(t,n){const s=h(n.children[0])
return t?.[s]?`${D({last_login:t[s].last_login})}&nbsp;<a href="${b}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=g(n.innerHTML)
return s.length>1&&s.sort(p(W,t)),s}(t,a)
_(s,e),function(t,n,s){const a=s.map(p(z,t))
m(`<span>${a.join(", ")}</span>`,n)}(t,a,e),Z(n)}function P(t){"A"===t.target.tagName&&l("groups","member click"),"B"===t.target.tagName&&l("groups","leader click")}function Q(t,n){const a=H({className:"custombutton",type:"button",value:n})
return v(t,"&nbsp;"),s(t,a),a}async function V(t){const n=F(t),s=await E(n)
if(s?.r?.attributes){const n=q(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
v(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function K(t){l("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(V)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<w.maxGroupSizeToJoin,st=([t])=>[t,B({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),L(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,g(h(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){m('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=j('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await N(t.map(([,,t])=>t)),t.forEach(it)}function rt(){l("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
w.enableMaxGroupSizeToJoin&&(C(t),function(t){const n=Q(t,`Join All Groups < ${w.maxGroupSizeToJoin} Members`)
o(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=Q(t,"Fetch Group Stats")
n.style.position="absolute",o(n,K)}(n),w.subcmd2===y&&ot()}async function lt(){if(!G()||M())return
const n=d('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=k("minGroupLevel")
if(t){const n=d('#pCC table[width="650"]')
x(d("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,u("group-action-container").map(t=>f(t)).forEach(p(O,e)),o(J(d(".group-action-container")),P))}export{lt as default}
//# sourceMappingURL=groups-DroPp3EO.js.map
