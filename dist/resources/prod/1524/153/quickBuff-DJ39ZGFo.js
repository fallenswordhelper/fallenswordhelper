import{g as t}from"./getProfile-CdbiMAwX.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as s,d as e,b3 as a,aP as c,b4 as f,b5 as i,l as u,s as r,h as o,c as l,aU as b,g as d,aJ as h,aq as p,b6 as m,az as k,b as q,ai as S,au as y,a2 as $,o as g}from"./calfSystem-CT1aM4VG.js"
import{i as T}from"./insertHtmlAfterEnd-gTgXAdJt.js"
import{s as v}from"./setTipped-_gKWzwad.js"
import{d as x,q as B}from"./quickbuffSuccess-oUQ6iJAq.js"
import"./buffReportParser-8Mz1e59y.js"
import"./buffObj-BIwiFUIW.js"
function E(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=c({className:"fshLastActivity"})
const s=f("h1",t)[0]
i(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${a(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function C(t){return Number(u(t).replace(/[[\]]/g,""))}function A(t,n,s){if(!n)return void e("",s)
const a=C(t.nextElementSibling.children[0].children[0]),f=function(t,n){if(!n){const n=c({className:"fshPlayer"})
return i(n,t.nextElementSibling),n}return n}(t,s),u=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${u}">[${n}]</span>`,f)}function N(t,n){return n[0]===t}function j(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(l(N,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&A(n,s,e)}function L(t){return t.split(/ \[|]/)}async function H(n){const s=t(u(n)),e=function(t){return b(u(t.parentNode.lastElementChild)).map(L)}(n)
o("#buff-outer input[name]").forEach(l(j,e)),E(await s)}function R(t){const n=t.target
"H1"===n.tagName&&(r("quickbuff","addBuffLevels"),H(n))}const D=[50,54,55,56,60,61,98,101,179,181],M='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',_="qbSortBuffsAlphabetically"
function P(t,n){(function(t,n){return!D.includes(Number(t.htmlFor.slice(6)))&&C(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function w(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
v(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),P(t,n)}function F(){o('#buff-outer label[for^="skill-"]').forEach(w)}function G(t){const n=f("h1",d("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&H(n):setTimeout(G,100,t-1)}function O(){d("targetPlayers").value&&G(9)}function I(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=h(n,"m")
return n>0&&s>0&&(e+=" "),e+=h(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function J(t,n){const e=t[n]??0
return e?I(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function Q(t,n,s){e(J(t,n),s)}function z(t,n){return t[n.name]=n.duration,t}const K=t=>n=>n.name===t
function U(t,n,s){const a=function(t,n){const s=t.find(K(n))
return s?.value??0}(t,n)
let c="fshLime"
a<100&&(c="fshRed"),e(`<span class="${c}">${a}%</span>`,s)}function V(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
U(n,"Sustain",d("fshSus")),U(n,"Fury Caster",d("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(z,{})
Q(n,"Guild Buffer",d("fshGB")),Q(n,"Buff Master",d("fshBM")),Q(n,"Extend",d("fshExt")),Q(n,"Reinforce",d("fshRI"))}(t)}function W(t){const n=d(`skill-${t}`)
n&&(n.checked=!0)}function X(){const t=p("blist")
t&&function(t){t.split(";").forEach(W)}(t)}let Y=0
function Z(){Y.length?(window.addPlayers([Y.shift()]),setTimeout(Z,200)):setTimeout(O,200)}function tt(){const t=p("players")
t&&(Y=b(t),Z())}async function nt(t){const n=t.target
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
const t=d("check-all")
T(t,M)
const n=s(".quickbuffSortCheckbox"),e=k(_)
n.checked=e,e&&ct(e),q(n,"change",ft)}function ut(){g(d("helperQBheader"),nt),g(d("players"),R)}function rt(){}async function ot(){if($())return
const s=d("quickbuff")
if(!s)return
const e=t(m())
T(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([F,X,tt,ut,O,it,rt]),V(await e)}export{ot as default}
//# sourceMappingURL=quickBuff-DJ39ZGFo.js.map
