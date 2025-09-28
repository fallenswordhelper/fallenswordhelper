import{bw as t,o as a,aY as n,a2 as s,ab as e,d9 as l,s as r,aT as i,aU as o,l as c,ao as u,a3 as f,b5 as m,p,cx as b,aq as h,d as g,b9 as d,q as N}from"./calfSystem-CIuUjh4H.js"
import{g as v,a as w,t as S}from"./getTitanString-DrmoKrfx.js"
import{u as T}from"./ufsgMonsterLink-CSsHS1re.js"
import{a as $}from"./roundToString-HX3cLryI.js"
const j=t=>o(t.cells[0].children[0].href)
function E(t){const{target:a}=t
l("[b]",a)&&function(t){t.previousElementSibling&&(r("scout tower","buffIndividual"),i(o(t.previousElementSibling.href)))}(a),l("all",a)&&function(t){const a=t.parentNode.parentNode.parentNode.parentNode,s=n(a,3,0).map(j).join()
r("scout tower","buffAll"),i(s)}(a)}function A(t){e("fshBl",t.target)&&E(t)}function B(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function k(t){n(t,3,0).forEach(B),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function H(t,a){return t.rows.length>1&&a>1}function K(n){n.length>2&&function(n){t(n).filter(H).forEach(k),a(n[1],A)}(n)}function q(t){const a=t.hp.split("/")
var n,e,l
s(t.tr.cells[3],(n=Number(c(t.tr.cells[3])),e=Number(a[0]),l=Number(a[1]),`<br><span class="fshBlue"> (${$(w(l-e,n),2)}% Current <br>${$(100*n/l,2)}% Total<br>${v(n,l,e)})`))}function x(t){"A"===t.target.tagName&&r("scoutTower","realmLink")}function y(t){!function(t){const[a]=t.tr.cells[0].children
T("scoutTower",a)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function L(t){!function(t){t.active&&q(t)}(t),y(t),function(t){const[,n]=t.tr.cells,s=c(n)
g(`<a href="${d}realms&search_name=${s}" target="_blank">${s}</a>`,n),a(n,x)}(t)}function M(t){return(a=N("img",t)).getAttribute("oldtitle")||a.getAttribute("title")
var a}u(["change"])
const U=t=>({guildKills:Number(c(t.cells[3])),hp:"-",titanName:S(M(t)),tr:t,visible:!0}),X=t=>({guildKills:Number(c(t.cells[3])),hp:c(t.cells[2]),titanName:S(M(t)),tr:t,visible:!0}),_=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),z=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function C(){if(f())return
const t=m(b,p())
if(!t?.length)return
K(t)
const a="completed"===h("tab")?(t=>n(t[1],5,0)?.map(U).map(_).map(z))(t):(t=>n(t[1],4,0)?.map(X).map(_).map(z))(t)
a&&(a.forEach(L),async function(){}())}export{C as default}
//# sourceMappingURL=injectScouttower-Bmhba6nJ.js.map
