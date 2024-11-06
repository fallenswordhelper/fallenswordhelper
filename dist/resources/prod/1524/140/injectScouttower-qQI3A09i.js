import{b0 as t,o as e,D as n,v as s,cE as a,s as l,a8 as c,S as o,L as r,M as i,N as u,O as f,P as h,Q as m,T as d,U as p,a0 as g,a1 as b,b6 as $,C as T,ap as k,a4 as v,X as w,be as y,bh as N,a2 as x,bj as j,bk as S,bl as R,a5 as C,aQ as L,f as B,bu as E,aS as H,w as F,aB as _,p as M,bV as A,d as I,aN as Q,n as U,i as X,q}from"./calfSystem-BhNMi9iJ.js"
import{d as D}from"./dataRows-Cr2TCDiw.js"
import{g as G}from"./getTitle-C1xil_UC.js"
import{a as K,g as O,t as P}from"./getTitanString-DvEb_zLX.js"
import{g as V}from"./getPlayerId-rgootfiD.js"
import{o as z}from"./openQuickBuffById-C0zbMYTE.js"
import{a as J}from"./roundToString-Hif1MLyB.js"
import{u as W}from"./uniq-_3HXbZK6.js"
import{p as Y}from"./parseDateAsTimestamp-n12WVTZQ.js"
import{h as Z,u as tt}from"./await_block-CDfjgofq.js"
import{c as et}from"./closestTable-CoKDvQ84.js"
import{L as nt}from"./LinkButtonBracketed-Bph_kZtg.js"
import{t as st}from"./toggleForce-br4z9gGd.js"
import"./fshOpen-AuKioUPF.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./dateUtc-FxFYRMRZ.js"
import"./LinkButton-CI-OQDBm.js"
const at=t=>V(t.cells[0].children[0].href)
function lt(t){const{target:e}=t
a("[b]",e)&&function(t){t.previousElementSibling&&(l("scout tower","buffIndividual"),z(V(t.previousElementSibling.href)))}(e),a("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,n=D(e,3,0).map(at).join()
l("scout tower","buffAll"),z(n)}(e)}function ct(t){n("fshBl",t.target)&&lt(t)}function ot(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function rt(t){D(t,3,0).forEach(ot),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function it(t,e){return t.rows.length>1&&e>1}function ut(n){n.length>2&&function(n){t(n).filter(it).forEach(rt),e(n[1],ct)}(n)}function ft(t){const e=t.hp.split("/")
var n,a,l
s(t.tr.cells[3],(n=Number(c(t.tr.cells[3])),a=Number(e[0]),l=Number(e[1]),`<br><span class="fshBlue"> (${J(K(l-a,n),2)}% Current <br>${J(100*n/l,2)}% Total<br>${O(n,l,a)})`))}function ht(t,e,n){const s=t.slice()
return s[4]=e[n][0],s[5]=e[n][1],s}function mt(t){let e,n,s,a,l,c,o
return{c(){e=f("tr"),n=f("td"),n.textContent=`${t[4]}`,s=h(),a=f("td"),a.textContent=`${t[5].cooldownText}`,l=h(),c=f("td"),c.textContent=`${t[5].seen}`,o=h(),m(n,"class","svelte-1g6lyd8"),m(a,"class","cd svelte-1g6lyd8"),m(c,"class","svelte-1g6lyd8")},m(t,r){d(t,e,r),p(e,n),p(e,s),p(e,a),p(e,l),p(e,c),p(e,o)},p:g,d(t){t&&b(e)}}}function dt(t){let e,n,s,a,l=u(t[0]()),c=[]
for(let e=0;e<l.length;e+=1)c[e]=mt(ht(t,l,e))
return{c(){e=f("table"),n=f("tbody"),s=f("tr"),s.innerHTML='<td class="header svelte-1g6lyd8">Titan</td> <td class="header svelte-1g6lyd8">Cooldown</td> <td class="header svelte-1g6lyd8">Visible</td>',a=h()
for(let t=0;t<c.length;t+=1)c[t].c()
m(e,"class","svelte-1g6lyd8")},m(t,l){d(t,e,l),p(e,n),p(n,s),p(n,a)
for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(n,null)},p(t,[e]){if(1&e){let s
for(l=u(t[0]()),s=0;s<l.length;s+=1){const a=ht(t,l,s)
c[s]?c[s].p(a,e):(c[s]=mt(a),c[s].c(),c[s].m(n,null))}for(;s<c.length;s+=1)c[s].d(1)
c.length=l.length}},i:g,o:g,d(t){t&&b(e),$(c,t)}}}function pt(t,e,n){let{theTitans:s}=e
const a=([,t])=>t.coolTime>k(),l=([,t],[,e])=>t.coolTime-e.coolTime
return t.$$set=t=>{"theTitans"in t&&n(1,s=t.theTitans)},[()=>T(s).filter(a).sort(l),s]}class gt extends o{constructor(t){super(),r(this,t,pt,dt,i,{theTitans:1})}}function bt(t,e,n){const s=t.slice()
return s[29]=e[n][0],s[30]=e[n][1],s[31]=e,s[32]=n,s}function $t(t){return{c:g,m:g,p:g,i:g,o:g,d:g}}function Tt(t){let e,n,s,a,l,c,o,r=u(t[3]),i=[]
for(let e=0;e<r.length;e+=1)i[e]=kt(bt(t,r,e))
return a=new nt({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),a.$on("click",t[9]),c=new nt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),c.$on("click",t[10]),{c(){e=f("div")
for(let t=0;t<i.length;t+=1)i[t].c()
n=h(),s=f("div"),j(a.$$.fragment),l=h(),j(c.$$.fragment),m(e,"id","titan-list"),m(e,"class","svelte-1s0h251"),m(s,"class","svelte-1s0h251")},m(t,r){d(t,e,r)
for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,null)
d(t,n,r),d(t,s,r),S(a,s,null),p(s,l),S(c,s,null),o=!0},p(t,n){if(264&n[0]){let s
for(r=u(t[3]),s=0;s<r.length;s+=1){const a=bt(t,r,s)
i[s]?i[s].p(a,n):(i[s]=kt(a),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1)
i.length=r.length}const s={}
4&n[1]&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)
const l={}
4&n[1]&&(l.$$scope={dirty:n,ctx:t}),c.$set(l)},i(t){o||(y(a.$$.fragment,t),y(c.$$.fragment,t),o=!0)},o(t){N(a.$$.fragment,t),N(c.$$.fragment,t),o=!1},d(t){t&&(b(e),b(n),b(s)),$(i,t),R(a),R(c)}}}function kt(t){let e,n,s,a,l,c,o,r=t[29]+""
function i(){t[16].call(n,t[31],t[32])}return{c(){e=f("label"),n=f("input"),s=h(),a=v(r),l=h(),m(n,"type","checkbox"),m(e,"class","svelte-1s0h251")},m(r,u){d(r,e,u),p(e,n),n.checked=t[30],p(e,s),p(e,a),d(r,l,u),c||(o=[w(n,"change",i),w(n,"change",t[8])],c=!0)},p(e,s){t=e,8&s[0]&&(n.checked=t[30]),8&s[0]&&r!==(r=t[29]+"")&&C(a,r)},d(t){t&&(b(e),b(l)),c=!1,x(o)}}}function vt(t){let e
return{c(){e=v("Select All")},m(t,n){d(t,e,n)},d(t){t&&b(e)}}}function wt(t){let e
return{c(){e=v("Select None")},m(t,n){d(t,e,n)},d(t){t&&b(e)}}}function yt(t){return{c:g,m:g,p:g,i:g,o:g,d:g}}function Nt(t){let e,n,s,a,l,c,o,r,i,u,g,$,T,k,j,S,R,C,L,B,E,H,F,_,M,A,I,Q={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:Tt,catch:$t,blocks:[,,,]}
return Z(t[4](),Q),{c(){e=f("table"),n=f("tbody"),s=f("tr"),s.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',a=h(),l=f("tr"),c=f("td"),o=f("label"),r=f("input"),i=v("\n          Current"),u=h(),g=f("label"),$=f("input"),T=v("\n          History"),k=h(),j=f("label"),S=f("input"),R=v("\n          Securable"),C=h(),L=f("tr"),L.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',B=h(),E=f("tr"),H=f("td"),Q.block.c(),F=h(),_=f("tr"),_.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',m(r,"type","checkbox"),m(o,"class","svelte-1s0h251"),m($,"type","checkbox"),m(g,"class","svelte-1s0h251"),m(S,"type","checkbox"),m(j,"class","svelte-1s0h251"),m(c,"colspan","3"),m(c,"class","svelte-1s0h251"),m(H,"colspan","3"),m(H,"class","svelte-1s0h251"),m(e,"class","svelte-1s0h251")},m(f,h){d(f,e,h),p(e,n),p(n,s),p(n,a),p(n,l),p(l,c),p(c,o),p(o,r),r.checked=t[0],p(o,i),p(c,u),p(c,g),p(g,$),$.checked=t[1],p(g,T),p(c,k),p(c,j),p(j,S),S.checked=t[2],p(j,R),p(n,C),p(n,L),p(n,B),p(n,E),p(E,H),Q.block.m(H,Q.anchor=null),Q.mount=()=>H,Q.anchor=null,p(n,F),p(n,_),M=!0,A||(I=[w(r,"change",t[13]),w(r,"change",t[5]),w($,"change",t[14]),w($,"change",t[6]),w(S,"change",t[15]),w(S,"change",t[7])],A=!0)},p(e,n){t=e,1&n[0]&&(r.checked=t[0]),2&n[0]&&($.checked=t[1]),4&n[0]&&(S.checked=t[2]),tt(Q,t,n)},i(t){M||(y(Q.block),M=!0)},o(t){for(let t=0;t<3;t+=1){const e=Q.blocks[t]
N(e)}M=!1},d(t){t&&b(e),Q.block.d(),Q.token=null,Q=null,A=!1,x(I)}}}const xt="fsh_titanFilter"
function jt(e,n,s){let{theTitans:a}=n,{titanRows:c}=n,o=!0,r=!0,i=!1,u=[]
const f=([t],[e])=>E(t,e),h=()=>H(xt,{current:o,history:r,securable:i,titans:u}),m=({titanName:t})=>u.find((([e])=>e===t))[1],d=t=>t.active&&o,p=t=>!t.active&&r,g=t=>t.securable||!i
function b(t){return(d(t)||p(t))&&m(t)&&g(t)}function $([e,n]){const s=t(et(e.tr).rows),a=e.tr.rowIndex
s.slice(a,a+6).forEach((t=>st(t,!n))),e.visible=n}function k(){c.map((t=>[t,b(t)])).filter((([t,e])=>t.visible!==e)).forEach($)}function v(){h(),k()}return e.$$set=t=>{"theTitans"in t&&s(11,a=t.theTitans),"titanRows"in t&&s(12,c=t.titanRows)},[o,r,i,u,async function(){const t=await L(xt)
t&&s(0,({current:o,history:r,securable:i,titans:u}=t),o,s(1,r),s(2,i),s(3,u)),s(3,u=T({...B(T(a).map((([t])=>[t,!0]))),...B(u.map((([t,e])=>[P(t),e])))}).sort(f)),k()},function(){l("TitanFilter","toggleCurrent"),v()},function(){l("TitanFilter","toggleHistory"),v()},function(){l("TitanFilter","toggleSecurable"),v()},function(){l("TitanFilter","toggleTitan"),v()},function(){l("TitanFilter","selectAll"),s(3,u=u.map((([t])=>[t,!0]))),v()},function(){l("TitanFilter","selectNone"),s(3,u=u.map((([t])=>[t,!1]))),v()},a,c,function(){o=this.checked,s(0,o)},function(){r=this.checked,s(1,r)},function(){i=this.checked,s(2,i)},function(t,e){t[e][1]=this.checked,s(3,u)}]}class St extends o{constructor(t){super(),r(this,t,jt,Nt,i,{theTitans:11,titanRows:12},null,[-1,-1])}}function Rt(t){let e,n,s,a,l,c
return s=new gt({props:{theTitans:t[0]}}),l=new St({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=f("tr"),n=f("td"),j(s.$$.fragment),a=h(),j(l.$$.fragment),m(n,"colspan","3")},m(t,o){d(t,e,o),p(e,n),S(s,n,null),p(n,a),S(l,n,null),c=!0},p(t,[e]){const n={}
1&e&&(n.theTitans=t[0]),s.$set(n)
const a={}
1&e&&(a.theTitans=t[0]),2&e&&(a.titanRows=t[1]),l.$set(a)},i(t){c||(y(s.$$.fragment,t),y(l.$$.fragment,t),c=!0)},o(t){N(s.$$.fragment,t),N(l.$$.fragment,t),c=!1},d(t){t&&b(e),R(s),R(l)}}}function Ct(t,e,n){let{theTitans:s}=e,{titanRows:a}=e
return t.$$set=t=>{"theTitans"in t&&n(0,s=t.theTitans),"titanRows"in t&&n(1,a=t.titanRows)},[s,a]}class Lt extends o{constructor(t){super(),r(this,t,Ct,Rt,i,{theTitans:0,titanRows:1})}}function Bt(t){const e=c(t.nextElementSibling.cells[0])
return{cooldownText:e,coolTime:(n=e,n?.includes("until")?Y(n.replace("Cooldown until: ","")):0),seen:"yes"}
var n}const Et=({titanName:t,tr:e})=>[t,Bt(e)]
function Ht(t,e){return B(T(t).map((([t,e])=>[P(t),e])).filter((([t])=>!e[t])).filter((([,t])=>t.coolTime>k())).map((([t,e])=>[t,{...e,seen:"no"}])))}async function Ft(t,e){const n=function(t,e){const n=B(W(e,"titanName").map(Et))
return{...n,...t&&Ht(t,n)}}(await L("fsh_titans"),e)
t[0].rows.length>5&&function(t,e,n){new Lt({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}(t[0],n,e),H("fsh_titans",n)}function _t(t){"A"===t.target.tagName&&l("scoutTower","realmLink")}function Mt(t){!function(t){const n=encodeURIComponent(t.titanName),[s]=t.tr.cells[0].children,a=U({href:`${Q}creatures&search_name=${n}`,target:"_blank"})
e(a,(()=>{l("scoutTower","guideLink")})),X(a,s),X(t.tr.cells[0],a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function At(t){!function(t){t.active&&ft(t)}(t),Mt(t),function(t){const[,n]=t.tr.cells,s=c(n)
I(`<a href="${Q}realms&search_name=${s}" target="_blank">${s}</a>`,n),e(n,_t)}(t)}const It=t=>{return{guildKills:Number(c(t.cells[3])),hp:c(t.cells[2]),titanName:P((e=t,G(q("img",e)))),tr:t,visible:!0}
var e},Qt=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Ut=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Xt(){if(F())return
const t=_(A,M())
if(!t?.length)return
ut(t)
const e=(t=>D(t[1],4,0)?.map(It).map(Qt).map(Ut))(t)
e&&(e.forEach(At),Ft(t,e))}export{Xt as default}
//# sourceMappingURL=injectScouttower-qQI3A09i.js.map
