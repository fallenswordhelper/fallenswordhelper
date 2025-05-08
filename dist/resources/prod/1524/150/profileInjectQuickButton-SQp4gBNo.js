import{a6 as t,R as a,am as s,ac as o,b3 as e,X as i,Z as n,br as l,Y as r,a0 as c,ao as u,a3 as p,a4 as b,s as m,a7 as f,eu as d,cn as v,dF as g,b8 as $,aI as _,ev as j,co as k,ew as h,aP as x,dN as y,cG as q,q as T,ad as G}from"./calfSystem-BGOTz8de.js"
import"./legacy-CVKI84SU.js"
import{i as S}from"./lifecycle-CJ3D6gkY.js"
import{a as w}from"./getIsOwnGuild-BuZdCe7Q.js"
import{a as A}from"./profile-BKTjUjcF.js"
import"./colouredDots-BUHZ6q5t.js"
import"./batch-DnPGAgm3.js"
import"./onlineDot-K2TYhqz6.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CHnAIuBp.js"
import"./formToUrl-RzN0-7i1.js"
import"./doStatTotal-7TiKJNmH.js"
function J(t,a,s){t.target.blur(),a("quickbuff"),_(s)}function N(t,a){a("join groups"),j()}function R(t,a,s){a("auctions"),k(`${h}&type=-3&tid=${s}`)}function z(t,a,s){a("secure trade"),k(`${x}${s}`)}function D(t,a,s){a("recall items"),k(`${y}${s}`)}function B(t,a,s){a("rank"),k(`${q}members&subcmd2=changerank&member_id=${s}`)}var C=i('<button class="fshTempleThree svelte-1gxsq3l" type="button">&nbsp;</button>'),I=i('<button type="button" class="svelte-1gxsq3l">&nbsp;</button>'),L=i('<div class="svelte-1gxsq3l"><button class="fshQuickBuff svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshJoin svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshGold svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1gxsq3l" type="button">&nbsp;</button> <!> <!></div>')
function M(t,i){a(i,!1)
const _=s.enableMaxGroupSizeToJoin?` < ${s.maxGroupSizeToJoin} Members`:"",j=w(),k=o("player_id")||e(),h=A()
function x(t){m("profile","quick button",t)}S()
var y=L(),q=n(y)
q.__click=[J,x,k],l(q,"data-tooltip",`Buff ${h??""}`)
var T=r(q,2)
T.__click=[N,x],l(T,"data-tooltip",`Join All Groups${_??""}`)
var G=r(T,2)
G.__click=[R,x,k],l(G,"data-tooltip",`Go to ${h??""}'s auctions`)
var M=r(G,2)
M.__click=[z,x,h],l(M,"data-tooltip",`Create Secure Trade to ${h??""}`)
var X=r(M,2),E=t=>{var a=C()
a.__click=[D,x,h],l(a,"data-tooltip",`Recall items from ${h??""}`),p(t,a)}
c(X,(t=>{j&&t(E)}))
var F=r(X,2),O=t=>{var a=I()
a.__click=[B,x,k],l(a,"data-tooltip",`Rank ${h??""}`),f((t=>g(a,`background-image: url('${$??""}guilds/${t??""}_mini.png');`)),[v],d),p(t,a)}
c(F,(t=>{j&&u("showAdmin")&&t(O)})),p(t,y),b()}function X(){const t=T('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var a,s
t&&(t.parentNode.classList.add("fshRelative"),a=t.nextElementSibling,s=t.parentNode,G(M,{anchor:a,target:s}))}t(["click"])
export{X as default}
//# sourceMappingURL=profileInjectQuickButton-SQp4gBNo.js.map
