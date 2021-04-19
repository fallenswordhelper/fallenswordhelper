import{S as t,i as o,s as e,e as a,t as s,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as m,q as f}from"./index-7b21bc0b.js"
import{I as b,S as d,aE as h,av as g,c as j,c9 as k,O as x,ca as y,bN as v,bC as T,s as q,W as S,D as $}from"./calfSystem-26fbeaeb.js"
import{c as G}from"./currentGuildId-5214ee19.js"
import{a as w}from"./getIsOwnGuild-16a56bc0.js"
import{a as B}from"./profile-5102cc2f.js"
import{o as J}from"./openQuickBuffByName-ae264df4.js"
import"./colouredDots-5b530896.js"
import"./batch-a9571296.js"
import"./onlineDot-de8a6344.js"
import"./doStatTotal-e1ab27c9.js"
import"./executeAll-ed9a2868.js"
import"./playerName-a1b7a513.js"
import"./intValue-f6303c59.js"
import"./valueText-2413577e.js"
import"./interceptSubmit-b180aeed.js"
import"./formToUrl-140d33d2.js"
import"./fshOpen-bc09bf81.js"
function N(t){let o,e,d,h,j,k,x,y,v,T,q,S,$,w,B,J,N=t[1]&&b("showAdmin"),A=t[1]&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),C=N&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=a("div"),e=a("button"),d=s(" "),h=p(),j=a("button"),k=s(" "),x=p(),y=a("button"),v=s(" "),T=p(),q=a("button"),S=s(" "),$=p(),A&&A.c(),w=p(),C&&C.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(q,"class","fshTempleTwo svelte-1xo8gqh"),i(q,"type","button"),i(q,"data-tooltip","Create Secure Trade to "+t[2])},m(a,s){n(a,o,s),r(o,e),r(e,d),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,v),r(o,T),r(o,q),r(q,S),r(o,$),A&&A.m(o,null),r(o,w),C&&C.m(o,null),B||(J=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(q,"click",t[6])],B=!0)},p(t,[o]){t[1]&&A.p(t,o),N&&C.p(t,o)},i:l,o:l,d(t){t&&u(o),A&&A.d(),C&&C.d(),B=!1,m(J)}}}function A(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),a=d("player_id")||h(),s=B()
function i(t){S("profile","quick button",t)}return[o,e,s,function(t){t.target.blur(),i("quickbuff"),J(s)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${v}${s}`)},function(){i("recall items"),x(`${T}${s}`)},function(){i("rank"),x(`${q}members&subcmd2=changerank&member_id=${a}`)}]}class C extends t{constructor(t){super(),o(this,t,A,N,e,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new C({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-6a578095.js.map
