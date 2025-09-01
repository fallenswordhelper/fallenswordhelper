import{ap as t,x as s,ay as a,ar as o,bi as e,z as n,B as i,E as l,C as r,G as c,aA as u,P as p,S as b,L as m,N as f,s as d,aC as v,dD as $,bl as g,aU as _,eo as k,R as x,ep as h,a$ as j,dL as q,cP as y,q as T,n as S}from"./calfSystem-CQOGdqPv.js"
import{a as G}from"./getIsOwnGuild-B98zjqUp.js"
import{a as C}from"./profile-CeFs7PZL.js"
import"./colouredDots-DDnPWAna.js"
import"./batch-ZfzqhoeD.js"
import"./onlineDot-DGI5IYJJ.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-B-ce898B.js"
import"./formToUrl-BAYKyqXO.js"
import"./doStatTotal-C5V1waCr.js"
function w(t,s,a){t.target.blur(),s("quickbuff"),_(a)}function A(t,s){s("join groups"),k()}function D(t,s,a){s("auctions"),x(`${h}&type=-3&tid=${a}`)}function J(t,s,a){s("secure trade"),x(`${j}${a}`)}function L(t,s,a){s("recall items"),x(`${q}${a}`)}function R(t,s,a){s("rank"),x(`${y}members&subcmd2=changerank&member_id=${a}`)}var z=i('<button class="fshTempleThree svelte-1gxsq3l" type="button">&nbsp;</button>'),B=i('<button type="button" class="svelte-1gxsq3l">&nbsp;</button>'),M=i('<div class="svelte-1gxsq3l"><button class="fshQuickBuff svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshJoin svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshGold svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1gxsq3l" type="button">&nbsp;</button> <!> <!></div>')
function N(t,i){s(i,!1)
const _=a.enableMaxGroupSizeToJoin?` < ${a.maxGroupSizeToJoin} Members`:"",k=G(),x=o("player_id")||e(),h=C()
function j(t){d("profile","quick button",t)}n()
var q=M(),y=l(q)
y.__click=[w,j,x]
var T=r(y,2)
T.__click=[A,j]
var S=r(T,2)
S.__click=[D,j,x]
var N=r(S,2)
N.__click=[J,j,h]
var E=r(N,2),P=t=>{var s=z()
s.__click=[L,j,h],p(()=>b(s,"data-tooltip",`Recall items from ${h??""}`)),m(t,s)}
c(E,t=>{k&&t(P)})
var U=r(E,2),I=t=>{var s=B()
s.__click=[R,j,x],p(t=>{$(s,`background-image: url('${g??""}guilds/${t??""}_mini.png');`),b(s,"data-tooltip",`Rank ${h??""}`)},[v]),m(t,s)}
c(U,t=>{k&&u("showAdmin")&&t(I)}),p(()=>{b(y,"data-tooltip",`Buff ${h??""}`),b(T,"data-tooltip",`Join All Groups${_}`),b(S,"data-tooltip",`Go to ${h??""}'s auctions`),b(N,"data-tooltip",`Create Secure Trade to ${h??""}`)}),m(t,q),f()}function E(){const t=T('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,S(N,{anchor:s,target:a}))}t(["click"])
export{E as default}
//# sourceMappingURL=profileInjectQuickButton-V4PuhJTe.js.map
