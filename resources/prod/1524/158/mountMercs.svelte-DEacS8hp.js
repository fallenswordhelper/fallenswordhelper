import{ao as i,x as e,y as a,aj as s,ak as t,dR as v,B as d,C as c,E as r,G as l,J as n,P as o,Q as u,L as b,D as p,aM as m,S as f,bk as y,aF as w,F as g,N as h,s as $,I as D,cp as _,bC as k,n as A}from"./calfSystem-CIuUjh4H.js"
import{m as x,v as M}from"./view-CBmV8zyu.js"
async function S(i,e,a){$("mercs","doDecline"),D(e,1),await x({subcmd2:"declineoffer"}),D(a,0),D(e,0)}async function C(i,e,a,s,t,v){$("mercs","doAccept"),D(e,1)
const d=await x({subcmd2:"acceptoffer"})
D(a,[...n(a),s({...n(t),expires:d.r.expires})],!0),D(v,d.r.mercs_available.toString(),!0),D(t,0),D(e,0)}async function H(i,e,a,s,t){$("mercs","getOffer"),D(e,1),D(a,0)
const v=await x({subcmd2:"search"})
v.r?t(v):s()}var T=d('<button class="custombutton svelte-prywca" type="button"> </button>'),E=d('<button class="custombutton svelte-prywca" type="button">Accept Offer</button> &nbsp; <button class="custombutton svelte-prywca" type="button">Decline Offer</button>',1),L=d('<div class="merc svelte-prywca"><div><b> </b></div> <div><img alt="alt" height="125" width="125"/></div> <div class="offer svelte-prywca"><div class="svelte-prywca">Hire Price:</div> <div class="svelte-prywca"><b> </b> <img alt="Gold" class="gold svelte-prywca"/></div> <div class="svelte-prywca">Hire Time:</div> <div class="svelte-prywca"><b> </b> hour(s)</div> <div class="svelte-prywca">Offer Time Left:</div> <div class="svelte-prywca"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class="attribs svelte-prywca"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>',1),P=d('<div class="no-offer svelte-prywca">Your expedition returned without finding any mercenaries.</div>'),G=(i,e,a)=>e(a()),O=d('<div class="active-merc svelte-prywca"><div><b> </b></div> <div><img alt="alt" class="tip-static" height="125" width="125"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class="disband svelte-prywca"><button class="custombutton svelte-prywca" type="button">Disband</button></div></div>'),j=d('<div class="no-active svelte-prywca">[ no active mercenaries ]</div>'),F=d('<div class="merc-hunter svelte-prywca"><div class="top-div svelte-prywca">(<b> </b> available for hire)</div> <div class="button-div svelte-prywca"><!></div> <div class="result-div svelte-prywca"><div class="cols svelte-prywca"><!> <!> <div class="auto-decline svelte-prywca"></div></div></div> <div class="active-title svelte-prywca"><b>Active Mercenaries</b></div> <div class="lower-div svelte-prywca"><div class="active svelte-prywca"><!></div></div></div>')
function N(i,d){e(d,!0)
const A=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],N=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"]
let R=a(d,"visible",15,!0),B=s(1),q=s(0),I=s(0),J=s("?"),Q=s("?"),U=s(t([]))
function V(){D(q,0),D(I,1),D(B,0)}function Y(i){let e=Math.floor((i-_())/60)
const a=Math.floor(e/60)
return e%=60,{hours:a,mins:e}}const z=i=>({...i,...Y(i.expires)})
function K(i){D(q,z(i.r),!0),D(B,0)}async function W(i){var e
$("mercs","doDisband"),D(B,1),await(e=i,x({subcmd2:"disband",merc_id:e})),D(U,n(U).filter(({id:e})=>e!==i),!0),D(B,0)}!async function(){const i=await M()
D(U,i.r.mercs?.map(z)||[],!0),D(J,i.r.mercs_available.toString(),!0),D(Q,i.r.gold.toString(),!0),i.r.offer?K({r:i.r.offer}):D(B,0)}()
{const e=i=>{var e=k("Merc Hunter")
b(i,e)}
v(i,{close:function(){$("mercs","close"),R(!1)},get visible(){return R()},title:e,children:(i,e)=>{var a=F(),s=r(a),t=c(r(s)),v=r(t),d=c(s,2),h=r(d),$=i=>{var e=T()
e.__click=[H,B,I,V,K]
var a=r(e)
o(()=>{e.disabled=n(B),u(a,`Send Expedition (${n(Q)??""}g)`)}),b(i,e)},D=i=>{var e=E(),a=p(e)
a.__click=[C,B,U,z,q,J]
var s=c(a,2)
s.__click=[S,B,q],o(()=>{a.disabled=n(B),s.disabled=n(B)}),b(i,e)}
l(h,i=>{n(q)?i(D,!1):i($)})
var _=c(d,2),k=r(_),x=r(k),M=i=>{var e=L(),a=p(e),s=r(a),t=r(s),v=r(t),d=c(s,2),l=r(d),w=c(d,2),g=c(r(w),2),h=r(g),$=r(h),D=c(h,2),_=c(g,4),k=r(_),x=r(k),M=c(_,4),S=r(M),C=r(S),H=c(S,2),T=r(H),E=c(a,2),P=c(r(E),2),G=r(P),O=c(P,4),j=r(O),F=c(O,4),R=r(F),B=c(F,4),I=r(B),J=c(B,4),Q=r(J),U=c(J,4),V=r(U),Y=c(U,4),z=r(Y),K=c(Y,4),W=r(K)
o(i=>{u(v,n(q).name),f(l,"src",`${y??""}mercs/${n(q).id??""}.png`),u($,i),f(D,"src",`${y??""}currency/0.png`),u(x,n(q).hire_time/3600),u(C,n(q).hours),u(T,n(q).mins),u(G,n(q).level),u(j,N[n(q).class]),u(R,A[n(q).type]),u(I,n(q).attributes[0].value),u(Q,n(q).attributes[1].value),u(V,n(q).attributes[2].value),u(z,n(q).attributes[3].value),u(W,n(q).attributes[4].value)},[()=>m(n(q).gold)]),b(i,e)}
l(x,i=>{n(q)&&i(M)})
var R=c(x,2),Y=i=>{var e=P()
b(i,e)}
l(R,i=>{n(I)&&i(Y)})
var X=c(_,4),Z=r(X),ii=r(Z),ei=i=>{var e=w(),a=p(e)
g(a,17,()=>n(U),({attributes:i,class:e,id:a,level:s,name:t,type:v,hours:d,mins:c})=>a,(i,e)=>{let a=()=>n(e).attributes,s=()=>n(e).id,t=()=>n(e).name
var v=O(),d=r(v),l=r(d),p=r(l),m=c(d,2),w=r(m),g=c(m,4),h=r(g),$=r(h),D=c(h,2),_=r(D),k=c(g,2),x=r(k)
x.__click=[G,W,s],o(()=>{u(p,t()),f(w,"data-tipped",`<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>${t()??""}</div>\n                      <div>Level:</div><div>${n(e).level??""}</div>\n                      <div>Classification:</div><div>${N[n(e).class]??""}</div>\n                      <div>Type:</div><div>${A[n(e).type]??""}</div>\n                      <div>Attack:</div><div>${a()[0].value??""}</div>\n                      <div>Defense:</div><div>${a()[1].value??""}</div>\n                      <div>Armor:</div><div>${a()[2].value??""}</div>\n                      <div>HP:</div><div>${a()[3].value??""}</div>\n                      <div>Damage:</div><div>${a()[4].value??""}</div>\n                      </div>`),f(w,"src",`${y??""}mercs/${s()??""}.png`),u($,n(e).hours),u(_,n(e).mins),x.disabled=n(B)}),b(i,v)}),b(i,e)},ai=i=>{var e=j()
b(i,e)}
l(ii,i=>{n(U).length?i(ei):i(ai,!1)}),o(()=>u(v,n(J))),b(i,a)},$$slots:{title:!0,default:!0}})}h()}i(["click"])
const R=t({visible:!0})
let B=0
function q(){B?R.visible=!0:B=A(N,{props:R,target:document.body})}export{q as default}
//# sourceMappingURL=mountMercs.svelte-DEacS8hp.js.map
