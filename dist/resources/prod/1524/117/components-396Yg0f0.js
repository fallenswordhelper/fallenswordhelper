import{C as t,bm as n,bn as e,S as o,L as s,M as c,am as r,T as l,bd as a,bf as i,be as u,bc as p,a0 as m,bt as d,bg as f,aJ as $,aN as g,s as h,O as b,_ as k,P as y,a3 as v,b6 as x,Q as w,U as C,a4 as S,dK as T,bh as E,bi as I,bj as j,cf as D,b3 as L,N as M,b4 as N,dL as Q,bI as A,e as H,bH as _,$ as q,c as B,E as P,ab as U,m as V,A as W,k as G,dM as J,q as K,o as O,aI as R,g as z,aU as F}from"./calfSystem-G1dN925O.js"
import{L as X}from"./LinkButtonBracketed-LziWkhDZ.js"
import{h as Y,u as Z}from"./await_block-nr-x0DeQ.js"
import{d as tt}from"./daComponents-ApmhuKTk.js"
import{u as nt}from"./uniq-GAsQHoVb.js"
import{c as et}from"./closestTd-YTRUJWIn.js"
import{a as ot}from"./all-TTLWag-d.js"
import{r as st}from"./regExpGroups-4702yhMp.js"
import"./LinkButton-V4dDaBVi.js"
const ct=e(new Map),rt=n(ct,(t=>[...t].reduce(((t,[,n])=>t+(n.get("del")?.length??0)),0)))
function lt(t){let n
return{c(){n=b("tr"),n.innerHTML='<td class="compDel svelte-1qoer4b" colspan="3">Deleted</td>'},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function at(t){let n,e,o,s,c,r,d,f,$,g,h,k,T,E=t[0].get("del").length+""
const I=[ut,it],j=[]
function D(t,n){return 1&n&&(g=null),null==g&&(g=!!t[0].get("delPending")),g?0:1}return h=D(t,-1),k=j[h]=I[h](t),{c(){n=b("tr"),e=b("td"),o=b("img"),r=y(),d=b("td"),f=v(E),$=y(),k.c(),x(o.src,s=t[1](t[0]))||w(o,"src",s),w(o,"class","tip-dynamic"),w(o,"data-tipped",c=t[2](t[0])),w(o,"alt","component")},m(t,s){l(t,n,s),C(n,e),C(e,o),C(n,r),C(n,d),C(d,f),C(n,$),j[h].m(n,null),T=!0},p(t,e){(!T||1&e&&!x(o.src,s=t[1](t[0])))&&w(o,"src",s),(!T||1&e&&c!==(c=t[2](t[0])))&&w(o,"data-tipped",c),(!T||1&e)&&E!==(E=t[0].get("del").length+"")&&S(f,E)
let r=h
h=D(t,e),h===r?j[h].p(t,e):(a(),i(j[r],1,1,(()=>{j[r]=null})),u(),k=j[h],k?k.p(t,e):(k=j[h]=I[h](t),k.c()),p(k,1),k.m(n,null))},i(t){T||(p(k),T=!0)},o(t){i(k),T=!1},d(t){t&&m(n),j[h].d()}}}function it(t){let n,e,o
return e=new X({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=b("td"),E(e.$$.fragment)},m(t,s){l(t,n,s),I(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),j(e)}}}function ut(t){let n
return{c(){n=b("td"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',w(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function pt(t){let n
return{c(){n=v("Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function mt(t){let n,e,o,s,c
const d=[at,lt],f=[]
function $(t,e){return 1&e&&(n=null),null==n&&(n=!!t[0].get("del").length),n?0:1}return e=$(t,-1),o=f[e]=d[e](t),{c(){o.c(),s=r()},m(t,n){f[e].m(t,n),l(t,s,n),c=!0},p(t,[n]){let c=e
e=$(t,n),e===c?f[e].p(t,n):(a(),i(f[c],1,1,(()=>{f[c]=null})),u(),o=f[e],o?o.p(t,n):(o=f[e]=d[e](t),o.c()),p(o,1),o.m(s.parentNode,s))},i(t){c||(p(o),c=!0)},o(t){i(o),c=!1},d(t){t&&m(s),f[e].d(t)}}}function dt(t,n,e){let o
d(t,ct,(t=>e(5,o=t)))
let{itemId:s}=n
const c=f(),r=$()
let l
return t.$$set=t=>{"itemId"in t&&e(4,s=t.itemId)},t.$$.update=()=>{48&t.$$.dirty&&e(0,l=o.get(s))},[l,t=>`${g}items/${t.get("b")}.gif`,t=>`fetchitem.php?item_id=${t.get("b")}&inv_id=${t.get("a")}&t=2&p=${r}&vcode=${t.get("v")}`,function(){h("components","delType"),c("delType",s)},s,o]}class ft extends o{constructor(t){super(),s(this,t,dt,mt,c,{itemId:4})}}function $t(t){t[4]=t[6].rollup,t[5]=t[6].maxComp}function gt(t,n,e){const o=t.slice()
return o[7]=n[e],o}function ht(t){let n
return{c(){n=b("p"),n.textContent=`${t[10].message}`,L(n,"color","red")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function bt(t){let n,e,o,s,c,r,d,f,$,g,h,k,x
$t(t)
let T,E,I=t[5]+"",j=M(t[4]),D=[]
for(let n=0;n<j.length;n+=1)D[n]=kt(gt(t,j,n))
const L=t=>i(D[t],1,1,(()=>{D[t]=null}))
return{c(){n=b("div"),e=b("table"),o=b("thead"),o.innerHTML='<tr><th colspan="3">Component Summary</th></tr>',s=y(),c=b("tbody")
for(let t=0;t<D.length;t+=1)D[t].c()
r=y(),d=b("tfoot"),f=b("tr"),$=b("td"),$.textContent="Total:",g=y(),h=b("td"),k=v(t[0]),x=v(" / "),T=v(I),w(h,"colspan","2"),w(e,"class","fshTblCenter")},m(t,a){l(t,n,a),C(n,e),C(e,o),C(e,s),C(e,c)
for(let t=0;t<D.length;t+=1)D[t]&&D[t].m(c,null)
C(e,r),C(e,d),C(d,f),C(f,$),C(f,g),C(f,h),C(h,k),C(h,x),C(h,T),E=!0},p(t,n){if($t(t),2&n){let e
for(j=M(t[4]),e=0;e<j.length;e+=1){const o=gt(t,j,e)
D[e]?(D[e].p(o,n),p(D[e],1)):(D[e]=kt(o),D[e].c(),p(D[e],1),D[e].m(c,null))}for(a(),e=j.length;e<D.length;e+=1)L(e)
u()}(!E||1&n)&&S(k,t[0])},i(t){if(!E){for(let t=0;t<j.length;t+=1)p(D[t])
E=!0}},o(t){D=D.filter(Boolean)
for(let t=0;t<D.length;t+=1)i(D[t])
E=!1},d(t){t&&m(n),N(D,t)}}}function kt(t){let n,e
return n=new ft({props:{itemId:t[7]}}),n.$on("delType",t[2]),{c(){E(n.$$.fragment)},m(t,o){I(n,t,o),e=!0},p:k,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function yt(t){let n
return{c(){n=b("div"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',w(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function vt(t){let n,e,o={ctx:t,current:null,token:null,hasCatch:!0,pending:yt,then:bt,catch:ht,value:6,error:10,blocks:[,,,]}
return Y(t[1](),o),{c(){n=r(),o.block.c()},m(t,s){l(t,n,s),o.block.m(t,o.anchor=s),o.mount=()=>n.parentNode,o.anchor=n,e=!0},p(n,[e]){Z(o,t=n,e)},i(t){e||(p(o.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=o.blocks[t]
i(n)}e=!1},d(t){t&&m(n),o.block.d(t),o.token=null,o=null}}}function xt(n,e,o){let s
return d(n,rt,(t=>o(0,s=t))),[s,async function(){const n=await async function(t){const n=await t()
if(!n?.s)throw new Error(n?.e?.message??"Unknown Error")
return n}(tt)
return{rollup:function(n){const e=new Map(nt(n,"b").map((e=>{return[e.b,(o={...e,del:n.filter((({b:t})=>t===e.b)).map((({a:t})=>t)),delPending:!1},new Map(t(o)))]
var o})))
return ct.set(e),[...e.keys()]}(n.r),maxComp:n.h?.p[56]?.v}},function(t){D.call(this,n,t)}]}class wt extends o{constructor(t){super(),s(this,t,xt,vt,c,{})}}function Ct(t){let n,e,o
return e=new X({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),e.$on("click",T(t[2])),{c(){n=b("div"),E(e.$$.fragment)},m(t,s){l(t,n,s),I(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),j(e)}}}function St(t){let n
return{c(){n=v("Enable Quick Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Tt(t){let n,e
return n=new wt({}),n.$on("delType",t[6]),{c(){E(n.$$.fragment)},m(t,o){I(n,t,o),e=!0},p:k,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function Et(t){let n,e,o
return e=new X({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=b("div"),E(e.$$.fragment)},m(t,s){l(t,n,s),I(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),j(e)}}}function It(t){let n
return{c(){n=v("Count Components")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function jt(t){let n
return{c(){n=v("Quick Extract")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Dt(t){let n,e,o,s
return e=new X({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),e.$on("click",T(t[5])),{c(){n=b("div"),o=b("div"),E(e.$$.fragment),L(o,"display","contents"),L(o,"--button-color","red")},m(t,c){l(t,n,c),C(n,o),I(e,o,null),s=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){i(e.$$.fragment,t),s=!1},d(t){t&&m(n),j(e)}}}function Lt(t){let n
return{c(){n=v("Delete All Visible")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Mt(t){let n,e,o,s,c,r,d,f,$,g=!t[0]&&Ct(t)
const h=[Et,Tt],k=[]
function v(t,n){return t[1]?1:0}o=v(t),s=k[o]=h[o](t),d=new X({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),d.$on("click",t[4])
let x=t[0]&&Dt(t)
return{c(){n=b("div"),g&&g.c(),e=y(),s.c(),c=y(),r=b("div"),E(d.$$.fragment),f=y(),x&&x.c(),w(n,"class","fshCenter")},m(t,s){l(t,n,s),g&&g.m(n,null),C(n,e),k[o].m(n,null),C(n,c),C(n,r),I(d,r,null),C(n,f),x&&x.m(n,null),$=!0},p(t,[r]){t[0]?g&&(a(),i(g,1,1,(()=>{g=null})),u()):g?(g.p(t,r),1&r&&p(g,1)):(g=Ct(t),g.c(),p(g,1),g.m(n,e))
let l=o
o=v(t),o===l?k[o].p(t,r):(a(),i(k[l],1,1,(()=>{k[l]=null})),u(),s=k[o],s?s.p(t,r):(s=k[o]=h[o](t),s.c()),p(s,1),s.m(n,c))
const m={}
256&r&&(m.$$scope={dirty:r,ctx:t}),d.$set(m),t[0]?x?(x.p(t,r),1&r&&p(x,1)):(x=Dt(t),x.c(),p(x,1),x.m(n,null)):x&&(a(),i(x,1,1,(()=>{x=null})),u())},i(t){$||(p(g),p(s),p(d.$$.fragment,t),p(x),$=!0)},o(t){i(g),i(s),i(d.$$.fragment,t),i(x),$=!1},d(t){t&&m(n),g&&g.d(),k[o].d(),j(d),x&&x.d()}}}function Nt(t,n,e){let o,s
const c=f()
return[o,s,function(){h("components","enableQuickDel"),e(0,o=!0),c("enableQuickDel")},function(){h("components","countComponents"),e(1,s=!0)},function(){h("components","insertQuickExtract"),Q()},function(){h("components","deleteAllVisible"),c("deleteAllVisible")},function(n){D.call(this,t,n)}]}var Qt=class extends o{constructor(t){super(),s(this,t,Nt,Mt,c,{})}}
function At(t){return A({subcmd:"destroycomponent",removeIndex:t})}async function Ht(t){const n=await H({cmd:"profile",subcmd:"destroycomponent",component_id:t})
return n?function(t,n){const e=_(n)
return{r:"Component destroyed."===e?0:1,m:e,c:t}}(t,n):{s:!1}}async function _t(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>1===t.r))
return n.length>0?{r:n.map((t=>t.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await ot(t.map(Ht)))}function qt(t){if(!t)return
const n=t.children[0]
return n.replaceWith(V({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),n}function Bt(t,n){!function(t,n,e){ct.update((o=>(o.get(t)?.set(n,e),o)))}(n,"delPending",t)}const Pt=t=>t.forEach((([t])=>t?.children[0]?.remove())),Ut=t=>t.map((([t])=>[t,qt(t)])),Vt=([,t])=>t,Wt=t=>nt(t.map(Vt)),Gt=([,,t])=>t,Jt=t=>Wt(t).map((n=>[n,t.filter((([,t])=>t===n)).map(Gt)])),Kt=t=>function(t,n){ct.update((e=>(function(t,n){if(!n)return
const e=n.get("del").filter((n=>!t.includes(n)))
n.set("del",e)}(n,e.get(t)),e)))}(...t)
async function Ot(t){const n=Ut(t),e=await(o=t.map(Gt),q(At,_t,o))
var o
e?.s?(Jt(t).forEach(Kt),Pt(n)):(U(e?.e?.message??"Unknown Error"),n.forEach((([t,n])=>{n&&t.children[0].replaceWith(n)})))}async function Rt(t){const n=Wt(t)
n.forEach(B(Bt,!0)),await ot(P(30,t).map(Ot)),n.forEach(B(Bt,!1))}function zt(t){const{itemId:n,invId:e}=st(W,t.dataset.tipped)
return[Number(n),Number(e)]}const Ft=t=>[et(t),...zt(t)]
function Xt(t){Rt(G("img",t).map(Ft))}const Yt=t=>J(ct).get(t.detail).get("del"),Zt=(t,n)=>et(K(`img[data-tipped*="&inv_id=${n}&"]`,t))
function tn(t,n){Rt(Yt(n).map((e=>[Zt(t,e),n.detail,e])))}function nn(t){"IMG"===t.target.tagName&&(t.preventDefault(),h("components","quickDel"),R(t.target),Rt([[et(t.target),...zt(t.target)]]))}function en(t){t.classList.add("fshQuickDel"),O(t,nn)}function on(){const t=function(){const t=z("profileRightColumn"),n=F("inventory-table",t)
if(2===n.length)return n[1]}()
if(!t)return
const n=new Qt({target:t.parentNode})
n.$on("enableQuickDel",B(en,t)),n.$on("delType",B(tn,t)),n.$on("deleteAllVisible",B(Xt,t))}export{on as default}
//# sourceMappingURL=components-396Yg0f0.js.map
