import{c as t}from"./closestTable-ell7c3Dx.js"
import{g as e}from"./getId-f4M3YrQR.js"
import{a as s,e as n,bz as a,$ as r,S as i,J as c,K as o,L as l,N as u,P as p,W as m,X as d,M as f,_ as h,aX as b,aH as g,a_ as y,Q as v,T as j,U as k,a0 as x,cI as q,s as S,a6 as w,cJ as z,k as E,al as $,q as _}from"./calfSystem-ZGMc097r.js"
import{i as C}from"./intValue-JHhLnq8V.js"
import{h as G,u as P}from"./await_block-CsWaGax3.js"
import{e as Y,u as B,d as H}from"./each-_TSpIEJe.js"
import{a as I}from"./addCommas-olJWnOGa.js"
function J(t,e){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})}async function M(t,e){const s=await n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})
if(!s)return{s:!1}
const r=a(s)
return"You purchased the item!"===r?{r:Array(e),s:!0}:{e:{message:r},s:!1}}function N(t,e,s){const n=t.slice()
return n[3]=e[s],n[4]=e,n[5]=s,n}function T(t){return{c:m,m:m,p:m,d:m}}function X(t){let e,s,n
return{c(){e=l("button"),e.textContent="Buy",u(e,"type","button"),u(e,"class","custombutton")},m(a,r){p(a,e,r),s||(n=k(e,"click",(function(){z(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),s=!0)},p(e,s){t=e},d(t){t&&d(e),s=!1,n()}}}function A(t){let e
return{c(){e=l("span"),u(e,"class","fshSpinner fshSpinner12")},m(t,s){p(t,e,s)},p:m,d(t){t&&d(e)}}}function K(t,e){let s,n,a,r,i,c,o,m,S,w,z,E,$,_,C,Y,B,H,J,M,N,K,L,Q=I(e[3].price)+"",U=I(e[3].price*e[3].count)+""
function V(){e[2].call(E,e[4],e[5])}let W={ctx:e,current:null,token:null,hasCatch:!1,pending:A,then:X,catch:T}
return G(M=e[3].promise,W),{key:t,first:null,c(){s=l("div"),n=l("img"),i=f(),c=l("div"),o=h(Q),m=f(),S=l("img"),z=h("\n        x\n        "),E=l("input"),$=l("br"),_=h("\n        = "),C=h(U),Y=f(),B=l("img"),J=f(),W.block.c(),N=f(),u(n,"class","potion-img tip-dynamic svelte-12re2j5"),b(n,"background","url('"+g+"ui/inventory/2x3.png')"),y(n.src,a=e[3].img)||u(n,"src",a),u(n,"alt","Potion"),u(n,"data-tipped",r=e[3].fetch),y(S.src,w=g+"currency/0.png")||u(S,"src",w),u(S,"data-hasqtip","1"),u(S,"oldtitle","Gold"),u(S,"alt","Gold"),u(S,"title",""),u(S,"aria-describedby","qtip-1"),u(S,"class","svelte-12re2j5"),u(E,"type","number"),u(E,"min","1"),u(E,"max","100"),u(E,"class","svelte-12re2j5"),y(B.src,H=g+"currency/0.png")||u(B,"src",H),u(B,"alt","Gold"),u(B,"data-hasqtip","1"),u(B,"oldtitle","Gold"),u(B,"title",""),u(B,"aria-describedby","qtip-1"),u(B,"class","svelte-12re2j5"),u(c,"class","prices svelte-12re2j5"),u(s,"class","potion svelte-12re2j5"),this.first=s},m(t,a){p(t,s,a),v(s,n),v(s,i),v(s,c),v(c,o),v(c,m),v(c,S),v(c,z),v(c,E),j(E,e[3].count),v(c,$),v(c,_),v(c,C),v(c,Y),v(c,B),v(s,J),W.block.m(s,W.anchor=null),W.mount=()=>s,W.anchor=N,v(s,N),K||(L=k(E,"input",V),K=!0)},p(t,s){e=t,1&s&&!y(n.src,a=e[3].img)&&u(n,"src",a),1&s&&r!==(r=e[3].fetch)&&u(n,"data-tipped",r),1&s&&Q!==(Q=I(e[3].price)+"")&&x(o,Q),1&s&&q(E.value)!==e[3].count&&j(E,e[3].count),1&s&&U!==(U=I(e[3].price*e[3].count)+"")&&x(C,U),W.ctx=e,1&s&&M!==(M=e[3].promise)&&G(M,W)||P(W,e,s)},d(t){t&&d(s),W.block.d(),W.token=null,W=null,K=!1,L()}}}function L(t){let e,s=[],n=new Map,a=Y(t[0])
const r=t=>t[3].id
for(let e=0;e<a.length;e+=1){let i=N(t,a,e),c=r(i)
n.set(c,s[e]=K(c,i))}return{c(){e=l("div")
for(let t=0;t<s.length;t+=1)s[t].c()
u(e,"id","bazaar"),u(e,"class","svelte-12re2j5")},m(t,n){p(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,[i]){3&i&&(a=Y(t[0]),s=B(s,i,r,1,t,a,n,e,H,K,null,N))},i:m,o:m,d(t){t&&d(e)
for(let t=0;t<s.length;t+=1)s[t].d()}}}function Q(t,e,s){let{potions:n=[]}=e
return t.$$set=t=>{"potions"in t&&s(0,n=t.potions)},[n,async function(t){var e,s
S("bazaar","buyButton"),t.promise=(e=t.id,s=t.count,r(J,M,e,s))
const n=await t.promise
n.s?w(`You successfully purchased ${t.count} "${n.r[0].n}"`):w(n.e.message)},function(t,e){t[e].count=q(this.value),s(0,n)}]}class U extends i{constructor(t){super(),c(this,t,Q,L,o,{potions:0})}}const V=s=>({id:Number(e(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:C($(_('img[src*="/currency/"]',t(s).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function W(){const e=E('a[href*="cmd=buyitem"]')
if(!e.length)return
const s=t(t(e[0]).parentElement)
var n
n=e.map(V),new U({target:s.parentElement,props:{potions:n}}),s.remove()}export{W as default}
//# sourceMappingURL=bazaar-UfBDvSJ4.js.map
