import{c as t}from"./closestTable-DvVVJKGM.js"
import{g as s}from"./getId-CEBzpjjo.js"
import{a as n,e,cd as a,$ as c,S as r,O as i,P as o,Q as l,R as u,U as p,W as m,a1 as d,a2 as f,a3 as h,a4 as b,as as y,T as g,a7 as v,bo as z,b5 as k,br as x,X as q,Z as S,_ as E,a8 as $,dp as j,at as w,s as C,af as G,dq as A,p as P,x as _,k as B,q as T,aA as Y,aF as F}from"./calfSystem-ChzN4Q-P.js"
import{a as I}from"./addCommas-C_h2HN8s.js"
function J(t,s){return n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})}async function M(t,s){const n=await e({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:s})
if(!n)return{s:!1}
const c=a(n)
return"You purchased the item!"===c?{r:Array(s),s:!0}:{e:{message:c},s:!1}}function N(t,s,n){const e=t.slice()
return e[3]=s[n],e[4]=s,e[5]=n,e}function O(t){return{c:h,m:h,p:h,d:h}}function Q(t){let s,n,e
return{c(){s=u("button"),s.textContent="Buy",p(s,"type","button"),p(s,"class","custombutton")},m(a,c){m(a,s,c),n||(e=E(s,"click",(function(){A(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),n=!0)},p(s,n){t=s},d(t){t&&b(s),n=!1,e()}}}function R(t){let s
return{c(){s=u("span"),p(s,"class","fshSpinner fshSpinner12")},m(t,n){m(t,s,n)},p:h,d(t){t&&b(s)}}}function U(t,s){let n,e,a,c,r,i,o,l,d,f,h,C,G,A,P,_,B,T,Y,F,J,M,N,U=I(s[3].price)+"",W=I(s[3].price*s[3].count)+""
function X(){s[2].call(C,s[4],s[5])}let Z={ctx:s,current:null,token:null,hasCatch:!1,pending:R,then:Q,catch:O}
return y(F=s[3].promise,Z),{key:t,first:null,c(){n=u("div"),e=u("img"),r=g(),i=u("div"),o=v(U),l=g(),d=u("img"),h=v("\n        x\n        "),C=u("input"),G=u("br"),A=v("\n        = "),P=v(W),_=g(),B=u("img"),Y=g(),Z.block.c(),J=g(),p(e,"class","potion-img tip-dynamic svelte-193rhzl"),z(e,"background","url('"+k+"ui/inventory/2x3.png')"),x(e.src,a=s[3].img)||p(e,"src",a),p(e,"alt","Potion"),p(e,"data-tipped",c=s[3].fetch),x(d.src,f=k+"currency/0.png")||p(d,"src",f),p(d,"data-hasqtip","1"),p(d,"oldtitle","Gold"),p(d,"alt","Gold"),p(d,"title",""),p(d,"aria-describedby","qtip-1"),p(d,"class","svelte-193rhzl"),p(C,"type","number"),p(C,"min","1"),p(C,"max","100"),p(C,"class","svelte-193rhzl"),x(B.src,T=k+"currency/0.png")||p(B,"src",T),p(B,"alt","Gold"),p(B,"data-hasqtip","1"),p(B,"oldtitle","Gold"),p(B,"title",""),p(B,"aria-describedby","qtip-1"),p(B,"class","svelte-193rhzl"),p(i,"class","prices svelte-193rhzl"),p(n,"class","potion svelte-193rhzl"),this.first=n},m(t,a){m(t,n,a),q(n,e),q(n,r),q(n,i),q(i,o),q(i,l),q(i,d),q(i,h),q(i,C),S(C,s[3].count),q(i,G),q(i,A),q(i,P),q(i,_),q(i,B),q(n,Y),Z.block.m(n,Z.anchor=null),Z.mount=()=>n,Z.anchor=J,q(n,J),M||(N=E(C,"input",X),M=!0)},p(t,n){s=t,1&n&&!x(e.src,a=s[3].img)&&p(e,"src",a),1&n&&c!==(c=s[3].fetch)&&p(e,"data-tipped",c),1&n&&U!==(U=I(s[3].price)+"")&&$(o,U),1&n&&j(C.value)!==s[3].count&&S(C,s[3].count),1&n&&W!==(W=I(s[3].price*s[3].count)+"")&&$(P,W),Z.ctx=s,1&n&&F!==(F=s[3].promise)&&y(F,Z)||w(Z,s,n)},d(t){t&&b(n),Z.block.d(),Z.token=null,Z=null,M=!1,N()}}}function W(t){let s,n=[],e=new Map,a=l(t[0])
const c=t=>t[3].id
for(let s=0;s<a.length;s+=1){let r=N(t,a,s),i=c(r)
e.set(i,n[s]=U(i,r))}return{c(){s=u("div")
for(let t=0;t<n.length;t+=1)n[t].c()
p(s,"id","bazaar"),p(s,"class","svelte-193rhzl")},m(t,e){m(t,s,e)
for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(s,null)},p(t,[r]){3&r&&(a=l(t[0]),n=d(n,r,c,1,t,a,e,s,f,U,null,N))},i:h,o:h,d(t){t&&b(s)
for(let t=0;t<n.length;t+=1)n[t].d()}}}function X(t,s,n){let{potions:e=[]}=s
return t.$$set=t=>{"potions"in t&&n(0,e=t.potions)},[e,async function(t){var s,n
C("bazaar","buyButton"),t.promise=(s=t.id,n=t.count,c(J,M,s,n))
const e=await t.promise
e.s?G(`You successfully purchased ${t.count} "${e.r[0].n}"`):G(e.e.message)},function(t,s){t[s].count=j(this.value),n(0,e)}]}class Z extends r{constructor(t){super(),i(this,t,X,W,o,{potions:0})}}const D=s=>({p:s,ccy:T('img[src*="/currency/"]',t(s).nextElementSibling)})
const H=({p:t,ccy:n})=>({id:Number(s(t)),img:t.children[0].src,fetch:t.firstChild.dataset.tipped,price:Y(F(n.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function K(s){const n=s.map(D)
if(n.some((({ccy:t})=>!t)))return
const e=t(t(s[0]).parentElement)
var a
a=n.map(H),new Z({target:e.parentElement,props:{potions:a}}),e.remove()}function L(){if(!P()||_())return
const t=B('a[href*="&subcmd=buyitem&"][onclick]',P())
t.length&&K(t)}export{L as default}
//# sourceMappingURL=bazaar-DamcWxhm.js.map
