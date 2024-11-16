import{aU as t,f as n,S as e,L as s,M as c,O as l,Z as o,R as a,U as r,b5 as i,V as u,be as f,bf as $,bg as m,bh as d,bi as p,N as g,cl as h,cm as b,b9 as v,Y as k,bj as x,bk as w,Q as y,cn as S,T as _,a2 as T,cD as j,W as C,X as N,am as I,bl as E,ai as H,bU as L,n as P,aP as U,b as A,C as B,ag as D,i as G,ck as M}from"./calfSystem-Blt4DbaE.js"
import{h as Q,u as R}from"./await_block-Bf7EOqQ9.js"
import{c as O}from"./createStyle-C5mK_M_l.js"
import{i as V,S as W}from"./SelectInST-CX3QyODd.js"
import{L as X}from"./LinkButton-CTQrdC0s.js"
import{n as Y}from"./numberIsNaN-CGkd1jiA.js"
function Z(n){return t(`[${n}]`)}async function q(){const t=await V()
return t?.items?{items:{...n((e=t).items.map((t=>[t.inv_id,t]))),...e.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}}}:t
var e}function z(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function F(t){let n
return{c(){n=r("p"),n.textContent=`${t[32].message}`,i(n,"color","red")},m(t,e){a(t,n,e)},p:o,i:o,o:o,d(t){t&&l(n)}}}function J(t){let n,e,s,c
const o=[tt,K],r=[]
function i(t,n){return t[3]?.items?0:1}return n=i(t),e=r[n]=o[n](t),{c(){e.c(),s=I()},m(t,e){r[n].m(t,e),a(t,s,e),c=!0},p(t,c){let l=n
n=i(t),n===l?r[n].p(t,c):(x(),$(r[l],1,1,(()=>{r[l]=null})),w(),e=r[n],e?e.p(t,c):(e=r[n]=o[n](t),e.c()),m(e,1),e.m(s.parentNode,s))},i(t){c||(m(e),c=!0)},o(t){$(e),c=!1},d(t){t&&l(s),r[n].d(t)}}}function K(t){let n
return{c(){n=r("p"),n.textContent="Server Error",i(n,"color","red")},m(t,e){a(t,n,e)},p:o,i:o,o:o,d(t){t&&l(n)}}}function tt(t){let n,e,s,c,o,I,E,H,L,P,U,A,B,D,G,M,Q,R,O,V
s=new X({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),o=new X({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),o.$on("click",t[10])
let Y=t[0]&&st(t),Z=g(t[5]()),q=[]
for(let n=0;n<Z.length;n+=1)q[n]=ot(z(t,Z,n))
const F=t=>$(q[t],1,1,(()=>{q[t]=null}))
function J(n){t[14](n)}let K={}
return void 0!==t[2]&&(K.inSt=t[2]),A=new W({props:K}),h.push((()=>b(A,"inSt",J))),A.$on("toggle",t[15]),M=new X({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),M.$on("click",t[7]),{c(){n=r("div"),e=u("Select:\n      "),p(s.$$.fragment),c=C(),p(o.$$.fragment),I=C(),Y&&Y.c(),E=C()
for(let t=0;t<q.length;t+=1)q[t].c()
H=u("\n      How many:"),L=r("input"),P=C(),U=r("div"),p(A.$$.fragment),D=C(),G=r("div"),Q=r("div"),p(M.$$.fragment),N(L,"class","custominput svelte-1divdfe"),N(L,"type","text"),N(n,"class","svelte-1divdfe"),N(U,"class","svelte-1divdfe"),i(Q,"display","contents"),i(Q,"--button-color","blue"),N(G,"class","svelte-1divdfe")},m(l,r){a(l,n,r),_(n,e),d(s,n,null),_(n,c),d(o,n,null),_(n,I),Y&&Y.m(n,null),_(n,E)
for(let t=0;t<q.length;t+=1)q[t]&&q[t].m(n,null)
_(n,H),_(n,L),y(L,t[1]),a(l,P,r),a(l,U,r),d(A,U,null),a(l,D,r),a(l,G,r),_(G,Q),d(M,Q,null),R=!0,O||(V=[T(L,"input",t[13]),j(t[8].call(null,U))],O=!0)},p(t,e){const c={}
4&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const l={}
if(4&e[1]&&(l.$$scope={dirty:e,ctx:t}),o.$set(l),t[0]?Y?(Y.p(t,e),1&e[0]&&m(Y,1)):(Y=st(t),Y.c(),m(Y,1),Y.m(n,E)):Y&&(x(),$(Y,1,1,(()=>{Y=null})),w()),96&e[0]){let s
for(Z=g(t[5]()),s=0;s<Z.length;s+=1){const c=z(t,Z,s)
q[s]?(q[s].p(c,e),m(q[s],1)):(q[s]=ot(c),q[s].c(),m(q[s],1),q[s].m(n,H))}for(x(),s=Z.length;s<q.length;s+=1)F(s)
w()}2&e[0]&&L.value!==t[1]&&y(L,t[1])
const a={}
!B&&4&e[0]&&(B=!0,a.inSt=t[2],S((()=>B=!1))),A.$set(a)
const r={}
4&e[1]&&(r.$$scope={dirty:e,ctx:t}),M.$set(r)},i(t){if(!R){m(s.$$.fragment,t),m(o.$$.fragment,t),m(Y)
for(let t=0;t<Z.length;t+=1)m(q[t])
m(A.$$.fragment,t),m(M.$$.fragment,t),R=!0}},o(t){$(s.$$.fragment,t),$(o.$$.fragment,t),$(Y),q=q.filter(Boolean)
for(let t=0;t<q.length;t+=1)$(q[t])
$(A.$$.fragment,t),$(M.$$.fragment,t),R=!1},d(t){t&&(l(n),l(P),l(U),l(D),l(G)),f(s),f(o),Y&&Y.d(),v(q,t),f(A),f(M),O=!1,k(V)}}}function nt(t){let n
return{c(){n=u("All Items")},m(t,e){a(t,n,e)},d(t){t&&l(n)}}}function et(t){let n
return{c(){n=u("All Resources")},m(t,e){a(t,n,e)},d(t){t&&l(n)}}}function st(t){let n,e
return n=new X({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){p(n.$$.fragment)},m(t,s){d(n,t,s),e=!0},p(t,e){const s={}
4&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){$(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function ct(t){let n
return{c(){n=u("Guild Tagged")},m(t,e){a(t,n,e)},d(t){t&&l(n)}}}function lt(t){let n,e=t[28]+""
return{c(){n=u(e)},m(t,e){a(t,n,e)},p:o,d(t){t&&l(n)}}}function ot(t){let n,e
return n=new X({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){p(n.$$.fragment)},m(t,s){d(n,t,s),e=!0},p(e,s){t=e
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){$(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function at(t){let n
return{c(){n=u("Perfect")},m(t,e){a(t,n,e)},d(t){t&&l(n)}}}function rt(t){return{c:o,m:o,p:o,i:o,o:o,d:o}}function it(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:rt,then:J,catch:F,error:32,blocks:[,,,]}
return Q(t[4](),s),{c(){n=I(),s.block.c()},m(t,c){a(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){R(s,t=n,e)},i(t){e||(m(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
$(n)}e=!1},d(t){t&&l(n),s.block.d(t),s.token=null,s=null}}}function ut(t,n,e){const s=E()
let{wantsTagged:c=0}=n,l=null,o=null,a=null
l="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n?.item_id]]
const i=t=>[t,a.items[t.id.split("-").at(-1)]],u=([,t])=>o||!t.is_in_st,f=([t])=>t
function $(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(i).filter(A(s,e)).filter(u).slice(0,function(){let t=parseInt(l,10)
return Y(t)&&(t=B(a.items).length),"createsecure"===D.subcmd?Math.min(100,t):t}()).map(f).forEach(U)}function m(t){const n=P(".selectable-item")
n.length&&(P('[class$="-create-selected"] div').forEach(U),$(t,n))}function d(t){s("select",t),m(t)}const p=([,t])=>t.is_in_st,g=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,l,o,a,async function(){e(3,a=await q())},function(){return Z(H("sendClasses"))??Z(L.sendClasses)},d,function(){s("perf"),m("-99")},function(t){a.items.fshHasST&&G(t,O(B(a.items).filter(p).map(g).join("\n")))},()=>d("-1"),()=>d("-2"),()=>d("-3"),t=>d(t),function(){l=this.value,e(1,l)},function(t){o=t,e(2,o)},function(n){M.call(this,t,n)}]}class ft extends e{constructor(t){super(),s(this,t,ut,it,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-CWTvxJVb.js.map
