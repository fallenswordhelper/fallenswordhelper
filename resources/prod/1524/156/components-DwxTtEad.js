import{ak as e,eq as t,er as s,J as r,I as n,es as a,bU as i,bT as o,x as c,be as l,aF as u,D as p,G as d,bA as v,L as h,N as f,c4 as m,c5 as g,B as b,C as y,E as k,P as D,bj as S,S as w,Q as E,dR as C,bB as z,s as T,aE as $,F as x,bE as _,aa as I,et as Q,d3 as N,cp as j,$ as q,a0 as M,e as P,cn as U,c as A,ac as L,m as B,u as F,a7 as G,a8 as R,h as V,eu as W,q as H,o as J,bd as K,n as O,g as X,bp as Y}from"./calfSystem-79LsojAC.js"
import{d as Z}from"./daComponents-Cjweul_Q.js"
import{c as ee}from"./closestTd-Cb8gpQCm.js"
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
function b(){i&&(i=!1,T("components","delType"),t.dispatchDelType(t.itemId))}var $=u(),x=p($),_=e=>{var t=ie(),s=k(t),n=k(s),i=y(s),c=k(i),l=y(i),u=e=>{var t=ne()
h(e,t)},p=e=>{var t=ae(),s=k(t)
C(s,{onclick:b,children:(e,t)=>{var s=z("Del")
h(e,s)}}),h(e,t)}
d(l,e=>{r(a).get("delPending")?e(u):e(p,!1)}),D((e,t,s)=>{w(n,"src",e),w(n,"data-tipped",t),E(c,s)},[()=>{return e=r(a),`${S}items/${e.get("b")}.gif`
var e},()=>{return`fetchitem.php?item_id=${(e=r(a)).get("b")}&inv_id=${e.get("a")}&t=2&p=${o}&vcode=${e.get("v")}`
var e},()=>r(a).get("del").length]),h(e,t)},I=e=>{var t=oe()
h(e,t)}
d(x,e=>{r(a).get("del").length?e(_):e(I,!1)}),h(e,$),f(),n()}var le=b('<div><table class="fshTblCenter"><thead><tr><th colspan="3">Component Summary</th></tr><tr><th>Total:</th><th colspan="2"> </th></tr></thead><tbody></tbody></table></div>'),ue=b('<p style="color: red"> </p>'),pe=b('<div class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></div>')
function de(e,t){c(t,!0)
const[s,n]=m()
var a=u(),i=p(a)
$(i,async function(){const e=await async function(e){const t=await e()
if(!t?.s)throw new Error(t?.e?.message??"Unknown Error")
return t}(Z)
return{rollup:function(e){const t=new te(_(e,"b").map(t=>{return[t.b,(s={...t,del:e.filter(({b:e})=>e===t.b).map(({a:e})=>e),delPending:!1},new te(I(s)))]
var s}))
return se.set(t),[...t.keys()]}(e.r),maxComp:e.h?.p.find(({k:e})=>56===e)?.v}},e=>{var t=pe()
h(e,t)},(e,n)=>{var a=v(()=>{var{rollup:e,maxComp:t}=r(n)
return{rollup:e,maxComp:t}}),i=v(()=>r(a).rollup),o=v(()=>r(a).maxComp),c=le(),l=k(c),u=k(l),p=y(k(u)),d=y(k(p)),f=k(d),m=y(u)
x(m,20,()=>r(i),e=>e,(e,s)=>{ce(e,{get dispatchDelType(){return t.dispatchDelType},get itemId(){return s}})}),D(()=>E(f,`${g(re,"$total",s)??""} / ${r(o)??""}`)),h(e,c)},(e,t)=>{var s=ue(),n=k(s)
D(()=>E(n,r(t).message)),h(e,s)}),h(e,a),f(),n()}var ve=b("<div><!></div>"),he=b("<div><!></div>"),fe=b('<div><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>'),me=b('<div class="fshCenter"><!> <!> <div><!></div> <!></div>')
function ge(t,s){c(s,!0)
let a=e(void 0),i=e(void 0),o=!0,l=!0,u=!0
function p(){o&&(o=!1,T("components","enableQuickDel"),n(a,!0),s.dispatchQuickDel())}function v(){l&&(l=!1,T("components","countComponents"),n(i,!0))}function m(){u&&(u=!1,T("components","deleteAllVisible"),s.dispatchDelete())}var g=me(),b=k(g),D=e=>{var t=ve(),s=k(t)
C(s,{onclick:p,children:(e,t)=>{var s=z("Enable Quick Del")
h(e,s)}}),h(e,t)}
d(b,e=>{r(a)||e(D)})
var S=y(b,2),w=e=>{var t=he(),s=k(t)
C(s,{onclick:v,children:(e,t)=>{var s=z("Count Components")
h(e,s)}}),h(e,t)},E=e=>{de(e,{get dispatchDelType(){return s.dispatchDelType}})}
d(S,e=>{r(i)?e(E,!1):e(w)})
var $=y(S,2),x=k($)
C(x,{onclick:function(){T("components","insertQuickExtract"),Q()},children:(e,t)=>{var s=z("Quick Extract")
h(e,s)}})
var _=y($,2),I=e=>{var t=fe(),s=k(t)
N(s,()=>({"--button-color":"red"})),C(s.lastChild,{onclick:m,children:(e,t)=>{var s=z("Delete All Visible")
h(e,s)}}),h(e,t)}
d(_,e=>{r(a)&&e(I)}),h(t,g),f()}function be(e){return j({subcmd:"destroycomponent",removeIndex:e})}async function ye(e){const t=await P({cmd:"profile",subcmd:"destroycomponent",component_id:e})
return t?function(e,t){const s=U(t)
return{r:"Component destroyed."===s?0:1,m:s,c:e}}(e,t):{s:!1}}async function ke(e){return function(e){const t=e.filter(e=>0===e.r),s=e.filter(e=>1===e.r)
return t.length>0?{r:t.map(e=>e.c),s:!0}:s.length>0?{e:{message:s[0].m},s:!1}:{e:{message:e[0].m},s:!1}}(await M(e.map(ye)))}function De(e){if(!e)return
const t=e.children[0]
return t.replaceWith(F({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),t}function Se(e,t){!function(e,t,s){se.update(r=>(r.get(e)?.set(t,s),r))}(t,"delPending",e)}const we=([,e])=>e,Ee=e=>_(e.map(we)),Ce=([,,e])=>e,ze=e=>function(e,t){se.update(s=>(function(e,t){if(!t)return
const s=t.get("del").filter(t=>!e.includes(t))
t.set("del",s)}(t,s.get(e)),s))}(...e)
async function Te(e){const t=e.map(([e])=>[e,De(e)])
const s=await(r=e.map(Ce),q(be,ke,r))
var r
s?.s?((e=>Ee(e).map(t=>[t,e.filter(([,e])=>e===t).map(Ce)]))(e).forEach(ze),(e=>{e.forEach(([e])=>e?.children[0]?.remove())})(t)):(B(s?.e?.message??"Unknown Error"),function(e){e.forEach(([e,t])=>{t&&e.children[0].replaceWith(t)})}(t))}async function $e(e){const t=Ee(e)
t.forEach(A(Se,!0)),await M(L(30,e).map(Te)),t.forEach(A(Se,!1))}function xe(e){const{itemId:t,invId:s}=G(R,e.dataset.tipped)
return[Number(t),Number(s)]}const _e=e=>[ee(e),...xe(e)]
function Ie(e){$e(V("img",e).map(_e))}function Qe(e,t){$e((e=>W(se).get(e).get("del"))(t).map(s=>{return[(r=e,n=s,ee(H(`img[data-tipped*="&inv_id=${n}&"]`,r))),t,s]
var r,n}))}function Ne(e){"IMG"===e.target.tagName&&(e.preventDefault(),T("components","quickDel"),K(e.target),$e([[ee(e.target),...xe(e.target)]]))}function je(e){e.classList.add("fshQuickDel"),J(e,Ne)}function qe(){const e=function(){const e=X("profileRightColumn"),t=Y("inventory-table",e)
if(2===t.length)return t[1]}()
e&&O(ge,{props:{dispatchDelete:A(Ie,e),dispatchDelType:A(Qe,e),dispatchQuickDel:A(je,e)},target:e.parentNode})}export{qe as default}
//# sourceMappingURL=components-DwxTtEad.js.map
