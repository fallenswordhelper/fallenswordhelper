import{S as t,i as o,s,e,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as f,q as m}from"./index-79201ad3.js"
import{I as d,c as b,S as h,aJ as j,az as g,cb as k,N as x,cc as y,ai as T,bH as q,s as v,T as S,D as $}from"./calfSystem-d3f0a380.js"
import{c as G}from"./currentGuildId-574c8e9f.js"
import{a as w}from"./getIsOwnGuild-ed50976c.js"
import{a as J}from"./profile-c34144db.js"
import{o as B}from"./openQuickBuffByName-62f56024.js"
import"./colouredDots-326f71c6.js"
import"./batch-7c0362d6.js"
import"./onlineDot-78db5edc.js"
import"./doStatTotal-af8f07c1.js"
import"./executeAll-9a33204f.js"
import"./playerName-9d5fb2c2.js"
import"./asInt-c5f8ce87.js"
import"./intValue-19726e4b.js"
import"./valueText-2dd1b1b5.js"
import"./interceptSubmit-96252bbe.js"
import"./formToUrl-d90c5ff1.js"
import"./fshOpen-4e911fa6.js"
function I(t){let o,s,b,h,j,k,x,y,T,q,v,S,$,w,J,B,I=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,s,p,f
return{c(){o=e("button"),s=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,a){n(e,o,a),c(o,s),p||(f=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),z=I&&function(t){let o,s,p,f
return{c(){o=e("button"),s=a(" "),m(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,a){n(e,o,a),c(o,s),p||(f=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=e("div"),s=e("button"),b=a(" "),h=p(),j=e("button"),k=a(" "),x=p(),y=e("button"),T=a(" "),q=p(),v=e("button"),S=a(" "),$=p(),N&&N.c(),w=p(),z&&z.c(),i(s,"class","fshQuickBuff svelte-1xo8gqh"),i(s,"type","button"),i(s,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(e,a){n(e,o,a),c(o,s),c(s,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,q),c(o,v),c(v,S),c(o,$),N&&N.m(o,null),c(o,w),z&&z.m(o,null),J||(B=[r(s,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],J=!0)},p(t,[o]){t[1]&&N.p(t,o),I&&z.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),z&&z.d(),J=!1,f(B)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",s=w(),e=h("player_id")||j(),a=J()
function i(t){S("profile","quick button",t)}return[o,s,a,function(t){t.target.blur(),i("quickbuff"),B(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${e}`)}]}class z extends t{constructor(t){super(),o(this,t,N,I,s,{})}}function A(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new z({anchor:t.nextElementSibling,target:t.parentNode})}export default A
//# sourceMappingURL=profileInjectQuickButton-9eaaa87f.js.map
