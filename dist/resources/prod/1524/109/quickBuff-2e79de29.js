import{g as t}from"./getProfile-26b2f1f8.js"
import{e as n}from"./executeAll-ef9da8be.js"
import{q as s,s as e,aw as a,a5 as i,j as f,c,ad as r,v as o,g as u,ax as l,a7 as d,n as b,af as p,b as h,ab as m,K as k,w as q,o as y}from"./calfSystem-2f15e074.js"
import{i as S}from"./insertHtmlAfterEnd-f5410efc.js"
import{c as g}from"./createSpan-14f0ab30.js"
import{c as $}from"./csvSplit-448857a3.js"
import{i as j}from"./insertElementAfter-bbee38d9.js"
import{f as v}from"./formatLastActivity-5a660bfc.js"
import{s as x}from"./setTipped-cc91a1bc.js"
import{o as T}from"./outputFormat-b1a8825f.js"
import{d as E,q as B}from"./quickbuffSuccess-5832cd54.js"
import"./profile-68b6c45b.js"
import"./now-6f22aec9.js"
import"./splitTime-40eb3bf7.js"
import"./getBuff-ab7330ac.js"
import"./buffObj-18893259.js"
import"./uniq-9cddbf0f.js"
import"./buffReportParser-17cfa256.js"
function A(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=g({className:"fshLastActivity"})
const s=a("h1",t)[0]
j(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${v(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function C(t){return Number(i(t).replace(/[[\]]/g,""))}function w(t,n,s){if(!n)return void e("",s)
const a=C(t.nextElementSibling.children[0].children[0]),i=function(t,n){if(!n){const n=g({className:"fshPlayer"})
return j(n,t.nextElementSibling),n}return n}(t,s),f=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${f}">[${n}]</span>`,i)}function D(t,n){return n[0]===t}function N(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(c(D,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&w(n,s,e)}function H(t){return t.split(/ \[|]/)}async function L(n){const s=n.target
if("H1"!==s.tagName)return
const e=t(i(s)),a=function(t){return $(i(t.parentNode.lastElementChild)).map(H)}(s)
f("#buff-outer input[name]").forEach(c(N,a)),A(await e)}const R=[50,54,55,56,60,61,98,101,179,181],_='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',F="qbSortBuffsAlphabetically"
function M(t,n){(function(t,n){return!R.includes(Number(t.htmlFor.slice(6)))&&C(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function G(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
x(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n),r.userIsDev&&o(t.parentNode,`<span></span> <span class="fshDodgerBlue tooltip-bottom-right" data-tooltip="Stamina Cost">${e}</span>`)}(t,n),M(t,n)}function O(){f('#buff-outer label[for^="skill-"]').forEach(G)}function P(t){const n=a("h1",u("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&l(n):setTimeout(P,100,t-1)}function I(){u("targetPlayers").value&&P(9)}function Q(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=T(n,"m")
return n>0&&s>0&&(e+=" "),e+=T(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function z(t,n){const e=t[n]??0
return e?Q(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function K(t,n,s){e(z(t,n),s)}function J(t,n){return t[n.name]=n.duration,t}const U=t=>n=>n.name===t
function V(t,n,s){const a=function(t,n){const s=t.find(U(n))
return s?.value??0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),e(`<span class="${i}">${a}%</span>`,s)}function W(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
V(n,"Sustain",u("fshSus")),V(n,"Fury Caster",u("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(J,{})
K(n,"Guild Buffer",u("fshGB")),K(n,"Buff Master",u("fshBM")),K(n,"Extend",u("fshExt")),K(n,"Reinforce",u("fshRI"))}(t)}function X(t){const n=u(`skill-${t}`)
n&&(n.checked=!0)}function Y(){const t=d("blist")
t&&function(t){t.split(";").forEach(X)}(t)}let Z=0
function tt(){Z.length?(window.addPlayers([Z.shift()]),setTimeout(tt,200)):setTimeout(I,200)}function nt(){const t=d("players")
t&&(Z=$(t),tt())}async function st(t){const n=t.target
if("quickbuffActivate"!==n.className)return
b("quickbuff","quickActivate")
!function(t,n){B(n)&&(t.className="fshLime",e("On",t))}(n,await E([window.self],[n.dataset.buffid]))}const et=[]
function at(t){const n=f(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function it(t){const n=s(`#block${t}`)
for(const s of et[t])n.appendChild(s)}function ft(t){for(let n=1;n<=3;n++)t?at(`block${n}`):it(n)}function ct(t){m(F,t.target.checked),ft(t.target.checked)}function rt(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
et[t]=k(`#${n} > p`)}}()
const t=u("check-all")
S(t,_)
const n=s(".quickbuffSortCheckbox"),e=p(F)
n.checked=e,e&&ft(e),h(n,"change",ct)}function ot(){y(u("helperQBheader"),st),y(u("players"),L)}async function ut(){if(q())return
const s=u("quickbuff")
if(!s)return
const e=t(window.self)
S(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([O,Y,nt,ot,I,rt]),W(await e)}export{ut as default}
//# sourceMappingURL=quickBuff-2e79de29.js.map
