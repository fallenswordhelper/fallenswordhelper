import{ap as t,x as s,ay as a,ar as o,be as e,z as n,B as i,E as l,C as r,G as c,aA as u,P as p,S as b,L as m,N as f,s as d,cu as v,dB as g,bj as $,aT as _,en as k,R as x,eo as h,a_ as j,dJ as y,cL as q,q as T,n as S}from"./calfSystem-79LsojAC.js"
import{a as G}from"./getIsOwnGuild-W3EIOpyf.js"
import{a as J}from"./profile-B_YzIzou.js"
import"./colouredDots-DchJRC_Z.js"
import"./batch-BGPP456i.js"
import"./onlineDot-XDIE_fQc.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-c1dihHnz.js"
import"./formToUrl-CqnZfaJL.js"
import"./doStatTotal-tBEj9xvS.js"
function w(t,s,a){t.target.blur(),s("quickbuff"),_(a)}function A(t,s){s("join groups"),k()}function B(t,s,a){s("auctions"),x(`${h}&type=-3&tid=${a}`)}function L(t,s,a){s("secure trade"),x(`${j}${a}`)}function R(t,s,a){s("recall items"),x(`${y}${a}`)}function z(t,s,a){s("rank"),x(`${q}members&subcmd2=changerank&member_id=${a}`)}var C=i('<button class="fshTempleThree svelte-1gxsq3l" type="button">&nbsp;</button>'),M=i('<button type="button" class="svelte-1gxsq3l">&nbsp;</button>'),N=i('<div class="svelte-1gxsq3l"><button class="fshQuickBuff svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshJoin svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshGold svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1gxsq3l" type="button">&nbsp;</button> <!> <!></div>')
function D(t,i){s(i,!1)
const _=a.enableMaxGroupSizeToJoin?` < ${a.maxGroupSizeToJoin} Members`:"",k=G(),x=o("player_id")||e(),h=J()
function j(t){d("profile","quick button",t)}n()
var y=N(),q=l(y)
q.__click=[w,j,x]
var T=r(q,2)
T.__click=[A,j]
var S=r(T,2)
S.__click=[B,j,x]
var D=r(S,2)
D.__click=[L,j,h]
var E=r(D,2),H=t=>{var s=C()
s.__click=[R,j,h],p(()=>b(s,"data-tooltip",`Recall items from ${h??""}`)),m(t,s)}
c(E,t=>{k&&t(H)})
var I=r(E,2),O=t=>{var s=M()
s.__click=[z,j,x],p(t=>{g(s,`background-image: url('${$??""}guilds/${t??""}_mini.png');`),b(s,"data-tooltip",`Rank ${h??""}`)},[v]),m(t,s)}
c(I,t=>{k&&u("showAdmin")&&t(O)}),p(()=>{b(q,"data-tooltip",`Buff ${h??""}`),b(T,"data-tooltip",`Join All Groups${_}`),b(S,"data-tooltip",`Go to ${h??""}'s auctions`),b(D,"data-tooltip",`Create Secure Trade to ${h??""}`)}),m(t,y),f()}function E(){const t=T('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,S(D,{anchor:s,target:a}))}t(["click"])
export{E as default}
//# sourceMappingURL=profileInjectQuickButton-Bnv5kAEU.js.map
