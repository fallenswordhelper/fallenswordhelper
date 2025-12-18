import{ap as e,y as i,ak as t,al as s,am as a,C as l,D as d,F as n,G as o,bO as v,K as c,dR as u,J as r,Q as b,bG as g,P as p,N as k,O as m,s as f,ao as w,E as y,R as h,aI as x,aA as L,I as R,ad as _,av as q,bq as M,z as Q,t as A}from"./calfSystem-Cs6CSxoU.js"
import{M as E}from"./ModalTabbed-B0kgqr1k.js"
var I=l('<div class="svelte-8od2gi"> </div> <div class="svelte-8od2gi"> </div> <div class="centered svelte-8od2gi"><input disabled type="checkbox"/></div> <div class="buttons centered svelte-8od2gi">[ <button type="button" class="svelte-8od2gi">Del</button> ]</div>',1),S=l('<div class="container svelte-8od2gi"><div class="grid headings svelte-8od2gi"><div class="svelte-8od2gi">Name</div> <div class="svelte-8od2gi">URL</div> <div class="centered svelte-8od2gi">New <div class="wrapper svelte-8od2gi">[ <div class="tooltip svelte-8od2gi"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-8od2gi">Action</div></div> <div class="grid items svelte-8od2gi"></div> <div class="grid add svelte-8od2gi"><div><input placeholder="Log" required type="text"/></div> <div><input placeholder="?cmd=log" required type="text"/></div> <div class="centered svelte-8od2gi"><input type="checkbox"/></div> <div class="buttons centered svelte-8od2gi">[ <button type="button" class="svelte-8od2gi">Add</button> ]</div></div></div>')
function D(e,l){i(l,!0)
let L=t(0),R=t(0),_=t(0),q=t(0),M=t(0),Q=t(s(a("quickLinks")||[]))
function A(){w("quickLinks",c(Q))}var E=S(),D=d(n(E),2)
o(D,21,()=>c(Q),v,(e,i,t)=>{var s=I(),a=y(s),l=n(a),o=d(a,2),v=n(o),u=d(o,2),g=n(u),p=d(u,2)
d(n(p)).__click=()=>function(e){f("Quick Links Manager","Delete Item"),r(Q,c(Q).toSpliced(e,1),!0),A()}(t),b(()=>{h(l,c(i).name),h(v,c(i).url)}),x(g,()=>c(Q)[t].newWindow,e=>c(Q)[t].newWindow=e),k(e,s)})
var N=d(D,2),O=n(N),W=n(O)
let j
u(W,e=>r(L,e),()=>c(L))
var C=d(O,2),G=n(C)
let z
u(G,e=>r(_,e),()=>c(_))
var F=d(C,2),J=n(F)
u(J,e=>r(M,e),()=>c(M))
var K=d(F,2)
d(n(K)).__click=function(){f("Quick Links Manager","Add Item"),c(R)||c(q)||(r(Q,[...c(Q),{name:c(L).value,url:c(_).value,newWindow:c(M).checked}],!0),c(L).value="",c(_).value="",c(M).checked=0,A())},b(()=>{j=g(W,1,"svelte-8od2gi",null,j,{invalid:c(R)}),z=g(G,1,"svelte-8od2gi",null,z,{invalid:c(q)})}),p("blur",W,()=>{r(R,c(L).validity.valueMissing,!0)}),p("focus",W,()=>{r(R,0)}),p("blur",G,()=>{r(q,c(_).validity.valueMissing,!0)}),p("focus",G,()=>{r(q,0)}),k(e,E),m()}e(["click"])
var N=l('<div class="container svelte-xl4cmh"><div class="textContainer svelte-xl4cmh"><textarea></textarea></div> <div class="bottom svelte-xl4cmh"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function O(e,a){i(a,!0)
let l=t(s(L("quickLinks"))),o=t(0)
const v=()=>_(M(c(l))),u=()=>q("quickLinks",c(l).trim())
var w=N(),y=n(w),h=n(y)
let x
var Q=d(y,2),A=n(Q)
A.__click=function(){f("Quick Links Raw Editor","Save"),v()?u():r(o,1)},d(A,2).__click=function(){f("Quick Links Raw Editor","Reset"),r(l,"[]"),r(o,0),u()},b(()=>x=g(h,1,"svelte-xl4cmh",null,x,{invalid:c(o)})),p("blur",h,()=>{r(o,!v(),!0)}),p("focus",h,()=>{r(o,0)}),R(h,()=>c(l),e=>r(l,e)),k(e,w),m()}function W(e,t){i(t,!0)
let s=Q(t,"visible",15,!0)
const a=[{component:D,label:"Quick Links"},{component:O,label:"Raw Editor"}]
E(e,{close:function(){f("Quick Links Manager","close"),s(!1)},get tabs(){return a},get visible(){return s()}}),m()}e(["click"])
const j=s({visible:!0})
let C=0
function G(){C?j.visible=!0:C=A(W,{props:j,target:document.body})}export{G as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-D1EwUyrQ.js.map
