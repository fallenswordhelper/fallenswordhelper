import{r as e,A as t,t as n,ai as s,aa as o,Z as a,ap as i,C as c,m as r,P as l,V as m,i as p,aq as u,D as f,h as d,o as g,p as h,z as b,c as v,ar as C,B as S,a5 as E,j,H as k,y as N,J as x}from"./calfSystem-45544049.js"
import{r as y,g as A}from"./rnd-141927bb.js"
import{p as $,s as q}from"./pubsub-3d2f0afe.js"
import{c as B}from"./createInput-8791792e.js"
import{c as L}from"./createTable-7f36caa1.js"
import{g as I}from"./getArrayByClassName-b62a000f.js"
import{i as F}from"./insertElementAfter-f2c66e56.js"
import{i as P}from"./insertHtmlAfterEnd-05df8cbc.js"
import{i as T}from"./insertElementBefore-aa28f497.js"
function w(e,n){t("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=`url(${s}composing/${A(1,11)}_${A(1,51)}.png)`,t(`Creating '<span class="fshBold">${n}</span>' Potion`,e.children[2]),t("",e.children[3])}function H(e){const n=e.parentNode
n&&(t('<div class="fshScs">Success</div>',n),w(n.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),0===o('[id|="composing-template"]:not(#composing-template-multi)').length&&a(i,!1))}function Q(e,n){const s=e.parentNode
s&&(n.error?t(`<div class="fshScs">${n.error}</div>`,s):H(e))}function _(t){var s;(s=t.value,e({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:y()}})).then(n(Q,t))}function z(e,n){n.id=`proc-${n.id}`,t("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),_(n),$("quickcreate")}function D(e,t){e.classList.add(`left-${t.toString()}`)}function J(e){D(e,o(".quickCreate .sendLink").length)}function M(e){const t=e.target,{templateId:n}=t.dataset
n&&function(e,t){m("composing","FastComposeButton")
const n=o('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<e.value))for(let s=0;s<e.value;s+=1)n[s].value=t,z(n[s].nextElementSibling.nextElementSibling,n[s])}(t,n)}function R(e,t,n,s){var o,a
return 0===s&&b(e[1],t.insertCell(-1)),d(t.insertCell(-1),(o=(s+1).toString(),a=e[0],B({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),t}function V(e,t,s,o){return e.reduce(n(R,o),s.insertRow(-1)),s}function Z(e){return[e.value,e.text]}function G(e,t,s){const o=function(e,t,s){const o=L({id:"fshFastCompose"})
return D(o,s),e.reduce(n(V,t,s),o)}(f("#composing-template-multi option").map(Z),t,s)
d(e,o),g(h,M),q("quickcreate",n(J,o))}function K(e){m("composing","FastCompose"),p(e,"<br>")
const t=I("composing-potion-time",document),n=t.filter(u("ETA: n/a")).length
n>0?G(e,t,n):p(e,"No open slots!")}const O=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function U(e){const t=O.exec(S(e))
if(t){return 1e3*(3600*t[1]+60*t[2]+Number(t[3]))+E}return 0}function W(e){a(i,e)}function X(e){P(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Y(e){const t=e.target.parentNode;(function(e){return"SPAN"===e.tagName&&"quickCreate"===e.className})(t)&&function(e){const t=e.previousElementSibling.previousElementSibling
t&&"none"!==t.value&&(z(e,t),m("composing","QuickCreate"))}(t)}function ee(){!function(){if(!v.enableComposingAlert)return
const e=I("composing-potion-time",document),t=Math.min(...e.map(U))
0===t?W(!0):(W(!1),a(C,t))}(),f("input[id^=create-]:not(#create-multi)",h).forEach(X),g(h,Y),function(){if(k("moveComposingButtons")){const e=N("composing-error-dialog").previousElementSibling
e.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const t=x("composing-level",h)[0].parentNode
T(e,t)}}(),function(){const e=c("#pCC div.centered")
P(e.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const t=r({className:"centered"})
F(t,e)
const s=B({id:"fast-compose",type:"checkbox"})
F(s,e),l(s,"change",n(K,t))}()}function te(){j()&&h&&ee()}export default te
//# sourceMappingURL=composing-9283c006.js.map