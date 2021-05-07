import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as f,q as m}from"./index-60ac54a4.js"
import{I as d,S as b,aF as h,aw as j,c as g,c9 as k,O as x,ca as y,bN as T,bC as q,s as v,T as S,D as $}from"./calfSystem-1d588248.js"
import{c as G}from"./currentGuildId-9fdd6aa9.js"
import{a as w}from"./getIsOwnGuild-7c692e69.js"
import{a as B}from"./profile-11646294.js"
import{o as I}from"./openQuickBuffByName-f88cfb0a.js"
import"./colouredDots-6c141832.js"
import"./batch-40833b07.js"
import"./onlineDot-9745fb79.js"
import"./doStatTotal-60aece13.js"
import"./executeAll-f002e740.js"
import"./playerName-95f1f2a8.js"
import"./asInt-86489e68.js"
import"./intValue-fefb28df.js"
import"./valueText-f03f9e27.js"
import"./interceptSubmit-60e593a5.js"
import"./formToUrl-0d0c488d.js"
import"./fshOpen-72d27290.js"
function J(t){let o,e,b,h,g,k,x,y,T,q,v,S,$,w,B,I,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),r(o,e),p||(f=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),A=J&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),m(o,"background-image","url('"+j+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),r(o,e),p||(f=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),g=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),S=a(" "),$=p(),N&&N.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(g,"class","fshJoin svelte-1xo8gqh"),i(g,"type","button"),i(g,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),r(o,e),r(e,b),r(o,h),r(o,g),r(g,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),N&&N.m(o,null),r(o,w),A&&A.m(o,null),B||(I=[c(e,"click",t[3]),c(g,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),B=!1,f(I)}}}function N(t){const o=g.enableMaxGroupSizeToJoin?` < ${g.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),I(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,e,{})}}function C(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default C
//# sourceMappingURL=profileInjectQuickButton-ff7fa546.js.map
