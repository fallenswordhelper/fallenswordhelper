import{bu as t,o as a,aX as e,a1 as s,aa as n,dc as l,s as r,aS as i,aT as c,l as o,x as u,A as d,B as f,D as b,E as p,K as h,L as m,a9 as v,aI as g,O as T,P as y,I as w,bz as N,db as _,aj as q,ak as S,aD as k,aG as j,bH as x,dd as E,bG as $,H as C,f as F,b_ as A,C as H,bN as B,de as I,bA as R,ao as D,bD as K,n as L,a2 as U,b4 as X,p as G,cs as P,d as z,bg as M,q as O,Y as Q,i as V}from"./calfSystem-UyQ_FKFu.js"
import{g as Y}from"./getTitle-C1xil_UC.js"
import{g as J,a as W,t as Z}from"./getTitanString-DrmoKrfx.js"
import{a as tt}from"./roundToString-C-C1er7O.js"
import{p as at}from"./parseDateAsTimestamp-uKlPe52O.js"
import{c as et}from"./closestTable-DwwUFwTi.js"
import{t as st}from"./toggleForce-br4z9gGd.js"
import"./dateUtc-DP8sjtiR.js"
const nt=t=>c(t.cells[0].children[0].href)
function lt(t){const{target:a}=t
l("[b]",a)&&function(t){t.previousElementSibling&&(r("scout tower","buffIndividual"),i(c(t.previousElementSibling.href)))}(a),l("all",a)&&function(t){const a=t.parentNode.parentNode.parentNode.parentNode,s=e(a,3,0).map(nt).join()
r("scout tower","buffAll"),i(s)}(a)}function rt(t){n("fshBl",t.target)&&lt(t)}function it(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function ct(t){e(t,3,0).forEach(it),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function ot(t,a){return t.rows.length>1&&a>1}function ut(e){e.length>2&&function(e){t(e).filter(ot).forEach(ct),a(e[1],rt)}(e)}function dt(t){const a=t.hp.split("/")
var e,n,l
s(t.tr.cells[3],(e=Number(o(t.tr.cells[3])),n=Number(a[0]),l=Number(a[1]),`<br><span class="fshBlue"> (${tt(W(l-n,e),2)}% Current <br>${tt(100*e/l,2)}% Total<br>${J(e,l,n)})`))}var ft=d('<tr><td class="svelte-1g6lyd8"> </td><td class="cd svelte-1g6lyd8"> </td><td class="svelte-1g6lyd8"> </td></tr>'),bt=d('<table class="svelte-1g6lyd8"><tbody><tr><td class="header svelte-1g6lyd8">Titan</td><td class="header svelte-1g6lyd8">Cooldown</td><td class="header svelte-1g6lyd8">Visible</td></tr><!></tbody></table>')
function pt(t,a){u(a,!0)
const e=([,t])=>t.coolTime>g(),s=([,t],[,a])=>t.coolTime-a.coolTime
var n=bt(),l=b(n),r=f(b(l))
p(r,17,()=>v(a.theTitans).filter(e).sort(s),([t,a])=>t,(t,a)=>{var e=N(()=>_(w(a),2))
let s=()=>w(e)[1]
var n=ft(),l=b(n),r=b(l),i=f(l),c=b(i),o=f(i),u=b(o)
T(()=>{y(r,w(e)[0]),y(c,s().cooldownText),y(u,s().seen)}),h(t,n)}),h(t,n),m()}function ht(t,a){r("TitanFilter","toggleCurrent"),a()}function mt(t,a){r("TitanFilter","toggleHistory"),a()}function vt(t,a){r("TitanFilter","toggleSecurable"),a()}function gt(t,a){r("TitanFilter","toggleTitan"),a()}var Tt=d('<label class="titan-label svelte-158q3i"><input type="checkbox"/> </label>'),yt=d('<div id="titan-list" class="svelte-158q3i"></div> <div class="svelte-158q3i"><!> <!></div>',1),wt=d('<table class="svelte-158q3i"><tbody><tr><td class="header svelte-158q3i" colspan="3"></td></tr><tr><td colspan="3" class="svelte-158q3i"><label class="svelte-158q3i"><input type="checkbox"/> Current</label> <label class="svelte-158q3i"><input type="checkbox"/> History</label> <label class="svelte-158q3i"><input type="checkbox"/> Securable</label></td></tr><tr><td class="header svelte-158q3i" colspan="3"></td></tr><tr><td colspan="3" class="svelte-158q3i"><!></td></tr><tr><td class="header svelte-158q3i" colspan="3"></td></tr></tbody></table>')
function Nt(a,e){u(e,!0)
const s="fsh_titanFilter"
let n=q(!0),l=q(!0),i=q(!1),c=q(S([]))
const o=([t],[a])=>A(t,a)
function d(t){return((t=>t.active&&w(n))(t)||(t=>!t.active&&w(l))(t))&&(({titanName:t})=>w(c).find(([a])=>a===t)[1])(t)&&(t=>t.securable||!w(i))(t)}function g([a,e]){const s=t(et(a.tr).rows),n=a.tr.rowIndex
s.slice(n,n+6).forEach(t=>st(t,!e)),a.visible=e}function D(){e.titanRows.map(t=>[t,d(t)]).filter(([t,a])=>t.visible!==a).forEach(g)}function K(){x(s,{current:E(w(n)),history:E(w(l)),securable:E(w(i)),titans:E(w(c))}),D()}function L(){r("TitanFilter","selectAll"),C(c,w(c).map(([t])=>[t,!0]),!0),K()}function U(){r("TitanFilter","selectNone"),C(c,w(c).map(([t])=>[t,!1]),!0),K()}var X=wt(),G=b(X),P=f(b(G)),z=b(P),M=b(z),O=b(M)
O.__change=[ht,K]
var Q=f(M,2),V=b(Q)
V.__change=[mt,K]
var Y=f(Q,2),J=b(Y)
J.__change=[vt,K]
var W=f(P,2),tt=b(W),at=b(tt)
k(at,async function(){const t=await $(s)
t&&(C(n,t.current,!0),C(l,t.history,!0),C(i,t.securable,!0),C(c,t.titans,!0)),C(c,v({...F(v(e.theTitans).map(([t])=>[t,!0])),...F(w(c).map(([t,a])=>[Z(t),a]))}).sort(o),!0),D()},null,t=>{var a=yt(),e=H(a)
p(e,21,()=>w(c),B,(t,a,e)=>{var s=N(()=>_(w(a),1))
var n=Tt(),l=b(n)
l.__change=[gt,K]
var r=f(l)
T(()=>y(r,` ${w(s)[0]??""}`)),j(l,()=>w(c)[e][1],t=>w(c)[e][1]=t),h(t,n)})
var s=f(e,2),n=b(s)
I(n,{onclick:L,children:(t,a)=>{var e=R("Select All")
h(t,e)}})
var l=f(n,2)
I(l,{onclick:U,children:(t,a)=>{var e=R("Select None")
h(t,e)}}),h(t,a)}),j(O,()=>w(n),t=>C(n,t)),j(V,()=>w(l),t=>C(l,t)),j(J,()=>w(i),t=>C(i,t)),h(a,X),m()}D(["change"])
var _t=d('<tr><td colspan="3"><!> <!></td></tr>')
function qt(t,a){var e=_t(),s=b(e),n=b(s)
pt(n,{get theTitans(){return a.theTitans}}),Nt(f(n,2),{get theTitans(){return a.theTitans},get titanRows(){return a.titanRows}}),h(t,e)}function St(t){const a=o(t.nextElementSibling.cells[0])
return{cooldownText:a,coolTime:(e=a,e?.includes("until")?at(e.replace("Cooldown until: ","")):0),seen:"yes"}
var e}const kt=({titanName:t,tr:a})=>[t,St(a)]
function jt(t,a){return F(v(t).map(([t,a])=>[Z(t),a]).filter(([t])=>!a[t]).filter(([,t])=>t.coolTime>g()).map(([t,a])=>[t,{...a,seen:"no"}]))}async function xt(t,a){const e=function(t,a){const e=F(K(a,"titanName").map(kt))
return{...e,...t&&jt(t,e)}}(await $("fsh_titans"),a)
t[0].rows.length>5&&function(t,a,e){L(qt,{anchor:t.rows[5],props:{theTitans:a,titanRows:e},target:t.children[0]})}(t[0],e,a),x("fsh_titans",e)}function Et(t){"A"===t.target.tagName&&r("scoutTower","realmLink")}function $t(t){!function(t){const e=encodeURIComponent(t.titanName),[s]=t.tr.cells[0].children,n=Q({href:`${M}creatures&search_name=${e}`,target:"_blank"})
a(n,()=>{r("scoutTower","guideLink")}),V(n,s),V(t.tr.cells[0],n)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function Ct(t){!function(t){t.active&&dt(t)}(t),$t(t),function(t){const[,e]=t.tr.cells,s=o(e)
z(`<a href="${M}realms&search_name=${s}" target="_blank">${s}</a>`,e),a(e,Et)}(t)}const Ft=t=>{return{guildKills:Number(o(t.cells[3])),hp:o(t.cells[2]),titanName:Z((a=t,Y(O("img",a)))),tr:t,visible:!0}
var a},At=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Ht=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Bt(){if(U())return
const t=X(P,G())
if(!t?.length)return
ut(t)
const a=(t=>e(t[1],4,0)?.map(Ft).map(At).map(Ht))(t)
a&&(a.forEach(Ct),xt(t,a))}export{Bt as default}
//# sourceMappingURL=injectScouttower-D-Kja3BZ.js.map
