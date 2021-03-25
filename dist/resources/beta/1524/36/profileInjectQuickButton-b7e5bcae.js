import{S as t,i as o,s as a,e,t as s,g as i,a as c,b as n,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-62c3c7c6.js"
import{I as d,S as b,ax as h,am as g,c as j,c9 as x,O as k,ca as y,bN as T,bC as q,s as v,W as S,D as $}from"./calfSystem-4a40365f.js"
import{c as G}from"./currentGuildId-014a0323.js"
import{a as w}from"./getIsOwnGuild-59cc54ad.js"
import{a as B}from"./profile-3bbd482d.js"
import{o as J}from"./openQuickBuffByName-c23c62ee.js"
import"./colouredDots-b9091678.js"
import"./batch-7e6fa7bc.js"
import"./onlineDot-75e133f9.js"
import"./doStatTotal-9b76c02c.js"
import"./executeAll-a7ad7ece.js"
import"./playerName-9305cfda.js"
import"./intValue-ca51a3c0.js"
import"./valueText-1577f4a8.js"
import"./interceptSubmit-c8d517a3.js"
import"./formToUrl-8ffaa75b.js"
import"./fshOpen-6a6a1b65.js"
function N(t){let o,a,b,h,j,x,k,y,T,q,v,S,$,w,B,J,N=t[1]&&d("showAdmin"),A=t[1]&&function(t){let o,a,p,m
return{c(){o=e("button"),a=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,s){c(e,o,s),n(o,a),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),C=N&&function(t){let o,a,p,m
return{c(){o=e("button"),a=s(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,s){c(e,o,s),n(o,a),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=e("div"),a=e("button"),b=s(" "),h=p(),j=e("button"),x=s(" "),k=p(),y=e("button"),T=s(" "),q=p(),v=e("button"),S=s(" "),$=p(),A&&A.c(),w=p(),C&&C.c(),i(a,"class","fshQuickBuff svelte-1xo8gqh"),i(a,"type","button"),i(a,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(e,s){c(e,o,s),n(o,a),n(a,b),n(o,h),n(o,j),n(j,x),n(o,k),n(o,y),n(y,T),n(o,q),n(o,v),n(v,S),n(o,$),A&&A.m(o,null),n(o,w),C&&C.m(o,null),B||(J=[r(a,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&A.p(t,o),N&&C.p(t,o)},i:l,o:l,d(t){t&&u(o),A&&A.d(),C&&C.d(),B=!1,m(J)}}}function A(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",a=w(),e=b("player_id")||h(),s=B()
function i(t){S("profile","quick button",t)}return[o,a,s,function(t){t.target.blur(),i("quickbuff"),J(s)},function(){i("join groups"),x()},function(){i("auctions"),k(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),k(`${T}${s}`)},function(){i("recall items"),k(`${q}${s}`)},function(){i("rank"),k(`${v}members&subcmd2=changerank&member_id=${e}`)}]}class C extends t{constructor(t){super(),o(this,t,A,N,a,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new C({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-b7e5bcae.js.map
