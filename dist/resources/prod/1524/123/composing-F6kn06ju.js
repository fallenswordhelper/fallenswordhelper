import{k as t,p as n,b as e,q as s,a9 as o,v as a,bZ as i,aS as c,d as r,K as l,ae as m,b_ as p,aN as u,m as f,z as d,c as g,s as b,aj as h,b$ as v,i as C,o as S,ag as E,c0 as N,a8 as k,c1 as x,e as j,bI as y,$,c2 as w,ai as L,g as q,aU as A,y as B}from"./calfSystem-wTzwei3t.js"
import{d as I,c as F}from"./daComposing-BPFXjILj.js"
import{s as T}from"./sum-DdZz7_s4.js"
import{a as _}from"./addCommas-C_h2HN8s.js"
import{c as P}from"./createInput-CrpQJ-TY.js"
import{c as Q}from"./createTable-CzF-CXSd.js"
import{i as H}from"./insertElementAfter-DuMo3Fbn.js"
import{p as G,s as M}from"./pubsub-CEpCDYaB.js"
import{r as R,g as U}from"./rnd-D_QmA-Fa.js"
import{r as z}from"./regExpGroups-B8v1pE-x.js"
import{n as K}from"./now-Cx4PsKjI.js"
import{i as O}from"./insertHtmlAfterBegin-Bzn5RmGv.js"
import{i as V}from"./insertHtmlAfterEnd-C7sg9qpO.js"
let X=[]
const Z=t=>t.map((({buffs:t,duration:n,id:e})=>({cost:Math.max(t.map((({level:t})=>t)).reduce(T,0)*n,5e3),id:e}))),D=[[(t,n)=>!t&&!n,()=>0],[(t,n)=>!t&&n,(t,n,e)=>e.remove()],[(t,n)=>t&&n,(t,n,e)=>o(`Cost: ${_(n)}`,e)],[(t,n)=>t&&!n,(t,n)=>a(t.parentNode,`<div class="fshBlue template-cost">Cost: ${_(n)}</div>`)]]
function J(t){const n=X.find((({id:n})=>n===Number(t.value)))?.cost,e=s(".template-cost",t.parentNode),o=D.find((([t])=>t(n,e)))
o&&o[1](t,n,e)}function W(t){/^composing-template-\d$/.test(t.target.id)&&J(t.target)}function Y(){const s=t("select[id^=composing-template-]:not(#composing-template-multi)",n())
s.length&&async function(t){const s=await I()
s?.s&&(X=Z(s.r.templates),t.forEach(J),e(n(),"change",W))}(s)}function tt(t,n){r("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${u}composing/${U(1,11)}_${U(1,51)}.png)`,r(`Creating '<span class="fshBold">${n}</span>' Potion`,t.children[2]),r("",t.children[3])}function nt(t){const n=t.parentNode
n&&(r('<div class="fshScs">Success</div>',n),tt(n.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===l('[id|="composing-template"]:not(#composing-template-multi)').length&&m(p,!1))}async function et(t){!function(t,n){const e=t.parentNode
e&&n&&(n.error?r(`<div class="fshScs">${n.error}</div>`,e):nt(t))}(t,await async function(t){const n=await i({cache:!1,dataType:"text",data:{cmd:"composing",subcmd:"createajax",template_id:t,fshrnd:R()}})
return c(n)??{error:"Server Error"}}(t.value))}function st(t,n){n.id=`proc-${n.id}`,r("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),et(n),G("quickcreate")}function ot(t,n){t.classList.add(`left-${n.toString()}`)}function at(t){ot(t,l(".quickCreate .sendLink").length)}function it(t){const n=t.target,{templateId:e}=n.dataset
e&&function(t,n){b("composing","FastComposeButton")
const e=l('[id|="composing-template"]:not(#composing-template-multi)')
if(!(e.length<t.value))for(let s=0;s<t.value;s+=1)e[s].value=n,st(e[s].nextElementSibling.nextElementSibling,e[s])}(n,e)}function ct(t,n,e,s){var a,i
return 0===s&&o(t[1],n.insertCell(-1)),C(n.insertCell(-1),(a=(s+1).toString(),i=t[0],P({className:"awesome orange",dataset:{templateId:i},type:"button",value:a}))),n}function rt(t,n,e){return t.forEach(g(ct,e,n.insertRow(-1))),n}function lt(t){return[t.value,t.text]}function mt(e,s,o){const a=function(t,n,e){const s=Q({id:"fshFastCompose"})
return ot(s,e),t.reduce(g(rt,n),s)}(t("#composing-template-multi option").map(lt),s,o)
C(e,a),S(n(),it),M("quickcreate",g(at,a))}function pt(t){b("composing","FastCompose"),a(t,"<br>")
const n=h("composing-potion-time",document),e=n.filter(v("ETA: n/a")).length
e>0?mt(t,n,e):a(t,"No open slots!")}function ut(t){const n=z(x,k(t))
if(n){const{h:t,m:e,s:s}=n
return 1e3*(3600*t+60*e+Number(s))+K()}return 0}function ft(t){m(p,t)}function dt(t){return F({subcmd:"collect",potion_id:t})}async function gt(t){const n=await j({cmd:"composing",subcmd:"collect",potion_id:t})
if(!n)return{s:!1}
const e=y(n)
return e.includes("collected")?{s:!0}:{s:!1,e:{message:e}}}function bt(t){const n=t.getAttribute("onclick").split("&")[2].split("=")[1]
O(t.parentNode,`[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${n}">Quick Collect</button></span> ]&nbsp;`)}const ht=t=>"BUTTON"===t.tagName&&"Quick Collect"===k(t)
function vt(t,n,e){r(e,t),t.classList.add(n)}async function Ct(t){b("composing","quickCollect")
const n=t.parentNode,e=t.value
var s;(s=n).nextElementSibling.disabled=!0,s.nextElementSibling.nextElementSibling.disabled=!0,r("",s),s.classList.add("fshSpinner")
const o=await function(t){return $(dt,gt,t)}(e)
!function(t,n){t.classList.remove("fshSpinner"),n.s?vt(t,"fshGreen","Collected"):vt(t,"fshRed","Error")}(n,o)}function St(t){ht(t.target)&&Ct(t.target)}function Et(t){V(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}const Nt=t=>"SPAN"===t.tagName&&"quickCreate"===t.className
function kt(t){const n=t.target.parentNode
Nt(n)&&function(t){const n=t.previousElementSibling.previousElementSibling
n&&"none"!==n.value&&(st(t,n),b("composing","QuickCreate"))}(n)}function xt(){!function(){if(!E.enableComposingAlert)return
const t=h("composing-potion-time",document),n=Math.min(...t.map(ut))
0===n?ft(!0):(ft(!1),m(N,n))}(),t("input[id^=create-]:not(#create-multi)",n()).forEach(Et),S(n(),kt),function(){if(!L("moveComposingButtons"))return
const t=q("composing-error-dialog")?.previousElementSibling
if(!t)return
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const e=A("composing-level",n())[0].parentNode
B(t,e)}(),function(){const t=s("#pCC div.centered")
a(t,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>')
const n=f({className:"centered"})
H(n,t)
const e=P({id:"fast-compose",type:"checkbox"})
H(e,t),d(e,"change",g(pt,n))}(),t('input[value="Collect Potion"]',n()).forEach(bt),S(n(),St),Y()}function jt(){w()&&n()&&xt()}export{jt as default}
//# sourceMappingURL=composing-F6kn06ju.js.map
