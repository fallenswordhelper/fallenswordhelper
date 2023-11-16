import{i as t}from"./instantiate-zhKnqr-J.js"
import{S as s,J as n,K as e,b9 as o,ba as a,b4 as r,b7 as l,bb as c,L as i,M as f,N as u,P as m,Q as p,U as b,X as h,_ as d,s as g,m as $,q as v,aq as x,a3 as j,al as k,cG as y,W as L,ah as M,aY as S,bj as _,a0 as q}from"./calfSystem-dEoRVG2S.js"
import{h as C,u as w}from"./await_block-LFXQ2_nx.js"
import{e as z}from"./each-rfoBEd-I.js"
import{M as B}from"./ModalTitled-TC2wuLwx.js"
import{g as F,s as N}from"./idb-ZfKvo_GP.js"
import"./Modal-9pDKNTPt.js"
function T(t,s,n){const e=t.slice()
return e[7]=s[n][0],e[8]=s[n][1],e[9]=s[n][2],e}function Y(t){return{c:L,m:L,p:L,d:L}}function G(t){let s,n=z(t[1]),e=[]
for(let s=0;s<n.length;s+=1)e[s]=H(T(t,n,s))
return{c(){for(let t=0;t<e.length;t+=1)e[t].c()
s=M()},m(t,n){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,n)
m(t,s,n)},p(t,o){if(2&o){let a
for(n=z(t[1]),a=0;a<n.length;a+=1){const r=T(t,n,a)
e[a]?e[a].p(r,o):(e[a]=H(r),e[a].c(),e[a].m(s.parentNode,s))}for(;a<e.length;a+=1)e[a].d(1)
e.length=n.length}},d(t){t&&h(s),S(e,t)}}}function H(t){let s,n,e,o,a,r,l,c,b,g,$,v=t[8]+"",x=t[9]+""
return{c(){s=i("br"),n=f(),e=i("span"),o=i("a"),a=d(v),l=d("\n          says:"),c=f(),b=i("q"),g=d(x),$=f(),u(o,"href",r=""+(_+t[7])),u(o,"class","svelte-14ozmrh")},m(t,r){m(t,s,r),m(t,n,r),m(t,e,r),p(e,o),p(o,a),p(e,l),m(t,c,r),m(t,b,r),p(b,g),p(b,$)},p(t,s){2&s&&v!==(v=t[8]+"")&&q(a,v),2&s&&r!==(r=""+(_+t[7]))&&u(o,"href",r),2&s&&x!==(x=t[9]+"")&&q(g,x)},d(t){t&&(h(s),h(n),h(e),h(c),h(b))}}}function J(t){return{c:L,m:L,p:L,d:L}}function K(t){let s,n,e,o,a,r,l={ctx:t,current:null,token:null,hasCatch:!1,pending:J,then:G,catch:Y}
return C(t[3](),l),{c(){s=i("div"),n=i("button"),n.textContent="Clear",e=f(),o=i("div"),l.block.c(),u(n,"type","button"),u(s,"class","top svelte-14ozmrh"),u(o,"class","textContainer svelte-14ozmrh")},m(c,i){m(c,s,i),p(s,n),m(c,e,i),m(c,o,i),l.block.m(o,l.anchor=null),l.mount=()=>o,l.anchor=null,a||(r=b(n,"click",t[4]),a=!0)},p(s,n){w(l,t=s,n)},d(t){t&&(h(s),h(e),h(o)),l.block.d(),l.token=null,l=null,a=!1,r()}}}function P(t){let s
return{c(){s=d("FS Box Log")},m(t,n){m(t,s,n)},d(t){t&&h(s)}}}function Q(t){let s,n
return s=new B({props:{visible:t[0],$$slots:{title:[P],default:[K]},$$scope:{ctx:t}}}),s.$on("close",t[2]),{c(){o(s.$$.fragment)},m(t,e){a(s,t,e),n=!0},p(t,[n]){const e={}
1&n&&(e.visible=t[0]),4098&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){n||(r(s.$$.fragment,t),n=!0)},o(t){l(s.$$.fragment,t),n=!1},d(t){c(s,t)}}}function U(t,s,n){let{visible:e=!0}=s,o=[]
function a(t){const s=$({innerHTML:t}),n=v("a",s)
return[Number(x(n?.href,"player_id")),j(n),k(v("q",s))]}const r=([t,s,n])=>t&&y(s)&&y(n)
return t.$$set=t=>{"visible"in t&&n(0,e=t.visible)},[e,o,function(){g("FS Box Log","close"),n(0,e=!1)},async function(){const t=await F("fsh_fsboxcontent")??""
n(1,o=t.split("<br>").map(a).filter(r))},function(){N("fsh_fsboxcontent",""),g("FS Box Log","clear storage"),n(1,o=[])}]}var W=class extends s{constructor(t){super(),n(this,t,U,Q,e,{visible:0})}}
const X={visible:!0}
let A=0
function D(){A=t(X,A,W)}export{D as default}
//# sourceMappingURL=fsboxlog-UpCuRRBx.js.map
