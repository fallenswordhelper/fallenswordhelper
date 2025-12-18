import{g as t}from"./getProfile-ClZrn91t.js"
import{e as n}from"./executeAll-DIAWIge1.js"
import{q as s,d as e,b5 as a,aR as c,b6 as f,b7 as i,m as u,s as r,h as o,c as l,aW as b,g as d,aL as h,ar as p,b8 as m,aA as k,b as q,aj as y,av as S,a4 as $,o as g,b9 as v}from"./calfSystem-Cs6CSxoU.js"
import{i as T}from"./insertHtmlAfterEnd-B3hI-1FY.js"
import{s as x}from"./setTipped-_gKWzwad.js"
import{d as E,q as B}from"./quickbuffSuccess-DLPo0xKy.js"
import"./buffReportParser-Duben_iC.js"
import"./buffObj-BIwiFUIW.js"
function A(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=c({className:"fshLastActivity"})
const s=f("h1",t)[0]
i(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${a(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function C(t){return Number(u(t).replace(/[[\]]/g,""))}function N(t,n,s){if(!n)return void e("",s)
const a=C(t.nextElementSibling.children[0].children[0]),f=function(t,n){if(!n){const n=c({className:"fshPlayer"})
return i(n,t.nextElementSibling),n}return n}(t,s),u=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${u}">[${n}]</span>`,f)}function j(t,n){return n[0]===t}function L(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(l(j,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&N(n,s,e)}function R(t){return t.split(/ \[|]/)}async function H(n){const s=t(u(n)),e=function(t){return b(u(t.parentNode.lastElementChild)).map(R)}(n)
o("#buff-outer input[name]").forEach(l(L,e)),A(await s)}function D(t){const n=t.target
"H1"===n.tagName&&(r("quickbuff","addBuffLevels"),H(n))}const M=[50,54,55,56,60,61,98,101,179,181],_="qbSortBuffsAlphabetically"
function O(t,n){(function(t,n){return!M.includes(Number(t.htmlFor.slice(6)))&&C(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function P(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
x(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),O(t,n)}function w(){o('#buff-outer label[for^="skill-"]').forEach(P)}function F(t){const n=f("h1",d("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&H(n):setTimeout(F,100,t-1)}function G(){d("targetPlayers").value&&F(9)}function Q(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=h(n,"m")
return n>0&&s>0&&(e+=" "),e+=h(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function I(t,n){const e=t[n]??0
return e?Q(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function W(t,n,s){e(I(t,n),s)}function z(t,n){return t[n.name]=n.duration,t}function J(t,n,s){const a=function(t,n){const s=t.find((t=>n=>n.name===t)(n))
return s?.value??0}(t,n)
let c="fshLime"
a<100&&(c="fshRed"),e(`<span class="${c}">${a}%</span>`,s)}function K(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
J(n,"Sustain",d("fshSus")),J(n,"Fury Caster",d("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(z,{})
W(n,"Guild Buffer",d("fshGB")),W(n,"Buff Master",d("fshBM")),W(n,"Extend",d("fshExt")),W(n,"Reinforce",d("fshRI"))}(t)}function U(t){const n=d(`skill-${t}`)
n&&(n.checked=!0)}function V(){const t=p("blist")
t&&function(t){t.split(";").forEach(U)}(t)}let X=0
function Y(){X.length?(window.addPlayers([X.shift()]),setTimeout(Y,200)):setTimeout(G,200)}function Z(){const t=p("players")
t&&(X=b(t),Y())}async function tt(t){const n=t.target
if("quickbuffActivate"!==n.className)return
r("quickbuff","quickActivate"),e("",n),n.className="fshSpinner fshSpinner12"
const s=await E([m()],[n.dataset.buffid])
B(s)&&(n.className="fshLime",e("On",n))}const nt=[]
function st(t){const n=o(`#${t} > p`)
n.sort((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1)
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function et(t){const n=s(`#block${t}`)
for(const s of nt[t])n.appendChild(s)}function at(t){for(let n=1;n<=3;n++)t?st(`block${n}`):et(n)}function ct(t){r("quickbuff","sortBuffs"),S(_,t.target.checked),at(t.target.checked)}function ft(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
nt[t]=y(`#${n} > p`)}}()
const t=d("check-all")
T(t,'<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>')
const n=s(".quickbuffSortCheckbox"),e=k(_)
n.checked=e,e&&at(e),q(n,"change",ct)}function it(){g(d("helperQBheader"),tt),g(d("players"),D)}function ut(){v("playerName",m())}async function rt(){if($())return
const s=d("quickbuff")
if(!s)return
const e=t(m())
T(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([w,V,Z,it,G,ft,ut]),K(await e)}export{rt as default}
//# sourceMappingURL=quickBuff-tqQzNj9q.js.map
