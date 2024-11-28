import{c as t}from"./closestTable-BnyAbylz.js"
import{g as s}from"./getId-CEBzpjjo.js"
import{a as n,e,bN as a,$ as c,S as i,L as r,M as o,N as l,O as u,Q as p,T as m,Z as d,_ as f,a0 as h,a1 as b,P as y,a4 as g,b5 as v,aP as k,b8 as z,U as x,W as q,X as j,a5 as w,cZ as S,s as E,ab as G,c_ as $,p as _,w as C,k as P,q as N,as as B}from"./calfSystem-KuDT30_2.js"
import{i as M}from"./intValue-C7nTQec1.js"
import{h as T,u as Y}from"./await_block-BmB8vVOj.js"
import{a as Z}from"./addCommas-C_h2HN8s.js"
function A(t,s){return n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})}async function I(t,s){const n=await e({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})
if(!n)return{s:!1}
const c=a(n)
return"You purchased the item!"===c?{r:Array(s),s:!0}:{e:{message:c},s:!1}}function L(t,s,n){const e=t.slice()
return e[3]=s[n],e[4]=s,e[5]=n,e}function O(t){return{c:h,m:h,p:h,d:h}}function Q(t){let s,n,e
return{c(){s=u("button"),s.textContent="Buy",p(s,"type","button"),p(s,"class","custombutton")},m(a,c){m(a,s,c),n||(e=j(s,"click",(function(){$(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),n=!0)},p(s,n){t=s},d(t){t&&b(s),n=!1,e()}}}function R(t){let s
return{c(){s=u("span"),p(s,"class","fshSpinner fshSpinner12")},m(t,n){m(t,s,n)},p:h,d(t){t&&b(s)}}}function U(t,s){let n,e,a,c,i,r,o,l,d,f,h,E,G,$,_,C,P,N,B,M,A,I,L,U=Z(s[3].price)+"",V=Z(s[3].price*s[3].count)+""
function W(){s[2].call(E,s[4],s[5])}let X={ctx:s,current:null,token:null,hasCatch:!1,pending:R,then:Q,catch:O}
return T(M=s[3].promise,X),{key:t,first:null,c(){n=u("div"),e=u("img"),i=y(),r=u("div"),o=g(U),l=y(),d=u("img"),h=g("\n        x\n        "),E=u("input"),G=u("br"),$=g("\n        = "),_=g(V),C=y(),P=u("img"),B=y(),X.block.c(),A=y(),p(e,"class","potion-img tip-dynamic svelte-193rhzl"),v(e,"background","url('"+k+"ui/inventory/2x3.png')"),z(e.src,a=s[3].img)||p(e,"src",a),p(e,"alt","Potion"),p(e,"data-tipped",c=s[3].fetch),z(d.src,f=k+"currency/0.png")||p(d,"src",f),p(d,"data-hasqtip","1"),p(d,"oldtitle","Gold"),p(d,"alt","Gold"),p(d,"title",""),p(d,"aria-describedby","qtip-1"),p(d,"class","svelte-193rhzl"),p(E,"type","number"),p(E,"min","1"),p(E,"max","100"),p(E,"class","svelte-193rhzl"),z(P.src,N=k+"currency/0.png")||p(P,"src",N),p(P,"alt","Gold"),p(P,"data-hasqtip","1"),p(P,"oldtitle","Gold"),p(P,"title",""),p(P,"aria-describedby","qtip-1"),p(P,"class","svelte-193rhzl"),p(r,"class","prices svelte-193rhzl"),p(n,"class","potion svelte-193rhzl"),this.first=n},m(t,a){m(t,n,a),x(n,e),x(n,i),x(n,r),x(r,o),x(r,l),x(r,d),x(r,h),x(r,E),q(E,s[3].count),x(r,G),x(r,$),x(r,_),x(r,C),x(r,P),x(n,B),X.block.m(n,X.anchor=null),X.mount=()=>n,X.anchor=A,x(n,A),I||(L=j(E,"input",W),I=!0)},p(t,n){s=t,1&n&&!z(e.src,a=s[3].img)&&p(e,"src",a),1&n&&c!==(c=s[3].fetch)&&p(e,"data-tipped",c),1&n&&U!==(U=Z(s[3].price)+"")&&w(o,U),1&n&&S(E.value)!==s[3].count&&q(E,s[3].count),1&n&&V!==(V=Z(s[3].price*s[3].count)+"")&&w(_,V),X.ctx=s,1&n&&M!==(M=s[3].promise)&&T(M,X)||Y(X,s,n)},d(t){t&&b(n),X.block.d(),X.token=null,X=null,I=!1,L()}}}function V(t){let s,n=[],e=new Map,a=l(t[0])
const c=t=>t[3].id
for(let s=0;s<a.length;s+=1){let i=L(t,a,s),r=c(i)
e.set(r,n[s]=U(r,i))}return{c(){s=u("div")
for(let t=0;t<n.length;t+=1)n[t].c()
p(s,"id","bazaar"),p(s,"class","svelte-193rhzl")},m(t,e){m(t,s,e)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(s,null)},p(t,[i]){3&i&&(a=l(t[0]),n=d(n,i,c,1,t,a,e,s,f,U,null,L))},i:h,o:h,d(t){t&&b(s)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function W(t,s,n){let{potions:e=[]}=s
return t.$$set=t=>{"potions"in t&&n(0,e=t.potions)},[e,async function(t){var s,n
E("bazaar","buyButton"),t.promise=(s=t.id,n=t.count,c(A,I,s,n))
const e=await t.promise
e.s?G(`You successfully purchased ${t.count} "${e.r[0].n}"`):G(e.e.message)},function(t,s){t[s].count=S(this.value),n(0,e)}]}class X extends i{constructor(t){super(),r(this,t,W,V,o,{potions:0})}}const D=s=>({p:s,ccy:N('img[src*="/currency/"]',t(s).nextElementSibling)})
const F=({p:t,ccy:n})=>({id:Number(s(t)),img:t.children[0].src,fetch:t.firstChild.dataset.tipped,price:M(B(n.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function H(s){const n=s.map(D)
if(n.some((({ccy:t})=>!t)))return
const e=t(t(s[0]).parentElement)
var a
a=n.map(F),new X({target:e.parentElement,props:{potions:a}}),e.remove()}function J(){if(!_()||C())return
const t=P('a[href*="&subcmd=buyitem&"][onclick]',_())
t.length&&H(t)}export{J as default}
//# sourceMappingURL=bazaar-Dn2oyspB.js.map
