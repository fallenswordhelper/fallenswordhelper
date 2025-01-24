import{E as t,bL as n,bM as e,S as c,O as o,P as s,av as r,W as l,bB as a,bD as i,bC as u,bA as p,a4 as m,bX as d,bE as f,b0 as $,b5 as g,s as h,R as b,a3 as k,T as y,a7 as v,br as x,U as w,X as C,a8 as S,en as T,bF as E,bG as D,bH as L,as as M,at as I,cN as N,bo as Q,Q as B,bp as H,bu as j,eo as A,cf as P,u as V,e as _,cd as q,$ as G,c as U,G as W,af as R,m as X,B as F,C as O,k as Z,ep as z,q as J,o as K,a$ as Y,g as tt,bd as nt}from"./calfSystem-CvwhhJv4.js"
import{L as et}from"./LinkButtonBracketed-CA2auUeo.js"
import{d as ct}from"./daComponents-CyBLh8wM.js"
import{c as ot}from"./closestTd-BZc-qXqU.js"
import"./LinkButton-DGK9y3f9.js"
const st=e(new Map),rt=n(st,(t=>[...t].reduce(((t,[,n])=>t+(n.get("del")?.length??0)),0)))
function lt(t){let n
return{c(){n=b("tr"),n.innerHTML='<td class="compDel svelte-1qoer4b" colspan="3">Deleted</td>'},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function at(t){let n,e,c,o,s,r,d,f,$,g,h,k,T,E=t[0].get("del").length+""
const D=[ut,it],L=[]
function M(t,n){return 1&n&&(g=null),null==g&&(g=!!t[0].get("delPending")),g?0:1}return h=M(t,-1),k=L[h]=D[h](t),{c(){n=b("tr"),e=b("td"),c=b("img"),r=y(),d=b("td"),f=v(E),$=y(),k.c(),x(c.src,o=t[1](t[0]))||w(c,"src",o),w(c,"class","tip-dynamic"),w(c,"data-tipped",s=t[2](t[0])),w(c,"alt","component")},m(t,o){l(t,n,o),C(n,e),C(e,c),C(n,r),C(n,d),C(d,f),C(n,$),L[h].m(n,null),T=!0},p(t,e){(!T||1&e&&!x(c.src,o=t[1](t[0])))&&w(c,"src",o),(!T||1&e&&s!==(s=t[2](t[0])))&&w(c,"data-tipped",s),(!T||1&e)&&E!==(E=t[0].get("del").length+"")&&S(f,E)
let r=h
h=M(t,e),h===r?L[h].p(t,e):(a(),i(L[r],1,1,(()=>{L[r]=null})),u(),k=L[h],k?k.p(t,e):(k=L[h]=D[h](t),k.c()),p(k,1),k.m(n,null))},i(t){T||(p(k),T=!0)},o(t){i(k),T=!1},d(t){t&&m(n),L[h].d()}}}function it(t){let n,e,c
return e=new et({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=b("td"),E(e.$$.fragment)},m(t,o){l(t,n,o),D(e,n,null),c=!0},p(t,n){const c={}
256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){c||(p(e.$$.fragment,t),c=!0)},o(t){i(e.$$.fragment,t),c=!1},d(t){t&&m(n),L(e)}}}function ut(t){let n
return{c(){n=b("td"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',w(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function pt(t){let n
return{c(){n=v("Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function mt(t){let n,e,c,o,s
const d=[at,lt],f=[]
function $(t,e){return 1&e&&(n=null),null==n&&(n=!!t[0].get("del").length),n?0:1}return e=$(t,-1),c=f[e]=d[e](t),{c(){c.c(),o=r()},m(t,n){f[e].m(t,n),l(t,o,n),s=!0},p(t,[n]){let s=e
e=$(t,n),e===s?f[e].p(t,n):(a(),i(f[s],1,1,(()=>{f[s]=null})),u(),c=f[e],c?c.p(t,n):(c=f[e]=d[e](t),c.c()),p(c,1),c.m(o.parentNode,o))},i(t){s||(p(c),s=!0)},o(t){i(c),s=!1},d(t){t&&m(o),f[e].d(t)}}}function dt(t,n,e){let c
d(t,st,(t=>e(5,c=t)))
let{itemId:o}=n
const s=f(),r=$()
let l
return t.$$set=t=>{"itemId"in t&&e(4,o=t.itemId)},t.$$.update=()=>{48&t.$$.dirty&&e(0,l=c.get(o))},[l,t=>`${g}items/${t.get("b")}.gif`,t=>`fetchitem.php?item_id=${t.get("b")}&inv_id=${t.get("a")}&t=2&p=${r}&vcode=${t.get("v")}`,function(){h("components","delType"),s("delType",o)},o,c]}class ft extends c{constructor(t){super(),o(this,t,dt,mt,s,{itemId:4})}}function $t(t){t[4]=t[6].rollup,t[5]=t[6].maxComp}function gt(t,n,e){const c=t.slice()
return c[7]=n[e],c}function ht(t){let n
return{c(){n=b("p"),n.textContent=`${t[10].message}`,Q(n,"color","red")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function bt(t){let n,e,c,o,s,r,d,f,$,g,h
$t(t)
let k,x,T,E,D=t[5]+"",L=B(t[4]),M=[]
for(let n=0;n<L.length;n+=1)M[n]=kt(gt(t,L,n))
const I=t=>i(M[t],1,1,(()=>{M[t]=null}))
return{c(){n=b("div"),e=b("table"),c=b("thead"),o=b("tr"),o.innerHTML='<th colspan="3">Component Summary</th>',s=y(),r=b("tr"),d=b("th"),d.textContent="Total:",f=y(),$=b("th"),g=v(t[0]),h=v(" / "),k=v(D),x=y(),T=b("tbody")
for(let t=0;t<M.length;t+=1)M[t].c()
w($,"colspan","2"),w(e,"class","fshTblCenter")},m(t,a){l(t,n,a),C(n,e),C(e,c),C(c,o),C(c,s),C(c,r),C(r,d),C(r,f),C(r,$),C($,g),C($,h),C($,k),C(e,x),C(e,T)
for(let t=0;t<M.length;t+=1)M[t]&&M[t].m(T,null)
E=!0},p(t,n){if($t(t),(!E||1&n)&&S(g,t[0]),2&n){let e
for(L=B(t[4]),e=0;e<L.length;e+=1){const c=gt(t,L,e)
M[e]?(M[e].p(c,n),p(M[e],1)):(M[e]=kt(c),M[e].c(),p(M[e],1),M[e].m(T,null))}for(a(),e=L.length;e<M.length;e+=1)I(e)
u()}},i(t){if(!E){for(let t=0;t<L.length;t+=1)p(M[t])
E=!0}},o(t){M=M.filter(Boolean)
for(let t=0;t<M.length;t+=1)i(M[t])
E=!1},d(t){t&&m(n),H(M,t)}}}function kt(t){let n,e
return n=new ft({props:{itemId:t[7]}}),n.$on("delType",t[2]),{c(){E(n.$$.fragment)},m(t,c){D(n,t,c),e=!0},p:k,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function yt(t){let n
return{c(){n=b("div"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',w(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function vt(t){let n,e,c={ctx:t,current:null,token:null,hasCatch:!0,pending:yt,then:bt,catch:ht,value:6,error:10,blocks:[,,,]}
return M(t[1](),c),{c(){n=r(),c.block.c()},m(t,o){l(t,n,o),c.block.m(t,c.anchor=o),c.mount=()=>n.parentNode,c.anchor=n,e=!0},p(n,[e]){I(c,t=n,e)},i(t){e||(p(c.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=c.blocks[t]
i(n)}e=!1},d(t){t&&m(n),c.block.d(t),c.token=null,c=null}}}function xt(n,e,c){let o
return d(n,rt,(t=>c(0,o=t))),[o,async function(){const n=await async function(t){const n=await t()
if(!n?.s)throw new Error(n?.e?.message??"Unknown Error")
return n}(ct)
return{rollup:function(n){const e=new Map(j(n,"b").map((e=>{return[e.b,(c={...e,del:n.filter((({b:t})=>t===e.b)).map((({a:t})=>t)),delPending:!1},new Map(t(c)))]
var c})))
return st.set(e),[...e.keys()]}(n.r),maxComp:n.h?.p.find((({k:t})=>56===t))?.v}},function(t){N.call(this,n,t)}]}class wt extends c{constructor(t){super(),o(this,t,xt,vt,s,{})}}function Ct(t){let n,e,c
return e=new et({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),e.$on("click",T(t[2])),{c(){n=b("div"),E(e.$$.fragment)},m(t,o){l(t,n,o),D(e,n,null),c=!0},p(t,n){const c={}
256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){c||(p(e.$$.fragment,t),c=!0)},o(t){i(e.$$.fragment,t),c=!1},d(t){t&&m(n),L(e)}}}function St(t){let n
return{c(){n=v("Enable Quick Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Tt(t){let n,e
return n=new wt({}),n.$on("delType",t[6]),{c(){E(n.$$.fragment)},m(t,c){D(n,t,c),e=!0},p:k,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function Et(t){let n,e,c
return e=new et({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=b("div"),E(e.$$.fragment)},m(t,o){l(t,n,o),D(e,n,null),c=!0},p(t,n){const c={}
256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){c||(p(e.$$.fragment,t),c=!0)},o(t){i(e.$$.fragment,t),c=!1},d(t){t&&m(n),L(e)}}}function Dt(t){let n
return{c(){n=v("Count Components")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Lt(t){let n
return{c(){n=v("Quick Extract")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Mt(t){let n,e,c,o
return e=new et({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),e.$on("click",T(t[5])),{c(){n=b("div"),c=b("div"),E(e.$$.fragment),Q(c,"display","contents"),Q(c,"--button-color","red")},m(t,s){l(t,n,s),C(n,c),D(e,c,null),o=!0},p(t,n){const c={}
256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),L(e)}}}function It(t){let n
return{c(){n=v("Delete All Visible")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Nt(t){let n,e,c,o,s,r,d,f,$,g=!t[0]&&Ct(t)
const h=[Et,Tt],k=[]
function v(t,n){return t[1]?1:0}c=v(t),o=k[c]=h[c](t),d=new et({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),d.$on("click",t[4])
let x=t[0]&&Mt(t)
return{c(){n=b("div"),g&&g.c(),e=y(),o.c(),s=y(),r=b("div"),E(d.$$.fragment),f=y(),x&&x.c(),w(n,"class","fshCenter")},m(t,o){l(t,n,o),g&&g.m(n,null),C(n,e),k[c].m(n,null),C(n,s),C(n,r),D(d,r,null),C(n,f),x&&x.m(n,null),$=!0},p(t,[r]){t[0]?g&&(a(),i(g,1,1,(()=>{g=null})),u()):g?(g.p(t,r),1&r&&p(g,1)):(g=Ct(t),g.c(),p(g,1),g.m(n,e))
let l=c
c=v(t),c===l?k[c].p(t,r):(a(),i(k[l],1,1,(()=>{k[l]=null})),u(),o=k[c],o?o.p(t,r):(o=k[c]=h[c](t),o.c()),p(o,1),o.m(n,s))
const m={}
256&r&&(m.$$scope={dirty:r,ctx:t}),d.$set(m),t[0]?x?(x.p(t,r),1&r&&p(x,1)):(x=Mt(t),x.c(),p(x,1),x.m(n,null)):x&&(a(),i(x,1,1,(()=>{x=null})),u())},i(t){$||(p(g),p(o),p(d.$$.fragment,t),p(x),$=!0)},o(t){i(g),i(o),i(d.$$.fragment,t),i(x),$=!1},d(t){t&&m(n),g&&g.d(),k[c].d(),L(d),x&&x.d()}}}function Qt(t,n,e){let c,o
const s=f()
return[c,o,function(){h("components","enableQuickDel"),e(0,c=!0),s("enableQuickDel")},function(){h("components","countComponents"),e(1,o=!0)},function(){h("components","insertQuickExtract"),A()},function(){h("components","deleteAllVisible"),s("deleteAllVisible")},function(n){N.call(this,t,n)}]}class Bt extends c{constructor(t){super(),o(this,t,Qt,Nt,s,{})}}function Ht(t){return P({subcmd:"destroycomponent",removeIndex:t})}async function jt(t){const n=await _({cmd:"profile",subcmd:"destroycomponent",component_id:t})
return n?function(t,n){const e=q(n)
return{r:"Component destroyed."===e?0:1,m:e,c:t}}(t,n):{s:!1}}async function At(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>1===t.r))
return n.length>0?{r:n.map((t=>t.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await V(t.map(jt)))}function Pt(t){if(!t)return
const n=t.children[0]
return n.replaceWith(X({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),n}function Vt(t,n){!function(t,n,e){st.update((c=>(c.get(t)?.set(n,e),c)))}(n,"delPending",t)}const _t=t=>t.forEach((([t])=>t?.children[0]?.remove())),qt=t=>t.map((([t])=>[t,Pt(t)])),Gt=([,t])=>t,Ut=t=>j(t.map(Gt)),Wt=([,,t])=>t,Rt=t=>Ut(t).map((n=>[n,t.filter((([,t])=>t===n)).map(Wt)])),Xt=t=>function(t,n){st.update((e=>(function(t,n){if(!n)return
const e=n.get("del").filter((n=>!t.includes(n)))
n.set("del",e)}(n,e.get(t)),e)))}(...t)
async function Ft(t){const n=qt(t),e=await(c=t.map(Wt),G(Ht,At,c))
var c
e?.s?(Rt(t).forEach(Xt),_t(n)):(R(e?.e?.message??"Unknown Error"),n.forEach((([t,n])=>{n&&t.children[0].replaceWith(n)})))}async function Ot(t){const n=Ut(t)
n.forEach(U(Vt,!0)),await V(W(30,t).map(Ft)),n.forEach(U(Vt,!1))}function Zt(t){const{itemId:n,invId:e}=F(O,t.dataset.tipped)
return[Number(n),Number(e)]}const zt=t=>[ot(t),...Zt(t)]
function Jt(t){Ot(Z("img",t).map(zt))}const Kt=t=>z(st).get(t.detail).get("del"),Yt=(t,n)=>ot(J(`img[data-tipped*="&inv_id=${n}&"]`,t))
function tn(t,n){Ot(Kt(n).map((e=>[Yt(t,e),n.detail,e])))}function nn(t){"IMG"===t.target.tagName&&(t.preventDefault(),h("components","quickDel"),Y(t.target),Ot([[ot(t.target),...Zt(t.target)]]))}function en(t){t.classList.add("fshQuickDel"),K(t,nn)}function cn(){const t=function(){const t=tt("profileRightColumn"),n=nt("inventory-table",t)
if(2===n.length)return n[1]}()
if(!t)return
const n=new Bt({target:t.parentNode})
n.$on("enableQuickDel",U(en,t)),n.$on("delType",U(tn,t)),n.$on("deleteAllVisible",U(Jt,t))}export{cn as default}
//# sourceMappingURL=components-DLsGLrsw.js.map
