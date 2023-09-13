import{i as t}from"./instantiate-880b172e.js"
import{S as s,L as n,M as e,bf as o,bg as a,ba as r,bd as l,bh as c,N as i,O as f,P as u,R as m,T as p,W as b,Z as h,a1 as d,n as g,l as $,q as v,as as x,a5 as j,an as k,cH as y,Y as L,aj as M,b0 as S,bp as C,a2 as _}from"./calfSystem-2f15e074.js"
import{h as q,u as w}from"./await_block-d535654a.js"
import{e as z}from"./each-d93fc3a2.js"
import{M as B}from"./ModalTitled-4705b2f9.js"
import{g as F,s as N}from"./idb-28aa7d4a.js"
import"./Modal-d504dd2a.js"
function T(t,s,n){const e=t.slice()
return e[7]=s[n][0],e[8]=s[n][1],e[9]=s[n][2],e}function H(t){return{c:L,m:L,p:L,d:L}}function Z(t){let s,n=z(t[1]),e=[]
for(let s=0;s<n.length;s+=1)e[s]=O(T(t,n,s))
return{c(){for(let t=0;t<e.length;t+=1)e[t].c()
s=M()},m(t,n){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,n)
m(t,s,n)},p(t,o){if(2&o){let a
for(n=z(t[1]),a=0;a<n.length;a+=1){const r=T(t,n,a)
e[a]?e[a].p(r,o):(e[a]=O(r),e[a].c(),e[a].m(s.parentNode,s))}for(;a<e.length;a+=1)e[a].d(1)
e.length=n.length}},d(t){t&&h(s),S(e,t)}}}function O(t){let s,n,e,o,a,r,l,c,b,g,$,v=t[8]+"",x=t[9]+""
return{c(){s=i("br"),n=f(),e=i("span"),o=i("a"),a=d(v),l=d("\n          says:"),c=f(),b=i("q"),g=d(x),$=f(),u(o,"href",r=""+(C+t[7])),u(o,"class","svelte-14ozmrh")},m(t,r){m(t,s,r),m(t,n,r),m(t,e,r),p(e,o),p(o,a),p(e,l),m(t,c,r),m(t,b,r),p(b,g),p(b,$)},p(t,s){2&s&&v!==(v=t[8]+"")&&_(a,v),2&s&&r!==(r=""+(C+t[7]))&&u(o,"href",r),2&s&&x!==(x=t[9]+"")&&_(g,x)},d(t){t&&(h(s),h(n),h(e),h(c),h(b))}}}function P(t){return{c:L,m:L,p:L,d:L}}function R(t){let s,n,e,o,a,r,l={ctx:t,current:null,token:null,hasCatch:!1,pending:P,then:Z,catch:H}
return q(t[3](),l),{c(){s=i("div"),n=i("button"),n.textContent="Clear",e=f(),o=i("div"),l.block.c(),u(n,"type","button"),u(s,"class","top svelte-14ozmrh"),u(o,"class","textContainer svelte-14ozmrh")},m(c,i){m(c,s,i),p(s,n),m(c,e,i),m(c,o,i),l.block.m(o,l.anchor=null),l.mount=()=>o,l.anchor=null,a||(r=b(n,"click",t[4]),a=!0)},p(s,n){w(l,t=s,n)},d(t){t&&(h(s),h(e),h(o)),l.block.d(),l.token=null,l=null,a=!1,r()}}}function W(t){let s
return{c(){s=d("FS Box Log")},m(t,n){m(t,s,n)},d(t){t&&h(s)}}}function Y(t){let s,n
return s=new B({props:{visible:t[0],$$slots:{title:[W],default:[R]},$$scope:{ctx:t}}}),s.$on("close",t[2]),{c(){o(s.$$.fragment)},m(t,e){a(s,t,e),n=!0},p(t,[n]){const e={}
1&n&&(e.visible=t[0]),4098&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){n||(r(s.$$.fragment,t),n=!0)},o(t){l(s.$$.fragment,t),n=!1},d(t){c(s,t)}}}function A(t,s,n){let{visible:e=!0}=s,o=[]
function a(t){const s=$({innerHTML:t}),n=v("a",s)
return[Number(x(n?.href,"player_id")),j(n),k(v("q",s))]}const r=([t,s,n])=>t&&y(s)&&y(n)
return t.$$set=t=>{"visible"in t&&n(0,e=t.visible)},[e,o,function(){g("FS Box Log","close"),n(0,e=!1)},async function(){const t=await F("fsh_fsboxcontent")??""
n(1,o=t.split("<br>").map(a).filter(r))},function(){N("fsh_fsboxcontent",""),g("FS Box Log","clear storage"),n(1,o=[])}]}var D=class extends s{constructor(t){super(),n(this,t,A,Y,e,{visible:0})}}
const E={visible:!0}
let G=0
function I(){G=t(E,G,D)}export{I as default}
//# sourceMappingURL=fsboxlog-9e66372f.js.map
