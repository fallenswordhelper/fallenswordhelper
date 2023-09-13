import{$ as e,S as t,L as s,M as a,N as n,bf as r,P as o,R as c,bg as i,ba as l,bd as m,Z as u,bh as p,l as d,a1 as f,n as $,ag as g,a8 as j,c as b,ax as h,Y as y,g as S,aP as v,p as w}from"./calfSystem-2f15e074.js"
import{a as x,s as I}from"./sendItems-fd48f4bf.js"
import{L as T}from"./LinkButton-5d5c853c.js"
import{Q as N}from"./QuickSelectClasses-c0a5ef69.js"
import"./htmlResult-27fd54be.js"
import"./InfoBoxFrom-20286709.js"
import"./await_block-d535654a.js"
import"./each-d93fc3a2.js"
import"./getInventory-bd13fe4f.js"
import"./inventory-c074db9e.js"
import"./createStyle-f5197d38.js"
import"./numberIsNaN-a40c3bbb.js"
import"./SelectInST-e4b67956.js"
function k(e){let t
return{c(){t=f("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&u(t)}}}function B(e){let t,s,a
return s=new T({props:{disabled:e[0],$$slots:{default:[k]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=n("span"),r(s.$$.fragment),o(t,"class","svelte-erebu9")},m(e,n){c(e,t,n),i(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(l(s.$$.fragment,e),a=!0)},o(e){m(s.$$.fragment,e),a=!1},d(e){e&&u(t),p(s)}}}function P(t,s,a){let n=0
const r=d({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>h(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,a){const n=await s
if(n?.s){o(a),a.replaceWith(r)
const s=await(i=t,l=[c(a)],e(I,x,i,l))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(a,s),s}var i,l
return n}const l=()=>b(i,document.forms.sendItemForm.elements.target_username.value),m=e=>e.reduce(l(),Promise.resolve({s:1}))
return[n,async function(){const e=g("trade-create-selected")
if(!e.length)return
$("Trade","oneByOne"),a(0,n=1)
const t=await m(e)
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),a(0,n=0))}]}class L extends t{constructor(e){super(),s(this,e,P,B,a,{})}}function O(e){let t,s
return t=new N({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){r(t.$$.fragment)},m(e,a){i(t,e,a),s=!0},p:y,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){p(t,e)}}}function Q(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class R extends t{constructor(e){super(),s(this,e,Q,O,a,{})}}const E=e=>new L({target:e.parentNode})
function F(){const e=S("send-items")
e&&E(e)}function M(){S("trade-items")&&(v(3,F),new R({target:w()}))}export{M as default}
//# sourceMappingURL=trade-a98c92ee.js.map
