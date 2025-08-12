import{k as t,p as n,cC as e,b as s,q as o,m as a,a3 as c,aN as i,cB as r,bk as l,e as u,cD as m,ak as p,aw as d,cE as f,bh as g,w as h,b4 as b,a7 as v,c as C,s as S,aC as k,cF as E,i as N,o as x,cG as y,az as $,cH as B,a8 as j,n as w,cI as L,aK as q,cJ as A,$ as F,j as I,cl as Q,cK as T,aB as P,g as _,bn as H,a6 as R}from"./calfSystem-BlPuMQGT.js"
import{s as G}from"./sum-DdZz7_s4.js"
import{c as K}from"./createInput-Da4kiVrz.js"
import{c as M}from"./createTable-Dx-GE8kY.js"
import{r as z,g as D}from"./rnd-D_QmA-Fa.js"
import{i as J}from"./insertHtmlAfterBegin-CRP0nRuH.js"
import{i as O}from"./insertHtmlAfterEnd-DO_1O_2f.js"
let U=[]
const V=t=>t.map((({buffs:t,duration:n,id:e})=>({cost:Math.max(t.map((({level:t})=>t)).reduce(G,0)*n,5e3),id:e}))),W=[[(t,n)=>!t&&!n,()=>0],[(t,n)=>!t&&n,(t,n,e)=>e.remove()],[(t,n)=>t&&n,(t,n,e)=>a(`Cost: ${i(n)}`,e)],[(t,n)=>t&&!n,(t,n)=>c(t.parentNode,`<div class="fshBlue template-cost">Cost: ${i(n)}</div>`)]]
function X(t){const n=U.find((({id:n})=>n===Number(t.value)))?.cost,e=o(".template-cost",t.parentNode),s=W.find((([t])=>t(n,e)))
s&&s[1](t,n,e)}function Y(t){/^composing-template-\d$/.test(t.target.id)&&X(t.target)}function Z(){const o=t("select[id^=composing-template-]:not(#composing-template-multi)",n())
o.length&&async function(t){const o=await e()
o?.s&&(U=V(o.r.templates),t.forEach(X),s(n(),"change",Y))}(o)}function tt(t,n){u("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${g}composing/${D(1,11)}_${D(1,51)}.png)`,u(`Creating '<span class="fshBold">${n}</span>' Potion`,t.children[2]),u("",t.children[3])}function nt(t){const n=t.parentNode
n&&(u('<div class="fshScs">Success</div>',n),tt(n.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===p('[id|="composing-template"]:not(#composing-template-multi)').length&&d(f,!1))}async function et(t){!function(t,n){const e=t.parentNode
e&&n&&(n.error?u(`<div class="fshScs">${n.error}</div>`,e):nt(t))}(t,await async function(t){const n=await r({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:z()}})
return l(n)??{error:"Server Error"}}(t.value))}function st(t,n){n.id=`proc-${n.id}`,u("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),et(n),m("quickcreate")}function ot(t,n){t.classList.add(`left-${n.toString()}`)}function at(t){ot(t,p(".quickCreate .sendLink").length)}function ct(t){const n=t.target,{templateId:e}=n.dataset
e&&function(t,n){S("composing","FastComposeButton")
const e=p('[id|="composing-template"]:not(#composing-template-multi)')
if(!(e.length<t.value))for(let s=0;s<t.value;s+=1)e[s].value=n,st(e[s].nextElementSibling.nextElementSibling,e[s])}(n,e)}function it(t,n,e,s){var o,c
return 0===s&&a(t[1],n.insertCell(-1)),N(n.insertCell(-1),(o=(s+1).toString(),c=t[0],K({className:"awesome orange",dataset:{templateId:c},type:"button",value:o}))),n}function rt(t,n,e){return t.forEach(C(it,e,n.insertRow(-1))),n}function lt(t){return[t.value,t.text]}function ut(e,s,o){const a=function(t,n,e){const s=M({id:"fshFastCompose"})
return ot(s,e),t.reduce(C(rt,n),s)}(t("#composing-template-multi option").map(lt),s,o)
N(e,a),x(n(),ct),y("quickcreate",C(at,a))}function mt(t){S("composing","FastCompose"),c(t,"<br>")
const n=k("composing-potion-time",document),e=n.filter(E("ETA: n/a")).length
e>0?ut(t,n,e):c(t,"No open slots!")}function pt(t){const{h:n,m:e,s:s}=j(L,w(t))
return n&&e&&s?1e3*(3600*n+60*e+Number(s))+q():0}function dt(t){d(f,t)}function ft(t){return A({subcmd:"collect",potion_id:t})}async function gt(t){const n=await I({cmd:"composing",subcmd:"collect",potion_id:t})
if(!n)return{s:!1}
const e=Q(n)
return e.includes("collected")?{s:!0}:{s:!1,e:{message:e}}}function ht(t){const n=t.getAttribute("onclick").split("&")[2].split("=")[1]
J(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${n}">Quick Collect</button></span> ]&nbsp;`)}const bt=t=>"BUTTON"===t.tagName&&"Quick Collect"===w(t)
function vt(t,n,e){u(e,t),t.classList.add(n)}async function Ct(t){S("composing","quickCollect")
const n=t.parentNode,e=t.value
var s;(s=n).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,u("",s),s.classList.add("fshSpinner")
const o=await function(t){return F(ft,gt,t)}(e)
!function(t,n){t.classList.remove("fshSpinner"),n.s?vt(t,"fshGreen","Collected"):vt(t,"fshRed","Error")}(n,o)}function St(t){bt(t.target)&&Ct(t.target)}function kt(t){O(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}const Et=t=>"SPAN"===t.tagName&&"quickCreate"===t.className
function Nt(t){const n=t.target.parentNode
Et(n)&&function(t){const n=t.previousElementSibling.previousElementSibling
n&&"none"!==n.value&&(st(t,n),S("composing","QuickCreate"))}(n)}function xt(){!function(){if(!$.enableComposingAlert)return
const t=k("composing-potion-time",document),n=Math.min(...t.map(pt))
0===n?dt(!0):(dt(!1),d(B,n))}(),t("input[id^=create-]:not(#create-multi)",n()).forEach(kt),x(n(),Nt),function(){if(!P("moveComposingButtons"))return
const t=_("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const e=H("composing-level",n())[0].parentNode
R(t,e)}(),function(){const t=o("#pCC div.centered")
c(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const n=h({className:"centered"})
b(n,t)
const e=K({id:"fast-compose",type:"checkbox"})
b(e,t),v(e,"change",C(mt,n))}(),t('input[value="Collect Potion"]',n()).forEach(ht),x(n(),St),Z()}function yt(){T()&&n()&&xt()}export{yt as default}
//# sourceMappingURL=composing-C99ML4ax.js.map
