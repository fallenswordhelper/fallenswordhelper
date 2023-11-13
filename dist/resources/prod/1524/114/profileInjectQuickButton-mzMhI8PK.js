import{S as t,J as s,K as o,ad as a,L as e,_ as i,M as n,N as l,P as r,Q as c,U as u,W as p,X as m,Y as f,ab as d,a5 as b,dv as j,bK as g,dw as x,ap as h,cP as k,bX as v,aX as y,aH as q,bH as T,s as S,q as $}from"./calfSystem-rn9Rc_nF.js"
import{o as G}from"./openQuickBuffById-shBuZQr_.js"
import{p as w}from"./playerId-b1mgATJE.js"
import{a as I}from"./getIsOwnGuild-p1c3SAau.js"
import{a as J}from"./profile-6qLlbhRu.js"
import"./fshOpen-16hNCxKt.js"
import"./colouredDots-DXYXLxko.js"
import"./batch-Xe3JA1CU.js"
import"./lastActivity-LZrHkUax.js"
import"./now-pQzGw6vd.js"
import"./regExpGroups-aNVGlRVi.js"
import"./onlineDot-uch9xx6a.js"
import"./executeAll-EzEelzhH.js"
import"./interceptSubmit-cB4BJ9ys.js"
import"./formToUrl-gDJQKQU4.js"
import"./doStatTotal-5BSd8atf.js"
import"./asInt-NFaqrHrG.js"
import"./valueText-CeLZBdVf.js"
import"./intValue-JHhLnq8V.js"
function A(t){let s,o,d,b,j,g,x,h,k,v,S,$,G,w,I,J,A=t[1]&&a("showAdmin"),B=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),H=A&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),y(s,"background-image","url('"+q+"guilds/"+T()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),j=e("button"),g=i(" "),x=n(),h=e("button"),k=i(" "),v=n(),S=e("button"),$=i(" "),G=n(),B&&B.c(),w=n(),H&&H.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(j,"class","fshJoin svelte-1gxsq3l"),l(j,"type","button"),l(j,"data-tooltip","Join All Groups"+t[0]),l(h,"class","fshGold svelte-1gxsq3l"),l(h,"type","button"),l(h,"data-tooltip","Go to "+t[2]+"'s auctions"),l(S,"class","fshTempleTwo svelte-1gxsq3l"),l(S,"type","button"),l(S,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,j),c(j,g),c(s,x),c(s,h),c(h,k),c(s,v),c(s,S),c(S,$),c(s,G),B&&B.m(s,null),c(s,w),H&&H.m(s,null),I||(J=[u(o,"click",t[3]),u(j,"click",t[4]),u(h,"click",t[5]),u(S,"click",t[6])],I=!0)},p(t,[s]){t[1]&&B.p(t,s),A&&H.p(t,s)},i:p,o:p,d(t){t&&m(s),B&&B.d(),H&&H.d(),I=!1,f(J)}}}function B(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=I(),a=b("player_id")||w(),e=J()
function i(t){S("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),G(a)},function(){i("join groups"),j()},function(){i("auctions"),g(`${x}&type=-3&tid=${a}`)},function(){i("secure trade"),g(`${h}${e}`)},function(){i("recall items"),g(`${k}${e}`)},function(){i("rank"),g(`${v}members&subcmd2=changerank&member_id=${a}`)}]}class H extends t{constructor(t){super(),s(this,t,B,A,o,{})}}function N(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new H({anchor:s,target:o}))}export{N as default}
//# sourceMappingURL=profileInjectQuickButton-mzMhI8PK.js.map
