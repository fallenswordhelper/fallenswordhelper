import{S as t,i as o,s as a,e,t as s,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-62c3c7c6.js"
import{I as d,T as b,ay as h,an as g,c as j,ca as k,O as x,cb as y,bO as T,bD as q,s as v,X as $,D as S}from"./calfSystem-eeb1d862.js"
import{c as G}from"./currentGuildId-5370ff7a.js"
import{a as w}from"./getIsOwnGuild-893f2b63.js"
import{a as B}from"./profile-c9d026a3.js"
import{o as D}from"./openQuickBuffByName-d4740e2d.js"
import"./colouredDots-3eba177f.js"
import"./batch-7ea0272b.js"
import"./onlineDot-b33fd599.js"
import"./doStatTotal-677e42df.js"
import"./executeAll-a7ad7ece.js"
import"./playerName-018cf18c.js"
import"./intValue-ca51a3c0.js"
import"./valueText-7c11f0d0.js"
import"./interceptSubmit-6c8c8ca6.js"
import"./formToUrl-2acae37a.js"
import"./fshOpen-6a6a1b65.js"
function J(t){let o,a,b,h,j,k,x,y,T,q,v,$,S,w,B,D,J=t[1]&&d("showAdmin"),O=t[1]&&function(t){let o,a,p,m
return{c(){o=e("button"),a=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,s){n(e,o,s),c(o,a),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,a,p,m
return{c(){o=e("button"),a=s(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,s){n(e,o,s),c(o,a),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=e("div"),a=e("button"),b=s(" "),h=p(),j=e("button"),k=s(" "),x=p(),y=e("button"),T=s(" "),q=p(),v=e("button"),$=s(" "),S=p(),O&&O.c(),w=p(),A&&A.c(),i(a,"class","fshQuickBuff svelte-1xo8gqh"),i(a,"type","button"),i(a,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(e,s){n(e,o,s),c(o,a),c(a,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,q),c(o,v),c(v,$),c(o,S),O&&O.m(o,null),c(o,w),A&&A.m(o,null),B||(D=[r(a,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&O.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),O&&O.d(),A&&A.d(),B=!1,m(D)}}}function O(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",a=w(),e=b("player_id")||h(),s=B()
function i(t){$("profile","quick button",t)}return[o,a,s,function(t){t.target.blur(),i("quickbuff"),D(s)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),x(`${T}${s}`)},function(){i("recall items"),x(`${q}${s}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${e}`)}]}class A extends t{constructor(t){super(),o(this,t,O,J,a,{})}}function I(){const t=S('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-10632efd.js.map
