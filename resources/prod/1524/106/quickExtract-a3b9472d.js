import{i as t}from"./instantiate-880b172e.js"
import{cF as e,aL as n,S as c,L as s,M as l,bf as o,bg as i,ba as r,bd as a,bh as u,af as m,cd as f,ce as p,N as d,a1 as $,O as g,P as h,R as b,T as x,W as k,cf as y,Z as v,b0 as j,_,n as S,ab as w,bq as z,Y as E,aj as M,bb as P,bc as q,c8 as L,a2 as F}from"./calfSystem-076d7a01.js"
import{h as I,u as T}from"./await_block-904981a0.js"
import{e as Y}from"./each-d53d627d.js"
import{d as B}from"./daUseItem-27f5a550.js"
import{i as C}from"./inventory-c0d6c5e3.js"
import{a as D}from"./all-414e0607.js"
import{L as N}from"./LinkButton-9974bf66.js"
import{L as O}from"./LinkButtonBracketed-430703c5.js"
import{S as R}from"./SelectInST-83de2371.js"
import{c as U}from"./confirm-5f63603f.js"
import{M as Z}from"./ModalTitled-fcaa63c3.js"
import{u as A}from"./uniq-925a8764.js"
import"./Modal-925b2b72.js"
function Q(t){return`${t.amount} x ${e[t.type]}`}const W=[[t=>t.components?.length,t=>`You successfully extracted 1 '${t.components?.[0].n}' component(s) from 1 resource(s).`],[t=>t.frags,t=>`You gained ${t.frags.map(Q).join(", ")} Fragments by opening the Fragment Stash.`],[t=>t.mailbox_items?.length,t=>`You received 1 x '${t.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
const H=(t,e,n)=>`fetchitem.php?item_id=${e}&inv_id=${n}&t=1&p=${t}`,G=t=>`background-image: url(${n}items/${t}.gif)`
function J(t,e,n){const c=t.slice()
return c[28]=e[n].count,c[29]=e[n].delPending,c[30]=e[n].item_name,c[31]=e[n].style,c[32]=e[n].tip,c[34]=n,c}function K(t,e,n){const c=t.slice()
return c[35]=e[n],c}function V(t){let e
return{c(){e=$("Refresh")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function X(t){let e,n=t[35]+""
return{c(){e=$(n)},m(t,n){b(t,e,n)},p(t,c){64&c[0]&&n!==(n=t[35]+"")&&F(e,n)},d(t){t&&v(e)}}}function tt(t){let e,n,c=t[35].slice(1)+""
return{c(){e=d("span"),n=$(c),h(e,"class","fshRed")},m(t,c){b(t,e,c),x(e,n)},p(t,e){64&e[0]&&c!==(c=t[35].slice(1)+"")&&F(n,c)},d(t){t&&v(e)}}}function et(t){let e,n,c
function s(t,e){return 64&e[0]&&(n=null),null==n&&(n=!!t[35].startsWith("<")),n?tt:X}let l=s(t,[-1,-1]),o=l(t)
return{c(){e=d("li"),o.c(),c=g(),h(e,"class","svelte-11rzj5c")},m(t,n){b(t,e,n),o.m(e,null),x(e,c)},p(t,n){l===(l=s(t,n))&&o?o.p(t,n):(o.d(1),o=l(t),o&&(o.c(),o.m(e,c)))},d(t){t&&v(e),o.d()}}}function nt(t){return{c:E,m:E,p:E,i:E,o:E,d:E}}function ct(t){let e,n,c=Y(t[5]),s=[]
for(let e=0;e<c.length;e+=1)s[e]=at(J(t,c,e))
const l=t=>a(s[t],1,1,(()=>{s[t]=null}))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=M()},m(t,c){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,c)
b(t,e,c),n=!0},p(t,n){if(4128&n[0]){let o
for(c=Y(t[5]),o=0;o<c.length;o+=1){const l=J(t,c,o)
s[o]?(s[o].p(l,n),r(s[o],1)):(s[o]=at(l),s[o].c(),r(s[o],1),s[o].m(e.parentNode,e))}for(P(),o=c.length;o<s.length;o+=1)l(o)
q()}},i(t){if(!n){for(let t=0;t<c.length;t+=1)r(s[t])
n=!0}},o(t){s=s.filter(Boolean)
for(let t=0;t<s.length;t+=1)a(s[t])
n=!1},d(t){t&&v(e),j(s,t)}}}function st(t){let e
return{c(){e=$("Done")},m(t,n){b(t,e,n)},p:E,i:E,o:E,d(t){t&&v(e)}}}function lt(t){let e,n,c,s
const l=[it,ot],o=[]
function i(t,e){return t[29]?0:1}return e=i(t),n=o[e]=l[e](t),{c(){n.c(),c=M()},m(t,n){o[e].m(t,n),b(t,c,n),s=!0},p(t,s){let u=e
e=i(t),e===u?o[e].p(t,s):(P(),a(o[u],1,1,(()=>{o[u]=null})),q(),n=o[e],n?n.p(t,s):(n=o[e]=l[e](t),n.c()),r(n,1),n.m(c.parentNode,c))},i(t){s||(r(n),s=!0)},o(t){a(n),s=!1},d(t){t&&v(c),o[e].d(t)}}}function ot(t){let e,n
return e=new N({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[16](t[34])})),{c(){o(e.$$.fragment)},m(t,c){i(e,t,c),n=!0},p(n,c){t=n
const s={}
32&c[0]|128&c[1]&&(s.$$scope={dirty:c,ctx:t}),e.$set(s)},i(t){n||(r(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}function it(t){let e
return{c(){e=d("span"),h(e,"class","fshSpinner fshSpinner12")},m(t,n){b(t,e,n)},p:E,i:E,o:E,d(t){t&&v(e)}}}function rt(t){let e,n,c=t[28]+""
return{c(){e=$("Extract "),n=$(c)},m(t,c){b(t,e,c),b(t,n,c)},p(t,e){32&e[0]&&c!==(c=t[28]+"")&&F(n,c)},d(t){t&&(v(e),v(n))}}}function at(t){let e,n,c,s,l,o,i,u,m,f,p,k,y,j,_=t[30]+""
const S=[lt,st],w=[]
function z(t,e){return t[28]?0:1}return c=z(t),s=w[c]=S[c](t),{c(){e=d("tr"),n=d("td"),s.c(),l=g(),o=d("td"),i=d("span"),f=g(),p=d("td"),k=$(_),y=g(),h(n,"class","svelte-11rzj5c"),L(n,"delPending",t[29]),h(i,"class","imgSpan tip-dynamic svelte-11rzj5c"),h(i,"data-tipped",u=t[32]),h(i,"style",m=t[31]),h(o,"class","imgCol svelte-11rzj5c")},m(t,s){b(t,e,s),x(e,n),w[c].m(n,null),x(e,l),x(e,o),x(o,i),x(e,f),x(e,p),x(p,k),x(e,y),j=!0},p(t,e){let l=c
c=z(t),c===l?w[c].p(t,e):(P(),a(w[l],1,1,(()=>{w[l]=null})),q(),s=w[c],s?s.p(t,e):(s=w[c]=S[c](t),s.c()),r(s,1),s.m(n,null)),(!j||32&e[0])&&L(n,"delPending",t[29]),(!j||32&e[0]&&u!==(u=t[32]))&&h(i,"data-tipped",u),(!j||32&e[0]&&m!==(m=t[31]))&&h(i,"style",m),(!j||32&e[0])&&_!==(_=t[30]+"")&&F(k,_)},i(t){j||(r(s),j=!0)},o(t){a(s),j=!1},d(t){t&&v(e),w[c].d()}}}function ut(t){return{c:E,m:E,p:E,i:E,o:E,d:E}}function mt(t){let e,n,c,s,l,m,S,w,z,E,M,P,q,L,F,B,C,D,N,U,Z,A,Q,W,H,G,J,X,tt,st,lt
function ot(e){t[13](e)}let it={}
void 0!==t[2]&&(it.inSt=t[2]),l=new R({props:it}),f.push((()=>p(l,"inSt",ot))),l.$on("toggle",t[8]),B=new O({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),B.$on("click",t[11])
let rt=Y(t[6]),at=[]
for(let e=0;e<rt.length;e+=1)at[e]=et(K(t,rt,e))
let mt={ctx:t,current:null,token:null,hasCatch:!1,pending:ut,then:ct,catch:nt,blocks:[,,,]}
return I(X=t[1],mt),{c(){e=d("div"),n=$("Select which type of plants you wish to extract all of. Only select extractable resources.\n    "),c=d("br"),s=g(),o(l.$$.fragment),S=$(" \n    "),w=d("label"),z=d("input"),E=$("\n      Main Folder Only"),M=$(" \n    "),P=d("label"),q=d("input"),L=$("\n      Disable Prompts"),F=$(" \n    "),o(B.$$.fragment),C=g(),D=d("br"),N=g(),U=d("table"),Z=d("thead"),Z.innerHTML='<tr><th class="actionCol svelte-11rzj5c">Actions</th> <th colspan="2">Items</th></tr>',A=g(),Q=d("tbody"),W=d("tr"),H=d("td"),G=d("ol")
for(let t=0;t<at.length;t+=1)at[t].c()
J=g(),mt.block.c(),h(z,"type","checkbox"),h(z,"class","svelte-11rzj5c"),h(q,"type","checkbox"),h(q,"class","svelte-11rzj5c"),h(H,"colspan","3"),h(U,"class","svelte-11rzj5c"),h(e,"class","svelte-11rzj5c")},m(o,r){b(o,e,r),x(e,n),x(e,c),x(e,s),i(l,e,null),x(e,S),x(e,w),x(w,z),z.checked=t[3],x(w,E),x(e,M),x(e,P),x(P,q),q.checked=t[4],x(P,L),x(e,F),i(B,e,null),x(e,C),x(e,D),x(e,N),x(e,U),x(U,Z),x(U,A),x(U,Q),x(Q,W),x(W,H),x(H,G)
for(let t=0;t<at.length;t+=1)at[t]&&at[t].m(G,null)
x(Q,J),mt.block.m(Q,mt.anchor=null),mt.mount=()=>Q,mt.anchor=null,tt=!0,st||(lt=[k(z,"change",t[14]),k(z,"change",t[9]),k(q,"change",t[15]),k(q,"change",t[10])],st=!0)},p(e,n){t=e
const c={}
!m&&4&n[0]&&(m=!0,c.inSt=t[2],y((()=>m=!1))),l.$set(c),8&n[0]&&(z.checked=t[3]),16&n[0]&&(q.checked=t[4])
const s={}
if(128&n[1]&&(s.$$scope={dirty:n,ctx:t}),B.$set(s),64&n[0]){let e
for(rt=Y(t[6]),e=0;e<rt.length;e+=1){const c=K(t,rt,e)
at[e]?at[e].p(c,n):(at[e]=et(c),at[e].c(),at[e].m(G,null))}for(;e<at.length;e+=1)at[e].d(1)
at.length=rt.length}mt.ctx=t,2&n[0]&&X!==(X=t[1])&&I(X,mt)||T(mt,t,n)},i(t){tt||(r(l.$$.fragment,t),r(B.$$.fragment,t),r(mt.block),tt=!0)},o(t){a(l.$$.fragment,t),a(B.$$.fragment,t)
for(let t=0;t<3;t+=1){const e=mt.blocks[t]
a(e)}tt=!1},d(t){t&&v(e),u(l),u(B),j(at,t),mt.block.d(),mt.token=null,mt=null,st=!1,_(lt)}}}function ft(t){let e
return{c(){e=$("Quick Extract")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function pt(t){let e,n
return e=new Z({props:{visible:t[0],$$slots:{title:[ft],default:[mt]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){o(e.$$.fragment)},m(t,c){i(e,t,c),n=!0},p(t,n){const c={}
1&n[0]&&(c.visible=t[0]),126&n[0]|128&n[1]&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){n||(r(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}const dt="selectMain",$t="disableQuickExtractPrompts"
function gt(t,e,n){let{visible:c=!0}=e,s=null,l=null,o=null,i=m(dt),r=m($t),a=null,u=null,f=[]
const p=t=>"Zombie Coffin"===t.item_name||12===t.type||16===t.type,d=(t,e)=>z(t.item_name,e.item_name),$=t=>o||!t.is_in_st,g=t=>!i||-1===t.folder_id
function h(){n(5,u=function(t,e){return A(e,"item_name").map((n=>({...n,count:e.filter((t=>t.item_name===n.item_name)).length,delPending:!1,extractIds:e.filter((t=>t.item_name===n.item_name)).map((t=>t.inv_id)),style:G(n.item_id),tip:H(t,n.item_id,n.inv_id)})))}(l,a.filter($).filter(g)))}async function b(){const t=await C()
l=t.player_id,a=t.items.filter(p).sort(d),h()}let x
async function k(t){const e=await B(t)
var c;(function(t){return t?.s||x===t?.e?.message||(x=t?.e?.message,n(6,f=[...f,t?.e?.message])),t?.s})(e)&&(n(6,f=[...f,(c=e.r,W.find((([t])=>t(c)))[1](c))]),a=a.filter((e=>e.inv_id!==t)))}async function y(t){S("quickExtract","extract",r);(!!r||await U("Are you sure you want to extract all similar items?"))&&(n(5,u[t].delPending=!0,u),await D(u[t].extractIds.map(k)),n(5,u[t].count=0,u))}return t.$$set=t=>{"visible"in t&&n(0,c=t.visible)},t.$$.update=()=>{1&t.$$.dirty[0]&&c&&(n(6,f=[]),n(1,s=b()))},[c,s,o,i,r,u,f,function(){S("quickExtract","close"),n(0,c=!1)},function(){S("quickExtract","toggleSelectST"),h()},function(){S("quickExtract","toggleSelectMain"),w(dt,i),h()},function(){S("quickExtract","togglePrompts"),w($t,r)},function(){S("quickExtract","refresh"),n(6,f=[]),n(1,s=b())},y,function(t){o=t,n(2,o)},function(){i=this.checked,n(3,i)},function(){r=this.checked,n(4,r)},t=>y(t)]}var ht=class extends c{constructor(t){super(),s(this,t,gt,pt,l,{visible:0},null,[-1,-1])}}
const bt={visible:!0}
let xt=0
function kt(){xt=t(bt,xt,ht)}export{kt as default}
//# sourceMappingURL=quickExtract-a3b9472d.js.map
