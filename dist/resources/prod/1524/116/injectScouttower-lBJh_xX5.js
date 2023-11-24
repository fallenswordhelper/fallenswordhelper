import{aS as t,o as e,D as n,v as s,cr as a,s as o,a3 as l,S as c,J as r,K as i,L as u,M as f,N as h,P as m,Q as d,W as p,X as g,aY as b,C as $,_ as T,U as k,b4 as v,b7 as w,Y as y,b9 as N,ba as j,bb as x,a0 as S,f as R,bk as C,w as L,au as H,p as B,bG as E,d as F,aG as _,n as M,i as I,q as A}from"./calfSystem-ZGMc097r.js"
import{d as G}from"./dataRows-GJKEuNfe.js"
import{g as K}from"./getTitle-KOgbTbIb.js"
import{a as U,g as X,t as Y}from"./getTitanString-Fx1fxwUU.js"
import{g as q}from"./getPlayerId-VyYlcjgL.js"
import{o as D}from"./openQuickBuffById-XiybVNf_.js"
import{a as O}from"./roundToString-8wwt6Rp-.js"
import{u as P}from"./uniq-OC5sDXGI.js"
import{n as Q}from"./now-pQzGw6vd.js"
import{g as J,s as V}from"./idb-Asb6LweF.js"
import{p as W}from"./parseDateAsTimestamp-bu6yfeJS.js"
import{e as z}from"./each-_TSpIEJe.js"
import{h as Z,u as tt}from"./await_block-CsWaGax3.js"
import{c as et}from"./closestTable-ell7c3Dx.js"
import{L as nt}from"./LinkButtonBracketed-sW7sK4vU.js"
import{t as st}from"./toggleForce-4Mg38a6N.js"
import"./fshOpen-16hNCxKt.js"
import"./numberIsNaN--k2kVli9.js"
import"./dateUtc-2Rs2auR9.js"
import"./LinkButton-U9GjlQ_2.js"
const at=t=>q(t.cells[0].children[0].href)
function ot(t){const{target:e}=t
a("[b]",e)&&function(t){t.previousElementSibling&&(o("scout tower","buffIndividual"),D(q(t.previousElementSibling.href)))}(e),a("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,n=G(e,3,0).map(at).join()
o("scout tower","buffAll"),D(n)}(e)}function lt(t){n("fshBl",t.target)&&ot(t)}function ct(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function rt(t){G(t,3,0).forEach(ct),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function it(t,e){return t.rows.length>1&&e>1}function ut(n){n.length>2&&function(n){t(n).filter(it).forEach(rt),e(n[1],lt)}(n)}function ft(t){const e=t.hp.split("/")
var n,a,o
s(t.tr.cells[3],(n=Number(l(t.tr.cells[3])),a=Number(e[0]),o=Number(e[1]),`<br><span class="fshBlue"> (${O(U(o-a,n),2)}% Current <br>${O(100*n/o,2)}% Total<br>${X(n,o,a)})`))}function ht(t,e,n){const s=t.slice()
return s[4]=e[n][0],s[5]=e[n][1],s}function mt(t){let e,n,s,a,o,l,c
return{c(){e=u("tr"),n=u("td"),n.textContent=`${t[4]}`,s=f(),a=u("td"),a.textContent=`${t[5].cooldownText}`,o=f(),l=u("td"),l.textContent=`${t[5].seen}`,c=f(),h(n,"class","svelte-1g6lyd8"),h(a,"class","cd svelte-1g6lyd8"),h(l,"class","svelte-1g6lyd8")},m(t,r){m(t,e,r),d(e,n),d(e,s),d(e,a),d(e,o),d(e,l),d(e,c)},p:p,d(t){t&&g(e)}}}function dt(t){let e,n,s,a,o=z(t[0]()),l=[]
for(let e=0;e<o.length;e+=1)l[e]=mt(ht(t,o,e))
return{c(){e=u("table"),n=u("tbody"),s=u("tr"),s.innerHTML='<td class="header svelte-1g6lyd8">Titan</td> <td class="header svelte-1g6lyd8">Cooldown</td> <td class="header svelte-1g6lyd8">Visible</td>',a=f()
for(let t=0;t<l.length;t+=1)l[t].c()
h(e,"class","svelte-1g6lyd8")},m(t,o){m(t,e,o),d(e,n),d(n,s),d(n,a)
for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(t,[e]){if(1&e){let s
for(o=z(t[0]()),s=0;s<o.length;s+=1){const a=ht(t,o,s)
l[s]?l[s].p(a,e):(l[s]=mt(a),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1)
l.length=o.length}},i:p,o:p,d(t){t&&g(e),b(l,t)}}}function pt(t,e,n){let{theTitans:s}=e
const a=([,t])=>t.coolTime>Q(),o=([,t],[,e])=>t.coolTime-e.coolTime
return t.$$set=t=>{"theTitans"in t&&n(1,s=t.theTitans)},[()=>$(s).filter(a).sort(o),s]}class gt extends c{constructor(t){super(),r(this,t,pt,dt,i,{theTitans:1})}}function bt(t,e,n){const s=t.slice()
return s[29]=e[n][0],s[30]=e[n][1],s[31]=e,s[32]=n,s}function $t(t){return{c:p,m:p,p:p,i:p,o:p,d:p}}function Tt(t){let e,n,s,a,o,l,c,r=z(t[3]),i=[]
for(let e=0;e<r.length;e+=1)i[e]=kt(bt(t,r,e))
return a=new nt({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),a.$on("click",t[9]),l=new nt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),l.$on("click",t[10]),{c(){e=u("div")
for(let t=0;t<i.length;t+=1)i[t].c()
n=f(),s=u("div"),N(a.$$.fragment),o=f(),N(l.$$.fragment),h(e,"id","titan-list"),h(e,"class","svelte-1s0h251"),h(s,"class","svelte-1s0h251")},m(t,r){m(t,e,r)
for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,null)
m(t,n,r),m(t,s,r),j(a,s,null),d(s,o),j(l,s,null),c=!0},p(t,n){if(264&n[0]){let s
for(r=z(t[3]),s=0;s<r.length;s+=1){const a=bt(t,r,s)
i[s]?i[s].p(a,n):(i[s]=kt(a),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1)
i.length=r.length}const s={}
4&n[1]&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)
const o={}
4&n[1]&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){c||(v(a.$$.fragment,t),v(l.$$.fragment,t),c=!0)},o(t){w(a.$$.fragment,t),w(l.$$.fragment,t),c=!1},d(t){t&&(g(e),g(n),g(s)),b(i,t),x(a),x(l)}}}function kt(t){let e,n,s,a,o,l,c,r=t[29]+""
function i(){t[16].call(n,t[31],t[32])}return{c(){e=u("label"),n=u("input"),s=f(),a=T(r),o=f(),h(n,"type","checkbox"),h(e,"class","svelte-1s0h251")},m(r,u){m(r,e,u),d(e,n),n.checked=t[30],d(e,s),d(e,a),m(r,o,u),l||(c=[k(n,"change",i),k(n,"change",t[8])],l=!0)},p(e,s){t=e,8&s[0]&&(n.checked=t[30]),8&s[0]&&r!==(r=t[29]+"")&&S(a,r)},d(t){t&&(g(e),g(o)),l=!1,y(c)}}}function vt(t){let e
return{c(){e=T("Select All")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function wt(t){let e
return{c(){e=T("Select None")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function yt(t){return{c:p,m:p,p:p,i:p,o:p,d:p}}function Nt(t){let e,n,s,a,o,l,c,r,i,p,b,$,N,j,x,S,R,C,L,H,B,E,F,_,M,I,A,G={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:Tt,catch:$t,blocks:[,,,]}
return Z(t[4](),G),{c(){e=u("table"),n=u("tbody"),s=u("tr"),s.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',a=f(),o=u("tr"),l=u("td"),c=u("label"),r=u("input"),i=T("\n          Current"),p=f(),b=u("label"),$=u("input"),N=T("\n          History"),j=f(),x=u("label"),S=u("input"),R=T("\n          Securable"),C=f(),L=u("tr"),L.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',H=f(),B=u("tr"),E=u("td"),G.block.c(),F=f(),_=u("tr"),_.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',h(r,"type","checkbox"),h(c,"class","svelte-1s0h251"),h($,"type","checkbox"),h(b,"class","svelte-1s0h251"),h(S,"type","checkbox"),h(x,"class","svelte-1s0h251"),h(l,"colspan","3"),h(l,"class","svelte-1s0h251"),h(E,"colspan","3"),h(E,"class","svelte-1s0h251"),h(e,"class","svelte-1s0h251")},m(u,f){m(u,e,f),d(e,n),d(n,s),d(n,a),d(n,o),d(o,l),d(l,c),d(c,r),r.checked=t[0],d(c,i),d(l,p),d(l,b),d(b,$),$.checked=t[1],d(b,N),d(l,j),d(l,x),d(x,S),S.checked=t[2],d(x,R),d(n,C),d(n,L),d(n,H),d(n,B),d(B,E),G.block.m(E,G.anchor=null),G.mount=()=>E,G.anchor=null,d(n,F),d(n,_),M=!0,I||(A=[k(r,"change",t[13]),k(r,"change",t[5]),k($,"change",t[14]),k($,"change",t[6]),k(S,"change",t[15]),k(S,"change",t[7])],I=!0)},p(e,n){t=e,1&n[0]&&(r.checked=t[0]),2&n[0]&&($.checked=t[1]),4&n[0]&&(S.checked=t[2]),tt(G,t,n)},i(t){M||(v(G.block),M=!0)},o(t){for(let t=0;t<3;t+=1){const e=G.blocks[t]
w(e)}M=!1},d(t){t&&g(e),G.block.d(),G.token=null,G=null,I=!1,y(A)}}}const jt="fsh_titanFilter"
function xt(e,n,s){let{theTitans:a}=n,{titanRows:l}=n,c=!0,r=!0,i=!1,u=[]
const f=([t],[e])=>C(t,e),h=()=>V(jt,{current:c,history:r,securable:i,titans:u}),m=({titanName:t})=>u.find((([e])=>e===t))[1],d=t=>t.active&&c,p=t=>!t.active&&r,g=t=>t.securable||!i
function b(t){return(d(t)||p(t))&&m(t)&&g(t)}function T([e,n]){const s=t(et(e.tr).rows),a=e.tr.rowIndex
s.slice(a,a+6).forEach((t=>st(t,!n))),e.visible=n}function k(){l.map((t=>[t,b(t)])).filter((([t,e])=>t.visible!==e)).forEach(T)}function v(){h(),k()}return e.$$set=t=>{"theTitans"in t&&s(11,a=t.theTitans),"titanRows"in t&&s(12,l=t.titanRows)},[c,r,i,u,async function(){const t=await J(jt)
t&&s(0,({current:c,history:r,securable:i,titans:u}=t),c,s(1,r),s(2,i),s(3,u)),s(3,u=$({...R($(a).map((([t])=>[t,!0]))),...R(u.map((([t,e])=>[Y(t),e])))}).sort(f)),k()},function(){o("TitanFilter","toggleCurrent"),v()},function(){o("TitanFilter","toggleHistory"),v()},function(){o("TitanFilter","toggleSecurable"),v()},function(){o("TitanFilter","toggleTitan"),v()},function(){o("TitanFilter","selectAll"),s(3,u=u.map((([t])=>[t,!0]))),v()},function(){o("TitanFilter","selectNone"),s(3,u=u.map((([t])=>[t,!1]))),v()},a,l,function(){c=this.checked,s(0,c)},function(){r=this.checked,s(1,r)},function(){i=this.checked,s(2,i)},function(t,e){t[e][1]=this.checked,s(3,u)}]}class St extends c{constructor(t){super(),r(this,t,xt,Nt,i,{theTitans:11,titanRows:12},null,[-1,-1])}}function Rt(t){let e,n,s,a,o,l
return s=new gt({props:{theTitans:t[0]}}),o=new St({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=u("tr"),n=u("td"),N(s.$$.fragment),a=f(),N(o.$$.fragment),h(n,"colspan","3")},m(t,c){m(t,e,c),d(e,n),j(s,n,null),d(n,a),j(o,n,null),l=!0},p(t,[e]){const n={}
1&e&&(n.theTitans=t[0]),s.$set(n)
const a={}
1&e&&(a.theTitans=t[0]),2&e&&(a.titanRows=t[1]),o.$set(a)},i(t){l||(v(s.$$.fragment,t),v(o.$$.fragment,t),l=!0)},o(t){w(s.$$.fragment,t),w(o.$$.fragment,t),l=!1},d(t){t&&g(e),x(s),x(o)}}}function Ct(t,e,n){let{theTitans:s}=e,{titanRows:a}=e
return t.$$set=t=>{"theTitans"in t&&n(0,s=t.theTitans),"titanRows"in t&&n(1,a=t.titanRows)},[s,a]}class Lt extends c{constructor(t){super(),r(this,t,Ct,Rt,i,{theTitans:0,titanRows:1})}}function Ht(t){const e=l(t.nextElementSibling.cells[0])
return{cooldownText:e,coolTime:(n=e,n?.includes("until")?W(n.replace("Cooldown until: ","")):0),seen:"yes"}
var n}const Bt=({titanName:t,tr:e})=>[t,Ht(e)]
function Et(t,e){return R($(t).map((([t,e])=>[Y(t),e])).filter((([t])=>!e[t])).filter((([,t])=>t.coolTime>Q())).map((([t,e])=>[t,{...e,seen:"no"}])))}async function Ft(t,e){const n=function(t,e){const n=R(P(e,"titanName").map(Bt))
return{...n,...t&&Et(t,n)}}(await J("fsh_titans"),e)
t[0].rows.length>5&&function(t,e,n){new Lt({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}(t[0],n,e),V("fsh_titans",n)}function _t(t){"A"===t.target.tagName&&o("scoutTower","realmLink")}function Mt(t){!function(t){const n=encodeURIComponent(t.titanName),[s]=t.tr.cells[0].children,a=M({href:`${_}creatures&search_name=${n}`,target:"_blank"})
e(a,(()=>{o("scoutTower","guideLink")})),I(a,s),I(t.tr.cells[0],a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function It(t){!function(t){t.active&&ft(t)}(t),Mt(t),function(t){const[,n]=t.tr.cells,s=l(n)
F(`<a href="${_}realms&search_name=${s}" target="_blank">${s}</a>`,n),e(n,_t)}(t)}const At=t=>{return{guildKills:Number(l(t.cells[3])),hp:l(t.cells[2]),titanName:Y((e=t,K(A("img",e)))),tr:t,visible:!0}
var e},Gt=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Kt=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Ut(){if(L())return
const t=H(E,B())
if(!t?.length)return
ut(t)
const e=(t=>G(t[1],4,0)?.map(At).map(Gt).map(Kt))(t)
e&&(e.forEach(It),Ft(t,e))}export{Ut as default}
//# sourceMappingURL=injectScouttower-lBJh_xX5.js.map
