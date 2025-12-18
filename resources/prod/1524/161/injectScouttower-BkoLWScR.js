import{bz as t,o as a,aZ as e,a3 as s,ac as n,da as l,s as r,aU as o,aV as c,m as i,y as u,C as p,D as f,F as d,G as m,N as b,O as v,ab as h,aK as g,Q as T,R as w,K as N,cp as S,d8 as y,ak as z,al as E,H as _,aF as j,ar as k,E as x,bO as A,db as F,bQ as $,ap as C,J as H,bH as K,bI as R,f as B,b$ as I,dc as D,aI as X,bE as L,t as M,a4 as O,b6 as Q,p as U,cx as V,d as q,bb as G,q as J}from"./calfSystem-Cs6CSxoU.js"
import{g as W,a as Z,t as P}from"./getTitanString-DrmoKrfx.js"
import{u as Y}from"./ufsgMonsterLink-D3_86c6q.js"
import{a as tt}from"./roundToString-D6ZndNDA.js"
import{p as at}from"./parseDateAsTimestamp-DIsrnFMo.js"
import{c as et}from"./closestTable-CWRa1z_C.js"
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
m(r,17,()=>h(a.theTitans).filter(e).sort(s),([t,a])=>t,(t,a)=>{var e=S(()=>y(N(a),2))
let s=()=>N(e)[1]
var n=ft(),l=d(n),r=d(l),o=f(l),c=d(o),i=f(o),u=d(i)
T(()=>{w(r,N(e)[0]),w(c,s().cooldownText),w(u,s().seen)}),b(t,n)}),b(t,n),v()}var bt=p('<tr><td class="header svelte-rzcaop" colspan="3"></td></tr> <tr><td colspan="3" class="svelte-rzcaop"><label class="svelte-rzcaop"><input type="checkbox"/> Securable</label></td></tr>',1),vt=p('<label class="titan-label svelte-rzcaop"><input type="checkbox"/> </label>'),ht=p('<div id="titan-list" class="svelte-rzcaop"></div> <div class="svelte-rzcaop"><!> <!></div>',1),gt=p('<table class="svelte-rzcaop"><tbody><!><tr><td class="header svelte-rzcaop" colspan="3"></td></tr><tr><td colspan="3" class="svelte-rzcaop"><!></td></tr><tr><td class="header svelte-rzcaop" colspan="3"></td></tr></tbody></table>')
function Tt(a,e){u(e,!0)
const s="fsh_titanFilter"
let n=z(!1),l=z(E([]))
const o=([t],[a])=>I(t,a)
function c(t){return(({titanName:t})=>N(l).find(([a])=>a===t)[1])(t)&&(t=>t.securable||!N(n))(t)}function i([a,e]){const s=t(et(a.tr).rows),n=a.tr.rowIndex
s.slice(n,n+6).forEach(t=>st(t,!e)),a.visible=e}function p(){e.titanRows.map(t=>[t,c(t)]).filter(([t,a])=>t.visible!==a).forEach(i)}function g(){R(s,{securable:D(N(n)),titans:D(N(l))}),p()}function C(){r("TitanFilter","toggleSecurable"),g()}function L(){r("TitanFilter","toggleTitan"),g()}function M(){r("TitanFilter","selectAll"),H(l,N(l).map(([t])=>[t,!0]),!0),g()}function O(){r("TitanFilter","selectNone"),H(l,N(l).map(([t])=>[t,!1]),!0),g()}var Q=gt(),U=d(Q),V=d(U),q=t=>{var a=bt(),e=f(x(a),2),s=d(e),l=d(s),r=d(l)
r.__change=C,X(r,()=>N(n),t=>H(n,t)),b(t,a)}
_(V,t=>{"completed"!==k("tab")&&t(q)})
var G=f(V,2),J=d(G),W=d(J)
j(W,async function(){const t=await K(s)
t&&(H(n,t.securable,!0),H(l,t.titans,!0)),H(l,h({...B(h(e.theTitans).map(([t])=>[t,!0])),...B(N(l).map(([t,a])=>[P(t),a]))}).sort(o),!0),p()},null,t=>{var a=ht(),e=x(a)
m(e,21,()=>N(l),A,(t,a,e)=>{var s=S(()=>y(N(a),1))
var n=vt(),r=d(n)
r.__change=L
var o=f(r)
T(()=>w(o,` ${N(s)[0]??""}`)),X(r,()=>N(l)[e][1],t=>N(l)[e][1]=t),b(t,n)})
var s=f(e,2),n=d(s)
F(n,{onclick:M,children:(t,a)=>{var e=$("Select All")
b(t,e)}})
var r=f(n,2)
F(r,{onclick:O,children:(t,a)=>{var e=$("Select None")
b(t,e)}}),b(t,a)}),b(a,Q),v()}C(["change"])
var wt=p('<tr><td colspan="3"><!> <!></td></tr>')
function Nt(t,a){var e=wt(),s=d(e),n=d(s)
mt(n,{get theTitans(){return a.theTitans}}),Tt(f(n,2),{get theTitans(){return a.theTitans},get titanRows(){return a.titanRows}}),b(t,e)}function St(t){let a=i(t.nextElementSibling.cells[0])
return a.startsWith("Cooldown until: ")||(a=i(t.cells[4])),{cooldownText:a,coolTime:(e=a,e?.includes("until")?at(e.replace("Cooldown until: ","")):0),seen:"yes"}
var e}const yt=({titanName:t,tr:a})=>[t,St(a)]
function zt(t,a){return B(h(t).map(([t,a])=>[P(t),a]).filter(([t])=>!a[t]).filter(([,t])=>t.coolTime>g()).map(([t,a])=>[t,{...a,seen:"no"}]))}async function Et(t,a){const e=function(t,a){const e=B(L(a,"titanName").map(yt))
return{...e,...t&&zt(t,e)}}(await K("fsh_titans"),a)
t[0].rows.length>5&&function(t,a,e){M(Nt,{anchor:t.rows[5],props:{theTitans:a,titanRows:e},target:t.children[0]})}(t[0],e,a),R("fsh_titans",e)}function _t(t){"A"===t.target.tagName&&r("scoutTower","realmLink")}function jt(t){!function(t){const[a]=t.tr.cells[0].children
Y("scoutTower",a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function kt(t){!function(t){t.active&&pt(t)}(t),jt(t),function(t){const[,e]=t.tr.cells,s=i(e)
q(`<a href="${G}realms&search_name=${s}" target="_blank">${s}</a>`,e),a(e,_t)}(t)}function xt(t){return(a=J("img",t)).getAttribute("oldtitle")||a.getAttribute("title")
var a}const At=t=>({guildKills:Number(i(t.cells[3])),hp:"-",titanName:P(xt(t)),tr:t,visible:!0}),Ft=t=>({guildKills:Number(i(t.cells[3])),hp:i(t.cells[2]),titanName:P(xt(t)),tr:t,visible:!0}),$t=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Ct=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Ht(){if(O())return
const t=Q(V,U())
if(!t?.length)return
ut(t)
const a="completed"===k("tab")?(t=>e(t[1],5,0)?.map(At).map($t).map(Ct))(t):(t=>e(t[1],4,0)?.map(Ft).map($t).map(Ct))(t)
a&&(a.forEach(kt),Et(t,a))}export{Ht as default}
//# sourceMappingURL=injectScouttower-BkoLWScR.js.map
