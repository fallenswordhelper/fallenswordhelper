import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as f,q as m}from"./index-3af319ff.js"
import{I as d,R as b,aF as g,av as h,c as j,c6 as k,N as x,c7 as y,ag as v,bB as T,s as q,S,D as $}from"./calfSystem-6ad077b7.js"
import{c as G}from"./currentGuildId-e0011880.js"
import{a as w}from"./getIsOwnGuild-434e3a23.js"
import{a as B}from"./profile-0c72bef6.js"
import{o as I}from"./openQuickBuffByName-f16a58eb.js"
import"./colouredDots-bf23923d.js"
import"./batch-9878d42e.js"
import"./onlineDot-465a2c69.js"
import"./doStatTotal-0d5f4ea7.js"
import"./executeAll-4e27c022.js"
import"./playerName-7e6569ce.js"
import"./asInt-4b3cfe31.js"
import"./intValue-66f66ba9.js"
import"./valueText-febd3894.js"
import"./interceptSubmit-efbdb1e0.js"
import"./formToUrl-a21852b2.js"
import"./fshOpen-d480412d.js"
function J(t){let o,e,b,g,j,k,x,y,v,T,q,S,$,w,B,I,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),r(o,e),p||(f=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),A=J&&function(t){let o,e,p,f
return{c(){o=s("button"),e=a(" "),m(o,"background-image","url('"+h+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),r(o,e),p||(f=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),g=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),v=a(" "),T=p(),q=s("button"),S=a(" "),$=p(),N&&N.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(q,"class","fshTempleTwo svelte-1xo8gqh"),i(q,"type","button"),i(q,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),r(o,e),r(e,b),r(o,g),r(o,j),r(j,k),r(o,x),r(o,y),r(y,v),r(o,T),r(o,q),r(q,S),r(o,$),N&&N.m(o,null),r(o,w),A&&A.m(o,null),B||(I=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(q,"click",t[6])],B=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),B=!1,f(I)}}}function N(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||g(),a=B()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),I(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${v}${a}`)},function(){i("recall items"),x(`${T}${a}`)},function(){i("rank"),x(`${q}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,e,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-6d010ec7.js.map
