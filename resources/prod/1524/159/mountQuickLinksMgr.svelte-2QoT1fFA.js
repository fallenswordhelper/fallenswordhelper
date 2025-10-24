import{ap as e,y as i,ak as t,al as s,am as a,C as l,D as d,F as n,G as o,bR as v,K as c,dR as u,J as r,Q as b,bJ as g,P as p,N as k,O as m,ao as f,s as w,E as y,R as h,aI as x,aA as L,ad as R,av as _,I as M,bp as Q,z as q,t as A}from"./calfSystem-CIdPz3EO.js"
import{M as E}from"./ModalTabbed-DAmPFrdA.js"
function I(e,i,t,s,a,l,d,n){w("Quick Links Manager","Add Item"),c(i)||c(t)||(r(s,[...c(s),{name:c(a).value,url:c(l).value,newWindow:c(d).checked}],!0),c(a).value="",c(l).value="",c(d).checked=0,n())}var S=l('<div class="svelte-8od2gi"> </div> <div class="svelte-8od2gi"> </div> <div class="centered svelte-8od2gi"><input disabled type="checkbox"/></div> <div class="buttons centered svelte-8od2gi">[ <button type="button" class="svelte-8od2gi">Del</button> ]</div>',1),D=l('<div class="container svelte-8od2gi"><div class="grid headings svelte-8od2gi"><div class="svelte-8od2gi">Name</div> <div class="svelte-8od2gi">URL</div> <div class="centered svelte-8od2gi">New <div class="wrapper svelte-8od2gi">[ <div class="tooltip svelte-8od2gi"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-8od2gi">Action</div></div> <div class="grid items svelte-8od2gi"></div> <div class="grid add svelte-8od2gi"><div><input placeholder="Log" required type="text"/></div> <div><input placeholder="?cmd=log" required type="text"/></div> <div class="centered svelte-8od2gi"><input type="checkbox"/></div> <div class="buttons centered svelte-8od2gi">[ <button type="button" class="svelte-8od2gi">Add</button> ]</div></div></div>')
function N(e,l){i(l,!0)
let L=t(0),R=t(0),_=t(0),M=t(0),Q=t(0),q=t(s(a("quickLinks")||[]))
function A(){f("quickLinks",c(q))}var E=D(),N=d(n(E),2)
o(N,21,()=>c(q),v,(e,i,t)=>{var s=S(),a=y(s),l=n(a),o=d(a,2),v=n(o),u=d(o,2),g=n(u),p=d(u,2)
d(n(p)).__click=()=>function(e){w("Quick Links Manager","Delete Item"),r(q,c(q).toSpliced(e,1),!0),A()}(t),b(()=>{h(l,c(i).name),h(v,c(i).url)}),x(g,()=>c(q)[t].newWindow,e=>c(q)[t].newWindow=e),k(e,s)})
var W=d(N,2),j=n(W),C=n(j)
let J
u(C,e=>r(L,e),()=>c(L))
var O=d(j,2),z=n(O)
let F
u(z,e=>r(_,e),()=>c(_))
var G=d(O,2),K=n(G)
u(K,e=>r(Q,e),()=>c(Q))
var P=d(G,2)
d(n(P)).__click=[I,R,M,q,L,_,Q,A],b((e,i)=>{J=g(C,1,"svelte-8od2gi",null,J,e),F=g(z,1,"svelte-8od2gi",null,F,i)},[()=>({invalid:c(R)}),()=>({invalid:c(M)})]),p("blur",C,()=>{r(R,c(L).validity.valueMissing,!0)}),p("focus",C,()=>{r(R,0)}),p("blur",z,()=>{r(M,c(_).validity.valueMissing,!0)}),p("focus",z,()=>{r(M,0)}),k(e,E),m()}function W(e,i,t,s){w("Quick Links Raw Editor","Save"),i()?t():r(s,1)}function j(e,i,t,s){w("Quick Links Raw Editor","Reset"),r(i,"[]"),r(t,0),s()}e(["click"])
var C=l('<div class="container svelte-xl4cmh"><div class="textContainer svelte-xl4cmh"><textarea></textarea></div> <div class="bottom svelte-xl4cmh"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function J(e,a){i(a,!0)
let l=t(s(L("quickLinks"))),o=t(0)
const v=()=>R(Q(c(l))),u=()=>_("quickLinks",c(l).trim())
var f=C(),w=n(f),y=n(w)
let h
var x=d(w,2),q=n(x)
q.__click=[W,v,u,o],d(q,2).__click=[j,l,o,u],b(e=>h=g(y,1,"svelte-xl4cmh",null,h,e),[()=>({invalid:c(o)})]),p("blur",y,()=>{r(o,!v(),!0)}),p("focus",y,()=>{r(o,0)}),M(y,()=>c(l),e=>r(l,e)),k(e,f),m()}function O(e,t){i(t,!0)
let s=q(t,"visible",15,!0)
const a=[{component:N,label:"Quick Links"},{component:J,label:"Raw Editor"}]
E(e,{close:function(){w("Quick Links Manager","close"),s(!1)},get tabs(){return a},get visible(){return s()}}),m()}e(["click"])
const z=s({visible:!0})
let F=0
function G(){F?z.visible=!0:F=A(O,{props:z,target:document.body})}export{G as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-2QoT1fFA.js.map
