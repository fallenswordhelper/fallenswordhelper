import{i as t}from"./instantiate-880b172e.js"
import{S as e,L as n,M as i,bf as s,bg as a,ba as o,bd as l,bh as r,aj as c,R as m,Z as d,a1 as p,N as u,a$ as f,n as h,bq as g,Y as v,bb as b,bc as $,d as k,E as y,j as w,an as x,O as C,P as _,T as j,aL as M,d5 as N,W as S,a2 as q,b0 as L,_ as E,f as H,ao as P,aW as R}from"./calfSystem-2fff342b.js"
import{h as U,u as B}from"./await_block-9becd053.js"
import{e as T,u as F,d as W}from"./each-923e83ac.js"
import{d as Z}from"./daComponents-365b9851.js"
import{i as z}from"./inventory-0f7de34f.js"
import{a as A}from"./all-414e0607.js"
import{L as D}from"./LinkButton-484036ce.js"
import{L as I}from"./LinkButtonBracketed-30748105.js"
import{u as O}from"./uniq-8c81946e.js"
import{M as Y}from"./ModalTitled-b13ac28b.js"
import{g as G,s as J}from"./idb-0ebea50c.js"
import"./Modal-b1840658.js"
function K(t,e,n){const i=t.slice()
return i[43]=e[n][0],i[44]=e[n][1],i[45]=e[n][2],i[46]=e[n][3],i[47]=e[n][4],i[48]=e[n][5][0],i[49]=e[n][5][1],i[42]=n,i}function Q(t,e,n){const i=t.slice()
return i[51]=e[n][0],i[52]=e[n][1],i[53]=e[n][2],i}function V(t,e,n){const i=t.slice()
return i[51]=e[n][0],i[52]=e[n][1],i[53]=e[n][2],i}function X(t,e,n){const i=t.slice()
return i[40]=e[n],i[42]=n,i}function tt(t){return{c:v,m:v,p:v,i:v,o:v,d:v}}function et(t){let e,n,i,s
const a=[it,nt],r=[]
function p(t,e){return t[3].length?0:t[4]?1:-1}return~(e=p(t))&&(n=r[e]=a[e](t)),{c(){n&&n.c(),i=c()},m(t,n){~e&&r[e].m(t,n),m(t,i,n),s=!0},p(t,s){let c=e
e=p(t),e===c?~e&&r[e].p(t,s):(n&&(b(),l(r[c],1,1,(()=>{r[c]=null})),$()),~e?(n=r[e],n?n.p(t,s):(n=r[e]=a[e](t),n.c()),o(n,1),n.m(i.parentNode,i)):n=null)},i(t){s||(o(n),s=!0)},o(t){l(n),s=!1},d(t){t&&d(i),~e&&r[e].d(t)}}}function nt(t){let e,n,i,c,p,h,g,v,b,$,k,y,w,x,M=[],N=new Map
p=new D({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),p.$on("click",t[6])
let S=T(t[4])
const q=t=>t[42]
for(let e=0;e<S.length;e+=1){let n=K(t,S,e),i=q(n)
N.set(i,M[e]=lt(i,n))}return{c(){e=u("div"),n=u("div"),n.textContent="Recipe",i=C(),c=u("div"),h=u("div"),s(p.$$.fragment),g=C(),v=u("div"),v.textContent="Items",b=C(),$=u("div"),$.textContent="Components",k=C(),y=u("div"),y.textContent="Target",w=C()
for(let t=0;t<M.length;t+=1)M[t].c()
_(n,"class","innerColumnHeader item-container svelte-11h9b8h"),f(h,"display","contents"),f(h,"--button-color","#383838"),_(c,"class","innerColumnHeader item-container svelte-11h9b8h"),_(v,"class","innerColumnHeader item-container svelte-11h9b8h"),_($,"class","innerColumnHeader item-container svelte-11h9b8h"),_(y,"class","innerColumnHeader item-container svelte-11h9b8h"),_(e,"class","recipes ui-widget-content svelte-11h9b8h")},m(t,s){m(t,e,s),j(e,n),j(e,i),j(e,c),j(c,h),a(p,h,null),j(e,g),j(e,v),j(e,b),j(e,$),j(e,k),j(e,y),j(e,w)
for(let t=0;t<M.length;t+=1)M[t]&&M[t].m(e,null)
x=!0},p(t,n){const i={}
134217728&n[1]&&(i.$$scope={dirty:n,ctx:t}),p.$set(i),278&n[0]&&(S=T(t[4]),M=F(M,n,q,1,t,S,N,e,W,lt,null,K))},i(t){x||(o(p.$$.fragment,t),x=!0)},o(t){l(p.$$.fragment,t),x=!1},d(t){t&&d(e),r(p)
for(let t=0;t<M.length;t+=1)M[t].d()}}}function it(t){let e,n=[],i=new Map,s=T(t[3])
const a=t=>t[42]
for(let e=0;e<s.length;e+=1){let o=X(t,s,e),l=a(o)
i.set(l,n[e]=rt(l,o))}return{c(){e=u("div")
for(let t=0;t<n.length;t+=1)n[t].c()
_(e,"class","progress-log svelte-11h9b8h")},m(t,i){m(t,e,i)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(t,o){8&o[0]&&(s=T(t[3]),n=F(n,o,a,1,t,s,i,e,W,rt,null,X))},i:v,o:v,d(t){t&&d(e)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function st(t){let e
return{c(){e=p("Name")},m(t,n){m(t,e,n)},d(t){t&&d(e)}}}function at(t){let e,n,i,s,a,o,l,r,c,h=`url('${M}items/${t[51]}.gif')`,g=(t[2][t[51]]??0)+"",v=t[53]+""
return{c(){e=u("div"),n=u("div"),s=C(),a=u("div"),o=p(g),l=p("/"),r=p(v),c=C(),_(n,"data-tipped",i="fetchitem.php?item_id="+t[51]+"&t=2&vcode="+t[52]),_(n,"class","small-image tip-dynamic svelte-11h9b8h"),f(n,"background-image",h)},m(t,i){m(t,e,i),j(e,n),j(e,s),j(e,a),j(a,o),j(a,l),j(a,r),j(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[51]+"&t=2&vcode="+t[52])&&_(n,"data-tipped",i),16&e[0]&&h!==(h=`url('${M}items/${t[51]}.gif')`)&&f(n,"background-image",h),20&e[0]&&g!==(g=(t[2][t[51]]??0)+"")&&q(o,g),16&e[0]&&v!==(v=t[53]+"")&&q(r,v)},d(t){t&&d(e)}}}function ot(t){let e,n,i,s,a,o,l,r,c,h=`url('${M}items/${t[51]}.gif')`,g=(t[1][t[51]]??0)+"",v=t[53]+""
return{c(){e=u("div"),n=u("div"),s=C(),a=u("div"),o=p(g),l=p("/"),r=p(v),c=C(),_(n,"data-tipped",i="fetchitem.php?item_id="+t[51]+"&t=2&vcode="+t[52]),_(n,"class","small-image tip-dynamic svelte-11h9b8h"),f(n,"background-image",h)},m(t,i){m(t,e,i),j(e,n),j(e,s),j(e,a),j(a,o),j(a,l),j(a,r),j(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[51]+"&t=2&vcode="+t[52])&&_(n,"data-tipped",i),16&e[0]&&h!==(h=`url('${M}items/${t[51]}.gif')`)&&f(n,"background-image",h),18&e[0]&&g!==(g=(t[1][t[51]]??0)+"")&&q(o,g),16&e[0]&&v!==(v=t[53]+"")&&q(r,v)},d(t){t&&d(e)}}}function lt(t,e){let n,i,s,a,o,l,r,c,h,g,v,b,$,k,y,w,x,H,P,R,U=`url('${M}recipes/${e[45]}')`,B=e[44]+"",F=`url('${M}items/${e[48]}.gif')`,W=T(e[46]),Z=[]
for(let t=0;t<W.length;t+=1)Z[t]=at(V(e,W,t))
let z=T(e[47]),A=[]
for(let t=0;t<z.length;t+=1)A[t]=ot(Q(e,z,t))
return{key:t,first:null,c(){n=u("div"),i=u("a"),s=u("div"),o=C(),l=u("div"),r=u("a"),c=p(B),g=C(),v=u("div")
for(let t=0;t<Z.length;t+=1)Z[t].c()
b=C(),$=u("div")
for(let t=0;t<A.length;t+=1)A[t].c()
k=C(),y=u("div"),w=u("div"),H=C(),_(s,"class","image svelte-11h9b8h"),f(s,"background-image",U),_(i,"href",a=""+(N+e[43])),_(i,"class","svelte-11h9b8h"),_(n,"class","item-container svelte-11h9b8h"),_(r,"href",h=""+(N+e[43])),_(r,"class","svelte-11h9b8h"),_(l,"class","item-container svelte-11h9b8h"),_(v,"class","item-container svelte-11h9b8h"),_($,"class","item-container svelte-11h9b8h"),_(w,"data-tipped",x="fetchitem.php?item_id="+e[48]+"&t=2&vcode="+e[49]),_(w,"class","image tip-dynamic svelte-11h9b8h"),f(w,"background-image",F),_(y,"class","item-container svelte-11h9b8h"),this.first=n},m(t,a){m(t,n,a),j(n,i),j(i,s),m(t,o,a),m(t,l,a),j(l,r),j(r,c),m(t,g,a),m(t,v,a)
for(let t=0;t<Z.length;t+=1)Z[t]&&Z[t].m(v,null)
m(t,b,a),m(t,$,a)
for(let t=0;t<A.length;t+=1)A[t]&&A[t].m($,null)
m(t,k,a),m(t,y,a),j(y,w),j(y,H),P||(R=[S(i,"click",e[8]),S(r,"click",e[8])],P=!0)},p(t,n){if(e=t,16&n[0]&&U!==(U=`url('${M}recipes/${e[45]}')`)&&f(s,"background-image",U),16&n[0]&&a!==(a=""+(N+e[43]))&&_(i,"href",a),16&n[0]&&B!==(B=e[44]+"")&&q(c,B),16&n[0]&&h!==(h=""+(N+e[43]))&&_(r,"href",h),20&n[0]){let t
for(W=T(e[46]),t=0;t<W.length;t+=1){const i=V(e,W,t)
Z[t]?Z[t].p(i,n):(Z[t]=at(i),Z[t].c(),Z[t].m(v,null))}for(;t<Z.length;t+=1)Z[t].d(1)
Z.length=W.length}if(18&n[0]){let t
for(z=T(e[47]),t=0;t<z.length;t+=1){const i=Q(e,z,t)
A[t]?A[t].p(i,n):(A[t]=ot(i),A[t].c(),A[t].m($,null))}for(;t<A.length;t+=1)A[t].d(1)
A.length=z.length}16&n[0]&&x!==(x="fetchitem.php?item_id="+e[48]+"&t=2&vcode="+e[49])&&_(w,"data-tipped",x),16&n[0]&&F!==(F=`url('${M}items/${e[48]}.gif')`)&&f(w,"background-image",F)},d(t){t&&(d(n),d(o),d(l),d(g),d(v),d(b),d($),d(k),d(y)),L(Z,t),L(A,t),P=!1,E(R)}}}function rt(t,e){let n,i,s,a=e[40]+""
return{key:t,first:null,c(){n=p(a),i=C(),s=u("br"),this.first=n},m(t,e){m(t,n,e),m(t,i,e),m(t,s,e)},p(t,i){e=t,8&i[0]&&a!==(a=e[40]+"")&&q(n,a)},d(t){t&&(d(n),d(i),d(s))}}}function ct(t){return{c:v,m:v,p:v,i:v,o:v,d:v}}function mt(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!1,pending:ct,then:et,catch:tt,blocks:[,,,]}
return U(t[7](),i),{c(){e=c(),i.block.c()},m(t,s){m(t,e,s),i.block.m(t,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(e,n){B(i,t=e,n)},i(t){n||(o(i.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t]
l(e)}n=!1},d(t){t&&d(e),i.block.d(t),i.token=null,i=null}}}function dt(t){let e
return{c(){e=p("Refresh")},m(t,n){m(t,e,n)},d(t){t&&d(e)}}}function pt(t){let e,n,i,c
return n=new I({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=p("Recipe Manager\n    "),i=u("div"),s(n.$$.fragment),f(i,"display","contents"),f(i,"--button-color","#494437"),f(i,"--button-size","10px")},m(t,s){m(t,e,s),m(t,i,s),a(n,i,null),c=!0},p(t,e){const i={}
134217728&e[1]&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){c||(o(n.$$.fragment,t),c=!0)},o(t){l(n.$$.fragment,t),c=!1},d(t){t&&d(e),t&&n&&d(i),r(n,t)}}}function ut(t){let e,n
return e=new Y({props:{visible:t[0],$$slots:{title:[pt],default:[mt]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){s(e.$$.fragment)},m(t,i){a(e,t,i),n=!0},p(t,n){const i={}
1&n[0]&&(i.visible=t[0]),30&n[0]|134217728&n[1]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}function ft(t,e,n){let{visible:i=!0}=e,s={},a={},o=[],l=[],r=1
function c(t){h("Recipe Manager",t)}const m=t=>P(t).includes("quest"),d=([,t])=>m(t),p=([,t])=>!m(t),u=t=>t.filter(d).map((([,t])=>`Skipping folder "${t}" as it has the word "quest" in folder name.`)),f=t=>t.map((([,t])=>`Found blueprint "${t}".`)),v=(t=-1,e=0)=>k({cmd:"inventing",folder_id:t,page:e}),b=([t,e])=>e.map((e=>[t,e])),$=([t,e])=>v(t,e),C=([t,e])=>[t.previousElementSibling.children[0].href,e],_=([t,e])=>[t,R(e?.querySelector('#pCC select[name="page"]').options).slice(1).map((t=>t.value))],j=([,t])=>t.length,M=t=>R(t?.querySelectorAll('#pCC a[href*="&recipe_id="]')),N=t=>[t.href.split("=").at(-1),x(t),t.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],S=(t,e)=>w(`#pCC td[background*="${e}"]`,t).map((t=>[t.children[0].children[0].dataset.tipped.split(/[?&=]/),t.parentNode.nextElementSibling])).map((([t,e])=>[t[2],t[10],...e?[Number(x(e).split("/")[1])]:[]])),q=([,t],[,e])=>r*g(t,e)
function L(t){n(3,o=t.concat(o))}async function E([t,e,n]){const i=await k({cmd:"inventing",subcmd:"viewrecipe",recipe_id:t})
return L([`Parsing blueprint ${e}...`]),i?[t,e,n,S(i,"/inventory/2x3."),S(i,"/inventory/1x1mini."),...S(i,"/hellforge/2x3.")]:[t,e,n]}const U=t=>{return H(O(t).map((e=t,t=>[t,e.filter((e=>e===t)).length])))
var e}
async function B(){L(["Updating inventory."])
const t=await z()
if(y(t.items)){const e=t.items.map((({item_id:t})=>t))
n(2,a=U(e))}else L("No inventory.")}async function T(){L(["Updating components."])
const t=await Z()
if(y(t.r)){const e=t.r.map((({b:t})=>t))
n(1,s=U(e))}else L("No components.")}async function F(){await A([B(),T()]),n(3,o=[])}async function W([t,e]){const n=t.split("=").at(-1),i=await v(n)
return L([`Parsing folder "${e}"...`]),[n,i]}function D(t){const e=t.flatMap(M).map(N)
L(f(e)),async function(t){n(4,l=await A(t.map(E))),J("fsh_recipeMgr",l),F()}(e)}function I(t){L(['Parsing folder "Unassigned"...'])
const e=w('div[id^="folder_name_"]',t).map((t=>[t,x(t)]))
L(u(e))
!async function(t){const e=await A(t),n=e.map(_).filter(j).flatMap(b).map($),i=await A(n)
D(e.map((([,t])=>t)).concat(i))}([["-1",t],...e.filter(p).map(C).map(W)])}async function Y(){n(3,o=["Parsing inventing screen ..."])
const t=await v()
t?I(t):L(["Server Error."])}return t.$$set=t=>{"visible"in t&&n(0,i=t.visible)},[i,s,a,o,l,function(){c("close"),n(0,i=!1)},function(){c("sort by name"),n(4,l=l.slice().sort(q)),r*=-1},async function(){const t=await G("fsh_recipeMgr")
t||Y(),n(4,l=t),F()},function(){c("Navigate to recipe")},function(){c("refresh button"),Y()}]}var ht=class extends e{constructor(t){super(),n(this,t,ft,ut,i,{visible:0},null,[-1,-1])}}
const gt={visible:!0}
let vt=0
function bt(){vt=t(gt,vt,ht)}export{bt as default}
//# sourceMappingURL=recipeMgr-a438c38c.js.map
