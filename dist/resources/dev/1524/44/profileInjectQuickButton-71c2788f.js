import{S as t,i as o,s,e,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f,r as p,q as m}from"./index-3af319ff.js"
import{I as d,S as b,aI as h,ay as j,c as g,c9 as k,N as x,ca as y,ah as T,bF as q,s as v,T as S,D as $}from"./calfSystem-f7cf24f6.js"
import{c as G}from"./currentGuildId-d5258e6c.js"
import{a as w}from"./getIsOwnGuild-28f77b14.js"
import{a as I}from"./profile-4ab708c4.js"
import{o as B}from"./openQuickBuffByName-85f930d9.js"
import"./colouredDots-35e61ff1.js"
import"./batch-a8223d61.js"
import"./onlineDot-0a71eb09.js"
import"./doStatTotal-df5d1ab9.js"
import"./executeAll-4e27c022.js"
import"./playerName-c3c6c732.js"
import"./asInt-1c5cca46.js"
import"./intValue-66f66ba9.js"
import"./valueText-ea28f9e0.js"
import"./interceptSubmit-2265e54d.js"
import"./formToUrl-2761f769.js"
import"./fshOpen-d480412d.js"
function J(t){let o,s,b,h,g,k,x,y,T,q,v,S,$,w,I,B,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,s,f,p
return{c(){o=e("button"),s=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,a){n(e,o,a),c(o,s),f||(p=r(o,"click",t[7]),f=!0)},p:l,d(t){t&&u(o),f=!1,p()}}}(t),A=J&&function(t){let o,s,f,p
return{c(){o=e("button"),s=a(" "),m(o,"background-image","url('"+j+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,a){n(e,o,a),c(o,s),f||(p=r(o,"click",t[8]),f=!0)},p:l,d(t){t&&u(o),f=!1,p()}}}(t)
return{c(){o=e("div"),s=e("button"),b=a(" "),h=f(),g=e("button"),k=a(" "),x=f(),y=e("button"),T=a(" "),q=f(),v=e("button"),S=a(" "),$=f(),N&&N.c(),w=f(),A&&A.c(),i(s,"class","fshQuickBuff svelte-1xo8gqh"),i(s,"type","button"),i(s,"data-tooltip","Buff "+t[2]),i(g,"class","fshJoin svelte-1xo8gqh"),i(g,"type","button"),i(g,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(e,a){n(e,o,a),c(o,s),c(s,b),c(o,h),c(o,g),c(g,k),c(o,x),c(o,y),c(y,T),c(o,q),c(o,v),c(v,S),c(o,$),N&&N.m(o,null),c(o,w),A&&A.m(o,null),I||(B=[r(s,"click",t[3]),r(g,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],I=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),I=!1,p(B)}}}function N(t){const o=g.enableMaxGroupSizeToJoin?` < ${g.maxGroupSizeToJoin} Members`:"",s=w(),e=b("player_id")||h(),a=I()
function i(t){S("profile","quick button",t)}return[o,s,a,function(t){t.target.blur(),i("quickbuff"),B(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${e}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,s,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-71c2788f.js.map
