import{h as t,p as e,cA as n,b as s,q as o,k as a,a1 as i,aL as c,cz as r,bl as l,d as u,cB as p,ai as m,au as d,cC as f,bi as g,u as h,b5 as b,a5 as v,c as C,s as S,aA as E,cD as k,i as N,o as x,cE as y,ax as $,cF as L,a6 as A,l as j,cG as q,aI as B,cH as w,$ as I,e as T,cm as F,cI as H,az as P,g as Q,bo as _,a4 as z}from"./calfSystem-KFszEm2S.js"
import{s as D}from"./sum-DdZz7_s4.js"
import{c as G}from"./createInput-D4knQ_SJ.js"
import{c as M}from"./createTable-DpWzAauM.js"
import{r as R,g as O}from"./rnd-D_QmA-Fa.js"
import{i as U}from"./insertHtmlAfterBegin-CPPceD69.js"
import{i as J}from"./insertHtmlAfterEnd-F9ihJfxX.js"
let K=[]
const V=[[(t,e)=>!t&&!e,()=>0],[(t,e)=>!t&&e,(t,e,n)=>n.remove()],[(t,e)=>t&&e,(t,e,n)=>a(`Cost: ${c(e)}`,n)],[(t,e)=>t&&!e,(t,e)=>i(t.parentNode,`<div class="fshBlue template-cost">Cost: ${c(e)}</div>`)]]
function W(t){const e=K.find(({id:e})=>e===Number(t.value))?.cost,n=o(".template-cost",t.parentNode),s=V.find(([t])=>t(e,n))
s&&s[1](t,e,n)}function X(t){/^composing-template-\d$/.test(t.target.id)&&W(t.target)}async function Y(t){const o=await n()
var a
o?.s&&(a=o.r.templates,K=a.map(({buffs:t,duration:e,id:n})=>({cost:Math.max(t.map(({level:t})=>t).reduce(D,0)*e,5e3),id:n})),t.forEach(W),s(e(),"change",X))}function Z(t,e){u("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${g}composing/${O(1,11)}_${O(1,51)}.png)`,u(`Creating '<span class="fshBold">${e}</span>' Potion`,t.children[2]),u("",t.children[3])}function tt(t){const e=t.parentNode
e&&(u('<div class="fshScs">Success</div>',e),Z(e.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===m('[id|="composing-template"]:not(#composing-template-multi)').length&&d(f,!1))}async function et(t){!function(t,e){const n=t.parentNode
n&&e&&(e.error?u(`<div class="fshScs">${e.error}</div>`,n):tt(t))}(t,await async function(t){const e=await r({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:R()}})
return l(e)??{error:"Server Error"}}(t.value))}function nt(t,e){e.id=`proc-${e.id}`,u("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),et(e),p("quickcreate")}function st(t,e){t.classList.add(`left-${e.toString()}`)}function ot(t){st(t,m(".quickCreate .sendLink").length)}function at(t){const e=t.target,{templateId:n}=e.dataset
n&&function(t,e){S("composing","FastComposeButton")
const n=m('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<t.value))for(let s=0;s<t.value;s+=1)n[s].value=e,nt(n[s].nextElementSibling.nextElementSibling,n[s])}(e,n)}function it(t,e,n,s){var o,i
return 0===s&&a(t[1],e.insertCell(-1)),N(e.insertCell(-1),(o=(s+1).toString(),i=t[0],G({className:"awesome orange",dataset:{templateId:i},type:"button",value:o}))),e}function ct(t,e,n){return t.forEach(C(it,n,e.insertRow(-1))),e}function rt(t){return[t.value,t.text]}function lt(n,s,o){const a=function(t,e,n){const s=M({id:"fshFastCompose"})
return st(s,n),t.reduce(C(ct,e),s)}(t("#composing-template-multi option").map(rt),s,o)
N(n,a),x(e(),at),y("quickcreate",C(ot,a))}function ut(t){S("composing","FastCompose"),i(t,"<br>")
const e=E("composing-potion-time",document),n=e.filter(k("ETA: n/a")).length
n>0?lt(t,e,n):i(t,"No open slots!")}function pt(t){const{h:e,m:n,s:s}=A(q,j(t))
return e&&n&&s?1e3*(3600*e+60*n+Number(s))+B():0}function mt(t){d(f,t)}function dt(t){return w({subcmd:"collect",potion_id:t})}async function ft(t){const e=await T({cmd:"composing",subcmd:"collect",potion_id:t})
if(!e)return{s:!1}
const n=F(e)
return n.includes("collected")?{s:!0}:{s:!1,e:{message:n}}}function gt(t){const e=t.getAttribute("onclick").split("&")[2].split("=")[1]
U(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${e}">Quick Collect</button></span> ]&nbsp;`)}function ht(t,e,n){u(n,t),t.classList.add(e)}async function bt(t){S("composing","quickCollect")
const e=t.parentNode,n=t.value
var s;(s=e).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,u("",s),s.classList.add("fshSpinner")
const o=await function(t){return I(dt,ft,t)}(n)
!function(t,e){t.classList.remove("fshSpinner"),e.s?ht(t,"fshGreen","Collected"):ht(t,"fshRed","Error")}(e,o)}function vt(t){var e
"BUTTON"===(e=t.target).tagName&&"Quick Collect"===j(e)&&bt(t.target)}function Ct(t){J(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function St(t){const e=t.target.parentNode;(t=>"SPAN"===t.tagName&&"quickCreate"===t.className)(e)&&function(t){const e=t.previousElementSibling.previousElementSibling
e&&"none"!==e.value&&(nt(t,e),S("composing","QuickCreate"))}(e)}function Et(){!function(){if(!$.enableComposingAlert)return
const t=E("composing-potion-time",document),e=Math.min(...t.map(pt))
0===e?mt(!0):(mt(!1),d(L,e))}(),t("input[id^=create-]:not(#create-multi)",e()).forEach(Ct),x(e(),St),function(){if(!P("moveComposingButtons"))return
const t=Q("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const n=_("composing-level",e())[0].parentNode
z(t,n)}(),function(){const t=o("#pCC div.centered")
i(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const e=h({className:"centered"})
b(e,t)
const n=G({id:"fast-compose",type:"checkbox"})
b(n,t),v(n,"change",C(ut,e))}(),t('input[value="Collect Potion"]',e()).forEach(gt),x(e(),vt),function(){const n=t("select[id^=composing-template-]:not(#composing-template-multi)",e())
n.length&&Y(n)}()}function kt(){H()&&e()&&Et()}export{kt as default}
//# sourceMappingURL=composing-BkDHutM6.js.map
