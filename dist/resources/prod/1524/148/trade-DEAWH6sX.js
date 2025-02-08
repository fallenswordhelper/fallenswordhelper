import{$ as e,S as t,P as s,Q as a,U as n,bJ as r,bD as o,bE as c,_ as i,bK as l,a3 as m,bL as u,a5 as d,n as f,a9 as p,ar as $,s as g,d as j,aj as b,b7 as h,T as y,g as S,bc as w,p as v}from"./calfSystem-BldO1y8X.js"
import{a as I,s as T}from"./sendItems-BbvSea5F.js"
import{L as x}from"./LinkButton-uS4wZBSJ.js"
import{Q as k}from"./QuickSelectClasses-DVuulLX6.js"
import"./htmlResult-BVZ0S6D_.js"
import"./InfoBoxFrom-BaZ8ZoH1.js"
import"./createStyle-DKSmWjdQ.js"
import"./SelectInST-rLAtQhVr.js"
import"./daLoadInventory-B1LI3IE_.js"
import"./basicItem-jvMH1Iol.js"
import"./flattenItems-g5kEa2JG.js"
function B(e){let t
return{c(){t=p("OneByOne")},m(e,s){i(e,t,s)},d(e){e&&n(t)}}}function L(e){let t,s,a
return s=new x({props:{disabled:e[0],$$slots:{default:[B]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=m("span"),u(s.$$.fragment),d(t,"class","svelte-frjaep")},m(e,n){i(e,t,n),l(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(c(s.$$.fragment,e),a=!0)},o(e){o(s.$$.fragment,e),a=!1},d(e){e&&n(t),r(s)}}}function Q(t,s,a){let n=0
const r=f({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>h(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,a){const n=await s
if(n?.s){o(a),a.replaceWith(r)
const s=await(i=t,l=[c(a)],e(T,I,i,l))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(a,s),s}var i,l
return n}const l=()=>j(i,document.forms.sendItemForm.elements.target_username.value),m=e=>e.reduce(l(),Promise.resolve({s:1}))
return[n,async function(){const e=$("trade-create-selected")
if(!e.length)return
g("Trade","oneByOne"),a(0,n=1)
const t=await m(e)
t&&(!function(e){e.s?b("Items sent successfully!"):b(e.e.message)}(t),a(0,n=0))}]}class E extends t{constructor(e){super(),s(this,e,Q,L,a,{})}}function O(e){let t,s
return t=new k({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){u(t.$$.fragment)},m(e,a){l(t,e,a),s=!0},p:y,i(e){s||(c(t.$$.fragment,e),s=!0)},o(e){o(t.$$.fragment,e),s=!1},d(e){r(t,e)}}}function P(e){return[()=>g("Trade","doPerf"),e=>g("Trade","doSelect",e.detail),()=>g("Trade","toggleSelectST")]}class W extends t{constructor(e){super(),s(this,e,P,O,a,{})}}const F=e=>new E({target:e.parentNode})
function N(){const e=S("send-items")
e&&F(e)}function R(){S("trade-items")&&(w(3,N),new W({target:v()}))}export{R as default}
//# sourceMappingURL=trade-DEAWH6sX.js.map
