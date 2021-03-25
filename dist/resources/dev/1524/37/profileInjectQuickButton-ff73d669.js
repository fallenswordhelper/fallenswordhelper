import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f,r as p,q as m}from"./index-8dcf17bc.js"
import{I as d,T as b,ay as h,an as g,c as j,ca as k,O as x,cb as y,bO as T,bD as q,s as v,X as $,D as S}from"./calfSystem-5d0c721b.js"
import{c as G}from"./currentGuildId-01b0f97a.js"
import{a as w}from"./getIsOwnGuild-2800222e.js"
import{a as B}from"./profile-876cc238.js"
import{o as D}from"./openQuickBuffByName-77b1c0c9.js"
import"./colouredDots-cfaa58e3.js"
import"./batch-388cd4bf.js"
import"./onlineDot-4f47efa5.js"
import"./doStatTotal-ef38bd0b.js"
import"./executeAll-30ce254f.js"
import"./playerName-6d380f14.js"
import"./intValue-0e97c9b9.js"
import"./valueText-5c4b34ff.js"
import"./interceptSubmit-23ea3d0b.js"
import"./formToUrl-3d2d4f7c.js"
import"./fshOpen-3161ad53.js"
function J(t){let o,e,b,h,j,k,x,y,T,q,v,$,S,w,B,D,J=t[1]&&d("showAdmin"),O=t[1]&&function(t){let o,e,f,p
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),f||(p=r(o,"click",t[7]),f=!0)},p:l,d(t){t&&u(o),f=!1,p()}}}(t),A=J&&function(t){let o,e,f,p
return{c(){o=s("button"),e=a(" "),m(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),f||(p=r(o,"click",t[8]),f=!0)},p:l,d(t){t&&u(o),f=!1,p()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=f(),j=s("button"),k=a(" "),x=f(),y=s("button"),T=a(" "),q=f(),v=s("button"),$=a(" "),S=f(),O&&O.c(),w=f(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,q),c(o,v),c(v,$),c(o,S),O&&O.m(o,null),c(o,w),A&&A.m(o,null),B||(D=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&O.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),O&&O.d(),A&&A.d(),B=!1,p(D)}}}function O(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),D(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,O,J,e,{})}}function I(){const t=S('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-ff73d669.js.map
