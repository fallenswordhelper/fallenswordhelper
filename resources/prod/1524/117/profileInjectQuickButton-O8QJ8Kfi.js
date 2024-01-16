import{S as t,L as s,M as o,ai as a,O as e,a3 as i,P as n,Q as l,T as r,U as c,X as u,_ as p,a0 as m,a1 as f,ag as d,aa as b,aJ as g,dI as j,bS as x,dJ as h,au as k,c$ as v,c3 as y,b3 as T,aN as q,bP as S,s as $,q as G}from"./calfSystem-G1dN925O.js"
import{o as w}from"./openQuickBuffById-thDk1sOL.js"
import{a as J}from"./getIsOwnGuild-CeN3pfxP.js"
import{a as A}from"./profile-jI3i8MQO.js"
import"./fshOpen-16hNCxKt.js"
import"./colouredDots-eBcyl-KU.js"
import"./batch-0zyYgCi-.js"
import"./lastActivity-AD7TXVQF.js"
import"./now-pQzGw6vd.js"
import"./regExpGroups-4702yhMp.js"
import"./onlineDot-BePpx2CP.js"
import"./executeAll-EzEelzhH.js"
import"./interceptSubmit-Ji3kORWO.js"
import"./formToUrl--m9Zwlne.js"
import"./doStatTotal-KBtXKxVq.js"
import"./asInt-PKKHs1-a.js"
import"./valueText-890HKMma.js"
import"./intValue-JHhLnq8V.js"
function B(t){let s,o,d,b,g,j,x,h,k,v,y,$,G,w,J,A,B=t[1]&&a("showAdmin"),I=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),N=B&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),T(s,"background-image","url('"+q+"guilds/"+S()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),x=n(),h=e("button"),k=i(" "),v=n(),y=e("button"),$=i(" "),G=n(),I&&I.c(),w=n(),N&&N.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(h,"class","fshGold svelte-1gxsq3l"),l(h,"type","button"),l(h,"data-tooltip","Go to "+t[2]+"'s auctions"),l(y,"class","fshTempleTwo svelte-1gxsq3l"),l(y,"type","button"),l(y,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,g),c(g,j),c(s,x),c(s,h),c(h,k),c(s,v),c(s,y),c(y,$),c(s,G),I&&I.m(s,null),c(s,w),N&&N.m(s,null),J||(A=[u(o,"click",t[3]),u(g,"click",t[4]),u(h,"click",t[5]),u(y,"click",t[6])],J=!0)},p(t,[s]){t[1]&&I.p(t,s),B&&N.p(t,s)},i:p,o:p,d(t){t&&m(s),I&&I.d(),N&&N.d(),J=!1,f(A)}}}function I(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=J(),a=b("player_id")||g(),e=A()
function i(t){$("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),w(a)},function(){i("join groups"),j()},function(){i("auctions"),x(`${h}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${k}${e}`)},function(){i("recall items"),x(`${v}${e}`)},function(){i("rank"),x(`${y}members&subcmd2=changerank&member_id=${a}`)}]}class N extends t{constructor(t){super(),s(this,t,I,B,o,{})}}function O(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new N({anchor:s,target:o}))}export{O as default}
//# sourceMappingURL=profileInjectQuickButton-O8QJ8Kfi.js.map
