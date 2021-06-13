import{S as t,i as o,s,e as a,t as e,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as f,q as m}from"./index-79201ad3.js"
import{I as d,c as b,R as h,aI as j,ay as g,ca as k,N as x,cb as y,ah as T,bG as q,s as v,S,D as $}from"./calfSystem-cbf77dd7.js"
import{c as G}from"./currentGuildId-96726c8f.js"
import{a as w}from"./getIsOwnGuild-9059ab98.js"
import{a as I}from"./profile-df60cc07.js"
import{o as B}from"./openQuickBuffByName-41d9e99c.js"
import"./colouredDots-9edfaf4c.js"
import"./batch-996e914c.js"
import"./onlineDot-25d2c122.js"
import"./doStatTotal-94b8b51b.js"
import"./executeAll-9a33204f.js"
import"./playerName-448aa7ca.js"
import"./asInt-f1541708.js"
import"./intValue-19726e4b.js"
import"./valueText-068fe53f.js"
import"./interceptSubmit-b6d9986f.js"
import"./formToUrl-5189bcfb.js"
import"./fshOpen-4e911fa6.js"
function J(t){let o,s,b,h,j,k,x,y,T,q,v,S,$,w,I,B,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,s,p,f
return{c(){o=a("button"),s=e(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(a,e){n(a,o,e),c(o,s),p||(f=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),A=J&&function(t){let o,s,p,f
return{c(){o=a("button"),s=e(" "),m(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(a,e){n(a,o,e),c(o,s),p||(f=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=a("div"),s=a("button"),b=e(" "),h=p(),j=a("button"),k=e(" "),x=p(),y=a("button"),T=e(" "),q=p(),v=a("button"),S=e(" "),$=p(),N&&N.c(),w=p(),A&&A.c(),i(s,"class","fshQuickBuff svelte-1xo8gqh"),i(s,"type","button"),i(s,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(a,e){n(a,o,e),c(o,s),c(s,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,q),c(o,v),c(v,S),c(o,$),N&&N.m(o,null),c(o,w),A&&A.m(o,null),I||(B=[r(s,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],I=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),I=!1,f(B)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",s=w(),a=h("player_id")||j(),e=I()
function i(t){S("profile","quick button",t)}return[o,s,e,function(t){t.target.blur(),i("quickbuff"),B(e)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${T}${e}`)},function(){i("recall items"),x(`${q}${e}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${a}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,s,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-b1c98760.js.map
