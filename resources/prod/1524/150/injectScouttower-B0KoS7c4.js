import{bk as t,o as a,aN as e,z as s,I as n,d8 as l,s as r,aI as i,aJ as c,aa as o,R as u,X as d,Y as f,Z as b,_ as h,a3 as m,a4 as p,H as v,ay as g,a7 as T,a8 as y,V as w,S as N,T as _,as as q,aw as S,by as k,d9 as j,bx as x,W as $,j as E,bS as F,au as H,da as A,bq as C,a6 as I,bH as R,bu as B,ad as X,A as K,aW as L,p as M,cm as U,h as V,b6 as W,q as z,v as D,i as J}from"./calfSystem-BGOTz8de.js"
import{g as Y}from"./getTitle-C1xil_UC.js"
import{g as Z,a as G,t as O}from"./getTitanString-DrmoKrfx.js"
import{a as P}from"./roundToString-CZ_XgZXq.js"
import{p as Q}from"./parseDateAsTimestamp-DRgS21SE.js"
import{c as tt}from"./closestTable-DjvmqHiL.js"
import{t as at}from"./toggleForce-br4z9gGd.js"
import"./dateUtc-DrUNGodL.js"
const et=t=>c(t.cells[0].children[0].href)
function st(t){const{target:a}=t
l("[b]",a)&&function(t){t.previousElementSibling&&(r("scout tower","buffIndividual"),i(c(t.previousElementSibling.href)))}(a),l("all",a)&&function(t){const a=t.parentNode.parentNode.parentNode.parentNode,s=e(a,3,0).map(et).join()
r("scout tower","buffAll"),i(s)}(a)}function nt(t){n("fshBl",t.target)&&st(t)}function lt(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function rt(t){e(t,3,0).forEach(lt),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function it(t,a){return t.rows.length>1&&a>1}function ct(e){e.length>2&&function(e){t(e).filter(it).forEach(rt),a(e[1],nt)}(e)}function ot(t){const a=t.hp.split("/")
var e,n,l
s(t.tr.cells[3],(e=Number(o(t.tr.cells[3])),n=Number(a[0]),l=Number(a[1]),`<br><span class="fshBlue"> (${P(G(l-n,e),2)}% Current <br>${P(100*e/l,2)}% Total<br>${Z(e,l,n)})`))}var ut=d('<tr><td class="svelte-1g6lyd8"> </td><td class="cd svelte-1g6lyd8"> </td><td class="svelte-1g6lyd8"> </td></tr>'),dt=d('<table class="svelte-1g6lyd8"><tbody><tr><td class="header svelte-1g6lyd8">Titan</td><td class="header svelte-1g6lyd8">Cooldown</td><td class="header svelte-1g6lyd8">Visible</td></tr><!></tbody></table>')
function ft(t,a){u(a,!0)
const e=([,t])=>t.coolTime>g(),s=([,t],[,a])=>t.coolTime-a.coolTime
var n=dt(),l=b(n),r=f(b(l))
h(r,17,(()=>v(a.theTitans).filter(e).sort(s)),(([t,a])=>t),((t,a)=>{let e=()=>w(a)[1]
var s=ut(),n=b(s),l=b(n),r=f(n),i=b(r),c=f(r),o=b(c)
T((()=>{y(l,w(a)[0]),y(i,e().cooldownText),y(o,e().seen)})),m(t,s)})),m(t,n),p()}function bt(t,a){r("TitanFilter","toggleCurrent"),a()}function ht(t,a){r("TitanFilter","toggleHistory"),a()}function mt(t,a){r("TitanFilter","toggleSecurable"),a()}function pt(t,a){r("TitanFilter","toggleTitan"),a()}var vt=d('<label class="titan-label svelte-158q3i"><input type="checkbox"> </label>'),gt=d('<div id="titan-list" class="svelte-158q3i"></div> <div class="svelte-158q3i"><!> <!></div>',1),Tt=d('<table class="svelte-158q3i"><tbody><tr><td class="header svelte-158q3i" colspan="3"></td></tr><tr><td colspan="3" class="svelte-158q3i"><label class="svelte-158q3i"><input type="checkbox"> Current</label> <label class="svelte-158q3i"><input type="checkbox"> History</label> <label class="svelte-158q3i"><input type="checkbox"> Securable</label></td></tr><tr><td class="header svelte-158q3i" colspan="3"></td></tr><tr><td colspan="3" class="svelte-158q3i"><!></td></tr><tr><td class="header svelte-158q3i" colspan="3"></td></tr></tbody></table>')
function yt(a,e){u(e,!0)
const s="fsh_titanFilter"
let n=N(!0),l=N(!0),i=N(!1),c=N(_([]))
const o=([t],[a])=>F(t,a),d=()=>k(s,{current:j(w(n)),history:j(w(l)),securable:j(w(i)),titans:j(w(c))}),g=({titanName:t})=>w(c).find((([a])=>a===t))[1],I=t=>t.active&&w(n),B=t=>!t.active&&w(l),X=t=>t.securable||!w(i)
function K(t){return(I(t)||B(t))&&g(t)&&X(t)}function L([a,e]){const s=t(tt(a.tr).rows),n=a.tr.rowIndex
s.slice(n,n+6).forEach((t=>at(t,!e))),a.visible=e}function M(){e.titanRows.map((t=>[t,K(t)])).filter((([t,a])=>t.visible!==a)).forEach(L)}function U(){d(),M()}function V(){r("TitanFilter","selectAll"),$(c,w(c).map((([t])=>[t,!0])),!0),U()}function W(){r("TitanFilter","selectNone"),$(c,w(c).map((([t])=>[t,!1])),!0),U()}var z=Tt(),D=b(z),J=f(b(D)),Y=b(J),Z=b(Y),G=b(Z)
G.__change=[bt,U]
var P=f(Z,2),Q=b(P)
Q.__change=[ht,U]
var et=f(P,2),st=b(et)
st.__change=[mt,U]
var nt=f(J,2),lt=b(nt),rt=b(lt)
q(rt,(async function(){const t=await x(s)
t&&($(n,t.current,!0),$(l,t.history,!0),$(i,t.securable,!0),$(c,t.titans,!0)),$(c,v({...E(v(e.theTitans).map((([t])=>[t,!0]))),...E(w(c).map((([t,a])=>[O(t),a])))}).sort(o),!0),M()}),null,(t=>{var a=gt(),e=H(a)
h(e,21,(()=>w(c)),R,((t,a,e)=>{var s=vt(),n=b(s)
n.__change=[pt,U]
var l=f(n)
T((()=>y(l,` ${w(a)[0]??""}`))),S(n,(()=>w(c)[e][1]),(t=>w(c)[e][1]=t)),m(t,s)}))
var s=f(e,2),n=b(s)
A(n,{onclick:V,children:(t,a)=>{var e=C("Select All")
m(t,e)}})
var l=f(n,2)
A(l,{onclick:W,children:(t,a)=>{var e=C("Select None")
m(t,e)}}),m(t,a)})),S(G,(()=>w(n)),(t=>$(n,t))),S(Q,(()=>w(l)),(t=>$(l,t))),S(st,(()=>w(i)),(t=>$(i,t))),m(a,z),p()}I(["change"])
var wt=d('<tr><td colspan="3"><!> <!></td></tr>')
function Nt(t,a){var e=wt(),s=b(e),n=b(s)
ft(n,{get theTitans(){return a.theTitans}}),yt(f(n,2),{get theTitans(){return a.theTitans},get titanRows(){return a.titanRows}}),m(t,e)}function _t(t){const a=o(t.nextElementSibling.cells[0])
return{cooldownText:a,coolTime:(e=a,e?.includes("until")?Q(e.replace("Cooldown until: ","")):0),seen:"yes"}
var e}const qt=({titanName:t,tr:a})=>[t,_t(a)]
function St(t,a){return E(v(t).map((([t,a])=>[O(t),a])).filter((([t])=>!a[t])).filter((([,t])=>t.coolTime>g())).map((([t,a])=>[t,{...a,seen:"no"}])))}async function kt(t,a){const e=function(t,a){const e=E(B(a,"titanName").map(qt))
return{...e,...t&&St(t,e)}}(await x("fsh_titans"),a)
t[0].rows.length>5&&function(t,a,e){X(Nt,{anchor:t.rows[5],props:{theTitans:a,titanRows:e},target:t.children[0]})}(t[0],e,a),k("fsh_titans",e)}function jt(t){"A"===t.target.tagName&&r("scoutTower","realmLink")}function xt(t){!function(t){const e=encodeURIComponent(t.titanName),[s]=t.tr.cells[0].children,n=D({href:`${W}creatures&search_name=${e}`,target:"_blank"})
a(n,(()=>{r("scoutTower","guideLink")})),J(n,s),J(t.tr.cells[0],n)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function $t(t){!function(t){t.active&&ot(t)}(t),xt(t),function(t){const[,e]=t.tr.cells,s=o(e)
V(`<a href="${W}realms&search_name=${s}" target="_blank">${s}</a>`,e),a(e,jt)}(t)}const Et=t=>{return{guildKills:Number(o(t.cells[3])),hp:o(t.cells[2]),titanName:O((a=t,Y(z("img",a)))),tr:t,visible:!0}
var a},Ft=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Ht=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function At(){if(K())return
const t=L(U,M())
if(!t?.length)return
ct(t)
const a=(t=>e(t[1],4,0)?.map(Et).map(Ft).map(Ht))(t)
a&&(a.forEach($t),kt(t,a))}export{At as default}
//# sourceMappingURL=injectScouttower-B0KoS7c4.js.map
