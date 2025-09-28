import{aj as e,ek as t,el as s,J as r,I as n,em as a,bV as i,bU as o,x as c,bh as l,aF as u,D as p,G as d,bB as v,L as h,N as f,c5 as m,c6 as g,B as b,C as y,E as k,P as D,bk as S,S as w,Q as C,dL as E,bC as z,s as $,aE as T,F as _,bF as x,aa as I,en as Q,d7 as N,cq as j,$ as q,a0 as L,e as M,co as P,c as F,m as U,u as V,a7 as A,a8 as B,h as G,eo as W,q as H,o as J,bg as R,n as K,g as O,bq as X}from"./calfSystem-CIuUjh4H.js"
import{d as Y}from"./daComponents-DKKOjHMl.js"
import{c as Z}from"./closestTd-B7y5yK0X.js"
import{c as ee}from"./chunk-zr9rAXvK.js"
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
var ne=b('<td class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></td>'),ae=b("<td><!></td>"),ie=b('<tr><td><img class="tip-dynamic" alt="component"/></td><td> </td><!></tr>'),oe=b('<tr><td class="compDel svelte-1phdchv" colspan="3">Deleted</td></tr>')
function ce(e,t){c(t,!0)
const[s,n]=m()
let a=v(()=>g(se,"$compStore",s).get(t.itemId)),i=!0
const o=l()
function b(){i&&(i=!1,$("components","delType"),t.dispatchDelType(t.itemId))}var T=u(),_=p(T),x=e=>{var t=ie(),s=k(t),n=k(s),i=y(s),c=k(i),l=y(i),u=e=>{var t=ne()
h(e,t)},p=e=>{var t=ae(),s=k(t)
E(s,{onclick:b,children:(e,t)=>{var s=z("Del")
h(e,s)}}),h(e,t)}
d(l,e=>{r(a).get("delPending")?e(u):e(p,!1)}),D((e,t,s)=>{w(n,"src",e),w(n,"data-tipped",t),C(c,s)},[()=>{return e=r(a),`${S}items/${e.get("b")}.gif`
var e},()=>{return`fetchitem.php?item_id=${(e=r(a)).get("b")}&inv_id=${e.get("a")}&t=2&p=${o}&vcode=${e.get("v")}`
var e},()=>r(a).get("del").length]),h(e,t)},I=e=>{var t=oe()
h(e,t)}
d(_,e=>{r(a).get("del").length?e(x):e(I,!1)}),h(e,T),f(),n()}var le=b('<div><table class="fshTblCenter"><thead><tr><th colspan="3">Component Summary</th></tr><tr><th>Total:</th><th colspan="2"> </th></tr></thead><tbody></tbody></table></div>'),ue=b('<p style="color: red"> </p>'),pe=b('<div class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></div>')
function de(e,t){c(t,!0)
const[s,n]=m()
var a=u(),i=p(a)
T(i,async function(){const e=await async function(e){const t=await e()
if(!t?.s)throw new Error(t?.e?.message??"Unknown Error")
return t}(Y)
return{rollup:function(e){const t=new te(x(e,"b").map(t=>{return[t.b,(s={...t,del:e.filter(({b:e})=>e===t.b).map(({a:e})=>e),delPending:!1},new te(I(s)))]
var s}))
return se.set(t),[...t.keys()]}(e.r),maxComp:e.h?.p.find(({k:e})=>56===e)?.v}},e=>{var t=pe()
h(e,t)},(e,n)=>{var a=v(()=>{var{rollup:e,maxComp:t}=r(n)
return{rollup:e,maxComp:t}}),i=v(()=>r(a).rollup),o=v(()=>r(a).maxComp),c=le(),l=k(c),u=k(l),p=y(k(u)),d=y(k(p)),f=k(d),m=y(u)
_(m,20,()=>r(i),e=>e,(e,s)=>{ce(e,{get dispatchDelType(){return t.dispatchDelType},get itemId(){return s}})}),D(()=>C(f,`${g(re,"$total",s)??""} / ${r(o)??""}`)),h(e,c)},(e,t)=>{var s=ue(),n=k(s)
D(()=>C(n,r(t).message)),h(e,s)}),h(e,a),f(),n()}var ve=b("<div><!></div>"),he=b("<div><!></div>"),fe=b('<div><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>'),me=b('<div class="fshCenter"><!> <!> <div><!></div> <!></div>')
function ge(t,s){c(s,!0)
let a=e(void 0),i=e(void 0),o=!0,l=!0,u=!0
function p(){o&&(o=!1,$("components","enableQuickDel"),n(a,!0),s.dispatchQuickDel())}function v(){l&&(l=!1,$("components","countComponents"),n(i,!0))}function m(){u&&(u=!1,$("components","deleteAllVisible"),s.dispatchDelete())}var g=me(),b=k(g),D=e=>{var t=ve(),s=k(t)
E(s,{onclick:p,children:(e,t)=>{var s=z("Enable Quick Del")
h(e,s)}}),h(e,t)}
d(b,e=>{r(a)||e(D)})
var S=y(b,2),w=e=>{var t=he(),s=k(t)
E(s,{onclick:v,children:(e,t)=>{var s=z("Count Components")
h(e,s)}}),h(e,t)},C=e=>{de(e,{get dispatchDelType(){return s.dispatchDelType}})}
d(S,e=>{r(i)?e(C,!1):e(w)})
var T=y(S,2),_=k(T)
E(_,{onclick:function(){$("components","insertQuickExtract"),Q()},children:(e,t)=>{var s=z("Quick Extract")
h(e,s)}})
var x=y(T,2),I=e=>{var t=fe(),s=k(t)
N(s,()=>({"--button-color":"red"})),E(s.lastChild,{onclick:m,children:(e,t)=>{var s=z("Delete All Visible")
h(e,s)}}),h(e,t)}
d(x,e=>{r(a)&&e(I)}),h(t,g),f()}function be(e){return j({subcmd:"destroycomponent",removeIndex:e})}async function ye(e){const t=await M({cmd:"profile",subcmd:"destroycomponent",component_id:e})
return t?function(e,t){const s=P(t)
return{r:"Component destroyed."===s?0:1,m:s,c:e}}(e,t):{s:!1}}async function ke(e){return function(e){const t=e.filter(e=>0===e.r),s=e.filter(e=>1===e.r)
return t.length>0?{r:t.map(e=>e.c),s:!0}:s.length>0?{e:{message:s[0].m},s:!1}:{e:{message:e[0].m},s:!1}}(await L(e.map(ye)))}function De(e){if(!e)return
const t=e.children[0]
return t.replaceWith(V({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),t}function Se(e,t){!function(e,t,s){se.update(r=>(r.get(e)?.set(t,s),r))}(t,"delPending",e)}const we=([,e])=>e,Ce=e=>x(e.map(we)),Ee=([,,e])=>e,ze=e=>function(e,t){se.update(s=>(function(e,t){if(!t)return
const s=t.get("del").filter(t=>!e.includes(t))
t.set("del",s)}(t,s.get(e)),s))}(...e)
async function $e(e){const t=e.map(([e])=>[e,De(e)])
const s=await(r=e.map(Ee),q(be,ke,r))
var r
s?.s?((e=>Ce(e).map(t=>[t,e.filter(([,e])=>e===t).map(Ee)]))(e).forEach(ze),(e=>{e.forEach(([e])=>e?.children[0]?.remove())})(t)):(U(s?.e?.message??"Unknown Error"),function(e){e.forEach(([e,t])=>{t&&e.children[0].replaceWith(t)})}(t))}async function Te(e){const t=Ce(e)
t.forEach(F(Se,!0)),await L(ee(30,e).map($e)),t.forEach(F(Se,!1))}function _e(e){const{itemId:t,invId:s}=A(B,e.dataset.tipped)
return[Number(t),Number(s)]}const xe=e=>[Z(e),..._e(e)]
function Ie(e){Te(G("img",e).map(xe))}function Qe(e,t){Te((e=>W(se).get(e).get("del"))(t).map(s=>{return[(r=e,n=s,Z(H(`img[data-tipped*="&inv_id=${n}&"]`,r))),t,s]
var r,n}))}function Ne(e){"IMG"===e.target.tagName&&(e.preventDefault(),$("components","quickDel"),R(e.target),Te([[Z(e.target),..._e(e.target)]]))}function je(e){e.classList.add("fshQuickDel"),J(e,Ne)}function qe(){const e=function(){const e=O("profileRightColumn"),t=X("inventory-table",e)
if(2===t.length)return t[1]}()
e&&K(ge,{props:{dispatchDelete:F(Ie,e),dispatchDelType:F(Qe,e),dispatchQuickDel:F(je,e)},target:e.parentNode})}export{qe as default}
//# sourceMappingURL=components-BbbhKNKA.js.map
