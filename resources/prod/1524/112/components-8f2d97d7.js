import{C as t,bf as n,bg as e,S as o,J as c,K as s,ah as r,P as l,b6 as a,b8 as i,b7 as u,b5 as p,X as m,bm as d,b9 as f,aE as $,aI as g,n as h,L as b,W as k,M as y,_ as x,a$ as v,N as w,Q as C,a0 as S,dw as T,ba as D,bb as E,bc as j,c8 as L,aY as I,aZ as M,dx as N,bB as Q,d as A,bA as _,$ as B,c as H,a6 as q,l as P,A as V,j as W,dy as G,q as U,o as X,aD as Y,g as J,aN as K}from"./calfSystem-4830a18d.js"
import{L as R}from"./LinkButtonBracketed-0fb81602.js"
import{h as Z,u as z}from"./await_block-31b017e2.js"
import{e as F}from"./each-1f09c43f.js"
import{d as O}from"./daComponents-233c782e.js"
import{u as tt}from"./uniq-e12b948a.js"
import{c as nt}from"./closestTd-18fa66ff.js"
import{a as et}from"./all-414e0607.js"
import{c as ot}from"./chunk-cd03a005.js"
import{r as ct}from"./regExpGroups-9a4124f3.js"
import"./LinkButton-59368dc4.js"
const st=e(new Map),rt=n(st,(t=>[...t].reduce(((t,[,n])=>t+(n.get("del")?.length??0)),0)))
function lt(t){let n
return{c(){n=b("tr"),n.innerHTML='<td class="compDel svelte-1qoer4b" colspan="3">Deleted</td>'},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function at(t){let n,e,o,c,s,r,d,f,$,g,h,k,T,D=t[0].get("del").length+""
const E=[ut,it],j=[]
function L(t,n){return 1&n&&(g=null),null==g&&(g=!!t[0].get("delPending")),g?0:1}return h=L(t,-1),k=j[h]=E[h](t),{c(){n=b("tr"),e=b("td"),o=b("img"),r=y(),d=b("td"),f=x(D),$=y(),k.c(),v(o.src,c=t[1](t[0]))||w(o,"src",c),w(o,"class","tip-dynamic"),w(o,"data-tipped",s=t[2](t[0])),w(o,"alt","component")},m(t,c){l(t,n,c),C(n,e),C(e,o),C(n,r),C(n,d),C(d,f),C(n,$),j[h].m(n,null),T=!0},p(t,e){(!T||1&e&&!v(o.src,c=t[1](t[0])))&&w(o,"src",c),(!T||1&e&&s!==(s=t[2](t[0])))&&w(o,"data-tipped",s),(!T||1&e)&&D!==(D=t[0].get("del").length+"")&&S(f,D)
let r=h
h=L(t,e),h===r?j[h].p(t,e):(a(),i(j[r],1,1,(()=>{j[r]=null})),u(),k=j[h],k?k.p(t,e):(k=j[h]=E[h](t),k.c()),p(k,1),k.m(n,null))},i(t){T||(p(k),T=!0)},o(t){i(k),T=!1},d(t){t&&m(n),j[h].d()}}}function it(t){let n,e,o
return e=new R({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=b("td"),D(e.$$.fragment)},m(t,c){l(t,n,c),E(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),j(e)}}}function ut(t){let n
return{c(){n=b("td"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',w(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function pt(t){let n
return{c(){n=x("Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function mt(t){let n,e,o,c,s
const d=[at,lt],f=[]
function $(t,e){return 1&e&&(n=null),null==n&&(n=!!t[0].get("del").length),n?0:1}return e=$(t,-1),o=f[e]=d[e](t),{c(){o.c(),c=r()},m(t,n){f[e].m(t,n),l(t,c,n),s=!0},p(t,[n]){let s=e
e=$(t,n),e===s?f[e].p(t,n):(a(),i(f[s],1,1,(()=>{f[s]=null})),u(),o=f[e],o?o.p(t,n):(o=f[e]=d[e](t),o.c()),p(o,1),o.m(c.parentNode,c))},i(t){s||(p(o),s=!0)},o(t){i(o),s=!1},d(t){t&&m(c),f[e].d(t)}}}function dt(t,n,e){let o
d(t,st,(t=>e(5,o=t)))
let{itemId:c}=n
const s=f(),r=$()
let l
return t.$$set=t=>{"itemId"in t&&e(4,c=t.itemId)},t.$$.update=()=>{48&t.$$.dirty&&e(0,l=o.get(c))},[l,t=>`${g}items/${t.get("b")}.gif`,t=>`fetchitem.php?item_id=${t.get("b")}&inv_id=${t.get("a")}&t=2&p=${r}&vcode=${t.get("v")}`,function(){h("components","delType"),s("delType",c)},c,o]}class ft extends o{constructor(t){super(),c(this,t,dt,mt,s,{itemId:4})}}function $t(t){t[4]=t[6].rollup,t[5]=t[6].maxComp}function gt(t,n,e){const o=t.slice()
return o[7]=n[e],o}function ht(t){let n
return{c(){n=b("p"),n.textContent=`${t[10].message}`,I(n,"color","red")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function bt(t){let n,e,o,c,s,r,d,f,$,g,h,k,v
$t(t)
let T,D,E=t[5]+"",j=F(t[4]),L=[]
for(let n=0;n<j.length;n+=1)L[n]=kt(gt(t,j,n))
const I=t=>i(L[t],1,1,(()=>{L[t]=null}))
return{c(){n=b("div"),e=b("table"),o=b("thead"),o.innerHTML='<tr><th colspan="3">Component Summary</th></tr>',c=y(),s=b("tbody")
for(let t=0;t<L.length;t+=1)L[t].c()
r=y(),d=b("tfoot"),f=b("tr"),$=b("td"),$.textContent="Total:",g=y(),h=b("td"),k=x(t[0]),v=x(" / "),T=x(E),w(h,"colspan","2"),w(e,"class","fshTblCenter")},m(t,a){l(t,n,a),C(n,e),C(e,o),C(e,c),C(e,s)
for(let t=0;t<L.length;t+=1)L[t]&&L[t].m(s,null)
C(e,r),C(e,d),C(d,f),C(f,$),C(f,g),C(f,h),C(h,k),C(h,v),C(h,T),D=!0},p(t,n){if($t(t),2&n){let e
for(j=F(t[4]),e=0;e<j.length;e+=1){const o=gt(t,j,e)
L[e]?(L[e].p(o,n),p(L[e],1)):(L[e]=kt(o),L[e].c(),p(L[e],1),L[e].m(s,null))}for(a(),e=j.length;e<L.length;e+=1)I(e)
u()}(!D||1&n)&&S(k,t[0])},i(t){if(!D){for(let t=0;t<j.length;t+=1)p(L[t])
D=!0}},o(t){L=L.filter(Boolean)
for(let t=0;t<L.length;t+=1)i(L[t])
D=!1},d(t){t&&m(n),M(L,t)}}}function kt(t){let n,e
return n=new ft({props:{itemId:t[7]}}),n.$on("delType",t[2]),{c(){D(n.$$.fragment)},m(t,o){E(n,t,o),e=!0},p:k,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function yt(t){let n
return{c(){n=b("div"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',w(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:k,i:k,o:k,d(t){t&&m(n)}}}function xt(t){let n,e,o={ctx:t,current:null,token:null,hasCatch:!0,pending:yt,then:bt,catch:ht,value:6,error:10,blocks:[,,,]}
return Z(t[1](),o),{c(){n=r(),o.block.c()},m(t,c){l(t,n,c),o.block.m(t,o.anchor=c),o.mount=()=>n.parentNode,o.anchor=n,e=!0},p(n,[e]){z(o,t=n,e)},i(t){e||(p(o.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=o.blocks[t]
i(n)}e=!1},d(t){t&&m(n),o.block.d(t),o.token=null,o=null}}}function vt(n,e,o){let c
return d(n,rt,(t=>o(0,c=t))),[c,async function(){const n=await async function(t){const n=await t()
if(!n?.s)throw new Error(n?.e?.message??"Unknown Error")
return n}(O)
return{rollup:function(n){const e=new Map(tt(n,"b").map((e=>{return[e.b,(o={...e,del:n.filter((({b:t})=>t===e.b)).map((({a:t})=>t)),delPending:!1},new Map(t(o)))]
var o})))
return st.set(e),[...e.keys()]}(n.r),maxComp:n.h?.p[56]?.v}},function(t){L.call(this,n,t)}]}class wt extends o{constructor(t){super(),c(this,t,vt,xt,s,{})}}function Ct(t){let n,e,o
return e=new R({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),e.$on("click",T(t[2])),{c(){n=b("div"),D(e.$$.fragment)},m(t,c){l(t,n,c),E(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),j(e)}}}function St(t){let n
return{c(){n=x("Enable Quick Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Tt(t){let n,e
return n=new wt({}),n.$on("delType",t[6]),{c(){D(n.$$.fragment)},m(t,o){E(n,t,o),e=!0},p:k,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function Dt(t){let n,e,o
return e=new R({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),e.$on("click",T(t[3])),{c(){n=b("div"),D(e.$$.fragment)},m(t,c){l(t,n,c),E(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),j(e)}}}function Et(t){let n
return{c(){n=x("Count Components")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function jt(t){let n
return{c(){n=x("Quick Extract")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Lt(t){let n,e,o,c
return e=new R({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),e.$on("click",T(t[5])),{c(){n=b("div"),o=b("div"),D(e.$$.fragment),I(o,"display","contents"),I(o,"--button-color","red")},m(t,s){l(t,n,s),C(n,o),E(e,o,null),c=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){c||(p(e.$$.fragment,t),c=!0)},o(t){i(e.$$.fragment,t),c=!1},d(t){t&&m(n),j(e)}}}function It(t){let n
return{c(){n=x("Delete All Visible")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Mt(t){let n,e,o,c,s,r,d,f,$,g=!t[0]&&Ct(t)
const h=[Dt,Tt],k=[]
function x(t,n){return t[1]?1:0}o=x(t),c=k[o]=h[o](t),d=new R({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),d.$on("click",t[4])
let v=t[0]&&Lt(t)
return{c(){n=b("div"),g&&g.c(),e=y(),c.c(),s=y(),r=b("div"),D(d.$$.fragment),f=y(),v&&v.c(),w(n,"class","fshCenter")},m(t,c){l(t,n,c),g&&g.m(n,null),C(n,e),k[o].m(n,null),C(n,s),C(n,r),E(d,r,null),C(n,f),v&&v.m(n,null),$=!0},p(t,[r]){t[0]?g&&(a(),i(g,1,1,(()=>{g=null})),u()):g?(g.p(t,r),1&r&&p(g,1)):(g=Ct(t),g.c(),p(g,1),g.m(n,e))
let l=o
o=x(t),o===l?k[o].p(t,r):(a(),i(k[l],1,1,(()=>{k[l]=null})),u(),c=k[o],c?c.p(t,r):(c=k[o]=h[o](t),c.c()),p(c,1),c.m(n,s))
const m={}
256&r&&(m.$$scope={dirty:r,ctx:t}),d.$set(m),t[0]?v?(v.p(t,r),1&r&&p(v,1)):(v=Lt(t),v.c(),p(v,1),v.m(n,null)):v&&(a(),i(v,1,1,(()=>{v=null})),u())},i(t){$||(p(g),p(c),p(d.$$.fragment,t),p(v),$=!0)},o(t){i(g),i(c),i(d.$$.fragment,t),i(v),$=!1},d(t){t&&m(n),g&&g.d(),k[o].d(),j(d),v&&v.d()}}}function Nt(t,n,e){let o,c
const s=f()
return[o,c,function(){h("components","enableQuickDel"),e(0,o=!0),s("enableQuickDel")},function(){h("components","countComponents"),e(1,c=!0)},function(){h("components","insertQuickExtract"),N()},function(){h("components","deleteAllVisible"),s("deleteAllVisible")},function(n){L.call(this,t,n)}]}var Qt=class extends o{constructor(t){super(),c(this,t,Nt,Mt,s,{})}}
function At(t){return Q({subcmd:"destroycomponent",removeIndex:t})}async function _t(t){return function(t,n){const e=_(n)
return{r:"Component destroyed."===e?0:1,m:e,c:t}}(t,await A({cmd:"profile",subcmd:"destroycomponent",component_id:t}))}async function Bt(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>1===t.r))
return n.length>0?{r:n.map((t=>t.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await et(t.map(_t)))}function Ht(t){if(!t)return
const n=t.children[0]
return n.replaceWith(P({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),n}function qt(t,n){!function(t,n,e){st.update((o=>(o.get(t)?.set(n,e),o)))}(n,"delPending",t)}const Pt=t=>t.forEach((([t])=>t?.children[0]?.remove())),Vt=t=>t.map((([t])=>[t,Ht(t)])),Wt=([,t])=>t,Gt=t=>tt(t.map(Wt)),Ut=([,,t])=>t,Xt=t=>Gt(t).map((n=>[n,t.filter((([,t])=>t===n)).map(Ut)])),Yt=t=>function(t,n){st.update((e=>(function(t,n){if(!n)return
const e=n.get("del").filter((n=>!t.includes(n)))
n.set("del",e)}(n,e.get(t)),e)))}(...t)
async function Jt(t){const n=Vt(t),e=await(o=t.map(Ut),B(At,Bt,o))
var o
e?.s?(Xt(t).forEach(Yt),Pt(n)):(q(e?.e?.message??"Unknown Error"),n.forEach((([t,n])=>{n&&t.children[0].replaceWith(n)})))}async function Kt(t){const n=Gt(t)
n.forEach(H(qt,!0)),await et(ot(30,t).map(Jt)),n.forEach(H(qt,!1))}function Rt(t){const{itemId:n,invId:e}=ct(V,t.dataset.tipped)
return[Number(n),Number(e)]}const Zt=t=>[nt(t),...Rt(t)]
function zt(t){Kt(W("img",t).map(Zt))}const Ft=t=>G(st).get(t.detail).get("del"),Ot=(t,n)=>nt(U(`img[data-tipped*="&inv_id=${n}&"]`,t))
function tn(t,n){Kt(Ft(n).map((e=>[Ot(t,e),n.detail,e])))}function nn(t){"IMG"===t.target.tagName&&(t.preventDefault(),h("components","quickDel"),Y(t.target),Kt([[nt(t.target),...Rt(t.target)]]))}function en(t){t.classList.add("fshQuickDel"),X(t,nn)}function on(){const t=function(){const t=J("profileRightColumn"),n=K("inventory-table",t)
if(2===n.length)return n[1]}()
if(!t)return
const n=new Qt({target:t.parentNode})
n.$on("enableQuickDel",H(en,t)),n.$on("delType",H(tn,t)),n.$on("deleteAllVisible",H(zt,t))}export{on as default}
//# sourceMappingURL=components-8f2d97d7.js.map
