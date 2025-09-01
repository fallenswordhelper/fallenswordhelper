import{h as t,p as e,cF as n,b as s,q as o,k as a,a2 as i,aN as c,cE as r,bo as l,d as u,cG as p,aj as m,av as d,cH as f,bl as g,u as h,b7 as b,a6 as v,c as C,s as S,aB as N,cI as E,i as k,o as x,cJ as y,ay as $,cK as L,a7 as j,l as q,cL as A,aK as B,cM as w,$ as I,e as T,cp as F,cN as P,aA as Q,g as _,br as G,a5 as H}from"./calfSystem-CQOGdqPv.js"
import{s as M}from"./sum-DdZz7_s4.js"
import{c as K}from"./createInput-CL-XaKKe.js"
import{c as R}from"./createTable-ZYcS2hxf.js"
import{r as J,g as O}from"./rnd-D_QmA-Fa.js"
import{i as U}from"./insertHtmlAfterBegin-DTotz0_m.js"
import{i as z}from"./insertHtmlAfterEnd-BB5pBx1-.js"
let D=[]
const V=[[(t,e)=>!t&&!e,()=>0],[(t,e)=>!t&&e,(t,e,n)=>n.remove()],[(t,e)=>t&&e,(t,e,n)=>a(`Cost: ${c(e)}`,n)],[(t,e)=>t&&!e,(t,e)=>i(t.parentNode,`<div class="fshBlue template-cost">Cost: ${c(e)}</div>`)]]
function W(t){const e=D.find(({id:e})=>e===Number(t.value))?.cost,n=o(".template-cost",t.parentNode),s=V.find(([t])=>t(e,n))
s&&s[1](t,e,n)}function X(t){/^composing-template-\d$/.test(t.target.id)&&W(t.target)}async function Y(t){const o=await n()
var a
o?.s&&(a=o.r.templates,D=a.map(({buffs:t,duration:e,id:n})=>({cost:Math.max(t.map(({level:t})=>t).reduce(M,0)*e,5e3),id:n})),t.forEach(W),s(e(),"change",X))}function Z(t,e){u("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${g}composing/${O(1,11)}_${O(1,51)}.png)`,u(`Creating '<span class="fshBold">${e}</span>' Potion`,t.children[2]),u("",t.children[3])}function tt(t){const e=t.parentNode
e&&(u('<div class="fshScs">Success</div>',e),Z(e.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===m('[id|="composing-template"]:not(#composing-template-multi)').length&&d(f,!1))}async function et(t){!function(t,e){const n=t.parentNode
n&&e&&(e.error?u(`<div class="fshScs">${e.error}</div>`,n):tt(t))}(t,await async function(t){const e=await r({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:J()}})
return l(e)??{error:"Server Error"}}(t.value))}function nt(t,e){e.id=`proc-${e.id}`,u("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),et(e),p("quickcreate")}function st(t,e){t.classList.add(`left-${e.toString()}`)}function ot(t){st(t,m(".quickCreate .sendLink").length)}function at(t){const e=t.target,{templateId:n}=e.dataset
n&&function(t,e){S("composing","FastComposeButton")
const n=m('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<t.value))for(let s=0;s<t.value;s+=1)n[s].value=e,nt(n[s].nextElementSibling.nextElementSibling,n[s])}(e,n)}function it(t,e,n,s){var o,i
return 0===s&&a(t[1],e.insertCell(-1)),k(e.insertCell(-1),(o=(s+1).toString(),i=t[0],K({className:"awesome orange",dataset:{templateId:i},type:"button",value:o}))),e}function ct(t,e,n){return t.forEach(C(it,n,e.insertRow(-1))),e}function rt(t){return[t.value,t.text]}function lt(n,s,o){const a=function(t,e,n){const s=R({id:"fshFastCompose"})
return st(s,n),t.reduce(C(ct,e),s)}(t("#composing-template-multi option").map(rt),s,o)
k(n,a),x(e(),at),y("quickcreate",C(ot,a))}function ut(t){S("composing","FastCompose"),i(t,"<br>")
const e=N("composing-potion-time",document),n=e.filter(E("ETA: n/a")).length
n>0?lt(t,e,n):i(t,"No open slots!")}function pt(t){const{h:e,m:n,s:s}=j(A,q(t))
return e&&n&&s?1e3*(3600*e+60*n+Number(s))+B():0}function mt(t){d(f,t)}function dt(t){return w({subcmd:"collect",potion_id:t})}async function ft(t){const e=await T({cmd:"composing",subcmd:"collect",potion_id:t})
if(!e)return{s:!1}
const n=F(e)
return n.includes("collected")?{s:!0}:{s:!1,e:{message:n}}}function gt(t){const e=t.getAttribute("onclick").split("&")[2].split("=")[1]
U(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${e}">Quick Collect</button></span> ]&nbsp;`)}function ht(t,e,n){u(n,t),t.classList.add(e)}async function bt(t){S("composing","quickCollect")
const e=t.parentNode,n=t.value
var s;(s=e).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,u("",s),s.classList.add("fshSpinner")
const o=await function(t){return I(dt,ft,t)}(n)
!function(t,e){t.classList.remove("fshSpinner"),e.s?ht(t,"fshGreen","Collected"):ht(t,"fshRed","Error")}(e,o)}function vt(t){var e
"BUTTON"===(e=t.target).tagName&&"Quick Collect"===q(e)&&bt(t.target)}function Ct(t){z(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function St(t){const e=t.target.parentNode;(t=>"SPAN"===t.tagName&&"quickCreate"===t.className)(e)&&function(t){const e=t.previousElementSibling.previousElementSibling
e&&"none"!==e.value&&(nt(t,e),S("composing","QuickCreate"))}(e)}function Nt(){!function(){if(!$.enableComposingAlert)return
const t=N("composing-potion-time",document),e=Math.min(...t.map(pt))
0===e?mt(!0):(mt(!1),d(L,e))}(),t("input[id^=create-]:not(#create-multi)",e()).forEach(Ct),x(e(),St),function(){if(!Q("moveComposingButtons"))return
const t=_("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const n=G("composing-level",e())[0].parentNode
H(t,n)}(),function(){const t=o("#pCC div.centered")
i(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const e=h({className:"centered"})
b(e,t)
const n=K({id:"fast-compose",type:"checkbox"})
b(n,t),v(n,"change",C(ut,e))}(),t('input[value="Collect Potion"]',e()).forEach(gt),x(e(),vt),function(){const n=t("select[id^=composing-template-]:not(#composing-template-multi)",e())
n.length&&Y(n)}()}function Et(){P()&&e()&&Nt()}export{Et as default}
//# sourceMappingURL=composing-DMt8YtUk.js.map
