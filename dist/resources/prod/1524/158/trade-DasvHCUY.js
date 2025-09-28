import{$ as e,x as s,u as t,B as a,bQ as n,L as r,N as o,aA as c,s as i,I as l,E as d,aj as m,c as u,m as f,bj as p,bC as v,J as g,z as h,D as b,G as y,C as S,g as j,ao as k,bo as T,n as x,p as I}from"./calfSystem-CIuUjh4H.js"
import{a as w,s as B}from"./sendItems-Bk-KVFC4.js"
import{Q as N}from"./QuickSelectClasses-Drh_jDiW.js"
import"./htmlResult-Cc7d59m8.js"
import"./InfoBoxFrom-BOMuQUn_.js"
import"./createStyle-Co3Q_8M9.js"
var Q=a('<span class="svelte-pnxsk9"><!></span>')
function C(a,h){s(h,!0)
let b=m(0)
const y=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),S=e=>p(e.children[0]),j=e=>e.id.split("-").at(-1)
async function k(s,t,a){const n=await t
if(n?.s){S(a),a.replaceWith(y)
const t=await(r=s,o=[j(a)],e(B,w,r,o))
return t&&function(e,s){s.s?(jQuery(y.parentElement).qtip("disable"),y.parentElement.removeAttribute("class"),y.remove()):(y.replaceWith(e),S(e))}(a,t),t}var r,o
return n}const T=()=>u(k,document.forms.sendItemForm.elements.target_username.value),x=e=>e.reduce(T(),Promise.resolve({s:1}))
var I=Q(),N=d(I)
n(N,{get disabled(){return g(b)},onclick:async function(){const e=c("trade-create-selected")
if(!e.length)return
i("Trade","oneByOne"),l(b,1)
const s=await x(e)
s&&(!function(e){e.s?f("Items sent successfully!"):f(e.e.message)}(s),l(b,0))},children:(e,s)=>{var t=v("OneByOne")
r(e,t)},$$slots:{default:!0}}),r(a,I),o()}function E(){i("Trade","doSend"),p(j("send-items"))}var O=a('<div class="svelte-1vt9lok"><button class="custombutton svelte-1vt9lok" type="button">Send</button></div>'),P=a("<!> <!>",1)
function $(e,t){s(t,!1),h()
var a=P(),n=b(a),c=e=>{var s=O()
d(s).__click=[E],r(e,s)}
y(n,e=>{j("send-items")&&e(c)})
var l=S(n,2)
N(l,{dispatchPerf:()=>i("Trade","doPerf"),dispatchSelect:e=>i("Trade","doSelect",e),dispatchToggle:()=>i("Trade","toggleSelectST"),wantsTagged:"1"}),r(e,a),o()}k(["click"])
function _(){const e=j("send-items")
e&&(e=>{x(C,{target:e.parentNode})})(e)}function A(){j("trade-items")&&(T(3,_),x($,{target:I()}))}export{A as default}
//# sourceMappingURL=trade-DasvHCUY.js.map
