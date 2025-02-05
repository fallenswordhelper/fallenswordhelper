import{S as t,P as n,Q as s,bJ as e,bD as a,bE as o,bK as l,bL as c,au as r,U as i,av as u,_ as f,a0 as b,a1 as m,a3 as d,a4 as p,a5 as h,a9 as $,s as g,bw as x,dV as v,bx as k,n as y,q as L,aQ as S,ad as q,aH as C,T as _,R as w,bq as z,ax as B,a8 as F,bV as M,dR as T}from"./calfSystem-BAeDn21M.js"
import{M as j}from"./ModalTitled-BSDwuZlT.js"
function H(t,n,s){const e=t.slice()
return e[7]=n[s][0],e[8]=n[s][1],e[9]=n[s][2],e}function N(t){return{c:_,m:_,p:_,d:_}}function Q(t){let n,s=w(t[1]),e=[]
for(let n=0;n<s.length;n+=1)e[n]=R(H(t,s,n))
return{c(){for(let t=0;t<e.length;t+=1)e[t].c()
n=B()},m(t,s){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,s)
f(t,n,s)},p(t,a){if(2&a){let o
for(s=w(t[1]),o=0;o<s.length;o+=1){const l=H(t,s,o)
e[o]?e[o].p(l,a):(e[o]=R(l),e[o].c(),e[o].m(n.parentNode,n))}for(;o<e.length;o+=1)e[o].d(1)
e.length=s.length}},d(t){t&&i(n),z(e,t)}}}function R(t){let n,s,e,a,o,l,c,r,u,m,g,x=t[8]+"",v=t[9]+""
return{c(){n=d("br"),s=p(),e=d("span"),a=d("a"),o=$(x),c=$("\n          says:"),r=p(),u=d("q"),m=$(v),g=p(),h(a,"href",l=""+(M+t[7])),h(a,"class","svelte-14ozmrh")},m(t,l){f(t,n,l),f(t,s,l),f(t,e,l),b(e,a),b(a,o),b(e,c),f(t,r,l),f(t,u,l),b(u,m),b(u,g)},p(t,n){2&n&&x!==(x=t[8]+"")&&F(o,x),2&n&&l!==(l=""+(M+t[7]))&&h(a,"href",l),2&n&&v!==(v=t[9]+"")&&F(m,v)},d(t){t&&(i(n),i(s),i(e),i(r),i(u))}}}function V(t){return{c:_,m:_,p:_,d:_}}function D(t){let n,s,e,a,o,l,c={ctx:t,current:null,token:null,hasCatch:!1,pending:V,then:Q,catch:N}
return r(t[3](),c),{c(){n=d("div"),s=d("button"),s.textContent="Clear",e=p(),a=d("div"),c.block.c(),h(s,"type","button"),h(n,"class","top svelte-14ozmrh"),h(a,"class","textContainer svelte-14ozmrh")},m(r,i){f(r,n,i),b(n,s),f(r,e,i),f(r,a,i),c.block.m(a,c.anchor=null),c.mount=()=>a,c.anchor=null,o||(l=m(s,"click",t[4]),o=!0)},p(n,s){u(c,t=n,s)},d(t){t&&(i(n),i(e),i(a)),c.block.d(),c.token=null,c=null,o=!1,l()}}}function E(t){let n
return{c(){n=$("FS Box Log")},m(t,s){f(t,n,s)},d(t){t&&i(n)}}}function J(t){let n,s
return n=new j({props:{visible:t[0],$$slots:{title:[E],default:[D]},$$scope:{ctx:t}}}),n.$on("close",t[2]),{c(){c(n.$$.fragment)},m(t,e){l(n,t,e),s=!0},p(t,[s]){const e={}
1&s&&(e.visible=t[0]),4098&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){s||(o(n.$$.fragment,t),s=!0)},o(t){a(n.$$.fragment,t),s=!1},d(t){e(n,t)}}}function K(t,n,s){let{visible:e=!0}=n,a=[]
function o(t){const n=y({innerHTML:t}),s=L("a",n)
return[Number(S(s?.href,"player_id")),q(s),C(L("q",n))]}const l=([t,n,s])=>t&&v(n)&&v(s)
return t.$$set=t=>{"visible"in t&&s(0,e=t.visible)},[e,a,function(){g("FS Box Log","close"),s(0,e=!1)},async function(){const t=await x("fsh_fsboxcontent")??""
s(1,a=t.split("<br>").map(o).filter(l))},function(){k("fsh_fsboxcontent",""),g("FS Box Log","clear storage"),s(1,a=[])}]}class P extends t{constructor(t){super(),n(this,t,K,J,s,{visible:0})}}const U={visible:!0}
let A=0
function G(){A=T(U,A,P)}export{G as default}
//# sourceMappingURL=fsboxlog-B5oMVF8v.js.map
