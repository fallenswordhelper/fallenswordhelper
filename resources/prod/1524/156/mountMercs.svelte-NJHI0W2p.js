import{ap as i,x as e,y as s,ak as t,al as v,dX as a,B as d,C as l,E as n,G as c,J as r,P as o,Q as u,L as b,D as m,aM as g,S as h,bj as f,aF as y,F as p,N as x,s as $,I as D,co as _,bB as w,n as k}from"./calfSystem-79LsojAC.js"
import{m as A,v as M}from"./view-DCQJm9-2.js"
async function S(i,e,s){$("mercs","doDecline"),D(e,1),await A({subcmd2:"declineoffer"}),D(s,0),D(e,0)}async function H(i,e,s,t,v,a){$("mercs","doAccept"),D(e,1)
const d=await A({subcmd2:"acceptoffer"})
D(s,[...r(s),t({...r(v),expires:d.r.expires})],!0),D(a,d.r.mercs_available.toString(),!0),D(v,0),D(e,0)}async function T(i,e,s,t,v){$("mercs","getOffer"),D(e,1),D(s,0)
const a=await A({subcmd2:"search"})
a.r?v(a):t()}var C=d('<button class="custombutton svelte-hxs3gy" type="button"> </button>'),E=d('<button class="custombutton svelte-hxs3gy" type="button">Accept Offer</button> &nbsp; <button class="custombutton svelte-hxs3gy" type="button">Decline Offer</button>',1),L=d('<div class="merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" height="125" width="125"/></div> <div class="offer svelte-hxs3gy"><div class="svelte-hxs3gy">Hire Price:</div> <div class="svelte-hxs3gy"><b> </b> <img alt="Gold" class="gold svelte-hxs3gy"/></div> <div class="svelte-hxs3gy">Hire Time:</div> <div class="svelte-hxs3gy"><b> </b> hour(s)</div> <div class="svelte-hxs3gy">Offer Time Left:</div> <div class="svelte-hxs3gy"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class="attribs svelte-hxs3gy"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>',1),P=d('<div class="no-offer svelte-hxs3gy">Your expedition returned without finding any mercenaries.</div>'),G=(i,e,s)=>e(s()),O=d('<div class="active-merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" class="tip-static" height="125" width="125"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class="disband svelte-hxs3gy"><button class="custombutton svelte-hxs3gy" type="button">Disband</button></div></div>'),j=d('<div class="no-active svelte-hxs3gy">[ no active mercenaries ]</div>'),B=d('<div class="merc-hunter svelte-hxs3gy"><div class="top-div svelte-hxs3gy">(<b> </b> available for hire)</div> <div class="button-div svelte-hxs3gy"><!></div> <div class="result-div svelte-hxs3gy"><div class="cols svelte-hxs3gy"><!> <!> <div class="auto-decline svelte-hxs3gy"></div></div></div> <div class="active-title svelte-hxs3gy"><b>Active Mercenaries</b></div> <div class="lower-div svelte-hxs3gy"><div class="active svelte-hxs3gy"><!></div></div></div>')
function F(i,d){e(d,!0)
const k=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],F=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"]
let N=s(d,"visible",15,!0),R=t(1),q=t(0),I=t(0),J=t("?"),Q=t("?"),U=t(v([]))
function V(){D(q,0),D(I,1),D(R,0)}function X(i){let e=Math.floor((i-_())/60)
const s=Math.floor(e/60)
return e%=60,{hours:s,mins:e}}const Y=i=>({...i,...X(i.expires)})
function z(i){D(q,Y(i.r),!0),D(R,0)}async function K(i){var e
$("mercs","doDisband"),D(R,1),await(e=i,A({subcmd2:"disband",merc_id:e})),D(U,r(U).filter(({id:e})=>e!==i),!0),D(R,0)}!async function(){const i=await M()
D(U,i.r.mercs?.map(Y)||[],!0),D(J,i.r.mercs_available.toString(),!0),D(Q,i.r.gold.toString(),!0),i.r.offer?z({r:i.r.offer}):D(R,0)}()
{const e=i=>{var e=w("Merc Hunter")
b(i,e)}
a(i,{close:function(){$("mercs","close"),N(!1)},get visible(){return N()},title:e,children:(i,e)=>{var s=B(),t=n(s),v=l(n(t)),a=n(v),d=l(t,2),x=n(d),$=i=>{var e=C()
e.__click=[T,R,I,V,z]
var s=n(e)
o(()=>{e.disabled=r(R),u(s,`Send Expedition (${r(Q)??""}g)`)}),b(i,e)},D=i=>{var e=E(),s=m(e)
s.__click=[H,R,U,Y,q,J]
var t=l(s,2)
t.__click=[S,R,q],o(()=>{s.disabled=r(R),t.disabled=r(R)}),b(i,e)}
c(x,i=>{r(q)?i(D,!1):i($)})
var _=l(d,2),w=n(_),A=n(w),M=i=>{var e=L(),s=m(e),t=n(s),v=n(t),a=n(v),d=l(t,2),c=n(d),y=l(d,2),p=l(n(y),2),x=n(p),$=n(x),D=l(x,2),_=l(p,4),w=n(_),A=n(w),M=l(_,4),S=n(M),H=n(S),T=l(S,2),C=n(T),E=l(s,2),P=l(n(E),2),G=n(P),O=l(P,4),j=n(O),B=l(O,4),N=n(B),R=l(B,4),I=n(R),J=l(R,4),Q=n(J),U=l(J,4),V=n(U),X=l(U,4),Y=n(X),z=l(X,4),K=n(z)
o(i=>{u(a,r(q).name),h(c,"src",`${f??""}mercs/${r(q).id??""}.png`),u($,i),h(D,"src",`${f??""}currency/0.png`),u(A,r(q).hire_time/3600),u(H,r(q).hours),u(C,r(q).mins),u(G,r(q).level),u(j,F[r(q).class]),u(N,k[r(q).type]),u(I,r(q).attributes[0].value),u(Q,r(q).attributes[1].value),u(V,r(q).attributes[2].value),u(Y,r(q).attributes[3].value),u(K,r(q).attributes[4].value)},[()=>g(r(q).gold)]),b(i,e)}
c(A,i=>{r(q)&&i(M)})
var N=l(A,2),X=i=>{var e=P()
b(i,e)}
c(N,i=>{r(I)&&i(X)})
var W=l(_,4),Z=n(W),ii=n(Z),ei=i=>{var e=y(),s=m(e)
p(s,17,()=>r(U),({attributes:i,class:e,id:s,level:t,name:v,type:a,hours:d,mins:l})=>s,(i,e)=>{let s=()=>r(e).attributes,t=()=>r(e).id,v=()=>r(e).name
var a=O(),d=n(a),c=n(d),m=n(c),g=l(d,2),y=n(g),p=l(g,4),x=n(p),$=n(x),D=l(x,2),_=n(D),w=l(p,2),A=n(w)
A.__click=[G,K,t],o(()=>{u(m,v()),h(y,"data-tipped",`<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>${v()??""}</div>\n                      <div>Level:</div><div>${r(e).level??""}</div>\n                      <div>Classification:</div><div>${F[r(e).class]??""}</div>\n                      <div>Type:</div><div>${k[r(e).type]??""}</div>\n                      <div>Attack:</div><div>${s()[0].value??""}</div>\n                      <div>Defense:</div><div>${s()[1].value??""}</div>\n                      <div>Armor:</div><div>${s()[2].value??""}</div>\n                      <div>HP:</div><div>${s()[3].value??""}</div>\n                      <div>Damage:</div><div>${s()[4].value??""}</div>\n                      </div>`),h(y,"src",`${f??""}mercs/${t()??""}.png`),u($,r(e).hours),u(_,r(e).mins),A.disabled=r(R)}),b(i,a)}),b(i,e)},si=i=>{var e=j()
b(i,e)}
c(ii,i=>{r(U).length?i(ei):i(si,!1)}),o(()=>u(a,r(J))),b(i,s)},$$slots:{title:!0,default:!0}})}x()}i(["click"])
const N=v({visible:!0})
let R=0
function q(){R?N.visible=!0:R=k(F,{props:N,target:document.body})}export{q as default}
//# sourceMappingURL=mountMercs.svelte-NJHI0W2p.js.map
