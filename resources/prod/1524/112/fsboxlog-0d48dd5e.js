import{i as t}from"./instantiate-880b172e.js"
import{S as s,J as n,K as e,ba as o,bb as a,b5 as r,b8 as l,bc as c,L as i,M as f,N as u,P as m,Q as p,U as b,X as h,_ as d,n as g,l as $,q as v,aq as x,a3 as k,al as j,cG as y,W as L,ah as M,aZ as S,bk as _,a0 as q}from"./calfSystem-4830a18d.js"
import{h as C,u as w}from"./await_block-31b017e2.js"
import{e as z}from"./each-1f09c43f.js"
import{M as B}from"./ModalTitled-c3fc6c07.js"
import{g as F,s as N}from"./idb-7e56faaa.js"
import"./Modal-75c69e5d.js"
function T(t,s,n){const e=t.slice()
return e[7]=s[n][0],e[8]=s[n][1],e[9]=s[n][2],e}function G(t){return{c:L,m:L,p:L,d:L}}function H(t){let s,n=z(t[1]),e=[]
for(let s=0;s<n.length;s+=1)e[s]=J(T(t,n,s))
return{c(){for(let t=0;t<e.length;t+=1)e[t].c()
s=M()},m(t,n){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,n)
m(t,s,n)},p(t,o){if(2&o){let a
for(n=z(t[1]),a=0;a<n.length;a+=1){const r=T(t,n,a)
e[a]?e[a].p(r,o):(e[a]=J(r),e[a].c(),e[a].m(s.parentNode,s))}for(;a<e.length;a+=1)e[a].d(1)
e.length=n.length}},d(t){t&&h(s),S(e,t)}}}function J(t){let s,n,e,o,a,r,l,c,b,g,$,v=t[8]+"",x=t[9]+""
return{c(){s=i("br"),n=f(),e=i("span"),o=i("a"),a=d(v),l=d("\n          says:"),c=f(),b=i("q"),g=d(x),$=f(),u(o,"href",r=""+(_+t[7])),u(o,"class","svelte-14ozmrh")},m(t,r){m(t,s,r),m(t,n,r),m(t,e,r),p(e,o),p(o,a),p(e,l),m(t,c,r),m(t,b,r),p(b,g),p(b,$)},p(t,s){2&s&&v!==(v=t[8]+"")&&q(a,v),2&s&&r!==(r=""+(_+t[7]))&&u(o,"href",r),2&s&&x!==(x=t[9]+"")&&q(g,x)},d(t){t&&(h(s),h(n),h(e),h(c),h(b))}}}function K(t){return{c:L,m:L,p:L,d:L}}function P(t){let s,n,e,o,a,r,l={ctx:t,current:null,token:null,hasCatch:!1,pending:K,then:H,catch:G}
return C(t[3](),l),{c(){s=i("div"),n=i("button"),n.textContent="Clear",e=f(),o=i("div"),l.block.c(),u(n,"type","button"),u(s,"class","top svelte-14ozmrh"),u(o,"class","textContainer svelte-14ozmrh")},m(c,i){m(c,s,i),p(s,n),m(c,e,i),m(c,o,i),l.block.m(o,l.anchor=null),l.mount=()=>o,l.anchor=null,a||(r=b(n,"click",t[4]),a=!0)},p(s,n){w(l,t=s,n)},d(t){t&&(h(s),h(e),h(o)),l.block.d(),l.token=null,l=null,a=!1,r()}}}function Q(t){let s
return{c(){s=d("FS Box Log")},m(t,n){m(t,s,n)},d(t){t&&h(s)}}}function U(t){let s,n
return s=new B({props:{visible:t[0],$$slots:{title:[Q],default:[P]},$$scope:{ctx:t}}}),s.$on("close",t[2]),{c(){o(s.$$.fragment)},m(t,e){a(s,t,e),n=!0},p(t,[n]){const e={}
1&n&&(e.visible=t[0]),4098&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){n||(r(s.$$.fragment,t),n=!0)},o(t){l(s.$$.fragment,t),n=!1},d(t){c(s,t)}}}function W(t,s,n){let{visible:e=!0}=s,o=[]
function a(t){const s=$({innerHTML:t}),n=v("a",s)
return[Number(x(n?.href,"player_id")),k(n),j(v("q",s))]}const r=([t,s,n])=>t&&y(s)&&y(n)
return t.$$set=t=>{"visible"in t&&n(0,e=t.visible)},[e,o,function(){g("FS Box Log","close"),n(0,e=!1)},async function(){const t=await F("fsh_fsboxcontent")??""
n(1,o=t.split("<br>").map(a).filter(r))},function(){N("fsh_fsboxcontent",""),g("FS Box Log","clear storage"),n(1,o=[])}]}var X=class extends s{constructor(t){super(),n(this,t,W,U,e,{visible:0})}}
const Y={visible:!0}
let Z=0
function A(){Z=t(Y,Z,X)}export{A as default}
//# sourceMappingURL=fsboxlog-0d48dd5e.js.map
