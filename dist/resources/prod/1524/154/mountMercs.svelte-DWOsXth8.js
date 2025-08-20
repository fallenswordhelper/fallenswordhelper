import{ao as i,x as e,y as s,aj as t,ak as v,e0 as a,A as d,B as l,D as n,F as c,I as r,O as o,P as u,K as b,C as m,aL as g,R as h,bi as f,aE as y,E as p,L as x,s as $,H as D,cn as _,bA as w,n as A}from"./calfSystem-KFszEm2S.js"
import{m as k,v as H}from"./view-W7wyTWuo.js"
async function M(i,e,s){$("mercs","doDecline"),D(e,1),await k({subcmd2:"declineoffer"}),D(s,0),D(e,0)}async function E(i,e,s,t,v,a){$("mercs","doAccept"),D(e,1)
const d=await k({subcmd2:"acceptoffer"})
D(s,[...r(s),t({...r(v),expires:d.r.expires})],!0),D(a,d.r.mercs_available.toString(),!0),D(v,0),D(e,0)}async function L(i,e,s,t,v){$("mercs","getOffer"),D(e,1),D(s,0)
const a=await k({subcmd2:"search"})
a.r?v(a):t()}var S=d('<button class="custombutton svelte-hxs3gy" type="button"> </button>'),T=d('<button class="custombutton svelte-hxs3gy" type="button">Accept Offer</button> &nbsp; <button class="custombutton svelte-hxs3gy" type="button">Decline Offer</button>',1),C=d('<div class="merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" height="125" width="125"/></div> <div class="offer svelte-hxs3gy"><div class="svelte-hxs3gy">Hire Price:</div> <div class="svelte-hxs3gy"><b> </b> <img alt="Gold" class="gold svelte-hxs3gy"/></div> <div class="svelte-hxs3gy">Hire Time:</div> <div class="svelte-hxs3gy"><b> </b> hour(s)</div> <div class="svelte-hxs3gy">Offer Time Left:</div> <div class="svelte-hxs3gy"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class="attribs svelte-hxs3gy"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>',1),O=d('<div class="no-offer svelte-hxs3gy">Your expedition returned without finding any mercenaries.</div>'),P=(i,e,s)=>e(s()),j=d('<div class="active-merc svelte-hxs3gy"><div><b> </b></div> <div><img alt="alt" class="tip-static" height="125" width="125"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class="disband svelte-hxs3gy"><button class="custombutton svelte-hxs3gy" type="button">Disband</button></div></div>'),G=d('<div class="no-active svelte-hxs3gy">[ no active mercenaries ]</div>'),R=d('<div class="merc-hunter svelte-hxs3gy"><div class="top-div svelte-hxs3gy">(<b> </b> available for hire)</div> <div class="button-div svelte-hxs3gy"><!></div> <div class="result-div svelte-hxs3gy"><div class="cols svelte-hxs3gy"><!> <!> <div class="auto-decline svelte-hxs3gy"></div></div></div> <div class="active-title svelte-hxs3gy"><b>Active Mercenaries</b></div> <div class="lower-div svelte-hxs3gy"><div class="active svelte-hxs3gy"><!></div></div></div>')
function B(i,d){e(d,!0)
const A=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],B=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"]
let F=s(d,"visible",15,!0),N=t(1),q=t(0),I=t(0),K=t("?"),U=t("?"),V=t(v([]))
function Y(){D(q,0),D(I,1),D(N,0)}function z(i){let e=Math.floor((i-_())/60)
const s=Math.floor(e/60)
return e%=60,{hours:s,mins:e}}const J=i=>({...i,...z(i.expires)})
function Q(i){D(q,J(i.r),!0),D(N,0)}async function W(i){var e
$("mercs","doDisband"),D(N,1),await(e=i,k({subcmd2:"disband",merc_id:e})),D(V,r(V).filter(({id:e})=>e!==i),!0),D(N,0)}!async function(){const i=await H()
D(V,i.r.mercs?.map(J)||[],!0),D(K,i.r.mercs_available.toString(),!0),D(U,i.r.gold.toString(),!0),i.r.offer?Q({r:i.r.offer}):D(N,0)}()
{const e=i=>{var e=w("Merc Hunter")
b(i,e)}
a(i,{close:function(){$("mercs","close"),F(!1)},get visible(){return F()},title:e,children:(i,e)=>{var s=R(),t=n(s),v=l(n(t)),a=n(v),d=l(t,2),x=n(d),$=i=>{var e=S()
e.__click=[L,N,I,Y,Q]
var s=n(e)
o(()=>{e.disabled=r(N),u(s,`Send Expedition (${r(U)??""}g)`)}),b(i,e)},D=i=>{var e=T(),s=m(e)
s.__click=[E,N,V,J,q,K]
var t=l(s,2)
t.__click=[M,N,q],o(()=>{s.disabled=r(N),t.disabled=r(N)}),b(i,e)}
c(x,i=>{r(q)?i(D,!1):i($)})
var _=l(d,2),w=n(_),k=n(w),H=i=>{var e=C(),s=m(e),t=n(s),v=n(t),a=n(v),d=l(t,2),c=n(d),y=l(d,2),p=l(n(y),2),x=n(p),$=n(x),D=l(x,2),_=l(p,4),w=n(_),k=n(w),H=l(_,4),M=n(H),E=n(M),L=l(M,2),S=n(L),T=l(s,2),O=l(n(T),2),P=n(O),j=l(O,4),G=n(j),R=l(j,4),F=n(R),N=l(R,4),I=n(N),K=l(N,4),U=n(K),V=l(K,4),Y=n(V),z=l(V,4),J=n(z),Q=l(z,4),W=n(Q)
o(i=>{u(a,r(q).name),h(c,"src",`${f??""}mercs/${r(q).id??""}.png`),u($,i),h(D,"src",`${f??""}currency/0.png`),u(k,r(q).hire_time/3600),u(E,r(q).hours),u(S,r(q).mins),u(P,r(q).level),u(G,B[r(q).class]),u(F,A[r(q).type]),u(I,r(q).attributes[0].value),u(U,r(q).attributes[1].value),u(Y,r(q).attributes[2].value),u(J,r(q).attributes[3].value),u(W,r(q).attributes[4].value)},[()=>g(r(q).gold)]),b(i,e)}
c(k,i=>{r(q)&&i(H)})
var F=l(k,2),z=i=>{var e=O()
b(i,e)}
c(F,i=>{r(I)&&i(z)})
var X=l(_,4),Z=n(X),ii=n(Z),ei=i=>{var e=y(),s=m(e)
p(s,17,()=>r(V),({attributes:i,class:e,id:s,level:t,name:v,type:a,hours:d,mins:l})=>s,(i,e)=>{let s=()=>r(e).attributes,t=()=>r(e).id,v=()=>r(e).name
var a=j(),d=n(a),c=n(d),m=n(c),g=l(d,2),y=n(g),p=l(g,4),x=n(p),$=n(x),D=l(x,2),_=n(D),w=l(p,2),k=n(w)
k.__click=[P,W,t],o(()=>{u(m,v()),h(y,"data-tipped",`<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>${v()??""}</div>\n                      <div>Level:</div><div>${r(e).level??""}</div>\n                      <div>Classification:</div><div>${B[r(e).class]??""}</div>\n                      <div>Type:</div><div>${A[r(e).type]??""}</div>\n                      <div>Attack:</div><div>${s()[0].value??""}</div>\n                      <div>Defense:</div><div>${s()[1].value??""}</div>\n                      <div>Armor:</div><div>${s()[2].value??""}</div>\n                      <div>HP:</div><div>${s()[3].value??""}</div>\n                      <div>Damage:</div><div>${s()[4].value??""}</div>\n                      </div>`),h(y,"src",`${f??""}mercs/${t()??""}.png`),u($,r(e).hours),u(_,r(e).mins),k.disabled=r(N)}),b(i,a)}),b(i,e)},si=i=>{var e=G()
b(i,e)}
c(ii,i=>{r(V).length?i(ei):i(si,!1)}),o(()=>u(a,r(K))),b(i,s)},$$slots:{title:!0,default:!0}})}x()}i(["click"])
const F=v({visible:!0})
let N=0
function q(){N?F.visible=!0:N=A(B,{props:F,target:document.body})}export{q as default}
//# sourceMappingURL=mountMercs.svelte-DWOsXth8.js.map
