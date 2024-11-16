import{b0 as t,v as e,e as n,D as s,cE as a,s as c,a8 as l,S as o,L as r,M as i,N as u,O as f,Z as h,R as m,T as d,U as p,W as g,X as b,b9 as $,C as T,ap as v,Y as w,P as k,a2 as y,V as N,be as x,bf as j,bg as R,bh as S,bi as L,aQ as C,f as B,bw as E,aS as H,w as F,aB as _,p as M,bV as A,q as I,l as U,aL as V,i as X,c as q}from"./calfSystem-Blt4DbaE.js"
import{d as D}from"./dataRows-B6_VtVvQ.js"
import{g as G}from"./getTitle-C1xil_UC.js"
import{g as K,a as O,t as P}from"./getTitanString-BJW-Vzfl.js"
import{g as Q}from"./getPlayerId-Ck17Fcst.js"
import{o as z}from"./openQuickBuffById-AG7prqnJ.js"
import{a as W}from"./roundToString-Hif1MLyB.js"
import{u as Y}from"./uniq-D422dDMJ.js"
import{p as Z}from"./parseDateAsTimestamp-CKw0dWec.js"
import{h as J,u as tt}from"./await_block-Bf7EOqQ9.js"
import{c as et}from"./closestTable-Ddgm5m0P.js"
import{L as nt}from"./LinkButtonBracketed-C9l9Kpoo.js"
import{t as st}from"./toggleForce-br4z9gGd.js"
import"./fshOpen-AuKioUPF.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./dateUtc-Cc3l2wc4.js"
import"./LinkButton-CTQrdC0s.js"
const at=t=>Q(t.cells[0].children[0].href)
function ct(t){const{target:e}=t
a("[b]",e)&&function(t){t.previousElementSibling&&(c("scout tower","buffIndividual"),z(Q(t.previousElementSibling.href)))}(e),a("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,n=D(e,3,0).map(at).join()
c("scout tower","buffAll"),z(n)}(e)}function lt(t){s("fshBl",t.target)&&ct(t)}function ot(t){e(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function rt(t){D(t,3,0).forEach(ot),e(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function it(t,e){return t.rows.length>1&&e>1}function ut(e){e.length>2&&function(e){t(e).filter(it).forEach(rt),n(e[1],lt)}(e)}function ft(t){const n=t.hp.split("/")
var s,a,c
e(t.tr.cells[3],(s=Number(l(t.tr.cells[3])),a=Number(n[0]),c=Number(n[1]),`<br><span class="fshBlue"> (${W(K(c-a,s),2)}% Current <br>${W(100*s/c,2)}% Total<br>${O(s,c,a)})`))}function ht(t,e,n){const s=t.slice()
return s[4]=e[n][0],s[5]=e[n][1],s}function mt(t){let e,n,s,a,c,l,o
return{c(){e=p("tr"),n=p("td"),n.textContent=`${t[4]}`,s=g(),a=p("td"),a.textContent=`${t[5].cooldownText}`,c=g(),l=p("td"),l.textContent=`${t[5].seen}`,o=g(),b(n,"class","svelte-1g6lyd8"),b(a,"class","cd svelte-1g6lyd8"),b(l,"class","svelte-1g6lyd8")},m(t,r){m(t,e,r),d(e,n),d(e,s),d(e,a),d(e,c),d(e,l),d(e,o)},p:h,d(t){t&&f(e)}}}function dt(t){let e,n,s,a,c=u(t[0]()),l=[]
for(let e=0;e<c.length;e+=1)l[e]=mt(ht(t,c,e))
return{c(){e=p("table"),n=p("tbody"),s=p("tr"),s.innerHTML='<td class="header svelte-1g6lyd8">Titan</td> <td class="header svelte-1g6lyd8">Cooldown</td> <td class="header svelte-1g6lyd8">Visible</td>',a=g()
for(let t=0;t<l.length;t+=1)l[t].c()
b(e,"class","svelte-1g6lyd8")},m(t,c){m(t,e,c),d(e,n),d(n,s),d(n,a)
for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(t,[e]){if(1&e){let s
for(c=u(t[0]()),s=0;s<c.length;s+=1){const a=ht(t,c,s)
l[s]?l[s].p(a,e):(l[s]=mt(a),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1)
l.length=c.length}},i:h,o:h,d(t){t&&f(e),$(l,t)}}}function pt(t,e,n){let{theTitans:s}=e
const a=([,t])=>t.coolTime>v(),c=([,t],[,e])=>t.coolTime-e.coolTime
return t.$$set=t=>{"theTitans"in t&&n(1,s=t.theTitans)},[()=>T(s).filter(a).sort(c),s]}class gt extends o{constructor(t){super(),r(this,t,pt,dt,i,{theTitans:1})}}function bt(t,e,n){const s=t.slice()
return s[29]=e[n][0],s[30]=e[n][1],s[31]=e,s[32]=n,s}function $t(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function Tt(t){let e,n,s,a,c,l,o,r=u(t[3]),i=[]
for(let e=0;e<r.length;e+=1)i[e]=vt(bt(t,r,e))
return a=new nt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),a.$on("click",t[9]),l=new nt({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),l.$on("click",t[10]),{c(){e=p("div")
for(let t=0;t<i.length;t+=1)i[t].c()
n=g(),s=p("div"),L(a.$$.fragment),c=g(),L(l.$$.fragment),b(e,"id","titan-list"),b(e,"class","svelte-1s0h251"),b(s,"class","svelte-1s0h251")},m(t,r){m(t,e,r)
for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,null)
m(t,n,r),m(t,s,r),S(a,s,null),d(s,c),S(l,s,null),o=!0},p(t,n){if(264&n[0]){let s
for(r=u(t[3]),s=0;s<r.length;s+=1){const a=bt(t,r,s)
i[s]?i[s].p(a,n):(i[s]=vt(a),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1)
i.length=r.length}const s={}
4&n[1]&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)
const c={}
4&n[1]&&(c.$$scope={dirty:n,ctx:t}),l.$set(c)},i(t){o||(R(a.$$.fragment,t),R(l.$$.fragment,t),o=!0)},o(t){j(a.$$.fragment,t),j(l.$$.fragment,t),o=!1},d(t){t&&(f(e),f(n),f(s)),$(i,t),x(a),x(l)}}}function vt(t){let e,n,s,a,c,l,o,r=t[29]+""
function i(){t[16].call(n,t[31],t[32])}return{c(){e=p("label"),n=p("input"),s=g(),a=N(r),c=g(),b(n,"type","checkbox"),b(e,"class","svelte-1s0h251")},m(r,u){m(r,e,u),d(e,n),n.checked=t[30],d(e,s),d(e,a),m(r,c,u),l||(o=[y(n,"change",i),y(n,"change",t[8])],l=!0)},p(e,s){t=e,8&s[0]&&(n.checked=t[30]),8&s[0]&&r!==(r=t[29]+"")&&k(a,r)},d(t){t&&(f(e),f(c)),l=!1,w(o)}}}function wt(t){let e
return{c(){e=N("Select All")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function kt(t){let e
return{c(){e=N("Select None")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function yt(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function Nt(t){let e,n,s,a,c,l,o,r,i,u,h,$,T,v,k,x,S,L,C,B,E,H,F,_,M,A,I,U={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:Tt,catch:$t,blocks:[,,,]}
return J(t[4](),U),{c(){e=p("table"),n=p("tbody"),s=p("tr"),s.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',a=g(),c=p("tr"),l=p("td"),o=p("label"),r=p("input"),i=N("\n          Current"),u=g(),h=p("label"),$=p("input"),T=N("\n          History"),v=g(),k=p("label"),x=p("input"),S=N("\n          Securable"),L=g(),C=p("tr"),C.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',B=g(),E=p("tr"),H=p("td"),U.block.c(),F=g(),_=p("tr"),_.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',b(r,"type","checkbox"),b(o,"class","svelte-1s0h251"),b($,"type","checkbox"),b(h,"class","svelte-1s0h251"),b(x,"type","checkbox"),b(k,"class","svelte-1s0h251"),b(l,"colspan","3"),b(l,"class","svelte-1s0h251"),b(H,"colspan","3"),b(H,"class","svelte-1s0h251"),b(e,"class","svelte-1s0h251")},m(f,p){m(f,e,p),d(e,n),d(n,s),d(n,a),d(n,c),d(c,l),d(l,o),d(o,r),r.checked=t[0],d(o,i),d(l,u),d(l,h),d(h,$),$.checked=t[1],d(h,T),d(l,v),d(l,k),d(k,x),x.checked=t[2],d(k,S),d(n,L),d(n,C),d(n,B),d(n,E),d(E,H),U.block.m(H,U.anchor=null),U.mount=()=>H,U.anchor=null,d(n,F),d(n,_),M=!0,A||(I=[y(r,"change",t[13]),y(r,"change",t[5]),y($,"change",t[14]),y($,"change",t[6]),y(x,"change",t[15]),y(x,"change",t[7])],A=!0)},p(e,n){t=e,1&n[0]&&(r.checked=t[0]),2&n[0]&&($.checked=t[1]),4&n[0]&&(x.checked=t[2]),tt(U,t,n)},i(t){M||(R(U.block),M=!0)},o(t){for(let t=0;t<3;t+=1){const e=U.blocks[t]
j(e)}M=!1},d(t){t&&f(e),U.block.d(),U.token=null,U=null,A=!1,w(I)}}}const xt="fsh_titanFilter"
function jt(e,n,s){let{theTitans:a}=n,{titanRows:l}=n,o=!0,r=!0,i=!1,u=[]
const f=([t],[e])=>E(t,e),h=()=>H(xt,{current:o,history:r,securable:i,titans:u}),m=({titanName:t})=>u.find((([e])=>e===t))[1],d=t=>t.active&&o,p=t=>!t.active&&r,g=t=>t.securable||!i
function b(t){return(d(t)||p(t))&&m(t)&&g(t)}function $([e,n]){const s=t(et(e.tr).rows),a=e.tr.rowIndex
s.slice(a,a+6).forEach((t=>st(t,!n))),e.visible=n}function v(){l.map((t=>[t,b(t)])).filter((([t,e])=>t.visible!==e)).forEach($)}function w(){h(),v()}return e.$$set=t=>{"theTitans"in t&&s(11,a=t.theTitans),"titanRows"in t&&s(12,l=t.titanRows)},[o,r,i,u,async function(){const t=await C(xt)
t&&s(0,({current:o,history:r,securable:i,titans:u}=t),o,s(1,r),s(2,i),s(3,u)),s(3,u=T({...B(T(a).map((([t])=>[t,!0]))),...B(u.map((([t,e])=>[P(t),e])))}).sort(f)),v()},function(){c("TitanFilter","toggleCurrent"),w()},function(){c("TitanFilter","toggleHistory"),w()},function(){c("TitanFilter","toggleSecurable"),w()},function(){c("TitanFilter","toggleTitan"),w()},function(){c("TitanFilter","selectAll"),s(3,u=u.map((([t])=>[t,!0]))),w()},function(){c("TitanFilter","selectNone"),s(3,u=u.map((([t])=>[t,!1]))),w()},a,l,function(){o=this.checked,s(0,o)},function(){r=this.checked,s(1,r)},function(){i=this.checked,s(2,i)},function(t,e){t[e][1]=this.checked,s(3,u)}]}class Rt extends o{constructor(t){super(),r(this,t,jt,Nt,i,{theTitans:11,titanRows:12},null,[-1,-1])}}function St(t){let e,n,s,a,c,l
return s=new gt({props:{theTitans:t[0]}}),c=new Rt({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=p("tr"),n=p("td"),L(s.$$.fragment),a=g(),L(c.$$.fragment),b(n,"colspan","3")},m(t,o){m(t,e,o),d(e,n),S(s,n,null),d(n,a),S(c,n,null),l=!0},p(t,[e]){const n={}
1&e&&(n.theTitans=t[0]),s.$set(n)
const a={}
1&e&&(a.theTitans=t[0]),2&e&&(a.titanRows=t[1]),c.$set(a)},i(t){l||(R(s.$$.fragment,t),R(c.$$.fragment,t),l=!0)},o(t){j(s.$$.fragment,t),j(c.$$.fragment,t),l=!1},d(t){t&&f(e),x(s),x(c)}}}function Lt(t,e,n){let{theTitans:s}=e,{titanRows:a}=e
return t.$$set=t=>{"theTitans"in t&&n(0,s=t.theTitans),"titanRows"in t&&n(1,a=t.titanRows)},[s,a]}class Ct extends o{constructor(t){super(),r(this,t,Lt,St,i,{theTitans:0,titanRows:1})}}function Bt(t){const e=l(t.nextElementSibling.cells[0])
return{cooldownText:e,coolTime:(n=e,n?.includes("until")?Z(n.replace("Cooldown until: ","")):0),seen:"yes"}
var n}const Et=({titanName:t,tr:e})=>[t,Bt(e)]
function Ht(t,e){return B(T(t).map((([t,e])=>[P(t),e])).filter((([t])=>!e[t])).filter((([,t])=>t.coolTime>v())).map((([t,e])=>[t,{...e,seen:"no"}])))}async function Ft(t,e){const n=function(t,e){const n=B(Y(e,"titanName").map(Et))
return{...n,...t&&Ht(t,n)}}(await C("fsh_titans"),e)
t[0].rows.length>5&&function(t,e,n){new Ct({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}(t[0],n,e),H("fsh_titans",n)}function _t(t){"A"===t.target.tagName&&c("scoutTower","realmLink")}function Mt(t){!function(t){const e=encodeURIComponent(t.titanName),[s]=t.tr.cells[0].children,a=U({href:`${V}creatures&search_name=${e}`,target:"_blank"})
n(a,(()=>{c("scoutTower","guideLink")})),X(a,s),X(t.tr.cells[0],a)}(t),function(t){e(t.tr.cells[0],t.titanName)}(t)}function At(t){!function(t){t.active&&ft(t)}(t),Mt(t),function(t){const[,e]=t.tr.cells,s=l(e)
q(`<a href="${V}realms&search_name=${s}" target="_blank">${s}</a>`,e),n(e,_t)}(t)}const It=t=>{return{guildKills:Number(l(t.cells[3])),hp:l(t.cells[2]),titanName:P((e=t,G(I("img",e)))),tr:t,visible:!0}
var e},Ut=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Vt=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Xt(){if(F())return
const t=_(A,M())
if(!t?.length)return
ut(t)
const e=(t=>D(t[1],4,0)?.map(It).map(Ut).map(Vt))(t)
e&&(e.forEach(At),Ft(t,e))}export{Xt as default}
//# sourceMappingURL=injectScouttower-vZA4yng_.js.map
