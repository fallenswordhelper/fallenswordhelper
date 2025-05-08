import{k as t,p as e,b as n,q as s,a9 as o,v as a,bY as i,aS as c,d as r,K as l,ae as m,bZ as p,aN as u,m as f,z as d,c as g,s as b,aj as h,b_ as v,i as C,o as S,ag as E,b$ as N,a8 as k,c0 as x,e as j,bH as y,$,c1 as L,ai as q,g as w,aU as A,y as B}from"./calfSystem-G1dN925O.js"
import{d as F,c as I}from"./daComposing-LNl3biG-.js"
import{s as T}from"./sum-7xqj01JI.js"
import{a as _}from"./addCommas-olJWnOGa.js"
import{c as P}from"./createInput-3jwazPKd.js"
import{c as Q}from"./createTable-pGvXv4Gy.js"
import{i as H}from"./insertElementAfter-Pj5qjSoU.js"
import{p as U,s as G}from"./pubsub-XXIgC9Ql.js"
import{r as M,g as R}from"./rnd-7E7YIwpb.js"
import{r as z}from"./regExpGroups-4702yhMp.js"
import{n as D}from"./now-pQzGw6vd.js"
import{i as K}from"./insertHtmlAfterBegin-lQu1LWMD.js"
import{i as O}from"./insertHtmlAfterEnd-s8cbAmD-.js"
let W=[]
const Y=t=>t.map((({buffs:t,duration:e,id:n})=>({cost:Math.max(t.map((({level:t})=>t)).reduce(T,0)*e,5e3),id:n}))),Z=[[(t,e)=>!t&&!e,()=>0],[(t,e)=>!t&&e,(t,e,n)=>n.remove()],[(t,e)=>t&&e,(t,e,n)=>o(`Cost: ${_(e)}`,n)],[(t,e)=>t&&!e,(t,e)=>a(t.parentNode,`<div class="fshBlue template-cost">Cost: ${_(e)}</div>`)]]
function J(t){const e=W.find((({id:e})=>e===Number(t.value)))?.cost,n=s(".template-cost",t.parentNode),o=Z.find((([t])=>t(e,n)))
o&&o[1](t,e,n)}function V(t){/^composing-template-\d$/.test(t.target.id)&&J(t.target)}function X(){const s=t("select[id^=composing-template-]:not(#composing-template-multi)",e())
s.length&&async function(t){const s=await F()
s?.s&&(W=Y(s.r.templates),t.forEach(J),n(e(),"change",V))}(s)}function tt(t,e){r("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${u}composing/${R(1,11)}_${R(1,51)}.png)`,r(`Creating '<span class="fshBold">${e}</span>' Potion`,t.children[2]),r("",t.children[3])}function et(t){const e=t.parentNode
e&&(r('<div class="fshScs">Success</div>',e),tt(e.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===l('[id|="composing-template"]:not(#composing-template-multi)').length&&m(p,!1))}async function nt(t){!function(t,e){const n=t.parentNode
n&&e&&(e.error?r(`<div class="fshScs">${e.error}</div>`,n):et(t))}(t,await async function(t){const e=await i({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:M()}})
return c(e)??{error:"Server Error"}}(t.value))}function st(t,e){e.id=`proc-${e.id}`,r("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),nt(e),U("quickcreate")}function ot(t,e){t.classList.add(`left-${e.toString()}`)}function at(t){ot(t,l(".quickCreate .sendLink").length)}function it(t){const e=t.target,{templateId:n}=e.dataset
n&&function(t,e){b("composing","FastComposeButton")
const n=l('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<t.value))for(let s=0;s<t.value;s+=1)n[s].value=e,st(n[s].nextElementSibling.nextElementSibling,n[s])}(e,n)}function ct(t,e,n,s){var a,i
return 0===s&&o(t[1],e.insertCell(-1)),C(e.insertCell(-1),(a=(s+1).toString(),i=t[0],P({className:"awesome orange",dataset:{templateId:i},type:"button",value:a}))),e}function rt(t,e,n){return t.forEach(g(ct,n,e.insertRow(-1))),e}function lt(t){return[t.value,t.text]}function mt(n,s,o){const a=function(t,e,n){const s=Q({id:"fshFastCompose"})
return ot(s,n),t.reduce(g(rt,e),s)}(t("#composing-template-multi option").map(lt),s,o)
C(n,a),S(e(),it),G("quickcreate",g(at,a))}function pt(t){b("composing","FastCompose"),a(t,"<br>")
const e=h("composing-potion-time",document),n=e.filter(v("ETA: n/a")).length
n>0?mt(t,e,n):a(t,"No open slots!")}function ut(t){const e=z(x,k(t))
if(e){const{h:t,m:n,s:s}=e
return 1e3*(3600*t+60*n+Number(s))+D()}return 0}function ft(t){m(p,t)}function dt(t){return I({subcmd:"collect",potion_id:t})}async function gt(t){const e=await j({cmd:"composing",subcmd:"collect",potion_id:t})
if(!e)return{s:!1}
const n=y(e)
return n.includes("collected")?{s:!0}:{s:!1,e:{message:n}}}function bt(t){const e=t.getAttribute("onclick").split("&")[2].split("=")[1]
K(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${e}">Quick Collect</button></span> ]&nbsp;`)}const ht=t=>"BUTTON"===t.tagName&&"Quick Collect"===k(t)
function vt(t,e,n){r(n,t),t.classList.add(e)}async function Ct(t){b("composing","quickCollect")
const e=t.parentNode,n=t.value
var s;(s=e).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,r("",s),s.classList.add("fshSpinner")
const o=await function(t){return $(dt,gt,t)}(n)
!function(t,e){t.classList.remove("fshSpinner"),e.s?vt(t,"fshGreen","Collected"):vt(t,"fshRed","Error")}(e,o)}function St(t){ht(t.target)&&Ct(t.target)}function Et(t){O(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}const Nt=t=>"SPAN"===t.tagName&&"quickCreate"===t.className
function kt(t){const e=t.target.parentNode
Nt(e)&&function(t){const e=t.previousElementSibling.previousElementSibling
e&&"none"!==e.value&&(st(t,e),b("composing","QuickCreate"))}(e)}function xt(){!function(){if(!E.enableComposingAlert)return
const t=h("composing-potion-time",document),e=Math.min(...t.map(ut))
0===e?ft(!0):(ft(!1),m(N,e))}(),t("input[id^=create-]:not(#create-multi)",e()).forEach(Et),S(e(),kt),function(){if(!q("moveComposingButtons"))return
const t=w("composing-error-dialog").previousElementSibling
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const n=A("composing-level",e())[0].parentNode
B(t,n)}(),function(){const t=s("#pCC div.centered")
a(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const e=f({className:"centered"})
H(e,t)
const n=P({id:"fast-compose",type:"checkbox"})
H(n,t),d(n,"change",g(pt,e))}(),t('input[value="Collect Potion"]',e()).forEach(bt),S(e(),St),X()}function jt(){L()&&e()&&xt()}export{jt as default}
//# sourceMappingURL=composing-1NGQ6mIF.js.map
