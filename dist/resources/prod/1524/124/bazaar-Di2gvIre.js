import{c as t}from"./closestTable-C3dd6ozM.js"
import{g as e}from"./getId-CEBzpjjo.js"
import{a as s,e as n,bI as a,$ as r,S as i,L as c,M as o,N as l,O as u,Q as p,T as m,Z as d,_ as f,a0 as b,P as h,a3 as g,b3 as y,aN as v,b6 as j,U as k,W as q,X as x,a4 as w,cQ as E,a5 as S,s as $,ab as z,cR as C,k as G,aq as _,q as I}from"./calfSystem-0LeC9ahe.js"
import{i as N}from"./intValue-C7nTQec1.js"
import{h as P,u as T}from"./await_block-BicSLSoE.js"
import{a as B}from"./addCommas-C_h2HN8s.js"
function M(t,e){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})}async function Q(t,e){const s=await n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})
if(!s)return{s:!1}
const r=a(s)
return"You purchased the item!"===r?{r:Array(e),s:!0}:{e:{message:r},s:!1}}function Y(t,e,s){const n=t.slice()
return n[3]=e[s],n[4]=e,n[5]=s,n}function A(t){return{c:f,m:f,p:f,d:f}}function L(t){let e,s,n
return{c(){e=u("button"),e.textContent="Buy",p(e,"type","button"),p(e,"class","custombutton")},m(a,r){m(a,e,r),s||(n=x(e,"click",(function(){C(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),s=!0)},p(e,s){t=e},d(t){t&&b(e),s=!1,n()}}}function O(t){let e
return{c(){e=u("span"),p(e,"class","fshSpinner fshSpinner12")},m(t,s){m(t,e,s)},p:f,d(t){t&&b(e)}}}function R(t,e){let s,n,a,r,i,c,o,l,d,f,S,$,z,C,G,_,I,N,M,Q,Y,R,U,V=B(e[3].price)+"",W=B(e[3].price*e[3].count)+""
function X(){e[2].call($,e[4],e[5])}let Z={ctx:e,current:null,token:null,hasCatch:!1,pending:O,then:L,catch:A}
return P(Q=e[3].promise,Z),{key:t,first:null,c(){s=u("div"),n=u("img"),i=h(),c=u("div"),o=g(V),l=h(),d=u("img"),S=g("\n        x\n        "),$=u("input"),z=u("br"),C=g("\n        = "),G=g(W),_=h(),I=u("img"),M=h(),Z.block.c(),Y=h(),p(n,"class","potion-img tip-dynamic svelte-12re2j5"),y(n,"background","url('"+v+"ui/inventory/2x3.png')"),j(n.src,a=e[3].img)||p(n,"src",a),p(n,"alt","Potion"),p(n,"data-tipped",r=e[3].fetch),j(d.src,f=v+"currency/0.png")||p(d,"src",f),p(d,"data-hasqtip","1"),p(d,"oldtitle","Gold"),p(d,"alt","Gold"),p(d,"title",""),p(d,"aria-describedby","qtip-1"),p(d,"class","svelte-12re2j5"),p($,"type","number"),p($,"min","1"),p($,"max","100"),p($,"class","svelte-12re2j5"),j(I.src,N=v+"currency/0.png")||p(I,"src",N),p(I,"alt","Gold"),p(I,"data-hasqtip","1"),p(I,"oldtitle","Gold"),p(I,"title",""),p(I,"aria-describedby","qtip-1"),p(I,"class","svelte-12re2j5"),p(c,"class","prices svelte-12re2j5"),p(s,"class","potion svelte-12re2j5"),this.first=s},m(t,a){m(t,s,a),k(s,n),k(s,i),k(s,c),k(c,o),k(c,l),k(c,d),k(c,S),k(c,$),q($,e[3].count),k(c,z),k(c,C),k(c,G),k(c,_),k(c,I),k(s,M),Z.block.m(s,Z.anchor=null),Z.mount=()=>s,Z.anchor=Y,k(s,Y),R||(U=x($,"input",X),R=!0)},p(t,s){e=t,1&s&&!j(n.src,a=e[3].img)&&p(n,"src",a),1&s&&r!==(r=e[3].fetch)&&p(n,"data-tipped",r),1&s&&V!==(V=B(e[3].price)+"")&&w(o,V),1&s&&E($.value)!==e[3].count&&q($,e[3].count),1&s&&W!==(W=B(e[3].price*e[3].count)+"")&&w(G,W),Z.ctx=e,1&s&&Q!==(Q=e[3].promise)&&P(Q,Z)||T(Z,e,s)},d(t){t&&b(s),Z.block.d(),Z.token=null,Z=null,R=!1,U()}}}function U(t){let e,s=[],n=new Map,a=l(t[0])
const r=t=>t[3].id
for(let e=0;e<a.length;e+=1){let i=Y(t,a,e),c=r(i)
n.set(c,s[e]=R(c,i))}return{c(){e=u("div")
for(let t=0;t<s.length;t+=1)s[t].c()
p(e,"id","bazaar"),p(e,"class","svelte-12re2j5")},m(t,n){m(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,[i]){3&i&&(a=l(t[0]),s=d(s,i,r,1,t,a,n,e,S,R,null,Y))},i:f,o:f,d(t){t&&b(e)
for(let t=0;t<s.length;t+=1)s[t].d()}}}function V(t,e,s){let{potions:n=[]}=e
return t.$$set=t=>{"potions"in t&&s(0,n=t.potions)},[n,async function(t){var e,s
$("bazaar","buyButton"),t.promise=(e=t.id,s=t.count,r(M,Q,e,s))
const n=await t.promise
n.s?z(`You successfully purchased ${t.count} "${n.r[0].n}"`):z(n.e.message)},function(t,e){t[e].count=E(this.value),s(0,n)}]}class W extends i{constructor(t){super(),c(this,t,V,U,o,{potions:0})}}const X=s=>({id:Number(e(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:N(_(I('img[src*="/currency/"]',t(s).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function Z(){const e=G('a[href*="cmd=buyitem"]')
if(!e.length)return
const s=t(t(e[0]).parentElement)
var n
n=e.map(X),new W({target:s.parentElement,props:{potions:n}}),s.remove()}export{Z as default}
//# sourceMappingURL=bazaar-Di2gvIre.js.map
