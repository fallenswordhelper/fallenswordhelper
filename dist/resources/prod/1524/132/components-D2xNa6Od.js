import{C as t,bo as n,bp as e,S as o,L as s,M as c,am as r,T as l,bf as a,bh as i,bg as u,be as p,a0 as m,bx as d,bi as f,aL as $,aP as g,s as h,O as b,_ as k,P as y,a3 as x,b8 as v,Q as w,U as S,a4 as C,dV as T,bj as E,bk as D,bl as L,ck as j,b5 as M,N as I,b6 as N,dW as Q,bP as P,e as _,bN as A,$ as B,c as H,E as V,ab as q,m as U,A as W,k as G,dS as J,q as K,o as O,aK as R,g as X,aW as z}from"./calfSystem-Dh7h0wep.js"
import{L as F}from"./LinkButtonBracketed-D70VkPkx.js"
import{h as Y,u as Z}from"./await_block-DCjdH8ci.js"
import{d as tt}from"./daComponents-BF7zvmM0.js"
import{u as nt}from"./uniq-DV6HbVsY.js"
import{c as et}from"./closestTd-MGJwc3ua.js"
import{a as ot}from"./all-YfMtr2SN.js"
import{r as st}from"./regExpGroups-RxvH_Sj4.js"
import"./LinkButton-Ln28W4pK.js"
const ct=e(new Map),rt=n(ct,(t=>[...t].reduce(((t,[,n])=>t+(n.get("del")?.length??0)),0)))
function lt(t){let n
return{c(){n=b("tr"),n.innerHTML='<td class="compDel svelte-1qoer4b" colspan="3">Deleted</td>'},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function at(t){let n,e,o,s,c,r,d,f,$,g,h,k,T,E=t[0].get("del").length+""
const D=[ut,it],L=[]
function j(t,n){return 1&n&&(g=null),null==g&&(g=!!t[0].get("delPending")),g?0:1}return h=j(t,-1),k=L[h]=D[h](t),{c(){n=b("tr"),e=b("td"),o=b("img"),r=y(),d=b("td"),f=x(E),$=y(),k.c(),v(o.src,s=t[1](t[0]))||w(o,"src",s),w(o,"class","tip-dynamic"),w(o,"data-tipped",c=t[2](t[0])),w(o,"alt","component")},m(t,s){l(t,n,s),S(n,e),S(e,o),S(n,r),S(n,d),S(d,f),S(n,$),L[h].m(n,null),T=!0},p(t,e){(!T||1&e&&!v(o.src,s=t[1](t[0])))&&w(o,"src",s),(!T||1&e&&c!==(c=t[2](t[0])))&&w(o,"data-tipped",c),(!T||1&e)&&E!==(E=t[0].get("del").length+"")&&C(f,E)
let r=h
h=j(t,e),h===r?L[h].p(t,e):(a(),i(L[r],1,1,(()=>{L[r]=null})),u(),k=L[h],k?k.p(t,e):(k=L[h]=D[h](t),k.c()),p(k,1),k.m(n,null))},i(t){T||(p(k),T=!0)},o(t){i(k),T=!1},d(t){t&&m(n),L[h].d()}}}function it(t){let n,e,o
return e=new F({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=b("td"),E(e.$$.fragment)},m(t,s){l(t,n,s),D(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),L(e)}}}function ut(t){let n
return{c(){n=b("td"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',w(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function pt(t){let n
return{c(){n=x("Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function mt(t){let n,e,o,s,c
const d=[at,lt],f=[]
function $(t,e){return 1&e&&(n=null),null==n&&(n=!!t[0].get("del").length),n?0:1}return e=$(t,-1),o=f[e]=d[e](t),{c(){o.c(),s=r()},m(t,n){f[e].m(t,n),l(t,s,n),c=!0},p(t,[n]){let c=e
e=$(t,n),e===c?f[e].p(t,n):(a(),i(f[c],1,1,(()=>{f[c]=null})),u(),o=f[e],o?o.p(t,n):(o=f[e]=d[e](t),o.c()),p(o,1),o.m(s.parentNode,s))},i(t){c||(p(o),c=!0)},o(t){i(o),c=!1},d(t){t&&m(s),f[e].d(t)}}}function dt(t,n,e){let o
d(t,ct,(t=>e(5,o=t)))
let{itemId:s}=n
const c=f(),r=$()
let l
return t.$$set=t=>{"itemId"in t&&e(4,s=t.itemId)},t.$$.update=()=>{48&t.$$.dirty&&e(0,l=o.get(s))},[l,t=>`${g}items/${t.get("b")}.gif`,t=>`fetchitem.php?item_id=${t.get("b")}&inv_id=${t.get("a")}&t=2&p=${r}&vcode=${t.get("v")}`,function(){h("components","delType"),c("delType",s)},s,o]}class ft extends o{constructor(t){super(),s(this,t,dt,mt,c,{itemId:4})}}function $t(t){t[4]=t[6].rollup,t[5]=t[6].maxComp}function gt(t,n,e){const o=t.slice()
return o[7]=n[e],o}function ht(t){let n
return{c(){n=b("p"),n.textContent=`${t[10].message}`,M(n,"color","red")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function bt(t){let n,e,o,s,c,r,d,f,$,g,h
$t(t)
let k,v,T,E,D=t[5]+"",L=I(t[4]),j=[]
for(let n=0;n<L.length;n+=1)j[n]=kt(gt(t,L,n))
const M=t=>i(j[t],1,1,(()=>{j[t]=null}))
return{c(){n=b("div"),e=b("table"),o=b("thead"),s=b("tr"),s.innerHTML='<th colspan="3">Component Summary</th>',c=y(),r=b("tr"),d=b("th"),d.textContent="Total:",f=y(),$=b("th"),g=x(t[0]),h=x(" / "),k=x(D),v=y(),T=b("tbody")
for(let t=0;t<j.length;t+=1)j[t].c()
w($,"colspan","2"),w(e,"class","fshTblCenter")},m(t,a){l(t,n,a),S(n,e),S(e,o),S(o,s),S(o,c),S(o,r),S(r,d),S(r,f),S(r,$),S($,g),S($,h),S($,k),S(e,v),S(e,T)
for(let t=0;t<j.length;t+=1)j[t]&&j[t].m(T,null)
E=!0},p(t,n){if($t(t),(!E||1&n)&&C(g,t[0]),2&n){let e
for(L=I(t[4]),e=0;e<L.length;e+=1){const o=gt(t,L,e)
j[e]?(j[e].p(o,n),p(j[e],1)):(j[e]=kt(o),j[e].c(),p(j[e],1),j[e].m(T,null))}for(a(),e=L.length;e<j.length;e+=1)M(e)
u()}},i(t){if(!E){for(let t=0;t<L.length;t+=1)p(j[t])
E=!0}},o(t){j=j.filter(Boolean)
for(let t=0;t<j.length;t+=1)i(j[t])
E=!1},d(t){t&&m(n),N(j,t)}}}function kt(t){let n,e
return n=new ft({props:{itemId:t[7]}}),n.$on("delType",t[2]),{c(){E(n.$$.fragment)},m(t,o){D(n,t,o),e=!0},p:k,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function yt(t){let n
return{c(){n=b("div"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',w(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function xt(t){let n,e,o={ctx:t,current:null,token:null,hasCatch:!0,pending:yt,then:bt,catch:ht,value:6,error:10,blocks:[,,,]}
return Y(t[1](),o),{c(){n=r(),o.block.c()},m(t,s){l(t,n,s),o.block.m(t,o.anchor=s),o.mount=()=>n.parentNode,o.anchor=n,e=!0},p(n,[e]){Z(o,t=n,e)},i(t){e||(p(o.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=o.blocks[t]
i(n)}e=!1},d(t){t&&m(n),o.block.d(t),o.token=null,o=null}}}function vt(n,e,o){let s
return d(n,rt,(t=>o(0,s=t))),[s,async function(){const n=await async function(t){const n=await t()
if(!n?.s)throw new Error(n?.e?.message??"Unknown Error")
return n}(tt)
return{rollup:function(n){const e=new Map(nt(n,"b").map((e=>{return[e.b,(o={...e,del:n.filter((({b:t})=>t===e.b)).map((({a:t})=>t)),delPending:!1},new Map(t(o)))]
var o})))
return ct.set(e),[...e.keys()]}(n.r),maxComp:n.h?.p.find((({k:t})=>56===t))?.v}},function(t){j.call(this,n,t)}]}class wt extends o{constructor(t){super(),s(this,t,vt,xt,c,{})}}function St(t){let n,e,o
return e=new F({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),e.$on("click",T(t[2])),{c(){n=b("div"),E(e.$$.fragment)},m(t,s){l(t,n,s),D(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),L(e)}}}function Ct(t){let n
return{c(){n=x("Enable Quick Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Tt(t){let n,e
return n=new wt({}),n.$on("delType",t[6]),{c(){E(n.$$.fragment)},m(t,o){D(n,t,o),e=!0},p:k,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function Et(t){let n,e,o
return e=new F({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=b("div"),E(e.$$.fragment)},m(t,s){l(t,n,s),D(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),L(e)}}}function Dt(t){let n
return{c(){n=x("Count Components")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Lt(t){let n
return{c(){n=x("Quick Extract")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function jt(t){let n,e,o,s
return e=new F({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),e.$on("click",T(t[5])),{c(){n=b("div"),o=b("div"),E(e.$$.fragment),M(o,"display","contents"),M(o,"--button-color","red")},m(t,c){l(t,n,c),S(n,o),D(e,o,null),s=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){i(e.$$.fragment,t),s=!1},d(t){t&&m(n),L(e)}}}function Mt(t){let n
return{c(){n=x("Delete All Visible")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function It(t){let n,e,o,s,c,r,d,f,$,g=!t[0]&&St(t)
const h=[Et,Tt],k=[]
function x(t,n){return t[1]?1:0}o=x(t),s=k[o]=h[o](t),d=new F({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),d.$on("click",t[4])
let v=t[0]&&jt(t)
return{c(){n=b("div"),g&&g.c(),e=y(),s.c(),c=y(),r=b("div"),E(d.$$.fragment),f=y(),v&&v.c(),w(n,"class","fshCenter")},m(t,s){l(t,n,s),g&&g.m(n,null),S(n,e),k[o].m(n,null),S(n,c),S(n,r),D(d,r,null),S(n,f),v&&v.m(n,null),$=!0},p(t,[r]){t[0]?g&&(a(),i(g,1,1,(()=>{g=null})),u()):g?(g.p(t,r),1&r&&p(g,1)):(g=St(t),g.c(),p(g,1),g.m(n,e))
let l=o
o=x(t),o===l?k[o].p(t,r):(a(),i(k[l],1,1,(()=>{k[l]=null})),u(),s=k[o],s?s.p(t,r):(s=k[o]=h[o](t),s.c()),p(s,1),s.m(n,c))
const m={}
256&r&&(m.$$scope={dirty:r,ctx:t}),d.$set(m),t[0]?v?(v.p(t,r),1&r&&p(v,1)):(v=jt(t),v.c(),p(v,1),v.m(n,null)):v&&(a(),i(v,1,1,(()=>{v=null})),u())},i(t){$||(p(g),p(s),p(d.$$.fragment,t),p(v),$=!0)},o(t){i(g),i(s),i(d.$$.fragment,t),i(v),$=!1},d(t){t&&m(n),g&&g.d(),k[o].d(),L(d),v&&v.d()}}}function Nt(t,n,e){let o,s
const c=f()
return[o,s,function(){h("components","enableQuickDel"),e(0,o=!0),c("enableQuickDel")},function(){h("components","countComponents"),e(1,s=!0)},function(){h("components","insertQuickExtract"),Q()},function(){h("components","deleteAllVisible"),c("deleteAllVisible")},function(n){j.call(this,t,n)}]}var Qt=class extends o{constructor(t){super(),s(this,t,Nt,It,c,{})}}
function Pt(t){return P({subcmd:"destroycomponent",removeIndex:t})}async function _t(t){const n=await _({cmd:"profile",subcmd:"destroycomponent",component_id:t})
return n?function(t,n){const e=A(n)
return{r:"Component destroyed."===e?0:1,m:e,c:t}}(t,n):{s:!1}}async function At(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>1===t.r))
return n.length>0?{r:n.map((t=>t.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await ot(t.map(_t)))}function Bt(t){if(!t)return
const n=t.children[0]
return n.replaceWith(U({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),n}function Ht(t,n){!function(t,n,e){ct.update((o=>(o.get(t)?.set(n,e),o)))}(n,"delPending",t)}const Vt=t=>t.forEach((([t])=>t?.children[0]?.remove())),qt=t=>t.map((([t])=>[t,Bt(t)])),Ut=([,t])=>t,Wt=t=>nt(t.map(Ut)),Gt=([,,t])=>t,Jt=t=>Wt(t).map((n=>[n,t.filter((([,t])=>t===n)).map(Gt)])),Kt=t=>function(t,n){ct.update((e=>(function(t,n){if(!n)return
const e=n.get("del").filter((n=>!t.includes(n)))
n.set("del",e)}(n,e.get(t)),e)))}(...t)
async function Ot(t){const n=qt(t),e=await(o=t.map(Gt),B(Pt,At,o))
var o
e?.s?(Jt(t).forEach(Kt),Vt(n)):(q(e?.e?.message??"Unknown Error"),n.forEach((([t,n])=>{n&&t.children[0].replaceWith(n)})))}async function Rt(t){const n=Wt(t)
n.forEach(H(Ht,!0)),await ot(V(30,t).map(Ot)),n.forEach(H(Ht,!1))}function Xt(t){const{itemId:n,invId:e}=st(W,t.dataset.tipped)
return[Number(n),Number(e)]}const zt=t=>[et(t),...Xt(t)]
function Ft(t){Rt(G("img",t).map(zt))}const Yt=t=>J(ct).get(t.detail).get("del"),Zt=(t,n)=>et(K(`img[data-tipped*="&inv_id=${n}&"]`,t))
function tn(t,n){Rt(Yt(n).map((e=>[Zt(t,e),n.detail,e])))}function nn(t){"IMG"===t.target.tagName&&(t.preventDefault(),h("components","quickDel"),R(t.target),Rt([[et(t.target),...Xt(t.target)]]))}function en(t){t.classList.add("fshQuickDel"),O(t,nn)}function on(){const t=function(){const t=X("profileRightColumn"),n=z("inventory-table",t)
if(2===n.length)return n[1]}()
if(!t)return
const n=new Qt({target:t.parentNode})
n.$on("enableQuickDel",H(en,t)),n.$on("delType",H(tn,t)),n.$on("deleteAllVisible",H(Ft,t))}export{on as default}
//# sourceMappingURL=components-D2xNa6Od.js.map
