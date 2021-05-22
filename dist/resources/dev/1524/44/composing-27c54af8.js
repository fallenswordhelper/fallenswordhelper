import{r as e,B as t,t as n,ay as s,ac as o,_ as a,aF as i,D as c,m as r,P as l,T as m,i as p,aG as u,E as f,h as d,o as g,p as h,A as b,c as v,aH as C,C as S,a7 as E,j,I as k,z as N,M as x}from"./calfSystem-f7cf24f6.js"
import{r as y,g as A}from"./rnd-b5047085.js"
import{p as $,s as B}from"./pubsub-08d26997.js"
import{c as I}from"./createInput-8f2d1a63.js"
import{c as L}from"./createTable-fea82781.js"
import{g as q}from"./getArrayByClassName-f4491c81.js"
import{i as F}from"./insertElementAfter-634bdf02.js"
import{i as T}from"./insertHtmlAfterEnd-63c8758b.js"
import{i as P}from"./insertElementBefore-7c440c87.js"
function _(e,n){t("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=`url(${s}composing/${A(1,11)}_${A(1,51)}.png)`,t(`Creating '<span class="fshBold">${n}</span>' Potion`,e.children[2]),t("",e.children[3])}function w(e){const n=e.parentNode
n&&(t('<div class="fshScs">Success</div>',n),_(n.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),0===o('[id|="composing-template"]:not(#composing-template-multi)').length&&a(i,!1))}function H(e,n){const s=e.parentNode
s&&n&&(n.error?t(`<div class="fshScs">${n.error}</div>`,s):w(e))}function M(t){var s;(s=t.value,e({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:y()}})).then(n(H,t))}function Q(e,n){n.id=`proc-${n.id}`,t("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),M(n),$("quickcreate")}function z(e,t){e.classList.add(`left-${t.toString()}`)}function D(e){z(e,o(".quickCreate .sendLink").length)}function G(e){const t=e.target,{templateId:n}=t.dataset
n&&function(e,t){m("composing","FastComposeButton")
const n=o('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<e.value))for(let s=0;s<e.value;s+=1)n[s].value=t,Q(n[s].nextElementSibling.nextElementSibling,n[s])}(t,n)}function R(e,t,n,s){var o,a
return 0===s&&b(e[1],t.insertCell(-1)),d(t.insertCell(-1),(o=(s+1).toString(),a=e[0],I({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),t}function J(e,t,s,o){return e.reduce(n(R,o),s.insertRow(-1)),s}function K(e){return[e.value,e.text]}function O(e,t,s){const o=function(e,t,s){const o=L({id:"fshFastCompose"})
return z(o,s),e.reduce(n(J,t,s),o)}(f("#composing-template-multi option").map(K),t,s)
d(e,o),g(h,G),B("quickcreate",n(D,o))}function U(e){m("composing","FastCompose"),p(e,"<br>")
const t=q("composing-potion-time",document),n=t.filter(u("ETA: n/a")).length
n>0?O(e,t,n):p(e,"No open slots!")}const V=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function W(e){const t=V.exec(S(e))
if(t){return 1e3*(3600*t[1]+60*t[2]+Number(t[3]))+E}return 0}function X(e){a(i,e)}function Y(e){T(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Z(e){const t=e.target.parentNode;(function(e){return"SPAN"===e.tagName&&"quickCreate"===e.className})(t)&&function(e){const t=e.previousElementSibling.previousElementSibling
t&&"none"!==t.value&&(Q(e,t),m("composing","QuickCreate"))}(t)}function ee(){!function(){if(!v.enableComposingAlert)return
const e=q("composing-potion-time",document),t=Math.min(...e.map(W))
0===t?X(!0):(X(!1),a(C,t))}(),f("input[id^=create-]:not(#create-multi)",h).forEach(Y),g(h,Z),function(){if(k("moveComposingButtons")){const e=N("composing-error-dialog").previousElementSibling
e.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const t=x("composing-level",h)[0].parentNode
P(e,t)}}(),function(){const e=c("#pCC div.centered")
T(e.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const t=r({className:"centered"})
F(t,e)
const s=I({id:"fast-compose",type:"checkbox"})
F(s,e),l(s,"change",n(U,t))}()}function te(){j()&&h&&ee()}export default te
//# sourceMappingURL=composing-27c54af8.js.map
