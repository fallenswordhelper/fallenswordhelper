import{$ as e,x as s,u as t,A as a,bO as n,K as r,L as c,aA as o,s as i,H as l,D as m,aj as d,c as u,m as f,bh as p,bA as v,I as h,C as g,F as j,B as y,g as b,ao as S,bm as T,n as x,p as I}from"./calfSystem-KFszEm2S.js"
import{a as k,s as w}from"./sendItems-Bavaihje.js"
import"./legacy-DCwSAgeG.js"
import{i as A}from"./lifecycle-TNO4elpY.js"
import{Q as B}from"./QuickSelectClasses-CgpkQ3h8.js"
import"./htmlResult-Bbkz7jCU.js"
import"./InfoBoxFrom-HiOFdyZC.js"
import"./createStyle-DZTKavCB.js"
var O=a('<span class="svelte-frjaep"><!></span>')
function F(a,g){s(g,!0)
let j=d(0)
const y=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),b=e=>p(e.children[0]),S=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){b(a),a.replaceWith(y)
const t=await(r=s,c=[S(a)],e(w,k,r,c))
return t&&function(e,s){s.s?(jQuery(y.parentElement).qtip("disable"),y.parentElement.removeAttribute("class"),y.remove()):(y.replaceWith(e),b(e))}(a,t),t}var r,c
return n}const x=()=>u(T,document.forms.sendItemForm.elements.target_username.value),I=e=>e.reduce(x(),Promise.resolve({s:1}))
var A=O(),B=m(A)
n(B,{get disabled(){return h(j)},onclick:async function(){const e=o("trade-create-selected")
if(!e.length)return
i("Trade","oneByOne"),l(j,1)
const s=await I(e)
s&&(!function(e){e.s?f("Items sent successfully!"):f(e.e.message)}(s),l(j,0))},children:(e,s)=>{var t=v("OneByOne")
r(e,t)},$$slots:{default:!0}}),r(a,A),c()}function P(){i("Trade","doSend"),p(b("send-items"))}var Q=a('<div class="svelte-chou0r"><button class="custombutton svelte-chou0r" type="button">Send</button></div>'),$=a("<!> <!>",1)
function _(e,t){s(t,!1),A()
var a=$(),n=g(a),o=e=>{var s=Q()
m(s).__click=[P],r(e,s)}
j(n,e=>{b("send-items")&&e(o)})
var l=y(n,2)
B(l,{dispatchPerf:()=>i("Trade","doPerf"),dispatchSelect:e=>i("Trade","doSelect",e),dispatchToggle:()=>i("Trade","toggleSelectST"),wantsTagged:"1"}),r(e,a),c()}S(["click"])
function q(){const e=b("send-items")
e&&(e=>{x(F,{target:e.parentNode})})(e)}function C(){b("trade-items")&&(T(3,q),x(_,{target:I()}))}export{C as default}
//# sourceMappingURL=trade-D767c5R9.js.map
