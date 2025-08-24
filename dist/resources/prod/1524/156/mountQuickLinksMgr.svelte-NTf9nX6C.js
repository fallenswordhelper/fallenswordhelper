import{ap as e,x as i,ak as t,al as s,am as a,B as d,C as l,E as n,F as v,bO as c,J as r,dS as o,I as u,P as k,bG as b,O as p,L as x,N as h,ao as m,s as f,D as g,Q as w,aH as y,aA as L,ad as _,av as M,H as Q,bm as q,y as R,n as S}from"./calfSystem-79LsojAC.js"
import{M as A}from"./ModalTabbed-DFUjowrd.js"
function E(e,i,t,s,a,d,l,n){f("Quick Links Manager","Add Item"),r(i)||r(t)||(u(s,[...r(s),{name:r(a).value,url:r(d).value,newWindow:r(l).checked}],!0),r(a).value="",r(d).value="",r(l).checked=0,n())}var D=d('<div class="svelte-dkxhir"> </div> <div class="svelte-dkxhir"> </div> <div class="centered svelte-dkxhir"><input disabled type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Del</button> ]</div>',1),I=d('<div class="container svelte-dkxhir"><div class="grid headings svelte-dkxhir"><div class="svelte-dkxhir">Name</div> <div class="svelte-dkxhir">URL</div> <div class="centered svelte-dkxhir">New <div class="wrapper svelte-dkxhir">[ <div class="tooltip svelte-dkxhir"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-dkxhir">Action</div></div> <div class="grid items svelte-dkxhir"></div> <div class="grid add svelte-dkxhir"><div><input placeholder="Log" required type="text"/></div> <div><input placeholder="?cmd=log" required type="text"/></div> <div class="centered svelte-dkxhir"><input type="checkbox"/></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Add</button> ]</div></div></div>')
function N(e,d){i(d,!0)
let L=t(0),_=t(0),M=t(0),Q=t(0),q=t(0),R=t(s(a("quickLinks")||[]))
function S(){m("quickLinks",r(R))}var A=I(),N=l(n(A),2)
v(N,21,()=>r(R),c,(e,i,t)=>{var s=D(),a=g(s),d=n(a),v=l(a,2),c=n(v),o=l(v,2),b=n(o),p=l(o,2)
l(n(p)).__click=()=>function(e){f("Quick Links Manager","Delete Item"),u(R,r(R).toSpliced(e,1),!0),S()}(t),k(()=>{w(d,r(i).name),w(c,r(i).url)}),y(b,()=>r(R)[t].newWindow,e=>r(R)[t].newWindow=e),x(e,s)})
var O=l(N,2),W=n(O),j=n(W)
let C
o(j,e=>u(L,e),()=>r(L))
var H=l(W,2),T=n(H)
let B
o(T,e=>u(M,e),()=>r(M))
var F=l(H,2),G=n(F)
o(G,e=>u(q,e),()=>r(q))
var J=l(F,2)
l(n(J)).__click=[E,_,Q,R,L,M,q,S],k((e,i)=>{C=b(j,1,"svelte-dkxhir",null,C,e),B=b(T,1,"svelte-dkxhir",null,B,i)},[()=>({invalid:r(_)}),()=>({invalid:r(Q)})]),p("blur",j,()=>{u(_,r(L).validity.valueMissing,!0)}),p("focus",j,()=>{u(_,0)}),p("blur",T,()=>{u(Q,r(M).validity.valueMissing,!0)}),p("focus",T,()=>{u(Q,0)}),x(e,A),h()}function O(e,i,t,s){f("Quick Links Raw Editor","Save"),i()?t():u(s,1)}function W(e,i,t,s){f("Quick Links Raw Editor","Reset"),u(i,"[]"),u(t,0),s()}e(["click"])
var j=d('<div class="container svelte-atd1b8"><div class="textContainer svelte-atd1b8"><textarea></textarea></div> <div class="bottom svelte-atd1b8"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function C(e,a){i(a,!0)
let d=t(s(L("quickLinks"))),v=t(0)
const c=()=>_(q(r(d))),o=()=>M("quickLinks",r(d).trim())
var m=j(),f=n(m),g=n(f)
let w
var y=l(f,2),R=n(y)
R.__click=[O,c,o,v],l(R,2).__click=[W,d,v,o],k(e=>w=b(g,1,"svelte-atd1b8",null,w,e),[()=>({invalid:r(v)})]),p("blur",g,()=>{u(v,!c(),!0)}),p("focus",g,()=>{u(v,0)}),Q(g,()=>r(d),e=>u(d,e)),x(e,m),h()}function H(e,t){i(t,!0)
let s=R(t,"visible",15,!0)
const a=[{component:N,label:"Quick Links"},{component:C,label:"Raw Editor"}]
A(e,{close:function(){f("Quick Links Manager","close"),s(!1)},get tabs(){return a},get visible(){return s()}}),h()}e(["click"])
const T=s({visible:!0})
let B=0
function F(){B?T.visible=!0:B=S(H,{props:T,target:document.body})}export{F as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-NTf9nX6C.js.map
