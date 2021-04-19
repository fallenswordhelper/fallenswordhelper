import{S as t,i as o,s as e,e as s,t as a,g as i,a as c,b as n,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-7b21bc0b.js"
import{I as b,T as d,aF as h,aw as g,c as j,ca as k,O as x,cb as y,bO as T,bD as q,s as v,X as $,D as S}from"./calfSystem-b31aba65.js"
import{c as G}from"./currentGuildId-c379e204.js"
import{a as w}from"./getIsOwnGuild-56564d2a.js"
import{a as B}from"./profile-799c3625.js"
import{o as D}from"./openQuickBuffByName-0d9ce298.js"
import"./colouredDots-a508d2d8.js"
import"./batch-4b6ac500.js"
import"./onlineDot-fc24824d.js"
import"./doStatTotal-b22ced68.js"
import"./executeAll-ed9a2868.js"
import"./playerName-68c14b2a.js"
import"./intValue-f6303c59.js"
import"./valueText-bc9c083f.js"
import"./interceptSubmit-b313ecea.js"
import"./formToUrl-b9ac6c05.js"
import"./fshOpen-bc09bf81.js"
function J(t){let o,e,d,h,j,k,x,y,T,q,v,$,S,w,B,D,J=t[1]&&b("showAdmin"),O=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){c(s,o,a),n(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){c(s,o,a),n(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),d=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),$=a(" "),S=p(),O&&O.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){c(s,o,a),n(o,e),n(e,d),n(o,h),n(o,j),n(j,k),n(o,x),n(o,y),n(y,T),n(o,q),n(o,v),n(v,$),n(o,S),O&&O.m(o,null),n(o,w),A&&A.m(o,null),B||(D=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&O.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),O&&O.d(),A&&A.d(),B=!1,m(D)}}}function O(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=d("player_id")||h(),a=B()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),D(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,O,J,e,{})}}function I(){const t=S('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-5fb9f4f9.js.map
