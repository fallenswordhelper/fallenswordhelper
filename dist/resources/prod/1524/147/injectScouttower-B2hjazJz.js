import{bk as t,o as e,aN as n,x as s,G as a,d6 as c,s as l,aI as o,aJ as i,ad as r,S as u,P as f,Q as h,R as d,T as m,U as p,bq as g,_ as b,a0 as $,a3 as T,a4 as v,a5 as k,F as w,az as y,au as x,V as N,bD as R,bE as S,av as j,a1 as C,a9 as L,bJ as E,bK as F,bL as H,bw as B,a8 as _,f as A,bX as M,bx as I,bu as V,y as K,aV as U,p as X,co as q,e as D,b6 as J,q as Q,t as z,i as G}from"./calfSystem-BAeDn21M.js"
import{g as P}from"./getTitle-C1xil_UC.js"
import{g as W,a as O,t as Y}from"./getTitanString-DrmoKrfx.js"
import{a as Z}from"./roundToString-CLgmOe94.js"
import{p as tt}from"./parseDateAsTimestamp-CGAhktCc.js"
import{c as et}from"./closestTable-MoRx7kRV.js"
import{L as nt}from"./LinkButtonBracketed-BBtbkBtS.js"
import{t as st}from"./toggleForce-br4z9gGd.js"
import"./dateUtc-D0IGtXy8.js"
import"./LinkButton-DewvBSzv.js"
const at=t=>i(t.cells[0].children[0].href)
function ct(t){const{target:e}=t
c("[b]",e)&&function(t){t.previousElementSibling&&(l("scout tower","buffIndividual"),o(i(t.previousElementSibling.href)))}(e),c("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,s=n(e,3,0).map(at).join()
l("scout tower","buffAll"),o(s)}(e)}function lt(t){a("fshBl",t.target)&&ct(t)}function ot(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function it(t){n(t,3,0).forEach(ot),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function rt(t,e){return t.rows.length>1&&e>1}function ut(n){n.length>2&&function(n){t(n).filter(rt).forEach(it),e(n[1],lt)}(n)}function ft(t){const e=t.hp.split("/")
var n,a,c
s(t.tr.cells[3],(n=Number(r(t.tr.cells[3])),a=Number(e[0]),c=Number(e[1]),`<br><span class="fshBlue"> (${Z(O(c-a,n),2)}% Current <br>${Z(100*n/c,2)}% Total<br>${W(n,c,a)})`))}function ht(t,e,n){const s=t.slice()
return s[4]=e[n][0],s[5]=e[n][1],s}function dt(t){let e,n,s,a,c,l,o
return{c(){e=T("tr"),n=T("td"),n.textContent=`${t[4]}`,s=v(),a=T("td"),a.textContent=`${t[5].cooldownText}`,c=v(),l=T("td"),l.textContent=`${t[5].seen}`,o=v(),k(n,"class","svelte-1g6lyd8"),k(a,"class","cd svelte-1g6lyd8"),k(l,"class","svelte-1g6lyd8")},m(t,i){b(t,e,i),$(e,n),$(e,s),$(e,a),$(e,c),$(e,l),$(e,o)},p:m,d(t){t&&p(e)}}}function mt(t){let e,n,s,a,c=d(t[0]()),l=[]
for(let e=0;e<c.length;e+=1)l[e]=dt(ht(t,c,e))
return{c(){e=T("table"),n=T("tbody"),s=T("tr"),s.innerHTML='<td class="header svelte-1g6lyd8">Titan</td> <td class="header svelte-1g6lyd8">Cooldown</td> <td class="header svelte-1g6lyd8">Visible</td>',a=v()
for(let t=0;t<l.length;t+=1)l[t].c()
k(e,"class","svelte-1g6lyd8")},m(t,c){b(t,e,c),$(e,n),$(n,s),$(n,a)
for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(t,[e]){if(1&e){let s
for(c=d(t[0]()),s=0;s<c.length;s+=1){const a=ht(t,c,s)
l[s]?l[s].p(a,e):(l[s]=dt(a),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1)
l.length=c.length}},i:m,o:m,d(t){t&&p(e),g(l,t)}}}function pt(t,e,n){let{theTitans:s}=e
const a=([,t])=>t.coolTime>y(),c=([,t],[,e])=>t.coolTime-e.coolTime
return t.$$set=t=>{"theTitans"in t&&n(1,s=t.theTitans)},[()=>w(s).filter(a).sort(c),s]}class gt extends u{constructor(t){super(),f(this,t,pt,mt,h,{theTitans:1})}}function bt(t,e,n){const s=t.slice()
return s[29]=e[n][0],s[30]=e[n][1],s[31]=e,s[32]=n,s}function $t(t){return{c:m,m:m,p:m,i:m,o:m,d:m}}function Tt(t){let e,n,s,a,c,l,o,i=d(t[3]),r=[]
for(let e=0;e<i.length;e+=1)r[e]=vt(bt(t,i,e))
return a=new nt({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),a.$on("click",t[9]),l=new nt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),l.$on("click",t[10]),{c(){e=T("div")
for(let t=0;t<r.length;t+=1)r[t].c()
n=v(),s=T("div"),H(a.$$.fragment),c=v(),H(l.$$.fragment),k(e,"id","titan-list"),k(e,"class","svelte-1s0h251"),k(s,"class","svelte-1s0h251")},m(t,i){b(t,e,i)
for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(e,null)
b(t,n,i),b(t,s,i),F(a,s,null),$(s,c),F(l,s,null),o=!0},p(t,n){if(264&n[0]){let s
for(i=d(t[3]),s=0;s<i.length;s+=1){const a=bt(t,i,s)
r[s]?r[s].p(a,n):(r[s]=vt(a),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1)
r.length=i.length}const s={}
4&n[1]&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)
const c={}
4&n[1]&&(c.$$scope={dirty:n,ctx:t}),l.$set(c)},i(t){o||(S(a.$$.fragment,t),S(l.$$.fragment,t),o=!0)},o(t){R(a.$$.fragment,t),R(l.$$.fragment,t),o=!1},d(t){t&&(p(e),p(n),p(s)),g(r,t),E(a),E(l)}}}function vt(t){let e,n,s,a,c,l,o,i=t[29]+""
function r(){t[16].call(n,t[31],t[32])}return{c(){e=T("label"),n=T("input"),s=v(),a=L(i),c=v(),k(n,"type","checkbox"),k(e,"class","svelte-1s0h251")},m(i,u){b(i,e,u),$(e,n),n.checked=t[30],$(e,s),$(e,a),b(i,c,u),l||(o=[C(n,"change",r),C(n,"change",t[8])],l=!0)},p(e,s){t=e,8&s[0]&&(n.checked=t[30]),8&s[0]&&i!==(i=t[29]+"")&&_(a,i)},d(t){t&&(p(e),p(c)),l=!1,N(o)}}}function kt(t){let e
return{c(){e=L("Select All")},m(t,n){b(t,e,n)},d(t){t&&p(e)}}}function wt(t){let e
return{c(){e=L("Select None")},m(t,n){b(t,e,n)},d(t){t&&p(e)}}}function yt(t){return{c:m,m:m,p:m,i:m,o:m,d:m}}function xt(t){let e,n,s,a,c,l,o,i,r,u,f,h,d,m,g,w,y,E,F,H,B,_,A,M,I,V,K,U={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:Tt,catch:$t,blocks:[,,,]}
return x(t[4](),U),{c(){e=T("table"),n=T("tbody"),s=T("tr"),s.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',a=v(),c=T("tr"),l=T("td"),o=T("label"),i=T("input"),r=L("\n          Current"),u=v(),f=T("label"),h=T("input"),d=L("\n          History"),m=v(),g=T("label"),w=T("input"),y=L("\n          Securable"),E=v(),F=T("tr"),F.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',H=v(),B=T("tr"),_=T("td"),U.block.c(),A=v(),M=T("tr"),M.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',k(i,"type","checkbox"),k(o,"class","svelte-1s0h251"),k(h,"type","checkbox"),k(f,"class","svelte-1s0h251"),k(w,"type","checkbox"),k(g,"class","svelte-1s0h251"),k(l,"colspan","3"),k(l,"class","svelte-1s0h251"),k(_,"colspan","3"),k(_,"class","svelte-1s0h251"),k(e,"class","svelte-1s0h251")},m(p,T){b(p,e,T),$(e,n),$(n,s),$(n,a),$(n,c),$(c,l),$(l,o),$(o,i),i.checked=t[0],$(o,r),$(l,u),$(l,f),$(f,h),h.checked=t[1],$(f,d),$(l,m),$(l,g),$(g,w),w.checked=t[2],$(g,y),$(n,E),$(n,F),$(n,H),$(n,B),$(B,_),U.block.m(_,U.anchor=null),U.mount=()=>_,U.anchor=null,$(n,A),$(n,M),I=!0,V||(K=[C(i,"change",t[13]),C(i,"change",t[5]),C(h,"change",t[14]),C(h,"change",t[6]),C(w,"change",t[15]),C(w,"change",t[7])],V=!0)},p(e,n){t=e,1&n[0]&&(i.checked=t[0]),2&n[0]&&(h.checked=t[1]),4&n[0]&&(w.checked=t[2]),j(U,t,n)},i(t){I||(S(U.block),I=!0)},o(t){for(let t=0;t<3;t+=1){const e=U.blocks[t]
R(e)}I=!1},d(t){t&&p(e),U.block.d(),U.token=null,U=null,V=!1,N(K)}}}const Nt="fsh_titanFilter"
function Rt(e,n,s){let{theTitans:a}=n,{titanRows:c}=n,o=!0,i=!0,r=!1,u=[]
const f=([t],[e])=>M(t,e),h=()=>I(Nt,{current:o,history:i,securable:r,titans:u}),d=({titanName:t})=>u.find((([e])=>e===t))[1],m=t=>t.active&&o,p=t=>!t.active&&i,g=t=>t.securable||!r
function b(t){return(m(t)||p(t))&&d(t)&&g(t)}function $([e,n]){const s=t(et(e.tr).rows),a=e.tr.rowIndex
s.slice(a,a+6).forEach((t=>st(t,!n))),e.visible=n}function T(){c.map((t=>[t,b(t)])).filter((([t,e])=>t.visible!==e)).forEach($)}function v(){h(),T()}return e.$$set=t=>{"theTitans"in t&&s(11,a=t.theTitans),"titanRows"in t&&s(12,c=t.titanRows)},[o,i,r,u,async function(){const t=await B(Nt)
t&&s(0,({current:o,history:i,securable:r,titans:u}=t),o,s(1,i),s(2,r),s(3,u)),s(3,u=w({...A(w(a).map((([t])=>[t,!0]))),...A(u.map((([t,e])=>[Y(t),e])))}).sort(f)),T()},function(){l("TitanFilter","toggleCurrent"),v()},function(){l("TitanFilter","toggleHistory"),v()},function(){l("TitanFilter","toggleSecurable"),v()},function(){l("TitanFilter","toggleTitan"),v()},function(){l("TitanFilter","selectAll"),s(3,u=u.map((([t])=>[t,!0]))),v()},function(){l("TitanFilter","selectNone"),s(3,u=u.map((([t])=>[t,!1]))),v()},a,c,function(){o=this.checked,s(0,o)},function(){i=this.checked,s(1,i)},function(){r=this.checked,s(2,r)},function(t,e){t[e][1]=this.checked,s(3,u)}]}class St extends u{constructor(t){super(),f(this,t,Rt,xt,h,{theTitans:11,titanRows:12},null,[-1,-1])}}function jt(t){let e,n,s,a,c,l
return s=new gt({props:{theTitans:t[0]}}),c=new St({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=T("tr"),n=T("td"),H(s.$$.fragment),a=v(),H(c.$$.fragment),k(n,"colspan","3")},m(t,o){b(t,e,o),$(e,n),F(s,n,null),$(n,a),F(c,n,null),l=!0},p(t,[e]){const n={}
1&e&&(n.theTitans=t[0]),s.$set(n)
const a={}
1&e&&(a.theTitans=t[0]),2&e&&(a.titanRows=t[1]),c.$set(a)},i(t){l||(S(s.$$.fragment,t),S(c.$$.fragment,t),l=!0)},o(t){R(s.$$.fragment,t),R(c.$$.fragment,t),l=!1},d(t){t&&p(e),E(s),E(c)}}}function Ct(t,e,n){let{theTitans:s}=e,{titanRows:a}=e
return t.$$set=t=>{"theTitans"in t&&n(0,s=t.theTitans),"titanRows"in t&&n(1,a=t.titanRows)},[s,a]}class Lt extends u{constructor(t){super(),f(this,t,Ct,jt,h,{theTitans:0,titanRows:1})}}function Et(t){const e=r(t.nextElementSibling.cells[0])
return{cooldownText:e,coolTime:(n=e,n?.includes("until")?tt(n.replace("Cooldown until: ","")):0),seen:"yes"}
var n}const Ft=({titanName:t,tr:e})=>[t,Et(e)]
function Ht(t,e){return A(w(t).map((([t,e])=>[Y(t),e])).filter((([t])=>!e[t])).filter((([,t])=>t.coolTime>y())).map((([t,e])=>[t,{...e,seen:"no"}])))}async function Bt(t,e){const n=function(t,e){const n=A(V(e,"titanName").map(Ft))
return{...n,...t&&Ht(t,n)}}(await B("fsh_titans"),e)
t[0].rows.length>5&&function(t,e,n){new Lt({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}(t[0],n,e),I("fsh_titans",n)}function _t(t){"A"===t.target.tagName&&l("scoutTower","realmLink")}function At(t){!function(t){const n=encodeURIComponent(t.titanName),[s]=t.tr.cells[0].children,a=z({href:`${J}creatures&search_name=${n}`,target:"_blank"})
e(a,(()=>{l("scoutTower","guideLink")})),G(a,s),G(t.tr.cells[0],a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function Mt(t){!function(t){t.active&&ft(t)}(t),At(t),function(t){const[,n]=t.tr.cells,s=r(n)
D(`<a href="${J}realms&search_name=${s}" target="_blank">${s}</a>`,n),e(n,_t)}(t)}const It=t=>{return{guildKills:Number(r(t.cells[3])),hp:r(t.cells[2]),titanName:Y((e=t,P(Q("img",e)))),tr:t,visible:!0}
var e},Vt=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Kt=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Ut(){if(K())return
const t=U(q,X())
if(!t?.length)return
ut(t)
const e=(t=>n(t[1],4,0)?.map(It).map(Vt).map(Kt))(t)
e&&(e.forEach(Mt),Bt(t,e))}export{Ut as default}
//# sourceMappingURL=injectScouttower-B2hjazJz.js.map
