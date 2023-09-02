import{S as t,L as s,M as o,af as a,N as e,a1 as i,O as n,P as l,R as r,T as c,W as u,Y as p,Z as m,_ as f,ad as d,a7 as b,aH as g,dv as j,bO as x,dw as h,ar as k,cS as v,c0 as T,a$ as y,aL as q,bL as S,n as $,q as w}from"./calfSystem-2fff342b.js"
import{o as G}from"./openQuickBuffById-a2b81ae2.js"
import{a as L}from"./getIsOwnGuild-adb6bf6b.js"
import{a as J}from"./profile-6f240b96.js"
import"./fshOpen-c0e91392.js"
import"./colouredDots-9496dfbc.js"
import"./batch-02a48250.js"
import"./lastActivity-051eff5d.js"
import"./now-6f22aec9.js"
import"./regExpGroups-2038386a.js"
import"./onlineDot-0b9da3a6.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-fde9f84f.js"
import"./formToUrl-cfc572ea.js"
import"./doStatTotal-94a01fa9.js"
import"./asInt-45536bb6.js"
import"./valueText-77aa5799.js"
import"./intValue-e1798d0a.js"
function O(t){let s,o,d,b,g,j,x,h,k,v,T,$,w,G,L,J,O=t[1]&&a("showAdmin"),R=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),A=O&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),y(s,"background-image","url('"+q+"guilds/"+S()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),x=n(),h=e("button"),k=i(" "),v=n(),T=e("button"),$=i(" "),w=n(),R&&R.c(),G=n(),A&&A.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(h,"class","fshGold svelte-1gxsq3l"),l(h,"type","button"),l(h,"data-tooltip","Go to "+t[2]+"'s auctions"),l(T,"class","fshTempleTwo svelte-1gxsq3l"),l(T,"type","button"),l(T,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,g),c(g,j),c(s,x),c(s,h),c(h,k),c(s,v),c(s,T),c(T,$),c(s,w),R&&R.m(s,null),c(s,G),A&&A.m(s,null),L||(J=[u(o,"click",t[3]),u(g,"click",t[4]),u(h,"click",t[5]),u(T,"click",t[6])],L=!0)},p(t,[s]){t[1]&&R.p(t,s),O&&A.p(t,s)},i:p,o:p,d(t){t&&m(s),R&&R.d(),A&&A.d(),L=!1,f(J)}}}function R(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=L(),a=b("player_id")||g(),e=J()
function i(t){$("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),G(a)},function(){i("join groups"),j()},function(){i("auctions"),x(`${h}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${k}${e}`)},function(){i("recall items"),x(`${v}${e}`)},function(){i("rank"),x(`${T}members&subcmd2=changerank&member_id=${a}`)}]}class A extends t{constructor(t){super(),s(this,t,R,O,o,{})}}function B(){const t=w('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new A({anchor:s,target:o}))}export{B as default}
//# sourceMappingURL=profileInjectQuickButton-a862ee2d.js.map
