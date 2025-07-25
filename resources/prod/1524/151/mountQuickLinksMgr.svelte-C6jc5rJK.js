import{aq as e,z as i,al as t,am as s,an as a,C as d,D as l,F as n,G as v,bP as c,K as r,e0 as o,J as u,Q as k,bH as b,P as p,N as h,O as x,ap as m,s as f,E as g,R as w,aI as y,aB as L,ae as _,aw as q,I as M,bn as Q,A as R,u as A}from"./calfSystem-C1X5YxJZ.js"
import{M as E}from"./ModalTabbed-f13OUsOq.js"
function I(e,i,t,s,a,d,l,n){f("Quick Links Manager","Add Item"),r(i)||r(t)||(u(s,[...r(s),{name:r(a).value,url:r(d).value,newWindow:r(l).checked}],!0),r(a).value="",r(d).value="",r(l).checked=0,n())}var S=d('<div class="svelte-dkxhir"> </div> <div class="svelte-dkxhir"> </div> <div class="centered svelte-dkxhir"><input disabled type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Del</button> ]</div>',1),D=d('<div class="container svelte-dkxhir"><div class="grid headings svelte-dkxhir"><div class="svelte-dkxhir">Name</div> <div class="svelte-dkxhir">URL</div> <div class="centered svelte-dkxhir">New <div class="wrapper svelte-dkxhir">[ <div class="tooltip svelte-dkxhir"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-dkxhir">Action</div></div> <div class="grid items svelte-dkxhir"></div> <div class="grid add svelte-dkxhir"><div><input placeholder="Log" required type="text"/></div> <div><input placeholder="?cmd=log" required type="text"/></div> <div class="centered svelte-dkxhir"><input type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Add</button> ]</div></div></div>')
function N(e,d){i(d,!0)
let L=t(0),_=t(0),q=t(0),M=t(0),Q=t(0),R=t(s(a("quickLinks")||[]))
function A(){m("quickLinks",r(R))}var E=D(),N=l(n(E),2)
v(N,21,(()=>r(R)),c,((e,i,t)=>{var s=S(),a=g(s),d=n(a),v=l(a,2),c=n(v),o=l(v,2),b=n(o),p=l(o,2)
l(n(p)).__click=()=>function(e){f("Quick Links Manager","Delete Item"),u(R,r(R).toSpliced(e,1),!0),A()}(t),k((()=>{w(d,r(i).name),w(c,r(i).url)})),y(b,(()=>r(R)[t].newWindow),(e=>r(R)[t].newWindow=e)),h(e,s)}))
var W=l(N,2),j=n(W),C=n(j)
let O
o(C,(e=>u(L,e)),(()=>r(L)))
var P=l(j,2),z=n(P)
let B
o(z,(e=>u(q,e)),(()=>r(q)))
var F=l(P,2),G=n(F)
o(G,(e=>u(Q,e)),(()=>r(Q)))
var H=l(F,2)
l(n(H)).__click=[I,_,M,R,L,q,Q,A],k(((e,i)=>{O=b(C,1,"svelte-dkxhir",null,O,e),B=b(z,1,"svelte-dkxhir",null,B,i)}),[()=>({invalid:r(_)}),()=>({invalid:r(M)})]),p("blur",C,(()=>{u(_,r(L).validity.valueMissing,!0)})),p("focus",C,(()=>{u(_,0)})),p("blur",z,(()=>{u(M,r(q).validity.valueMissing,!0)})),p("focus",z,(()=>{u(M,0)})),h(e,E),x()}function W(e,i,t,s){f("Quick Links Raw Editor","Save"),i()?t():u(s,1)}function j(e,i,t,s){f("Quick Links Raw Editor","Reset"),u(i,"[]"),u(t,0),s()}e(["click"])
var C=d('<div class="container svelte-atd1b8"><div class="textContainer svelte-atd1b8"><textarea></textarea></div> <div class="bottom svelte-atd1b8"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function O(e,a){i(a,!0)
let d=t(s(L("quickLinks"))),v=t(0)
const c=()=>_(Q(r(d))),o=()=>q("quickLinks",r(d).trim())
var m=C(),f=n(m),g=n(f)
let w
var y=l(f,2),R=n(y)
R.__click=[W,c,o,v],l(R,2).__click=[j,d,v,o],k((e=>w=b(g,1,"svelte-atd1b8",null,w,e)),[()=>({invalid:r(v)})]),p("blur",g,(()=>{u(v,!c(),!0)})),p("focus",g,(()=>{u(v,0)})),M(g,(()=>r(d)),(e=>u(d,e))),h(e,m),x()}function P(e,t){i(t,!0)
let s=R(t,"visible",15,!0)
const a=[{component:N,label:"Quick Links"},{component:O,label:"Raw Editor"}]
E(e,{close:function(){f("Quick Links Manager","close"),s(!1)},get tabs(){return a},get visible(){return s()}}),x()}e(["click"])
const z=s({visible:!0})
let B=0
function F(){B?z.visible=!0:B=A(P,{props:z,target:document.body})}export{F as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-C6jc5rJK.js.map
