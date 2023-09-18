import{aU as t,o as e,D as n,v as s,cr as a,a4 as c,S as l,K as o,L as r,M as i,N as u,O as f,Q as h,R as m,X as p,Y as d,a_ as g,C as b,a0 as $,V as T,b6 as v,b9 as k,Z as w,n as y,bb as j,bc as N,bd as x,a1 as R,f as S,bm as C,w as H,av as B,p as E,bI as _,s as F,aI as I,m as L,i as M,q as K}from"./calfSystem-abb16b0d.js"
import{d as A}from"./dataRows-bd1bd3ba.js"
import{g as D}from"./getTitle-979b8fc1.js"
import{a as O,g as U,t as X}from"./getTitanString-4524f909.js"
import{g as q}from"./getPlayerId-10b4174c.js"
import{o as Q}from"./openQuickBuffById-d429c2bc.js"
import{a as V}from"./roundToString-b56b87fd.js"
import{u as Y}from"./uniq-d915251c.js"
import{n as P}from"./now-6f22aec9.js"
import{g as Z,s as z}from"./idb-e719862a.js"
import{p as G}from"./parseDateAsTimestamp-3a661722.js"
import{e as J}from"./each-13c4feae.js"
import{h as W,u as tt}from"./await_block-78969f55.js"
import{c as et}from"./closestTable-deb533c1.js"
import{L as nt}from"./LinkButtonBracketed-4d890186.js"
import{t as st}from"./toggleForce-6124e333.js"
import"./fshOpen-c0e91392.js"
import"./numberIsNaN-a40c3bbb.js"
import"./dateUtc-3fa03023.js"
import"./LinkButton-e3c794a4.js"
const at=t=>q(t.cells[0].children[0].href)
function ct(t){const{target:e}=t
a("[b]",e)&&function(t){t.previousElementSibling&&Q(q(t.previousElementSibling.href))}(e),a("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,n=A(e,3,0).map(at).join()
Q(n)}(e)}function lt(t){n("fshBl",t.target)&&ct(t)}function ot(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function rt(t){A(t,3,0).forEach(ot),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function it(t,e){return t.rows.length>1&&e>1}function ut(n){n.length>2&&function(n){t(n).filter(it).forEach(rt),e(n[1],lt)}(n)}function ft(t){const e=t.hp.split("/")
var n,a,l
s(t.tr.cells[3],(n=Number(c(t.tr.cells[3])),a=Number(e[0]),l=Number(e[1]),`<br><span class="fshBlue"> (${V(O(l-a,n),2)}% Current <br>${V(100*n/l,2)}% Total<br>${U(n,l,a)})`))}function ht(t,e,n){const s=t.slice()
return s[4]=e[n][0],s[5]=e[n][1],s}function mt(t){let e,n,s,a,c,l,o
return{c(){e=i("tr"),n=i("td"),n.textContent=`${t[4]}`,s=u(),a=i("td"),a.textContent=`${t[5].cooldownText}`,c=u(),l=i("td"),l.textContent=`${t[5].seen}`,o=u(),f(n,"class","svelte-1g6lyd8"),f(a,"class","cd svelte-1g6lyd8"),f(l,"class","svelte-1g6lyd8")},m(t,r){h(t,e,r),m(e,n),m(e,s),m(e,a),m(e,c),m(e,l),m(e,o)},p:p,d(t){t&&d(e)}}}function pt(t){let e,n,s,a,c=J(t[0]()),l=[]
for(let e=0;e<c.length;e+=1)l[e]=mt(ht(t,c,e))
return{c(){e=i("table"),n=i("tbody"),s=i("tr"),s.innerHTML='<td class="header svelte-1g6lyd8">Titan</td> <td class="header svelte-1g6lyd8">Cooldown</td> <td class="header svelte-1g6lyd8">Visible</td>',a=u()
for(let t=0;t<l.length;t+=1)l[t].c()
f(e,"class","svelte-1g6lyd8")},m(t,c){h(t,e,c),m(e,n),m(n,s),m(n,a)
for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(t,[e]){if(1&e){let s
for(c=J(t[0]()),s=0;s<c.length;s+=1){const a=ht(t,c,s)
l[s]?l[s].p(a,e):(l[s]=mt(a),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1)
l.length=c.length}},i:p,o:p,d(t){t&&d(e),g(l,t)}}}function dt(t,e,n){let{theTitans:s}=e
const a=([,t])=>t.coolTime>P(),c=([,t],[,e])=>t.coolTime-e.coolTime
return t.$$set=t=>{"theTitans"in t&&n(1,s=t.theTitans)},[()=>b(s).filter(a).sort(c),s]}class gt extends l{constructor(t){super(),o(this,t,dt,pt,r,{theTitans:1})}}function bt(t,e,n){const s=t.slice()
return s[29]=e[n][0],s[30]=e[n][1],s[31]=e,s[32]=n,s}function $t(t){return{c:p,m:p,p:p,i:p,o:p,d:p}}function Tt(t){let e,n,s,a,c,l,o,r=J(t[3]),p=[]
for(let e=0;e<r.length;e+=1)p[e]=vt(bt(t,r,e))
return a=new nt({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),a.$on("click",t[9]),l=new nt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),l.$on("click",t[10]),{c(){e=i("div")
for(let t=0;t<p.length;t+=1)p[t].c()
n=u(),s=i("div"),j(a.$$.fragment),c=u(),j(l.$$.fragment),f(e,"id","titan-list"),f(e,"class","svelte-1s0h251"),f(s,"class","svelte-1s0h251")},m(t,r){h(t,e,r)
for(let t=0;t<p.length;t+=1)p[t]&&p[t].m(e,null)
h(t,n,r),h(t,s,r),N(a,s,null),m(s,c),N(l,s,null),o=!0},p(t,n){if(264&n[0]){let s
for(r=J(t[3]),s=0;s<r.length;s+=1){const a=bt(t,r,s)
p[s]?p[s].p(a,n):(p[s]=vt(a),p[s].c(),p[s].m(e,null))}for(;s<p.length;s+=1)p[s].d(1)
p.length=r.length}const s={}
4&n[1]&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)
const c={}
4&n[1]&&(c.$$scope={dirty:n,ctx:t}),l.$set(c)},i(t){o||(v(a.$$.fragment,t),v(l.$$.fragment,t),o=!0)},o(t){k(a.$$.fragment,t),k(l.$$.fragment,t),o=!1},d(t){t&&(d(e),d(n),d(s)),g(p,t),x(a),x(l)}}}function vt(t){let e,n,s,a,c,l,o,r=t[29]+""
function p(){t[16].call(n,t[31],t[32])}return{c(){e=i("label"),n=i("input"),s=u(),a=$(r),c=u(),f(n,"type","checkbox"),f(e,"class","svelte-1s0h251")},m(r,i){h(r,e,i),m(e,n),n.checked=t[30],m(e,s),m(e,a),h(r,c,i),l||(o=[T(n,"change",p),T(n,"change",t[8])],l=!0)},p(e,s){t=e,8&s[0]&&(n.checked=t[30]),8&s[0]&&r!==(r=t[29]+"")&&R(a,r)},d(t){t&&(d(e),d(c)),l=!1,w(o)}}}function kt(t){let e
return{c(){e=$("Select All")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function wt(t){let e
return{c(){e=$("Select None")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function yt(t){return{c:p,m:p,p:p,i:p,o:p,d:p}}function jt(t){let e,n,s,a,c,l,o,r,p,g,b,y,j,N,x,R,S,C,H,B,E,_,F,I,L,M,K,A={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:Tt,catch:$t,blocks:[,,,]}
return W(t[4](),A),{c(){e=i("table"),n=i("tbody"),s=i("tr"),s.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',a=u(),c=i("tr"),l=i("td"),o=i("label"),r=i("input"),p=$("\n          Current"),g=u(),b=i("label"),y=i("input"),j=$("\n          History"),N=u(),x=i("label"),R=i("input"),S=$("\n          Securable"),C=u(),H=i("tr"),H.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',B=u(),E=i("tr"),_=i("td"),A.block.c(),F=u(),I=i("tr"),I.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',f(r,"type","checkbox"),f(o,"class","svelte-1s0h251"),f(y,"type","checkbox"),f(b,"class","svelte-1s0h251"),f(R,"type","checkbox"),f(x,"class","svelte-1s0h251"),f(l,"colspan","3"),f(l,"class","svelte-1s0h251"),f(_,"colspan","3"),f(_,"class","svelte-1s0h251"),f(e,"class","svelte-1s0h251")},m(i,u){h(i,e,u),m(e,n),m(n,s),m(n,a),m(n,c),m(c,l),m(l,o),m(o,r),r.checked=t[0],m(o,p),m(l,g),m(l,b),m(b,y),y.checked=t[1],m(b,j),m(l,N),m(l,x),m(x,R),R.checked=t[2],m(x,S),m(n,C),m(n,H),m(n,B),m(n,E),m(E,_),A.block.m(_,A.anchor=null),A.mount=()=>_,A.anchor=null,m(n,F),m(n,I),L=!0,M||(K=[T(r,"change",t[13]),T(r,"change",t[5]),T(y,"change",t[14]),T(y,"change",t[6]),T(R,"change",t[15]),T(R,"change",t[7])],M=!0)},p(e,n){t=e,1&n[0]&&(r.checked=t[0]),2&n[0]&&(y.checked=t[1]),4&n[0]&&(R.checked=t[2]),tt(A,t,n)},i(t){L||(v(A.block),L=!0)},o(t){for(let t=0;t<3;t+=1){const e=A.blocks[t]
k(e)}L=!1},d(t){t&&d(e),A.block.d(),A.token=null,A=null,M=!1,w(K)}}}const Nt="fsh_titanFilter"
function xt(e,n,s){let{theTitans:a}=n,{titanRows:c}=n,l=!0,o=!0,r=!1,i=[]
const u=([t],[e])=>C(t,e),f=()=>z(Nt,{current:l,history:o,securable:r,titans:i}),h=({titanName:t})=>i.find((([e])=>e===t))[1],m=t=>t.active&&l,p=t=>!t.active&&o,d=t=>t.securable||!r
function g(t){return(m(t)||p(t))&&h(t)&&d(t)}function $([e,n]){const s=t(et(e.tr).rows),a=e.tr.rowIndex
s.slice(a,a+6).forEach((t=>st(t,!n))),e.visible=n}function T(){c.map((t=>[t,g(t)])).filter((([t,e])=>t.visible!==e)).forEach($)}function v(){f(),T()}return e.$$set=t=>{"theTitans"in t&&s(11,a=t.theTitans),"titanRows"in t&&s(12,c=t.titanRows)},[l,o,r,i,async function(){const t=await Z(Nt)
t&&s(0,({current:l,history:o,securable:r,titans:i}=t),l,s(1,o),s(2,r),s(3,i)),s(3,i=b({...S(b(a).map((([t])=>[t,!0]))),...S(i.map((([t,e])=>[X(t),e])))}).sort(u)),T()},function(){y("TitanFilter","toggleCurrent"),v()},function(){y("TitanFilter","toggleHistory"),v()},function(){y("TitanFilter","toggleSecurable"),v()},function(){y("TitanFilter","toggleTitan"),v()},function(){y("TitanFilter","selectAll"),s(3,i=i.map((([t])=>[t,!0]))),v()},function(){y("TitanFilter","selectNone"),s(3,i=i.map((([t])=>[t,!1]))),v()},a,c,function(){l=this.checked,s(0,l)},function(){o=this.checked,s(1,o)},function(){r=this.checked,s(2,r)},function(t,e){t[e][1]=this.checked,s(3,i)}]}class Rt extends l{constructor(t){super(),o(this,t,xt,jt,r,{theTitans:11,titanRows:12},null,[-1,-1])}}function St(t){let e,n,s,a,c,l
return s=new gt({props:{theTitans:t[0]}}),c=new Rt({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=i("tr"),n=i("td"),j(s.$$.fragment),a=u(),j(c.$$.fragment),f(n,"colspan","3")},m(t,o){h(t,e,o),m(e,n),N(s,n,null),m(n,a),N(c,n,null),l=!0},p(t,[e]){const n={}
1&e&&(n.theTitans=t[0]),s.$set(n)
const a={}
1&e&&(a.theTitans=t[0]),2&e&&(a.titanRows=t[1]),c.$set(a)},i(t){l||(v(s.$$.fragment,t),v(c.$$.fragment,t),l=!0)},o(t){k(s.$$.fragment,t),k(c.$$.fragment,t),l=!1},d(t){t&&d(e),x(s),x(c)}}}function Ct(t,e,n){let{theTitans:s}=e,{titanRows:a}=e
return t.$$set=t=>{"theTitans"in t&&n(0,s=t.theTitans),"titanRows"in t&&n(1,a=t.titanRows)},[s,a]}class Ht extends l{constructor(t){super(),o(this,t,Ct,St,r,{theTitans:0,titanRows:1})}}function Bt(t){const e=c(t.nextElementSibling.cells[0])
return{cooldownText:e,coolTime:(n=e,n?.includes("until")?G(n.replace("Cooldown until: ","")):0),seen:"yes"}
var n}const Et=({titanName:t,tr:e})=>[t,Bt(e)]
function _t(t,e){return S(b(t).map((([t,e])=>[X(t),e])).filter((([t])=>!e[t])).filter((([,t])=>t.coolTime>P())).map((([t,e])=>[t,{...e,seen:"no"}])))}async function Ft(t,e){const n=function(t,e){const n=S(Y(e,"titanName").map(Et))
return{...n,...t&&_t(t,n)}}(await Z("fsh_titans"),e)
t[0].rows.length>5&&function(t,e,n){new Ht({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}(t[0],n,e),z("fsh_titans",n)}function It(t){!function(t){const e=encodeURIComponent(t.titanName),[n]=t.tr.cells[0].children,s=L({href:`${I}creatures&search_name=${e}`,target:"_blank"})
M(s,n),M(t.tr.cells[0],s)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function Lt(t){!function(t){t.active&&ft(t)}(t),It(t),function(t){const[,e]=t.tr.cells,n=c(e)
F(`<a href="${I}realms&search_name=${n}" target="_blank">${n}</a>`,e)}(t)}const Mt=t=>{return{guildKills:Number(c(t.cells[3])),hp:c(t.cells[2]),titanName:X((e=t,D(K("img",e)))),tr:t,visible:!0}
var e},Kt=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),At=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Dt(){if(H())return
const t=B(_,E())
if(!t?.length)return
ut(t)
const e=(t=>A(t[1],4,0)?.map(Mt).map(Kt).map(At))(t)
e&&(e.forEach(Lt),Ft(t,e))}export{Dt as default}
//# sourceMappingURL=injectScouttower-c383d065.js.map
