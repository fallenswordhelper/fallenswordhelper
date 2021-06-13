import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as m,q as f}from"./index-2be3364e.js"
import{I as d,c as b,S as h,aJ as j,az as g,cb as k,N as x,cc as y,ai as T,bH as q,s as v,T as S,D as $}from"./calfSystem-6a3c85e0.js"
import{c as G}from"./currentGuildId-3f5ba5ad.js"
import{a as w}from"./getIsOwnGuild-156821e7.js"
import{a as J}from"./profile-804e9514.js"
import{o as B}from"./openQuickBuffByName-2da3e6db.js"
import"./colouredDots-f934391f.js"
import"./batch-e8572a8f.js"
import"./onlineDot-24724c92.js"
import"./doStatTotal-dc259649.js"
import"./executeAll-4bb3b899.js"
import"./playerName-338c35a7.js"
import"./asInt-8d560463.js"
import"./intValue-a6f9b475.js"
import"./valueText-73e7237a.js"
import"./interceptSubmit-72e26708.js"
import"./formToUrl-8a7bb14c.js"
import"./fshOpen-d0a5bbc1.js"
function I(t){let o,e,b,h,j,k,x,y,T,q,v,S,$,w,J,B,I=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),r(o,e),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),z=I&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),r(o,e),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),S=a(" "),$=p(),N&&N.c(),w=p(),z&&z.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),N&&N.m(o,null),r(o,w),z&&z.m(o,null),J||(B=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],J=!0)},p(t,[o]){t[1]&&N.p(t,o),I&&z.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),z&&z.d(),J=!1,m(B)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",e=w(),s=h("player_id")||j(),a=J()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),B(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class z extends t{constructor(t){super(),o(this,t,N,I,e,{})}}function A(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new z({anchor:t.nextElementSibling,target:t.parentNode})}export default A
//# sourceMappingURL=profileInjectQuickButton-f0deccb2.js.map
