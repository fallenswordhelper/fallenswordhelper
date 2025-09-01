import{bx as t,o as a,aZ as n,a2 as s,ab as e,da as l,s as r,aU as i,aV as o,l as c,ap as u,a3 as f,b6 as m,p,cy as b,ar as h,d as g,ba as d,q as N}from"./calfSystem-CQOGdqPv.js"
import{g as v,a as S,t as w}from"./getTitanString-DrmoKrfx.js"
import{u as $}from"./ufsgMonsterLink-B9Ds8rc0.js"
import{a as j}from"./roundToString-DBxc6kHT.js"
const E=t=>o(t.cells[0].children[0].href)
function T(t){const{target:a}=t
l("[b]",a)&&function(t){t.previousElementSibling&&(r("scout tower","buffIndividual"),i(o(t.previousElementSibling.href)))}(a),l("all",a)&&function(t){const a=t.parentNode.parentNode.parentNode.parentNode,s=n(a,3,0).map(E).join()
r("scout tower","buffAll"),i(s)}(a)}function y(t){e("fshBl",t.target)&&T(t)}function A(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function B(t){n(t,3,0).forEach(A),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function k(t,a){return t.rows.length>1&&a>1}function H(n){n.length>2&&function(n){t(n).filter(k).forEach(B),a(n[1],y)}(n)}function K(t){const a=t.hp.split("/")
var n,e,l
s(t.tr.cells[3],(n=Number(c(t.tr.cells[3])),e=Number(a[0]),l=Number(a[1]),`<br><span class="fshBlue"> (${j(S(l-e,n),2)}% Current <br>${j(100*n/l,2)}% Total<br>${v(n,l,e)})`))}function x(t){"A"===t.target.tagName&&r("scoutTower","realmLink")}function L(t){!function(t){const[a]=t.tr.cells[0].children
$("scoutTower",a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function M(t){!function(t){t.active&&K(t)}(t),L(t),function(t){const[,n]=t.tr.cells,s=c(n)
g(`<a href="${d}realms&search_name=${s}" target="_blank">${s}</a>`,n),a(n,x)}(t)}function U(t){return(a=N("img",t)).getAttribute("oldtitle")||a.getAttribute("title")
var a}u(["change"])
const X=t=>({guildKills:Number(c(t.cells[3])),hp:"-",titanName:w(U(t)),tr:t,visible:!0}),_=t=>({guildKills:Number(c(t.cells[3])),hp:c(t.cells[2]),titanName:w(U(t)),tr:t,visible:!0}),q=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),C=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function I(){if(f())return
const t=m(b,p())
if(!t?.length)return
H(t)
const a="completed"===h("tab")?(t=>n(t[1],5,0)?.map(X).map(q).map(C))(t):(t=>n(t[1],4,0)?.map(_).map(q).map(C))(t)
a&&(a.forEach(M),async function(){}())}export{I as default}
//# sourceMappingURL=injectScouttower-CsqQRsxa.js.map
