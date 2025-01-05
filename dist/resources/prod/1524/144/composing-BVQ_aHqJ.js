import{k as t,p as n,cu as e,b as s,q as o,ad as a,w as i,ct as c,ba as r,d as l,N as u,aj as m,cv as p,b5 as d,m as f,aT as g,A as h,c as b,s as v,ap as C,cw as S,i as N,o as k,am as E,cx as x,B as y,ac as $,cy as j,ay as L,cz as w,e as A,cd as B,$ as q,cA as T,ao as I,g as F,bd as P,z as Q}from"./calfSystem-fMW-YMyF.js"
import{s as _}from"./sum-DdZz7_s4.js"
import{a as H}from"./addCommas-C_h2HN8s.js"
import{c as z}from"./createInput-CBvBhRjz.js"
import{c as M}from"./createTable-BlxaNzLX.js"
import{p as R,s as G}from"./pubsub-AFcBDT-Y.js"
import{r as O,g as U}from"./rnd-D_QmA-Fa.js"
import{i as W}from"./insertHtmlAfterBegin-qcT2rtgA.js"
import{i as X}from"./insertHtmlAfterEnd-BnGOLW2a.js"
let D=[]
const J=t=>t.map((({buffs:t,duration:n,id:e})=>({cost:Math.max(t.map((({level:t})=>t)).reduce(_,0)*n,5e3),id:e}))),K=[[(t,n)=>!t&&!n,()=>0],[(t,n)=>!t&&n,(t,n,e)=>e.remove()],[(t,n)=>t&&n,(t,n,e)=>a(`Cost: ${H(n)}`,e)],[(t,n)=>t&&!n,(t,n)=>i(t.parentNode,`<div class="fshBlue template-cost">Cost: ${H(n)}</div>`)]]
function V(t){const n=D.find((({id:n})=>n===Number(t.value)))?.cost,e=o(".template-cost",t.parentNode),s=K.find((([t])=>t(n,e)))
s&&s[1](t,n,e)}function Y(t){/^composing-template-\d$/.test(t.target.id)&&V(t.target)}function Z(){const o=t("select[id^=composing-template-]:not(#composing-template-multi)",n())
o.length&&async function(t){const o=await e()
o?.s&&(D=J(o.r.templates),t.forEach(V),s(n(),"change",Y))}(o)}function tt(t,n){l("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${d}composing/${U(1,11)}_${U(1,51)}.png)`,l(`Creating '<span class="fshBold">${n}</span>' Potion`,t.children[2]),l("",t.children[3])}function nt(t){const n=t.parentNode
n&&(l('<div class="fshScs">Success</div>',n),tt(n.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===u('[id|="composing-template"]:not(#composing-template-multi)').length&&m(p,!1))}async function et(t){!function(t,n){const e=t.parentNode
e&&n&&(n.error?l(`<div class="fshScs">${n.error}</div>`,e):nt(t))}(t,await async function(t){const n=await c({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:O()}})
return r(n)??{error:"Server Error"}}(t.value))}function st(t,n){n.id=`proc-${n.id}`,l("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),et(n),R("quickcreate")}function ot(t,n){t.classList.add(`left-${n.toString()}`)}function at(t){ot(t,u(".quickCreate .sendLink").length)}function it(t){const n=t.target,{templateId:e}=n.dataset
e&&function(t,n){v("composing","FastComposeButton")
const e=u('[id|="composing-template"]:not(#composing-template-multi)')
if(!(e.length<t.value))for(let s=0;s<t.value;s+=1)e[s].value=n,st(e[s].nextElementSibling.nextElementSibling,e[s])}(n,e)}function ct(t,n,e,s){var o,i
return 0===s&&a(t[1],n.insertCell(-1)),N(n.insertCell(-1),(o=(s+1).toString(),i=t[0],z({className:"awesome orange",dataset:{templateId:i},type:"button",value:o}))),n}function rt(t,n,e){return t.forEach(b(ct,e,n.insertRow(-1))),n}function lt(t){return[t.value,t.text]}function ut(e,s,o){const a=function(t,n,e){const s=M({id:"fshFastCompose"})
return ot(s,e),t.reduce(b(rt,n),s)}(t("#composing-template-multi option").map(lt),s,o)
N(e,a),k(n(),it),G("quickcreate",b(at,a))}function mt(t){v("composing","FastCompose"),i(t,"<br>")
const n=C("composing-potion-time",document),e=n.filter(S("ETA: n/a")).length
e>0?ut(t,n,e):i(t,"No open slots!")}function pt(t){const{h:n,m:e,s:s}=y(j,$(t))
return n&&e&&s?1e3*(3600*n+60*e+Number(s))+L():0}function dt(t){m(p,t)}function ft(t){return w({subcmd:"collect",potion_id:t})}async function gt(t){const n=await A({cmd:"composing",subcmd:"collect",potion_id:t})
if(!n)return{s:!1}
const e=B(n)
return e.includes("collected")?{s:!0}:{s:!1,e:{message:e}}}function ht(t){const n=t.getAttribute("onclick").split("&")[2].split("=")[1]
W(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${n}">Quick Collect</button></span> ]&nbsp;`)}const bt=t=>"BUTTON"===t.tagName&&"Quick Collect"===$(t)
function vt(t,n,e){l(e,t),t.classList.add(n)}async function Ct(t){v("composing","quickCollect")
const n=t.parentNode,e=t.value
var s;(s=n).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,l("",s),s.classList.add("fshSpinner")
const o=await function(t){return q(ft,gt,t)}(e)
!function(t,n){t.classList.remove("fshSpinner"),n.s?vt(t,"fshGreen","Collected"):vt(t,"fshRed","Error")}(n,o)}function St(t){bt(t.target)&&Ct(t.target)}function Nt(t){X(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}const kt=t=>"SPAN"===t.tagName&&"quickCreate"===t.className
function Et(t){const n=t.target.parentNode
kt(n)&&function(t){const n=t.previousElementSibling.previousElementSibling
n&&"none"!==n.value&&(st(t,n),v("composing","QuickCreate"))}(n)}function xt(){!function(){if(!E.enableComposingAlert)return
const t=C("composing-potion-time",document),n=Math.min(...t.map(pt))
0===n?dt(!0):(dt(!1),m(x,n))}(),t("input[id^=create-]:not(#create-multi)",n()).forEach(Nt),k(n(),Et),function(){if(!I("moveComposingButtons"))return
const t=F("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const e=P("composing-level",n())[0].parentNode
Q(t,e)}(),function(){const t=o("#pCC div.centered")
i(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const n=f({className:"centered"})
g(n,t)
const e=z({id:"fast-compose",type:"checkbox"})
g(e,t),h(e,"change",b(mt,n))}(),t('input[value="Collect Potion"]',n()).forEach(ht),k(n(),St),Z()}function yt(){T()&&n()&&xt()}export{yt as default}
//# sourceMappingURL=composing-BVQ_aHqJ.js.map
