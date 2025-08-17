import{ao as t,x as s,ax as a,aq as o,bd as e,A as i,D as n,B as l,F as r,az as c,O as u,R as p,K as b,L as m,s as f,cr as d,dH as v,bi as g,aS as $,et as _,Q as k,eu as x,aZ as j,dP as h,cI as q,q as y,n as T}from"./calfSystem-CT1aM4VG.js"
import"./legacy-BQk1-_ZQ.js"
import{i as S}from"./lifecycle-Dl_sxbSE.js"
import{a as G}from"./getIsOwnGuild-DKkasN6V.js"
import{a as A}from"./profile-CCVSB3hZ.js"
import"./colouredDots-B_REpQ9x.js"
import"./batch-CVoa0La2.js"
import"./onlineDot-rvpUtCt8.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-D7kELBzE.js"
import"./formToUrl-zF_XLEy1.js"
import"./doStatTotal--TaVGr_k.js"
function w(t,s,a){t.target.blur(),s("quickbuff"),$(a)}function B(t,s){s("join groups"),_()}function J(t,s,a){s("auctions"),k(`${x}&type=-3&tid=${a}`)}function R(t,s,a){s("secure trade"),k(`${j}${a}`)}function z(t,s,a){s("recall items"),k(`${h}${a}`)}function D(t,s,a){s("rank"),k(`${q}members&subcmd2=changerank&member_id=${a}`)}var L=i('<button class="fshTempleThree svelte-1gxsq3l" type="button">&nbsp;</button>'),N=i('<button type="button" class="svelte-1gxsq3l">&nbsp;</button>'),C=i('<div class="svelte-1gxsq3l"><button class="fshQuickBuff svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshJoin svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshGold svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1gxsq3l" type="button">&nbsp;</button> <!> <!></div>')
function I(t,i){s(i,!1)
const $=a.enableMaxGroupSizeToJoin?` < ${a.maxGroupSizeToJoin} Members`:"",_=G(),k=o("player_id")||e(),x=A()
function j(t){f("profile","quick button",t)}S()
var h=C(),q=n(h)
q.__click=[w,j,k]
var y=l(q,2)
y.__click=[B,j]
var T=l(y,2)
T.__click=[J,j,k]
var I=l(T,2)
I.__click=[R,j,x]
var K=l(I,2),M=t=>{var s=L()
s.__click=[z,j,x],u((()=>p(s,"data-tooltip",`Recall items from ${x??""}`))),b(t,s)}
r(K,(t=>{_&&t(M)}))
var O=l(K,2),Q=t=>{var s=N()
s.__click=[D,j,k],u((t=>{v(s,`background-image: url('${g??""}guilds/${t??""}_mini.png');`),p(s,"data-tooltip",`Rank ${x??""}`)}),[d]),b(t,s)}
r(O,(t=>{_&&c("showAdmin")&&t(Q)})),u((()=>{p(q,"data-tooltip",`Buff ${x??""}`),p(y,"data-tooltip",`Join All Groups${$}`),p(T,"data-tooltip",`Go to ${x??""}'s auctions`),p(I,"data-tooltip",`Create Secure Trade to ${x??""}`)})),b(t,h),m()}function K(){const t=y('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,T(I,{anchor:s,target:a}))}t(["click"])
export{K as default}
//# sourceMappingURL=profileInjectQuickButton-CmkUjnTL.js.map
