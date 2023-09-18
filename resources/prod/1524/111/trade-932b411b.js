import{$ as e,S as t,K as s,L as a,M as n,bb as r,O as o,Q as c,bc as i,b6 as l,b9 as m,Y as p,bd as u,l as d,a0 as f,n as $,af as g,a7 as j,c as b,aw as h,X as y,g as w,aN as S,p as I}from"./calfSystem-abb16b0d.js"
import{a as v,s as T}from"./sendItems-ad34279c.js"
import{L as x}from"./LinkButton-e3c794a4.js"
import{Q as N}from"./QuickSelectClasses-b6545dce.js"
import"./basicItem-890121ae.js"
import"./htmlResult-6b7c7e7e.js"
import"./InfoBoxFrom-2b40207c.js"
import"./await_block-78969f55.js"
import"./each-13c4feae.js"
import"./createStyle-deebe923.js"
import"./SelectInST-2c32f199.js"
import"./daLoadInventory-c2278c3f.js"
import"./flattenItems-03659160.js"
import"./isArray-09a53da7.js"
import"./all-414e0607.js"
import"./numberIsNaN-a40c3bbb.js"
function k(e){let t
return{c(){t=f("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function B(e){let t,s,a
return s=new x({props:{disabled:e[0],$$slots:{default:[k]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=n("span"),r(s.$$.fragment),o(t,"class","svelte-erebu9")},m(e,n){c(e,t,n),i(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(l(s.$$.fragment,e),a=!0)},o(e){m(s.$$.fragment,e),a=!1},d(e){e&&p(t),u(s)}}}function L(t,s,a){let n=0
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
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),a(0,n=0))}]}class O extends t{constructor(e){super(),s(this,e,L,B,a,{})}}function Q(e){let t,s
return t=new N({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){r(t.$$.fragment)},m(e,a){i(t,e,a),s=!0},p:y,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){u(t,e)}}}function E(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class F extends t{constructor(e){super(),s(this,e,E,Q,a,{})}}const P=e=>new O({target:e.parentNode})
function _(){const e=w("send-items")
e&&P(e)}function A(){w("trade-items")&&(S(3,_),new F({target:I()}))}export{A as default}
//# sourceMappingURL=trade-932b411b.js.map
