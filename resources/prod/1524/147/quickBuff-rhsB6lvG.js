import{g as t}from"./getProfile-BtKIujmS.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as s,e,aU as a,aF as c,aV as f,aW as i,ad as u,s as r,l as o,d as l,aK as d,g as b,aA as h,af as p,aX as m,aq as k,c as q,O as y,al as S,y as $,o as g}from"./calfSystem-BAeDn21M.js"
import{i as T}from"./insertHtmlAfterEnd-zhforf3q.js"
import{s as v}from"./setTipped-_gKWzwad.js"
import{d as x,q as B}from"./quickbuffSuccess-CNhuGxD3.js"
import"./buffReportParser-Bgh3H9YW.js"
import"./buffObj-BIwiFUIW.js"
function E(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=c({className:"fshLastActivity"})
const s=f("h1",t)[0]
i(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${a(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function A(t){return Number(u(t).replace(/[[\]]/g,""))}function C(t,n,s){if(!n)return void e("",s)
const a=A(t.nextElementSibling.children[0].children[0]),f=function(t,n){if(!n){const n=c({className:"fshPlayer"})
return i(n,t.nextElementSibling),n}return n}(t,s),u=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${u}">[${n}]</span>`,f)}function N(t,n){return n[0]===t}function j(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(l(N,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&C(n,s,e)}function L(t){return t.split(/ \[|]/)}async function D(n){const s=t(u(n)),e=function(t){return d(u(t.parentNode.lastElementChild)).map(L)}(n)
o("#buff-outer input[name]").forEach(l(j,e)),E(await s)}function H(t){const n=t.target
"H1"===n.tagName&&(r("quickbuff","addBuffLevels"),D(n))}const R=[50,54,55,56,60,61,98,101,179,181],M='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',O="qbSortBuffsAlphabetically"
function _(t,n){(function(t,n){return!R.includes(Number(t.htmlFor.slice(6)))&&A(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function F(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
v(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),_(t,n)}function P(){o('#buff-outer label[for^="skill-"]').forEach(F)}function w(t){const n=f("h1",b("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&D(n):setTimeout(w,100,t-1)}function G(){b("targetPlayers").value&&w(9)}function I(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=h(n,"m")
return n>0&&s>0&&(e+=" "),e+=h(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function K(t,n){const e=t[n]??0
return e?I(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function Q(t,n,s){e(K(t,n),s)}function U(t,n){return t[n.name]=n.duration,t}const V=t=>n=>n.name===t
function W(t,n,s){const a=function(t,n){const s=t.find(V(n))
return s?.value??0}(t,n)
let c="fshLime"
a<100&&(c="fshRed"),e(`<span class="${c}">${a}%</span>`,s)}function X(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
W(n,"Sustain",b("fshSus")),W(n,"Fury Caster",b("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(U,{})
Q(n,"Guild Buffer",b("fshGB")),Q(n,"Buff Master",b("fshBM")),Q(n,"Extend",b("fshExt")),Q(n,"Reinforce",b("fshRI"))}(t)}function z(t){const n=b(`skill-${t}`)
n&&(n.checked=!0)}function J(){const t=p("blist")
t&&function(t){t.split(";").forEach(z)}(t)}let Y=0
function Z(){Y.length?(window.addPlayers([Y.shift()]),setTimeout(Z,200)):setTimeout(G,200)}function tt(){const t=p("players")
t&&(Y=d(t),Z())}async function nt(t){const n=t.target
if("quickbuffActivate"!==n.className)return
r("quickbuff","quickActivate"),e("",n),n.className="fshSpinner fshSpinner12"
const s=await x([m()],[n.dataset.buffid])
B(s)&&(n.className="fshLime",e("On",n))}const st=[]
function et(t){const n=o(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function at(t){const n=s(`#block${t}`)
for(const s of st[t])n.appendChild(s)}function ct(t){for(let n=1;n<=3;n++)t?et(`block${n}`):at(n)}function ft(t){r("quickbuff","sortBuffs"),S(O,t.target.checked),ct(t.target.checked)}function it(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
st[t]=y(`#${n} > p`)}}()
const t=b("check-all")
T(t,M)
const n=s(".quickbuffSortCheckbox"),e=k(O)
n.checked=e,e&&ct(e),q(n,"change",ft)}function ut(){g(b("helperQBheader"),nt),g(b("players"),H)}function rt(){}async function ot(){if($())return
const s=b("quickbuff")
if(!s)return
const e=t(m())
T(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([P,J,tt,ut,G,it,rt]),X(await e)}export{ot as default}
//# sourceMappingURL=quickBuff-rhsB6lvG.js.map
