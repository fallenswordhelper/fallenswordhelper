import{i as t}from"./instantiate-zhKnqr-J.js"
import{S as e,J as n,K as o,b9 as s,ba as l,b4 as a,b7 as i,bb as r,bD as c,L as u,N as d,P as m,X as f,_ as v,s as p,aX as b,M as $,ah as h,W as x,aY as C}from"./calfSystem-ZGMc097r.js"
import{h as g}from"./await_block-CsWaGax3.js"
import{e as k}from"./each-_TSpIEJe.js"
import{M as j}from"./ModalTitled-5363YNHY.js"
import"./Modal-kYRuawAb.js"
function w(t,e,n){const o=t.slice()
return o[3]=e[n].name,o[4]=e[n].items,o[6]=n,o}function M(t,e,n){const o=t.slice()
return o[7]=e[n].l,o[8]=e[n].n,o}function S(t){let e
return{c(){e=u("p"),e.textContent=`${t[11].message}`,b(e,"color","red")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function y(t){let e,n,o,s,l,a,i,r,c,d,v,p,b,x,C,g,j,M,S,y,A,W=[],X=new Map,Y=k(t[2].r)
const _=t=>t[6]
for(let e=0;e<Y.length;e+=1){let n=w(t,Y,e),o=_(n)
X.set(o,W[e]=R(o,n))}return{c(){e=u("div"),e.textContent="Combat Set",n=$(),o=u("div"),o.textContent="Helmet",s=$(),l=u("div"),l.textContent="Armor",a=$(),i=u("div"),i.textContent="Gloves",r=$(),c=u("div"),c.textContent="Boots",d=$(),v=u("div"),v.textContent="Weapon",p=$(),b=u("div"),b.textContent="Shield",x=$(),C=u("div"),C.textContent="Ring",g=$(),j=u("div"),j.textContent="Amulet",M=$(),S=u("div"),S.textContent="Rune",y=$()
for(let t=0;t<W.length;t+=1)W[t].c()
A=h()},m(t,u){m(t,e,u),m(t,n,u),m(t,o,u),m(t,s,u),m(t,l,u),m(t,a,u),m(t,i,u),m(t,r,u),m(t,c,u),m(t,d,u),m(t,v,u),m(t,p,u),m(t,b,u),m(t,x,u),m(t,C,u),m(t,g,u),m(t,j,u),m(t,M,u),m(t,S,u),m(t,y,u)
for(let e=0;e<W.length;e+=1)W[e]&&W[e].m(t,u)
m(t,A,u)},d(t){t&&(f(e),f(n),f(o),f(s),f(l),f(a),f(i),f(r),f(c),f(d),f(v),f(p),f(b),f(x),f(C),f(g),f(j),f(M),f(S),f(y),f(A))
for(let e=0;e<W.length;e+=1)W[e].d(t)}}}function A(t){let e
return{c(){e=u("div"),e.textContent=`${t[7]} ${t[8]}`,d(e,"class","data svelte-awuikt")},m(t,n){m(t,e,n)},p:x,d(t){t&&f(e)}}}function R(t,e){let n,o,s,l=k(e[4].sort(B)),a=[]
for(let t=0;t<l.length;t+=1)a[t]=A(M(e,l,t))
return{key:t,first:null,c(){n=u("div"),n.textContent=`${e[3]}`,o=$()
for(let t=0;t<a.length;t+=1)a[t].c()
s=h(),d(n,"class","data svelte-awuikt"),this.first=n},m(t,e){m(t,n,e),m(t,o,e)
for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(t,e)
m(t,s,e)},p:x,d(t){t&&(f(n),f(o),f(s)),C(a,t)}}}function W(t){let e
return{c(){e=u("p"),e.textContent="loading..."},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function X(t){let e,n={ctx:t,current:null,token:null,hasCatch:!0,pending:W,then:y,catch:S,value:2,error:11}
return g(c(),n),{c(){e=u("div"),n.block.c(),d(e,"class","container svelte-awuikt")},m(t,o){m(t,e,o),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(e,n){t=e},d(t){t&&f(e),n.block.d(),n.token=null,n=null}}}function Y(t){let e
return{c(){e=v("Combat Set Manager")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function _(t){let e,n
return e=new j({props:{visible:t[0],$$slots:{title:[Y],default:[X]},$$scope:{ctx:t}}}),e.$on("close",t[1]),{c(){s(e.$$.fragment)},m(t,o){l(e,t,o),n=!0},p(t,[n]){const o={}
1&n&&(o.visible=t[0]),4096&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}const B=({t:t},{t:e})=>t-e
function D(t,e,n){let{visible:o=!0}=e
return t.$$set=t=>{"visible"in t&&n(0,o=t.visible)},[o,function(){p("setmgr","close"),n(0,o=!1)}]}var G=class extends e{constructor(t){super(),n(this,t,D,_,o,{visible:0})}}
const H={visible:!0}
let J=0
function K(){J=t(H,J,G)}export{K as default}
//# sourceMappingURL=setmgr-s2OmwfRC.js.map
