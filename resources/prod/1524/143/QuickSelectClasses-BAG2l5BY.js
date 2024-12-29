import{ba as t,f as n,S as e,O as s,P as c,as as l,av as a,W as o,at as r,bA as i,bD as u,a4 as f,bE as $,ao as m,ck as d,i as p,cN as g,R as h,bo as b,a3 as v,bB as k,bC as x,k as w,E as y,Q as S,cO as _,cP as T,a7 as j,bF as C,T as E,U as H,X as N,bG as P,Z as A,_ as B,c_ as I,cQ as Q,bH as G,bp as L,a5 as O,b4 as R,c as D,ak as F,am as M}from"./calfSystem-ChzN4Q-P.js"
import{c as U}from"./createStyle-DDJmETKK.js"
import{i as W,S as X}from"./SelectInST-BAzJQu4f.js"
import{L as Y}from"./LinkButton-BclPa9W-.js"
function Z(n){return t(`[${n}]`)}async function q(){const t=await W()
return t?.items?{items:{...n((e=t).items.map((t=>[t.inv_id,t]))),...e.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}}}:t
var e}function z(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function J(t){let n
return{c(){n=h("p"),n.textContent=`${t[32].message}`,b(n,"color","red")},m(t,e){o(t,n,e)},p:v,i:v,o:v,d(t){t&&f(n)}}}function K(t){let n,e,s,c
const l=[tt,V],r=[]
function $(t,n){return t[3]?.items?0:1}return n=$(t),e=r[n]=l[n](t),{c(){e.c(),s=a()},m(t,e){r[n].m(t,e),o(t,s,e),c=!0},p(t,c){let a=n
n=$(t),n===a?r[n].p(t,c):(k(),u(r[a],1,1,(()=>{r[a]=null})),x(),e=r[n],e?e.p(t,c):(e=r[n]=l[n](t),e.c()),i(e,1),e.m(s.parentNode,s))},i(t){c||(i(e),c=!0)},o(t){u(e),c=!1},d(t){t&&f(s),r[n].d(t)}}}function V(t){let n
return{c(){n=h("p"),n.textContent="Server Error",b(n,"color","red")},m(t,e){o(t,n,e)},p:v,i:v,o:v,d(t){t&&f(n)}}}function tt(t){let n,e,s,c,l,a,r,$,m,d,p,g,v,w,y,R,D,F,M,U
s=new Y({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),l=new Y({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),l.$on("click",t[10])
let W=t[0]&&st(t),Z=S(t[5]()),q=[]
for(let n=0;n<Z.length;n+=1)q[n]=at(z(t,Z,n))
const J=t=>u(q[t],1,1,(()=>{q[t]=null}))
function K(n){t[14](n)}let V={}
return void 0!==t[2]&&(V.inSt=t[2]),g=new X({props:V}),_.push((()=>T(g,"inSt",K))),g.$on("toggle",t[15]),R=new Y({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),R.$on("click",t[7]),{c(){n=h("div"),e=j("Select:\n      "),C(s.$$.fragment),c=E(),C(l.$$.fragment),a=E(),W&&W.c(),r=E()
for(let t=0;t<q.length;t+=1)q[t].c()
$=j("\n      How many:"),m=h("input"),d=E(),p=h("div"),C(g.$$.fragment),w=E(),y=h("div"),D=h("div"),C(R.$$.fragment),H(m,"class","custominput svelte-1divdfe"),H(m,"type","text"),H(n,"class","svelte-1divdfe"),H(p,"class","svelte-1divdfe"),b(D,"display","contents"),b(D,"--button-color","blue"),H(y,"class","svelte-1divdfe")},m(i,u){o(i,n,u),N(n,e),P(s,n,null),N(n,c),P(l,n,null),N(n,a),W&&W.m(n,null),N(n,r)
for(let t=0;t<q.length;t+=1)q[t]&&q[t].m(n,null)
N(n,$),N(n,m),A(m,t[1]),o(i,d,u),o(i,p,u),P(g,p,null),o(i,w,u),o(i,y,u),N(y,D),P(R,D,null),F=!0,M||(U=[B(m,"input",t[13]),I(t[8].call(null,p))],M=!0)},p(t,e){const c={}
4&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const a={}
if(4&e[1]&&(a.$$scope={dirty:e,ctx:t}),l.$set(a),t[0]?W?(W.p(t,e),1&e[0]&&i(W,1)):(W=st(t),W.c(),i(W,1),W.m(n,r)):W&&(k(),u(W,1,1,(()=>{W=null})),x()),96&e[0]){let s
for(Z=S(t[5]()),s=0;s<Z.length;s+=1){const c=z(t,Z,s)
q[s]?(q[s].p(c,e),i(q[s],1)):(q[s]=at(c),q[s].c(),i(q[s],1),q[s].m(n,$))}for(k(),s=Z.length;s<q.length;s+=1)J(s)
x()}2&e[0]&&m.value!==t[1]&&A(m,t[1])
const o={}
!v&&4&e[0]&&(v=!0,o.inSt=t[2],Q((()=>v=!1))),g.$set(o)
const f={}
4&e[1]&&(f.$$scope={dirty:e,ctx:t}),R.$set(f)},i(t){if(!F){i(s.$$.fragment,t),i(l.$$.fragment,t),i(W)
for(let t=0;t<Z.length;t+=1)i(q[t])
i(g.$$.fragment,t),i(R.$$.fragment,t),F=!0}},o(t){u(s.$$.fragment,t),u(l.$$.fragment,t),u(W),q=q.filter(Boolean)
for(let t=0;t<q.length;t+=1)u(q[t])
u(g.$$.fragment,t),u(R.$$.fragment,t),F=!1},d(t){t&&(f(n),f(d),f(p),f(w),f(y)),G(s),G(l),W&&W.d(),L(q,t),G(g),G(R),M=!1,O(U)}}}function nt(t){let n
return{c(){n=j("All Items")},m(t,e){o(t,n,e)},d(t){t&&f(n)}}}function et(t){let n
return{c(){n=j("All Resources")},m(t,e){o(t,n,e)},d(t){t&&f(n)}}}function st(t){let n,e
return n=new Y({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){C(n.$$.fragment)},m(t,s){P(n,t,s),e=!0},p(t,e){const s={}
4&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(i(n.$$.fragment,t),e=!0)},o(t){u(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function ct(t){let n
return{c(){n=j("Guild Tagged")},m(t,e){o(t,n,e)},d(t){t&&f(n)}}}function lt(t){let n,e=t[28]+""
return{c(){n=j(e)},m(t,e){o(t,n,e)},p:v,d(t){t&&f(n)}}}function at(t){let n,e
return n=new Y({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){C(n.$$.fragment)},m(t,s){P(n,t,s),e=!0},p(e,s){t=e
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(i(n.$$.fragment,t),e=!0)},o(t){u(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function ot(t){let n
return{c(){n=j("Perfect")},m(t,e){o(t,n,e)},d(t){t&&f(n)}}}function rt(t){return{c:v,m:v,p:v,i:v,o:v,d:v}}function it(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:rt,then:K,catch:J,error:32,blocks:[,,,]}
return l(t[4](),s),{c(){n=a(),s.block.c()},m(t,c){o(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){r(s,t=n,e)},i(t){e||(i(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
u(n)}e=!1},d(t){t&&f(n),s.block.d(t),s.token=null,s=null}}}function ut(t,n,e){const s=$()
let{wantsTagged:c=0}=n,l=null,a=null,o=null
l="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n?.item_id]]
const i=t=>[t,o.items[t.id.split("-").at(-1)]],u=([,t])=>a||!t.is_in_st,f=([t])=>t
function h(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(i).filter(D(s,e)).filter(u).slice(0,function(){let t=parseInt(l,10)
return F(t)&&(t=y(o.items).length),"createsecure"===M.subcmd?Math.min(100,t):t}()).map(f).forEach(R)}function b(t){const n=w(".selectable-item")
n.length&&(w('[class$="-create-selected"] div').forEach(R),h(t,n))}function v(t){s("select",t),b(t)}const k=([,t])=>t.is_in_st,x=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,l,a,o,async function(){e(3,o=await q())},function(){return Z(m("sendClasses"))??Z(d.sendClasses)},v,function(){s("perf"),b("-99")},function(t){o.items.fshHasST&&p(t,U(y(o.items).filter(k).map(x).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){l=this.value,e(1,l)},function(t){a=t,e(2,a)},function(n){g.call(this,t,n)}]}class ft extends e{constructor(t){super(),s(this,t,ut,it,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-BAG2l5BY.js.map
