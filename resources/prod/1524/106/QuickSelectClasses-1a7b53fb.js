import{aO as t,S as n,L as e,M as s,aj as c,R as l,ba as o,bd as a,Z as r,be as i,af as u,bJ as f,i as $,cc as m,Y as d,bb as p,bc as g,cd as h,ce as b,N as v,a1 as k,bf as x,O as y,P as w,a$ as j,T as S,bg as _,V as T,W as I,cr as N,cf as C,bh as B,b0 as L,_ as M,j as P,C as A,ax as E,c as G,ad as H}from"./calfSystem-076d7a01.js"
import{h as O,u as R}from"./await_block-904981a0.js"
import{e as Z}from"./each-d53d627d.js"
import{g as J}from"./getInventoryById-83dceb0e.js"
import{c as Q}from"./createStyle-817f1cf1.js"
import{L as V}from"./LinkButton-9974bf66.js"
import{n as W}from"./numberIsNaN-a40c3bbb.js"
import{S as Y}from"./SelectInST-83de2371.js"
function q(n){return t(`[${n}]`)}function z(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function D(t){return{c:d,m:d,p:d,i:d,o:d,d:d}}function F(t){let n,e,s=t[3]?.items&&K(t)
return{c(){s&&s.c(),n=c()},m(t,c){s&&s.m(t,c),l(t,n,c),e=!0},p(t,e){t[3]?.items?s?(s.p(t,e),8&e[0]&&o(s,1)):(s=K(t),s.c(),o(s,1),s.m(n.parentNode,n)):s&&(p(),a(s,1,1,(()=>{s=null})),g())},i(t){e||(o(s),e=!0)},o(t){a(s),e=!1},d(t){t&&r(n),s&&s.d(t)}}}function K(t){let n,e,s,c,i,u,f,$,m,d,P,A,E,G,H,O,R,J,Q,W
s=new V({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),s.$on("click",t[9]),i=new V({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),i.$on("click",t[10])
let q=t[0]&&tt(t),D=Z(t[5]()),F=[]
for(let n=0;n<D.length;n+=1)F[n]=st(z(t,D,n))
const K=t=>a(F[t],1,1,(()=>{F[t]=null}))
function nt(n){t[14](n)}let et={}
return void 0!==t[2]&&(et.inSt=t[2]),A=new Y({props:et}),h.push((()=>b(A,"inSt",nt))),A.$on("toggle",t[15]),O=new V({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),O.$on("click",t[7]),{c(){n=v("div"),e=k("Select:\n      "),x(s.$$.fragment),c=y(),x(i.$$.fragment),u=y(),q&&q.c(),f=y()
for(let t=0;t<F.length;t+=1)F[t].c()
$=k("\n      How many:"),m=v("input"),d=y(),P=v("div"),x(A.$$.fragment),G=y(),H=v("div"),R=v("div"),x(O.$$.fragment),w(m,"class","custominput svelte-1divdfe"),w(m,"type","text"),w(n,"class","svelte-1divdfe"),w(P,"class","svelte-1divdfe"),j(R,"display","contents"),j(R,"--button-color","blue"),w(H,"class","svelte-1divdfe")},m(o,a){l(o,n,a),S(n,e),_(s,n,null),S(n,c),_(i,n,null),S(n,u),q&&q.m(n,null),S(n,f)
for(let t=0;t<F.length;t+=1)F[t]&&F[t].m(n,null)
S(n,$),S(n,m),T(m,t[1]),l(o,d,a),l(o,P,a),_(A,P,null),l(o,G,a),l(o,H,a),S(H,R),_(O,R,null),J=!0,Q||(W=[I(m,"input",t[13]),N(t[8].call(null,P))],Q=!0)},p(t,e){const c={}
2&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const l={}
if(2&e[1]&&(l.$$scope={dirty:e,ctx:t}),i.$set(l),t[0]?q?(q.p(t,e),1&e[0]&&o(q,1)):(q=tt(t),q.c(),o(q,1),q.m(n,f)):q&&(p(),a(q,1,1,(()=>{q=null})),g()),96&e[0]){let s
for(D=Z(t[5]()),s=0;s<D.length;s+=1){const c=z(t,D,s)
F[s]?(F[s].p(c,e),o(F[s],1)):(F[s]=st(c),F[s].c(),o(F[s],1),F[s].m(n,$))}for(p(),s=D.length;s<F.length;s+=1)K(s)
g()}2&e[0]&&m.value!==t[1]&&T(m,t[1])
const r={}
!E&&4&e[0]&&(E=!0,r.inSt=t[2],C((()=>E=!1))),A.$set(r)
const u={}
2&e[1]&&(u.$$scope={dirty:e,ctx:t}),O.$set(u)},i(t){if(!J){o(s.$$.fragment,t),o(i.$$.fragment,t),o(q)
for(let t=0;t<D.length;t+=1)o(F[t])
o(A.$$.fragment,t),o(O.$$.fragment,t),J=!0}},o(t){a(s.$$.fragment,t),a(i.$$.fragment,t),a(q),F=F.filter(Boolean)
for(let t=0;t<F.length;t+=1)a(F[t])
a(A.$$.fragment,t),a(O.$$.fragment,t),J=!1},d(t){t&&(r(n),r(d),r(P),r(G),r(H)),B(s),B(i),q&&q.d(),L(F,t),B(A),B(O),Q=!1,M(W)}}}function U(t){let n
return{c(){n=k("All Items")},m(t,e){l(t,n,e)},d(t){t&&r(n)}}}function X(t){let n
return{c(){n=k("All Resources")},m(t,e){l(t,n,e)},d(t){t&&r(n)}}}function tt(t){let n,e
return n=new V({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){x(n.$$.fragment)},m(t,s){_(n,t,s),e=!0},p(t,e){const s={}
2&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(o(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){B(n,t)}}}function nt(t){let n
return{c(){n=k("Guild Tagged")},m(t,e){l(t,n,e)},d(t){t&&r(n)}}}function et(t){let n,e=t[28]+""
return{c(){n=k(e)},m(t,e){l(t,n,e)},p:d,d(t){t&&r(n)}}}function st(t){let n,e
return n=new V({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){x(n.$$.fragment)},m(t,s){_(n,t,s),e=!0},p(e,s){t=e
const c={}
2&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(o(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){B(n,t)}}}function ct(t){let n
return{c(){n=k("Perfect")},m(t,e){l(t,n,e)},d(t){t&&r(n)}}}function lt(t){return{c:d,m:d,p:d,i:d,o:d,d:d}}function ot(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:lt,then:F,catch:D,blocks:[,,,]}
return O(t[4](),s),{c(){n=c(),s.block.c()},m(t,c){l(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){R(s,t=n,e)},i(t){e||(o(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
a(n)}e=!1},d(t){t&&r(n),s.block.d(t),s.token=null,s=null}}}function at(t,n,e){const s=i()
let{wantsTagged:c=0}=n,l=null,o=null,a=null
l="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n.item_id]]
const d=t=>[t,a.items[t.id.split("-").at(-1)]],p=([,t])=>o||!t.is_in_st,g=([t])=>t
function h(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(d).filter(G(s,e)).filter(p).slice(0,function(){let t=parseInt(l,10)
return W(t)&&(t=A(a.items).length),"createsecure"===H.subcmd?Math.min(100,t):t}()).map(g).forEach(E)}function b(t){const n=P(".selectable-item")
n.length&&(P('[class$="-create-selected"] div').forEach(E),h(t,n))}function v(t){s("select",t),b(t)}const k=([,t])=>t.is_in_st,x=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,l,o,a,async function(){e(3,a=await J())},function(){return q(u("sendClasses"))??q(f.sendClasses)},v,function(){s("perf"),b("-99")},function(t){a.items.fshHasST&&$(t,Q(A(a.items).filter(k).map(x).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){l=this.value,e(1,l)},function(t){o=t,e(2,o)},function(n){m.call(this,t,n)}]}class rt extends n{constructor(t){super(),e(this,t,at,ot,s,{wantsTagged:0},null,[-1,-1])}}export{rt as Q}
//# sourceMappingURL=QuickSelectClasses-1a7b53fb.js.map
