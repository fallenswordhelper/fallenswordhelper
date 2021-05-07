import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as f,q as m}from"./index-60ac54a4.js"
import{I as d,T as b,aG as h,ax as j,c as g,ca as x,O as k,cb as y,bO as T,bD as q,s as v,U as $,D as G}from"./calfSystem-3cb2f93e.js"
import{c as S}from"./currentGuildId-a71d60fb.js"
import{a as w}from"./getIsOwnGuild-562b7cd8.js"
import{a as B}from"./profile-fc940ea0.js"
import{o as D}from"./openQuickBuffByName-71252a1d.js"
import"./colouredDots-f88b6d7e.js"
import"./batch-60e4331a.js"
import"./onlineDot-6491af90.js"
import"./doStatTotal-2c8b26e5.js"
import"./executeAll-f002e740.js"
import"./playerName-9a988c39.js"
import"./asInt-4d75089c.js"
import"./intValue-fefb28df.js"
import"./valueText-fbd879dc.js"
import"./interceptSubmit-4878d2e6.js"
import"./formToUrl-deef0cd3.js"
import"./fshOpen-72d27290.js"
function I(t){let o,e,b,h,g,x,k,y,T,q,v,$,G,w,B,D,I=t[1]&&d("showAdmin"),J=t[1]&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(f=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),O=I&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),m(o,"background-image","url('"+j+"guilds/"+S()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(f=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),g=s("button"),x=a(" "),k=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),$=a(" "),G=p(),J&&J.c(),w=p(),O&&O.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(g,"class","fshJoin svelte-1xo8gqh"),i(g,"type","button"),i(g,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,b),c(o,h),c(o,g),c(g,x),c(o,k),c(o,y),c(y,T),c(o,q),c(o,v),c(v,$),c(o,G),J&&J.m(o,null),c(o,w),O&&O.m(o,null),B||(D=[r(e,"click",t[3]),r(g,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&J.p(t,o),I&&O.p(t,o)},i:l,o:l,d(t){t&&u(o),J&&J.d(),O&&O.d(),B=!1,f(D)}}}function J(t){const o=g.enableMaxGroupSizeToJoin?` < ${g.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),D(a)},function(){i("join groups"),x()},function(){i("auctions"),k(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),k(`${T}${a}`)},function(){i("recall items"),k(`${q}${a}`)},function(){i("rank"),k(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class O extends t{constructor(t){super(),o(this,t,J,I,e,{})}}function A(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new O({anchor:t.nextElementSibling,target:t.parentNode})}export default A
//# sourceMappingURL=profileInjectQuickButton-06c3b7c9.js.map
