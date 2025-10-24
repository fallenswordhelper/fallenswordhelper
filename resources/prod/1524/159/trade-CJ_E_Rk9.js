import{$ as e,y as s,v as t,C as a,bS as n,N as r,O as c,aB as o,s as i,J as l,F as d,ak as m,c as u,n as f,bl as p,bE as v,K as g,A as h,E as b,H as y,D as S,g as k,ap as T,bq as j,t as x,p as O}from"./calfSystem-CIdPz3EO.js"
import{a as w,s as B}from"./sendItems-Bp1OfdFE.js"
import{Q as E}from"./QuickSelectClasses-Bd3vUjbE.js"
import"./htmlResult-CHYKQLWk.js"
import"./InfoBoxFrom-Dw2yPW9h.js"
import"./createStyle-C-OOcRjs.js"
var I=a('<span class="svelte-pnxsk9"><!></span>')
function F(a,h){s(h,!0)
let b=m(0)
const y=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),S=e=>p(e.children[0]),k=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){S(a),a.replaceWith(y)
const t=await(r=s,c=[k(a)],e(B,w,r,c))
return t&&function(e,s){s.s?(jQuery(y.parentElement).qtip("disable"),y.parentElement.removeAttribute("class"),y.remove()):(y.replaceWith(e),S(e))}(a,t),t}var r,c
return n}const j=()=>u(T,document.forms.sendItemForm.elements.target_username.value),x=e=>e.reduce(j(),Promise.resolve({s:1}))
var O=I(),E=d(O)
n(E,{get disabled(){return g(b)},onclick:async function(){const e=o("trade-create-selected")
if(!e.length)return
i("Trade","oneByOne"),l(b,1)
const s=await x(e)
s&&(!function(e){e.s?f("Items sent successfully!"):f(e.e.message)}(s),l(b,0))},children:(e,s)=>{var t=v("OneByOne")
r(e,t)},$$slots:{default:!0}}),r(a,O),c()}function N(){i("Trade","doSend"),p(k("send-items"))}var P=a('<div class="svelte-1vt9lok"><button class="custombutton svelte-1vt9lok" type="button">Send</button></div>'),Q=a("<!> <!>",1)
function $(e,t){s(t,!1),h()
var a=Q(),n=b(a),o=e=>{var s=P()
d(s).__click=[N],r(e,s)}
y(n,e=>{k("send-items")&&e(o)})
var l=S(n,2)
E(l,{dispatchPerf:()=>i("Trade","doPerf"),dispatchSelect:e=>i("Trade","doSelect",e),dispatchToggle:()=>i("Trade","toggleSelectST"),wantsTagged:"1"}),r(e,a),c()}T(["click"])
function _(){const e=k("send-items")
e&&(e=>{x(F,{target:e.parentNode})})(e)}function q(){k("trade-items")&&(j(3,_),x($,{target:O()}))}export{q as default}
//# sourceMappingURL=trade-CJ_E_Rk9.js.map
