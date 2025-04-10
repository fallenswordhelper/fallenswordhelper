import{$ as e,R as s,u as t,X as a,bF as n,a3 as r,a4 as c,ap as o,s as i,W as l,Z as d,S as m,e as u,ah as f,b7 as p,bq as v,V as h,au as g,a0 as y,Y as b,g as S,a6 as j,bc as T,ad as k,p as w}from"./calfSystem-BGOTz8de.js"
import{a as I,s as x}from"./sendItems-BMwt7Ul-.js"
import"./legacy-CVKI84SU.js"
import{i as B}from"./lifecycle-CJ3D6gkY.js"
import{Q as F}from"./QuickSelectClasses-IWIWLivP.js"
import"./htmlResult-wAGcD4rm.js"
import"./InfoBoxFrom-BSCsEypB.js"
import"./createStyle-dPu6vqqt.js"
var O=a('<span class="svelte-frjaep"><!></span>')
function P(a,g){s(g,!0)
let y=m(0)
const b=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),S=e=>p(e.children[0]),j=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){S(a),a.replaceWith(b)
const t=await(r=s,c=[j(a)],e(x,I,r,c))
return t&&function(e,s){s.s?(jQuery(b.parentElement).qtip("disable"),b.parentElement.removeAttribute("class"),b.remove()):(b.replaceWith(e),S(e))}(a,t),t}var r,c
return n}const k=()=>u(T,document.forms.sendItemForm.elements.target_username.value),w=e=>e.reduce(k(),Promise.resolve({s:1}))
var B=O(),F=d(B)
n(F,{get disabled(){return h(y)},onclick:async function(){const e=o("trade-create-selected")
if(!e.length)return
i("Trade","oneByOne"),l(y,1)
const s=await w(e)
s&&(!function(e){e.s?f("Items sent successfully!"):f(e.e.message)}(s),l(y,0))},children:(e,s)=>{var t=v("OneByOne")
r(e,t)},$$slots:{default:!0}}),r(a,B),c()}function Q(){i("Trade","doSend"),p(S("send-items"))}var R=a('<div class="svelte-chou0r"><button class="custombutton svelte-chou0r" type="button">Send</button></div>'),W=a("<!> <!>",1)
function $(e,t){s(t,!1),B()
var a=W(),n=g(a),o=e=>{var s=R()
d(s).__click=[Q],r(e,s)}
y(n,(e=>{S("send-items")&&e(o)}))
var l=b(n,2)
F(l,{dispatchPerf:()=>i("Trade","doPerf"),dispatchSelect:e=>i("Trade","doSelect",e),dispatchToggle:()=>i("Trade","toggleSelectST"),wantsTagged:"1"}),r(e,a),c()}j(["click"])
const _=e=>k(P,{target:e.parentNode})
function q(){const e=S("send-items")
e&&_(e)}function E(){S("trade-items")&&(T(3,q),k($,{target:w()}))}export{E as default}
//# sourceMappingURL=trade-Cy3aBksE.js.map
