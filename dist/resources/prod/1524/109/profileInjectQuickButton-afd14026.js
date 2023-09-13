import{S as t,L as s,M as o,af as a,N as e,a1 as i,O as n,P as l,R as r,T as c,W as u,Y as p,Z as m,_ as f,ad as d,a7 as b,aH as g,dv as j,bO as k,dw as x,ar as h,cS as v,b$ as T,a$ as y,aL as $,bL as q,n as S,q as w}from"./calfSystem-2f15e074.js"
import{o as G}from"./openQuickBuffById-ce43fee8.js"
import{a as L}from"./getIsOwnGuild-88b195a2.js"
import{a as O}from"./profile-ce111955.js"
import"./fshOpen-c0e91392.js"
import"./colouredDots-9ffa12ec.js"
import"./batch-70cc157a.js"
import"./lastActivity-f32257d7.js"
import"./now-6f22aec9.js"
import"./regExpGroups-54cf6a6f.js"
import"./onlineDot-5faca2a7.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-1b6c609a.js"
import"./formToUrl-c2b3e14d.js"
import"./doStatTotal-86e70b40.js"
import"./asInt-351ebcd4.js"
import"./valueText-4ae65e1f.js"
import"./intValue-e1798d0a.js"
function R(t){let s,o,d,b,g,j,k,x,h,v,T,S,w,G,L,O,R=t[1]&&a("showAdmin"),A=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),B=R&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),y(s,"background-image","url('"+$+"guilds/"+q()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),k=n(),x=e("button"),h=i(" "),v=n(),T=e("button"),S=i(" "),w=n(),A&&A.c(),G=n(),B&&B.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(x,"class","fshGold svelte-1gxsq3l"),l(x,"type","button"),l(x,"data-tooltip","Go to "+t[2]+"'s auctions"),l(T,"class","fshTempleTwo svelte-1gxsq3l"),l(T,"type","button"),l(T,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,g),c(g,j),c(s,k),c(s,x),c(x,h),c(s,v),c(s,T),c(T,S),c(s,w),A&&A.m(s,null),c(s,G),B&&B.m(s,null),L||(O=[u(o,"click",t[3]),u(g,"click",t[4]),u(x,"click",t[5]),u(T,"click",t[6])],L=!0)},p(t,[s]){t[1]&&A.p(t,s),R&&B.p(t,s)},i:p,o:p,d(t){t&&m(s),A&&A.d(),B&&B.d(),L=!1,f(O)}}}function A(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=L(),a=b("player_id")||g(),e=O()
function i(t){S("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),G(a)},function(){i("join groups"),j()},function(){i("auctions"),k(`${x}&type=-3&tid=${a}`)},function(){i("secure trade"),k(`${h}${e}`)},function(){i("recall items"),k(`${v}${e}`)},function(){i("rank"),k(`${T}members&subcmd2=changerank&member_id=${a}`)}]}class B extends t{constructor(t){super(),s(this,t,A,R,o,{})}}function I(){const t=w('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new B({anchor:s,target:o}))}export{I as default}
//# sourceMappingURL=profileInjectQuickButton-afd14026.js.map
