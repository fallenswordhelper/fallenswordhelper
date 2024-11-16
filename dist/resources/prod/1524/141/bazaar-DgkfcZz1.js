import{c as t}from"./closestTable-Ddgm5m0P.js"
import{g as s}from"./getId-CEBzpjjo.js"
import{a as n,d as e,bN as a,$ as c,S as i,L as r,M as o,N as l,Z as u,O as p,R as m,a2 as d,cZ as f,U as h,X as b,b6 as y,P as g,c_ as v,Q as z,T as k,W as x,V as q,b5 as j,aO as w,_ as S,a0 as E,s as G,ae as $,p as _,w as C,n as N,q as P,as as B}from"./calfSystem-Blt4DbaE.js"
import{i as M}from"./intValue-C7nTQec1.js"
import{h as O,u as R}from"./await_block-Bf7EOqQ9.js"
import{a as T}from"./addCommas-C_h2HN8s.js"
function V(t,s){return n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})}async function Y(t,s){const n=await e({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})
if(!n)return{s:!1}
const c=a(n)
return"You purchased the item!"===c?{r:Array(s),s:!0}:{e:{message:c},s:!1}}function Z(t,s,n){const e=t.slice()
return e[3]=s[n],e[4]=s,e[5]=n,e}function A(t){return{c:u,m:u,p:u,d:u}}function I(t){let s,n,e
return{c(){s=h("button"),s.textContent="Buy",b(s,"type","button"),b(s,"class","custombutton")},m(a,c){m(a,s,c),n||(e=d(s,"click",(function(){f(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),n=!0)},p(s,n){t=s},d(t){t&&p(s),n=!1,e()}}}function L(t){let s
return{c(){s=h("span"),b(s,"class","fshSpinner fshSpinner12")},m(t,n){m(t,s,n)},p:u,d(t){t&&p(s)}}}function Q(t,s){let n,e,a,c,i,r,o,l,u,f,S,E,G,$,_,C,N,P,B,M,V,Y,Z,Q=T(s[3].price)+"",U=T(s[3].price*s[3].count)+""
function W(){s[2].call(E,s[4],s[5])}let X={ctx:s,current:null,token:null,hasCatch:!1,pending:L,then:I,catch:A}
return O(M=s[3].promise,X),{key:t,first:null,c(){n=h("div"),e=h("img"),i=x(),r=h("div"),o=q(Q),l=x(),u=h("img"),S=q("\n        x\n        "),E=h("input"),G=h("br"),$=q("\n        = "),_=q(U),C=x(),N=h("img"),B=x(),X.block.c(),V=x(),b(e,"class","potion-img tip-dynamic svelte-193rhzl"),j(e,"background","url('"+w+"ui/inventory/2x3.png')"),y(e.src,a=s[3].img)||b(e,"src",a),b(e,"alt","Potion"),b(e,"data-tipped",c=s[3].fetch),y(u.src,f=w+"currency/0.png")||b(u,"src",f),b(u,"data-hasqtip","1"),b(u,"oldtitle","Gold"),b(u,"alt","Gold"),b(u,"title",""),b(u,"aria-describedby","qtip-1"),b(u,"class","svelte-193rhzl"),b(E,"type","number"),b(E,"min","1"),b(E,"max","100"),b(E,"class","svelte-193rhzl"),y(N.src,P=w+"currency/0.png")||b(N,"src",P),b(N,"alt","Gold"),b(N,"data-hasqtip","1"),b(N,"oldtitle","Gold"),b(N,"title",""),b(N,"aria-describedby","qtip-1"),b(N,"class","svelte-193rhzl"),b(r,"class","prices svelte-193rhzl"),b(n,"class","potion svelte-193rhzl"),this.first=n},m(t,a){m(t,n,a),k(n,e),k(n,i),k(n,r),k(r,o),k(r,l),k(r,u),k(r,S),k(r,E),z(E,s[3].count),k(r,G),k(r,$),k(r,_),k(r,C),k(r,N),k(n,B),X.block.m(n,X.anchor=null),X.mount=()=>n,X.anchor=V,k(n,V),Y||(Z=d(E,"input",W),Y=!0)},p(t,n){s=t,1&n&&!y(e.src,a=s[3].img)&&b(e,"src",a),1&n&&c!==(c=s[3].fetch)&&b(e,"data-tipped",c),1&n&&Q!==(Q=T(s[3].price)+"")&&g(o,Q),1&n&&v(E.value)!==s[3].count&&z(E,s[3].count),1&n&&U!==(U=T(s[3].price*s[3].count)+"")&&g(_,U),X.ctx=s,1&n&&M!==(M=s[3].promise)&&O(M,X)||R(X,s,n)},d(t){t&&p(n),X.block.d(),X.token=null,X=null,Y=!1,Z()}}}function U(t){let s,n=[],e=new Map,a=l(t[0])
const c=t=>t[3].id
for(let s=0;s<a.length;s+=1){let i=Z(t,a,s),r=c(i)
e.set(r,n[s]=Q(r,i))}return{c(){s=h("div")
for(let t=0;t<n.length;t+=1)n[t].c()
b(s,"id","bazaar"),b(s,"class","svelte-193rhzl")},m(t,e){m(t,s,e)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(s,null)},p(t,[i]){3&i&&(a=l(t[0]),n=S(n,i,c,1,t,a,e,s,E,Q,null,Z))},i:u,o:u,d(t){t&&p(s)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function W(t,s,n){let{potions:e=[]}=s
return t.$$set=t=>{"potions"in t&&n(0,e=t.potions)},[e,async function(t){var s,n
G("bazaar","buyButton"),t.promise=(s=t.id,n=t.count,c(V,Y,s,n))
const e=await t.promise
e.s?$(`You successfully purchased ${t.count} "${e.r[0].n}"`):$(e.e.message)},function(t,s){t[s].count=v(this.value),n(0,e)}]}class X extends i{constructor(t){super(),r(this,t,W,U,o,{potions:0})}}const D=s=>({p:s,ccy:P('img[src*="/currency/"]',t(s).nextElementSibling)})
const F=({p:t,ccy:n})=>({id:Number(s(t)),img:t.children[0].src,fetch:t.firstChild.dataset.tipped,price:M(B(n.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function H(s){const n=s.map(D)
if(n.some((({ccy:t})=>!t)))return
const e=t(t(s[0]).parentElement)
var a
a=n.map(F),new X({target:e.parentElement,props:{potions:a}}),e.remove()}function J(){if(!_()||C())return
const t=N('a[href*="&subcmd=buyitem&"][onclick]',_())
t.length&&H(t)}export{J as default}
//# sourceMappingURL=bazaar-DgkfcZz1.js.map
