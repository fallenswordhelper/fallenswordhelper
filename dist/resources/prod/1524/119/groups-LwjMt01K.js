import{g as t}from"./getMembrList-Bk73Mxcv.js"
import{E as s,B as n,i as e,bk as i,cq as o,o as a,bl as r,s as c,bQ as l,aj as u,c as p,q as f,bR as d,d as m,c7 as h,a8 as b,v as g,br as v,b9 as j,k as $,ag as S,d0 as w,m as A,r as G,G as y,bP as C,w as B,ai as k}from"./calfSystem-Bit7wh4p.js"
import{i as N}from"./insertHtmlBeforeBegin-Bapgmu6X.js"
import{c as J}from"./closestTable-CmNjL45D.js"
import{c as L}from"./closestTr-7PFr_dNI.js"
import{c as M}from"./csvSplit-CYiESOK8.js"
import{d as T}from"./dateUtc-9OoIRwDB.js"
import{f as x}from"./fshOpen-AuKioUPF.js"
import{c as D}from"./createButton-G25vRD8t.js"
import{o as P}from"./onlineDot-BBzPFxBZ.js"
import{p as z}from"./playerLinkFromMembrList-BjLBT_4r.js"
import{h as E}from"./hideElement--vKgDzDU.js"
import{c as _}from"./createInput-Bw3IEiqp.js"
import{d as F}from"./daGroupStats-BnVv7ik7.js"
import{a as H}from"./attribsToArray-ok6eqWre.js"
import{g as X}from"./getId-CEBzpjjo.js"
import"./guildMembers-DVol-0Bs.js"
import"./isArray-eVldfhw1.js"
import"./now-Cx4PsKjI.js"
import"./playerLink-D65DtSiY.js"
import"./guildGroups-CAHGjeii.js"
import"./guild-C79yJSIH.js"
import"./intValue-C7nTQec1.js"
function I(t,s,n){return e(t,function(t,s){const n=o(),i=D({className:"fshBl fshBls",textContent:t})
return a(i,(n=>{n.target.blur(),x(`${r}&players=${s}`,"fsQuickBuff",618,1e3,",scrollbars"),c("doBuffLinks",t)})),e(n,i),n}(`Buff ${i[n]} 16`,s.join(","))),t}const R=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,U=(t,s)=>t?.[s]?.level??0,q=(t,s,n)=>U(t,n)-U(t,s),O=t=>"[none]"!==t&&-1===t.indexOf("<font")
function Q(t){let s=(new Date).getFullYear()
return"Dec"===j[(new Date).getMonth()]&&"Jan"===t&&(s+=1),s}function V(t){const s=t.cells[3],n=h(R,b(s))
g(s,`<br><span class="fshBlue fshXSmall">Local: ${function([,,t,s,n,e]){return new Date(T([Q(s),s,t,n,e]))}(n).toString().slice(0,21)}</span>`)}function Z(t,i){const o=i.filter(O)
o.length>0&&e(t,function(t){const e=s(16,t),i=n()
return e.reduce(I,i)}(o)),g(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function Y(t,s){const n=s.cells[0]
m(function(t,s){const n=b(s.children[0])
return t?.[n]?`${P({last_login:t[n].last_login})}&nbsp;<a href="${v}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,n),n)
const e=s.cells[1],i=function(t,s){const n=M(s.innerHTML)
return n.length>1&&n.sort(p(q,t)),n}(t,e)
Z(n,i),function(t,s,n){const e=n.map(p(z,t))
m(`<span>${e.join(", ")}</span>`,s)}(t,e,i),V(s)}function K(t){"A"===t.target.tagName&&c("groups","member click"),"B"===t.target.tagName&&c("groups","leader click")}function W(t,s){const n=_({className:"custombutton",type:"button",value:s})
return g(t,"&nbsp;"),e(t,n),n}async function tt(t){const s=X(t),n=await F(s)
if(n?.r?.attributes){const s=H(n.r.attributes),e=t.parentNode.parentNode.previousElementSibling
g(e,function(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}(s))}}function st(t){c("groups","fetchGroupData")
const{target:s}=t
s.disabled=!0,$('#pCC a[href*="=viewstats&"]').forEach(tt)}function nt(t){return!t.includes("#000099")}async function et(t,s){await y({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),function(t){m('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}(s)}function it(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(M(b(s)).filter(nt).length<S.maxGroupSizeToJoin){const s=A({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
et(G(/confirmJoin\((?<id>\d+)\)/,t.href),s)}}function ot(){c("groups","joinAllGroupsUnderSize"),$('#pCC a[href*="confirmJoin"]').forEach(it)}function at(t){const s=t.parentNode
S.enableMaxGroupSizeToJoin&&(E(t),function(t){const s=W(t,`Join All Groups < ${S.maxGroupSizeToJoin} Members`)
a(s,ot)}(s)),function(t){t.classList.add("fshRelative")
const s=W(t,"Fetch Group Stats")
s.style.position="absolute",a(s,st)}(s),S.subcmd2===w&&ot()}async function rt(){if(!C()||B())return
const s=f('#pCC input[value="Join All Available Groups"]')
if(!s)return
const n=t(!1)
!function(){const t=k("minGroupLevel")
if(t){const s=f('#pCC table[width="650"]')
N(f("br",s),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}(),at(s),function(){const t=$("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}()
const e=await n
var i
e&&(i=e,l("JS Perf","doGroupPaint"),u("group-action-container").map((t=>L(t))).forEach(p(Y,i)),a(J(f(".group-action-container")),K),d("JS Perf","doGroupPaint"))}export{rt as default}
//# sourceMappingURL=groups-LwjMt01K.js.map
