import{C as t,be as n,bf as e,S as o,J as s,K as c,ah as r,P as l,b5 as a,b7 as i,b6 as u,b4 as p,X as m,bl as d,b8 as f,aH as $,s as g,L as h,W as b,M as k,_ as y,a_ as v,N as x,Q as w,a0 as C,dy as S,b9 as T,ba as E,bb as j,c7 as D,aX as M,aY as I,dz as L,bA as N,e as Q,bz as A,$ as H,c as _,a6 as q,m as B,A as P,k as V,dA as W,q as X,o as z,aD as G,g as U,aM as Y}from"./calfSystem-dEoRVG2S.js"
import{L as J}from"./LinkButtonBracketed-WOCGf0UU.js"
import{h as K,u as R}from"./await_block-LFXQ2_nx.js"
import{e as F}from"./each-rfoBEd-I.js"
import{d as O}from"./daComponents-h9SwmRvi.js"
import{u as Z}from"./uniq-x2DnzZWs.js"
import{p as tt}from"./playerId-GaX4qisZ.js"
import{c as nt}from"./closestTd-8-XuRL66.js"
import{a as et}from"./all-TTLWag-d.js"
import{c as ot}from"./chunk-joYXv2f3.js"
import{r as st}from"./regExpGroups-0Iow65AS.js"
import"./LinkButton-QDAQbbJK.js"
const ct=e(new Map),rt=n(ct,(t=>[...t].reduce(((t,[,n])=>t+(n.get("del")?.length??0)),0)))
function lt(t){let n
return{c(){n=h("tr"),n.innerHTML='<td class="compDel svelte-1qoer4b" colspan="3">Deleted</td>'},m(t,e){l(t,n,e)},p:b,i:b,o:b,d(t){t&&m(n)}}}function at(t){let n,e,o,s,c,r,d,f,$,g,b,S,T,E=t[0].get("del").length+""
const j=[ut,it],D=[]
function M(t,n){return 1&n&&(g=null),null==g&&(g=!!t[0].get("delPending")),g?0:1}return b=M(t,-1),S=D[b]=j[b](t),{c(){n=h("tr"),e=h("td"),o=h("img"),r=k(),d=h("td"),f=y(E),$=k(),S.c(),v(o.src,s=t[1](t[0]))||x(o,"src",s),x(o,"class","tip-dynamic"),x(o,"data-tipped",c=t[2](t[0])),x(o,"alt","component")},m(t,s){l(t,n,s),w(n,e),w(e,o),w(n,r),w(n,d),w(d,f),w(n,$),D[b].m(n,null),T=!0},p(t,e){(!T||1&e&&!v(o.src,s=t[1](t[0])))&&x(o,"src",s),(!T||1&e&&c!==(c=t[2](t[0])))&&x(o,"data-tipped",c),(!T||1&e)&&E!==(E=t[0].get("del").length+"")&&C(f,E)
let r=b
b=M(t,e),b===r?D[b].p(t,e):(a(),i(D[r],1,1,(()=>{D[r]=null})),u(),S=D[b],S?S.p(t,e):(S=D[b]=j[b](t),S.c()),p(S,1),S.m(n,null))},i(t){T||(p(S),T=!0)},o(t){i(S),T=!1},d(t){t&&m(n),D[b].d()}}}function it(t){let n,e,o
return e=new J({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),e.$on("click",S(t[3])),{c(){n=h("td"),T(e.$$.fragment)},m(t,s){l(t,n,s),E(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),j(e)}}}function ut(t){let n
return{c(){n=h("td"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',x(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:b,i:b,o:b,d(t){t&&m(n)}}}function pt(t){let n
return{c(){n=y("Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function mt(t){let n,e,o,s,c
const d=[at,lt],f=[]
function $(t,e){return 1&e&&(n=null),null==n&&(n=!!t[0].get("del").length),n?0:1}return e=$(t,-1),o=f[e]=d[e](t),{c(){o.c(),s=r()},m(t,n){f[e].m(t,n),l(t,s,n),c=!0},p(t,[n]){let c=e
e=$(t,n),e===c?f[e].p(t,n):(a(),i(f[c],1,1,(()=>{f[c]=null})),u(),o=f[e],o?o.p(t,n):(o=f[e]=d[e](t),o.c()),p(o,1),o.m(s.parentNode,s))},i(t){c||(p(o),c=!0)},o(t){i(o),c=!1},d(t){t&&m(s),f[e].d(t)}}}function dt(t,n,e){let o
d(t,ct,(t=>e(5,o=t)))
let{itemId:s}=n
const c=f(),r=tt()
let l
return t.$$set=t=>{"itemId"in t&&e(4,s=t.itemId)},t.$$.update=()=>{48&t.$$.dirty&&e(0,l=o.get(s))},[l,t=>`${$}items/${t.get("b")}.gif`,t=>`fetchitem.php?item_id=${t.get("b")}&inv_id=${t.get("a")}&t=2&p=${r}&vcode=${t.get("v")}`,function(){g("components","delType"),c("delType",s)},s,o]}class ft extends o{constructor(t){super(),s(this,t,dt,mt,c,{itemId:4})}}function $t(t){t[4]=t[6].rollup,t[5]=t[6].maxComp}function gt(t,n,e){const o=t.slice()
return o[7]=n[e],o}function ht(t){let n
return{c(){n=h("p"),n.textContent=`${t[10].message}`,M(n,"color","red")},m(t,e){l(t,n,e)},p:b,i:b,o:b,d(t){t&&m(n)}}}function bt(t){let n,e,o,s,c,r,d,f,$,g,b,v,S
$t(t)
let T,E,j=t[5]+"",D=F(t[4]),M=[]
for(let n=0;n<D.length;n+=1)M[n]=kt(gt(t,D,n))
const L=t=>i(M[t],1,1,(()=>{M[t]=null}))
return{c(){n=h("div"),e=h("table"),o=h("thead"),o.innerHTML='<tr><th colspan="3">Component Summary</th></tr>',s=k(),c=h("tbody")
for(let t=0;t<M.length;t+=1)M[t].c()
r=k(),d=h("tfoot"),f=h("tr"),$=h("td"),$.textContent="Total:",g=k(),b=h("td"),v=y(t[0]),S=y(" / "),T=y(j),x(b,"colspan","2"),x(e,"class","fshTblCenter")},m(t,a){l(t,n,a),w(n,e),w(e,o),w(e,s),w(e,c)
for(let t=0;t<M.length;t+=1)M[t]&&M[t].m(c,null)
w(e,r),w(e,d),w(d,f),w(f,$),w(f,g),w(f,b),w(b,v),w(b,S),w(b,T),E=!0},p(t,n){if($t(t),2&n){let e
for(D=F(t[4]),e=0;e<D.length;e+=1){const o=gt(t,D,e)
M[e]?(M[e].p(o,n),p(M[e],1)):(M[e]=kt(o),M[e].c(),p(M[e],1),M[e].m(c,null))}for(a(),e=D.length;e<M.length;e+=1)L(e)
u()}(!E||1&n)&&C(v,t[0])},i(t){if(!E){for(let t=0;t<D.length;t+=1)p(M[t])
E=!0}},o(t){M=M.filter(Boolean)
for(let t=0;t<M.length;t+=1)i(M[t])
E=!1},d(t){t&&m(n),I(M,t)}}}function kt(t){let n,e
return n=new ft({props:{itemId:t[7]}}),n.$on("delType",t[2]),{c(){T(n.$$.fragment)},m(t,o){E(n,t,o),e=!0},p:b,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function yt(t){let n
return{c(){n=h("div"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',x(n,"class","compSumSpin")},m(t,e){l(t,n,e)},p:b,i:b,o:b,d(t){t&&m(n)}}}function vt(t){let n,e,o={ctx:t,current:null,token:null,hasCatch:!0,pending:yt,then:bt,catch:ht,value:6,error:10,blocks:[,,,]}
return K(t[1](),o),{c(){n=r(),o.block.c()},m(t,s){l(t,n,s),o.block.m(t,o.anchor=s),o.mount=()=>n.parentNode,o.anchor=n,e=!0},p(n,[e]){R(o,t=n,e)},i(t){e||(p(o.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=o.blocks[t]
i(n)}e=!1},d(t){t&&m(n),o.block.d(t),o.token=null,o=null}}}function xt(n,e,o){let s
return d(n,rt,(t=>o(0,s=t))),[s,async function(){const n=await async function(t){const n=await t()
if(!n?.s)throw new Error(n?.e?.message??"Unknown Error")
return n}(O)
return{rollup:function(n){const e=new Map(Z(n,"b").map((e=>{return[e.b,(o={...e,del:n.filter((({b:t})=>t===e.b)).map((({a:t})=>t)),delPending:!1},new Map(t(o)))]
var o})))
return ct.set(e),[...e.keys()]}(n.r),maxComp:n.h?.p[56]?.v}},function(t){D.call(this,n,t)}]}class wt extends o{constructor(t){super(),s(this,t,xt,vt,c,{})}}function Ct(t){let n,e,o
return e=new J({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),e.$on("click",S(t[2])),{c(){n=h("div"),T(e.$$.fragment)},m(t,s){l(t,n,s),E(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),j(e)}}}function St(t){let n
return{c(){n=y("Enable Quick Del")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Tt(t){let n,e
return n=new wt({}),n.$on("delType",t[6]),{c(){T(n.$$.fragment)},m(t,o){E(n,t,o),e=!0},p:b,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function Et(t){let n,e,o
return e=new J({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),e.$on("click",S(t[3])),{c(){n=h("div"),T(e.$$.fragment)},m(t,s){l(t,n,s),E(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){t&&m(n),j(e)}}}function jt(t){let n
return{c(){n=y("Count Components")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Dt(t){let n
return{c(){n=y("Quick Extract")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Mt(t){let n,e,o,s
return e=new J({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),e.$on("click",S(t[5])),{c(){n=h("div"),o=h("div"),T(e.$$.fragment),M(o,"display","contents"),M(o,"--button-color","red")},m(t,c){l(t,n,c),w(n,o),E(e,o,null),s=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){i(e.$$.fragment,t),s=!1},d(t){t&&m(n),j(e)}}}function It(t){let n
return{c(){n=y("Delete All Visible")},m(t,e){l(t,n,e)},d(t){t&&m(n)}}}function Lt(t){let n,e,o,s,c,r,d,f,$,g=!t[0]&&Ct(t)
const b=[Et,Tt],y=[]
function v(t,n){return t[1]?1:0}o=v(t),s=y[o]=b[o](t),d=new J({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),d.$on("click",t[4])
let C=t[0]&&Mt(t)
return{c(){n=h("div"),g&&g.c(),e=k(),s.c(),c=k(),r=h("div"),T(d.$$.fragment),f=k(),C&&C.c(),x(n,"class","fshCenter")},m(t,s){l(t,n,s),g&&g.m(n,null),w(n,e),y[o].m(n,null),w(n,c),w(n,r),E(d,r,null),w(n,f),C&&C.m(n,null),$=!0},p(t,[r]){t[0]?g&&(a(),i(g,1,1,(()=>{g=null})),u()):g?(g.p(t,r),1&r&&p(g,1)):(g=Ct(t),g.c(),p(g,1),g.m(n,e))
let l=o
o=v(t),o===l?y[o].p(t,r):(a(),i(y[l],1,1,(()=>{y[l]=null})),u(),s=y[o],s?s.p(t,r):(s=y[o]=b[o](t),s.c()),p(s,1),s.m(n,c))
const m={}
256&r&&(m.$$scope={dirty:r,ctx:t}),d.$set(m),t[0]?C?(C.p(t,r),1&r&&p(C,1)):(C=Mt(t),C.c(),p(C,1),C.m(n,null)):C&&(a(),i(C,1,1,(()=>{C=null})),u())},i(t){$||(p(g),p(s),p(d.$$.fragment,t),p(C),$=!0)},o(t){i(g),i(s),i(d.$$.fragment,t),i(C),$=!1},d(t){t&&m(n),g&&g.d(),y[o].d(),j(d),C&&C.d()}}}function Nt(t,n,e){let o,s
const c=f()
return[o,s,function(){g("components","enableQuickDel"),e(0,o=!0),c("enableQuickDel")},function(){g("components","countComponents"),e(1,s=!0)},function(){g("components","insertQuickExtract"),L()},function(){g("components","deleteAllVisible"),c("deleteAllVisible")},function(n){D.call(this,t,n)}]}var Qt=class extends o{constructor(t){super(),s(this,t,Nt,Lt,c,{})}}
function At(t){return N({subcmd:"destroycomponent",removeIndex:t})}async function Ht(t){const n=await Q({cmd:"profile",subcmd:"destroycomponent",component_id:t})
return n?function(t,n){const e=A(n)
return{r:"Component destroyed."===e?0:1,m:e,c:t}}(t,n):{s:!1}}async function _t(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>1===t.r))
return n.length>0?{r:n.map((t=>t.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await et(t.map(Ht)))}function qt(t){if(!t)return
const n=t.children[0]
return n.replaceWith(B({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),n}function Bt(t,n){!function(t,n,e){ct.update((o=>(o.get(t)?.set(n,e),o)))}(n,"delPending",t)}const Pt=t=>t.forEach((([t])=>t?.children[0]?.remove())),Vt=t=>t.map((([t])=>[t,qt(t)])),Wt=([,t])=>t,Xt=t=>Z(t.map(Wt)),zt=([,,t])=>t,Gt=t=>Xt(t).map((n=>[n,t.filter((([,t])=>t===n)).map(zt)])),Ut=t=>function(t,n){ct.update((e=>(function(t,n){if(!n)return
const e=n.get("del").filter((n=>!t.includes(n)))
n.set("del",e)}(n,e.get(t)),e)))}(...t)
async function Yt(t){const n=Vt(t),e=await(o=t.map(zt),H(At,_t,o))
var o
e?.s?(Gt(t).forEach(Ut),Pt(n)):(q(e?.e?.message??"Unknown Error"),n.forEach((([t,n])=>{n&&t.children[0].replaceWith(n)})))}async function Jt(t){const n=Xt(t)
n.forEach(_(Bt,!0)),await et(ot(30,t).map(Yt)),n.forEach(_(Bt,!1))}function Kt(t){const{itemId:n,invId:e}=st(P,t.dataset.tipped)
return[Number(n),Number(e)]}const Rt=t=>[nt(t),...Kt(t)]
function Ft(t){Jt(V("img",t).map(Rt))}const Ot=t=>W(ct).get(t.detail).get("del"),Zt=(t,n)=>nt(X(`img[data-tipped*="&inv_id=${n}&"]`,t))
function tn(t,n){Jt(Ot(n).map((e=>[Zt(t,e),n.detail,e])))}function nn(t){"IMG"===t.target.tagName&&(t.preventDefault(),g("components","quickDel"),G(t.target),Jt([[nt(t.target),...Kt(t.target)]]))}function en(t){t.classList.add("fshQuickDel"),z(t,nn)}function on(){const t=function(){const t=U("profileRightColumn"),n=Y("inventory-table",t)
if(2===n.length)return n[1]}()
if(!t)return
const n=new Qt({target:t.parentNode})
n.$on("enableQuickDel",_(en,t)),n.$on("delType",_(tn,t)),n.$on("deleteAllVisible",_(Ft,t))}export{on as default}
//# sourceMappingURL=components-wEzmmhUH.js.map
