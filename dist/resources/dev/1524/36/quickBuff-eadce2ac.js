import{c as t}from"./createSpan-c8cd4d0e.js"
import{f as e}from"./formatLastActivity-1eb15b3a.js"
import{D as n,B as s,b as a,C as i,E as f,t as c,z as r,S as u,T as o,y as l,o as d}from"./calfSystem-eeb1d862.js"
import{i as m}from"./insertElementAfter-4120bdd7.js"
import{c as b}from"./csvSplit-482f2ccd.js"
import{g as h}from"./getProfile-52958e59.js"
import{s as p}from"./setTipped-4c2abd3e.js"
import{e as k}from"./executeAll-a7ad7ece.js"
import{o as j}from"./outputFormat-01edbae6.js"
import{i as q}from"./insertHtmlAfterEnd-2ce9b6d9.js"
import{d as E,q as T}from"./quickbuffSuccess-efd28ee3.js"
import"./splitTime-cd640f88.js"
import"./insertElementBefore-42a90ba9.js"
import"./cmdExport-7e823e95.js"
import"./indexAjaxJson-2deb257d.js"
import"./getBuff-16237e80.js"
import"./buffObj-ae031e44.js"
function y(i){const f=function(e){let s=n("span.fshLastActivity",e)
if(!s){s=t({className:"fshLastActivity"})
const n=a("h1",e)[0]
m(s,n)}return s}(n(`div.player[data-username="${i.username}"]`))
s(`Last Activity: ${e(i.last_login)}<br>Stamina: ${i.current_stamina} / ${i.stamina} ( ${Math.floor(i.current_stamina/i.stamina*100)}% )`,f)}function g(t){return Number(i(t).replace(/\[|\]/g,""))}function v(e,n,a){if(!n)return void s("",a)
const i=g(e.nextElementSibling.children[0].children[0]),f=function(e,n){if(!n){const n=t({className:"fshPlayer"})
return m(n,e.nextElementSibling),n}return n}(e,a),c=function(t,e){return t>e?"fshRed":"fshGreen"}(i,n)
s(` <span class="${c}">[${n}]</span>`,f)}function S(t,e){return e[0]===t}function $(t,e){const n=function(t,e){const n=e.getAttribute("data-name"),s=t.find(c(S,n))
if(s)return s[1]}(t,e),s=e.nextElementSibling.nextElementSibling;(n||s)&&v(e,n,s)}function B(t){return t.split(/ \[|]/)}function x(t){const e=t.target
if("H1"!==e.tagName)return
h(i(e)).then(y)
const n=function(t){return b(i(t.parentNode.lastElementChild)).map(B)}(e)
f("#buff-outer input[name]").forEach(c($,n))}const A=[50,54,55,56,60,61,98,101]
function D(t,e){(function(t,e){return!A.includes(Number(t.htmlFor.slice(6)))&&g(e.children[0])<125})(t,e)&&t.classList.add("fshDim")}function H(t){const e=t.children[0]
!function(t,e){const n=e.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
p(n.replace("</center>",`<br>Stamina Cost: ${s}$&`),e)}(t,e),D(t,e)}function L(){f('#buff-outer label[for^="skill-"]').forEach(H)}function N(t){const e=a("h1",r("players"))[0]
!function(t,e){return!t&&e}(e,t)?e&&u(e):setTimeout(N,100,t-1)}function R(){r("targetPlayers").value&&N(9)}function w(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const e=Math.floor(t/60),n=t%60
let s=j(e,"m")
return e>0&&n>0&&(s+=" "),s+=j(n,"s"),s}(t)})</span>`}function F(t,e){const s=t[e]||0
return s?w(s):function(t){const e=n(`#buff-outer input[data-name="${t}"]`)
return e?`<span class="quickbuffActivate" data-buffid="${e.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(e)}function M(t,e,n){s(F(t,e),n)}function C(t,e){return t[e.name]=e.duration,t}function G(t,e){return e.name===t}function O(t,e,n){const a=function(t,e){const n=t.find(c(G,e))
return n&&n.value||0}(t,e)
let i="fshLime"
a<100&&(i="fshRed"),s(`<span class="${i}">${a}%</span>`,n)}function _(t){!function(t){const e=t._enhancements
O(e,"Sustain",r("fshSus")),O(e,"Fury Caster",r("fshFur"))}(t),function(t){const e=t._skills.reduce(C,{})
M(e,"Guild Buffer",r("fshGB")),M(e,"Buff Master",r("fshBM")),M(e,"Extend",r("fshExt")),M(e,"Reinforce",r("fshRI"))}(t)}function P(t){const e=r(`skill-${t}`)
e&&(e.checked=!0)}function I(){const t=o("blist")
t&&function(t){t.split(";").forEach(P)}(t)}let Q
function z(){Q.length?(window.addPlayer(Q.shift()),setTimeout(z,200)):R()}function J(){const t=o("players")
t&&(Q=b(t),z())}function K(t,e){T(e)&&(t.className="fshLime",s("On",t))}function U(t){const e=t.target
"quickbuffActivate"===e.className&&E([window.self],[e.dataset.buffid]).then(c(K,e))}function V(){d(r("helperQBheader"),U),d(r("players"),x)}function W(){if(l())return
const t=r("quickbuff")
t&&(h(window.self).then(_),q(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),k([L,I,J,V,R]))}export default W
//# sourceMappingURL=quickBuff-eadce2ac.js.map
