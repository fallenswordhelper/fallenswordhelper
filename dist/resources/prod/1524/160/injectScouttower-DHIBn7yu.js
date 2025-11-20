import{by as t,o as a,aZ as e,a3 as s,ac as n,d9 as l,s as r,aU as o,aV as c,m as i,y as u,C as p,D as f,F as d,G as m,N as b,O as v,P as h,S as g,K as T,bD as w,ab as N,d8 as S,aK as y,ak as z,al as E,H as _,aF as j,ar as k,E as F,aI as x,bT as A,da as $,bG as C,ap as K,J as R,bK as B,bL as H,f as I,c2 as D,db as L,bI as V,t as G,a4 as M,b6 as X,p as q,cy as J,d as O,bb as P,q as U}from"./calfSystem-HVCiy-VV.js"
import{g as W,a as Z,t as Q}from"./getTitanString-DrmoKrfx.js"
import{u as Y}from"./ufsgMonsterLink-BdB1quqf.js"
import{a as tt}from"./roundToString-BFNdgMs_.js"
import{p as at}from"./parseDateAsTimestamp-BU-Z3fV9.js"
import{c as et}from"./closestTable-Cl0v-0VU.js"
import{t as st}from"./toggleForce-br4z9gGd.js"
const nt=t=>c(t.cells[0].children[0].href)
function lt(t){const{target:a}=t
l("[b]",a)&&function(t){t.previousElementSibling&&(r("scout tower","buffIndividual"),o(c(t.previousElementSibling.href)))}(a),l("all",a)&&function(t){const a=t.parentNode.parentNode.parentNode.parentNode,s=e(a,3,0).map(nt).join()
r("scout tower","buffAll"),o(s)}(a)}function rt(t){n("fshBl",t.target)&&lt(t)}function ot(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function ct(t){e(t,3,0).forEach(ot),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function it(t,a){return t.rows.length>1&&a>1}function ut(e){e.length>2&&function(e){t(e).filter(it).forEach(ct),a(e[1],rt)}(e)}function pt(t){const a=t.hp.split("/")
var e,n,l
s(t.tr.cells[3],(e=Number(i(t.tr.cells[3])),n=Number(a[0]),l=Number(a[1]),`<br><span class="fshBlue"> (${tt(Z(l-n,e),2)}% Current <br>${tt(100*e/l,2)}% Total<br>${W(e,l,n)})`))}var ft=p('<tr><td class="svelte-2mevpu"> </td><td class="cd svelte-2mevpu"> </td><td class="svelte-2mevpu"> </td></tr>'),dt=p('<table class="svelte-2mevpu"><tbody><tr><td class="header svelte-2mevpu">Titan</td><td class="header svelte-2mevpu">Cooldown</td><td class="header svelte-2mevpu">Visible</td></tr><!></tbody></table>')
function mt(t,a){u(a,!0)
const e=([,t])=>t.coolTime>y(),s=([,t],[,a])=>t.coolTime-a.coolTime
var n=dt(),l=d(n),r=f(d(l))
m(r,17,()=>N(a.theTitans).filter(e).sort(s),([t,a])=>t,(t,a)=>{var e=w(()=>S(T(a),2))
let s=()=>T(e)[1]
var n=ft(),l=d(n),r=d(l),o=f(l),c=d(o),i=f(o),u=d(i)
h(()=>{g(r,T(e)[0]),g(c,s().cooldownText),g(u,s().seen)}),b(t,n)}),b(t,n),v()}var bt=p('<tr><td class="header svelte-rzcaop" colspan="3"></td></tr> <tr><td colspan="3" class="svelte-rzcaop"><label class="svelte-rzcaop"><input type="checkbox"/> Securable</label></td></tr>',1),vt=p('<label class="titan-label svelte-rzcaop"><input type="checkbox"/> </label>'),ht=p('<div id="titan-list" class="svelte-rzcaop"></div> <div class="svelte-rzcaop"><!> <!></div>',1),gt=p('<table class="svelte-rzcaop"><tbody><!><tr><td class="header svelte-rzcaop" colspan="3"></td></tr><tr><td colspan="3" class="svelte-rzcaop"><!></td></tr><tr><td class="header svelte-rzcaop" colspan="3"></td></tr></tbody></table>')
function Tt(a,e){u(e,!0)
const s="fsh_titanFilter"
let n=z(!1),l=z(E([]))
const o=([t],[a])=>D(t,a)
function c(t){return(({titanName:t})=>T(l).find(([a])=>a===t)[1])(t)&&(t=>t.securable||!T(n))(t)}function i([a,e]){const s=t(et(a.tr).rows),n=a.tr.rowIndex
s.slice(n,n+6).forEach(t=>st(t,!e)),a.visible=e}function p(){e.titanRows.map(t=>[t,c(t)]).filter(([t,a])=>t.visible!==a).forEach(i)}function y(){H(s,{securable:L(T(n)),titans:L(T(l))}),p()}function K(){r("TitanFilter","toggleSecurable"),y()}function V(){r("TitanFilter","toggleTitan"),y()}function G(){r("TitanFilter","selectAll"),R(l,T(l).map(([t])=>[t,!0]),!0),y()}function M(){r("TitanFilter","selectNone"),R(l,T(l).map(([t])=>[t,!1]),!0),y()}var X=gt(),q=d(X),J=d(q),O=t=>{var a=bt(),e=f(F(a),2),s=d(e),l=d(s),r=d(l)
r.__change=K,x(r,()=>T(n),t=>R(n,t)),b(t,a)}
_(J,t=>{"completed"!==k("tab")&&t(O)})
var P=f(J,2),U=d(P),W=d(U)
j(W,async function(){const t=await B(s)
t&&(R(n,t.securable,!0),R(l,t.titans,!0)),R(l,N({...I(N(e.theTitans).map(([t])=>[t,!0])),...I(T(l).map(([t,a])=>[Q(t),a]))}).sort(o),!0),p()},null,t=>{var a=ht(),e=F(a)
m(e,21,()=>T(l),A,(t,a,e)=>{var s=w(()=>S(T(a),1))
var n=vt(),r=d(n)
r.__change=V
var o=f(r)
h(()=>g(o,` ${T(s)[0]??""}`)),x(r,()=>T(l)[e][1],t=>T(l)[e][1]=t),b(t,n)})
var s=f(e,2),n=d(s)
$(n,{onclick:G,children:(t,a)=>{var e=C("Select All")
b(t,e)}})
var r=f(n,2)
$(r,{onclick:M,children:(t,a)=>{var e=C("Select None")
b(t,e)}}),b(t,a)}),b(a,X),v()}K(["change"])
var wt=p('<tr><td colspan="3"><!> <!></td></tr>')
function Nt(t,a){var e=wt(),s=d(e),n=d(s)
mt(n,{get theTitans(){return a.theTitans}}),Tt(f(n,2),{get theTitans(){return a.theTitans},get titanRows(){return a.titanRows}}),b(t,e)}function St(t){let a=i(t.nextElementSibling.cells[0])
return a.startsWith("Cooldown until: ")||(a=i(t.cells[4])),{cooldownText:a,coolTime:(e=a,e?.includes("until")?at(e.replace("Cooldown until: ","")):0),seen:"yes"}
var e}const yt=({titanName:t,tr:a})=>[t,St(a)]
function zt(t,a){return I(N(t).map(([t,a])=>[Q(t),a]).filter(([t])=>!a[t]).filter(([,t])=>t.coolTime>y()).map(([t,a])=>[t,{...a,seen:"no"}]))}async function Et(t,a){const e=function(t,a){const e=I(V(a,"titanName").map(yt))
return{...e,...t&&zt(t,e)}}(await B("fsh_titans"),a)
t[0].rows.length>5&&function(t,a,e){G(Nt,{anchor:t.rows[5],props:{theTitans:a,titanRows:e},target:t.children[0]})}(t[0],e,a),H("fsh_titans",e)}function _t(t){"A"===t.target.tagName&&r("scoutTower","realmLink")}function jt(t){!function(t){const[a]=t.tr.cells[0].children
Y("scoutTower",a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function kt(t){!function(t){t.active&&pt(t)}(t),jt(t),function(t){const[,e]=t.tr.cells,s=i(e)
O(`<a href="${P}realms&search_name=${s}" target="_blank">${s}</a>`,e),a(e,_t)}(t)}function Ft(t){return(a=U("img",t)).getAttribute("oldtitle")||a.getAttribute("title")
var a}const xt=t=>({guildKills:Number(i(t.cells[3])),hp:"-",titanName:Q(Ft(t)),tr:t,visible:!0}),At=t=>({guildKills:Number(i(t.cells[3])),hp:i(t.cells[2]),titanName:Q(Ft(t)),tr:t,visible:!0}),$t=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Ct=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Kt(){if(M())return
const t=X(J,q())
if(!t?.length)return
ut(t)
const a="completed"===k("tab")?(t=>e(t[1],5,0)?.map(xt).map($t).map(Ct))(t):(t=>e(t[1],4,0)?.map(At).map($t).map(Ct))(t)
a&&(a.forEach(kt),Et(t,a))}export{Kt as default}
//# sourceMappingURL=injectScouttower-DHIBn7yu.js.map
