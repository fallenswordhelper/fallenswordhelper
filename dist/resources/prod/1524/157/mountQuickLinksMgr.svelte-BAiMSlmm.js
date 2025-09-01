import{ap as e,x as i,ak as t,al as s,am as a,B as d,C as l,E as n,F as v,bQ as c,J as r,dT as o,I as u,P as k,bI as b,O as p,L as x,N as h,ao as m,s as f,D as g,Q as w,aI as y,aA as L,ad as Q,av as _,H as M,bo as q,y as R,n as I}from"./calfSystem-CQOGdqPv.js"
import{M as A}from"./ModalTabbed-DdleZ1iW.js"
function E(e,i,t,s,a,d,l,n){f("Quick Links Manager","Add Item"),r(i)||r(t)||(u(s,[...r(s),{name:r(a).value,url:r(d).value,newWindow:r(l).checked}],!0),r(a).value="",r(d).value="",r(l).checked=0,n())}var S=d('<div class="svelte-dkxhir"> </div> <div class="svelte-dkxhir"> </div> <div class="centered svelte-dkxhir"><input disabled type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Del</button> ]</div>',1),D=d('<div class="container svelte-dkxhir"><div class="grid headings svelte-dkxhir"><div class="svelte-dkxhir">Name</div> <div class="svelte-dkxhir">URL</div> <div class="centered svelte-dkxhir">New <div class="wrapper svelte-dkxhir">[ <div class="tooltip svelte-dkxhir"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-dkxhir">Action</div></div> <div class="grid items svelte-dkxhir"></div> <div class="grid add svelte-dkxhir"><div><input placeholder="Log" required type="text"/></div> <div><input placeholder="?cmd=log" required type="text"/></div> <div class="centered svelte-dkxhir"><input type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Add</button> ]</div></div></div>')
function N(e,d){i(d,!0)
let L=t(0),Q=t(0),_=t(0),M=t(0),q=t(0),R=t(s(a("quickLinks")||[]))
function I(){m("quickLinks",r(R))}var A=D(),N=l(n(A),2)
v(N,21,()=>r(R),c,(e,i,t)=>{var s=S(),a=g(s),d=n(a),v=l(a,2),c=n(v),o=l(v,2),b=n(o),p=l(o,2)
l(n(p)).__click=()=>function(e){f("Quick Links Manager","Delete Item"),u(R,r(R).toSpliced(e,1),!0),I()}(t),k(()=>{w(d,r(i).name),w(c,r(i).url)}),y(b,()=>r(R)[t].newWindow,e=>r(R)[t].newWindow=e),x(e,s)})
var W=l(N,2),j=n(W),C=n(j)
let O
o(C,e=>u(L,e),()=>r(L))
var T=l(j,2),B=n(T)
let F
o(B,e=>u(_,e),()=>r(_))
var H=l(T,2),J=n(H)
o(J,e=>u(q,e),()=>r(q))
var P=l(H,2)
l(n(P)).__click=[E,Q,M,R,L,_,q,I],k((e,i)=>{O=b(C,1,"svelte-dkxhir",null,O,e),F=b(B,1,"svelte-dkxhir",null,F,i)},[()=>({invalid:r(Q)}),()=>({invalid:r(M)})]),p("blur",C,()=>{u(Q,r(L).validity.valueMissing,!0)}),p("focus",C,()=>{u(Q,0)}),p("blur",B,()=>{u(M,r(_).validity.valueMissing,!0)}),p("focus",B,()=>{u(M,0)}),x(e,A),h()}function W(e,i,t,s){f("Quick Links Raw Editor","Save"),i()?t():u(s,1)}function j(e,i,t,s){f("Quick Links Raw Editor","Reset"),u(i,"[]"),u(t,0),s()}e(["click"])
var C=d('<div class="container svelte-atd1b8"><div class="textContainer svelte-atd1b8"><textarea></textarea></div> <div class="bottom svelte-atd1b8"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function O(e,a){i(a,!0)
let d=t(s(L("quickLinks"))),v=t(0)
const c=()=>Q(q(r(d))),o=()=>_("quickLinks",r(d).trim())
var m=C(),f=n(m),g=n(f)
let w
var y=l(f,2),R=n(y)
R.__click=[W,c,o,v],l(R,2).__click=[j,d,v,o],k(e=>w=b(g,1,"svelte-atd1b8",null,w,e),[()=>({invalid:r(v)})]),p("blur",g,()=>{u(v,!c(),!0)}),p("focus",g,()=>{u(v,0)}),M(g,()=>r(d),e=>u(d,e)),x(e,m),h()}function T(e,t){i(t,!0)
let s=R(t,"visible",15,!0)
const a=[{component:N,label:"Quick Links"},{component:O,label:"Raw Editor"}]
A(e,{close:function(){f("Quick Links Manager","close"),s(!1)},get tabs(){return a},get visible(){return s()}}),h()}e(["click"])
const B=s({visible:!0})
let F=0
function H(){F?B.visible=!0:F=I(T,{props:B,target:document.body})}export{H as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-BAiMSlmm.js.map
