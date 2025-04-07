import{$ as e,R as s,S as t,u as a,X as n,bF as r,a3 as c,a4 as o,ap as i,s as l,W as d,Z as m,e as u,ah as f,b7 as p,bq as v,V as h,au as g,a0 as y,Y as b,g as S,a6 as j,bc as T,ad as k,p as w}from"./calfSystem-BGW9cdWN.js"
import{a as I,s as x}from"./sendItems-Bxk_-Ol8.js"
import"./legacy-vY5CN2wW.js"
import{i as B}from"./lifecycle-BqhEEC5Q.js"
import{Q as F}from"./QuickSelectClasses-B3bGzbKS.js"
import"./htmlResult-CAxknWPj.js"
import"./InfoBoxFrom-C9V8YYki.js"
import"./createStyle-Cr9lLj8G.js"
var O=n('<span class="svelte-frjaep"><!></span>')
function P(n,g){s(g,!0)
let y=t(0)
const b=a({className:"fshSpinner fshRelative",style:{height:"90px"}}),S=e=>p(e.children[0]),j=e=>e.id.split("-").at(-1)
async function T(s,t,a){const n=await t
if(n?.s){S(a),a.replaceWith(b)
const t=await(r=s,c=[j(a)],e(x,I,r,c))
return t&&function(e,s){s.s?(jQuery(b.parentElement).qtip("disable"),b.parentElement.removeAttribute("class"),b.remove()):(b.replaceWith(e),S(e))}(a,t),t}var r,c
return n}const k=()=>u(T,document.forms.sendItemForm.elements.target_username.value),w=e=>e.reduce(k(),Promise.resolve({s:1}))
var B=O(),F=m(B)
r(F,{get disabled(){return h(y)},onclick:async function(){const e=i("trade-create-selected")
if(!e.length)return
l("Trade","oneByOne"),d(y,1)
const s=await w(e)
s&&(!function(e){e.s?f("Items sent successfully!"):f(e.e.message)}(s),d(y,0))},children:(e,s)=>{var t=v("OneByOne")
c(e,t)},$$slots:{default:!0}}),c(n,B),o()}function Q(){l("Trade","doSend"),p(S("send-items"))}var R=n('<div class="svelte-chou0r"><button class="custombutton svelte-chou0r" type="button">Send</button></div>'),W=n("<!> <!>",1)
function $(e,t){s(t,!1),B()
var a=W(),n=g(a),r=e=>{var s=R()
m(s).__click=[Q],c(e,s)}
y(n,(e=>{S("send-items")&&e(r)}))
var i=b(n,2)
F(i,{dispatchPerf:()=>l("Trade","doPerf"),dispatchSelect:e=>l("Trade","doSelect",e),dispatchToggle:()=>l("Trade","toggleSelectST"),wantsTagged:"1"}),c(e,a),o()}j(["click"])
const _=e=>k(P,{target:e.parentNode})
function q(){const e=S("send-items")
e&&_(e)}function E(){S("trade-items")&&(T(3,q),k($,{target:w()}))}export{E as default}
//# sourceMappingURL=trade-BNMiR4B2.js.map
