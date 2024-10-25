import{c as t}from"./closestTable-l_-6Im5S.js"
import{g as s}from"./getId-CEBzpjjo.js"
import{a as e,e as n,bN as a,$ as r,S as i,L as c,M as o,N as l,O as u,Q as p,T as m,Z as d,_ as f,a0 as h,a1 as b,P as g,a4 as y,b5 as v,aP as k,b8 as z,U as x,W as q,X as j,a5 as w,cZ as E,s as G,ab as S,c_ as $,p as _,w as C,k as P,as as N,q as B}from"./calfSystem-DZGU7L1H.js"
import{i as M}from"./intValue-C7nTQec1.js"
import{h as T,u as Y}from"./await_block-lE4erutR.js"
import{a as Z}from"./addCommas-C_h2HN8s.js"
function A(t,s){return e({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})}async function I(t,s){const e=await n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})
if(!e)return{s:!1}
const r=a(e)
return"You purchased the item!"===r?{r:Array(s),s:!0}:{e:{message:r},s:!1}}function L(t,s,e){const n=t.slice()
return n[3]=s[e],n[4]=s,n[5]=e,n}function O(t){return{c:h,m:h,p:h,d:h}}function Q(t){let s,e,n
return{c(){s=u("button"),s.textContent="Buy",p(s,"type","button"),p(s,"class","custombutton")},m(a,r){m(a,s,r),e||(n=j(s,"click",(function(){$(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),e=!0)},p(s,e){t=s},d(t){t&&b(s),e=!1,n()}}}function R(t){let s
return{c(){s=u("span"),p(s,"class","fshSpinner fshSpinner12")},m(t,e){m(t,s,e)},p:h,d(t){t&&b(s)}}}function U(t,s){let e,n,a,r,i,c,o,l,d,f,h,G,S,$,_,C,P,N,B,M,A,I,L,U=Z(s[3].price)+"",V=Z(s[3].price*s[3].count)+""
function W(){s[2].call(G,s[4],s[5])}let X={ctx:s,current:null,token:null,hasCatch:!1,pending:R,then:Q,catch:O}
return T(M=s[3].promise,X),{key:t,first:null,c(){e=u("div"),n=u("img"),i=g(),c=u("div"),o=y(U),l=g(),d=u("img"),h=y("\n        x\n        "),G=u("input"),S=u("br"),$=y("\n        = "),_=y(V),C=g(),P=u("img"),B=g(),X.block.c(),A=g(),p(n,"class","potion-img tip-dynamic svelte-193rhzl"),v(n,"background","url('"+k+"ui/inventory/2x3.png')"),z(n.src,a=s[3].img)||p(n,"src",a),p(n,"alt","Potion"),p(n,"data-tipped",r=s[3].fetch),z(d.src,f=k+"currency/0.png")||p(d,"src",f),p(d,"data-hasqtip","1"),p(d,"oldtitle","Gold"),p(d,"alt","Gold"),p(d,"title",""),p(d,"aria-describedby","qtip-1"),p(d,"class","svelte-193rhzl"),p(G,"type","number"),p(G,"min","1"),p(G,"max","100"),p(G,"class","svelte-193rhzl"),z(P.src,N=k+"currency/0.png")||p(P,"src",N),p(P,"alt","Gold"),p(P,"data-hasqtip","1"),p(P,"oldtitle","Gold"),p(P,"title",""),p(P,"aria-describedby","qtip-1"),p(P,"class","svelte-193rhzl"),p(c,"class","prices svelte-193rhzl"),p(e,"class","potion svelte-193rhzl"),this.first=e},m(t,a){m(t,e,a),x(e,n),x(e,i),x(e,c),x(c,o),x(c,l),x(c,d),x(c,h),x(c,G),q(G,s[3].count),x(c,S),x(c,$),x(c,_),x(c,C),x(c,P),x(e,B),X.block.m(e,X.anchor=null),X.mount=()=>e,X.anchor=A,x(e,A),I||(L=j(G,"input",W),I=!0)},p(t,e){s=t,1&e&&!z(n.src,a=s[3].img)&&p(n,"src",a),1&e&&r!==(r=s[3].fetch)&&p(n,"data-tipped",r),1&e&&U!==(U=Z(s[3].price)+"")&&w(o,U),1&e&&E(G.value)!==s[3].count&&q(G,s[3].count),1&e&&V!==(V=Z(s[3].price*s[3].count)+"")&&w(_,V),X.ctx=s,1&e&&M!==(M=s[3].promise)&&T(M,X)||Y(X,s,e)},d(t){t&&b(e),X.block.d(),X.token=null,X=null,I=!1,L()}}}function V(t){let s,e=[],n=new Map,a=l(t[0])
const r=t=>t[3].id
for(let s=0;s<a.length;s+=1){let i=L(t,a,s),c=r(i)
n.set(c,e[s]=U(c,i))}return{c(){s=u("div")
for(let t=0;t<e.length;t+=1)e[t].c()
p(s,"id","bazaar"),p(s,"class","svelte-193rhzl")},m(t,n){m(t,s,n)
for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(s,null)},p(t,[i]){3&i&&(a=l(t[0]),e=d(e,i,r,1,t,a,n,s,f,U,null,L))},i:h,o:h,d(t){t&&b(s)
for(let t=0;t<e.length;t+=1)e[t].d()}}}function W(t,s,e){let{potions:n=[]}=s
return t.$$set=t=>{"potions"in t&&e(0,n=t.potions)},[n,async function(t){var s,e
G("bazaar","buyButton"),t.promise=(s=t.id,e=t.count,r(A,I,s,e))
const n=await t.promise
n.s?S(`You successfully purchased ${t.count} "${n.r[0].n}"`):S(n.e.message)},function(t,s){t[s].count=E(this.value),e(0,n)}]}class X extends i{constructor(t){super(),c(this,t,W,V,o,{potions:0})}}const D=e=>({id:Number(s(e)),img:e.children[0].src,fetch:e.firstChild.dataset.tipped,price:M(N(B('img[src*="/currency/"]',t(e).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function F(){if(!_()||C())return
const s=P('a[href*="&subcmd=buyitem&"][onclick]',_())
if(!s.length)return
const e=t(t(s[0]).parentElement)
var n
n=s.map(D),new X({target:e.parentElement,props:{potions:n}}),e.remove()}export{F as default}
//# sourceMappingURL=bazaar-ClwBEM2I.js.map
