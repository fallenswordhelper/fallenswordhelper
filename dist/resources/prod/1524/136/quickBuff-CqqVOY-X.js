import{g as t}from"./getProfile-BjqwpF40.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as s,d as e,aB as a,a8 as i,k as f,c,s as u,g as r,aa as o,aC as l,ai as d,b,ae as h,K as p,w as m,o as k}from"./calfSystem-CUgWHLtG.js"
import{i as q}from"./insertHtmlAfterEnd-B42mjcck.js"
import{c as y}from"./createSpan-C6zT5DkE.js"
import{c as S}from"./csvSplit-j_Yd0L1s.js"
import{i as $}from"./insertElementAfter-CZh9nC1V.js"
import{f as g}from"./formatLastActivity-BrRI0oHo.js"
import{s as v}from"./setTipped-_gKWzwad.js"
import{o as T}from"./outputFormat-CxYfzxHE.js"
import{d as j,q as x}from"./quickbuffSuccess-CHxpkxA_.js"
import"./profile-16lC7c6q.js"
import"./splitTime-kNw-s-eH.js"
import"./buffReportParser-CyPa_-Qv.js"
import"./buffObj-BIwiFUIW.js"
import"./uniq-Dzsj1uso.js"
function B(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=y({className:"fshLastActivity"})
const s=a("h1",t)[0]
$(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${g(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function E(t){return Number(i(t).replace(/[[\]]/g,""))}function A(t,n,s){if(!n)return void e("",s)
const a=E(t.nextElementSibling.children[0].children[0]),i=function(t,n){if(!n){const n=y({className:"fshPlayer"})
return $(n,t.nextElementSibling),n}return n}(t,s),f=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${f}">[${n}]</span>`,i)}function C(t,n){return n[0]===t}function L(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(c(C,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&A(n,s,e)}function H(t){return t.split(/ \[|]/)}async function N(n){const s=t(i(n)),e=function(t){return S(i(t.parentNode.lastElementChild)).map(H)}(n)
f("#buff-outer input[name]").forEach(c(L,e)),B(await s)}function R(t){const n=t.target
"H1"===n.tagName&&(u("quickbuff","addBuffLevels"),N(n))}const w=[50,54,55,56,60,61,98,101,179,181],D='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',_="qbSortBuffsAlphabetically"
function F(t,n){(function(t,n){return!w.includes(Number(t.htmlFor.slice(6)))&&E(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function M(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
v(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),F(t,n)}function G(){f('#buff-outer label[for^="skill-"]').forEach(M)}function O(t){const n=a("h1",r("players"))[0]
!function(t,n){return!t&&n}(n,t)?N(n):setTimeout(O,100,t-1)}function P(){r("targetPlayers").value&&O(9)}function I(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=T(n,"m")
return n>0&&s>0&&(e+=" "),e+=T(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function Q(t,n){const e=t[n]??0
return e?I(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function z(t,n,s){e(Q(t,n),s)}function K(t,n){return t[n.name]=n.duration,t}const J=t=>n=>n.name===t
function U(t,n,s){const a=function(t,n){const s=t.find(J(n))
return s?.value??0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),e(`<span class="${i}">${a}%</span>`,s)}function V(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
U(n,"Sustain",r("fshSus")),U(n,"Fury Caster",r("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(K,{})
z(n,"Guild Buffer",r("fshGB")),z(n,"Buff Master",r("fshBM")),z(n,"Extend",r("fshExt")),z(n,"Reinforce",r("fshRI"))}(t)}function W(t){const n=r(`skill-${t}`)
n&&(n.checked=!0)}function X(){const t=o("blist")
t&&function(t){t.split(";").forEach(W)}(t)}let Y=0
function Z(){Y.length?(window.addPlayers([Y.shift()]),setTimeout(Z,200)):setTimeout(P,200)}function tt(){const t=o("players")
t&&(Y=S(t),Z())}async function nt(t){const n=t.target
if("quickbuffActivate"!==n.className)return
u("quickbuff","quickActivate")
!function(t,n){x(n)&&(t.className="fshLime",e("On",t))}(n,await j([l()],[n.dataset.buffid]))}const st=[]
function et(t){const n=f(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function at(t){const n=s(`#block${t}`)
for(const s of st[t])n.appendChild(s)}function it(t){for(let n=1;n<=3;n++)t?et(`block${n}`):at(n)}function ft(t){u("quickbuff","sortBuffs"),h(_,t.target.checked),it(t.target.checked)}function ct(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
st[t]=p(`#${n} > p`)}}()
const t=r("check-all")
q(t,D)
const n=s(".quickbuffSortCheckbox"),e=d(_)
n.checked=e,e&&it(e),b(n,"change",ft)}function ut(){k(r("helperQBheader"),nt),k(r("players"),R)}function rt(){}async function ot(){if(m())return
const s=r("quickbuff")
if(!s)return
const e=t(l())
q(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([G,X,tt,ut,P,ct,rt]),V(await e)}export{ot as default}
//# sourceMappingURL=quickBuff-CqqVOY-X.js.map
