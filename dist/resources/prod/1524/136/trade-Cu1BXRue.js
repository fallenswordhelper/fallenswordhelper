import{$ as e,S as t,L as s,M as a,O as n,bj as r,Q as o,T as c,bk as i,be as l,bh as m,a0 as p,bl as u,m as f,a3 as d,s as $,aj as g,ab as j,c as b,aO as h,_ as y,g as S,aV as w,p as I}from"./calfSystem-CUgWHLtG.js"
import{a as v,s as T}from"./sendItems-CY7KI-F4.js"
import{L as x}from"./LinkButton-C46P8xIn.js"
import{Q as k}from"./QuickSelectClasses-fwT0145M.js"
import"./basicItem-DHPG0kmf.js"
import"./htmlResult-DtReQ2Pu.js"
import"./InfoBoxFrom-Ba18CawN.js"
import"./await_block-DpKGh93y.js"
import"./createStyle-DCnW_5bV.js"
import"./SelectInST-Cn9zDwA4.js"
import"./daLoadInventory-zWI1CPKh.js"
import"./flattenItems-C4pfIrZn.js"
import"./isArray-eVldfhw1.js"
import"./all-YfMtr2SN.js"
import"./numberIsNaN-CGkd1jiA.js"
function O(e){let t
return{c(){t=d("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function B(e){let t,s,a
return s=new x({props:{disabled:e[0],$$slots:{default:[O]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=n("span"),r(s.$$.fragment),o(t,"class","svelte-frjaep")},m(e,n){c(e,t,n),i(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(l(s.$$.fragment,e),a=!0)},o(e){m(s.$$.fragment,e),a=!1},d(e){e&&p(t),u(s)}}}function L(t,s,a){let n=0
const r=f({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>h(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,a){const n=await s
if(n?.s){o(a),a.replaceWith(r)
const s=await(i=t,l=[c(a)],e(T,v,i,l))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(a,s),s}var i,l
return n}const l=()=>b(i,document.forms.sendItemForm.elements.target_username.value),m=e=>e.reduce(l(),Promise.resolve({s:1}))
return[n,async function(){const e=g("trade-create-selected")
if(!e.length)return
$("Trade","oneByOne"),a(0,n=1)
const t=await m(e)
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),a(0,n=0))}]}class N extends t{constructor(e){super(),s(this,e,L,B,a,{})}}function Q(e){let t,s
return t=new k({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){r(t.$$.fragment)},m(e,a){i(t,e,a),s=!0},p:y,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){u(t,e)}}}function E(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class F extends t{constructor(e){super(),s(this,e,E,Q,a,{})}}const P=e=>new N({target:e.parentNode})
function _(){const e=S("send-items")
e&&P(e)}function A(){S("trade-items")&&(w(3,_),new F({target:I()}))}export{A as default}
//# sourceMappingURL=trade-Cu1BXRue.js.map
