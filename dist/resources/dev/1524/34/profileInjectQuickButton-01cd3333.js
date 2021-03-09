import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as m,q as f}from"./index-7fbf76d3.js"
import{H as d,S as b,aw as h,al as g,c as j,c9 as k,N as x,ca as y,bM as T,bA as q,s as v,W as S,C as $}from"./calfSystem-c07e3259.js"
import{c as G}from"./currentGuildId-0e53e6a7.js"
import{a as w}from"./getIsOwnGuild-66002b4d.js"
import{a as A}from"./profile-8add95ac.js"
import{o as B}from"./openQuickBuffByName-e650cf6c.js"
import"./colouredDots-70ba9990.js"
import"./batch-13a297b0.js"
import"./onlineDot-d60087d6.js"
import"./doStatTotal-f7d22e98.js"
import"./executeAll-7837be0f.js"
import"./playerName-54b31a1f.js"
import"./intValue-d2a6f461.js"
import"./valueText-5b814802.js"
import"./interceptSubmit-a2751cf6.js"
import"./formToUrl-f2549b88.js"
import"./fshOpen-49538a62.js"
function J(t){let o,e,b,h,j,k,x,y,T,q,v,S,$,w,A,B,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),r(o,e),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),C=J&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),r(o,e),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),S=a(" "),$=p(),N&&N.c(),w=p(),C&&C.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),N&&N.m(o,null),r(o,w),C&&C.m(o,null),A||(B=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],A=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&C.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),C&&C.d(),A=!1,m(B)}}}function N(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=A()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),B(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class C extends t{constructor(t){super(),o(this,t,N,J,e,{})}}function M(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new C({anchor:t.nextElementSibling,target:t.parentNode})}export default M
//# sourceMappingURL=profileInjectQuickButton-01cd3333.js.map
