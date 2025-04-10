import{n as t,p as e,cv as n,c as s,q as o,ab as a,z as i,aB as c,cu as r,bb as l,h as u,cw as p,Q as m,aj as d,cx as f,b8 as g,u as h,aX as b,D as v,e as C,s as S,ap as E,cy as k,i as N,o as x,cz as y,am as $,cA as L,E as j,aa as B,cB as q,ay as w,cC as A,$ as I,k as Q,ce as T,cD as F,ao as P,g as _,be as z,C as D}from"./calfSystem-BGOTz8de.js"
import{s as H}from"./sum-DdZz7_s4.js"
import{c as M}from"./createInput-DtY3IfhY.js"
import{c as R}from"./createTable-C-HLpG87.js"
import{r as G,g as K}from"./rnd-D_QmA-Fa.js"
import{i as O}from"./insertHtmlAfterBegin-DcdSCBOW.js"
import{i as U}from"./insertHtmlAfterEnd-CjhYSrOa.js"
let X=[]
const J=t=>t.map((({buffs:t,duration:e,id:n})=>({cost:Math.max(t.map((({level:t})=>t)).reduce(H,0)*e,5e3),id:n}))),V=[[(t,e)=>!t&&!e,()=>0],[(t,e)=>!t&&e,(t,e,n)=>n.remove()],[(t,e)=>t&&e,(t,e,n)=>a(`Cost: ${c(e)}`,n)],[(t,e)=>t&&!e,(t,e)=>i(t.parentNode,`<div class="fshBlue template-cost">Cost: ${c(e)}</div>`)]]
function W(t){const e=X.find((({id:e})=>e===Number(t.value)))?.cost,n=o(".template-cost",t.parentNode),s=V.find((([t])=>t(e,n)))
s&&s[1](t,e,n)}function Y(t){/^composing-template-\d$/.test(t.target.id)&&W(t.target)}function Z(){const o=t("select[id^=composing-template-]:not(#composing-template-multi)",e())
o.length&&async function(t){const o=await n()
o?.s&&(X=J(o.r.templates),t.forEach(W),s(e(),"change",Y))}(o)}function tt(t,e){u("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${g}composing/${K(1,11)}_${K(1,51)}.png)`,u(`Creating '<span class="fshBold">${e}</span>' Potion`,t.children[2]),u("",t.children[3])}function et(t){const e=t.parentNode
e&&(u('<div class="fshScs">Success</div>',e),tt(e.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===m('[id|="composing-template"]:not(#composing-template-multi)').length&&d(f,!1))}async function nt(t){!function(t,e){const n=t.parentNode
n&&e&&(e.error?u(`<div class="fshScs">${e.error}</div>`,n):et(t))}(t,await async function(t){const e=await r({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:G()}})
return l(e)??{error:"Server Error"}}(t.value))}function st(t,e){e.id=`proc-${e.id}`,u("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),nt(e),p("quickcreate")}function ot(t,e){t.classList.add(`left-${e.toString()}`)}function at(t){ot(t,m(".quickCreate .sendLink").length)}function it(t){const e=t.target,{templateId:n}=e.dataset
n&&function(t,e){S("composing","FastComposeButton")
const n=m('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<t.value))for(let s=0;s<t.value;s+=1)n[s].value=e,st(n[s].nextElementSibling.nextElementSibling,n[s])}(e,n)}function ct(t,e,n,s){var o,i
return 0===s&&a(t[1],e.insertCell(-1)),N(e.insertCell(-1),(o=(s+1).toString(),i=t[0],M({className:"awesome orange",dataset:{templateId:i},type:"button",value:o}))),e}function rt(t,e,n){return t.forEach(C(ct,n,e.insertRow(-1))),e}function lt(t){return[t.value,t.text]}function ut(n,s,o){const a=function(t,e,n){const s=R({id:"fshFastCompose"})
return ot(s,n),t.reduce(C(rt,e),s)}(t("#composing-template-multi option").map(lt),s,o)
N(n,a),x(e(),it),y("quickcreate",C(at,a))}function pt(t){S("composing","FastCompose"),i(t,"<br>")
const e=E("composing-potion-time",document),n=e.filter(k("ETA: n/a")).length
n>0?ut(t,e,n):i(t,"No open slots!")}function mt(t){const{h:e,m:n,s:s}=j(q,B(t))
return e&&n&&s?1e3*(3600*e+60*n+Number(s))+w():0}function dt(t){d(f,t)}function ft(t){return A({subcmd:"collect",potion_id:t})}async function gt(t){const e=await Q({cmd:"composing",subcmd:"collect",potion_id:t})
if(!e)return{s:!1}
const n=T(e)
return n.includes("collected")?{s:!0}:{s:!1,e:{message:n}}}function ht(t){const e=t.getAttribute("onclick").split("&")[2].split("=")[1]
O(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${e}">Quick Collect</button></span> ]&nbsp;`)}const bt=t=>"BUTTON"===t.tagName&&"Quick Collect"===B(t)
function vt(t,e,n){u(n,t),t.classList.add(e)}async function Ct(t){S("composing","quickCollect")
const e=t.parentNode,n=t.value
var s;(s=e).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,u("",s),s.classList.add("fshSpinner")
const o=await function(t){return I(ft,gt,t)}(n)
!function(t,e){t.classList.remove("fshSpinner"),e.s?vt(t,"fshGreen","Collected"):vt(t,"fshRed","Error")}(e,o)}function St(t){bt(t.target)&&Ct(t.target)}function Et(t){U(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}const kt=t=>"SPAN"===t.tagName&&"quickCreate"===t.className
function Nt(t){const e=t.target.parentNode
kt(e)&&function(t){const e=t.previousElementSibling.previousElementSibling
e&&"none"!==e.value&&(st(t,e),S("composing","QuickCreate"))}(e)}function xt(){!function(){if(!$.enableComposingAlert)return
const t=E("composing-potion-time",document),e=Math.min(...t.map(mt))
0===e?dt(!0):(dt(!1),d(L,e))}(),t("input[id^=create-]:not(#create-multi)",e()).forEach(Et),x(e(),Nt),function(){if(!P("moveComposingButtons"))return
const t=_("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const n=z("composing-level",e())[0].parentNode
D(t,n)}(),function(){const t=o("#pCC div.centered")
i(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const e=h({className:"centered"})
b(e,t)
const n=M({id:"fast-compose",type:"checkbox"})
b(n,t),v(n,"change",C(pt,e))}(),t('input[value="Collect Potion"]',e()).forEach(ht),x(e(),St),Z()}function yt(){F()&&e()&&xt()}export{yt as default}
//# sourceMappingURL=composing-9r0ze18W.js.map
