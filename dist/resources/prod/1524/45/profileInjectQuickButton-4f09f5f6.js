import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as m,q as f}from"./index-2be3364e.js"
import{I as d,c as b,R as h,aG as j,aw as g,c8 as k,N as x,c9 as y,ah as T,bD as q,s as v,S,D as $}from"./calfSystem-e1e858cd.js"
import{c as G}from"./currentGuildId-6f6caa9a.js"
import{a as w}from"./getIsOwnGuild-d66648b0.js"
import{a as B}from"./profile-c182b097.js"
import{o as D}from"./openQuickBuffByName-b48f21dd.js"
import"./colouredDots-3e726085.js"
import"./batch-55db0df2.js"
import"./onlineDot-1080eb24.js"
import"./doStatTotal-dbe867ed.js"
import"./executeAll-4bb3b899.js"
import"./playerName-26e59290.js"
import"./asInt-23fa966f.js"
import"./intValue-a6f9b475.js"
import"./valueText-a6681ac9.js"
import"./interceptSubmit-fde65f15.js"
import"./formToUrl-d7735a71.js"
import"./fshOpen-d0a5bbc1.js"
function I(t){let o,e,b,h,j,k,x,y,T,q,v,S,$,w,B,D,I=t[1]&&d("showAdmin"),J=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),r(o,e),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),N=I&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),r(o,e),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),S=a(" "),$=p(),J&&J.c(),w=p(),N&&N.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),J&&J.m(o,null),r(o,w),N&&N.m(o,null),B||(D=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&J.p(t,o),I&&N.p(t,o)},i:l,o:l,d(t){t&&u(o),J&&J.d(),N&&N.d(),B=!1,m(D)}}}function J(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",e=w(),s=h("player_id")||j(),a=B()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),D(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class N extends t{constructor(t){super(),o(this,t,J,I,e,{})}}function A(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new N({anchor:t.nextElementSibling,target:t.parentNode})}export default A
//# sourceMappingURL=profileInjectQuickButton-4f09f5f6.js.map
