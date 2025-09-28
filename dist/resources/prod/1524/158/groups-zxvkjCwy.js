import{g as t}from"./getMembrList-DhTWubx9.js"
import{a9 as n,i as s,bR as a,dF as e,ap as i,o,bS as r,bT as c,s as l,aA as u,j as f,c as p,q as d,d as m,l as h,c3 as b,aV as v,a2 as g,cZ as $,cW as S,bM as A,h as j,ax as w,cm as C,dG as y,u as B,r as G,dH as N,aB as x,a3 as L,az as M}from"./calfSystem-CIuUjh4H.js"
import{i as T}from"./insertHtmlBeforeBegin-B_XK7Yhq.js"
import{c as k}from"./closestTable-CAaKFM8t.js"
import{c as J}from"./chunk-zr9rAXvK.js"
import{o as D}from"./onlineDot-ixY_oy9C.js"
import{p as z}from"./playerLinkFromMembrList-LE6dVVIj.js"
import{c as E}from"./createInput-ESh6G5it.js"
import{d as F}from"./daGroupStats-BmHJ2HMW.js"
import{a as H}from"./attribsToArray-CYHVUfhJ.js"
import{g as R}from"./getId-CEBzpjjo.js"
function X(t,n,u){return s(t,function(t,n){const a=e(),u=i({className:"fshBl fshBls",textContent:t})
return o(u,s=>{s.target.blur(),r(`${c}&players=${n}`,"fsQuickBuff",618,1e3,",scrollbars"),l("doBuffLinks",t)}),s(a,u),a}(`Buff ${a[u]} 16`,n.join(","))),t}const Z=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,_=(t,n)=>t?.[n]?.level??0,I=(t,n,s)=>_(t,s)-_(t,n),U=t=>"[none]"!==t&&-1===t.indexOf("<font")
function W(t){let n=(new Date).getFullYear()
return"Dec"===A[(new Date).getMonth()]&&"Jan"===t&&(n+=1),n}function Y(t){const n=t.cells[3],s=$(Z,h(n))
s&&g(n,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,n,s,a]){return new Date(S([W(n),n,t,s,a]))}(s).toString().slice(0,21)}</span>`)}function q(t,a){const e=a.filter(U)
e.length>0&&s(t,function(t){const s=J(16,t),a=n()
return s.reduce(X,a)}(e)),g(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}function O(t,n){const s=n.cells[0]
m(function(t,n){const s=h(n.children[0])
return t?.[s]?`${D({last_login:t[s].last_login})}&nbsp;<a href="${b}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,s),s)
const a=n.cells[1],e=function(t,n){const s=v(n.innerHTML)
return s.length>1&&s.sort(p(I,t)),s}(t,a)
q(s,e),function(t,n,s){const a=s.map(p(z,t))
m(`<span>${a.join(", ")}</span>`,n)}(t,a,e),Y(n)}function P(t){"A"===t.target.tagName&&l("groups","member click"),"B"===t.target.tagName&&l("groups","leader click")}function Q(t,n){const a=E({className:"custombutton",type:"button",value:n})
return g(t,"&nbsp;"),s(t,a),a}async function V(t){const n=R(t),s=await F(n)
if(s?.r?.attributes){const n=H(s.r.attributes),a=t.parentNode.parentNode.previousElementSibling
g(a,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(n))}}function K(t){l("groups","fetchGroupData")
const{target:n}=t
n.disabled=!0,j('#pCC a[href*="=viewstats&"]').forEach(V)}const tt=t=>!t.includes("#000099"),nt=([,t])=>t<w.maxGroupSizeToJoin,st=([t])=>[t,B({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}}),G(/confirmJoin\((?<id>\d+)\)/,t.href)]
function at(t){const n=t.parentNode.parentNode.parentNode.cells[1]
return[t,v(h(n)).filter(tt).length]}function et([t,n]){t.replaceWith(n)}function it([,t]){m('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function ot(){const t=j('#pCC a[href*="confirmJoin"]').map(at).filter(nt).map(st)
t.forEach(et),await N(t.map(([,,t])=>t)),t.forEach(it)}function rt(){l("groups","joinAllGroupsUnderSize"),ot()}function ct(t){const n=t.parentNode
w.enableMaxGroupSizeToJoin&&(C(t),function(t){const n=Q(t,`Join All Groups < ${w.maxGroupSizeToJoin} Members`)
o(n,rt)}(n)),function(t){t.classList.add("fshRelative")
const n=Q(t,"Fetch Group Stats")
n.style.position="absolute",o(n,K)}(n),w.subcmd2===y&&ot()}async function lt(){if(!x()||L())return
const n=d('#pCC input[value="Join All Available Groups"]')
if(!n)return
const s=t(!1)
!function(){const t=M("minGroupLevel")
if(t){const n=d('#pCC table[width="650"]')
T(d("br",n),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),ct(n),function(){const t=j("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const a=await s
var e
a&&(e=a,u("group-action-container").map(t=>f(t)).forEach(p(O,e)),o(k(d(".group-action-container")),P))}export{lt as default}
//# sourceMappingURL=groups-zxvkjCwy.js.map
