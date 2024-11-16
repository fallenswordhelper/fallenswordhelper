import{$ as e,S as t,L as s,M as a,O as n,R as r,V as o,be as i,bf as c,bg as l,bh as m,U as p,bi as u,X as f,k as d,aj as $,s as g,b as j,aP as b,ae as h,Z as y,g as S,aV as w,p as I}from"./calfSystem-Blt4DbaE.js"
import{a as v,s as x}from"./sendItems-C0afaFYQ.js"
import{L as T}from"./LinkButton-CTQrdC0s.js"
import{Q as k}from"./QuickSelectClasses-CWTvxJVb.js"
import"./basicItem-B4VQEJwm.js"
import"./htmlResult-CMCcQMTR.js"
import"./InfoBoxFrom-CMB3qrKm.js"
import"./await_block-Bf7EOqQ9.js"
import"./createStyle-C5mK_M_l.js"
import"./SelectInST-CX3QyODd.js"
import"./daLoadInventory-XbR6QBDO.js"
import"./flattenItems-C4pfIrZn.js"
import"./isArray-eVldfhw1.js"
import"./all-YfMtr2SN.js"
import"./numberIsNaN-CGkd1jiA.js"
function B(e){let t
return{c(){t=o("OneByOne")},m(e,s){r(e,t,s)},d(e){e&&n(t)}}}function N(e){let t,s,a
return s=new T({props:{disabled:e[0],$$slots:{default:[B]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=p("span"),u(s.$$.fragment),f(t,"class","svelte-frjaep")},m(e,n){r(e,t,n),m(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(l(s.$$.fragment,e),a=!0)},o(e){c(s.$$.fragment,e),a=!1},d(e){e&&n(t),i(s)}}}function L(t,s,a){let n=0
const r=d({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>b(e.children[0]),i=e=>e.id.split("-").at(-1)
async function c(t,s,a){const n=await s
if(n?.s){o(a),a.replaceWith(r)
const s=await(c=t,l=[i(a)],e(x,v,c,l))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(a,s),s}var c,l
return n}const l=()=>j(c,document.forms.sendItemForm.elements.target_username.value),m=e=>e.reduce(l(),Promise.resolve({s:1}))
return[n,async function(){const e=$("trade-create-selected")
if(!e.length)return
g("Trade","oneByOne"),a(0,n=1)
const t=await m(e)
t&&(!function(e){e.s?h("Items sent successfully!"):h(e.e.message)}(t),a(0,n=0))}]}class O extends t{constructor(e){super(),s(this,e,L,N,a,{})}}function E(e){let t,s
return t=new k({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){u(t.$$.fragment)},m(e,a){m(t,e,a),s=!0},p:y,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){i(t,e)}}}function P(e){return[()=>g("Trade","doPerf"),e=>g("Trade","doSelect",e.detail),()=>g("Trade","toggleSelectST")]}class Q extends t{constructor(e){super(),s(this,e,P,E,a,{})}}const R=e=>new O({target:e.parentNode})
function _(){const e=S("send-items")
e&&R(e)}function A(){S("trade-items")&&(w(3,_),new Q({target:I()}))}export{A as default}
//# sourceMappingURL=trade-BRDknqQq.js.map
