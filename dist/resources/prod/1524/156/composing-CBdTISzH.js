import{h as t,p as n,cB as e,b as s,q as o,k as a,a2 as i,aM as c,cA as r,bm as l,d as u,cC as p,aj as m,av as d,cD as f,bj as g,u as h,b6 as b,a6 as v,c as C,s as S,aB as E,cE as k,i as N,o as x,cF as y,ay as $,cG as j,a7 as A,l as B,cH as L,aJ as q,cI as w,$ as I,e as F,cn as P,cJ as T,aA as Q,g as _,bp as H,a5 as M}from"./calfSystem-79LsojAC.js"
import{s as D}from"./sum-DdZz7_s4.js"
import{c as G}from"./createInput-7MlQDlWD.js"
import{c as J}from"./createTable-BhzoxFRT.js"
import{r as O,g as R}from"./rnd-D_QmA-Fa.js"
import{i as z}from"./insertHtmlAfterBegin-BEWmbMGu.js"
import{i as U}from"./insertHtmlAfterEnd-Cc8z8uuA.js"
let K=[]
const V=[[(t,n)=>!t&&!n,()=>0],[(t,n)=>!t&&n,(t,n,e)=>e.remove()],[(t,n)=>t&&n,(t,n,e)=>a(`Cost: ${c(n)}`,e)],[(t,n)=>t&&!n,(t,n)=>i(t.parentNode,`<div class="fshBlue template-cost">Cost: ${c(n)}</div>`)]]
function W(t){const n=K.find(({id:n})=>n===Number(t.value))?.cost,e=o(".template-cost",t.parentNode),s=V.find(([t])=>t(n,e))
s&&s[1](t,n,e)}function X(t){/^composing-template-\d$/.test(t.target.id)&&W(t.target)}async function Y(t){const o=await e()
var a
o?.s&&(a=o.r.templates,K=a.map(({buffs:t,duration:n,id:e})=>({cost:Math.max(t.map(({level:t})=>t).reduce(D,0)*n,5e3),id:e})),t.forEach(W),s(n(),"change",X))}function Z(t,n){u("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${g}composing/${R(1,11)}_${R(1,51)}.png)`,u(`Creating '<span class="fshBold">${n}</span>' Potion`,t.children[2]),u("",t.children[3])}function tt(t){const n=t.parentNode
n&&(u('<div class="fshScs">Success</div>',n),Z(n.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===m('[id|="composing-template"]:not(#composing-template-multi)').length&&d(f,!1))}async function nt(t){!function(t,n){const e=t.parentNode
e&&n&&(n.error?u(`<div class="fshScs">${n.error}</div>`,e):tt(t))}(t,await async function(t){const n=await r({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:O()}})
return l(n)??{error:"Server Error"}}(t.value))}function et(t,n){n.id=`proc-${n.id}`,u("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),nt(n),p("quickcreate")}function st(t,n){t.classList.add(`left-${n.toString()}`)}function ot(t){st(t,m(".quickCreate .sendLink").length)}function at(t){const n=t.target,{templateId:e}=n.dataset
e&&function(t,n){S("composing","FastComposeButton")
const e=m('[id|="composing-template"]:not(#composing-template-multi)')
if(!(e.length<t.value))for(let s=0;s<t.value;s+=1)e[s].value=n,et(e[s].nextElementSibling.nextElementSibling,e[s])}(n,e)}function it(t,n,e,s){var o,i
return 0===s&&a(t[1],n.insertCell(-1)),N(n.insertCell(-1),(o=(s+1).toString(),i=t[0],G({className:"awesome orange",dataset:{templateId:i},type:"button",value:o}))),n}function ct(t,n,e){return t.forEach(C(it,e,n.insertRow(-1))),n}function rt(t){return[t.value,t.text]}function lt(e,s,o){const a=function(t,n,e){const s=J({id:"fshFastCompose"})
return st(s,e),t.reduce(C(ct,n),s)}(t("#composing-template-multi option").map(rt),s,o)
N(e,a),x(n(),at),y("quickcreate",C(ot,a))}function ut(t){S("composing","FastCompose"),i(t,"<br>")
const n=E("composing-potion-time",document),e=n.filter(k("ETA: n/a")).length
e>0?lt(t,n,e):i(t,"No open slots!")}function pt(t){const{h:n,m:e,s:s}=A(L,B(t))
return n&&e&&s?1e3*(3600*n+60*e+Number(s))+q():0}function mt(t){d(f,t)}function dt(t){return w({subcmd:"collect",potion_id:t})}async function ft(t){const n=await F({cmd:"composing",subcmd:"collect",potion_id:t})
if(!n)return{s:!1}
const e=P(n)
return e.includes("collected")?{s:!0}:{s:!1,e:{message:e}}}function gt(t){const n=t.getAttribute("onclick").split("&")[2].split("=")[1]
z(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${n}">Quick Collect</button></span> ]&nbsp;`)}function ht(t,n,e){u(e,t),t.classList.add(n)}async function bt(t){S("composing","quickCollect")
const n=t.parentNode,e=t.value
var s;(s=n).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,u("",s),s.classList.add("fshSpinner")
const o=await function(t){return I(dt,ft,t)}(e)
!function(t,n){t.classList.remove("fshSpinner"),n.s?ht(t,"fshGreen","Collected"):ht(t,"fshRed","Error")}(n,o)}function vt(t){var n
"BUTTON"===(n=t.target).tagName&&"Quick Collect"===B(n)&&bt(t.target)}function Ct(t){U(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function St(t){const n=t.target.parentNode;(t=>"SPAN"===t.tagName&&"quickCreate"===t.className)(n)&&function(t){const n=t.previousElementSibling.previousElementSibling
n&&"none"!==n.value&&(et(t,n),S("composing","QuickCreate"))}(n)}function Et(){!function(){if(!$.enableComposingAlert)return
const t=E("composing-potion-time",document),n=Math.min(...t.map(pt))
0===n?mt(!0):(mt(!1),d(j,n))}(),t("input[id^=create-]:not(#create-multi)",n()).forEach(Ct),x(n(),St),function(){if(!Q("moveComposingButtons"))return
const t=_("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const e=H("composing-level",n())[0].parentNode
M(t,e)}(),function(){const t=o("#pCC div.centered")
i(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const n=h({className:"centered"})
b(n,t)
const e=G({id:"fast-compose",type:"checkbox"})
b(e,t),v(e,"change",C(ut,n))}(),t('input[value="Collect Potion"]',n()).forEach(gt),x(n(),vt),function(){const e=t("select[id^=composing-template-]:not(#composing-template-multi)",n())
e.length&&Y(e)}()}function kt(){T()&&n()&&Et()}export{kt as default}
//# sourceMappingURL=composing-CBdTISzH.js.map
