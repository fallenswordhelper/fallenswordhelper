import{c as t}from"./closestTable-CvmnyUCu.js"
import{g as s}from"./getId-CEBzpjjo.js"
import{a as n,h as e,cg as a,$ as c,S as r,P as i,Q as o,R as l,T as u,U as p,W as m,X as d,_ as f,a3 as h,a5 as b,au as y,bs as g,a8 as v,dv as z,Z as k,av as x,a0 as q,a1 as S,a4 as j,a9 as w,bp as C,b8 as E,s as G,aj as $,dw as P,p as _,y as B,l as T,q as Y,aC as A,aH as H}from"./calfSystem-DiXGAkgN.js"
import{a as I}from"./addCommas-C_h2HN8s.js"
function M(t,s){return n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})}async function N(t,s){const n=await e({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})
if(!n)return{s:!1}
const c=a(n)
return"You purchased the item!"===c?{r:Array(s),s:!0}:{e:{message:c},s:!1}}function Q(t,s,n){const e=t.slice()
return e[3]=s[n],e[4]=s,e[5]=n,e}function R(t){return{c:u,m:u,p:u,d:u}}function U(t){let s,n,e
return{c(){s=h("button"),s.textContent="Buy",b(s,"type","button"),b(s,"class","custombutton")},m(a,c){f(a,s,c),n||(e=S(s,"click",(function(){P(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),n=!0)},p(s,n){t=s},d(t){t&&p(s),n=!1,e()}}}function W(t){let s
return{c(){s=h("span"),b(s,"class","fshSpinner fshSpinner12")},m(t,n){f(t,s,n)},p:u,d(t){t&&p(s)}}}function X(t,s){let n,e,a,c,r,i,o,l,u,m,d,G,$,P,_,B,T,Y,A,H,M,N,Q,X=I(s[3].price)+"",Z=I(s[3].price*s[3].count)+""
function D(){s[2].call(G,s[4],s[5])}let F={ctx:s,current:null,token:null,hasCatch:!1,pending:W,then:U,catch:R}
return y(H=s[3].promise,F),{key:t,first:null,c(){n=h("div"),e=h("img"),r=j(),i=h("div"),o=w(X),l=j(),u=h("img"),d=w("\n        x\n        "),G=h("input"),$=h("br"),P=w("\n        = "),_=w(Z),B=j(),T=h("img"),A=j(),F.block.c(),M=j(),b(e,"class","potion-img tip-dynamic svelte-193rhzl"),C(e,"background","url('"+E+"ui/inventory/2x3.png')"),g(e.src,a=s[3].img)||b(e,"src",a),b(e,"alt","Potion"),b(e,"data-tipped",c=s[3].fetch),g(u.src,m=E+"currency/0.png")||b(u,"src",m),b(u,"data-hasqtip","1"),b(u,"oldtitle","Gold"),b(u,"alt","Gold"),b(u,"title",""),b(u,"aria-describedby","qtip-1"),b(u,"class","svelte-193rhzl"),b(G,"type","number"),b(G,"min","1"),b(G,"max","100"),b(G,"class","svelte-193rhzl"),g(T.src,Y=E+"currency/0.png")||b(T,"src",Y),b(T,"alt","Gold"),b(T,"data-hasqtip","1"),b(T,"oldtitle","Gold"),b(T,"title",""),b(T,"aria-describedby","qtip-1"),b(T,"class","svelte-193rhzl"),b(i,"class","prices svelte-193rhzl"),b(n,"class","potion svelte-193rhzl"),this.first=n},m(t,a){f(t,n,a),q(n,e),q(n,r),q(n,i),q(i,o),q(i,l),q(i,u),q(i,d),q(i,G),k(G,s[3].count),q(i,$),q(i,P),q(i,_),q(i,B),q(i,T),q(n,A),F.block.m(n,F.anchor=null),F.mount=()=>n,F.anchor=M,q(n,M),N||(Q=S(G,"input",D),N=!0)},p(t,n){s=t,1&n&&!g(e.src,a=s[3].img)&&b(e,"src",a),1&n&&c!==(c=s[3].fetch)&&b(e,"data-tipped",c),1&n&&X!==(X=I(s[3].price)+"")&&v(o,X),1&n&&z(G.value)!==s[3].count&&k(G,s[3].count),1&n&&Z!==(Z=I(s[3].price*s[3].count)+"")&&v(_,Z),F.ctx=s,1&n&&H!==(H=s[3].promise)&&y(H,F)||x(F,s,n)},d(t){t&&p(n),F.block.d(),F.token=null,F=null,N=!1,Q()}}}function Z(t){let s,n=[],e=new Map,a=l(t[0])
const c=t=>t[3].id
for(let s=0;s<a.length;s+=1){let r=Q(t,a,s),i=c(r)
e.set(i,n[s]=X(i,r))}return{c(){s=h("div")
for(let t=0;t<n.length;t+=1)n[t].c()
b(s,"id","bazaar"),b(s,"class","svelte-193rhzl")},m(t,e){f(t,s,e)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(s,null)},p(t,[r]){3&r&&(a=l(t[0]),n=m(n,r,c,1,t,a,e,s,d,X,null,Q))},i:u,o:u,d(t){t&&p(s)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function D(t,s,n){let{potions:e=[]}=s
return t.$$set=t=>{"potions"in t&&n(0,e=t.potions)},[e,async function(t){var s,n
G("bazaar","buyButton"),t.promise=(s=t.id,n=t.count,c(M,N,s,n))
const e=await t.promise
e.s?$(`You successfully purchased ${t.count} "${e.r[0].n}"`):$(e.e.message)},function(t,s){t[s].count=z(this.value),n(0,e)}]}class F extends r{constructor(t){super(),i(this,t,D,Z,o,{potions:0})}}const J=s=>({p:s,ccy:Y('img[src*="/currency/"]',t(s).nextElementSibling)})
const K=({p:t,ccy:n})=>({id:Number(s(t)),img:t.children[0].src,fetch:t.firstChild.dataset.tipped,price:A(H(n.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function L(s){const n=s.map(J)
if(n.some((({ccy:t})=>!t)))return
const e=t(t(s[0]).parentElement)
var a
a=n.map(K),new F({target:e.parentElement,props:{potions:a}}),e.remove()}function O(){if(!_()||B())return
const t=T('a[href*="&subcmd=buyitem&"][onclick]',_())
t.length&&L(t)}export{O as default}
//# sourceMappingURL=bazaar-bmVAksMV.js.map
