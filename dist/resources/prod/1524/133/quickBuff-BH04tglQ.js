import{g as t}from"./getProfile-CRJXbUZg.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as s,d as e,aB as a,a8 as i,s as f,k as c,c as r,g as u,aC as o,aa as l,aD as d,ai as b,b as h,ae as p,K as m,w as k,o as q}from"./calfSystem-DKih1pr1.js"
import{i as y}from"./insertHtmlAfterEnd-Djz_O0E4.js"
import{c as S}from"./createSpan-CQ7ABMtY.js"
import{c as $}from"./csvSplit-Db4SRGO4.js"
import{i as g}from"./insertElementAfter-Mm8QeLSX.js"
import{f as v}from"./formatLastActivity-DlHmTir_.js"
import{s as T}from"./setTipped-_gKWzwad.js"
import{o as j}from"./outputFormat-CxYfzxHE.js"
import{d as x,q as B}from"./quickbuffSuccess-P9vasddK.js"
import"./profile-_cnrhSN8.js"
import"./splitTime-kNw-s-eH.js"
import"./buffReportParser-RJm2qNez.js"
import"./buffObj-BIwiFUIW.js"
import"./uniq-fE2vhF8L.js"
function E(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=S({className:"fshLastActivity"})
const s=a("h1",t)[0]
g(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${v(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function A(t){return Number(i(t).replace(/[[\]]/g,""))}function C(t,n,s){if(!n)return void e("",s)
const a=A(t.nextElementSibling.children[0].children[0]),i=function(t,n){if(!n){const n=S({className:"fshPlayer"})
return g(n,t.nextElementSibling),n}return n}(t,s),f=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${f}">[${n}]</span>`,i)}function L(t,n){return n[0]===t}function D(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(r(L,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&C(n,s,e)}function H(t){return t.split(/ \[|]/)}let N=!1
async function R(n){const s=n.target
if("H1"!==s.tagName)return
N||(f("quickbuff","addBuffLevels"),N=!0)
const e=t(i(s)),a=function(t){return $(i(t.parentNode.lastElementChild)).map(H)}(s)
c("#buff-outer input[name]").forEach(r(D,a)),E(await e)}const w=[50,54,55,56,60,61,98,101,179,181],_='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',F="qbSortBuffsAlphabetically"
function M(t,n){(function(t,n){return!w.includes(Number(t.htmlFor.slice(6)))&&A(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function G(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
T(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),M(t,n)}function O(){c('#buff-outer label[for^="skill-"]').forEach(G)}function P(t){const n=a("h1",u("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&o(n):setTimeout(P,100,t-1)}function I(){u("targetPlayers").value&&P(9)}function Q(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=j(n,"m")
return n>0&&s>0&&(e+=" "),e+=j(s,"s"),e}(t)
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
n&&(n.checked=!0)}function Y(){const t=l("blist")
t&&function(t){t.split(";").forEach(X)}(t)}let Z=0
function tt(){Z.length?(window.addPlayers([Z.shift()]),setTimeout(tt,200)):setTimeout(I,200)}function nt(){const t=l("players")
t&&(Z=$(t),tt())}async function st(t){const n=t.target
if("quickbuffActivate"!==n.className)return
f("quickbuff","quickActivate")
!function(t,n){B(n)&&(t.className="fshLime",e("On",t))}(n,await x([d()],[n.dataset.buffid]))}const et=[]
function at(t){const n=c(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function it(t){const n=s(`#block${t}`)
for(const s of et[t])n.appendChild(s)}function ft(t){for(let n=1;n<=3;n++)t?at(`block${n}`):it(n)}function ct(t){f("quickbuff","sortBuffs"),p(F,t.target.checked),ft(t.target.checked)}function rt(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
et[t]=m(`#${n} > p`)}}()
const t=u("check-all")
y(t,_)
const n=s(".quickbuffSortCheckbox"),e=b(F)
n.checked=e,e&&ft(e),h(n,"change",ct)}function ut(){q(u("helperQBheader"),st),q(u("players"),R)}function ot(){}async function lt(){if(k())return
const s=u("quickbuff")
if(!s)return
const e=t(d())
y(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([O,Y,nt,ut,I,rt,ot]),W(await e)}export{lt as default}
//# sourceMappingURL=quickBuff-BH04tglQ.js.map
