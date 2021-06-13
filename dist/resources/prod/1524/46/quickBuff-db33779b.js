import{c as t}from"./createSpan-462a14d2.js"
import{f as n}from"./formatLastActivity-5b1f43ee.js"
import{D as e,B as s,b as a,C as i,E as f,t as c,z as r,Q as u,R as o,S as l,y as d,o as m}from"./calfSystem-7991d843.js"
import{i as b}from"./insertElementAfter-a49606d1.js"
import{c as h}from"./csvSplit-d0e27857.js"
import{g as p}from"./getProfile-c6106cad.js"
import{s as k}from"./setTipped-c38098a5.js"
import{e as q}from"./executeAll-9a33204f.js"
import{o as j}from"./outputFormat-64398632.js"
import{i as y}from"./insertHtmlAfterEnd-c8c22cfb.js"
import{d as E,q as v}from"./quickbuffSuccess-d920c5f4.js"
import"./insertElementBefore-c2bb9234.js"
import"./cmdExport-07db8246.js"
import"./indexAjaxJson-2cb21664.js"
import"./getBuff-77a4c272.js"
import"./buffObj-c604f006.js"
function T(i){const f=function(n){let s=e("span.fshLastActivity",n)
if(!s){s=t({className:"fshLastActivity"})
const e=a("h1",n)[0]
b(s,e)}return s}(e(`div.player[data-username="${i.username}"]`))
s(`Last Activity: ${n(i.last_login)}<br>Stamina: ${i.current_stamina} / ${i.stamina} ( ${Math.floor(i.current_stamina/i.stamina*100)}% )`,f)}function g(t){return Number(i(t).replace(/\[|\]/g,""))}function S(n,e,a){if(!e)return void s("",a)
const i=g(n.nextElementSibling.children[0].children[0]),f=function(n,e){if(!e){const e=t({className:"fshPlayer"})
return b(e,n.nextElementSibling),e}return e}(n,a),c=function(t,n){return t>n?"fshRed":"fshGreen"}(i,e)
s(` <span class="${c}">[${e}]</span>`,f)}function $(t,n){return n[0]===t}function B(t,n){const e=function(t,n){const e=n.getAttribute("data-name"),s=t.find(c($,e))
if(s)return s[1]}(t,n),s=n.nextElementSibling.nextElementSibling;(e||s)&&S(n,e,s)}function x(t){return t.split(/ \[|]/)}function A(t){const n=t.target
if("H1"!==n.tagName)return
p(i(n)).then(T)
const e=function(t){return h(i(t.parentNode.lastElementChild)).map(x)}(n)
f("#buff-outer input[name]").forEach(c(B,e))}const D=[50,54,55,56,60,61,98,101]
function H(t,n){(function(t,n){return!D.includes(Number(t.htmlFor.slice(6)))&&g(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function L(t){const n=t.children[0]
!function(t,n){const e=n.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
k(e.replace("</center>",`<br>Stamina Cost: ${s}$&`),n)}(t,n),H(t,n)}function N(){f('#buff-outer label[for^="skill-"]').forEach(L)}function R(t){const n=a("h1",r("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&u(n):setTimeout(R,100,t-1)}function w(){r("targetPlayers").value&&R(9)}function F(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const n=Math.floor(t/60),e=t%60
let s=j(n,"m")
return n>0&&e>0&&(s+=" "),s+=j(e,"s"),s}(t)})</span>`}function M(t,n){const s=t[n]||0
return s?F(s):function(t){const n=e(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function C(t,n,e){s(M(t,n),e)}function G(t,n){return t[n.name]=n.duration,t}function O(t,n){return n.name===t}function _(t,n,e){const a=function(t,n){const e=t.find(c(O,n))
return e&&e.value||0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),s(`<span class="${i}">${a}%</span>`,e)}function P(t){!function(t){const n=t._enhancements
_(n,"Sustain",r("fshSus")),_(n,"Fury Caster",r("fshFur"))}(t),function(t){const n=t._skills.reduce(G,{})
C(n,"Guild Buffer",r("fshGB")),C(n,"Buff Master",r("fshBM")),C(n,"Extend",r("fshExt")),C(n,"Reinforce",r("fshRI"))}(t)}function Q(t){const n=r(`skill-${t}`)
n&&(n.checked=!0)}function I(){const t=o("blist")
t&&function(t){t.split(";").forEach(Q)}(t)}let z
function J(){z.length?(window.addPlayer(z.shift()),setTimeout(J,200)):setTimeout(w,200)}function K(){const t=o("players")
t&&(z=h(t),J())}async function U(t){const n=t.target
if("quickbuffActivate"!==n.className)return
l("quickbuff","quickActivate")
!function(t,n){v(n)&&(t.className="fshLime",s("On",t))}(n,await E([window.self],[n.dataset.buffid]))}function V(){m(r("helperQBheader"),U),m(r("players"),A)}function W(){if(d())return
const t=r("quickbuff")
t&&(p(window.self).then(P),y(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),q([N,I,K,V,w]))}export default W
//# sourceMappingURL=quickBuff-db33779b.js.map
