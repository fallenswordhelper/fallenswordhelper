import{$ as e,z as s,w as t,C as a,bN as n,N as r,O as c,aC as o,s as i,J as l,F as d,al as m,c as u,t as f,bg as p,bz as v,K as g,E as h,H as b,D as y,g as j,aq as S,bl as T,u as w,p as k}from"./calfSystem-BlPuMQGT.js"
import{a as I,s as N}from"./sendItems-2xtTmXd1.js"
import"./legacy-6E4ldJQ5.js"
import{i as O}from"./lifecycle-DK9Oix-H.js"
import{Q as x}from"./QuickSelectClasses-RXK7bpJT.js"
import"./htmlResult-DY3V3Ki7.js"
import"./InfoBoxFrom-BDWFjNv_.js"
import"./createStyle-Bc_hQFau.js"
var B=a('<span class="svelte-frjaep"><!></span>')
function C(a,h){s(h,!0)
let b=m(0)
const y=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),j=e=>p(e.children[0]),S=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){j(a),a.replaceWith(y)
const t=await(r=s,c=[S(a)],e(N,I,r,c))
return t&&function(e,s){s.s?(jQuery(y.parentElement).qtip("disable"),y.parentElement.removeAttribute("class"),y.remove()):(y.replaceWith(e),j(e))}(a,t),t}var r,c
return n}const w=()=>u(T,document.forms.sendItemForm.elements.target_username.value),k=e=>e.reduce(w(),Promise.resolve({s:1}))
var O=B(),x=d(O)
n(x,{get disabled(){return g(b)},onclick:async function(){const e=o("trade-create-selected")
if(!e.length)return
i("Trade","oneByOne"),l(b,1)
const s=await k(e)
s&&(!function(e){e.s?f("Items sent successfully!"):f(e.e.message)}(s),l(b,0))},children:(e,s)=>{var t=v("OneByOne")
r(e,t)},$$slots:{default:!0}}),r(a,O),c()}function E(){i("Trade","doSend"),p(j("send-items"))}var F=a('<div class="svelte-chou0r"><button class="custombutton svelte-chou0r" type="button">Send</button></div>'),P=a("<!> <!>",1)
function Q(e,t){s(t,!1),O()
var a=P(),n=h(a),o=e=>{var s=F()
d(s).__click=[E],r(e,s)}
b(n,(e=>{j("send-items")&&e(o)}))
var l=y(n,2)
x(l,{dispatchPerf:()=>i("Trade","doPerf"),dispatchSelect:e=>i("Trade","doSelect",e),dispatchToggle:()=>i("Trade","toggleSelectST"),wantsTagged:"1"}),r(e,a),c()}S(["click"])
const $=e=>w(C,{target:e.parentNode})
function _(){const e=j("send-items")
e&&$(e)}function q(){j("trade-items")&&(T(3,_),w(Q,{target:k()}))}export{q as default}
//# sourceMappingURL=trade-CHkbYJ1v.js.map
