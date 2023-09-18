import{bS as t,aM as n,s as e,J as s,aa as o,bT as a,aJ as i,q as c,v as r,l,z as p,c as u,n as m,af as f,bU as d,j as g,i as b,o as h,p as v,a5 as S,ac as C,bV as E,a4 as k,bW as x,d as N,bB as j,$ as y,bX as L,ae as $,g as q,aO as w,y as A}from"./calfSystem-929ac228.js"
import{c as B}from"./createInput-c66459c1.js"
import{c as T}from"./createTable-6b9603d1.js"
import{i as F}from"./insertElementAfter-7e99ee43.js"
import{p as I,s as P}from"./pubsub-e34d91ff.js"
import{r as Q,g as _}from"./rnd-6f762303.js"
import{r as H}from"./regExpGroups-9d5b9f10.js"
import{n as U}from"./now-6f22aec9.js"
import{c as G}from"./composing-10da0d22.js"
import{i as J}from"./insertHtmlAfterBegin-6347b1ce.js"
import{i as M}from"./insertHtmlAfterEnd-cbb15ee8.js"
function O(t,n){e("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${i}composing/${_(1,11)}_${_(1,51)}.png)`,e(`Creating '<span class="fshBold">${n}</span>' Potion`,t.children[2]),e("",t.children[3])}function R(t){const n=t.parentNode
n&&(e('<div class="fshScs">Success</div>',n),O(n.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===s('[id|="composing-template"]:not(#composing-template-multi)').length&&o(a,!1))}async function X(s){!function(t,n){const s=t.parentNode
s&&n&&(n.error?e(`<div class="fshScs">${n.error}</div>`,s):R(t))}(s,await async function(e){const s=await t({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:e,fshrnd:Q()}})
return n(s)??{error:"Server Error"}}(s.value))}function z(t,n){n.id=`proc-${n.id}`,e("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),X(n),I("quickcreate")}function V(t,n){t.classList.add(`left-${n.toString()}`)}function W(t){V(t,s(".quickCreate .sendLink").length)}function D(t){const n=t.target,{templateId:e}=n.dataset
e&&function(t,n){m("composing","FastComposeButton")
const e=s('[id|="composing-template"]:not(#composing-template-multi)')
if(!(e.length<t.value))for(let s=0;s<t.value;s+=1)e[s].value=n,z(e[s].nextElementSibling.nextElementSibling,e[s])}(n,e)}function K(t,n,e,s){var o,a
return 0===s&&S(t[1],n.insertCell(-1)),b(n.insertCell(-1),(o=(s+1).toString(),a=t[0],B({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),n}function Y(t,n,e){return t.forEach(u(K,e,n.insertRow(-1))),n}function Z(t){return[t.value,t.text]}function tt(t,n,e){const s=function(t,n,e){const s=T({id:"fshFastCompose"})
return V(s,e),t.reduce(u(Y,n),s)}(g("#composing-template-multi option").map(Z),n,e)
b(t,s),h(v(),D),P("quickcreate",u(W,s))}function nt(t){m("composing","FastCompose"),r(t,"<br>")
const n=f("composing-potion-time",document),e=n.filter(d("ETA: n/a")).length
e>0?tt(t,n,e):r(t,"No open slots!")}function et(t){const n=H(x,k(t))
if(n){const{h:t,m:e,s:s}=n
return 1e3*(3600*t+60*e+Number(s))+U()}return 0}function st(t){o(a,t)}function ot(t){return G({subcmd:"collect",potion_id:t})}async function at(t){const n=await N({cmd:"composing",subcmd:"collect",potion_id:t}),e=j(n)
return e.includes("collected")?{s:!0}:{s:!1,e:{message:e}}}function it(t){const n=t.getAttribute("onclick").split("&")[2].split("=")[1]
J(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${n}">Quick Collect</button></span> ]&nbsp;`)}const ct=t=>"BUTTON"===t.tagName&&"Quick Collect"===k(t)
function rt(t,n,s){e(s,t),t.classList.add(n)}async function lt(t){m("composing","quickCollect")
const n=t.parentNode,s=t.value
var o;(o=n).nextElementSibling.disabled=!0,o.nextElementSibling.nextElementSibling.disabled=!0,e("",o),o.classList.add("fshSpinner")
const a=await function(t){return y(ot,at,t)}(s)
!function(t,n){t.classList.remove("fshSpinner"),n.s?rt(t,"fshGreen","Collected"):rt(t,"fshRed","Error")}(n,a)}function pt(t){ct(t.target)&&lt(t.target)}function ut(t){M(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}const mt=t=>"SPAN"===t.tagName&&"quickCreate"===t.className
function ft(t){const n=t.target.parentNode
mt(n)&&function(t){const n=t.previousElementSibling.previousElementSibling
n&&"none"!==n.value&&(z(t,n),m("composing","QuickCreate"))}(n)}function dt(){!function(){if(!C.enableComposingAlert)return
const t=f("composing-potion-time",document),n=Math.min(...t.map(et))
0===n?st(!0):(st(!1),o(E,n))}(),g("input[id^=create-]:not(#create-multi)",v()).forEach(ut),h(v(),ft),function(){if(!$("moveComposingButtons"))return
const t=q("composing-error-dialog").previousElementSibling
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const n=w("composing-level",v())[0].parentNode
A(t,n)}(),function(){const t=c("#pCC div.centered")
r(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const n=l({className:"centered"})
F(n,t)
const e=B({id:"fast-compose",type:"checkbox"})
F(e,t),p(e,"change",u(nt,n))}(),g('input[value="Collect Potion"]',v()).forEach(it),h(v(),pt)}function gt(){L()&&v()&&dt()}export{gt as default}
//# sourceMappingURL=composing-77d2234c.js.map
