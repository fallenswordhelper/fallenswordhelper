import{ao as t,x as a,ax as s,aq as o,bh as e,z as n,B as i,E as r,C as l,G as c,az as u,P as p,S as m,L as b,N as f,s as d,aB as v,dw as g,bk as $,aT as _,eh as k,R as h,ei as j,a_ as T,dE as y,cO as S,q as x,n as G}from"./calfSystem-CIuUjh4H.js"
import{a as w}from"./getIsOwnGuild-BTMMVdx8.js"
import{a as q}from"./profile-CaBVP_jT.js"
import"./colouredDots-BfpJMcdJ.js"
import"./batch-BqkctEiX.js"
import"./onlineDot-ixY_oy9C.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-UQt2BX0g.js"
import"./formToUrl-BcjoMJ8T.js"
import"./doStatTotal-CiVM0LYo.js"
function z(t,a,s){t.target.blur(),a("quickbuff"),_(s)}function B(t,a){a("join groups"),k()}function E(t,a,s){a("auctions"),h(`${j}&type=-3&tid=${s}`)}function J(t,a,s){a("secure trade"),h(`${T}${s}`)}function L(t,a,s){a("recall items"),h(`${y}${s}`)}function R(t,a,s){a("rank"),h(`${S}members&subcmd2=changerank&member_id=${s}`)}var A=i('<button class="fshTempleThree svelte-1a8agm3" type="button">&nbsp;</button>'),C=i('<button type="button" class="svelte-1a8agm3">&nbsp;</button>'),D=i('<div class="svelte-1a8agm3"><button class="fshQuickBuff svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshJoin svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshGold svelte-1a8agm3" type="button">&nbsp;</button> <button class="fshTempleTwo svelte-1a8agm3" type="button">&nbsp;</button> <!> <!></div>')
function M(t,i){a(i,!1)
const _=s.enableMaxGroupSizeToJoin?` < ${s.maxGroupSizeToJoin} Members`:"",k=w(),h=o("player_id")||e(),j=q()
function T(t){d("profile","quick button",t)}n()
var y=D(),S=r(y)
S.__click=[z,T,h]
var x=l(S,2)
x.__click=[B,T]
var G=l(x,2)
G.__click=[E,T,h]
var M=l(G,2)
M.__click=[J,T,j]
var N=l(M,2),O=t=>{var a=A()
a.__click=[L,T,j],p(()=>m(a,"data-tooltip",`Recall items from ${j??""}`)),b(t,a)}
c(N,t=>{k&&t(O)})
var I=l(N,2),P=t=>{var a=C()
a.__click=[R,T,h],p(t=>{g(a,`background-image: url('${$??""}guilds/${t??""}_mini.png');`),m(a,"data-tooltip",`Rank ${j??""}`)},[v]),b(t,a)}
c(I,t=>{k&&u("showAdmin")&&t(P)}),p(()=>{m(S,"data-tooltip",`Buff ${j??""}`),m(x,"data-tooltip",`Join All Groups${_}`),m(G,"data-tooltip",`Go to ${j??""}'s auctions`),m(M,"data-tooltip",`Create Secure Trade to ${j??""}`)}),b(t,y),f()}function N(){const t=x('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var a,s
t&&(t.parentNode.classList.add("fshRelative"),a=t.nextElementSibling,s=t.parentNode,G(M,{anchor:a,target:s}))}t(["click"])
export{N as default}
//# sourceMappingURL=profileInjectQuickButton-DlDHoUZ0.js.map
