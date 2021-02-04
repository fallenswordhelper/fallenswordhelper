import{S as t,i as o,s as e,e as a,t as s,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as f,q as m}from"./index-bebd168e.js"
import{H as d,S as b,aw as h,al as g,c as j,c9 as k,N as x,ca as y,bM as T,bA as q,s as v,W as S,C as $}from"./calfSystem-37f70deb.js"
import{c as G}from"./currentGuildId-5ba5aa94.js"
import{a as w}from"./getIsOwnGuild-84f9a15b.js"
import{a as A}from"./profile-457061ec.js"
import{o as B}from"./openQuickBuffByName-28108be8.js"
import"./colouredDots-52d361c8.js"
import"./batch-556f2f36.js"
import"./onlineDot-1818f1ec.js"
import"./doStatTotal-a3b3e660.js"
import"./executeAll-f0c9235d.js"
import"./playerName-fa80c59b.js"
import"./intValue-55d66e09.js"
import"./valueText-6fb91f3a.js"
import"./interceptSubmit-8392a331.js"
import"./formToUrl-2a960512.js"
import"./fshOpen-946a9f05.js"
function J(t){let o,e,b,h,j,k,x,y,T,q,v,S,$,w,A,B,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,f
return{c(){o=a("button"),e=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(a,s){n(a,o,s),r(o,e),p||(f=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t),C=J&&function(t){let o,e,p,f
return{c(){o=a("button"),e=s(" "),m(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(a,s){n(a,o,s),r(o,e),p||(f=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,f()}}}(t)
return{c(){o=a("div"),e=a("button"),b=s(" "),h=p(),j=a("button"),k=s(" "),x=p(),y=a("button"),T=s(" "),q=p(),v=a("button"),S=s(" "),$=p(),N&&N.c(),w=p(),C&&C.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(a,s){n(a,o,s),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),N&&N.m(o,null),r(o,w),C&&C.m(o,null),A||(B=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],A=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&C.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),C&&C.d(),A=!1,f(B)}}}function N(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),a=b("player_id")||h(),s=A()
function i(t){S("profile","quick button",t)}return[o,e,s,function(t){t.target.blur(),i("quickbuff"),B(s)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${T}${s}`)},function(){i("recall items"),x(`${q}${s}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${a}`)}]}class C extends t{constructor(t){super(),o(this,t,N,J,e,{})}}function M(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new C({anchor:t.nextElementSibling,target:t.parentNode})}export default M
//# sourceMappingURL=profileInjectQuickButton-0840c687.js.map
