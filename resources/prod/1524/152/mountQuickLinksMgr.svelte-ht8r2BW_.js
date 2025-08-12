import{aq as e,z as i,al as t,am as s,an as a,C as d,D as l,F as n,G as v,bM as c,K as r,d$ as o,J as u,Q as k,bE as b,P as p,N as h,O as x,ap as m,s as f,E as g,R as w,aI as y,aB as L,ae as M,aw as _,I as q,bk as Q,A as R,u as E}from"./calfSystem-BlPuMQGT.js"
import{M as A}from"./ModalTabbed-Dsx_pTFW.js"
function I(e,i,t,s,a,d,l,n){f("Quick Links Manager","Add Item"),r(i)||r(t)||(u(s,[...r(s),{name:r(a).value,url:r(d).value,newWindow:r(l).checked}],!0),r(a).value="",r(d).value="",r(l).checked=0,n())}var S=d('<div class="svelte-dkxhir"> </div> <div class="svelte-dkxhir"> </div> <div class="centered svelte-dkxhir"><input disabled type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Del</button> ]</div>',1),D=d('<div class="container svelte-dkxhir"><div class="grid headings svelte-dkxhir"><div class="svelte-dkxhir">Name</div> <div class="svelte-dkxhir">URL</div> <div class="centered svelte-dkxhir">New <div class="wrapper svelte-dkxhir">[ <div class="tooltip svelte-dkxhir"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-dkxhir">Action</div></div> <div class="grid items svelte-dkxhir"></div> <div class="grid add svelte-dkxhir"><div><input placeholder="Log" required type="text"/></div> <div><input placeholder="?cmd=log" required type="text"/></div> <div class="centered svelte-dkxhir"><input type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Add</button> ]</div></div></div>')
function N(e,d){i(d,!0)
let L=t(0),M=t(0),_=t(0),q=t(0),Q=t(0),R=t(s(a("quickLinks")||[]))
function E(){m("quickLinks",r(R))}var A=D(),N=l(n(A),2)
v(N,21,(()=>r(R)),c,((e,i,t)=>{var s=S(),a=g(s),d=n(a),v=l(a,2),c=n(v),o=l(v,2),b=n(o),p=l(o,2)
l(n(p)).__click=()=>function(e){f("Quick Links Manager","Delete Item"),u(R,r(R).toSpliced(e,1),!0),E()}(t),k((()=>{w(d,r(i).name),w(c,r(i).url)})),y(b,(()=>r(R)[t].newWindow),(e=>r(R)[t].newWindow=e)),h(e,s)}))
var W=l(N,2),j=n(W),C=n(j)
let O
o(C,(e=>u(L,e)),(()=>r(L)))
var z=l(j,2),B=n(z)
let F
o(B,(e=>u(_,e)),(()=>r(_)))
var G=l(z,2),J=n(G)
o(J,(e=>u(Q,e)),(()=>r(Q)))
var K=l(G,2)
l(n(K)).__click=[I,M,q,R,L,_,Q,E],k(((e,i)=>{O=b(C,1,"svelte-dkxhir",null,O,e),F=b(B,1,"svelte-dkxhir",null,F,i)}),[()=>({invalid:r(M)}),()=>({invalid:r(q)})]),p("blur",C,(()=>{u(M,r(L).validity.valueMissing,!0)})),p("focus",C,(()=>{u(M,0)})),p("blur",B,(()=>{u(q,r(_).validity.valueMissing,!0)})),p("focus",B,(()=>{u(q,0)})),h(e,A),x()}function W(e,i,t,s){f("Quick Links Raw Editor","Save"),i()?t():u(s,1)}function j(e,i,t,s){f("Quick Links Raw Editor","Reset"),u(i,"[]"),u(t,0),s()}e(["click"])
var C=d('<div class="container svelte-atd1b8"><div class="textContainer svelte-atd1b8"><textarea></textarea></div> <div class="bottom svelte-atd1b8"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function O(e,a){i(a,!0)
let d=t(s(L("quickLinks"))),v=t(0)
const c=()=>M(Q(r(d))),o=()=>_("quickLinks",r(d).trim())
var m=C(),f=n(m),g=n(f)
let w
var y=l(f,2),R=n(y)
R.__click=[W,c,o,v],l(R,2).__click=[j,d,v,o],k((e=>w=b(g,1,"svelte-atd1b8",null,w,e)),[()=>({invalid:r(v)})]),p("blur",g,(()=>{u(v,!c(),!0)})),p("focus",g,(()=>{u(v,0)})),q(g,(()=>r(d)),(e=>u(d,e))),h(e,m),x()}function z(e,t){i(t,!0)
let s=R(t,"visible",15,!0)
const a=[{component:N,label:"Quick Links"},{component:O,label:"Raw Editor"}]
A(e,{close:function(){f("Quick Links Manager","close"),s(!1)},get tabs(){return a},get visible(){return s()}}),x()}e(["click"])
const B=s({visible:!0})
let F=0
function G(){F?B.visible=!0:F=E(z,{props:B,target:document.body})}export{G as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-ht8r2BW_.js.map
