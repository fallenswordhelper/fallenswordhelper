import{h as t,p as n,cy as e,b as s,q as o,k as a,a1 as i,aL as c,cx as r,bl as l,d as u,cz as p,ai as m,au as d,cA as f,bi as g,u as h,b5 as b,a5 as v,c as C,s as S,aA as E,cB as k,i as N,o as x,cC as y,ax as $,cD as L,a6 as A,l as j,cE as q,aI as B,cF as w,$ as I,e as F,cm as T,cG as P,az as Q,g as _,bo as G,a4 as R}from"./calfSystem-CT1aM4VG.js"
import{s as z}from"./sum-DdZz7_s4.js"
import{c as H}from"./createInput-CTW03HuX.js"
import{c as M}from"./createTable-BT3sfAe8.js"
import{r as D,g as O}from"./rnd-D_QmA-Fa.js"
import{i as U}from"./insertHtmlAfterBegin-DfEq9-0f.js"
import{i as J}from"./insertHtmlAfterEnd-gTgXAdJt.js"
let K=[]
const V=t=>t.map((({buffs:t,duration:n,id:e})=>({cost:Math.max(t.map((({level:t})=>t)).reduce(z,0)*n,5e3),id:e}))),W=[[(t,n)=>!t&&!n,()=>0],[(t,n)=>!t&&n,(t,n,e)=>e.remove()],[(t,n)=>t&&n,(t,n,e)=>a(`Cost: ${c(n)}`,e)],[(t,n)=>t&&!n,(t,n)=>i(t.parentNode,`<div class="fshBlue template-cost">Cost: ${c(n)}</div>`)]]
function X(t){const n=K.find((({id:n})=>n===Number(t.value)))?.cost,e=o(".template-cost",t.parentNode),s=W.find((([t])=>t(n,e)))
s&&s[1](t,n,e)}function Y(t){/^composing-template-\d$/.test(t.target.id)&&X(t.target)}function Z(){const o=t("select[id^=composing-template-]:not(#composing-template-multi)",n())
o.length&&async function(t){const o=await e()
o?.s&&(K=V(o.r.templates),t.forEach(X),s(n(),"change",Y))}(o)}function tt(t,n){u("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${g}composing/${O(1,11)}_${O(1,51)}.png)`,u(`Creating '<span class="fshBold">${n}</span>' Potion`,t.children[2]),u("",t.children[3])}function nt(t){const n=t.parentNode
n&&(u('<div class="fshScs">Success</div>',n),tt(n.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===m('[id|="composing-template"]:not(#composing-template-multi)').length&&d(f,!1))}async function et(t){!function(t,n){const e=t.parentNode
e&&n&&(n.error?u(`<div class="fshScs">${n.error}</div>`,e):nt(t))}(t,await async function(t){const n=await r({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:D()}})
return l(n)??{error:"Server Error"}}(t.value))}function st(t,n){n.id=`proc-${n.id}`,u("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),et(n),p("quickcreate")}function ot(t,n){t.classList.add(`left-${n.toString()}`)}function at(t){ot(t,m(".quickCreate .sendLink").length)}function it(t){const n=t.target,{templateId:e}=n.dataset
e&&function(t,n){S("composing","FastComposeButton")
const e=m('[id|="composing-template"]:not(#composing-template-multi)')
if(!(e.length<t.value))for(let s=0;s<t.value;s+=1)e[s].value=n,st(e[s].nextElementSibling.nextElementSibling,e[s])}(n,e)}function ct(t,n,e,s){var o,i
return 0===s&&a(t[1],n.insertCell(-1)),N(n.insertCell(-1),(o=(s+1).toString(),i=t[0],H({className:"awesome orange",dataset:{templateId:i},type:"button",value:o}))),n}function rt(t,n,e){return t.forEach(C(ct,e,n.insertRow(-1))),n}function lt(t){return[t.value,t.text]}function ut(e,s,o){const a=function(t,n,e){const s=M({id:"fshFastCompose"})
return ot(s,e),t.reduce(C(rt,n),s)}(t("#composing-template-multi option").map(lt),s,o)
N(e,a),x(n(),it),y("quickcreate",C(at,a))}function pt(t){S("composing","FastCompose"),i(t,"<br>")
const n=E("composing-potion-time",document),e=n.filter(k("ETA: n/a")).length
e>0?ut(t,n,e):i(t,"No open slots!")}function mt(t){const{h:n,m:e,s:s}=A(q,j(t))
return n&&e&&s?1e3*(3600*n+60*e+Number(s))+B():0}function dt(t){d(f,t)}function ft(t){return w({subcmd:"collect",potion_id:t})}async function gt(t){const n=await F({cmd:"composing",subcmd:"collect",potion_id:t})
if(!n)return{s:!1}
const e=T(n)
return e.includes("collected")?{s:!0}:{s:!1,e:{message:e}}}function ht(t){const n=t.getAttribute("onclick").split("&")[2].split("=")[1]
U(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${n}">Quick Collect</button></span> ]&nbsp;`)}const bt=t=>"BUTTON"===t.tagName&&"Quick Collect"===j(t)
function vt(t,n,e){u(e,t),t.classList.add(n)}async function Ct(t){S("composing","quickCollect")
const n=t.parentNode,e=t.value
var s;(s=n).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,u("",s),s.classList.add("fshSpinner")
const o=await function(t){return I(ft,gt,t)}(e)
!function(t,n){t.classList.remove("fshSpinner"),n.s?vt(t,"fshGreen","Collected"):vt(t,"fshRed","Error")}(n,o)}function St(t){bt(t.target)&&Ct(t.target)}function Et(t){J(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}const kt=t=>"SPAN"===t.tagName&&"quickCreate"===t.className
function Nt(t){const n=t.target.parentNode
kt(n)&&function(t){const n=t.previousElementSibling.previousElementSibling
n&&"none"!==n.value&&(st(t,n),S("composing","QuickCreate"))}(n)}function xt(){!function(){if(!$.enableComposingAlert)return
const t=E("composing-potion-time",document),n=Math.min(...t.map(mt))
0===n?dt(!0):(dt(!1),d(L,n))}(),t("input[id^=create-]:not(#create-multi)",n()).forEach(Et),x(n(),Nt),function(){if(!Q("moveComposingButtons"))return
const t=_("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const e=G("composing-level",n())[0].parentNode
R(t,e)}(),function(){const t=o("#pCC div.centered")
i(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const n=h({className:"centered"})
b(n,t)
const e=H({id:"fast-compose",type:"checkbox"})
b(e,t),v(e,"change",C(pt,n))}(),t('input[value="Collect Potion"]',n()).forEach(ht),x(n(),St),Z()}function yt(){P()&&n()&&xt()}export{yt as default}
//# sourceMappingURL=composing-BuvBH4uk.js.map
