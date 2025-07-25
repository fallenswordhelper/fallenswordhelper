import{$ as e,z as s,w as t,C as a,bQ as n,N as r,O as o,aC as c,s as i,J as l,F as d,al as m,c as u,t as f,bj as p,bC as v,K as h,E as g,H as b,D as y,g as j,aq as S,bo as T,u as w,p as k}from"./calfSystem-C1X5YxJZ.js"
import{a as C,s as I}from"./sendItems-CnCwTLoU.js"
import"./legacy-CERE4DQ7.js"
import{i as O}from"./lifecycle-U3zIf5cY.js"
import{Q}from"./QuickSelectClasses-vLWck6eU.js"
import"./htmlResult-Btqom80J.js"
import"./InfoBoxFrom-CALdsMkd.js"
import"./createStyle-B0zF0e_c.js"
var x=a('<span class="svelte-frjaep"><!></span>')
function B(a,g){s(g,!0)
let b=m(0)
const y=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),j=e=>p(e.children[0]),S=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){j(a),a.replaceWith(y)
const t=await(r=s,o=[S(a)],e(I,C,r,o))
return t&&function(e,s){s.s?(jQuery(y.parentElement).qtip("disable"),y.parentElement.removeAttribute("class"),y.remove()):(y.replaceWith(e),j(e))}(a,t),t}var r,o
return n}const w=()=>u(T,document.forms.sendItemForm.elements.target_username.value),k=e=>e.reduce(w(),Promise.resolve({s:1}))
var O=x(),Q=d(O)
n(Q,{get disabled(){return h(b)},onclick:async function(){const e=c("trade-create-selected")
if(!e.length)return
i("Trade","oneByOne"),l(b,1)
const s=await k(e)
s&&(!function(e){e.s?f("Items sent successfully!"):f(e.e.message)}(s),l(b,0))},children:(e,s)=>{var t=v("OneByOne")
r(e,t)},$$slots:{default:!0}}),r(a,O),o()}function E(){i("Trade","doSend"),p(j("send-items"))}var F=a('<div class="svelte-chou0r"><button class="custombutton svelte-chou0r" type="button">Send</button></div>'),N=a("<!> <!>",1)
function P(e,t){s(t,!1),O()
var a=N(),n=g(a),c=e=>{var s=F()
d(s).__click=[E],r(e,s)}
b(n,(e=>{j("send-items")&&e(c)}))
var l=y(n,2)
Q(l,{dispatchPerf:()=>i("Trade","doPerf"),dispatchSelect:e=>i("Trade","doSelect",e),dispatchToggle:()=>i("Trade","toggleSelectST"),wantsTagged:"1"}),r(e,a),o()}S(["click"])
const $=e=>w(B,{target:e.parentNode})
function _(){const e=j("send-items")
e&&$(e)}function q(){j("trade-items")&&(T(3,_),w(P,{target:k()}))}export{q as default}
//# sourceMappingURL=trade-CJhAsgHS.js.map
