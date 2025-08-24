import{bv as t,o as a,aY as e,a2 as n,ab as s,d6 as l,s as r,aT as i,aU as c,l as o,ap as u,a3 as f,b5 as m,p as b,ct as p,ar as h,d as g,bh as d,q as N,r as v,d7 as $,Z as w,i as S}from"./calfSystem-79LsojAC.js"
import{g as T,a as E,t as j}from"./getTitanString-DrmoKrfx.js"
import{a as k}from"./roundToString-CYi3Bm0q.js"
const A=t=>c(t.cells[0].children[0].href)
function B(t){const{target:a}=t
l("[b]",a)&&function(t){t.previousElementSibling&&(r("scout tower","buffIndividual"),i(c(t.previousElementSibling.href)))}(a),l("all",a)&&function(t){const a=t.parentNode.parentNode.parentNode.parentNode,n=e(a,3,0).map(A).join()
r("scout tower","buffAll"),i(n)}(a)}function _(t){s("fshBl",t.target)&&B(t)}function H(t){n(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function K(t){e(t,3,0).forEach(H),n(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function y(t,a){return t.rows.length>1&&a>1}function L(e){e.length>2&&function(e){t(e).filter(y).forEach(K),a(e[1],_)}(e)}function M(t){const a=t.hp.split("/")
var e,s,l
n(t.tr.cells[3],(e=Number(o(t.tr.cells[3])),s=Number(a[0]),l=Number(a[1]),`<br><span class="fshBlue"> (${k(E(l-s,e),2)}% Current <br>${k(100*e/l,2)}% Total<br>${T(e,l,s)})`))}function X(t){"A"===t.target.tagName&&r("scoutTower","realmLink")}function q(t){!function(t){const[e]=t.tr.cells[0].children,n=v($,e.src)
if(!n)return
const s=w({href:`${d}creatures&subcmd=view&creature_id=${n}`,target:"_blank"})
a(s,()=>{r("scoutTower","guideLink")}),S(s,e),S(t.tr.cells[0],s)}(t),function(t){n(t.tr.cells[0],t.titanName)}(t)}function x(t){!function(t){t.active&&M(t)}(t),q(t),function(t){const[,e]=t.tr.cells,n=o(e)
g(`<a href="${d}realms&search_name=${n}" target="_blank">${n}</a>`,e),a(e,X)}(t)}function C(t){return(a=N("img",t)).getAttribute("oldtitle")||a.getAttribute("title")
var a}u(["change"])
const I=t=>({guildKills:Number(o(t.cells[3])),hp:"-",titanName:j(C(t)),tr:t,visible:!0}),Q=t=>({guildKills:Number(o(t.cells[3])),hp:o(t.cells[2]),titanName:j(C(t)),tr:t,visible:!0}),U=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Y=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Z(){if(f())return
const t=m(p,b())
if(!t?.length)return
L(t)
const a=h("tab")
let n=[]
"active"===a?n=(t=>e(t[1],4,0)?.map(Q).map(U).map(Y))(t):"completed"===a&&(n=(t=>e(t[1],5,0)?.map(I).map(U).map(Y))(t)),n&&(n.forEach(x),async function(){}())}export{Z as default}
//# sourceMappingURL=injectScouttower-D9G2x8xb.js.map
