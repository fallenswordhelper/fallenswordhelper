import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as f,q as m}from"./index-60ac54a4.js"
import{I as d,S as b,aD as h,au as j,c as g,c7 as k,O as x,c8 as y,bK as T,bz as q,s as v,T as S,D as $}from"./calfSystem-9942149b.js"
import{c as G}from"./currentGuildId-71878d37.js"
import{a as w}from"./getIsOwnGuild-21b09339.js"
import{a as B}from"./profile-e2573352.js"
import{o as D}from"./openQuickBuffByName-4f92c0f7.js"
import"./colouredDots-dd8928ce.js"
import"./batch-0f6a856b.js"
import"./onlineDot-62998a2d.js"
import"./doStatTotal-abb93346.js"
import"./executeAll-f002e740.js"
import"./playerName-b83afe17.js"
import"./asInt-cfaa0140.js"
import"./intValue-fefb28df.js"
import"./valueText-5ef907af.js"
import"./interceptSubmit-13aed0cb.js"
import"./formToUrl-26ed3a6b.js"
import"./fshOpen-72d27290.js"
function I(t){let o,e,b,h,g,k,x,y,T,q,v,S,$,w,B,D,I=t[1]&&d("showAdmin"),J=t[1]&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),r(o,e),p||(f=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),z=I&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),m(o,"background-image","url('"+j+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),r(o,e),p||(f=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),g=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),S=a(" "),$=p(),J&&J.c(),w=p(),z&&z.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(g,"class","fshJoin svelte-1xo8gqh"),i(g,"type","button"),i(g,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),r(o,e),r(e,b),r(o,h),r(o,g),r(g,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),J&&J.m(o,null),r(o,w),z&&z.m(o,null),B||(D=[c(e,"click",t[3]),c(g,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&J.p(t,o),I&&z.p(t,o)},i:l,o:l,d(t){t&&u(o),J&&J.d(),z&&z.d(),B=!1,f(D)}}}function J(t){const o=g.enableMaxGroupSizeToJoin?` < ${g.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),D(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class z extends t{constructor(t){super(),o(this,t,J,I,e,{})}}function A(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new z({anchor:t.nextElementSibling,target:t.parentNode})}export default A
//# sourceMappingURL=profileInjectQuickButton-210a8f6b.js.map
