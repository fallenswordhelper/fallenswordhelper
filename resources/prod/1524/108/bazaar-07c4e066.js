import{c as t}from"./closestTable-c0c63085.js"
import{g as e}from"./getId-e4d83057.js"
import{a as s,d as n,bD as a,$ as r,S as i,L as c,M as o,N as l,P as u,R as p,Y as m,Z as d,O as f,a1 as h,a$ as b,aL as g,b2 as y,T as v,V as j,W as k,a2 as x,cM as q,a8 as S,cN as $,j as w,an as E,q as C}from"./calfSystem-34913441.js"
import{i as G}from"./intValue-e1798d0a.js"
import{h as Y,u as z}from"./await_block-d58cecee.js"
import{e as M,u as N,d as P}from"./each-6f7f5a14.js"
import{a as _}from"./addCommas-47d6aaa1.js"
function L(t,e){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})}async function T(t,e){const s=await n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e}),r=a(s)
return"You purchased the item!"===r?{r:Array(e),s:!0}:{e:{message:r},s:!1}}function V(t,e,s){const n=t.slice()
return n[3]=e[s],n[4]=e,n[5]=s,n}function A(t){return{c:m,m:m,p:m,d:m}}function B(t){let e,s,n
return{c(){e=l("button"),e.textContent="Buy",u(e,"type","button"),u(e,"class","custombutton")},m(a,r){p(a,e,r),s||(n=k(e,"click",(function(){$(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),s=!0)},p(e,s){t=e},d(t){t&&d(e),s=!1,n()}}}function D(t){let e
return{c(){e=l("span"),u(e,"class","fshSpinner fshSpinner12")},m(t,s){p(t,e,s)},p:m,d(t){t&&d(e)}}}function H(t,e){let s,n,a,r,i,c,o,m,S,$,w,E,C,G,M,N,P,L,T,V,H,I,O,R=_(e[3].price)+"",W=_(e[3].price*e[3].count)+""
function Z(){e[2].call(E,e[4],e[5])}let F={ctx:e,current:null,token:null,hasCatch:!1,pending:D,then:B,catch:A}
return Y(V=e[3].promise,F),{key:t,first:null,c(){s=l("div"),n=l("img"),i=f(),c=l("div"),o=h(R),m=f(),S=l("img"),w=h("\n        x\n        "),E=l("input"),C=l("br"),G=h("\n        = "),M=h(W),N=f(),P=l("img"),T=f(),F.block.c(),H=f(),u(n,"class","potion-img tip-dynamic svelte-12re2j5"),b(n,"background","url('"+g+"ui/inventory/2x3.png')"),y(n.src,a=e[3].img)||u(n,"src",a),u(n,"alt","Potion"),u(n,"data-tipped",r=e[3].fetch),y(S.src,$=g+"currency/0.png")||u(S,"src",$),u(S,"data-hasqtip","1"),u(S,"oldtitle","Gold"),u(S,"alt","Gold"),u(S,"title",""),u(S,"aria-describedby","qtip-1"),u(S,"class","svelte-12re2j5"),u(E,"type","number"),u(E,"min","1"),u(E,"max","100"),u(E,"class","svelte-12re2j5"),y(P.src,L=g+"currency/0.png")||u(P,"src",L),u(P,"alt","Gold"),u(P,"data-hasqtip","1"),u(P,"oldtitle","Gold"),u(P,"title",""),u(P,"aria-describedby","qtip-1"),u(P,"class","svelte-12re2j5"),u(c,"class","prices svelte-12re2j5"),u(s,"class","potion svelte-12re2j5"),this.first=s},m(t,a){p(t,s,a),v(s,n),v(s,i),v(s,c),v(c,o),v(c,m),v(c,S),v(c,w),v(c,E),j(E,e[3].count),v(c,C),v(c,G),v(c,M),v(c,N),v(c,P),v(s,T),F.block.m(s,F.anchor=null),F.mount=()=>s,F.anchor=H,v(s,H),I||(O=k(E,"input",Z),I=!0)},p(t,s){e=t,1&s&&!y(n.src,a=e[3].img)&&u(n,"src",a),1&s&&r!==(r=e[3].fetch)&&u(n,"data-tipped",r),1&s&&R!==(R=_(e[3].price)+"")&&x(o,R),1&s&&q(E.value)!==e[3].count&&j(E,e[3].count),1&s&&W!==(W=_(e[3].price*e[3].count)+"")&&x(M,W),F.ctx=e,1&s&&V!==(V=e[3].promise)&&Y(V,F)||z(F,e,s)},d(t){t&&d(s),F.block.d(),F.token=null,F=null,I=!1,O()}}}function I(t){let e,s=[],n=new Map,a=M(t[0])
const r=t=>t[3].id
for(let e=0;e<a.length;e+=1){let i=V(t,a,e),c=r(i)
n.set(c,s[e]=H(c,i))}return{c(){e=l("div")
for(let t=0;t<s.length;t+=1)s[t].c()
u(e,"id","bazaar"),u(e,"class","svelte-12re2j5")},m(t,n){p(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,[i]){3&i&&(a=M(t[0]),s=N(s,i,r,1,t,a,n,e,P,H,null,V))},i:m,o:m,d(t){t&&d(e)
for(let t=0;t<s.length;t+=1)s[t].d()}}}function O(t,e,s){let{potions:n=[]}=e
return t.$$set=t=>{"potions"in t&&s(0,n=t.potions)},[n,async function(t){var e,s
t.promise=(e=t.id,s=t.count,r(L,T,e,s))
const n=await t.promise
n.s?S(`You successfully purchased ${t.count} "${n.r[0].n}"`):S(n.e.message)},function(t,e){t[e].count=q(this.value),s(0,n)}]}class R extends i{constructor(t){super(),c(this,t,O,I,o,{potions:0})}}const W=s=>({id:Number(e(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:G(E(C('img[src*="/currency/"]',t(s).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function Z(){const e=w('a[href*="cmd=buyitem"]')
if(!e.length)return
const s=t(t(e[0]).parentElement)
var n
n=e.map(W),new R({target:s.parentElement,props:{potions:n}}),s.remove()}export{Z as default}
//# sourceMappingURL=bazaar-07c4e066.js.map
