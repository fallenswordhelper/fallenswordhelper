import{c as t}from"./closestTable-C3GWfrIz.js"
import{g as s}from"./getId-CEBzpjjo.js"
import{a as e,e as n,bN as a,$ as r,S as i,L as c,M as o,N as l,O as u,Q as p,T as m,Z as d,_ as f,a0 as b,P as h,a3 as g,b5 as y,aP as v,b8 as j,U as k,W as x,X as q,a4 as w,cZ as E,a5 as S,s as $,ab as _,c_ as z,p as C,w as G,k as P,as as N,q as T}from"./calfSystem-B-q5dZfX.js"
import{i as B}from"./intValue-C7nTQec1.js"
import{h as I,u as M}from"./await_block-C0N0_odL.js"
import{a as Y}from"./addCommas-C_h2HN8s.js"
function Z(t,s){return e({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})}async function A(t,s){const e=await n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})
if(!e)return{s:!1}
const r=a(e)
return"You purchased the item!"===r?{r:Array(s),s:!0}:{e:{message:r},s:!1}}function L(t,s,e){const n=t.slice()
return n[3]=s[e],n[4]=s,n[5]=e,n}function O(t){return{c:f,m:f,p:f,d:f}}function Q(t){let s,e,n
return{c(){s=u("button"),s.textContent="Buy",p(s,"type","button"),p(s,"class","custombutton")},m(a,r){m(a,s,r),e||(n=q(s,"click",(function(){z(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),e=!0)},p(s,e){t=s},d(t){t&&b(s),e=!1,n()}}}function U(t){let s
return{c(){s=u("span"),p(s,"class","fshSpinner fshSpinner12")},m(t,e){m(t,s,e)},p:f,d(t){t&&b(s)}}}function V(t,s){let e,n,a,r,i,c,o,l,d,f,S,$,_,z,C,G,P,N,T,B,Z,A,L,V=Y(s[3].price)+"",W=Y(s[3].price*s[3].count)+""
function X(){s[2].call($,s[4],s[5])}let D={ctx:s,current:null,token:null,hasCatch:!1,pending:U,then:Q,catch:O}
return I(B=s[3].promise,D),{key:t,first:null,c(){e=u("div"),n=u("img"),i=h(),c=u("div"),o=g(V),l=h(),d=u("img"),S=g("\n        x\n        "),$=u("input"),_=u("br"),z=g("\n        = "),C=g(W),G=h(),P=u("img"),T=h(),D.block.c(),Z=h(),p(n,"class","potion-img tip-dynamic svelte-12re2j5"),y(n,"background","url('"+v+"ui/inventory/2x3.png')"),j(n.src,a=s[3].img)||p(n,"src",a),p(n,"alt","Potion"),p(n,"data-tipped",r=s[3].fetch),j(d.src,f=v+"currency/0.png")||p(d,"src",f),p(d,"data-hasqtip","1"),p(d,"oldtitle","Gold"),p(d,"alt","Gold"),p(d,"title",""),p(d,"aria-describedby","qtip-1"),p(d,"class","svelte-12re2j5"),p($,"type","number"),p($,"min","1"),p($,"max","100"),p($,"class","svelte-12re2j5"),j(P.src,N=v+"currency/0.png")||p(P,"src",N),p(P,"alt","Gold"),p(P,"data-hasqtip","1"),p(P,"oldtitle","Gold"),p(P,"title",""),p(P,"aria-describedby","qtip-1"),p(P,"class","svelte-12re2j5"),p(c,"class","prices svelte-12re2j5"),p(e,"class","potion svelte-12re2j5"),this.first=e},m(t,a){m(t,e,a),k(e,n),k(e,i),k(e,c),k(c,o),k(c,l),k(c,d),k(c,S),k(c,$),x($,s[3].count),k(c,_),k(c,z),k(c,C),k(c,G),k(c,P),k(e,T),D.block.m(e,D.anchor=null),D.mount=()=>e,D.anchor=Z,k(e,Z),A||(L=q($,"input",X),A=!0)},p(t,e){s=t,1&e&&!j(n.src,a=s[3].img)&&p(n,"src",a),1&e&&r!==(r=s[3].fetch)&&p(n,"data-tipped",r),1&e&&V!==(V=Y(s[3].price)+"")&&w(o,V),1&e&&E($.value)!==s[3].count&&x($,s[3].count),1&e&&W!==(W=Y(s[3].price*s[3].count)+"")&&w(C,W),D.ctx=s,1&e&&B!==(B=s[3].promise)&&I(B,D)||M(D,s,e)},d(t){t&&b(e),D.block.d(),D.token=null,D=null,A=!1,L()}}}function W(t){let s,e=[],n=new Map,a=l(t[0])
const r=t=>t[3].id
for(let s=0;s<a.length;s+=1){let i=L(t,a,s),c=r(i)
n.set(c,e[s]=V(c,i))}return{c(){s=u("div")
for(let t=0;t<e.length;t+=1)e[t].c()
p(s,"id","bazaar"),p(s,"class","svelte-12re2j5")},m(t,n){m(t,s,n)
for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(s,null)},p(t,[i]){3&i&&(a=l(t[0]),e=d(e,i,r,1,t,a,n,s,S,V,null,L))},i:f,o:f,d(t){t&&b(s)
for(let t=0;t<e.length;t+=1)e[t].d()}}}function X(t,s,e){let{potions:n=[]}=s
return t.$$set=t=>{"potions"in t&&e(0,n=t.potions)},[n,async function(t){var s,e
$("bazaar","buyButton"),t.promise=(s=t.id,e=t.count,r(Z,A,s,e))
const n=await t.promise
n.s?_(`You successfully purchased ${t.count} "${n.r[0].n}"`):_(n.e.message)},function(t,s){t[s].count=E(this.value),e(0,n)}]}class D extends i{constructor(t){super(),c(this,t,X,W,o,{potions:0})}}const F=e=>({id:Number(s(e)),img:e.children[0].src,fetch:e.firstChild.dataset.tipped,price:B(N(T('img[src*="/currency/"]',t(e).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function H(){if(!C()||G())return
const s=P('a[href*="&subcmd=buyitem&"][onclick]',C())
if(!s.length)return
const e=t(t(s[0]).parentElement)
var n
n=s.map(F),new D({target:e.parentElement,props:{potions:n}}),e.remove()}export{H as default}
//# sourceMappingURL=bazaar-DIiQTQin.js.map
