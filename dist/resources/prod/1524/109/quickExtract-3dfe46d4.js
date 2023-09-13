import{i as t}from"./instantiate-880b172e.js"
import{cF as e,aL as n,S as c,L as s,M as l,bf as o,bg as i,ba as r,bd as a,bh as u,af as m,cc as f,cd as p,N as d,a1 as $,O as g,P as h,R as b,T as x,W as k,ce as y,Z as v,b0 as j,_,n as S,ab as w,bq as z,a$ as E,a2 as M,Y as P,aj as q,bb as L,bc as T,c7 as I}from"./calfSystem-2f15e074.js"
import{h as Y,u as B}from"./await_block-d535654a.js"
import{e as C}from"./each-d93fc3a2.js"
import{d as F}from"./daUseItem-8fe78981.js"
import{i as D}from"./inventory-c074db9e.js"
import{a as N}from"./all-414e0607.js"
import{L as O}from"./LinkButton-5d5c853c.js"
import{L as R}from"./LinkButtonBracketed-0c040929.js"
import{S as Z}from"./SelectInST-e4b67956.js"
import{c as A}from"./confirm-a411f310.js"
import{M as Q}from"./ModalTitled-4705b2f9.js"
import{u as U}from"./uniq-9cddbf0f.js"
import"./Modal-d504dd2a.js"
function W(t){return`${t.amount} x ${e[t.type]}`}const H=[[t=>t.components?.length,t=>`You successfully extracted 1 '${t.components?.[0].n}' component(s) from 1 resource(s).`],[t=>t.frags,t=>`You gained ${t.frags.map(W).join(", ")} Fragments by opening the Fragment Stash.`],[t=>t.mailbox_items?.length,t=>`You received 1 x '${t.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
const G=(t,e,n)=>`fetchitem.php?item_id=${e}&inv_id=${n}&t=1&p=${t}`,J=t=>`background-image: url(${n}items/${t}.gif)`
function K(t,e,n){const c=t.slice()
return c[28]=e[n].count,c[29]=e[n].delPending,c[30]=e[n].item_name,c[31]=e[n].style,c[32]=e[n].tip,c[34]=n,c}function V(t,e,n){const c=t.slice()
return c[36]=e[n],c}function X(t){let e
return{c(){e=$("Refresh")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function tt(t){let e,n=t[36]+""
return{c(){e=$(n)},m(t,n){b(t,e,n)},p(t,c){64&c[0]&&n!==(n=t[36]+"")&&M(e,n)},d(t){t&&v(e)}}}function et(t){let e,n,c=t[36].slice(1)+""
return{c(){e=d("span"),n=$(c),h(e,"class","fshRed")},m(t,c){b(t,e,c),x(e,n)},p(t,e){64&e[0]&&c!==(c=t[36].slice(1)+"")&&M(n,c)},d(t){t&&v(e)}}}function nt(t){let e,n,c
function s(t,e){return 64&e[0]&&(n=null),null==n&&(n=!!t[36].startsWith("<")),n?et:tt}let l=s(t,[-1,-1]),o=l(t)
return{c(){e=d("li"),o.c(),c=g(),h(e,"class","svelte-11rzj5c")},m(t,n){b(t,e,n),o.m(e,null),x(e,c)},p(t,n){l===(l=s(t,n))&&o?o.p(t,n):(o.d(1),o=l(t),o&&(o.c(),o.m(e,c)))},d(t){t&&v(e),o.d()}}}function ct(t){let e,n,c=t[35].message+""
return{c(){e=d("p"),n=$(c),E(e,"color","red")},m(t,c){b(t,e,c),x(e,n)},p(t,e){2&e[0]&&c!==(c=t[35].message+"")&&M(n,c)},i:P,o:P,d(t){t&&v(e)}}}function st(t){let e,n,c=C(t[5]),s=[]
for(let e=0;e<c.length;e+=1)s[e]=ut(K(t,c,e))
const l=t=>a(s[t],1,1,(()=>{s[t]=null}))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=q()},m(t,c){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,c)
b(t,e,c),n=!0},p(t,n){if(4128&n[0]){let o
for(c=C(t[5]),o=0;o<c.length;o+=1){const l=K(t,c,o)
s[o]?(s[o].p(l,n),r(s[o],1)):(s[o]=ut(l),s[o].c(),r(s[o],1),s[o].m(e.parentNode,e))}for(L(),o=c.length;o<s.length;o+=1)l(o)
T()}},i(t){if(!n){for(let t=0;t<c.length;t+=1)r(s[t])
n=!0}},o(t){s=s.filter(Boolean)
for(let t=0;t<s.length;t+=1)a(s[t])
n=!1},d(t){t&&v(e),j(s,t)}}}function lt(t){let e
return{c(){e=$("Done")},m(t,n){b(t,e,n)},p:P,i:P,o:P,d(t){t&&v(e)}}}function ot(t){let e,n,c,s
const l=[rt,it],o=[]
function i(t,e){return t[29]?0:1}return e=i(t),n=o[e]=l[e](t),{c(){n.c(),c=q()},m(t,n){o[e].m(t,n),b(t,c,n),s=!0},p(t,s){let u=e
e=i(t),e===u?o[e].p(t,s):(L(),a(o[u],1,1,(()=>{o[u]=null})),T(),n=o[e],n?n.p(t,s):(n=o[e]=l[e](t),n.c()),r(n,1),n.m(c.parentNode,c))},i(t){s||(r(n),s=!0)},o(t){a(n),s=!1},d(t){t&&v(c),o[e].d(t)}}}function it(t){let e,n
return e=new O({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[16](t[34])})),{c(){o(e.$$.fragment)},m(t,c){i(e,t,c),n=!0},p(n,c){t=n
const s={}
32&c[0]|256&c[1]&&(s.$$scope={dirty:c,ctx:t}),e.$set(s)},i(t){n||(r(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}function rt(t){let e
return{c(){e=d("span"),h(e,"class","fshSpinner fshSpinner12")},m(t,n){b(t,e,n)},p:P,i:P,o:P,d(t){t&&v(e)}}}function at(t){let e,n,c=t[28]+""
return{c(){e=$("Extract "),n=$(c)},m(t,c){b(t,e,c),b(t,n,c)},p(t,e){32&e[0]&&c!==(c=t[28]+"")&&M(n,c)},d(t){t&&(v(e),v(n))}}}function ut(t){let e,n,c,s,l,o,i,u,m,f,p,k,y,j,_=t[30]+""
const S=[ot,lt],w=[]
function z(t,e){return t[28]?0:1}return c=z(t),s=w[c]=S[c](t),{c(){e=d("tr"),n=d("td"),s.c(),l=g(),o=d("td"),i=d("span"),f=g(),p=d("td"),k=$(_),y=g(),h(n,"class","svelte-11rzj5c"),I(n,"delPending",t[29]),h(i,"class","imgSpan tip-dynamic svelte-11rzj5c"),h(i,"data-tipped",u=t[32]),h(i,"style",m=t[31]),h(o,"class","imgCol svelte-11rzj5c")},m(t,s){b(t,e,s),x(e,n),w[c].m(n,null),x(e,l),x(e,o),x(o,i),x(e,f),x(e,p),x(p,k),x(e,y),j=!0},p(t,e){let l=c
c=z(t),c===l?w[c].p(t,e):(L(),a(w[l],1,1,(()=>{w[l]=null})),T(),s=w[c],s?s.p(t,e):(s=w[c]=S[c](t),s.c()),r(s,1),s.m(n,null)),(!j||32&e[0])&&I(n,"delPending",t[29]),(!j||32&e[0]&&u!==(u=t[32]))&&h(i,"data-tipped",u),(!j||32&e[0]&&m!==(m=t[31]))&&h(i,"style",m),(!j||32&e[0])&&_!==(_=t[30]+"")&&M(k,_)},i(t){j||(r(s),j=!0)},o(t){a(s),j=!1},d(t){t&&v(e),w[c].d()}}}function mt(t){return{c:P,m:P,p:P,i:P,o:P,d:P}}function ft(t){let e,n,c,s,l,m,S,w,z,E,M,P,q,L,T,I,F,D,N,O,A,Q,U,W,H,G,J,K,tt,et,lt
function ot(e){t[13](e)}let it={}
void 0!==t[2]&&(it.inSt=t[2]),l=new Z({props:it}),f.push((()=>p(l,"inSt",ot))),l.$on("toggle",t[8]),I=new R({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),I.$on("click",t[11])
let rt=C(t[6]),at=[]
for(let e=0;e<rt.length;e+=1)at[e]=nt(V(t,rt,e))
let ut={ctx:t,current:null,token:null,hasCatch:!0,pending:mt,then:st,catch:ct,error:35,blocks:[,,,]}
return Y(K=t[1],ut),{c(){e=d("div"),n=$("Select which type of plants you wish to extract all of. Only select extractable resources.\n    "),c=d("br"),s=g(),o(l.$$.fragment),S=$(" \n    "),w=d("label"),z=d("input"),E=$("\n      Main Folder Only"),M=$(" \n    "),P=d("label"),q=d("input"),L=$("\n      Disable Prompts"),T=$(" \n    "),o(I.$$.fragment),F=g(),D=d("br"),N=g(),O=d("table"),A=d("thead"),A.innerHTML='<tr><th class="actionCol svelte-11rzj5c">Actions</th> <th colspan="2">Items</th></tr>',Q=g(),U=d("tbody"),W=d("tr"),H=d("td"),G=d("ol")
for(let t=0;t<at.length;t+=1)at[t].c()
J=g(),ut.block.c(),h(z,"type","checkbox"),h(z,"class","svelte-11rzj5c"),h(q,"type","checkbox"),h(q,"class","svelte-11rzj5c"),h(H,"colspan","3"),h(O,"class","svelte-11rzj5c"),h(e,"class","svelte-11rzj5c")},m(o,r){b(o,e,r),x(e,n),x(e,c),x(e,s),i(l,e,null),x(e,S),x(e,w),x(w,z),z.checked=t[3],x(w,E),x(e,M),x(e,P),x(P,q),q.checked=t[4],x(P,L),x(e,T),i(I,e,null),x(e,F),x(e,D),x(e,N),x(e,O),x(O,A),x(O,Q),x(O,U),x(U,W),x(W,H),x(H,G)
for(let t=0;t<at.length;t+=1)at[t]&&at[t].m(G,null)
x(U,J),ut.block.m(U,ut.anchor=null),ut.mount=()=>U,ut.anchor=null,tt=!0,et||(lt=[k(z,"change",t[14]),k(z,"change",t[9]),k(q,"change",t[15]),k(q,"change",t[10])],et=!0)},p(e,n){t=e
const c={}
!m&&4&n[0]&&(m=!0,c.inSt=t[2],y((()=>m=!1))),l.$set(c),8&n[0]&&(z.checked=t[3]),16&n[0]&&(q.checked=t[4])
const s={}
if(256&n[1]&&(s.$$scope={dirty:n,ctx:t}),I.$set(s),64&n[0]){let e
for(rt=C(t[6]),e=0;e<rt.length;e+=1){const c=V(t,rt,e)
at[e]?at[e].p(c,n):(at[e]=nt(c),at[e].c(),at[e].m(G,null))}for(;e<at.length;e+=1)at[e].d(1)
at.length=rt.length}ut.ctx=t,2&n[0]&&K!==(K=t[1])&&Y(K,ut)||B(ut,t,n)},i(t){tt||(r(l.$$.fragment,t),r(I.$$.fragment,t),r(ut.block),tt=!0)},o(t){a(l.$$.fragment,t),a(I.$$.fragment,t)
for(let t=0;t<3;t+=1){const e=ut.blocks[t]
a(e)}tt=!1},d(t){t&&v(e),u(l),u(I),j(at,t),ut.block.d(),ut.token=null,ut=null,et=!1,_(lt)}}}function pt(t){let e
return{c(){e=$("Quick Extract")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function dt(t){let e,n
return e=new Q({props:{visible:t[0],$$slots:{title:[pt],default:[ft]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){o(e.$$.fragment)},m(t,c){i(e,t,c),n=!0},p(t,n){const c={}
1&n[0]&&(c.visible=t[0]),126&n[0]|256&n[1]&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){n||(r(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}const $t="selectMain",gt="disableQuickExtractPrompts"
function ht(t,e,n){let{visible:c=!0}=e,s=null,l=null,o=null,i=m($t),r=m(gt),a=null,u=null,f=[]
const p=t=>"Zombie Coffin"===t.item_name||12===t.type||16===t.type,d=(t,e)=>z(t.item_name,e.item_name),$=t=>o||!t.is_in_st,g=t=>!i||-1===t.folder_id
function h(){n(5,u=function(t,e){return U(e,"item_name").map((n=>({...n,count:e.filter((t=>t.item_name===n.item_name)).length,delPending:!1,extractIds:e.filter((t=>t.item_name===n.item_name)).map((t=>t.inv_id)),style:J(n.item_id),tip:G(t,n.item_id,n.inv_id)})))}(l,a.filter($).filter(g)))}async function b(){const t=await D()
l=t.player_id,a=t.items.filter(p).sort(d),h()}let x
async function k(t){const e=await F(t)
var c;(function(t){return t?.s||x===t?.e?.message||(x=t?.e?.message,n(6,f=[...f,t?.e?.message])),t?.s})(e)&&(n(6,f=[...f,(c=e.r,H.find((([t])=>t(c)))[1](c))]),a=a.filter((e=>e.inv_id!==t)))}async function y(t){S("quickExtract","extract",r);(!!r||await A("Are you sure you want to extract all similar items?"))&&(n(5,u[t].delPending=!0,u),await N(u[t].extractIds.map(k)),n(5,u[t].count=0,u))}return t.$$set=t=>{"visible"in t&&n(0,c=t.visible)},t.$$.update=()=>{1&t.$$.dirty[0]&&c&&(n(6,f=[]),n(1,s=b()))},[c,s,o,i,r,u,f,function(){S("quickExtract","close"),n(0,c=!1)},function(){S("quickExtract","toggleSelectST"),h()},function(){S("quickExtract","toggleSelectMain"),w($t,i),h()},function(){S("quickExtract","togglePrompts"),w(gt,r)},function(){S("quickExtract","refresh"),n(6,f=[]),n(1,s=b())},y,function(t){o=t,n(2,o)},function(){i=this.checked,n(3,i)},function(){r=this.checked,n(4,r)},t=>y(t)]}var bt=class extends c{constructor(t){super(),s(this,t,ht,dt,l,{visible:0},null,[-1,-1])}}
const xt={visible:!0}
let kt=0
function yt(){kt=t(xt,kt,bt)}export{yt as default}
//# sourceMappingURL=quickExtract-3dfe46d4.js.map
