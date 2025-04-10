import{a6 as i,R as e,bE as s,S as t,T as v,dZ as a,X as d,Y as l,Z as n,a0 as c,V as r,a7 as o,a8 as u,a3 as b,au as m,br as g,b8 as h,aB as f,at as y,_ as p,a4 as x,s as $,W as _,cf as w,bq as D,ad as A}from"./calfSystem-BGOTz8de.js"
import{m as k,v as M}from"./view-CoGXwFAb.js"
async function S(i,e,s){$("mercs","doDecline"),_(e,1),await k({subcmd2:"declineoffer"}),_(s,0),_(e,0)}async function T(i,e,s,t,v,a){$("mercs","doAccept"),_(e,1)
const d=await k({subcmd2:"acceptoffer"})
_(s,[...r(s),t({...r(v),expires:d.r.expires})],!0),_(a,d.r.mercs_available.toString(),!0),_(v,0),_(e,0)}async function H(i,e,s,t,v){$("mercs","getOffer"),_(e,1),_(s,0)
const a=await k({subcmd2:"search"})
a.r?v(a):t()}var E=d('<button class="custombutton svelte-hxs3gy" type="button"> </button>'),C=d('<button class="custombutton svelte-hxs3gy" type="button">Accept Offer</button> &nbsp; <button class="custombutton svelte-hxs3gy" type="button">Decline Offer</button>',1),L=d('<div class="merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" height="125" width="125"></div> <div class="offer svelte-hxs3gy"><div class="svelte-hxs3gy">Hire Price:</div> <div class="svelte-hxs3gy"><b> </b> <img alt="Gold" class="gold svelte-hxs3gy"></div> <div class="svelte-hxs3gy">Hire Time:</div> <div class="svelte-hxs3gy"><b> </b> hour(s)</div> <div class="svelte-hxs3gy">Offer Time Left:</div> <div class="svelte-hxs3gy"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class="attribs svelte-hxs3gy"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>',1),O=d('<div class="no-offer svelte-hxs3gy">Your expedition returned without finding any mercenaries.</div>'),P=(i,e,s)=>e(s()),G=d('<div class="active-merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" class="tip-static" height="125" width="125"></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class="disband svelte-hxs3gy"><button class="custombutton svelte-hxs3gy" type="button">Disband</button></div></div>'),R=d('<div class="no-active svelte-hxs3gy">[ no active mercenaries ]</div>'),j=d('<div class="merc-hunter svelte-hxs3gy"><div class="top-div svelte-hxs3gy">(<b> </b> available for hire)</div> <div class="button-div svelte-hxs3gy"><!></div> <div class="result-div svelte-hxs3gy"><div class="cols svelte-hxs3gy"><!> <!> <div class="auto-decline svelte-hxs3gy"></div></div></div> <div class="active-title svelte-hxs3gy"><b>Active Mercenaries</b></div> <div class="lower-div svelte-hxs3gy"><div class="active svelte-hxs3gy"><!></div></div></div>')
function q(i,d){e(d,!0)
const A=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],q=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"]
let B=s(d,"visible",15,!0),N=t(1),V=t(0),X=t(0),Y=t("?"),Z=t("?"),F=t(v([]))
function U(){_(V,0),_(X,1),_(N,0)}function W(i){let e=Math.floor((i-w())/60)
const s=Math.floor(e/60)
return e%=60,{hours:s,mins:e}}const z=i=>({...i,...W(i.expires)})
function I(i){_(V,z(i.r),!0),_(N,0)}async function J(i){var e
$("mercs","doDisband"),_(N,1),await(e=i,k({subcmd2:"disband",merc_id:e})),_(F,r(F).filter((({id:e})=>e!==i)),!0),_(N,0)}!async function(){const i=await M()
_(F,i.r.mercs?.map(z)||[],!0),_(Y,i.r.mercs_available.toString(),!0),_(Z,i.r.gold.toString(),!0),i.r.offer?I({r:i.r.offer}):_(N,0)}()
{const e=i=>{var e=D("Merc Hunter")
b(i,e)}
a(i,{close:function(){$("mercs","close"),B(!1)},get visible(){return B()},title:e,children:(i,e)=>{var s=j(),t=n(s),v=l(n(t)),a=n(v),d=l(t,2),x=n(d),$=i=>{var e=E()
e.__click=[H,N,X,U,I]
var s=n(e)
o((()=>{e.disabled=r(N),u(s,`Send Expedition (${r(Z)??""}g)`)})),b(i,e)},_=i=>{var e=C(),s=m(e)
s.__click=[T,N,F,z,V,Y]
var t=l(s,2)
t.__click=[S,N,V],o((()=>{s.disabled=r(N),t.disabled=r(N)})),b(i,e)}
c(x,(i=>{r(V)?i(_,!1):i($)}))
var w=l(d,2),D=n(w),k=n(D),M=i=>{var e=L(),s=m(e),t=n(s),v=n(t),a=n(v),d=l(t,2),c=n(d),y=l(d,2),p=l(n(y),2),x=n(p),$=n(x),_=l(x,2)
g(_,"src",`${h??""}currency/0.png`)
var w=l(p,4),D=n(w),k=n(D),M=l(w,4),S=n(M),T=n(S),H=l(S,2),E=n(H),C=l(s,2),O=l(n(C),2),P=n(O),G=l(O,4),R=n(G),j=l(G,4),B=n(j),N=l(j,4),X=n(N),Y=l(N,4),Z=n(Y),F=l(Y,4),U=n(F),W=l(F,4),z=n(W),I=l(W,4),J=n(I)
o((i=>{u(a,r(V).name),g(c,"src",`${h??""}mercs/${r(V).id??""}.png`),u($,i),u(k,r(V).hire_time/3600),u(T,r(V).hours),u(E,r(V).mins),u(P,r(V).level),u(R,q[r(V).class]),u(B,A[r(V).type]),u(X,r(V).attributes[0].value),u(Z,r(V).attributes[1].value),u(U,r(V).attributes[2].value),u(z,r(V).attributes[3].value),u(J,r(V).attributes[4].value)}),[()=>f(r(V).gold)]),b(i,e)}
c(k,(i=>{r(V)&&i(M)}))
var B=l(k,2),W=i=>{var e=O()
b(i,e)}
c(B,(i=>{r(X)&&i(W)}))
var K=l(w,4),Q=n(K),ii=n(Q),ei=i=>{var e=y(),s=m(e)
p(s,17,(()=>r(F)),(({attributes:i,class:e,id:s,level:t,name:v,type:a,hours:d,mins:l})=>s),((i,e)=>{let s=()=>r(e).attributes,t=()=>r(e).id,v=()=>r(e).name
var a=G(),d=n(a),c=n(d),m=n(c),f=l(d,2),y=n(f),p=l(f,4),x=n(p),$=n(x),_=l(x,2),w=n(_),D=l(p,2),k=n(D)
k.__click=[P,J,t],o((()=>{u(m,v()),g(y,"data-tipped",`<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>${v()??""}</div>\n                      <div>Level:</div><div>${r(e).level??""}</div>\n                      <div>Classification:</div><div>${q[r(e).class]??""}</div>\n                      <div>Type:</div><div>${A[r(e).type]??""}</div>\n                      <div>Attack:</div><div>${s()[0].value??""}</div>\n                      <div>Defense:</div><div>${s()[1].value??""}</div>\n                      <div>Armor:</div><div>${s()[2].value??""}</div>\n                      <div>HP:</div><div>${s()[3].value??""}</div>\n                      <div>Damage:</div><div>${s()[4].value??""}</div>\n                      </div>`),g(y,"src",`${h??""}mercs/${t()??""}.png`),u($,r(e).hours),u(w,r(e).mins),k.disabled=r(N)})),b(i,a)})),b(i,e)},si=i=>{var e=R()
b(i,e)}
c(ii,(i=>{r(F).length?i(ei):i(si,!1)})),o((()=>u(a,r(Y)))),b(i,s)},$$slots:{title:!0,default:!0}})}x()}i(["click"])
const B=v({visible:!0})
let N=0
function V(){N?B.visible=!0:N=A(q,{props:B,target:document.body})}export{V as default}
//# sourceMappingURL=mountMercs.svelte-C55mS1Sm.js.map
