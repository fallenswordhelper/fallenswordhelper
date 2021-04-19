import{c as t}from"./createSpan-2c557b8b.js"
import{f as n}from"./formatLastActivity-fd0f719b.js"
import{D as e,B as s,b as a,C as i,E as f,t as c,z as r,R as u,S as o,y as l,o as d}from"./calfSystem-26fbeaeb.js"
import{i as m}from"./insertElementAfter-17f5394f.js"
import{c as b}from"./csvSplit-ec367ad9.js"
import{g as h}from"./getProfile-d835f1ae.js"
import{s as p}from"./setTipped-70cff648.js"
import{e as k}from"./executeAll-ed9a2868.js"
import{o as j}from"./outputFormat-d3c3754d.js"
import{i as q}from"./insertHtmlAfterEnd-078c7745.js"
import{d as E,q as y}from"./quickbuffSuccess-2c227824.js"
import"./splitTime-078928e8.js"
import"./insertElementBefore-68b894c4.js"
import"./cmdExport-c9d580f0.js"
import"./indexAjaxJson-0408c27b.js"
import"./getBuff-a12f30b7.js"
import"./buffObj-1e65986b.js"
function T(i){const f=function(n){let s=e("span.fshLastActivity",n)
if(!s){s=t({className:"fshLastActivity"})
const e=a("h1",n)[0]
m(s,e)}return s}(e(`div.player[data-username="${i.username}"]`))
s(`Last Activity: ${n(i.last_login)}<br>Stamina: ${i.current_stamina} / ${i.stamina} ( ${Math.floor(i.current_stamina/i.stamina*100)}% )`,f)}function g(t){return Number(i(t).replace(/\[|\]/g,""))}function v(n,e,a){if(!e)return void s("",a)
const i=g(n.nextElementSibling.children[0].children[0]),f=function(n,e){if(!e){const e=t({className:"fshPlayer"})
return m(e,n.nextElementSibling),e}return e}(n,a),c=function(t,n){return t>n?"fshRed":"fshGreen"}(i,e)
s(` <span class="${c}">[${e}]</span>`,f)}function S(t,n){return n[0]===t}function $(t,n){const e=function(t,n){const e=n.getAttribute("data-name"),s=t.find(c(S,e))
if(s)return s[1]}(t,n),s=n.nextElementSibling.nextElementSibling;(e||s)&&v(n,e,s)}function B(t){return t.split(/ \[|]/)}function x(t){const n=t.target
if("H1"!==n.tagName)return
h(i(n)).then(T)
const e=function(t){return b(i(t.parentNode.lastElementChild)).map(B)}(n)
f("#buff-outer input[name]").forEach(c($,e))}const A=[50,54,55,56,60,61,98,101]
function D(t,n){(function(t,n){return!A.includes(Number(t.htmlFor.slice(6)))&&g(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function H(t){const n=t.children[0]
!function(t,n){const e=n.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
p(e.replace("</center>",`<br>Stamina Cost: ${s}$&`),n)}(t,n),D(t,n)}function L(){f('#buff-outer label[for^="skill-"]').forEach(H)}function N(t){const n=a("h1",r("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&u(n):setTimeout(N,100,t-1)}function R(){r("targetPlayers").value&&N(9)}function w(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const n=Math.floor(t/60),e=t%60
let s=j(n,"m")
return n>0&&e>0&&(s+=" "),s+=j(e,"s"),s}(t)})</span>`}function F(t,n){const s=t[n]||0
return s?w(s):function(t){const n=e(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function M(t,n,e){s(F(t,n),e)}function C(t,n){return t[n.name]=n.duration,t}function G(t,n){return n.name===t}function O(t,n,e){const a=function(t,n){const e=t.find(c(G,n))
return e&&e.value||0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),s(`<span class="${i}">${a}%</span>`,e)}function _(t){!function(t){const n=t._enhancements
O(n,"Sustain",r("fshSus")),O(n,"Fury Caster",r("fshFur"))}(t),function(t){const n=t._skills.reduce(C,{})
M(n,"Guild Buffer",r("fshGB")),M(n,"Buff Master",r("fshBM")),M(n,"Extend",r("fshExt")),M(n,"Reinforce",r("fshRI"))}(t)}function P(t){const n=r(`skill-${t}`)
n&&(n.checked=!0)}function I(){const t=o("blist")
t&&function(t){t.split(";").forEach(P)}(t)}let Q
function z(){Q.length?(window.addPlayer(Q.shift()),setTimeout(z,200)):R()}function J(){const t=o("players")
t&&(Q=b(t),z())}function K(t,n){y(n)&&(t.className="fshLime",s("On",t))}function U(t){const n=t.target
"quickbuffActivate"===n.className&&E([window.self],[n.dataset.buffid]).then(c(K,n))}function V(){d(r("helperQBheader"),U),d(r("players"),x)}function W(){if(l())return
const t=r("quickbuff")
t&&(h(window.self).then(_),q(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),k([L,I,J,V,R]))}export default W
//# sourceMappingURL=quickBuff-005ce54c.js.map
