import{g as t}from"./getProfile-BXgQq4bh.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as s,d as e,az as a,a8 as i,s as f,k as c,c as r,g as u,aA as o,aa as l,aB as d,ai as b,b as h,ae as p,K as m,w as k,o as q}from"./calfSystem-CXltiP6P.js"
import{i as y}from"./insertHtmlAfterEnd-CgzSs3B4.js"
import{c as S}from"./createSpan-WwCihZ86.js"
import{c as $}from"./csvSplit-C4r8hxvX.js"
import{i as g}from"./insertElementAfter-BPKSLKGq.js"
import{f as v}from"./formatLastActivity-C26L42FI.js"
import{s as j}from"./setTipped-_gKWzwad.js"
import{o as T}from"./outputFormat-CxYfzxHE.js"
import{d as x,q as B}from"./quickbuffSuccess-B6tsy4sn.js"
import"./profile-C07xDebD.js"
import"./now-Cx4PsKjI.js"
import"./splitTime-kNw-s-eH.js"
import"./buffReportParser-DHBlMIFQ.js"
import"./buffObj-BIwiFUIW.js"
import"./uniq-CrchD_AC.js"
function A(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=S({className:"fshLastActivity"})
const s=a("h1",t)[0]
g(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${v(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function E(t){return Number(i(t).replace(/[[\]]/g,""))}function C(t,n,s){if(!n)return void e("",s)
const a=E(t.nextElementSibling.children[0].children[0]),i=function(t,n){if(!n){const n=S({className:"fshPlayer"})
return g(n,t.nextElementSibling),n}return n}(t,s),f=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${f}">[${n}]</span>`,i)}function L(t,n){return n[0]===t}function w(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(r(L,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&C(n,s,e)}function H(t){return t.split(/ \[|]/)}async function N(n){const s=n.target
if("H1"!==s.tagName)return
f("quickbuff","addBuffLevels")
const e=t(i(s)),a=function(t){return $(i(t.parentNode.lastElementChild)).map(H)}(s)
c("#buff-outer input[name]").forEach(r(w,a)),A(await e)}const R=[50,54,55,56,60,61,98,101,179,181],D='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',_="qbSortBuffsAlphabetically"
function F(t,n){(function(t,n){return!R.includes(Number(t.htmlFor.slice(6)))&&E(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function M(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
j(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),F(t,n)}function G(){c('#buff-outer label[for^="skill-"]').forEach(M)}function O(t){const n=a("h1",u("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&o(n):setTimeout(O,100,t-1)}function P(){u("targetPlayers").value&&O(9)}function z(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=T(n,"m")
return n>0&&s>0&&(e+=" "),e+=T(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function I(t,n){const e=t[n]??0
return e?z(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function Q(t,n,s){e(I(t,n),s)}function K(t,n){return t[n.name]=n.duration,t}const J=t=>n=>n.name===t
function U(t,n,s){const a=function(t,n){const s=t.find(J(n))
return s?.value??0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),e(`<span class="${i}">${a}%</span>`,s)}function V(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
U(n,"Sustain",u("fshSus")),U(n,"Fury Caster",u("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(K,{})
Q(n,"Guild Buffer",u("fshGB")),Q(n,"Buff Master",u("fshBM")),Q(n,"Extend",u("fshExt")),Q(n,"Reinforce",u("fshRI"))}(t)}function W(t){const n=u(`skill-${t}`)
n&&(n.checked=!0)}function X(){const t=l("blist")
t&&function(t){t.split(";").forEach(W)}(t)}let Y=0
function Z(){Y.length?(window.addPlayers([Y.shift()]),setTimeout(Z,200)):setTimeout(P,200)}function tt(){const t=l("players")
t&&(Y=$(t),Z())}async function nt(t){const n=t.target
if("quickbuffActivate"!==n.className)return
f("quickbuff","quickActivate")
!function(t,n){B(n)&&(t.className="fshLime",e("On",t))}(n,await x([d()],[n.dataset.buffid]))}const st=[]
function et(t){const n=c(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function at(t){const n=s(`#block${t}`)
for(const s of st[t])n.appendChild(s)}function it(t){for(let n=1;n<=3;n++)t?et(`block${n}`):at(n)}function ft(t){f("quickbuff","sortBuffs"),p(_,t.target.checked),it(t.target.checked)}function ct(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
st[t]=m(`#${n} > p`)}}()
const t=u("check-all")
y(t,D)
const n=s(".quickbuffSortCheckbox"),e=b(_)
n.checked=e,e&&it(e),h(n,"change",ft)}function rt(){q(u("helperQBheader"),nt),q(u("players"),N)}function ut(){}async function ot(){if(k())return
const s=u("quickbuff")
if(!s)return
const e=t(d())
y(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([G,X,tt,rt,P,ct,ut]),V(await e)}export{ot as default}
//# sourceMappingURL=quickBuff-KOjvXDIv.js.map
