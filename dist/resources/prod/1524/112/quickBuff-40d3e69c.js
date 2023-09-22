import{g as t}from"./getProfile-7f827df1.js"
import{e as n}from"./executeAll-ef9da8be.js"
import{q as s,s as e,au as a,a3 as i,j as c,c as f,g as r,av as o,a5 as u,n as l,ad as d,b,a9 as h,I as p,w as m,o as k}from"./calfSystem-4830a18d.js"
import{i as q}from"./insertHtmlAfterEnd-52cca1f4.js"
import{c as y}from"./createSpan-0da7a190.js"
import{c as S}from"./csvSplit-81e99601.js"
import{i as $}from"./insertElementAfter-f17e432f.js"
import{f as g}from"./formatLastActivity-5a660bfc.js"
import{s as j}from"./setTipped-cc91a1bc.js"
import{o as v}from"./outputFormat-b1a8825f.js"
import{d as T,q as x}from"./quickbuffSuccess-0768f6e8.js"
import"./profile-3abe08ab.js"
import"./now-6f22aec9.js"
import"./splitTime-40eb3bf7.js"
import"./buffReportParser-f8c4899c.js"
import"./buffObj-18893259.js"
import"./uniq-e12b948a.js"
function E(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=y({className:"fshLastActivity"})
const s=a("h1",t)[0]
$(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${g(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function A(t){return Number(i(t).replace(/[[\]]/g,""))}function B(t,n,s){if(!n)return void e("",s)
const a=A(t.nextElementSibling.children[0].children[0]),i=function(t,n){if(!n){const n=y({className:"fshPlayer"})
return $(n,t.nextElementSibling),n}return n}(t,s),c=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${c}">[${n}]</span>`,i)}function C(t,n){return n[0]===t}function w(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(f(C,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&B(n,s,e)}function D(t){return t.split(/ \[|]/)}async function H(n){const s=n.target
if("H1"!==s.tagName)return
const e=t(i(s)),a=function(t){return S(i(t.parentNode.lastElementChild)).map(D)}(s)
c("#buff-outer input[name]").forEach(f(w,a)),E(await e)}const L=[50,54,55,56,60,61,98,101,179,181],N='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',R="qbSortBuffsAlphabetically"
function _(t,n){(function(t,n){return!L.includes(Number(t.htmlFor.slice(6)))&&A(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function F(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
j(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),_(t,n)}function M(){c('#buff-outer label[for^="skill-"]').forEach(F)}function G(t){const n=a("h1",r("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&o(n):setTimeout(G,100,t-1)}function O(){r("targetPlayers").value&&G(9)}function P(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=v(n,"m")
return n>0&&s>0&&(e+=" "),e+=v(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function I(t,n){const e=t[n]??0
return e?P(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function Q(t,n,s){e(I(t,n),s)}function z(t,n){return t[n.name]=n.duration,t}const J=t=>n=>n.name===t
function K(t,n,s){const a=function(t,n){const s=t.find(J(n))
return s?.value??0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),e(`<span class="${i}">${a}%</span>`,s)}function U(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
K(n,"Sustain",r("fshSus")),K(n,"Fury Caster",r("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(z,{})
Q(n,"Guild Buffer",r("fshGB")),Q(n,"Buff Master",r("fshBM")),Q(n,"Extend",r("fshExt")),Q(n,"Reinforce",r("fshRI"))}(t)}function V(t){const n=r(`skill-${t}`)
n&&(n.checked=!0)}function W(){const t=u("blist")
t&&function(t){t.split(";").forEach(V)}(t)}let X=0
function Y(){X.length?(window.addPlayers([X.shift()]),setTimeout(Y,200)):setTimeout(O,200)}function Z(){const t=u("players")
t&&(X=S(t),Y())}async function tt(t){const n=t.target
if("quickbuffActivate"!==n.className)return
l("quickbuff","quickActivate")
!function(t,n){x(n)&&(t.className="fshLime",e("On",t))}(n,await T([window.self],[n.dataset.buffid]))}const nt=[]
function st(t){const n=c(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function et(t){const n=s(`#block${t}`)
for(const s of nt[t])n.appendChild(s)}function at(t){for(let n=1;n<=3;n++)t?st(`block${n}`):et(n)}function it(t){h(R,t.target.checked),at(t.target.checked)}function ct(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
nt[t]=p(`#${n} > p`)}}()
const t=r("check-all")
q(t,N)
const n=s(".quickbuffSortCheckbox"),e=d(R)
n.checked=e,e&&at(e),b(n,"change",it)}function ft(){k(r("helperQBheader"),tt),k(r("players"),H)}async function rt(){if(m())return
const s=r("quickbuff")
if(!s)return
const e=t(window.self)
q(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([M,W,Z,ft,O,ct]),U(await e)}export{rt as default}
//# sourceMappingURL=quickBuff-40d3e69c.js.map
