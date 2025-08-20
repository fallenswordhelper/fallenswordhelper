import{ao as e,x as i,aj as t,ak as s,al as a,A as d,B as l,D as n,E as v,bN as c,I as r,dX as o,H as u,O as k,bF as b,N as p,K as x,L as h,an as m,s as f,C as g,P as w,aG as y,az as L,ac as _,au as M,G as q,bl as Q,y as R,n as A}from"./calfSystem-UyQ_FKFu.js"
import{M as E}from"./ModalTabbed-Bi9mktZ9.js"
function N(e,i,t,s,a,d,l,n){f("Quick Links Manager","Add Item"),r(i)||r(t)||(u(s,[...r(s),{name:r(a).value,url:r(d).value,newWindow:r(l).checked}],!0),r(a).value="",r(d).value="",r(l).checked=0,n())}var S=d('<div class="svelte-dkxhir"> </div> <div class="svelte-dkxhir"> </div> <div class="centered svelte-dkxhir"><input disabled type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Del</button> ]</div>',1),j=d('<div class="container svelte-dkxhir"><div class="grid headings svelte-dkxhir"><div class="svelte-dkxhir">Name</div> <div class="svelte-dkxhir">URL</div> <div class="centered svelte-dkxhir">New <div class="wrapper svelte-dkxhir">[ <div class="tooltip svelte-dkxhir"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-dkxhir">Action</div></div> <div class="grid items svelte-dkxhir"></div> <div class="grid add svelte-dkxhir"><div><input placeholder="Log" required type="text"/></div> <div><input placeholder="?cmd=log" required type="text"/></div> <div class="centered svelte-dkxhir"><input type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Add</button> ]</div></div></div>')
function D(e,d){i(d,!0)
let L=t(0),_=t(0),M=t(0),q=t(0),Q=t(0),R=t(s(a("quickLinks")||[]))
function A(){m("quickLinks",r(R))}var E=j(),D=l(n(E),2)
v(D,21,()=>r(R),c,(e,i,t)=>{var s=S(),a=g(s),d=n(a),v=l(a,2),c=n(v),o=l(v,2),b=n(o),p=l(o,2)
l(n(p)).__click=()=>function(e){f("Quick Links Manager","Delete Item"),u(R,r(R).toSpliced(e,1),!0),A()}(t),k(()=>{w(d,r(i).name),w(c,r(i).url)}),y(b,()=>r(R)[t].newWindow,e=>r(R)[t].newWindow=e),x(e,s)})
var I=l(D,2),W=n(I),C=n(W)
let G
o(C,e=>u(L,e),()=>r(L))
var O=l(W,2),z=n(O)
let B
o(z,e=>u(M,e),()=>r(M))
var F=l(O,2),H=n(F)
o(H,e=>u(Q,e),()=>r(Q))
var K=l(F,2)
l(n(K)).__click=[N,_,q,R,L,M,Q,A],k((e,i)=>{G=b(C,1,"svelte-dkxhir",null,G,e),B=b(z,1,"svelte-dkxhir",null,B,i)},[()=>({invalid:r(_)}),()=>({invalid:r(q)})]),p("blur",C,()=>{u(_,r(L).validity.valueMissing,!0)}),p("focus",C,()=>{u(_,0)}),p("blur",z,()=>{u(q,r(M).validity.valueMissing,!0)}),p("focus",z,()=>{u(q,0)}),x(e,E),h()}function I(e,i,t,s){f("Quick Links Raw Editor","Save"),i()?t():u(s,1)}function W(e,i,t,s){f("Quick Links Raw Editor","Reset"),u(i,"[]"),u(t,0),s()}e(["click"])
var C=d('<div class="container svelte-atd1b8"><div class="textContainer svelte-atd1b8"><textarea></textarea></div> <div class="bottom svelte-atd1b8"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function G(e,a){i(a,!0)
let d=t(s(L("quickLinks"))),v=t(0)
const c=()=>_(Q(r(d))),o=()=>M("quickLinks",r(d).trim())
var m=C(),f=n(m),g=n(f)
let w
var y=l(f,2),R=n(y)
R.__click=[I,c,o,v],l(R,2).__click=[W,d,v,o],k(e=>w=b(g,1,"svelte-atd1b8",null,w,e),[()=>({invalid:r(v)})]),p("blur",g,()=>{u(v,!c(),!0)}),p("focus",g,()=>{u(v,0)}),q(g,()=>r(d),e=>u(d,e)),x(e,m),h()}function O(e,t){i(t,!0)
let s=R(t,"visible",15,!0)
const a=[{component:D,label:"Quick Links"},{component:G,label:"Raw Editor"}]
E(e,{close:function(){f("Quick Links Manager","close"),s(!1)},get tabs(){return a},get visible(){return s()}}),h()}e(["click"])
const z=s({visible:!0})
let B=0
function F(){B?z.visible=!0:B=A(O,{props:z,target:document.body})}export{F as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-BT_Om8A4.js.map
