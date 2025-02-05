import{S as t,P as s,Q as a,aq as o,T as e,U as n,V as i,_ as l,a0 as c,a1 as r,a3 as u,a9 as p,a4 as m,a5 as f,ao as d,af as b,b3 as g,bp as h,b8 as k,cp as q,aI as x,et as j,cq as v,eu as T,aP as y,dE as $,cF as S,s as G,q as w}from"./calfSystem-BAeDn21M.js"
import{a as J}from"./getIsOwnGuild-BrziPr89.js"
import{a as M}from"./profile-BtrmW7Y8.js"
import"./colouredDots-CcVKMZje.js"
import"./batch-DC6H1oLU.js"
import"./onlineDot-Dbu9j1oq.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CqzbaM3V.js"
import"./formToUrl-Bym6lubv.js"
import"./doStatTotal-tZMNla4Z.js"
function R(t){let s,a,d,b,g,x,j,v,T,y,$,S,G,w,J,M,R=t[1]&&o("showAdmin"),_=t[1]&&function(t){let s,a,o,i
return{c(){s=u("button"),a=p(" "),f(s,"class","fshTempleThree svelte-1gxsq3l"),f(s,"type","button"),f(s,"data-tooltip","Recall items from "+t[2])},m(e,n){l(e,s,n),c(s,a),o||(i=r(s,"click",t[7]),o=!0)},p:e,d(t){t&&n(s),o=!1,i()}}}(t),A=R&&function(t){let s,a,o,i
return{c(){s=u("button"),a=p(" "),h(s,"background-image","url('"+k+"guilds/"+q()+"_mini.png')"),f(s,"type","button"),f(s,"data-tooltip","Rank "+t[2]),f(s,"class","svelte-1gxsq3l")},m(e,n){l(e,s,n),c(s,a),o||(i=r(s,"click",t[8]),o=!0)},p:e,d(t){t&&n(s),o=!1,i()}}}(t)
return{c(){s=u("div"),a=u("button"),d=p(" "),b=m(),g=u("button"),x=p(" "),j=m(),v=u("button"),T=p(" "),y=m(),$=u("button"),S=p(" "),G=m(),_&&_.c(),w=m(),A&&A.c(),f(a,"class","fshQuickBuff svelte-1gxsq3l"),f(a,"type","button"),f(a,"data-tooltip","Buff "+t[2]),f(g,"class","fshJoin svelte-1gxsq3l"),f(g,"type","button"),f(g,"data-tooltip","Join All Groups"+t[0]),f(v,"class","fshGold svelte-1gxsq3l"),f(v,"type","button"),f(v,"data-tooltip","Go to "+t[2]+"'s auctions"),f($,"class","fshTempleTwo svelte-1gxsq3l"),f($,"type","button"),f($,"data-tooltip","Create Secure Trade to "+t[2]),f(s,"class","svelte-1gxsq3l")},m(o,e){l(o,s,e),c(s,a),c(a,d),c(s,b),c(s,g),c(g,x),c(s,j),c(s,v),c(v,T),c(s,y),c(s,$),c($,S),c(s,G),_&&_.m(s,null),c(s,w),A&&A.m(s,null),J||(M=[r(a,"click",t[3]),r(g,"click",t[4]),r(v,"click",t[5]),r($,"click",t[6])],J=!0)},p(t,[s]){t[1]&&_.p(t,s),R&&A.p(t,s)},i:e,o:e,d(t){t&&n(s),_&&_.d(),A&&A.d(),J=!1,i(M)}}}function _(t){const s=d.enableMaxGroupSizeToJoin?` < ${d.maxGroupSizeToJoin} Members`:"",a=J(),o=b("player_id")||g(),e=M()
function n(t){G("profile","quick button",t)}return[s,a,e,function(t){t.target.blur(),n("quickbuff"),x(o)},function(){n("join groups"),j()},function(){n("auctions"),v(`${T}&type=-3&tid=${o}`)},function(){n("secure trade"),v(`${y}${e}`)},function(){n("recall items"),v(`${$}${e}`)},function(){n("rank"),v(`${S}members&subcmd2=changerank&member_id=${o}`)}]}class A extends t{constructor(t){super(),s(this,t,_,R,a,{})}}function N(){const t=w('#profileLeftColumn img[src*="/avatars/"][width="200"]')
var s,a
t&&(t.parentNode.classList.add("fshRelative"),s=t.nextElementSibling,a=t.parentNode,new A({anchor:s,target:a}))}export{N as default}
//# sourceMappingURL=profileInjectQuickButton-HoqgMgpK.js.map
