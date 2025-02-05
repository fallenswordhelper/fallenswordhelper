import{F as t,bP as n,bO as e,S as c,P as o,Q as s,U as r,bD as l,bE as a,bF as i,bG as u,_ as p,ax as m,b_ as d,bH as f,b3 as $,b8 as g,bs as h,a5 as b,a8 as k,a0 as y,a3 as v,a4 as x,a9 as w,T as C,s as S,ew as T,bJ as D,bK as E,bL as L,au as I,av as M,bp as Q,R as H,bq as N,cX as j,bu as _,ex as P,ci as q,$ as A,v as B,h as V,cg as U,d as W,H as F,aj as G,n as R,C as J,D as K,l as O,ey as X,q as z,o as Y,b2 as Z,g as tt,be as nt}from"./calfSystem-BAeDn21M.js"
import{L as et}from"./LinkButtonBracketed-BBtbkBtS.js"
import{d as ct}from"./daComponents-Cgtokvjc.js"
import{c as ot}from"./closestTd-BUSJ9yFL.js"
import"./LinkButton-DewvBSzv.js"
const st=n(new Map),rt=e(st,(t=>[...t].reduce(((t,[,n])=>t+(n.get("del")?.length??0)),0)))
function lt(t){let n
return{c(){n=v("tr"),n.innerHTML='<td class="compDel svelte-1qoer4b" colspan="3">Deleted</td>'},m(t,e){p(t,n,e)},p:C,i:C,o:C,d(t){t&&r(n)}}}function at(t){let n,e,c,o,s,m,d,f,$,g,C,S,T,D=t[0].get("del").length+""
const E=[ut,it],L=[]
function I(t,n){return 1&n&&(g=null),null==g&&(g=!!t[0].get("delPending")),g?0:1}return C=I(t,-1),S=L[C]=E[C](t),{c(){n=v("tr"),e=v("td"),c=v("img"),m=x(),d=v("td"),f=w(D),$=x(),S.c(),h(c.src,o=t[1](t[0]))||b(c,"src",o),b(c,"class","tip-dynamic"),b(c,"data-tipped",s=t[2](t[0])),b(c,"alt","component")},m(t,o){p(t,n,o),y(n,e),y(e,c),y(n,m),y(n,d),y(d,f),y(n,$),L[C].m(n,null),T=!0},p(t,e){(!T||1&e&&!h(c.src,o=t[1](t[0])))&&b(c,"src",o),(!T||1&e&&s!==(s=t[2](t[0])))&&b(c,"data-tipped",s),(!T||1&e)&&D!==(D=t[0].get("del").length+"")&&k(f,D)
let r=C
C=I(t,e),C===r?L[C].p(t,e):(i(),l(L[r],1,1,(()=>{L[r]=null})),u(),S=L[C],S?S.p(t,e):(S=L[C]=E[C](t),S.c()),a(S,1),S.m(n,null))},i(t){T||(a(S),T=!0)},o(t){l(S),T=!1},d(t){t&&r(n),L[C].d()}}}function it(t){let n,e,c
return e=new et({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=v("td"),L(e.$$.fragment)},m(t,o){p(t,n,o),E(e,n,null),c=!0},p(t,n){const c={}
256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){c||(a(e.$$.fragment,t),c=!0)},o(t){l(e.$$.fragment,t),c=!1},d(t){t&&r(n),D(e)}}}function ut(t){let n
return{c(){n=v("td"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',b(n,"class","compSumSpin")},m(t,e){p(t,n,e)},p:C,i:C,o:C,d(t){t&&r(n)}}}function pt(t){let n
return{c(){n=w("Del")},m(t,e){p(t,n,e)},d(t){t&&r(n)}}}function mt(t){let n,e,c,o,s
const d=[at,lt],f=[]
function $(t,e){return 1&e&&(n=null),null==n&&(n=!!t[0].get("del").length),n?0:1}return e=$(t,-1),c=f[e]=d[e](t),{c(){c.c(),o=m()},m(t,n){f[e].m(t,n),p(t,o,n),s=!0},p(t,[n]){let s=e
e=$(t,n),e===s?f[e].p(t,n):(i(),l(f[s],1,1,(()=>{f[s]=null})),u(),c=f[e],c?c.p(t,n):(c=f[e]=d[e](t),c.c()),a(c,1),c.m(o.parentNode,o))},i(t){s||(a(c),s=!0)},o(t){l(c),s=!1},d(t){t&&r(o),f[e].d(t)}}}function dt(t,n,e){let c
d(t,st,(t=>e(5,c=t)))
let{itemId:o}=n
const s=f(),r=$()
let l
return t.$$set=t=>{"itemId"in t&&e(4,o=t.itemId)},t.$$.update=()=>{48&t.$$.dirty&&e(0,l=c.get(o))},[l,t=>`${g}items/${t.get("b")}.gif`,t=>`fetchitem.php?item_id=${t.get("b")}&inv_id=${t.get("a")}&t=2&p=${r}&vcode=${t.get("v")}`,function(){S("components","delType"),s("delType",o)},o,c]}class ft extends c{constructor(t){super(),o(this,t,dt,mt,s,{itemId:4})}}function $t(t){t[4]=t[6].rollup,t[5]=t[6].maxComp}function gt(t,n,e){const c=t.slice()
return c[7]=n[e],c}function ht(t){let n
return{c(){n=v("p"),n.textContent=`${t[10].message}`,Q(n,"color","red")},m(t,e){p(t,n,e)},p:C,i:C,o:C,d(t){t&&r(n)}}}function bt(t){let n,e,c,o,s,m,d,f,$,g,h
$t(t)
let C,S,T,D,E=t[5]+"",L=H(t[4]),I=[]
for(let n=0;n<L.length;n+=1)I[n]=kt(gt(t,L,n))
const M=t=>l(I[t],1,1,(()=>{I[t]=null}))
return{c(){n=v("div"),e=v("table"),c=v("thead"),o=v("tr"),o.innerHTML='<th colspan="3">Component Summary</th>',s=x(),m=v("tr"),d=v("th"),d.textContent="Total:",f=x(),$=v("th"),g=w(t[0]),h=w(" / "),C=w(E),S=x(),T=v("tbody")
for(let t=0;t<I.length;t+=1)I[t].c()
b($,"colspan","2"),b(e,"class","fshTblCenter")},m(t,r){p(t,n,r),y(n,e),y(e,c),y(c,o),y(c,s),y(c,m),y(m,d),y(m,f),y(m,$),y($,g),y($,h),y($,C),y(e,S),y(e,T)
for(let t=0;t<I.length;t+=1)I[t]&&I[t].m(T,null)
D=!0},p(t,n){if($t(t),(!D||1&n)&&k(g,t[0]),2&n){let e
for(L=H(t[4]),e=0;e<L.length;e+=1){const c=gt(t,L,e)
I[e]?(I[e].p(c,n),a(I[e],1)):(I[e]=kt(c),I[e].c(),a(I[e],1),I[e].m(T,null))}for(i(),e=L.length;e<I.length;e+=1)M(e)
u()}},i(t){if(!D){for(let t=0;t<L.length;t+=1)a(I[t])
D=!0}},o(t){I=I.filter(Boolean)
for(let t=0;t<I.length;t+=1)l(I[t])
D=!1},d(t){t&&r(n),N(I,t)}}}function kt(t){let n,e
return n=new ft({props:{itemId:t[7]}}),n.$on("delType",t[2]),{c(){L(n.$$.fragment)},m(t,c){E(n,t,c),e=!0},p:C,i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){D(n,t)}}}function yt(t){let n
return{c(){n=v("div"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',b(n,"class","compSumSpin")},m(t,e){p(t,n,e)},p:C,i:C,o:C,d(t){t&&r(n)}}}function vt(t){let n,e,c={ctx:t,current:null,token:null,hasCatch:!0,pending:yt,then:bt,catch:ht,value:6,error:10,blocks:[,,,]}
return I(t[1](),c),{c(){n=m(),c.block.c()},m(t,o){p(t,n,o),c.block.m(t,c.anchor=o),c.mount=()=>n.parentNode,c.anchor=n,e=!0},p(n,[e]){M(c,t=n,e)},i(t){e||(a(c.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=c.blocks[t]
l(n)}e=!1},d(t){t&&r(n),c.block.d(t),c.token=null,c=null}}}function xt(n,e,c){let o
return d(n,rt,(t=>c(0,o=t))),[o,async function(){const n=await async function(t){const n=await t()
if(!n?.s)throw new Error(n?.e?.message??"Unknown Error")
return n}(ct)
return{rollup:function(n){const e=new Map(_(n,"b").map((e=>{return[e.b,(c={...e,del:n.filter((({b:t})=>t===e.b)).map((({a:t})=>t)),delPending:!1},new Map(t(c)))]
var c})))
return st.set(e),[...e.keys()]}(n.r),maxComp:n.h?.p.find((({k:t})=>56===t))?.v}},function(t){j.call(this,n,t)}]}class wt extends c{constructor(t){super(),o(this,t,xt,vt,s,{})}}function Ct(t){let n,e,c
return e=new et({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),e.$on("click",T(t[2])),{c(){n=v("div"),L(e.$$.fragment)},m(t,o){p(t,n,o),E(e,n,null),c=!0},p(t,n){const c={}
256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){c||(a(e.$$.fragment,t),c=!0)},o(t){l(e.$$.fragment,t),c=!1},d(t){t&&r(n),D(e)}}}function St(t){let n
return{c(){n=w("Enable Quick Del")},m(t,e){p(t,n,e)},d(t){t&&r(n)}}}function Tt(t){let n,e
return n=new wt({}),n.$on("delType",t[6]),{c(){L(n.$$.fragment)},m(t,c){E(n,t,c),e=!0},p:C,i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){D(n,t)}}}function Dt(t){let n,e,c
return e=new et({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=v("div"),L(e.$$.fragment)},m(t,o){p(t,n,o),E(e,n,null),c=!0},p(t,n){const c={}
256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){c||(a(e.$$.fragment,t),c=!0)},o(t){l(e.$$.fragment,t),c=!1},d(t){t&&r(n),D(e)}}}function Et(t){let n
return{c(){n=w("Count Components")},m(t,e){p(t,n,e)},d(t){t&&r(n)}}}function Lt(t){let n
return{c(){n=w("Quick Extract")},m(t,e){p(t,n,e)},d(t){t&&r(n)}}}function It(t){let n,e,c,o
return e=new et({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),e.$on("click",T(t[5])),{c(){n=v("div"),c=v("div"),L(e.$$.fragment),Q(c,"display","contents"),Q(c,"--button-color","red")},m(t,s){p(t,n,s),y(n,c),E(e,c,null),o=!0},p(t,n){const c={}
256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){o||(a(e.$$.fragment,t),o=!0)},o(t){l(e.$$.fragment,t),o=!1},d(t){t&&r(n),D(e)}}}function Mt(t){let n
return{c(){n=w("Delete All Visible")},m(t,e){p(t,n,e)},d(t){t&&r(n)}}}function Qt(t){let n,e,c,o,s,m,d,f,$,g=!t[0]&&Ct(t)
const h=[Dt,Tt],k=[]
function w(t,n){return t[1]?1:0}c=w(t),o=k[c]=h[c](t),d=new et({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),d.$on("click",t[4])
let C=t[0]&&It(t)
return{c(){n=v("div"),g&&g.c(),e=x(),o.c(),s=x(),m=v("div"),L(d.$$.fragment),f=x(),C&&C.c(),b(n,"class","fshCenter")},m(t,o){p(t,n,o),g&&g.m(n,null),y(n,e),k[c].m(n,null),y(n,s),y(n,m),E(d,m,null),y(n,f),C&&C.m(n,null),$=!0},p(t,[r]){t[0]?g&&(i(),l(g,1,1,(()=>{g=null})),u()):g?(g.p(t,r),1&r&&a(g,1)):(g=Ct(t),g.c(),a(g,1),g.m(n,e))
let p=c
c=w(t),c===p?k[c].p(t,r):(i(),l(k[p],1,1,(()=>{k[p]=null})),u(),o=k[c],o?o.p(t,r):(o=k[c]=h[c](t),o.c()),a(o,1),o.m(n,s))
const m={}
256&r&&(m.$$scope={dirty:r,ctx:t}),d.$set(m),t[0]?C?(C.p(t,r),1&r&&a(C,1)):(C=It(t),C.c(),a(C,1),C.m(n,null)):C&&(i(),l(C,1,1,(()=>{C=null})),u())},i(t){$||(a(g),a(o),a(d.$$.fragment,t),a(C),$=!0)},o(t){l(g),l(o),l(d.$$.fragment,t),l(C),$=!1},d(t){t&&r(n),g&&g.d(),k[c].d(),D(d),C&&C.d()}}}function Ht(t,n,e){let c,o
const s=f()
return[c,o,function(){S("components","enableQuickDel"),e(0,c=!0),s("enableQuickDel")},function(){S("components","countComponents"),e(1,o=!0)},function(){S("components","insertQuickExtract"),P()},function(){S("components","deleteAllVisible"),s("deleteAllVisible")},function(n){j.call(this,t,n)}]}class Nt extends c{constructor(t){super(),o(this,t,Ht,Qt,s,{})}}function jt(t){return q({subcmd:"destroycomponent",removeIndex:t})}async function _t(t){const n=await V({cmd:"profile",subcmd:"destroycomponent",component_id:t})
return n?function(t,n){const e=U(n)
return{r:"Component destroyed."===e?0:1,m:e,c:t}}(t,n):{s:!1}}async function Pt(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>1===t.r))
return n.length>0?{r:n.map((t=>t.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await B(t.map(_t)))}function qt(t){if(!t)return
const n=t.children[0]
return n.replaceWith(R({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),n}function At(t,n){!function(t,n,e){st.update((c=>(c.get(t)?.set(n,e),c)))}(n,"delPending",t)}const Bt=t=>t.forEach((([t])=>t?.children[0]?.remove())),Vt=t=>t.map((([t])=>[t,qt(t)])),Ut=([,t])=>t,Wt=t=>_(t.map(Ut)),Ft=([,,t])=>t,Gt=t=>Wt(t).map((n=>[n,t.filter((([,t])=>t===n)).map(Ft)])),Rt=t=>function(t,n){st.update((e=>(function(t,n){if(!n)return
const e=n.get("del").filter((n=>!t.includes(n)))
n.set("del",e)}(n,e.get(t)),e)))}(...t)
async function Jt(t){const n=Vt(t),e=await(c=t.map(Ft),A(jt,Pt,c))
var c
e?.s?(Gt(t).forEach(Rt),Bt(n)):(G(e?.e?.message??"Unknown Error"),n.forEach((([t,n])=>{n&&t.children[0].replaceWith(n)})))}async function Kt(t){const n=Wt(t)
n.forEach(W(At,!0)),await B(F(30,t).map(Jt)),n.forEach(W(At,!1))}function Ot(t){const{itemId:n,invId:e}=J(K,t.dataset.tipped)
return[Number(n),Number(e)]}const Xt=t=>[ot(t),...Ot(t)]
function zt(t){Kt(O("img",t).map(Xt))}const Yt=t=>X(st).get(t.detail).get("del"),Zt=(t,n)=>ot(z(`img[data-tipped*="&inv_id=${n}&"]`,t))
function tn(t,n){Kt(Yt(n).map((e=>[Zt(t,e),n.detail,e])))}function nn(t){"IMG"===t.target.tagName&&(t.preventDefault(),S("components","quickDel"),Z(t.target),Kt([[ot(t.target),...Ot(t.target)]]))}function en(t){t.classList.add("fshQuickDel"),Y(t,nn)}function cn(){const t=function(){const t=tt("profileRightColumn"),n=nt("inventory-table",t)
if(2===n.length)return n[1]}()
if(!t)return
const n=new Nt({target:t.parentNode})
n.$on("enableQuickDel",W(en,t)),n.$on("delType",W(tn,t)),n.$on("deleteAllVisible",W(zt,t))}export{cn as default}
//# sourceMappingURL=components-CSIoZziN.js.map
