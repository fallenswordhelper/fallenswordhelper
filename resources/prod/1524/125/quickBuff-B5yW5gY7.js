import{g as t}from"./getProfile-Nod708Wn.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as s,d as e,az as a,a8 as i,s as f,k as c,c as r,g as u,aA as o,aa as l,ai as d,b,ae as h,K as p,w as m,o as k}from"./calfSystem-CgXU6vdM.js"
import{i as q}from"./insertHtmlAfterEnd-V9V7bnJD.js"
import{c as y}from"./createSpan-4ABT-qdN.js"
import{c as S}from"./csvSplit-Dh0Tan4e.js"
import{i as $}from"./insertElementAfter-_t4YbSLj.js"
import{f as g}from"./formatLastActivity-C26L42FI.js"
import{s as v}from"./setTipped-_gKWzwad.js"
import{o as j}from"./outputFormat-CxYfzxHE.js"
import{d as T,q as x}from"./quickbuffSuccess-BrLPuhui.js"
import"./profile-Dtq71s2J.js"
import"./now-Cx4PsKjI.js"
import"./splitTime-kNw-s-eH.js"
import"./buffReportParser-ake6xjM5.js"
import"./buffObj-BIwiFUIW.js"
import"./uniq-BYorpzeb.js"
function A(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=y({className:"fshLastActivity"})
const s=a("h1",t)[0]
$(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${g(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function B(t){return Number(i(t).replace(/[[\]]/g,""))}function E(t,n,s){if(!n)return void e("",s)
const a=B(t.nextElementSibling.children[0].children[0]),i=function(t,n){if(!n){const n=y({className:"fshPlayer"})
return $(n,t.nextElementSibling),n}return n}(t,s),f=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${f}">[${n}]</span>`,i)}function C(t,n){return n[0]===t}function w(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(r(C,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&E(n,s,e)}function L(t){return t.split(/ \[|]/)}async function H(n){const s=n.target
if("H1"!==s.tagName)return
f("quickbuff","addBuffLevels")
const e=t(i(s)),a=function(t){return S(i(t.parentNode.lastElementChild)).map(L)}(s)
c("#buff-outer input[name]").forEach(r(w,a)),A(await e)}const N=[50,54,55,56,60,61,98,101,179,181],R='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',D="qbSortBuffsAlphabetically"
function _(t,n){(function(t,n){return!N.includes(Number(t.htmlFor.slice(6)))&&B(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function F(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
v(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),_(t,n)}function M(){c('#buff-outer label[for^="skill-"]').forEach(F)}function G(t){const n=a("h1",u("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&o(n):setTimeout(G,100,t-1)}function O(){u("targetPlayers").value&&G(9)}function P(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=j(n,"m")
return n>0&&s>0&&(e+=" "),e+=j(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function z(t,n){const e=t[n]??0
return e?P(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function I(t,n,s){e(z(t,n),s)}function Q(t,n){return t[n.name]=n.duration,t}const K=t=>n=>n.name===t
function J(t,n,s){const a=function(t,n){const s=t.find(K(n))
return s?.value??0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),e(`<span class="${i}">${a}%</span>`,s)}function U(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
J(n,"Sustain",u("fshSus")),J(n,"Fury Caster",u("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(Q,{})
I(n,"Guild Buffer",u("fshGB")),I(n,"Buff Master",u("fshBM")),I(n,"Extend",u("fshExt")),I(n,"Reinforce",u("fshRI"))}(t)}function V(t){const n=u(`skill-${t}`)
n&&(n.checked=!0)}function W(){const t=l("blist")
t&&function(t){t.split(";").forEach(V)}(t)}let X=0
function Y(){X.length?(window.addPlayers([X.shift()]),setTimeout(Y,200)):setTimeout(O,200)}function Z(){const t=l("players")
t&&(X=S(t),Y())}async function tt(t){const n=t.target
if("quickbuffActivate"!==n.className)return
f("quickbuff","quickActivate")
!function(t,n){x(n)&&(t.className="fshLime",e("On",t))}(n,await T([window.self],[n.dataset.buffid]))}const nt=[]
function st(t){const n=c(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function et(t){const n=s(`#block${t}`)
for(const s of nt[t])n.appendChild(s)}function at(t){for(let n=1;n<=3;n++)t?st(`block${n}`):et(n)}function it(t){f("quickbuff","sortBuffs"),h(D,t.target.checked),at(t.target.checked)}function ft(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
nt[t]=p(`#${n} > p`)}}()
const t=u("check-all")
q(t,R)
const n=s(".quickbuffSortCheckbox"),e=d(D)
n.checked=e,e&&at(e),b(n,"change",it)}function ct(){k(u("helperQBheader"),tt),k(u("players"),H)}async function rt(){if(m())return
const s=u("quickbuff")
if(!s)return
const e=t(window.self)
q(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([M,W,Z,ct,O,ft]),U(await e)}export{rt as default}
//# sourceMappingURL=quickBuff-B5yW5gY7.js.map
