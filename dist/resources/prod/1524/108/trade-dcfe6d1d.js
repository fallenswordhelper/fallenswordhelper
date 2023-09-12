import{$ as e,S as t,L as s,M as a,N as n,bf as r,P as o,R as c,bg as i,ba as l,bd as m,Z as u,bh as p,l as d,a1 as f,n as $,ag as g,a8 as j,c as y,ax as b,Y as h,g as S,aP as v,p as w}from"./calfSystem-34913441.js"
import{a as I,s as x}from"./sendItems-21d6a040.js"
import{L as T}from"./LinkButton-aabd28ac.js"
import{Q as B}from"./QuickSelectClasses-d5833d0f.js"
import"./htmlResult-c11d9ef0.js"
import"./InfoBoxFrom-6333b8b3.js"
import"./await_block-d58cecee.js"
import"./each-6f7f5a14.js"
import"./getInventoryById-8022c7f6.js"
import"./getInventory-11b76fa4.js"
import"./inventory-ed909da9.js"
import"./createStyle-e8b661d2.js"
import"./numberIsNaN-a40c3bbb.js"
import"./SelectInST-0698713c.js"
function N(e){let t
return{c(){t=f("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&u(t)}}}function k(e){let t,s,a
return s=new T({props:{disabled:e[0],$$slots:{default:[N]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=n("span"),r(s.$$.fragment),o(t,"class","svelte-erebu9")},m(e,n){c(e,t,n),i(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(l(s.$$.fragment,e),a=!0)},o(e){m(s.$$.fragment,e),a=!1},d(e){e&&u(t),p(s)}}}function L(t,s,a){let n=0
const r=d({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>b(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,a){const n=await s
if(n?.s){o(a),a.replaceWith(r)
const s=await(i=t,l=[c(a)],e(x,I,i,l))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(a,s),s}var i,l
return n}const l=()=>y(i,document.forms.sendItemForm.elements.target_username.value),m=e=>e.reduce(l(),Promise.resolve({s:1}))
return[n,async function(){const e=g("trade-create-selected")
if(!e.length)return
$("Trade","oneByOne"),a(0,n=1)
const t=await m(e)
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),a(0,n=0))}]}class P extends t{constructor(e){super(),s(this,e,L,k,a,{})}}function E(e){let t,s
return t=new B({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){r(t.$$.fragment)},m(e,a){i(t,e,a),s=!0},p:h,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){p(t,e)}}}function F(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class O extends t{constructor(e){super(),s(this,e,F,E,a,{})}}const Q=e=>new P({target:e.parentNode})
function R(){const e=S("send-items")
e&&Q(e)}function _(){S("trade-items")&&(v(3,R),new O({target:w()}))}export{_ as default}
//# sourceMappingURL=trade-dcfe6d1d.js.map
