import{cf as n,C as e,v as t,aI as s,aA as a,a5 as o,ch as i,S as c,$ as r,l,V as u,Q as p,a1 as m,i as d,al as f,b6 as g,N as h,h as b,o as v,p as C,B as S,e as k,ci as N,D as x,aO as E,j,G as y,A,K as $,P as I}from"./calfSystem-0e5d6faf.js"
import{c as L}from"./createInput-fb0874a0.js"
import{c as q}from"./createTable-0ea5d31f.js"
import{p as B,a as F}from"./pubsub-a9414a28.js"
import{r as P,g as T}from"./rnd-aa6711a8.js"
function Q(n,t){e("",n.children[0]),n.children[0].classList.add("fshPot"),n.children[0].style.backgroundImage=`url(${s}composing/${T(1,11)}_${T(1,51)}.png)`,e(`Creating '<span class="fshBold">${t}</span>' Potion`,n.children[2]),e("",n.children[3])}function w(n){const t=n.parentNode
t&&(e('<div class="fshScs">Success</div>',t),Q(t.previousElementSibling.previousElementSibling,n[n.selectedIndex].text),0===a('[id|="composing-template"]:not(#composing-template-multi)').length&&o(i,!1))}function _(n,t){const s=n.parentNode
s&&(t.error?e(`<div class="fshScs">${t.error}</div>`,s):w(n))}function D(e){var s;(s=e.value,n({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:P()}})).then(t(_,e))}function G(n,t){e("",n),n.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),D(t),B("quickcreate")}function K(n,e){n.classList.add(`left-${e.toString()}`)}function M(n){K(n,a(".quickCreate .sendLink").length)}function O(n){const e=n.target,{templateId:t}=e.dataset
t&&function(n,e){m("composing","FastComposeButton")
const t=a('[id|="composing-template"]:not(#composing-template-multi)')
if(!(t.length<n.value))for(let s=0;s<n.value;s+=1)t[s].value=e,G(t[s].nextElementSibling.nextElementSibling,t[s])}(e,t)}function R(n,e,t,s){var a,o
return 0===s&&S(n[1],e.insertCell(-1)),b(e.insertCell(-1),(a=(s+1).toString(),o=n[0],L({className:"awesome orange",dataset:{templateId:o},type:"button",value:a}))),e}function V(n,e,s,a){return n.reduce(t(R,a),s.insertRow(-1)),s}function z(n){return[n.value,n.text]}function H(n,e,s){const a=function(n,e,s){const a=q({id:"fshFastCompose"})
return K(a,s),n.reduce(t(V,e,s),a)}(h("#composing-template-multi option").map(z),e,s)
b(n,a),v(C,O),F("quickcreate",t(M,a))}function J(n){m("composing","FastCompose"),d(n,"<br>")
const e=f("composing-potion-time",document),t=e.filter(g("ETA: n/a")).length
t>0?H(n,e,t):d(n,"No open slots!")}const U=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function W(n,e){const t=U.exec(x(e))
if(t){const e=1e3*(3600*t[1]+60*t[2]+Number(t[3]))+E
return n.concat(e)}return n.concat(0)}function X(n){o(i,n)}function Y(n){r(n,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Z(n){const e=n.target.parentNode;(function(n){return"SPAN"===n.tagName&&"quickCreate"===n.className})(e)&&function(n){const e=n.previousElementSibling.previousElementSibling
e&&"none"!==e.value&&(G(n,e),m("composing","QuickCreate"))}(e)}function nn(){!function(){if(!k.enableComposingAlert)return
const n=f("composing-potion-time",document).reduce(W,[]),e=Math.min.apply(null,n)
0===e?X(!0):(X(!1),o(N,e))}(),h("input[id^=create-]:not(#create-multi)",C).forEach(Y),v(C,Z),function(){if(y("moveComposingButtons")){const n=A("composing-error-dialog").previousElementSibling
n.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const e=$("composing-level",C)[0].parentNode
I(n,e)}}(),function(){const n=c("#pCC div.centered")
r(n.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const e=l({className:"centered"})
u(e,n)
const s=L({id:"fast-compose",type:"checkbox"})
u(s,n),p(s,"change",t(J,e))}()}export default function(){j()&&C&&nn()}
//# sourceMappingURL=composing-5fec468a.js.map
