import{S as t,L as s,M as o,af as a,N as e,a1 as i,O as n,P as l,R as r,T as c,W as u,Y as p,Z as m,_ as f,ad as d,a7 as b,aH as g,dv as j,bO as k,dw as v,ar as x,cS as h,b$ as y,a$ as T,aL as $,bL as q,n as S,q as G}from"./calfSystem-34913441.js"
import{o as w}from"./openQuickBuffById-3914df94.js"
import{a as L}from"./getIsOwnGuild-3288533d.js"
import{a as O}from"./profile-3af3aeca.js"
import"./fshOpen-c0e91392.js"
import"./colouredDots-13be7fed.js"
import"./batch-868086f2.js"
import"./lastActivity-75095e08.js"
import"./now-6f22aec9.js"
import"./regExpGroups-e9c1f885.js"
import"./onlineDot-82a20501.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-2c6bfafb.js"
import"./formToUrl-4ee925a6.js"
import"./doStatTotal-feca30dd.js"
import"./asInt-f990b3d0.js"
import"./valueText-238d2284.js"
import"./intValue-e1798d0a.js"
function R(t){let s,o,d,b,g,j,k,v,x,h,y,S,G,w,L,O,R=t[1]&&a("showAdmin"),A=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),B=R&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),T(s,"background-image","url('"+$+"guilds/"+q()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),k=n(),v=e("button"),x=i(" "),h=n(),y=e("button"),S=i(" "),G=n(),A&&A.c(),w=n(),B&&B.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(v,"class","fshGold svelte-1gxsq3l"),l(v,"type","button"),l(v,"data-tooltip","Go to "+t[2]+"'s auctions"),l(y,"class","fshTempleTwo svelte-1gxsq3l"),l(y,"type","button"),l(y,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,g),c(g,j),c(s,k),c(s,v),c(v,x),c(s,h),c(s,y),c(y,S),c(s,G),A&&A.m(s,null),c(s,w),B&&B.m(s,null),L||(O=[u(o,"click",t[3]),u(g,"click",t[4]),u(v,"click",t[5]),u(y,"click",t[6])],L=!0)},p(t,[s]){t[1]&&A.p(t,s),R&&B.p(t,s)},i:p,o:p,d(t){t&&m(s),A&&A.d(),B&&B.d(),L=!1,f(O)}}}function A(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=L(),a=b("player_id")||g(),e=O()
function i(t){S("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),w(a)},function(){i("join groups"),j()},function(){i("auctions"),k(`${v}&type=-3&tid=${a}`)},function(){i("secure trade"),k(`${x}${e}`)},function(){i("recall items"),k(`${h}${e}`)},function(){i("rank"),k(`${y}members&subcmd2=changerank&member_id=${a}`)}]}class B extends t{constructor(t){super(),s(this,t,A,R,o,{})}}function I(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new B({anchor:s,target:o}))}export{I as default}
//# sourceMappingURL=profileInjectQuickButton-458bbbc8.js.map
