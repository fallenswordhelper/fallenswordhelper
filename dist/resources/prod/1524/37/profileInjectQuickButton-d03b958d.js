import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-8dcf17bc.js"
import{I as d,S as b,av as h,ak as g,c as j,c7 as k,O as x,c8 as y,bK as v,bz as T,s as q,W as S,D as $}from"./calfSystem-60c20ae9.js"
import{c as G}from"./currentGuildId-a7e07ffc.js"
import{a as w}from"./getIsOwnGuild-b1339d03.js"
import{a as B}from"./profile-4d79832b.js"
import{o as J}from"./openQuickBuffByName-ed10d0a0.js"
import"./colouredDots-9df0dee5.js"
import"./batch-c11b874c.js"
import"./onlineDot-fc083d2b.js"
import"./doStatTotal-0ecb9853.js"
import"./executeAll-30ce254f.js"
import"./playerName-c88ee86b.js"
import"./intValue-0e97c9b9.js"
import"./valueText-5652dde0.js"
import"./interceptSubmit-0497cf12.js"
import"./formToUrl-dae90b24.js"
import"./fshOpen-3161ad53.js"
function z(t){let o,e,b,h,j,k,x,y,v,T,q,S,$,w,B,J,z=t[1]&&d("showAdmin"),A=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),D=z&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),v=a(" "),T=p(),q=s("button"),S=a(" "),$=p(),A&&A.c(),w=p(),D&&D.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(q,"class","fshTempleTwo svelte-1xo8gqh"),i(q,"type","button"),i(q,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,v),c(o,T),c(o,q),c(q,S),c(o,$),A&&A.m(o,null),c(o,w),D&&D.m(o,null),B||(J=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(q,"click",t[6])],B=!0)},p(t,[o]){t[1]&&A.p(t,o),z&&D.p(t,o)},i:l,o:l,d(t){t&&u(o),A&&A.d(),D&&D.d(),B=!1,m(J)}}}function A(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),J(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${v}${a}`)},function(){i("recall items"),x(`${T}${a}`)},function(){i("rank"),x(`${q}members&subcmd2=changerank&member_id=${s}`)}]}class D extends t{constructor(t){super(),o(this,t,A,z,e,{})}}function I(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new D({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-d03b958d.js.map
