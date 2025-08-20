import{ao as t,x as s,ax as a,aq as o,bd as e,A as i,D as n,B as l,F as r,az as c,O as u,R as p,K as b,L as m,s as f,ct as d,dI as v,bi as g,aS as $,eu as _,Q as k,ev as x,aZ as h,dQ as j,cK as q,q as y,n as T}from"./calfSystem-KFszEm2S.js"
import"./legacy-DCwSAgeG.js"
import{i as S}from"./lifecycle-TNO4elpY.js"
import{a as G}from"./getIsOwnGuild-BdlaikFM.js"
import{a as w}from"./profile-uV9K8-sy.js"
import"./colouredDots-CinmGFx6.js"
import"./batch-CLh2C2gx.js"
import"./onlineDot-hLWANonx.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-DBzRBI1G.js"
import"./formToUrl-BOvHbqVR.js"
import"./doStatTotal-C_eoXAtI.js"
function A(t,s,a){t.target.blur(),s("quickbuff"),$(a)}function D(t,s){s("join groups"),_()}function J(t,s,a){s("auctions"),k(`${x}&type=-3&tid=${a}`)}function L(t,s,a){s("secure trade"),k(`${h}${a}`)}function R(t,s,a){s("recall items"),k(`${j}${a}`)}function z(t,s,a){s("rank"),k(`${q}members&subcmd2=changerank&member_id=${a}`)}var B=i('<button class="fshTempleThree svelte-1gxsq3l" type="button">&nbsp;</button>'),C=i('<button type="button" class="svelte-1gxsq3l">&nbsp;</button>'),N=i('<div class="svelte-1gxsq3l"><button class="fshQuickBuff svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshJoin svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshGold svelte-1gxsq3l" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1gxsq3l" type="button">&nbsp;</button> <!> <!></div>')
function Q(t,i){s(i,!1)
const $=a.enableMaxGroupSizeToJoin?` < ${a.maxGroupSizeToJoin} Members`:"",_=G(),k=o("player_id")||e(),x=w()
function h(t){f("profile","quick button",t)}S()
var j=N(),q=n(j)
q.__click=[A,h,k]
var y=l(q,2)
y.__click=[D,h]
var T=l(y,2)
T.__click=[J,h,k]
var Q=l(T,2)
Q.__click=[L,h,x]
var I=l(Q,2),K=t=>{var s=B()
s.__click=[R,h,x],u(()=>p(s,"data-tooltip",`Recall items from ${x??""}`)),b(t,s)}
r(I,t=>{_&&t(K)})
var M=l(I,2),O=t=>{var s=C()
s.__click=[z,h,k],u(t=>{v(s,`background-image: url('${g??""}guilds/${t??""}_mini.png');`),p(s,"data-tooltip",`Rank ${x??""}`)},[d]),b(t,s)}
r(M,t=>{_&&c("showAdmin")&&t(O)}),u(()=>{p(q,"data-tooltip",`Buff ${x??""}`),p(y,"data-tooltip",`Join All Groups${$}`),p(T,"data-tooltip",`Go to ${x??""}'s auctions`),p(Q,"data-tooltip",`Create Secure Trade to ${x??""}`)}),b(t,j),m()}function I(){const t=y('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,T(Q,{anchor:s,target:a}))}t(["click"])
export{I as default}
//# sourceMappingURL=profileInjectQuickButton-UIVBBPFS.js.map
