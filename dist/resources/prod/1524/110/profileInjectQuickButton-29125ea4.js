import{S as t,K as s,L as o,ae as a,M as e,a0 as i,N as n,O as l,Q as r,R as c,V as u,X as p,Y as m,Z as f,ac as d,a6 as b,aF as g,du as j,bM as v,dv as x,aq as h,cQ as k,bZ as q,aZ as y,aJ as T,bJ as S,n as $,q as G}from"./calfSystem-929ac228.js"
import{o as w}from"./openQuickBuffById-85e39f39.js"
import{a as J}from"./getIsOwnGuild-7f9bd025.js"
import{a as Q}from"./profile-feed58ab.js"
import"./fshOpen-c0e91392.js"
import"./colouredDots-984f2cd0.js"
import"./batch-30d5e16a.js"
import"./lastActivity-422d41fa.js"
import"./now-6f22aec9.js"
import"./regExpGroups-9d5b9f10.js"
import"./onlineDot-2726d9a2.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-9ec04868.js"
import"./formToUrl-25253a60.js"
import"./doStatTotal-aca339cc.js"
import"./asInt-116907f9.js"
import"./valueText-2acfe155.js"
import"./intValue-e1798d0a.js"
function R(t){let s,o,d,b,g,j,v,x,h,k,q,$,G,w,J,Q,R=t[1]&&a("showAdmin"),A=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),B=R&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),y(s,"background-image","url('"+T+"guilds/"+S()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),v=n(),x=e("button"),h=i(" "),k=n(),q=e("button"),$=i(" "),G=n(),A&&A.c(),w=n(),B&&B.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(x,"class","fshGold svelte-1gxsq3l"),l(x,"type","button"),l(x,"data-tooltip","Go to "+t[2]+"'s auctions"),l(q,"class","fshTempleTwo svelte-1gxsq3l"),l(q,"type","button"),l(q,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,g),c(g,j),c(s,v),c(s,x),c(x,h),c(s,k),c(s,q),c(q,$),c(s,G),A&&A.m(s,null),c(s,w),B&&B.m(s,null),J||(Q=[u(o,"click",t[3]),u(g,"click",t[4]),u(x,"click",t[5]),u(q,"click",t[6])],J=!0)},p(t,[s]){t[1]&&A.p(t,s),R&&B.p(t,s)},i:p,o:p,d(t){t&&m(s),A&&A.d(),B&&B.d(),J=!1,f(Q)}}}function A(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=J(),a=b("player_id")||g(),e=Q()
function i(t){$("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),w(a)},function(){i("join groups"),j()},function(){i("auctions"),v(`${x}&type=-3&tid=${a}`)},function(){i("secure trade"),v(`${h}${e}`)},function(){i("recall items"),v(`${k}${e}`)},function(){i("rank"),v(`${q}members&subcmd2=changerank&member_id=${a}`)}]}class B extends t{constructor(t){super(),s(this,t,A,R,o,{})}}function M(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new B({anchor:s,target:o}))}export{M as default}
//# sourceMappingURL=profileInjectQuickButton-29125ea4.js.map
