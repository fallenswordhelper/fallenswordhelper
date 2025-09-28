import{ao as e,x as i,aj as t,ak as s,al as a,B as l,C as d,E as n,F as o,bP as v,J as c,dM as u,I as r,P as b,bH as g,O as k,L as p,N as m,an as f,s as w,D as x,Q as y,aH as L,az as h,ac as M,au as _,H as Q,bn as q,y as R,n as E}from"./calfSystem-CIuUjh4H.js"
import{M as S}from"./ModalTabbed-Uquh-7uI.js"
function j(e,i,t,s,a,l,d,n){w("Quick Links Manager","Add Item"),c(i)||c(t)||(r(s,[...c(s),{name:c(a).value,url:c(l).value,newWindow:c(d).checked}],!0),c(a).value="",c(l).value="",c(d).checked=0,n())}var A=l('<div class="svelte-8od2gi"> </div> <div class="svelte-8od2gi"> </div> <div class="centered svelte-8od2gi"><input disabled type="checkbox"/></div> <div class="buttons centered svelte-8od2gi">[ <button type="button" class="svelte-8od2gi">Del</button> ]</div>',1),D=l('<div class="container svelte-8od2gi"><div class="grid headings svelte-8od2gi"><div class="svelte-8od2gi">Name</div> <div class="svelte-8od2gi">URL</div> <div class="centered svelte-8od2gi">New <div class="wrapper svelte-8od2gi">[ <div class="tooltip svelte-8od2gi"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-8od2gi">Action</div></div> <div class="grid items svelte-8od2gi"></div> <div class="grid add svelte-8od2gi"><div><input placeholder="Log" required type="text"/></div> <div><input placeholder="?cmd=log" required type="text"/></div> <div class="centered svelte-8od2gi"><input type="checkbox"/></div> <div class="buttons centered svelte-8od2gi">[ <button type="button" class="svelte-8od2gi">Add</button> ]</div></div></div>')
function H(e,l){i(l,!0)
let h=t(0),M=t(0),_=t(0),Q=t(0),q=t(0),R=t(s(a("quickLinks")||[]))
function E(){f("quickLinks",c(R))}var S=D(),H=d(n(S),2)
o(H,21,()=>c(R),v,(e,i,t)=>{var s=A(),a=x(s),l=n(a),o=d(a,2),v=n(o),u=d(o,2),g=n(u),k=d(u,2)
d(n(k)).__click=()=>function(e){w("Quick Links Manager","Delete Item"),r(R,c(R).toSpliced(e,1),!0),E()}(t),b(()=>{y(l,c(i).name),y(v,c(i).url)}),L(g,()=>c(R)[t].newWindow,e=>c(R)[t].newWindow=e),p(e,s)})
var I=d(H,2),N=n(I),W=n(N)
let C
u(W,e=>r(h,e),()=>c(h))
var O=d(N,2),P=n(O)
let z
u(P,e=>r(_,e),()=>c(_))
var B=d(O,2),F=n(B)
u(F,e=>r(q,e),()=>c(q))
var J=d(B,2)
d(n(J)).__click=[j,M,Q,R,h,_,q,E],b((e,i)=>{C=g(W,1,"svelte-8od2gi",null,C,e),z=g(P,1,"svelte-8od2gi",null,z,i)},[()=>({invalid:c(M)}),()=>({invalid:c(Q)})]),k("blur",W,()=>{r(M,c(h).validity.valueMissing,!0)}),k("focus",W,()=>{r(M,0)}),k("blur",P,()=>{r(Q,c(_).validity.valueMissing,!0)}),k("focus",P,()=>{r(Q,0)}),p(e,S),m()}function I(e,i,t,s){w("Quick Links Raw Editor","Save"),i()?t():r(s,1)}function N(e,i,t,s){w("Quick Links Raw Editor","Reset"),r(i,"[]"),r(t,0),s()}e(["click"])
var W=l('<div class="container svelte-xl4cmh"><div class="textContainer svelte-xl4cmh"><textarea></textarea></div> <div class="bottom svelte-xl4cmh"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function C(e,a){i(a,!0)
let l=t(s(h("quickLinks"))),o=t(0)
const v=()=>M(q(c(l))),u=()=>_("quickLinks",c(l).trim())
var f=W(),w=n(f),x=n(w)
let y
var L=d(w,2),R=n(L)
R.__click=[I,v,u,o],d(R,2).__click=[N,l,o,u],b(e=>y=g(x,1,"svelte-xl4cmh",null,y,e),[()=>({invalid:c(o)})]),k("blur",x,()=>{r(o,!v(),!0)}),k("focus",x,()=>{r(o,0)}),Q(x,()=>c(l),e=>r(l,e)),p(e,f),m()}function O(e,t){i(t,!0)
let s=R(t,"visible",15,!0)
const a=[{component:H,label:"Quick Links"},{component:C,label:"Raw Editor"}]
S(e,{close:function(){w("Quick Links Manager","close"),s(!1)},get tabs(){return a},get visible(){return s()}}),m()}e(["click"])
const P=s({visible:!0})
let z=0
function B(){z?P.visible=!0:z=E(O,{props:P,target:document.body})}export{B as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-BMhMooA_.js.map
