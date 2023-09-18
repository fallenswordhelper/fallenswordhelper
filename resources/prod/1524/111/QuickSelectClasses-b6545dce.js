import{aM as t,f as n,S as e,K as s,L as c,ai as o,Q as a,b6 as l,b9 as r,Y as i,ba as u,ae as f,bH as $,i as m,c9 as d,M as p,aZ as g,X as h,b7 as b,b8 as v,j as k,C as x,ca as w,cb as y,a0 as S,bb as _,N as j,O as T,R as C,bc as N,U as E,V as H,cp as I,cc as L,bd as M,a_ as A,Z as B,aw as K,c as P,ac as Q}from"./calfSystem-abb16b0d.js"
import{h as R,u as Y}from"./await_block-78969f55.js"
import{e as Z}from"./each-13c4feae.js"
import{c as G}from"./createStyle-deebe923.js"
import{i as O,S as U}from"./SelectInST-2c32f199.js"
import{L as V}from"./LinkButton-e3c794a4.js"
import{n as X}from"./numberIsNaN-a40c3bbb.js"
function q(n){return t(`[${n}]`)}async function z(){const t=await O()
return t?.items?{items:{...n((e=t).items.map((t=>[t.inv_id,t]))),...e.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}}}:t
var e}function D(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function F(t){let n
return{c(){n=p("p"),n.textContent=`${t[32].message}`,g(n,"color","red")},m(t,e){a(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function J(t){let n,e,s,c
const u=[tt,W],f=[]
function $(t,n){return t[3]?.items?0:1}return n=$(t),e=f[n]=u[n](t),{c(){e.c(),s=o()},m(t,e){f[n].m(t,e),a(t,s,e),c=!0},p(t,c){let o=n
n=$(t),n===o?f[n].p(t,c):(b(),r(f[o],1,1,(()=>{f[o]=null})),v(),e=f[n],e?e.p(t,c):(e=f[n]=u[n](t),e.c()),l(e,1),e.m(s.parentNode,s))},i(t){c||(l(e),c=!0)},o(t){r(e),c=!1},d(t){t&&i(s),f[n].d(t)}}}function W(t){let n
return{c(){n=p("p"),n.textContent="Server Error",g(n,"color","red")},m(t,e){a(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function tt(t){let n,e,s,c,o,u,f,$,m,d,h,k,x,K,P,Q,R,Y,G,O
s=new V({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),o=new V({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),o.$on("click",t[10])
let X=t[0]&&st(t),q=Z(t[5]()),z=[]
for(let n=0;n<q.length;n+=1)z[n]=at(D(t,q,n))
const F=t=>r(z[t],1,1,(()=>{z[t]=null}))
function J(n){t[14](n)}let W={}
return void 0!==t[2]&&(W.inSt=t[2]),k=new U({props:W}),w.push((()=>y(k,"inSt",J))),k.$on("toggle",t[15]),Q=new V({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),Q.$on("click",t[7]),{c(){n=p("div"),e=S("Select:\n      "),_(s.$$.fragment),c=j(),_(o.$$.fragment),u=j(),X&&X.c(),f=j()
for(let t=0;t<z.length;t+=1)z[t].c()
$=S("\n      How many:"),m=p("input"),d=j(),h=p("div"),_(k.$$.fragment),K=j(),P=p("div"),R=p("div"),_(Q.$$.fragment),T(m,"class","custominput svelte-1divdfe"),T(m,"type","text"),T(n,"class","svelte-1divdfe"),T(h,"class","svelte-1divdfe"),g(R,"display","contents"),g(R,"--button-color","blue"),T(P,"class","svelte-1divdfe")},m(l,r){a(l,n,r),C(n,e),N(s,n,null),C(n,c),N(o,n,null),C(n,u),X&&X.m(n,null),C(n,f)
for(let t=0;t<z.length;t+=1)z[t]&&z[t].m(n,null)
C(n,$),C(n,m),E(m,t[1]),a(l,d,r),a(l,h,r),N(k,h,null),a(l,K,r),a(l,P,r),C(P,R),N(Q,R,null),Y=!0,G||(O=[H(m,"input",t[13]),I(t[8].call(null,h))],G=!0)},p(t,e){const c={}
4&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const a={}
if(4&e[1]&&(a.$$scope={dirty:e,ctx:t}),o.$set(a),t[0]?X?(X.p(t,e),1&e[0]&&l(X,1)):(X=st(t),X.c(),l(X,1),X.m(n,f)):X&&(b(),r(X,1,1,(()=>{X=null})),v()),96&e[0]){let s
for(q=Z(t[5]()),s=0;s<q.length;s+=1){const c=D(t,q,s)
z[s]?(z[s].p(c,e),l(z[s],1)):(z[s]=at(c),z[s].c(),l(z[s],1),z[s].m(n,$))}for(b(),s=q.length;s<z.length;s+=1)F(s)
v()}2&e[0]&&m.value!==t[1]&&E(m,t[1])
const i={}
!x&&4&e[0]&&(x=!0,i.inSt=t[2],L((()=>x=!1))),k.$set(i)
const u={}
4&e[1]&&(u.$$scope={dirty:e,ctx:t}),Q.$set(u)},i(t){if(!Y){l(s.$$.fragment,t),l(o.$$.fragment,t),l(X)
for(let t=0;t<q.length;t+=1)l(z[t])
l(k.$$.fragment,t),l(Q.$$.fragment,t),Y=!0}},o(t){r(s.$$.fragment,t),r(o.$$.fragment,t),r(X),z=z.filter(Boolean)
for(let t=0;t<z.length;t+=1)r(z[t])
r(k.$$.fragment,t),r(Q.$$.fragment,t),Y=!1},d(t){t&&(i(n),i(d),i(h),i(K),i(P)),M(s),M(o),X&&X.d(),A(z,t),M(k),M(Q),G=!1,B(O)}}}function nt(t){let n
return{c(){n=S("All Items")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function et(t){let n
return{c(){n=S("All Resources")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function st(t){let n,e
return n=new V({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){_(n.$$.fragment)},m(t,s){N(n,t,s),e=!0},p(t,e){const s={}
4&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(l(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){M(n,t)}}}function ct(t){let n
return{c(){n=S("Guild Tagged")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function ot(t){let n,e=t[28]+""
return{c(){n=S(e)},m(t,e){a(t,n,e)},p:h,d(t){t&&i(n)}}}function at(t){let n,e
return n=new V({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){_(n.$$.fragment)},m(t,s){N(n,t,s),e=!0},p(e,s){t=e
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(l(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){M(n,t)}}}function lt(t){let n
return{c(){n=S("Perfect")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function rt(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function it(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:rt,then:J,catch:F,error:32,blocks:[,,,]}
return R(t[4](),s),{c(){n=o(),s.block.c()},m(t,c){a(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){Y(s,t=n,e)},i(t){e||(l(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
r(n)}e=!1},d(t){t&&i(n),s.block.d(t),s.token=null,s=null}}}function ut(t,n,e){const s=u()
let{wantsTagged:c=0}=n,o=null,a=null,l=null
o="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n.item_id]]
const i=t=>[t,l.items[t.id.split("-").at(-1)]],p=([,t])=>a||!t.is_in_st,g=([t])=>t
function h(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(i).filter(P(s,e)).filter(p).slice(0,function(){let t=parseInt(o,10)
return X(t)&&(t=x(l.items).length),"createsecure"===Q.subcmd?Math.min(100,t):t}()).map(g).forEach(K)}function b(t){const n=k(".selectable-item")
n.length&&(k('[class$="-create-selected"] div').forEach(K),h(t,n))}function v(t){s("select",t),b(t)}const w=([,t])=>t.is_in_st,y=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,o,a,l,async function(){e(3,l=await z())},function(){return q(f("sendClasses"))??q($.sendClasses)},v,function(){s("perf"),b("-99")},function(t){l.items.fshHasST&&m(t,G(x(l.items).filter(w).map(y).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){o=this.value,e(1,o)},function(t){a=t,e(2,a)},function(n){d.call(this,t,n)}]}class ft extends e{constructor(t){super(),s(this,t,ut,it,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-b6545dce.js.map
