import{g as t}from"./getProfile-BUjDunRy.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as e,d as s,aR as a,aD as c,aS as f,aT as i,ac as u,k as r,c as o,s as l,aI as d,g as b,az as h,ae as p,aU as m,ao as k,b as q,aj as S,N as y,x as $,o as g}from"./calfSystem-fMW-YMyF.js"
import{i as T}from"./insertHtmlAfterEnd-BnGOLW2a.js"
import{s as x}from"./setTipped-_gKWzwad.js"
import{d as v,q as B}from"./quickbuffSuccess-BtJNmjaT.js"
import"./buffReportParser-BGCHptmk.js"
import"./buffObj-BIwiFUIW.js"
function E(t){if(!t)return
const n=function(t){let n=e("span.fshLastActivity",t)
if(!n){n=c({className:"fshLastActivity"})
const e=f("h1",t)[0]
i(n,e)}return n}(e(`div.player[data-username="${t.username}"]`))
s(`Last Activity: ${a(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function C(t){return Number(u(t).replace(/[[\]]/g,""))}function A(t,n,e){if(!n)return void s("",e)
const a=C(t.nextElementSibling.children[0].children[0]),f=function(t,n){if(!n){const n=c({className:"fshPlayer"})
return i(n,t.nextElementSibling),n}return n}(t,e),u=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
s(` <span class="${u}">[${n}]</span>`,f)}function j(t,n){return n[0]===t}function R(t,n){const e=function(t,n){const e=n.getAttribute("data-name"),s=t.find(o(j,e))
if(s)return s[1]}(t,n),s=n.nextElementSibling.nextElementSibling;(e||s)&&A(n,e,s)}function H(t){return t.split(/ \[|]/)}async function N(n){const e=t(u(n)),s=function(t){return d(u(t.parentNode.lastElementChild)).map(H)}(n)
r("#buff-outer input[name]").forEach(o(R,s)),E(await e)}function D(t){const n=t.target
"H1"===n.tagName&&(l("quickbuff","addBuffLevels"),N(n))}const L=[50,54,55,56,60,61,98,101,179,181],_='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',M="qbSortBuffsAlphabetically"
function O(t,n){(function(t,n){return!L.includes(Number(t.htmlFor.slice(6)))&&C(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function P(t){const n=t.children[0]
!function(t,n){const e=n.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
x(e.replace("</center>",`<br>Stamina Cost: ${s}$&`),n)}(t,n),O(t,n)}function w(){r('#buff-outer label[for^="skill-"]').forEach(P)}function F(t){const n=f("h1",b("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&N(n):setTimeout(F,100,t-1)}function G(){b("targetPlayers").value&&F(9)}function I(t){const n=function(t){const n=Math.floor(t/60),e=t%60
let s=h(n,"m")
return n>0&&e>0&&(s+=" "),s+=h(e,"s"),s}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function Q(t,n){const s=t[n]??0
return s?I(s):function(t){const n=e(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function z(t,n,e){s(Q(t,n),e)}function U(t,n){return t[n.name]=n.duration,t}const J=t=>n=>n.name===t
function K(t,n,e){const a=function(t,n){const e=t.find(J(n))
return e?.value??0}(t,n)
let c="fshLime"
a<100&&(c="fshRed"),s(`<span class="${c}">${a}%</span>`,e)}function V(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
K(n,"Sustain",b("fshSus")),K(n,"Fury Caster",b("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(U,{})
z(n,"Guild Buffer",b("fshGB")),z(n,"Buff Master",b("fshBM")),z(n,"Extend",b("fshExt")),z(n,"Reinforce",b("fshRI"))}(t)}function W(t){const n=b(`skill-${t}`)
n&&(n.checked=!0)}function X(){const t=p("blist")
t&&function(t){t.split(";").forEach(W)}(t)}let Y=0
function Z(){Y.length?(window.addPlayers([Y.shift()]),setTimeout(Z,200)):setTimeout(G,200)}function tt(){const t=p("players")
t&&(Y=d(t),Z())}async function nt(t){const n=t.target
if("quickbuffActivate"!==n.className)return
l("quickbuff","quickActivate")
!function(t,n){B(n)&&(t.className="fshLime",s("On",t))}(n,await v([m()],[n.dataset.buffid]))}const et=[]
function st(t){const n=r(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const s=e(`#${t}`)
for(const t of n)s.appendChild(t)}function at(t){const n=e(`#block${t}`)
for(const e of et[t])n.appendChild(e)}function ct(t){for(let n=1;n<=3;n++)t?st(`block${n}`):at(n)}function ft(t){l("quickbuff","sortBuffs"),S(M,t.target.checked),ct(t.target.checked)}function it(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
et[t]=y(`#${n} > p`)}}()
const t=b("check-all")
T(t,_)
const n=e(".quickbuffSortCheckbox"),s=k(M)
n.checked=s,s&&ct(s),q(n,"change",ft)}function ut(){g(b("helperQBheader"),nt),g(b("players"),D)}function rt(){}async function ot(){if($())return
const e=b("quickbuff")
if(!e)return
const s=t(m())
T(e.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([w,X,tt,ut,G,it,rt]),V(await s)}export{ot as default}
//# sourceMappingURL=quickBuff-BZMmVd-N.js.map
