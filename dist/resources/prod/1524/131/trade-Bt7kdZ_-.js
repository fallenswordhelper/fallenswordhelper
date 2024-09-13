import{$ as e,S as t,L as s,M as a,O as n,bj as r,Q as o,T as c,bk as i,be as l,bh as m,a0 as u,bl as p,m as d,a3 as f,s as $,aj as g,ab as j,c as b,aC as h,_ as y,g as S,aV as w,p as I}from"./calfSystem-Dr91xfiU.js"
import{a as v,s as T}from"./sendItems-D4mTOR88.js"
import{L as x}from"./LinkButton-CSIDWINj.js"
import{Q as k}from"./QuickSelectClasses-D0QU_b00.js"
import"./basicItem-DF0A1gTm.js"
import"./htmlResult-CBDUXsuY.js"
import"./InfoBoxFrom-B85g3JkL.js"
import"./await_block-BURScWZB.js"
import"./createStyle-DbZ95tCv.js"
import"./SelectInST-Cu0EtOFq.js"
import"./daLoadInventory-B-sGtkiR.js"
import"./flattenItems-C4pfIrZn.js"
import"./isArray-eVldfhw1.js"
import"./all-YfMtr2SN.js"
import"./numberIsNaN-CGkd1jiA.js"
function B(e){let t
return{c(){t=f("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&u(t)}}}function L(e){let t,s,a
return s=new x({props:{disabled:e[0],$$slots:{default:[B]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=n("span"),r(s.$$.fragment),o(t,"class","svelte-erebu9")},m(e,n){c(e,t,n),i(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(l(s.$$.fragment,e),a=!0)},o(e){m(s.$$.fragment,e),a=!1},d(e){e&&u(t),p(s)}}}function N(t,s,a){let n=0
const r=d({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>h(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,a){const n=await s
if(n?.s){o(a),a.replaceWith(r)
const s=await(i=t,l=[c(a)],e(T,v,i,l))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(a,s),s}var i,l
return n}const l=()=>b(i,document.forms.sendItemForm.elements.target_username.value),m=e=>e.reduce(l(),Promise.resolve({s:1}))
return[n,async function(){const e=g("trade-create-selected")
if(!e.length)return
$("Trade","oneByOne"),a(0,n=1)
const t=await m(e)
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),a(0,n=0))}]}class O extends t{constructor(e){super(),s(this,e,N,L,a,{})}}function Q(e){let t,s
return t=new k({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){r(t.$$.fragment)},m(e,a){i(t,e,a),s=!0},p:y,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){p(t,e)}}}function E(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class F extends t{constructor(e){super(),s(this,e,E,Q,a,{})}}const P=e=>new O({target:e.parentNode})
function _(){const e=S("send-items")
e&&P(e)}function A(){S("trade-items")&&(w(3,_),new F({target:I()}))}export{A as default}
//# sourceMappingURL=trade-Bt7kdZ_-.js.map
