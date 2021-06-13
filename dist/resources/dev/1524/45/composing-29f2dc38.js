import{r as e,B as t,t as n,az as s,ac as o,_ as a,aG as i,D as c,m as r,P as l,T as m,i as p,aH as u,E as d,h as f,o as g,p as h,A as b,c as v,aI as C,C as S,a7 as E,j,I as k,z as N,M as x}from"./calfSystem-6a3c85e0.js"
import{r as A,g as y}from"./rnd-02e0ed9c.js"
import{p as I,s as $}from"./pubsub-dbf16b11.js"
import{c as B}from"./createInput-9bf3eee1.js"
import{c as L}from"./createTable-e4a467a3.js"
import{g as q}from"./getArrayByClassName-039bb6c6.js"
import{i as T}from"./insertElementAfter-677202b8.js"
import{i as F}from"./insertHtmlAfterEnd-219827a9.js"
import{i as P}from"./insertElementBefore-c442a2a7.js"
function _(e,n){t("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=`url(${s}composing/${y(1,11)}_${y(1,51)}.png)`,t(`Creating '<span class="fshBold">${n}</span>' Potion`,e.children[2]),t("",e.children[3])}function w(e){const n=e.parentNode
n&&(t('<div class="fshScs">Success</div>',n),_(n.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),0===o('[id|="composing-template"]:not(#composing-template-multi)').length&&a(i,!1))}function z(e,n){const s=e.parentNode
s&&n&&(n.error?t(`<div class="fshScs">${n.error}</div>`,s):w(e))}function H(t){var s;(s=t.value,e({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:A()}})).then(n(z,t))}function M(e,n){n.id=`proc-${n.id}`,t("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),H(n),I("quickcreate")}function Q(e,t){e.classList.add(`left-${t.toString()}`)}function D(e){Q(e,o(".quickCreate .sendLink").length)}function G(e){const t=e.target,{templateId:n}=t.dataset
n&&function(e,t){m("composing","FastComposeButton")
const n=o('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<e.value))for(let s=0;s<e.value;s+=1)n[s].value=t,M(n[s].nextElementSibling.nextElementSibling,n[s])}(t,n)}function R(e,t,n,s){var o,a
return 0===s&&b(e[1],t.insertCell(-1)),f(t.insertCell(-1),(o=(s+1).toString(),a=e[0],B({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),t}function J(e,t,s,o){return e.reduce(n(R,o),s.insertRow(-1)),s}function K(e){return[e.value,e.text]}function O(e,t,s){const o=function(e,t,s){const o=L({id:"fshFastCompose"})
return Q(o,s),e.reduce(n(J,t,s),o)}(d("#composing-template-multi option").map(K),t,s)
f(e,o),g(h,G),$("quickcreate",n(D,o))}function U(e){m("composing","FastCompose"),p(e,"<br>")
const t=q("composing-potion-time",document),n=t.filter(u("ETA: n/a")).length
n>0?O(e,t,n):p(e,"No open slots!")}const V=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function W(e){const t=V.exec(S(e))
if(t){return 1e3*(3600*t[1]+60*t[2]+Number(t[3]))+E}return 0}function X(e){a(i,e)}function Y(e){F(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Z(e){const t=e.target.parentNode;(function(e){return"SPAN"===e.tagName&&"quickCreate"===e.className})(t)&&function(e){const t=e.previousElementSibling.previousElementSibling
t&&"none"!==t.value&&(M(e,t),m("composing","QuickCreate"))}(t)}function ee(){!function(){if(!v.enableComposingAlert)return
const e=q("composing-potion-time",document),t=Math.min(...e.map(W))
0===t?X(!0):(X(!1),a(C,t))}(),d("input[id^=create-]:not(#create-multi)",h).forEach(Y),g(h,Z),function(){if(k("moveComposingButtons")){const e=N("composing-error-dialog").previousElementSibling
e.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const t=x("composing-level",h)[0].parentNode
P(e,t)}}(),function(){const e=c("#pCC div.centered")
F(e.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const t=r({className:"centered"})
T(t,e)
const s=B({id:"fast-compose",type:"checkbox"})
T(s,e),l(s,"change",n(U,t))}()}function te(){j()&&h&&ee()}export default te
//# sourceMappingURL=composing-29f2dc38.js.map
