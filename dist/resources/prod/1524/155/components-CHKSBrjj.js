import{aj as e,ex as t,ey as s,I as r,H as n,ez as a,bT as i,bS as o,x as c,bd as l,aE as u,C as p,F as d,bz as v,K as h,L as f,c3 as m,c4 as g,A as b,B as y,D,O as k,bi as S,R as w,P as z,de as C,bA as E,s as T,aD as $,E as x,bD as _,a9 as I,eA as Q,d9 as A,co as N,$ as j,_ as M,e as P,cm as q,c as L,ab as B,m as H,u as R,a6 as U,a7 as V,h as W,eB as F,q as G,o as K,bc as O,n as Z,g as J,bo as X}from"./calfSystem-UyQ_FKFu.js"
import{d as Y}from"./daComponents-CR5qvPSg.js"
import{c as ee}from"./closestTd-BatBmXR3.js"
class te extends Map{#e=new Map
#t=e(0)
#s=e(0)
#r=t||-1
constructor(e){if(super(),e){for(var[t,s]of e)super.set(t,s)
this.#s.v=super.size}}#n(r){return t===this.#r?e(r):s(r)}has(e){var t=this.#e,s=t.get(e)
if(void 0===s){if(void 0===super.get(e))return r(this.#t),!1
s=this.#n(0),t.set(e,s)}return r(s),!0}forEach(e,t){this.#a(),super.forEach(e,t)}get(e){var t=this.#e,s=t.get(e)
if(void 0===s){if(void 0===super.get(e))return void r(this.#t)
s=this.#n(0),t.set(e,s)}return r(s),super.get(e)}set(e,t){var s=this.#e,r=s.get(e),i=super.get(e),o=super.set(e,t),c=this.#t
if(void 0===r)r=this.#n(0),s.set(e,r),n(this.#s,super.size),a(c)
else if(i!==t){a(r)
var l=null===c.reactions?null:new Set(c.reactions);(null===l||!r.reactions?.every(e=>l.has(e)))&&a(c)}return o}delete(e){var t=this.#e,s=t.get(e),r=super.delete(e)
return void 0!==s&&(t.delete(e),n(this.#s,super.size),n(s,-1),a(this.#t)),r}clear(){if(0!==super.size){super.clear()
var e=this.#e
for(var t of(n(this.#s,0),e.values()))n(t,-1)
a(this.#t),e.clear()}}#a(){r(this.#t)
var e=this.#e
if(this.#s.v!==e.size)for(var t of super.keys())if(!e.has(t)){var s=this.#n(0)
e.set(t,s)}for([,s]of this.#e)r(s)}keys(){return r(this.#t),super.keys()}values(){return this.#a(),super.values()}entries(){return this.#a(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return r(this.#s),super.size}}const se=i(new te),re=o(se,e=>[...e].reduce((e,[,t])=>e+(t.get("del")?.length??0),0))
var ne=b('<td class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></td>'),ae=b("<td><!></td>"),ie=b('<tr><td><img class="tip-dynamic" alt="component"/></td><td> </td><!></tr>'),oe=b('<tr><td class="compDel svelte-1qoer4b" colspan="3">Deleted</td></tr>')
function ce(e,t){c(t,!0)
const[s,n]=m()
let a=v(()=>g(se,"$compStore",s).get(t.itemId)),i=!0
const o=l()
function b(){i&&(i=!1,T("components","delType"),t.dispatchDelType(t.itemId))}var $=u(),x=p($),_=e=>{var t=ie(),s=D(t),n=D(s),i=y(s),c=D(i),l=y(i),u=e=>{var t=ne()
h(e,t)},p=e=>{var t=ae(),s=D(t)
C(s,{onclick:b,children:(e,t)=>{var s=E("Del")
h(e,s)}}),h(e,t)}
d(l,e=>{r(a).get("delPending")?e(u):e(p,!1)}),k((e,t,s)=>{w(n,"src",e),w(n,"data-tipped",t),z(c,s)},[()=>{return e=r(a),`${S}items/${e.get("b")}.gif`
var e},()=>{return`fetchitem.php?item_id=${(e=r(a)).get("b")}&inv_id=${e.get("a")}&t=2&p=${o}&vcode=${e.get("v")}`
var e},()=>r(a).get("del").length]),h(e,t)},I=e=>{var t=oe()
h(e,t)}
d(x,e=>{r(a).get("del").length?e(_):e(I,!1)}),h(e,$),f(),n()}var le=b('<div><table class="fshTblCenter"><thead><tr><th colspan="3">Component Summary</th></tr><tr><th>Total:</th><th colspan="2"> </th></tr></thead><tbody></tbody></table></div>'),ue=b('<p style="color: red"> </p>'),pe=b('<div class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></div>')
function de(e,t){c(t,!0)
const[s,n]=m()
var a=u(),i=p(a)
$(i,async function(){const e=await async function(e){const t=await e()
if(!t?.s)throw new Error(t?.e?.message??"Unknown Error")
return t}(Y)
return{rollup:function(e){const t=new te(_(e,"b").map(t=>{return[t.b,(s={...t,del:e.filter(({b:e})=>e===t.b).map(({a:e})=>e),delPending:!1},new te(I(s)))]
var s}))
return se.set(t),[...t.keys()]}(e.r),maxComp:e.h?.p.find(({k:e})=>56===e)?.v}},e=>{var t=pe()
h(e,t)},(e,n)=>{var a=v(()=>{var{rollup:e,maxComp:t}=r(n)
return{rollup:e,maxComp:t}}),i=v(()=>r(a).rollup),o=v(()=>r(a).maxComp),c=le(),l=D(c),u=D(l),p=y(D(u)),d=y(D(p)),f=D(d),m=y(u)
x(m,20,()=>r(i),e=>e,(e,s)=>{ce(e,{get dispatchDelType(){return t.dispatchDelType},get itemId(){return s}})}),k(()=>z(f,`${g(re,"$total",s)??""} / ${r(o)??""}`)),h(e,c)},(e,t)=>{var s=ue(),n=D(s)
k(()=>z(n,r(t).message)),h(e,s)}),h(e,a),f(),n()}var ve=b("<div><!></div>"),he=b("<div><!></div>"),fe=b('<div><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>'),me=b('<div class="fshCenter"><!> <!> <div><!></div> <!></div>')
function ge(t,s){c(s,!0)
let a=e(void 0),i=e(void 0),o=!0,l=!0,u=!0
function p(){o&&(o=!1,T("components","enableQuickDel"),n(a,!0),s.dispatchQuickDel())}function v(){l&&(l=!1,T("components","countComponents"),n(i,!0))}function m(){u&&(u=!1,T("components","deleteAllVisible"),s.dispatchDelete())}var g=me(),b=D(g),k=e=>{var t=ve(),s=D(t)
C(s,{onclick:p,children:(e,t)=>{var s=E("Enable Quick Del")
h(e,s)}}),h(e,t)}
d(b,e=>{r(a)||e(k)})
var S=y(b,2),w=e=>{var t=he(),s=D(t)
C(s,{onclick:v,children:(e,t)=>{var s=E("Count Components")
h(e,s)}}),h(e,t)},z=e=>{de(e,{get dispatchDelType(){return s.dispatchDelType}})}
d(S,e=>{r(i)?e(z,!1):e(w)})
var $=y(S,2),x=D($)
C(x,{onclick:function(){T("components","insertQuickExtract"),Q()},children:(e,t)=>{var s=E("Quick Extract")
h(e,s)}})
var _=y($,2),I=e=>{var t=fe(),s=D(t)
A(s,()=>({"--button-color":"red"})),C(s.lastChild,{onclick:m,children:(e,t)=>{var s=E("Delete All Visible")
h(e,s)}}),h(e,t)}
d(_,e=>{r(a)&&e(I)}),h(t,g),f()}function be(e){return N({subcmd:"destroycomponent",removeIndex:e})}async function ye(e){const t=await P({cmd:"profile",subcmd:"destroycomponent",component_id:e})
return t?function(e,t){const s=q(t)
return{r:"Component destroyed."===s?0:1,m:s,c:e}}(e,t):{s:!1}}async function De(e){return function(e){const t=e.filter(e=>0===e.r),s=e.filter(e=>1===e.r)
return t.length>0?{r:t.map(e=>e.c),s:!0}:s.length>0?{e:{message:s[0].m},s:!1}:{e:{message:e[0].m},s:!1}}(await M(e.map(ye)))}function ke(e){if(!e)return
const t=e.children[0]
return t.replaceWith(R({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),t}function Se(e,t){!function(e,t,s){se.update(r=>(r.get(e)?.set(t,s),r))}(t,"delPending",e)}const we=([,e])=>e,ze=e=>_(e.map(we)),Ce=([,,e])=>e,Ee=e=>function(e,t){se.update(s=>(function(e,t){if(!t)return
const s=t.get("del").filter(t=>!e.includes(t))
t.set("del",s)}(t,s.get(e)),s))}(...e)
async function Te(e){const t=e.map(([e])=>[e,ke(e)])
const s=await(r=e.map(Ce),j(be,De,r))
var r
s?.s?((e=>ze(e).map(t=>[t,e.filter(([,e])=>e===t).map(Ce)]))(e).forEach(Ee),(e=>{e.forEach(([e])=>e?.children[0]?.remove())})(t)):(H(s?.e?.message??"Unknown Error"),function(e){e.forEach(([e,t])=>{t&&e.children[0].replaceWith(t)})}(t))}async function $e(e){const t=ze(e)
t.forEach(L(Se,!0)),await M(B(30,e).map(Te)),t.forEach(L(Se,!1))}function xe(e){const{itemId:t,invId:s}=U(V,e.dataset.tipped)
return[Number(t),Number(s)]}const _e=e=>[ee(e),...xe(e)]
function Ie(e){$e(W("img",e).map(_e))}function Qe(e,t){$e((e=>F(se).get(e).get("del"))(t).map(s=>{return[(r=e,n=s,ee(G(`img[data-tipped*="&inv_id=${n}&"]`,r))),t,s]
var r,n}))}function Ae(e){"IMG"===e.target.tagName&&(e.preventDefault(),T("components","quickDel"),O(e.target),$e([[ee(e.target),...xe(e.target)]]))}function Ne(e){e.classList.add("fshQuickDel"),K(e,Ae)}function je(){const e=function(){const e=J("profileRightColumn"),t=X("inventory-table",e)
if(2===t.length)return t[1]}()
e&&Z(ge,{props:{dispatchDelete:L(Ie,e),dispatchDelType:L(Qe,e),dispatchQuickDel:L(Ne,e)},target:e.parentNode})}export{je as default}
//# sourceMappingURL=components-CHKSBrjj.js.map
