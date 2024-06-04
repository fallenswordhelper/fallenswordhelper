import{a_ as t,o as e,D as n,v as s,cx as a,s as c,a8 as l,S as o,L as r,M as i,N as u,O as f,P as h,Q as m,T as d,U as p,_ as g,a0 as b,b4 as $,C as T,a3 as v,X as w,bc as k,bf as y,a1 as N,bh as j,bi as x,bj as R,a4 as S,aO as C,f as L,bs as _,aQ as B,w as E,az as H,p as F,bP as I,d as M,aM as A,n as O,i as P,q as D}from"./calfSystem-wTzwei3t.js"
import{d as K}from"./dataRows-DqF7itiP.js"
import{g as Q}from"./getTitle-C1xil_UC.js"
import{a as U,g as X,t as q}from"./getTitanString-DvEb_zLX.js"
import{g as z}from"./getPlayerId-DXzgWTxI.js"
import{o as V}from"./openQuickBuffById-BBtUx2eO.js"
import{a as G}from"./roundToString-Hif1MLyB.js"
import{u as J}from"./uniq-DVbNgEcn.js"
import{n as W}from"./now-Cx4PsKjI.js"
import{p as Y}from"./parseDateAsTimestamp-CE0jGIOF.js"
import{h as Z,u as tt}from"./await_block-li3cZU_q.js"
import{c as et}from"./closestTable-D1tzatJG.js"
import{L as nt}from"./LinkButtonBracketed-B_e7MAq0.js"
import{t as st}from"./toggleForce-br4z9gGd.js"
import"./fshOpen-AuKioUPF.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./dateUtc-p1OOejM8.js"
import"./LinkButton-CJ-gy4K4.js"
const at=t=>z(t.cells[0].children[0].href)
function ct(t){const{target:e}=t
a("[b]",e)&&function(t){t.previousElementSibling&&(c("scout tower","buffIndividual"),V(z(t.previousElementSibling.href)))}(e),a("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,n=K(e,3,0).map(at).join()
c("scout tower","buffAll"),V(n)}(e)}function lt(t){n("fshBl",t.target)&&ct(t)}function ot(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function rt(t){K(t,3,0).forEach(ot),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function it(t,e){return t.rows.length>1&&e>1}function ut(n){n.length>2&&function(n){t(n).filter(it).forEach(rt),e(n[1],lt)}(n)}function ft(t){const e=t.hp.split("/")
var n,a,c
s(t.tr.cells[3],(n=Number(l(t.tr.cells[3])),a=Number(e[0]),c=Number(e[1]),`<br><span class="fshBlue"> (${G(U(c-a,n),2)}% Current <br>${G(100*n/c,2)}% Total<br>${X(n,c,a)})`))}function ht(t,e,n){const s=t.slice()
return s[4]=e[n][0],s[5]=e[n][1],s}function mt(t){let e,n,s,a,c,l,o
return{c(){e=f("tr"),n=f("td"),n.textContent=`${t[4]}`,s=h(),a=f("td"),a.textContent=`${t[5].cooldownText}`,c=h(),l=f("td"),l.textContent=`${t[5].seen}`,o=h(),m(n,"class","svelte-1g6lyd8"),m(a,"class","cd svelte-1g6lyd8"),m(l,"class","svelte-1g6lyd8")},m(t,r){d(t,e,r),p(e,n),p(e,s),p(e,a),p(e,c),p(e,l),p(e,o)},p:g,d(t){t&&b(e)}}}function dt(t){let e,n,s,a,c=u(t[0]()),l=[]
for(let e=0;e<c.length;e+=1)l[e]=mt(ht(t,c,e))
return{c(){e=f("table"),n=f("tbody"),s=f("tr"),s.innerHTML='<td class="header svelte-1g6lyd8">Titan</td> <td class="header svelte-1g6lyd8">Cooldown</td> <td class="header svelte-1g6lyd8">Visible</td>',a=h()
for(let t=0;t<l.length;t+=1)l[t].c()
m(e,"class","svelte-1g6lyd8")},m(t,c){d(t,e,c),p(e,n),p(n,s),p(n,a)
for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(t,[e]){if(1&e){let s
for(c=u(t[0]()),s=0;s<c.length;s+=1){const a=ht(t,c,s)
l[s]?l[s].p(a,e):(l[s]=mt(a),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1)
l.length=c.length}},i:g,o:g,d(t){t&&b(e),$(l,t)}}}function pt(t,e,n){let{theTitans:s}=e
const a=([,t])=>t.coolTime>W(),c=([,t],[,e])=>t.coolTime-e.coolTime
return t.$$set=t=>{"theTitans"in t&&n(1,s=t.theTitans)},[()=>T(s).filter(a).sort(c),s]}class gt extends o{constructor(t){super(),r(this,t,pt,dt,i,{theTitans:1})}}function bt(t,e,n){const s=t.slice()
return s[29]=e[n][0],s[30]=e[n][1],s[31]=e,s[32]=n,s}function $t(t){return{c:g,m:g,p:g,i:g,o:g,d:g}}function Tt(t){let e,n,s,a,c,l,o,r=u(t[3]),i=[]
for(let e=0;e<r.length;e+=1)i[e]=vt(bt(t,r,e))
return a=new nt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),a.$on("click",t[9]),l=new nt({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),l.$on("click",t[10]),{c(){e=f("div")
for(let t=0;t<i.length;t+=1)i[t].c()
n=h(),s=f("div"),j(a.$$.fragment),c=h(),j(l.$$.fragment),m(e,"id","titan-list"),m(e,"class","svelte-1s0h251"),m(s,"class","svelte-1s0h251")},m(t,r){d(t,e,r)
for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,null)
d(t,n,r),d(t,s,r),x(a,s,null),p(s,c),x(l,s,null),o=!0},p(t,n){if(264&n[0]){let s
for(r=u(t[3]),s=0;s<r.length;s+=1){const a=bt(t,r,s)
i[s]?i[s].p(a,n):(i[s]=vt(a),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1)
i.length=r.length}const s={}
4&n[1]&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)
const c={}
4&n[1]&&(c.$$scope={dirty:n,ctx:t}),l.$set(c)},i(t){o||(k(a.$$.fragment,t),k(l.$$.fragment,t),o=!0)},o(t){y(a.$$.fragment,t),y(l.$$.fragment,t),o=!1},d(t){t&&(b(e),b(n),b(s)),$(i,t),R(a),R(l)}}}function vt(t){let e,n,s,a,c,l,o,r=t[29]+""
function i(){t[16].call(n,t[31],t[32])}return{c(){e=f("label"),n=f("input"),s=h(),a=v(r),c=h(),m(n,"type","checkbox"),m(e,"class","svelte-1s0h251")},m(r,u){d(r,e,u),p(e,n),n.checked=t[30],p(e,s),p(e,a),d(r,c,u),l||(o=[w(n,"change",i),w(n,"change",t[8])],l=!0)},p(e,s){t=e,8&s[0]&&(n.checked=t[30]),8&s[0]&&r!==(r=t[29]+"")&&S(a,r)},d(t){t&&(b(e),b(c)),l=!1,N(o)}}}function wt(t){let e
return{c(){e=v("Select All")},m(t,n){d(t,e,n)},d(t){t&&b(e)}}}function kt(t){let e
return{c(){e=v("Select None")},m(t,n){d(t,e,n)},d(t){t&&b(e)}}}function yt(t){return{c:g,m:g,p:g,i:g,o:g,d:g}}function Nt(t){let e,n,s,a,c,l,o,r,i,u,g,$,T,j,x,R,S,C,L,_,B,E,H,F,I,M,A,O={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:Tt,catch:$t,blocks:[,,,]}
return Z(t[4](),O),{c(){e=f("table"),n=f("tbody"),s=f("tr"),s.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',a=h(),c=f("tr"),l=f("td"),o=f("label"),r=f("input"),i=v("\n          Current"),u=h(),g=f("label"),$=f("input"),T=v("\n          History"),j=h(),x=f("label"),R=f("input"),S=v("\n          Securable"),C=h(),L=f("tr"),L.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',_=h(),B=f("tr"),E=f("td"),O.block.c(),H=h(),F=f("tr"),F.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',m(r,"type","checkbox"),m(o,"class","svelte-1s0h251"),m($,"type","checkbox"),m(g,"class","svelte-1s0h251"),m(R,"type","checkbox"),m(x,"class","svelte-1s0h251"),m(l,"colspan","3"),m(l,"class","svelte-1s0h251"),m(E,"colspan","3"),m(E,"class","svelte-1s0h251"),m(e,"class","svelte-1s0h251")},m(f,h){d(f,e,h),p(e,n),p(n,s),p(n,a),p(n,c),p(c,l),p(l,o),p(o,r),r.checked=t[0],p(o,i),p(l,u),p(l,g),p(g,$),$.checked=t[1],p(g,T),p(l,j),p(l,x),p(x,R),R.checked=t[2],p(x,S),p(n,C),p(n,L),p(n,_),p(n,B),p(B,E),O.block.m(E,O.anchor=null),O.mount=()=>E,O.anchor=null,p(n,H),p(n,F),I=!0,M||(A=[w(r,"change",t[13]),w(r,"change",t[5]),w($,"change",t[14]),w($,"change",t[6]),w(R,"change",t[15]),w(R,"change",t[7])],M=!0)},p(e,n){t=e,1&n[0]&&(r.checked=t[0]),2&n[0]&&($.checked=t[1]),4&n[0]&&(R.checked=t[2]),tt(O,t,n)},i(t){I||(k(O.block),I=!0)},o(t){for(let t=0;t<3;t+=1){const e=O.blocks[t]
y(e)}I=!1},d(t){t&&b(e),O.block.d(),O.token=null,O=null,M=!1,N(A)}}}const jt="fsh_titanFilter"
function xt(e,n,s){let{theTitans:a}=n,{titanRows:l}=n,o=!0,r=!0,i=!1,u=[]
const f=([t],[e])=>_(t,e),h=()=>B(jt,{current:o,history:r,securable:i,titans:u}),m=({titanName:t})=>u.find((([e])=>e===t))[1],d=t=>t.active&&o,p=t=>!t.active&&r,g=t=>t.securable||!i
function b(t){return(d(t)||p(t))&&m(t)&&g(t)}function $([e,n]){const s=t(et(e.tr).rows),a=e.tr.rowIndex
s.slice(a,a+6).forEach((t=>st(t,!n))),e.visible=n}function v(){l.map((t=>[t,b(t)])).filter((([t,e])=>t.visible!==e)).forEach($)}function w(){h(),v()}return e.$$set=t=>{"theTitans"in t&&s(11,a=t.theTitans),"titanRows"in t&&s(12,l=t.titanRows)},[o,r,i,u,async function(){const t=await C(jt)
t&&s(0,({current:o,history:r,securable:i,titans:u}=t),o,s(1,r),s(2,i),s(3,u)),s(3,u=T({...L(T(a).map((([t])=>[t,!0]))),...L(u.map((([t,e])=>[q(t),e])))}).sort(f)),v()},function(){c("TitanFilter","toggleCurrent"),w()},function(){c("TitanFilter","toggleHistory"),w()},function(){c("TitanFilter","toggleSecurable"),w()},function(){c("TitanFilter","toggleTitan"),w()},function(){c("TitanFilter","selectAll"),s(3,u=u.map((([t])=>[t,!0]))),w()},function(){c("TitanFilter","selectNone"),s(3,u=u.map((([t])=>[t,!1]))),w()},a,l,function(){o=this.checked,s(0,o)},function(){r=this.checked,s(1,r)},function(){i=this.checked,s(2,i)},function(t,e){t[e][1]=this.checked,s(3,u)}]}class Rt extends o{constructor(t){super(),r(this,t,xt,Nt,i,{theTitans:11,titanRows:12},null,[-1,-1])}}function St(t){let e,n,s,a,c,l
return s=new gt({props:{theTitans:t[0]}}),c=new Rt({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=f("tr"),n=f("td"),j(s.$$.fragment),a=h(),j(c.$$.fragment),m(n,"colspan","3")},m(t,o){d(t,e,o),p(e,n),x(s,n,null),p(n,a),x(c,n,null),l=!0},p(t,[e]){const n={}
1&e&&(n.theTitans=t[0]),s.$set(n)
const a={}
1&e&&(a.theTitans=t[0]),2&e&&(a.titanRows=t[1]),c.$set(a)},i(t){l||(k(s.$$.fragment,t),k(c.$$.fragment,t),l=!0)},o(t){y(s.$$.fragment,t),y(c.$$.fragment,t),l=!1},d(t){t&&b(e),R(s),R(c)}}}function Ct(t,e,n){let{theTitans:s}=e,{titanRows:a}=e
return t.$$set=t=>{"theTitans"in t&&n(0,s=t.theTitans),"titanRows"in t&&n(1,a=t.titanRows)},[s,a]}class Lt extends o{constructor(t){super(),r(this,t,Ct,St,i,{theTitans:0,titanRows:1})}}function _t(t){const e=l(t.nextElementSibling.cells[0])
return{cooldownText:e,coolTime:(n=e,n?.includes("until")?Y(n.replace("Cooldown until: ","")):0),seen:"yes"}
var n}const Bt=({titanName:t,tr:e})=>[t,_t(e)]
function Et(t,e){return L(T(t).map((([t,e])=>[q(t),e])).filter((([t])=>!e[t])).filter((([,t])=>t.coolTime>W())).map((([t,e])=>[t,{...e,seen:"no"}])))}async function Ht(t,e){const n=function(t,e){const n=L(J(e,"titanName").map(Bt))
return{...n,...t&&Et(t,n)}}(await C("fsh_titans"),e)
t[0].rows.length>5&&function(t,e,n){new Lt({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}(t[0],n,e),B("fsh_titans",n)}function Ft(t){"A"===t.target.tagName&&c("scoutTower","realmLink")}function It(t){!function(t){const n=encodeURIComponent(t.titanName),[s]=t.tr.cells[0].children,a=O({href:`${A}creatures&search_name=${n}`,target:"_blank"})
e(a,(()=>{c("scoutTower","guideLink")})),P(a,s),P(t.tr.cells[0],a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function Mt(t){!function(t){t.active&&ft(t)}(t),It(t),function(t){const[,n]=t.tr.cells,s=l(n)
M(`<a href="${A}realms&search_name=${s}" target="_blank">${s}</a>`,n),e(n,Ft)}(t)}const At=t=>{return{guildKills:Number(l(t.cells[3])),hp:l(t.cells[2]),titanName:q((e=t,Q(D("img",e)))),tr:t,visible:!0}
var e},Ot=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Pt=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Dt(){if(E())return
const t=H(I,F())
if(!t?.length)return
ut(t)
const e=(t=>K(t[1],4,0)?.map(At).map(Ot).map(Pt))(t)
e&&(e.forEach(Mt),Ht(t,e))}export{Dt as default}
//# sourceMappingURL=injectScouttower-BXvycd1M.js.map
