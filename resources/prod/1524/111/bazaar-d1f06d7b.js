import{c as t}from"./closestTable-deb533c1.js"
import{g as e}from"./getId-e4d83057.js"
import{a as s,d as n,bB as a,$ as r,S as i,K as c,L as o,M as l,O as u,Q as p,X as m,Y as d,N as f,a0 as h,aZ as b,aJ as g,b0 as y,R as v,U as j,V as k,a1 as x,cI as q,a7 as S,cJ as w,j as E,am as $,q as C}from"./calfSystem-abb16b0d.js"
import{i as G}from"./intValue-e1798d0a.js"
import{h as Y,u as z}from"./await_block-78969f55.js"
import{e as _,u as B,d as I}from"./each-13c4feae.js"
import{a as J}from"./addCommas-47d6aaa1.js"
function M(t,e){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})}async function N(t,e){const s=await n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e}),r=a(s)
return"You purchased the item!"===r?{r:Array(e),s:!0}:{e:{message:r},s:!1}}function P(t,e,s){const n=t.slice()
return n[3]=e[s],n[4]=e,n[5]=s,n}function V(t){return{c:m,m:m,p:m,d:m}}function A(t){let e,s,n
return{c(){e=l("button"),e.textContent="Buy",u(e,"type","button"),u(e,"class","custombutton")},m(a,r){p(a,e,r),s||(n=k(e,"click",(function(){w(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),s=!0)},p(e,s){t=e},d(t){t&&d(e),s=!1,n()}}}function H(t){let e
return{c(){e=l("span"),u(e,"class","fshSpinner fshSpinner12")},m(t,s){p(t,e,s)},p:m,d(t){t&&d(e)}}}function K(t,e){let s,n,a,r,i,c,o,m,S,w,E,$,C,G,_,B,I,M,N,P,K,L,O,Q=J(e[3].price)+"",R=J(e[3].price*e[3].count)+""
function T(){e[2].call($,e[4],e[5])}let U={ctx:e,current:null,token:null,hasCatch:!1,pending:H,then:A,catch:V}
return Y(P=e[3].promise,U),{key:t,first:null,c(){s=l("div"),n=l("img"),i=f(),c=l("div"),o=h(Q),m=f(),S=l("img"),E=h("\n        x\n        "),$=l("input"),C=l("br"),G=h("\n        = "),_=h(R),B=f(),I=l("img"),N=f(),U.block.c(),K=f(),u(n,"class","potion-img tip-dynamic svelte-12re2j5"),b(n,"background","url('"+g+"ui/inventory/2x3.png')"),y(n.src,a=e[3].img)||u(n,"src",a),u(n,"alt","Potion"),u(n,"data-tipped",r=e[3].fetch),y(S.src,w=g+"currency/0.png")||u(S,"src",w),u(S,"data-hasqtip","1"),u(S,"oldtitle","Gold"),u(S,"alt","Gold"),u(S,"title",""),u(S,"aria-describedby","qtip-1"),u(S,"class","svelte-12re2j5"),u($,"type","number"),u($,"min","1"),u($,"max","100"),u($,"class","svelte-12re2j5"),y(I.src,M=g+"currency/0.png")||u(I,"src",M),u(I,"alt","Gold"),u(I,"data-hasqtip","1"),u(I,"oldtitle","Gold"),u(I,"title",""),u(I,"aria-describedby","qtip-1"),u(I,"class","svelte-12re2j5"),u(c,"class","prices svelte-12re2j5"),u(s,"class","potion svelte-12re2j5"),this.first=s},m(t,a){p(t,s,a),v(s,n),v(s,i),v(s,c),v(c,o),v(c,m),v(c,S),v(c,E),v(c,$),j($,e[3].count),v(c,C),v(c,G),v(c,_),v(c,B),v(c,I),v(s,N),U.block.m(s,U.anchor=null),U.mount=()=>s,U.anchor=K,v(s,K),L||(O=k($,"input",T),L=!0)},p(t,s){e=t,1&s&&!y(n.src,a=e[3].img)&&u(n,"src",a),1&s&&r!==(r=e[3].fetch)&&u(n,"data-tipped",r),1&s&&Q!==(Q=J(e[3].price)+"")&&x(o,Q),1&s&&q($.value)!==e[3].count&&j($,e[3].count),1&s&&R!==(R=J(e[3].price*e[3].count)+"")&&x(_,R),U.ctx=e,1&s&&P!==(P=e[3].promise)&&Y(P,U)||z(U,e,s)},d(t){t&&d(s),U.block.d(),U.token=null,U=null,L=!1,O()}}}function L(t){let e,s=[],n=new Map,a=_(t[0])
const r=t=>t[3].id
for(let e=0;e<a.length;e+=1){let i=P(t,a,e),c=r(i)
n.set(c,s[e]=K(c,i))}return{c(){e=l("div")
for(let t=0;t<s.length;t+=1)s[t].c()
u(e,"id","bazaar"),u(e,"class","svelte-12re2j5")},m(t,n){p(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,[i]){3&i&&(a=_(t[0]),s=B(s,i,r,1,t,a,n,e,I,K,null,P))},i:m,o:m,d(t){t&&d(e)
for(let t=0;t<s.length;t+=1)s[t].d()}}}function O(t,e,s){let{potions:n=[]}=e
return t.$$set=t=>{"potions"in t&&s(0,n=t.potions)},[n,async function(t){var e,s
t.promise=(e=t.id,s=t.count,r(M,N,e,s))
const n=await t.promise
n.s?S(`You successfully purchased ${t.count} "${n.r[0].n}"`):S(n.e.message)},function(t,e){t[e].count=q(this.value),s(0,n)}]}class Q extends i{constructor(t){super(),c(this,t,O,L,o,{potions:0})}}const R=s=>({id:Number(e(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:G($(C('img[src*="/currency/"]',t(s).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function T(){const e=E('a[href*="cmd=buyitem"]')
if(!e.length)return
const s=t(t(e[0]).parentElement)
var n
n=e.map(R),new Q({target:s.parentElement,props:{potions:n}}),s.remove()}export{T as default}
//# sourceMappingURL=bazaar-d1f06d7b.js.map
