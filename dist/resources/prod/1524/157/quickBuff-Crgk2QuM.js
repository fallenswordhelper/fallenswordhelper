import{g as t}from"./getProfile-SBVXpE4h.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as s,d as e,b5 as a,aR as c,b6 as f,b7 as i,l as u,s as r,h as o,c as l,aW as b,g as d,aL as h,ar as p,b8 as m,aA as k,b as q,aj as S,av as y,a3 as $,o as g}from"./calfSystem-CQOGdqPv.js"
import{i as v}from"./insertHtmlAfterEnd-BB5pBx1-.js"
import{s as T}from"./setTipped-_gKWzwad.js"
import{d as x,q as B}from"./quickbuffSuccess-BnL9ocTi.js"
import"./buffReportParser-wdsxlWDF.js"
import"./buffObj-BIwiFUIW.js"
function E(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=c({className:"fshLastActivity"})
const s=f("h1",t)[0]
i(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${a(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function C(t){return Number(u(t).replace(/[[\]]/g,""))}function A(t,n,s){if(!n)return void e("",s)
const a=C(t.nextElementSibling.children[0].children[0]),f=function(t,n){if(!n){const n=c({className:"fshPlayer"})
return i(n,t.nextElementSibling),n}return n}(t,s),u=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${u}">[${n}]</span>`,f)}function j(t,n){return n[0]===t}function L(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(l(j,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&A(n,s,e)}function N(t){return t.split(/ \[|]/)}async function R(n){const s=t(u(n)),e=function(t){return b(u(t.parentNode.lastElementChild)).map(N)}(n)
o("#buff-outer input[name]").forEach(l(L,e)),E(await s)}function H(t){const n=t.target
"H1"===n.tagName&&(r("quickbuff","addBuffLevels"),R(n))}const D=[50,54,55,56,60,61,98,101,179,181],M="qbSortBuffsAlphabetically"
function _(t,n){(function(t,n){return!D.includes(Number(t.htmlFor.slice(6)))&&C(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function w(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
T(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),_(t,n)}function F(){o('#buff-outer label[for^="skill-"]').forEach(w)}function G(t){const n=f("h1",d("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&R(n):setTimeout(G,100,t-1)}function O(){d("targetPlayers").value&&G(9)}function P(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=h(n,"m")
return n>0&&s>0&&(e+=" "),e+=h(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function I(t,n){const e=t[n]??0
return e?P(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function Q(t,n,s){e(I(t,n),s)}function J(t,n){return t[n.name]=n.duration,t}function K(t,n,s){const a=function(t,n){const s=t.find((t=>n=>n.name===t)(n))
return s?.value??0}(t,n)
let c="fshLime"
a<100&&(c="fshRed"),e(`<span class="${c}">${a}%</span>`,s)}function W(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
K(n,"Sustain",d("fshSus")),K(n,"Fury Caster",d("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(J,{})
Q(n,"Guild Buffer",d("fshGB")),Q(n,"Buff Master",d("fshBM")),Q(n,"Extend",d("fshExt")),Q(n,"Reinforce",d("fshRI"))}(t)}function z(t){const n=d(`skill-${t}`)
n&&(n.checked=!0)}function U(){const t=p("blist")
t&&function(t){t.split(";").forEach(z)}(t)}let V=0
function X(){V.length?(window.addPlayers([V.shift()]),setTimeout(X,200)):setTimeout(O,200)}function Y(){const t=p("players")
t&&(V=b(t),X())}async function Z(t){const n=t.target
if("quickbuffActivate"!==n.className)return
r("quickbuff","quickActivate"),e("",n),n.className="fshSpinner fshSpinner12"
const s=await x([m()],[n.dataset.buffid])
B(s)&&(n.className="fshLime",e("On",n))}const tt=[]
function nt(t){const n=o(`#${t} > p`)
n.sort((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1)
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function st(t){const n=s(`#block${t}`)
for(const s of tt[t])n.appendChild(s)}function et(t){for(let n=1;n<=3;n++)t?nt(`block${n}`):st(n)}function at(t){r("quickbuff","sortBuffs"),y(M,t.target.checked),et(t.target.checked)}function ct(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
tt[t]=S(`#${n} > p`)}}()
const t=d("check-all")
v(t,'<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>')
const n=s(".quickbuffSortCheckbox"),e=k(M)
n.checked=e,e&&et(e),q(n,"change",at)}function ft(){g(d("helperQBheader"),Z),g(d("players"),H)}function it(){}async function ut(){if($())return
const s=d("quickbuff")
if(!s)return
const e=t(m())
v(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([F,U,Y,ft,O,ct,it]),W(await e)}export{ut as default}
//# sourceMappingURL=quickBuff-Crgk2QuM.js.map
