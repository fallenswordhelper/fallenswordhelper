import{$ as e,S as t,J as s,K as a,L as n,ba as r,N as o,P as c,bb as i,b5 as l,b8 as m,X as p,bc as u,l as d,_ as f,n as $,ae as g,a6 as j,c as b,av as h,W as y,g as S,aM as v,p as w}from"./calfSystem-4830a18d.js"
import{a as I,s as T}from"./sendItems-2a530a59.js"
import{L as x}from"./LinkButton-59368dc4.js"
import{Q as L}from"./QuickSelectClasses-4ef98ba3.js"
import"./basicItem-cb072d2b.js"
import"./htmlResult-7fa1a7c5.js"
import"./InfoBoxFrom-29ddbf6c.js"
import"./await_block-31b017e2.js"
import"./each-1f09c43f.js"
import"./createStyle-79b7cdab.js"
import"./SelectInST-8c6a2089.js"
import"./daLoadInventory-9c7bd6b5.js"
import"./flattenItems-03659160.js"
import"./isArray-09a53da7.js"
import"./all-414e0607.js"
import"./numberIsNaN-a40c3bbb.js"
function N(e){let t
return{c(){t=f("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function k(e){let t,s,a
return s=new x({props:{disabled:e[0],$$slots:{default:[N]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=n("span"),r(s.$$.fragment),o(t,"class","svelte-erebu9")},m(e,n){c(e,t,n),i(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(l(s.$$.fragment,e),a=!0)},o(e){m(s.$$.fragment,e),a=!1},d(e){e&&p(t),u(s)}}}function B(t,s,a){let n=0
const r=d({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>h(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,a){const n=await s
if(n?.s){o(a),a.replaceWith(r)
const s=await(i=t,l=[c(a)],e(T,I,i,l))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(a,s),s}var i,l
return n}const l=()=>b(i,document.forms.sendItemForm.elements.target_username.value),m=e=>e.reduce(l(),Promise.resolve({s:1}))
return[n,async function(){const e=g("trade-create-selected")
if(!e.length)return
$("Trade","oneByOne"),a(0,n=1)
const t=await m(e)
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),a(0,n=0))}]}class Q extends t{constructor(e){super(),s(this,e,B,k,a,{})}}function E(e){let t,s
return t=new L({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){r(t.$$.fragment)},m(e,a){i(t,e,a),s=!0},p:y,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){u(t,e)}}}function F(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class O extends t{constructor(e){super(),s(this,e,F,E,a,{})}}const P=e=>new Q({target:e.parentNode})
function W(){const e=S("send-items")
e&&P(e)}function _(){S("trade-items")&&(v(3,W),new O({target:w()}))}export{_ as default}
//# sourceMappingURL=trade-d68e81f3.js.map
