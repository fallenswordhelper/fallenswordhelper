import{S as t,i as o,s as e,e as s,t as a,g as c,a as i,b as n,l as r,n as l,d as u,f as p,r as m,q as d}from"./index-bebd168e.js"
import{H as f,R as b,av as h,ak as g,c as j,c8 as k,N as x,c9 as y,bL as v,bz as T,s as q,V as $,C as S}from"./calfSystem-c91a5c89.js"
import{c as G}from"./currentGuildId-1acce0c7.js"
import{a as w}from"./getIsOwnGuild-3e09dc38.js"
import{a as B}from"./profile-4f0c63ac.js"
import{o as J}from"./openQuickBuffByName-addd523e.js"
import"./colouredDots-9ccccd14.js"
import"./batch-4aceb3c4.js"
import"./onlineDot-d9085600.js"
import"./doStatTotal-424f589d.js"
import"./executeAll-f0c9235d.js"
import"./playerName-542e8d11.js"
import"./intValue-55d66e09.js"
import"./valueText-4040d1ec.js"
import"./interceptSubmit-910866a3.js"
import"./formToUrl-3cd8bc13.js"
import"./fshOpen-946a9f05.js"
function N(t){let o,e,b,h,j,k,x,y,v,T,q,$,S,w,B,J,N=t[1]&&f("showAdmin"),z=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),c(o,"class","fshTempleThree svelte-1xo8gqh"),c(o,"type","button"),c(o,"data-tooltip","Recall items from "+t[2])},m(s,a){i(s,o,a),n(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=N&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),d(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),c(o,"type","button"),c(o,"data-tooltip","Rank "+t[2]),c(o,"class","svelte-1xo8gqh")},m(s,a){i(s,o,a),n(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),v=a(" "),T=p(),q=s("button"),$=a(" "),S=p(),z&&z.c(),w=p(),A&&A.c(),c(e,"class","fshQuickBuff svelte-1xo8gqh"),c(e,"type","button"),c(e,"data-tooltip","Buff "+t[2]),c(j,"class","fshJoin svelte-1xo8gqh"),c(j,"type","button"),c(j,"data-tooltip","Join All Groups"+t[0]),c(y,"class","fshGold svelte-1xo8gqh"),c(y,"type","button"),c(y,"data-tooltip","Go to "+t[2]+"'s auctions"),c(q,"class","fshTempleTwo svelte-1xo8gqh"),c(q,"type","button"),c(q,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){i(s,o,a),n(o,e),n(e,b),n(o,h),n(o,j),n(j,k),n(o,x),n(o,y),n(y,v),n(o,T),n(o,q),n(q,$),n(o,S),z&&z.m(o,null),n(o,w),A&&A.m(o,null),B||(J=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(q,"click",t[6])],B=!0)},p(t,[o]){t[1]&&z.p(t,o),N&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),z&&z.d(),A&&A.d(),B=!1,m(J)}}}function z(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function c(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),c("quickbuff"),J(a)},function(){c("join groups"),k()},function(){c("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){c("secure trade"),x(`${v}${a}`)},function(){c("recall items"),x(`${T}${a}`)},function(){c("rank"),x(`${q}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,z,N,e,{})}}function C(){const t=S('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default C
//# sourceMappingURL=profileInjectQuickButton-2e6ceefd.js.map
