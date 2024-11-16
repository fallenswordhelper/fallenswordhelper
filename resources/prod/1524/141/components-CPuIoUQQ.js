import{C as t,bp as n,bo as e,S as o,L as s,M as c,O as r,Z as l,R as a,U as i,X as u,V as p,dV as m,be as d,bf as f,bg as $,bh as g,bi as h,b6 as b,P as k,bj as y,bk as x,T as v,W as w,am as S,bx as C,bl as T,aI as E,aO as D,s as j,b5 as I,N as L,b9 as M,ck as N,dW as Q,bP as V,d as H,bN as A,$ as P,b as W,E as _,k as q,ae as B,A as G,n as U,dX as O,q as R,e as X,aH as Z,g as z,aW as F}from"./calfSystem-Blt4DbaE.js"
import{L as J}from"./LinkButtonBracketed-C9l9Kpoo.js"
import{h as K,u as Y}from"./await_block-Bf7EOqQ9.js"
import{d as tt}from"./daComponents-CPhZntOg.js"
import{u as nt}from"./uniq-D422dDMJ.js"
import{c as et}from"./closestTd-p6KKSfdv.js"
import{a as ot}from"./all-YfMtr2SN.js"
import{r as st}from"./regExpGroups-B7iOxfb4.js"
import"./LinkButton-CTQrdC0s.js"
const ct=n(new Map),rt=e(ct,(t=>[...t].reduce(((t,[,n])=>t+(n.get("del")?.length??0)),0)))
function lt(t){let n
return{c(){n=i("tr"),n.innerHTML='<td class="compDel svelte-1qoer4b" colspan="3">Deleted</td>'},m(t,e){a(t,n,e)},p:l,i:l,o:l,d(t){t&&r(n)}}}function at(t){let n,e,o,s,c,l,m,d,g,h,S,C,T,E=t[0].get("del").length+""
const D=[ut,it],j=[]
function I(t,n){return 1&n&&(h=null),null==h&&(h=!!t[0].get("delPending")),h?0:1}return S=I(t,-1),C=j[S]=D[S](t),{c(){n=i("tr"),e=i("td"),o=i("img"),l=w(),m=i("td"),d=p(E),g=w(),C.c(),b(o.src,s=t[1](t[0]))||u(o,"src",s),u(o,"class","tip-dynamic"),u(o,"data-tipped",c=t[2](t[0])),u(o,"alt","component")},m(t,s){a(t,n,s),v(n,e),v(e,o),v(n,l),v(n,m),v(m,d),v(n,g),j[S].m(n,null),T=!0},p(t,e){(!T||1&e&&!b(o.src,s=t[1](t[0])))&&u(o,"src",s),(!T||1&e&&c!==(c=t[2](t[0])))&&u(o,"data-tipped",c),(!T||1&e)&&E!==(E=t[0].get("del").length+"")&&k(d,E)
let r=S
S=I(t,e),S===r?j[S].p(t,e):(y(),f(j[r],1,1,(()=>{j[r]=null})),x(),C=j[S],C?C.p(t,e):(C=j[S]=D[S](t),C.c()),$(C,1),C.m(n,null))},i(t){T||($(C),T=!0)},o(t){f(C),T=!1},d(t){t&&r(n),j[S].d()}}}function it(t){let n,e,o
return e=new J({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),e.$on("click",m(t[3])),{c(){n=i("td"),h(e.$$.fragment)},m(t,s){a(t,n,s),g(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){f(e.$$.fragment,t),o=!1},d(t){t&&r(n),d(e)}}}function ut(t){let n
return{c(){n=i("td"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',u(n,"class","compSumSpin")},m(t,e){a(t,n,e)},p:l,i:l,o:l,d(t){t&&r(n)}}}function pt(t){let n
return{c(){n=p("Del")},m(t,e){a(t,n,e)},d(t){t&&r(n)}}}function mt(t){let n,e,o,s,c
const l=[at,lt],i=[]
function u(t,e){return 1&e&&(n=null),null==n&&(n=!!t[0].get("del").length),n?0:1}return e=u(t,-1),o=i[e]=l[e](t),{c(){o.c(),s=S()},m(t,n){i[e].m(t,n),a(t,s,n),c=!0},p(t,[n]){let c=e
e=u(t,n),e===c?i[e].p(t,n):(y(),f(i[c],1,1,(()=>{i[c]=null})),x(),o=i[e],o?o.p(t,n):(o=i[e]=l[e](t),o.c()),$(o,1),o.m(s.parentNode,s))},i(t){c||($(o),c=!0)},o(t){f(o),c=!1},d(t){t&&r(s),i[e].d(t)}}}function dt(t,n,e){let o
C(t,ct,(t=>e(5,o=t)))
let{itemId:s}=n
const c=T(),r=E()
let l
return t.$$set=t=>{"itemId"in t&&e(4,s=t.itemId)},t.$$.update=()=>{48&t.$$.dirty&&e(0,l=o.get(s))},[l,t=>`${D}items/${t.get("b")}.gif`,t=>`fetchitem.php?item_id=${t.get("b")}&inv_id=${t.get("a")}&t=2&p=${r}&vcode=${t.get("v")}`,function(){j("components","delType"),c("delType",s)},s,o]}class ft extends o{constructor(t){super(),s(this,t,dt,mt,c,{itemId:4})}}function $t(t){t[4]=t[6].rollup,t[5]=t[6].maxComp}function gt(t,n,e){const o=t.slice()
return o[7]=n[e],o}function ht(t){let n
return{c(){n=i("p"),n.textContent=`${t[10].message}`,I(n,"color","red")},m(t,e){a(t,n,e)},p:l,i:l,o:l,d(t){t&&r(n)}}}function bt(t){let n,e,o,s,c,l,m,d,g,h,b
$t(t)
let S,C,T,E,D=t[5]+"",j=L(t[4]),I=[]
for(let n=0;n<j.length;n+=1)I[n]=kt(gt(t,j,n))
const N=t=>f(I[t],1,1,(()=>{I[t]=null}))
return{c(){n=i("div"),e=i("table"),o=i("thead"),s=i("tr"),s.innerHTML='<th colspan="3">Component Summary</th>',c=w(),l=i("tr"),m=i("th"),m.textContent="Total:",d=w(),g=i("th"),h=p(t[0]),b=p(" / "),S=p(D),C=w(),T=i("tbody")
for(let t=0;t<I.length;t+=1)I[t].c()
u(g,"colspan","2"),u(e,"class","fshTblCenter")},m(t,r){a(t,n,r),v(n,e),v(e,o),v(o,s),v(o,c),v(o,l),v(l,m),v(l,d),v(l,g),v(g,h),v(g,b),v(g,S),v(e,C),v(e,T)
for(let t=0;t<I.length;t+=1)I[t]&&I[t].m(T,null)
E=!0},p(t,n){if($t(t),(!E||1&n)&&k(h,t[0]),2&n){let e
for(j=L(t[4]),e=0;e<j.length;e+=1){const o=gt(t,j,e)
I[e]?(I[e].p(o,n),$(I[e],1)):(I[e]=kt(o),I[e].c(),$(I[e],1),I[e].m(T,null))}for(y(),e=j.length;e<I.length;e+=1)N(e)
x()}},i(t){if(!E){for(let t=0;t<j.length;t+=1)$(I[t])
E=!0}},o(t){I=I.filter(Boolean)
for(let t=0;t<I.length;t+=1)f(I[t])
E=!1},d(t){t&&r(n),M(I,t)}}}function kt(t){let n,e
return n=new ft({props:{itemId:t[7]}}),n.$on("delType",t[2]),{c(){h(n.$$.fragment)},m(t,o){g(n,t,o),e=!0},p:l,i(t){e||($(n.$$.fragment,t),e=!0)},o(t){f(n.$$.fragment,t),e=!1},d(t){d(n,t)}}}function yt(t){let n
return{c(){n=i("div"),n.innerHTML='<span class="fshSpinner fshSpinner12"></span>',u(n,"class","compSumSpin")},m(t,e){a(t,n,e)},p:l,i:l,o:l,d(t){t&&r(n)}}}function xt(t){let n,e,o={ctx:t,current:null,token:null,hasCatch:!0,pending:yt,then:bt,catch:ht,value:6,error:10,blocks:[,,,]}
return K(t[1](),o),{c(){n=S(),o.block.c()},m(t,s){a(t,n,s),o.block.m(t,o.anchor=s),o.mount=()=>n.parentNode,o.anchor=n,e=!0},p(n,[e]){Y(o,t=n,e)},i(t){e||($(o.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=o.blocks[t]
f(n)}e=!1},d(t){t&&r(n),o.block.d(t),o.token=null,o=null}}}function vt(n,e,o){let s
return C(n,rt,(t=>o(0,s=t))),[s,async function(){const n=await async function(t){const n=await t()
if(!n?.s)throw new Error(n?.e?.message??"Unknown Error")
return n}(tt)
return{rollup:function(n){const e=new Map(nt(n,"b").map((e=>{return[e.b,(o={...e,del:n.filter((({b:t})=>t===e.b)).map((({a:t})=>t)),delPending:!1},new Map(t(o)))]
var o})))
return ct.set(e),[...e.keys()]}(n.r),maxComp:n.h?.p.find((({k:t})=>56===t))?.v}},function(t){N.call(this,n,t)}]}class wt extends o{constructor(t){super(),s(this,t,vt,xt,c,{})}}function St(t){let n,e,o
return e=new J({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),e.$on("click",m(t[2])),{c(){n=i("div"),h(e.$$.fragment)},m(t,s){a(t,n,s),g(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){f(e.$$.fragment,t),o=!1},d(t){t&&r(n),d(e)}}}function Ct(t){let n
return{c(){n=p("Enable Quick Del")},m(t,e){a(t,n,e)},d(t){t&&r(n)}}}function Tt(t){let n,e
return n=new wt({}),n.$on("delType",t[6]),{c(){h(n.$$.fragment)},m(t,o){g(n,t,o),e=!0},p:l,i(t){e||($(n.$$.fragment,t),e=!0)},o(t){f(n.$$.fragment,t),e=!1},d(t){d(n,t)}}}function Et(t){let n,e,o
return e=new J({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),e.$on("click",m(t[3])),{c(){n=i("div"),h(e.$$.fragment)},m(t,s){a(t,n,s),g(e,n,null),o=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){f(e.$$.fragment,t),o=!1},d(t){t&&r(n),d(e)}}}function Dt(t){let n
return{c(){n=p("Count Components")},m(t,e){a(t,n,e)},d(t){t&&r(n)}}}function jt(t){let n
return{c(){n=p("Quick Extract")},m(t,e){a(t,n,e)},d(t){t&&r(n)}}}function It(t){let n,e,o,s
return e=new J({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),e.$on("click",m(t[5])),{c(){n=i("div"),o=i("div"),h(e.$$.fragment),I(o,"display","contents"),I(o,"--button-color","red")},m(t,c){a(t,n,c),v(n,o),g(e,o,null),s=!0},p(t,n){const o={}
256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){t&&r(n),d(e)}}}function Lt(t){let n
return{c(){n=p("Delete All Visible")},m(t,e){a(t,n,e)},d(t){t&&r(n)}}}function Mt(t){let n,e,o,s,c,l,p,m,b,k=!t[0]&&St(t)
const S=[Et,Tt],C=[]
function T(t,n){return t[1]?1:0}o=T(t),s=C[o]=S[o](t),p=new J({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),p.$on("click",t[4])
let E=t[0]&&It(t)
return{c(){n=i("div"),k&&k.c(),e=w(),s.c(),c=w(),l=i("div"),h(p.$$.fragment),m=w(),E&&E.c(),u(n,"class","fshCenter")},m(t,s){a(t,n,s),k&&k.m(n,null),v(n,e),C[o].m(n,null),v(n,c),v(n,l),g(p,l,null),v(n,m),E&&E.m(n,null),b=!0},p(t,[r]){t[0]?k&&(y(),f(k,1,1,(()=>{k=null})),x()):k?(k.p(t,r),1&r&&$(k,1)):(k=St(t),k.c(),$(k,1),k.m(n,e))
let l=o
o=T(t),o===l?C[o].p(t,r):(y(),f(C[l],1,1,(()=>{C[l]=null})),x(),s=C[o],s?s.p(t,r):(s=C[o]=S[o](t),s.c()),$(s,1),s.m(n,c))
const a={}
256&r&&(a.$$scope={dirty:r,ctx:t}),p.$set(a),t[0]?E?(E.p(t,r),1&r&&$(E,1)):(E=It(t),E.c(),$(E,1),E.m(n,null)):E&&(y(),f(E,1,1,(()=>{E=null})),x())},i(t){b||($(k),$(s),$(p.$$.fragment,t),$(E),b=!0)},o(t){f(k),f(s),f(p.$$.fragment,t),f(E),b=!1},d(t){t&&r(n),k&&k.d(),C[o].d(),d(p),E&&E.d()}}}function Nt(t,n,e){let o,s
const c=T()
return[o,s,function(){j("components","enableQuickDel"),e(0,o=!0),c("enableQuickDel")},function(){j("components","countComponents"),e(1,s=!0)},function(){j("components","insertQuickExtract"),Q()},function(){j("components","deleteAllVisible"),c("deleteAllVisible")},function(n){N.call(this,t,n)}]}class Qt extends o{constructor(t){super(),s(this,t,Nt,Mt,c,{})}}function Vt(t){return V({subcmd:"destroycomponent",removeIndex:t})}async function Ht(t){const n=await H({cmd:"profile",subcmd:"destroycomponent",component_id:t})
return n?function(t,n){const e=A(n)
return{r:"Component destroyed."===e?0:1,m:e,c:t}}(t,n):{s:!1}}async function At(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>1===t.r))
return n.length>0?{r:n.map((t=>t.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await ot(t.map(Ht)))}function Pt(t){if(!t)return
const n=t.children[0]
return n.replaceWith(q({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),n}function Wt(t,n){!function(t,n,e){ct.update((o=>(o.get(t)?.set(n,e),o)))}(n,"delPending",t)}const _t=t=>t.forEach((([t])=>t?.children[0]?.remove())),qt=t=>t.map((([t])=>[t,Pt(t)])),Bt=([,t])=>t,Gt=t=>nt(t.map(Bt)),Ut=([,,t])=>t,Ot=t=>Gt(t).map((n=>[n,t.filter((([,t])=>t===n)).map(Ut)])),Rt=t=>function(t,n){ct.update((e=>(function(t,n){if(!n)return
const e=n.get("del").filter((n=>!t.includes(n)))
n.set("del",e)}(n,e.get(t)),e)))}(...t)
async function Xt(t){const n=qt(t),e=await(o=t.map(Ut),P(Vt,At,o))
var o
e?.s?(Ot(t).forEach(Rt),_t(n)):(B(e?.e?.message??"Unknown Error"),n.forEach((([t,n])=>{n&&t.children[0].replaceWith(n)})))}async function Zt(t){const n=Gt(t)
n.forEach(W(Wt,!0)),await ot(_(30,t).map(Xt)),n.forEach(W(Wt,!1))}function zt(t){const{itemId:n,invId:e}=st(G,t.dataset.tipped)
return[Number(n),Number(e)]}const Ft=t=>[et(t),...zt(t)]
function Jt(t){Zt(U("img",t).map(Ft))}const Kt=t=>O(ct).get(t.detail).get("del"),Yt=(t,n)=>et(R(`img[data-tipped*="&inv_id=${n}&"]`,t))
function tn(t,n){Zt(Kt(n).map((e=>[Yt(t,e),n.detail,e])))}function nn(t){"IMG"===t.target.tagName&&(t.preventDefault(),j("components","quickDel"),Z(t.target),Zt([[et(t.target),...zt(t.target)]]))}function en(t){t.classList.add("fshQuickDel"),X(t,nn)}function on(){const t=function(){const t=z("profileRightColumn"),n=F("inventory-table",t)
if(2===n.length)return n[1]}()
if(!t)return
const n=new Qt({target:t.parentNode})
n.$on("enableQuickDel",W(en,t)),n.$on("delType",W(tn,t)),n.$on("deleteAllVisible",W(Jt,t))}export{on as default}
//# sourceMappingURL=components-CPuIoUQQ.js.map
