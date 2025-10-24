import{by as t,o as a,aZ as e,a3 as s,ac as n,d9 as l,s as r,aU as o,aV as c,m as i,y as u,C as p,D as f,F as d,G as m,N as b,O as v,ab as h,aK as g,Q as T,R as w,K as N,bD as y,d8 as S,ak as z,al as E,H as _,aF as j,E as k,da as F,J as x,bK as A,bL as R,f as $,c1 as C,db as K,ar as H,bR as B,bE as D,ap as I,aI as L,bH as V,t as M,a4 as X,b6 as q,p as G,cy as J,d as O,bb as Q,q as U}from"./calfSystem-CIdPz3EO.js"
import{g as W,a as Z,t as P}from"./getTitanString-DrmoKrfx.js"
import{u as Y}from"./ufsgMonsterLink-CDeR8IZr.js"
import{a as tt}from"./roundToString-BsfZkzT8.js"
import{p as at}from"./parseDateAsTimestamp-ImOh-yob.js"
import{c as et}from"./closestTable-CLMP9U5y.js"
import{t as st}from"./toggleForce-br4z9gGd.js"
const nt=t=>c(t.cells[0].children[0].href)
function lt(t){const{target:a}=t
l("[b]",a)&&function(t){t.previousElementSibling&&(r("scout tower","buffIndividual"),o(c(t.previousElementSibling.href)))}(a),l("all",a)&&function(t){const a=t.parentNode.parentNode.parentNode.parentNode,s=e(a,3,0).map(nt).join()
r("scout tower","buffAll"),o(s)}(a)}function rt(t){n("fshBl",t.target)&&lt(t)}function ot(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function ct(t){e(t,3,0).forEach(ot),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function it(t,a){return t.rows.length>1&&a>1}function ut(e){e.length>2&&function(e){t(e).filter(it).forEach(ct),a(e[1],rt)}(e)}function pt(t){const a=t.hp.split("/")
var e,n,l
s(t.tr.cells[3],(e=Number(i(t.tr.cells[3])),n=Number(a[0]),l=Number(a[1]),`<br><span class="fshBlue"> (${tt(Z(l-n,e),2)}% Current <br>${tt(100*e/l,2)}% Total<br>${W(e,l,n)})`))}var ft=p('<tr><td class="svelte-2mevpu"> </td><td class="cd svelte-2mevpu"> </td><td class="svelte-2mevpu"> </td></tr>'),dt=p('<table class="svelte-2mevpu"><tbody><tr><td class="header svelte-2mevpu">Titan</td><td class="header svelte-2mevpu">Cooldown</td><td class="header svelte-2mevpu">Visible</td></tr><!></tbody></table>')
function mt(t,a){u(a,!0)
const e=([,t])=>t.coolTime>g(),s=([,t],[,a])=>t.coolTime-a.coolTime
var n=dt(),l=d(n),r=f(d(l))
m(r,17,()=>h(a.theTitans).filter(e).sort(s),([t,a])=>t,(t,a)=>{var e=y(()=>S(N(a),2))
let s=()=>N(e)[1]
var n=ft(),l=d(n),r=d(l),o=f(l),c=d(o),i=f(o),u=d(i)
T(()=>{w(r,N(e)[0]),w(c,s().cooldownText),w(u,s().seen)}),b(t,n)}),b(t,n),v()}function bt(t,a){r("TitanFilter","toggleSecurable"),a()}function vt(t,a){r("TitanFilter","toggleTitan"),a()}var ht=p('<tr><td class="header svelte-rzcaop" colspan="3"></td></tr> <tr><td colspan="3" class="svelte-rzcaop"><label class="svelte-rzcaop"><input type="checkbox"/> Securable</label></td></tr>',1),gt=p('<label class="titan-label svelte-rzcaop"><input type="checkbox"/> </label>'),Tt=p('<div id="titan-list" class="svelte-rzcaop"></div> <div class="svelte-rzcaop"><!> <!></div>',1),wt=p('<table class="svelte-rzcaop"><tbody><!><tr><td class="header svelte-rzcaop" colspan="3"></td></tr><tr><td colspan="3" class="svelte-rzcaop"><!></td></tr><tr><td class="header svelte-rzcaop" colspan="3"></td></tr></tbody></table>')
function Nt(a,e){u(e,!0)
const s="fsh_titanFilter"
let n=z(!1),l=z(E([]))
const o=([t],[a])=>C(t,a)
function c(t){return(({titanName:t})=>N(l).find(([a])=>a===t)[1])(t)&&(t=>t.securable||!N(n))(t)}function i([a,e]){const s=t(et(a.tr).rows),n=a.tr.rowIndex
s.slice(n,n+6).forEach(t=>st(t,!e)),a.visible=e}function p(){e.titanRows.map(t=>[t,c(t)]).filter(([t,a])=>t.visible!==a).forEach(i)}function g(){R(s,{securable:K(N(n)),titans:K(N(l))}),p()}function I(){r("TitanFilter","selectAll"),x(l,N(l).map(([t])=>[t,!0]),!0),g()}function V(){r("TitanFilter","selectNone"),x(l,N(l).map(([t])=>[t,!1]),!0),g()}var M=wt(),X=d(M),q=d(X),G=t=>{var a=ht(),e=f(k(a),2),s=d(e),l=d(s),r=d(l)
r.__change=[bt,g],L(r,()=>N(n),t=>x(n,t)),b(t,a)}
_(q,t=>{"completed"!==H("tab")&&t(G)})
var J=f(q,2),O=d(J),Q=d(O)
j(Q,async function(){const t=await A(s)
t&&(x(n,t.securable,!0),x(l,t.titans,!0)),x(l,h({...$(h(e.theTitans).map(([t])=>[t,!0])),...$(N(l).map(([t,a])=>[P(t),a]))}).sort(o),!0),p()},null,t=>{var a=Tt(),e=k(a)
m(e,21,()=>N(l),B,(t,a,e)=>{var s=y(()=>S(N(a),1))
var n=gt(),r=d(n)
r.__change=[vt,g]
var o=f(r)
T(()=>w(o,` ${N(s)[0]??""}`)),L(r,()=>N(l)[e][1],t=>N(l)[e][1]=t),b(t,n)})
var s=f(e,2),n=d(s)
F(n,{onclick:I,children:(t,a)=>{var e=D("Select All")
b(t,e)}})
var r=f(n,2)
F(r,{onclick:V,children:(t,a)=>{var e=D("Select None")
b(t,e)}}),b(t,a)}),b(a,M),v()}I(["change"])
var yt=p('<tr><td colspan="3"><!> <!></td></tr>')
function St(t,a){var e=yt(),s=d(e),n=d(s)
mt(n,{get theTitans(){return a.theTitans}}),Nt(f(n,2),{get theTitans(){return a.theTitans},get titanRows(){return a.titanRows}}),b(t,e)}function zt(t){let a=i(t.nextElementSibling.cells[0])
return a.startsWith("Cooldown until: ")||(a=i(t.cells[4])),{cooldownText:a,coolTime:(e=a,e?.includes("until")?at(e.replace("Cooldown until: ","")):0),seen:"yes"}
var e}const Et=({titanName:t,tr:a})=>[t,zt(a)]
function _t(t,a){return $(h(t).map(([t,a])=>[P(t),a]).filter(([t])=>!a[t]).filter(([,t])=>t.coolTime>g()).map(([t,a])=>[t,{...a,seen:"no"}]))}async function jt(t,a){const e=function(t,a){const e=$(V(a,"titanName").map(Et))
return{...e,...t&&_t(t,e)}}(await A("fsh_titans"),a)
t[0].rows.length>5&&function(t,a,e){M(St,{anchor:t.rows[5],props:{theTitans:a,titanRows:e},target:t.children[0]})}(t[0],e,a),R("fsh_titans",e)}function kt(t){"A"===t.target.tagName&&r("scoutTower","realmLink")}function Ft(t){!function(t){const[a]=t.tr.cells[0].children
Y("scoutTower",a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function xt(t){!function(t){t.active&&pt(t)}(t),Ft(t),function(t){const[,e]=t.tr.cells,s=i(e)
O(`<a href="${Q}realms&search_name=${s}" target="_blank">${s}</a>`,e),a(e,kt)}(t)}function At(t){return(a=U("img",t)).getAttribute("oldtitle")||a.getAttribute("title")
var a}const Rt=t=>({guildKills:Number(i(t.cells[3])),hp:"-",titanName:P(At(t)),tr:t,visible:!0}),$t=t=>({guildKills:Number(i(t.cells[3])),hp:i(t.cells[2]),titanName:P(At(t)),tr:t,visible:!0}),Ct=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Kt=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Ht(){if(X())return
const t=q(J,G())
if(!t?.length)return
ut(t)
const a="completed"===H("tab")?(t=>e(t[1],5,0)?.map(Rt).map(Ct).map(Kt))(t):(t=>e(t[1],4,0)?.map($t).map(Ct).map(Kt))(t)
a&&(a.forEach(xt),jt(t,a))}export{Ht as default}
//# sourceMappingURL=injectScouttower-DlasL-_q.js.map
