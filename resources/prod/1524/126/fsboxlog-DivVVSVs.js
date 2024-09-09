import{i as t}from"./instantiate-upFtXRx7.js"
import{S as s,L as n,M as e,bh as a,bi as o,bc as r,bf as l,bj as c,O as i,P as u,Q as f,T as m,U as p,X as b,a0 as h,a3 as d,s as $,aO as g,aQ as v,m as x,q as k,av as j,a8 as y,aq as L,d9 as M,_ as S,N as _,am as q,b4 as C,br as w,a4 as z}from"./calfSystem-DG-hTKTe.js"
import{h as B,u as F}from"./await_block-D4X9_cLH.js"
import{M as N}from"./ModalTitled-6sbkevqG.js"
import"./Modal-CAQRcsHZ.js"
function T(t,s,n){const e=t.slice()
return e[7]=s[n][0],e[8]=s[n][1],e[9]=s[n][2],e}function O(t){return{c:S,m:S,p:S,d:S}}function Q(t){let s,n=_(t[1]),e=[]
for(let s=0;s<n.length;s+=1)e[s]=H(T(t,n,s))
return{c(){for(let t=0;t<e.length;t+=1)e[t].c()
s=q()},m(t,n){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,n)
m(t,s,n)},p(t,a){if(2&a){let o
for(n=_(t[1]),o=0;o<n.length;o+=1){const r=T(t,n,o)
e[o]?e[o].p(r,a):(e[o]=H(r),e[o].c(),e[o].m(s.parentNode,s))}for(;o<e.length;o+=1)e[o].d(1)
e.length=n.length}},d(t){t&&h(s),C(e,t)}}}function H(t){let s,n,e,a,o,r,l,c,b,$,g,v=t[8]+"",x=t[9]+""
return{c(){s=i("br"),n=u(),e=i("span"),a=i("a"),o=d(v),l=d("\n          says:"),c=u(),b=i("q"),$=d(x),g=u(),f(a,"href",r=""+(w+t[7])),f(a,"class","svelte-14ozmrh")},m(t,r){m(t,s,r),m(t,n,r),m(t,e,r),p(e,a),p(a,o),p(e,l),m(t,c,r),m(t,b,r),p(b,$),p(b,g)},p(t,s){2&s&&v!==(v=t[8]+"")&&z(o,v),2&s&&r!==(r=""+(w+t[7]))&&f(a,"href",r),2&s&&x!==(x=t[9]+"")&&z($,x)},d(t){t&&(h(s),h(n),h(e),h(c),h(b))}}}function P(t){return{c:S,m:S,p:S,d:S}}function U(t){let s,n,e,a,o,r,l={ctx:t,current:null,token:null,hasCatch:!1,pending:P,then:Q,catch:O}
return B(t[3](),l),{c(){s=i("div"),n=i("button"),n.textContent="Clear",e=u(),a=i("div"),l.block.c(),f(n,"type","button"),f(s,"class","top svelte-14ozmrh"),f(a,"class","textContainer svelte-14ozmrh")},m(c,i){m(c,s,i),p(s,n),m(c,e,i),m(c,a,i),l.block.m(a,l.anchor=null),l.mount=()=>a,l.anchor=null,o||(r=b(n,"click",t[4]),o=!0)},p(s,n){F(l,t=s,n)},d(t){t&&(h(s),h(e),h(a)),l.block.d(),l.token=null,l=null,o=!1,r()}}}function X(t){let s
return{c(){s=d("FS Box Log")},m(t,n){m(t,s,n)},d(t){t&&h(s)}}}function A(t){let s,n
return s=new N({props:{visible:t[0],$$slots:{title:[X],default:[U]},$$scope:{ctx:t}}}),s.$on("close",t[2]),{c(){a(s.$$.fragment)},m(t,e){o(s,t,e),n=!0},p(t,[n]){const e={}
1&n&&(e.visible=t[0]),4098&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){n||(r(s.$$.fragment,t),n=!0)},o(t){l(s.$$.fragment,t),n=!1},d(t){c(s,t)}}}function D(t,s,n){let{visible:e=!0}=s,a=[]
function o(t){const s=x({innerHTML:t}),n=k("a",s)
return[Number(j(n?.href,"player_id")),y(n),L(k("q",s))]}const r=([t,s,n])=>t&&M(s)&&M(n)
return t.$$set=t=>{"visible"in t&&n(0,e=t.visible)},[e,a,function(){$("FS Box Log","close"),n(0,e=!1)},async function(){const t=await g("fsh_fsboxcontent")??""
n(1,a=t.split("<br>").map(o).filter(r))},function(){v("fsh_fsboxcontent",""),$("FS Box Log","clear storage"),n(1,a=[])}]}var E=class extends s{constructor(t){super(),n(this,t,D,A,e,{visible:0})}}
const G={visible:!0}
let I=0
function J(){I=t(G,I,E)}export{J as default}
//# sourceMappingURL=fsboxlog-DivVVSVs.js.map
