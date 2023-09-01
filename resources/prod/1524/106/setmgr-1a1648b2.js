import{i as t}from"./instantiate-880b172e.js"
import{S as e,L as n,M as o,bf as s,bg as l,ba as a,bd as i,bh as r,bH as c,N as u,P as d,R as m,Z as f,a1 as v,n as p,a$ as $,O as b,aj as h,Y as x,b0 as g}from"./calfSystem-076d7a01.js"
import{h as C}from"./await_block-904981a0.js"
import{e as k}from"./each-d53d627d.js"
import{M as j}from"./ModalTitled-fcaa63c3.js"
import"./Modal-925b2b72.js"
function w(t,e,n){const o=t.slice()
return o[3]=e[n].name,o[4]=e[n].items,o[6]=n,o}function M(t,e,n){const o=t.slice()
return o[7]=e[n].l,o[8]=e[n].n,o}function S(t){let e
return{c(){e=u("p"),e.textContent=`${t[11].message}`,$(e,"color","red")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function y(t){let e,n,o,s,l,a,i,r,c,d,v,p,$,x,g,C,j,M,S,y,R,H=[],Z=new Map,B=k(t[2].r)
const G=t=>t[6]
for(let e=0;e<B.length;e+=1){let n=w(t,B,e),o=G(n)
Z.set(o,H[e]=A(o,n))}return{c(){e=u("div"),e.textContent="Combat Set",n=b(),o=u("div"),o.textContent="Helmet",s=b(),l=u("div"),l.textContent="Armor",a=b(),i=u("div"),i.textContent="Gloves",r=b(),c=u("div"),c.textContent="Boots",d=b(),v=u("div"),v.textContent="Weapon",p=b(),$=u("div"),$.textContent="Shield",x=b(),g=u("div"),g.textContent="Ring",C=b(),j=u("div"),j.textContent="Amulet",M=b(),S=u("div"),S.textContent="Rune",y=b()
for(let t=0;t<H.length;t+=1)H[t].c()
R=h()},m(t,u){m(t,e,u),m(t,n,u),m(t,o,u),m(t,s,u),m(t,l,u),m(t,a,u),m(t,i,u),m(t,r,u),m(t,c,u),m(t,d,u),m(t,v,u),m(t,p,u),m(t,$,u),m(t,x,u),m(t,g,u),m(t,C,u),m(t,j,u),m(t,M,u),m(t,S,u),m(t,y,u)
for(let e=0;e<H.length;e+=1)H[e]&&H[e].m(t,u)
m(t,R,u)},d(t){t&&(f(e),f(n),f(o),f(s),f(l),f(a),f(i),f(r),f(c),f(d),f(v),f(p),f($),f(x),f(g),f(C),f(j),f(M),f(S),f(y),f(R))
for(let e=0;e<H.length;e+=1)H[e].d(t)}}}function R(t){let e
return{c(){e=u("div"),e.textContent=`${t[7]} ${t[8]}`,d(e,"class","data svelte-awuikt")},m(t,n){m(t,e,n)},p:x,d(t){t&&f(e)}}}function A(t,e){let n,o,s,l=k(e[4].sort(L)),a=[]
for(let t=0;t<l.length;t+=1)a[t]=R(M(e,l,t))
return{key:t,first:null,c(){n=u("div"),n.textContent=`${e[3]}`,o=b()
for(let t=0;t<a.length;t+=1)a[t].c()
s=h(),d(n,"class","data svelte-awuikt"),this.first=n},m(t,e){m(t,n,e),m(t,o,e)
for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(t,e)
m(t,s,e)},p:x,d(t){t&&(f(n),f(o),f(s)),g(a,t)}}}function H(t){let e
return{c(){e=u("p"),e.textContent="loading..."},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Z(t){let e,n={ctx:t,current:null,token:null,hasCatch:!0,pending:H,then:y,catch:S,value:2,error:11}
return C(c(),n),{c(){e=u("div"),n.block.c(),d(e,"class","container svelte-awuikt")},m(t,o){m(t,e,o),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(e,n){t=e},d(t){t&&f(e),n.block.d(),n.token=null,n=null}}}function B(t){let e
return{c(){e=v("Combat Set Manager")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function G(t){let e,n
return e=new j({props:{visible:t[0],$$slots:{title:[B],default:[Z]},$$scope:{ctx:t}}}),e.$on("close",t[1]),{c(){s(e.$$.fragment)},m(t,o){l(e,t,o),n=!0},p(t,[n]){const o={}
1&n&&(o.visible=t[0]),4096&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}const L=({t:t},{t:e})=>t-e
function N(t,e,n){let{visible:o=!0}=e
return t.$$set=t=>{"visible"in t&&n(0,o=t.visible)},[o,function(){p("setmgr","close"),n(0,o=!1)}]}var O=class extends e{constructor(t){super(),n(this,t,N,G,o,{visible:0})}}
const P={visible:!0}
let T=0
function W(){T=t(P,T,O)}export{W as default}
//# sourceMappingURL=setmgr-1a1648b2.js.map
