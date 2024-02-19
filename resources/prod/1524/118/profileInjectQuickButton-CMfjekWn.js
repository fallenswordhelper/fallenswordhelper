import{S as t,L as s,M as o,ai as a,O as e,a3 as i,P as n,Q as l,T as r,U as c,X as u,_ as p,a0 as m,a1 as f,ag as d,aa as b,aJ as g,dJ as j,bS as h,dK as x,au as k,c$ as v,c3 as T,b3 as y,aN as q,bP as S,s as $,q as G}from"./calfSystem-hszmVKJw.js"
import{o as w}from"./openQuickBuffById-Dj7PMgiA.js"
import{a as J}from"./getIsOwnGuild-DCAaKhpe.js"
import{a as A}from"./profile-Ce7TaNKl.js"
import"./fshOpen-AuKioUPF.js"
import"./colouredDots-DYqpMLRA.js"
import"./batch-DXYI5I4-.js"
import"./lastActivity-BB2E-IkS.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-DzwffQY2.js"
import"./onlineDot-Br8UW8F5.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Fy_b1It8.js"
import"./formToUrl-BPPann-D.js"
import"./doStatTotal-B0PGURoa.js"
import"./asInt-D7uD_FES.js"
import"./valueText-uf2WlnM3.js"
import"./intValue-C7nTQec1.js"
function B(t){let s,o,d,b,g,j,h,x,k,v,T,$,G,w,J,A,B=t[1]&&a("showAdmin"),L=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),O=B&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),y(s,"background-image","url('"+q+"guilds/"+S()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),h=n(),x=e("button"),k=i(" "),v=n(),T=e("button"),$=i(" "),G=n(),L&&L.c(),w=n(),O&&O.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(x,"class","fshGold svelte-1gxsq3l"),l(x,"type","button"),l(x,"data-tooltip","Go to "+t[2]+"'s auctions"),l(T,"class","fshTempleTwo svelte-1gxsq3l"),l(T,"type","button"),l(T,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,g),c(g,j),c(s,h),c(s,x),c(x,k),c(s,v),c(s,T),c(T,$),c(s,G),L&&L.m(s,null),c(s,w),O&&O.m(s,null),J||(A=[u(o,"click",t[3]),u(g,"click",t[4]),u(x,"click",t[5]),u(T,"click",t[6])],J=!0)},p(t,[s]){t[1]&&L.p(t,s),B&&O.p(t,s)},i:p,o:p,d(t){t&&m(s),L&&L.d(),O&&O.d(),J=!1,f(A)}}}function L(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=J(),a=b("player_id")||g(),e=A()
function i(t){$("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),w(a)},function(){i("join groups"),j()},function(){i("auctions"),h(`${x}&type=-3&tid=${a}`)},function(){i("secure trade"),h(`${k}${e}`)},function(){i("recall items"),h(`${v}${e}`)},function(){i("rank"),h(`${T}members&subcmd2=changerank&member_id=${a}`)}]}class O extends t{constructor(t){super(),s(this,t,L,B,o,{})}}function Q(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new O({anchor:s,target:o}))}export{Q as default}
//# sourceMappingURL=profileInjectQuickButton-CMfjekWn.js.map
