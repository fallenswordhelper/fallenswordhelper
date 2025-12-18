import{$ as e,y as s,v as t,C as a,bP as n,bQ as r,N as o,K as c,ak as i,F as l,O as d,aB as m,s as u,J as p,c as f,n as v,bm as g,A as h,E as y,H as b,D as S,g as k,ap as T,br as j,t as P,p as w}from"./calfSystem-Cs6CSxoU.js"
import{a as x,s as B}from"./sendItems-Pw0D8xc-.js"
import{Q as I}from"./QuickSelectClasses-CCxO6YjX.js"
import"./htmlResult-zJJ1KGba.js"
import"./InfoBoxFrom-DFKUvyJC.js"
import"./createStyle-SGEMbHV8.js"
var O=a('<span class="svelte-pnxsk9"><!></span>')
function Q(a,h){s(h,!0)
let y=i(0)
const b=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),S=e=>g(e.children[0]),k=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){S(a),a.replaceWith(b)
const t=await(r=s,o=[k(a)],e(B,x,r,o))
return t&&function(e,s){s.s?(jQuery(b.parentElement).qtip("disable"),b.parentElement.removeAttribute("class"),b.remove()):(b.replaceWith(e),S(e))}(a,t),t}var r,o
return n}const j=()=>f(T,document.forms.sendItemForm.elements.target_username.value),P=e=>e.reduce(j(),Promise.resolve({s:1}))
var w=O(),I=l(w)
n(I,{get disabled(){return c(y)},onclick:async function(){const e=m("trade-create-selected")
if(!e.length)return
u("Trade","oneByOne"),p(y,1)
const s=await P(e)
s&&(!function(e){e.s?v("Items sent successfully!"):v(e.e.message)}(s),p(y,0))},children:(e,s)=>{var t=r("OneByOne")
o(e,t)},$$slots:{default:!0}}),o(a,w),d()}var E=a('<div class="svelte-1vt9lok"><button class="custombutton svelte-1vt9lok" type="button">Send</button></div>'),F=a("<!> <!>",1)
function N(e,t){function a(){u("Trade","doSend"),g(k("send-items"))}s(t,!1),h()
var n=F(),r=y(n),c=e=>{var s=E()
l(s).__click=a,o(e,s)}
b(r,e=>{k("send-items")&&e(c)})
var i=S(r,2)
I(i,{dispatchPerf:()=>u("Trade","doPerf"),dispatchSelect:e=>u("Trade","doSelect",e),dispatchToggle:()=>u("Trade","toggleSelectST"),wantsTagged:"1"}),o(e,n),d()}T(["click"])
function $(){const e=k("send-items")
e&&(e=>{P(Q,{target:e.parentNode})})(e)}function _(){k("trade-items")&&(j(3,$),P(N,{target:w()}))}export{_ as default}
//# sourceMappingURL=trade-C4_0GaD5.js.map
