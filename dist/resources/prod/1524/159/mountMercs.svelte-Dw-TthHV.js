import{ap as i,y as e,z as a,ak as s,al as t,dW as v,C as d,D as c,F as r,H as l,K as n,Q as o,R as u,N as b,E as p,aN as m,T as f,bm as y,aG as w,G as g,O as h,s as $,J as D,cq as _,bE as k,t as A}from"./calfSystem-CIdPz3EO.js"
import{m as x,v as H}from"./view-CgrUYop7.js"
async function M(i,e,a){$("mercs","doDecline"),D(e,1),await x({subcmd2:"declineoffer"}),D(a,0),D(e,0)}async function T(i,e,a,s,t,v){$("mercs","doAccept"),D(e,1)
const d=await x({subcmd2:"acceptoffer"})
D(a,[...n(a),s({...n(t),expires:d.r.expires})],!0),D(v,d.r.mercs_available.toString(),!0),D(t,0),D(e,0)}async function E(i,e,a,s,t){$("mercs","getOffer"),D(e,1),D(a,0)
const v=await x({subcmd2:"search"})
v.r?t(v):s()}var S=d('<button class="custombutton svelte-prywca" type="button"> </button>'),C=d('<button class="custombutton svelte-prywca" type="button">Accept Offer</button> &nbsp; <button class="custombutton svelte-prywca" type="button">Decline Offer</button>',1),G=d('<div class="merc svelte-prywca"><div><b> </b></div> <div><img alt="alt" height="125" width="125"/></div> <div class="offer svelte-prywca"><div class="svelte-prywca">Hire Price:</div> <div class="svelte-prywca"><b> </b> <img alt="Gold" class="gold svelte-prywca"/></div> <div class="svelte-prywca">Hire Time:</div> <div class="svelte-prywca"><b> </b> hour(s)</div> <div class="svelte-prywca">Offer Time Left:</div> <div class="svelte-prywca"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class="attribs svelte-prywca"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>',1),O=d('<div class="no-offer svelte-prywca">Your expedition returned without finding any mercenaries.</div>'),L=(i,e,a)=>e(a()),N=d('<div class="active-merc svelte-prywca"><div><b> </b></div> <div><img alt="alt" class="tip-static" height="125" width="125"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class="disband svelte-prywca"><button class="custombutton svelte-prywca" type="button">Disband</button></div></div>'),P=d('<div class="no-active svelte-prywca">[ no active mercenaries ]</div>'),R=d('<div class="merc-hunter svelte-prywca"><div class="top-div svelte-prywca">(<b> </b> available for hire)</div> <div class="button-div svelte-prywca"><!></div> <div class="result-div svelte-prywca"><div class="cols svelte-prywca"><!> <!> <div class="auto-decline svelte-prywca"></div></div></div> <div class="active-title svelte-prywca"><b>Active Mercenaries</b></div> <div class="lower-div svelte-prywca"><div class="active svelte-prywca"><!></div></div></div>')
function j(i,d){e(d,!0)
const A=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],j=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"]
let q=a(d,"visible",15,!0),F=s(1),z=s(0),B=s(0),J=s("?"),K=s("?"),Q=s(t([]))
function U(){D(z,0),D(B,1),D(F,0)}function V(i){let e=Math.floor((i-_())/60)
const a=Math.floor(e/60)
return e%=60,{hours:a,mins:e}}const W=i=>({...i,...V(i.expires)})
function Y(i){D(z,W(i.r),!0),D(F,0)}async function I(i){var e
$("mercs","doDisband"),D(F,1),await(e=i,x({subcmd2:"disband",merc_id:e})),D(Q,n(Q).filter(({id:e})=>e!==i),!0),D(F,0)}!async function(){const i=await H()
D(Q,i.r.mercs?.map(W)||[],!0),D(J,i.r.mercs_available.toString(),!0),D(K,i.r.gold.toString(),!0),i.r.offer?Y({r:i.r.offer}):D(F,0)}()
{const e=i=>{var e=k("Merc Hunter")
b(i,e)}
v(i,{close:function(){$("mercs","close"),q(!1)},get visible(){return q()},title:e,children:(i,e)=>{var a=R(),s=r(a),t=c(r(s)),v=r(t),d=c(s,2),h=r(d),$=i=>{var e=S()
e.__click=[E,F,B,U,Y]
var a=r(e)
o(()=>{e.disabled=n(F),u(a,`Send Expedition (${n(K)??""}g)`)}),b(i,e)},D=i=>{var e=C(),a=p(e)
a.__click=[T,F,Q,W,z,J]
var s=c(a,2)
s.__click=[M,F,z],o(()=>{a.disabled=n(F),s.disabled=n(F)}),b(i,e)}
l(h,i=>{n(z)?i(D,!1):i($)})
var _=c(d,2),k=r(_),x=r(k),H=i=>{var e=G(),a=p(e),s=r(a),t=r(s),v=r(t),d=c(s,2),l=r(d),w=c(d,2),g=c(r(w),2),h=r(g),$=r(h),D=c(h,2),_=c(g,4),k=r(_),x=r(k),H=c(_,4),M=r(H),T=r(M),E=c(M,2),S=r(E),C=c(a,2),O=c(r(C),2),L=r(O),N=c(O,4),P=r(N),R=c(N,4),q=r(R),F=c(R,4),B=r(F),J=c(F,4),K=r(J),Q=c(J,4),U=r(Q),V=c(Q,4),W=r(V),Y=c(V,4),I=r(Y)
o(i=>{u(v,n(z).name),f(l,"src",`${y??""}mercs/${n(z).id??""}.png`),u($,i),f(D,"src",`${y??""}currency/0.png`),u(x,n(z).hire_time/3600),u(T,n(z).hours),u(S,n(z).mins),u(L,n(z).level),u(P,j[n(z).class]),u(q,A[n(z).type]),u(B,n(z).attributes[0].value),u(K,n(z).attributes[1].value),u(U,n(z).attributes[2].value),u(W,n(z).attributes[3].value),u(I,n(z).attributes[4].value)},[()=>m(n(z).gold)]),b(i,e)}
l(x,i=>{n(z)&&i(H)})
var q=c(x,2),V=i=>{var e=O()
b(i,e)}
l(q,i=>{n(B)&&i(V)})
var X=c(_,4),Z=r(X),ii=r(Z),ei=i=>{var e=w(),a=p(e)
g(a,17,()=>n(Q),({attributes:i,class:e,id:a,level:s,name:t,type:v,hours:d,mins:c})=>a,(i,e)=>{let a=()=>n(e).attributes,s=()=>n(e).id,t=()=>n(e).name
var v=N(),d=r(v),l=r(d),p=r(l),m=c(d,2),w=r(m),g=c(m,4),h=r(g),$=r(h),D=c(h,2),_=r(D),k=c(g,2),x=r(k)
x.__click=[L,I,s],o(()=>{u(p,t()),f(w,"data-tipped",`<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>${t()??""}</div>\n                      <div>Level:</div><div>${n(e).level??""}</div>\n                      <div>Classification:</div><div>${j[n(e).class]??""}</div>\n                      <div>Type:</div><div>${A[n(e).type]??""}</div>\n                      <div>Attack:</div><div>${a()[0].value??""}</div>\n                      <div>Defense:</div><div>${a()[1].value??""}</div>\n                      <div>Armor:</div><div>${a()[2].value??""}</div>\n                      <div>HP:</div><div>${a()[3].value??""}</div>\n                      <div>Damage:</div><div>${a()[4].value??""}</div>\n                      </div>`),f(w,"src",`${y??""}mercs/${s()??""}.png`),u($,n(e).hours),u(_,n(e).mins),x.disabled=n(F)}),b(i,v)}),b(i,e)},ai=i=>{var e=P()
b(i,e)}
l(ii,i=>{n(Q).length?i(ei):i(ai,!1)}),o(()=>u(v,n(J))),b(i,a)},$$slots:{title:!0,default:!0}})}h()}i(["click"])
const q=t({visible:!0})
let F=0
function z(){F?q.visible=!0:F=A(j,{props:q,target:document.body})}export{z as default}
//# sourceMappingURL=mountMercs.svelte-Dw-TthHV.js.map
