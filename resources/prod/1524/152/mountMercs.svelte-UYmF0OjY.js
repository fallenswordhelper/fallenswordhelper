import{aq as i,z as e,A as s,al as t,am as v,e4 as a,C as d,D as l,F as n,H as c,K as r,Q as o,R as u,N as b,E as m,aN as g,T as h,bh as f,aG as y,G as p,O as x,s as $,J as D,cm as _,bz as w,u as A}from"./calfSystem-BlPuMQGT.js"
import{m as k,v as H}from"./view-Bqx5GDG8.js"
async function M(i,e,s){$("mercs","doDecline"),D(e,1),await k({subcmd2:"declineoffer"}),D(s,0),D(e,0)}async function T(i,e,s,t,v,a){$("mercs","doAccept"),D(e,1)
const d=await k({subcmd2:"acceptoffer"})
D(s,[...r(s),t({...r(v),expires:d.r.expires})],!0),D(a,d.r.mercs_available.toString(),!0),D(v,0),D(e,0)}async function S(i,e,s,t,v){$("mercs","getOffer"),D(e,1),D(s,0)
const a=await k({subcmd2:"search"})
a.r?v(a):t()}var C=d('<button class="custombutton svelte-hxs3gy" type="button"> </button>'),E=d('<button class="custombutton svelte-hxs3gy" type="button">Accept Offer</button> &nbsp; <button class="custombutton svelte-hxs3gy" type="button">Decline Offer</button>',1),G=d('<div class="merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" height="125" width="125"/></div> <div class="offer svelte-hxs3gy"><div class="svelte-hxs3gy">Hire Price:</div> <div class="svelte-hxs3gy"><b> </b> <img alt="Gold" class="gold svelte-hxs3gy"/></div> <div class="svelte-hxs3gy">Hire Time:</div> <div class="svelte-hxs3gy"><b> </b> hour(s)</div> <div class="svelte-hxs3gy">Offer Time Left:</div> <div class="svelte-hxs3gy"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class="attribs svelte-hxs3gy"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>',1),O=d('<div class="no-offer svelte-hxs3gy">Your expedition returned without finding any mercenaries.</div>'),L=(i,e,s)=>e(s()),N=d('<div class="active-merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" class="tip-static" height="125" width="125"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class="disband svelte-hxs3gy"><button class="custombutton svelte-hxs3gy" type="button">Disband</button></div></div>'),P=d('<div class="no-active svelte-hxs3gy">[ no active mercenaries ]</div>'),R=d('<div class="merc-hunter svelte-hxs3gy"><div class="top-div svelte-hxs3gy">(<b> </b> available for hire)</div> <div class="button-div svelte-hxs3gy"><!></div> <div class="result-div svelte-hxs3gy"><div class="cols svelte-hxs3gy"><!> <!> <div class="auto-decline svelte-hxs3gy"></div></div></div> <div class="active-title svelte-hxs3gy"><b>Active Mercenaries</b></div> <div class="lower-div svelte-hxs3gy"><div class="active svelte-hxs3gy"><!></div></div></div>')
function j(i,d){e(d,!0)
const A=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],j=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"]
let q=s(d,"visible",15,!0),z=t(1),F=t(0),B=t(0),J=t("?"),K=t("?"),Q=t(v([]))
function U(){D(F,0),D(B,1),D(z,0)}function V(i){let e=Math.floor((i-_())/60)
const s=Math.floor(e/60)
return e%=60,{hours:s,mins:e}}const Y=i=>({...i,...V(i.expires)})
function I(i){D(F,Y(i.r),!0),D(z,0)}async function W(i){var e
$("mercs","doDisband"),D(z,1),await(e=i,k({subcmd2:"disband",merc_id:e})),D(Q,r(Q).filter((({id:e})=>e!==i)),!0),D(z,0)}!async function(){const i=await H()
D(Q,i.r.mercs?.map(Y)||[],!0),D(J,i.r.mercs_available.toString(),!0),D(K,i.r.gold.toString(),!0),i.r.offer?I({r:i.r.offer}):D(z,0)}()
{const e=i=>{var e=w("Merc Hunter")
b(i,e)}
a(i,{close:function(){$("mercs","close"),q(!1)},get visible(){return q()},title:e,children:(i,e)=>{var s=R(),t=n(s),v=l(n(t)),a=n(v),d=l(t,2),x=n(d),$=i=>{var e=C()
e.__click=[S,z,B,U,I]
var s=n(e)
o((()=>{e.disabled=r(z),u(s,`Send Expedition (${r(K)??""}g)`)})),b(i,e)},D=i=>{var e=E(),s=m(e)
s.__click=[T,z,Q,Y,F,J]
var t=l(s,2)
t.__click=[M,z,F],o((()=>{s.disabled=r(z),t.disabled=r(z)})),b(i,e)}
c(x,(i=>{r(F)?i(D,!1):i($)}))
var _=l(d,2),w=n(_),k=n(w),H=i=>{var e=G(),s=m(e),t=n(s),v=n(t),a=n(v),d=l(t,2),c=n(d),y=l(d,2),p=l(n(y),2),x=n(p),$=n(x),D=l(x,2),_=l(p,4),w=n(_),k=n(w),H=l(_,4),M=n(H),T=n(M),S=l(M,2),C=n(S),E=l(s,2),O=l(n(E),2),L=n(O),N=l(O,4),P=n(N),R=l(N,4),q=n(R),z=l(R,4),B=n(z),J=l(z,4),K=n(J),Q=l(J,4),U=n(Q),V=l(Q,4),Y=n(V),I=l(V,4),W=n(I)
o((i=>{u(a,r(F).name),h(c,"src",`${f??""}mercs/${r(F).id??""}.png`),u($,i),h(D,"src",`${f??""}currency/0.png`),u(k,r(F).hire_time/3600),u(T,r(F).hours),u(C,r(F).mins),u(L,r(F).level),u(P,j[r(F).class]),u(q,A[r(F).type]),u(B,r(F).attributes[0].value),u(K,r(F).attributes[1].value),u(U,r(F).attributes[2].value),u(Y,r(F).attributes[3].value),u(W,r(F).attributes[4].value)}),[()=>g(r(F).gold)]),b(i,e)}
c(k,(i=>{r(F)&&i(H)}))
var q=l(k,2),V=i=>{var e=O()
b(i,e)}
c(q,(i=>{r(B)&&i(V)}))
var X=l(_,4),Z=n(X),ii=n(Z),ei=i=>{var e=y(),s=m(e)
p(s,17,(()=>r(Q)),(({attributes:i,class:e,id:s,level:t,name:v,type:a,hours:d,mins:l})=>s),((i,e)=>{let s=()=>r(e).attributes,t=()=>r(e).id,v=()=>r(e).name
var a=N(),d=n(a),c=n(d),m=n(c),g=l(d,2),y=n(g),p=l(g,4),x=n(p),$=n(x),D=l(x,2),_=n(D),w=l(p,2),k=n(w)
k.__click=[L,W,t],o((()=>{u(m,v()),h(y,"data-tipped",`<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>${v()??""}</div>\n                      <div>Level:</div><div>${r(e).level??""}</div>\n                      <div>Classification:</div><div>${j[r(e).class]??""}</div>\n                      <div>Type:</div><div>${A[r(e).type]??""}</div>\n                      <div>Attack:</div><div>${s()[0].value??""}</div>\n                      <div>Defense:</div><div>${s()[1].value??""}</div>\n                      <div>Armor:</div><div>${s()[2].value??""}</div>\n                      <div>HP:</div><div>${s()[3].value??""}</div>\n                      <div>Damage:</div><div>${s()[4].value??""}</div>\n                      </div>`),h(y,"src",`${f??""}mercs/${t()??""}.png`),u($,r(e).hours),u(_,r(e).mins),k.disabled=r(z)})),b(i,a)})),b(i,e)},si=i=>{var e=P()
b(i,e)}
c(ii,(i=>{r(Q).length?i(ei):i(si,!1)})),o((()=>u(a,r(J)))),b(i,s)},$$slots:{title:!0,default:!0}})}x()}i(["click"])
const q=v({visible:!0})
let z=0
function F(){z?q.visible=!0:z=A(j,{props:q,target:document.body})}export{F as default}
//# sourceMappingURL=mountMercs.svelte-UYmF0OjY.js.map
