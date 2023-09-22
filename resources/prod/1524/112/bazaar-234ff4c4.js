import{c as t}from"./closestTable-082cc634.js"
import{g as e}from"./getId-e4d83057.js"
import{a as s,d as n,bA as a,$ as r,S as i,J as c,K as o,L as l,N as u,P as p,W as m,X as d,M as f,_ as h,aY as b,aI as g,a$ as y,Q as v,T as j,U as k,a0 as x,cI as q,a6 as S,cJ as $,j as w,al as E,q as C}from"./calfSystem-4830a18d.js"
import{i as G}from"./intValue-e1798d0a.js"
import{h as Y,u as _}from"./await_block-31b017e2.js"
import{e as z,u as I,d as P}from"./each-1f09c43f.js"
import{a as A}from"./addCommas-47d6aaa1.js"
function J(t,e){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})}async function M(t,e){const s=await n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e}),r=a(s)
return"You purchased the item!"===r?{r:Array(e),s:!0}:{e:{message:r},s:!1}}function N(t,e,s){const n=t.slice()
return n[3]=e[s],n[4]=e,n[5]=s,n}function T(t){return{c:m,m:m,p:m,d:m}}function B(t){let e,s,n
return{c(){e=l("button"),e.textContent="Buy",u(e,"type","button"),u(e,"class","custombutton")},m(a,r){p(a,e,r),s||(n=k(e,"click",(function(){$(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),s=!0)},p(e,s){t=e},d(t){t&&d(e),s=!1,n()}}}function H(t){let e
return{c(){e=l("span"),u(e,"class","fshSpinner fshSpinner12")},m(t,s){p(t,e,s)},p:m,d(t){t&&d(e)}}}function K(t,e){let s,n,a,r,i,c,o,m,S,$,w,E,C,G,z,I,P,J,M,N,K,L,Q,U=A(e[3].price)+"",V=A(e[3].price*e[3].count)+""
function W(){e[2].call(E,e[4],e[5])}let X={ctx:e,current:null,token:null,hasCatch:!1,pending:H,then:B,catch:T}
return Y(N=e[3].promise,X),{key:t,first:null,c(){s=l("div"),n=l("img"),i=f(),c=l("div"),o=h(U),m=f(),S=l("img"),w=h("\n        x\n        "),E=l("input"),C=l("br"),G=h("\n        = "),z=h(V),I=f(),P=l("img"),M=f(),X.block.c(),K=f(),u(n,"class","potion-img tip-dynamic svelte-12re2j5"),b(n,"background","url('"+g+"ui/inventory/2x3.png')"),y(n.src,a=e[3].img)||u(n,"src",a),u(n,"alt","Potion"),u(n,"data-tipped",r=e[3].fetch),y(S.src,$=g+"currency/0.png")||u(S,"src",$),u(S,"data-hasqtip","1"),u(S,"oldtitle","Gold"),u(S,"alt","Gold"),u(S,"title",""),u(S,"aria-describedby","qtip-1"),u(S,"class","svelte-12re2j5"),u(E,"type","number"),u(E,"min","1"),u(E,"max","100"),u(E,"class","svelte-12re2j5"),y(P.src,J=g+"currency/0.png")||u(P,"src",J),u(P,"alt","Gold"),u(P,"data-hasqtip","1"),u(P,"oldtitle","Gold"),u(P,"title",""),u(P,"aria-describedby","qtip-1"),u(P,"class","svelte-12re2j5"),u(c,"class","prices svelte-12re2j5"),u(s,"class","potion svelte-12re2j5"),this.first=s},m(t,a){p(t,s,a),v(s,n),v(s,i),v(s,c),v(c,o),v(c,m),v(c,S),v(c,w),v(c,E),j(E,e[3].count),v(c,C),v(c,G),v(c,z),v(c,I),v(c,P),v(s,M),X.block.m(s,X.anchor=null),X.mount=()=>s,X.anchor=K,v(s,K),L||(Q=k(E,"input",W),L=!0)},p(t,s){e=t,1&s&&!y(n.src,a=e[3].img)&&u(n,"src",a),1&s&&r!==(r=e[3].fetch)&&u(n,"data-tipped",r),1&s&&U!==(U=A(e[3].price)+"")&&x(o,U),1&s&&q(E.value)!==e[3].count&&j(E,e[3].count),1&s&&V!==(V=A(e[3].price*e[3].count)+"")&&x(z,V),X.ctx=e,1&s&&N!==(N=e[3].promise)&&Y(N,X)||_(X,e,s)},d(t){t&&d(s),X.block.d(),X.token=null,X=null,L=!1,Q()}}}function L(t){let e,s=[],n=new Map,a=z(t[0])
const r=t=>t[3].id
for(let e=0;e<a.length;e+=1){let i=N(t,a,e),c=r(i)
n.set(c,s[e]=K(c,i))}return{c(){e=l("div")
for(let t=0;t<s.length;t+=1)s[t].c()
u(e,"id","bazaar"),u(e,"class","svelte-12re2j5")},m(t,n){p(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,[i]){3&i&&(a=z(t[0]),s=I(s,i,r,1,t,a,n,e,P,K,null,N))},i:m,o:m,d(t){t&&d(e)
for(let t=0;t<s.length;t+=1)s[t].d()}}}function Q(t,e,s){let{potions:n=[]}=e
return t.$$set=t=>{"potions"in t&&s(0,n=t.potions)},[n,async function(t){var e,s
t.promise=(e=t.id,s=t.count,r(J,M,e,s))
const n=await t.promise
n.s?S(`You successfully purchased ${t.count} "${n.r[0].n}"`):S(n.e.message)},function(t,e){t[e].count=q(this.value),s(0,n)}]}class U extends i{constructor(t){super(),c(this,t,Q,L,o,{potions:0})}}const V=s=>({id:Number(e(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:G(E(C('img[src*="/currency/"]',t(s).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function W(){const e=w('a[href*="cmd=buyitem"]')
if(!e.length)return
const s=t(t(e[0]).parentElement)
var n
n=e.map(V),new U({target:s.parentElement,props:{potions:n}}),s.remove()}export{W as default}
//# sourceMappingURL=bazaar-234ff4c4.js.map
