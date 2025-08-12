import{aq as t,z as s,az as a,as as o,bc as e,C as i,F as n,D as l,H as r,aB as c,Q as u,T as p,N as b,O as m,s as f,cv as d,dL as v,bh as g,aQ as $,ez as _,S as k,eA as h,aX as j,dT as q,cM as x,q as y,u as T}from"./calfSystem-BlPuMQGT.js"
import"./legacy-6E4ldJQ5.js"
import{i as S}from"./lifecycle-DK9Oix-H.js"
import{a as G}from"./getIsOwnGuild-ZyWc6FJd.js"
import{a as z}from"./profile-DeHCBAxd.js"
import"./colouredDots-C7VpQq2a.js"
import"./batch-g9WD9nW_.js"
import"./onlineDot-BCSSHLUO.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Cvm926dN.js"
import"./formToUrl-Dy2RFM47.js"
import"./doStatTotal-B-MyqY5z.js"
function J(t,s,a){t.target.blur(),s("quickbuff"),$(a)}function w(t,s){s("join groups"),_()}function A(t,s,a){s("auctions"),k(`${h}&type=-3&tid=${a}`)}function B(t,s,a){s("secure trade"),k(`${j}${a}`)}function C(t,s,a){s("recall items"),k(`${q}${a}`)}function N(t,s,a){s("rank"),k(`${x}members&subcmd2=changerank&member_id=${a}`)}var D=i('<button class="fshTempleThree svelte-1gxsq3l" type="button">&nbsp;</button>'),L=i('<button type="button" class="svelte-1gxsq3l">&nbsp;</button>'),M=i('<div class="svelte-1gxsq3l"><button class="fshQuickBuff svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshJoin svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshGold svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1gxsq3l" type="button">&nbsp;</button> <!> <!></div>')
function Q(t,i){s(i,!1)
const $=a.enableMaxGroupSizeToJoin?` < ${a.maxGroupSizeToJoin} Members`:"",_=G(),k=o("player_id")||e(),h=z()
function j(t){f("profile","quick button",t)}S()
var q=M(),x=n(q)
x.__click=[J,j,k]
var y=l(x,2)
y.__click=[w,j]
var T=l(y,2)
T.__click=[A,j,k]
var Q=l(T,2)
Q.__click=[B,j,h]
var R=l(Q,2),O=t=>{var s=D()
s.__click=[C,j,h],u((()=>p(s,"data-tooltip",`Recall items from ${h??""}`))),b(t,s)}
r(R,(t=>{_&&t(O)}))
var E=l(R,2),F=t=>{var s=L()
s.__click=[N,j,k],u((t=>{v(s,`background-image: url('${g??""}guilds/${t??""}_mini.png');`),p(s,"data-tooltip",`Rank ${h??""}`)}),[d]),b(t,s)}
r(E,(t=>{_&&c("showAdmin")&&t(F)})),u((()=>{p(x,"data-tooltip",`Buff ${h??""}`),p(y,"data-tooltip",`Join All Groups${$}`),p(T,"data-tooltip",`Go to ${h??""}'s auctions`),p(Q,"data-tooltip",`Create Secure Trade to ${h??""}`)})),b(t,q),m()}function R(){const t=y('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,T(Q,{anchor:s,target:a}))}t(["click"])
export{R as default}
//# sourceMappingURL=profileInjectQuickButton-CXQ7c75G.js.map
