import{ap as i,y as e,z as a,ak as s,al as t,dW as v,C as d,D as c,F as r,H as l,K as n,Q as o,R as u,N as b,E as p,aN as m,T as y,bn as f,aG as w,G as g,O as h,s as $,J as D,bQ as _,co as k,t as A}from"./calfSystem-Cs6CSxoU.js"
import{m as x,v as H}from"./view-C-EW1Um4.js"
var M=d('<button class="custombutton svelte-prywca" type="button"> </button>'),T=d('<button class="custombutton svelte-prywca" type="button">Accept Offer</button> &nbsp; <button class="custombutton svelte-prywca" type="button">Decline Offer</button>',1),S=d('<div class="merc svelte-prywca"><div><b> </b></div> <div><img alt="alt" height="125" width="125"/></div> <div class="offer svelte-prywca"><div class="svelte-prywca">Hire Price:</div> <div class="svelte-prywca"><b> </b> <img alt="Gold" class="gold svelte-prywca"/></div> <div class="svelte-prywca">Hire Time:</div> <div class="svelte-prywca"><b> </b> hour(s)</div> <div class="svelte-prywca">Offer Time Left:</div> <div class="svelte-prywca"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class="attribs svelte-prywca"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>',1),C=d('<div class="no-offer svelte-prywca">Your expedition returned without finding any mercenaries.</div>'),E=d('<div class="active-merc svelte-prywca"><div><b> </b></div> <div><img alt="alt" class="tip-static" height="125" width="125"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class="disband svelte-prywca"><button class="custombutton svelte-prywca" type="button">Disband</button></div></div>'),G=d('<div class="no-active svelte-prywca">[ no active mercenaries ]</div>'),O=d('<div class="merc-hunter svelte-prywca"><div class="top-div svelte-prywca">(<b> </b> available for hire)</div> <div class="button-div svelte-prywca"><!></div> <div class="result-div svelte-prywca"><div class="cols svelte-prywca"><!> <!> <div class="auto-decline svelte-prywca"></div></div></div> <div class="active-title svelte-prywca"><b>Active Mercenaries</b></div> <div class="lower-div svelte-prywca"><div class="active svelte-prywca"><!></div></div></div>')
function L(i,d){e(d,!0)
const A=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],L=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"]
let N=a(d,"visible",15,!0),P=s(1),R=s(0),j=s(0),F=s("?"),Q=s("?"),q=s(t([]))
async function z(){$("mercs","doDecline"),D(P,1),await x({subcmd2:"declineoffer"}),D(R,0),D(P,0)}function B(i){let e=Math.floor((i-k())/60)
const a=Math.floor(e/60)
return e%=60,{hours:a,mins:e}}const J=i=>({...i,...B(i.expires)})
async function K(){$("mercs","doAccept"),D(P,1)
const i=await x({subcmd2:"acceptoffer"})
D(q,[...n(q),J({...n(R),expires:i.r.expires})],!0),D(F,i.r.mercs_available.toString(),!0),D(R,0),D(P,0)}function U(i){D(R,J(i.r),!0),D(P,0)}async function V(){$("mercs","getOffer"),D(P,1),D(j,0)
const i=await x({subcmd2:"search"})
i.r?U(i):(D(R,0),D(j,1),D(P,0))}async function W(i){var e
$("mercs","doDisband"),D(P,1),await(e=i,x({subcmd2:"disband",merc_id:e})),D(q,n(q).filter(({id:e})=>e!==i),!0),D(P,0)}!async function(){const i=await H()
D(q,i.r.mercs?.map(J)||[],!0),D(F,i.r.mercs_available.toString(),!0),D(Q,i.r.gold.toString(),!0),i.r.offer?U({r:i.r.offer}):D(P,0)}()
{const e=i=>{var e=_("Merc Hunter")
b(i,e)}
v(i,{close:function(){$("mercs","close"),N(!1)},get visible(){return N()},title:e,children:(i,e)=>{var a=O(),s=r(a),t=c(r(s)),v=r(t),d=c(s,2),h=r(d),$=i=>{var e=M()
e.__click=V
var a=r(e)
o(()=>{e.disabled=n(P),u(a,`Send Expedition (${n(Q)??""}g)`)}),b(i,e)},D=i=>{var e=T(),a=p(e)
a.__click=K
var s=c(a,2)
s.__click=z,o(()=>{a.disabled=n(P),s.disabled=n(P)}),b(i,e)}
l(h,i=>{n(R)?i(D,!1):i($)})
var _=c(d,2),k=r(_),x=r(k),H=i=>{var e=S(),a=p(e),s=r(a),t=r(s),v=r(t),d=c(s,2),l=r(d),w=c(d,2),g=c(r(w),2),h=r(g),$=r(h),D=c(h,2),_=c(g,4),k=r(_),x=r(k),H=c(_,4),M=r(H),T=r(M),C=c(M,2),E=r(C),G=c(a,2),O=c(r(G),2),N=r(O),P=c(O,4),j=r(P),F=c(P,4),Q=r(F),q=c(F,4),z=r(q),B=c(q,4),J=r(B),K=c(B,4),U=r(K),V=c(K,4),W=r(V),Y=c(V,4),I=r(Y)
o(i=>{u(v,n(R).name),y(l,"src",`${f??""}mercs/${n(R).id??""}.png`),u($,i),y(D,"src",`${f??""}currency/0.png`),u(x,n(R).hire_time/3600),u(T,n(R).hours),u(E,n(R).mins),u(N,n(R).level),u(j,L[n(R).class]),u(Q,A[n(R).type]),u(z,n(R).attributes[0].value),u(J,n(R).attributes[1].value),u(U,n(R).attributes[2].value),u(W,n(R).attributes[3].value),u(I,n(R).attributes[4].value)},[()=>m(n(R).gold)]),b(i,e)}
l(x,i=>{n(R)&&i(H)})
var N=c(x,2),B=i=>{var e=C()
b(i,e)}
l(N,i=>{n(j)&&i(B)})
var J=c(_,4),U=r(J),Y=r(U),I=i=>{var e=w(),a=p(e)
g(a,17,()=>n(q),({attributes:i,class:e,id:a,level:s,name:t,type:v,hours:d,mins:c})=>a,(i,e)=>{let a=()=>n(e).attributes,s=()=>n(e).id,t=()=>n(e).name
var v=E(),d=r(v),l=r(d),p=r(l),m=c(d,2),w=r(m),g=c(m,4),h=r(g),$=r(h),D=c(h,2),_=r(D),k=c(g,2),x=r(k)
x.__click=()=>W(s()),o(()=>{u(p,t()),y(w,"data-tipped",`<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>${t()??""}</div>\n                      <div>Level:</div><div>${n(e).level??""}</div>\n                      <div>Classification:</div><div>${L[n(e).class]??""}</div>\n                      <div>Type:</div><div>${A[n(e).type]??""}</div>\n                      <div>Attack:</div><div>${a()[0].value??""}</div>\n                      <div>Defense:</div><div>${a()[1].value??""}</div>\n                      <div>Armor:</div><div>${a()[2].value??""}</div>\n                      <div>HP:</div><div>${a()[3].value??""}</div>\n                      <div>Damage:</div><div>${a()[4].value??""}</div>\n                      </div>`),y(w,"src",`${f??""}mercs/${s()??""}.png`),u($,n(e).hours),u(_,n(e).mins),x.disabled=n(P)}),b(i,v)}),b(i,e)},X=i=>{var e=G()
b(i,e)}
l(Y,i=>{n(q).length?i(I):i(X,!1)}),o(()=>u(v,n(F))),b(i,a)},$$slots:{title:!0,default:!0}})}h()}i(["click"])
const N=t({visible:!0})
let P=0
function R(){P?N.visible=!0:P=A(L,{props:N,target:document.body})}export{R as default}
//# sourceMappingURL=mountMercs.svelte-DAmBby-v.js.map
