import{S as t,L as s,M as o,ai as a,O as e,a3 as i,P as n,Q as l,T as r,U as c,X as u,_ as p,a0 as m,a1 as f,ag as d,aa as b,aK as g,dT as j,bX as x,dU as h,aw as k,d5 as v,c8 as T,b5 as y,aP as q,bW as S,s as $,q as G}from"./calfSystem-CUgWHLtG.js"
import{o as w}from"./openQuickBuffById-6cMf-Stu.js"
import{a as A}from"./getIsOwnGuild-CxCAO3yN.js"
import{a as B}from"./profile-lQ8sHcjZ.js"
import"./fshOpen-AuKioUPF.js"
import"./colouredDots-C578-IN3.js"
import"./batch-DgzuJJDl.js"
import"./lastActivity-CkJNYBKg.js"
import"./regExpGroups-BdMT6Ygg.js"
import"./onlineDot-Clfoju52.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Cmu1wKZK.js"
import"./formToUrl-BwuflQSq.js"
import"./doStatTotal-Df1XDnrc.js"
import"./asInt-Bqhf3xYw.js"
import"./valueText-CpX32YUk.js"
import"./intValue-C7nTQec1.js"
function J(t){let s,o,d,b,g,j,x,h,k,v,T,$,G,w,A,B,J=t[1]&&a("showAdmin"),L=t[1]&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[7]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t),O=J&&function(t){let s,o,a,n
return{c(){s=e("button"),o=i(" "),y(s,"background-image","url('"+q+"guilds/"+S()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,i){r(e,s,i),c(s,o),a||(n=u(s,"click",t[8]),a=!0)},p:p,d(t){t&&m(s),a=!1,n()}}}(t)
return{c(){s=e("div"),o=e("button"),d=i(" "),b=n(),g=e("button"),j=i(" "),x=n(),h=e("button"),k=i(" "),v=n(),T=e("button"),$=i(" "),G=n(),L&&L.c(),w=n(),O&&O.c(),l(o,"class","fshQuickBuff svelte-1gxsq3l"),l(o,"type","button"),l(o,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(h,"class","fshGold svelte-1gxsq3l"),l(h,"type","button"),l(h,"data-tooltip","Go to "+t[2]+"'s auctions"),l(T,"class","fshTempleTwo svelte-1gxsq3l"),l(T,"type","button"),l(T,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(a,e){r(a,s,e),c(s,o),c(o,d),c(s,b),c(s,g),c(g,j),c(s,x),c(s,h),c(h,k),c(s,v),c(s,T),c(T,$),c(s,G),L&&L.m(s,null),c(s,w),O&&O.m(s,null),A||(B=[u(o,"click",t[3]),u(g,"click",t[4]),u(h,"click",t[5]),u(T,"click",t[6])],A=!0)},p(t,[s]){t[1]&&L.p(t,s),J&&O.p(t,s)},i:p,o:p,d(t){t&&m(s),L&&L.d(),O&&O.d(),A=!1,f(B)}}}function L(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",o=A(),a=b("player_id")||g(),e=B()
function i(t){$("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),w(a)},function(){i("join groups"),j()},function(){i("auctions"),x(`${h}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${k}${e}`)},function(){i("recall items"),x(`${v}${e}`)},function(){i("rank"),x(`${T}members&subcmd2=changerank&member_id=${a}`)}]}class O extends t{constructor(t){super(),s(this,t,L,J,o,{})}}function Q(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new O({anchor:s,target:o}))}export{Q as default}
//# sourceMappingURL=profileInjectQuickButton-CF_s13Vj.js.map
