import{ap as i,x as e,y as s,ak as t,al as v,dY as a,B as d,C as l,E as n,G as c,J as r,P as o,Q as u,L as b,D as m,aN as g,S as h,bl as f,aG as y,F as p,N as x,s as $,I as D,cq as _,bD as w,n as k}from"./calfSystem-CQOGdqPv.js"
import{m as A,v as M}from"./view-Datw2VHy.js"
async function S(i,e,s){$("mercs","doDecline"),D(e,1),await A({subcmd2:"declineoffer"}),D(s,0),D(e,0)}async function H(i,e,s,t,v,a){$("mercs","doAccept"),D(e,1)
const d=await A({subcmd2:"acceptoffer"})
D(s,[...r(s),t({...r(v),expires:d.r.expires})],!0),D(a,d.r.mercs_available.toString(),!0),D(v,0),D(e,0)}async function T(i,e,s,t,v){$("mercs","getOffer"),D(e,1),D(s,0)
const a=await A({subcmd2:"search"})
a.r?v(a):t()}var C=d('<button class="custombutton svelte-hxs3gy" type="button"> </button>'),E=d('<button class="custombutton svelte-hxs3gy" type="button">Accept Offer</button> &nbsp; <button class="custombutton svelte-hxs3gy" type="button">Decline Offer</button>',1),G=d('<div class="merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" height="125" width="125"/></div> <div class="offer svelte-hxs3gy"><div class="svelte-hxs3gy">Hire Price:</div> <div class="svelte-hxs3gy"><b> </b> <img alt="Gold" class="gold svelte-hxs3gy"/></div> <div class="svelte-hxs3gy">Hire Time:</div> <div class="svelte-hxs3gy"><b> </b> hour(s)</div> <div class="svelte-hxs3gy">Offer Time Left:</div> <div class="svelte-hxs3gy"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class="attribs svelte-hxs3gy"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>',1),L=d('<div class="no-offer svelte-hxs3gy">Your expedition returned without finding any mercenaries.</div>'),P=(i,e,s)=>e(s()),N=d('<div class="active-merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" class="tip-static" height="125" width="125"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class="disband svelte-hxs3gy"><button class="custombutton svelte-hxs3gy" type="button">Disband</button></div></div>'),O=d('<div class="no-active svelte-hxs3gy">[ no active mercenaries ]</div>'),j=d('<div class="merc-hunter svelte-hxs3gy"><div class="top-div svelte-hxs3gy">(<b> </b> available for hire)</div> <div class="button-div svelte-hxs3gy"><!></div> <div class="result-div svelte-hxs3gy"><div class="cols svelte-hxs3gy"><!> <!> <div class="auto-decline svelte-hxs3gy"></div></div></div> <div class="active-title svelte-hxs3gy"><b>Active Mercenaries</b></div> <div class="lower-div svelte-hxs3gy"><div class="active svelte-hxs3gy"><!></div></div></div>')
function q(i,d){e(d,!0)
const k=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],q=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"]
let B=s(d,"visible",15,!0),F=t(1),R=t(0),Y=t(0),I=t("?"),J=t("?"),Q=t(v([]))
function U(){D(R,0),D(Y,1),D(F,0)}function V(i){let e=Math.floor((i-_())/60)
const s=Math.floor(e/60)
return e%=60,{hours:s,mins:e}}const z=i=>({...i,...V(i.expires)})
function K(i){D(R,z(i.r),!0),D(F,0)}async function W(i){var e
$("mercs","doDisband"),D(F,1),await(e=i,A({subcmd2:"disband",merc_id:e})),D(Q,r(Q).filter(({id:e})=>e!==i),!0),D(F,0)}!async function(){const i=await M()
D(Q,i.r.mercs?.map(z)||[],!0),D(I,i.r.mercs_available.toString(),!0),D(J,i.r.gold.toString(),!0),i.r.offer?K({r:i.r.offer}):D(F,0)}()
{const e=i=>{var e=w("Merc Hunter")
b(i,e)}
a(i,{close:function(){$("mercs","close"),B(!1)},get visible(){return B()},title:e,children:(i,e)=>{var s=j(),t=n(s),v=l(n(t)),a=n(v),d=l(t,2),x=n(d),$=i=>{var e=C()
e.__click=[T,F,Y,U,K]
var s=n(e)
o(()=>{e.disabled=r(F),u(s,`Send Expedition (${r(J)??""}g)`)}),b(i,e)},D=i=>{var e=E(),s=m(e)
s.__click=[H,F,Q,z,R,I]
var t=l(s,2)
t.__click=[S,F,R],o(()=>{s.disabled=r(F),t.disabled=r(F)}),b(i,e)}
c(x,i=>{r(R)?i(D,!1):i($)})
var _=l(d,2),w=n(_),A=n(w),M=i=>{var e=G(),s=m(e),t=n(s),v=n(t),a=n(v),d=l(t,2),c=n(d),y=l(d,2),p=l(n(y),2),x=n(p),$=n(x),D=l(x,2),_=l(p,4),w=n(_),A=n(w),M=l(_,4),S=n(M),H=n(S),T=l(S,2),C=n(T),E=l(s,2),L=l(n(E),2),P=n(L),N=l(L,4),O=n(N),j=l(N,4),B=n(j),F=l(j,4),Y=n(F),I=l(F,4),J=n(I),Q=l(I,4),U=n(Q),V=l(Q,4),z=n(V),K=l(V,4),W=n(K)
o(i=>{u(a,r(R).name),h(c,"src",`${f??""}mercs/${r(R).id??""}.png`),u($,i),h(D,"src",`${f??""}currency/0.png`),u(A,r(R).hire_time/3600),u(H,r(R).hours),u(C,r(R).mins),u(P,r(R).level),u(O,q[r(R).class]),u(B,k[r(R).type]),u(Y,r(R).attributes[0].value),u(J,r(R).attributes[1].value),u(U,r(R).attributes[2].value),u(z,r(R).attributes[3].value),u(W,r(R).attributes[4].value)},[()=>g(r(R).gold)]),b(i,e)}
c(A,i=>{r(R)&&i(M)})
var B=l(A,2),V=i=>{var e=L()
b(i,e)}
c(B,i=>{r(Y)&&i(V)})
var X=l(_,4),Z=n(X),ii=n(Z),ei=i=>{var e=y(),s=m(e)
p(s,17,()=>r(Q),({attributes:i,class:e,id:s,level:t,name:v,type:a,hours:d,mins:l})=>s,(i,e)=>{let s=()=>r(e).attributes,t=()=>r(e).id,v=()=>r(e).name
var a=N(),d=n(a),c=n(d),m=n(c),g=l(d,2),y=n(g),p=l(g,4),x=n(p),$=n(x),D=l(x,2),_=n(D),w=l(p,2),A=n(w)
A.__click=[P,W,t],o(()=>{u(m,v()),h(y,"data-tipped",`<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>${v()??""}</div>\n                      <div>Level:</div><div>${r(e).level??""}</div>\n                      <div>Classification:</div><div>${q[r(e).class]??""}</div>\n                      <div>Type:</div><div>${k[r(e).type]??""}</div>\n                      <div>Attack:</div><div>${s()[0].value??""}</div>\n                      <div>Defense:</div><div>${s()[1].value??""}</div>\n                      <div>Armor:</div><div>${s()[2].value??""}</div>\n                      <div>HP:</div><div>${s()[3].value??""}</div>\n                      <div>Damage:</div><div>${s()[4].value??""}</div>\n                      </div>`),h(y,"src",`${f??""}mercs/${t()??""}.png`),u($,r(e).hours),u(_,r(e).mins),A.disabled=r(F)}),b(i,a)}),b(i,e)},si=i=>{var e=O()
b(i,e)}
c(ii,i=>{r(Q).length?i(ei):i(si,!1)}),o(()=>u(a,r(I))),b(i,s)},$$slots:{title:!0,default:!0}})}x()}i(["click"])
const B=v({visible:!0})
let F=0
function R(){F?B.visible=!0:F=k(q,{props:B,target:document.body})}export{R as default}
//# sourceMappingURL=mountMercs.svelte-Rj-wzrWo.js.map
