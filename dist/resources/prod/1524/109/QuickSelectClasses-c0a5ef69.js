import{f as t,aO as e,S as n,L as s,M as c,aj as o,R as a,ba as l,bd as r,Z as i,be as f,af as u,bJ as $,i as m,cb as d,N as p,a$ as g,Y as h,bb as b,bc as v,cc as k,cd as x,a1 as w,bf as y,O as S,P as _,T as j,bg as T,V as N,W as C,cr as I,ce as H,bh as L,b0 as M,_ as P,j as A,C as B,ax as E,c as G,ad as O}from"./calfSystem-2f15e074.js"
import{h as R,u as Z}from"./await_block-d535654a.js"
import{e as J}from"./each-d93fc3a2.js"
import{g as Q}from"./getInventory-bd13fe4f.js"
import{c as V}from"./createStyle-f5197d38.js"
import{L as W}from"./LinkButton-5d5c853c.js"
import{n as Y}from"./numberIsNaN-a40c3bbb.js"
import{S as q}from"./SelectInST-e4b67956.js"
async function z(){const e=await Q()
return e?.items?{items:{...t((n=e).items.map((t=>[t.inv_id,t]))),...n.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}},folders:n.folders}:e
var n}function D(t){return e(`[${t}]`)}function F(t,e,n){const s=t.slice()
return s[28]=e[n][0],s[29]=e[n][1],s}function K(t){let e
return{c(){e=p("p"),e.textContent=`${t[32].message}`,g(e,"color","red")},m(t,n){a(t,e,n)},p:h,i:h,o:h,d(t){t&&i(e)}}}function U(t){let e,n,s=t[3]?.items&&X(t)
return{c(){s&&s.c(),e=o()},m(t,c){s&&s.m(t,c),a(t,e,c),n=!0},p(t,n){t[3]?.items?s?(s.p(t,n),8&n[0]&&l(s,1)):(s=X(t),s.c(),l(s,1),s.m(e.parentNode,e)):s&&(b(),r(s,1,1,(()=>{s=null})),v())},i(t){n||(l(s),n=!0)},o(t){r(s),n=!1},d(t){t&&i(e),s&&s.d(t)}}}function X(t){let e,n,s,c,o,f,u,$,m,d,h,A,B,E,G,O,R,Z,Q,V
s=new W({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),o=new W({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),o.$on("click",t[10])
let Y=t[0]&&nt(t),z=J(t[5]()),D=[]
for(let e=0;e<z.length;e+=1)D[e]=ot(F(t,z,e))
const K=t=>r(D[t],1,1,(()=>{D[t]=null}))
function U(e){t[14](e)}let X={}
return void 0!==t[2]&&(X.inSt=t[2]),A=new q({props:X}),k.push((()=>x(A,"inSt",U))),A.$on("toggle",t[15]),O=new W({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),O.$on("click",t[7]),{c(){e=p("div"),n=w("Select:\n      "),y(s.$$.fragment),c=S(),y(o.$$.fragment),f=S(),Y&&Y.c(),u=S()
for(let t=0;t<D.length;t+=1)D[t].c()
$=w("\n      How many:"),m=p("input"),d=S(),h=p("div"),y(A.$$.fragment),E=S(),G=p("div"),R=p("div"),y(O.$$.fragment),_(m,"class","custominput svelte-1divdfe"),_(m,"type","text"),_(e,"class","svelte-1divdfe"),_(h,"class","svelte-1divdfe"),g(R,"display","contents"),g(R,"--button-color","blue"),_(G,"class","svelte-1divdfe")},m(l,r){a(l,e,r),j(e,n),T(s,e,null),j(e,c),T(o,e,null),j(e,f),Y&&Y.m(e,null),j(e,u)
for(let t=0;t<D.length;t+=1)D[t]&&D[t].m(e,null)
j(e,$),j(e,m),N(m,t[1]),a(l,d,r),a(l,h,r),T(A,h,null),a(l,E,r),a(l,G,r),j(G,R),T(O,R,null),Z=!0,Q||(V=[C(m,"input",t[13]),I(t[8].call(null,h))],Q=!0)},p(t,n){const c={}
4&n[1]&&(c.$$scope={dirty:n,ctx:t}),s.$set(c)
const a={}
if(4&n[1]&&(a.$$scope={dirty:n,ctx:t}),o.$set(a),t[0]?Y?(Y.p(t,n),1&n[0]&&l(Y,1)):(Y=nt(t),Y.c(),l(Y,1),Y.m(e,u)):Y&&(b(),r(Y,1,1,(()=>{Y=null})),v()),96&n[0]){let s
for(z=J(t[5]()),s=0;s<z.length;s+=1){const c=F(t,z,s)
D[s]?(D[s].p(c,n),l(D[s],1)):(D[s]=ot(c),D[s].c(),l(D[s],1),D[s].m(e,$))}for(b(),s=z.length;s<D.length;s+=1)K(s)
v()}2&n[0]&&m.value!==t[1]&&N(m,t[1])
const i={}
!B&&4&n[0]&&(B=!0,i.inSt=t[2],H((()=>B=!1))),A.$set(i)
const f={}
4&n[1]&&(f.$$scope={dirty:n,ctx:t}),O.$set(f)},i(t){if(!Z){l(s.$$.fragment,t),l(o.$$.fragment,t),l(Y)
for(let t=0;t<z.length;t+=1)l(D[t])
l(A.$$.fragment,t),l(O.$$.fragment,t),Z=!0}},o(t){r(s.$$.fragment,t),r(o.$$.fragment,t),r(Y),D=D.filter(Boolean)
for(let t=0;t<D.length;t+=1)r(D[t])
r(A.$$.fragment,t),r(O.$$.fragment,t),Z=!1},d(t){t&&(i(e),i(d),i(h),i(E),i(G)),L(s),L(o),Y&&Y.d(),M(D,t),L(A),L(O),Q=!1,P(V)}}}function tt(t){let e
return{c(){e=w("All Items")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function et(t){let e
return{c(){e=w("All Resources")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function nt(t){let e,n
return e=new W({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),e.$on("click",t[11]),{c(){y(e.$$.fragment)},m(t,s){T(e,t,s),n=!0},p(t,n){const s={}
4&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function st(t){let e
return{c(){e=w("Guild Tagged")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function ct(t){let e,n=t[28]+""
return{c(){e=w(n)},m(t,n){a(t,e,n)},p:h,d(t){t&&i(e)}}}function ot(t){let e,n
return e=new W({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[12](t[29])})),{c(){y(e.$$.fragment)},m(t,s){T(e,t,s),n=!0},p(n,s){t=n
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function at(t){let e
return{c(){e=w("Perfect")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function lt(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function rt(t){let e,n,s={ctx:t,current:null,token:null,hasCatch:!0,pending:lt,then:U,catch:K,error:32,blocks:[,,,]}
return R(t[4](),s),{c(){e=o(),s.block.c()},m(t,c){a(t,e,c),s.block.m(t,s.anchor=c),s.mount=()=>e.parentNode,s.anchor=e,n=!0},p(e,n){Z(s,t=e,n)},i(t){n||(l(s.block),n=!0)},o(t){for(let t=0;t<3;t+=1){const e=s.blocks[t]
r(e)}n=!1},d(t){t&&i(e),s.block.d(t),s.token=null,s=null}}}function it(t,e,n){const s=f()
let{wantsTagged:c=0}=e,o=null,a=null,l=null
o="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,e])=>12===e.type],[t=>-3===t,(t,[,e])=>e.guild_tag>=0],[t=>-99===t,(t,[,e])=>"Perfect"===e?.craft],[()=>!0,(t,[,e])=>t===e.item_id]]
const i=t=>[t,l.items[t.id.split("-").at(-1)]],p=([,t])=>a||!t.is_in_st,g=([t])=>t
function h(t,e){const n=Number(t),[,s]=r.find((([t])=>t(n)))
e.map(i).filter(G(s,n)).filter(p).slice(0,function(){let t=parseInt(o,10)
return Y(t)&&(t=B(l.items).length),"createsecure"===O.subcmd?Math.min(100,t):t}()).map(g).forEach(E)}function b(t){const e=A(".selectable-item")
e.length&&(A('[class$="-create-selected"] div').forEach(E),h(t,e))}function v(t){s("select",t),b(t)}const k=([,t])=>t.is_in_st,x=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&n(0,c=t.wantsTagged)},[c,o,a,l,async function(){n(3,l=await z())},function(){return D(u("sendClasses"))??D($.sendClasses)},v,function(){s("perf"),b("-99")},function(t){l.items.fshHasST&&m(t,V(B(l.items).filter(k).map(x).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){o=this.value,n(1,o)},function(t){a=t,n(2,a)},function(e){d.call(this,t,e)}]}class ft extends n{constructor(t){super(),s(this,t,it,rt,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-c0a5ef69.js.map
