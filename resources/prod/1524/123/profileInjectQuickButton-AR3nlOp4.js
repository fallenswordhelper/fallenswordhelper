import{S as t,L as s,M as o,ai as a,O as e,a3 as i,P as n,Q as l,T as r,U as c,X as u,_ as p,a0 as m,a1 as f,ag as d,aa as b,aJ as g,dM as j,bT as x,dN as h,au as k,c_ as v,c4 as T,b3 as y,aN as q,bQ as S,s as $,q as G}from"./calfSystem-wTzwei3t.js"
import{o as w}from"./openQuickBuffById-BBtUx2eO.js"
import{a as J}from"./getIsOwnGuild-DN83XkEn.js"
import{a as Q}from"./profile-BWglVUkX.js"
import"./fshOpen-AuKioUPF.js"
import"./colouredDots-DmxXrKj6.js"
import"./batch-B2xhIuNE.js"
import"./lastActivity-BAN2lPMa.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-B8v1pE-x.js"
import"./onlineDot-Cp1ex2F9.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-BOa9u4Un.js"
import"./formToUrl-n7bzGaSs.js"
import"./doStatTotal-D5BIInIA.js"
import"./asInt-DcpIJRg8.js"
import"./valueText-CDmZqpbc.js"
import"./intValue-C7nTQec1.js"
function _(t){let s,o,d,b,g,j,x,h,k,v,T,$,G,w,J,Q,_=t[1]&&a("showAdmin"),A=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),B=_&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),y(s,"background-image","url('"+q+"guilds/"+S()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),x=n(),h=e("button"),k=i(" "),v=n(),T=e("button"),$=i(" "),G=n(),A&&A.c(),w=n(),B&&B.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(h,"class","fshGold svelte-1gxsq3l"),l(h,"type","button"),l(h,"data-tooltip","Go to "+t[2]+"'s auctions"),l(T,"class","fshTempleTwo svelte-1gxsq3l"),l(T,"type","button"),l(T,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,g),c(g,j),c(s,x),c(s,h),c(h,k),c(s,v),c(s,T),c(T,$),c(s,G),A&&A.m(s,null),c(s,w),B&&B.m(s,null),J||(Q=[u(o,"click",t[3]),u(g,"click",t[4]),u(h,"click",t[5]),u(T,"click",t[6])],J=!0)},p(t,[s]){t[1]&&A.p(t,s),_&&B.p(t,s)},i:p,o:p,d(t){t&&m(s),A&&A.d(),B&&B.d(),J=!1,f(Q)}}}function A(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=J(),a=b("player_id")||g(),e=Q()
function i(t){$("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),w(a)},function(){i("join groups"),j()},function(){i("auctions"),x(`${h}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${k}${e}`)},function(){i("recall items"),x(`${v}${e}`)},function(){i("rank"),x(`${T}members&subcmd2=changerank&member_id=${a}`)}]}class B extends t{constructor(t){super(),s(this,t,A,_,o,{})}}function L(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new B({anchor:s,target:o}))}export{L as default}
//# sourceMappingURL=profileInjectQuickButton-AR3nlOp4.js.map
