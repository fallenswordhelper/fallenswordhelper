import{bb as t,f as n,S as e,P as s,Q as c,au as a,U as l,bD as o,bE as r,av as i,_ as u,ax as f,bH as $,T as d,a3 as m,bp as p,bF as g,bG as h,aq as b,cn as v,i as x,cX as k,R as w,d1 as y,d2 as S,bJ as _,bq as T,V as j,Z as C,d3 as E,a0 as H,bK as I,a1 as L,d4 as N,a9 as P,bL as q,a4 as A,a5 as B,l as F,F as G,b7 as Q,d as R,am as D,ao as J}from"./calfSystem-BldO1y8X.js"
import{c as K}from"./createStyle-DKSmWjdQ.js"
import{i as M,S as U}from"./SelectInST-rLAtQhVr.js"
import{L as V}from"./LinkButton-uS4wZBSJ.js"
function W(n){return t(`[${n}]`)}async function X(){const t=await M()
return t?.items?{items:{...n((e=t).items.map((t=>[t.inv_id,t]))),...e.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}}}:t
var e}function Z(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function z(t){let n
return{c(){n=m("p"),n.textContent=`${t[32].message}`,p(n,"color","red")},m(t,e){u(t,n,e)},p:d,i:d,o:d,d(t){t&&l(n)}}}function O(t){let n,e,s,c
const a=[tt,Y],i=[]
function $(t,n){return t[3]?.items?0:1}return n=$(t),e=i[n]=a[n](t),{c(){e.c(),s=f()},m(t,e){i[n].m(t,e),u(t,s,e),c=!0},p(t,c){let l=n
n=$(t),n===l?i[n].p(t,c):(g(),o(i[l],1,1,(()=>{i[l]=null})),h(),e=i[n],e?e.p(t,c):(e=i[n]=a[n](t),e.c()),r(e,1),e.m(s.parentNode,s))},i(t){c||(r(e),c=!0)},o(t){o(e),c=!1},d(t){t&&l(s),i[n].d(t)}}}function Y(t){let n
return{c(){n=m("p"),n.textContent="Server Error",p(n,"color","red")},m(t,e){u(t,n,e)},p:d,i:d,o:d,d(t){t&&l(n)}}}function tt(t){let n,e,s,c,a,i,f,$,d,b,v,x,k,F,G,Q,R,D,J,K
s=new V({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),a=new V({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),a.$on("click",t[10])
let M=t[0]&&st(t),W=w(t[5]()),X=[]
for(let n=0;n<W.length;n+=1)X[n]=lt(Z(t,W,n))
const z=t=>o(X[t],1,1,(()=>{X[t]=null}))
function O(n){t[14](n)}let Y={}
return void 0!==t[2]&&(Y.inSt=t[2]),x=new U({props:Y}),y.push((()=>S(x,"inSt",O))),x.$on("toggle",t[15]),Q=new V({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),Q.$on("click",t[7]),{c(){n=m("div"),e=P("Select:\n      "),q(s.$$.fragment),c=A(),q(a.$$.fragment),i=A(),M&&M.c(),f=A()
for(let t=0;t<X.length;t+=1)X[t].c()
$=P("\n      How many:"),d=m("input"),b=A(),v=m("div"),q(x.$$.fragment),F=A(),G=m("div"),R=m("div"),q(Q.$$.fragment),B(d,"class","custominput svelte-1divdfe"),B(d,"type","text"),B(n,"class","svelte-1divdfe"),B(v,"class","svelte-1divdfe"),p(R,"display","contents"),p(R,"--button-color","blue"),B(G,"class","svelte-1divdfe")},m(l,o){u(l,n,o),H(n,e),I(s,n,null),H(n,c),I(a,n,null),H(n,i),M&&M.m(n,null),H(n,f)
for(let t=0;t<X.length;t+=1)X[t]&&X[t].m(n,null)
H(n,$),H(n,d),C(d,t[1]),u(l,b,o),u(l,v,o),I(x,v,null),u(l,F,o),u(l,G,o),H(G,R),I(Q,R,null),D=!0,J||(K=[L(d,"input",t[13]),N(t[8].call(null,v))],J=!0)},p(t,e){const c={}
4&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const l={}
if(4&e[1]&&(l.$$scope={dirty:e,ctx:t}),a.$set(l),t[0]?M?(M.p(t,e),1&e[0]&&r(M,1)):(M=st(t),M.c(),r(M,1),M.m(n,f)):M&&(g(),o(M,1,1,(()=>{M=null})),h()),96&e[0]){let s
for(W=w(t[5]()),s=0;s<W.length;s+=1){const c=Z(t,W,s)
X[s]?(X[s].p(c,e),r(X[s],1)):(X[s]=lt(c),X[s].c(),r(X[s],1),X[s].m(n,$))}for(g(),s=W.length;s<X.length;s+=1)z(s)
h()}2&e[0]&&d.value!==t[1]&&C(d,t[1])
const i={}
!k&&4&e[0]&&(k=!0,i.inSt=t[2],E((()=>k=!1))),x.$set(i)
const u={}
4&e[1]&&(u.$$scope={dirty:e,ctx:t}),Q.$set(u)},i(t){if(!D){r(s.$$.fragment,t),r(a.$$.fragment,t),r(M)
for(let t=0;t<W.length;t+=1)r(X[t])
r(x.$$.fragment,t),r(Q.$$.fragment,t),D=!0}},o(t){o(s.$$.fragment,t),o(a.$$.fragment,t),o(M),X=X.filter(Boolean)
for(let t=0;t<X.length;t+=1)o(X[t])
o(x.$$.fragment,t),o(Q.$$.fragment,t),D=!1},d(t){t&&(l(n),l(b),l(v),l(F),l(G)),_(s),_(a),M&&M.d(),T(X,t),_(x),_(Q),J=!1,j(K)}}}function nt(t){let n
return{c(){n=P("All Items")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function et(t){let n
return{c(){n=P("All Resources")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function st(t){let n,e
return n=new V({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){q(n.$$.fragment)},m(t,s){I(n,t,s),e=!0},p(t,e){const s={}
4&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){o(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function ct(t){let n
return{c(){n=P("Guild Tagged")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function at(t){let n,e=t[28]+""
return{c(){n=P(e)},m(t,e){u(t,n,e)},p:d,d(t){t&&l(n)}}}function lt(t){let n,e
return n=new V({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){q(n.$$.fragment)},m(t,s){I(n,t,s),e=!0},p(e,s){t=e
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){o(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function ot(t){let n
return{c(){n=P("Perfect")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function rt(t){return{c:d,m:d,p:d,i:d,o:d,d:d}}function it(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:rt,then:O,catch:z,error:32,blocks:[,,,]}
return a(t[4](),s),{c(){n=f(),s.block.c()},m(t,c){u(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){i(s,t=n,e)},i(t){e||(r(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
o(n)}e=!1},d(t){t&&l(n),s.block.d(t),s.token=null,s=null}}}function ut(t,n,e){const s=$()
let{wantsTagged:c=0}=n,a=null,l=null,o=null
a="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n?.item_id]]
const i=t=>[t,o.items[t.id.split("-").at(-1)]],u=([,t])=>l||!t.is_in_st,f=([t])=>t
function d(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(i).filter(R(s,e)).filter(u).slice(0,function(){let t=parseInt(a,10)
return D(t)&&(t=G(o.items).length),"createsecure"===J.subcmd?Math.min(100,t):t}()).map(f).forEach(Q)}function m(t){const n=F(".selectable-item")
n.length&&(F('[class$="-create-selected"] div').forEach(Q),d(t,n))}function p(t){s("select",t),m(t)}const g=([,t])=>t.is_in_st,h=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,a,l,o,async function(){e(3,o=await X())},function(){return W(b("sendClasses"))??W(v.sendClasses)},p,function(){s("perf"),m("-99")},function(t){o.items.fshHasST&&x(t,K(G(o.items).filter(g).map(h).join("\n")))},()=>p("-1"),()=>p("-2"),()=>p("-3"),t=>p(t),function(){a=this.value,e(1,a)},function(t){l=t,e(2,l)},function(n){k.call(this,t,n)}]}class ft extends e{constructor(t){super(),s(this,t,ut,it,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-DVuulLX6.js.map
