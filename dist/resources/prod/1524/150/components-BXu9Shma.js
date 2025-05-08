import{W as e,ey as t,V as s,bL as r,bK as n,R as a,b3 as i,at as o,au as c,a0 as l,bp as p,a3 as u,a4 as d,bX as v,bY as f,X as h,Y as m,Z as g,a7 as b,b8 as y,br as k,a8 as D,da as S,bq as w,s as z,as as C,_ as E,bu as $,H as T,ez as x,S as _,d7 as I,cg as Q,$ as N,x as q,k as M,ce as V,e as j,J as A,ah as L,u as P,E as W,F as H,n as R,eA as U,q as X,o as Y,b2 as F,ad as G,g as J,be as K}from"./calfSystem-BGOTz8de.js"
import{d as Z}from"./daComponents-U_NVlv7j.js"
import{c as B}from"./closestTd-BESShMmR.js"
function O(t){e(t,t.v+1)}class ee extends Map{#e=new Map
#t=t(0)
#s=t(0)
constructor(e){if(super(),e){for(var[t,s]of e)super.set(t,s)
this.#s.v=super.size}}has(e){var r=this.#e,n=r.get(e)
if(void 0===n){if(void 0===super.get(e))return s(this.#t),!1
n=t(0),r.set(e,n)}return s(n),!0}forEach(e,t){this.#r(),super.forEach(e,t)}get(e){var r=this.#e,n=r.get(e)
if(void 0===n){if(void 0===super.get(e))return void s(this.#t)
n=t(0),r.set(e,n)}return s(n),super.get(e)}set(s,r){var n=this.#e,a=n.get(s),i=super.get(s),o=super.set(s,r),c=this.#t
if(void 0===a)n.set(s,t(0)),e(this.#s,super.size),O(c)
else if(i!==r){O(a)
var l=null===c.reactions?null:new Set(c.reactions);(null===l||!a.reactions?.every((e=>l.has(e))))&&O(c)}return o}delete(t){var s=this.#e,r=s.get(t),n=super.delete(t)
return void 0!==r&&(s.delete(t),e(this.#s,super.size),e(r,-1),O(this.#t)),n}clear(){if(0!==super.size){super.clear()
var t=this.#e
for(var s of(e(this.#s,0),t.values()))e(s,-1)
O(this.#t),t.clear()}}#r(){s(this.#t)
var e=this.#e
if(this.#s.v!==e.size)for(var r of super.keys())e.has(r)||e.set(r,t(0))
for(var[,n]of this.#e)s(n)}keys(){return s(this.#t),super.keys()}values(){return this.#r(),super.values()}entries(){return this.#r(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#s),super.size}}const te=r(new ee),se=n(te,(e=>[...e].reduce(((e,[,t])=>e+(t.get("del")?.length??0)),0)))
var re=h('<td class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></td>'),ne=h("<td><!></td>"),ae=h('<tr><td><img class="tip-dynamic" alt="component"></td><td> </td><!></tr>'),ie=h('<tr><td class="compDel svelte-1qoer4b" colspan="3">Deleted</td></tr>')
function oe(e,t){a(t,!0)
const[r,n]=v()
let h=p((()=>f(te,"$compStore",r).get(t.itemId))),C=!0
const E=i()
function $(){C&&(C=!1,z("components","delType"),t.dispatchDelType(t.itemId))}var T=o(),x=c(T),_=e=>{var t=ae(),r=g(t),n=g(r),a=m(r),i=g(a),o=m(a),c=e=>{var t=re()
u(e,t)},p=e=>{var t=ne(),s=g(t)
S(s,{onclick:$,children:(e,t)=>{var s=w("Del")
u(e,s)}}),u(e,t)}
l(o,(e=>{s(h).get("delPending")?e(c):e(p,!1)})),b(((e,t,s)=>{k(n,"src",e),k(n,"data-tipped",t),D(i,s)}),[()=>{return e=s(h),`${y}items/${e.get("b")}.gif`
var e},()=>{return`fetchitem.php?item_id=${(e=s(h)).get("b")}&inv_id=${e.get("a")}&t=2&p=${E}&vcode=${e.get("v")}`
var e},()=>s(h).get("del").length]),u(e,t)},I=e=>{var t=ie()
u(e,t)}
l(x,(e=>{s(h).get("del").length?e(_):e(I,!1)})),u(e,T),d(),n()}var ce=h('<div><table class="fshTblCenter"><thead><tr><th colspan="3">Component Summary</th></tr><tr><th>Total:</th><th colspan="2"> </th></tr></thead><tbody></tbody></table></div>'),le=h('<p style="color: red"> </p>'),pe=h('<div class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></div>')
function ue(e,t){a(t,!0)
const[r,n]=v()
var i=o(),l=c(i)
C(l,(async function(){const e=await async function(e){const t=await e()
if(!t?.s)throw new Error(t?.e?.message??"Unknown Error")
return t}(Z)
return{rollup:function(e){const t=new ee($(e,"b").map((t=>{return[t.b,(s={...t,del:e.filter((({b:e})=>e===t.b)).map((({a:e})=>e)),delPending:!1},new ee(T(s)))]
var s})))
return te.set(t),[...t.keys()]}(e.r),maxComp:e.h?.p.find((({k:e})=>56===e))?.v}}),(e=>{var t=pe()
u(e,t)}),((e,n)=>{var a=p((()=>{var{rollup:e,maxComp:t}=s(n)
return{rollup:e,maxComp:t}})),i=p((()=>s(a).rollup)),o=p((()=>s(a).maxComp)),c=ce(),l=g(c),d=g(l),v=m(g(d)),h=m(g(v)),y=g(h),k=m(d)
E(k,20,(()=>s(i)),(e=>e),((e,s)=>{oe(e,{get dispatchDelType(){return t.dispatchDelType},get itemId(){return s}})})),b((()=>D(y,`${f(se,"$total",r)??""} / ${s(o)??""}`))),u(e,c)}),((e,t)=>{var r=le(),n=g(r)
b((()=>D(n,s(t).message))),u(e,r)})),u(e,i),d(),n()}var de=h("<div><!></div>"),ve=h("<div><!></div>"),fe=h('<div><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>'),he=h('<div class="fshCenter"><!> <!> <div><!></div> <!></div>')
function me(t,r){a(r,!0)
let n=_(void 0),i=_(void 0),o=!0,c=!0,p=!0
function v(){o&&(o=!1,z("components","enableQuickDel"),e(n,!0),r.dispatchQuickDel())}function f(){c&&(c=!1,z("components","countComponents"),e(i,!0))}function h(){p&&(p=!1,z("components","deleteAllVisible"),r.dispatchDelete())}var b=he(),y=g(b),k=e=>{var t=de(),s=g(t)
S(s,{onclick:v,children:(e,t)=>{var s=w("Enable Quick Del")
u(e,s)}}),u(e,t)}
l(y,(e=>{s(n)||e(k)}))
var D=m(y,2),C=e=>{var t=ve(),s=g(t)
S(s,{onclick:f,children:(e,t)=>{var s=w("Count Components")
u(e,s)}}),u(e,t)},E=e=>{ue(e,{get dispatchDelType(){return r.dispatchDelType}})}
l(D,(e=>{s(i)?e(E,!1):e(C)}))
var $=m(D,2),T=g($)
S(T,{onclick:function(){z("components","insertQuickExtract"),x()},children:(e,t)=>{var s=w("Quick Extract")
u(e,s)}})
var Q=m($,2),N=e=>{var t=fe(),s=g(t)
I(s,(()=>({"--button-color":"red"}))),S(s.lastChild,{onclick:h,children:(e,t)=>{var s=w("Delete All Visible")
u(e,s)}}),u(e,t)}
l(Q,(e=>{s(n)&&e(N)})),u(t,b),d()}function ge(e){return Q({subcmd:"destroycomponent",removeIndex:e})}async function be(e){const t=await M({cmd:"profile",subcmd:"destroycomponent",component_id:e})
return t?function(e,t){const s=V(t)
return{r:"Component destroyed."===s?0:1,m:s,c:e}}(e,t):{s:!1}}async function ye(e){return function(e){const t=e.filter((e=>0===e.r)),s=e.filter((e=>1===e.r))
return t.length>0?{r:t.map((e=>e.c)),s:!0}:s.length>0?{e:{message:s[0].m},s:!1}:{e:{message:e[0].m},s:!1}}(await q(e.map(be)))}function ke(e){if(!e)return
const t=e.children[0]
return t.replaceWith(P({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),t}function De(e,t){!function(e,t,s){te.update((r=>(r.get(e)?.set(t,s),r)))}(t,"delPending",e)}const Se=e=>e.forEach((([e])=>e?.children[0]?.remove())),we=e=>e.map((([e])=>[e,ke(e)])),ze=([,e])=>e,Ce=e=>$(e.map(ze)),Ee=([,,e])=>e,$e=e=>Ce(e).map((t=>[t,e.filter((([,e])=>e===t)).map(Ee)])),Te=e=>function(e,t){te.update((s=>(function(e,t){if(!t)return
const s=t.get("del").filter((t=>!e.includes(t)))
t.set("del",s)}(t,s.get(e)),s)))}(...e)
async function xe(e){const t=we(e),s=await(r=e.map(Ee),N(ge,ye,r))
var r
s?.s?($e(e).forEach(Te),Se(t)):(L(s?.e?.message??"Unknown Error"),t.forEach((([e,t])=>{t&&e.children[0].replaceWith(t)})))}async function _e(e){const t=Ce(e)
t.forEach(j(De,!0)),await q(A(30,e).map(xe)),t.forEach(j(De,!1))}function Ie(e){const{itemId:t,invId:s}=W(H,e.dataset.tipped)
return[Number(t),Number(s)]}const Qe=e=>[B(e),...Ie(e)]
function Ne(e){_e(R("img",e).map(Qe))}const qe=e=>U(te).get(e).get("del"),Me=(e,t)=>B(X(`img[data-tipped*="&inv_id=${t}&"]`,e))
function Ve(e,t){_e(qe(t).map((s=>[Me(e,s),t,s])))}function je(e){"IMG"===e.target.tagName&&(e.preventDefault(),z("components","quickDel"),F(e.target),_e([[B(e.target),...Ie(e.target)]]))}function Ae(e){e.classList.add("fshQuickDel"),Y(e,je)}function Le(){const e=function(){const e=J("profileRightColumn"),t=K("inventory-table",e)
if(2===t.length)return t[1]}()
e&&G(me,{props:{dispatchDelete:j(Ne,e),dispatchDelType:j(Ve,e),dispatchQuickDel:j(Ae,e)},target:e.parentNode})}export{Le as default}
//# sourceMappingURL=components-BXu9Shma.js.map
