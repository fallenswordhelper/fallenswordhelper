import{bw as t,o as a,aZ as e,a3 as s,ac as n,dg as l,s as r,aU as i,aV as c,n as o,z as u,C as d,D as f,F as b,G as h,N as m,O as p,ab as v,aK as g,Q as T,R as y,K as w,bB as N,df as _,al as q,am as S,aF as F,aI as j,bJ as k,dh as x,bI as E,J as $,h as C,c0 as A,E as R,bP as B,di as H,bC as I,aq as K,bF as U,u as z,a4 as D,b6 as J,p as L,cw as O,e as V,bi as X,q as G,_ as M,i as P}from"./calfSystem-C1X5YxJZ.js"
import{g as Q}from"./getTitle-C1xil_UC.js"
import{g as Z,a as W,t as Y}from"./getTitanString-DrmoKrfx.js"
import{a as tt}from"./roundToString-BGDlzdGc.js"
import{p as at}from"./parseDateAsTimestamp-D6JycNAq.js"
import{c as et}from"./closestTable-STrxtv_E.js"
import{t as st}from"./toggleForce-br4z9gGd.js"
import"./dateUtc-BAc__vAC.js"
const nt=t=>c(t.cells[0].children[0].href)
function lt(t){const{target:a}=t
l("[b]",a)&&function(t){t.previousElementSibling&&(r("scout tower","buffIndividual"),i(c(t.previousElementSibling.href)))}(a),l("all",a)&&function(t){const a=t.parentNode.parentNode.parentNode.parentNode,s=e(a,3,0).map(nt).join()
r("scout tower","buffAll"),i(s)}(a)}function rt(t){n("fshBl",t.target)&&lt(t)}function it(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function ct(t){e(t,3,0).forEach(it),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function ot(t,a){return t.rows.length>1&&a>1}function ut(e){e.length>2&&function(e){t(e).filter(ot).forEach(ct),a(e[1],rt)}(e)}function dt(t){const a=t.hp.split("/")
var e,n,l
s(t.tr.cells[3],(e=Number(o(t.tr.cells[3])),n=Number(a[0]),l=Number(a[1]),`<br><span class="fshBlue"> (${tt(W(l-n,e),2)}% Current <br>${tt(100*e/l,2)}% Total<br>${Z(e,l,n)})`))}var ft=d('<tr><td class="svelte-1g6lyd8"> </td><td class="cd svelte-1g6lyd8"> </td><td class="svelte-1g6lyd8"> </td></tr>'),bt=d('<table class="svelte-1g6lyd8"><tbody><tr><td class="header svelte-1g6lyd8">Titan</td><td class="header svelte-1g6lyd8">Cooldown</td><td class="header svelte-1g6lyd8">Visible</td></tr><!></tbody></table>')
function ht(t,a){u(a,!0)
const e=([,t])=>t.coolTime>g(),s=([,t],[,a])=>t.coolTime-a.coolTime
var n=bt(),l=b(n),r=f(b(l))
h(r,17,(()=>v(a.theTitans).filter(e).sort(s)),(([t,a])=>t),((t,a)=>{var e=N((()=>_(w(a),2)))
let s=()=>w(e)[1]
var n=ft(),l=b(n),r=b(l),i=f(l),c=b(i),o=f(i),u=b(o)
T((()=>{y(r,w(e)[0]),y(c,s().cooldownText),y(u,s().seen)})),m(t,n)})),m(t,n),p()}function mt(t,a){r("TitanFilter","toggleCurrent"),a()}function pt(t,a){r("TitanFilter","toggleHistory"),a()}function vt(t,a){r("TitanFilter","toggleSecurable"),a()}function gt(t,a){r("TitanFilter","toggleTitan"),a()}var Tt=d('<label class="titan-label svelte-158q3i"><input type="checkbox"/> </label>'),yt=d('<div id="titan-list" class="svelte-158q3i"></div> <div class="svelte-158q3i"><!> <!></div>',1),wt=d('<table class="svelte-158q3i"><tbody><tr><td class="header svelte-158q3i" colspan="3"></td></tr><tr><td colspan="3" class="svelte-158q3i"><label class="svelte-158q3i"><input type="checkbox"/> Current</label> <label class="svelte-158q3i"><input type="checkbox"/> History</label> <label class="svelte-158q3i"><input type="checkbox"/> Securable</label></td></tr><tr><td class="header svelte-158q3i" colspan="3"></td></tr><tr><td colspan="3" class="svelte-158q3i"><!></td></tr><tr><td class="header svelte-158q3i" colspan="3"></td></tr></tbody></table>')
function Nt(a,e){u(e,!0)
const s="fsh_titanFilter"
let n=q(!0),l=q(!0),i=q(!1),c=q(S([]))
const o=([t],[a])=>A(t,a),d=()=>k(s,{current:x(w(n)),history:x(w(l)),securable:x(w(i)),titans:x(w(c))}),g=({titanName:t})=>w(c).find((([a])=>a===t))[1],K=t=>t.active&&w(n),U=t=>!t.active&&w(l),z=t=>t.securable||!w(i)
function D(t){return(K(t)||U(t))&&g(t)&&z(t)}function J([a,e]){const s=t(et(a.tr).rows),n=a.tr.rowIndex
s.slice(n,n+6).forEach((t=>st(t,!e))),a.visible=e}function L(){e.titanRows.map((t=>[t,D(t)])).filter((([t,a])=>t.visible!==a)).forEach(J)}function O(){d(),L()}function V(){r("TitanFilter","selectAll"),$(c,w(c).map((([t])=>[t,!0])),!0),O()}function X(){r("TitanFilter","selectNone"),$(c,w(c).map((([t])=>[t,!1])),!0),O()}var G=wt(),M=b(G),P=f(b(M)),Q=b(P),Z=b(Q),W=b(Z)
W.__change=[mt,O]
var tt=f(Z,2),at=b(tt)
at.__change=[pt,O]
var nt=f(tt,2),lt=b(nt)
lt.__change=[vt,O]
var rt=f(P,2),it=b(rt),ct=b(it)
F(ct,(async function(){const t=await E(s)
t&&($(n,t.current,!0),$(l,t.history,!0),$(i,t.securable,!0),$(c,t.titans,!0)),$(c,v({...C(v(e.theTitans).map((([t])=>[t,!0]))),...C(w(c).map((([t,a])=>[Y(t),a])))}).sort(o),!0),L()}),null,(t=>{var a=yt(),e=R(a)
h(e,21,(()=>w(c)),B,((t,a,e)=>{var s=N((()=>_(w(a),1)))
var n=Tt(),l=b(n)
l.__change=[gt,O]
var r=f(l)
T((()=>y(r,` ${w(s)[0]??""}`))),j(l,(()=>w(c)[e][1]),(t=>w(c)[e][1]=t)),m(t,n)}))
var s=f(e,2),n=b(s)
H(n,{onclick:V,children:(t,a)=>{var e=I("Select All")
m(t,e)}})
var l=f(n,2)
H(l,{onclick:X,children:(t,a)=>{var e=I("Select None")
m(t,e)}}),m(t,a)})),j(W,(()=>w(n)),(t=>$(n,t))),j(at,(()=>w(l)),(t=>$(l,t))),j(lt,(()=>w(i)),(t=>$(i,t))),m(a,G),p()}K(["change"])
var _t=d('<tr><td colspan="3"><!> <!></td></tr>')
function qt(t,a){var e=_t(),s=b(e),n=b(s)
ht(n,{get theTitans(){return a.theTitans}}),Nt(f(n,2),{get theTitans(){return a.theTitans},get titanRows(){return a.titanRows}}),m(t,e)}function St(t){const a=o(t.nextElementSibling.cells[0])
return{cooldownText:a,coolTime:(e=a,e?.includes("until")?at(e.replace("Cooldown until: ","")):0),seen:"yes"}
var e}const Ft=({titanName:t,tr:a})=>[t,St(a)]
function jt(t,a){return C(v(t).map((([t,a])=>[Y(t),a])).filter((([t])=>!a[t])).filter((([,t])=>t.coolTime>g())).map((([t,a])=>[t,{...a,seen:"no"}])))}async function kt(t,a){const e=function(t,a){const e=C(U(a,"titanName").map(Ft))
return{...e,...t&&jt(t,e)}}(await E("fsh_titans"),a)
t[0].rows.length>5&&function(t,a,e){z(qt,{anchor:t.rows[5],props:{theTitans:a,titanRows:e},target:t.children[0]})}(t[0],e,a),k("fsh_titans",e)}function xt(t){"A"===t.target.tagName&&r("scoutTower","realmLink")}function Et(t){!function(t){const e=encodeURIComponent(t.titanName),[s]=t.tr.cells[0].children,n=M({href:`${X}creatures&search_name=${e}`,target:"_blank"})
a(n,(()=>{r("scoutTower","guideLink")})),P(n,s),P(t.tr.cells[0],n)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function $t(t){!function(t){t.active&&dt(t)}(t),Et(t),function(t){const[,e]=t.tr.cells,s=o(e)
V(`<a href="${X}realms&search_name=${s}" target="_blank">${s}</a>`,e),a(e,xt)}(t)}const Ct=t=>{return{guildKills:Number(o(t.cells[3])),hp:o(t.cells[2]),titanName:Y((a=t,Q(G("img",a)))),tr:t,visible:!0}
var a},At=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Rt=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Bt(){if(D())return
const t=J(O,L())
if(!t?.length)return
ut(t)
const a=(t=>e(t[1],4,0)?.map(Ct).map(At).map(Rt))(t)
a&&(a.forEach($t),kt(t,a))}export{Bt as default}
//# sourceMappingURL=injectScouttower-CUkxrCLz.js.map
