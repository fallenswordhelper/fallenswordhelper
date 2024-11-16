import{n as t,p as e,q as n,a9 as s,v as o,o as a,c1 as i,aU as c,c as r,aO as l,K as m,ad as p,c2 as u,k as d,z as f,b as g,s as h,aj as b,c3 as v,i as C,e as S,ag as E,a8 as N,c4 as k,ap as x,c5 as j,d as y,bN as $,$ as L,c6 as q,ai as A,g as B,aW as w,y as T}from"./calfSystem-Blt4DbaE.js"
import{d as I,c as F}from"./daComposing-DDTbgGhZ.js"
import{s as P}from"./sum-DdZz7_s4.js"
import{a as Q}from"./addCommas-C_h2HN8s.js"
import{c as _}from"./createInput-CZBTxG_u.js"
import{c as G}from"./createTable-C810iJm_.js"
import{i as H}from"./insertElementAfter-BiQpTqUp.js"
import{p as M,s as O}from"./pubsub-daIcQ3ne.js"
import{r as R,g as U}from"./rnd-D_QmA-Fa.js"
import{r as z}from"./regExpGroups-B7iOxfb4.js"
import{i as D}from"./insertHtmlAfterBegin-COYhMrPt.js"
import{i as K}from"./insertHtmlAfterEnd-ZY7WoHPS.js"
let V=[]
const W=t=>t.map((({buffs:t,duration:e,id:n})=>({cost:Math.max(t.map((({level:t})=>t)).reduce(P,0)*e,5e3),id:n}))),J=[[(t,e)=>!t&&!e,()=>0],[(t,e)=>!t&&e,(t,e,n)=>n.remove()],[(t,e)=>t&&e,(t,e,n)=>s(`Cost: ${Q(e)}`,n)],[(t,e)=>t&&!e,(t,e)=>o(t.parentNode,`<div class="fshBlue template-cost">Cost: ${Q(e)}</div>`)]]
function X(t){const e=V.find((({id:e})=>e===Number(t.value)))?.cost,s=n(".template-cost",t.parentNode),o=J.find((([t])=>t(e,s)))
o&&o[1](t,e,s)}function Y(t){/^composing-template-\d$/.test(t.target.id)&&X(t.target)}function Z(){const n=t("select[id^=composing-template-]:not(#composing-template-multi)",e())
n.length&&async function(t){const n=await I()
n?.s&&(V=W(n.r.templates),t.forEach(X),a(e(),"change",Y))}(n)}function tt(t,e){r("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${l}composing/${U(1,11)}_${U(1,51)}.png)`,r(`Creating '<span class="fshBold">${e}</span>' Potion`,t.children[2]),r("",t.children[3])}function et(t){const e=t.parentNode
e&&(r('<div class="fshScs">Success</div>',e),tt(e.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===m('[id|="composing-template"]:not(#composing-template-multi)').length&&p(u,!1))}async function nt(t){!function(t,e){const n=t.parentNode
n&&e&&(e.error?r(`<div class="fshScs">${e.error}</div>`,n):et(t))}(t,await async function(t){const e=await i({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:R()}})
return c(e)??{error:"Server Error"}}(t.value))}function st(t,e){e.id=`proc-${e.id}`,r("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),nt(e),M("quickcreate")}function ot(t,e){t.classList.add(`left-${e.toString()}`)}function at(t){ot(t,m(".quickCreate .sendLink").length)}function it(t){const e=t.target,{templateId:n}=e.dataset
n&&function(t,e){h("composing","FastComposeButton")
const n=m('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<t.value))for(let s=0;s<t.value;s+=1)n[s].value=e,st(n[s].nextElementSibling.nextElementSibling,n[s])}(e,n)}function ct(t,e,n,o){var a,i
return 0===o&&s(t[1],e.insertCell(-1)),C(e.insertCell(-1),(a=(o+1).toString(),i=t[0],_({className:"awesome orange",dataset:{templateId:i},type:"button",value:a}))),e}function rt(t,e,n){return t.forEach(g(ct,n,e.insertRow(-1))),e}function lt(t){return[t.value,t.text]}function mt(n,s,o){const a=function(t,e,n){const s=G({id:"fshFastCompose"})
return ot(s,n),t.reduce(g(rt,e),s)}(t("#composing-template-multi option").map(lt),s,o)
C(n,a),S(e(),it),O("quickcreate",g(at,a))}function pt(t){h("composing","FastCompose"),o(t,"<br>")
const e=b("composing-potion-time",document),n=e.filter(v("ETA: n/a")).length
n>0?mt(t,e,n):o(t,"No open slots!")}function ut(t){const{h:e,m:n,s:s}=z(k,N(t))
return e&&n&&s?1e3*(3600*e+60*n+Number(s))+x():0}function dt(t){p(u,t)}function ft(t){return F({subcmd:"collect",potion_id:t})}async function gt(t){const e=await y({cmd:"composing",subcmd:"collect",potion_id:t})
if(!e)return{s:!1}
const n=$(e)
return n.includes("collected")?{s:!0}:{s:!1,e:{message:n}}}function ht(t){const e=t.getAttribute("onclick").split("&")[2].split("=")[1]
D(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${e}">Quick Collect</button></span> ]&nbsp;`)}const bt=t=>"BUTTON"===t.tagName&&"Quick Collect"===N(t)
function vt(t,e,n){r(n,t),t.classList.add(e)}async function Ct(t){h("composing","quickCollect")
const e=t.parentNode,n=t.value
var s;(s=e).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,r("",s),s.classList.add("fshSpinner")
const o=await function(t){return L(ft,gt,t)}(n)
!function(t,e){t.classList.remove("fshSpinner"),e.s?vt(t,"fshGreen","Collected"):vt(t,"fshRed","Error")}(e,o)}function St(t){bt(t.target)&&Ct(t.target)}function Et(t){K(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}const Nt=t=>"SPAN"===t.tagName&&"quickCreate"===t.className
function kt(t){const e=t.target.parentNode
Nt(e)&&function(t){const e=t.previousElementSibling.previousElementSibling
e&&"none"!==e.value&&(st(t,e),h("composing","QuickCreate"))}(e)}function xt(){!function(){if(!E.enableComposingAlert)return
const t=b("composing-potion-time",document),e=Math.min(...t.map(ut))
0===e?dt(!0):(dt(!1),p(j,e))}(),t("input[id^=create-]:not(#create-multi)",e()).forEach(Et),S(e(),kt),function(){if(!A("moveComposingButtons"))return
const t=B("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const n=w("composing-level",e())[0].parentNode
T(t,n)}(),function(){const t=n("#pCC div.centered")
o(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const e=d({className:"centered"})
H(e,t)
const s=_({id:"fast-compose",type:"checkbox"})
H(s,t),f(s,"change",g(pt,e))}(),t('input[value="Collect Potion"]',e()).forEach(ht),S(e(),St),Z()}function jt(){q()&&e()&&xt()}export{jt as default}
//# sourceMappingURL=composing-CMKoXn9o.js.map
