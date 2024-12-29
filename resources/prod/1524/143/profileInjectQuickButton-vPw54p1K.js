import{S as t,O as s,P as a,ao as o,R as e,a7 as n,T as l,U as i,W as c,X as r,_ as u,a3 as p,a4 as m,a5 as f,am as d,ae as b,b0 as g,aG as h,ek as k,cn as x,el as q,aM as j,dy as v,cC as y,bo as T,b5 as $,cm as S,s as G,q as w}from"./calfSystem-ChzN4Q-P.js"
import{a as J}from"./getIsOwnGuild-CrlT1ftb.js"
import{a as R}from"./profile-nR9pBkFJ.js"
import"./colouredDots-CLArNr5X.js"
import"./batch-CcQbYj5o.js"
import"./onlineDot-mqfQV1WG.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CmNeM6n-.js"
import"./formToUrl-DpqdMGU9.js"
import"./doStatTotal-CXgr6RmM.js"
function _(t){let s,a,d,b,g,h,k,x,q,j,v,y,G,w,J,R,_=t[1]&&o("showAdmin"),A=t[1]&&function(t){let s,a,o,l
return{c(){s=e("button"),a=n(" "),i(s,"class","fshTempleThree svelte-1gxsq3l"),i(s,"type","button"),i(s,"data-tooltip","Recall items from "+t[2])},m(e,n){c(e,s,n),r(s,a),o||(l=u(s,"click",t[7]),o=!0)},p:p,d(t){t&&m(s),o=!1,l()}}}(t),C=_&&function(t){let s,a,o,l
return{c(){s=e("button"),a=n(" "),T(s,"background-image","url('"+$+"guilds/"+S()+"_mini.png')"),i(s,"type","button"),i(s,"data-tooltip","Rank "+t[2]),i(s,"class","svelte-1gxsq3l")},m(e,n){c(e,s,n),r(s,a),o||(l=u(s,"click",t[8]),o=!0)},p:p,d(t){t&&m(s),o=!1,l()}}}(t)
return{c(){s=e("div"),a=e("button"),d=n(" "),b=l(),g=e("button"),h=n(" "),k=l(),x=e("button"),q=n(" "),j=l(),v=e("button"),y=n(" "),G=l(),A&&A.c(),w=l(),C&&C.c(),i(a,"class","fshQuickBuff svelte-1gxsq3l"),i(a,"type","button"),i(a,"data-tooltip","Buff "+t[2]),i(g,"class","fshJoin svelte-1gxsq3l"),i(g,"type","button"),i(g,"data-tooltip","Join All Groups"+t[0]),i(x,"class","fshGold svelte-1gxsq3l"),i(x,"type","button"),i(x,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1gxsq3l"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2]),i(s,"class","svelte-1gxsq3l")},m(o,e){c(o,s,e),r(s,a),r(a,d),r(s,b),r(s,g),r(g,h),r(s,k),r(s,x),r(x,q),r(s,j),r(s,v),r(v,y),r(s,G),A&&A.m(s,null),r(s,w),C&&C.m(s,null),J||(R=[u(a,"click",t[3]),u(g,"click",t[4]),u(x,"click",t[5]),u(v,"click",t[6])],J=!0)},p(t,[s]){t[1]&&A.p(t,s),_&&C.p(t,s)},i:p,o:p,d(t){t&&m(s),A&&A.d(),C&&C.d(),J=!1,f(R)}}}function A(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",a=J(),o=b("player_id")||g(),e=R()
function n(t){G("profile","quick button",t)}return[s,a,e,function(t){t.target.blur(),n("quickbuff"),h(o)},function(){n("join groups"),k()},function(){n("auctions"),x(`${q}&type=-3&tid=${o}`)},function(){n("secure trade"),x(`${j}${e}`)},function(){n("recall items"),x(`${v}${e}`)},function(){n("rank"),x(`${y}members&subcmd2=changerank&member_id=${o}`)}]}class C extends t{constructor(t){super(),s(this,t,A,_,a,{})}}function M(){const t=w('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,new C({anchor:s,target:a}))}export{M as default}
//# sourceMappingURL=profileInjectQuickButton-vPw54p1K.js.map
