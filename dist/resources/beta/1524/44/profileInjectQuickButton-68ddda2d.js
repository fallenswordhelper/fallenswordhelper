import{S as t,i as o,s as e,e as a,t as s,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as f,q as m}from"./index-3af319ff.js"
import{I as d,R as b,aH as g,ax as h,c as j,c8 as x,N as k,c9 as y,ag as T,bE as q,s as v,S,D as $}from"./calfSystem-a8d582b6.js"
import{c as G}from"./currentGuildId-6d2e1d9d.js"
import{a as w}from"./getIsOwnGuild-16920611.js"
import{a as B}from"./profile-6ffdfc9f.js"
import{o as I}from"./openQuickBuffByName-05198165.js"
import"./colouredDots-9f3a15ef.js"
import"./batch-b787972d.js"
import"./onlineDot-76ee782e.js"
import"./doStatTotal-11c05b30.js"
import"./executeAll-4e27c022.js"
import"./playerName-9ba8ea6b.js"
import"./asInt-ed8ceed1.js"
import"./intValue-66f66ba9.js"
import"./valueText-27359b90.js"
import"./interceptSubmit-6afbec2a.js"
import"./formToUrl-4aa25bca.js"
import"./fshOpen-d480412d.js"
function J(t){let o,e,b,g,j,x,k,y,T,q,v,S,$,w,B,I,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,f
return{c(){o=a("button"),e=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(a,s){n(a,o,s),r(o,e),p||(f=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),A=J&&function(t){let o,e,p,f
return{c(){o=a("button"),e=s(" "),m(o,"background-image","url('"+h+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(a,s){n(a,o,s),r(o,e),p||(f=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=a("div"),e=a("button"),b=s(" "),g=p(),j=a("button"),x=s(" "),k=p(),y=a("button"),T=s(" "),q=p(),v=a("button"),S=s(" "),$=p(),N&&N.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(a,s){n(a,o,s),r(o,e),r(e,b),r(o,g),r(o,j),r(j,x),r(o,k),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),N&&N.m(o,null),r(o,w),A&&A.m(o,null),B||(I=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),B=!1,f(I)}}}function N(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),a=b("player_id")||g(),s=B()
function i(t){S("profile","quick button",t)}return[o,e,s,function(t){t.target.blur(),i("quickbuff"),I(s)},function(){i("join groups"),x()},function(){i("auctions"),k(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),k(`${T}${s}`)},function(){i("recall items"),k(`${q}${s}`)},function(){i("rank"),k(`${v}members&subcmd2=changerank&member_id=${a}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,e,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-68ddda2d.js.map
