import{$ as e,y as s,v as t,C as a,bR as n,bG as r,N as c,K as o,ak as i,F as l,O as d,aB as m,s as u,J as f,c as p,n as v,bl as g,A as h,E as b,H as y,D as S,g as k,ap as T,bq as j,t as x,p as O}from"./calfSystem-HVCiy-VV.js"
import{a as w,s as B}from"./sendItems-NKMoPAZh.js"
import{Q as I}from"./QuickSelectClasses-CtRfs3_D.js"
import"./htmlResult-BVV0RUGi.js"
import"./InfoBoxFrom-Zar6WCPQ.js"
import"./createStyle-u6QR1rZp.js"
var E=a('<span class="svelte-pnxsk9"><!></span>')
function F(a,h){s(h,!0)
let b=i(0)
const y=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),S=e=>g(e.children[0]),k=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){S(a),a.replaceWith(y)
const t=await(r=s,c=[k(a)],e(B,w,r,c))
return t&&function(e,s){s.s?(jQuery(y.parentElement).qtip("disable"),y.parentElement.removeAttribute("class"),y.remove()):(y.replaceWith(e),S(e))}(a,t),t}var r,c
return n}const j=()=>p(T,document.forms.sendItemForm.elements.target_username.value),x=e=>e.reduce(j(),Promise.resolve({s:1}))
var O=E(),I=l(O)
n(I,{get disabled(){return o(b)},onclick:async function(){const e=m("trade-create-selected")
if(!e.length)return
u("Trade","oneByOne"),f(b,1)
const s=await x(e)
s&&(!function(e){e.s?v("Items sent successfully!"):v(e.e.message)}(s),f(b,0))},children:(e,s)=>{var t=r("OneByOne")
c(e,t)},$$slots:{default:!0}}),c(a,O),d()}var N=a('<div class="svelte-1vt9lok"><button class="custombutton svelte-1vt9lok" type="button">Send</button></div>'),P=a("<!> <!>",1)
function Q(e,t){function a(){u("Trade","doSend"),g(k("send-items"))}s(t,!1),h()
var n=P(),r=b(n),o=e=>{var s=N()
l(s).__click=a,c(e,s)}
y(r,e=>{k("send-items")&&e(o)})
var i=S(r,2)
I(i,{dispatchPerf:()=>u("Trade","doPerf"),dispatchSelect:e=>u("Trade","doSelect",e),dispatchToggle:()=>u("Trade","toggleSelectST"),wantsTagged:"1"}),c(e,n),d()}T(["click"])
function R(){const e=k("send-items")
e&&(e=>{x(F,{target:e.parentNode})})(e)}function $(){k("trade-items")&&(j(3,R),x(Q,{target:O()}))}export{$ as default}
//# sourceMappingURL=trade-C6-84znW.js.map
