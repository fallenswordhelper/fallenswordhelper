import{$ as e,x as s,u as t,B as a,bR as n,L as r,N as c,aB as o,s as i,I as l,E as d,ak as m,c as u,m as p,bk as f,bD as v,J as h,z as g,D as b,G as y,C as S,g as j,ap as T,bp as k,n as w,p as B}from"./calfSystem-CQOGdqPv.js"
import{a as I,s as x}from"./sendItems-Cnqsnjio.js"
import{Q as E}from"./QuickSelectClasses-DPlwdU3V.js"
import"./htmlResult-BYIVInNx.js"
import"./InfoBoxFrom-GavcHhIs.js"
import"./createStyle--h4yDzB1.js"
var N=a('<span class="svelte-frjaep"><!></span>')
function O(a,g){s(g,!0)
let b=m(0)
const y=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),S=e=>f(e.children[0]),j=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){S(a),a.replaceWith(y)
const t=await(r=s,c=[j(a)],e(x,I,r,c))
return t&&function(e,s){s.s?(jQuery(y.parentElement).qtip("disable"),y.parentElement.removeAttribute("class"),y.remove()):(y.replaceWith(e),S(e))}(a,t),t}var r,c
return n}const k=()=>u(T,document.forms.sendItemForm.elements.target_username.value),w=e=>e.reduce(k(),Promise.resolve({s:1}))
var B=N(),E=d(B)
n(E,{get disabled(){return h(b)},onclick:async function(){const e=o("trade-create-selected")
if(!e.length)return
i("Trade","oneByOne"),l(b,1)
const s=await w(e)
s&&(!function(e){e.s?p("Items sent successfully!"):p(e.e.message)}(s),l(b,0))},children:(e,s)=>{var t=v("OneByOne")
r(e,t)},$$slots:{default:!0}}),r(a,B),c()}function P(){i("Trade","doSend"),f(j("send-items"))}var Q=a('<div class="svelte-chou0r"><button class="custombutton svelte-chou0r" type="button">Send</button></div>'),R=a("<!> <!>",1)
function $(e,t){s(t,!1),g()
var a=R(),n=b(a),o=e=>{var s=Q()
d(s).__click=[P],r(e,s)}
y(n,e=>{j("send-items")&&e(o)})
var l=S(n,2)
E(l,{dispatchPerf:()=>i("Trade","doPerf"),dispatchSelect:e=>i("Trade","doSelect",e),dispatchToggle:()=>i("Trade","toggleSelectST"),wantsTagged:"1"}),r(e,a),c()}T(["click"])
function _(){const e=j("send-items")
e&&(e=>{w(O,{target:e.parentNode})})(e)}function C(){j("trade-items")&&(k(3,_),w($,{target:B()}))}export{C as default}
//# sourceMappingURL=trade-B0XqUtFb.js.map
