import{$ as e,S as t,L as s,M as n,N as a,bf as r,P as o,R as c,bg as i,ba as l,bd as m,Z as u,bh as p,l as d,a1 as f,n as $,ag as g,a8 as j,c as y,ax as b,Y as h,g as v,aP as S,p as w}from"./calfSystem-076d7a01.js"
import{a as I,s as x}from"./sendItems-e8b1b119.js"
import{L as T}from"./LinkButton-9974bf66.js"
import{Q as B}from"./QuickSelectClasses-1a7b53fb.js"
import"./htmlResult-0d37532a.js"
import"./InfoBoxFrom-3af9d1fa.js"
import"./await_block-904981a0.js"
import"./each-d53d627d.js"
import"./getInventoryById-83dceb0e.js"
import"./getInventory-f6a60dce.js"
import"./inventory-c0d6c5e3.js"
import"./createStyle-817f1cf1.js"
import"./numberIsNaN-a40c3bbb.js"
import"./SelectInST-83de2371.js"
function N(e){let t
return{c(){t=f("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&u(t)}}}function k(e){let t,s,n
return s=new T({props:{disabled:e[0],$$slots:{default:[N]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=a("span"),r(s.$$.fragment),o(t,"class","svelte-erebu9")},m(e,a){c(e,t,a),i(s,t,null),n=!0},p(e,[t]){const n={}
1&t&&(n.disabled=e[0]),8192&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){n||(l(s.$$.fragment,e),n=!0)},o(e){m(s.$$.fragment,e),n=!1},d(e){e&&u(t),p(s)}}}function P(t,s,n){let a=0
const r=d({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>b(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,n){const a=await s
if(a?.s){o(n),n.replaceWith(r)
const s=await(i=t,l=[c(n)],e(x,I,i,l))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(n,s),s}var i,l
return a}const l=()=>y(i,document.forms.sendItemForm.elements.target_username.value),m=e=>e.reduce(l(),Promise.resolve({s:1}))
return[a,async function(){const e=g("trade-create-selected")
if(!e.length)return
$("Trade","oneByOne"),n(0,a=1)
const t=await m(e)
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),n(0,a=0))}]}class F extends t{constructor(e){super(),s(this,e,P,k,n,{})}}function L(e){let t,s
return t=new B({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){r(t.$$.fragment)},m(e,n){i(t,e,n),s=!0},p:h,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){p(t,e)}}}function O(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class Q extends t{constructor(e){super(),s(this,e,O,L,n,{})}}const R=e=>new F({target:e.parentNode})
function E(){const e=v("send-items")
e&&R(e)}function M(){v("trade-items")&&(S(3,E),new Q({target:w()}))}export{M as default}
//# sourceMappingURL=trade-6ee60088.js.map
