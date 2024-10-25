import{S as t,L as s,M as a,ai as o,O as e,a4 as i,P as n,Q as l,T as r,U as c,X as u,a0 as p,a1 as m,a2 as f,ag as d,aa as b,aK as g,dT as j,bX as x,dU as h,aw as k,d5 as v,c8 as T,b5 as y,aP as q,bW as $,s as S,q as G}from"./calfSystem-DZGU7L1H.js"
import{o as w}from"./openQuickBuffById-o3Ofe8vo.js"
import{a as A}from"./getIsOwnGuild-COx02dfm.js"
import{a as B}from"./profile-DETzIrR5.js"
import"./fshOpen-AuKioUPF.js"
import"./colouredDots-BjlEZWIT.js"
import"./batch-C43pMbNt.js"
import"./lastActivity-BMLtWljO.js"
import"./regExpGroups-Dx0dzQVf.js"
import"./onlineDot-DjK5n5WS.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-ee1pG6cx.js"
import"./formToUrl-BOvZ_tnn.js"
import"./doStatTotal-BQCP8rxV.js"
import"./asInt-BEghcCcW.js"
import"./valueText-BpUI1ICU.js"
import"./intValue-C7nTQec1.js"
function J(t){let s,a,d,b,g,j,x,h,k,v,T,S,G,w,A,B,J=t[1]&&o("showAdmin"),M=t[1]&&function(t){let s,a,o,n
return{c(){s=e("button"),a=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,a),o||(n=u(s,"click",t[7]),o=!0)},p:p,d(t){t&&m(s),o=!1,n()}}}(t),O=J&&function(t){let s,a,o,n
return{c(){s=e("button"),a=i(" "),y(s,"background-image","url('"+q+"guilds/"+$()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,a),o||(n=u(s,"click",t[8]),o=!0)},p:p,d(t){t&&m(s),o=!1,n()}}}(t)
return{c(){s=e("div"),a=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),x=n(),h=e("button"),k=i(" "),v=n(),T=e("button"),S=i(" "),G=n(),M&&M.c(),w=n(),O&&O.c(),l(a,"class","fshQuickBuff svelte-1gxsq3l"),l(a,"type","button"),l(a,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(h,"class","fshGold svelte-1gxsq3l"),l(h,"type","button"),l(h,"data-tooltip","Go to "+t[2]+"'s auctions"),l(T,"class","fshTempleTwo svelte-1gxsq3l"),l(T,"type","button"),l(T,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(o,e){r(o,s,e),c(s,a),c(a,d),c(s,b),c(s,g),c(g,j),c(s,x),c(s,h),c(h,k),c(s,v),c(s,T),c(T,S),c(s,G),M&&M.m(s,null),c(s,w),O&&O.m(s,null),A||(B=[u(a,"click",t[3]),u(g,"click",t[4]),u(h,"click",t[5]),u(T,"click",t[6])],A=!0)},p(t,[s]){t[1]&&M.p(t,s),J&&O.p(t,s)},i:p,o:p,d(t){t&&m(s),M&&M.d(),O&&O.d(),A=!1,f(B)}}}function M(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",a=A(),o=b("player_id")||g(),e=B()
function i(t){S("profile","quick button",t)}return[s,a,e,function(t){t.target.blur(),i("quickbuff"),w(o)},function(){i("join groups"),j()},function(){i("auctions"),x(`${h}&type=-3&tid=${o}`)},function(){i("secure trade"),x(`${k}${e}`)},function(){i("recall items"),x(`${v}${e}`)},function(){i("rank"),x(`${T}members&subcmd2=changerank&member_id=${o}`)}]}class O extends t{constructor(t){super(),s(this,t,M,J,a,{})}}function Q(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,new O({anchor:s,target:a}))}export{Q as default}
//# sourceMappingURL=profileInjectQuickButton-C8gTZ4MC.js.map
