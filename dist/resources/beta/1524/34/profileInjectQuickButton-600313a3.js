import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as f,q as m}from"./index-7fbf76d3.js"
import{H as d,R as b,av as h,ak as g,c as j,c8 as k,N as x,c9 as y,bL as v,bz as T,s as q,V as $,C as S}from"./calfSystem-dfa26790.js"
import{c as G}from"./currentGuildId-8fb4e32d.js"
import{a as w}from"./getIsOwnGuild-3cc694ae.js"
import{a as B}from"./profile-b3fcd6a6.js"
import{o as J}from"./openQuickBuffByName-b13feb07.js"
import"./colouredDots-4ad39f6b.js"
import"./batch-1e22305c.js"
import"./onlineDot-d83b55b4.js"
import"./doStatTotal-1aaf7cc1.js"
import"./executeAll-7837be0f.js"
import"./playerName-b7be03d7.js"
import"./intValue-d2a6f461.js"
import"./valueText-6c17ddd6.js"
import"./interceptSubmit-c18e4478.js"
import"./formToUrl-4975483d.js"
import"./fshOpen-49538a62.js"
function N(t){let o,e,b,h,j,k,x,y,v,T,q,$,S,w,B,J,N=t[1]&&d("showAdmin"),z=t[1]&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(f=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),A=N&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),m(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(f=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),v=a(" "),T=p(),q=s("button"),$=a(" "),S=p(),z&&z.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(q,"class","fshTempleTwo svelte-1xo8gqh"),i(q,"type","button"),i(q,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,v),c(o,T),c(o,q),c(q,$),c(o,S),z&&z.m(o,null),c(o,w),A&&A.m(o,null),B||(J=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(q,"click",t[6])],B=!0)},p(t,[o]){t[1]&&z.p(t,o),N&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),z&&z.d(),A&&A.d(),B=!1,f(J)}}}function z(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),J(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${v}${a}`)},function(){i("recall items"),x(`${T}${a}`)},function(){i("rank"),x(`${q}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,z,N,e,{})}}function C(){const t=S('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default C
//# sourceMappingURL=profileInjectQuickButton-600313a3.js.map
