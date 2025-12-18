import{ap as t,y as a,ay as s,ar as o,bk as e,A as n,C as i,F as r,D as l,H as u,aA as c,Q as p,T as m,N as b,O as f,aU as d,ei as v,S as g,ej as $,a$ as k,aC as _,dw as h,bn as j,s as y,dK as T,cM as S,q as G,t as w}from"./calfSystem-Cs6CSxoU.js"
import{a as x}from"./getIsOwnGuild-Tt3zgeJK.js"
import{a as A}from"./profile-Bvs71yyO.js"
import"./colouredDots-C2Y_m1RP.js"
import"./batch-BtMyX_wP.js"
import"./onlineDot-DmNFHAz9.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Bhotwi5X.js"
import"./formToUrl-CAPzQx_Y.js"
import"./doStatTotal-CYFlRYmG.js"
var C=i('<button class="fshTempleThree svelte-1a8agm3" type="button">&nbsp;</button>'),J=i('<button type="button" class="svelte-1a8agm3">&nbsp;</button>'),M=i('<div class="svelte-1a8agm3"><button class="fshQuickBuff svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshJoin svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshGold svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1a8agm3" type="button">&nbsp;</button> <!> <!></div>')
function N(t,i){a(i,!1)
const G=s.enableMaxGroupSizeToJoin?` < ${s.maxGroupSizeToJoin} Members`:"",w=x(),N=o("player_id")||e(),q=A()
function D(t){y("profile","quick button",t)}function R(){D("recall items"),g(`${T}${q}`)}function z(){D("rank"),g(`${S}members&subcmd2=changerank&member_id=${N}`)}n()
var B=M(),H=r(B)
H.__click=function(t){t.target.blur(),D("quickbuff"),d(N)}
var L=l(H,2)
L.__click=function(){D("join groups"),v()}
var O=l(L,2)
O.__click=function(){D("auctions"),g(`${$}&type=-3&tid=${N}`)}
var Q=l(O,2)
Q.__click=function(){D("secure trade"),g(`${k}${q}`)}
var U=l(Q,2),E=t=>{var a=C()
a.__click=R,p(()=>m(a,"data-tooltip",`Recall items from ${q??""}`)),b(t,a)}
u(U,t=>{w&&t(E)})
var F=l(U,2),I=t=>{var a=J()
a.__click=z,p(t=>{h(a,`background-image: url('${j??""}guilds/${t??""}_mini.png');`),m(a,"data-tooltip",`Rank ${q??""}`)},[_]),b(t,a)}
u(F,t=>{w&&c("showAdmin")&&t(I)}),p(()=>{m(H,"data-tooltip",`Buff ${q??""}`),m(L,"data-tooltip",`Join All Groups${G}`),m(O,"data-tooltip",`Go to ${q??""}'s auctions`),m(Q,"data-tooltip",`Create Secure Trade to ${q??""}`)}),b(t,B),f()}function q(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var a,s
t&&(t.parentNode.classList.add("fshRelative"),a=t.nextElementSibling,s=t.parentNode,w(N,{anchor:a,target:s}))}t(["click"])
export{q as default}
//# sourceMappingURL=profileInjectQuickButton-Bgu2f5Mo.js.map
