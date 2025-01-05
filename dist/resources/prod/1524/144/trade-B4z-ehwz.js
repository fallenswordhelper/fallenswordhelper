import{$ as e,S as t,O as s,P as a,R as n,bF as r,U as o,W as c,bG as i,bA as l,bD as m,a4 as u,bH as f,m as p,a7 as d,s as $,ap as g,af as j,c as b,b4 as h,a3 as y,g as S,bb as v,p as w}from"./calfSystem-fMW-YMyF.js"
import{a as x,s as I}from"./sendItems-CLqdpc-M.js"
import{L as T}from"./LinkButton-9QqGD9_1.js"
import{Q as k}from"./QuickSelectClasses-9TBCYARy.js"
import"./basicItem-Co_lZL1x.js"
import"./htmlResult-DQb6ND1_.js"
import"./InfoBoxFrom-BQSTjSr-.js"
import"./createStyle-2f8g7MV4.js"
import"./SelectInST-CCsv6FPJ.js"
import"./daLoadInventory-C5VqDf3X.js"
import"./flattenItems-DBwSgTaC.js"
function B(e){let t
return{c(){t=d("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&u(t)}}}function O(e){let t,s,a
return s=new T({props:{disabled:e[0],$$slots:{default:[B]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=n("span"),r(s.$$.fragment),o(t,"class","svelte-frjaep")},m(e,n){c(e,t,n),i(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(l(s.$$.fragment,e),a=!0)},o(e){m(s.$$.fragment,e),a=!1},d(e){e&&u(t),f(s)}}}function F(t,s,a){let n=0
const r=p({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>h(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,a){const n=await s
if(n?.s){o(a),a.replaceWith(r)
const s=await(i=t,l=[c(a)],e(I,x,i,l))
return s&&function(e,t){t.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(e),o(e))}(a,s),s}var i,l
return n}const l=()=>b(i,document.forms.sendItemForm.elements.target_username.value),m=e=>e.reduce(l(),Promise.resolve({s:1}))
return[n,async function(){const e=g("trade-create-selected")
if(!e.length)return
$("Trade","oneByOne"),a(0,n=1)
const t=await m(e)
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),a(0,n=0))}]}class L extends t{constructor(e){super(),s(this,e,F,O,a,{})}}function P(e){let t,s
return t=new k({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){r(t.$$.fragment)},m(e,a){i(t,e,a),s=!0},p:y,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){f(t,e)}}}function Q(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class R extends t{constructor(e){super(),s(this,e,Q,P,a,{})}}const W=e=>new L({target:e.parentNode})
function A(){const e=S("send-items")
e&&W(e)}function E(){S("trade-items")&&(v(3,A),new R({target:w()}))}export{E as default}
//# sourceMappingURL=trade-B4z-ehwz.js.map
