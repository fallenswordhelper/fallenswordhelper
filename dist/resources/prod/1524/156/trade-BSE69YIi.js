import{$ as e,x as s,u as t,B as a,bP as n,L as r,N as c,aB as o,s as i,I as l,E as d,ak as u,c as m,m as f,bi as p,bB as v,J as h,z as g,D as b,G as y,C as S,g as j,ap as T,bn as B,n as k,p as I}from"./calfSystem-79LsojAC.js"
import{a as w,s as x}from"./sendItems-3-mBKBqq.js"
import{Q as P}from"./QuickSelectClasses-nbam_oEW.js"
import"./htmlResult-VfRQZiiv.js"
import"./InfoBoxFrom-Du-lP_up.js"
import"./createStyle-BdMrx8ah.js"
var E=a('<span class="svelte-frjaep"><!></span>')
function N(a,g){s(g,!0)
let b=u(0)
const y=t({className:"fshSpinner fshRelative",style:{height:"90px"}}),S=e=>p(e.children[0]),j=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){S(a),a.replaceWith(y)
const t=await(r=s,c=[j(a)],e(x,w,r,c))
return t&&function(e,s){s.s?(jQuery(y.parentElement).qtip("disable"),y.parentElement.removeAttribute("class"),y.remove()):(y.replaceWith(e),S(e))}(a,t),t}var r,c
return n}const B=()=>m(T,document.forms.sendItemForm.elements.target_username.value),k=e=>e.reduce(B(),Promise.resolve({s:1}))
var I=E(),P=d(I)
n(P,{get disabled(){return h(b)},onclick:async function(){const e=o("trade-create-selected")
if(!e.length)return
i("Trade","oneByOne"),l(b,1)
const s=await k(e)
s&&(!function(e){e.s?f("Items sent successfully!"):f(e.e.message)}(s),l(b,0))},children:(e,s)=>{var t=v("OneByOne")
r(e,t)},$$slots:{default:!0}}),r(a,I),c()}function O(){i("Trade","doSend"),p(j("send-items"))}var Q=a('<div class="svelte-chou0r"><button class="custombutton svelte-chou0r" type="button">Send</button></div>'),$=a("<!> <!>",1)
function _(e,t){s(t,!1),g()
var a=$(),n=b(a),o=e=>{var s=Q()
d(s).__click=[O],r(e,s)}
y(n,e=>{j("send-items")&&e(o)})
var l=S(n,2)
P(l,{dispatchPerf:()=>i("Trade","doPerf"),dispatchSelect:e=>i("Trade","doSelect",e),dispatchToggle:()=>i("Trade","toggleSelectST"),wantsTagged:"1"}),r(e,a),c()}T(["click"])
function C(){const e=j("send-items")
e&&(e=>{k(N,{target:e.parentNode})})(e)}function F(){j("trade-items")&&(B(3,C),k(_,{target:I()}))}export{F as default}
//# sourceMappingURL=trade-BSE69YIi.js.map
