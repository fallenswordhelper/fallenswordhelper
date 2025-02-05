import{l as t,p as e,cx as n,c as s,q as o,ae as a,x as i,cw as c,bb as r,e as l,O as u,al as m,cy as p,b8 as d,n as f,aW as g,B as h,d as b,s as v,ar as C,cz as S,i as k,o as E,ao as N,cA as x,C as y,ad as $,cB as j,az as q,cC as A,$ as B,h as L,cg as w,cD as T,aq as I,g as F,be as P,A as Q}from"./calfSystem-BAeDn21M.js"
import{s as _}from"./sum-DdZz7_s4.js"
import{a as H}from"./addCommas-C_h2HN8s.js"
import{c as z}from"./createInput-B6T-33bD.js"
import{c as D}from"./createTable-CxtktJCV.js"
import{p as M,s as O}from"./pubsub-CmaPpxHm.js"
import{r as R,g as U}from"./rnd-D_QmA-Fa.js"
import{i as G}from"./insertHtmlAfterBegin-BvGmlBOR.js"
import{i as W}from"./insertHtmlAfterEnd-zhforf3q.js"
let J=[]
const K=t=>t.map((({buffs:t,duration:e,id:n})=>({cost:Math.max(t.map((({level:t})=>t)).reduce(_,0)*e,5e3),id:n}))),V=[[(t,e)=>!t&&!e,()=>0],[(t,e)=>!t&&e,(t,e,n)=>n.remove()],[(t,e)=>t&&e,(t,e,n)=>a(`Cost: ${H(e)}`,n)],[(t,e)=>t&&!e,(t,e)=>i(t.parentNode,`<div class="fshBlue template-cost">Cost: ${H(e)}</div>`)]]
function X(t){const e=J.find((({id:e})=>e===Number(t.value)))?.cost,n=o(".template-cost",t.parentNode),s=V.find((([t])=>t(e,n)))
s&&s[1](t,e,n)}function Y(t){/^composing-template-\d$/.test(t.target.id)&&X(t.target)}function Z(){const o=t("select[id^=composing-template-]:not(#composing-template-multi)",e())
o.length&&async function(t){const o=await n()
o?.s&&(J=K(o.r.templates),t.forEach(X),s(e(),"change",Y))}(o)}function tt(t,e){l("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${d}composing/${U(1,11)}_${U(1,51)}.png)`,l(`Creating '<span class="fshBold">${e}</span>' Potion`,t.children[2]),l("",t.children[3])}function et(t){const e=t.parentNode
e&&(l('<div class="fshScs">Success</div>',e),tt(e.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===u('[id|="composing-template"]:not(#composing-template-multi)').length&&m(p,!1))}async function nt(t){!function(t,e){const n=t.parentNode
n&&e&&(e.error?l(`<div class="fshScs">${e.error}</div>`,n):et(t))}(t,await async function(t){const e=await c({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:R()}})
return r(e)??{error:"Server Error"}}(t.value))}function st(t,e){e.id=`proc-${e.id}`,l("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),nt(e),M("quickcreate")}function ot(t,e){t.classList.add(`left-${e.toString()}`)}function at(t){ot(t,u(".quickCreate .sendLink").length)}function it(t){const e=t.target,{templateId:n}=e.dataset
n&&function(t,e){v("composing","FastComposeButton")
const n=u('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<t.value))for(let s=0;s<t.value;s+=1)n[s].value=e,st(n[s].nextElementSibling.nextElementSibling,n[s])}(e,n)}function ct(t,e,n,s){var o,i
return 0===s&&a(t[1],e.insertCell(-1)),k(e.insertCell(-1),(o=(s+1).toString(),i=t[0],z({className:"awesome orange",dataset:{templateId:i},type:"button",value:o}))),e}function rt(t,e,n){return t.forEach(b(ct,n,e.insertRow(-1))),e}function lt(t){return[t.value,t.text]}function ut(n,s,o){const a=function(t,e,n){const s=D({id:"fshFastCompose"})
return ot(s,n),t.reduce(b(rt,e),s)}(t("#composing-template-multi option").map(lt),s,o)
k(n,a),E(e(),it),O("quickcreate",b(at,a))}function mt(t){v("composing","FastCompose"),i(t,"<br>")
const e=C("composing-potion-time",document),n=e.filter(S("ETA: n/a")).length
n>0?ut(t,e,n):i(t,"No open slots!")}function pt(t){const{h:e,m:n,s:s}=y(j,$(t))
return e&&n&&s?1e3*(3600*e+60*n+Number(s))+q():0}function dt(t){m(p,t)}function ft(t){return A({subcmd:"collect",potion_id:t})}async function gt(t){const e=await L({cmd:"composing",subcmd:"collect",potion_id:t})
if(!e)return{s:!1}
const n=w(e)
return n.includes("collected")?{s:!0}:{s:!1,e:{message:n}}}function ht(t){const e=t.getAttribute("onclick").split("&")[2].split("=")[1]
G(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${e}">Quick Collect</button></span> ]&nbsp;`)}const bt=t=>"BUTTON"===t.tagName&&"Quick Collect"===$(t)
function vt(t,e,n){l(n,t),t.classList.add(e)}async function Ct(t){v("composing","quickCollect")
const e=t.parentNode,n=t.value
var s;(s=e).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,l("",s),s.classList.add("fshSpinner")
const o=await function(t){return B(ft,gt,t)}(n)
!function(t,e){t.classList.remove("fshSpinner"),e.s?vt(t,"fshGreen","Collected"):vt(t,"fshRed","Error")}(e,o)}function St(t){bt(t.target)&&Ct(t.target)}function kt(t){W(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}const Et=t=>"SPAN"===t.tagName&&"quickCreate"===t.className
function Nt(t){const e=t.target.parentNode
Et(e)&&function(t){const e=t.previousElementSibling.previousElementSibling
e&&"none"!==e.value&&(st(t,e),v("composing","QuickCreate"))}(e)}function xt(){!function(){if(!N.enableComposingAlert)return
const t=C("composing-potion-time",document),e=Math.min(...t.map(pt))
0===e?dt(!0):(dt(!1),m(x,e))}(),t("input[id^=create-]:not(#create-multi)",e()).forEach(kt),E(e(),Nt),function(){if(!I("moveComposingButtons"))return
const t=F("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const n=P("composing-level",e())[0].parentNode
Q(t,n)}(),function(){const t=o("#pCC div.centered")
i(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const e=f({className:"centered"})
g(e,t)
const n=z({id:"fast-compose",type:"checkbox"})
g(n,t),h(n,"change",b(mt,e))}(),t('input[value="Collect Potion"]',e()).forEach(ht),E(e(),St),Z()}function yt(){T()&&e()&&xt()}export{yt as default}
//# sourceMappingURL=composing-980qviV8.js.map
