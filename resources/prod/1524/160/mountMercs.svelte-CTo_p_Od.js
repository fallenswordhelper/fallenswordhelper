import{ap as i,y as e,z as a,ak as s,al as t,dW as v,C as d,D as c,F as r,H as l,K as n,P as o,S as u,N as b,E as p,aN as m,Q as y,bm as f,aG as w,G as g,O as h,s as $,J as D,bG as _,cq as k,t as A}from"./calfSystem-HVCiy-VV.js"
import{m as x,v as H}from"./view-jWAS52FR.js"
var M=d('<button class="custombutton svelte-prywca" type="button"> </button>'),S=d('<button class="custombutton svelte-prywca" type="button">Accept Offer</button> &nbsp; <button class="custombutton svelte-prywca" type="button">Decline Offer</button>',1),G=d('<div class="merc svelte-prywca"><div><b> </b></div> <div><img alt="alt" height="125" width="125"/></div> <div class="offer svelte-prywca"><div class="svelte-prywca">Hire Price:</div> <div class="svelte-prywca"><b> </b> <img alt="Gold" class="gold svelte-prywca"/></div> <div class="svelte-prywca">Hire Time:</div> <div class="svelte-prywca"><b> </b> hour(s)</div> <div class="svelte-prywca">Offer Time Left:</div> <div class="svelte-prywca"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class="attribs svelte-prywca"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>',1),T=d('<div class="no-offer svelte-prywca">Your expedition returned without finding any mercenaries.</div>'),C=d('<div class="active-merc svelte-prywca"><div><b> </b></div> <div><img alt="alt" class="tip-static" height="125" width="125"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class="disband svelte-prywca"><button class="custombutton svelte-prywca" type="button">Disband</button></div></div>'),E=d('<div class="no-active svelte-prywca">[ no active mercenaries ]</div>'),O=d('<div class="merc-hunter svelte-prywca"><div class="top-div svelte-prywca">(<b> </b> available for hire)</div> <div class="button-div svelte-prywca"><!></div> <div class="result-div svelte-prywca"><div class="cols svelte-prywca"><!> <!> <div class="auto-decline svelte-prywca"></div></div></div> <div class="active-title svelte-prywca"><b>Active Mercenaries</b></div> <div class="lower-div svelte-prywca"><div class="active svelte-prywca"><!></div></div></div>')
function P(i,d){e(d,!0)
const A=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],P=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"]
let L=a(d,"visible",15,!0),N=s(1),j=s(0),q=s(0),F=s("?"),R=s("?"),z=s(t([]))
async function B(){$("mercs","doDecline"),D(N,1),await x({subcmd2:"declineoffer"}),D(j,0),D(N,0)}function J(i){let e=Math.floor((i-k())/60)
const a=Math.floor(e/60)
return e%=60,{hours:a,mins:e}}const K=i=>({...i,...J(i.expires)})
async function Q(){$("mercs","doAccept"),D(N,1)
const i=await x({subcmd2:"acceptoffer"})
D(z,[...n(z),K({...n(j),expires:i.r.expires})],!0),D(F,i.r.mercs_available.toString(),!0),D(j,0),D(N,0)}function U(i){D(j,K(i.r),!0),D(N,0)}async function V(){$("mercs","getOffer"),D(N,1),D(q,0)
const i=await x({subcmd2:"search"})
i.r?U(i):(D(j,0),D(q,1),D(N,0))}async function W(i){var e
$("mercs","doDisband"),D(N,1),await(e=i,x({subcmd2:"disband",merc_id:e})),D(z,n(z).filter(({id:e})=>e!==i),!0),D(N,0)}!async function(){const i=await H()
D(z,i.r.mercs?.map(K)||[],!0),D(F,i.r.mercs_available.toString(),!0),D(R,i.r.gold.toString(),!0),i.r.offer?U({r:i.r.offer}):D(N,0)}()
{const e=i=>{var e=_("Merc Hunter")
b(i,e)}
v(i,{close:function(){$("mercs","close"),L(!1)},get visible(){return L()},title:e,children:(i,e)=>{var a=O(),s=r(a),t=c(r(s)),v=r(t),d=c(s,2),h=r(d),$=i=>{var e=M()
e.__click=V
var a=r(e)
o(()=>{e.disabled=n(N),u(a,`Send Expedition (${n(R)??""}g)`)}),b(i,e)},D=i=>{var e=S(),a=p(e)
a.__click=Q
var s=c(a,2)
s.__click=B,o(()=>{a.disabled=n(N),s.disabled=n(N)}),b(i,e)}
l(h,i=>{n(j)?i(D,!1):i($)})
var _=c(d,2),k=r(_),x=r(k),H=i=>{var e=G(),a=p(e),s=r(a),t=r(s),v=r(t),d=c(s,2),l=r(d),w=c(d,2),g=c(r(w),2),h=r(g),$=r(h),D=c(h,2),_=c(g,4),k=r(_),x=r(k),H=c(_,4),M=r(H),S=r(M),T=c(M,2),C=r(T),E=c(a,2),O=c(r(E),2),L=r(O),N=c(O,4),q=r(N),F=c(N,4),R=r(F),z=c(F,4),B=r(z),J=c(z,4),K=r(J),Q=c(J,4),U=r(Q),V=c(Q,4),W=r(V),Y=c(V,4),I=r(Y)
o(i=>{u(v,n(j).name),y(l,"src",`${f??""}mercs/${n(j).id??""}.png`),u($,i),y(D,"src",`${f??""}currency/0.png`),u(x,n(j).hire_time/3600),u(S,n(j).hours),u(C,n(j).mins),u(L,n(j).level),u(q,P[n(j).class]),u(R,A[n(j).type]),u(B,n(j).attributes[0].value),u(K,n(j).attributes[1].value),u(U,n(j).attributes[2].value),u(W,n(j).attributes[3].value),u(I,n(j).attributes[4].value)},[()=>m(n(j).gold)]),b(i,e)}
l(x,i=>{n(j)&&i(H)})
var L=c(x,2),J=i=>{var e=T()
b(i,e)}
l(L,i=>{n(q)&&i(J)})
var K=c(_,4),U=r(K),Y=r(U),I=i=>{var e=w(),a=p(e)
g(a,17,()=>n(z),({attributes:i,class:e,id:a,level:s,name:t,type:v,hours:d,mins:c})=>a,(i,e)=>{let a=()=>n(e).attributes,s=()=>n(e).id,t=()=>n(e).name
var v=C(),d=r(v),l=r(d),p=r(l),m=c(d,2),w=r(m),g=c(m,4),h=r(g),$=r(h),D=c(h,2),_=r(D),k=c(g,2),x=r(k)
x.__click=()=>W(s()),o(()=>{u(p,t()),y(w,"data-tipped",`<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>${t()??""}</div>\n                      <div>Level:</div><div>${n(e).level??""}</div>\n                      <div>Classification:</div><div>${P[n(e).class]??""}</div>\n                      <div>Type:</div><div>${A[n(e).type]??""}</div>\n                      <div>Attack:</div><div>${a()[0].value??""}</div>\n                      <div>Defense:</div><div>${a()[1].value??""}</div>\n                      <div>Armor:</div><div>${a()[2].value??""}</div>\n                      <div>HP:</div><div>${a()[3].value??""}</div>\n                      <div>Damage:</div><div>${a()[4].value??""}</div>\n                      </div>`),y(w,"src",`${f??""}mercs/${s()??""}.png`),u($,n(e).hours),u(_,n(e).mins),x.disabled=n(N)}),b(i,v)}),b(i,e)},X=i=>{var e=E()
b(i,e)}
l(Y,i=>{n(z).length?i(I):i(X,!1)}),o(()=>u(v,n(F))),b(i,a)},$$slots:{title:!0,default:!0}})}h()}i(["click"])
const L=t({visible:!0})
let N=0
function j(){N?L.visible=!0:N=A(P,{props:L,target:document.body})}export{j as default}
//# sourceMappingURL=mountMercs.svelte-CTo_p_Od.js.map
