import{$ as e,x as s,u as t,A as a,bO as n,K as r,L as o,aA as c,s as i,H as l,D as m,aj as d,c as u,m as f,bh as p,bA as v,I as h,C as g,F as y,B as b,g as j,ao as S,bm as T,n as w,p as I}from"./calfSystem-CT1aM4VG.js"
import{a as k,s as x}from"./sendItems-pa-aKwib.js"
import"./legacy-BQk1-_ZQ.js"
import{i as A}from"./lifecycle-Dl_sxbSE.js"
import{Q as B}from"./QuickSelectClasses-B4DwrTxW.js"
import"./htmlResult-DHLyE8PQ.js"
import"./InfoBoxFrom-Cozeh7z2.js"
import"./createStyle-BtTqlvMl.js"
var O=a('<span class="svelte-frjaep"><!></span>')
function F(a,g){s(g,!0)
let y=d(0)
const b=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),j=e=>p(e.children[0]),S=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){j(a),a.replaceWith(b)
const t=await(r=s,o=[S(a)],e(x,k,r,o))
return t&&function(e,s){s.s?(jQuery(b.parentElement).qtip("disable"),b.parentElement.removeAttribute("class"),b.remove()):(b.replaceWith(e),j(e))}(a,t),t}var r,o
return n}const w=()=>u(T,document.forms.sendItemForm.elements.target_username.value),I=e=>e.reduce(w(),Promise.resolve({s:1}))
var A=O(),B=m(A)
n(B,{get disabled(){return h(y)},onclick:async function(){const e=c("trade-create-selected")
if(!e.length)return
i("Trade","oneByOne"),l(y,1)
const s=await I(e)
s&&(!function(e){e.s?f("Items sent successfully!"):f(e.e.message)}(s),l(y,0))},children:(e,s)=>{var t=v("OneByOne")
r(e,t)},$$slots:{default:!0}}),r(a,A),o()}function P(){i("Trade","doSend"),p(j("send-items"))}var Q=a('<div class="svelte-chou0r"><button class="custombutton svelte-chou0r" type="button">Send</button></div>'),$=a("<!> <!>",1)
function _(e,t){s(t,!1),A()
var a=$(),n=g(a),c=e=>{var s=Q()
m(s).__click=[P],r(e,s)}
y(n,(e=>{j("send-items")&&e(c)}))
var l=b(n,2)
B(l,{dispatchPerf:()=>i("Trade","doPerf"),dispatchSelect:e=>i("Trade","doSelect",e),dispatchToggle:()=>i("Trade","toggleSelectST"),wantsTagged:"1"}),r(e,a),o()}S(["click"])
const C=e=>w(F,{target:e.parentNode})
function E(){const e=j("send-items")
e&&C(e)}function H(){j("trade-items")&&(T(3,E),w(_,{target:I()}))}export{H as default}
//# sourceMappingURL=trade-DACsuPX-.js.map
