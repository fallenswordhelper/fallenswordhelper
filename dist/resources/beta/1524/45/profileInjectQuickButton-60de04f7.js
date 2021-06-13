import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as f,q as m}from"./index-2be3364e.js"
import{I as d,c as b,R as h,aI as j,ay as g,ca as k,N as x,cb as y,ah as T,bG as q,s as v,S,D as $}from"./calfSystem-ae2e69af.js"
import{c as G}from"./currentGuildId-85358166.js"
import{a as w}from"./getIsOwnGuild-fe98194a.js"
import{a as I}from"./profile-edd49393.js"
import{o as B}from"./openQuickBuffByName-3c03dfb1.js"
import"./colouredDots-6efa5d36.js"
import"./batch-ff866587.js"
import"./onlineDot-f14e68a8.js"
import"./doStatTotal-7fb789f5.js"
import"./executeAll-4bb3b899.js"
import"./playerName-1b929217.js"
import"./asInt-0415d444.js"
import"./intValue-a6f9b475.js"
import"./valueText-fa9d45d4.js"
import"./interceptSubmit-9058efa4.js"
import"./formToUrl-35718c02.js"
import"./fshOpen-d0a5bbc1.js"
function J(t){let o,e,b,h,j,k,x,y,T,q,v,S,$,w,I,B,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),r(o,e),p||(f=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),A=J&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),m(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),r(o,e),p||(f=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),S=a(" "),$=p(),N&&N.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),N&&N.m(o,null),r(o,w),A&&A.m(o,null),I||(B=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],I=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),I=!1,f(B)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",e=w(),s=h("player_id")||j(),a=I()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),B(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,e,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-60de04f7.js.map
