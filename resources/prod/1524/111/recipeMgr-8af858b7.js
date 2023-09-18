import{i as t}from"./instantiate-880b172e.js"
import{S as e,K as n,L as i,bb as s,bc as a,b6 as o,b9 as r,bd as l,ai as c,Q as m,Y as d,a0 as p,M as u,aZ as f,n as h,bm as g,X as v,b7 as b,b8 as $,d as k,j as y,am as C,N as w,O as x,R as j,aJ as _,d4 as M,V as N,a1 as S,a_ as L,Z as q,f as H,an as R,aU as E}from"./calfSystem-abb16b0d.js"
import{h as P,u as U}from"./await_block-78969f55.js"
import{e as B,u as I,d as T}from"./each-13c4feae.js"
import{d as A}from"./daComponents-ac9a0793.js"
import{d as F}from"./daLoadInventory-c2278c3f.js"
import{f as K}from"./flattenItems-03659160.js"
import{a as Y}from"./all-414e0607.js"
import{i as Z}from"./isArray-09a53da7.js"
import{L as z}from"./LinkButton-e3c794a4.js"
import{L as D}from"./LinkButtonBracketed-4d890186.js"
import{u as J}from"./uniq-d915251c.js"
import{M as O}from"./ModalTitled-3d3c0c48.js"
import{g as Q,s as V}from"./idb-e719862a.js"
import"./Modal-f3893d54.js"
function X(t,e,n){const i=t.slice()
return i[43]=e[n][0],i[44]=e[n][1],i[45]=e[n][2],i[46]=e[n][3],i[47]=e[n][4],i[48]=e[n][5][0],i[49]=e[n][5][1],i[42]=n,i}function G(t,e,n){const i=t.slice()
return i[51]=e[n][0],i[52]=e[n][1],i[53]=e[n][2],i}function W(t,e,n){const i=t.slice()
return i[51]=e[n][0],i[52]=e[n][1],i[53]=e[n][2],i}function tt(t,e,n){const i=t.slice()
return i[40]=e[n],i[42]=n,i}function et(t){let e
return{c(){e=u("p"),e.textContent=`${t[58].message}`,f(e,"color","red")},m(t,n){m(t,e,n)},p:v,i:v,o:v,d(t){t&&d(e)}}}function nt(t){let e,n,i,s
const a=[st,it],l=[]
function p(t,e){return t[3].length?0:t[4]?1:-1}return~(e=p(t))&&(n=l[e]=a[e](t)),{c(){n&&n.c(),i=c()},m(t,n){~e&&l[e].m(t,n),m(t,i,n),s=!0},p(t,s){let c=e
e=p(t),e===c?~e&&l[e].p(t,s):(n&&(b(),r(l[c],1,1,(()=>{l[c]=null})),$()),~e?(n=l[e],n?n.p(t,s):(n=l[e]=a[e](t),n.c()),o(n,1),n.m(i.parentNode,i)):n=null)},i(t){s||(o(n),s=!0)},o(t){r(n),s=!1},d(t){t&&d(i),~e&&l[e].d(t)}}}function it(t){let e,n,i,c,p,h,g,v,b,$,k,y,C,_,M=[],N=new Map
p=new z({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),p.$on("click",t[6])
let S=B(t[4])
const L=t=>t[42]
for(let e=0;e<S.length;e+=1){let n=X(t,S,e),i=L(n)
N.set(i,M[e]=lt(i,n))}return{c(){e=u("div"),n=u("div"),n.textContent="Recipe",i=w(),c=u("div"),h=u("div"),s(p.$$.fragment),g=w(),v=u("div"),v.textContent="Items",b=w(),$=u("div"),$.textContent="Components",k=w(),y=u("div"),y.textContent="Target",C=w()
for(let t=0;t<M.length;t+=1)M[t].c()
x(n,"class","innerColumnHeader item-container svelte-11h9b8h"),f(h,"display","contents"),f(h,"--button-color","#383838"),x(c,"class","innerColumnHeader item-container svelte-11h9b8h"),x(v,"class","innerColumnHeader item-container svelte-11h9b8h"),x($,"class","innerColumnHeader item-container svelte-11h9b8h"),x(y,"class","innerColumnHeader item-container svelte-11h9b8h"),x(e,"class","recipes ui-widget-content svelte-11h9b8h")},m(t,s){m(t,e,s),j(e,n),j(e,i),j(e,c),j(c,h),a(p,h,null),j(e,g),j(e,v),j(e,b),j(e,$),j(e,k),j(e,y),j(e,C)
for(let t=0;t<M.length;t+=1)M[t]&&M[t].m(e,null)
_=!0},p(t,n){const i={}
268435456&n[1]&&(i.$$scope={dirty:n,ctx:t}),p.$set(i),278&n[0]&&(S=B(t[4]),M=I(M,n,L,1,t,S,N,e,T,lt,null,X))},i(t){_||(o(p.$$.fragment,t),_=!0)},o(t){r(p.$$.fragment,t),_=!1},d(t){t&&d(e),l(p)
for(let t=0;t<M.length;t+=1)M[t].d()}}}function st(t){let e,n=[],i=new Map,s=B(t[3])
const a=t=>t[42]
for(let e=0;e<s.length;e+=1){let o=tt(t,s,e),r=a(o)
i.set(r,n[e]=ct(r,o))}return{c(){e=u("div")
for(let t=0;t<n.length;t+=1)n[t].c()
x(e,"class","progress-log svelte-11h9b8h")},m(t,i){m(t,e,i)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(t,o){8&o[0]&&(s=B(t[3]),n=I(n,o,a,1,t,s,i,e,T,ct,null,tt))},i:v,o:v,d(t){t&&d(e)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function at(t){let e
return{c(){e=p("Name")},m(t,n){m(t,e,n)},d(t){t&&d(e)}}}function ot(t){let e,n,i,s,a,o,r,l,c,h=`url('${_}items/${t[51]}.gif')`,g=(t[2][t[51]]??0)+"",v=t[53]+""
return{c(){e=u("div"),n=u("div"),s=w(),a=u("div"),o=p(g),r=p("/"),l=p(v),c=w(),x(n,"data-tipped",i="fetchitem.php?item_id="+t[51]+"&t=2&vcode="+t[52]),x(n,"class","small-image tip-dynamic svelte-11h9b8h"),f(n,"background-image",h)},m(t,i){m(t,e,i),j(e,n),j(e,s),j(e,a),j(a,o),j(a,r),j(a,l),j(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[51]+"&t=2&vcode="+t[52])&&x(n,"data-tipped",i),16&e[0]&&h!==(h=`url('${_}items/${t[51]}.gif')`)&&f(n,"background-image",h),20&e[0]&&g!==(g=(t[2][t[51]]??0)+"")&&S(o,g),16&e[0]&&v!==(v=t[53]+"")&&S(l,v)},d(t){t&&d(e)}}}function rt(t){let e,n,i,s,a,o,r,l,c,h=`url('${_}items/${t[51]}.gif')`,g=(t[1][t[51]]??0)+"",v=t[53]+""
return{c(){e=u("div"),n=u("div"),s=w(),a=u("div"),o=p(g),r=p("/"),l=p(v),c=w(),x(n,"data-tipped",i="fetchitem.php?item_id="+t[51]+"&t=2&vcode="+t[52]),x(n,"class","small-image tip-dynamic svelte-11h9b8h"),f(n,"background-image",h)},m(t,i){m(t,e,i),j(e,n),j(e,s),j(e,a),j(a,o),j(a,r),j(a,l),j(e,c)},p(t,e){16&e[0]&&i!==(i="fetchitem.php?item_id="+t[51]+"&t=2&vcode="+t[52])&&x(n,"data-tipped",i),16&e[0]&&h!==(h=`url('${_}items/${t[51]}.gif')`)&&f(n,"background-image",h),18&e[0]&&g!==(g=(t[1][t[51]]??0)+"")&&S(o,g),16&e[0]&&v!==(v=t[53]+"")&&S(l,v)},d(t){t&&d(e)}}}function lt(t,e){let n,i,s,a,o,r,l,c,h,g,v,b,$,k,y,C,H,R,E,P,U=`url('${_}recipes/${e[45]}')`,I=e[44]+"",T=`url('${_}items/${e[48]}.gif')`,A=B(e[46]),F=[]
for(let t=0;t<A.length;t+=1)F[t]=ot(W(e,A,t))
let K=B(e[47]),Y=[]
for(let t=0;t<K.length;t+=1)Y[t]=rt(G(e,K,t))
return{key:t,first:null,c(){n=u("div"),i=u("a"),s=u("div"),o=w(),r=u("div"),l=u("a"),c=p(I),g=w(),v=u("div")
for(let t=0;t<F.length;t+=1)F[t].c()
b=w(),$=u("div")
for(let t=0;t<Y.length;t+=1)Y[t].c()
k=w(),y=u("div"),C=u("div"),R=w(),x(s,"class","image svelte-11h9b8h"),f(s,"background-image",U),x(i,"href",a=""+(M+e[43])),x(i,"class","svelte-11h9b8h"),x(n,"class","item-container svelte-11h9b8h"),x(l,"href",h=""+(M+e[43])),x(l,"class","svelte-11h9b8h"),x(r,"class","item-container svelte-11h9b8h"),x(v,"class","item-container svelte-11h9b8h"),x($,"class","item-container svelte-11h9b8h"),x(C,"data-tipped",H="fetchitem.php?item_id="+e[48]+"&t=2&vcode="+e[49]),x(C,"class","image tip-dynamic svelte-11h9b8h"),f(C,"background-image",T),x(y,"class","item-container svelte-11h9b8h"),this.first=n},m(t,a){m(t,n,a),j(n,i),j(i,s),m(t,o,a),m(t,r,a),j(r,l),j(l,c),m(t,g,a),m(t,v,a)
for(let t=0;t<F.length;t+=1)F[t]&&F[t].m(v,null)
m(t,b,a),m(t,$,a)
for(let t=0;t<Y.length;t+=1)Y[t]&&Y[t].m($,null)
m(t,k,a),m(t,y,a),j(y,C),j(y,R),E||(P=[N(i,"click",e[8]),N(l,"click",e[8])],E=!0)},p(t,n){if(e=t,16&n[0]&&U!==(U=`url('${_}recipes/${e[45]}')`)&&f(s,"background-image",U),16&n[0]&&a!==(a=""+(M+e[43]))&&x(i,"href",a),16&n[0]&&I!==(I=e[44]+"")&&S(c,I),16&n[0]&&h!==(h=""+(M+e[43]))&&x(l,"href",h),20&n[0]){let t
for(A=B(e[46]),t=0;t<A.length;t+=1){const i=W(e,A,t)
F[t]?F[t].p(i,n):(F[t]=ot(i),F[t].c(),F[t].m(v,null))}for(;t<F.length;t+=1)F[t].d(1)
F.length=A.length}if(18&n[0]){let t
for(K=B(e[47]),t=0;t<K.length;t+=1){const i=G(e,K,t)
Y[t]?Y[t].p(i,n):(Y[t]=rt(i),Y[t].c(),Y[t].m($,null))}for(;t<Y.length;t+=1)Y[t].d(1)
Y.length=K.length}16&n[0]&&H!==(H="fetchitem.php?item_id="+e[48]+"&t=2&vcode="+e[49])&&x(C,"data-tipped",H),16&n[0]&&T!==(T=`url('${_}items/${e[48]}.gif')`)&&f(C,"background-image",T)},d(t){t&&(d(n),d(o),d(r),d(g),d(v),d(b),d($),d(k),d(y)),L(F,t),L(Y,t),E=!1,q(P)}}}function ct(t,e){let n,i,s,a=e[40]+""
return{key:t,first:null,c(){n=p(a),i=w(),s=u("br"),this.first=n},m(t,e){m(t,n,e),m(t,i,e),m(t,s,e)},p(t,i){e=t,8&i[0]&&a!==(a=e[40]+"")&&S(n,a)},d(t){t&&(d(n),d(i),d(s))}}}function mt(t){return{c:v,m:v,p:v,i:v,o:v,d:v}}function dt(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!0,pending:mt,then:nt,catch:et,error:58,blocks:[,,,]}
return P(t[7](),i),{c(){e=c(),i.block.c()},m(t,s){m(t,e,s),i.block.m(t,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(e,n){U(i,t=e,n)},i(t){n||(o(i.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t]
r(e)}n=!1},d(t){t&&d(e),i.block.d(t),i.token=null,i=null}}}function pt(t){let e
return{c(){e=p("Refresh")},m(t,n){m(t,e,n)},d(t){t&&d(e)}}}function ut(t){let e,n,i,c
return n=new D({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=p("Recipe Manager\n    "),i=u("div"),s(n.$$.fragment),f(i,"display","contents"),f(i,"--button-color","#494437"),f(i,"--button-size","10px")},m(t,s){m(t,e,s),m(t,i,s),a(n,i,null),c=!0},p(t,e){const i={}
268435456&e[1]&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){c||(o(n.$$.fragment,t),c=!0)},o(t){r(n.$$.fragment,t),c=!1},d(t){t&&d(e),t&&n&&d(i),l(n,t)}}}function ft(t){let e,n
return e=new O({props:{visible:t[0],$$slots:{title:[ut],default:[dt]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){s(e.$$.fragment)},m(t,i){a(e,t,i),n=!0},p(t,n){const i={}
1&n[0]&&(i.visible=t[0]),30&n[0]|268435456&n[1]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function ht(t,e,n){let{visible:i=!0}=e,s={},a={},o=[],r=[],l=1
function c(t){h("Recipe Manager",t)}const m=t=>R(t).includes("quest"),d=([,t])=>m(t),p=([,t])=>!m(t),u=t=>t.filter(d).map((([,t])=>`Skipping folder "${t}" as it has the word "quest" in folder name.`)),f=t=>t.map((([,t])=>`Found blueprint "${t}".`)),v=(t=-1,e=0)=>k({cmd:"inventing",folder_id:t,page:e}),b=([t,e])=>e.map((e=>[t,e])),$=([t,e])=>v(t,e),w=([t,e])=>[t.previousElementSibling.children[0].href,e],x=([t,e])=>[t,E(e?.querySelector('#pCC select[name="page"]').options).slice(1).map((t=>t.value))],j=([,t])=>t.length,_=t=>E(t?.querySelectorAll('#pCC a[href*="&recipe_id="]')),M=t=>[t.href.split("=").at(-1),C(t),t.parentNode.previousElementSibling.children[0].src.split("/").at(-1)],N=(t,e)=>y(`#pCC td[background*="${e}"]`,t).map((t=>[t.children[0].children[0].dataset.tipped.split(/[?&=]/),t.parentNode.nextElementSibling])).map((([t,e])=>[t[2],t[10],...e?[Number(C(e).split("/")[1])]:[]])),S=([,t],[,e])=>l*g(t,e)
function L(t){n(3,o=t.concat(o))}async function q([t,e,n]){const i=await k({cmd:"inventing",subcmd:"viewrecipe",recipe_id:t})
return L([`Parsing blueprint ${e}...`]),i?[t,e,n,N(i,"/inventory/2x3."),N(i,"/inventory/1x1mini."),...N(i,"/hellforge/2x3.")]:[t,e,n]}const P=t=>{return H(J(t).map((e=t,t=>[t,e.filter((e=>e===t)).length])))
var e}
async function U(){L(["Updating inventory."])
const t=await F()
if(t?.s){const e=K(t.r).map((({b:t})=>t))
n(2,a=P(e))}else L("No inventory.")}async function B(){L(["Updating components."])
const t=await A()
if(Z(t.r)){const e=t.r.map((({b:t})=>t))
n(1,s=P(e))}else L("No components.")}async function I(){await Y([U(),B()]),n(3,o=[])}async function T([t,e]){const n=t.split("=").at(-1),i=await v(n)
return L([`Parsing folder "${e}"...`]),[n,i]}function z(t){const e=t.flatMap(_).map(M)
L(f(e)),async function(t){n(4,r=await Y(t.map(q))),V("fsh_recipeMgr",r),I()}(e)}function D(t){L(['Parsing folder "Unassigned"...'])
const e=y('div[id^="folder_name_"]',t).map((t=>[t,C(t)]))
L(u(e))
!async function(t){const e=await Y(t),n=e.map(x).filter(j).flatMap(b).map($),i=await Y(n)
z(e.map((([,t])=>t)).concat(i))}([["-1",t],...e.filter(p).map(w).map(T)])}async function O(){n(3,o=["Parsing inventing screen ..."])
const t=await v()
t?D(t):L(["Server Error."])}return t.$$set=t=>{"visible"in t&&n(0,i=t.visible)},[i,s,a,o,r,function(){c("close"),n(0,i=!1)},function(){c("sort by name"),n(4,r=r.slice().sort(S)),l*=-1},async function(){const t=await Q("fsh_recipeMgr")
t||O(),n(4,r=t),I()},function(){c("Navigate to recipe")},function(){c("refresh button"),O()}]}var gt=class extends e{constructor(t){super(),n(this,t,ht,ft,i,{visible:0},null,[-1,-1])}}
const vt={visible:!0}
let bt=0
function $t(){bt=t(vt,bt,gt)}export{$t as default}
//# sourceMappingURL=recipeMgr-8af858b7.js.map
