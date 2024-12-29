import{bj as t,o as e,F as n,w as s,c$ as a,s as c,aG as l,aH as o,ac as i,S as r,O as u,P as f,Q as h,R as d,T as m,U as p,W as g,X as b,a3 as $,a4 as T,bp as v,E as w,ay as k,as as y,a7 as x,_ as N,at as R,bA as S,bD as j,a5 as F,bF as H,bG as C,bH as E,a8 as L,b6 as _,f as B,bU as A,b8 as M,bu as U,x as X,aS as D,p as I,cl as G,d as K,b3 as q,n as O,i as P,q as Q}from"./calfSystem-ChzN4Q-P.js"
import{d as V}from"./dataRows-wal17PRE.js"
import{g as W}from"./getTitle-C1xil_UC.js"
import{a as Y,g as z,t as J}from"./getTitanString-DvEb_zLX.js"
import{a as Z}from"./roundToString-BkWFh1Ji.js"
import{p as tt}from"./parseDateAsTimestamp-iO7Ig_Pa.js"
import{c as et}from"./closestTable-DvVVJKGM.js"
import{L as nt}from"./LinkButtonBracketed-DOkZNd-3.js"
import{t as st}from"./toggleForce-br4z9gGd.js"
import"./dateUtc-BYrZxQ0M.js"
import"./LinkButton-BclPa9W-.js"
const at=t=>o(t.cells[0].children[0].href)
function ct(t){const{target:e}=t
a("[b]",e)&&function(t){t.previousElementSibling&&(c("scout tower","buffIndividual"),l(o(t.previousElementSibling.href)))}(e),a("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,n=V(e,3,0).map(at).join()
c("scout tower","buffAll"),l(n)}(e)}function lt(t){n("fshBl",t.target)&&ct(t)}function ot(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function it(t){V(t,3,0).forEach(ot),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function rt(t,e){return t.rows.length>1&&e>1}function ut(n){n.length>2&&function(n){t(n).filter(rt).forEach(it),e(n[1],lt)}(n)}function ft(t){const e=t.hp.split("/")
var n,a,c
s(t.tr.cells[3],(n=Number(i(t.tr.cells[3])),a=Number(e[0]),c=Number(e[1]),`<br><span class="fshBlue"> (${Z(Y(c-a,n),2)}% Current <br>${Z(100*n/c,2)}% Total<br>${z(n,c,a)})`))}function ht(t,e,n){const s=t.slice()
return s[4]=e[n][0],s[5]=e[n][1],s}function dt(t){let e,n,s,a,c,l,o
return{c(){e=d("tr"),n=d("td"),n.textContent=`${t[4]}`,s=m(),a=d("td"),a.textContent=`${t[5].cooldownText}`,c=m(),l=d("td"),l.textContent=`${t[5].seen}`,o=m(),p(n,"class","svelte-1g6lyd8"),p(a,"class","cd svelte-1g6lyd8"),p(l,"class","svelte-1g6lyd8")},m(t,i){g(t,e,i),b(e,n),b(e,s),b(e,a),b(e,c),b(e,l),b(e,o)},p:$,d(t){t&&T(e)}}}function mt(t){let e,n,s,a,c=h(t[0]()),l=[]
for(let e=0;e<c.length;e+=1)l[e]=dt(ht(t,c,e))
return{c(){e=d("table"),n=d("tbody"),s=d("tr"),s.innerHTML='<td class="header svelte-1g6lyd8">Titan</td> <td class="header svelte-1g6lyd8">Cooldown</td> <td class="header svelte-1g6lyd8">Visible</td>',a=m()
for(let t=0;t<l.length;t+=1)l[t].c()
p(e,"class","svelte-1g6lyd8")},m(t,c){g(t,e,c),b(e,n),b(n,s),b(n,a)
for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(t,[e]){if(1&e){let s
for(c=h(t[0]()),s=0;s<c.length;s+=1){const a=ht(t,c,s)
l[s]?l[s].p(a,e):(l[s]=dt(a),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1)
l.length=c.length}},i:$,o:$,d(t){t&&T(e),v(l,t)}}}function pt(t,e,n){let{theTitans:s}=e
const a=([,t])=>t.coolTime>k(),c=([,t],[,e])=>t.coolTime-e.coolTime
return t.$$set=t=>{"theTitans"in t&&n(1,s=t.theTitans)},[()=>w(s).filter(a).sort(c),s]}class gt extends r{constructor(t){super(),u(this,t,pt,mt,f,{theTitans:1})}}function bt(t,e,n){const s=t.slice()
return s[29]=e[n][0],s[30]=e[n][1],s[31]=e,s[32]=n,s}function $t(t){return{c:$,m:$,p:$,i:$,o:$,d:$}}function Tt(t){let e,n,s,a,c,l,o,i=h(t[3]),r=[]
for(let e=0;e<i.length;e+=1)r[e]=vt(bt(t,i,e))
return a=new nt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),a.$on("click",t[9]),l=new nt({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),l.$on("click",t[10]),{c(){e=d("div")
for(let t=0;t<r.length;t+=1)r[t].c()
n=m(),s=d("div"),H(a.$$.fragment),c=m(),H(l.$$.fragment),p(e,"id","titan-list"),p(e,"class","svelte-1s0h251"),p(s,"class","svelte-1s0h251")},m(t,i){g(t,e,i)
for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(e,null)
g(t,n,i),g(t,s,i),C(a,s,null),b(s,c),C(l,s,null),o=!0},p(t,n){if(264&n[0]){let s
for(i=h(t[3]),s=0;s<i.length;s+=1){const a=bt(t,i,s)
r[s]?r[s].p(a,n):(r[s]=vt(a),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1)
r.length=i.length}const s={}
4&n[1]&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)
const c={}
4&n[1]&&(c.$$scope={dirty:n,ctx:t}),l.$set(c)},i(t){o||(S(a.$$.fragment,t),S(l.$$.fragment,t),o=!0)},o(t){j(a.$$.fragment,t),j(l.$$.fragment,t),o=!1},d(t){t&&(T(e),T(n),T(s)),v(r,t),E(a),E(l)}}}function vt(t){let e,n,s,a,c,l,o,i=t[29]+""
function r(){t[16].call(n,t[31],t[32])}return{c(){e=d("label"),n=d("input"),s=m(),a=x(i),c=m(),p(n,"type","checkbox"),p(e,"class","svelte-1s0h251")},m(i,u){g(i,e,u),b(e,n),n.checked=t[30],b(e,s),b(e,a),g(i,c,u),l||(o=[N(n,"change",r),N(n,"change",t[8])],l=!0)},p(e,s){t=e,8&s[0]&&(n.checked=t[30]),8&s[0]&&i!==(i=t[29]+"")&&L(a,i)},d(t){t&&(T(e),T(c)),l=!1,F(o)}}}function wt(t){let e
return{c(){e=x("Select All")},m(t,n){g(t,e,n)},d(t){t&&T(e)}}}function kt(t){let e
return{c(){e=x("Select None")},m(t,n){g(t,e,n)},d(t){t&&T(e)}}}function yt(t){return{c:$,m:$,p:$,i:$,o:$,d:$}}function xt(t){let e,n,s,a,c,l,o,i,r,u,f,h,$,v,w,k,H,C,E,L,_,B,A,M,U,X,D,I={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:Tt,catch:$t,blocks:[,,,]}
return y(t[4](),I),{c(){e=d("table"),n=d("tbody"),s=d("tr"),s.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',a=m(),c=d("tr"),l=d("td"),o=d("label"),i=d("input"),r=x("\n          Current"),u=m(),f=d("label"),h=d("input"),$=x("\n          History"),v=m(),w=d("label"),k=d("input"),H=x("\n          Securable"),C=m(),E=d("tr"),E.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',L=m(),_=d("tr"),B=d("td"),I.block.c(),A=m(),M=d("tr"),M.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',p(i,"type","checkbox"),p(o,"class","svelte-1s0h251"),p(h,"type","checkbox"),p(f,"class","svelte-1s0h251"),p(k,"type","checkbox"),p(w,"class","svelte-1s0h251"),p(l,"colspan","3"),p(l,"class","svelte-1s0h251"),p(B,"colspan","3"),p(B,"class","svelte-1s0h251"),p(e,"class","svelte-1s0h251")},m(d,m){g(d,e,m),b(e,n),b(n,s),b(n,a),b(n,c),b(c,l),b(l,o),b(o,i),i.checked=t[0],b(o,r),b(l,u),b(l,f),b(f,h),h.checked=t[1],b(f,$),b(l,v),b(l,w),b(w,k),k.checked=t[2],b(w,H),b(n,C),b(n,E),b(n,L),b(n,_),b(_,B),I.block.m(B,I.anchor=null),I.mount=()=>B,I.anchor=null,b(n,A),b(n,M),U=!0,X||(D=[N(i,"change",t[13]),N(i,"change",t[5]),N(h,"change",t[14]),N(h,"change",t[6]),N(k,"change",t[15]),N(k,"change",t[7])],X=!0)},p(e,n){t=e,1&n[0]&&(i.checked=t[0]),2&n[0]&&(h.checked=t[1]),4&n[0]&&(k.checked=t[2]),R(I,t,n)},i(t){U||(S(I.block),U=!0)},o(t){for(let t=0;t<3;t+=1){const e=I.blocks[t]
j(e)}U=!1},d(t){t&&T(e),I.block.d(),I.token=null,I=null,X=!1,F(D)}}}const Nt="fsh_titanFilter"
function Rt(e,n,s){let{theTitans:a}=n,{titanRows:l}=n,o=!0,i=!0,r=!1,u=[]
const f=([t],[e])=>A(t,e),h=()=>M(Nt,{current:o,history:i,securable:r,titans:u}),d=({titanName:t})=>u.find((([e])=>e===t))[1],m=t=>t.active&&o,p=t=>!t.active&&i,g=t=>t.securable||!r
function b(t){return(m(t)||p(t))&&d(t)&&g(t)}function $([e,n]){const s=t(et(e.tr).rows),a=e.tr.rowIndex
s.slice(a,a+6).forEach((t=>st(t,!n))),e.visible=n}function T(){l.map((t=>[t,b(t)])).filter((([t,e])=>t.visible!==e)).forEach($)}function v(){h(),T()}return e.$$set=t=>{"theTitans"in t&&s(11,a=t.theTitans),"titanRows"in t&&s(12,l=t.titanRows)},[o,i,r,u,async function(){const t=await _(Nt)
t&&s(0,({current:o,history:i,securable:r,titans:u}=t),o,s(1,i),s(2,r),s(3,u)),s(3,u=w({...B(w(a).map((([t])=>[t,!0]))),...B(u.map((([t,e])=>[J(t),e])))}).sort(f)),T()},function(){c("TitanFilter","toggleCurrent"),v()},function(){c("TitanFilter","toggleHistory"),v()},function(){c("TitanFilter","toggleSecurable"),v()},function(){c("TitanFilter","toggleTitan"),v()},function(){c("TitanFilter","selectAll"),s(3,u=u.map((([t])=>[t,!0]))),v()},function(){c("TitanFilter","selectNone"),s(3,u=u.map((([t])=>[t,!1]))),v()},a,l,function(){o=this.checked,s(0,o)},function(){i=this.checked,s(1,i)},function(){r=this.checked,s(2,r)},function(t,e){t[e][1]=this.checked,s(3,u)}]}class St extends r{constructor(t){super(),u(this,t,Rt,xt,f,{theTitans:11,titanRows:12},null,[-1,-1])}}function jt(t){let e,n,s,a,c,l
return s=new gt({props:{theTitans:t[0]}}),c=new St({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=d("tr"),n=d("td"),H(s.$$.fragment),a=m(),H(c.$$.fragment),p(n,"colspan","3")},m(t,o){g(t,e,o),b(e,n),C(s,n,null),b(n,a),C(c,n,null),l=!0},p(t,[e]){const n={}
1&e&&(n.theTitans=t[0]),s.$set(n)
const a={}
1&e&&(a.theTitans=t[0]),2&e&&(a.titanRows=t[1]),c.$set(a)},i(t){l||(S(s.$$.fragment,t),S(c.$$.fragment,t),l=!0)},o(t){j(s.$$.fragment,t),j(c.$$.fragment,t),l=!1},d(t){t&&T(e),E(s),E(c)}}}function Ft(t,e,n){let{theTitans:s}=e,{titanRows:a}=e
return t.$$set=t=>{"theTitans"in t&&n(0,s=t.theTitans),"titanRows"in t&&n(1,a=t.titanRows)},[s,a]}class Ht extends r{constructor(t){super(),u(this,t,Ft,jt,f,{theTitans:0,titanRows:1})}}function Ct(t){const e=i(t.nextElementSibling.cells[0])
return{cooldownText:e,coolTime:(n=e,n?.includes("until")?tt(n.replace("Cooldown until: ","")):0),seen:"yes"}
var n}const Et=({titanName:t,tr:e})=>[t,Ct(e)]
function Lt(t,e){return B(w(t).map((([t,e])=>[J(t),e])).filter((([t])=>!e[t])).filter((([,t])=>t.coolTime>k())).map((([t,e])=>[t,{...e,seen:"no"}])))}async function _t(t,e){const n=function(t,e){const n=B(U(e,"titanName").map(Et))
return{...n,...t&&Lt(t,n)}}(await _("fsh_titans"),e)
t[0].rows.length>5&&function(t,e,n){new Ht({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}(t[0],n,e),M("fsh_titans",n)}function Bt(t){"A"===t.target.tagName&&c("scoutTower","realmLink")}function At(t){!function(t){const n=encodeURIComponent(t.titanName),[s]=t.tr.cells[0].children,a=O({href:`${q}creatures&search_name=${n}`,target:"_blank"})
e(a,(()=>{c("scoutTower","guideLink")})),P(a,s),P(t.tr.cells[0],a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function Mt(t){!function(t){t.active&&ft(t)}(t),At(t),function(t){const[,n]=t.tr.cells,s=i(n)
K(`<a href="${q}realms&search_name=${s}" target="_blank">${s}</a>`,n),e(n,Bt)}(t)}const Ut=t=>{return{guildKills:Number(i(t.cells[3])),hp:i(t.cells[2]),titanName:J((e=t,W(Q("img",e)))),tr:t,visible:!0}
var e},Xt=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Dt=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function It(){if(X())return
const t=D(G,I())
if(!t?.length)return
ut(t)
const e=(t=>V(t[1],4,0)?.map(Ut).map(Xt).map(Dt))(t)
e&&(e.forEach(Mt),_t(t,e))}export{It as default}
//# sourceMappingURL=injectScouttower-CaFTEE04.js.map
