import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f,r as p,q as m}from"./index-7b21bc0b.js"
import{I as b,S as d,aC as h,at as g,c as j,c7 as k,O as x,c8 as y,bK as T,bz as q,s as v,W as S,D as $}from"./calfSystem-fe534823.js"
import{c as G}from"./currentGuildId-cf47b942.js"
import{a as w}from"./getIsOwnGuild-133e4158.js"
import{a as B}from"./profile-65901ce7.js"
import{o as J}from"./openQuickBuffByName-efdefe00.js"
import"./colouredDots-73024fcf.js"
import"./batch-49f23571.js"
import"./onlineDot-f8d6c5fc.js"
import"./doStatTotal-444189bc.js"
import"./executeAll-ed9a2868.js"
import"./playerName-faaca46a.js"
import"./intValue-f6303c59.js"
import"./valueText-322f7b12.js"
import"./interceptSubmit-bb91bdd6.js"
import"./formToUrl-e34601f4.js"
import"./fshOpen-bc09bf81.js"
function z(t){let o,e,d,h,j,k,x,y,T,q,v,S,$,w,B,J,z=t[1]&&b("showAdmin"),A=t[1]&&function(t){let o,e,f,p
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),f||(p=r(o,"click",t[7]),f=!0)},p:l,d(t){t&&u(o),f=!1,p()}}}(t),C=z&&function(t){let o,e,f,p
return{c(){o=s("button"),e=a(" "),m(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),f||(p=r(o,"click",t[8]),f=!0)},p:l,d(t){t&&u(o),f=!1,p()}}}(t)
return{c(){o=s("div"),e=s("button"),d=a(" "),h=f(),j=s("button"),k=a(" "),x=f(),y=s("button"),T=a(" "),q=f(),v=s("button"),S=a(" "),$=f(),A&&A.c(),w=f(),C&&C.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,d),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,q),c(o,v),c(v,S),c(o,$),A&&A.m(o,null),c(o,w),C&&C.m(o,null),B||(J=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&A.p(t,o),z&&C.p(t,o)},i:l,o:l,d(t){t&&u(o),A&&A.d(),C&&C.d(),B=!1,p(J)}}}function A(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=d("player_id")||h(),a=B()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),J(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class C extends t{constructor(t){super(),o(this,t,A,z,e,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new C({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-3f97052f.js.map
