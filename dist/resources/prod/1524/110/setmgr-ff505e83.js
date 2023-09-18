import{i as t}from"./instantiate-880b172e.js"
import{S as e,K as n,L as o,bb as s,bc as l,b6 as i,b9 as a,bd as r,bF as c,M as u,O as d,Q as m,Y as f,a0 as v,n as p,aZ as b,N as $,ai as x,X as h,a_ as C}from"./calfSystem-929ac228.js"
import{h as g}from"./await_block-1344c2da.js"
import{e as k}from"./each-bac91e63.js"
import{M as j}from"./ModalTitled-77d1fd9a.js"
import"./Modal-b8a2fc24.js"
function w(t,e,n){const o=t.slice()
return o[3]=e[n].name,o[4]=e[n].items,o[6]=n,o}function M(t,e,n){const o=t.slice()
return o[7]=e[n].l,o[8]=e[n].n,o}function S(t){let e
return{c(){e=u("p"),e.textContent=`${t[11].message}`,b(e,"color","red")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function y(t){let e,n,o,s,l,i,a,r,c,d,v,p,b,h,C,g,j,M,S,y,A,Y=[],_=new Map,B=k(t[2].r)
const F=t=>t[6]
for(let e=0;e<B.length;e+=1){let n=w(t,B,e),o=F(n)
_.set(o,Y[e]=R(o,n))}return{c(){e=u("div"),e.textContent="Combat Set",n=$(),o=u("div"),o.textContent="Helmet",s=$(),l=u("div"),l.textContent="Armor",i=$(),a=u("div"),a.textContent="Gloves",r=$(),c=u("div"),c.textContent="Boots",d=$(),v=u("div"),v.textContent="Weapon",p=$(),b=u("div"),b.textContent="Shield",h=$(),C=u("div"),C.textContent="Ring",g=$(),j=u("div"),j.textContent="Amulet",M=$(),S=u("div"),S.textContent="Rune",y=$()
for(let t=0;t<Y.length;t+=1)Y[t].c()
A=x()},m(t,u){m(t,e,u),m(t,n,u),m(t,o,u),m(t,s,u),m(t,l,u),m(t,i,u),m(t,a,u),m(t,r,u),m(t,c,u),m(t,d,u),m(t,v,u),m(t,p,u),m(t,b,u),m(t,h,u),m(t,C,u),m(t,g,u),m(t,j,u),m(t,M,u),m(t,S,u),m(t,y,u)
for(let e=0;e<Y.length;e+=1)Y[e]&&Y[e].m(t,u)
m(t,A,u)},d(t){t&&(f(e),f(n),f(o),f(s),f(l),f(i),f(a),f(r),f(c),f(d),f(v),f(p),f(b),f(h),f(C),f(g),f(j),f(M),f(S),f(y),f(A))
for(let e=0;e<Y.length;e+=1)Y[e].d(t)}}}function A(t){let e
return{c(){e=u("div"),e.textContent=`${t[7]} ${t[8]}`,d(e,"class","data svelte-awuikt")},m(t,n){m(t,e,n)},p:h,d(t){t&&f(e)}}}function R(t,e){let n,o,s,l=k(e[4].sort(G)),i=[]
for(let t=0;t<l.length;t+=1)i[t]=A(M(e,l,t))
return{key:t,first:null,c(){n=u("div"),n.textContent=`${e[3]}`,o=$()
for(let t=0;t<i.length;t+=1)i[t].c()
s=x(),d(n,"class","data svelte-awuikt"),this.first=n},m(t,e){m(t,n,e),m(t,o,e)
for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(t,e)
m(t,s,e)},p:h,d(t){t&&(f(n),f(o),f(s)),C(i,t)}}}function Y(t){let e
return{c(){e=u("p"),e.textContent="loading..."},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function _(t){let e,n={ctx:t,current:null,token:null,hasCatch:!0,pending:Y,then:y,catch:S,value:2,error:11}
return g(c(),n),{c(){e=u("div"),n.block.c(),d(e,"class","container svelte-awuikt")},m(t,o){m(t,e,o),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(e,n){t=e},d(t){t&&f(e),n.block.d(),n.token=null,n=null}}}function B(t){let e
return{c(){e=v("Combat Set Manager")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function F(t){let e,n
return e=new j({props:{visible:t[0],$$slots:{title:[B],default:[_]},$$scope:{ctx:t}}}),e.$on("close",t[1]),{c(){s(e.$$.fragment)},m(t,o){l(e,t,o),n=!0},p(t,[n]){const o={}
1&n&&(o.visible=t[0]),4096&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}const G=({t:t},{t:e})=>t-e
function H(t,e,n){let{visible:o=!0}=e
return t.$$set=t=>{"visible"in t&&n(0,o=t.visible)},[o,function(){p("setmgr","close"),n(0,o=!1)}]}var K=class extends e{constructor(t){super(),n(this,t,H,F,o,{visible:0})}}
const L={visible:!0}
let N=0
function O(){N=t(L,N,K)}export{O as default}
//# sourceMappingURL=setmgr-ff505e83.js.map
