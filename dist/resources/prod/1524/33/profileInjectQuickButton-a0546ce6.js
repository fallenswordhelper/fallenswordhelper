import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as f,q as m}from"./index-bebd168e.js"
import{H as d,R as b,at as h,ai as g,c as j,c6 as k,N as x,c7 as y,bI as T,bw as q,s as v,V as $,C as S}from"./calfSystem-0708a9bb.js"
import{c as G}from"./currentGuildId-c383c2b8.js"
import{a as w}from"./getIsOwnGuild-0ca408d5.js"
import{a as B}from"./profile-f0a476c3.js"
import{o as J}from"./openQuickBuffByName-6f24a6fe.js"
import"./colouredDots-e0a02d3a.js"
import"./batch-479f98d0.js"
import"./onlineDot-84509222.js"
import"./doStatTotal-16d23c05.js"
import"./executeAll-f0c9235d.js"
import"./playerName-e75bbf9f.js"
import"./intValue-55d66e09.js"
import"./valueText-365bf09c.js"
import"./interceptSubmit-b52f1e00.js"
import"./formToUrl-25c06939.js"
import"./fshOpen-946a9f05.js"
function N(t){let o,e,b,h,j,k,x,y,T,q,v,$,S,w,B,J,N=t[1]&&d("showAdmin"),A=t[1]&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(f=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),C=N&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),m(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(f=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),$=a(" "),S=p(),A&&A.c(),w=p(),C&&C.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,q),c(o,v),c(v,$),c(o,S),A&&A.m(o,null),c(o,w),C&&C.m(o,null),B||(J=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&A.p(t,o),N&&C.p(t,o)},i:l,o:l,d(t){t&&u(o),A&&A.d(),C&&C.d(),B=!1,f(J)}}}function A(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),J(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class C extends t{constructor(t){super(),o(this,t,A,N,e,{})}}function I(){const t=S('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new C({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-a0546ce6.js.map
