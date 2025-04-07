import{g as t}from"./getProfile-rp9x92KA.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as s,h as e,aV as a,aF as c,aW as f,aX as i,aa as u,s as r,n as o,e as l,aK as d,g as b,az as h,ac as p,aY as m,ao as k,c as q,Q as S,aj as y,A as $,o as g}from"./calfSystem-BGW9cdWN.js"
import{i as v}from"./insertHtmlAfterEnd-Cz10bREE.js"
import{s as T}from"./setTipped-_gKWzwad.js"
import{d as x,q as B}from"./quickbuffSuccess-Dn3tmPiO.js"
import"./buffReportParser-K8tSoQ5D.js"
import"./buffObj-BIwiFUIW.js"
function E(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=c({className:"fshLastActivity"})
const s=f("h1",t)[0]
i(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${a(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function C(t){return Number(u(t).replace(/[[\]]/g,""))}function A(t,n,s){if(!n)return void e("",s)
const a=C(t.nextElementSibling.children[0].children[0]),f=function(t,n){if(!n){const n=c({className:"fshPlayer"})
return i(n,t.nextElementSibling),n}return n}(t,s),u=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${u}">[${n}]</span>`,f)}function j(t,n){return n[0]===t}function N(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(l(j,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&A(n,s,e)}function D(t){return t.split(/ \[|]/)}async function H(n){const s=t(u(n)),e=function(t){return d(u(t.parentNode.lastElementChild)).map(D)}(n)
o("#buff-outer input[name]").forEach(l(N,e)),E(await s)}function L(t){const n=t.target
"H1"===n.tagName&&(r("quickbuff","addBuffLevels"),H(n))}const R=[50,54,55,56,60,61,98,101,179,181],F='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',_="qbSortBuffsAlphabetically"
function G(t,n){(function(t,n){return!R.includes(Number(t.htmlFor.slice(6)))&&C(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function M(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
T(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),G(t,n)}function w(){o('#buff-outer label[for^="skill-"]').forEach(M)}function O(t){const n=f("h1",b("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&H(n):setTimeout(O,100,t-1)}function P(){b("targetPlayers").value&&O(9)}function Q(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=h(n,"m")
return n>0&&s>0&&(e+=" "),e+=h(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function I(t,n){const e=t[n]??0
return e?Q(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function z(t,n,s){e(I(t,n),s)}function K(t,n){return t[n.name]=n.duration,t}const V=t=>n=>n.name===t
function W(t,n,s){const a=function(t,n){const s=t.find(V(n))
return s?.value??0}(t,n)
let c="fshLime"
a<100&&(c="fshRed"),e(`<span class="${c}">${a}%</span>`,s)}function X(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
W(n,"Sustain",b("fshSus")),W(n,"Fury Caster",b("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(K,{})
z(n,"Guild Buffer",b("fshGB")),z(n,"Buff Master",b("fshBM")),z(n,"Extend",b("fshExt")),z(n,"Reinforce",b("fshRI"))}(t)}function Y(t){const n=b(`skill-${t}`)
n&&(n.checked=!0)}function J(){const t=p("blist")
t&&function(t){t.split(";").forEach(Y)}(t)}let U=0
function Z(){U.length?(window.addPlayers([U.shift()]),setTimeout(Z,200)):setTimeout(P,200)}function tt(){const t=p("players")
t&&(U=d(t),Z())}async function nt(t){const n=t.target
if("quickbuffActivate"!==n.className)return
r("quickbuff","quickActivate"),e("",n),n.className="fshSpinner fshSpinner12"
const s=await x([m()],[n.dataset.buffid])
B(s)&&(n.className="fshLime",e("On",n))}const st=[]
function et(t){const n=o(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function at(t){const n=s(`#block${t}`)
for(const s of st[t])n.appendChild(s)}function ct(t){for(let n=1;n<=3;n++)t?et(`block${n}`):at(n)}function ft(t){r("quickbuff","sortBuffs"),y(_,t.target.checked),ct(t.target.checked)}function it(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
st[t]=S(`#${n} > p`)}}()
const t=b("check-all")
v(t,F)
const n=s(".quickbuffSortCheckbox"),e=k(_)
n.checked=e,e&&ct(e),q(n,"change",ft)}function ut(){g(b("helperQBheader"),nt),g(b("players"),L)}function rt(){}async function ot(){if($())return
const s=b("quickbuff")
if(!s)return
const e=t(m())
v(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([w,J,tt,ut,P,it,rt]),X(await e)}export{ot as default}
//# sourceMappingURL=quickBuff-DNLuDoYV.js.map
