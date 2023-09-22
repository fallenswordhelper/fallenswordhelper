import{S as t,J as s,K as o,ad as a,L as e,_ as i,M as n,N as l,P as r,Q as c,U as u,W as p,X as m,Y as f,ab as d,a5 as b,aE as g,du as j,bL as h,dv as x,ap as k,cQ as v,bY as y,aY as q,aI as T,bI as S,n as $,q as G}from"./calfSystem-4830a18d.js"
import{o as w}from"./openQuickBuffById-8cca49b4.js"
import{a as I}from"./getIsOwnGuild-ccc04378.js"
import{a as J}from"./profile-83af1ff4.js"
import"./fshOpen-c0e91392.js"
import"./colouredDots-ee35ff24.js"
import"./batch-54067b0c.js"
import"./lastActivity-1c838a76.js"
import"./now-6f22aec9.js"
import"./regExpGroups-9a4124f3.js"
import"./onlineDot-64ef932a.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-0ca01d03.js"
import"./formToUrl-824efe66.js"
import"./doStatTotal-331c56c0.js"
import"./asInt-e2e2488f.js"
import"./valueText-ddd10c6c.js"
import"./intValue-e1798d0a.js"
function Q(t){let s,o,d,b,g,j,h,x,k,v,y,$,G,w,I,J,Q=t[1]&&a("showAdmin"),A=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),B=Q&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),q(s,"background-image","url('"+T+"guilds/"+S()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),h=n(),x=e("button"),k=i(" "),v=n(),y=e("button"),$=i(" "),G=n(),A&&A.c(),w=n(),B&&B.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(x,"class","fshGold svelte-1gxsq3l"),l(x,"type","button"),l(x,"data-tooltip","Go to "+t[2]+"'s auctions"),l(y,"class","fshTempleTwo svelte-1gxsq3l"),l(y,"type","button"),l(y,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,g),c(g,j),c(s,h),c(s,x),c(x,k),c(s,v),c(s,y),c(y,$),c(s,G),A&&A.m(s,null),c(s,w),B&&B.m(s,null),I||(J=[u(o,"click",t[3]),u(g,"click",t[4]),u(x,"click",t[5]),u(y,"click",t[6])],I=!0)},p(t,[s]){t[1]&&A.p(t,s),Q&&B.p(t,s)},i:p,o:p,d(t){t&&m(s),A&&A.d(),B&&B.d(),I=!1,f(J)}}}function A(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=I(),a=b("player_id")||g(),e=J()
function i(t){$("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),w(a)},function(){i("join groups"),j()},function(){i("auctions"),h(`${x}&type=-3&tid=${a}`)},function(){i("secure trade"),h(`${k}${e}`)},function(){i("recall items"),h(`${v}${e}`)},function(){i("rank"),h(`${y}members&subcmd2=changerank&member_id=${a}`)}]}class B extends t{constructor(t){super(),s(this,t,A,Q,o,{})}}function E(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new B({anchor:s,target:o}))}export{E as default}
//# sourceMappingURL=profileInjectQuickButton-53974949.js.map
