import{i as t}from"./instantiate-upFtXRx7.js"
import{S as s,L as n,M as e,bj as a,bk as o,be as l,bh as r,bl as c,O as i,P as u,Q as f,T as m,U as p,X as b,a0 as h,a3 as d,s as $,aQ as g,aS as x,m as v,q as k,ax as j,a8 as y,as as S,di as L,_ as M,N as _,am as C,b6 as q,bt as w,a4 as z}from"./calfSystem-CUgWHLtG.js"
import{h as B,u as F}from"./await_block-DpKGh93y.js"
import{M as N}from"./ModalTitled-DwG8wP1C.js"
import"./Modal-BIzCdrcz.js"
function T(t,s,n){const e=t.slice()
return e[7]=s[n][0],e[8]=s[n][1],e[9]=s[n][2],e}function Q(t){return{c:M,m:M,p:M,d:M}}function H(t){let s,n=_(t[1]),e=[]
for(let s=0;s<n.length;s+=1)e[s]=O(T(t,n,s))
return{c(){for(let t=0;t<e.length;t+=1)e[t].c()
s=C()},m(t,n){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,n)
m(t,s,n)},p(t,a){if(2&a){let o
for(n=_(t[1]),o=0;o<n.length;o+=1){const l=T(t,n,o)
e[o]?e[o].p(l,a):(e[o]=O(l),e[o].c(),e[o].m(s.parentNode,s))}for(;o<e.length;o+=1)e[o].d(1)
e.length=n.length}},d(t){t&&h(s),q(e,t)}}}function O(t){let s,n,e,a,o,l,r,c,b,$,g,x=t[8]+"",v=t[9]+""
return{c(){s=i("br"),n=u(),e=i("span"),a=i("a"),o=d(x),r=d("\n          says:"),c=u(),b=i("q"),$=d(v),g=u(),f(a,"href",l=""+(w+t[7])),f(a,"class","svelte-14ozmrh")},m(t,l){m(t,s,l),m(t,n,l),m(t,e,l),p(e,a),p(a,o),p(e,r),m(t,c,l),m(t,b,l),p(b,$),p(b,g)},p(t,s){2&s&&x!==(x=t[8]+"")&&z(o,x),2&s&&l!==(l=""+(w+t[7]))&&f(a,"href",l),2&s&&v!==(v=t[9]+"")&&z($,v)},d(t){t&&(h(s),h(n),h(e),h(c),h(b))}}}function P(t){return{c:M,m:M,p:M,d:M}}function U(t){let s,n,e,a,o,l,r={ctx:t,current:null,token:null,hasCatch:!1,pending:P,then:H,catch:Q}
return B(t[3](),r),{c(){s=i("div"),n=i("button"),n.textContent="Clear",e=u(),a=i("div"),r.block.c(),f(n,"type","button"),f(s,"class","top svelte-14ozmrh"),f(a,"class","textContainer svelte-14ozmrh")},m(c,i){m(c,s,i),p(s,n),m(c,e,i),m(c,a,i),r.block.m(a,r.anchor=null),r.mount=()=>a,r.anchor=null,o||(l=b(n,"click",t[4]),o=!0)},p(s,n){F(r,t=s,n)},d(t){t&&(h(s),h(e),h(a)),r.block.d(),r.token=null,r=null,o=!1,l()}}}function X(t){let s
return{c(){s=d("FS Box Log")},m(t,n){m(t,s,n)},d(t){t&&h(s)}}}function A(t){let s,n
return s=new N({props:{visible:t[0],$$slots:{title:[X],default:[U]},$$scope:{ctx:t}}}),s.$on("close",t[2]),{c(){a(s.$$.fragment)},m(t,e){o(s,t,e),n=!0},p(t,[n]){const e={}
1&n&&(e.visible=t[0]),4098&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){n||(l(s.$$.fragment,t),n=!0)},o(t){r(s.$$.fragment,t),n=!1},d(t){c(s,t)}}}function D(t,s,n){let{visible:e=!0}=s,a=[]
function o(t){const s=v({innerHTML:t}),n=k("a",s)
return[Number(j(n?.href,"player_id")),y(n),S(k("q",s))]}const l=([t,s,n])=>t&&L(s)&&L(n)
return t.$$set=t=>{"visible"in t&&n(0,e=t.visible)},[e,a,function(){$("FS Box Log","close"),n(0,e=!1)},async function(){const t=await g("fsh_fsboxcontent")??""
n(1,a=t.split("<br>").map(o).filter(l))},function(){x("fsh_fsboxcontent",""),$("FS Box Log","clear storage"),n(1,a=[])}]}class E extends s{constructor(t){super(),n(this,t,D,A,e,{visible:0})}}const G={visible:!0}
let I=0
function J(){I=t(G,I,E)}export{J as default}
//# sourceMappingURL=fsboxlog-DMRjxTLd.js.map
