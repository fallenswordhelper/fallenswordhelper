import{$ as e,S as t,L as s,M as a,O as n,bh as r,Q as o,T as c,bi as i,bc as m,bf as l,a0 as u,bj as p,m as f,a3 as d,s as $,aj as g,ab as j,c as b,aA as h,_ as y,g as S,aT as w,p as I}from"./calfSystem-hszmVKJw.js"
import{a as T,s as v}from"./sendItems-m3wddxby.js"
import{L as x}from"./LinkButton-CIWFjfcK.js"
import{Q as k}from"./QuickSelectClasses-BW77p122.js"
import"./basicItem-DJLq_WAO.js"
import"./htmlResult-BpC2-KeU.js"
import"./InfoBoxFrom-DWSB3MVV.js"
import"./await_block-DYQUOgK6.js"
import"./createStyle-BBlLUCwo.js"
import"./SelectInST-B41kJ4UD.js"
import"./daLoadInventory-BWlBTX3u.js"
import"./flattenItems-C4pfIrZn.js"
import"./isArray-eVldfhw1.js"
import"./all-YfMtr2SN.js"
import"./numberIsNaN-CGkd1jiA.js"
function B(e){let t
return{c(){t=d("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&u(t)}}}function L(e){let t,s,a
return s=new x({props:{disabled:e[0],$$slots:{default:[B]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=n("span"),r(s.$$.fragment),o(t,"class","svelte-erebu9")},m(e,n){c(e,t,n),i(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(m(s.$$.fragment,e),a=!0)},o(e){l(s.$$.fragment,e),a=!1},d(e){e&&u(t),p(s)}}}function N(t,s,a){let n=0
const r=f({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>h(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,a){const n=await s
if(n?.s){o(a),a.replaceWith(r)
const s=await(i=t,m=[c(a)],e(v,T,i,m))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(a,s),s}var i,m
return n}const m=()=>b(i,document.forms.sendItemForm.elements.target_username.value),l=e=>e.reduce(m(),Promise.resolve({s:1}))
return[n,async function(){const e=g("trade-create-selected")
if(!e.length)return
$("Trade","oneByOne"),a(0,n=1)
const t=await l(e)
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),a(0,n=0))}]}class O extends t{constructor(e){super(),s(this,e,N,L,a,{})}}function Q(e){let t,s
return t=new k({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){r(t.$$.fragment)},m(e,a){i(t,e,a),s=!0},p:y,i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){l(t.$$.fragment,e),s=!1},d(e){p(t,e)}}}function A(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class E extends t{constructor(e){super(),s(this,e,A,Q,a,{})}}const F=e=>new O({target:e.parentNode})
function R(){const e=S("send-items")
e&&F(e)}function _(){S("trade-items")&&(w(3,R),new E({target:I()}))}export{_ as default}
//# sourceMappingURL=trade-DwHvuE_B.js.map
