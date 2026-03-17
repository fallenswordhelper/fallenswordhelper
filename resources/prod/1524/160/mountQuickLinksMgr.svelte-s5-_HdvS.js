import{ap as e,y as i,ak as t,al as s,am as a,C as l,D as d,F as n,G as o,E as v,P as c,S as u,K as r,aI as b,N as g,bT as p,dR as k,J as m,bH as f,U as w,O as y,s as h,ao as x,aA as L,I as _,ad as M,av as R,bp as q,z as Q,t as S}from"./calfSystem-HVCiy-VV.js"
import{M as A}from"./ModalTabbed-CUwOsg2C.js"
var E=l('<div class="svelte-8od2gi"> </div> <div class="svelte-8od2gi"> </div> <div class="centered svelte-8od2gi"><input disabled type="checkbox"/></div> <div class="buttons centered svelte-8od2gi">[ <button type="button" class="svelte-8od2gi">Del</button> ]</div>',1),I=l('<div class="container svelte-8od2gi"><div class="grid headings svelte-8od2gi"><div class="svelte-8od2gi">Name</div> <div class="svelte-8od2gi">URL</div> <div class="centered svelte-8od2gi">New <div class="wrapper svelte-8od2gi">[ <div class="tooltip svelte-8od2gi"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-8od2gi">Action</div></div> <div class="grid items svelte-8od2gi"></div> <div class="grid add svelte-8od2gi"><div><input placeholder="Log" required type="text"/></div> <div><input placeholder="?cmd=log" required type="text"/></div> <div class="centered svelte-8od2gi"><input type="checkbox"/></div> <div class="buttons centered svelte-8od2gi">[ <button type="button" class="svelte-8od2gi">Add</button> ]</div></div></div>')
function D(e,l){i(l,!0)
let L=t(0),_=t(0),M=t(0),R=t(0),q=t(0),Q=t(s(a("quickLinks")||[]))
function S(){x("quickLinks",r(Q))}var A=I(),D=d(n(A),2)
o(D,21,()=>r(Q),p,(e,i,t)=>{var s=E(),a=v(s),l=n(a),o=d(a,2),p=n(o),k=d(o,2),f=n(k),w=d(k,2)
d(n(w)).__click=()=>function(e){h("Quick Links Manager","Delete Item"),m(Q,r(Q).toSpliced(e,1),!0),S()}(t),c(()=>{u(l,r(i).name),u(p,r(i).url)}),b(f,()=>r(Q)[t].newWindow,e=>r(Q)[t].newWindow=e),g(e,s)})
var N=d(D,2),W=n(N),j=n(W)
let C
k(j,e=>m(L,e),()=>r(L))
var O=d(W,2),T=n(O)
let U
k(T,e=>m(M,e),()=>r(M))
var z=d(O,2),F=n(z)
k(F,e=>m(q,e),()=>r(q))
var G=d(z,2)
d(n(G)).__click=function(){h("Quick Links Manager","Add Item"),r(_)||r(R)||(m(Q,[...r(Q),{name:r(L).value,url:r(M).value,newWindow:r(q).checked}],!0),r(L).value="",r(M).value="",r(q).checked=0,S())},c(()=>{C=f(j,1,"svelte-8od2gi",null,C,{invalid:r(_)}),U=f(T,1,"svelte-8od2gi",null,U,{invalid:r(R)})}),w("blur",j,()=>{m(_,r(L).validity.valueMissing,!0)}),w("focus",j,()=>{m(_,0)}),w("blur",T,()=>{m(R,r(M).validity.valueMissing,!0)}),w("focus",T,()=>{m(R,0)}),g(e,A),y()}e(["click"])
var N=l('<div class="container svelte-xl4cmh"><div class="textContainer svelte-xl4cmh"><textarea></textarea></div> <div class="bottom svelte-xl4cmh"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function W(e,a){i(a,!0)
let l=t(s(L("quickLinks"))),o=t(0)
const v=()=>M(q(r(l))),u=()=>R("quickLinks",r(l).trim())
var b=N(),p=n(b),k=n(p)
let x
var Q=d(p,2),S=n(Q)
S.__click=function(){h("Quick Links Raw Editor","Save"),v()?u():m(o,1)},d(S,2).__click=function(){h("Quick Links Raw Editor","Reset"),m(l,"[]"),m(o,0),u()},c(()=>x=f(k,1,"svelte-xl4cmh",null,x,{invalid:r(o)})),w("blur",k,()=>{m(o,!v(),!0)}),w("focus",k,()=>{m(o,0)}),_(k,()=>r(l),e=>m(l,e)),g(e,b),y()}function j(e,t){i(t,!0)
let s=Q(t,"visible",15,!0)
const a=[{component:D,label:"Quick Links"},{component:W,label:"Raw Editor"}]
A(e,{close:function(){h("Quick Links Manager","close"),s(!1)},get tabs(){return a},get visible(){return s()}}),y()}e(["click"])
const C=s({visible:!0})
let O=0
function T(){O?C.visible=!0:O=S(j,{props:C,target:document.body})}export{T as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-s5-_HdvS.js.map
