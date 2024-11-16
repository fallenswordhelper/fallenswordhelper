import{S as t,L as s,M as o,ai as a,O as e,Z as i,R as n,T as l,a2 as r,U as c,V as u,X as p,b5 as m,aO as f,bW as d,Y as b,W as g,ag as j,aa as x,aI as h,s as k,dT as v,bX as T,dU as y,aw as q,d5 as $,c8 as S,q as G}from"./calfSystem-Blt4DbaE.js"
import{o as w}from"./openQuickBuffById-AG7prqnJ.js"
import{a as A}from"./getIsOwnGuild-VBU9Gl0G.js"
import{a as B}from"./profile-rC6r94F5.js"
import"./fshOpen-AuKioUPF.js"
import"./colouredDots-C78onBfn.js"
import"./batch-C_j5R0ng.js"
import"./lastActivity-E8nkj_ho.js"
import"./regExpGroups-B7iOxfb4.js"
import"./onlineDot-KmDOLCpD.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-DTfrwUG-.js"
import"./formToUrl-Bfgg_ioA.js"
import"./doStatTotal-CybaE_J0.js"
import"./asInt-CnZ3Wv3g.js"
import"./valueText-CRDZBw-0.js"
import"./intValue-C7nTQec1.js"
function J(t){let s,o,j,x,h,k,v,T,y,q,$,S,G,w,A,B,J=t[1]&&a("showAdmin"),O=t[1]&&function(t){let s,o,a,m
return{c(){s=c("button"),o=u(" "),p(s,"class","fshTempleThree svelte-1gxsq3l"),p(s,"type","button"),p(s,"data-tooltip","Recall items from "+t[2])},m(e,i){n(e,s,i),l(s,o),a||(m=r(s,"click",t[7]),a=!0)},p:i,d(t){t&&e(s),a=!1,m()}}}(t),R=J&&function(t){let s,o,a,b
return{c(){s=c("button"),o=u(" "),m(s,"background-image","url('"+f+"guilds/"+d()+"_mini.png')"),p(s,"type","button"),p(s,"data-tooltip","Rank "+t[2]),p(s,"class","svelte-1gxsq3l")},m(e,i){n(e,s,i),l(s,o),a||(b=r(s,"click",t[8]),a=!0)},p:i,d(t){t&&e(s),a=!1,b()}}}(t)
return{c(){s=c("div"),o=c("button"),j=u(" "),x=g(),h=c("button"),k=u(" "),v=g(),T=c("button"),y=u(" "),q=g(),$=c("button"),S=u(" "),G=g(),O&&O.c(),w=g(),R&&R.c(),p(o,"class","fshQuickBuff svelte-1gxsq3l"),p(o,"type","button"),p(o,"data-tooltip","Buff "+t[2]),p(h,"class","fshJoin svelte-1gxsq3l"),p(h,"type","button"),p(h,"data-tooltip","Join All Groups"+t[0]),p(T,"class","fshGold svelte-1gxsq3l"),p(T,"type","button"),p(T,"data-tooltip","Go to "+t[2]+"'s auctions"),p($,"class","fshTempleTwo svelte-1gxsq3l"),p($,"type","button"),p($,"data-tooltip","Create Secure Trade to "+t[2]),p(s,"class","svelte-1gxsq3l")},m(a,e){n(a,s,e),l(s,o),l(o,j),l(s,x),l(s,h),l(h,k),l(s,v),l(s,T),l(T,y),l(s,q),l(s,$),l($,S),l(s,G),O&&O.m(s,null),l(s,w),R&&R.m(s,null),A||(B=[r(o,"click",t[3]),r(h,"click",t[4]),r(T,"click",t[5]),r($,"click",t[6])],A=!0)},p(t,[s]){t[1]&&O.p(t,s),J&&R.p(t,s)},i:i,o:i,d(t){t&&e(s),O&&O.d(),R&&R.d(),A=!1,b(B)}}}function O(t){const s=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",o=A(),a=x("player_id")||h(),e=B()
function i(t){k("profile","quick button",t)}return[s,o,e,function(t){t.target.blur(),i("quickbuff"),w(a)},function(){i("join groups"),v()},function(){i("auctions"),T(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),T(`${q}${e}`)},function(){i("recall items"),T(`${$}${e}`)},function(){i("rank"),T(`${S}members&subcmd2=changerank&member_id=${a}`)}]}class R extends t{constructor(t){super(),s(this,t,O,J,o,{})}}function I(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,o
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,o=t.parentNode,new R({anchor:s,target:o}))}export{I as default}
//# sourceMappingURL=profileInjectQuickButton-viqpQ9_P.js.map
