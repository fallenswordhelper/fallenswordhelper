import{c as t}from"./closestTable-23acbcda.js"
import{g as e}from"./getId-e4d83057.js"
import{a as s,d as n,bD as a,$ as r,S as i,L as c,M as o,N as l,P as u,R as p,Y as m,Z as d,O as f,a1 as h,a$ as b,aL as g,b2 as y,T as v,V as j,W as k,a2 as x,cM as q,a8 as $,cN as w,j as E,an as S,q as C}from"./calfSystem-2f15e074.js"
import{i as G}from"./intValue-e1798d0a.js"
import{h as z,u as M}from"./await_block-d535654a.js"
import{e as N,u as P,d as T}from"./each-d93fc3a2.js"
import{a as Y}from"./addCommas-47d6aaa1.js"
function _(t,e){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})}async function I(t,e){const s=await n({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e}),r=a(s)
return"You purchased the item!"===r?{r:Array(e),s:!0}:{e:{message:r},s:!1}}function L(t,e,s){const n=t.slice()
return n[3]=e[s],n[4]=e,n[5]=s,n}function V(t){return{c:m,m:m,p:m,d:m}}function Z(t){let e,s,n
return{c(){e=l("button"),e.textContent="Buy",u(e,"type","button"),u(e,"class","custombutton")},m(a,r){p(a,e,r),s||(n=k(e,"click",(function(){w(t[1](t[3]))&&t[1](t[3]).apply(this,arguments)})),s=!0)},p(e,s){t=e},d(t){t&&d(e),s=!1,n()}}}function A(t){let e
return{c(){e=l("span"),u(e,"class","fshSpinner fshSpinner12")},m(t,s){p(t,e,s)},p:m,d(t){t&&d(e)}}}function B(t,e){let s,n,a,r,i,c,o,m,$,w,E,S,C,G,N,P,T,_,I,L,B,D,O,R=Y(e[3].price)+"",W=Y(e[3].price*e[3].count)+""
function F(){e[2].call(S,e[4],e[5])}let H={ctx:e,current:null,token:null,hasCatch:!1,pending:A,then:Z,catch:V}
return z(L=e[3].promise,H),{key:t,first:null,c(){s=l("div"),n=l("img"),i=f(),c=l("div"),o=h(R),m=f(),$=l("img"),E=h("\n        x\n        "),S=l("input"),C=l("br"),G=h("\n        = "),N=h(W),P=f(),T=l("img"),I=f(),H.block.c(),B=f(),u(n,"class","potion-img tip-dynamic svelte-12re2j5"),b(n,"background","url('"+g+"ui/inventory/2x3.png')"),y(n.src,a=e[3].img)||u(n,"src",a),u(n,"alt","Potion"),u(n,"data-tipped",r=e[3].fetch),y($.src,w=g+"currency/0.png")||u($,"src",w),u($,"data-hasqtip","1"),u($,"oldtitle","Gold"),u($,"alt","Gold"),u($,"title",""),u($,"aria-describedby","qtip-1"),u($,"class","svelte-12re2j5"),u(S,"type","number"),u(S,"min","1"),u(S,"max","100"),u(S,"class","svelte-12re2j5"),y(T.src,_=g+"currency/0.png")||u(T,"src",_),u(T,"alt","Gold"),u(T,"data-hasqtip","1"),u(T,"oldtitle","Gold"),u(T,"title",""),u(T,"aria-describedby","qtip-1"),u(T,"class","svelte-12re2j5"),u(c,"class","prices svelte-12re2j5"),u(s,"class","potion svelte-12re2j5"),this.first=s},m(t,a){p(t,s,a),v(s,n),v(s,i),v(s,c),v(c,o),v(c,m),v(c,$),v(c,E),v(c,S),j(S,e[3].count),v(c,C),v(c,G),v(c,N),v(c,P),v(c,T),v(s,I),H.block.m(s,H.anchor=null),H.mount=()=>s,H.anchor=B,v(s,B),D||(O=k(S,"input",F),D=!0)},p(t,s){e=t,1&s&&!y(n.src,a=e[3].img)&&u(n,"src",a),1&s&&r!==(r=e[3].fetch)&&u(n,"data-tipped",r),1&s&&R!==(R=Y(e[3].price)+"")&&x(o,R),1&s&&q(S.value)!==e[3].count&&j(S,e[3].count),1&s&&W!==(W=Y(e[3].price*e[3].count)+"")&&x(N,W),H.ctx=e,1&s&&L!==(L=e[3].promise)&&z(L,H)||M(H,e,s)},d(t){t&&d(s),H.block.d(),H.token=null,H=null,D=!1,O()}}}function D(t){let e,s=[],n=new Map,a=N(t[0])
const r=t=>t[3].id
for(let e=0;e<a.length;e+=1){let i=L(t,a,e),c=r(i)
n.set(c,s[e]=B(c,i))}return{c(){e=l("div")
for(let t=0;t<s.length;t+=1)s[t].c()
u(e,"id","bazaar"),u(e,"class","svelte-12re2j5")},m(t,n){p(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,[i]){3&i&&(a=N(t[0]),s=P(s,i,r,1,t,a,n,e,T,B,null,L))},i:m,o:m,d(t){t&&d(e)
for(let t=0;t<s.length;t+=1)s[t].d()}}}function O(t,e,s){let{potions:n=[]}=e
return t.$$set=t=>{"potions"in t&&s(0,n=t.potions)},[n,async function(t){var e,s
t.promise=(e=t.id,s=t.count,r(_,I,e,s))
const n=await t.promise
n.s?$(`You successfully purchased ${t.count} "${n.r[0].n}"`):$(n.e.message)},function(t,e){t[e].count=q(this.value),s(0,n)}]}class R extends i{constructor(t){super(),c(this,t,O,D,o,{potions:0})}}const W=s=>({id:Number(e(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:G(S(C('img[src*="/currency/"]',t(s).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function F(){const e=E('a[href*="cmd=buyitem"]')
if(!e.length)return
const s=t(t(e[0]).parentElement)
var n
n=e.map(W),new R({target:s.parentElement,props:{potions:n}}),s.remove()}export{F as default}
//# sourceMappingURL=bazaar-59893ea4.js.map
