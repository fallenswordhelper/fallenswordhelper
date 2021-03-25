import{S as t,i as o,s as a,e,t as s,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-62c3c7c6.js"
import{I as d,S as b,av as h,ak as g,c as j,c7 as k,O as x,c8 as y,bK as v,bz as T,s as q,W as S,D as $}from"./calfSystem-e7bde0c3.js"
import{c as G}from"./currentGuildId-24e90d79.js"
import{a as w}from"./getIsOwnGuild-e6dc0717.js"
import{a as B}from"./profile-0394673a.js"
import{o as J}from"./openQuickBuffByName-e9ad8a96.js"
import"./colouredDots-766af245.js"
import"./batch-cbe16ea5.js"
import"./onlineDot-7bb4a617.js"
import"./doStatTotal-bda8a776.js"
import"./executeAll-a7ad7ece.js"
import"./playerName-523ac3f3.js"
import"./intValue-ca51a3c0.js"
import"./valueText-550b31ac.js"
import"./interceptSubmit-41d1852c.js"
import"./formToUrl-aa476074.js"
import"./fshOpen-6a6a1b65.js"
function z(t){let o,a,b,h,j,k,x,y,v,T,q,S,$,w,B,J,z=t[1]&&d("showAdmin"),A=t[1]&&function(t){let o,a,p,m
return{c(){o=e("button"),a=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,s){n(e,o,s),c(o,a),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),D=z&&function(t){let o,a,p,m
return{c(){o=e("button"),a=s(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,s){n(e,o,s),c(o,a),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=e("div"),a=e("button"),b=s(" "),h=p(),j=e("button"),k=s(" "),x=p(),y=e("button"),v=s(" "),T=p(),q=e("button"),S=s(" "),$=p(),A&&A.c(),w=p(),D&&D.c(),i(a,"class","fshQuickBuff svelte-1xo8gqh"),i(a,"type","button"),i(a,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(q,"class","fshTempleTwo svelte-1xo8gqh"),i(q,"type","button"),i(q,"data-tooltip","Create Secure Trade to "+t[2])},m(e,s){n(e,o,s),c(o,a),c(a,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,v),c(o,T),c(o,q),c(q,S),c(o,$),A&&A.m(o,null),c(o,w),D&&D.m(o,null),B||(J=[r(a,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(q,"click",t[6])],B=!0)},p(t,[o]){t[1]&&A.p(t,o),z&&D.p(t,o)},i:l,o:l,d(t){t&&u(o),A&&A.d(),D&&D.d(),B=!1,m(J)}}}function A(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",a=w(),e=b("player_id")||h(),s=B()
function i(t){S("profile","quick button",t)}return[o,a,s,function(t){t.target.blur(),i("quickbuff"),J(s)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),x(`${v}${s}`)},function(){i("recall items"),x(`${T}${s}`)},function(){i("rank"),x(`${q}members&subcmd2=changerank&member_id=${e}`)}]}class D extends t{constructor(t){super(),o(this,t,A,z,a,{})}}function I(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new D({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-3cebcfd0.js.map
