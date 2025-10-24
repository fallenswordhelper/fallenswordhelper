import{ap as t,y as a,ay as s,ar as o,bj as e,A as n,C as i,F as r,D as l,H as c,aA as u,Q as p,T as m,N as b,O as f,s as d,aC as v,dx as g,bm as $,aU as k,eh as _,S as h,ei as j,a$ as y,dK as T,cO as S,q as x,t as G}from"./calfSystem-CIdPz3EO.js"
import{a as A}from"./getIsOwnGuild-CQUjKMk8.js"
import{a as w}from"./profile-T9HeK0Rp.js"
import"./colouredDots-Cv8qrZPk.js"
import"./batch-DSFyFccZ.js"
import"./onlineDot-Cz7JrOQc.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Dg8BOmTG.js"
import"./formToUrl-JPHWbAvp.js"
import"./doStatTotal-C_bkt6VX.js"
function C(t,a,s){t.target.blur(),a("quickbuff"),k(s)}function J(t,a){a("join groups"),_()}function M(t,a,s){a("auctions"),h(`${j}&type=-3&tid=${s}`)}function q(t,a,s){a("secure trade"),h(`${y}${s}`)}function D(t,a,s){a("recall items"),h(`${T}${s}`)}function N(t,a,s){a("rank"),h(`${S}members&subcmd2=changerank&member_id=${s}`)}var O=i('<button class="fshTempleThree svelte-1a8agm3" type="button">&nbsp;</button>'),R=i('<button type="button" class="svelte-1a8agm3">&nbsp;</button>'),z=i('<div class="svelte-1a8agm3"><button class="fshQuickBuff svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshJoin svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshGold svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1a8agm3" type="button">&nbsp;</button> <!> <!></div>')
function B(t,i){a(i,!1)
const k=s.enableMaxGroupSizeToJoin?` < ${s.maxGroupSizeToJoin} Members`:"",_=A(),h=o("player_id")||e(),j=w()
function y(t){d("profile","quick button",t)}n()
var T=z(),S=r(T)
S.__click=[C,y,h]
var x=l(S,2)
x.__click=[J,y]
var G=l(x,2)
G.__click=[M,y,h]
var B=l(G,2)
B.__click=[q,y,j]
var E=l(B,2),F=t=>{var a=O()
a.__click=[D,y,j],p(()=>m(a,"data-tooltip",`Recall items from ${j??""}`)),b(t,a)}
c(E,t=>{_&&t(F)})
var L=l(E,2),Q=t=>{var a=R()
a.__click=[N,y,h],p(t=>{g(a,`background-image: url('${$??""}guilds/${t??""}_mini.png');`),m(a,"data-tooltip",`Rank ${j??""}`)},[v]),b(t,a)}
c(L,t=>{_&&u("showAdmin")&&t(Q)}),p(()=>{m(S,"data-tooltip",`Buff ${j??""}`),m(x,"data-tooltip",`Join All Groups${k}`),m(G,"data-tooltip",`Go to ${j??""}'s auctions`),m(B,"data-tooltip",`Create Secure Trade to ${j??""}`)}),b(t,T),f()}function E(){const t=x('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var a,s
t&&(t.parentNode.classList.add("fshRelative"),a=t.nextElementSibling,s=t.parentNode,G(B,{anchor:a,target:s}))}t(["click"])
export{E as default}
//# sourceMappingURL=profileInjectQuickButton-BD_95BMm.js.map
