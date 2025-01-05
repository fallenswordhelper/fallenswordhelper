import{S as t,O as s,P as a,ao as o,R as e,a7 as n,T as i,U as l,W as c,X as r,_ as u,a3 as p,a4 as m,a5 as f,am as d,ae as b,b0 as g,aG as k,ek as h,cn as x,el as j,aM as v,dy as q,cC as y,bo as T,b5 as $,cm as S,s as G,q as w}from"./calfSystem-fMW-YMyF.js"
import{a as R}from"./getIsOwnGuild-DtXa0Mv2.js"
import{a as J}from"./profile-BW3ZVcnq.js"
import"./colouredDots-vtVAORAX.js"
import"./batch-DG981iST.js"
import"./onlineDot-CdkYSVKg.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CPOodCW2.js"
import"./formToUrl-hXVFwEWZ.js"
import"./doStatTotal-ZW6rfEGB.js"
function _(t){let s,a,d,b,g,k,h,x,j,v,q,y,G,w,R,J,_=t[1]&&o("showAdmin"),A=t[1]&&function(t){let s,a,o,i
return{c(){s=e("button"),a=n(" "),l(s,"class","fshTempleThree svelte-1gxsq3l"),l(s,"type","button"),l(s,"data-tooltip","Recall items from "+t[2])},m(e,n){c(e,s,n),r(s,a),o||(i=u(s,"click",t[7]),o=!0)},p:p,d(t){t&&m(s),o=!1,i()}}}(t),C=_&&function(t){let s,a,o,i
return{c(){s=e("button"),a=n(" "),T(s,"background-image","url('"+$+"guilds/"+S()+"_mini.png')"),l(s,"type","button"),l(s,"data-tooltip","Rank "+t[2]),l(s,"class","svelte-1gxsq3l")},m(e,n){c(e,s,n),r(s,a),o||(i=u(s,"click",t[8]),o=!0)},p:p,d(t){t&&m(s),o=!1,i()}}}(t)
return{c(){s=e("div"),a=e("button"),d=n(" "),b=i(),g=e("button"),k=n(" "),h=i(),x=e("button"),j=n(" "),v=i(),q=e("button"),y=n(" "),G=i(),A&&A.c(),w=i(),C&&C.c(),l(a,"class","fshQuickBuff svelte-1gxsq3l"),l(a,"type","button"),l(a,"data-tooltip","Buff "+t[2]),l(g,"class","fshJoin svelte-1gxsq3l"),l(g,"type","button"),l(g,"data-tooltip","Join All Groups"+t[0]),l(x,"class","fshGold svelte-1gxsq3l"),l(x,"type","button"),l(x,"data-tooltip","Go to "+t[2]+"'s auctions"),l(q,"class","fshTempleTwo svelte-1gxsq3l"),l(q,"type","button"),l(q,"data-tooltip","Create Secure Trade to "+t[2]),l(s,"class","svelte-1gxsq3l")},m(o,e){c(o,s,e),r(s,a),r(a,d),r(s,b),r(s,g),r(g,k),r(s,h),r(s,x),r(x,j),r(s,v),r(s,q),r(q,y),r(s,G),A&&A.m(s,null),r(s,w),C&&C.m(s,null),R||(J=[u(a,"click",t[3]),u(g,"click",t[4]),u(x,"click",t[5]),u(q,"click",t[6])],R=!0)},p(t,[s]){t[1]&&A.p(t,s),_&&C.p(t,s)},i:p,o:p,d(t){t&&m(s),A&&A.d(),C&&C.d(),R=!1,f(J)}}}function A(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",a=R(),o=b("player_id")||g(),e=J()
function n(t){G("profile","quick button",t)}return[s,a,e,function(t){t.target.blur(),n("quickbuff"),k(o)},function(){n("join groups"),h()},function(){n("auctions"),x(`${j}&type=-3&tid=${o}`)},function(){n("secure trade"),x(`${v}${e}`)},function(){n("recall items"),x(`${q}${e}`)},function(){n("rank"),x(`${y}members&subcmd2=changerank&member_id=${o}`)}]}class C extends t{constructor(t){super(),s(this,t,A,_,a,{})}}function M(){const t=w('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,new C({anchor:s,target:a}))}export{M as default}
//# sourceMappingURL=profileInjectQuickButton-CxPU3QYi.js.map
