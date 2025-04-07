import{a6 as e,R as i,S as t,T as s,U as a,X as d,Y as l,Z as n,_ as v,V as c,dU as r,W as o,a7 as u,bw as k,e2 as b,a3 as p,a4 as h,a5 as x,s as m,au as f,a8 as w,aw as g,bH as y,ao as L,K as _,aj as M,a2 as R,bb as q,bE as Q,ad as S}from"./calfSystem-BGW9cdWN.js"
import{M as E}from"./ModalTabbed-Dp4apcr8.js"
function U(e,i,t,s,a,d,l,n){m("Quick Links Manager","Add Item"),c(i)||c(t)||(o(s,[...c(s),{name:c(a).value,url:c(d).value,newWindow:c(l).checked}],!0),c(a).value="",c(d).value="",c(l).checked=0,n())}var W=d('<div class="svelte-dkxhir"> </div> <div class="svelte-dkxhir"> </div> <div class="centered svelte-dkxhir"><input disabled type="checkbox"></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Del</button> ]</div>',1),j=d('<div class="container svelte-dkxhir"><div class="grid headings svelte-dkxhir"><div class="svelte-dkxhir">Name</div> <div class="svelte-dkxhir">URL</div> <div class="centered svelte-dkxhir">New <div class="wrapper svelte-dkxhir">[ <div class="tooltip svelte-dkxhir"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div> ]</div></div> <div class="centered svelte-dkxhir">Action</div></div> <div class="grid items svelte-dkxhir"></div> <div class="grid add svelte-dkxhir"><div><input placeholder="Log" required type="text"></div> <div><input placeholder="?cmd=log" required type="text"></div> <div class="centered svelte-dkxhir"><input type="checkbox"></div> <div class="buttons centered svelte-dkxhir">[ <button type="button" class="svelte-dkxhir">Add</button> ]</div></div></div>')
function A(e,d){i(d,!0)
let L=t(0),_=t(0),M=t(0),R=t(0),q=t(0),Q=t(s(a("quickLinks")||[]))
function S(){x("quickLinks",c(Q))}var E=j(),A=l(n(E),2)
v(A,21,(()=>c(Q)),y,((e,i,t)=>{var s=W(),a=f(s),d=n(a),v=l(a,2),r=n(v),k=l(v,2),b=n(k),h=l(k,2)
l(n(h)).__click=()=>function(e){m("Quick Links Manager","Delete Item"),o(Q,c(Q).toSpliced(e,1),!0),S()}(t),u((()=>{w(d,c(i).name),w(r,c(i).url)})),g(b,(()=>c(Q)[t].newWindow),(e=>c(Q)[t].newWindow=e)),p(e,s)}))
var D=l(A,2),I=n(D),N=n(I)
let T
r(N,(e=>o(L,e)),(()=>c(L)))
var C=l(I,2),H=n(C)
let K
r(H,(e=>o(M,e)),(()=>c(M)))
var O=l(C,2),V=n(O)
r(V,(e=>o(q,e)),(()=>c(q)))
var X=l(O,2)
l(n(X)).__click=[U,_,R,Q,L,M,q,S],u(((e,i)=>{T=k(N,1,"svelte-dkxhir",null,T,e),K=k(H,1,"svelte-dkxhir",null,K,i)}),[()=>({invalid:c(_)}),()=>({invalid:c(R)})]),b("blur",N,(()=>{o(_,c(L).validity.valueMissing,!0)})),b("focus",N,(()=>{o(_,0)})),b("blur",H,(()=>{o(R,c(M).validity.valueMissing,!0)})),b("focus",H,(()=>{o(R,0)})),p(e,E),h()}function D(e,i,t,s){m("Quick Links Raw Editor","Save"),i()?t():o(s,1)}function I(e,i,t,s){m("Quick Links Raw Editor","Reset"),o(i,"[]"),o(t,0),s()}e(["click"])
var N=d('<div class="container svelte-atd1b8"><div class="textContainer svelte-atd1b8"><textarea></textarea></div> <div class="bottom svelte-atd1b8"><button type="button">Save</button> <button type="button">Reset</button></div></div>')
function T(e,a){i(a,!0)
let d=t(s(L("quickLinks"))),v=t(0)
const r=()=>_(q(c(d))),x=()=>M("quickLinks",c(d).trim())
var m=N(),f=n(m),w=n(f)
let g
var y=l(f,2),Q=n(y)
Q.__click=[D,r,x,v],l(Q,2).__click=[I,d,v,x],u((e=>g=k(w,1,"svelte-atd1b8",null,g,e)),[()=>({invalid:c(v)})]),b("blur",w,(()=>{o(v,!r(),!0)})),b("focus",w,(()=>{o(v,0)})),R(w,(()=>c(d)),(e=>o(d,e))),p(e,m),h()}function C(e,t){i(t,!0)
let s=Q(t,"visible",15,!0)
E(e,{close:function(){m("Quick Links Manager","close"),s(!1)},tabs:[{component:A,label:"Quick Links"},{component:T,label:"Raw Editor"}],get visible(){return s()}}),h()}e(["click"])
const H=s({visible:!0})
let K=0
function O(){K?H.visible=!0:K=S(C,{props:H,target:document.body})}export{O as default}
//# sourceMappingURL=mountQuickLinksMgr.svelte-AL6AQ05M.js.map
