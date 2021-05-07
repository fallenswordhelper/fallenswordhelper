import{c as t}from"./createSpan-95e4d2e5.js"
import{f as e}from"./formatLastActivity-a7959bbd.js"
import{D as n,B as s,b as a,C as i,E as f,t as c,z as r,S as u,T as o,U as l,y as d,o as b}from"./calfSystem-3cb2f93e.js"
import{i as m}from"./insertElementAfter-f63e0bf0.js"
import{c as h}from"./csvSplit-4a4cc559.js"
import{g as p}from"./getProfile-7ebbf2f4.js"
import{s as k}from"./setTipped-2c9c4c64.js"
import{e as q}from"./executeAll-f002e740.js"
import{o as j}from"./outputFormat-c52c3250.js"
import{i as T}from"./insertHtmlAfterEnd-782307fa.js"
import{d as y,q as E}from"./quickbuffSuccess-bf4db7cd.js"
import"./splitTime-8bebeac4.js"
import"./insertElementBefore-23d4e956.js"
import"./cmdExport-7784a81f.js"
import"./indexAjaxJson-a55a7596.js"
import"./getBuff-5958e73b.js"
import"./buffObj-b66afe66.js"
function v(i){const f=function(e){let s=n("span.fshLastActivity",e)
if(!s){s=t({className:"fshLastActivity"})
const n=a("h1",e)[0]
m(s,n)}return s}(n(`div.player[data-username="${i.username}"]`))
s(`Last Activity: ${e(i.last_login)}<br>Stamina: ${i.current_stamina} / ${i.stamina} ( ${Math.floor(i.current_stamina/i.stamina*100)}% )`,f)}function g(t){return Number(i(t).replace(/\[|\]/g,""))}function S(e,n,a){if(!n)return void s("",a)
const i=g(e.nextElementSibling.children[0].children[0]),f=function(e,n){if(!n){const n=t({className:"fshPlayer"})
return m(n,e.nextElementSibling),n}return n}(e,a),c=function(t,e){return t>e?"fshRed":"fshGreen"}(i,n)
s(` <span class="${c}">[${n}]</span>`,f)}function $(t,e){return e[0]===t}function B(t,e){const n=function(t,e){const n=e.getAttribute("data-name"),s=t.find(c($,n))
if(s)return s[1]}(t,e),s=e.nextElementSibling.nextElementSibling;(n||s)&&S(e,n,s)}function x(t){return t.split(/ \[|]/)}function A(t){const e=t.target
if("H1"!==e.tagName)return
p(i(e)).then(v)
const n=function(t){return h(i(t.parentNode.lastElementChild)).map(x)}(e)
f("#buff-outer input[name]").forEach(c(B,n))}const D=[50,54,55,56,60,61,98,101]
function H(t,e){(function(t,e){return!D.includes(Number(t.htmlFor.slice(6)))&&g(e.children[0])<125})(t,e)&&t.classList.add("fshDim")}function L(t){const e=t.children[0]
!function(t,e){const n=e.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
k(n.replace("</center>",`<br>Stamina Cost: ${s}$&`),e)}(t,e),H(t,e)}function N(){f('#buff-outer label[for^="skill-"]').forEach(L)}function w(t){const e=a("h1",r("players"))[0]
!function(t,e){return!t&&e}(e,t)?e&&u(e):setTimeout(w,100,t-1)}function R(){r("targetPlayers").value&&w(9)}function F(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const e=Math.floor(t/60),n=t%60
let s=j(e,"m")
return e>0&&n>0&&(s+=" "),s+=j(n,"s"),s}(t)})</span>`}function M(t,e){const s=t[e]||0
return s?F(s):function(t){const e=n(`#buff-outer input[data-name="${t}"]`)
return e?`<span class="quickbuffActivate" data-buffid="${e.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(e)}function C(t,e,n){s(M(t,e),n)}function G(t,e){return t[e.name]=e.duration,t}function O(t,e){return e.name===t}function _(t,e,n){const a=function(t,e){const n=t.find(c(O,e))
return n&&n.value||0}(t,e)
let i="fshLime"
a<100&&(i="fshRed"),s(`<span class="${i}">${a}%</span>`,n)}function P(t){!function(t){const e=t._enhancements
_(e,"Sustain",r("fshSus")),_(e,"Fury Caster",r("fshFur"))}(t),function(t){const e=t._skills.reduce(G,{})
C(e,"Guild Buffer",r("fshGB")),C(e,"Buff Master",r("fshBM")),C(e,"Extend",r("fshExt")),C(e,"Reinforce",r("fshRI"))}(t)}function I(t){const e=r(`skill-${t}`)
e&&(e.checked=!0)}function Q(){const t=o("blist")
t&&function(t){t.split(";").forEach(I)}(t)}let z
function J(){z.length?(window.addPlayer(z.shift()),setTimeout(J,200)):setTimeout(R,200)}function U(){const t=o("players")
t&&(z=h(t),J())}async function K(t){const e=t.target
if("quickbuffActivate"!==e.className)return
l("quickbuff","quickActivate")
!function(t,e){E(e)&&(t.className="fshLime",s("On",t))}(e,await y([window.self],[e.dataset.buffid]))}function V(){b(r("helperQBheader"),K),b(r("players"),A)}function W(){if(d())return
const t=r("quickbuff")
t&&(p(window.self).then(P),T(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),q([N,Q,U,V,R]))}export default W
//# sourceMappingURL=quickBuff-a0b2307d.js.map
