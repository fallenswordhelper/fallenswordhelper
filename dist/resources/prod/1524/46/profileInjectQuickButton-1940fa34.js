import{S as t,i as o,s as a,e as s,t as e,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as m,q as f}from"./index-79201ad3.js"
import{I as d,c as b,R as h,aG as j,aw as g,c8 as k,N as x,c9 as y,ah as T,bD as q,s as v,S,D as $}from"./calfSystem-7991d843.js"
import{c as G}from"./currentGuildId-abfe3237.js"
import{a as w}from"./getIsOwnGuild-a68999f6.js"
import{a as B}from"./profile-cdab2947.js"
import{o as D}from"./openQuickBuffByName-76ab32da.js"
import"./colouredDots-8db91b1b.js"
import"./batch-44f9cf79.js"
import"./onlineDot-de1b774d.js"
import"./doStatTotal-2b4372d2.js"
import"./executeAll-9a33204f.js"
import"./playerName-541d216c.js"
import"./asInt-2a37aa61.js"
import"./intValue-19726e4b.js"
import"./valueText-9648dc4e.js"
import"./interceptSubmit-b3275ec5.js"
import"./formToUrl-33c970fe.js"
import"./fshOpen-4e911fa6.js"
function I(t){let o,a,b,h,j,k,x,y,T,q,v,S,$,w,B,D,I=t[1]&&d("showAdmin"),J=t[1]&&function(t){let o,a,p,m
return{c(){o=s("button"),a=e(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,e){n(s,o,e),r(o,a),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),N=I&&function(t){let o,a,p,m
return{c(){o=s("button"),a=e(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,e){n(s,o,e),r(o,a),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),a=s("button"),b=e(" "),h=p(),j=s("button"),k=e(" "),x=p(),y=s("button"),T=e(" "),q=p(),v=s("button"),S=e(" "),$=p(),J&&J.c(),w=p(),N&&N.c(),i(a,"class","fshQuickBuff svelte-1xo8gqh"),i(a,"type","button"),i(a,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,e){n(s,o,e),r(o,a),r(a,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),J&&J.m(o,null),r(o,w),N&&N.m(o,null),B||(D=[c(a,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&J.p(t,o),I&&N.p(t,o)},i:l,o:l,d(t){t&&u(o),J&&J.d(),N&&N.d(),B=!1,m(D)}}}function J(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",a=w(),s=h("player_id")||j(),e=B()
function i(t){S("profile","quick button",t)}return[o,a,e,function(t){t.target.blur(),i("quickbuff"),D(e)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${e}`)},function(){i("recall items"),x(`${q}${e}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class N extends t{constructor(t){super(),o(this,t,J,I,a,{})}}function A(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new N({anchor:t.nextElementSibling,target:t.parentNode})}export default A
//# sourceMappingURL=profileInjectQuickButton-1940fa34.js.map
