import{c as t}from"./createSpan-9738bb01.js"
import{f as n}from"./formatLastActivity-357c1729.js"
import{C as e,A as s,b as a,B as i,D as f,t as r,y as c,R as u,S as o,x as l,o as d}from"./calfSystem-c07e3259.js"
import{i as m}from"./insertElementAfter-6171d8e9.js"
import{c as b}from"./csvSplit-5e072bd9.js"
import{g as h}from"./getProfile-c197091b.js"
import{s as p}from"./setTipped-bbdd0d20.js"
import{e as k}from"./executeAll-7837be0f.js"
import{o as q}from"./outputFormat-6a56d067.js"
import{i as y}from"./insertHtmlAfterEnd-3b1fe1ac.js"
import{d as E,q as T}from"./quickbuffSuccess-7d1ade41.js"
import"./splitTime-bdf0bea9.js"
import"./insertElementBefore-9e5d02cd.js"
import"./cmdExport-73f6ff02.js"
import"./indexAjaxJson-18a12ea8.js"
function j(i){const f=function(n){let s=e("span.fshLastActivity",n)
if(!s){s=t({className:"fshLastActivity"})
const e=a("h1",n)[0]
m(s,e)}return s}(e(`div.player[data-username="${i.username}"]`))
s(`Last Activity: ${n(i.last_login)}<br>Stamina: ${i.current_stamina} / ${i.stamina} ( ${Math.floor(i.current_stamina/i.stamina*100)}% )`,f)}function v(t){return Number(i(t).replace(/\[|\]/g,""))}function S(n,e,a){if(!e)return void s("",a)
const i=v(n.nextElementSibling.children[0].children[0]),f=function(n,e){if(!e){const e=t({className:"fshPlayer"})
return m(e,n.nextElementSibling),e}return e}(n,a),r=function(t,n){return t>n?"fshRed":"fshGreen"}(i,e)
s(` <span class="${r}">[${e}]</span>`,f)}function g(t,n){return n[0]===t}function $(t,n){const e=function(t,n){const e=n.getAttribute("data-name"),s=t.find(r(g,e))
if(s)return s[1]}(t,n),s=n.nextElementSibling.nextElementSibling;(e||s)&&S(n,e,s)}function x(t){return t.split(/ \[|]/)}function A(t){const n=t.target
if("H1"!==n.tagName)return
h(i(n)).then(j)
const e=function(t){return b(i(t.parentNode.lastElementChild)).map(x)}(n)
f("#buff-outer input[name]").forEach(r($,e))}const B=[50,54,55,56,60,61,98,101]
function D(t,n){(function(t,n){return!B.includes(Number(t.htmlFor.slice(6)))&&v(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function H(t){const n=t.children[0]
!function(t,n){const e=n.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
p(e.replace("</center>",`<br>Stamina Cost: ${s}$&`),n)}(t,n),D(t,n)}function L(){f('#buff-outer label[for^="skill-"]').forEach(H)}function N(t){const n=a("h1",c("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&u(n):setTimeout(N,100,t-1)}function R(){c("targetPlayers").value&&N(9)}function w(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const n=Math.floor(t/60),e=t%60
let s=q(n,"m")
return n>0&&e>0&&(s+=" "),s+=q(e,"s"),s}(t)})</span>`}function F(t,n){const s=t[n]||0
return s?w(s):function(t){const n=e(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function M(t,n,e){s(F(t,n),e)}function C(t,n){return t[n.name]=n.duration,t}function G(t,n){return n.name===t}function _(t,n,e){const a=function(t,n){const e=t.find(r(G,n))
return e&&e.value||0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),s(`<span class="${i}">${a}%</span>`,e)}function O(t){!function(t){const n=t._enhancements
_(n,"Sustain",c("fshSus")),_(n,"Fury Caster",c("fshFur"))}(t),function(t){const n=t._skills.reduce(C,{})
M(n,"Guild Buffer",c("fshGB")),M(n,"Buff Master",c("fshBM")),M(n,"Extend",c("fshExt")),M(n,"Reinforce",c("fshRI"))}(t)}function P(t){const n=c(`skill-${t}`)
n&&(n.checked=!0)}function I(){const t=o("blist")
t&&function(t){t.split(";").forEach(P)}(t)}let Q
function J(){Q.length?(window.addPlayer(Q.shift()),setTimeout(J,200)):R()}function z(){const t=o("players")
t&&(Q=b(t),J())}function K(t,n){T(n)&&(t.className="fshLime",s("On",t))}function U(t){const n=t.target
"quickbuffActivate"===n.className&&E([window.self],[n.dataset.buffid]).then(r(K,n))}function V(){d(c("helperQBheader"),U),d(c("players"),A)}function W(){if(l())return
const t=c("quickbuff")
t&&(h(window.self).then(O),y(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),k([L,I,z,V,R]))}export default W
//# sourceMappingURL=quickBuff-42a000ad.js.map
