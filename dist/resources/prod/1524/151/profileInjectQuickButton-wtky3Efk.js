import{aq as t,z as s,az as a,as as o,bf as e,C as i,F as n,D as l,H as r,aB as c,Q as u,T as p,N as b,O as m,s as f,cx as d,dN as v,bk as g,aU as $,eB as _,S as k,eC as j,a$ as x,dV as h,cO as q,q as y,u as T}from"./calfSystem-C1X5YxJZ.js"
import"./legacy-CERE4DQ7.js"
import{i as S}from"./lifecycle-U3zIf5cY.js"
import{a as G}from"./getIsOwnGuild-uAMti4Se.js"
import{a as B}from"./profile-_W7HFTRW.js"
import"./colouredDots-Cilnw8M4.js"
import"./batch-BNBFzvJw.js"
import"./onlineDot-D8QnVOid.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-D-IYqL1u.js"
import"./formToUrl-BjgGWW4H.js"
import"./doStatTotal-DtCeT0Ju.js"
function C(t,s,a){t.target.blur(),s("quickbuff"),$(a)}function J(t,s){s("join groups"),_()}function N(t,s,a){s("auctions"),k(`${j}&type=-3&tid=${a}`)}function w(t,s,a){s("secure trade"),k(`${x}${a}`)}function z(t,s,a){s("recall items"),k(`${h}${a}`)}function A(t,s,a){s("rank"),k(`${q}members&subcmd2=changerank&member_id=${a}`)}var D=i('<button class="fshTempleThree svelte-1gxsq3l" type="button">&nbsp;</button>'),O=i('<button type="button" class="svelte-1gxsq3l">&nbsp;</button>'),R=i('<div class="svelte-1gxsq3l"><button class="fshQuickBuff svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshJoin svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshGold svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1gxsq3l" type="button">&nbsp;</button> <!> <!></div>')
function L(t,i){s(i,!1)
const $=a.enableMaxGroupSizeToJoin?` < ${a.maxGroupSizeToJoin} Members`:"",_=G(),k=o("player_id")||e(),j=B()
function x(t){f("profile","quick button",t)}S()
var h=R(),q=n(h)
q.__click=[C,x,k]
var y=l(q,2)
y.__click=[J,x]
var T=l(y,2)
T.__click=[N,x,k]
var L=l(T,2)
L.__click=[w,x,j]
var M=l(L,2),Q=t=>{var s=D()
s.__click=[z,x,j],u((()=>p(s,"data-tooltip",`Recall items from ${j??""}`))),b(t,s)}
r(M,(t=>{_&&t(Q)}))
var U=l(M,2),E=t=>{var s=O()
s.__click=[A,x,k],u((t=>{v(s,`background-image: url('${g??""}guilds/${t??""}_mini.png');`),p(s,"data-tooltip",`Rank ${j??""}`)}),[d]),b(t,s)}
r(U,(t=>{_&&c("showAdmin")&&t(E)})),u((()=>{p(q,"data-tooltip",`Buff ${j??""}`),p(y,"data-tooltip",`Join All Groups${$}`),p(T,"data-tooltip",`Go to ${j??""}'s auctions`),p(L,"data-tooltip",`Create Secure Trade to ${j??""}`)})),b(t,h),m()}function M(){const t=y('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,T(L,{anchor:s,target:a}))}t(["click"])
export{M as default}
//# sourceMappingURL=profileInjectQuickButton-wtky3Efk.js.map
