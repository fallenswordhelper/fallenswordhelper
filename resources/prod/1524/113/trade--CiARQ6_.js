import{$ as e,S as t,J as s,K as a,L as r,b9 as n,N as o,P as c,ba as i,b4 as m,b7 as l,X as p,bb as u,m as d,_ as f,s as $,ae as g,a6 as j,c as b,av as y,W as h,g as I,aL as S,p as v}from"./calfSystem-VUa7wwu1.js"
import{a as w,s as T}from"./sendItems-jb2UB57A.js"
import{L as x}from"./LinkButton-ssp0QiF9.js"
import{Q as N}from"./QuickSelectClasses-Of6sCmAi.js"
import"./basicItem-kaFdTj90.js"
import"./htmlResult-2SClkrBU.js"
import"./InfoBoxFrom-ZDQHMQ-G.js"
import"./await_block-5SUqwqnQ.js"
import"./each-z4oZkgsq.js"
import"./createStyle-RLyU9kJv.js"
import"./SelectInST-Dk0-8rdi.js"
import"./daLoadInventory-ATAyY-27.js"
import"./flattenItems-OuxkqZMH.js"
import"./isArray-bNviZzJA.js"
import"./all-TTLWag-d.js"
import"./playerId-wTCAZ6WR.js"
import"./numberIsNaN--k2kVli9.js"
function L(e){let t
return{c(){t=f("OneByOne")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function k(e){let t,s,a
return s=new x({props:{disabled:e[0],$$slots:{default:[L]},$$scope:{ctx:e}}}),s.$on("click",e[1]),{c(){t=r("span"),n(s.$$.fragment),o(t,"class","svelte-erebu9")},m(e,r){c(e,t,r),i(s,t,null),a=!0},p(e,[t]){const a={}
1&t&&(a.disabled=e[0]),8192&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||(m(s.$$.fragment,e),a=!0)},o(e){l(s.$$.fragment,e),a=!1},d(e){e&&p(t),u(s)}}}function B(t,s,a){let r=0
const n=d({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=e=>y(e.children[0]),c=e=>e.id.split("-").at(-1)
async function i(t,s,a){const r=await s
if(r?.s){o(a),a.replaceWith(n)
const s=await(i=t,m=[c(a)],e(T,w,i,m))
return s&&function(e,t){t.s?(jQuery(n.parentElement).qtip("disable"),n.parentElement.removeAttribute("class"),n.remove()):(n.replaceWith(e),o(e))}(a,s),s}var i,m
return r}const m=()=>b(i,document.forms.sendItemForm.elements.target_username.value),l=e=>e.reduce(m(),Promise.resolve({s:1}))
return[r,async function(){const e=g("trade-create-selected")
if(!e.length)return
$("Trade","oneByOne"),a(0,r=1)
const t=await l(e)
t&&(!function(e){e.s?j("Items sent successfully!"):j(e.e.message)}(t),a(0,r=0))}]}class E extends t{constructor(e){super(),s(this,e,B,k,a,{})}}function F(e){let t,s
return t=new N({props:{wantsTagged:"1"}}),t.$on("perf",e[0]),t.$on("select",e[1]),t.$on("toggle",e[2]),{c(){n(t.$$.fragment)},m(e,a){i(t,e,a),s=!0},p:h,i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){l(t.$$.fragment,e),s=!1},d(e){u(t,e)}}}function O(e){return[()=>$("Trade","doPerf"),e=>$("Trade","doSelect",e.detail),()=>$("Trade","toggleSelectST")]}class P extends t{constructor(e){super(),s(this,e,O,F,a,{})}}const Q=e=>new E({target:e.parentNode})
function W(){const e=I("send-items")
e&&Q(e)}function _(){I("trade-items")&&(S(3,W),new P({target:v()}))}export{_ as default}
//# sourceMappingURL=trade--CiARQ6_.js.map
