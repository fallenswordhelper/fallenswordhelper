import{c as t}from"./closestTable-BpwC4ZYl.js"
import{g as s}from"./getId-CEBzpjjo.js"
import{a as e,e as n,bN as a,$ as r,S as i,L as c,M as o,N as l,O as u,Q as p,T as m,Z as d,_ as f,a0 as b,P as h,a3 as g,b5 as y,aP as v,b8 as j,U as k,W as x,X as q,a4 as w,cZ as E,a5 as S,s as $,ab as _,c_ as z,k as C,as as G,q as P}from"./calfSystem-DKih1pr1.js"
import{i as N}from"./intValue-C7nTQec1.js"
import{h as T,u as B}from"./await_block-KuAlb3o5.js"
import{a as I}from"./addCommas-C_h2HN8s.js"
function M(t,s){return e({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})}async function Y(t,s){const e=await n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})
if(!e)return{s:!1}
const r=a(e)
return"You purchased the item!"===r?{r:Array(s),s:!0}:{e:{message:r},s:!1}}function Z(t,s,e){const n=t.slice()
return n[3]=s[e],n[4]=s,n[5]=e,n}function A(t){return{c:f,m:f,p:f,d:f}}function L(t){let s,e,n
return{c(){s=u("button"),s.textContent="Buy",p(s,"type","button"),p(s,"class","custombutton")},m(a,r){m(a,s,r),e||(n=q(s,"click",(function(){z(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),e=!0)},p(s,e){t=s},d(t){t&&b(s),e=!1,n()}}}function O(t){let s
return{c(){s=u("span"),p(s,"class","fshSpinner fshSpinner12")},m(t,e){m(t,s,e)},p:f,d(t){t&&b(s)}}}function Q(t,s){let e,n,a,r,i,c,o,l,d,f,S,$,_,z,C,G,P,N,M,Y,Z,Q,U,V=I(s[3].price)+"",W=I(s[3].price*s[3].count)+""
function X(){s[2].call($,s[4],s[5])}let D={ctx:s,current:null,token:null,hasCatch:!1,pending:O,then:L,catch:A}
return T(Y=s[3].promise,D),{key:t,first:null,c(){e=u("div"),n=u("img"),i=h(),c=u("div"),o=g(V),l=h(),d=u("img"),S=g("\n        x\n        "),$=u("input"),_=u("br"),z=g("\n        = "),C=g(W),G=h(),P=u("img"),M=h(),D.block.c(),Z=h(),p(n,"class","potion-img tip-dynamic svelte-12re2j5"),y(n,"background","url('"+v+"ui/inventory/2x3.png')"),j(n.src,a=s[3].img)||p(n,"src",a),p(n,"alt","Potion"),p(n,"data-tipped",r=s[3].fetch),j(d.src,f=v+"currency/0.png")||p(d,"src",f),p(d,"data-hasqtip","1"),p(d,"oldtitle","Gold"),p(d,"alt","Gold"),p(d,"title",""),p(d,"aria-describedby","qtip-1"),p(d,"class","svelte-12re2j5"),p($,"type","number"),p($,"min","1"),p($,"max","100"),p($,"class","svelte-12re2j5"),j(P.src,N=v+"currency/0.png")||p(P,"src",N),p(P,"alt","Gold"),p(P,"data-hasqtip","1"),p(P,"oldtitle","Gold"),p(P,"title",""),p(P,"aria-describedby","qtip-1"),p(P,"class","svelte-12re2j5"),p(c,"class","prices svelte-12re2j5"),p(e,"class","potion svelte-12re2j5"),this.first=e},m(t,a){m(t,e,a),k(e,n),k(e,i),k(e,c),k(c,o),k(c,l),k(c,d),k(c,S),k(c,$),x($,s[3].count),k(c,_),k(c,z),k(c,C),k(c,G),k(c,P),k(e,M),D.block.m(e,D.anchor=null),D.mount=()=>e,D.anchor=Z,k(e,Z),Q||(U=q($,"input",X),Q=!0)},p(t,e){s=t,1&e&&!j(n.src,a=s[3].img)&&p(n,"src",a),1&e&&r!==(r=s[3].fetch)&&p(n,"data-tipped",r),1&e&&V!==(V=I(s[3].price)+"")&&w(o,V),1&e&&E($.value)!==s[3].count&&x($,s[3].count),1&e&&W!==(W=I(s[3].price*s[3].count)+"")&&w(C,W),D.ctx=s,1&e&&Y!==(Y=s[3].promise)&&T(Y,D)||B(D,s,e)},d(t){t&&b(e),D.block.d(),D.token=null,D=null,Q=!1,U()}}}function U(t){let s,e=[],n=new Map,a=l(t[0])
const r=t=>t[3].id
for(let s=0;s<a.length;s+=1){let i=Z(t,a,s),c=r(i)
n.set(c,e[s]=Q(c,i))}return{c(){s=u("div")
for(let t=0;t<e.length;t+=1)e[t].c()
p(s,"id","bazaar"),p(s,"class","svelte-12re2j5")},m(t,n){m(t,s,n)
for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(s,null)},p(t,[i]){3&i&&(a=l(t[0]),e=d(e,i,r,1,t,a,n,s,S,Q,null,Z))},i:f,o:f,d(t){t&&b(s)
for(let t=0;t<e.length;t+=1)e[t].d()}}}function V(t,s,e){let{potions:n=[]}=s
return t.$$set=t=>{"potions"in t&&e(0,n=t.potions)},[n,async function(t){var s,e
$("bazaar","buyButton"),t.promise=(s=t.id,e=t.count,r(M,Y,s,e))
const n=await t.promise
n.s?_(`You successfully purchased ${t.count} "${n.r[0].n}"`):_(n.e.message)},function(t,s){t[s].count=E(this.value),e(0,n)}]}class W extends i{constructor(t){super(),c(this,t,V,U,o,{potions:0})}}const X=e=>({id:Number(s(e)),img:e.children[0].src,fetch:e.firstChild.dataset.tipped,price:N(G(P('img[src*="/currency/"]',t(e).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function D(){const s=C('a[href*="cmd=buyitem"]')
if(!s.length)return
const e=t(t(s[0]).parentElement)
var n
n=s.map(X),new W({target:e.parentElement,props:{potions:n}}),e.remove()}export{D as default}
//# sourceMappingURL=bazaar-4zAOMaHk.js.map
