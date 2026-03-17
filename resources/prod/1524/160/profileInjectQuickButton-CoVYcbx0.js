import{ap as t,y as a,ay as s,ar as o,bj as e,A as n,C as i,F as r,D as l,H as c,aA as u,P as p,Q as m,N as b,O as f,aU as d,eh as v,V as g,ei as $,a$ as k,aC as _,dx as h,bm as j,s as y,dK as T,cO as S,q as x,t as G}from"./calfSystem-HVCiy-VV.js"
import{a as A}from"./getIsOwnGuild-N_0U5kY_.js"
import{a as w}from"./profile-CCKDC0rf.js"
import"./colouredDots-Bv_n_RhI.js"
import"./batch-DqKzBoJR.js"
import"./onlineDot-Dmf4LgP_.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-rdUGIp5j.js"
import"./formToUrl-BMkQD7VR.js"
import"./doStatTotal-C5onnQLz.js"
var C=i('<button class="fshTempleThree svelte-1a8agm3" type="button">&nbsp;</button>'),J=i('<button type="button" class="svelte-1a8agm3">&nbsp;</button>'),M=i('<div class="svelte-1a8agm3"><button class="fshQuickBuff svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshJoin svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshGold svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1a8agm3" type="button">&nbsp;</button> <!> <!></div>')
function q(t,i){a(i,!1)
const x=s.enableMaxGroupSizeToJoin?` < ${s.maxGroupSizeToJoin} Members`:"",G=A(),q=o("player_id")||e(),D=w()
function N(t){y("profile","quick button",t)}function O(){N("recall items"),g(`${T}${D}`)}function R(){N("rank"),g(`${S}members&subcmd2=changerank&member_id=${q}`)}n()
var z=M(),B=r(z)
B.__click=function(t){t.target.blur(),N("quickbuff"),d(q)}
var E=l(B,2)
E.__click=function(){N("join groups"),v()}
var F=l(E,2)
F.__click=function(){N("auctions"),g(`${$}&type=-3&tid=${q}`)}
var L=l(F,2)
L.__click=function(){N("secure trade"),g(`${k}${D}`)}
var Q=l(L,2),U=t=>{var a=C()
a.__click=O,p(()=>m(a,"data-tooltip",`Recall items from ${D??""}`)),b(t,a)}
c(Q,t=>{G&&t(U)})
var H=l(Q,2),I=t=>{var a=J()
a.__click=R,p(t=>{h(a,`background-image: url('${j??""}guilds/${t??""}_mini.png');`),m(a,"data-tooltip",`Rank ${D??""}`)},[_]),b(t,a)}
c(H,t=>{G&&u("showAdmin")&&t(I)}),p(()=>{m(B,"data-tooltip",`Buff ${D??""}`),m(E,"data-tooltip",`Join All Groups${x}`),m(F,"data-tooltip",`Go to ${D??""}'s auctions`),m(L,"data-tooltip",`Create Secure Trade to ${D??""}`)}),b(t,z),f()}function D(){const t=x('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var a,s
t&&(t.parentNode.classList.add("fshRelative"),a=t.nextElementSibling,s=t.parentNode,G(q,{anchor:a,target:s}))}t(["click"])
export{D as default}
//# sourceMappingURL=profileInjectQuickButton-CoVYcbx0.js.map
